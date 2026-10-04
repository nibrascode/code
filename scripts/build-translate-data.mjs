// RAW qovluğundan (fetch-hadeethenc.mjs çıxışı) src/data/*.js yaradır. Mətn DƏYİŞDİRİLMİR (HadeethEnc şərti: dəyişmə/əlavə/silmə yoxdur).
// İstifadə: node scripts/build-translate-data.mjs <RAW_DIR>  (api/_translate/data-ya yazır; xam məlumat: node scripts/fetch-translate-data.mjs <RAW_DIR>)
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
const RAW = path.resolve(process.argv[2] || "../translate-raw");
const OUT = process.argv[3] ? path.resolve(process.argv[3]) : path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "api", "_translate", "data");
fs.mkdirSync(OUT, { recursive: true });
const rd = (l) => JSON.parse(fs.readFileSync(path.join(RAW, `${l}.json`), "utf8"));
const pack = (obj) => zlib.brotliCompressSync(Buffer.from(JSON.stringify(obj), "utf8"), { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11, [zlib.constants.BROTLI_PARAM_LGWIN]: 24 } }).toString("base64");
const head = (what) => `// Avtomatik yaradılıb: node scripts/build-data.mjs. Əllə dəyişməyin.\n// Mənbə: HadeethEnc.com (IslamHouse). Mətn olduğu kimi saxlanılır (dəyişmə/əlavə/silmə yoxdur). ${what}\n`;

const ar = rd("ar");
const ids = Object.keys(ar).sort((a, b) => Number(a) - Number(b));
const idx = new Map(ids.map((id, i) => [id, i]));
const alts = {};
const stats = { ar: ids.length };
const langs = {};
for (const l of ["az", "tr", "en", "ru"]) {
  const d = rd(l);
  const rows = {};
  for (const id of Object.keys(d)) {
    if (!idx.has(id)) continue;
    const v = d[id];
    rows[idx.get(id)] = [v.hadeeth, v.attribution || "", v.grade || ""];
    if (v.ar.trim() !== ar[id].hadeeth.trim()) (alts[idx.get(id)] ||= []).push(v.ar);
  }
  langs[l] = rows;
  stats[l] = Object.keys(rows).length;
}
// ar.js: sətirlər [id, mətn, attribution, grade, ref, alternativ_ərəbcə_mətnlər]
const arRows = ids.map((id, i) => [Number(id), ar[id].hadeeth, ar[id].attribution || "", ar[id].grade || "", ar[id].ref || "", ...(alts[i] ? [alts[i]] : [])]);
fs.writeFileSync(path.join(OUT, "ar.js"), head("Sətirlər: [id, ərəbcə mətn, attribution, grade, ref, alt?]") + `export default "${pack(arRows)}";\n`);
for (const l of Object.keys(langs)) fs.writeFileSync(path.join(OUT, `${l}.js`), head(`{indeks: [mətn, attribution, grade]}, indeks = ar.js sətir nömrəsi (${l})`) + `export default "${pack(langs[l])}";\n`);

// Formul lüğəti: ərəbcə dua/salavat formulları üçün hər dildə korpusda ƏN ÇOX işlənən qarşılıq (mötərizə/tire içindən). Heç nə uydurulmur: say göstərilir.
const FORMULAE = [
  { key: "صلى الله عليه وسلم", test: /صلى الله عليه وسلم|صلَّى اللهُ عَلَيْهِ وَسَلَّمَ|صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ/, re: { az: /salavat|sall?[aə]llahu/i, tr: /sallallahu aleyhi ve sellem/i, en: /peace and blessings|peace be upon/i, ru: /мир ему и благословение|благословит его/i } },
  { key: "رضي الله عنه", test: /رَضِيَ اللَّهُ عَنْهُ|رَضيَ اللهُ عنهُ|رضي الله عنه\b/, re: { az: /^Allah ondan razı olsun$/i, tr: /^radıyallahu anh$/i, en: /^may Allah be pleased with him$/i, ru: /^да будет доволен им Аллах$/i } },
  { key: "رضي الله عنها", test: /رضي الله عنها|رَضيَ اللهُ عنها|رَضِيَ اللَّهُ عَنْهَا/, re: { az: /razı olsun/i, tr: /^radıyallahu anh[aâ]$/i, en: /^may Allah be pleased with her$/i, ru: /^да будет доволен ею Аллах$/i } },
  { key: "رضي الله عنهما", test: /رضي الله عنهما|رَضيَ اللهُ عنهما|رَضِيَ اللَّهُ عَنْهُمَا/, re: { az: /^Allah (onların )?(hər )?ikisindən (də )?razı olsun$/i, tr: /^radıyallahu anhum[aâ]$/i, en: /^may Allah be pleased with both of them$/i, ru: /^да будет доволен Аллах ими обоими$/i } },
  { key: "رحمه الله", test: /رحمه الله|رَحِمَهُ اللَّهُ/, re: { az: /rəhmət etsin/i, tr: /rahmet|rahimehullah/i, en: /^may Allah have mercy upon him$/i, ru: /^да смилуется над ним Аллах$/i } },
];
const arN = (s) => s.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640\u200c-\u200f]/g, "").replace(/[آأإٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه");
const lex = {};
for (const f of FORMULAE) {
  const hasIdx = ids.map((_, i) => i).filter((i) => arN(arRows[i][1]).includes(arN(f.key)));
  const entry = { n_docs: hasIdx.length, forms: {} };
  for (const l of Object.keys(langs)) {
    const cnt = new Map();
    for (const i of hasIdx) {
      const r = langs[l][i];
      if (!r) continue;
      for (const m of r[0].matchAll(/\(([^()]{4,80})\)|-([^-\n]{4,60})-/g)) {
        const seg = (m[1] || m[2]).trim();
        if (f.re[l].test(seg)) cnt.set(seg, (cnt.get(seg) || 0) + 1);
      }
    }
    const top = [...cnt.entries()].sort((a, b) => b[1] - a[1])[0];
    if (top && top[1] >= 5) entry.forms[l] = { text: top[0], count: top[1] };
  }
  if (Object.keys(entry.forms).length) lex[f.key] = entry;
}
fs.writeFileSync(path.join(OUT, "formulae.js"), head("Formul qarşılıqları korpusdan çıxarılıb (ən çox işlənən), say = neçə hədisdə görünür.") + `export default ${JSON.stringify(lex, null, 1)};\n`);
console.log(stats, JSON.stringify(lex, null, 1));
for (const f of fs.readdirSync(OUT)) console.log(f, fs.statSync(path.join(OUT, f)).size);
