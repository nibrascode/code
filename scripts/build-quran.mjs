// Tanzil XML (content/quran/quran-uthmani.xml) -> api/_quran/quran.js + TANZIL-NOTICE.txt
// Mətn olduğu kimi köçürülür (heç bir normallaşdırma/düzəliş yoxdur). İşlətmək: node scripts/build-quran.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const XML = path.join(ROOT, "content/quran/quran-uthmani.xml");
const OUT_JS = path.join(ROOT, "api/_quran/quran.js");
const OUT_NOTICE = path.join(ROOT, "api/_quran/TANZIL-NOTICE.txt");

function unesc(s) {
  return s.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}

export function parseXml(xml) {
  const head = xml.match(/<!--([\s\S]*?)-->/);
  if (!head) throw new Error("Tanzil müəllif hüququ bloku tapılmadı");
  const notice = head[1].replace(/^\s*\n/, "").replace(/\s+$/, "");
  const suras = [];
  const re = /<sura index="(\d+)" name="([^"]*)">([\s\S]*?)<\/sura>/g;
  let m;
  while ((m = re.exec(xml))) {
    const n = Number(m[1]);
    const ayas = [];
    let bismillah = "";
    const rea = /<aya index="(\d+)" text="([^"]*)"(?: bismillah="([^"]*)")?\s*\/>/g;
    let a;
    while ((a = rea.exec(m[3]))) {
      if (Number(a[1]) !== ayas.length + 1) throw new Error("ayə sırası pozulub: " + n + ":" + a[1]);
      ayas.push(unesc(a[2]));
      if (a[3]) {
        if (a[1] !== "1") throw new Error("bismillah yalnız 1-ci ayədə gözlənilir: " + n);
        bismillah = unesc(a[3]);
      }
    }
    if (n !== suras.length + 1) throw new Error("surə sırası pozulub: " + n);
    suras.push({ n, name: unesc(m[2]), ayas, bismillah });
  }
  return { notice, suras };
}

export function build() {
  const { notice, suras } = parseXml(fs.readFileSync(XML, "utf8"));
  if (suras.length !== 114 || suras.reduce((s, x) => s + x.ayas.length, 0) !== 6236) throw new Error("114 surə / 6236 ayə gözlənilir");
  const noBism = suras.filter((s) => !s.bismillah).map((s) => s.n);
  if (noBism.join() !== "1,9") throw new Error("bismillah atributu yalnız 1 və 9-da olmamalıdır: " + noBism);
  const lines = [];
  lines.push("/*" + notice.replace(/\*\//g, "* /") + "\n*/");
  lines.push("// Avtomatik yaradılıb: node scripts/build-quran.mjs  (mənbə: content/quran/quran-uthmani.xml). Əllə dəyişməyin.");
  lines.push("// Tanzil Project mətni olduğu kimi saxlanılır. Mənbə: https://tanzil.net/");
  lines.push("export const SOURCE = { name: \"Tanzil\", url: \"https://tanzil.net/\", text: \"Tanzil Quran Text (Simple, Version 1.1)\", license: \"CC BY 3.0\" };");
  lines.push("// BISMILLAH[s - 1]: surənin əvvəlindəki bismillah (Tanzil `bismillah` atributu, olduğu kimi). 1-ci surədə 1:1 ayənin özüdür, 9-cu surədə yoxdur -> \"\".");
  lines.push("export const BISMILLAH = " + JSON.stringify(suras.map((s) => s.bismillah)) + ";");
  lines.push("// Surə adları (Tanzil, ərəbcə)");
  lines.push("export const SURA_NAMES_AR = " + JSON.stringify(suras.map((s) => s.name)) + ";");
  lines.push("// AYAS[s - 1][a - 1] = s:a ayəsinin mətni");
  lines.push("export const AYAS = [");
  for (const s of suras) lines.push("  " + JSON.stringify(s.ayas) + ",");
  lines.push("];");
  return {
    js: lines.join("\n") + "\n",
    notice:
      notice.replace(/^\s*\n/, "") +
      "\n\n" +
      "Nibras AI qeydi / Note:\n" +
      "Bu qovluqdakı quran.js faylı Tanzil Project-in Quran mətnindən (Simple, Version 1.1) olduğu kimi köçürülüb, mətn dəyişdirilməyib.\n" +
      "This folder's quran.js is a verbatim copy of the Tanzil Quran text (Simple, Version 1.1); the text has not been changed.\n" +
      "Source / Mənbə: Tanzil Project — https://tanzil.net/  (updates: http://tanzil.net/updates/)\n" +
      "License / Lisenziya: Creative Commons Attribution 3.0\n" +
      "Nibras AI-da ayə mətni həmişə bu məlumatdan götürülür, süni intellekt modelindən yox.\n",
  };
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  const { js, notice } = build();
  fs.mkdirSync(path.dirname(OUT_JS), { recursive: true });
  fs.writeFileSync(OUT_JS, js);
  fs.writeFileSync(OUT_NOTICE, notice);
  console.log("yazıldı:", OUT_JS, js.length, "simvol");
}
