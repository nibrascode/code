// NX Studio əlavə əməliyyatları: girişsiz sorğular həmişə rədd edilir, açarlar cavaba düşmür.
import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/admin.js";
import { providerHealth, setAppSize, coverImage } from "../api/_nx.js";

function call({ method = "GET", url, headers = {}, body }) {
  return new Promise((resolve) => {
    const res = {
      code: 0,
      headers: {},
      setHeader(k, v) { this.headers[k.toLowerCase()] = v; },
      status(c) { this.code = c; return this; },
      json(b) { resolve({ code: this.code, body: b, headers: this.headers }); },
      end(b) { resolve({ code: this.code, body: b, headers: this.headers }); },
    };
    handler({ method, url, headers: { host: "nibrascode.com", ...headers }, body, socket: {} }, res);
  });
}

const realFetch = globalThis.fetch;
test.afterEach(() => { globalThis.fetch = realFetch; });

for (const op of ["chats", "chat", "providers", "library", "apps", "covers", "cover", "deploys"]) {
  test(`GET ${op} girişsiz 401`, async () => {
    globalThis.fetch = async () => new Response("{}", { status: 401 });
    const r = await call({ url: `/api/admin?op=${op}` });
    assert.equal(r.code, 401);
    const r2 = await call({ url: `/api/admin?op=${op}`, headers: { authorization: "Bearer " + "x".repeat(40) } });
    assert.equal(r2.code, 401);
  });
}

for (const op of ["chatdel", "setsize", "playsync"]) {
  test(`POST ${op} girişsiz rədd`, async () => {
    globalThis.fetch = async () => new Response("{}", { status: 401 });
    assert.equal((await call({ method: "POST", url: `/api/admin?op=${op}`, body: {} })).code, 403);
    const r = await call({ method: "POST", url: `/api/admin?op=${op}`, headers: { "x-nxs": "1" }, body: { id: "abcdefgh12" } });
    assert.equal(r.code, 401);
  });
}

test("admin tokeni ilə providers açar göstərmir", async () => {
  const env = { GROQ_API_KEY: "gsk_SECRET_VALUE_123" };
  const seen = [];
  const fetchImpl = async (url, init) => { seen.push([url, init]); return new Response("{}", { status: 200 }); };
  const out = await providerHealth({ env, fetchImpl, fresh: true });
  const groq = out.providers.find((p) => p.id === "groq");
  assert.equal(groq.configured, true);
  assert.equal(groq.ok, true);
  assert.ok(!JSON.stringify(out).includes("SECRET"));
  assert.equal(out.providers.find((p) => p.id === "mistral").configured, false);
});

test("setAppSize yanlış dəyəri rədd edir", async () => {
  const env = { GITHUB_TOKEN: "t" };
  assert.equal((await setAppSize({ slug: "nibras-pdf", size: "çox böyük" }, { env, fetchImpl: realFetch })).status, 400);
  assert.equal((await setAppSize({ slug: "../x", size: "1 MB" }, { env, fetchImpl: realFetch })).status, 400);
  assert.equal((await setAppSize({ slug: "nibras-pdf", size: "1 MB" }, { env: {}, fetchImpl: realFetch })).status, 503);
});

test("coverImage yol keçidini rədd edir", async () => {
  assert.equal((await coverImage("../../secret.webp", { env: {} })).status, 400);
});
