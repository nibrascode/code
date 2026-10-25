import { publicUrl, parsePage, readRobots, readSitemap } from "./seo-check.js";

export const config = { maxDuration: 30 };

const MAX_BYTES = 2 * 1024 * 1024;
const GAP_MS = 15_000;
const MAX_LINKS = 25;
const MAX_ASSETS = 12;
const seen = new Map();
const UA = "NibrasSiteDoctor/1.0 (+https://nibrascode.com/doctor)";

function clientIp(req) {
  return String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.socket?.remoteAddress || "0";
}
function limited(ip) {
  const now = Date.now();
  if (seen.size > 500) for (const [k, at] of seen) if (now - at > GAP_MS) seen.delete(k);
  if (now - (seen.get(ip) || 0) < GAP_MS) return true;
  seen.set(ip, now);
  return false;
}

async function readBody(response, cap) {
  const reader = response.body?.getReader();
  if (!reader) return { buf: Buffer.alloc(0), capped: false };
  const chunks = [];
  let size = 0;
  while (true) {
    const step = await reader.read();
    if (step.done) break;
    size += step.value.byteLength;
    if (size > cap) {
      await reader.cancel().catch(() => {});
      return { buf: Buffer.concat(chunks), capped: true, size };
    }
    chunks.push(Buffer.from(step.value));
  }
  return { buf: Buffer.concat(chunks), capped: false, size };
}

/** Fetch with SSRF gate on every redirect hop, timeout and size cap. */
async function get(target, { method = "GET", accept = "*/*", timeout = 7000, cap = MAX_BYTES, body = true } = {}) {
  let current = target;
  const hops = [];
  for (let hop = 0; hop < 5; hop += 1) {
    const gate = await publicUrl(current);
    if (!gate.ok) return { ok: false, error: gate.error, hops };
    const started = Date.now();
    let response;
    try {
      response = await fetch(gate.url, { method, redirect: "manual", signal: AbortSignal.timeout(timeout), headers: { "user-agent": UA, accept, "accept-encoding": "gzip, br" } });
    } catch {
      return { ok: false, error: "unreachable", hops };
    }
    if (response.status >= 300 && response.status < 400 && response.headers.get("location")) {
      hops.push({ from: gate.url, status: response.status });
      current = new URL(response.headers.get("location"), gate.url).toString();
      await response.body?.cancel().catch(() => {});
      continue;
    }
    const ttfb = Date.now() - started;
    const read = body ? await readBody(response, cap) : { buf: Buffer.alloc(0), capped: false, size: 0 };
    if (!body) await response.body?.cancel().catch(() => {});
    return { ok: true, url: gate.url, status: response.status, ttfb, ms: Date.now() - started, headers: Object.fromEntries(response.headers), ...read, hops };
  }
  return { ok: false, error: "redirects", hops };
}

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
  return m ? (m[1] ?? m[2] ?? m[3] ?? "") : null;
}

export function analyzeHtml(html, base) {
  const noScript = html.replace(/<script\b[\s\S]*?<\/script>/gi, (m) => (/\bsrc=/i.test(m.slice(0, 300)) ? m.slice(0, m.indexOf(">") + 1) : "<script>")).replace(/<!--[\s\S]*?-->/g, "");
  const head = (noScript.match(/<head\b[\s\S]*?<\/head>/i) || [""])[0];
  const tags = (re) => noScript.match(re) || [];
  const metas = tags(/<meta\b[^>]*>/gi);
  const viewport = metas.map((t) => (attr(t, "name") || "").toLowerCase() === "viewport" ? attr(t, "content") || "" : null).find((v) => v !== null && v !== undefined) ?? null;
  const charset = metas.some((t) => attr(t, "charset") !== null || /charset=/i.test(attr(t, "content") || ""));
  const og = metas.filter((t) => /^og:/i.test(attr(t, "property") || "")).length;
  const headings = [...noScript.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({ level: Number(m[1]), text: m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().slice(0, 120) }));
  let skip = false;
  for (let i = 1; i < headings.length; i++) if (headings[i].level - headings[i - 1].level > 1) skip = true;
  const imgs = tags(/<img\b[^>]*>/gi);
  const scripts = tags(/<script\b[^>]*\bsrc=[^>]*>/gi);
  const blocking = tags(/<script\b[^>]*\bsrc=[^>]*>/gi).filter((t) => head.includes(t) && !/\b(async|defer)\b/i.test(t) && !/type=["']?module/i.test(t)).length;
  const styles = tags(/<link\b[^>]*rel=["']?stylesheet[^>]*>/gi);
  const favicon = tags(/<link\b[^>]*rel=["']?[^"'>]*icon[^>]*>/gi).length > 0;
  const abs = (u) => { try { return new URL(u, base).toString().split("#")[0]; } catch { return null; } };
  const links = [];
  for (const t of tags(/<a\b[^>]*>/gi)) {
    const h = attr(t, "href");
    if (!h || /^(#|mailto:|tel:|javascript:|data:)/i.test(h.trim())) continue;
    const u = abs(h.trim());
    if (u && /^https?:/i.test(u) && !links.includes(u)) links.push(u);
  }
  const assets = [...scripts.map((t) => attr(t, "src")), ...styles.map((t) => attr(t, "href")), ...imgs.map((t) => attr(t, "src"))].filter(Boolean).map(abs).filter((u) => u && /^https?:/.test(u));
  const isHttps = base.startsWith("https:");
  const mixed = isHttps ? assets.filter((u) => u.startsWith("http:")).length : 0;
  return {
    viewport,
    charset,
    og,
    headings: headings.slice(0, 40),
    h1: headings.filter((h) => h.level === 1).length,
    skip,
    images: imgs.length,
    imgNoAlt: imgs.filter((t) => attr(t, "alt") === null).length,
    imgNoSize: imgs.filter((t) => attr(t, "width") === null || attr(t, "height") === null).length,
    imgNoLazy: Math.max(0, imgs.filter((t) => !/loading=["']?lazy/i.test(t)).length - 3),
    scripts: scripts.length,
    blocking,
    styles: styles.length,
    favicon,
    links,
    assets: Array.from(new Set(assets)),
    mixed,
    inlineBytes: (html.match(/<(script|style)\b(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/\1>/gi) || []).reduce((a, s) => a + s.length, 0),
  };
}

async function pool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } }));
  return out;
}

async function checkLink(url) {
  let r = await get(url, { method: "HEAD", timeout: 5000, body: false });
  if (r.ok && (r.status === 405 || r.status === 403 || r.status === 501)) r = await get(url, { timeout: 5000, cap: 64 * 1024 });
  return { url, status: r.ok ? r.status : 0, error: r.ok ? "" : r.error };
}

export async function diagnose(raw) {
  const t0 = Date.now();
  let input = String(raw || "").trim();
  if (input && !/^https?:\/\//i.test(input)) input = "https://" + input;
  const gate = await publicUrl(input);
  if (!gate.ok) return gate;
  const page = await get(gate.url, { accept: "text/html,application/xhtml+xml" });
  if (!page.ok) return { ok: false, error: page.error };
  const html = page.buf.toString("utf8");
  const final = new URL(page.url);
  const basic = parsePage(html);
  const a = analyzeHtml(html, page.url);
  const h = page.headers;
  const origin = final.origin;
  const [robots, httpVariant] = await Promise.all([
    get(origin + "/robots.txt", { accept: "text/plain", timeout: 5000, cap: 256 * 1024 }),
    final.protocol === "https:" ? get("http://" + final.host + final.pathname, { method: "HEAD", timeout: 5000, body: false }) : Promise.resolve(null),
  ]);
  const robot = robots.ok && robots.status === 200 ? readRobots(robots.buf.toString("utf8"), final.pathname || "/") : null;
  const smUrl = robot?.sitemaps[0] || origin + "/sitemap.xml";
  const sm = await get(smUrl, { accept: "application/xml,text/xml", timeout: 5000, cap: 1024 * 1024 });
  const smText = sm.ok && sm.status === 200 ? sm.buf.toString("utf8") : "";
  const sitemap = /<(urlset|sitemapindex)\b/i.test(smText) ? { found: true, url: sm.url, ...readSitemap(smText) } : { found: false, url: smUrl };

  const internal = a.links.filter((u) => new URL(u).host === final.host);
  const external = a.links.filter((u) => new URL(u).host !== final.host);
  const toCheck = [...internal.slice(0, 18), ...external.slice(0, MAX_LINKS - Math.min(18, internal.length))].slice(0, MAX_LINKS);
  const linkResults = Date.now() - t0 < 18000 ? await pool(toCheck, 6, checkLink) : [];
  const broken = linkResults.filter((l) => l.status === 0 || l.status >= 400);

  const sameAssets = a.assets.filter((u) => new URL(u).host === final.host).slice(0, MAX_ASSETS);
  const assetInfo = Date.now() - t0 < 22000 ? await pool(sameAssets, 6, async (u) => {
    const r = await get(u, { method: "HEAD", timeout: 4000, body: false });
    return r.ok ? { url: u, status: r.status, size: Number(r.headers["content-length"] || 0), enc: r.headers["content-encoding"] || "", cache: r.headers["cache-control"] || "", type: r.headers["content-type"] || "" } : { url: u, status: 0, size: 0, enc: "", cache: "", type: "" };
  }) : [];
  const bigAssets = assetInfo.filter((x) => x.size > 500 * 1024);
  const noCacheAssets = assetInfo.filter((x) => x.status === 200 && !/max-age=\d{4,}|immutable/i.test(x.cache));
  const brokenAssets = assetInfo.filter((x) => x.status === 0 || x.status >= 400);
  const textAssetsNoEnc = assetInfo.filter((x) => x.status === 200 && /javascript|css/.test(x.type) && x.size > 10 * 1024 && !x.enc);

  const issues = [];
  const add = (code, severity, data = {}) => issues.push({ code, severity, data });
  if (page.status >= 400) add("status", "high", { status: page.status });
  if (final.protocol !== "https:") add("no-https", "high");
  else if (httpVariant && httpVariant.ok && !(httpVariant.url || "").startsWith("https:") && httpVariant.hops.length === 0) add("http-no-redirect", "medium");
  if (final.protocol === "https:" && !h["strict-transport-security"]) add("no-hsts", "low");
  if (page.hops.length > 1) add("redirect-chain", "medium", { count: page.hops.length });
  if (!basic.title) add("no-title", "high");
  else if (basic.title.length > 60) add("title-long", "low", { len: basic.title.length });
  else if (basic.title.length < 15) add("title-short", "low", { len: basic.title.length });
  if (!basic.description) add("no-description", "medium");
  else if (basic.description.length > 160) add("description-long", "low", { len: basic.description.length });
  else if (basic.description.length < 50) add("description-short", "low", { len: basic.description.length });
  if (!basic.lang) add("no-lang", "low");
  if (!a.charset) add("no-charset", "low");
  if (a.viewport === null) add("no-viewport", "high");
  else if (!/width\s*=\s*device-width/i.test(a.viewport)) add("viewport-bad", "medium", { value: a.viewport });
  else if (/user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/i.test(a.viewport)) add("viewport-zoom", "low");
  if (a.h1 === 0) add("h1-none", "medium");
  else if (a.h1 > 1) add("h1-many", "low", { count: a.h1 });
  if (a.skip) add("heading-skip", "low");
  if (!basic.canonical) add("no-canonical", "low");
  if (/noindex/i.test(basic.robots)) add("noindex", "high");
  if (!robot) add("robots-missing", "low");
  else if (robot.blocks) add("robots-block", "high");
  if (!sitemap.found) add("sitemap-missing", "low");
  if (!a.og) add("no-og", "low");
  if (!a.favicon) add("no-favicon", "low");
  if (a.imgNoAlt) add("img-alt", "medium", { count: a.imgNoAlt });
  if (a.imgNoSize) add("img-size", "low", { count: a.imgNoSize });
  if (a.imgNoLazy > 0) add("img-lazy", "low", { count: a.imgNoLazy });
  if (a.mixed) add("mixed", "high", { count: a.mixed });
  if (broken.length) add("broken-links", "high", { count: broken.length, items: broken.slice(0, 15) });
  if (brokenAssets.length) add("broken-assets", "high", { count: brokenAssets.length, items: brokenAssets.map((x) => ({ url: x.url, status: x.status })) });
  if (page.ttfb > 800) add("slow-ttfb", page.ttfb > 1800 ? "high" : "medium", { ms: page.ttfb });
  if (page.size > 300 * 1024) add("html-big", "medium", { kb: Math.round(page.size / 1024) });
  if (!h["content-encoding"] && page.size > 5 * 1024) add("no-compression", "medium");
  if (textAssetsNoEnc.length) add("assets-no-compression", "medium", { count: textAssetsNoEnc.length });
  if (a.blocking > 0) add("render-blocking", "medium", { count: a.blocking });
  if (a.scripts > 15) add("many-scripts", "low", { count: a.scripts });
  if (bigAssets.length) add("big-assets", "medium", { items: bigAssets.map((x) => ({ url: x.url, kb: Math.round(x.size / 1024) })) });
  if (noCacheAssets.length) add("asset-cache", "low", { count: noCacheAssets.length, items: noCacheAssets.slice(0, 8).map((x) => ({ url: x.url, cache: x.cache || "-" })) });
  if (a.inlineBytes > 100 * 1024) add("inline-big", "low", { kb: Math.round(a.inlineBytes / 1024) });
  if (page.capped) add("truncated", "low");

  const weight = { high: 12, medium: 6, low: 2 };
  const score = Math.max(0, 100 - issues.reduce((s, i) => s + weight[i.severity], 0));
  return {
    ok: true,
    url: page.url,
    status: page.status,
    score,
    took: Date.now() - t0,
    summary: {
      title: basic.title,
      description: basic.description,
      lang: basic.lang,
      canonical: basic.canonical,
      viewport: a.viewport,
      https: final.protocol === "https:",
      ttfb: page.ttfb,
      ms: page.ms,
      htmlKb: Math.round((page.size || page.buf.length) / 1024),
      compression: h["content-encoding"] || "",
      cache: h["cache-control"] || "",
      server: h["server"] || "",
      images: a.images,
      scripts: a.scripts,
      styles: a.styles,
      links: a.links.length,
      checkedLinks: linkResults.length,
      headings: a.headings,
      robots: Boolean(robot),
      sitemap,
      redirects: page.hops.map((x) => x.status),
    },
    issues,
  };
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "no-store");
  res.end(JSON.stringify(body));
}

const BODY_LIMIT = 1024;
const URL_LIMIT = 2048;

// Only a tiny JSON object {"url": "..."} is accepted; anything else (files, forms, big bodies) is refused.
async function readJson(req) {
  if (req.body !== undefined && req.body !== null && req.body !== "") {
    const raw = Buffer.isBuffer(req.body) ? req.body.toString("utf8") : typeof req.body === "string" ? req.body : JSON.stringify(req.body);
    if (raw.length > BODY_LIMIT) throw Object.assign(new Error("big"), { code: 413 });
    return JSON.parse(raw || "{}");
  }
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > BODY_LIMIT) throw Object.assign(new Error("big"), { code: 413 });
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("allow", "POST");
    return send(res, 405, { ok: false, error: "method" });
  }
  const type = String(req.headers["content-type"] || "").split(";")[0].trim().toLowerCase();
  if (type !== "application/json") return send(res, 415, { ok: false, error: "type" });
  const declared = Number(req.headers["content-length"] || 0);
  if (declared > BODY_LIMIT) return send(res, 413, { ok: false, error: "big" });
  if (limited(clientIp(req))) return send(res, 429, { ok: false, error: "rate" });
  let body;
  try {
    body = await readJson(req);
  } catch (e) {
    return send(res, e && e.code === 413 ? 413 : 400, { ok: false, error: e && e.code === 413 ? "big" : "bad-url" });
  }
  const keys = body && typeof body === "object" && !Array.isArray(body) ? Object.keys(body) : null;
  if (!keys || keys.some((k) => k !== "url") || typeof body.url !== "string" || !body.url.trim() || body.url.length > URL_LIMIT) {
    return send(res, 400, { ok: false, error: "bad-url" });
  }
  try {
    const result = await diagnose(body.url.trim());
    send(res, result.ok ? 200 : 400, result);
  } catch {
    send(res, 400, { ok: false, error: "bad-url" });
  }
}
