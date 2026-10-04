// Kütübü-sittə (6 kitab) -> api/_hadith/: kitab başına brotli+base64 hissələr (300 hədis) və ümumi axtarış indeksi.
// İstifadə: node scripts/build-hadith.mjs [təmizlənmiş JSON qovluğu]    standart: /workspace/sham/hadith/final
// Mənbə: Şamilə (shamela.ws). Hədis sətri: [kitab, bab, nömrə_mətn, nömrə_int, hökm, mətn]. Mətn sözbəsöz saxlanır (yalnız redaktor işarələri təmizlənib).
import fs from "node:fs";
import path from "node:path";
import { brotliCompressSync, constants } from "node:zlib";
import { fileURLToPath } from "node:url";
import { tokens } from "../api/_hadith/tok.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = process.argv[2] || "/workspace/sham/hadith/final";
const OUT = path.join(ROOT, "api/_hadith");
const SHARD = 300;
// sıra: Buxari, Müslim, sonra Sünənlər
const BOOKS = [
  { id: "735", slug: "bukhari" },
  { id: "1727", slug: "muslim" },
  { id: "117359", slug: "abudawud" },
  { id: "1363", slug: "tirmidhi" },
  { id: "1339", slug: "nasai" },
  { id: "1194", slug: "ibnmajah" },
];
const br = (buf) => brotliCompressSync(buf, { params: { [constants.BROTLI_PARAM_QUALITY]: 11, [constants.BROTLI_PARAM_LGWIN]: 24, [constants.BROTLI_PARAM_SIZE_HINT]: buf.length } });
fs.mkdirSync(path.join(OUT, "books"), { recursive: true });
for (const f of fs.readdirSync(path.join(OUT, "books"))) fs.unlinkSync(path.join(OUT, "books", f));

const docs = []; // token siyahıları
const books = [];
const loaders = [];
let g = 0;
let totalB64 = 0;
for (const b of BOOKS) {
  const rows = JSON.parse(fs.readFileSync(path.join(SRC, b.id + ".json"), "utf8"));
  const shards = Math.ceil(rows.length / SHARD);
  for (let s = 0; s < shards; s++) {
    const part = rows.slice(s * SHARD, (s + 1) * SHARD);
    const packed = br(Buffer.from(JSON.stringify(part), "utf8")).toString("base64");
    totalB64 += packed.length;
    fs.writeFileSync(path.join(OUT, "books", `h${b.id}_${s}.js`), `// Avtomatik: node scripts/build-hadith.mjs (${b.slug}, hissə ${s}). [[kitab, bab, nömrə, nömrə_int, hökm, mətn]] (brotli+base64 JSON)\nexport default "${packed}";\n`);
  }
  loaders.push(`  "${b.id}": [\n${Array.from({ length: shards }, (_, s) => `    () => import("./books/h${b.id}_${s}.js"),`).join("\n")}\n  ],`);
  books.push({ id: b.id, slug: b.slug, start: g, n: rows.length, shards });
  for (const r of rows) docs.push(tokens(r[5]));
  g += rows.length;
  console.log(b.id, rows.length, "hədis,", shards, "hissə");
}
fs.writeFileSync(path.join(OUT, "loaders.js"), `// Avtomatik: node scripts/build-hadith.mjs. Hər hissə yalnız lazım olanda dinamik yüklənir.\nexport const SHARD = ${SHARD};\nexport const LOADERS = {\n${loaders.join("\n")}\n};\n`);

// ---- indeks: tezliyə görə sıralanmış lüğət + hər hədisin token-id ardıcıllığı (varint)
const freq = new Map();
for (const d of docs) for (const t of d) freq.set(t, (freq.get(t) || 0) + 1);
const vocab = [...freq.keys()].sort((a, b) => freq.get(b) - freq.get(a) || (a < b ? -1 : 1));
const id = new Map(vocab.map((t, i) => [t, i]));
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
  for (const t of d) vi(id.get(t));
}
const head = Buffer.from(JSON.stringify({ N: docs.length, books, vocab: vocab.join("\n") }), "utf8");
const hl = Buffer.alloc(4);
hl.writeUInt32LE(head.length);
const blob = Buffer.concat([hl, head, Buffer.from(bytes)]);
const packed = br(blob).toString("base64");
fs.writeFileSync(path.join(OUT, "index.js"), `// Avtomatik: node scripts/build-hadith.mjs. Axtarış indeksi: lüğət + hədis başına token-id ardıcıllığı (brotli+base64)\nexport default "${packed}";\n`);
console.log("docs", docs.length, "tokens", bytes.length, "vocab", vocab.length, "index b64", (packed.length / 1e6).toFixed(2), "MB; shards b64", (totalB64 / 1e6).toFixed(2), "MB");
