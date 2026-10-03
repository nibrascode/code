// Nibras AI limiti: ekranda göstərilmir; yalnız xarici AI həqiqətən çağırılanda sayılır (server usedAI:true).
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import chatHandler, { LIMIT_REPLY } from "../api/chat.js";
import imageHandler from "../api/image.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const HTML = readFileSync(join(ROOT, "public/ai/index.html"), "utf8");
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));

function mkRes() {
  return { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
}
async function call(handler, body) {
  const res = mkRes();
  await handler({ method: "POST", body }, res);
  return res;
}
async function withFetch(fn, impl) {
  const realFetch = globalThis.fetch;
  const prev = process.env.GROQ_API_KEY;
  process.env.GROQ_API_KEY = "test-key";
  let calls = 0;
  globalThis.fetch = async (...a) => { calls++; return impl(...a); };
  try { await fn(() => calls); } finally {
    globalThis.fetch = realFetch;
    if (prev === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = prev;
  }
}
const aiOk = async () => ({ ok: true, status: 200, json: async () => ({ choices: [{ message: { content: "AI cavabı" } }] }) });
const noNet = async () => { throw new Error("şəbəkə çağırışı olmamalıdır"); };

test("ai.html və ai/index.html eynidir", () => {
  assert.equal(readFileSync(join(ROOT, "public/ai.html"), "utf8"), HTML);
});

test("server: AI-siz cavablar usedAI:false qaytarır və xarici çağırış etmir", async () => {
  await withFetch(async (calls) => {
    const qs = ["Bəqərə 255", "İxlas surəsi", "Şirk neçə qismə bölünür", "Sələfilik nədir", "Bəqərə 1-59 sözlərin izahı", "salam", "2+2 neçədir", "Nibras Code nədir"];
    for (const q of qs) {
      const res = await call(chatHandler, { message: q });
      assert.equal(res.code, 200, q);
      assert.equal(res.body.success, true, q);
      assert.equal(res.body.usedAI, false, q);
      assert.ok(!res.body.limited, q);
    }
    // limit dolu olsa da hazır cavablar işləyir
    for (const q of qs) {
      const res = await call(chatHandler, { message: q, limitReached: true });
      assert.equal(res.body.usedAI, false, q);
      assert.notEqual(res.body.reply, LIMIT_REPLY, q);
    }
    // kod nümunəsi (snippet)
    const sn = await call(chatHandler, { message: "python salam dünya", mode: "code" });
    assert.equal(sn.body.usedAI, false);
    assert.equal(calls(), 0);
  }, noNet);
});

test("server: həqiqi AI cavabı usedAI:true qaytarır", async () => {
  await withFetch(async (calls) => {
    const res = await call(chatHandler, { message: "Mənə qısa bir hekayə danış, mövzusu dağlar olsun" });
    assert.equal(res.body.success, true);
    assert.equal(res.body.usedAI, true);
    assert.ok(calls() >= 1);
  }, aiOk);
});

test("server: limitReached və AI tələb edən sual → sadə mesaj, AI çağırılmır, rəqəm yoxdur", async () => {
  await withFetch(async (calls) => {
    const res = await call(chatHandler, { message: "Mənə qısa bir hekayə danış, mövzusu dağlar olsun", limitReached: true });
    assert.equal(res.code, 200);
    assert.equal(res.body.success, true);
    assert.equal(res.body.usedAI, false);
    assert.equal(res.body.limited, true);
    assert.equal(res.body.reply, LIMIT_REPLY);
    assert.ok(!/\d/.test(res.body.reply), "mesajda rəqəm olmamalıdır");
    assert.equal(calls(), 0);
  }, noNet);
});

test("image: limitReached → AI çağırılmır; uğurlu şəkil usedAI:true; imtina usedAI:true deyil", async () => {
  await withFetch(async (calls) => {
    const res = await call(imageHandler, { prompt: "dağ mənzərəsi", limitReached: true });
    assert.equal(res.code, 200);
    assert.equal(res.body.usedAI, false);
    assert.equal(res.body.limited, true);
    assert.ok(!/\d/.test(res.body.reply));
    const bad = await call(imageHandler, { prompt: "pişik şəkli çək", limitReached: false });
    assert.notEqual(bad.body.usedAI, true);
    assert.equal(calls(), 0);
  }, noNet);
});

// ---------------------------------------------------------------- UI
function visible(w) {
  const c = w.document.body.cloneNode(true);
  c.querySelectorAll("script,style").forEach((e) => e.remove());
  return c.textContent;
}
function boot({ storage = {}, reply = () => ({ reply: "Salam", usedAI: false }) } = {}) {
  const calls = [];
  const dom = new JSDOM(HTML, {
    url: "https://nibrascode.com/ai",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(w) {
      for (const [k, v] of Object.entries(storage)) w.localStorage.setItem(k, v);
      w.TextEncoder = TextEncoder;
      w.open = () => null;
      w.fetch = async (url, init = {}) => {
        const u = new URL(url, "https://nibrascode.com");
        const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
        if (u.pathname === "/api/chat") {
          const req = JSON.parse(init.body);
          calls.push(req);
          return out(200, { success: true, ...reply(req) });
        }
        if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
        return out(200, { ok: true });
      };
    },
  });
  const w = dom.window;
  const $ = (s) => w.document.querySelector(s);
  return {
    w, $, calls,
    async say(text) {
      $("#inp").value = text;
      $("#form").dispatchEvent(new w.Event("submit", { cancelable: true, bubbles: true }));
      await wait(40);
    },
    count() { const v = w.localStorage.getItem("nibras_ai_v2"); return v ? JSON.parse(v).c : 0; },
  };
}
const today = () => new Date().toISOString().slice(0, 10);

test("UI: ekranda limit göstəricisi yoxdur (pill, /10, 'Limit' mətni)", { skip }, async () => {
  const p = boot();
  assert.equal(p.$("#left"), null);
  assert.equal(p.$(".pill"), null);
  assert.ok(!/\/\s*10\b/.test(visible(p.w)));
  assert.ok(!/limit/i.test(visible(p.w)));
  await p.say("salam");
  assert.ok(!/\/\s*10\b/.test(visible(p.w)));
  assert.ok(!/limit/i.test(p.$("#inp").placeholder));
  p.w.close();
});

test("UI: usedAI:false sayğacı dəyişmir; usedAI:true artırır", { skip }, async () => {
  const p = boot({ reply: (req) => (req.message.startsWith("ai") ? { reply: "AI", usedAI: true } : { reply: "Hazır", usedAI: false }) });
  await p.say("salam");
  await p.say("Bəqərə 255");
  assert.equal(p.count(), 0);
  await p.say("ai bir");
  assert.equal(p.count(), 1);
  await p.say("hazır sual");
  assert.equal(p.count(), 1);
  await p.say("ai iki");
  assert.equal(p.count(), 2);
  p.w.close();
});

test("UI: cavabda usedAI yoxdursa (köhnə server) sayılmır", { skip }, async () => {
  const p = boot({ reply: () => ({ reply: "x" }) });
  await p.say("sual");
  assert.equal(p.count(), 0);
  p.w.close();
});

test("UI: limit dolu olsa da giriş bağlanmır, hazır cavablar gəlir, limitReached göndərilir, rəqəm göstərilmir", { skip }, async () => {
  const p = boot({
    storage: { nibras_ai_v2: JSON.stringify({ d: today(), c: 10 }) },
    reply: (req) => (req.limitReached ? (req.message === "salam" ? { reply: "Hazır salam", usedAI: false } : { reply: LIMIT_REPLY, usedAI: false, limited: true }) : { reply: "AI", usedAI: true }),
  });
  const inp = p.$("#inp");
  assert.equal(inp.disabled, false);
  assert.equal(p.$("#send, #form button[type=submit]").disabled, false);
  assert.ok(!/limit/i.test(inp.placeholder));
  await p.say("salam");
  assert.equal(p.calls.at(-1).limitReached, true);
  assert.ok(visible(p.w).includes("Hazır salam"));
  await p.say("uzun bir hekayə danış");
  assert.equal(p.calls.at(-1).limitReached, true);
  const bot = [...p.w.document.querySelectorAll("#msgs .msg.b")].map((m) => m.textContent);
  assert.ok(bot.includes(LIMIT_REPLY));
  assert.equal(p.w.document.querySelector("#msgs .msg.err"), null, "xəta kimi göstərilməməlidir");
  assert.equal(p.count(), 10, "sayğac dəyişməməlidir");
  assert.equal(inp.disabled, false);
  assert.ok(!/\/\s*10\b/.test(visible(p.w)));
  p.w.close();
});

test("UI: limit dolmayıbsa limitReached:false göndərilir", { skip }, async () => {
  const p = boot();
  await p.say("salam");
  assert.equal(p.calls.at(-1).limitReached, false);
  p.w.close();
});
