import os
import uuid
from datetime import datetime, timezone
from typing import Dict, List
from app.models.schemas import (
    ProjectAnalysisResult, FunctionInfo, VariableInfo, ImportInfo,
    DiagnosticIssue, SecurityFinding
)
from app.services.zip_scanner import validate_and_extract_zip, build_file_tree, LANGUAGE_EXTENSIONS
from app.services.python_analyzer import analyze_python_file, analyze_polyglot_file
from app.services.jsts_analyzer import analyze_jsts_file
from app.services.graph_engine import build_graphs_and_metrics


def analyze_files_map(files_content: Dict[str, str], project_name: str = "workspace") -> ProjectAnalysisResult:
    language_loc: Dict[str, int] = {}
    all_functions: List[FunctionInfo] = []
    all_variables: List[VariableInfo] = []
    all_imports: List[ImportInfo] = []
    all_diagnostics: List[DiagnosticIssue] = []
    all_security: List[SecurityFinding] = []

    for fpath, content in sorted(files_content.items()):
        ext = os.path.splitext(fpath)[1].lower()
        lang = LANGUAGE_EXTENSIONS.get(ext, "Unknown")
        loc = sum(1 for ln in content.splitlines() if ln.strip())
        language_loc[lang] = language_loc.get(lang, 0) + loc

        if ext == ".py":
            fns, vrs, imps, diags, secs = analyze_python_file(fpath, content)
            all_functions.extend(fns)
            all_variables.extend(vrs)
            all_imports.extend(imps)
            all_diagnostics.extend(diags)
            all_security.extend(secs)
        elif ext in (".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"):
            fns, vrs, imps, diags, secs = analyze_jsts_file(fpath, content, lang)
            all_functions.extend(fns)
            all_variables.extend(vrs)
            all_imports.extend(imps)
            all_diagnostics.extend(diags)
            all_security.extend(secs)
        elif ext in (".go", ".rs", ".java", ".kt", ".php", ".cpp", ".dart"):
            fns, vrs, imps, diags, secs = analyze_polyglot_file(fpath, content, ext)
            all_functions.extend(fns)
            all_variables.extend(vrs)
            all_imports.extend(imps)
            all_diagnostics.extend(diags)
            all_security.extend(secs)

    file_tree = build_file_tree(project_name, files_content)
    dep_graph, call_graph, heatmap, health = build_graphs_and_metrics(
        files_content=files_content,
        language_loc=language_loc,
        functions=all_functions,
        imports=all_imports,
        diagnostics=all_diagnostics,
        security=all_security,
        total_variables=len(all_variables),
    )

    return ProjectAnalysisResult(
        project_id=str(uuid.uuid4()),
        project_name=project_name,
        analyzed_at=datetime.now(timezone.utc).isoformat(),
        file_tree=file_tree,
        files_content=files_content,
        functions=all_functions,
        variables=all_variables,
        imports=all_imports,
        dependency_graph=dep_graph,
        call_graph=call_graph,
        diagnostics=all_diagnostics,
        security_findings=all_security,
        heatmap=heatmap,
        health=health,
    )


def analyze_zip_project(zip_bytes: bytes, project_name: str = "uploaded-project") -> ProjectAnalysisResult:
    _, files_content, _ = validate_and_extract_zip(zip_bytes, project_name)
    return analyze_files_map(files_content, project_name=project_name)
