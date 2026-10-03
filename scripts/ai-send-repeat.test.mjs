// REGRESSION: Nibras AI-də ilk cavabdan sonra göndər düyməsi bağlı qalırdı (send() btn.disabled=true edirdi,
// düyməni yenidən açan paint() kodu limit göstəricisi silinərkən götürülmüşdü). Burada düymə KLİKİ və Enter ilə
// ardıcıl çoxlu göndərmə, hər cavab növü üçün yoxlanır (jsdom, real api/chat.js).
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import handler from "../api/chat.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HTML = fs.readFileSync(path.join(ROOT, "public/ai/index.html"), "utf8");
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(path.join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));

function boot({ failChat = null } = {}) {
  const requests = [];
  const errors = [];
  const dom = new JSDOM(HTML, {
    url: "https://nibrascode.com/ai",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(w) {
      w.TextEncoder = TextEncoder;
      w.addEventListener("error", (e) => errors.push(String(e.message || e.error)));
      w.fetch = async (url, init = {}) => {
        const u = new URL(url, "https://nibrascode.com");
        const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
        if (u.pathname === "/api/chat") {
          const req = JSON.parse(init.body);
          requests.push(req);
          if (failChat === "network") throw new TypeError("Failed to fetch");
          if (failChat === "500") return out(500, { error: "Xəta oldu" });
          const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
          await handler({ method: "POST", body: req }, res);
          return out(200, res.body);
        }
        if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
        return out(200, { ok: true });
      };
    },
  });
  const w = dom.window;
  const d = w.document;
  const btn = d.querySelector("#btn");
  const inp = d.querySelector("#inp");
  const bots = () => d.querySelectorAll("#msgs .msg.b").length;
  return {
    w, d, btn, inp, requests, errors, bots,
    // real istifadəçi kimi: yaz və göndər düyməsinə KLİK et (disabled düymə submit etmir)
    async click(text) {
      inp.value = text;
      const before = requests.length;
      btn.click();
      await wait(80);
      return requests.length - before;
    },
    async enter(text) {
      inp.value = text;
      const before = requests.length;
      inp.dispatchEvent(new w.KeyboardEvent("keydown", { key: "Enter", bubbles: true, cancelable: true }));
      await wait(80);
      return requests.length - before;
    },
  };
}

async function withAI(fn) {
  const realFetch = globalThis.fetch;
  const prev = process.env.GROQ_API_KEY;
  process.env.GROQ_API_KEY = "test-key";
  globalThis.fetch = async () => ({ ok: true, status: 200, json: async () => ({ choices: [{ message: { content: "Dağlar haqqında qısa cavab." } }] }) });
  try { return await fn(); } finally {
    globalThis.fetch = realFetch;
    if (prev === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = prev;
  }
}

test("ai.html və ai/index.html eynidir", () => {
  assert.equal(fs.readFileSync(path.join(ROOT, "public/ai.html"), "utf8"), HTML);
});

test("göndər düyməsi: hər cavab növündən sonra (AI, hazır, tövhid, ayə, dini ilk cavab/bildiriş) klik və Enter yenə işləyir", { skip }, async () => {
  await withAI(async () => {
    const p = boot();
    const seq = [
      ["Mənə dağlar haqqında qısa hekayə yaz", "AI"],
      ["salam", "hazır"],
      ["Şirk neçə qismə bölünür", "tövhid + bildiriş"],
      ["Ayətül Kürsi", "Quran ayəsi"],
      ["Sələfilik nədir", "hazır dini"],
      ["2+2 neçə edir", "hesab"],
      ["Allahın isimləri haqqında danış", "dini/AI"],
    ];
    let expected = 0;
    for (let i = 0; i < seq.length; i++) {
      const [q, label] = seq[i];
      assert.equal(p.btn.disabled, false, `göndərmədən əvvəl düymə bağlıdır (${i}: ${label})`);
      const sent = i % 2 === 0 ? await p.click(q) : await p.enter(q);
      assert.equal(sent, 1, `sorğu getmədi (${i}: ${label}) — düymə/Enter cavabsızdır`);
      expected++;
      assert.equal(p.bots(), expected, `cavab görünmədi (${i}: ${label})`);
      assert.equal(p.btn.disabled, false, `cavabdan sonra düymə bağlı qaldı (${i}: ${label})`);
      assert.equal(p.inp.value, "");
    }
    assert.deepEqual(p.errors, [], "səhifədə JS xətası var");
    assert.equal(p.d.querySelectorAll("#msgs .nt").length, 1, "bildiriş yalnız bir dəfə");
    assert.ok(p.d.querySelector("#msgs .atr, #msgs .ar, #msgs .msg.b"), "render");
  });
});

test("göndər düyməsi: server xətası (500) və şəbəkə xətasından sonra da açılır", { skip }, async () => {
  for (const failChat of ["500", "network"]) {
    const p = boot({ failChat });
    for (let i = 0; i < 3; i++) {
      assert.equal(await p.click("test sualı " + i), 1, failChat + " #" + i);
      assert.equal(p.btn.disabled, false, failChat + " düymə bağlı qaldı #" + i);
    }
    assert.equal(p.bots(), 3);
  }
});

test("göndər düyməsi: cavab gözlənilərkən ikinci klik sorğunu təkrarlamır, cavabdan sonra yenə işləyir", { skip }, async () => {
  const p = boot();
  const first = p.click("salam");
  p.inp.value = "salam";
  p.btn.click(); // gözləmə zamanı
  await first;
  assert.equal(p.requests.length, 1);
  assert.equal(p.btn.disabled, false);
  assert.equal(await p.click("necəsən"), 1);
});

test("göndər düyməsi: render zamanı istisna olsa da düymə bağlı qalmır", { skip }, async () => {
  const p = boot();
  const msgs = p.w.document.getElementById("msgs");
  const real = msgs.appendChild.bind(msgs);
  let n = 0;
  // 1: istifadəçi mesajı, 2: gözləmə nöqtələri, 3: cavab → burada render istisnası
  msgs.appendChild = function (el) { if (++n === 3) throw new Error("render xətası"); return real(el); };
  p.inp.value = "salam";
  p.btn.click();
  await wait(80);
  assert.equal(p.btn.disabled, false, "render istisnasından sonra düymə bağlı qaldı");
  assert.equal(await p.click("necəsən"), 1);
});
