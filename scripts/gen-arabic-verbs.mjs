// Builds src/data/arabic-verbs.json from the Nibras Arabic app data (verbs.js + bab-meanings.js).
// Usage: node scripts/gen-arabic-verbs.mjs [/path/to/nibras-arabic/www]
import fs from "node:fs";
const dir = process.argv[2] || "/workspace/nibras-arabic/www";
const verbs = new Function(fs.readFileSync(`${dir}/verbs.js`, "utf8") + ";return verbsData")();
const AZ = { "ə": "e", "ı": "i", "ö": "o", "ü": "u", "ş": "s", "ç": "c", "ğ": "g", "İ": "i" };
const TR = { "ا": "a", "أ": "a", "إ": "i", "آ": "a", "ء": "", "ؤ": "", "ئ": "", "ب": "b", "ت": "t", "ث": "s", "ج": "c", "ح": "h", "خ": "x", "د": "d", "ذ": "z", "ر": "r", "ز": "z", "س": "s", "ش": "s", "ص": "s", "ض": "d", "ط": "t", "ظ": "z", "ع": "", "غ": "q", "ف": "f", "ق": "q", "ك": "k", "ل": "l", "م": "m", "ن": "n", "ه": "h", "و": "v", "ي": "y", "ى": "a", "ة": "e" };
const slugAz = (s) => s.toLowerCase().replace(/[əıöüşçğİ]/g, (c) => AZ[c]).replace(/\(.*?\)/g, "").split(/[\/,;]/)[0].replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const root = (ar) => ar.replace(/[\u064B-\u0652\u0670]/g, "").split("").map((c) => TR[c] ?? "").join("");
const used = new Set();
const out = verbs.map((v) => {
  let slug = `${slugAz(v.meaning) || "feil"}-${root(v.arabic) || v.id}`;
  if (used.has(slug)) slug = `${slug}-${v.id}`;
  used.add(slug);
  const f = (k) => { const x = v.forms?.[k]; return x ? [x.arabic, x.translation, x.examples?.[0]?.arabic ?? "", x.examples?.[0]?.translation ?? ""] : null; };
  return { id: v.id, s: slug, a: v.arabic, m: v.meaning, p: f("past"), r: f("present"), i: f("imperative") };
});
fs.writeFileSync("src/data/arabic-verbs.json", JSON.stringify(out));
console.log(out.length, "verbs", fs.statSync("src/data/arabic-verbs.json").size, "bytes");

// Sitemap: replace the verb block in public/sitemap.xml.
const sm = "public/sitemap.xml";
const day = new Date().toISOString().slice(0, 10);
const u = (p) => `  <url>\n    <loc>https://nibrascode.com${p}</loc>\n    <lastmod>${day}</lastmod>\n    <xhtml:link rel="alternate" hreflang="az" href="https://nibrascode.com${p}"/>\n  </url>`;
let xml = fs.readFileSync(sm, "utf8").replace(/\n?<!-- arabic-verbs -->[\s\S]*?<!-- \/arabic-verbs -->/, "");
const block = ["<!-- arabic-verbs -->", u("/ereb-dili/feil"), ...out.map((v) => u(`/ereb-dili/feil/${v.s}`)), "<!-- /arabic-verbs -->"].join("\n");
xml = xml.replace("</urlset>", `${block}\n</urlset>`);
fs.writeFileSync(sm, xml);
console.log("sitemap +", out.length + 1);
