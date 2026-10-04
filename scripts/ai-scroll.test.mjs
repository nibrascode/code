// Nibras AI: yeni cavab gələndə uzun cavabın BAŞI görünür (aşağıya tullanmır); qısa cavab tam görünür; istifadəçi mesajı aşağıya çəkilir.
// jsdom-da layout yoxdur: ölçülər (offsetHeight, getBoundingClientRect, clientHeight, scrollHeight, scrollTop) test üçün saxta verilir.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));
const VIEW = 500, FULL = 5000, ABS = 3000; // görünüş hündürlüyü, tam məzmun, cavab balonunun məzmundakı mütləq yeri (görünüşə nisbətən: ABS - scrollTop)

for (const file of ["public/ai/index.html", "public/ai.html"]) {
  function boot() {
    const dom = new JSDOM(readFileSync(join(ROOT, file), "utf8"), {
      url: "https://nibrascode.com/ai",
      runScripts: "dangerously",
      pretendToBeVisual: true,
      beforeParse(w) {
        w.TextEncoder = TextEncoder;
        const P = w.HTMLElement.prototype;
        const isAns = (e) => e.classList.contains("msg") && e.classList.contains("b") && !e.querySelector(".dots");
        const st = new WeakMap();
        Object.defineProperty(P, "scrollTop", { configurable: true, get() { return st.get(this) || 0; }, set(v) { st.set(this, v); } });
        Object.defineProperty(P, "scrollHeight", { configurable: true, get() { return this.id === "msgs" ? FULL : 0; } });
        Object.defineProperty(P, "clientHeight", { configurable: true, get() { return this.id === "msgs" ? VIEW : 0; } });
        Object.defineProperty(P, "offsetHeight", { configurable: true, get() { return isAns(this) ? (this.textContent.length > 300 ? 900 : 60) : 0; } });
        P.getBoundingClientRect = function () { const top = this.id === "msgs" ? 0 : isAns(this) ? ABS - (st.get(w.document.getElementById("msgs")) || 0) : 0; return { top, bottom: top, left: 0, right: 0, width: 0, height: 0 }; };
        w.fetch = async (url, init = {}) => {
          const u = new URL(url, "https://nibrascode.com");
          const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
          if (u.pathname === "/api/chat") {
            const m = JSON.parse(init.body).message;
            return out(200, { reply: m.startsWith("uzun") ? "Uzun cavab sətri. ".repeat(60) : "Qısa cavab" });
          }
          if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
          return out(200, { ok: true });
        };
      },
    });
    const d = dom.window.document;
    return { w: dom.window, d, msgs: d.querySelector("#msgs"), say: async (t) => { d.querySelector("#inp").value = t; d.querySelector("#btn").click(); await wait(150); } };
  }

  test(`${file}: uzun cavab — balonun başı görünür, sona tullanmır; istifadəçi mesajı aşağıya çəkilir`, { skip }, async () => {
    const p = boot();
    p.msgs.scrollTop = 100;
    await p.say("uzun sual");
    assert.equal(p.msgs.scrollTop, ABS - 8, "cavabın başına (8px boşluqla) hizalanır");
    assert.notEqual(p.msgs.scrollTop, FULL);
    const bots = p.d.querySelectorAll("#msgs .msg.b");
    assert.equal(bots.length, 1);
    assert.ok(bots[0].textContent.length > 300);
    p.w.close();
  });

  test(`${file}: qısa cavab tam görünür (sona), göndərilən mesaj və gözləmə nöqtələri aşağıya çəkilir`, { skip }, async () => {
    const p = boot();
    // gözləmə nöqtələri əlavə olunanda scroll sona çəkilir (istifadəçi öz mesajını və «yazır…» görsün)
    p.msgs.scrollTop = 0;
    p.d.querySelector("#inp").value = "qisa sual";
    p.d.querySelector("#btn").click();
    await wait(0);
    assert.equal(p.msgs.scrollTop, FULL, "göndərilən mesaj/nöqtələr: aşağı");
    await wait(150);
    assert.equal(p.msgs.scrollTop, FULL, "qısa cavab ekrana sığır: tam görünür");
    p.w.close();
  });

  test(`${file}: ardıcıl uzun cavablar hər dəfə öz başına hizalanır; söhbət bərpasında sona çəkilir`, { skip }, async () => {
    const p = boot();
    await p.say("uzun bir");
    p.msgs.scrollTop = 1234;
    await p.say("uzun iki");
    assert.equal(p.msgs.scrollTop, ABS - 8);
    // səhifə yenidən yüklənəndə (renderItem) son mesaja çəkilir
    const html = readFileSync(join(ROOT, file), "utf8");
    assert.match(html, /bubble\(m\.t, m\.k, m\.i \|\| "", true\)/);
    assert.match(html, /function revealAnswer\(el\)/);
    p.w.close();
  });
}
