// «تفسير البقرة 17» və bütün oxşar formalar: təfsir sorğusu həmişə ayə bloku + təfsir (Müyəssər) qaytarmalıdır (real api/chat.js zənciri, AI-siz).
import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/chat.js";
import { tafsirReply, numberLast, parseTafsirQuery } from "../api/_tafsir.js";
import { SURA_NAMES_AR } from "../api/_quran/quran.js";
import { SURAS } from "../api/_quran/suras.js";
import { AYAH_COUNT, ayahLookup } from "../api/_ayah.js";

async function chat(body) {
  const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const real = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try { await handler({ method: "POST", body }, res); } finally { globalThis.fetch = real; }
  return res.body;
}
const isTafsir = (r, s, a, book = /muyassar|saadi|ibnkathir/) => !!r && r.includes(`::ayah ${s}:${a}::`) && new RegExp(`::tafsir (${book.source})::`).test(r);

// Bəqərə 17 üçün istifadəçinin sadaladığı və əlavə formalar (hamısı real chat.js zənciri ilə)
const FORMS_2_17 = [
  // ərəbcə
  "تفسير البقرة 17", "تفسير البقرة الآية 17", "تفسير آية 17 من البقرة", "تفسير سورة البقرة 17", "تفسير سورة البقرة آية 17",
  "تفسير الآية 17 من سورة البقرة", "تفسير البقرة ١٧", "تفسير البقرة ۱۷", "تفسير الآية ١٧ من سورة البقرة", "تفسير البقرة 17؟", "تفسير البقرة 17?",
  "  تفسير   البقرة   17  ؟ ", "\u200Fتفسير البقرة 17\u200F", "تفسير\u00A0البقرة\u00A017", "تفسير البقـــرة 17", "تَفْسِير البَقَرَة 17", "تفسير البقره 17",
  "تفسير البقرة17", "تفسيرالبقرة 17", "تفسير، البقرة، 17", "تفسير البقرة: 17", "تفسير البقرة - 17", "التفسير البقرة 17", "تفسير ٱلْبَقَرَةِ ١٧",
  "تفسير البقرة آية 17", "تفسير البقرة اية 17", "تفسير ايه 17 البقره", "تفسير الاية ١٧ من سورة البقره", "البقرة 17 تفسير", "البقرة الآية 17 تفسير",
  "اريد تفسير البقرة 17", "ما تفسير الآية 17 من سورة البقرة؟", "ما هو تفسير البقرة 17", "اعطني تفسير البقرة 17 من فضلك", "شرح البقرة 17",
  "معنى الآية 17 من سورة البقرة", "تفسير ابن كثير البقرة 17", "تفسير السعدي البقرة 17", "تفسير الميسر البقرة 17", "تفسير البقرة 17 لابن كثير",
  "تفسير 2:17", "تفسير ٢:١٧", "تفسير البقرة 2:17",
  // azərbaycanca
  "Bəqərə 17 təfsir", "Bəqərə 17-ci ayənin təfsiri", "17-ci ayə Bəqərə təfsiri", "təfsir Bəqərə 17", "Beqere 17 tefsir", "BƏQƏRƏ 17 TƏFSİRİ",
  "Bəqərə surəsi 17 təfsiri", "Bəqərə surəsi 17-ci ayə təfsiri", "Bəqərə surəsinin 17-ci ayəsinin təfsiri", "Bəqərə surəsi, 17-ci ayə, təfsir",
  "Bəqərə 17 ayəsinin təfsirini yaz", "Bəqərə 17 ayəsinin təfsiri nədir?", "bəqərə 17 təfsir.", "Bəqərə  17   təfsiri  ", "Bəqərə 17 Müyəssər təfsiri",
  "Bəqərə 17 İbn Kəsir təfsiri", "Bəqərə 17 Sədi təfsiri", "Bəqərə 2:17 təfsir", "2:17 təfsiri",
  // türkcə
  "Bakara 17 tefsiri", "Bakara suresi 17. ayet tefsiri", "Bakara 17 ayetin tefsiri", "Bakara 17. ayetin tefsiri nedir?", "tefsir Bakara 17",
  "Bakara Suresi 17 ayet tefsir", "Bakara 17 ayet tefsiri Müyesser", "Bakara 17 İbn Kesir tefsiri", "tefsir 2:17",
  // ingiliscə
  "tafsir baqara 17", "tafsir of Al-Baqarah 17", "Al-Baqarah 17 tafsir", "tafsir surah baqarah verse 17", "tafsir of verse 17 of surah al-baqarah",
  "tafsir al baqara 17", "Tafsir Ibn Kathir Baqarah 17", "What is the tafsir of Al-Baqarah 17?", "Baqarah 17 tafsir muyassar", "Baqarah 17 tafseer", "tafsir 2:17",
  // rusca
  "тафсир Бакара 17", "тафсир суры аль-Бакара аят 17", "тафсир аята 17 суры Аль-Бакара", "Аль-Бакара 17 тафсир", "Бакара 17 аят тафсир",
  "тафсир Ибн Касир Бакара 17", "тафсир ас-Саади Бакара 17", "тафсир 17 аят суры Бакара", "тафсир 2:17",
];

test("«تفسير البقرة 17» (dəqiq istifadəçi yazısı) real chat zənciri ilə: AI-siz, ayə bloku + Müyəssər təfsiri", async () => {
  for (const extra of [{}, { noticeShown: false }, { noticeShown: true }, { mode: "ask" }, { mode: "chat", limitReached: true }]) {
    const r = await chat({ message: "تفسير البقرة 17", ...extra });
    assert.equal(r.usedAI, false, JSON.stringify(extra));
    assert.ok(isTafsir(r.reply, 2, 17, /muyassar/), JSON.stringify(extra) + " " + r.reply.slice(0, 120));
    assert.equal(/::notice::/.test(r.reply), extra.noticeShown === false);
  }
});

test("Bəqərə 17 üçün %d forma: hamısı ayə + təfsir qaytarır".replace("%d", FORMS_2_17.length), async () => {
  const bad = [];
  for (const q of FORMS_2_17) {
    const r = await chat({ message: q, noticeShown: false, mode: "ask" });
    if (r.usedAI !== false || !isTafsir(r.reply, 2, 17)) bad.push(q);
  }
  assert.deepEqual(bad, []);
});

test("kitab adı olmadıqda Müyəssər, adlandırıldıqda həmin kitab (hər dildə)", async () => {
  assert.match(await tafsirReply("تفسير البقرة 17"), /::tafsir muyassar::/);
  assert.match(await tafsirReply("تفسير ابن كثير البقرة 17"), /::tafsir ibnkathir::/);
  assert.match(await tafsirReply("تفسير السعدي البقرة 17"), /::tafsir saadi::/);
  assert.match(await tafsirReply("Bakara 17 İbn Kesir tefsiri"), /::tafsir ibnkathir::/);
  assert.match(await tafsirReply("тафсир ас-Саади Бакара 17"), /::tafsir saadi::/);
});

test("bütün 114 surənin ərəbcə adı (ال ilə/siz) × ayə nömrəsi × ərəbcə təfsir formaları", async () => {
  const T = [(n, a) => `تفسير ${n} ${a}`, (n, a) => `تفسير سورة ${n} ${a}`, (n, a) => `تفسير ${n} الآية ${a}`, (n, a) => `تفسير آية ${a} من ${n}`,
    (n, a) => `تفسير الآية ${a} من سورة ${n}`, (n, a) => `تفسير ${n} ${a}؟`, (n, a) => `  تفسير   ${n}   ${a}  ؟ `, (n, a) => `تفسير ${n} ${String(a).replace(/\d/g, (c) => "٠١٢٣٤٥٦٧٨٩"[c])}`];
  const bad = [];
  let total = 0;
  for (let i = 0; i < 114; i++) {
    const cnt = AYAH_COUNT[i];
    for (const a of new Set([1, 2, Math.ceil(cnt / 2), cnt])) {
      if (a > cnt) continue;
      for (const n of new Set([SURA_NAMES_AR[i], SURA_NAMES_AR[i].replace(/^ال/, "")])) {
        for (const f of T) {
          const q = f(n, a);
          total++;
          if (!isTafsir(await tafsirReply(q), i + 1, a, /muyassar/)) bad.push(q);
        }
      }
    }
  }
  assert.ok(total > 3000);
  assert.deepEqual(bad.slice(0, 10), []);
});

test("bütün 114 surənin az/tr/en/ru adı × ayə nömrəsi × təfsir formaları", async () => {
  const T = {
    az: [(n, a) => `${n} ${a} təfsir`, (n, a) => `təfsir ${n} ${a}`, (n, a) => `${n} ${a} təfsiri`, (n, a) => `${n} surəsi ${a}-ci ayənin təfsiri`, (n, a) => `${a}-ci ayə ${n} təfsiri`, (n, a) => `${n} ${a} təfsir?`],
    tr: [(n, a) => `${n} ${a} tefsiri`, (n, a) => `${n} suresi ${a}. ayet tefsiri`, (n, a) => `tefsir ${n} ${a}`],
    en: [(n, a) => `tafsir ${n} ${a}`, (n, a) => `tafsir of surah ${n} verse ${a}`, (n, a) => `${n} ${a} tafsir`],
    ru: [(n, a) => `тафсир ${n} ${a}`, (n, a) => `тафсир суры ${n} аят ${a}`, (n, a) => `${n} ${a} тафсир`],
  };
  const bad = [];
  let total = 0;
  for (let i = 0; i < 114; i++) {
    const cnt = AYAH_COUNT[i];
    const names = { az: SURAS[i].az, tr: SURAS[i].tr, en: SURAS[i].en, ru: SURAS[i].ru };
    for (const a of new Set([1, Math.ceil(cnt / 2), cnt])) {
      for (const lang of Object.keys(T)) for (const f of T[lang]) {
        const q = f(names[lang], a);
        total++;
        if (!isTafsir(await tafsirReply(q), i + 1, a, /muyassar/)) bad.push(q);
      }
    }
  }
  assert.ok(total > 3000);
  assert.deepEqual(bad.slice(0, 10), []);
});

test("köməkçilər: nömrə sona keçir; ayə cue-su olan «من سورة» sırası surə nömrəsi kimi oxunmur", () => {
  assert.equal(numberLast("الآية 4 سورة الفاتحة"), "الآية سورة الفاتحة 4");
  assert.equal(numberLast("17-ci ayə Bəqərə"), "ayə Bəqərə 17");
  assert.equal(numberLast("2:255"), "2:255");
  assert.equal(numberLast("Bəqərə 255-257"), "Bəqərə 255-257");
  assert.equal(parseTafsirQuery("تفسير، البقرة، 17").stripped, "البقرة 17");
  assert.equal(parseTafsirQuery("تفسيرالبقرة 17").stripped, "البقرة 17");
  // «сура Ан-Ниса 1» — «сура» işarə sözüdür, «sura an» adı deyil
  assert.deepEqual(ayahLookup("сура Ан-Ниса 1").reps.map((r) => [r.s, r.a1]), [[4, 1]]);
});

test("ümumi suallar təfsir sayılmır; «سورة الشرح» surə adıdır; təfsirsiz ayə sorğusu dəyişmir", async () => {
  for (const q of ["ما هو علم التفسير", "تفسير", "كم عدد آيات البقرة", "İbn Kəsir kimdir", "salam"]) {
    const r = await tafsirReply(q);
    assert.ok(r === null || !/::ayah /.test(r) || q === "تفسير", q);
  }
  assert.ok(isTafsir(await tafsirReply("تفسير سورة الشرح 3"), 94, 3));
  assert.ok(/::ayah 94:1-8::|::ayah 94:3::/.test((await tafsirReply("تفسير سورة الشرح")) || ""));
  assert.match((await chat({ message: "Bəqərə 255" })).reply, /^::ayah 2:255::/);
});
