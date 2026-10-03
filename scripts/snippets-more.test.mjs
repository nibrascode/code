// JavaScript, SQL və CSS hazır kod nümunələri: quruluş, işləmə yoxlaması və sorğu tanıma testləri.
import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import js from "../api/_snippets/javascript.js";
import sql from "../api/_snippets/sql.js";
import css from "../api/_snippets/css.js";
import { snippetReply, __internals } from "../api/_snippets.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PREFIX = { javascript: "js", sql: "sql", css: "css" };

for (const [lang, list] of [["javascript", js], ["sql", sql], ["css", css]]) {
  test(`${lang}: 100 nümunə, 20 səviyyə x 5, unikal, düzgün sahələr`, () => {
    assert.equal(list.length, 100);
    for (let lv = 1; lv <= 20; lv++) assert.equal(list.filter((s) => s.level === lv).length, 5, `səviyyə ${lv}`);
    assert.equal(new Set(list.map((s) => s.id)).size, 100);
    assert.equal(new Set(list.map((s) => s.title)).size, 100);
    assert.equal(new Set(list.map((s) => s.code)).size, 100);
    assert.equal(__internals.LEVEL_NAMES[lang].length, 20);
    for (const s of list) {
      assert.equal(s.lang, lang);
      assert.match(s.id, new RegExp(`^${PREFIX[lang]}-\\d\\d-[1-5]$`));
      assert.equal(s.id, `${PREFIX[lang]}-${String(s.level).padStart(2, "0")}-${s.id.slice(-1)}`);
      assert.ok(s.title.length > 3);
      assert.ok(Array.isArray(s.keywords) && s.keywords.length >= 5, s.id);
      assert.ok(s.keywords.every((k) => k === k.toLowerCase() && k.trim() === k), s.id);
      assert.ok(!s.code.includes("```"), s.id);
      assert.ok(s.code.endsWith("\n") && !s.code.endsWith("\n\n"), s.id);
      assert.ok(!/yarat/i.test(s.title + s.keywords.join(" ") + s.code), s.id + ": «yarat» sözü işlənməməlidir");
    }
  });
}

test("javascript nümunələri node ilə işləyir (10s, exit 0, çıxış var, brauzer/giriş/paket yoxdur)", { timeout: 300000 }, () => {
  const dir = mkdtempSync(join(tmpdir(), "jssn-"));
  for (const s of js) {
    assert.ok(!/\b(document|window|localStorage|alert|prompt|navigator|require|process|readline|XMLHttpRequest)\b|\bimport\s|\bfetch\(/.test(s.code), `${s.id}: qadağan API`);
    const f = join(dir, `${s.id}.js`);
    writeFileSync(f, s.code);
    const r = spawnSync("node", [f], { timeout: 10000, encoding: "utf-8", stdio: ["ignore", "pipe", "pipe"] });
    assert.equal(r.status, 0, `${s.id}: ${r.stderr}`);
    assert.equal(r.stderr.trim(), "", s.id);
    assert.ok(r.stdout.trim().length > 0, `${s.id}: çıxış yoxdur`);
  }
});

const PY_SQL = `
import sqlite3, json, sys
items = json.load(open(sys.argv[1], encoding="utf-8"))
bad = 0
for s in items:
    db = sqlite3.connect(":memory:", isolation_level=None)
    stmts, buf = [], ""
    for line in s["code"].split("\\n"):
        buf += line + "\\n"
        if sqlite3.complete_statement(buf):
            stmts.append(buf.strip()); buf = ""
    leftover = [l for l in buf.split("\\n") if l.strip() and not l.strip().startswith("--")]
    sel = 0
    try:
        if leftover: raise Exception("tamamlanmamış ifadə: " + " ".join(leftover)[:60])
        for st in stmts:
            cur = db.execute(st)
            if cur.description is not None:
                cur.fetchall(); sel += 1
        if sel == 0: raise Exception("SELECT yoxdur")
    except Exception as e:
        bad += 1; print("FAIL", s["id"], e)
print("bad", bad, "total", len(items))
sys.exit(1 if bad else 0)
`;

test("sql nümunələri SQLite ilə işləyir (python3 sqlite3)", { skip: spawnSync("python3", ["--version"]).error ? "python3 yoxdur" : false, timeout: 120000 }, () => {
  const dir = mkdtempSync(join(tmpdir(), "sqlsn-"));
  const f = join(dir, "sql.json");
  writeFileSync(f, JSON.stringify(sql));
  const r = spawnSync("python3", ["-c", PY_SQL, f], { encoding: "utf-8", timeout: 60000 });
  assert.equal(r.status, 0, r.stdout + r.stderr);
  for (const s of sql) assert.match(s.code, /CREATE\s|^\s*(WITH|SELECT)\b/im, s.id);
});

const VOID = new Set(["meta", "br", "hr", "img", "input", "link", "source", "col", "area", "base", "wbr"]);
function balanced(code) {
  const noScript = code.replace(/<script[\s\S]*?<\/script>/g, "<script></script>").replace(/<style[\s\S]*?<\/style>/g, "<style></style>").replace(/<!--[\s\S]*?-->/g, "");
  const stack = [];
  const re = /<\/?([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*?(\/?)>/g;
  let m;
  while ((m = re.exec(noScript))) {
    const name = m[1].toLowerCase();
    const closing = m[0][1] === "/";
    if (VOID.has(name) || m[2] === "/") continue;
    if (!closing) stack.push(name);
    else if (stack.pop() !== name) return `tag uyğunsuzluğu: ${name}`;
  }
  return stack.length ? `bağlanmayan: ${stack.join(",")}` : "";
}

test("css nümunələri tam HTML səhifədir: struktur, sintaksis, xarici resurs yoxdur", () => {
  const dir = mkdtempSync(join(tmpdir(), "csssn-"));
  for (const s of css) {
    const c = s.code;
    assert.match(c, /^<!DOCTYPE html>/i, s.id);
    assert.match(c, /<html lang="az">/, s.id);
    assert.match(c, /<meta charset="UTF-8">/, s.id);
    assert.match(c, /<meta name="viewport"/, s.id);
    assert.match(c, /<title>[^<]+<\/title>/, s.id);
    const style = c.match(/<style>([\s\S]*?)<\/style>/);
    assert.ok(style && style[1].trim().length > 40, `${s.id}: <style> boşdur`);
    const clean = style[1].replace(/\/\*[\s\S]*?\*\//g, "");
    assert.equal((clean.match(/{/g) || []).length, (clean.match(/}/g) || []).length, `${s.id}: mötərizə sayı`);
    assert.equal(balanced(c), "", s.id);
    assert.ok(!/@import|<link\b|<script[^>]*\bsrc=|https?:\/\/(?!nibrascode)/i.test(c), `${s.id}: xarici resurs`);
    [...c.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((m, i) => {
      const f = join(dir, `${s.id}-${i}.js`);
      writeFileSync(f, m[1]);
      const r = spawnSync("node", ["--check", f], { encoding: "utf-8" });
      assert.equal(r.status, 0, `${s.id}: ${r.stderr}`);
    });
  }
});

// Brauzerdə (Playwright + Chrome varsa): səhifələr xətasız yüklənir və hər CSS bəyanı tanınır
const CHROME = process.env.CHROME || ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"].find(existsSync);
let pw = null;
for (const where of [ROOT, "/workspace/terminal"]) {
  try { pw = createRequire(join(where, "x.js"))("playwright"); break; } catch {}
}
test("css nümunələri Chrome-da xətasız açılır və bütün bəyanlar tanınır", { skip: !pw || !CHROME ? "playwright/chrome yoxdur" : false, timeout: 240000 }, async () => {
  const browser = await pw.chromium.launch({ executablePath: CHROME, args: ["--no-sandbox"] });
  try {
    const page = await browser.newPage();
    const errs = [];
    page.on("pageerror", (e) => errs.push(String(e)));
    for (const s of css) {
      errs.length = 0;
      await page.setContent(s.code, { waitUntil: "load" });
      for (const b of await page.$$("button")) await b.click({ timeout: 500 }).catch(() => {});
      const bad = await page.evaluate(() => {
        const text = document.querySelector("style").textContent.replace(/\/\*[\s\S]*?\*\//g, "");
        const out = [];
        const re = /([a-zA-Z-]+)\s*:\s*([^;{}]+?)\s*(?=;|})/g;
        let m;
        while ((m = re.exec(text))) {
          const p = m[1];
          const v = m[2].replace(/\s*!important\s*$/, "");
          if (p.startsWith("--") || p.startsWith("-webkit-")) continue;
          if (!CSS.supports(p, v)) out.push(p + ": " + v);
        }
        return out;
      });
      assert.deepEqual(bad, [], s.id);
      assert.deepEqual(errs, [], s.id);
      assert.ok(await page.evaluate(() => [...document.styleSheets].some((x) => x.cssRules.length > 0)), s.id);
    }
  } finally {
    await browser.close();
  }
});

// ---------- Sorğu tanıma ----------
const FENCE = { javascript: "```javascript", sql: "```sql", css: "```html" };
const has = (r, lang) => r && r.includes(FENCE[lang]) && !r.includes("```python");

test("snippetReply: javascript sorğuları", () => {
  const cases = [
    ["javascript kod nümunəsi", "ask"], ["js kod yaz", "ask"], ["javascript massiv nümunə", "ask"], ["js map filter nümunə", "ask"],
    ["sadə javascript kodu", "ask"], ["javascript promise nümunə", "ask"], ["bana js örnek ver", "ask"], ["javascript example closure", "ask"],
    ["пример кода на javascript", "ask"], ["java script kod yaz", "ask"], ["كود جافا سكريبت", "ask"], ["js async await kod", "code"],
  ];
  for (const [q, mode] of cases) assert.ok(has(snippetReply(q, mode), "javascript"), q);
  assert.match(snippetReply("javascript 12 kod ver", "ask"), /12\/20/);
  assert.match(snippetReply("səviyyə 5 js", "ask"), /5\/20/);
  assert.match(snippetReply("js massiv nümunə", "ask"), /Massiv əsasları/);
  assert.match(snippetReply("javascript promise nümunə", "ask"), /Promise/i);
});

test("snippetReply: sql sorğuları", () => {
  const cases = [
    ["sql kod nümunəsi", "ask"], ["sql join nümunə", "ask"], ["sql select yaz", "ask"], ["sql group by nümunəsi", "ask"], ["sql 17-ci səviyyə", "ask"],
    ["sql window function nümunə", "ask"], ["sqlite kod nümunəsi", "ask"], ["пример sql join", "ask"], ["bana sql örnek ver", "ask"], ["sql left join", "code"], ["sql trigger nümunəsi", "ask"],
  ];
  for (const [q, mode] of cases) assert.ok(has(snippetReply(q, mode), "sql"), q);
  assert.match(snippetReply("sql 17-ci səviyyə", "ask"), /17\/20/);
  assert.match(snippetReply("sql join nümunə", "ask"), /JOIN/);
  assert.match(snippetReply("sql kod yaz", "ask"), /SQLite/);
});

test("snippetReply: css sorğuları (html blok kimi)", () => {
  const cases = [
    ["css kod nümunəsi", "ask"], ["css flexbox nümunə", "ask"], ["css grid nümunəsi", "ask"], ["css animasiya yaz", "ask"], ["css 9 kod ver", "ask"],
    ["css hover effekti nümunə", "ask"], ["css example dark mode", "ask"], ["css пример анимация", "ask"], ["css modal", "code"], ["bana css örnek ver", "ask"], ["css tooltip kod", "ask"],
  ];
  for (const [q, mode] of cases) {
    const r = snippetReply(q, mode);
    assert.ok(has(r, "css"), q);
    assert.match(r, /CSS/, q);
    assert.match(r, /```html\n<!DOCTYPE html>/, q);
  }
  assert.match(snippetReply("css 9 kod ver", "ask"), /9\/20/);
  assert.match(snippetReply("css flexbox nümunə", "ask"), /Flexbox/);
});

test("snippetReply: siyahı və səviyyə siyahısı", () => {
  for (const [q, head] of [["javascript siyahı", /JavaScript kod nümunələri/], ["sql siyahı", /SQL kod nümunələri/], ["css asandan çətinə", /CSS kod nümunələri/]]) {
    const r = snippetReply(q, "ask");
    assert.match(r, head, q);
    assert.ok(!r.includes("```"), q);
    assert.match(r, /20\./, q);
  }
  const lv = snippetReply("css level 8 list", "ask");
  assert.ok(lv && !lv.includes("```"));
});

test("snippetReply: java, json və başqa dillər AI-yə qalır", () => {
  const nulls = [
    "java kod nümunəsi", "java kod yaz", "java ilə sinif nümunə", "json nümunə", "json parse kod", "mysql kod nümunəsi", "postgresql sorğu nümunə",
    "typescript kod yaz", "node js kod yaz", "react css kod", "tailwind css nümunə", "scss kod nümunəsi", "python javascript kod", "sql python kod yaz",
    "javascript nədir", "css nədir", "sql nədir", "javascript kodum xəta verir", "css işləmir düzəlt", "كود جافا", "jsx komponent nümunə", "express js kod",
  ];
  for (const q of nulls) assert.equal(snippetReply(q, "ask"), null, q);
  assert.equal(snippetReply("java kod yaz", "code"), null);
  assert.equal(snippetReply("json kod", "code"), null);
});

test("snippetReply: birdən çox veb dili", () => {
  assert.ok(snippetReply("html css kart nümunəsi", "ask"), "html css kart");
  assert.ok(snippetReply("html javascript sayğac nümunə", "ask"), "html js");
  assert.match(snippetReply("html css siyahı", "ask"), /HTML kod nümunələri[\s\S]*CSS kod nümunələri/);
});

test("snippetReply: tarix/saat və səviyyə hədləri", () => {
  assert.match(snippetReply("javascript 25 kod ver", "ask"), /javascript/i);
  assert.ok(!snippetReply("sql 25 kod ver", "ask").includes("```"));
});
