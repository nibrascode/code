// Şamilə nəhv/sərf kitabları (74 kitab) -> api/_nahw/: kitab başına brotli+base64 modul və ümumi axtarış indeksi.
// İstifadə: node scripts/build-nahw.mjs [kitablar qovluğu] [siyahı.json]
//   standart: /workspace/sham/c31/books  /workspace/sham/c31/c31_take_core6.json
// Mənbə fayllar repoda yoxdur; yalnız sıxılmış çıxış commit olunur. Mətn dəyişdirilmir (sözbəsöz).
import fs from "node:fs";
import path from "node:path";
import { brotliCompressSync, constants } from "node:zlib";
import { fileURLToPath } from "node:url";
import { tokens } from "../api/_nahw/tok.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = process.argv[2] || "/workspace/sham/c31/books";
const LIST = process.argv[3] || "/workspace/sham/c31/c31_take_core6.json";
const OUT = path.join(ROOT, "api/_nahw");
const DF_CAP = 0.3; // bu paydan çox səhifədə olan söz (في، من...) yalnız başlıqlarda indekslənir
const br = (buf) => brotliCompressSync(buf, { params: { [constants.BROTLI_PARAM_QUALITY]: 11, [constants.BROTLI_PARAM_LGWIN]: 24, [constants.BROTLI_PARAM_SIZE_HINT]: buf.length } });

const list = JSON.parse(fs.readFileSync(LIST, "utf8"));
fs.mkdirSync(path.join(OUT, "books"), { recursive: true });
for (const f of fs.readdirSync(path.join(OUT, "books"))) fs.unlinkSync(path.join(OUT, "books", f));

const body = new Map(); // token -> Map(gpage -> tf)
const titleSet = new Map(); // token -> Set(gpage)
const dl = [];
const books = [];
let g = 0;
let totalB64 = 0;
for (const b of list) {
  const d = JSON.parse(fs.readFileSync(path.join(SRC, b.id + ".json"), "utf8"));
  const titles = [];
  const tIdx = new Map();
  const pages = d.pages.map((p) => {
    const t = String(p.title || "");
    if (!tIdx.has(t)) {
      tIdx.set(t, titles.length);
      titles.push(t);
    }
    return [p.page, p.part == null ? "" : String(p.part), tIdx.get(t), p.text];
  });
  const json = JSON.stringify({ t: titles, p: pages });
  const packed = br(Buffer.from(json, "utf8")).toString("base64");
  fs.writeFileSync(path.join(OUT, "books", `b${b.id}.js`), `// Avtomatik: node scripts/build-nahw.mjs. ${b.title} — ${b.author} (shamela.ws/book/${b.id}). {t: başlıqlar, p: [[səhifə, cild, başlıq_indeksi, mətn]]} (brotli+base64 JSON)\nexport default "${packed}";\n`);
  totalB64 += packed.length;
  books.push({ id: b.id, title: b.title, author: b.author, death: b.death ?? null, start: g, n: pages.length });
  d.pages.forEach((p, i) => {
    const toks = tokens(p.text);
    dl.push(Math.min(toks.length, 65535));
    const tf = new Map();
    for (const t of toks) tf.set(t, (tf.get(t) || 0) + 1);
    for (const [t, c] of tf) {
      if (!body.has(t)) body.set(t, new Map());
      body.get(t).set(g, c);
    }
    for (const t of new Set(tokens(String(p.title || "")))) {
      if (!titleSet.has(t)) titleSet.set(t, new Set());
      titleSet.get(t).add(g);
    }
    g++;
  });
  process.stdout.write(`${b.id} ${pages.length}p ${(packed.length / 1e6).toFixed(2)}MB\n`);
}
const N = g;
console.log("pages", N, "books b64 total", (totalB64 / 1e6).toFixed(1), "MB");

// ---- indeks
const vi = (n, out) => {
  while (n >= 128) {
    out.push((n & 127) | 128);
    n = Math.floor(n / 128);
  }
  out.push(n);
};
const allTokens = new Set([...body.keys(), ...titleSet.keys()]);
const toks = [];
for (const t of allTokens) {
  const bm = body.get(t);
  const bdf = bm ? bm.size : 0;
  const ts = titleSet.get(t);
  if (bdf < 2 && !(ts && ts.size)) continue; // tək rast gələn söz (səhv yazılış) saxlanmır
  toks.push(t);
}
toks.sort();
const stream = [];
let pairs = 0;
for (const t of toks) {
  const bm = body.get(t) || new Map();
  const ts = titleSet.get(t) || new Set();
  const bdf = bm.size;
  const stop = bdf > N * DF_CAP;
  const pages = new Set(stop ? ts : [...bm.keys(), ...ts]);
  const sorted = [...pages].sort((a, b) => a - b);
  const rec = [];
  vi(bdf, rec);
  vi(sorted.length, rec);
  let prev = 0;
  for (const p of sorted) {
    vi(p - prev, rec);
    prev = p;
    const tf = stop ? 0 : Math.min(bm.get(p) || 0, 255);
    vi((tf << 1) | (ts.has(p) ? 1 : 0), rec);
  }
  pairs += sorted.length;
  vi(rec.length, stream);
  for (const x of rec) stream.push(x);
}
const header = Buffer.from(JSON.stringify({ N, books, tokens: toks.join("\n") }), "utf8");
const dlBuf = Buffer.alloc(N * 2);
dl.forEach((v, i) => dlBuf.writeUInt16LE(v, i * 2));
const lenBuf = Buffer.alloc(4);
lenBuf.writeUInt32LE(header.length);
const blob = Buffer.concat([lenBuf, header, dlBuf, Buffer.from(stream)]);
const packed = br(blob).toString("base64");
fs.writeFileSync(path.join(OUT, "index.js"), `// Avtomatik: node scripts/build-nahw.mjs. Axtarış indeksi: [u32 başlıq uzunluğu][JSON {N, books, tokens}][u16 sənəd uzunluqları][postinqlər] (brotli+base64)\nexport default "${packed}";\n`);
fs.writeFileSync(
  path.join(OUT, "loaders.js"),
  `// Avtomatik: node scripts/build-nahw.mjs. Hər kitab yalnız lazım olanda dinamik yüklənir.\nexport const LOADERS = {\n${books.map((b) => `  "${b.id}": () => import("./books/b${b.id}.js"),`).join("\n")}\n};\n`,
);
console.log("tokens", toks.length, "pairs", pairs, "raw", (blob.length / 1e6).toFixed(1), "MB; index b64", (packed.length / 1e6).toFixed(2), "MB");
