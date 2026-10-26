// Rewrites `?lang=xx` URLs in public/sitemap.xml to path locales (`/xx/...`)
// and drops duplicate <url> entries. Usage: node scripts/fix-sitemap-locales.mjs
import { readFileSync, writeFileSync } from "node:fs";

const file = new URL("../public/sitemap.xml", import.meta.url);
const xml = readFileSync(file, "utf8");
const toPath = (url) =>
  url.replace(/^(https:\/\/nibrascode\.com)(\/[^?"<]*)?\?lang=(en|tr|ar|ru)$/, (_m, site, path = "", lang) => {
    const p = path === "/" ? "" : path;
    return `${site}/${lang}${p}`;
  });
const fixed = xml.replace(/https:\/\/nibrascode\.com[^"<\s]*\?lang=(?:en|tr|ar|ru)(?=["<])/g, toPath);
const head = fixed.slice(0, fixed.indexOf("<url>"));
const tail = fixed.slice(fixed.lastIndexOf("</url>") + "</url>".length);
const blocks = fixed.match(/<url>[\s\S]*?<\/url>/g) ?? [];
const seen = new Set();
const kept = blocks.filter((b) => {
  const loc = b.match(/<loc>([^<]+)<\/loc>/)?.[1];
  if (!loc || seen.has(loc)) return false;
  seen.add(loc);
  return true;
});
writeFileSync(file, head + kept.join("\n  ") + tail);
console.log(`urls: ${blocks.length} -> ${kept.length}`);
