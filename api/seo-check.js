import { lookup } from "node:dns/promises";

export const config = { maxDuration: 15 };

const MAX_BYTES = 512 * 1024;
const GAP_MS = 10_000;
const seen = new Map();

function clientIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return forwarded || req.socket?.remoteAddress || "0";
}

function limited(ip) {
  const now = Date.now();
  if (seen.size > 400) {
    for (const [key, at] of seen) if (now - at > GAP_MS) seen.delete(key);
  }
  const at = seen.get(ip) || 0;
  if (now - at < GAP_MS) return true;
  seen.set(ip, now);
  return false;
}

export function isPrivateAddress(ip) {
  const value = String(ip || "").toLowerCase().replace(/^\[|\]$/g, "");
  if (value.startsWith("::ffff:")) return isPrivateAddress(value.slice(7));
  if (!value || value === "::1" || value === "::") return true;
  if (value.startsWith("fc") || value.startsWith("fd") || value.startsWith("fe80")) return true;
  if (value.includes(":")) return false;
  const parts = value.split(".").map((item) => Number(item));
  if (parts.length !== 4 || parts.some((item) => !Number.isInteger(item) || item < 0 || item > 255)) return true;
  const [a, b] = parts;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  return false;
}

function blockedHost(hostname) {
  const host = hostname.toLowerCase().replace(/\.$/, "");
  return host === "localhost" || host.endsWith(".localhost") || host.endsWith(".local") || host === "metadata.google.internal";
}

export async function publicUrl(input) {
  let url;
  try {
    url = new URL(String(input || "").trim());
  } catch {
    return { ok: false, error: "bad-url" };
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return { ok: false, error: "bad-url" };
  if (url.username || url.password) return { ok: false, error: "blocked" };
  if (blockedHost(url.hostname)) return { ok: false, error: "blocked" };
  const host = url.hostname.toLowerCase();
  const numeric = host.includes(":") || /^\d+\.\d+\.\d+\.\d+$/.test(host);
  if (numeric && isPrivateAddress(host)) return { ok: false, error: "blocked" };
  let records = [];
  try {
    records = await lookup(url.hostname, { all: true, verbatim: true });
  } catch {
    return { ok: false, error: "unreachable" };
  }
  if (!records.length || records.some((item) => isPrivateAddress(item.address))) return { ok: false, error: "blocked" };
  url.hash = "";
  return { ok: true, url: url.toString() };
}

function decode(value) {
  return String(value || "")
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function meta(html, name) {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of tags) {
    const named = tag.match(/\b(?:name|property)\s*=\s*["']([^"']+)["']/i);
    if (!named || named[1].toLowerCase() !== name) continue;
    const content = tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i);
    return content ? decode(content[1]) : "";
  }
  return "";
}

export function parsePage(html) {
  const visible = String(html || "").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  const title = decode((visible.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "");
  const canonical = decode((visible.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i) || [""])[0].match(/\bhref=["']([^"']+)["']/i)?.[1] || "");
  const lang = decode((visible.match(/<html\b[^>]*\blang=["']([^"']+)["']/i) || [])[1] || "");
  const h1 = (visible.match(/<h1\b/gi) || []).length;
  const images = visible.match(/<img\b[^>]*>/gi) || [];
  const missingAlt = images.filter((tag) => !/\balt\s*=/i.test(tag)).length;
  return {
    title,
    description: meta(visible, "description"),
    robots: meta(visible, "robots"),
    canonical,
    lang,
    h1,
    images: images.length,
    missingAlt,
  };
}

export function readRobots(text, path) {
  const sitemaps = [];
  let star = false;
  let blocks = false;
  for (const raw of String(text || "").split(/\r?\n/)) {
    const line = raw.split("#")[0].trim();
    if (!line) continue;
    const match = line.match(/^([^:]+)\s*:\s*(.*)$/);
    if (!match) continue;
    const key = match[1].toLowerCase();
    const value = match[2].trim();
    if (key === "sitemap" && value) sitemaps.push(value);
    if (key === "user-agent") star = value === "*";
    else if (star && key === "disallow" && value && (value === "/" || path.startsWith(value))) blocks = true;
  }
  return { blocks, sitemaps: sitemaps.slice(0, 3) };
}

export function readSitemap(xml) {
  const text = String(xml || "");
  if (/<sitemapindex[\s>]/i.test(text)) return { kind: "index", count: (text.match(/<sitemap\b/gi) || []).length };
  return { kind: "urlset", count: (text.match(/<url\b/gi) || []).length };
}

async function readBody(response) {
  const reader = response.body?.getReader();
  if (!reader) return { text: "", capped: false };
  const chunks = [];
  let size = 0;
  while (true) {
    const step = await reader.read();
    if (step.done) break;
    size += step.value.byteLength;
    if (size > MAX_BYTES) {
      await reader.cancel();
      return { text: Buffer.concat(chunks.map((item) => Buffer.from(item))).toString("utf8"), capped: true };
    }
    chunks.push(Buffer.from(step.value));
  }
  return { text: Buffer.concat(chunks).toString("utf8"), capped: false };
}

async function pull(target, accept) {
  let current = target;
  for (let hop = 0; hop < 4; hop += 1) {
    const gate = await publicUrl(current);
    if (!gate.ok) return gate;
    const started = Date.now();
    let response;
    try {
      response = await fetch(gate.url, {
        redirect: "manual",
        signal: AbortSignal.timeout(6000),
        headers: {
          "user-agent": "NibrasSEOCheck/1.0 (+https://nibrascode.com/seo)",
          accept,
        },
      });
    } catch {
      return { ok: false, error: "unreachable" };
    }
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) return { ok: false, error: "unreachable" };
      current = new URL(location, gate.url).toString();
      continue;
    }
    const body = await readBody(response);
    return { ok: true, url: gate.url, status: response.status, ms: Date.now() - started, type: response.headers.get("content-type") || "", ...body };
  }
  return { ok: false, error: "blocked" };
}

function notesFor(page, fetched) {
  const notes = [];
  if (!fetched.https) notes.push("no-https");
  if (fetched.hops) notes.push("redirect");
  if (!page.title) notes.push("no-title");
  else if (page.title.length > 60) notes.push("title-long");
  if (!page.description) notes.push("no-description");
  else if (page.description.length > 160) notes.push("description-long");
  if (!page.canonical) notes.push("no-canonical");
  if (/noindex/i.test(page.robots)) notes.push("noindex");
  if (!page.h1) notes.push("h1-none");
  else if (page.h1 > 1) notes.push("h1-many");
  if (page.missingAlt) notes.push("alt-missing");
  return notes;
}

async function inspect(raw) {
  const gate = await publicUrl(raw);
  if (!gate.ok) return gate;
  const page = await pull(gate.url, "text/html,application/xhtml+xml");
  if (!page.ok) return page;
  const final = new URL(page.url);
  const parsed = /html|xml/i.test(page.type) || /<html[\s>]/i.test(page.text) ? parsePage(page.text) : parsePage("");
  const robots = await pull(new URL("/robots.txt", final.origin).toString(), "text/plain");
  const robot = robots.ok && robots.status === 200 ? readRobots(robots.text, final.pathname || "/") : { blocks: false, sitemaps: [] };
  let sitemap = { found: false, url: "", kind: "", count: 0, capped: false };
  const sitemapUrl = robot.sitemaps[0] || new URL("/sitemap.xml", final.origin).toString();
  const listed = Boolean(robot.sitemaps[0]);
  const map = await pull(sitemapUrl, "application/xml,text/xml");
  if (map.ok && map.status === 200 && /<(urlset|sitemapindex)\b/i.test(map.text)) {
    const read = readSitemap(map.text);
    sitemap = { found: true, url: map.url, kind: read.kind, count: read.count, capped: map.capped };
  } else if (listed) {
    sitemap = { found: false, url: sitemapUrl, kind: "", count: 0, capped: false };
  }
  return {
    ok: true,
    finalUrl: page.url,
    status: page.status,
    ms: page.ms,
    https: final.protocol === "https:",
    ...parsed,
    notes: [
      ...notesFor(parsed, { https: final.protocol === "https:", hops: page.url !== gate.url }),
      ...(robots.ok && robots.status === 200 ? [] : ["robots-missing"]),
      ...(robot.blocks ? ["robots-block"] : []),
      ...(sitemap.found ? [] : ["sitemap-missing"]),
      ...(page.capped || sitemap.capped ? ["truncated"] : []),
    ],
    robotsFound: Boolean(robots.ok && robots.status === 200),
    sitemap,
  };
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "no-store");
  res.end(JSON.stringify(body));
}

async function readJson(req) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 4000) return {};
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    send(res, 405, { ok: false, error: "bad-url" });
    return;
  }
  if (limited(clientIp(req))) {
    send(res, 429, { ok: false, error: "rate" });
    return;
  }
  try {
    const body = await readJson(req);
    const result = await inspect(body.url);
    send(res, result.ok ? 200 : 400, result);
  } catch {
    send(res, 400, { ok: false, error: "bad-url" });
  }
}
