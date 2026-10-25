// Anonim "indi saytda" sayğacı. Yalnız təsadüfi sessiya id-si (sessionStorage) və son görülmə vaxtı saxlanır.
// IP, cookie, səhifə, söhbət mətni saxlanmır. Cədvəl: public.site_presence (RLS açıq, yalnız server açarı).
import { supaConfig } from "./_chats.js";

export const LIVE_SECONDS = 90; // son 90 saniyədə siqnal göndərən = indi saytda
const PURGE_SECONDS = 15 * 60;
const TIMEOUT_MS = 2500;
const SID_RE = /^[a-z0-9]{12,40}$/;

async function timed(url, init, fetchImpl) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    return await fetchImpl(url, { ...init, signal: ctl.signal });
  } finally {
    clearTimeout(t);
  }
}

const headers = (cfg, extra = {}) => ({ apikey: cfg.key, Authorization: "Bearer " + cfg.key, "Content-Type": "application/json", ...extra });

export function cleanSid(v) {
  return typeof v === "string" && SID_RE.test(v) ? v : "";
}

/** Heartbeat: upsert one row. Never throws. */
export async function touch(sid, { env = process.env, fetchImpl = globalThis.fetch } = {}) {
  const id = cleanSid(sid);
  const cfg = supaConfig(env);
  if (!id || !cfg) return false;
  try {
    const res = await timed(`${cfg.url}/rest/v1/site_presence?on_conflict=sid`, {
      method: "POST",
      headers: headers(cfg, { Prefer: "resolution=merge-duplicates,return=minimal" }),
      body: JSON.stringify({ sid: id, seen: new Date().toISOString() }),
    }, fetchImpl);
    return res.ok;
  } catch {
    return false;
  }
}

/** Admin: live count (null if storage missing / failed). Also purges stale rows. */
export async function liveCount({ env = process.env, fetchImpl = globalThis.fetch, now = Date.now() } = {}) {
  const cfg = supaConfig(env);
  if (!cfg) return null;
  const since = new Date(now - LIVE_SECONDS * 1000).toISOString();
  const old = new Date(now - PURGE_SECONDS * 1000).toISOString();
  try {
    timed(`${cfg.url}/rest/v1/site_presence?seen=lt.${encodeURIComponent(old)}`, { method: "DELETE", headers: headers(cfg, { Prefer: "return=minimal" }) }, fetchImpl).catch(() => undefined);
    const res = await timed(`${cfg.url}/rest/v1/site_presence?select=sid&seen=gte.${encodeURIComponent(since)}`, {
      method: "HEAD",
      headers: headers(cfg, { Prefer: "count=exact" }),
    }, fetchImpl);
    if (!res.ok) return null;
    const total = Number(String(res.headers.get("content-range") || "").split("/")[1]);
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}
