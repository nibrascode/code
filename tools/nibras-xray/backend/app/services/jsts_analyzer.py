import json
import os
import subprocess
from pathlib import Path
from typing import List, Tuple
from app.models.schemas import (
    FunctionInfo, VariableInfo, ImportInfo, DiagnosticIssue, SecurityFinding
)

WORKER_PATH = Path(__file__).parent / "babel_ast_worker.js"
BACKEND_DIR = Path(__file__).resolve().parents[2]


def babel_worker_available() -> bool:
    """True only if Node.js is on PATH and @babel/parser is installed next to the worker."""
    import shutil
    return bool(shutil.which("node")) and WORKER_PATH.exists() and (BACKEND_DIR / "node_modules" / "@babel" / "parser").exists()


def analyze_jsts_file(
    file_path: str, source: str, language: str
) -> Tuple[List[FunctionInfo], List[VariableInfo], List[ImportInfo], List[DiagnosticIssue], List[SecurityFinding]]:
    """
    Parses JavaScript, TypeScript, JSX, and TSX files using the real `@babel/parser` AST engine
    via Node.js subprocess (`babel_ast_worker.js`).
    """
    payload = json.dumps({
        "file_path": file_path,
        "source": source,
        "language": language,
    })

    proc = subprocess.run(
        ["node", str(WORKER_PATH)],
        input=payload,
        capture_output=True,
        text=True,
        timeout=15,
        check=False,
    )

    if proc.returncode != 0 or not proc.stdout:
        raise RuntimeError(f"Babel AST worker failed for {file_path}: {proc.stderr}")

    data = json.loads(proc.stdout)
    if "error" in data:
        raise RuntimeError(f"Babel AST internal error on {file_path}: {data['error']}")

    functions = [FunctionInfo(**f) for f in data.get("functions", [])]
    variables = [VariableInfo(**v) for v in data.get("variables", [])]
    imports = [ImportInfo(**i) for i in data.get("imports", [])]
    diagnostics = [DiagnosticIssue(**d) for d in data.get("diagnostics", [])]
    security = [SecurityFinding(**s) for s in data.get("security", [])]

    return functions, variables, imports, diagnostics, security
