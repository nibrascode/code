// Python/HTML kod nümunələri kitabxanası və yerli cavablar üçün testlər.
import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import py from "../api/_snippets/python.js";
import html from "../api/_snippets/html.js";
import { snippetReply } from "../api/_snippets.js";
import { localReply } from "../api/_local.js";
import { cannedReply } from "../api/_canned.js";

for (const [lang, list] of [["python", py], ["html", html]]) {
  test(`${lang}: 100 nümunə, 20 səviyyə x 5, unikal`, () => {
    assert.equal(list.length, 100);
    for (let lv = 1; lv <= 20; lv++) assert.equal(list.filter((s) => s.level === lv).length, 5, `səviyyə ${lv}`);
    assert.equal(new Set(list.map((s) => s.id)).size, 100);
    assert.equal(new Set(list.map((s) => s.title)).size, 100);
    assert.equal(new Set(list.map((s) => s.code)).size, 100);
    for (const s of list) {
      assert.equal(s.lang, lang);
      assert.ok(Array.isArray(s.keywords) && s.keywords.length > 0);
      assert.ok(s.keywords.every((k) => k === k.toLowerCase()));
      assert.ok(!s.code.includes("```"), s.id);
    }
  });
}

test("html nümunələri tam sənəddir", () => {
  for (const s of html) assert.match(s.code, /^<!DOCTYPE html>/i, s.id);
});

test("python nümunələri işləyir (python3 varsa)", { skip: spawnSync("python3", ["--version"]).error ? "python3 yoxdur" : false }, () => {
  const dir = mkdtempSync(join(tmpdir(), "pysn-"));
  for (const s of py) {
    const f = join(dir, `${s.id}.py`);
    writeFileSync(f, s.code);
    const r = spawnSync("python3", [f], { timeout: 10000, encoding: "utf-8", stdio: ["ignore", "pipe", "pipe"] });
    assert.equal(r.status, 0, `${s.id}: ${r.stderr}`);
  }
});

test("snippetReply: kod sorğuları cavab alır", () => {
  const cases = [
    ["python kod nümunəsi", "ask", "python"], ["html kod yaz", "ask", "html"], ["sadə python kodu", "ask", "python"],
    ["python for dövrü nümunə", "ask", "python"], ["html form nümunəsi", "ask", "html"], ["level 5 python", "ask", "python"],
    ["səviyyə 12 html", "ask", "html"], ["python 10 kod ver", "ask", "python"], ["python code example", "ask", "python"],
    ["пример кода на python", "ask", "python"], ["bana python kod örneği ver", "ask", "python"], ["todo tətbiqi", "code", "html"],
  ];
  for (const [q, mode, lang] of cases) {
    const r = snippetReply(q, mode);
    assert.ok(r && r.includes("```" + lang), q);
  }
  assert.match(snippetReply("python 10 kod ver", "ask"), /10\/20/);
  assert.match(snippetReply("səviyyə 12 html", "ask"), /12\/20/);
});

test("snippetReply: siyahı sorğusu", () => {
  const r = snippetReply("python asandan çətinə", "ask");
  assert.ok(r && !r.includes("```"));
});

test("snippetReply: uyğun olmayanlar null", () => {
  for (const q of ["javascript kod yaz", "python nədir", "css animasiya", "python flask kod", "python kodum xəta verir", "", "salam necəsən", "java kod nümunəsi", "Azərbaycanın paytaxtı hansıdır"]) {
    assert.equal(snippetReply(q, "ask"), null, q);
  }
  assert.equal(snippetReply("javascript kod yaz", "code"), null);
});

test("localReply: sadə sorğular", () => {
  assert.match(localReply("salam necəsən"), /Salam/);
  assert.match(localReply("sağ ol"), /Buyur/);
  assert.equal(localReply("5+3"), "5 + 3 = 8");
  assert.match(localReply("saat neçədir"), /Bakı/);
  for (const q of ["2024-10-03", "3:30", "salam python kod yaz", "python nədir", "salam, mənə həyat haqqında izah et"]) assert.equal(localReply(q), null, q);
});

test("cannedReply dəyişməyib", () => {
  assert.equal(typeof cannedReply, "function");
  assert.equal(cannedReply("python kod nümunəsi"), null);
});
