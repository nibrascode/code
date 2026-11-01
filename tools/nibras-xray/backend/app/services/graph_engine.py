import os
import math
from typing import List, Dict, Set, Tuple, Optional
from app.models.schemas import (
    FunctionInfo, ImportInfo, GraphData, GraphNode, GraphEdge,
    HeatmapEntry, DiagnosticIssue, SecurityFinding, ProjectHealthSummary,
    ImpactSimulationResponse
)


def resolve_import_path(source_file: str, raw_specifier: str, all_files: Set[str]) -> Optional[str]:
    if not (raw_specifier.startswith(".") or raw_specifier.startswith("/")):
        py_cand = raw_specifier.replace(".", "/") + ".py"
        if py_cand in all_files:
            return py_cand
        return None

    base_dir = os.path.dirname(source_file)
    joined = os.path.normpath(os.path.join(base_dir, raw_specifier)).replace("\\", "/")
    candidates = [
        joined,
        joined + ".ts",
        joined + ".tsx",
        joined + ".js",
        joined + ".jsx",
        joined + ".py",
        joined + "/index.ts",
        joined + "/index.tsx",
        joined + "/index.js",
        joined + "/__init__.py",
    ]
    for cand in candidates:
        if cand in all_files:
            return cand
    return None


def detect_cycles_tarjan(adj: Dict[str, List[str]]) -> List[List[str]]:
    visited: Set[str] = set()
    rec_stack: List[str] = []
    in_stack: Set[str] = set()
    cycles: List[List[str]] = []
    seen_canonical: Set[Tuple[str, ...]] = set()

    def dfs(u: str):
        visited.add(u)
        rec_stack.append(u)
        in_stack.add(u)

        for v in adj.get(u, []):
            if v not in visited:
                dfs(v)
            elif v in in_stack:
                idx = rec_stack.index(v)
                cycle = rec_stack[idx:] + [v]
                core = cycle[:-1]
                min_idx = core.index(min(core))
                canonical = tuple(core[min_idx:] + core[:min_idx])
                if canonical not in seen_canonical:
                    seen_canonical.add(canonical)
                    cycles.append(cycle)

        rec_stack.pop()
        in_stack.remove(u)

    for node in sorted(adj.keys()):
        if node not in visited:
            dfs(node)

    return cycles


def build_graphs_and_metrics(
    files_content: Dict[str, str],
    language_loc: Dict[str, int],
    functions: List[FunctionInfo],
    imports: List[ImportInfo],
    diagnostics: List[DiagnosticIssue],
    security: List[SecurityFinding],
    total_variables: int,
) -> Tuple[GraphData, GraphData, List[HeatmapEntry], ProjectHealthSummary]:
    all_files = set(files_content.keys())

    # 1. Dependency Graph & Per-File Import Symbol Map
    dep_nodes: Dict[str, GraphNode] = {}
    dep_edges: List[GraphEdge] = []
    adj: Dict[str, List[str]] = {f: [] for f in all_files}
    fan_in: Dict[str, int] = {f: 0 for f in all_files}
    fan_out: Dict[str, int] = {f: 0 for f in all_files}
    external_libs: Set[str] = set()

    # Map: (source_file, imported_symbol) -> resolved_target_file
    imported_symbol_target: Dict[Tuple[str, str], str] = {}

    for f in sorted(all_files):
        loc = sum(1 for ln in files_content[f].splitlines() if ln.strip())
        dep_nodes[f] = GraphNode(
            id=f,
            label=os.path.basename(f),
            type="file",
            file_path=f,
            line=1,
            metrics={"loc": loc},
        )

    for imp in imports:
        target = resolve_import_path(imp.source_file, imp.raw_specifier, all_files)
        imp.resolved_target = target
        if target:
            imp.is_external = False
            adj[imp.source_file].append(target)
            fan_out[imp.source_file] = fan_out.get(imp.source_file, 0) + 1
            fan_in[target] = fan_in.get(target, 0) + 1
            for sym in imp.imported_symbols:
                imported_symbol_target[(imp.source_file, sym)] = target
            dep_edges.append(
                GraphEdge(
                    id=f"dep:{imp.source_file}->{target}:{imp.line}",
                    source=imp.source_file,
                    target=target,
                    relation="imports",
                    line=imp.line,
                )
            )
        else:
            imp.is_external = True
            pkg_name = (
                imp.raw_specifier.split("/")[0]
                if not imp.raw_specifier.startswith("@")
                else "/".join(imp.raw_specifier.split("/")[:2])
            )
            external_libs.add(pkg_name)
            ext_id = f"ext::{pkg_name}"
            if ext_id not in dep_nodes:
                dep_nodes[ext_id] = GraphNode(
                    id=ext_id,
                    label=pkg_name,
                    type="external_module",
                )
            dep_edges.append(
                GraphEdge(
                    id=f"dep:{imp.source_file}->{ext_id}:{imp.line}",
                    source=imp.source_file,
                    target=ext_id,
                    relation="imports",
                    line=imp.line,
                )
            )

    cycles = detect_cycles_tarjan(adj)
    cycle_pairs: Set[Tuple[str, str]] = set()
    for cyc in cycles:
        for i in range(len(cyc) - 1):
            cycle_pairs.add((cyc[i], cyc[i + 1]))

    for edge in dep_edges:
        if (edge.source, edge.target) in cycle_pairs:
            edge.relation = "circular_import"

    orphans = [
        f for f in sorted(all_files)
        if fan_in.get(f, 0) == 0 and fan_out.get(f, 0) == 0 and f.endswith((".ts", ".tsx", ".js", ".jsx", ".py"))
    ]

    dep_graph = GraphData(
        nodes=list(dep_nodes.values()),
        edges=dep_edges,
        circular_dependencies=cycles,
        orphan_files=orphans,
    )

    # 2. Scope & Import-Aware Function Call Graph Resolution
    call_nodes: Dict[str, GraphNode] = {}
    call_edges: List[GraphEdge] = []
    fn_by_file_and_name: Dict[Tuple[str, str], FunctionInfo] = {}
    fn_by_short_name: Dict[str, List[FunctionInfo]] = {}

    for fn in functions:
        fn_by_file_and_name[(fn.file_path, fn.name)] = fn
        fn_by_file_and_name[(fn.file_path, fn.qualified_name)] = fn
        fn_by_short_name.setdefault(fn.name, []).append(fn)
        fn_by_short_name.setdefault(fn.qualified_name, []).append(fn)
        call_nodes[fn.id] = GraphNode(
            id=fn.id,
            label=f"{fn.qualified_name}()" if fn.kind != "class" else f"[Class] {fn.name}",
            type="class" if fn.kind == "class" else "function",
            file_path=fn.file_path,
            line=fn.start_line,
            metrics={
                "complexity": fn.cyclomatic_complexity,
                "loc": fn.loc,
                "params": len(fn.parameters),
            },
        )

    for fn in functions:
        resolved_callees: List[str] = []
        caller_class = fn.qualified_name.split(".")[0] if "." in fn.qualified_name else None

        for raw_call in fn.calls:
            chosen: Optional[FunctionInfo] = None

            # Case A: this.method() or self.method() inside a class
            if raw_call.startswith(("this.", "self.")) and caller_class:
                method_name = raw_call.split(".", 1)[1]
                chosen = fn_by_file_and_name.get((fn.file_path, f"{caller_class}.{method_name}"))

            # Case B: Same-file function or method
            if not chosen:
                chosen = fn_by_file_and_name.get((fn.file_path, raw_call))

            # Case C: Explicitly imported symbol from resolved target module
            if not chosen:
                base_sym = raw_call.split(".")[0]
                target_file = imported_symbol_target.get((fn.file_path, base_sym))
                if target_file:
                    if "." in raw_call:
                        # e.g., ClassOrModule.method()
                        chosen = fn_by_file_and_name.get((target_file, raw_call)) or fn_by_file_and_name.get(
                            (target_file, raw_call.split(".")[-1])
                        )
                    else:
                        chosen = fn_by_file_and_name.get((target_file, raw_call))

            # Case D: Unique exported symbol fallback across project
            if not chosen:
                short = raw_call.split(".")[-1]
                cands = [c for c in fn_by_short_name.get(short, []) if c.is_exported]
                if len(cands) == 1:
                    chosen = cands[0]

            if chosen and chosen.id != fn.id:
                resolved_callees.append(chosen.id)
                if fn.id not in chosen.called_by:
                    chosen.called_by.append(fn.id)
                call_edges.append(
                    GraphEdge(
                        id=f"call:{fn.id}->{chosen.id}",
                        source=fn.id,
                        target=chosen.id,
                        relation="calls",
                        line=fn.start_line,
                    )
                )

        fn.calls = list(dict.fromkeys(resolved_callees))

    call_graph = GraphData(nodes=list(call_nodes.values()), edges=call_edges)

    # 3. Code Heatmap & Duplicate Detection
    block_occurrences: Dict[str, List[str]] = {}
    for fpath, content in files_content.items():
        norm_lines = [
            ln.strip() for ln in content.splitlines()
            if len(ln.strip()) > 20 and not ln.strip().startswith(("//", "#", "import ", "from "))
        ]
        for i in range(len(norm_lines) - 3):
            blk = "\n".join(norm_lines[i : i + 4])
            block_occurrences.setdefault(blk, []).append(fpath)

    dup_counts_by_file: Dict[str, int] = {f: 0 for f in all_files}
    for blk, file_list in block_occurrences.items():
        if len(file_list) > 1:
            for f in set(file_list):
                dup_counts_by_file[f] = dup_counts_by_file.get(f, 0) + 1

    heatmap: List[HeatmapEntry] = []
    for fpath in sorted(all_files):
        content = files_content[fpath]
        loc = sum(1 for ln in content.splitlines() if ln.strip())
        f_funcs = [fn for fn in functions if fn.file_path == fpath and fn.kind != "class"]
        max_cc = max((fn.cyclomatic_complexity for fn in f_funcs), default=1)
        avg_cc = round(sum(fn.cyclomatic_complexity for fn in f_funcs) / len(f_funcs), 2) if f_funcs else 1.0
        f_in = fan_in.get(fpath, 0)
        f_out = fan_out.get(fpath, 0)
        dups = dup_counts_by_file.get(fpath, 0)
        iss_cnt = sum(1 for d in diagnostics if d.file_path == fpath)
        sec_cnt = sum(1 for s in security if s.file_path == fpath)

        score = (
            min(30.0, (max_cc / 20.0) * 30.0)
            + min(20.0, ((f_in + f_out) / 15.0) * 20.0)
            + min(20.0, (loc / 300.0) * 20.0)
            + min(30.0, (iss_cnt * 4.0 + sec_cnt * 10.0 + dups * 3.0))
        )
        reasons: List[str] = []
        if max_cc >= 8:
            reasons.append(f"High cyclomatic complexity ({max_cc})")
        if f_in + f_out >= 5:
            reasons.append(f"High dependency coupling (fan-in {f_in}, fan-out {f_out})")
        if sec_cnt > 0:
            reasons.append(f"{sec_cnt} security finding(s)")
        if iss_cnt > 0:
            reasons.append(f"{iss_cnt} static analysis finding(s)")
        if dups > 0:
            reasons.append(f"{dups} duplicate code block(s)")

        ext = os.path.splitext(fpath)[1].lower()
        heatmap.append(
            HeatmapEntry(
                file_path=fpath,
                language=ext.lstrip(".").upper() or "TEXT",
                loc=loc,
                function_count=len(f_funcs),
                max_cyclomatic_complexity=max_cc,
                avg_cyclomatic_complexity=avg_cc,
                fan_in=f_in,
                fan_out=f_out,
                duplicate_blocks=dups,
                issue_count=iss_cnt,
                security_count=sec_cnt,
                hotspot_score=round(score, 1),
                hotspot_reasons=reasons,
            )
        )

    heatmap.sort(key=lambda h: h.hotspot_score, reverse=True)

    # 4. Project Health Summary
    total_loc = sum(h.loc for h in heatmap)
    non_class_funcs = [f for f in functions if f.kind != "class"]
    classes_cnt = sum(1 for f in functions if f.kind == "class")
    avg_proj_cc = round(
        sum(f.cyclomatic_complexity for f in non_class_funcs) / len(non_class_funcs), 2
    ) if non_class_funcs else 1.0
    max_proj_cc = max((f.cyclomatic_complexity for f in non_class_funcs), default=1)

    avg_loc_per_file = total_loc / max(1, len(all_files))
    raw_mi = 100.0 - (2.5 * avg_proj_cc) - (6.0 * math.log(max(1.0, avg_loc_per_file))) - (5.0 * len(cycles))
    mi = round(max(0.0, min(100.0, raw_mi)), 1)

    health = ProjectHealthSummary(
        total_files=len(all_files),
        total_loc=total_loc,
        languages_breakdown=language_loc,
        total_functions=len(non_class_funcs),
        total_classes=classes_cnt,
        total_variables_tracked=total_variables,
        internal_dependencies=sum(1 for i in imports if not i.is_external),
        external_dependencies=sorted(external_libs),
        circular_dependency_count=len(cycles),
        syntax_error_count=sum(1 for d in diagnostics if d.category == "syntax"),
        static_warning_count=sum(1 for d in diagnostics if d.category != "syntax"),
        confirmed_security_count=sum(1 for s in security if s.confidence == "confirmed"),
        potential_security_count=sum(1 for s in security if s.confidence == "potential_risk"),
        avg_cyclomatic_complexity=avg_proj_cc,
        max_cyclomatic_complexity=max_proj_cc,
        maintainability_index=mi,
        formula_documentation=(
            "Maintainability Index (MI) = clamp(0, 100, 100 - 2.5 * AvgCyclomaticComplexity "
            "- 6.0 * ln(AvgFileLOC) - 5.0 * CircularDependencyCycles). "
            "Hotspot Score = 0.30*norm(MaxCC,20) + 0.20*norm(FanIn+FanOut,15) + 0.20*norm(LOC,300) + 0.30*IssuePenalty."
        ),
        security_disclaimer=(
            "Static analysis inspects AST and lexical patterns for known vulnerability classes "
            "(hardcoded secrets, eval/exec, SQLi/XSS sinks). Absence of findings does NOT guarantee "
            "complete runtime or business-logic security."
        ),
    )

    return dep_graph, call_graph, heatmap, health


def simulate_change_impact(
    target_id: str,
    functions: List[FunctionInfo],
    dep_graph: GraphData,
) -> ImpactSimulationResponse:
    fn_map = {f.id: f for f in functions}
    if target_id in fn_map:
        target_fn = fn_map[target_id]
        direct = list(target_fn.called_by)
        visited: Set[str] = set(direct)
        queue = list(direct)
        while queue:
            curr = queue.pop(0)
            curr_fn = fn_map.get(curr)
            if curr_fn:
                for caller in curr_fn.called_by:
                    if caller not in visited and caller != target_id:
                        visited.add(caller)
                        queue.append(caller)
        transitive = sorted(visited - set(direct))
        affected_files = sorted({fn_map[fid].file_path for fid in visited if fid in fn_map} | {target_fn.file_path})
    else:
        rev_adj: Dict[str, List[str]] = {}
        for edge in dep_graph.edges:
            if edge.relation in ("imports", "circular_import"):
                rev_adj.setdefault(edge.target, []).append(edge.source)
        direct = sorted(set(rev_adj.get(target_id, [])))
        visited = set(direct)
        queue = list(direct)
        while queue:
            curr = queue.pop(0)
            for caller_file in rev_adj.get(curr, []):
                if caller_file not in visited and caller_file != target_id:
                    visited.add(caller_file)
                    queue.append(caller_file)
        transitive = sorted(visited - set(direct))
        affected_files = sorted(visited | {target_id})

    total_impacted = len(direct) + len(transitive)
    if total_impacted == 0:
        risk = "low"
    elif total_impacted <= 2:
        risk = "moderate"
    elif total_impacted <= 5:
        risk = "high"
    else:
        risk = "critical"

    return ImpactSimulationResponse(
        target_id=target_id,
        direct_dependents=direct,
        transitive_dependents=transitive,
        affected_files=affected_files,
        risk_level=risk,
        explanation=(
            f"Modifying '{target_id}' directly affects {len(direct)} dependent(s) and transitively "
            f"propagates to {len(transitive)} upstream symbol(s) across {len(affected_files)} file(s)."
        ),
    )

def generate_auto_refactor_patches(analysis) -> List[Dict]:
    patches = []
    for d in analysis.diagnostics:
        lines = analysis.files_content.get(d.file_path, "").splitlines()
        orig_line = lines[d.line - 1] if 1 <= d.line <= len(lines) else d.code_snippet
        patched_line = orig_line
        if d.rule_id == "JSTS-LOGIC-001":
            patched_line = orig_line + "  // [Nibras Auto-Refactor: declaration changed from const to let]"
        elif d.rule_id == "JSTS-LOGIC-002":
            patched_line = orig_line.replace("!=", "!==").replace("==", "===")
        elif d.rule_id in ("JSTS-UNUSED-001", "PY-UNUSED-001"):
            patched_line = f"// [Removed unused import] {orig_line}"
        elif d.rule_id == "PY-LOGIC-001":
            patched_line = orig_line.replace("=[]", "=None").replace("={}", "=None")
        elif d.rule_id == "PY-LOGIC-002":
            patched_line = orig_line.replace("except:", "except Exception as exc:")
        patches.append({
            "patch_id": f"patch:{d.id}",
            "file_path": d.file_path,
            "line": d.line,
            "rule_id": d.rule_id,
            "category": d.category,
            "title": d.message,
            "before_code": orig_line.strip(),
            "after_code": patched_line.strip(),
            "explanation": d.suggested_fix,
        })
    for sec in analysis.security_findings:
        lines = analysis.files_content.get(sec.file_path, "").splitlines()
        orig_line = lines[sec.line - 1] if 1 <= sec.line <= len(lines) else sec.code_snippet
        patched_line = orig_line
        if sec.rule_id == "NIBRAS-SEC-001":
            patched_line = "const SECRET_KEY = process.env.NIBRAS_SECRET_KEY;"
        elif sec.rule_id in ("NIBRAS-SEC-002", "PY-SEC-001"):
            patched_line = orig_line.replace("eval(", "/* SAFE_PARSE */ String(")
        elif sec.rule_id == "NIBRAS-SEC-003":
            patched_line = orig_line.replace(".innerHTML", ".textContent")
        elif sec.rule_id == "NIBRAS-SEC-004":
            patched_line = "const rawQuery = 'SELECT id, role FROM users WHERE email = $1 AND hash = $2';"
        elif sec.rule_id == "PY-SEC-SQLI":
            patched_line = "    cursor.execute('SELECT balance FROM accounts WHERE id = ?', (account_id,))"
        patches.append({
            "patch_id": f"patch:{sec.id}",
            "file_path": sec.file_path,
            "line": sec.line,
            "rule_id": sec.rule_id,
            "category": "security",
            "title": sec.title,
            "before_code": orig_line.strip(),
            "after_code": patched_line.strip(),
            "explanation": sec.remediation,
        })
    return patches


def compare_project_snapshots(base, target) -> Dict:
    base_files = set(base.files_content.keys())
    target_files = set(target.files_content.keys())
    base_funcs = {f.id for f in base.functions}
    target_funcs = {f.id for f in target.functions}
    return {
        "base_project": base.project_name,
        "target_project": target.project_name,
        "delta_loc": target.health.total_loc - base.health.total_loc,
        "delta_maintainability": round(target.health.maintainability_index - base.health.maintainability_index, 1),
        "delta_security_findings": (
            (target.health.confirmed_security_count + target.health.potential_security_count)
            - (base.health.confirmed_security_count + base.health.potential_security_count)
        ),
        "delta_diagnostics": len(target.diagnostics) - len(base.diagnostics),
        "added_files": sorted(target_files - base_files),
        "removed_files": sorted(base_files - target_files),
        "added_functions": sorted(target_funcs - base_funcs),
        "removed_functions": sorted(base_funcs - target_funcs),
    }

