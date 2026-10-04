// Bəqərə surəsi sözlərinin izahı: məlumat bütövlüyü, uyğunlaşdırma və chat.js bağlantısı.
import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import BAQARA from "../api/_quran/baqara.js";
import { quranReply, normAr, MAX_AYAH, MIN_AYAH, __internals } from "../api/_quran.js";
import handler from "../api/chat.js";

const FOOTER = "Mənbə: Bəqərə surəsi 1–59-cu ayələrdəki sözlərin izahı (hazır cavab)";

test("məlumat: 128 sətir, boş sahə yoxdur, ayələr 1–59", () => {
  assert.equal(BAQARA.length, 128);
  assert.equal(MIN_AYAH, 1);
  assert.equal(MAX_AYAH, 59);
  for (const e of BAQARA) {
    assert.equal(e.surah, 2);
    assert.ok(Number.isInteger(e.ayah) && e.ayah >= 1 && e.ayah <= 59, JSON.stringify(e));
    for (const k of ["word", "ar", "az"]) assert.ok(typeof e[k] === "string" && e[k].trim().length > 0, `${e.ayah} ${e.word}: ${k}`);
    assert.ok(/[\u0600-\u06FF]/.test(e.word) && /[\u0600-\u06FF]/.test(e.ar));
    assert.ok(/[A-Za-zƏəıİöÖüÜğĞşŞçÇ]/.test(e.az), `${e.ayah} ${e.word}: az latın hərfi yoxdur`);
    assert.ok(!/yarat/i.test(e.az), `${e.ayah} ${e.word}: «yarat» işlənməməlidir`);
  }
  const ids = __internals.ENTRIES.map((e) => e.id);
  assert.equal(new Set(ids).size, ids.length);
  const pairs = BAQARA.map((e) => e.ayah + "|" + e.word);
  assert.equal(new Set(pairs).size, pairs.length, "eyni ayədə təkrar söz");
  const sorted = BAQARA.every((e, i) => i === 0 || e.ayah >= BAQARA[i - 1].ayah);
  assert.ok(sorted, "ayələr artan sıradadır");
});

test("ﷺ saxlanıb", () => {
  const withSalawat = BAQARA.filter((e) => e.ar.includes("ﷺ"));
  assert.equal(withSalawat.length, 2);
  for (const e of withSalawat) assert.ok(e.az.includes("ﷺ"), e.word);
  assert.ok(BAQARA.find((e) => e.ayah === 4 && e.word.includes("إِلَيْكَ")).az.includes("ﷺ"));
});

test("ərəb normallaşdırma", () => {
  assert.equal(normAr("المُفْلِحُونَ"), normAr("المفلحون"));
  assert.equal(normAr("أَبَىٰ"), normAr("ابى"));
  assert.equal(normAr("هَٰؤُلَاءِ"), normAr("هؤلاء"));
  assert.equal(normAr("الْكِتَابُ"), "الكتاب");
});

function ayahsIn(reply) {
  return [...reply.matchAll(/\((?:(\d+)-\S+ ayə|الآية (\d+))\)/g)].map((m) => Number(m[1] || m[2]));
}

const POSITIVE = [
  // [sorğu, gözlənilən ayə(lər), cavabda olmalı mətn]
  ["Bəqərə 25-ci ayə sözlərin mənası", [25], "وَبَشِّرِ"],
  ["Bəqərə surəsi 1-10 ayə izahı", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "الْمُفْلِحُونَ"],
  ["البقرة آية 7 معاني الكلمات", [7], "غِشَاوَةٌ"],
  ["Bəqərə 3-cü ayə", [3], "بِالْغَيْبِ"],
  ["Bəqərə 2:30", [30], "خَلِيفَةً"],
  ["bəqərə 58-ci ayə", [58], "حِطَّةٌ"],
  ["المفلحون", [5], "الفائزون"],
  ["الْمُفْلِحُونَ", [5], "الفائزون"],
  ["غشاوة", [7], "غِشَاوَةٌ"],
  ["ما معنى غشاوة", [7], "غِشَاوَةٌ"],
  ["معنى المتقين", [2], "لِلْمُتَّقِينَ"],
  ["ما معنى لا ريب فيه", [2], "لَا رَيْبَ فِيهِ"],
  ["تفسير يخادعون", [9], "يُخَادِعُونَ"],
  ["ابى", [34], "أَبَىٰ"],
  ["هؤلاء الاسماء", [31], "الْأَسْمَاءَ"],
  ["muflihun mənası", [5], "الْمُفْلِحُونَ"],
  ["muttəqin nə deməkdir", [2], "لِلْمُتَّقِينَ"],
  ["xatəmə Bəqərə", [7], "خَتَمَ"],
  ["ğişavə Bəqərə mənası", [7], "غِشَاوَةٌ"],
  ["yuhadiun Bəqərə mənası", [9], "يُخَادِعُونَ"],
  ["Quranda mustehziun sözünün mənası", [14], "مُسْتَهْزِئُونَ"],
  ["yuqimun Bəqərə izah", [3], "وَيُقِيمُونَ"],
  ["fasiqin Bəqərə mənası", [26, 59], "الْفَاسِقِينَ"],
  ["رغدا", [35, 58], "رَغَدًا"],
  ["الكتاب", [2, 44, 53], "الْكِتَابُ"],
  ["ما معنى الكتاب في سورة البقرة", [2, 44, 53], "الْكِتَابَ"],
  ["rağadən Bəqərə mənası", [35, 58], "رَغَدًا"],
  ["الظالمين Bəqərə", [35], "الظَّالِمِينَ"],
  ["Bəqərə 4-cü ayə mənası", [4], "وَمَا أُنزِلَ مِن قَبْلِكَ"],
  ["Bəqərə surəsi 40-cı ayə", [40], "وَأَوْفُوا بِعَهْدِي"],
  ["Bəqərə 55-ci ayə", [55], "الصَّاعِقَةُ"],
  ["Bəqərə 59 ayə", [59], "رِجْزًا"],
  ["Baqarah verse 7 meaning", [7], "غِشَاوَةٌ"],
  ["ريب", [2, 23], "رَيْبٍ"],
];

for (const [q, ayahs, must] of POSITIVE) {
  test(`müsbət: ${q}`, () => {
    const r = quranReply(q);
    assert.ok(r, "cavab gözlənilirdi");
    assert.ok(r.includes(must), `«${must}» tapılmadı:\n${r}`);
    const found = new Set(ayahsIn(r));
    for (const a of ayahs) assert.ok(found.has(a), `${a}-ci ayə yoxdur: ${[...found]}`);
    const isAr = /[\u0600-\u06FF]/.test(q);
    assert.ok(r.includes(isAr ? "المصدر: شرح كلمات سورة البقرة" : FOOTER), "mənbə sətri");
  });
}

test("dil: Azərbaycan sorğusuna Azərbaycan cavabı, ərəb sorğusuna ərəb", () => {
  const az = quranReply("Bəqərə 3-cü ayə");
  assert.ok(az.startsWith("Bəqərə surəsi, 3-cü ayə"));
  assert.ok(az.includes("Mənası:") && az.includes("Ərəbcə izah:"));
  const ar = quranReply("البقرة آية 3");
  assert.ok(ar.startsWith("سورة البقرة، الآية 3"));
  assert.ok(!ar.includes("Mənası"));
});

test("aralıq: 1-59 qısaldılır və davamı təklif edilir", () => {
  const r = quranReply("Bəqərə 1-59");
  assert.ok(r);
  const words = (r.match(/^\d+\) /gm) || []).length;
  assert.ok(words <= 25 && words >= 10, `söz sayı: ${words}`);
  assert.match(r, /\n::sug::\n::sb:: Davamı: Bəqərə \d+-\d+ \| Bəqərə \d+-\d+\n::\/sug::/);
  assert.ok(!r.includes("aralığı daralt"));
  assert.ok(r.includes(FOOTER));
});

test("aralıq: bir neçə ayə və sözləri olmayan ayə", () => {
  const r = quranReply("Bəqərə 10-12 ayə mənası");
  assert.ok(r.includes("مَرَضٌ") && r.includes("لَا تُفْسِدُوا"));
  const empty = quranReply("Bəqərə 12-ci ayə sözlərin mənası");
  assert.ok(/Bu aralıqda cədvəldə izah olunan söz yoxdur/.test(empty));
});

test("surə adı var, ayə yoxdur: aralıq təklif edilir", () => {
  const r = quranReply("Bəqərə surəsi sözlərin mənası");
  assert.ok(r && r.includes("Bəqərə 25-ci ayə") && r.includes("Sözləri olan ayələr"));
});

test("59-dan böyük ayə: qısa sabit mesaj", () => {
  const r = quranReply("Bəqərə 100-cü ayə sözlərin mənası");
  assert.ok(r.startsWith("Hazırda yalnız Bəqərə surəsi 1–59-cu ayələrdəki"));
  const ar = quranReply("البقرة آية 255 معنى الكلمات");
  assert.ok(ar.startsWith("حاليًا يتوفر فقط"));
  assert.equal(quranReply("Bəqərə 255-ci ayənin fəziləti"), null);
});

const NEGATIVE = [
  "salam",
  "necəsən",
  "Bəqərə nə vaxt nazil olub",
  "Bəqərə surəsi neçə ayədir",
  "python kod",
  "python ilə hesab maşını yaz",
  "kitab oxumaq istəyirəm",
  "bu kitabın mənası nədir",
  "xəta mənası",
  "array sözünün mənası nədir",
  "funksiya nə deməkdir",
  "namaz necə qılınır",
  "Quran oxumaq istəyirəm",
  "Yasin surəsi 5-ci ayə",
  "ayə nədir",
  "2+2 nə edər",
  "what does API mean",
  "السلام عليكم",
  "كيف حالك",
  "الله أكبر",
  "من",
  "أو",
  "ما معنى الإسلام او الدين",
  "ما معنى الحياة",
  "что значит API",
];

for (const q of NEGATIVE) {
  test(`mənfi (null): ${q}`, () => {
    assert.equal(quranReply(q), null);
  });
}

test("chat.js: hazır cavab AI-yə getmir və dinReply-dən əvvəl gəlir", async () => {
  const realFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    throw new Error("şəbəkə çağırışı olmamalıdır");
  };
  try {
    for (const message of ["Bəqərə 3-cü ayə", "Bəqərə surəsi 1-10 ayə izahı", "المفلحون", "Quranda ğişavə mənası"]) {
      const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
      await handler({ method: "POST", body: { message } }, res);
      assert.equal(res.code, 200);
      assert.equal(res.body.success, true);
      assert.ok(res.body.reply.includes("Mənbə:") || res.body.reply.includes("المصدر:"), message);
      assert.ok(!res.body.reply.startsWith("İlk olaraq: süni intellektdən"), message);
    }
    assert.equal(calls, 0);
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("node --check", () => {
  for (const f of ["api/_quran.js", "api/_quran/baqara.js", "api/chat.js", "scripts/quran.test.mjs"]) {
    const r = spawnSync(process.execPath, ["--check", f], { encoding: "utf-8" });
    assert.equal(r.status, 0, f + "\n" + r.stderr);
  }
});
