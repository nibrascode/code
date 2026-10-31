// URL → readable text for the "URL to PDF" tool. Fetches one public HTML page
// server-side and returns its title + main text. No JS execution, no images/CSS.
import dns from "node:dns/promises";
import net from "node:net";
import { watch5xx } from "./_ops.js";

const MAX_BYTES = 3 * 1024 * 1024;
const TIMEOUT = 10000;

function privateIp(ip) {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split(".").map(Number);
    return a === 10 || a === 127 || a === 0 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127) || a >= 224;
  }
  const s = ip.toLowerCase();
  if (s.startsWith("::ffff:")) return privateIp(s.slice(7));
  return s === "::1" || s === "::" || s.startsWith("fc") || s.startsWith("fd") || s.startsWith("fe8") || s.startsWith("fe9") || s.startsWith("fea") || s.startsWith("feb");
}

async function safeUrl(raw) {
  let u;
  try { u = new URL(raw); } catch { return null; }
  if (u.protocol !== "http:" && u.protocol !== "https:") return null;
  if (u.username || u.password) return null;
  if (u.port && !["80", "443"].includes(u.port)) return null;
  const host = u.hostname.replace(/^\[|\]$/g, "");
  if (/^(localhost|.*\.local|.*\.internal)$/i.test(host)) return null;
  const ips = net.isIP(host) ? [host] : (await dns.lookup(host, { all: true }).catch(() => [])).map((x) => x.address);
  if (!ips.length || ips.some(privateIp)) return null;
  return u;
}

const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", mdash: "—", ndash: "–", hellip: "…", laquo: "«", raquo: "»", copy: "©" };
const decode = (s) => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
  if (e[0] === "#") { const n = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); try { return String.fromCodePoint(n); } catch { return ""; } }
  return ENT[e.toLowerCase()] ?? m;
});

export function htmlToText(html) {
  const title = decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").replace(/\s+/g, " ").trim());
  let h = html.replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|noscript|svg|template|iframe|canvas|form|select|button)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<(head)\b[\s\S]*?<\/head>/i, " ");
  const main = h.match(/<(article|main)\b[\s\S]*<\/\1>/i)?.[0];
  if (main && main.replace(/<[^>]+>/g, "").trim().length > 400) h = main;
  else h = h.replace(/<(nav|footer|aside)\b[\s\S]*?<\/\1>/gi, " ");
  h = h.replace(/<li\b[^>]*>/gi, "\n• ")
    .replace(/<(h[1-6])\b[^>]*>/gi, "\n\n")
    .replace(/<\/(h[1-6]|p|div|section|article|li|tr|blockquote|pre|ul|ol|table|header)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/t[dh]>/gi, "\t")
    .replace(/<[^>]+>/g, "");
  const text = decode(h).split("\n").map((l) => l.replace(/[ \t\u00a0]+/g, " ").trim()).join("\n").replace(/\n{3,}/g, "\n\n").trim();
  return { title, text };
}

async function handler(req, res) {
  const raw = String(req.query?.url ?? "").trim().slice(0, 2000);
  let u = await safeUrl(raw);
  if (!u) { res.status(400).json({ error: "bad-url" }); return; }
  let r;
  try {
    for (let hop = 0; ; hop++) {
      r = await fetch(u, { redirect: "manual", signal: AbortSignal.timeout(TIMEOUT), headers: { "User-Agent": "Mozilla/5.0 (compatible; NibrasPDF/1.0; +https://nibrascode.com/pdf/url-pdf)", Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.5" } });
      const loc = r.status >= 300 && r.status < 400 ? r.headers.get("location") : null;
      if (!loc) break;
      if (hop >= 4) { res.status(502).json({ error: "redirects" }); return; }
      u = await safeUrl(new URL(loc, u).href);
      if (!u) { res.status(400).json({ error: "bad-url" }); return; }
    }
  } catch { res.status(502).json({ error: "fetch" }); return; }
  if (!r.ok) { res.status(502).json({ error: "status", status: r.status }); return; }
  const type = r.headers.get("content-type") || "";
  if (!/html|text\/plain/i.test(type)) { res.status(415).json({ error: "type" }); return; }
  const reader = r.body.getReader();
  const chunks = []; let size = 0;
  for (;;) { const { done, value } = await reader.read(); if (done) break; size += value.length; if (size > MAX_BYTES) { reader.cancel().catch(() => {}); res.status(413).json({ error: "size" }); return; } chunks.push(value); }
  const buf = Buffer.concat(chunks);
  const cs = (type.match(/charset=([\w-]+)/i)?.[1] || buf.toString("latin1", 0, 2048).match(/<meta[^>]+charset=["']?([\w-]+)/i)?.[1] || "utf-8").toLowerCase();
  let body; try { body = new TextDecoder(cs).decode(buf); } catch { body = buf.toString("utf8"); }
  const out = /text\/plain/i.test(type) ? { title: "", text: body.trim() } : htmlToText(body);
  if (out.text.length < 20) { res.status(422).json({ error: "empty" }); return; }
  res.setHeader("Cache-Control", "public, s-maxage=600");
  res.status(200).json({ url: u.href, title: out.title.slice(0, 300), text: out.text.slice(0, 400000) });
}

export default watch5xx("url-text", handler);
