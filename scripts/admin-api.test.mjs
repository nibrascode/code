// NX Studio admin API (api/admin.js, api/_admin.js) testləri. Şəbəkə yoxdur: fetch saxtalaşdırılıb.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import handler from "../api/admin.js";
import { ADMIN_EMAIL, COOKIE, MAX_FAILS, health, readCookie, sessionCookie, verifyAdmin } from "../api/_admin.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ENV_KEYS = ["UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN", "KV_REST_API_URL", "KV_REST_API_TOKEN", "SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY", "GITHUB_TOKEN", "GEMINI_API_KEY"];

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...headers } });
}

function req({ method = "POST", op, body, headers = {}, ip = "10.0.0.1" }) {
  return {
    method,
    url: `/api/admin?op=${op}`,
    body: body === undefined ? undefined : JSON.stringify(body),
    headers: { host: "nibrascode.com", "x-forwarded-for": ip, ...headers },
  };
}

function res() {
  const out = { statusCode: 0, headers: {}, body: null };
  out.setHeader = (k, v) => (out.headers[k.toLowerCase()] = v);
  out.status = (c) => ((out.statusCode = c), out);
  out.json = (b) => ((out.body = b), out);
  out.end = () => out;
  return out;
}

async function run(r) {
  const out = res();
  await handler(r, out);
  return out;
}

function isolated(fn) {
  return async () => {
    const saved = Object.fromEntries(ENV_KEYS.map((k) => [k, process.env[k]]));
    ENV_KEYS.forEach((k) => delete process.env[k]);
    const realFetch = globalThis.fetch;
    try {
      await fn();
    } finally {
      globalThis.fetch = realFetch;
      ENV_KEYS.forEach((k) => (saved[k] === undefined ? delete process.env[k] : (process.env[k] = saved[k])));
    }
  };
}

const GOOD = { access_token: "a".repeat(40), refresh_token: "r".repeat(30), expires_in: 3600, user: { email: ADMIN_EMAIL } };

test("POST without x-nxs header or from foreign origin is refused (CSRF)", isolated(async () => {
  globalThis.fetch = async () => assert.fail("no network");
  assert.equal((await run(req({ op: "login", body: { email: ADMIN_EMAIL, password: "x" } }))).statusCode, 403);
  const foreign = await run(req({ op: "login", body: { email: ADMIN_EMAIL, password: "x" }, headers: { "x-nxs": "1", origin: "https://evil.example" } }));
  assert.equal(foreign.statusCode, 403);
}));

test("successful login sets httpOnly Secure SameSite=Strict cookie and never returns refresh token", isolated(async () => {
  globalThis.fetch = async (url) => {
    assert.match(String(url), /grant_type=password/);
    return json(GOOD);
  };
  const out = await run(req({ op: "login", body: { email: ADMIN_EMAIL, password: "pw" }, headers: { "x-nxs": "1", origin: "https://nibrascode.com" }, ip: "10.0.0.2" }));
  assert.equal(out.statusCode, 200);
  assert.equal(out.body.session.email, ADMIN_EMAIL);
  assert.equal(out.body.session.access_token, GOOD.access_token);
  assert.equal(JSON.stringify(out.body).includes(GOOD.refresh_token), false);
  const cookie = out.headers["set-cookie"];
  assert.match(cookie, new RegExp(`^${COOKIE}=r{30}`));
  for (const part of ["HttpOnly", "Secure", "SameSite=Strict", "Path=/api/admin"]) assert.ok(cookie.includes(part), part);
}));

test("wrong password counts down and locks after MAX_FAILS attempts", isolated(async () => {
  let calls = 0;
  globalThis.fetch = async () => {
    calls += 1;
    return json({ error: "invalid_grant" }, 400);
  };
  const ip = "10.0.0.3";
  let last;
  for (let i = 0; i < MAX_FAILS; i += 1) {
    last = await run(req({ op: "login", body: { email: ADMIN_EMAIL, password: "bad" }, headers: { "x-nxs": "1" }, ip }));
    assert.equal(last.statusCode, 401);
    assert.equal(last.body.left, MAX_FAILS - i - 1);
  }
  const locked = await run(req({ op: "login", body: { email: ADMIN_EMAIL, password: "bad" }, headers: { "x-nxs": "1" }, ip }));
  assert.equal(locked.statusCode, 429);
  assert.ok(locked.body.retryAfter > 0);
  assert.equal(calls, MAX_FAILS, "locked attempt must not reach Supabase");
}));

test("other emails are rejected without calling Supabase", isolated(async () => {
  globalThis.fetch = async () => assert.fail("no network");
  const out = await run(req({ op: "login", body: { email: "someone@else.com", password: "pw" }, headers: { "x-nxs": "1" }, ip: "10.0.0.4" }));
  assert.equal(out.statusCode, 401);
}));

test("refresh uses the cookie, rotates it, and clears it when Supabase refuses", isolated(async () => {
  globalThis.fetch = async (url, init) => {
    assert.match(String(url), /grant_type=refresh_token/);
    return JSON.parse(init.body).refresh_token === "old-token-123" ? json({ ...GOOD, refresh_token: "new-token-456" }) : json({}, 400);
  };
  const ok = await run(req({ op: "refresh", headers: { "x-nxs": "1", cookie: `x=1; ${COOKIE}=old-token-123` } }));
  assert.equal(ok.statusCode, 200);
  assert.match(ok.headers["set-cookie"], /nxs_rt=new-token-456/);
  const bad = await run(req({ op: "refresh", headers: { "x-nxs": "1", cookie: `${COOKIE}=stale` } }));
  assert.equal(bad.statusCode, 401);
  assert.match(bad.headers["set-cookie"], /Max-Age=0/);
  const none = await run(req({ op: "refresh", headers: { "x-nxs": "1" } }));
  assert.equal(none.statusCode, 401);
}));

test("logout clears the cookie", isolated(async () => {
  globalThis.fetch = async () => new Response(null, { status: 204 });
  const out = await run(req({ op: "logout", headers: { "x-nxs": "1", authorization: "Bearer " + "t".repeat(40) } }));
  assert.equal(out.statusCode, 200);
  assert.match(out.headers["set-cookie"], /nxs_rt=;.*Max-Age=0/);
}));

test("overview requires a verified admin token and reports only booleans", isolated(async () => {
  process.env.GITHUB_TOKEN = "ghp_secret_value";
  process.env.GEMINI_API_KEY = "gem_secret";
  globalThis.fetch = async (url, init) => {
    const u = String(url);
    if (u.endsWith("/auth/v1/user")) {
      const token = init.headers.Authorization.slice(7);
      return token === "b".repeat(40) ? json({ email: ADMIN_EMAIL }) : token === "c".repeat(40) ? json({ email: "x@y.z" }) : json({}, 401);
    }
    if (u.includes("/rest/v1/studio_apps")) return json([{ slug: "a" }]);
    return assert.fail("unexpected " + u);
  };
  const anon = await run(req({ method: "GET", op: "overview" }));
  assert.equal(anon.statusCode, 401);
  const other = await run(req({ method: "GET", op: "overview", headers: { authorization: "Bearer " + "c".repeat(40) } }));
  assert.equal(other.statusCode, 401);
  const ok = await run(req({ method: "GET", op: "overview", headers: { authorization: "Bearer " + "b".repeat(40) } }));
  assert.equal(ok.statusCode, 200);
  assert.equal(ok.body.health.github, true);
  assert.equal(ok.body.health.ai, true);
  assert.equal(ok.body.health.statsStorage, false);
  assert.equal(ok.body.stats, null);
  assert.equal(ok.body.chats, null);
  const text = JSON.stringify(ok.body);
  assert.equal(text.includes("ghp_secret_value") || text.includes("gem_secret"), false);
  assert.equal(ok.headers["x-robots-tag"], "noindex, nofollow");
  assert.equal(ok.headers["cache-control"], "no-store");
}));

test("verifyAdmin rejects empty / oversized tokens without network", async () => {
  const fail = async () => assert.fail("no network");
  assert.equal(await verifyAdmin("", { fetchImpl: fail }), false);
  assert.equal(await verifyAdmin("x".repeat(5000), { fetchImpl: fail }), false);
});

test("cookie helpers", () => {
  assert.equal(readCookie({ headers: { cookie: "a=1; nxs_rt=abc%3D; b=2" } }), "abc=");
  assert.equal(readCookie({ headers: {} }), "");
  assert.ok(!sessionCookie("v", { secure: false }).includes("Secure"));
  assert.deepEqual(Object.keys(health({})).sort(), ["ai", "chatsStorage", "github", "statsKey", "statsStorage", "supabase", "translate"]);
});

test("studio page: no client password check, no refresh token in localStorage, noindex", () => {
  const lib = readFileSync(join(ROOT, "src/lib/studio.ts"), "utf8");
  assert.ok(!/localStorage\.setItem\(SESSION_KEY/.test(lib), "session must not be persisted in localStorage");
  assert.ok(!/refresh_token/.test(lib.slice(lib.indexOf("export type StudioSession"), lib.indexOf("async function parse"))), "client must not hold refresh token");
  const robots = readFileSync(join(ROOT, "public/robots.txt"), "utf8");
  assert.match(robots, /Disallow: \/nx-studio/);
  const seo = readFileSync(join(ROOT, "src/lib/seo.ts"), "utf8");
  assert.match(seo, /path === "\/nx-studio"[\s\S]{0,200}noindex, nofollow/);
  const vercel = JSON.parse(readFileSync(join(ROOT, "vercel.json"), "utf8"));
  const rule = vercel.headers.find((h) => h.source === "/nx-studio");
  assert.ok(rule && rule.headers.some((h) => h.key === "X-Robots-Tag" && /noindex/.test(h.value)), "X-Robots-Tag header for /nx-studio");
});

test("every panel string exists in all 5 languages and is non-empty", async () => {
  const src = readFileSync(join(ROOT, "src/components/studio/i18n.ts"), "utf8");
  const rows = [...src.matchAll(/^\s+([a-z_0-9]+): \[(.+)\],$/gm)];
  assert.ok(rows.length > 150, "dictionary parsed");
  for (const [, key, body] of rows) {
    const parts = JSON.parse(`[${body}]`);
    assert.equal(parts.length, 5, key);
    parts.forEach((p, i) => assert.ok(p.trim(), `${key}[${i}]`));
  }
  const used = new Set();
  for (const file of ["src/routes/nx-studio.tsx", "src/components/studio/editors.tsx", "src/components/studio/sections.tsx", "src/components/studio/core.tsx"]) {
    const text = readFileSync(join(ROOT, file), "utf8");
    for (const m of text.matchAll(/\bt\("([a-z_0-9]+)"/g)) used.add(m[1]);
  }
  const keys = new Set(rows.map((r) => r[1]));
  for (const k of used) assert.ok(keys.has(k), `missing key ${k}`);
});
