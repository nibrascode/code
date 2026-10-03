// Təfsir məlumatı: xam yükləmə (scripts/download-tafsir.sh -> /workspace/tafsir_raw) -> api/_tafsir/{muyassar,saadi,ibnkathir}/<surə>.js + loaders.js
// Mətn olduğu kimi saxlanılır (yalnız HTML -> sadə mətn, Sədi üçün); fayllar brotli+base64 ilə sıxılır (~9 MB, açılmış ~98 MB). İşlətmək: node scripts/build-tafsir.mjs [xam-qovluq]
import fs from "node:fs";
import zlib from "node:zlib";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { AYAH_COUNT as COUNTS } from "../api/_ayah.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RAW = process.argv[2] || "/workspace/tafsir_raw";
const OUT = path.join(ROOT, "api/_tafsir");

const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
export function decodeEntities(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === "#") return String.fromCodePoint(e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENT[e.toLowerCase()] ?? m;
  });
}
// QuranEnc Sədi səhifəsi: <article class="saadi-block"> bloklar. Etiketli blok = ayə/ayə aralığı; etiketsiz = giriş/ara/son söz.
export function parseSaadi(html, nAyas) {
  const arts = [...html.matchAll(/<article\s+class="saadi-block">([\s\S]*?)<\/article>/g)].map((m) => m[1]);
  const intro = [];
  const blocks = []; // [from,to,text]
  let pre = ""; // «ثم قال تعالى:» kimi növbəti ayəyə aid giriş
  for (const a of arts) {
    const t = a.match(/<div class="saadi-text[^"]*">([\s\S]*?)<\/div>/);
    if (!t) continue;
    let text = decodeEntities(t[1].replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "")).replace(/[ \t\r\f\v]+/g, " ").replace(/ *\n */g, "\n").trim();
    if (!text) continue;
    const lab = a.match(/saadi-aya-label">\s*([\s\S]*?)\s*<\/span>/);
    if (lab) {
      const nums = lab[1].match(/\d+/g) || [];
      const from = Number(nums[0]);
      const to = Number(nums[nums.length - 1]);
      if (!from || to < from || to > nAyas) throw new Error("etiket səhvdir: " + lab[1]);
      blocks.push([from, to, pre ? pre + "\n" + text : text]);
      pre = "";
    } else if (/[:：]$/.test(text)) {
      pre = pre ? pre + "\n" + text : text;
    } else if (blocks.length) {
      blocks[blocks.length - 1][2] += "\n" + text;
    } else intro.push(text);
  }
  if (pre) {
    if (blocks.length) blocks[blocks.length - 1][2] += "\n" + pre;
    else intro.push(pre);
  }
  return { intro: intro.join("\n"), blocks };
}
// Hər surə faylı: brotli ilə sıxılmış JSON (base64). api/_tafsir/_unpack.js açır. Mətn bit-bit eynidir (JSON gediş-gəliş testi build-də yoxlanır).
const pack = (v) => {
  const json = JSON.stringify(v);
  const buf = zlib.brotliCompressSync(Buffer.from(json, "utf8"), {
    params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11, [zlib.constants.BROTLI_PARAM_LGWIN]: 24, [zlib.constants.BROTLI_PARAM_SIZE_HINT]: json.length },
  });
  if (JSON.stringify(JSON.parse(zlib.brotliDecompressSync(buf).toString("utf8"))) !== json) throw new Error("sıxma gediş-gəliş xətası");
  return buf.toString("base64");
};
function write(dir, n, banner, data) {
  fs.mkdirSync(path.join(OUT, dir), { recursive: true });
  fs.writeFileSync(path.join(OUT, dir, n + ".js"), `// ${banner}\nimport { unpack } from "../_unpack.js";\nexport default unpack("${pack(data)}");\n`);
}

export function build() {
  const stats = {};
  for (const [book, ext] of [["muyassar", "json"], ["saadi", "html"], ["ibnkathir", "json"]]) stats[book] = { files: 0, bytes: 0, empty: 0 };
  for (let n = 1; n <= 114; n++) {
    const nA = COUNTS[n - 1];
    // 1) Müyəssər (QuranEnc API): ayə üzrə massiv
    {
      const d = JSON.parse(fs.readFileSync(path.join(RAW, "muyassar", n + ".json"), "utf8")).result;
      if (d.length !== nA) throw new Error(`muyassar ${n}: ${d.length} != ${nA}`);
      const arr = d.map((r, i) => {
        if (Number(r.aya) !== i + 1 || Number(r.sura) !== n) throw new Error("muyassar sıra " + n + ":" + r.aya);
        return r.translation;
      });
      write("muyassar", n, "Tafsir al-Muyassar — QuranEnc.com (arabic_moyassar). Mətn dəyişdirilməyib. Avtomatik: node scripts/build-tafsir.mjs", arr);
    }
    // 2) Sədi (QuranEnc səhifəsi): {i: giriş, b: [[from,to,text],...]}
    {
      const { intro, blocks } = parseSaadi(fs.readFileSync(path.join(RAW, "saadi", n + ".html"), "utf8"), nA);
      if (!blocks.length) throw new Error("saadi boşdur: " + n);
      write("saadi", n, "Tafsir as-Sa'di (Taysir al-Karim al-Rahman) — QuranEnc.com (arabic_saadi). Mətn dəyişdirilməyib. Avtomatik: node scripts/build-tafsir.mjs", { i: intro, b: blocks });
    }
    // 3) İbn Kəsir (spa5k/tafsir_api, ar-tafsir-ibn-kathir): ayə üzrə massiv
    {
      const d = JSON.parse(fs.readFileSync(path.join(RAW, "ibnkathir", n + ".json"), "utf8"));
      const arr = new Array(nA).fill("");
      for (const r of d) {
        const a = Number(r.ayah);
        if (Number(r.surah) !== n || a < 1 || a > nA) throw new Error("ibnkathir sıra " + n + ":" + r.ayah);
        arr[a - 1] = r.text;
      }
      write("ibnkathir", n, "Tafsir Ibn Kathir (Arabic) — spa5k/tafsir_api (MIT), data: Quran.com / QUL. Mətn dəyişdirilməyib. Avtomatik: node scripts/build-tafsir.mjs", arr);
    }
  }
  // loaders.js: açıq statik import xəritəsi (Vercel/nft izləyir), yalnız tələb olunan surə yüklənir
  const lines = ["// Avtomatik: node scripts/build-tafsir.mjs. Hər kitab üçün 114 surə faylı; yalnız lazım olan surə dinamik yüklənir.", "export const LOADERS = {"];
  for (const book of ["muyassar", "saadi", "ibnkathir"]) {
    lines.push(`  ${book}: [`);
    for (let n = 1; n <= 114; n++) lines.push(`    () => import("./${book}/${n}.js"),`);
    lines.push("  ],");
  }
  lines.push("};", "");
  fs.writeFileSync(path.join(OUT, "loaders.js"), lines.join("\n"));
  for (const book of ["muyassar", "saadi", "ibnkathir"]) {
    for (const f of fs.readdirSync(path.join(OUT, book))) {
      stats[book].files++;
      stats[book].bytes += fs.statSync(path.join(OUT, book, f)).size;
    }
  }
  return stats;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) console.log(JSON.stringify(build(), null, 1));
