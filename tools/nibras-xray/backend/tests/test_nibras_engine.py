import io
import zipfile
import unittest
from fastapi.testclient import TestClient
from app.main import app
from app.services.zip_scanner import validate_and_extract_zip, ZipSecurityError

client = TestClient(app)


def create_sample_zip() -> bytes:
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zf:
        # 1. TypeScript auth service with MULTI-LINE signature, hardcoded secret, SQLi, cycle import, const reassignment
        zf.writestr(
            "src/auth/authService.ts",
            """import { hashPassword, unusedHelper } from '../utils/crypto';
import { formatAudit } from './sessionManager';

const JWT_SECRET = "nibras_demo_jwt_secret_NOT_REAL";

export async function authenticateUser(
    email: string,
    rawPass: string = "default_pass"
): Promise<boolean> {
    let attempts = 0;
    const locked = false;
    attempts += 1;
    locked = true;
    const digest = hashPassword(rawPass);
    const sql = `SELECT * FROM users WHERE email = '${email}' AND pass = '${digest}'`;
    if (email == "admin") {
        return true;
    }
    formatAudit(email);
    return false;
}
"""
        )
        # 2. Circular import back to authService + DOM XSS + eval
        zf.writestr(
            "src/auth/sessionManager.ts",
            """import { authenticateUser } from './authService';

export function formatAudit(user: string): string {
    const el = document.getElementById('audit');
    if (el) {
        el.innerHTML = `<div class="user">${user}</div>`;
    }
    eval("console.log('auditlogged')");
    return user.trim();
}
"""
        )
        # 3. Utility leaf file
        zf.writestr(
            "src/utils/crypto.ts",
            """export function hashPassword(input: string): string {
    let acc = input.trim();
    return "hashed_" + acc;
}

export function unusedHelper(): number {
    return 42;
}
"""
        )
        # 4. Broken TypeScript syntax file to verify real @babel/parser AST syntax error detection
        zf.writestr(
            "src/utils/brokenTsSyntax.ts",
            """export function brokenTs(a: number, b: number): number {
    const x = a + * b;
    return x;
}
"""
        )
        # 5. Python data processor with mutable default arg, bare except, eval, and syntax error in another file
        zf.writestr(
            "scripts/processor.py",
            """import os
import json

def transform_records(items=[], scale: int = 2) -> list:
    results = []
    try:
        for item in items:
            computed = eval(str(item)) * scale
            results.append(computed)
    except:
        pass
    return results
"""
        )
        zf.writestr(
            "scripts/broken_syntax.py",
            """def broken_func(x, y)
    return x + y
"""
        )
    return buf.getvalue()


class TestNibrasXRayBackend(unittest.TestCase):
    def test_health_endpoint_and_ui_root(self):
        resp = client.get("/api/v1/health")
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.json()["product"], "Nibras X-Ray")
        self.assertIn("@babel/parser", resp.json()["parsers"]["javascript_typescript"])

        ui_resp = client.get("/")
        self.assertEqual(ui_resp.status_code, 200)

    def test_path_traversal_protection(self):
        buf = io.BytesIO()
        with zipfile.ZipFile(buf, "w") as zf:
            zf.writestr("../../etc/passwd", "root:x:0:0")
        with self.assertRaises(ZipSecurityError):
            validate_and_extract_zip(buf.getvalue(), "malicious")

    def test_full_babel_and_python_ast_pipeline(self):
        zip_bytes = create_sample_zip()
        resp = client.post(
            "/api/v1/projects/analyze-zip",
            files={"file": ("fintech-core.zip", zip_bytes, "application/zip")},
        )
        self.assertEqual(resp.status_code, 200, resp.text)
        data = resp.json()

        # Verify all 6 files analyzed
        self.assertEqual(data["health"]["total_files"], 6)
        self.assertIn("TypeScript", data["health"]["languages_breakdown"])
        self.assertIn("Python", data["health"]["languages_breakdown"])

        # Verify multi-line TypeScript function parsed accurately by @babel/parser
        fn_map = {f["qualified_name"]: f for f in data["functions"]}
        self.assertIn("authenticateUser", fn_map)
        auth_fn = fn_map["authenticateUser"]
        self.assertEqual(len(auth_fn["parameters"]), 2)
        self.assertEqual(auth_fn["parameters"][1]["default_value"], '"default_pass"')
        self.assertEqual(auth_fn["return_type"], "Promise<boolean>")

        # Verify cross-file import-aware call graph resolution
        self.assertIn("src/utils/crypto.ts::hashPassword", auth_fn["calls"])
        self.assertIn("src/auth/sessionManager.ts::formatAudit", auth_fn["calls"])

        # Verify circular dependency detection between authService.ts and sessionManager.ts
        cycles = data["dependency_graph"]["circular_dependencies"]
        self.assertTrue(len(cycles) >= 1, f"Expected circular dependency, got {cycles}")

        # Verify Error Detective (both @babel/parser TS SyntaxError AND Python SyntaxError + logic checks)
        rule_ids = {d["rule_id"] for d in data["diagnostics"]}
        self.assertIn("JSTS-AST-SYNTAX-001", rule_ids)  # Real @babel/parser syntax error on `a + * b`
        self.assertIn("PY-SYNTAX-001", rule_ids)        # Real Python ast syntax error
        self.assertIn("PY-LOGIC-001", rule_ids)         # Mutable default arg
        self.assertIn("PY-LOGIC-002", rule_ids)         # Bare except
        self.assertIn("JSTS-LOGIC-001", rule_ids)       # Const reassignment
        self.assertIn("JSTS-UNUSED-001", rule_ids)      # AST unused import

        # Verify Security X-Ray
        sec_rules = {s["rule_id"] for s in data["security_findings"]}
        self.assertIn("NIBRAS-SEC-001", sec_rules)  # Hardcoded secret
        self.assertIn("NIBRAS-SEC-002", sec_rules)  # JS eval
        self.assertIn("NIBRAS-SEC-003", sec_rules)  # DOM XSS
        self.assertIn("NIBRAS-SEC-004", sec_rules)  # SQLi
        self.assertIn("PY-SEC-001", sec_rules)      # Python eval

        # Verify workspace live-edit endpoint (/api/v1/projects/analyze-workspace)
        ws_resp = client.post(
            "/api/v1/projects/analyze-workspace",
            json={
                "project_name": "live-workspace",
                "files": {
                    "src/index.ts": "export const greet = (name: string): string => `Hello ${name}`;"
                },
            },
        )
        self.assertEqual(ws_resp.status_code, 200)
        self.assertEqual(ws_resp.json()["functions"][0]["name"], "greet")

        # Verify SARIF v2.1.0 export endpoint
        sarif_resp = client.get(f"/api/v1/projects/{data['project_id']}/sarif")
        self.assertEqual(sarif_resp.status_code, 200)
        self.assertEqual(sarif_resp.json()["version"], "2.1.0")

        # Verify Project DNA signature endpoint
        dna_resp = client.get(f"/api/v1/projects/{data['project_id']}/dna")
        self.assertEqual(dna_resp.status_code, 200)
        self.assertTrue(dna_resp.json()["dna_signature"].startswith("NX-"))

        # Verify Executive HTML Report endpoint
        rep_resp = client.get(f"/api/v1/projects/{data['project_id']}/executive-report")
        self.assertEqual(rep_resp.status_code, 200)
        self.assertIn("Nibras X-Ray — Executive Architecture", rep_resp.text)

        # Verify Source-to-Sink Taint Flows endpoint
        taint_resp = client.get(f"/api/v1/projects/{data['project_id']}/taint-flows")
        self.assertEqual(taint_resp.status_code, 200)
        self.assertTrue(taint_resp.json()["taint_flow_count"] >= 3)
        self.assertTrue(len(sarif_resp.json()["runs"][0]["results"]) >= 5)


if __name__ == "__main__":
    unittest.main()
