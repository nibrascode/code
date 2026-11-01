import hashlib
import re
from pathlib import Path
from typing import Dict
import httpx
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from app.models.schemas import (
    ProjectAnalysisResult, ImpactSimulationRequest, ImpactSimulationResponse,
    AIExplainRequest, WorkspaceFilesRequest, GitHubImportRequest
)
from app.services.zip_scanner import ZipSecurityError
from app.services.orchestrator import analyze_zip_project, analyze_files_map
from app.services.graph_engine import simulate_change_impact, generate_auto_refactor_patches, compare_project_snapshots
from app.services.ai_explainer import generate_grounded_explanation

from app.services.jsts_analyzer import babel_worker_available

app = FastAPI(
    title="Nibras X-Ray Static Analysis & Architecture Engine",
    version="1.1.0",
    description="Static analysis (@babel/parser via Node worker for JS/TS, Python ast), dependency graph, security scanner, and impact simulator API.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PROJECTS_STORE: Dict[str, ProjectAnalysisResult] = {}


@app.get("/", response_class=HTMLResponse)
def serve_workbench_ui():
    ui_path = Path(__file__).resolve().parents[2] / "nibras_xray.html"
    if ui_path.exists():
        return HTMLResponse(content=ui_path.read_text(encoding="utf-8"), status_code=200)
    return HTMLResponse(content="<h1>Nibras X-Ray Backend API is running.</h1>", status_code=200)


@app.get("/api/v1/health")
def health_check():
    return {
        "status": "ok",
        "product": "Nibras X-Ray",
        "brand": "Nibras Code",
        "parsers": {
            "javascript_typescript": "@babel/parser (AST) via Node worker" if babel_worker_available() else "unavailable: run `npm install` in backend/ (needs Node.js)",
            "python": "python3 ast",
        },
    }


@app.post("/api/v1/projects/analyze-zip", response_model=ProjectAnalysisResult)
async def upload_and_analyze_zip(file: UploadFile = File(...)):
    if not file.filename or not file.filename.lower().endswith(".zip"):
        raise HTTPException(status_code=400, detail="Only .zip archives are accepted.")
    raw_bytes = await file.read()
    project_name = file.filename[:-4] or "project"
    try:
        result = analyze_zip_project(raw_bytes, project_name=project_name)
    except ZipSecurityError as exc:
        raise HTTPException(status_code=422, detail=str(exc))

    PROJECTS_STORE[result.project_id] = result
    return result


@app.post("/api/v1/projects/analyze-workspace", response_model=ProjectAnalysisResult)
def analyze_workspace_files(req: WorkspaceFilesRequest):
    if not req.files:
        raise HTTPException(status_code=400, detail="Workspace files dictionary cannot be empty.")
    result = analyze_files_map(req.files, project_name=req.project_name)
    PROJECTS_STORE[result.project_id] = result
    return result


@app.post("/api/v1/projects/import-github", response_model=ProjectAnalysisResult)
def import_github_repository(req: GitHubImportRequest):
    """
    Downloads a public GitHub repository archive as a ZIP stream from codeload.github.com
    and runs it through the safe ZIP scanner and AST analysis pipeline.
    """
    m = re.search(r"github\.com/([A-Za-z0-9_.-]+)/([A-Za-z0-9_.-]+)", req.repo_url)
    if not m:
        raise HTTPException(status_code=400, detail="Invalid GitHub repository URL. Expected https://github.com/owner/repo")
    owner, repo = m.group(1), m.group(2).removesuffix(".git")
    zip_url = f"https://codeload.github.com/{owner}/{repo}/zip/refs/heads/{req.branch}"
    try:
        resp = httpx.get(zip_url, follow_redirects=True, timeout=20.0)
        resp.raise_for_status()
        result = analyze_zip_project(resp.content, project_name=f"{owner}-{repo}")
        PROJECTS_STORE[result.project_id] = result
        return result
    except ZipSecurityError as exc:
        raise HTTPException(status_code=422, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"Failed to fetch GitHub archive from {zip_url}: {exc}")


@app.get("/api/v1/projects/{project_id}", response_model=ProjectAnalysisResult)
def get_project_analysis(project_id: str):
    if project_id not in PROJECTS_STORE:
        raise HTTPException(status_code=404, detail="Project analysis not found.")
    return PROJECTS_STORE[project_id]


@app.post("/api/v1/projects/impact-simulator", response_model=ImpactSimulationResponse)
def run_impact_simulation(req: ImpactSimulationRequest):
    analysis = PROJECTS_STORE.get(req.project_id)
    if not analysis:
        raise HTTPException(status_code=404, detail="Project analysis not found.")
    return simulate_change_impact(req.target_id, analysis.functions, analysis.dependency_graph)


@app.post("/api/v1/projects/ai-explain")
def run_ai_explainer(req: AIExplainRequest):
    analysis = PROJECTS_STORE.get(req.project_id)
    if not analysis:
        raise HTTPException(status_code=404, detail="Project analysis not found.")
    return generate_grounded_explanation(analysis, req)


@app.get("/api/v1/projects/{project_id}/auto-refactor")
def get_project_refactor_patches(project_id: str):
    analysis = PROJECTS_STORE.get(project_id)
    if not analysis:
        raise HTTPException(status_code=404, detail="Project analysis not found.")
    return {"project_id": project_id, "patches": generate_auto_refactor_patches(analysis)}


@app.get("/api/v1/projects/compare/{base_id}/{target_id}")
def compare_two_snapshots(base_id: str, target_id: str):
    base = PROJECTS_STORE.get(base_id)
    target = PROJECTS_STORE.get(target_id)
    if not base or not target:
        raise HTTPException(status_code=404, detail="One or both project snapshots not found.")
    return compare_project_snapshots(base, target)


@app.get("/api/v1/projects/{project_id}/sarif")
def export_sarif_report(project_id: str):
    """Exports static diagnostics and security findings in OASIS SARIF v2.1.0 standard format."""
    analysis = PROJECTS_STORE.get(project_id)
    if not analysis:
        raise HTTPException(status_code=404, detail="Project analysis not found.")

    results = []
    for s in analysis.security_findings:
        results.append({
            "ruleId": s.rule_id,
            "level": "error" if s.severity in ("critical", "high") else "warning",
            "message": {"text": f"[{s.confidence}] {s.title}: {s.description} (Fix: {s.remediation})"},
            "locations": [{
                "physicalLocation": {
                    "artifactLocation": {"uri": s.file_path},
                    "region": {"startLine": s.line}
                }
            }]
        })
    for d in analysis.diagnostics:
        results.append({
            "ruleId": d.rule_id,
            "level": "error" if d.severity == "error" else "warning",
            "message": {"text": f"{d.message} — {d.suggested_fix}"},
            "locations": [{
                "physicalLocation": {
                    "artifactLocation": {"uri": d.file_path},
                    "region": {"startLine": d.line, "startColumn": d.column}
                }
            }]
        })

    return {
        "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
        "version": "2.1.0",
        "runs": [{
            "tool": {
                "driver": {
                    "name": "Nibras X-Ray Static Analysis Engine",
                    "Organization": "Nibras Code",
                    "version": "1.2.0"
                }
            },
            "results": results
        }]
    }


@app.get("/api/v1/projects/{project_id}/dna")
def get_project_dna_profile(project_id: str):
    """Generates a deterministic cryptographic & structural Project DNA signature."""
    analysis = PROJECTS_STORE.get(project_id)
    if not analysis:
        raise HTTPException(status_code=404, detail="Project analysis not found.")

    h = analysis.health
    structural_vector = f"{h.total_files}:{h.total_loc}:{h.total_functions}:{h.total_classes}:{h.circular_dependency_count}:{h.avg_cyclomatic_complexity}"
    dna_hash = hashlib.sha256(structural_vector.encode("utf-8")).hexdigest()[:16].upper()
    formatted_dna = "-".join([dna_hash[i:i+4] for i in range(0, 16, 4)])

    return {
        "project_id": project_id,
        "project_name": analysis.project_name,
        "dna_signature": f"NX-{formatted_dna}",
        "topology_class": "Cyclic-Mesh" if h.circular_dependency_count > 0 else "Acyclic-DAG",
        "maintainability_index": h.maintainability_index,
        "security_posture": "Critical-Exposure" if h.confirmed_security_count > 0 else "Hardened",
        "genome_strands": [
            {"gene": "COMPLEXITY", "weight": min(100, int(h.avg_cyclomatic_complexity * 12))},
            {"gene": "COUPLING", "weight": min(100, int(h.internal_dependencies * 15))},
            {"gene": "MODULARITY", "weight": int(h.maintainability_index)},
            {"gene": "SECURITY", "weight": max(0, 100 - h.confirmed_security_count * 25 - h.potential_security_count * 10)},
        ],
    }


@app.get("/api/v1/projects/{project_id}/executive-report", response_class=HTMLResponse)
def export_executive_html_report(project_id: str):
    """Generates a standalone, printable HTML Executive Architecture & Security Audit Report."""
    analysis = PROJECTS_STORE.get(project_id)
    if not analysis:
        raise HTTPException(status_code=404, detail="Project analysis not found.")

    h = analysis.health
    sec_rows = "".join(
        f"<tr><td>{s.file_path}:{s.line}</td><td><b>{s.severity.upper()}</b> ({s.confidence})</td><td>{s.cwe_id}</td><td>{s.title}</td><td>{s.remediation}</td></tr>"
        for s in analysis.security_findings
    ) or "<tr><td colspan='5'>No static security findings detected.</td></tr>"

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Nibras X-Ray Executive Report — {analysis.project_name}</title>
  <style>
    body {{ font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 32px; }}
    h1 {{ color: #38bdf8; margin-bottom: 4px; }}
    .grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 24px 0; }}
    .card {{ background: #1e293b; border: 1px solid #334155; padding: 16px; border-radius: 12px; }}
    .val {{ font-size: 24px; font-weight: 700; color: #38bdf8; }}
    table {{ width: 100%; border-collapse: collapse; margin-top: 16px; background: #1e293b; }}
    th, td {{ border: 1px solid #334155; padding: 10px; text-align: left; font-size: 13px; }}
    th {{ background: #0f172a; color: #94a3b8; }}
  </style>
</head>
<body>
  <h1>Nibras X-Ray — Executive Architecture &amp; Security Report</h1>
  <p>Project: <strong>{analysis.project_name}</strong> | Analyzed At: {analysis.analyzed_at}</p>
  <div class="grid">
    <div class="card"><div>Maintainability Index</div><div class="val">{h.maintainability_index}/100</div></div>
    <div class="card"><div>Files &amp; LOC</div><div class="val">{h.total_files} ({h.total_loc} LOC)</div></div>
    <div class="card"><div>Functions &amp; Classes</div><div class="val">{h.total_functions} / {h.total_classes}</div></div>
    <div class="card"><div>Security Findings</div><div class="val">{h.confirmed_security_count} Confirmed / {h.potential_security_count} Potential</div></div>
  </div>
  <h2>Security X-Ray Findings</h2>
  <table>
    <thead><tr><th>Location</th><th>Severity</th><th>CWE</th><th>Finding</th><th>Remediation</th></tr></thead>
    <tbody>{sec_rows}</tbody>
  </table>
  <p style="margin-top:24px;font-size:12px;color:#94a3b8;">{h.formula_documentation}<br/>{h.security_disclaimer}</p>
</body>
</html>"""
    return HTMLResponse(content=html, status_code=200)


@app.get("/api/v1/projects/{project_id}/taint-flows")
def get_project_taint_flows(project_id: str):
    """Traces untrusted user-input parameters to sensitive execution/database/DOM sinks."""
    analysis = PROJECTS_STORE.get(project_id)
    if not analysis:
        raise HTTPException(status_code=404, detail="Project analysis not found.")

    flows = []
    for sec in analysis.security_findings:
        if sec.cwe_id in ("CWE-89", "CWE-79", "CWE-95", "CWE-78", "CWE-918", "CWE-1321"):
            fn = next(
                (f for f in analysis.functions if f.file_path == sec.file_path and f.start_line <= sec.line <= f.end_line),
                None,
            )
            sources = [p.name for p in fn.parameters] if fn and fn.parameters else ["external_input"]
            flows.append({
                "flow_id": f"taint:{sec.id}",
                "file_path": sec.file_path,
                "function": fn.qualified_name if fn else "module_scope",
                "source_params": sources,
                "sink_line": sec.line,
                "sink_rule": sec.rule_id,
                "cwe_id": sec.cwe_id,
                "severity": sec.severity,
                "title": sec.title,
                "remediation": sec.remediation,
            })

    return {"project_id": project_id, "taint_flow_count": len(flows), "flows": flows}
