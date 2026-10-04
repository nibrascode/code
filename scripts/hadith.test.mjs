// Kütübü-sittə hədis axtarışı: süni intellektsiz, sözbəsöz, dərəcəsi ilə; digər handlerləri oğurlamır.
import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/chat.js";
import { norm, stem, tokens } from "../api/_hadith/tok.js";
import { hadithReply, hadithBare, searchHadith, parseHadithQuery, parseNumberQuery, parseBareArabic, getHadith, gradeLine, sourceLine, __loadIndex, PAGE, MAX_LIST } from "../api/_hadith.js";

async function run(body, ai = null) {
  const res = { setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const realFetch = globalThis.fetch;
  const prev = process.env.GROQ_API_KEY;
  if (ai) {
    process.env.GROQ_API_KEY = "test-key";
    globalThis.fetch = async () => ({ ok: true, status: 200, json: async () => ({ choices: [{ message: { content: ai } }] }) });
  } else globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try {
    await handler({ method: "POST", body }, res);
  } finally {
    globalThis.fetch = realFetch;
    if (prev === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = prev;
  }
  return res.body;
}
const count = (s, re) => (String(s).match(re) || []).length;

test("normallaşdırma: tәşkil, hamzə, ya/ta marbuta, prefikslər", () => {
  assert.equal(norm("إِنَّمَا الأَعْمَالُ"), "انما الاعمال");
  assert.deepEqual(tokens("النية"), tokens("بالنيات"));
  assert.deepEqual(tokens("الصبر"), tokens("والصبر"));
  assert.deepEqual(tokens("الصَّلَاةُ نُورٌ"), tokens("والصلاة نور"));
  assert.ok(tokens("حَدَّثَنَا").length === 1);
});

test("axtarış: «إنما الأعمال بالنيات» Buxari 1-i birinci tapır, Müslim və Sünən də var", async () => {
  const r = await searchHadith("إنما الأعمال بالنيات");
  assert.ok(r.list.length >= 6);
  const idx = await __loadIndex();
  const first = await getHadith(idx, r.list[0]);
  assert.equal(first.bookId, "735");
  assert.equal(first.noInt, 1);
  const books = new Set();
  for (const g of r.list) books.add((await getHadith(idx, g)).bookId);
  assert.ok(books.has("1727") && books.has("117359"));
  // sıra: kitab sırası (Buxari, Müslim, Sünən)
  const order = [];
  for (const g of r.list.slice(0, r.exact)) order.push(g);
  assert.deepEqual(order, order.slice().sort((a, b) => a - b));
});

test("«حديث إنما الأعمال بالنيات»: sözbəsöz, mənbə sətri, dərəcə, 5-lik səhifə və AI yoxdur", async () => {
  const r = await run({ message: "حديث إنما الأعمال بالنيات", noticeShown: false });
  assert.equal(r.usedAI, false);
  assert.ok(!r.notice);
  assert.ok(!r.reply.includes("::notice::"));
  assert.ok(norm(r.reply).includes("انما الاعمال بالنيات"));
  assert.ok(/^::src:: البخاري، صحيح البخاري، كتاب [^\n]*، باب [^\n]*، رقم 1 \(ت البغا\)$/m.test(r.reply));
  assert.ok(r.reply.includes("::src:: الحكم: صحيح — أخرجه البخاري"));
  assert.ok(count(r.reply, /^::tafsir hadith::$/gm) <= PAGE);
  assert.ok(/::ctx:: hadith q 5 /.test(r.reply));
});

test("hər kitabda dərəcə sətri var, çatışmayanda «غير مذكور في هذه النشرة»", async () => {
  const idx = await __loadIndex();
  const total = idx.N;
  const seen = {};
  let missing = 0;
  for (let g = 0; g < total; g += 211) {
    const h = await getHadith(idx, g);
    const gl = gradeLine(h);
    assert.ok(gl.startsWith("الحكم: "), gl);
    seen[h.bookId] = gl;
    if (gl.includes("غير مذكور في هذه النشرة")) missing++;
    assert.ok(sourceLine(h).includes("رقم "));
    assert.ok(!/<[a-z\/][^>]*>/i.test(h.text), "HTML qalığı: " + h.no);
    assert.ok(h.text.trim().length > 5);
  }
  assert.equal(Object.keys(seen).length, 6);
  assert.ok(missing > 0);
  assert.ok(seen["735"].includes("البخاري") && seen["1727"].includes("مسلم"));
  assert.ok(seen["1194"].includes("الألباني"));
  assert.ok(/الأرنؤوط/.test(seen["117359"]) && /الأرنؤوط/.test(seen["1363"]) || /محقق/.test(seen["1363"]));
});

test("tetikleyicilər: az/tr/en/ru + ərəb ifadə və mövzu", () => {
  assert.equal(parseHadithQuery("hədis axtar: إنما الأعمال بالنيات").phrase.trim(), "إنما الأعمال بالنيات");
  assert.equal(parseHadithQuery("حديث إنما الأعمال بالنيات").phrase, "إنما الأعمال بالنيات");
  assert.equal(parseHadithQuery("hadith about intention").phrase, "النية");
  assert.equal(parseHadithQuery("حديث عن الصبر").phrase, "الصبر");
  assert.equal(parseHadithQuery("хадис о намерении").phrase, "النية");
  assert.equal(parseHadithQuery("hadis niyet hakkında").phrase, "النية");
  assert.equal(parseHadithQuery("hədis «الصلاة نور» tap").phrase, "الصلاة نور");
  assert.equal(parseHadithQuery("hədis axtar").mode, "usage");
  assert.equal(parseHadithQuery("hədis nədir"), null);
  assert.equal(parseHadithQuery("hədis nədir?"), null);
});

test("hədis nömrəsi: Buxari 1, صحيح البخاري 1, Müslim 8 (variantlar), İbn Macə 100, Nəsai 5", async () => {
  assert.deepEqual(parseNumberQuery("صحيح البخاري 1"), parseNumberQuery("Buxari 1 hədis"));
  assert.ok(parseNumberQuery("Müslim 8"));
  const r = await run({ message: "صحيح البخاري 1", noticeShown: false });
  assert.equal(r.usedAI, false);
  assert.equal(count(r.reply, /^::tafsir hadith::$/gm), 1);
  assert.ok(norm(r.reply).includes("انما الاعمال بالنيات"));
  assert.ok(!/::sb::/.test(r.reply));
  const m = await hadithReply("Müslim 8", []);
  assert.ok(count(m, /^::tafsir hadith::$/gm) >= 1);
  assert.ok(m.includes("::src:: مسلم، صحيح مسلم"));
  const ib = await hadithReply("hədis İbn Macə 100", []);
  assert.ok(ib.includes("ابن ماجه، سنن ابن ماجه") && ib.includes("رقم 100"));
  const ns = await hadithReply("Nəsai 5 hədis", []);
  assert.ok(ns.includes("النسائي، سنن النسائي") && ns.includes("رقم 5 "));
  const big = await hadithReply("hədis Buxari 99999", []);
  assert.ok(big.includes("7123") && !big.includes("::tafsir"));
});

test("səhifələmə: ilk 5, sonra «davam» / «Daha çox göstər» ardıcıl və təkrarsız, sonda bitir", async () => {
  let hist = [];
  const q = "hədis axtar: الصلاة نور";
  let r = await hadithReply(q, hist);
  const head = /(\d+) hədis tapıldı/.exec(r);
  assert.ok(head, r.slice(0, 120));
  const n = Number(head[1]);
  assert.ok(n > PAGE);
  assert.ok(r.includes("Daha çox göstər") && r.includes("| davam"));
  const seenNo = [];
  const collect = (t) => { for (const m of t.matchAll(/^::tl:: (\d+)\/(\d+) /gm)) seenNo.push(Number(m[1])); };
  collect(r);
  let msgs = 0;
  while (r && msgs < 20) {
    hist = [...hist, { role: "user", text: q }, { role: "assistant", text: r }];
    if (!/::sb::/.test(r)) break;
    r = await hadithReply(msgs % 2 ? "Daha çox göstər" : "davam", hist);
    assert.ok(r);
    collect(r);
    msgs++;
  }
  assert.deepEqual(seenNo, Array.from({ length: n }, (_, i) => i + 1));
  assert.ok(!/::sb::/.test(r));
  // tarixçə yoxdursa «davam» bu handlerə düşmür
  assert.equal(await hadithReply("davam", []), null);
});

test("çox geniş sorğu («حديث قال»): siyahı verilmir, dəqiqləşdirmə istənir", async () => {
  const r = await run({ message: "حديث قال", noticeShown: false });
  assert.equal(r.usedAI, false);
  assert.ok(!r.reply.includes("::tafsir"));
  assert.ok(/\d{4,}/.test(r.reply));
  assert.ok(MAX_LIST < 1000);
});

test("tapılmayan ifadə: qısa cavab, AI yox", async () => {
  const r = await run({ message: "hədis axtar: زبرجد قرنفل سندباد", noticeShown: false });
  assert.equal(r.usedAI, false);
  assert.ok(!r.reply.includes("::tafsir"));
  assert.ok(r.reply.length < 400);
});

test("bare ərəb cümləsi dəqiq hədis ifadəsidirsə hədis qaytarır, adi cümlə düşmür", async () => {
  assert.ok(parseBareArabic("إنما الأعمال بالنيات وإنما لكل امرئ ما نوى"));
  const r = await hadithBare("إنما الأعمال بالنيات وإنما لكل امرئ ما نوى");
  assert.ok(r && r.includes("::tafsir hadith::"));
  assert.equal(await hadithBare("كيف حالك اليوم يا صديقي العزيز"), null);
  assert.equal(await hadithBare("hello how are you doing today"), null);
});

test("digər handlerləri oğurlamır: ayə, təfsir, lüğət, nəhv, adi söhbət", async () => {
  for (const m of ["Bəqərə 255", "تفسير الفاتحة", "معنى كلمة علم", "ما معنى كلمة الحديث", "ما إعراب الفاعل", "ما إعراب كلمة حديث", "Salam necəsən", "hədis nədir", "namaz nədir", "اعراب إنما الأعمال بالنيات"]) {
    assert.equal(await hadithReply(m, []), null, m);
    assert.equal(await hadithBare(m), null, m);
  }
  const ayah = await run({ message: "Bəqərə 255", noticeShown: false });
  assert.ok(!ayah.reply.includes("::tafsir hadith::"));
  const lex = await run({ message: "معنى كلمة علم", noticeShown: false });
  assert.ok(lex.reply.includes("ابن فارس") && !lex.reply.includes("hadith"));
});

test("hədis cavabında dini bildiriş yoxdur (noticeShown:false), AI sorğusuna ::ctx:: sızmır", async () => {
  const r = await run({ message: "hədis axtar: الصلاة نور", noticeShown: false });
  assert.ok(!r.notice && r.usedAI === false);
  assert.ok(!r.reply.includes("din öyrənilməz"));
  const r2 = await run({ message: "davam", noticeShown: true, messages: [{ role: "user", text: "hədis axtar: الصلاة نور" }, { role: "assistant", text: r.reply }] });
  assert.ok(r2.reply.includes("::tafsir hadith::") && r2.reply.includes("6/"));
  assert.ok(!r2.notice);
});

// ---- Çatışan hədislərin doldurulması (Buxari: Buğa 1407 + Tavq; Əbu Davud: alt qeyddən; Müslim: düzgün nömrələmə)
test("Buxari 25 (Şamilədə mətni yox idi) nömrə ilə və sözlə tapılır, mənbə sətrində tamamlama qeydi var", async () => {
  const r = await run({ message: "صحيح البخاري 25", noticeShown: false });
  assert.match(r.reply, /::tl:: 1\/1 · البخاري · رقم 25/);
  assert.ok(norm(r.reply).includes("امرت ان اقاتل الناس حتي يشهدوا"));
  assert.match(r.reply, /::src:: [^\n]*رقم 25 \(ت البغا — نص مكمَّل من نشرة أخرى[^\n]*\)/);
  assert.ok(!/::src:: [^\n]*رقم 1 \(ت البغا — /.test((await run({ message: "صحيح البخاري 1", noticeShown: false })).reply));
  const w = await run({ message: "حديث أمرت أن أقاتل الناس حتى يشهدوا أن لا إله إلا الله", noticeShown: false });
  assert.match(w.reply, /رقم 25\b/);
  assert.ok(!/AI|openai/i.test(w.reply));
});

test("Buxari: doldurulmuş boşluq nömrələri (yalnız alt qeyd qalmış olanlar) mətnlə gəlir", async () => {
  for (const n of [26, 3299, 7050]) {
    const r = await run({ message: "صحيح البخاري " + n, noticeShown: false });
    assert.match(r.reply, new RegExp("::tl:: 1/1 · البخاري · رقم " + n + "\\n"), "Buxari " + n);
    assert.match(r.reply, new RegExp("رقم " + n + " \\(ت البغا"));
  }
});

test("Əbu Davud: alt qeyd blokunda qalmış hədislər (1114, 1938, 3382, 5220) tapılır, 594 yoxdur", async () => {
  for (const [n, frag] of [[1114, "فلياخُذ بأنفه"], [1938, "كان أهلُ الجاهلية لا يُفِيضُونَ"], [3382, "سيأتي على الناس زمانٌ عَضُوضٌ"]]) {
    const r = await run({ message: "أبو داود " + n, noticeShown: false });
    assert.ok(r.reply.includes(frag), "Əbu Davud " + n);
    assert.match(r.reply, new RegExp("رقم " + n + " \\(ت الأرنؤوط\\)"));
  }
  assert.match((await run({ message: "سنن أبي داود 5220", noticeShown: false })).reply, /::tl:: 1\/1 · أبو داود · رقم 5220/);
  const none = await run({ message: "Ebu Davud 594", noticeShown: false });
  assert.ok(!/::tl::/.test(none.reply));
});

test("Müslim: yanlış nömrələnmiş hədislər düzəldildi (822 — 6 hədis, 2183)", async () => {
  const r = await run({ message: "مسلم 822", noticeShown: false });
  assert.match(r.reply, /822: 6 حديثًا/);
  assert.match((await run({ message: "مسلم 2183", noticeShown: false })).reply, /::tl:: 1\/2 · مسلم · رقم 2183/);
});

test("çərçivə qeydi (edNote) heç bir dildə və heç bir səhifədə çıxmır", async () => {
  for (const lang of ["az", "tr", "en", "ru", "ar"]) {
    const r = await run({ message: "حديث إنما الأعمال بالنيات", lang, history: [], noticeShown: false });
    assert.ok(/::ctx:: hadith q 5 /.test(r.reply));
    assert.ok(!r.reply.includes("::note::"), lang + ": ::note::");
    assert.ok(!/Albani|Arnaut|Arna'ut|Албани|Арнаут|süni intellektsiz|without AI|без ИИ|دون ذكاء/i.test(r.reply), lang);
    const m = r.reply.match(/::ctx:: hadith q 5 \S+ \S+/);
    const r2 = await run({ message: "davam", lang, messages: [{ role: "user", text: "hədis axtar: إنما الأعمال بالنيات" }, { role: "assistant", text: r.reply }], noticeShown: true });
    assert.ok(/::ctx:: hadith q 10 /.test(r2.reply), lang + " p2 ctx");
    assert.ok(!String(r2.reply).includes("::note::"), lang + " p2");
  }
});
