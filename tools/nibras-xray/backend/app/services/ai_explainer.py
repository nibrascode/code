import os
import httpx
from typing import Dict, Any
from app.models.schemas import ProjectAnalysisResult, AIExplainRequest, ImpactSimulationResponse
from app.services.graph_engine import simulate_change_impact, generate_auto_refactor_patches, compare_project_snapshots


def generate_grounded_explanation(
    analysis: ProjectAnalysisResult, req: AIExplainRequest
) -> Dict[str, Any]:
    """
    Provider-independent AI Code Explainer.
    1. Builds a 100% AST-grounded context payload from the analyzed project.
    2. If `req.consent_external_ai` is True and `req.provider` is 'openai', 'anthropic', or 'gemini',
       dispatches the grounded prompt to the configured server-side LLM API key via httpx.
    3. Otherwise (or if no external key is set), returns the deterministic AST-grounded explanation.
    """
    local_result = _build_deterministic_ast_explanation(analysis, req)

    if not req.consent_external_ai or req.provider == "local_deterministic":
        return local_result

    # External provider dispatch (keys strictly on server)
    system_prompt = (
        "You are Nibras X-Ray AI Code Explainer. Answer strictly using the provided AST analysis context. "
        "Never invent functions, files, or errors."
    )
    user_prompt = f"AST Context:\n{local_result['response']}\n\nUser Question: {req.user_question or req.query_type}"

    try:
        if req.provider == "openai" and os.getenv("OPENAI_API_KEY"):
            resp = httpx.post(
                "https://api.openai.com/v1/chat/completions",
                headers={"Authorization": f"Bearer {os.environ['OPENAI_API_KEY']}"},
                json={
                    "model": "gpt-4o-mini",
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_prompt},
                    ],
                    "temperature": 0.1,
                },
                timeout=15.0,
            )
            resp.raise_for_status()
            content = resp.json()["choices"][0]["message"]["content"]
            return {"provider_used": "openai:gpt-4o-mini", "grounded": True, "response": content}

        if req.provider == "gemini" and os.getenv("GEMINI_API_KEY"):
            key = os.environ["GEMINI_API_KEY"]
            resp = httpx.post(
                f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={key}",
                json={"contents": [{"parts": [{"text": f"{system_prompt}\n\n{user_prompt}"}]}]},
                timeout=15.0,
            )
            resp.raise_for_status()
            content = resp.json()["candidates"][0]["content"]["parts"][0]["text"]
            return {"provider_used": "gemini:gemini-2.5-flash", "grounded": True, "response": content}
    except Exception as exc:
        local_result["external_fallback_reason"] = f"External provider call failed ({exc}); fell back to local AST engine."
        return local_result

    local_result["external_fallback_reason"] = (
        f"Server environment variable for provider '{req.provider}' is not configured; used local AST engine."
    )
    return local_result


def _build_deterministic_ast_explanation(
    analysis: ProjectAnalysisResult, req: AIExplainRequest
) -> Dict[str, Any]:
    qtype = req.query_type
    target_id = req.target_id

    if qtype == "function" and target_id:
        fn = next((f for f in analysis.functions if f.id == target_id or f.qualified_name == target_id), None)
        if not fn:
            return {
                "provider_used": "local_deterministic_ast",
                "grounded": True,
                "response": f"Function '{target_id}' was not found in the analyzed AST of project '{analysis.project_name}'.",
            }
        params_str = ", ".join(
            f"{p.name}: {p.type_annotation or 'untyped'}" + (f" = {p.default_value}" if p.default_value else "")
            for p in fn.parameters
        ) or "none"
        callees = ", ".join(fn.calls) if fn.calls else "none (leaf function)"
        callers = ", ".join(fn.called_by) if fn.called_by else "no internal callers detected"
        reads = ", ".join(fn.variables_read) if fn.variables_read else "none"
        mods = ", ".join(fn.variables_Modified) if fn.variables_Modified else "none"

        text = (
            f"### AST Grounded Function Analysis: `{fn.qualified_name}`\n"
            f"- **Location**: `{fn.file_path}` (Lines {fn.start_line}–{fn.end_line}, {fn.loc} LOC)\n"
            f"- **Signature & Parameters**: `({params_str}) -> {fn.return_type or 'inferred'}`\n"
            f"- **Cyclomatic Complexity**: `{fn.cyclomatic_complexity}` "
            f"({'High — consider decomposing branches' if fn.cyclomatic_complexity >= 8 else 'Healthy modular complexity'})\n"
            f"- **Outgoing Calls (Callees)**: `{callees}`\n"
            f"- **Incoming Callers**: `{callers}`\n"
            f"- **Variables Read**: `{reads}` | **Variables Modified**: `{mods}`"
        )
        return {"provider_used": "local_deterministic_ast", "grounded": True, "response": text}

    if qtype == "impact" and target_id:
        sim: ImpactSimulationResponse = simulate_change_impact(
            target_id, analysis.functions, analysis.dependency_graph
        )
        text = (
            f"### Change Impact Simulation for `{sim.target_id}`\n"
            f"- **Blast Radius Risk Level**: **{sim.risk_level.upper()}**\n"
            f"- **Direct Dependents ({len(sim.direct_dependents)})**: {', '.join(f'`{d}`' for d in sim.direct_dependents) or 'None'}\n"
            f"- **Transitive Dependents ({len(sim.transitive_dependents)})**: {', '.join(f'`{t}`' for t in sim.transitive_dependents) or 'None'}\n"
            f"- **Affected Files ({len(sim.affected_files)})**: {', '.join(f'`{f}`' for f in sim.affected_files)}\n\n"
            f"**Architectural Guidance**: {sim.explanation}"
        )
        return {"provider_used": "local_deterministic_ast", "grounded": True, "response": text}

    if qtype == "error":
        diags = analysis.diagnostics
        secs = analysis.security_findings
        if target_id:
            diags = [d for d in diags if d.id == target_id or d.file_path == target_id]
            secs = [s for s in secs if s.id == target_id or s.file_path == target_id]
        lines_out = ["### Verified Diagnostics & Security Remediation Plan"]
        for s in secs[:5]:
            lines_out.append(
                f"- **[SECURITY - {s.severity.upper()} | {s.confidence}]** `{s.file_path}:{s.line}` — **{s.title}** ({s.cwe_id})\n"
                f"  - *Why*: {s.description}\n"
                f"  - *Fix*: {s.remediation}"
            )
        for d in diags[:5]:
            lines_out.append(
                f"- **[{d.severity.upper()} | {d.rule_id}]** `{d.file_path}:{d.line}` — {d.message}\n"
                f"  - *Explanation*: {d.explanation}\n"
                f"  - *Fix*: {d.suggested_fix}"
            )
        if len(lines_out) == 1:
            lines_out.append("No errors or security findings matched the selected filter.")
        return {"provider_used": "local_deterministic_ast", "grounded": True, "response": "\n".join(lines_out)}

    if qtype == "refactor":
        hotspots = analysis.heatmap[:3]
        lines_out = ["### Evidence-Based Refactoring Recommendations"]
        for h in hotspots:
            lines_out.append(
                f"1. **`{h.file_path}`** (Hotspot Score: `{h.hotspot_score}/100`, Max CC: `{h.max_cyclomatic_complexity}`, LOC: `{h.loc}`)\n"
                f"   - *Drivers*: {', '.join(h.hotspot_reasons) or 'Baseline module'}\n"
                f"   - *Action*: Extract high-branching helper routines to bring Cyclomatic Complexity below 8 and decouple shared imports."
            )
        if analysis.dependency_graph.circular_dependencies:
            for cyc in analysis.dependency_graph.circular_dependencies:
                lines_out.append(
                    f"- **Break Circular Dependency**: `{' -> '.join(cyc)}` by extracting shared interfaces/types into a dedicated leaf module."
                )
        return {"provider_used": "local_deterministic_ast", "grounded": True, "response": "\n".join(lines_out)}

    h = analysis.health
    cycles_str = (
        "; ".join(" -> ".join(c) for c in analysis.dependency_graph.circular_dependencies)
        if analysis.dependency_graph.circular_dependencies
        else "None detected"
    )
    text = (
        f"### Project Architecture Summary: `{analysis.project_name}`\n"
        f"- **Codebase Scale**: {h.total_files} files, {h.total_loc} lines of code across {', '.join(f'{k} ({v} LOC)' for k, v in h.languages_breakdown.items())}\n"
        f"- **Structural Units**: {h.total_functions} functions/methods, {h.total_classes} classes, {h.total_variables_tracked} tracked variables\n"
        f"- **Module Coupling**: {h.internal_dependencies} internal imports, {len(h.external_dependencies)} external packages ({', '.join(h.external_dependencies) or 'none'})\n"
        f"- **Circular Dependencies**: {h.circular_dependency_count} cycle(s) ({cycles_str})\n"
        f"- **Maintainability Index**: `{h.maintainability_index}/100` (Avg CC: `{h.avg_cyclomatic_complexity}`, Max CC: `{h.max_cyclomatic_complexity}`)\n"
        f"- **Risk Profile**: {h.syntax_error_count} syntax errors, {h.static_warning_count} static warnings, "
        f"{h.confirmed_security_count} confirmed security findings, {h.potential_security_count} potential security risks."
    )
    return {"provider_used": "local_deterministic_ast", "grounded": True, "response": text}
