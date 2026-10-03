// QuranEnc XML (content/quran/quran-az-azeri_musayev.xml) -> api/_quran/az.js (mənalar) + api/_quran/az-notes.js (haşiyələr) + QURANENC-NOTICE.txt
// Mətn olduğu kimi köçürülür. İşlətmək: node scripts/build-quran-az.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const XML_PATH = path.join(ROOT, "content/quran/quran-az-azeri_musayev.xml");
const OUT_JS = path.join(ROOT, "api/_quran/az.js");
const OUT_NOTES = path.join(ROOT, "api/_quran/az-notes.js");
const OUT_NOTICE = path.join(ROOT, "api/_quran/QURANENC-NOTICE.txt");

const tag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
  return m ? m[1].trim() : "";
};
const cdata = (s) => {
  const m = s.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
  return m ? m[1] : s;
};

export function parseXml(xml) {
  const meta = {
    title: tag(xml, "title"),
    language: tag(xml, "language"),
    id: tag(xml, "id"),
    source: tag(xml, "source"),
    url: tag(xml, "url"),
    updated_at: tag(xml, "updated_at"),
  };
  const suras = [];
  const notes = {};
  const re = /<sura number="(\d+)">([\s\S]*?)<\/sura>/g;
  let m;
  while ((m = re.exec(xml))) {
    const n = Number(m[1]);
    if (n !== suras.length + 1) throw new Error("surə sırası pozulub: " + n);
    const ayas = [];
    const rea = /<aya number="(\d+)">\s*<translation>([\s\S]*?)<\/translation>\s*<footnotes>([\s\S]*?)<\/footnotes>\s*<\/aya>/g;
    let a;
    while ((a = rea.exec(m[2]))) {
      if (Number(a[1]) !== ayas.length + 1) throw new Error("ayə sırası pozulub: " + n + ":" + a[1]);
      ayas.push(cdata(a[2].trim()));
      const fn = cdata(a[3].trim());
      if (fn) notes[n + ":" + a[1]] = fn;
    }
    suras.push(ayas);
  }
  return { meta, suras, notes };
}

export function build() {
  const { meta, suras, notes } = parseXml(fs.readFileSync(XML_PATH, "utf8"));
  if (suras.length !== 114 || suras.reduce((s, x) => s + x.length, 0) !== 6236) throw new Error("114 surə / 6236 ayə gözlənilir");
  if (meta.id !== "azeri_musayev") throw new Error("tərcümə id gözlənilmir: " + meta.id);
  const head = [
    "// Avtomatik yaradılıb: node scripts/build-quran-az.mjs  (mənbə: content/quran/quran-az-azeri_musayev.xml). Əllə dəyişməyin.",
    "// Quranın mənalarının Azərbaycan dilinə tərcüməsi (QuranEnc.com, azeri_musayev). Mətn olduğu kimi saxlanılır;",
    "// [n] haşiyə işarələri də olduğu kimi qalır (göstərilərkən api/_ayah.js onları silir). Mənbə: https://quranenc.com/en/browse/azeri_musayev",
  ];
  const js = [
    ...head,
    "export const AZ_SOURCE = " + JSON.stringify({ name: "QuranEnc.com", id: meta.id, title: meta.title, url: meta.url, site: meta.source, version: meta.updated_at }) + ";",
    "// AZ[s - 1][a - 1] = s:a ayəsinin mənaca tərcüməsi",
    "export const AZ = [",
    ...suras.map((s) => "  " + JSON.stringify(s) + ","),
    "];",
  ].join("\n") + "\n";
  const notesJs = [
    ...head,
    "// Haşiyələr (ayrıca xəritə, defolt göstərilmir): AZ_NOTES[\"s:a\"] = haşiyə mətni",
    "export const AZ_NOTES = " + JSON.stringify(notes, null, 1) + ";",
  ].join("\n") + "\n";
  const notice =
    "Quranın mənalarının Azərbaycan dilinə tərcüməsi / Translation of the meanings of the Noble Qur'an in Azeri\n" +
    "=========================================================================================================\n" +
    "Mənbə / Source: QuranEnc.com — " + meta.url + "\n" +
    "Tərcümə id / Translation id: " + meta.id + "\n" +
    "Başlıq / Title: " + meta.title + " (" + meta.language + ")\n" +
    "Versiya / Version: " + meta.updated_at + "\n" +
    "Yeniliklər / Updates: https://quranenc.com/check/" + meta.id + "/v1.0.4-xml.1\n\n" +
    "Nibras AI qeydi / Note:\n" +
    "az.js və az-notes.js faylları bu XML-dən olduğu kimi yaradılıb, tərcümə mətni dəyişdirilməyib.\n" +
    "These files are generated verbatim from the XML; the translation text has not been changed.\n" +
    "Quran başqa dillərə yalnız mənaca tərcümə oluna bilər; tərcümə ayənin bütün mənasını tam ifadə etməyə bilər.\n" +
    "Ərəbcə ayə mətni həmişə Tanzil məlumatından (quran.js) götürülür; tərcümə QuranEnc-dən.\n";
  return { js, notesJs, notice, count: suras.reduce((s, x) => s + x.length, 0), notes: Object.keys(notes).length };
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  const { js, notesJs, notice, count, notes } = build();
  fs.writeFileSync(OUT_JS, js);
  fs.writeFileSync(OUT_NOTES, notesJs);
  fs.writeFileSync(OUT_NOTICE, notice);
  console.log("yazıldı:", OUT_JS, js.length, "simvol;", count, "ayə;", notes, "haşiyə");
}
