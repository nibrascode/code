#!/usr/bin/env node
// Nibras X-Ray JS/TS worker: stdin {file_path, source, language} -> stdout
// {functions, variables, imports, diagnostics, security}, parsed with @babel/parser.
"use strict";
const path = require("path");
let parser;
try { parser = require(require.resolve("@babel/parser", { paths: [path.resolve(__dirname, "../..")] })); }
catch (e) { process.stdout.write(JSON.stringify({ error: "@babel/parser not installed (run `npm install` in backend/)" })); process.exit(0); }

const chunks = [];
process.stdin.on("data", c => chunks.push(c));
process.stdin.on("end", () => {
  try { process.stdout.write(JSON.stringify(analyze(JSON.parse(Buffer.concat(chunks).toString("utf8"))))); }
  catch (e) { process.stdout.write(JSON.stringify({ error: String((e && e.message) || e) })); }
});

const SINKS = { eval: ["CWE-95", "critical", "Use of eval()"], Function: ["CWE-95", "high", "Dynamic Function constructor"],
  execSync: ["CWE-78", "high", "Shell command execution"], spawnSync: ["CWE-78", "medium", "Process spawn"] };
const FN_RE = /^(FunctionDeclaration|FunctionExpression|ArrowFunctionExpression|ClassMethod|ObjectMethod|ClassPrivateMethod)$/;
const BRANCH_RE = /^(IfStatement|ForStatement|ForInStatement|ForOfStatement|WhileStatement|DoWhileStatement|ConditionalExpression|CatchClause)$/;

function walk(node, visit, parent) {
  if (!node || typeof node.type !== "string") return;
  if (visit(node, parent) === false) return;
  for (const k in node) {
    if (k === "loc" || k === "leadingComments" || k === "trailingComments" || k === "innerComments" || k === "extra") continue;
    const v = node[k];
    if (Array.isArray(v)) { for (const c of v) if (c && typeof c.type === "string") walk(c, visit, node); }
    else if (v && typeof v.type === "string") walk(v, visit, node);
  }
}
function diag(f, line, column, severity, category, confidence, rule_id, message, explanation, suggested_fix, code_snippet) {
  return { id: `${f}::${rule_id}@${line}:${column}`, file_path: f, line, column, severity, category, confidence, rule_id, message, explanation, suggested_fix, code_snippet };
}

function analyze({ file_path, source, language }) {
  const lines = source.split(/\r?\n/);
  const snip = l => (lines[l - 1] || "").trim().slice(0, 200);
  const txt = n => source.slice(n.start, n.end);
  const strip = t => t.replace(/^:\s*/, "");
  const out = { functions: [], variables: [], imports: [], diagnostics: [], security: [] };
  const isTs = /\.(ts|tsx|mts|cts)$/i.test(file_path);
  let ast;
  try {
    ast = parser.parse(source, { sourceType: "unambiguous", errorRecovery: true, allowReturnOutsideFunction: true,
      plugins: [isTs ? "typescript" : "flow", "jsx", "decorators-legacy", "topLevelAwait"] });
  } catch (e) {
    const line = (e.loc && e.loc.line) || 1;
    out.diagnostics.push(diag(file_path, line, ((e.loc && e.loc.column) || 0) + 1, "error", "syntax", "confirmed", "JSTS-AST-SYNTAX-001",
      "SyntaxError: " + e.message, "@babel/parser could not parse this file.", "Fix the syntax at the reported position.", snip(line)));
    return out;
  }
  for (const err of ast.errors || []) {
    const line = (err.loc && err.loc.line) || 1;
    out.diagnostics.push(diag(file_path, line, 1, "error", "syntax", "confirmed", "JSTS-AST-SYNTAX-001", err.message,
      "@babel/parser reported a recoverable syntax error.", "Fix the syntax at the reported position.", snip(line)));
  }
  const exported = new Set();
  for (const s of ast.program.body) {
    if (!/^Export/.test(s.type)) continue;
    const d = s.declaration;
    if (d && d.id && d.id.name) exported.add(d.id.name);
    if (d && d.declarations) d.declarations.forEach(v => v.id && v.id.name && exported.add(v.id.name));
    (s.specifiers || []).forEach(sp => sp.local && exported.add(sp.local.name));
  }
  const decls = new Map();
  const used = new Set();
  const calleeName = c => c.type === "Identifier" ? c.name : (c.type === "MemberExpression" && !c.computed && c.property.name) || null;
  const nameOf = (n, p) => (n.id && n.id.name) || (n.key && (n.key.name || n.key.value)) ||
    (p && p.type === "VariableDeclarator" && p.id.name) || (p && /Property$/.test(p.type) && p.key && p.key.name) || "<anonymous>";

  walk(ast.program, (node, parent) => {
    if (node.type === "ImportDeclaration") {
      const spec = node.source.value;
      out.imports.push({ source_file: file_path, raw_specifier: spec, resolved_target: null, imported_symbols: node.specifiers.map(s => s.local.name),
        is_external: !spec.startsWith("."), line: node.loc.start.line, unused_symbols: [] });
    } else if (node.type === "CallExpression" && node.callee.type === "Identifier" && node.callee.name === "require" && node.arguments[0] && node.arguments[0].type === "StringLiteral") {
      const spec = node.arguments[0].value;
      out.imports.push({ source_file: file_path, raw_specifier: spec, resolved_target: null, imported_symbols: [], is_external: !spec.startsWith("."), line: node.loc.start.line, unused_symbols: [] });
    }
    const isFn = FN_RE.test(node.type);
    if (isFn || node.type === "ClassDeclaration") {
      const name = nameOf(node, parent), s = node.loc.start.line, e = node.loc.end.line;
      const calls = new Set(); let cc = 1;
      if (isFn) walk(node.body, (x) => {
        if (FN_RE.test(x.type)) return false;
        if (x.type === "CallExpression") { const n = calleeName(x.callee); if (n) calls.add(n); }
        if (BRANCH_RE.test(x.type) || (x.type === "SwitchCase" && x.test) || (x.type === "LogicalExpression")) cc++;
      });
      out.functions.push({ id: `${file_path}::${name}`, name, qualified_name: name, file_path, language,
        kind: node.type === "ClassDeclaration" ? "class" : node.type === "ArrowFunctionExpression" ? "arrow_function" : /Method/.test(node.type) ? "method" : "function",
        start_line: s, end_line: e,
        parameters: (node.params || []).map(p => ({ name: p.type === "Identifier" ? p.name : txt(p).split(/[:=]/)[0].trim(),
          type_annotation: p.typeAnnotation ? strip(txt(p.typeAnnotation)) : null, default_value: p.type === "AssignmentPattern" ? txt(p.right) : null })),
        return_type: node.returnType ? strip(txt(node.returnType)) : null, is_async: !!node.async,
        is_exported: exported.has(name) || !!(parent && /^Export/.test(parent.type)),
        cyclomatic_complexity: cc, loc: e - s + 1, calls: [...calls], called_by: [], variables_read: [], variables_Modified: [], docstring: null });
    }
    if (node.type === "VariableDeclaration") {
      for (const d of node.declarations) if (d.id.type === "Identifier") {
        const l = d.loc.start.line;
        const v = { id: `${file_path}::var::${d.id.name}@${l}`, name: d.id.name, file_path, scope: "file", declaration_kind: node.kind, declared_line: l,
          inferred_type: d.id.typeAnnotation ? strip(txt(d.id.typeAnnotation)) : null, is_reassigned: false, is_mutated: false, certainty: "confirmed_static",
          occurrences: [{ line: l, column: d.loc.start.column, kind: "declaration", context_snippet: snip(l), certainty: "confirmed_static" }], related_functions: [] };
        out.variables.push(v); if (!decls.has(d.id.name)) decls.set(d.id.name, v);
      }
    }
    const target = node.type === "AssignmentExpression" && node.left.type === "Identifier" ? node.left
      : node.type === "UpdateExpression" && node.argument.type === "Identifier" ? node.argument : null;
    if (target && decls.has(target.name)) {
      const v = decls.get(target.name), l = node.loc.start.line;
      v.is_reassigned = true;
      v.occurrences.push({ line: l, column: node.loc.start.column, kind: "reassignment", context_snippet: snip(l), certainty: "inferred_heuristic" });
      if (v.declaration_kind === "const") out.diagnostics.push(diag(file_path, l, node.loc.start.column + 1, "error", "logic", "potential", "JSTS-LOGIC-001",
        `Assignment to constant '${target.name}'`, "Reassigning a const throws TypeError at runtime (scope not fully resolved: may be a shadowed name).",
        `Use let for '${target.name}' or avoid reassigning.`, snip(l)));
    }
    if (node.type === "BinaryExpression" && (node.operator === "==" || node.operator === "!=")) {
      const l = node.loc.start.line;
      out.diagnostics.push(diag(file_path, l, node.loc.start.column + 1, "warning", "logic", "potential", "JSTS-LOGIC-002",
        `Loose equality '${node.operator}'`, "Loose equality performs type coercion.", `Use '${node.operator}='.`, snip(l)));
    }
    if (node.type === "CallExpression" || node.type === "NewExpression") {
      const n = calleeName(node.callee);
      if (n && Object.prototype.hasOwnProperty.call(SINKS, n)) {
        const [cwe, sev, title] = SINKS[n], l = node.loc.start.line;
        out.security.push({ id: `${file_path}::sec::${n}@${l}`, file_path, line: l, severity: sev, confidence: "potential_risk", cwe_id: cwe, rule_id: n === "eval" ? "NIBRAS-SEC-002" : "JSTS-SEC-" + n,
          title, description: `${title} found in the AST.`, remediation: "Do not pass untrusted input; prefer safe APIs.", code_snippet: snip(l) });
      }
    }
    if (node.type === "AssignmentExpression" && node.left.type === "MemberExpression" && !node.left.computed && /^(innerHTML|outerHTML)$/.test(node.left.property.name)) {
      const l = node.loc.start.line;
      out.security.push({ id: `${file_path}::sec::innerHTML@${l}`, file_path, line: l, severity: "medium", confidence: "potential_risk", cwe_id: "CWE-79", rule_id: "NIBRAS-SEC-003",
        title: "innerHTML assignment", description: "Possible DOM XSS if the value contains user input.", remediation: "Use textContent or sanitize HTML.", code_snippet: snip(l) });
    }

    if (node.type === "VariableDeclarator" && node.id.type === "Identifier" && node.init && node.init.type === "StringLiteral" &&
        /secret|token|api_?key|passw|private_?key/i.test(node.id.name) && node.init.value.length >= 12) {
      const l = node.loc.start.line;
      out.security.push({ id: `${file_path}::sec::secret@${l}`, file_path, line: l, severity: "high", confidence: "potential_risk", cwe_id: "CWE-798", rule_id: "NIBRAS-SEC-001",
        title: "Hardcoded secret", description: `String literal assigned to '${node.id.name}'.`, remediation: "Move secrets to environment variables / a secret manager.", code_snippet: snip(l) });
    }
    if (node.type === "TemplateLiteral" && node.expressions.length && /\b(SELECT|INSERT|UPDATE|DELETE)\b[\s\S]*\b(FROM|INTO|SET|WHERE)\b/i.test(node.quasis.map(q => q.value.raw).join("?"))) {
      const l = node.loc.start.line;
      out.security.push({ id: `${file_path}::sec::sqli@${l}`, file_path, line: l, severity: "critical", confidence: "potential_risk", cwe_id: "CWE-89", rule_id: "NIBRAS-SEC-004",
        title: "SQL built with string interpolation", description: "Interpolated values in a SQL template string may allow SQL injection.", remediation: "Use parameterized queries.", code_snippet: snip(l) });
    }
    if (node.type === "Identifier" && !(parent && /^Import/.test(parent.type))) used.add(node.name);
    if (node.type === "JSXIdentifier") used.add(node.name);
  }, null);
  for (const imp of out.imports) {
    imp.unused_symbols = imp.imported_symbols.filter(n => !used.has(n));
    for (const n of imp.unused_symbols) out.diagnostics.push(diag(file_path, imp.line, 1, "info", "unused", "confirmed", "JSTS-UNUSED-001",
      `Unused import '${n}'`, `'${n}' is imported from '${imp.raw_specifier}' but never referenced in this file.`, `Remove '${n}' from the import.`, snip(imp.line)));
  }
  return out;
}
