// «Məcmuu əl-Fətava» (İbn Teymiyyə, Şamilə 7289) -> api/_fatawa/: səhifə başına mətn (brotli+base64 hissələr) və BM25/ifadə axtarış indeksi.
// İstifadə: node scripts/build-fatawa.mjs [pages.jsonl] [meta.json]    standart: /workspace/sham/fatawa/books/7289.pages.jsonl, meta/7289.json
// Mətn sözbəsöz saxlanır (hərəkələr daxil). Təmizlənən: hər səhifənin sonundakı haşiyə (sətirdə «----» ayırıcısından sonrası: redaktor/mühəqqiq qeydləri),
// onlara aid mətndaxili işarələr «(*)», «(١)», və boş sətir/artıq boşluq. Başlıqdakı «(أ)» kimi səhifə hərfi ayrıca saxlanır.
import fs from "node:fs";
import path from "node:path";
import { brotliCompressSync, constants } from "node:zlib";
import { fileURLToPath } from "node:url";
import { tokens } from "../api/_hadith/tok.js";
import { cleanPage } from "./fatawa-clean.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = process.argv[2] || "/workspace/sham/fatawa/books/7289.pages.jsonl";
const META = process.argv[3] || "/workspace/sham/fatawa/meta/7289.json";
const OUT = path.join(ROOT, "api/_fatawa");
const SHARD = 400;
const br = (buf) => brotliCompressSync(buf, { params: { [constants.BROTLI_PARAM_QUALITY]: Number(process.env.BROTLI_Q || 11), [constants.BROTLI_PARAM_LGWIN]: 24, [constants.BROTLI_PARAM_SIZE_HINT]: buf.length } });
const asciiDigits = (s) => String(s).replace(/[٠-٩]/g, (c) => "٠١٢٣٤٥٦٧٨٩".indexOf(c));

const rows = new Map();
for (const l of fs.readFileSync(SRC, "utf8").split("\n")) {
  if (!l.trim()) continue;
  const r = JSON.parse(l);
  rows.set(r.id, r);
}
const meta = JSON.parse(fs.readFileSync(META, "utf8"));
const volTitles = new Map();
for (const m of String(meta.betaka || "").matchAll(/الجزء\s+([٠-٩0-9]+):\s*([^\n]+)/g)) volTitles.set(Number(asciiDigits(m[1])), m[2].trim());

const ids = [...rows.keys()].sort((a, b) => a - b);
const pages = []; // {vol, label, ap, title, text}
let skippedIntro = 0;
let emptyPages = 0;
for (const id of ids) {
  const r = rows.get(id);
  const pm = /^(\d+)(?:\s+(\S+))?$/.exec(String(r.part).trim());
  if (!pm) {
    skippedIntro++; // «المقدمة»: كتب الفهرس/بطاقة الكتاب، فتوى ليست
    continue;
  }
  const vol = Number(pm[1]);
  let title = String(r.title || "").replace(/\s+/g, " ").trim();
  let label = Number(r.page);
  let ap = false;
  if (pm[2]) {
    // «3 أ»: 3-cü cildə əlavə olunmuş hərfli səhifələr; başlığın sonunda səhifə hərfi «(ب)» var
    const lm = /\s*\(([^)\s]{1,3})\)\s*$/.exec(title);
    ap = true;
    label = lm ? lm[1] : String(r.page);
    if (lm) title = title.slice(0, lm.index).trim();
  }
  const { text } = cleanPage(r.text);
  if (!text) {
    emptyPages++;
    continue;
  }
  pages.push({ id, vol, label, ap, title, text });
}

// ---- hissələr
fs.mkdirSync(path.join(OUT, "books"), { recursive: true });
for (const f of fs.readdirSync(path.join(OUT, "books"))) fs.unlinkSync(path.join(OUT, "books", f));
const nShards = Math.ceil(pages.length / SHARD);
let totalB64 = 0;
for (let s = 0; s < nShards; s++) {
  const part = pages.slice(s * SHARD, (s + 1) * SHARD).map((p) => p.text);
  const packed = br(Buffer.from(JSON.stringify(part), "utf8")).toString("base64");
  totalB64 += packed.length;
  fs.writeFileSync(path.join(OUT, "books", `f_${s}.js`), `// Avtomatik: node scripts/build-fatawa.mjs (hissə ${s}). [səhifə mətni] (brotli+base64 JSON)\nexport default "${packed}";\n`);
}
fs.writeFileSync(
  path.join(OUT, "loaders.js"),
  `// Avtomatik: node scripts/build-fatawa.mjs. Hər hissə yalnız lazım olanda dinamik yüklənir.\nexport const SHARD = ${SHARD};\nexport const LOADERS = [\n${Array.from({ length: nShards }, (_, s) => `  () => import("./books/f_${s}.js"),`).join("\n")}\n];\n`,
);

// ---- indeks: lüğət + səhifə başına token-id ardıcıllığı (varint) + səhifə meta
const docs = pages.map((p) => tokens(p.text));
const freq = new Map();
for (const d of docs) for (const t of d) freq.set(t, (freq.get(t) || 0) + 1);
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
for (const d of docs) {
  vi(d.length);
  for (const t of d) vi(tid.get(t));
}
const titles = [];
const titleId = new Map();
const vols = new Map();
const pv = [];
const pp = [];
const pt = [];
const pa = [];
pages.forEach((p, i) => {
  if (!titleId.has(p.title)) {
    titleId.set(p.title, titles.length);
    titles.push(p.title);
  }
  pv.push(p.vol);
  pp.push(p.label);
  pt.push(titleId.get(p.title));
  pa.push(p.ap ? 1 : 0);
  if (!vols.has(p.vol)) vols.set(p.vol, { n: p.vol, title: volTitles.get(p.vol) || "", first: i, count: 0, maxPage: 0 });
  const v = vols.get(p.vol);
  v.count++;
  if (!p.ap && p.label > v.maxPage) v.maxPage = p.label;
});
const head = Buffer.from(JSON.stringify({ N: docs.length, shard: SHARD, vols: [...vols.values()], titles, pv, pp, pt, pa, vocab: vocab.join("\n") }), "utf8");
const hl = Buffer.alloc(4);
hl.writeUInt32LE(head.length);
const packed = br(Buffer.concat([hl, head, Buffer.from(bytes)])).toString("base64");
fs.writeFileSync(path.join(OUT, "index.js"), `// Avtomatik: node scripts/build-fatawa.mjs. Axtarış indeksi: lüğət + səhifə başına token-id ardıcıllığı + səhifə meta (brotli+base64)\nexport default "${packed}";\n`);

// ---- yoxlama hesabatı
const lastId = Number(meta.last);
const missingIds = [];
for (let i = 3; i <= lastId; i++) if (!rows.has(i)) missingIds.push(i);
const gaps = [];
for (const v of vols.values()) {
  const have = new Set(pages.filter((p) => p.vol === v.n && !p.ap).map((p) => p.label));
  const miss = [];
  for (let k = 1; k <= v.maxPage; k++) if (!have.has(k)) miss.push(k);
  if (miss.length) gaps.push({ vol: v.n, missing: miss.length, sample: miss.slice(0, 8) });
}
console.log(JSON.stringify({ rows: rows.size, lastId, indexed: pages.length, skippedIntro, emptyPages, missingIds: missingIds.length, missingIdsSample: missingIds.slice(0, 20), volumes: vols.size, vols: [...vols.values()].map((v) => `${v.n}:${v.count}/${v.maxPage}`).join(" "), gaps }, null, 0));
console.log("tokens", bytes.length, "vocab", vocab.length, "index b64", (packed.length / 1e6).toFixed(2), "MB; shards", nShards, "b64", (totalB64 / 1e6).toFixed(2), "MB");
