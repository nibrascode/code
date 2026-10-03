// Nibras AI səhifəsi: söhbətin yerli saxlanması/bərpası/24 saat/siyahı/açma/silmə (jsdom + saxta fetch).
// jsdom lazımdır; yoxdursa test buraxılır.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const HTML = readFileSync(join(ROOT, "public/ai/index.html"), "utf8");
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));
const H = 3600 * 1000;

// opts.storage: əvvəlki localStorage snapshot; opts.api: saxlama "serveri"
function boot({ storage = {}, server = null, chatReply = null } = {}) {
  const calls = [];
  const opened = [];
  const api = server || { enabled: false, rows: new Map() };
  const dom = new JSDOM(HTML, {
    url: "https://nibrascode.com/ai",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(w) {
      for (const [k, v] of Object.entries(storage)) w.localStorage.setItem(k, v);
      w.TextEncoder = TextEncoder;
      w.open = (u, n, f) => { opened.push([u, n, f]); return null; };
      w.fetch = async (url, init = {}) => {
        const u = new URL(url, "https://nibrascode.com");
        const method = init.method || "GET";
        calls.push({ path: u.pathname, search: u.search, method, headers: init.headers || {}, body: init.body, keepalive: init.keepalive });
        const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
        if (u.pathname === "/api/stats") return out(200, { ok: true });
        if (u.pathname === "/api/chat") {
          const req = JSON.parse(init.body);
          const reply = typeof chatReply === "function" ? chatReply(req) : chatReply || "Cavab: " + req.message;
          if (reply === "FAIL") return out(500, { error: "Xəta oldu" });
          return out(200, { reply });
        }
        if (u.pathname === "/api/chats") {
          if (!api.enabled) return out(200, { ok: true, storage: false, chats: [], chat: null });
          const dev = init.headers && init.headers["x-device-id"];
          const id = u.searchParams.get("id");
          if (method === "PUT") { api.rows.set(dev + "|" + id, { id, title: JSON.parse(init.body).title, messages: JSON.parse(init.body).messages, updated_at: new Date().toISOString() }); return out(200, { ok: true, storage: true }); }
          if (method === "DELETE") { api.rows.delete(dev + "|" + id); return out(200, { ok: true, storage: true }); }
          const mine = [...api.rows.entries()].filter(([k]) => k.startsWith(dev + "|")).map(([, r]) => r);
          if (id) { const r = mine.find((x) => x.id === id); return r ? out(200, { ok: true, storage: true, chat: r }) : out(404, { ok: false, error: "yox" }); }
          return out(200, { ok: true, storage: true, chats: mine.map(({ id: i, title, updated_at }) => ({ id: i, title, updated_at })) });
        }
        return out(404, {});
      };
    },
  });
  const w = dom.window;
  const d = w.document;
  const $ = (s) => d.querySelector(s);
  return {
    dom, w, d, $, calls, opened, api,
    async say(text) {
      $("#inp").value = text;
      $("#form").dispatchEvent(new w.Event("submit", { cancelable: true, bubbles: true }));
      await wait(30);
    },
    snapshot() { const o = {}; for (let i = 0; i < w.localStorage.length; i++) { const k = w.localStorage.key(i); o[k] = w.localStorage.getItem(k); } return o; },
    texts() { return [...d.querySelectorAll("#msgs .msg")].map((m) => m.textContent); },
    drawer() { return $("#drawer").classList.contains("on"); },
    titles() { return [...d.querySelectorAll("#dlist .dopen span")].map((e) => e.textContent); },
  };
}
const CHATS = "nibras_chats_v1";
const stored = (p) => JSON.parse(p.w.localStorage.getItem(CHATS));

test("ai.html və ai/index.html eynidir", () => {
  assert.equal(readFileSync(join(ROOT, "public/ai.html"), "utf8"), HTML);
});

test("yaz → yerli saxla → yenidən yüklə: söhbət geri qayıdır, mod da", { skip }, async () => {
  const p = boot();
  await p.say("python-da salam yaz");
  p.$('[data-mode="code"]').click();
  assert.deepEqual(p.texts(), ["python-da salam yaz", "Cavab: python-da salam yaz"]);
  const s = stored(p);
  const it = s.items[s.cur];
  assert.equal(it.title, "python-da salam yaz");
  assert.equal(it.mode, "code");
  assert.equal(it.msgs.length, 2);
  const q = boot({ storage: p.snapshot() });
  assert.deepEqual(q.texts(), ["python-da salam yaz", "Cavab: python-da salam yaz"]);
  assert.equal(q.$("#mode").textContent, "Kod rejimi — nə yazım?");
  assert.equal(q.$("#hello"), null);
  // söhbət başlamamış seçilmiş rejim də qalır
  const m = boot();
  m.$('[data-mode="create"]').click();
  const m2 = boot({ storage: m.snapshot() });
  assert.equal(m2.$("#mode").textContent, "Fikir rejimi — mövzunu yaz");
  m.w.close(); m2.w.close();
  // bərpadan sonra söhbət davam edir və əvvəlki mesajlar AI-yə kontekst kimi gedir
  await q.say("daha bir şey");
  const chat = q.calls.filter((c) => c.path === "/api/chat").pop();
  assert.deepEqual(JSON.parse(chat.body).messages.map((m) => m.text), ["python-da salam yaz", "Cavab: python-da salam yaz", "daha bir şey"]);
  p.w.close(); q.w.close();
});

test("kod blokları bərpada Aç düyməsi ilə yenidən çəkilir; Aç vəziyyəti pozmur", { skip }, async () => {
  const code = "Budur:\n```python\nprint('salam')\n```\nvə\n```html\n<b>x</b>\n```";
  const p = boot({ chatReply: code });
  await p.say("kod ver");
  assert.equal(p.d.querySelectorAll("button.runbtn").length, 2);
  const before = JSON.stringify(stored(p));
  p.d.querySelectorAll("button.runbtn")[0].click();
  await wait(30);
  assert.equal(p.opened.length, 1);
  assert.match(p.opened[0][0], /^https:\/\/nibrasterminal\.vercel\.app\/run#l=python&c=/);
  assert.equal(JSON.stringify(stored(p)), before);
  assert.equal(p.texts().length, 2);
  // "geri qayıdış" = səhifənin yenidən yüklənməsi
  const q = boot({ storage: p.snapshot() });
  const btns = q.d.querySelectorAll("button.runbtn");
  assert.equal(btns.length, 2);
  assert.equal(q.d.querySelector(".cb pre code").textContent.trim(), "print('salam')");
  btns[1].click();
  await wait(30);
  assert.match(q.opened[0][0], /#l=html&c=/);
  p.w.close(); q.w.close();
});

test("24 saatdan sonra silinir, 23 saatda qalır", { skip }, async () => {
  const p = boot();
  await p.say("salam");
  const snap = p.snapshot();
  const aged = (h) => {
    const s = JSON.parse(snap[CHATS]);
    s.items[s.cur].t = Date.now() - h * H;
    return { ...snap, [CHATS]: JSON.stringify(s) };
  };
  const ok = boot({ storage: aged(23) });
  assert.equal(ok.texts().length, 2);
  const old = boot({ storage: aged(25) });
  assert.equal(old.texts().length, 0);
  assert.ok(old.$("#hello"));
  assert.deepEqual(Object.keys(stored(old) ? stored(old).items : {}), []);
  old.$("#menu").click();
  assert.match(old.$("#dlist").textContent, /Hələ söhbət yoxdur/);
  [p, ok, old].forEach((x) => x.w.close());
});

test("panel: başlıqlar (40 işarə), yeni söhbət köhnəni saxlayır, siyahı təzədən köhnəyə", { skip }, async () => {
  const p = boot();
  const long = "Bu çox uzun bir ilk sualdır ki, başlıq qırxdan artıq işarəyə çatsın və kəsilsin";
  await p.say(long);
  p.$("#menu").click();
  assert.ok(p.drawer());
  assert.equal(p.$("#drawer").getAttribute("aria-hidden"), "false");
  assert.match(p.$("#drawer").textContent, /Söhbətlər 24 saat saxlanılır/);
  assert.equal(p.titles()[0].length, 41);
  assert.ok(p.titles()[0].endsWith("…"));
  p.$("#newchat").click();
  assert.ok(!p.drawer());
  assert.equal(p.texts().length, 0);
  assert.ok(p.$("#hello"));
  assert.equal(Object.keys(stored(p).items).length, 1); // köhnə itmədi
  await p.say("ikinci söhbət");
  await wait(5);
  p.$("#menu").click();
  assert.deepEqual(p.titles(), ["ikinci söhbət", long.slice(0, 40).trim() + "…"]);
  assert.ok(p.$("#dlist .ditem.cur .dopen").textContent.startsWith("ikinci"));
  p.w.close();
});

test("köhnə söhbəti aç → mesajlar bərpa olunur; sonra sil (iki toxunuş)", { skip }, async () => {
  const p = boot();
  await p.say("birinci");
  p.$("#menu").click(); p.$("#newchat").click();
  await p.say("ikinci");
  p.$("#menu").click();
  const rows = [...p.d.querySelectorAll("#dlist .ditem")];
  assert.equal(rows.length, 2);
  rows.find((r) => r.textContent.includes("birinci")).querySelector(".dopen").click();
  await wait(10);
  assert.deepEqual(p.texts(), ["birinci", "Cavab: birinci"]);
  assert.ok(!p.drawer());
  // silmə: ilk toxunuş təsdiq istəyir
  p.$("#menu").click();
  const del = [...p.d.querySelectorAll("#dlist .ditem")].find((r) => r.textContent.includes("ikinci")).querySelector(".ddel");
  del.click();
  assert.equal(Object.keys(stored(p).items).length, 2);
  assert.equal(del.textContent, "Sil?");
  del.click();
  assert.equal(Object.keys(stored(p).items).length, 1);
  assert.deepEqual(p.titles(), ["birinci"]);
  // açıq söhbəti silmək ekranı təmizləyir
  p.$("#dlist .ddel").click(); p.$("#dlist .ddel").click();
  assert.equal(p.texts().length, 0);
  assert.ok(p.$("#hello"));
  assert.deepEqual(stored(p).items, {});
  p.w.close();
});

test("xəta cavabı kontekstə düşmür, amma bərpada görünür", { skip }, async () => {
  const p = boot({ chatReply: (r) => (r.message === "pis" ? "FAIL" : "ok") });
  await p.say("pis");
  await p.say("yaxşı");
  const q = boot({ storage: p.snapshot(), chatReply: "ok" });
  assert.equal(q.texts().length, 4);
  assert.ok(q.$(".msg.err"));
  await q.say("üçüncü");
  const sent = JSON.parse(q.calls.filter((c) => c.path === "/api/chat").pop().body).messages.map((m) => m.text);
  assert.deepEqual(sent, ["yaxşı", "ok", "üçüncü"]);
  p.w.close(); q.w.close();
});

test("Supabase yoxdur (storage:false): səhifə yenə işləyir və təkrar-təkrar sorğu göndərmir", { skip }, async () => {
  const p = boot();
  await p.say("bir");
  await wait(900);
  const first = p.calls.filter((c) => c.path === "/api/chats" && c.method === "PUT").length;
  assert.equal(first, 1);
  await p.say("iki");
  await wait(900);
  assert.equal(p.calls.filter((c) => c.path === "/api/chats").length, 1); // storage:false → 5 dəq susur
  assert.equal(p.texts().length, 4);
  p.$("#menu").click();
  assert.deepEqual(p.titles(), ["bir"]);
  p.w.close();
});

test("Supabase var: PUT cihaz başlığı ilə gedir, başqa cihazdan siyahı/açma, silmə serverə çatır", { skip }, async () => {
  const server = { enabled: true, rows: new Map() };
  const p = boot({ server });
  await p.say("serverə get");
  await wait(900);
  const put = p.calls.find((c) => c.path === "/api/chats" && c.method === "PUT");
  assert.ok(put);
  assert.match(put.headers["x-device-id"], /^[A-Za-z0-9_-]{16,64}$/);
  assert.ok(!put.search.includes(put.headers["x-device-id"]));
  const body = JSON.parse(put.body);
  assert.equal(body.title, "serverə get");
  assert.deepEqual(body.messages.map((m) => m.k), ["u", "b"]);
  assert.equal(server.rows.size, 1);
  // eyni cihaz, yerli yaddaş boşdur (məs. iOS təmizlədi), cihaz nömrəsi qalıb
  const dev = p.w.localStorage.getItem("nibras_device_v1");
  const q = boot({ server, storage: { nibras_device_v1: dev } });
  assert.equal(q.texts().length, 0);
  q.$("#menu").click();
  await wait(30);
  assert.deepEqual(q.titles(), ["serverə get"]);
  q.d.querySelector("#dlist .dopen").click();
  await wait(30);
  assert.deepEqual(q.texts(), ["serverə get", "Cavab: serverə get"]);
  // başqa cihaz heç nə görmür
  const other = boot({ server });
  other.$("#menu").click();
  await wait(30);
  assert.deepEqual(other.titles(), []);
  // silmə serverə də gedir
  q.$("#menu").click();
  const del = q.$("#dlist .ddel");
  del.click(); del.click();
  await wait(30);
  assert.equal(server.rows.size, 0);
  assert.ok(q.calls.some((c) => c.method === "DELETE" && c.headers["x-device-id"] === dev));
  [p, q, other].forEach((x) => x.w.close());
});

test("Aç basılanda gözlənilən sinxronizasiya dərhal göndərilir (səhifə dondurulmadan öncə)", { skip }, async () => {
  const server = { enabled: true, rows: new Map() };
  const p = boot({ server, chatReply: "```python\nprint(1)\n```" });
  await p.say("kod");
  p.$("button.runbtn").click();
  await wait(30);
  assert.equal(p.opened.length, 1);
  assert.equal(p.calls.filter((c) => c.method === "PUT").length, 1);
  p.w.close();
});
