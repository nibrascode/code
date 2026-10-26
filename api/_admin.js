// NX Studio admin API məntiqi. Giriş Supabase Auth ilə serverdə yoxlanır, refresh token yalnız httpOnly cookie-də saxlanır.
// Sirr və açar heç vaxt cavaba yazılmır; sağlamlıq bölməsi yalnız "qoşulub / qoşulmayıb" bildirir.
import { createHash } from "node:crypto";
import { readDays, storageConfig } from "./_stats.js";
import { supaConfig } from "./_chats.js";

export const SUPA_URL = "https://qvwqqpxrvnrnwvyckwlo.supabase.co";
export const SUPA_KEY = "sb_publishable_IsY7gWUlP8l0_QgsQHXZ-w_2lHGEpc2";
export const ADMIN_EMAIL = "nibrascode@gmail.com";
export const COOKIE = "nxs_rt";
export const COOKIE_DAYS = 14;
export const MAX_FAILS = 5;
export const LOCK_SECONDS = 15 * 60;
const TIMEOUT_MS = 6000;

const memFails = new Map();
const verified = new Map();
const memGlobal = [];

// Təhlükəsizlik siqnalları (yalnız oxuma, heç kimi bloklamır).
// Uğursuz admin girişləri: son ~1 saat (cari + əvvəlki saat açarı). >=3 → xəbərdarlıq.
// Canlı ziyarətçi sıçrayışı: hər yoxlamada yavaş orta (EMA) saxlanır; canlı >= max(20, 4×orta) → xəbərdarlıq.
export const FAIL_ALERT = 3;
export async function securitySignals(live, { env = process.env, fetchImpl = globalThis.fetch, now = Date.now() } = {}) {
  const h = Math.floor(now / 3600000);
  let fails = memGlobal.filter((t) => t > now - 3600000).length;
  let lastFail = memGlobal.length ? memGlobal[memGlobal.length - 1] : null;
  let base = null;
  let storage = false;
  const cfg = storageConfig(env);
  if (cfg) {
    try {
      const out = await redis(cfg, [["GET", "nxadm:fails:" + h], ["GET", "nxadm:fails:" + (h - 1)], ["GET", "nxadm:lastfail"], ["GET", "nxadm:liveema"]], fetchImpl);
      fails = (Number(out?.[0]?.result) || 0) + (Number(out?.[1]?.result) || 0);
      lastFail = Number(out?.[2]?.result) || null;
      const prev = out?.[3]?.result;
      base = prev == null ? null : Number(prev);
      storage = true;
      if (typeof live === "number") {
        // Sıçrayış ortanı tez şişirtməsin deyə kiçik çəki
        const next = base == null ? live : base * 0.95 + Math.min(live, Math.max(base * 2, 5)) * 0.05;
        await redis(cfg, [["SET", "nxadm:liveema", next.toFixed(2), "EX", 30 * 86400]], fetchImpl);
      }
    } catch {
      // yaddaş dəyərləri qalır
    }
  }
  const spikeAt = base == null ? null : Math.max(20, Math.ceil(base * 4));
  const spike = typeof live === "number" && spikeAt !== null && live >= spikeAt;
  return { fails, lastFail, failAlert: fails >= FAIL_ALERT, live, base: base == null ? null : Math.round(base * 10) / 10, spikeAt, spike, storage };
}

async function vercelAttack(env, fetchImpl) {
  const token = env.VERCEL_SECURITY_TOKEN || env.VERCEL_API_TOKEN;
  const project = env.VERCEL_PROJECT_ID || "prj_qE0xBVHXvUwmNFCHV3HCpRalFshX";
  if (!token || !project) return null;
  try {
    const q = new URLSearchParams({ projectId: project });
    if (env.VERCEL_TEAM_ID) q.set("teamId", env.VERCEL_TEAM_ID);
    const res = await timed("https://api.vercel.com/v1/security/firewall/attack-status?" + q, { headers: { Authorization: "Bearer " + token } }, fetchImpl);
    if (!res.ok) return null;
    const j = await res.json();
    const list = Array.isArray(j?.anomalies) ? j.anomalies : [];
    return { active: list.length > 0, count: list.length };
  } catch {
    return null;
  }
}
export { vercelAttack };

function hash(value) {
  return createHash("sha256").update(String(value || "")).digest("hex").slice(0, 32);
}

export function clientIp(req) {
  const fwd = String((req.headers && (req.headers["x-forwarded-for"] || req.headers["x-real-ip"])) || "");
  return fwd.split(",")[0].trim() || (req.socket && req.socket.remoteAddress) || "unknown";
}

async function timed(url, init = {}, fetchImpl = globalThis.fetch) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    return await fetchImpl(url, { ...init, signal: ctl.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function redis(cfg, commands, fetchImpl) {
  const res = await timed(cfg.url + "/pipeline", {
    method: "POST",
    headers: { Authorization: "Bearer " + cfg.token, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
  }, fetchImpl);
  if (!res.ok) throw new Error("redis " + res.status);
  return res.json();
}

// Uğursuz giriş sayğacı: Upstash qoşulubsa orada (bütün serverlər üçün ortaq), yoxdursa yaddaşda.
export async function failState(ip, { env = process.env, fetchImpl = globalThis.fetch, now = Date.now() } = {}) {
  const key = "nxadm:fail:" + hash(ip);
  const cfg = storageConfig(env);
  if (cfg) {
    try {
      const out = await redis(cfg, [["GET", key], ["TTL", key]], fetchImpl);
      const count = Number(out?.[0]?.result) || 0;
      const ttl = Number(out?.[1]?.result) || 0;
      return { count, retryAfter: count >= MAX_FAILS ? Math.max(1, ttl) : 0 };
    } catch {
      // yaddaşa düşür
    }
  }
  const row = memFails.get(key);
  if (!row || row.until <= now) return { count: 0, retryAfter: 0 };
  return { count: row.count, retryAfter: row.count >= MAX_FAILS ? Math.ceil((row.until - now) / 1000) : 0 };
}

export async function addFail(ip, { env = process.env, fetchImpl = globalThis.fetch, now = Date.now() } = {}) {
  const key = "nxadm:fail:" + hash(ip);
  const cfg = storageConfig(env);
  if (cfg) {
    try {
      await redis(cfg, [["INCR", key], ["EXPIRE", key, LOCK_SECONDS, "NX"], ["INCR", "nxadm:fails:" + Math.floor(now / 3600000)], ["EXPIRE", "nxadm:fails:" + Math.floor(now / 3600000), 7200], ["SET", "nxadm:lastfail", String(now), "EX", 86400]], fetchImpl);
    } catch {
      // yaddaşa düşür
    }
  }
  memGlobal.push(now);
  while (memGlobal.length && memGlobal[0] < now - 3600000) memGlobal.shift();
  const row = memFails.get(key);
  if (!row || row.until <= now) memFails.set(key, { count: 1, until: now + LOCK_SECONDS * 1000 });
  else row.count += 1;
}

export async function clearFails(ip, { env = process.env, fetchImpl = globalThis.fetch } = {}) {
  const key = "nxadm:fail:" + hash(ip);
  memFails.delete(key);
  const cfg = storageConfig(env);
  if (cfg) {
    try {
      await redis(cfg, [["DEL", key]], fetchImpl);
    } catch {
      // keç
    }
  }
}

export function readCookie(req, name = COOKIE) {
  const raw = String((req.headers && req.headers.cookie) || "");
  for (const part of raw.split(";")) {
    const i = part.indexOf("=");
    if (i < 0) continue;
    if (part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return "";
}

export function sessionCookie(value, { secure = true } = {}) {
  const parts = [
    `${COOKIE}=${value ? encodeURIComponent(value) : ""}`,
    "Path=/api/admin",
    "HttpOnly",
    "SameSite=Strict",
    `Max-Age=${value ? COOKIE_DAYS * 24 * 3600 : 0}`,
  ];
  if (secure) parts.push("Secure");
  return parts.join("; ");
}

function supaHeaders(token) {
  return { apikey: SUPA_KEY, Authorization: `Bearer ${token || SUPA_KEY}`, "Content-Type": "application/json" };
}

function sessionOut(data, now = Date.now()) {
  return {
    access_token: data.access_token,
    expires_at: now + (Number(data.expires_in) || 3600) * 1000,
    email: String(data.user?.email || "").toLowerCase(),
  };
}

export async function passwordLogin(email, password, fetchImpl = globalThis.fetch) {
  const res = await timed(`${SUPA_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: supaHeaders(),
    body: JSON.stringify({ email, password }),
  }, fetchImpl);
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token || !data.refresh_token) return null;
  return data;
}

export async function refreshLogin(refreshToken, fetchImpl = globalThis.fetch) {
  const res = await timed(`${SUPA_URL}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: supaHeaders(),
    body: JSON.stringify({ refresh_token: refreshToken }),
  }, fetchImpl);
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token || !data.refresh_token) return null;
  return data;
}

// Bearer tokenin həqiqətən admin hesabına aid olduğunu Supabase-dən soruşur (60 saniyə keş).
export async function verifyAdmin(token, { fetchImpl = globalThis.fetch, now = Date.now() } = {}) {
  if (!token || token.length < 20 || token.length > 4000) return false;
  const key = hash(token);
  const hit = verified.get(key);
  if (hit && hit > now) return true;
  try {
    const res = await timed(`${SUPA_URL}/auth/v1/user`, { headers: supaHeaders(token) }, fetchImpl);
    if (!res.ok) return false;
    const user = await res.json();
    const ok = String(user?.email || "").toLowerCase() === ADMIN_EMAIL;
    if (ok) {
      if (verified.size > 200) verified.clear();
      verified.set(key, now + 60_000);
    }
    return ok;
  } catch {
    return false;
  }
}

export function health(env = process.env) {
  const has = (...keys) => keys.some((k) => Boolean(String(env[k] || "").trim()));
  return {
    supabase: true,
    statsStorage: Boolean(storageConfig(env)),
    chatsStorage: Boolean(supaConfig(env)),
    github: has("GITHUB_TOKEN"),
    ai: has("GEMINI_API_KEY", "GROK_CONNECTOR_ACCESS_TOKEN"),
    translate: has("TRANSLATE_ENGINE_URL", "TRANSLATE_API_KEY"),
    statsKey: has("STATS_KEY"),
  };
}

export async function chatCount({ env = process.env, fetchImpl = globalThis.fetch } = {}) {
  const cfg = supaConfig(env);
  if (!cfg) return null;
  try {
    const res = await timed(`${cfg.url}/rest/v1/nibras_chats?select=id`, {
      method: "HEAD",
      headers: { apikey: cfg.key, Authorization: `Bearer ${cfg.key}`, Prefer: "count=exact", Range: "0-0" },
    }, fetchImpl);
    const range = res.headers.get("content-range") || "";
    const total = Number(range.split("/")[1]);
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

export async function supabaseUp(fetchImpl = globalThis.fetch) {
  try {
    const res = await timed(`${SUPA_URL}/rest/v1/studio_apps?select=slug&limit=1`, { headers: supaHeaders() }, fetchImpl);
    return res.ok;
  } catch {
    return false;
  }
}

export async function overview({ env = process.env, fetchImpl = globalThis.fetch, days = 30 } = {}) {
  const [up, stats, chats] = await Promise.all([
    supabaseUp(fetchImpl),
    readDays(days, { env, fetchImpl }).catch(() => null),
    chatCount({ env, fetchImpl }),
  ]);
  return { health: { ...health(env), supabase: up, chatsStorage: chats !== null }, stats, chats, serverTime: new Date().toISOString() };
}

export async function supaLogout(token, fetchImpl = globalThis.fetch) {
  if (!token) return;
  try {
    await timed(`${SUPA_URL}/auth/v1/logout`, { method: "POST", headers: supaHeaders(token) }, fetchImpl);
  } catch {
    // keç
  }
}

export { sessionOut };
