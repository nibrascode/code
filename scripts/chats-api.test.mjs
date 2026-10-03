// /api/chats (Supabase PostgREST) testi: cihaz izolyasiyası, ölçü limitləri, env yoxdursa yumşaq davranış.
import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/chats.js";
import { handleChats, supaConfig, cleanMessages, cleanTitle } from "../api/_chats.js";

const ENV = { SUPABASE_URL: "https://abc.supabase.co/", SUPABASE_SERVICE_ROLE_KEY: "srv-secret" };
const DEV_A = "aaaaaaaaaaaaaaaa-device-A";
const DEV_B = "bbbbbbbbbbbbbbbb-device-B";
const NOW = Date.parse("2026-10-03T12:00:00Z");

// Çox sadə saxta PostgREST: cədvəl (device_id,id) açarlı
function fakeSupabase() {
  const rows = new Map();
  const calls = [];
  const impl = async (url, init = {}) => {
    const u = new URL(url);
    const q = u.searchParams;
    const method = init.method || "GET";
    calls.push({ method, url, headers: init.headers, body: init.body });
    assert.equal(init.headers.apikey, "srv-secret");
    assert.equal(init.headers.Authorization, "Bearer srv-secret");
    assert.ok(u.pathname === "/rest/v1/nibras_chats");
    const eq = (k) => (q.get(k) || "").startsWith("eq.") ? q.get(k).slice(3) : null;
    const json = (o, status = 200) => ({ ok: status < 400, status, text: async () => (o === null ? "" : JSON.stringify(o)) });
    if (method === "POST") {
      for (const r of JSON.parse(init.body)) rows.set(r.device_id + "|" + r.id, { created_at: "x", ...rows.get(r.device_id + "|" + r.id), ...r });
      return json(null, 201);
    }
    const match = (r) => {
      if (eq("device_id") !== null && r.device_id !== eq("device_id")) return false;
      if (eq("id") !== null && r.id !== eq("id")) return false;
      const gte = q.get("updated_at");
      if (gte && gte.startsWith("gte.") && !(r.updated_at >= gte.slice(4))) return false;
      if (gte && gte.startsWith("lt.") && !(r.updated_at < gte.slice(3))) return false;
      return true;
    };
    if (method === "DELETE") {
      for (const [k, r] of [...rows]) if (match(r)) rows.delete(k);
      return json(null, 204);
    }
    return json([...rows.values()].filter(match).sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1)));
  };
  return { rows, calls, impl };
}
const msgs = (n = 2) => Array.from({ length: n }, (_, i) => ({ k: i % 2 ? "b" : "u", t: "mətn " + i }));
const put = (f, device, id, body, now = NOW) => handleChats({ method: "PUT", device, id, body }, { env: ENV, fetchImpl: f.impl, now });
const get = (f, device, id, now = NOW) => handleChats({ method: "GET", device, id }, { env: ENV, fetchImpl: f.impl, now });

test("env adları: SUPABASE_URL / NEXT_PUBLIC / VITE; yalnız server açarı", () => {
  assert.equal(supaConfig({ SUPABASE_URL: "https://x.co", SUPABASE_SERVICE_ROLE_KEY: "k" }).url, "https://x.co");
  assert.equal(supaConfig({ NEXT_PUBLIC_SUPABASE_URL: "https://y.co/", SUPABASE_SERVICE_KEY: "k" }).url, "https://y.co");
  assert.ok(supaConfig({ VITE_SUPABASE_URL: "https://z.co", SUPABASE_SECRET_KEY: "k" }));
  assert.equal(supaConfig({ SUPABASE_URL: "https://x.co", SUPABASE_ANON_KEY: "anon", NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon" }), null);
  assert.equal(supaConfig({}), null);
});

test("env yoxdursa: xətasız, storage:false, fetch çağrılmır", async () => {
  let called = 0;
  const fetchImpl = async () => { called++; };
  for (const [method, id, body] of [["GET", "", undefined], ["GET", "chat-0001", undefined], ["PUT", "chat-0001", { title: "a", messages: msgs() }], ["DELETE", "chat-0001", undefined]]) {
    const r = await handleChats({ method, device: DEV_A, id, body }, { env: {}, fetchImpl });
    assert.equal(r.status, 200);
    assert.equal(r.body.ok, true);
    assert.equal(r.body.storage, false);
  }
  assert.equal(called, 0);
});

test("yaz → siyahı → bir söhbət → sil", async () => {
  const f = fakeSupabase();
  let r = await put(f, DEV_A, "chat-0001", { title: "  Salam   dünya ", messages: msgs(), extra: "yox" });
  assert.equal(r.status, 200);
  assert.equal(r.body.stored, true);
  r = await put(f, DEV_A, "chat-0001", { title: "Salam dünya", messages: msgs(4) }, NOW + 60000);
  assert.equal(f.rows.size, 1);
  r = await get(f, DEV_A, "", NOW + 61000);
  assert.deepEqual(r.body.chats.map((c) => [c.id, c.title]), [["chat-0001", "Salam dünya"]]);
  assert.equal(r.body.chats[0].messages, undefined);
  r = await get(f, DEV_A, "chat-0001", NOW + 61000);
  assert.equal(r.body.chat.messages.length, 4);
  r = await handleChats({ method: "DELETE", device: DEV_A, id: "chat-0001" }, { env: ENV, fetchImpl: f.impl, now: NOW });
  assert.equal(r.body.deleted, true);
  assert.equal(f.rows.size, 0);
});

test("cihaz izolyasiyası: başqa cihaz nə oxuya, nə üzərinə yaza, nə silə bilir", async () => {
  const f = fakeSupabase();
  await put(f, DEV_A, "chat-0001", { title: "A-nın", messages: msgs() });
  await put(f, DEV_B, "chat-0002", { title: "B-nin", messages: msgs() });
  assert.deepEqual((await get(f, DEV_A)).body.chats.map((c) => c.id), ["chat-0001"]);
  assert.deepEqual((await get(f, DEV_B)).body.chats.map((c) => c.id), ["chat-0002"]);
  assert.equal((await get(f, DEV_B, "chat-0001")).status, 404);
  // B eyni nömrə ilə yazsa A-nın sətri dəyişmir
  await put(f, DEV_B, "chat-0001", { title: "ələ keçirmə", messages: msgs(1) });
  assert.equal((await get(f, DEV_A, "chat-0001")).body.chat.title, "A-nın");
  await handleChats({ method: "DELETE", device: DEV_B, id: "chat-0001" }, { env: ENV, fetchImpl: f.impl, now: NOW });
  assert.equal((await get(f, DEV_A, "chat-0001")).status, 200);
  // hər oxuma sorğusunda device_id filtri var
  for (const c of f.calls.filter((c) => c.method === "GET" || (c.method === "DELETE" && !c.url.includes("updated_at")))) {
    assert.match(c.url, /device_id=eq\./);
  }
});

test("cihaz/ID yoxlaması", async () => {
  const f = fakeSupabase();
  for (const dev of ["", "qısa", "x".repeat(100), "a b c d e f g h i j k l m n", "a=b&device_id=eq.x1234567890abc"]) {
    assert.equal((await get(f, dev)).status, 400);
  }
  for (const id of ["a/b", "x", "id=eq.1&or=(a.eq.1)", "a".repeat(65)]) {
    assert.equal((await get(f, DEV_A, id)).status, 400);
  }
  assert.equal(f.calls.length, 0);
  assert.equal((await handleChats({ method: "POST", device: DEV_A }, { env: ENV, fetchImpl: f.impl })).status, 405);
});

test("ölçü limitləri: başlıq ≤80, mesajlar ≤200 KB, ≤200 mesaj, yanlış forma", async () => {
  const f = fakeSupabase();
  assert.equal(cleanTitle("ə".repeat(200)).length, 80);
  await put(f, DEV_A, "chat-0001", { title: "b".repeat(300), messages: msgs() });
  assert.equal([...f.rows.values()][0].title.length, 80);
  // 200 KB-dan böyük
  const big = Array.from({ length: 20 }, () => ({ k: "b", t: "x".repeat(15000) }));
  let r = await put(f, DEV_A, "chat-0002", { title: "t", messages: big });
  assert.equal(r.status, 413);
  r = await put(f, DEV_A, "chat-0002", { title: "t", messages: msgs(201) });
  assert.equal(r.status, 413);
  r = await put(f, DEV_A, "chat-0002", { title: "t", messages: [{ k: "admin", t: "x" }] });
  assert.equal(r.status, 400);
  r = await put(f, DEV_A, "chat-0002", { title: "t", messages: "yox" });
  assert.equal(r.status, 400);
  r = await put(f, DEV_A, "chat-0002", { title: "   ", messages: msgs() });
  assert.equal(r.status, 400);
  r = await put(f, DEV_A, "", { title: "t", messages: msgs() });
  assert.equal(r.status, 400);
  assert.equal(f.rows.size, 1);
  // bilinməyən sahələr atılır, şəkil yalnız qısa http(s) link
  const c = cleanMessages([{ k: "b", t: "a", i: "data:image/png;base64,AAAA", evil: 1 }, { k: "b", t: "b", i: "https://x.co/a.png", x: 1 }]);
  assert.deepEqual(c.messages, [{ k: "b", t: "a" }, { k: "b", t: "b", i: "https://x.co/a.png", x: 1 }]);
});

test("24 saat: köhnə sətirlər oxunmur və yazıda silinir", async () => {
  const f = fakeSupabase();
  await put(f, DEV_A, "chat-0001", { title: "köhnə", messages: msgs() }, NOW);
  await put(f, DEV_B, "chat-0002", { title: "yeni", messages: msgs() }, NOW + 25 * 3600 * 1000);
  // A-nın sətri 25 saat əvvəl idi: B-nin yazısı onu sildi
  assert.equal(f.rows.size, 1);
  const later = NOW + 25 * 3600 * 1000;
  assert.deepEqual((await get(f, DEV_A, "", later)).body.chats, []);
  // silinməsə də oxunmur
  await put(f, DEV_A, "chat-0003", { title: "x", messages: msgs() }, later);
  assert.equal((await get(f, DEV_A, "chat-0003", later + 24 * 3600 * 1000 + 5000)).status, 404);
  assert.deepEqual((await get(f, DEV_A, "", later + 24 * 3600 * 1000 + 5000)).body.chats, []);
});

test("Supabase xətası: səhifə sınmır (ok:false, storage:false), cədvəl yoxdursa aydın mesaj", async () => {
  const bad = async () => ({ ok: false, status: 404, text: async () => '{"code":"PGRST205"}' });
  let r = await handleChats({ method: "GET", device: DEV_A }, { env: ENV, fetchImpl: bad });
  assert.equal(r.status, 200);
  assert.equal(r.body.ok, false);
  assert.equal(r.body.storage, false);
  assert.match(r.body.error, /Cədvəl/);
  const boom = async () => { throw new Error("şəbəkə"); };
  r = await handleChats({ method: "PUT", device: DEV_A, id: "chat-0001", body: { title: "t", messages: msgs() } }, { env: ENV, fetchImpl: boom });
  assert.equal(r.body.ok, false);
  assert.ok(!JSON.stringify(r.body).includes("srv-secret"));
});

function res() {
  const o = { code: 0, body: null, headers: {} };
  return Object.assign(o, {
    setHeader(k, v) { o.headers[k] = v; },
    status(c) { o.code = c; return o; },
    json(b) { o.body = b; return o; },
  });
}

test("HTTP işləyicisi: başlıq/sorğu, env yoxdur, çox böyük gövdə", async () => {
  const saved = { ...process.env };
  for (const k of Object.keys(process.env)) if (/SUPABASE|POSTGRES/.test(k)) delete process.env[k];
  try {
    let r = res();
    await handler({ method: "GET", url: "/api/chats", headers: { "x-device-id": DEV_A } }, r);
    assert.equal(r.code, 200);
    assert.deepEqual(r.body, { ok: true, storage: false, chats: [] });
    assert.equal(r.headers["Cache-Control"], "no-store");
    r = res();
    await handler({ method: "GET", url: "/api/chats?device_id=" + DEV_A + "&id=chat-0001", headers: {} }, r);
    assert.equal(r.code, 200);
    assert.equal(r.body.chat, null);
    r = res();
    await handler({ method: "GET", url: "/api/chats", headers: {} }, r);
    assert.equal(r.code, 400);
    r = res();
    await handler({ method: "PUT", url: "/api/chats?id=chat-0001", headers: { "x-device-id": DEV_A }, body: "{bad" }, r);
    assert.equal(r.code, 413);
    r = res();
    await handler({ method: "PUT", url: "/api/chats?id=chat-0001", headers: { "x-device-id": DEV_A }, body: { title: "t", messages: msgs() } }, r);
    assert.equal(r.code, 200);
    assert.equal(r.body.storage, false);
  } finally {
    Object.assign(process.env, saved);
  }
});
