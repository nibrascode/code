// Nibras AI: uzun kod blokları yığılı göstərilir (solma + «Davamını aç ▾» / «Bağla ▴»); «Aç», kopya və paylaşma həmişə TAM kodla işləyir (jsdom).
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { GAMES } from "../api/_games/index.js";
import { gameReply } from "../api/_game.js";
import { closeTruncatedFence, wantsLongCode } from "../api/chat.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));
const HTML = (f) => readFileSync(join(ROOT, f), "utf8");
const LINK = "https://nibrascode.com/ai";
const un = (s) => Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8");

const BIG = Array.from({ length: 60 }, (_, i) => `<p id="r${i}">sətir ${i}</p>`);
const LONG_HTML = "<!doctype html>\n<html>\n<body>\n" + BIG.join("\n") + "\n<script>var END = 1;</script>\n</body>\n</html>";
const SHORT_HTML = "<!doctype html>\n<html><body>salam</body></html>";
const fence = (lang, code) => "```" + lang + "\n" + code + "\n```";

test("ai.html və ai/index.html eynidir", () => {
  assert.equal(HTML("public/ai.html"), HTML("public/ai/index.html"));
});

for (const file of ["public/ai/index.html", "public/ai.html"]) {
  function boot({ reply = () => "Salam", storage = {}, clipboard = true } = {}) {
    const log = { clip: [], opened: [], shared: [] };
    const dom = new JSDOM(HTML(file), {
      url: LINK,
      runScripts: "dangerously",
      pretendToBeVisual: true,
      beforeParse(w) {
        for (const [k, v] of Object.entries(storage)) w.localStorage.setItem(k, v);
        w.TextEncoder = TextEncoder;
        w.open = (u) => { log.opened.push(u); return null; };
        w.HTMLElement.prototype.scrollIntoView = function () {};
        if (clipboard) Object.defineProperty(w.navigator, "clipboard", { configurable: true, value: { writeText: async (t) => { log.clip.push(t); } } });
        Object.defineProperty(w.navigator, "share", { configurable: true, value: async (o) => { log.shared.push(o); } });
        w.fetch = async (url, init = {}) => {
          const u = new URL(url, "https://nibrascode.com");
          const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
          if (u.pathname === "/api/chat") return out(200, { reply: reply(JSON.parse(init.body)) });
          if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
          return out(200, { ok: true });
        };
      },
    });
    const w = dom.window, d = w.document;
    return { w, d, log,
      async say(t) { d.querySelector("#inp").value = t; d.querySelector("#form").dispatchEvent(new w.Event("submit", { cancelable: true, bubbles: true })); await wait(60); },
      cbs() { return d.querySelectorAll("#msgs .msg.b .cb"); } };
  }

  test(`${file}: uzun kod yığılıdır (.col, solma, «Davamını aç ▾»), qısa kod isə yox`, { skip }, async () => {
    const p = boot({ reply: (r) => (r.message === "uzun" ? "Budur:\n" + fence("html", LONG_HTML) : "Budur:\n" + fence("html", SHORT_HTML)) });
    await p.say("uzun");
    const cb = p.cbs()[0];
    assert.ok(cb.classList.contains("col"));
    assert.ok(cb.querySelector(".fade"));
    const more = cb.querySelector(".morebtn");
    assert.equal(more.textContent, "Davamını aç ▾");
    assert.equal(more.getAttribute("aria-expanded"), "false");
    assert.equal(cb.querySelector("pre code").textContent.trim(), LONG_HTML.trim(), "tam kod DOM-dadır");
    assert.ok(cb.querySelector(".runbtn"), "«Aç» yerindədir");
    await p.say("qisa");
    const short = p.cbs()[1];
    assert.ok(!short.classList.contains("col"));
    assert.equal(short.querySelector(".morebtn").hidden, true, "qısa kodda düymə gizlidir");
    assert.ok(short.querySelector(".runbtn"));
    const css = HTML(file);
    assert.match(css, /\.msg \.cb\.col pre \{[^}]*max-height: 300px/);
    assert.match(css, /\.morebtn \{[^}]*min-height: 34px/);
    assert.match(css, /\.msg \.cb pre \{[^}]*white-space: pre-wrap/, "uzun sətirlər qatlanır, yan tərəfdən kəsilmir");
    p.w.close();
  });

  test(`${file}: «Davamını aç ▾» ↔ «Bağla ▴» (toggle), kod dəyişmir`, { skip }, async () => {
    const p = boot({ reply: () => fence("javascript", LONG_HTML) });
    await p.say("kod");
    const cb = p.cbs()[0];
    const more = cb.querySelector(".morebtn");
    more.click();
    assert.ok(!cb.classList.contains("col"), "açıldı");
    assert.equal(more.textContent, "Bağla ▴");
    assert.equal(more.getAttribute("aria-expanded"), "true");
    more.click();
    assert.ok(cb.classList.contains("col"), "bağlandı");
    assert.equal(more.textContent, "Davamını aç ▾");
    assert.equal(more.getAttribute("aria-expanded"), "false");
    assert.equal(cb.querySelector("pre code").textContent.trim(), LONG_HTML.trim());
    p.w.close();
  });

  test(`${file}: «Aç» yığılı olsa da TAM kodu açır; kopya cavabın tam mətnidir; paylaşma işləyir`, { skip }, async () => {
    const p = boot({ reply: () => "Giriş\n" + fence("html", LONG_HTML) });
    await p.say("kod");
    const cb = p.cbs()[0];
    assert.ok(cb.classList.contains("col"));
    cb.querySelector(".runbtn").click();
    await wait(60);
    assert.equal(p.log.opened.length, 1);
    const m = /#l=html&c=([A-Za-z0-9_-]+)$/.exec(p.log.opened[0]);
    assert.ok(m, p.log.opened[0].slice(0, 80));
    assert.equal(un(m[1]), LONG_HTML, "tam kod açıldı (sondakı </html> daxil)");
    assert.ok(un(m[1]).endsWith("</html>"));
    // kopya
    p.d.querySelector("#msgs .msg.b .cpbtn").click();
    await wait(20);
    assert.ok(p.log.clip[0].includes(LONG_HTML), "kopya tam kodu daşıyır");
    assert.ok(p.log.clip[0].includes("</html>"));
    // paylaşma
    p.d.querySelector("#msgs .msg.b .shbtn").click();
    await wait(20);
    assert.equal(p.log.shared.length, 1);
    assert.ok(p.log.shared[0].text.endsWith("Nibras AI: " + LINK));
    // açıq vəziyyətdə də eyni
    cb.querySelector(".morebtn").click();
    cb.querySelector(".runbtn").click();
    await wait(60);
    assert.equal(un(/#l=html&c=([A-Za-z0-9_-]+)$/.exec(p.log.opened[1])[1]), LONG_HTML);
    p.w.close();
  });

  test(`${file}: söhbət bərpasında da uzun kod yığılıdır və «Aç» tam kodu açır`, { skip }, async () => {
    const now = Date.now();
    const store = { cur: "c1", items: { c1: { id: "c1", title: "kod", mode: "chat", t: now, msgs: [{ k: "u", t: "kod yaz" }, { k: "b", t: "Budur:\n" + fence("html", LONG_HTML) }, { k: "b", t: fence("html", SHORT_HTML) }] } }, pm: null };
    const p = boot({ storage: { nibras_chats_v1: JSON.stringify(store) } });
    await wait(60);
    const cbs = p.cbs();
    assert.equal(cbs.length, 2);
    assert.ok(cbs[0].classList.contains("col"));
    assert.ok(cbs[0].querySelector(".morebtn"));
    assert.ok(!cbs[1].classList.contains("col"));
    cbs[0].querySelector(".runbtn").click();
    await wait(60);
    assert.equal(un(/#l=html&c=([A-Za-z0-9_-]+)$/.exec(p.log.opened[0])[1]), LONG_HTML);
    p.w.close();
  });

  test(`${file}: hazır oyun cavabı — tam kod DOM-da və «Aç» tam oyunu açır (hər oyun)`, { skip }, async () => {
    for (const g of GAMES) {
      const reply = await gameReply(g.slug.replace(/-/g, " ") + " oyun kodu yaz", []);
      const code = /```html\n([\s\S]*?)```$/.exec(reply)[1].replace(/\n$/, "");
      assert.ok(code.trimEnd().endsWith("</html>"), g.slug);
      const p = boot({ reply: () => reply });
      await p.say("oyun kodu yaz");
      const cb = p.cbs()[0];
      assert.equal(cb.querySelector("pre code").textContent.replace(/\n$/, ""), code, g.slug + ": DOM tam");
      assert.ok(cb.classList.contains("col"), g.slug + " yığılıdır");
      cb.querySelector(".runbtn").click();
      await wait(60);
      assert.equal(p.log.opened.length, 1, g.slug);
      const url = p.log.opened[0];
      assert.ok(url.length <= 60000 + 200, g.slug + " URL həddi");
      assert.equal(un(/c=([A-Za-z0-9_-]+)$/.exec(url)[1]), code, g.slug + ": «Aç» tam oyun");
      p.w.close();
    }
  });
}

test("closeTruncatedFence: açıq ``` bloku bağlanır, tam cavab toxunulmur", () => {
  const cut = "Budur:\n```html\n<html><body>";
  const fixed = closeTruncatedFence(cut);
  assert.equal((fixed.match(/```/g) || []).length % 2, 0);
  assert.match(fixed, /yarımçıq qala bilər/);
  const whole = "Budur:\n```html\n<html></html>\n```";
  assert.equal(closeTruncatedFence(whole), whole);
});

test("wantsLongCode: kod/oyun sorğuları uzun, sadə söhbət qısa limit alır", () => {
  assert.equal(wantsLongCode("tetris oyunu kodu yaz", "chat"), true);
  assert.equal(wantsLongCode("salam", "code"), true);
  assert.equal(wantsLongCode("اكتب كود لعبة"), true);
  assert.equal(wantsLongCode("напиши код игры"), true);
  assert.equal(wantsLongCode("salam necəsən", "chat"), false);
});

for (const file of ["public/ai/index.html", "public/ai.html"]) {
  test(`${file}: az sətirli, lakin çox uzun (minify) kod da yığılır`, { skip }, async () => {
    const minified = "<!doctype html><html><body><script>" + "var a=1;".repeat(300) + "</script></body></html>";
    const dom = new JSDOM(HTML(file), { url: LINK, runScripts: "dangerously", pretendToBeVisual: true, beforeParse(w) {
      w.TextEncoder = TextEncoder;
      w.fetch = async (url) => { const u = new URL(url, "https://nibrascode.com"); const body = u.pathname === "/api/chat" ? { reply: fence("html", minified) } : { ok: true, storage: false, chats: [] }; return { ok: true, status: 200, text: async () => JSON.stringify(body), json: async () => body }; };
    } });
    const d = dom.window.document;
    d.querySelector("#inp").value = "kod";
    d.querySelector("#form").dispatchEvent(new dom.window.Event("submit", { cancelable: true, bubbles: true }));
    await wait(60);
    const cb = d.querySelector("#msgs .cb");
    assert.ok(cb.classList.contains("col"));
    assert.equal(cb.querySelector(".morebtn").hidden, false);
    assert.equal(cb.querySelector("pre code").textContent.trim(), minified);
    dom.window.close();
  });
}

// Real brauzer (Chrome): ölçülmüş hündürlük, solma, düymə ölçüsü, «Aç» tam kodla
import http from "node:http";
import { existsSync } from "node:fs";
import chat from "../api/chat.js";
const CHROME = process.env.CHROME || ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"].find(existsSync);
let pw = null;
for (const where of [ROOT, "/workspace/terminal"]) { try { pw = createRequire(join(where, "x.js"))("playwright"); break; } catch {} }
const skipB = !pw || !CHROME ? "playwright/chrome yoxdur" : false;

test("brauzer: oyun kodu 300px-ə yığılır, düymə ≥32px, açılanda tam hündürlük, «Aç» tam </html> kodunu açır", { skip: skipB }, async () => {
  const srv = http.createServer((req, res) => {
    if (req.url === "/api/chat") {
      const r = Object.assign(res, { status(c) { res.statusCode = c; return res; }, json(o) { res.setHeader("content-type", "application/json"); res.end(JSON.stringify(o)); } });
      let b = ""; req.on("data", (c) => (b += c)); req.on("end", () => { req.body = JSON.parse(b || "{}"); chat(req, r); });
      return;
    }
    const f = join(ROOT, "public", req.url.split("?")[0] === "/" ? "ai.html" : req.url.split("?")[0]);
    try { res.end(readFileSync(f)); } catch { res.statusCode = 404; res.end(); }
  }).listen(0);
  const port = srv.address().port;
  const browser = await pw.chromium.launch({ executablePath: CHROME });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 800 } });
    await page.addInitScript(() => { window.__opened = []; window.open = (u) => { window.__opened.push(u); return null; }; });
    await page.goto(`http://localhost:${port}/`);
    await page.fill("#inp", "oyun kodu yaz");
    await page.press("#inp", "Enter");
    await page.waitForSelector(".cb");
    const st = () => page.evaluate(() => { const cb = document.querySelector(".cb"); const pre = cb.querySelector("pre"); const mb = cb.querySelector(".morebtn").getBoundingClientRect(); return { h: pre.getBoundingClientRect().height, sh: pre.scrollHeight, col: cb.classList.contains("col"), bh: mb.height, txt: cb.querySelector(".morebtn").textContent, code: pre.textContent }; });
    const a = await st();
    assert.equal(a.col, true);
    assert.ok(a.h <= 301 && a.sh > 400, JSON.stringify({ h: a.h, sh: a.sh }));
    assert.ok(a.bh >= 32, "hit area " + a.bh);
    assert.equal(a.txt, "Davamını aç ▾");
    assert.ok(a.code.trimEnd().endsWith("</html>"), "tam kod DOM-da");
    await page.click(".runbtn");
    await page.waitForFunction(() => window.__opened.length === 1);
    const url = await page.evaluate(() => window.__opened[0]);
    assert.match(url, /#l=html&c=/);
    await page.click(".morebtn");
    const b = await st();
    assert.equal(b.col, false);
    assert.ok(b.h >= b.sh - 1, "tam açıldı");
    assert.equal(b.txt, "Bağla ▴");
    await page.click(".morebtn");
    assert.equal((await st()).col, true);
  } finally { await browser.close(); srv.close(); }
});
