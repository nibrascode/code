// Tam Quran (Tanzil) məlumatı: bütövlük, birbaşa axtarış (AI-siz), AI cavabında ayə mətninin Tanzil ilə əvəzlənməsi,
// [[ayah:S:A]] işarələri, chat.js inteqrasiyası, səhifənin render edilməsi.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { AYAS, BISMILLAH, SURA_NAMES_AR, SOURCE } from "../api/_quran/quran.js";
import { SURAS } from "../api/_quran/suras.js";
import { ayahLookup, ayahReply, finalizeAi, compactHistory, stripAyahMarkup, matchArabic, refLabel, AYAH_PROMPT, digitsAscii, arKey } from "../api/_ayah.js";
import { quranReply } from "../api/_quran.js";
import { withTafsirSuggest } from "../api/_tafsir.js";
import { cannedReply } from "../api/_canned.js";
import { tawhidReply } from "../api/_tawhid.js";
import handler from "../api/chat.js";
import { build, parseXml } from "./build-quran.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const XML = fs.readFileSync(path.join(ROOT, "content/quran/quran-uthmani.xml"), "utf8");
const AYA_COUNTS = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6,
];

// ------------------------------------------------------------------ məlumat
test("məlumat: 114 surə, 6236 ayə, tanınmış say-lar", () => {
  assert.equal(AYAS.length, 114);
  assert.equal(AYAS.reduce((s, a) => s + a.length, 0), 6236);
  AYAS.forEach((a, i) => assert.equal(a.length, AYA_COUNTS[i], "surə " + (i + 1)));
  assert.equal(AYAS[0].length, 7);
  assert.equal(AYAS[1].length, 286);
  assert.equal(AYAS[113].length, 6);
  assert.equal(AYAS[111].length, 4);
  assert.equal(SURA_NAMES_AR.length, 114);
  assert.equal(SURAS.length, 114);
  for (const a of AYAS.flat()) assert.ok(typeof a === "string" && /[\u0621-\u064A]/.test(a));
});

test("məlumat: Tanzil XML ilə hərfbəhərf eynidir; generator aktualdır", () => {
  const { suras } = parseXml(XML);
  assert.equal(suras.length, 114);
  suras.forEach((s, i) => {
    assert.deepEqual(AYAS[i], s.ayas, "surə " + s.n);
    assert.equal(BISMILLAH[i], s.bismillah);
    assert.equal(SURA_NAMES_AR[i], s.name);
  });
  assert.equal(BISMILLAH[0], "");
  assert.equal(BISMILLAH[8], ""); // Tövbə
  assert.equal(BISMILLAH.filter(Boolean).length, 112);
  const { js, notice } = build();
  assert.equal(fs.readFileSync(path.join(ROOT, "api/_quran/quran.js"), "utf8"), js, "node scripts/build-quran.mjs işlədin");
  assert.equal(fs.readFileSync(path.join(ROOT, "api/_quran/TANZIL-NOTICE.txt"), "utf8"), notice);
  // mətnin özü bilinən ayələrlə uyğundur (dəyişdirilməyib)
  const k = (t) => t.split(" ").map(arKey).filter(Boolean).join(" ");
  assert.equal(k(AYAS[0][0]), k("بسم الله الرحمن الرحيم"));
  assert.equal(k(AYAS[111][0]), k("قل هو الله أحد"));
  assert.ok(k(AYAS[1][254]).startsWith(k("الله لا إله إلا هو الحي القيوم")));
  assert.ok(k(AYAS[1][254]).endsWith(k("وهو العلي العظيم")));
});

test("Tanzil şərtləri: bildiriş faylı, mənbə və tanzil.net linki, bildiriş quran.js içində də var", () => {
  const notice = fs.readFileSync(path.join(ROOT, "api/_quran/TANZIL-NOTICE.txt"), "utf8");
  const js = fs.readFileSync(path.join(ROOT, "api/_quran/quran.js"), "utf8");
  for (const must of ["Tanzil Quran Text (Simple, Version 1.1)", "Copyright (C) 2007-2026 Tanzil Project", "Creative Commons Attribution 3.0", "CHANGING IT IS NOT ALLOWED", "tanzil.net", "PLEASE DO NOT REMOVE OR CHANGE THIS COPYRIGHT BLOCK"]) {
    assert.ok(notice.includes(must), "notice: " + must);
    assert.ok(js.includes(must), "quran.js: " + must);
  }
  assert.equal(SOURCE.url, "https://tanzil.net/");
});

test("paket: statik import (Vercel izləyir), ölçü məqbuldur", () => {
  const src = fs.readFileSync(path.join(ROOT, "api/_ayah.js"), "utf8");
  assert.match(src, /^import \{[^}]*\} from "\.\/_quran\/quran\.js";/m);
  assert.ok(!/readFileSync|require\(/.test(src), "fs ilə oxuma yoxdur");
  const size = fs.statSync(path.join(ROOT, "api/_quran/quran.js")).size;
  assert.ok(size < 2 * 1024 * 1024, "quran.js ölçüsü " + size);
  const gz = zlib.gzipSync(fs.readFileSync(path.join(ROOT, "api/_quran/quran.js"))).length;
  assert.ok(gz < 500 * 1024, "gzip " + gz);
  assert.match(fs.readFileSync(path.join(ROOT, "api/chat.js"), "utf8"), /from "\.\/_ayah\.js"/);
});

// ------------------------------------------------------------------ axtarış
const lines = (reply) => reply.split("\n");
const textOf = (reply) => {
  // blokların ərəbcə sətirləri (nömrə ﴿N﴾ olmadan)
  const out = [];
  let inside = false;
  for (const ln of lines(reply)) {
    if (/^::ayah/.test(ln)) inside = true;
    else if (/^::tr::/.test(ln) || /^::src::/.test(ln)) inside = false; // Azərbaycanca tərcümə sətirləri ərəbcə sətirlərə daxil deyil
    else if (inside) out.push(ln.replace(/ ﴿[٠-٩]+﴾$/, ""));
  }
  return out;
};
const first = (q) => {
  const r = ayahLookup(q);
  assert.ok(r, "tapılmadı: " + q);
  return r.reps.map((x) => `${x.s}:${x.a1}-${x.a2}`).join(",");
};

const POS = [
  ["Ayətül-Kürsi", "2:255-255"],
  ["Ayətül Kürsi", "2:255-255"],
  ["Ayətül-Kürsini yaz", "2:255-255"],
  ["ayetel kursi", "2:255-255"],
  ["Ayat al-Kursi", "2:255-255"],
  ["آية الكرسي", "2:255-255"],
  ["Аят аль-Курси", "2:255-255"],
  ["Amənər-Rəsul", "2:285-286"],
  ["Amenerresulu ayələri", "2:285-286"],
  ["Bəqərə 255", "2:255-255"],
  ["Baqara 255", "2:255-255"],
  ["Bakara 255", "2:255-255"],
  ["Бакара 255", "2:255-255"],
  ["2:255", "2:255-255"],
  ["Quran 2:255", "2:255-255"],
  ["٢:٢٥٥", "2:255-255"],
  ["ayə 255 Bəqərə", "2:255-255"],
  ["Bəqərə surəsinin 255-ci ayəsi", "2:255-255"],
  ["Bəqərə 255 ayəsini mənə göstərə bilərsən?", "2:255-255"],
  ["Surah Baqarah verse 255", "2:255-255"],
  ["سورة البقرة آية 255", "2:255-255"],
  ["الآية 255 من سورة البقرة", "2:255-255"],
  ["Bəqərə 255-257", "2:255-257"],
  ["Bəqərə 255 - 257", "2:255-257"],
  ["2:255-257", "2:255-257"],
  ["Al-Baqarah 255-257", "2:255-257"],
  ["Fatihə surəsi", "1:1-7"],
  ["Fatihə", "1:1-7"],
  ["Al-Fatiha", "1:1-7"],
  ["Аль-Фатиха", "1:1-7"],
  ["سورة الفاتحة", "1:1-7"],
  ["Fatihə 1-3", "1:1-3"],
  ["İxlas surəsi", "112:1-4"],
  ["Surah Al-Ikhlas", "112:1-4"],
  ["الإخلاص", "112:1-4"],
  ["Qul huvallahu ehad", "112:1-4"],
  ["Kəfirun surəsini yaz", "109:1-6"],
  ["Kafirun suresini oku", "109:1-6"],
  ["Nas surəsi", "114:1-6"],
  ["Fələq surəsi", "113:1-5"],
  ["Felak suresi", "113:1-5"],
  ["Kövsər", "108:1-3"],
  ["Kevser suresi", "108:1-3"],
  ["Fil surəsi", "105:1-5"],
  ["Yasin", "36:1-83"],
  ["Yasin surəsi", "36:1-83"],
  ["Сура Ясин", "36:1-83"],
  ["سورة يس", "36:1-83"],
  ["Yasin 1-5", "36:1-5"],
  ["Yasin surəsi 9-cu ayə", "36:9-9"],
  ["Mülk surəsi", "67:1-30"],
  ["Nəbə", "78:1-40"],
  ["Kəhf", "18:1-110"],
  ["Rəhman surəsi", "55:1-78"],
  ["Vaqiə", "56:1-96"],
  ["Hədid 3", "57:3-3"],
  ["Ali İmran 190", "3:190-190"],
  ["Al-i Imran 2", "3:2-2"],
  ["Nisa surəsi 1-ci ayə", "4:1-1"],
  ["112-ci surə", "112:1-4"],
  ["surə 112", "112:1-4"],
  ["Salam, mənə Yasin surəsini yaza bilərsən?", "36:1-83"],
  ["Mənə Yasin surəsini oxu", "36:1-83"],
  ["Bəqərə 3-cü ayəni yaz", "2:3-3"], // «yaz» → ayə mətni
  ["Bəqərə 50-70", "2:50-70"],
];
test("axtarış (müsbət): ad, nömrə, aralıq, adlı ayələr, 5 dildə yazılışlar", () => {
  for (const [q, want] of POS) assert.equal(first(q), want, q);
  assert.equal(first("Müavvizətəyn"), "113:1-5,114:1-6");
  assert.equal(first("üç qul"), "112:1-4,113:1-5,114:1-6");
  assert.equal(first("Ayətün-Nur"), "24:35-35");
});

test("axtarış: bütün 114 surənin adları (az, tr, en, ru, ərəbcə) özünə çatır", () => {
  for (const s of SURAS) {
    for (const [lang, nm] of [["az", s.az], ["tr", s.tr], ["en", s.en], ["ru", s.ru]]) {
      const r = ayahLookup(`${nm} surəsi`);
      assert.ok(r, `${s.n} ${lang} ${nm}`);
      assert.deepEqual(r.reps.map((x) => x.s), [s.n], `${s.n} ${lang} ${nm}`);
      const r2 = ayahLookup(`${nm} 1`);
      if (r2) assert.deepEqual(r2.reps.map((x) => x.s), [s.n], `${s.n} ${nm} 1`);
    }
    const ar = ayahLookup("سورة " + SURA_NAMES_AR[s.n - 1]);
    assert.ok(ar, "ar " + s.n);
    assert.ok(ar.reps.some((x) => x.s === s.n) && ar.reps.length === 1, "ar " + s.n + " " + SURA_NAMES_AR[s.n - 1]);
  }
});

test("axtarış: cavab mətni data ilə hərfbəhərf eynidir (AI yoxdur)", () => {
  const r = ayahReply("Bəqərə 255");
  assert.deepEqual(textOf(r), [AYAS[1][254]]);
  assert.match(r, /^::ayah 2:255::\n/);
  assert.match(r, /\n::src:: ﴿ Bəqərə surəsi, 255-ci ayə ﴾ · Mənbə: Tanzil · Tərcümə: QuranEnc\.com\n::\/ayah::\n\n::note:: Quran başqa dillərə yalnız mənaca tərcümə oluna bilər; tərcümə ayənin bütün mənasını tam ifadə etməyə bilər\.$/);
  const r2 = ayahReply("Bəqərə 255-257");
  assert.deepEqual(textOf(r2), [255, 256, 257].map((a) => AYAS[1][a - 1] + ` ﴿${String(a).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d])}﴾`).map((x) => x.replace(/ ﴿[٠-٩]+﴾$/, "")));
  assert.match(r2, /255–257-ci ayələr ﴾ · Mənbə: Tanzil/);
  // Fatihə: 1:1 ayənin özüdür, əlavə bismillah yoxdur
  const f = ayahReply("Fatihə surəsi");
  assert.deepEqual(textOf(f), AYAS[0]);
  // İxlas: bismillah (Tanzil atributu) nömrəsiz başda
  const ix = ayahReply("İxlas surəsi");
  assert.deepEqual(textOf(ix), [BISMILLAH[111], ...AYAS[111]]);
  assert.match(ix, /İxlas surəsi, 1–4-cü ayələr/);
  // Tövbə: bismillah yoxdur
  const t = ayahReply("Tövbə surəsi");
  assert.deepEqual(textOf(t).slice(0, 1), [AYAS[8][0]]);
  // ərəbcə interfeys
  const ar = ayahReply("سورة الإخلاص");
  assert.match(ar, /::src:: ﴿ سورة الإخلاص، الآيات ١–٤ ﴾ · المصدر: Tanzil/);
  assert.match(ayahReply("Surah Yasin verse 9"), /Surah Ya-Sin, verse 9 ﴾ · Source: Tanzil/);
  assert.match(ayahReply("Бакара 255"), /Сура Аль-Бакара, аят 255 ﴾ · Источник: Tanzil/);
  assert.match(ayahReply("Bakara suresi 255"), /Bakara suresi, 255\. âyet ﴾ · Kaynak: Tanzil/);
  assert.match(refLabel("az", 2, 286, 286), /286-cı ayə/);
  assert.match(refLabel("az", 2, 3, 3), /3-cü ayə/);
});

test("axtarış: uzun surə məhdudlaşdırılır, aralıq limitlənir, olmayan ayə uydurulmur", () => {
  const y = ayahReply("Yasin surəsi");
  assert.equal(textOf(y).length, 1 + 15); // bismillah + 15 ayə
  assert.match(y, /Surə uzundur \(83 ayə\): yalnız ilk 15 ayə göstərildi\. Davamı üçün aralıq yaz, məsələn: «Yasin 16-30»\./);
  assert.match(y, /Yasin surəsi, 1–15-ci ayələr/);
  const b = ayahReply("Bəqərə surəsi");
  assert.match(b, /286 ayə/);
  const rg = ayahReply("Bəqərə 6-200 yaz");
  assert.equal(textOf(rg).length, 30);
  assert.match(rg, /Aralıq uzundur: ilk 30 ayə göstərildi/);
  assert.equal(ayahReply("Bəqərə 300"), "Bəqərə surəsində yalnız 286 ayə var. 300 nömrəli ayə yoxdur.");
  assert.match(ayahReply("Fatihə 8"), /yalnız 7 ayə var/);
  assert.match(ayahReply("114:7"), /yalnız 6 ayə/);
  assert.ok(!/::ayah/.test(ayahReply("Bəqərə 300")));
  // 20 ayəyə qədər bütöv surə
  assert.equal(textOf(ayahReply("Fil surəsi")).length, 1 + 5);
  assert.equal(textOf(ayahReply("Nəsr surəsi")).length, 1 + 3);
});

const NEG = [
  "Bəqərə 1-59 sözlərin izahı",
  "Bəqərə 5-ci ayənin sözləri",
  "المفلحون mənası",
  "Yasin surəsinin fəziləti nədir",
  "Yasin surəsi nə vaxt nazil olub",
  "Fatihə surəsinin tərcüməsi",
  "İxlas surəsinin mənası nədir",
  "Ayətül-Kürsinin təfsiri",
  "Bəqərə surəsində nə var",
  "Nuh peyğəmbər",
  "Nuh 5 yaşındadır",
  "Yusif gəlir",
  "saat 10:30",
  "gedək 5:30-da görüşək",
  "heç",
  "bunu",
  "sabah",
  "red",
  "yaşında",
  "min manat",
  "Salam",
  "Fil",
  "Nas",
  "Nur",
  "Hud",
  "Mülk",
  "Qaf",
  "Allahın adları",
  "tövhid",
  "tövhid 10-cu mövzu",
  "Rübubiyyət tövhidi nədir",
  "əhli sünnənin Allahın adları ilə bağlı qaydaları",
  "Sələfilik nədir",
  "bidət nədir",
  "python-da salam yaz",
  "2 + 2 neçədir",
  "Quran nədir",
  "Quranda neçə surə var",
  "Mənə Quran haqqında məlumat ver",
  "ayə nədir",
  "surə nədir",
  "Bu gün hava necədir",
  "kod yaz: Bəqərə adlı funksiya düzəlt ki, bu sözləri qaytarsın və hər birini ayrıca çap etsin",
  "",
];
test("axtarış (mənfi): izah/sual/adi söz/vaxt/başqa mövzu → null (mövcud zəncirə qalır)", () => {
  for (const q of NEG) assert.equal(ayahReply(q), null, JSON.stringify(q));
});

test("Bəqərə 1–59 söz izahı (quranReply) toxunulmazdır", () => {
  for (const q of ["Bəqərə 1-59 sözlərin izahı", "Bəqərə 5 ayənin sözlərinin mənası", "Bəqərə 3-cü ayənin kəlmələri", "المفلحون"]) {
    assert.ok(quranReply(q), q);
    assert.equal(ayahReply(q), null, q);
  }
  // sadə ayə sorğusu söz izahı deyil, ayə mətnidir (söz izahı yalnız açıq istəklə)
  for (const q of ["Bəqərə 5 ayə", "Bəqərə 3-cü ayə", "2:5"]) assert.ok(ayahReply(q), q);
  // mətn istəyi ilə eyni ayə verilir
  assert.ok(ayahReply("Bəqərə 5-ci ayəni yaz"));
});

// ------------------------------------------------------------------ AI cavabının işlənməsi
const flatAya = (s, a) => AYAS[s - 1][a - 1];
test("AI cavabı: səhv ərəbcə ayə Tanzil mətni ilə əvəz olunur", () => {
  // diakritikasız / 1 sözü səhv / bir söz düşüb
  const w = flatAya(2, 255).split(" ");
  w[3] = "الحي"; // الْحَيُّ əvəzinə sadə yazılış
  w.splice(6, 1);
  const wrongText = w.join(" ").replace(/[\u064B-\u0652]/g, "");
  const out = finalizeAi(`Allah buyurur: ﴿${wrongText}﴾ (Bəqərə: 255). Bu ayə Allahın böyüklüyünü bildirir.`, "salam");
  assert.ok(out.includes(flatAya(2, 255)), "dəqiq Tanzil mətni olmalıdır");
  assert.ok(!out.includes(wrongText));
  assert.match(out, /::ayah 2:255::/);
  assert.match(out, /::src:: ﴿ Bəqərə surəsi, 255-ci ayə ﴾ · Mənbə: Tanzil/);
  assert.ok(!out.includes("(Bəqərə: 255)"), "istinad mötərizəsi mənbə sətri ilə təkrarlanmasın");
  assert.ok(out.includes("Allah buyurur:") && out.includes("Bu ayə Allahın böyüklüyünü bildirir."));
  assert.ok(!out.includes("﴿اللَّهُ لَا إِلَـٰهَ"), "mötərizəli təkrar yoxdur");
});

test("AI cavabı: düzgün (diakritikli) ayə də data ilə eyni qalır; diakritikasız ayə əvəz olunur", () => {
  const ok = finalizeAi(`﴿${flatAya(112, 1)}﴾ və ﴿${flatAya(112, 2)} ${flatAya(112, 3)}﴾`, "salam");
  assert.ok(ok.includes(flatAya(112, 1)) && ok.includes(flatAya(112, 2)) && ok.includes(flatAya(112, 3)));
  assert.match(ok, /::ayah 112:1::/);
  assert.match(ok, /::ayah 112:2-3::/);
  const bare = finalizeAi("﴿قل هو الله احد الله الصمد﴾", "salam");
  assert.ok(bare.includes(flatAya(112, 1)) && bare.includes(flatAya(112, 2)));
  assert.match(bare, /::ayah 112:1-2::/);
  // mötərizəsiz, bütöv ayə
  const unb = finalizeAi(`Budur: ${flatAya(1, 2).replace(/[\u064B-\u0652\u0670]/g, "")} deməkdir ki...`, "salam");
  assert.match(unb, /::ayah 1:2::/);
  assert.ok(unb.includes(flatAya(1, 2)));
});

test("AI cavabı: hissə sitat dəqiq sözlərlə, birdən çox yerdə gələn mətn mənbələrlə göstərilir", () => {
  const head = flatAya(51, 56).split(" ").slice(0, 5).join(" "); // Tanzil sözləri olduğu kimi
  const part = finalizeAi(`﴿${head}﴾ (Zariyat 56)`, "salam");
  assert.match(part, /::ayah 51:56::/);
  assert.ok(part.includes(head));
  const amb = finalizeAi("﴿إن الله مع الصابرين﴾", "salam");
  assert.match(amb, /^::ayah::/m);
  assert.match(amb, /Quranda bir neçə yerdə gəlir: Bəqərə 153/);
  const tail = flatAya(2, 153).split(" ").slice(-4).join(" ");
  assert.ok(amb.includes(tail));
  const hinted = finalizeAi("﴿إن الله مع الصابرين﴾ (Ənfal 46)", "salam");
  assert.match(hinted, /::ayah 8:46::/);
});

test("AI cavabı: təsdiqlənməyən ﴿…﴾ aydın qeyd olunur; qısa/ərəb olmayan mötərizə toxunulmur", () => {
  const fake = "﴿وقال ربكم ادعوني استجب لكم وسيعطيكم الله كنزا عظيما في الجنة﴾";
  const out = finalizeAi("Allah buyurur: " + fake, "salam");
  assert.match(out, /::ayah warn::/);
  assert.match(out, /::src:: ⚠ Bu mətn Qurandakı ayə kimi təsdiqlənmədi/);
  assert.ok(!out.includes("﴿وقال"));
  assert.match(finalizeAi(fake, "salam in english please the"), /⚠ This text could not be verified/);
  assert.match(finalizeAi(fake, "ما هذا؟"), /⚠ لم يتم التحقق/);
  const keep = "Sözün ﴿Allah﴾ və ﴿الله﴾ və ﴿١﴾ işlənməsi";
  assert.equal(finalizeAi(keep, "salam"), keep);
});

test("AI cavabı: adi ərəbcə mətn (salam, dua, şəhadət, hədis) ayə sayılmır", () => {
  for (const t of [
    "Salam: السلام عليكم ورحمة الله وبركاته",
    "Şəhadət: لا إله إلا الله محمد رسول الله",
    "Dua: «اللهم إني أسألك العفو والعافية في الدنيا والآخرة»",
    "Cümlə: أنا أحب تعلم اللغة العربية كل يوم في المدرسة",
    "Nibras Arabic: هذا كتاب جديد على الطاولة الكبيرة",
    "«إنما الأعمال بالنيات وإنما لكل امرئ ما نوى» hədisdir",
  ]) assert.equal(finalizeAi(t, "salam"), t);
});

test("AI cavabı: [[ayah:S:A]] işarələri açılır, yanlışlar silinir, kod blokları toxunulmazdır", () => {
  const out = finalizeAi("Budur: [[ayah:2:255]] və [[ayah:112:1-2]] və [[ayah:999:1]] və [[ayah:2:300]] və [[ayah:abc]] və [[ayah:2:5-1]]", "salam");
  assert.ok(out.includes(flatAya(2, 255)) && out.includes(flatAya(112, 1)) && out.includes(flatAya(112, 2)));
  assert.match(out, /::ayah 2:255::/);
  assert.match(out, /::ayah 112:1-2::/);
  assert.ok(!/\[\[/.test(out), "yanlış işarələr silinməlidir");
  assert.equal((out.match(/::ayah /g) || []).length, 2);
  const code = finalizeAi("```js\nconst x = '[[ayah:2:255]]'; // ﴿قل هو الله أحد﴾\n```\n[[ayah:1:1]]", "salam");
  assert.ok(code.includes("'[[ayah:2:255]]'") && code.includes("﴿قل هو الله أحد﴾"));
  assert.match(code, /::ayah 1:1::/);
  const long = finalizeAi("[[ayah:2:1-100]]", "salam");
  assert.equal(textOf(long).length, 30);
  assert.match(long, /Aralıq uzundur/);
});

test("AI cavabı: saxta ::ayah markup AI-dən təmizlənir; tarixçə sıxılır", () => {
  const fake = "Salam\n::ayah 2:255::\nyalan mətn\n::src:: yalan mənbə\n::/ayah::\nSağol";
  const out = finalizeAi(fake, "salam");
  assert.ok(!/::ayah|::src::|::\/ayah/.test(out));
  assert.ok(!out.includes("yalan mənbə"));
  const real = ayahReply("Bəqərə 255");
  assert.equal(compactHistory(real), "[[ayah:2:255]]");
  assert.equal(compactHistory("A\n\n" + ayahReply("Bəqərə 255-256") + "\n\nB"), "A\n\n[[ayah:2:255-256]]\n\nB");
  assert.equal(stripAyahMarkup(real).includes("::"), false);
  assert.match(AYAH_PROMPT, /\[\[ayah:2:255\]\]/);
  assert.match(AYAH_PROMPT, /heç vaxt özün yazma/);
});

test("matchArabic: yaxın uyğunluq, istinad ipucu, aşağı hədd", () => {
  const exact = matchArabic(flatAya(2, 286), {});
  assert.ok(exact && exact.exact && exact.refs[0].s === 2 && exact.refs[0].a1 === 286);
  assert.equal(matchArabic("هذا كلام عربي عادي ليس من القرآن الكريم أبدا", {}), null);
  assert.equal(matchArabic("قل هو", {}), null); // 3 sözdən az
  assert.equal(arKey("ٱلرَّحْمَـٰنِ"), arKey("الرحمن"));
  assert.equal(digitsAscii("٢:٢٥٥"), "2:255");
});

// ------------------------------------------------------------------ chat.js
function mkRes() {
  return { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
}
async function chat(message, extra = {}) {
  const res = mkRes();
  await handler({ method: "POST", body: { message, ...extra } }, res);
  return res;
}
test("chat.js: sırf ayə sorğuları AI-yə getmir (fetch çağırılsa test uğursuz olur)", async () => {
  const realFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    throw new Error("şəbəkə çağırışı olmamalıdır");
  };
  try {
    for (const [q] of POS) {
      const res = await chat(q);
      assert.equal(res.code, 200, q);
      assert.equal(res.body.success, true, q);
      assert.equal(res.body.reply, withTafsirSuggest(ayahReply(q), q), q); // ayə cavabı + təfsir seçimləri
      assert.ok(res.body.reply.includes("Tanzil"), q);
    }
    // əvvəlki hazır cavablar dəyişməyib
    for (const q of ["Bəqərə 1-59 sözlərin izahı", "Bəqərə 5 ayənin sözlərinin mənası", "المفلحون"]) assert.equal((await chat(q)).body.reply, quranReply(q), q);
    for (const q of ["Sələfilik nədir", "bidət nədir", "Allahın adları", "əsmaül hüsna"]) assert.equal((await chat(q)).body.reply, cannedReply(q), q);
    for (const q of ["Şirk neçə qismə bölünür", "tövhid 10-cu mövzu", "Allahın adları təvqifidir nə deməkdir"]) assert.equal((await chat(q)).body.reply, tawhidReply(q), q);
    assert.equal(calls, 0);
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("chat.js: AI ayə mətni yazanda server onu Tanzil mətni ilə əvəz edir; sistem promptunda işarə qaydası var", async () => {
  const realFetch = globalThis.fetch;
  const prevKey = process.env.GROQ_API_KEY;
  process.env.GROQ_API_KEY = "test-key";
  const sent = [];
  const wrong = flatAya(2, 255).replace(/[\u064B-\u0652\u0670]/g, "").replace("الحي", "الحى الحي");
  globalThis.fetch = async (url, init) => {
    sent.push({ url: String(url), body: JSON.parse(init.body) });
    return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: `Allah buyurur: ﴿${wrong}﴾ (Bəqərə 255).\nDavamı: [[ayah:112:1]]` } }] }) };
  };
  try {
    const res = await chat("Mənə hikmətli söz de", {
      messages: [
        { role: "user", text: "salam" },
        { role: "assistant", text: ayahReply("Bəqərə 255") },
        { role: "user", text: "Mənə hikmətli söz de" },
      ],
    });
    assert.equal(res.body.success, true);
    assert.ok(sent.length >= 1);
    const body = sent[0].body;
    const system = body.messages[0].content;
    assert.match(system, /\[\[ayah:2:255\]\]/);
    assert.match(system, /heç vaxt özün yazma/);
    // tarixçədəki hazır ayə bloku modelə mətn kimi yox, işarə kimi gedir
    const hist = body.messages.map((m) => m.content).join("\n");
    assert.ok(!hist.includes(flatAya(2, 255)), "ayə mətni modelə göndərilməməlidir");
    assert.ok(hist.includes("[[ayah:2:255]]"));
    // cavab
    const r = res.body.reply;
    assert.ok(r.includes(flatAya(2, 255)), "dəqiq Tanzil mətni");
    assert.ok(!r.includes(wrong));
    assert.ok(r.includes(flatAya(112, 1)));
    assert.match(r, /Mənbə: Tanzil/);
  } finally {
    globalThis.fetch = realFetch;
    if (prevKey === undefined) delete process.env.GROQ_API_KEY;
    else process.env.GROQ_API_KEY = prevKey;
  }
});

// ------------------------------------------------------------------ səhifə
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try {
    ({ JSDOM } = createRequire(path.join(where, "x.js"))("jsdom"));
    break;
  } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const HTML = fs.readFileSync(path.join(ROOT, "public/ai/index.html"), "utf8");
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));

function boot({ storage = {}, reply = "salam" } = {}) {
  const dom = new JSDOM(HTML, {
    url: "https://nibrascode.com/ai",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(w) {
      for (const [k, v] of Object.entries(storage)) w.localStorage.setItem(k, v);
      w.TextEncoder = TextEncoder;
      w.fetch = async (url) => {
        const u = new URL(url, "https://nibrascode.com");
        const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
        if (u.pathname === "/api/chat") return out(200, { reply: typeof reply === "function" ? reply() : reply });
        if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
        return out(200, { ok: true });
      };
    },
  });
  const w = dom.window;
  const d = w.document;
  return {
    w, d,
    async say(text) {
      d.querySelector("#inp").value = text;
      d.querySelector("#form").dispatchEvent(new w.Event("submit", { cancelable: true, bubbles: true }));
      await wait(40);
    },
    snapshot() { const o = {}; for (let i = 0; i < w.localStorage.length; i++) { const k = w.localStorage.key(i); o[k] = w.localStorage.getItem(k); } return o; },
  };
}

test("səhifə: ai.html və ai/index.html eynidir; ayə üçün şrift/RTL/mənbə stili var", () => {
  assert.equal(fs.readFileSync(path.join(ROOT, "public/ai.html"), "utf8"), HTML);
  assert.match(HTML, /Amiri\+Quran/);
  assert.match(HTML, /\.msg \.ay \.at \{[^}]*direction: rtl/);
  assert.match(HTML, /\.msg \.ay \.as \{[^}]*font-size: 11px/);
  assert.match(HTML, /https:\/\/tanzil\.net\//);
});

test("səhifə: ayə bloku RTL, Tanzil linki ilə render olunur; HTML escape edilir; köhnə mesajlar işləyir", { skip }, async () => {
  const reply = ayahReply("Bəqərə 255-256") + "\n\nİzah <b>qalın</b> & <script>alert(1)</script>\n\n" + finalizeAi("﴿وقال ربكم ادعوني استجب لكم وسيعطيكم الله كنزا عظيما في الجنة <img src=x onerror=alert(1)>﴾", "salam");
  const p = boot({ reply });
  await p.say("Bəqərə 255-256");
  const bubbles = [...p.d.querySelectorAll("#msgs .msg.b")];
  assert.equal(bubbles.length, 1);
  const b = bubbles[0];
  const blocks = b.querySelectorAll(".ay");
  assert.equal(blocks.length, 2);
  const at = blocks[0].querySelector(".at");
  assert.equal(at.getAttribute("dir"), "rtl");
  assert.equal(at.getAttribute("lang"), "ar");
  assert.equal(at.querySelectorAll(".al").length, 2);
  assert.ok(at.textContent.includes(flatAya(2, 255)) && at.textContent.includes(flatAya(2, 256)));
  const src = blocks[0].querySelector(".as");
  assert.match(src.textContent, /^﴿ Bəqərə surəsi, 255–256-cı ayələr ﴾ · Mənbə: Tanzil · Tərcümə: QuranEnc\.com$/);
  const a = src.querySelector("a");
  assert.equal(a.getAttribute("href"), "https://tanzil.net/");
  assert.equal(a.getAttribute("rel"), "noopener noreferrer");
  assert.equal(a.textContent, "Tanzil");
  assert.ok(blocks[1].classList.contains("warn"));
  assert.match(blocks[1].querySelector(".as").textContent, /Qurandakı ayə kimi təsdiqlənmədi/);
  // HTML icra olunmur
  assert.equal(b.querySelectorAll("script, b, img").length, 0);
  assert.ok(b.textContent.includes("<script>alert(1)</script>"));
  assert.ok(!b.textContent.includes("::ayah") && !b.textContent.includes("::src::") && !b.textContent.includes("::/ayah"));
  // yenidən yükləmə (localStorage bərpası): eyni render
  const q = boot({ storage: p.snapshot() });
  assert.equal(q.d.querySelectorAll("#msgs .msg.b .ay").length, 2);
  assert.equal(q.d.querySelector("#msgs .msg.b .ay .as a").getAttribute("href"), "https://tanzil.net/");
  // markupsuz köhnə cavab: dəyişməz
  const old = boot({ reply: "Köhnə cavab ﴿بِسْمِ اللَّهِ﴾ düz mətn\n\n::bu ayə deyil::" });
  await old.say("test");
  const ob = old.d.querySelector("#msgs .msg.b");
  assert.equal(ob.querySelectorAll(".ay").length, 0);
  assert.equal(ob.textContent, "Köhnə cavab ﴿بِسْمِ اللَّهِ﴾ düz mətn\n\n::bu ayə deyil::");
  p.w.close(); q.w.close(); old.w.close();
});

test("node --check: yeni fayllar sintaksis xətasızdır", async () => {
  const { spawnSync } = await import("node:child_process");
  for (const f of ["api/_ayah.js", "api/_quran/suras.js", "api/_quran/quran.js", "scripts/build-quran.mjs", "api/chat.js"]) {
    const r = spawnSync(process.execPath, ["--check", path.join(ROOT, f)], { encoding: "utf8" });
    assert.equal(r.status, 0, f + " " + r.stderr);
  }
});
