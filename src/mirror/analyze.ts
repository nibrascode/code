/** Site Mirror: sitemap parsing and URL-structure analysis. Pure functions. */
export type PageType = "home" | "article" | "product" | "category" | "docs" | "company" | "account" | "media" | "other";
export const TYPE_COLORS: Record<PageType, string> = { home: "#ff3d7f", article: "#a855f7", product: "#facc15", category: "#fb923c", docs: "#38bdf8", company: "#22c55e", account: "#94a3b8", media: "#2dd4bf", other: "#6b7bff" };
const PATTERNS: [PageType, RegExp][] = [
  ["article", /^(blog|news|article|articles|post|posts|xeber|xeberler|haber|haberler|novosti|stati|magazine|story|stories)$/i],
  ["product", /^(product|products|shop|store|item|items|p|mehsul|mehsullar|urun|urunler|tovar|catalog|katalog)$/i],
  ["category", /^(category|categories|cat|tag|tags|topic|topics|kateqoriya|kategori|kategoriya|collection|collections|c)$/i],
  ["docs", /^(docs|doc|help|support|faq|guide|guides|kb|learn|tutorial|tutorials|api|wiki)$/i],
  ["company", /^(about|contact|team|careers|jobs|privacy|terms|legal|haqqimizda|elaqe|hakkimizda|iletisim|o-nas|kontakty|press|company)$/i],
  ["account", /^(login|signin|sign-in|signup|register|account|cart|checkout|profile|user|users|my)$/i],
  ["media", /^(video|videos|gallery|photos|images|media|podcast|podcasts|events|event)$/i],
];
export function typeOf(segs: string[]): PageType {
  if (!segs.length) return "home";
  for (const s of segs) for (const [t, re] of PATTERNS) if (re.test(s)) return t;
  return "other";
}

export type ParseResult = { urls: string[]; children: string[]; kind: "urlset" | "index" | "text" | "empty"; error?: string };
/** Parses a sitemap (urlset or sitemapindex) or a plain list of URLs. */
export function parseSitemap(text: string): ParseResult {
  const src = text.trim();
  if (!src) return { urls: [], children: [], kind: "empty" };
  if (src.startsWith("<")) {
    const doc = new DOMParser().parseFromString(src, "application/xml");
    if (doc.getElementsByTagName("parsererror").length) {
      // Fall back: pull <loc> values with a regex (broken XML is common).
      const locs = [...src.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => decodeXml(m[1]));
      if (!locs.length) return { urls: [], children: [], kind: "empty", error: "xml" };
      return /<sitemapindex/i.test(src) ? { urls: [], children: locs, kind: "index" } : { urls: locs, children: [], kind: "urlset" };
    }
    const all = (tag: string) => [...doc.getElementsByTagNameNS("*", tag)];
    if (all("sitemapindex").length) return { urls: [], children: all("sitemap").map((s) => s.getElementsByTagNameNS("*", "loc")[0]?.textContent?.trim() ?? "").filter(Boolean), kind: "index" };
    return { urls: all("url").map((u) => u.getElementsByTagNameNS("*", "loc")[0]?.textContent?.trim() ?? "").filter(Boolean), children: [], kind: "urlset" };
  }
  const urls = src.split(/[\s,]+/).filter((l) => /^https?:\/\//i.test(l));
  return { urls, children: [], kind: urls.length ? "text" : "empty" };
}
const decodeXml = (s: string) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'");

export type Node = { id: string; name: string; path: string; host: string; url?: string; type: PageType; depth: number; children: Node[]; missing?: boolean; count: number };
export type Issues = {
  deep: string[]; long: string[]; gaps: string[]; hosts: string[]; protocols: string[]; invalid: string[];
  dups: { key: string; urls: string[]; why: string[] }[];
};

const segsOf = (u: URL) => u.pathname.split("/").filter(Boolean).map((s) => { try { return decodeURIComponent(s); } catch { return s; } });
/** Canonical key used to find duplicates. */
export function dupKey(u: URL) {
  const p = u.pathname.replace(/\/+$/, "").toLowerCase() || "/";
  return u.hostname.toLowerCase().replace(/^www\./, "") + p;
}

export function analyze(raw: string[]) {
  const invalid: string[] = [];
  const seen = new Set<string>();
  const list: URL[] = [];
  for (const r of raw) {
    if (seen.has(r)) continue; seen.add(r);
    try { const u = new URL(r); if (!/^https?:$/.test(u.protocol)) throw 0; list.push(u); } catch { invalid.push(r); }
  }
  const exactDup = raw.length - seen.size;
  const groups = new Map<string, URL[]>();
  for (const u of list) { const k = dupKey(u); groups.set(k, [...(groups.get(k) ?? []), u]); }
  const dups: Issues["dups"] = [];
  for (const [key, us] of groups) {
    if (us.length < 2) continue;
    const why = new Set<string>();
    const a = us.map((u) => u.href);
    if (new Set(us.map((u) => u.protocol)).size > 1) why.add("protocol");
    if (new Set(us.map((u) => u.hostname.toLowerCase().startsWith("www."))).size > 1) why.add("www");
    if (new Set(us.map((u) => /.\/$/.test(u.pathname))).size > 1) why.add("slash");
    if (new Set(us.map((u) => u.pathname.replace(/\/+$/, ""))).size > new Set(us.map((u) => u.pathname.replace(/\/+$/, "").toLowerCase())).size) why.add("case");
    if (us.some((u) => u.search) ) why.add("query");
    if (us.some((u) => u.hash)) why.add("hash");
    dups.push({ key, urls: a, why: [...why] });
  }
  const hosts = [...new Set(list.map((u) => u.hostname.toLowerCase()))];
  const protocols = [...new Set(list.map((u) => u.protocol.replace(":", "")))];
  const deep = list.filter((u) => segsOf(u).length > 3).map((u) => u.href);
  const long = list.filter((u) => u.href.length > 115).map((u) => u.href);

  // Tree: one root per host (www folded into the bare host).
  const roots = new Map<string, Node>();
  const index = new Map<string, Node>();
  const present = new Set<string>();
  for (const u of list) {
    const host = u.hostname.toLowerCase().replace(/^www\./, "");
    let root = roots.get(host);
    if (!root) { root = { id: host + "/", name: host, path: "/", host, type: "home", depth: 0, children: [], missing: true, count: 0 }; roots.set(host, root); index.set(root.id, root); }
    const segs = segsOf(u);
    let cur = root;
    let path = "";
    for (let i = 0; i < segs.length; i++) {
      path += "/" + segs[i].toLowerCase();
      const id = host + path;
      let n = index.get(id);
      if (!n) { n = { id, name: segs[i], path, host, type: typeOf(segs.slice(0, i + 1)), depth: i + 1, children: [], missing: true, count: 0 }; cur.children.push(n); index.set(id, n); }
      cur = n;
    }
    cur.missing = false; cur.url = cur.url ?? u.href; present.add(cur.id);
  }
  const gaps: string[] = [];
  const walk = (n: Node): number => { n.children.sort((a, b) => a.name.localeCompare(b.name)); n.count = n.children.reduce((s, c) => s + walk(c), 0) + (n.missing ? 0 : 1); if (n.missing && n.depth > 0) gaps.push(`${n.host}${n.path}`); return n.count; };
  for (const r of roots.values()) { walk(r); if (r.missing) gaps.unshift(r.host + "/"); }
  const issues: Issues = { deep, long, gaps, hosts, protocols, invalid, dups };
  return { roots: [...roots.values()], index, issues, total: list.length, exactDup };
}

/** Extracts same-site links from pasted HTML. */
export function linksFromHtml(html: string, base: string) {
  const out: string[] = [];
  let b: URL; try { b = new URL(base); } catch { return out; }
  const doc = new DOMParser().parseFromString(html, "text/html");
  for (const a of doc.querySelectorAll("a[href]")) {
    try { const u = new URL(a.getAttribute("href")!, b); if (/^https?:$/.test(u.protocol)) out.push(u.href); } catch { /* skip */ }
  }
  return [...new Set(out)];
}

export const SAMPLE = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://example.com/</loc></url>
<url><loc>https://example.com/about</loc></url>
<url><loc>https://example.com/contact</loc></url>
<url><loc>https://example.com/blog</loc></url>
<url><loc>https://example.com/blog/first-post</loc></url>
<url><loc>https://example.com/blog/second-post</loc></url>
<url><loc>https://example.com/blog/2026/10/25/a-very-deep-article-about-site-structure</loc></url>
<url><loc>https://example.com/products</loc></url>
<url><loc>https://example.com/products/phone</loc></url>
<url><loc>https://example.com/products/phone/</loc></url>
<url><loc>https://example.com/products/laptop</loc></url>
<url><loc>https://example.com/products/laptop?ref=footer</loc></url>
<url><loc>http://www.example.com/Products/Tablet</loc></url>
<url><loc>https://example.com/products/tablet</loc></url>
<url><loc>https://example.com/category/phones</loc></url>
<url><loc>https://example.com/docs/getting-started</loc></url>
<url><loc>https://example.com/docs/api/v2/endpoints/users/list-all-users-with-pagination-sorting-and-advanced-filters-complete-example</loc></url>
<url><loc>https://shop.example.com/cart</loc></url>
</urlset>`;
