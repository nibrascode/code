// İbn Teymiyyə kitabları (Şamilə) -> api/_itbooks/: səhifə mətni (brotli+base64 hissələr), BM25/ifadə indeksi, mövcud kitabların siyahısı (avail.js).
// İstifadə: node scripts/build-itbooks.mjs [dataDir]   (standart: /workspace/sham/ibntaymiyyah; stage<N>/<shamela-id>.json faylları, fetch.py ilə yüklənir)
// Yeni mərhələ: fetch.py <N> ilə kitabları yükləyin, sonra bunu yenidən işə salın — api/_itbooks/registry.js-dəki kitablardan faylı olanlar avtomatik «mövcud» olur.
// Mətn sözbəsöz saxlanır (hərəkələr daxil); təmizlənən: hər səhifənin sonundakı haşiyə («----» sonrası), (*), haşiyəyə istinad (١).
import fs from "node:fs";
import path from "node:path";
import { brotliCompressSync, constants } from "node:zlib";
import { fileURLToPath } from "node:url";
import { tokens } from "../api/_hadith/tok.js";
import { cleanPage } from "./fatawa-clean.mjs";
import { BOOKS } from "../api/_itbooks/registry.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = process.argv[2] || "/workspace/sham/ibntaymiyyah";
const OUT = path.join(ROOT, "api/_itbooks");
const SHARD = 300;
const br = (buf) => brotliCompressSync(buf, { params: { [constants.BROTLI_PARAM_QUALITY]: Number(process.env.BROTLI_Q || 11), [constants.BROTLI_PARAM_LGWIN]: 24, [constants.BROTLI_PARAM_SIZE_HINT]: buf.length } });
const asciiDigits = (s) => String(s).replace(/[٠-٩]/g, (c) => "٠١٢٣٤٥٦٧٨٩".indexOf(c));

let biblio = {};
try {
  biblio = JSON.parse(fs.readFileSync(path.join(DIR, "biblio.json"), "utf8"));
} catch {
  /* nəşr məlumatı yoxdursa kartdan alınır */
}
/** «المحقق/الناشر/الطبعة» sətirlərindən qısa nəşr sətri */
export function editionOf(card) {
  const get = (re) => {
    const m = re.exec(card || "");
    return m ? m[1].replace(/\[ت[^\]]*\]/g, "").replace(/\s+/g, " ").trim() : "";
  };
  const ed = [get(/(?:^|\n)(?:المحقق|حققه[^:\n]*|تحقيق)\s*:\s*([^\n]+)/), get(/(?:^|\n)(?:الناشر|طبع ونشر)\s*:\s*([^\n]+)/), get(/(?:^|\n)(?:الطبعة|عام النشر)\s*:\s*([^\n]+)/)].filter(Boolean);
  return ed.join("، ");
}

const books = [];
const docs = [];
for (const b of BOOKS) {
  const fn = path.join(DIR, `stage${b.stage}`, `${b.file || b.shamela}.json`);
  if (!fs.existsSync(fn)) continue;
  const d = JSON.parse(fs.readFileSync(fn, "utf8"));
  const card = biblio[String(b.shamela)] || d.card || "";
  const bi = books.length;
  const first = docs.length;
  let maxPage = 0;
  let skipped = 0;
  const seen = new Map();
  for (const p of d.pages) {
    if (b.maxId && p.id > b.maxId) continue;
    const { text } = cleanPage(p.text);
    if (!text) {
      skipped++;
      continue;
    }
    const pm = /^(\d+)/.exec(String(p.part || "").trim());
    // cild: rəqəm; adlı hissə (məs. «المقدمة» — tədqiqatçının girişi, ayrıca səhifələnir) -> 0; hissə yoxdursa 1
    const vol = pm ? Number(pm[1]) : String(p.part || "").trim() ? 0 : 1;
    const lab = Number.isFinite(Number(asciiDigits(p.page))) && String(p.page).trim() ? Number(asciiDigits(p.page)) : String(p.page);
    if (typeof lab === "number" && lab > maxPage && vol >= 1) maxPage = lab;
    const key = vol + ":" + lab;
    if (seen.has(key)) {
      // eyni çap səhifəsi bir neçə parçaya bölünüb (bölmə sərhədi): birləşdirilir
      seen.get(key).text += "\n" + text;
      continue;
    }
    const doc = { bi, vol, label: lab, title: String(p.title || "").replace(/\s+/g, " ").trim(), text };
    docs.push(doc);
    seen.set(key, doc);
  }
  const mainAt = docs.findIndex((x, i) => i >= first && x.vol >= 1);
  books.push({ slug: b.slug, stage: b.stage, first, main: mainAt >= 0 ? mainAt : first, count: docs.length - first, maxPage, ed: editionOf(card), src: d.source_url || "" });
  console.log(b.n, b.slug, "pages", docs.length - first, "skippedEmpty", skipped, "ed:", editionOf(card).slice(0, 80));
}
if (!docs.length) throw new Error("no data in " + DIR);

// ---- hissələr
fs.mkdirSync(path.join(OUT, "books"), { recursive: true });
for (const f of fs.readdirSync(path.join(OUT, "books"))) fs.unlinkSync(path.join(OUT, "books", f));
const nShards = Math.ceil(docs.length / SHARD);
let totalB64 = 0;
for (let s = 0; s < nShards; s++) {
  const part = docs.slice(s * SHARD, (s + 1) * SHARD).map((p) => p.text);
  const packed = br(Buffer.from(JSON.stringify(part), "utf8")).toString("base64");
  totalB64 += packed.length;
  fs.writeFileSync(path.join(OUT, "books", `b_${s}.js`), `// Avtomatik: node scripts/build-itbooks.mjs (hissə ${s}). [səhifə mətni] (brotli+base64 JSON)\nexport default "${packed}";\n`);
}
fs.writeFileSync(
  path.join(OUT, "loaders.js"),
  `// Avtomatik: node scripts/build-itbooks.mjs. Hər hissə yalnız lazım olanda dinamik yüklənir.\nexport const SHARD = ${SHARD};\nexport const LOADERS = [\n${Array.from({ length: nShards }, (_, s) => `  () => import("./books/b_${s}.js"),`).join("\n")}\n];\n`,
);

// ---- indeks
const toks = docs.map((d) => tokens(d.text));
const freq = new Map();
for (const d of toks) for (const t of d) freq.set(t, (freq.get(t) || 0) + 1);
const vocab = [...freq.keys()].sort((a, b) => freq.get(b) - freq.get(a) || (a < b ? -1 : 1));
const tid = new Map(vocab.map((t, i) => [t, i]));
const bytes = [];
const vi = (n) => {
  while (n >= 128) {
    bytes.push((n & 127) | 128);
    n = Math.floor(n / 128);
  }
  bytes.push(n);
};
for (const d of toks) {
  vi(d.length);
  for (const t of d) vi(tid.get(t));
}
const titles = [];
const titleId = new Map();
const pb = [];
const pv = [];
const pp = [];
const pt = [];
for (const d of docs) {
  if (!titleId.has(d.title)) {
    titleId.set(d.title, titles.length);
    titles.push(d.title);
  }
  pb.push(d.bi);
  pv.push(d.vol);
  pp.push(d.label);
  pt.push(titleId.get(d.title));
}
const head = Buffer.from(JSON.stringify({ N: docs.length, shard: SHARD, books, titles, pb, pv, pp, pt, vocab: vocab.join("\n") }), "utf8");
const hl = Buffer.alloc(4);
hl.writeUInt32LE(head.length);
const packed = br(Buffer.concat([hl, head, Buffer.from(bytes)])).toString("base64");
fs.writeFileSync(path.join(OUT, "index.js"), `// Avtomatik: node scripts/build-itbooks.mjs. Axtarış indeksi: lüğət + səhifə başına token-id ardıcıllığı + səhifə meta (brotli+base64)\nexport default "${packed}";\n`);

// ---- mövcud kitablar (kiçik, indeksi yükləmədən oxunur)
const avail = Object.fromEntries(books.map((b) => [b.slug, { pages: b.count, ed: b.ed }]));
fs.writeFileSync(path.join(OUT, "avail.js"), `// Avtomatik: node scripts/build-itbooks.mjs. Məlumatı olan kitablar (tövsiyə siyahısında «mövcud» düymə olur).\nexport const AVAIL = ${JSON.stringify(avail)};\n`);
console.log("docs", docs.length, "tokens", bytes.length, "vocab", vocab.length, "index b64", (packed.length / 1e6).toFixed(2), "MB; shards", nShards, "b64", (totalB64 / 1e6).toFixed(2), "MB");
