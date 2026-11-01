import ast
from typing import List, Dict, Tuple, Set
from app.models.schemas import (
    FunctionInfo, ParameterInfo, VariableInfo, VariableOccurrence,
    ImportInfo, DiagnosticIssue, SecurityFinding
)

DANGEROUS_PY_CALLS = {
    "eval": ("critical", "CWE-95", "PY-SEC-001", "Dangerous use of eval()", "Avoid eval() on untrusted input; use ast.literal_eval() for safe parsing."),
    "exec": ("critical", "CWE-95", "PY-SEC-002", "Dangerous use of exec()", "Dynamic code execution via exec() allows arbitrary command execution."),
    "pickle.loads": ("high", "CWE-502", "PY-SEC-003", "Insecure deserialization via pickle.loads()", "Never unpickle data from untrusted sources; use JSON or Pydantic."),
    "os.system": ("high", "CWE-78", "PY-SEC-004", "OS command execution via os.system()", "Use subprocess.run(..., shell=False) with an explicit argument list."),
    "subprocess.Popen": ("medium", "CWE-78", "PY-SEC-005", "Subprocess execution check", "Verify shell=False and ensure user input is not interpolated into command strings."),
}


def compute_py_cyclomatic(node: ast.AST) -> int:
    complexity = 1
    for child in ast.walk(node):
        if isinstance(child, (ast.If, ast.While, ast.For, ast.AsyncFor, ast.ExceptHandler, ast.With, ast.AsyncWith, ast.IfExp)):
            complexity += 1
        elif isinstance(child, ast.BoolOp):
            complexity += max(0, len(child.values) - 1)
    return complexity


def analyze_python_file(
    file_path: str, source: str
) -> Tuple[List[FunctionInfo], List[VariableInfo], List[ImportInfo], List[DiagnosticIssue], List[SecurityFinding]]:
    functions: List[FunctionInfo] = []
    variables: List[VariableInfo] = []
    imports: List[ImportInfo] = []
    diagnostics: List[DiagnosticIssue] = []
    security: List[SecurityFinding] = []
    lines = source.splitlines()

    def get_line(lineno: int) -> str:
        if 1 <= lineno <= len(lines):
            return lines[lineno - 1].strip()
        return ""

    # 1. Real AST parsing with SyntaxError detection
    try:
        tree = ast.parse(source, filename=file_path)
    except SyntaxError as exc:
        lineno = exc.lineno or 1
        diagnostics.append(
            DiagnosticIssue(
                id=f"{file_path}:SYNTAX:{lineno}",
                file_path=file_path,
                line=lineno,
                column=exc.offset or 1,
                severity="error",
                category="syntax",
                confidence="confirmed",
                rule_id="PY-SYNTAX-001",
                message=f"SyntaxError: {exc.msg}",
                explanation="Python's built-in AST parser failed to parse this file due to a confirmed syntax error.",
                suggested_fix="Fix the syntax token or indentation near the highlighted line.",
                code_snippet=get_line(lineno),
            )
        )
        return functions, variables, imports, diagnostics, security

    # Track imported names for unused-import analysis
    imported_names_map: Dict[str, ImportInfo] = {}
    used_names: Set[str] = set()

    for node in ast.walk(tree):
        if isinstance(node, ast.Name) and isinstance(node.ctx, ast.Load):
            used_names.add(node.id)
        elif isinstance(node, ast.Attribute):
            # Walk down to root Name
            curr = node.value
            while isinstance(curr, ast.Attribute):
                curr = curr.value
            if isinstance(curr, ast.Name):
                used_names.add(curr.id)

    # 2. Extract Imports
    for node in ast.iter_child_nodes(tree):
        if isinstance(node, ast.Import):
            for alias in node.names:
                bound_name = alias.asname or alias.name.split(".")[0]
                imp = ImportInfo(
                    source_file=file_path,
                    raw_specifier=alias.name,
                    imported_symbols=[bound_name],
                    is_external=not alias.name.startswith("."),
                    line=node.lineno,
                )
                imports.append(imp)
                imported_names_map[bound_name] = imp
        elif isinstance(node, ast.ImportFrom):
            mod = ("." * (node.level or 0)) + (node.module or "")
            syms = [a.asname or a.name for a in node.names]
            imp = ImportInfo(
                source_file=file_path,
                raw_specifier=mod,
                imported_symbols=syms,
                is_external=(node.level == 0),
                line=node.lineno,
            )
            imports.append(imp)
            for s in syms:
                imported_names_map[s] = imp

    # Check unused imports
    for sym, imp_obj in imported_names_map.items():
        if sym != "*" and sym not in used_names:
            imp_obj.unused_symbols.append(sym)
            diagnostics.append(
                DiagnosticIssue(
                    id=f"{file_path}:UNUSED-IMP:{imp_obj.line}:{sym}",
                    file_path=file_path,
                    line=imp_obj.line,
                    severity="warning",
                    category="unused",
                    confidence="confirmed",
                    rule_id="PY-UNUSED-001",
                    message=f"Unused import '{sym}' from '{imp_obj.raw_specifier}'",
                    explanation=f"The imported symbol '{sym}' is never referenced in the AST of {file_path}.",
                    suggested_fix=f"Remove the unused import '{sym}' to keep module dependencies clean.",
                    code_snippet=get_line(imp_obj.line),
                )
            )

    # 3. Extract Classes, Functions, Variables, Calls, and Security / Logic checks
    def process_func(fn_node: ast.AST, class_prefix: str = ""):
        is_async = isinstance(fn_node, ast.AsyncFunctionDef)
        fn_name = fn_node.name
        q_name = f"{class_prefix}.{fn_name}" if class_prefix else fn_name
        fn_id = f"{file_path}::{q_name}"

        params: List[ParameterInfo] = []
        args_obj = fn_node.args
        defaults_offset = len(args_obj.args) - len(args_obj.defaults)
        for idx, arg in enumerate(args_obj.args):
            ann = ast.unparse(arg.annotation) if getattr(arg, "annotation", None) else None
            def_val = None
            if idx >= defaults_offset:
                def_node = args_obj.defaults[idx - defaults_offset]
                def_val = ast.unparse(def_node)
                # Mutable default argument check!
                if isinstance(def_node, (ast.List, ast.Dict, ast.Set)):
                    diagnostics.append(
                        DiagnosticIssue(
                            id=f"{file_path}:MUTABLE-DEFAULT:{fn_node.lineno}:{arg.arg}",
                            file_path=file_path,
                            line=fn_node.lineno,
                            severity="warning",
                            category="logic",
                            confidence="confirmed",
                            rule_id="PY-LOGIC-001",
                            message=f"Mutable default argument '{arg.arg}={def_val}' in function '{q_name}'",
                            explanation="In Python, default parameter values are evaluated once at function definition time, causing shared state across calls.",
                            suggested_fix=f"Use '{arg.arg}=None' and initialize inside the function body.",
                            code_snippet=get_line(fn_node.lineno),
                        )
                    )
            params.append(ParameterInfo(name=arg.arg, type_annotation=ann, default_value=def_val))

        ret_type = ast.unparse(fn_node.returns) if getattr(fn_node, "returns", None) else None
        end_line = getattr(fn_node, "end_lineno", fn_node.lineno + 5)
        loc = max(1, end_line - fn_node.lineno + 1)
        complexity = compute_py_cyclomatic(fn_node)

        calls: List[str] = []
        vars_read: Set[str] = set()
        vars_mod: Set[str] = set()
        local_vars: Dict[str, VariableInfo] = {}

        for p in params:
            if p.name != "self":
                local_vars[p.name] = VariableInfo(
                    id=f"{fn_id}::{p.name}",
                    name=p.name,
                    file_path=file_path,
                    scope=q_name,
                    declaration_kind="param",
                    declared_line=fn_node.lineno,
                    inferred_type=p.type_annotation,
                    certainty="confirmed_static",
                    related_functions=[fn_id],
                    occurrences=[
                        VariableOccurrence(
                            line=fn_node.lineno,
                            kind="declaration",
                            context_snippet=get_line(fn_node.lineno),
                        )
                    ],
                )

        for sub in ast.walk(fn_node):
            # Detect bare except
            if isinstance(sub, ast.ExceptHandler) and sub.type is None:
                diagnostics.append(
                    DiagnosticIssue(
                        id=f"{file_path}:BARE-EXCEPT:{sub.lineno}",
                        file_path=file_path,
                        line=sub.lineno,
                        severity="warning",
                        category="logic",
                        confidence="confirmed",
                        rule_id="PY-LOGIC-002",
                        message=f"Bare 'except:' clause in '{q_name}' catches SystemExit and KeyboardInterrupt",
                        explanation="Catching all exceptions without specifying Exception masks critical runtime errors and interrupts.",
                        suggested_fix="Replace 'except:' with 'except Exception as err:'.",
                        code_snippet=get_line(sub.lineno),
                    )
                )

            # Detect calls
            if isinstance(sub, ast.Call):
                callee_name = None
                if isinstance(sub.func, ast.Name):
                    callee_name = sub.func.id
                elif isinstance(sub.func, ast.Attribute):
                    callee_name = ast.unparse(sub.func)
                if callee_name:
                    calls.append(callee_name)

                    # Security check on dangerous calls
                    for danger_key, (sev, cwe, rule_id, title, rem) in DANGEROUS_PY_CALLS.items():
                        if callee_name == danger_key or callee_name.endswith("." + danger_key):
                            # Check if subprocess has shell=True
                            conf = "confirmed"
                            if danger_key == "subprocess.Popen":
                                has_shell = any(kw.arg == "shell" and getattr(kw.value, "value", False) is True for kw in sub.keywords)
                                if not has_shell:
                                    continue
                            security.append(
                                SecurityFinding(
                                    id=f"{file_path}:{rule_id}:{sub.lineno}",
                                    file_path=file_path,
                                    line=sub.lineno,
                                    severity=sev,
                                    confidence=conf,
                                    cwe_id=cwe,
                                    rule_id=rule_id,
                                    title=title,
                                    description=f"Call to '{callee_name}' detected in '{q_name}' at line {sub.lineno}.",
                                    remediation=rem,
                                    code_snippet=get_line(sub.lineno),
                                )
                            )

                    # Check SQL injection in execute(...)
                    if callee_name.endswith(".execute") and sub.args:
                        arg0 = sub.args[0]
                        if isinstance(arg0, (ast.JoinedStr, ast.BinOp)):
                            security.append(
                                SecurityFinding(
                                    id=f"{file_path}:PY-SQLI:{sub.lineno}",
                                    file_path=file_path,
                                    line=sub.lineno,
                                    severity="critical",
                                    confidence="potential_risk",
                                    cwe_id="CWE-89",
                                    rule_id="PY-SEC-SQLI",
                                    title="Potential SQL Injection via dynamic query interpolation",
                                    description=f"Database '.execute()' call in '{q_name}' uses an f-string or string concatenation instead of parameterized placeholders.",
                                    remediation="Pass SQL parameters as a tuple in the second argument to cursor.execute(query, params).",
                                    code_snippet=get_line(sub.lineno),
                                )
                            )

            # Variable assignments
            if isinstance(sub, ast.Assign):
                for target in sub.targets:
                    if isinstance(target, ast.Name):
                        vname = target.id
                        vars_mod.add(vname)
                        if vname not in local_vars:
                            local_vars[vname] = VariableInfo(
                                id=f"{fn_id}::{vname}",
                                name=vname,
                                file_path=file_path,
                                scope=q_name,
                                declaration_kind="local",
                                declared_line=sub.lineno,
                                certainty="confirmed_static",
                                related_functions=[fn_id],
                                occurrences=[
                                    VariableOccurrence(
                                        line=sub.lineno,
                                        kind="declaration",
                                        context_snippet=get_line(sub.lineno),
                                    )
                                ],
                            )
                        else:
                            local_vars[vname].is_reassigned = True
                            local_vars[vname].occurrences.append(
                                VariableOccurrence(
                                    line=sub.lineno,
                                    kind="reassignment",
                                    context_snippet=get_line(sub.lineno),
                                )
                            )
            elif isinstance(sub, ast.AugAssign) and isinstance(sub.target, ast.Name):
                vname = sub.target.id
                vars_mod.add(vname)
                if vname in local_vars:
                    local_vars[vname].is_reassigned = True
                    local_vars[vname].occurrences.append(
                        VariableOccurrence(
                            line=sub.lineno,
                            kind="reassignment",
                            context_snippet=get_line(sub.lineno),
                        )
                    )
            elif isinstance(sub, ast.Name) and isinstance(sub.ctx, ast.Load):
                vname = sub.id
                vars_read.add(vname)
                if vname in local_vars:
                    local_vars[vname].occurrences.append(
                        VariableOccurrence(
                            line=sub.lineno,
                            kind="read",
                            context_snippet=get_line(sub.lineno),
                        )
                    )

        variables.extend(local_vars.values())
        functions.append(
            FunctionInfo(
                id=fn_id,
                name=fn_name,
                qualified_name=q_name,
                file_path=file_path,
                language="Python",
                kind="method" if class_prefix else "function",
                start_line=fn_node.lineno,
                end_line=end_line,
                parameters=params,
                return_type=ret_type,
                is_async=is_async,
                is_exported=not fn_name.startswith("_"),
                cyclomatic_complexity=complexity,
                loc=loc,
                calls=list(dict.fromkeys(calls)),
                variables_read=sorted(vars_read),
                variables_Modified=sorted(vars_mod),
                docstring=ast.get_docstring(fn_node),
            )
        )

    for node in ast.iter_child_nodes(tree):
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            process_func(node)
        elif isinstance(node, ast.ClassDef):
            end_ln = getattr(node, "end_lineno", node.lineno + 5)
            functions.append(
                FunctionInfo(
                    id=f"{file_path}::{node.name}",
                    name=node.name,
                    qualified_name=node.name,
                    file_path=file_path,
                    language="Python",
                    kind="class",
                    start_line=node.lineno,
                    end_line=end_ln,
                    is_exported=not node.name.startswith("_"),
                    cyclomatic_complexity=1,
                    loc=max(1, end_ln - node.lineno + 1),
                    docstring=ast.get_docstring(node),
                )
            )
            for item in node.body:
                if isinstance(item, (ast.FunctionDef, ast.AsyncFunctionDef)):
                    process_func(item, class_prefix=node.name)
        elif isinstance(node, ast.Assign):
            for target in node.targets:
                if isinstance(target, ast.Name):
                    vname = target.id
                    variables.append(
                        VariableInfo(
                            id=f"{file_path}::global::{vname}",
                            name=vname,
                            file_path=file_path,
                            scope="module",
                            declaration_kind="global",
                            declared_line=node.lineno,
                            certainty="confirmed_static",
                            occurrences=[
                                VariableOccurrence(
                                    line=node.lineno,
                                    kind="declaration",
                                    context_snippet=get_line(node.lineno),
                                )
                            ],
                        )
                    )

    return functions, variables, imports, diagnostics, security


import re
from typing import List, Tuple
from app.models.schemas import (
    FunctionInfo, ParameterInfo, VariableInfo, VariableOccurrence,
    ImportInfo, DiagnosticIssue, SecurityFinding
)

MULTI_LANG_PATTERNS = {
    ".go": ("Go", re.compile(r"^\s*func\s+(?:\([^)]+\)\s+)?([A-Za-z_]\w*)\s*\(([^)]*)\)"), re.compile(r"^\s*import\s+[\"]([^\"]+)[\"]")),
    ".rs": ("Rust", re.compile(r"^\s*(?:pub\s+)?(?:async\s+)?fn\s+([A-Za-z_]\w*)\s*\(([^)]*)\)"), re.compile(r"^\s*use\s+([A-Za-z0-9_:]+)")),
    ".java": ("Java", re.compile(r"^\s*(?:public|private|protected)?\s*(?:static\s+)?[\w<>\[\]]+\s+([A-Za-z_]\w*)\s*\(([^)]*)\)\s*\{"), re.compile(r"^\s*import\s+([A-Za-z0-9_.]+);")),
    ".kt": ("Kotlin", re.compile(r"^\s*fun\s+([A-Za-z_]\w*)\s*\(([^)]*)\)"), re.compile(r"^\s*import\s+([A-Za-z0-9_.]+)")),
    ".php": ("PHP", re.compile(r"^\s*(?:public|private|protected)?\s*function\s+([A-Za-z_]\w*)\s*\(([^)]*)\)"), re.compile(r"^\s*use\s+([A-Za-z0-9_\\]+);")),
    ".cpp": ("C++", re.compile(r"^\s*[\w:<>\*&]+\s+([A-Za-z_]\w*)\s*\(([^)]*)\)\s*\{"), re.compile(r"^\s*#include\s+[<\"]([^>\"]+)[>\"]")),
    ".dart": ("Dart", re.compile(r"^\s*[\w<>?]+\s+([A-Za-z_]\w*)\s*\(([^)]*)\)\s*(?:async\s*)?\{"), re.compile(r"^\s*import\s+['\"]([^'\"]+)['\"]")),
}


def analyze_polyglot_file(
    file_path: str, source: str, ext: str
) -> Tuple[List[FunctionInfo], List[VariableInfo], List[ImportInfo], List[DiagnosticIssue], List[SecurityFinding]]:
    functions: List[FunctionInfo] = []
    variables: List[VariableInfo] = []
    imports: List[ImportInfo] = []
    diagnostics: List[DiagnosticIssue] = []
    security: List[SecurityFinding] = []
    if ext not in MULTI_LANG_PATTERNS:
        return functions, variables, imports, diagnostics, security

    lang, fn_re, imp_re = MULTI_LANG_PATTERNS[ext]
    lines = source.splitlines()

    for idx, raw in enumerate(lines, start=1):
        im = imp_re.match(raw)
        if im:
            spec = im.group(1).strip()
            imports.append(
                ImportInfo(
                    source_file=file_path,
                    raw_specifier=spec,
                    imported_symbols=[spec.split("/")[-1].split("::")[-1]],
                    is_external=not spec.startswith("."),
                    line=idx,
                )
            )
        fm = fn_re.match(raw)
        if fm:
            fname = fm.group(1)
            raw_params = fm.group(2)
            params = [
                ParameterInfo(name=p.strip().split()[0].lstrip("$&*"))
                for p in raw_params.split(",")
                if p.strip()
            ]
            end_ln = min(len(lines), idx + 12)
            body_slice = "\n".join(lines[idx - 1 : end_ln])
            cc = 1 + len(re.findall(r"\b(if|for|while|match|switch|case|catch)\b", body_slice))
            functions.append(
                FunctionInfo(
                    id=f"{file_path}::{fname}",
                    name=fname,
                    qualified_name=fname,
                    file_path=file_path,
                    language=lang,
                    kind="function",
                    start_line=idx,
                    end_line=end_ln,
                    parameters=params,
                    cyclomatic_complexity=cc,
                    loc=max(1, end_ln - idx + 1),
                    is_exported=True,
                )
            )

        # Polyglot security checks (unsafe blocks, system exec, raw SQL)
        if ext == ".rs" and "unsafe " in raw:
            security.append(
                SecurityFinding(
                    id=f"{file_path}:RS-UNSAFE:{idx}",
                    file_path=file_path,
                    line=idx,
                    severity="medium",
                    confidence="confirmed",
                    cwe_id="CWE-119",
                    rule_id="RS-SEC-001",
                    title="Rust unsafe block bypasses borrow checker memory guarantees",
                    description=f"An explicit unsafe block was detected at line {idx}.",
                    remediation="Minimize unsafe scope and document memory invariants with // SAFETY: comments.",
                    code_snippet=raw.strip(),
                )
            )
        if re.search(r"(?i)(api[_-]?key|secret[_-]?key|password)\s*[:=]\s*['\"][A-Za-z0-9_\-]{12,}['\"]", raw):
            security.append(
                SecurityFinding(
                    id=f"{file_path}:POLY-SECRET:{idx}",
                    file_path=file_path,
                    line=idx,
                    severity="critical",
                    confidence="confirmed",
                    cwe_id="CWE-798",
                    rule_id="NIBRAS-SEC-001",
                    title="Hardcoded credential detected in polyglot module",
                    description="High-entropy secret literal assigned directly in source code.",
                    remediation="Load secrets from environment variables or secret manager.",
                    code_snippet=raw.strip(),
                )
            )

    return functions, variables, imports, diagnostics, security
