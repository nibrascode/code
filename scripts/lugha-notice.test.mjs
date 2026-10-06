// Söz mənası (lüğət) sualları: «süni intellektdən din öyrənilməz» bildirişi çıxmır; həqiqi dini AI cavabında qalır.
import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/chat.js";
import { isLexicalQuestion, lexicalFollowup, parseLughaQuery, lookupWord, key, translitWord } from "../api/_lugha.js";
import { stripNotice, noticeBlock, OLD_AZ_NOTICE } from "../api/_notice.js";

async function run(body, ai = null) {
  const res = { setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const realFetch = globalThis.fetch;
  const prev = process.env.GROQ_API_KEY;
  const sent = [];
  if (ai) {
    process.env.GROQ_API_KEY = "test-key";
    globalThis.fetch = async (url, init) => {
      sent.push(JSON.parse(init.body));
      return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: ai } }] }) };
    };
  } else globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try {
    await handler({ method: "POST", body }, res);
  } finally {
    globalThis.fetch = realFetch;
    if (prev === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = prev;
  }
  return { ...res.body, sent };
}
const clean = (r, q) => {
  assert.ok(!r.notice, q + " notice:true olmamalıdır");
  assert.ok(!r.religious, q + " religious olmamalıdır");
  assert.ok(!String(r.reply).includes("::notice::"), q);
  assert.ok(!String(r.reply).includes("din öyrənilməz") && !r.reply.includes("لا يُؤخذ الدين"), q);
};

test("kök: التقوى→وقي, الأنبياء→نبأ, الملائكة→ألك, الأولياء→ولي", async () => {
  for (const [w, root] of [["التقوى", "وقى"], ["تقوى", "وقى"], ["والتقوى", "وقى"], ["المتقين", "وقى"], ["الأنبياء", "نبأ"], ["أنبياء", "نبأ"], ["الملائكة", "ألك"], ["الأولياء", "ولى"], ["الزكاة", "زكى"], ["الصلاة", "صلى"]]) {
    const h = await lookupWord(key(w));
    assert.ok(h, w);
    assert.equal(h.db.rows[h.idxs[0]][0], root, w);
  }
});

test("«ما معنى كلمة التقوى» lüğətə düşür (kəlimət-ut-təqva ifadəsi istisna deyil), «كلمة التوحيد» yox", async () => {
  assert.equal(parseLughaQuery("ما معنى كلمة التقوى").word, "التقوى");
  assert.equal(parseLughaQuery("ما معنى كلمة التوحيد"), null);
  const r = await run({ message: "ما معنى كلمة التقوى", noticeShown: false });
  assert.equal(r.usedAI, false);
  assert.ok(r.reply.includes("::src:: ابن فارس"));
  clean(r, "التقوى");
});

test("transliterasiya: təqva/taqwa/таква/sabr/iman sözlərinin mənası İbn Farisdən gəlir", async () => {
  const cases = [
    ["təqva sözünün mənası", "az"], ["taqwa ne demek", "tr"], ["what is the meaning of taqwa", "en"], ["что значит таква", "ru"],
    ["Allah sözünün mənası nədir", "az"], ["sabrın mənası", "az"], ["What does iman mean", "en"], ["zekat kelimesinin anlamı", "tr"],
  ];
  for (const [q, lang] of cases) {
    assert.ok(parseLughaQuery(q), q);
    const r = await run({ message: q, lang, history: [], noticeShown: false });
    assert.equal(r.usedAI, false, q);
    assert.ok(r.reply.includes("::src:: ابن فارس"), q);
    clean(r, q);
  }
  assert.equal(parseLughaQuery("Allahın sifətləri sözünün mənası"), null);
  assert.equal(parseLughaQuery("namaz necə qılınır"), null);
  assert.equal(translitWord("təqvanın mənası"), "تقوى");
});

test("isLexicalQuestion: 5 dildə lüğət sualları true, hökm/ayə/hədis/etiqad sualları false", () => {
  const yes = [
    "معنى كلمة علم", "ما معنى كلمة التقوى", "ماذا تعني كلمة الصبر", "ما معنى الحرام", "ما معنى الأنبياء",
    "təqva sözünün mənası", "ihlas sözünün mənası nədir", "الله sözünün mənası", "namaz kəlməsinin mənası", "sabr nə deməkdir ərəbcə صبر",
    "taqwa kelimesinin anlamı", "التقوى ne demek", "ihlas kelimesi ne demek",
    "что значит слово ихлас", "значение слова التقوى", "что означает слово الصلاة",
    "what does the word ihsan mean", "meaning of the word الزكاة", "what is the meaning of taqwa",
  ];
  for (const q of yes) assert.ok(isLexicalQuestion(q, { loose: true }), q);
  const no = [
    "ما حكم الموسيقى", "هل يجوز الربا", "ما معنى آية الكرسي", "ما معنى هذا الحديث", "ما معنى لا إله إلا الله", "ما معنى كلمة التوحيد",
    "Allahın sifətləri sözünün mənası", "musiqi dinləmək caizdirmi", "namaz necə qılınır", "oruc tutmağın hökmü nədir",
    "Bəqərə 255 mənası", "Fatihə surəsinin mənası", "can I pray with this meaning of the word", "можно ли слушать музыку", "is music haram",
    "hədis nə deməkdir", "fətva ver", "Selefilik nədir", "tövbə necə edilir",
  ];
  for (const q of no) assert.ok(!isLexicalQuestion(q, { loose: true }), q);
});

test("chat.js AI yolu: lüğət sualı (İbn Farisdə tapılmasa da) bildirişsiz; hint əlavə olunur; AI-nin özünün yazdığı xəbərdarlıq silinir", async () => {
  const qs = [
    ["kitman sözünün mənası nədir", "az"], ["what does the word kitman mean", "en"], ["что значит слово китман", "ru"],
    ["kitman kelimesi ne demek", "tr"], ["ما معنى كلمة كتمان", "ar"],
  ];
  for (const [q, lang] of qs) {
    const r = await run({ message: q, lang, history: [], noticeShown: false }, "Sözün mənası: səmimiyyət.");
    if (r.usedAI === false) { clean(r, q); continue; }
    assert.equal(r.usedAI, true, q);
    clean(r, q);
    assert.equal(r.reply, "Sözün mənası: səmimiyyət.");
    assert.ok(r.sent[0].messages.some((m) => m.role === "system" && m.content.includes("lüğət")), q + " sistem göstərişi");
  }
  // AI özü xəbərdarlıq yazarsa, silinir
  const r = await run({ message: "kitman sözünün mənası nədir", lang: "az", history: [], noticeShown: false }, OLD_AZ_NOTICE + "\n\nİxlas səmimiyyət deməkdir.");
  clean(r, "ai-notice");
  assert.equal(r.reply, "İxlas səmimiyyət deməkdir.");
});

test("chat.js: dini AI cavabında da İbn Sirin bildirişi yoxdur", async () => {
  for (const q of ["Namazda saqqız çeynəmək caizdirmi?", "ما حكم الصلاة بالتيشرت المطبوع", "is crypto trading haram in islam", "Allahın sifətləri sözünün mənası"]) {
    const r = await run({ message: q, history: [], noticeShown: false }, "Cavab.");
    assert.ok(!r.notice, q);
    assert.ok(!String(r.reply).includes("::notice::"), q);
    assert.ok(!/sirin|din öyrənilməz/i.test(String(r.reply)), q);
  }
  const d = await run({ message: "الحرام ne demek", history: [], noticeShown: false });
  clean(d, "الحرام");
});

test("chat.js: hazır dini cavab da bildirişsizdir", async () => {
  const a = await run({ message: "Selefilik nədir", history: [], noticeShown: false });
  assert.ok(!a.notice);
  assert.ok(!a.reply.startsWith("::notice::"));
  assert.ok(!/sirin/i.test(a.reply));
  const b = await run({ message: "Allahın sifətləri sözünün mənası", history: [], noticeShown: false }, "Cavab.");
  assert.ok(!b.notice);
  assert.ok(!b.reply.includes("::notice::"));
  assert.ok(!/sirin/i.test(b.reply));
});

test("davam: əvvəlki mesaj söz mənası idisə, təkcə ərəbcə söz də lüğət sualıdır (history ilə)", async () => {
  const hist = [{ role: "user", text: "معنى كلمة علم" }, { role: "assistant", text: "الكلمة «علم»…" }, { role: "user", text: "الصبر" }];
  assert.equal(lexicalFollowup("الصبر", hist), "ما معنى الصبر");
  assert.equal(lexicalFollowup("الصبر", [{ role: "user", text: "salam" }]), null);
  assert.equal(lexicalFollowup("الصبر", []), null);
  assert.equal(lexicalFollowup("ما معنى الصبر", hist), null);
  const r = await run({ message: "الصبر", messages: hist, noticeShown: false });
  assert.equal(r.usedAI, false);
  assert.ok(r.reply.includes("::src:: ابن فارس"));
  clean(r, "davam");
  // history-siz «الصبر» adi davranışdadır (lüğət deyil)
  const n = await run({ message: "الصبر", messages: [{ role: "user", text: "salam" }], noticeShown: false }, "Cavab.");
  assert.equal(n.usedAI, true);
  // history ilə, latın sorğuda: əvvəlki mesajlar olsa da lüğət
  const h2 = await run({ message: "təqva sözünün mənası", history: [{ role: "user", text: "salam" }, { role: "assistant", text: "Salam!" }], noticeShown: false });
  clean(h2, "hist");
});

test("stripNotice: blok, köhnə mətn və 5 dildə lead silinir; adi mətn toxunulmaz", () => {
  for (const l of ["az", "tr", "en", "ru", "ar"]) assert.equal(stripNotice(noticeBlock(l) + "\n\nMətn"), "Mətn", l);
  assert.equal(stripNotice(OLD_AZ_NOTICE + "\n\nMətn"), "Mətn");
  assert.equal(stripNotice("Adi mətn"), "Adi mətn");
});
