// Əməliyyat sayğacları (yalnız admin xəbərdarlığı üçün): AI çağırış/xəta sayı və 5xx cavablar marşrut üzrə.
// Gün + ümumi say; IP, mesaj və istifadəçi məlumatı saxlanmır. Saxlama yoxdursa səssizcə keçilir. Heç kimi bloklamır.
import { dayKey, storageConfig } from "./_stats.js";

const KEEP = 15 * 24 * 3600;
const TIMEOUT_MS = 1500;

async function pipe(cfg, cmds) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(cfg.url + "/pipeline", {
      method: "POST",
      headers: { Authorization: "Bearer " + cfg.token, "Content-Type": "application/json" },
      body: JSON.stringify(cmds),
      signal: ctl.signal,
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function bump(kind, field) {
  const cfg = storageConfig();
  if (!cfg) return;
  const key = `nxops:${kind}:${dayKey()}`;
  await pipe(cfg, [["HINCRBY", key, String(field).slice(0, 40), 1], ["EXPIRE", key, KEEP]]);
}

// AI nəticəsini sayır (skipped sayılmır)
export function countAi(provider, result) {
  if (!result || result.skipped) return;
  bump("ai", result.ok === false || result.error ? "err" : "ok").catch(() => undefined);
}

// Handler-i bürüyür: 5xx olsa marşrut üzrə sayır. Davranışı dəyişmir.
export function watch5xx(route, handler) {
  return async function wrapped(req, res) {
    try {
      const out = await handler(req, res);
      if (Number(res.statusCode) >= 500) await bump("5xx", route).catch(() => undefined);
      return out;
    } catch (e) {
      await bump("5xx", route).catch(() => undefined);
      throw e;
    }
  };
}

// Admin: son 8 günün AI sayları və bugünkü+dünənki 5xx
export async function opsSignals(now = Date.now()) {
  const cfg = storageConfig();
  if (!cfg) return { storage: false };
  const days = Array.from({ length: 8 }, (_, i) => dayKey(now - i * 86400000));
  const out = await pipe(cfg, [...days.map((d) => ["HGETALL", `nxops:ai:${d}`]), ["HGETALL", `nxops:5xx:${days[0]}`], ["HGETALL", `nxops:5xx:${days[1]}`]]);
  if (!out) return { storage: false };
  const map = (r) => {
    const flat = (r && r.result) || [];
    const o = {};
    for (let k = 0; k + 1 < flat.length; k += 2) o[flat[k]] = Number(flat[k + 1]) || 0;
    return o;
  };
  const ai = days.map((d, i) => ({ date: d, ...{ ok: 0, err: 0 }, ...map(out[i]) }));
  const today = ai[0];
  const prev = ai.slice(1);
  const active = prev.filter((d) => d.ok + d.err > 0);
  const avg = active.length ? active.reduce((s, d) => s + d.ok + d.err, 0) / active.length : null;
  const calls = today.ok + today.err;
  const errRate = calls ? today.err / calls : 0;
  const spike = avg != null && active.length >= 2 && calls >= Math.max(30, avg * 3);
  const errAlert = today.err >= 20 && errRate >= 0.3;
  const sum = {};
  for (const r of [map(out[8]), map(out[9])]) for (const [k, v] of Object.entries(r)) sum[k] = (sum[k] || 0) + v;
  const top = Object.entries(sum).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([route, n]) => ({ route, n }));
  const total5 = Object.values(sum).reduce((s, n) => s + n, 0);
  return { storage: true, ai: { calls, err: today.err, avg: avg == null ? null : Math.round(avg), spike, errAlert, errRate: Math.round(errRate * 100) }, e5: { total: total5, top, alert: total5 >= 10 } };
}
