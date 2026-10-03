// Gizlilik dostu sayğac (api/stats.js, api/_stats.js, chat.js inteqrasiyası) üçün testlər. Şəbəkə yoxdur: fetch saxtalaşdırılıb.
import test from "node:test";
import assert from "node:assert/strict";
import { Readable } from "node:stream";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import statsHandler from "../api/stats.js";
import chatHandler from "../api/chat.js";
import { cleanEvent, recordEvent, readDays, storageConfig, dayKey, track } from "../api/_stats.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ENV_KEYS = ["UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN", "KV_REST_API_URL", "KV_REST_API_TOKEN", "STATS_KEY"];
const UP = { UPSTASH_REDIS_REST_URL: "https://up.example.test/", UPSTASH_REDIS_REST_TOKEN: "tok-up" };
const KV = { KV_REST_API_URL: "https://kv.example.test", KV_REST_API_TOKEN: "tok-kv" };

function withEnv(env, fn) {
  return async () => {
    const saved = Object.fromEntries(ENV_KEYS.map((k) => [k, process.env[k]]));
    ENV_KEYS.forEach((k) => delete process.env[k]);
    Object.assign(process.env, env);
    const realFetch = globalThis.fetch;
    try {
      await fn();
    } finally {
      globalThis.fetch = realFetch;
      ENV_KEYS.forEach((k) => (saved[k] === undefined ? delete process.env[k] : (process.env[k] = saved[k])));
    }
  };
}

// Saxta Upstash: pipeline əmrlərini yadda saxlayır, HGETALL üçün hazır cavab verir
function fakeStore() {
  const calls = [];
  const data = new Map();
  const fetchImpl = async (url, init) => {
    const body = JSON.parse(init.body);
    calls.push({ url, headers: init.headers, body });
    const result = body.map((cmd) => {
      if (cmd[0] === "HINCRBY") {
        const h = data.get(cmd[1]) || {};
        h[cmd[2]] = (h[cmd[2]] || 0) + cmd[3];
        data.set(cmd[1], h);
        return { result: h[cmd[2]] };
      }
      if (cmd[0] === "HGETALL") return { result: Object.entries(data.get(cmd[1]) || {}).flat().map(String) };
      return { result: 1 };
    });
    return { ok: true, status: 200, json: async () => result };
  };
  return { calls, data, fetchImpl };
}

function mkRes() {
  const res = {
    code: 200, headers: {}, body: undefined, ended: false,
    setHeader(k, v) { this.headers[k.toLowerCase()] = v; },
    status(c) { this.code = c; return this; },
    json(o) { this.body = o; this.ended = true; return this; },
    end() { this.ended = true; return this; },
  };
  return res;
}
const post = (body, extra = {}) => ({ method: "POST", url: "/api/stats", headers: {}, body, ...extra });
const get = (qs = "", headers = {}) => ({ method: "GET", url: "/api/stats" + qs, headers });

test("cleanEvent: yalnız icazəli növ və adlar", () => {
  assert.deepEqual(cleanEvent({ type: "visit", name: "ai" }), { type: "visit", name: "ai" });
  assert.deepEqual(cleanEvent({ type: "VISIT" }), { type: "visit", name: "ai" });
  assert.deepEqual(cleanEvent({ type: "mode", name: "Code" }), { type: "mode", name: "code" });
  assert.deepEqual(cleanEvent({ type: "snippet", name: "hit" }), { type: "snippet", name: "hit" });
  assert.deepEqual(cleanEvent({ type: "error", name: "Şəbəkə<script>" }), { type: "error", name: "bkscript" });
  assert.equal(cleanEvent({ type: "error" }).name, "other");
  for (const bad of [null, undefined, "x", 5, {}, { type: "click" }, { type: "mode", name: "hack" }, { type: "snippet", name: "x" }, { type: ["visit"] }]) assert.equal(cleanEvent(bad), null, JSON.stringify(bad));
  assert.ok(cleanEvent({ type: "error", name: "a".repeat(500) }).name.length <= 24);
});

test("storageConfig: Upstash və KV dəyişənləri", withEnv({}, () => {
  assert.equal(storageConfig({}), null);
  assert.equal(storageConfig({ UPSTASH_REDIS_REST_URL: "https://a" }), null);
  assert.deepEqual(storageConfig(UP), { url: "https://up.example.test", token: "tok-up" });
  assert.deepEqual(storageConfig(KV), { url: "https://kv.example.test", token: "tok-kv" });
  assert.equal(storageConfig({ ...UP, ...KV }).token, "tok-up");
}));

test("dayKey: Bakı vaxtı (UTC+4) ilə gün", () => {
  assert.equal(dayKey(Date.UTC(2026, 9, 3, 19, 59)), "2026-10-03");
  assert.equal(dayKey(Date.UTC(2026, 9, 3, 20, 0)), "2026-10-04");
});

test("recordEvent: saxlama yoxdursa fetch çağırılmır, xəta yoxdur", withEnv({}, async () => {
  let n = 0;
  const r = await recordEvent({ type: "visit", name: "ai" }, { fetchImpl: async () => { n++; } });
  assert.equal(r, "skipped");
  assert.equal(n, 0);
  assert.equal(await recordEvent({ type: "nope" }, { env: UP, fetchImpl: async () => { n++; } }), "skipped");
  assert.equal(n, 0);
}));

test("recordEvent: Upstash pipeline HINCRBY + EXPIRE, şəxsi məlumat yoxdur", async () => {
  const s = fakeStore();
  const now = Date.UTC(2026, 9, 3, 10, 0);
  assert.equal(await recordEvent({ type: "mode", name: "code", ip: "1.2.3.4", text: "gizli sual" }, { env: UP, fetchImpl: s.fetchImpl, now }), "ok");
  assert.equal(s.calls.length, 1);
  const c = s.calls[0];
  assert.equal(c.url, "https://up.example.test/pipeline");
  assert.deepEqual(Object.keys(c.headers).sort(), ["Authorization", "Content-Type"]);
  assert.equal(c.headers.Authorization, "Bearer tok-up");
  assert.deepEqual(c.body[0], ["HINCRBY", "nstat:2026-10-03", "mode:code", 1]);
  assert.equal(c.body[1][0], "EXPIRE");
  assert.ok(!JSON.stringify(c).includes("1.2.3.4") && !JSON.stringify(c).includes("gizli"));
  await recordEvent({ type: "mode", name: "code" }, { env: KV, fetchImpl: s.fetchImpl, now });
  assert.equal(s.calls[1].url, "https://kv.example.test/pipeline");
  assert.equal(s.data.get("nstat:2026-10-03")["mode:code"], 2);
});

test("recordEvent: şəbəkə xətası və 500 səssiz 'failed' qaytarır", async () => {
  assert.equal(await recordEvent({ type: "visit" }, { env: UP, fetchImpl: async () => { throw new Error("şəbəkə"); } }), "failed");
  assert.equal(await recordEvent({ type: "visit" }, { env: UP, fetchImpl: async () => ({ ok: false, status: 500, json: async () => ({}) }) }), "failed");
  assert.equal(await recordEvent({ type: "visit" }, { env: UP, fetchImpl: async () => ({ ok: true, json: async () => { throw new Error("pis json"); } }) }), "failed");
});

test("readDays: gün sayı 1..90 aralığında, saxlama yoxdursa null", async () => {
  assert.equal(await readDays(7, { env: {}, fetchImpl: async () => { throw new Error("çağırılmamalı"); } }), null);
  const s = fakeStore();
  const now = Date.UTC(2026, 9, 3, 10, 0);
  await recordEvent({ type: "visit", name: "ai" }, { env: UP, fetchImpl: s.fetchImpl, now });
  await recordEvent({ type: "snippet", name: "hit" }, { env: UP, fetchImpl: s.fetchImpl, now });
  await recordEvent({ type: "snippet", name: "hit" }, { env: UP, fetchImpl: s.fetchImpl, now: now - 86400000 });
  const days = await readDays(3, { env: UP, fetchImpl: s.fetchImpl, now });
  assert.deepEqual(days.map((d) => d.date), ["2026-10-03", "2026-10-02", "2026-10-01"]);
  assert.deepEqual(days[0].counts, { "visit:ai": 1, "snippet:hit": 1 });
  assert.deepEqual(days[1].counts, { "snippet:hit": 1 });
  assert.deepEqual(days[2].counts, {});
  assert.equal((await readDays(1000, { env: UP, fetchImpl: s.fetchImpl, now })).length, 90);
  assert.equal((await readDays("abc", { env: UP, fetchImpl: s.fetchImpl, now })).length, 14);
  assert.equal((await readDays(0, { env: UP, fetchImpl: s.fetchImpl, now })).length, 14);
});

test("POST /api/stats: saxlama yoxdur -> ok, çökmür", withEnv({}, async () => {
  globalThis.fetch = async () => { throw new Error("çağırılmamalı"); };
  const res = mkRes();
  await statsHandler(post({ type: "visit", name: "ai" }), res);
  assert.equal(res.code, 200);
  assert.deepEqual(res.body, { ok: true, stored: false });
  assert.equal(res.headers["cache-control"], "no-store");
}));

test("POST /api/stats: yanlış hadisə 400, OPTIONS 204, digər metod 405", withEnv({}, async () => {
  for (const body of [{ type: "x" }, {}, "{pis", null]) {
    const res = mkRes();
    await statsHandler(post(body), res);
    assert.equal(res.code, 400, JSON.stringify(body));
  }
  const o = mkRes();
  await statsHandler({ method: "OPTIONS", headers: {} }, o);
  assert.equal(o.code, 204);
  const d = mkRes();
  await statsHandler({ method: "DELETE", headers: {} }, d);
  assert.equal(d.code, 405);
}));

test("POST /api/stats: JSON mətn, Buffer və axın (sendBeacon) qəbul olunur, Upstash-a yazır", withEnv(UP, async () => {
  const s = fakeStore();
  globalThis.fetch = s.fetchImpl;
  for (const body of ['{"type":"visit","name":"ai"}', Buffer.from('{"type":"mode","name":"image"}'), { type: "error", name: "chat" }]) {
    const res = mkRes();
    await statsHandler(post(body), res);
    assert.deepEqual(res.body, { ok: true, stored: true });
  }
  const stream = Readable.from([Buffer.from('{"type":"snippet",'), Buffer.from('"name":"ai"}')]);
  Object.assign(stream, { method: "POST", url: "/api/stats", headers: {} });
  const res = mkRes();
  await statsHandler(stream, res);
  assert.deepEqual(res.body, { ok: true, stored: true });
  const fields = s.calls.map((c) => c.body[0][2]);
  assert.deepEqual(fields, ["visit:ai", "mode:image", "error:chat", "snippet:ai"]);
  const big = mkRes();
  await statsHandler(post("x".repeat(5000)), big);
  assert.equal(big.code, 400);
}));

test("POST /api/stats: Upstash çökəndə də 200", withEnv(UP, async () => {
  globalThis.fetch = async () => { throw new Error("down"); };
  const res = mkRes();
  await statsHandler(post({ type: "visit", name: "ai" }), res);
  assert.equal(res.code, 200);
  assert.deepEqual(res.body, { ok: true, stored: false });
}));

test("GET /api/stats: STATS_KEY yoxdursa 503, yanlış açar 401", withEnv({}, async () => {
  let res = mkRes();
  await statsHandler(get("?key=x"), res);
  assert.equal(res.code, 503);
  process.env.STATS_KEY = "gizli-acar";
  for (const req of [get(), get("?key="), get("?key=yanlis"), get("", { "x-stats-key": "yanlis" }), get("?key=gizli-acar2")]) {
    res = mkRes();
    await statsHandler(req, res);
    assert.equal(res.code, 401);
    assert.equal(res.body.ok, false);
  }
}));

test("GET /api/stats: açar düzgün, saxlama qoşulmayıb", withEnv({ STATS_KEY: "gizli-acar" }, async () => {
  for (const req of [get("?key=gizli-acar"), get("", { "x-stats-key": "gizli-acar" })]) {
    const res = mkRes();
    await statsHandler(req, res);
    assert.equal(res.code, 200);
    assert.equal(res.body.ok, true);
    assert.equal(res.body.storage, false);
    assert.match(res.body.message, /Saxlama qoşulmayıb/);
  }
}));

test("GET /api/stats: günlük say cədvəli", withEnv({ STATS_KEY: "k1", ...KV }, async () => {
  const s = fakeStore();
  globalThis.fetch = s.fetchImpl;
  for (const e of [{ type: "visit", name: "ai" }, { type: "visit", name: "ai" }, { type: "mode", name: "code" }, { type: "snippet", name: "hit" }, { type: "snippet", name: "ai" }, { type: "error", name: "chat" }]) {
    await statsHandler(post(e), mkRes());
  }
  const res = mkRes();
  await statsHandler(get("?key=k1&days=2"), res);
  assert.equal(res.code, 200);
  assert.equal(res.body.storage, true);
  assert.equal(res.body.days.length, 2);
  assert.deepEqual(res.body.days[0].counts, { "visit:ai": 2, "mode:code": 1, "snippet:hit": 1, "snippet:ai": 1, "error:chat": 1 });
  assert.equal(res.body.days[0].date, dayKey());
  assert.deepEqual(res.body.days[1].counts, {});
  assert.ok(!JSON.stringify(res.body).includes("tok-kv"));
}));

test("track(): xətasız, waitUntil varsa ona verir", withEnv(UP, async () => {
  const s = fakeStore();
  globalThis.fetch = s.fetchImpl;
  let waited = null;
  const sym = Symbol.for("@vercel/request-context");
  globalThis[sym] = { get: () => ({ waitUntil: (p) => { waited = p; } }) };
  try {
    track("snippet", "hit");
    assert.ok(waited && typeof waited.then === "function");
    await waited;
    assert.equal(s.calls[0].body[0][2], "snippet:hit");
    delete globalThis[sym];
    track("visit", "ai"); // waitUntil olmadan da çökmür
    track("pis", "yanlış");
    await new Promise((r) => setTimeout(r, 20));
    assert.equal(s.calls.length, 2);
  } finally {
    delete globalThis[sym];
  }
}));

async function callChat(message, mode = "ask") {
  const res = mkRes();
  await chatHandler({ method: "POST", url: "/api/chat", headers: {}, body: { message, mode } }, res);
  return res;
}

test("chat.js: hazır nümunə 'snippet:hit' sayılır və cavabı gecikdirmir (saxlama cavab verməsə də)", withEnv(UP, async () => {
  const calls = [];
  globalThis.fetch = (url, init) => new Promise((_, reject) => {
    calls.push(JSON.parse(init.body));
    init.signal?.addEventListener("abort", () => reject(new Error("abort")));
  }); // heç vaxt cavab vermir
  const t0 = Date.now();
  const res = await callChat("python kod nümunəsi");
  assert.ok(Date.now() - t0 < 500, "cavab gecikdi");
  assert.equal(res.body.success, true);
  assert.match(res.body.reply, /```python/);
  assert.deepEqual(calls[0][0].slice(0, 3), ["HINCRBY", "nstat:" + dayKey(), "snippet:hit"]);
}));

test("chat.js: yerli cavab 'snippet:local', saxlama yoxdursa normal işləyir", async () => {
  const s = fakeStore();
  await withEnv(UP, async () => {
    globalThis.fetch = s.fetchImpl;
    const res = await callChat("salam necəsən");
    assert.equal(res.body.success, true);
    await new Promise((r) => setTimeout(r, 20));
    assert.ok(s.calls.some((c) => c.body[0][2] === "snippet:local"));
    assert.ok(!JSON.stringify(s.calls).includes("necəsən"), "mesaj mətni saxlanmamalıdır");
  })();
  await withEnv({}, async () => {
    globalThis.fetch = async () => { throw new Error("çağırılmamalı"); };
    const res = await callChat("python kod nümunəsi");
    assert.equal(res.body.success, true);
  })();
});

test("brauzer tərəfi: ai səhifələri sendBeacon göndərir, stats.html açar soruşur", () => {
  const ai = readFileSync(join(ROOT, "public/ai.html"), "utf8");
  assert.equal(ai, readFileSync(join(ROOT, "public/ai/index.html"), "utf8"));
  assert.match(ai, /sendBeacon\("\/api\/stats"/);
  assert.match(ai, /doNotTrack/);
  for (const t of ['stat("visit"', 'stat("mode", sentMode)', 'stat("error"']) assert.ok(ai.includes(t), t);
  const st = readFileSync(join(ROOT, "public/stats.html"), "utf8");
  assert.match(st, /lang="az"/);
  assert.match(st, /type="password"/);
  assert.match(st, /x-stats-key/);
  assert.match(st, /\/api\/stats\?days=/);
  assert.match(st, /noindex/);
  assert.ok(!/innerHTML/.test(st), "stats.html innerHTML işlətməməlidir");
});
