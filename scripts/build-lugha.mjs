// Şamilə lüğət məlumatı (İbn Faris) -> api/_lugha/maqayis.js və mujmal.js (brotli + base64, tafsir ilə eyni qayda).
// Mənbə fayllar repoda yoxdur: node scripts/build-lugha.mjs [mənbə qovluğu]  (standart: /workspace/sham/lugha/books)
// Məlumat: [kök, hissə, səhifə_başlanğıc, səhifə_son, mətn] massivi. Mətn dəyişdirilmir (sözbəsöz).
import fs from "node:fs";
import path from "node:path";
import { brotliCompressSync, constants } from "node:zlib";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = process.argv[2] || "/workspace/sham/lugha/books";
const OUT = path.join(ROOT, "api/_lugha");

const BOOKS = [
  { id: "21710", out: "maqayis.js", note: "Maqayis al-Lugha (ت عبد السلام هارون), shamela.ws/book/21710" },
  { id: "9252", out: "mujmal.js", note: "Mujmal al-Lugha (ت زهير عبد المحسن سلطان), shamela.ws/book/9252" },
];

// (Mənbədə 3 maddədə page_end < page_start səhvi var: səhifə_son = səhifə_başlanğıc qəbul olunur.)
const cleanRoot = (r) => String(r).replace(/[\[\]\s\d٠-٩]/g, "");

fs.mkdirSync(OUT, { recursive: true });
for (const b of BOOKS) {
  const list = JSON.parse(fs.readFileSync(path.join(SRC, b.id + ".entries.json"), "utf8"));
  const rows = list.map((e) => [cleanRoot(e.root), e.part == null ? "" : String(e.part), e.page_start, e.page_end >= e.page_start ? e.page_end : e.page_start, e.text]);
  const json = JSON.stringify(rows);
  const br = brotliCompressSync(Buffer.from(json, "utf8"), { params: { [constants.BROTLI_PARAM_QUALITY]: 11, [constants.BROTLI_PARAM_LGWIN]: 24 } });
  const js = `// Avtomatik: node scripts/build-lugha.mjs. ${b.note}. Sətirlər: [kök, cild, səhifə_a, səhifə_b, mətn] (brotli + base64 JSON).\nexport const COUNT = ${rows.length};\nexport default "${br.toString("base64")}";\n`;
  fs.writeFileSync(path.join(OUT, b.out), js);
  console.log(b.out, rows.length, "entries", (js.length / 1e6).toFixed(2) + " MB");
}
