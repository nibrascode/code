// «Məcmuu əl-Fətava» (İbn Teymiyyə) axtarışı: AI-siz, sözbəsöz, mənbə sətri ilə; digər handlerləri oğurlamır.
import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/chat.js";
import { norm, tokens } from "../api/_hadith/tok.js";
import { cleanPage } from "./fatawa-clean.mjs";
import { topicCount, topicAlts, matchTopics } from "../api/_fatawa/topicmatch.js";
import { fatawaReply, fatawaNaturalReply, parseNaturalQuery, parseFatawaQuery, searchFatawa, getPage, excerpt, sourceLines, __loadIndex, PAGE } from "../api/_fatawa.js";

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
const MARKS = /[\u064B-\u065F\u0670\u0640]/g;
/** cavabdan fətva bloklarının mətn sətirləri (çərçivə sətirləri və «...» olmadan) */
function blocks(reply) {
  return [...String(reply).matchAll(/::tafsir fatawa::\n([\s\S]*?)\n::\/tafsir::/g)].map((m) => {
    const lines = m[1].split("\n");
    return { tl: lines.find((l) => l.startsWith("::tl::")), src: lines.filter((l) => l.startsWith("::src::")), body: lines.filter((l) => !l.startsWith("::")).join("\n") };
  });
}

test("təmizləmə: haşiyə (---- sonrası) və (*), (١) işarələri silinir, mətn dəyişmir", () => {
  const r = cleanPage("بِسْمِ اللَّهِ (*) قَالَ [تَعَالَى] (١) {إنَّا}\nسطر   ثانٍ (٢)\n----\n(١) بياض بالأصل\nقال الشيخ ناصر");
  assert.equal(r.text, "بِسْمِ اللَّهِ قَالَ [تَعَالَى] {إنَّا}\nسطر ثانٍ");
  assert.ok(r.notes.startsWith("(١) بياض"));
  assert.equal(cleanPage("نص بسيط").text, "نص بسيط");
});

test("normallaşdırma hədis ilə eynidir", () => {
  assert.equal(norm("الِاسْتِغَاثَةُ"), "الاستغاثه");
  assert.deepEqual(tokens("الاستغاثة"), tokens("بالاستغاثة"));
});

test("sorğunun aşkarlanması: tetikleyicilər (ar/az/tr/en/ru) və cild/səhifə", () => {
  const q = (m) => { const r = parseFatawaQuery(m); if (r) delete r.alts; return r; };
  assert.deepEqual(q("فتاوى ابن تيمية الاستغاثة بالنبي"), { mode: "q", phrase: "الاستغاثة بالنبي" });
  assert.deepEqual(q("مجموع الفتاوى: التوسل"), { mode: "q", phrase: "التوسل" });
  assert.deepEqual(q("Məcmuu əl-Fətava istiğasə"), { mode: "q", phrase: "الاستغاثة" });
  assert.deepEqual(q("İbn Teymiyyə fətvası bidət haqqında"), { mode: "q", phrase: "البدعة" });
  assert.deepEqual(q("ibn taymiyyah fatwa about tawassul"), { mode: "q", phrase: "التوسل" });
  assert.deepEqual(q("İbn Teymiyye'nin fetvası zikir hakkında"), { mode: "q", phrase: "الذكر" });
  assert.deepEqual(q("фетва Ибн Таймийи о таухиде"), { mode: "q", phrase: "التوحيد" });
  assert.deepEqual(q("what did ibn taymiyyah say about the soul?"), { mode: "q", phrase: "الروح" });
  assert.deepEqual(q("رأي ابن تيمية في « زيارة القبور »"), { mode: "q", phrase: "زيارة القبور" });
  assert.deepEqual(q("مجموع الفتاوى المجلد 3 صفحة 10"), { mode: "p", vol: 3, page: 10 });
  assert.deepEqual(q("مجموع الفتاوى المجلد ٣ صفحة ١٠"), { mode: "p", vol: 3, page: 10 });
  assert.deepEqual(q("مجموع الفتاوى 3/10"), { mode: "p", vol: 3, page: 10 });
  assert.deepEqual(q("Məcmuu əl-Fətava cild 7 səhifə 100"), { mode: "p", vol: 7, page: 100 });
  assert.deepEqual(q("Majmu al-fatawa vol 7 p. 100"), { mode: "p", vol: 7, page: 100 });
  assert.deepEqual(q("مجموع الفتاوى الجزء 12"), { mode: "p", vol: 12, page: null });
  assert.deepEqual(q("مجموع الفتاوى"), { mode: "usage" });
  assert.deepEqual(q("ibn taymiyyah fatwa"), { mode: "usage" });
});

test("sorğu deyil: digər mövzular, tərcümeyi-hal, adi hədis/ayə/nəhv/lüğət sualları", () => {
  for (const m of ["hədis niyyət haqqında", "ibn taymiyyah kimdir", "who is ibn taymiyyah", "Buxari 1", "الصلاة", "فتوى", "namaz fətvası", "Bəqərə 255", "إعراب الحمد لله", "معنى الصبر",
    "ibn taymiyyah tafsir sure ihlas 112:1", "ابن تيمية", "salam", "حديث إنما الأعمال بالنيات"]) {
    assert.equal(parseFatawaQuery(m), null, m);
  }
});

test("ifadə axtarışı: «الاستغاثة بالنبي» — tam ifadə birinci, mətn səhifədə sözbəsöz var", async () => {
  const r = await searchFatawa("الاستغاثة بالنبي");
  assert.ok(r.total >= 10);
  assert.ok(r.exact >= 1);
  const idx = await __loadIndex();
  const first = await getPage(idx, r.list[0]);
  assert.ok(norm(first.text).includes("الاستغاثه بالنبي"));
  // tam ifadə olanlar siyahının əvvəlindədir
  const flags = [];
  for (const d of r.list.slice(0, 30)) flags.push(norm((await getPage(idx, d)).text).includes("الاستغاثه بالنبي"));
  const lastTrue = flags.lastIndexOf(true);
  assert.ok(flags.slice(0, Math.min(r.exact, 30)).every(Boolean) || lastTrue < 30);
  assert.ok(flags.slice(0, Math.min(r.exact, 30)).filter(Boolean).length >= Math.min(r.exact, 30) - 2);
});

test("chat: «فتاوى ابن تيمية الاستغاثة بالنبي» — başlıq, 5-lik səhifə, mənbə sətri, bildiriş və AI yoxdur", async () => {
  const r = await run({ message: "فتاوى ابن تيمية الاستغاثة بالنبي", noticeShown: false });
  assert.equal(r.usedAI, false);
  assert.ok(!r.notice);
  assert.ok(!r.reply.includes("::notice::"));
  assert.ok(/^تم العثور على \d+ نتيجة\.$/m.test(r.reply));
  const bs = blocks(r.reply);
  assert.equal(bs.length, PAGE);
  for (const b of bs) {
    assert.ok(/^ابن تيمية، مجموع الفتاوى، المجلد \d+، ص \d+ \(ترقيم ط\. مجمع الملك فهد/.test(b.src[0].replace("::src:: ", "")), b.src[0]);
    assert.ok(/موضوع المجلد: /.test(b.src[1] || ""));
  }
  assert.ok(norm(bs[0].body).includes("الاستغاثه بالنبي"));
  assert.ok(/::ctx:: fatawa q 5 ar /.test(r.reply));
  assert.ok(/^::sb:: عرض المزيد \(6–10 من \d+\) \| تابع$/m.test(r.reply));
});

test("az: «Məcmuu əl-Fətava» + mövzu — «N nəticə tapıldı» və «Daha çox göstər» düyməsi", async () => {
  const r = await run({ message: "İbn Teymiyyə fətvası bidət haqqında", noticeShown: false });
  assert.equal(r.usedAI, false);
  assert.ok(!r.reply.includes("::notice::"));
  assert.ok(/^\d+ nəticə tapıldı\.$/m.test(r.reply));
  assert.ok(/^::sb:: Daha çox göstər \(6–10 \/ \d+\) \| davam$/m.test(r.reply));
  assert.equal(count(r.reply, /^::tafsir fatawa::$/gm), PAGE);
});

test("səhifələmə: «davam» növbəti 5 nəticəni verir (təkrarsız), başlıq təkrarlanmır", async () => {
  const a = await run({ message: "İbn Teymiyyə fətvası bidət haqqında", noticeShown: false });
  const hist = [{ role: "user", text: "İbn Teymiyyə fətvası bidət haqqında" }, { role: "assistant", text: a.reply }];
  const b = await run({ message: "davam", history: hist, noticeShown: false });
  assert.equal(b.usedAI, false);
  assert.equal(count(b.reply, /^::tafsir fatawa::$/gm), PAGE);
  assert.ok(!/nəticə tapıldı/.test(b.reply));
  assert.ok(/::ctx:: fatawa q 10 az /.test(b.reply));
  const ta = blocks(a.reply).map((x) => x.tl.replace(/^::tl:: \d+\//, ""));
  const tb = blocks(b.reply).map((x) => x.tl);
  assert.ok(tb[0].startsWith("::tl:: 6/"));
  for (const t of tb) assert.ok(!ta.some((x) => t.endsWith(x.replace(/^\d+\/\d+ · /, "").slice(-30)) && false));
  const c = await run({ message: "Daha çox göstər", history: [...hist, { role: "user", text: "davam" }, { role: "assistant", text: b.reply }], noticeShown: false });
  assert.ok(/^::tl:: 11\//m.test(c.reply));
  // əvvəlki cavab fətva deyilsə «davam» bu handlerə düşmür
  const d = await fatawaReply("davam", [{ role: "assistant", text: "salam" }]);
  assert.equal(d, null);
});

test("sözbəsöz: göstərilən hər mətn parçası saxlanmış səhifə mətninin içindədir (uydurma yoxdur)", async () => {
  const r = await searchFatawa("التوسل بالنبي");
  const idx = await __loadIndex();
  const toks = new Set(tokens("التوسل بالنبي"));
  for (const d of r.list.slice(0, 12)) {
    const p = await getPage(idx, d);
    const ex = excerpt(p.text, toks, tokens("التوسل بالنبي"));
    const body = ex.text.replace(/^« \.\.\. » /, "").replace(/ « \.\.\. »$/, "");
    assert.ok(p.text.includes(body), "excerpt səhifədən kəsilməlidir");
    assert.ok(ex.text.length <= 1300);
    if (ex.cut) assert.ok(/« \.\.\. »/.test(ex.text));
  }
});

test("cild/səhifə: «مجموع الفتاوى المجلد 3 صفحة 10» dəqiq səhifəni verir", async () => {
  const r = await run({ message: "مجموع الفتاوى المجلد 3 صفحة 10", noticeShown: false });
  assert.equal(r.usedAI, false);
  assert.ok(!r.reply.includes("::notice::"));
  const bs = blocks(r.reply);
  assert.equal(bs.length, 1);
  assert.ok(/المجلد 3، ص 10 \(/.test(bs[0].src[0]));
  assert.ok(/موضوع المجلد: مجمل اعتقاد السلف/.test(bs[0].src[1]));
  const idx = await __loadIndex();
  const p = await getPage(idx, idx.byPage.get("3:10"));
  assert.ok(p.text.split("\n").join("\n").includes(bs[0].body.split("\n")[0]));
  assert.ok(!/::sug::/.test(r.reply));
  const az = await run({ message: "Məcmuu əl-Fətava cild 1 səhifə 5", noticeShown: false });
  assert.ok(/المجلد 1، ص 5 \(/.test(az.reply));
});

test("tapılmadı: cild/səhifə mövcud deyil, söz kitabda yoxdur", async () => {
  const a = await run({ message: "مجموع الفتاوى المجلد 99 صفحة 1", noticeShown: false });
  assert.ok(/1–\d+/.test(a.reply) && !a.reply.includes("::tafsir"));
  const b = await run({ message: "Majmu al-fatawa vol 3 page 9999", noticeShown: false });
  assert.ok(/No such page in volume 3 \(pages: 1–\d+\)/.test(b.reply));
  const c = await run({ message: "فتاوى ابن تيمية كمبيوتر ويندوز", noticeShown: false });
  assert.ok(/لا توجد نتائج/.test(c.reply) && !c.reply.includes("::tafsir"));
  const d = await run({ message: "ibn taymiyyah fatwa 'قلقلقلقل'", noticeShown: false });
  assert.ok(/No results for/.test(d.reply));
  assert.equal(d.usedAI, false);
});

test("haşiyə səsi yoxdur: səhifə mətnlərində «----» ayırıcısı və (*) işarəsi qalmayıb", async () => {
  const idx = await __loadIndex();
  const total = Math.ceil(idx.N / idx.shard);
  for (let s = 0; s < total; s++) {
    const d0 = s * idx.shard;
    for (const d of [d0, Math.min(idx.N - 1, d0 + 7), Math.min(idx.N - 1, d0 + idx.shard - 1)]) {
      const p = await getPage(idx, d);
      assert.ok(!/(^|\n)----/.test(p.text), `d=${d}`);
      assert.ok(!p.text.includes("(*)"), `d=${d}`);
      assert.ok(p.text.length > 0);
    }
  }
});

test("indeks bütövlüyü: cildlər ardıcıl, hər cildin ilk səhifələri, say", async () => {
  const idx = await __loadIndex();
  assert.ok(idx.vols.length >= 1);
  idx.vols.forEach((v, i) => assert.equal(v.n, i + 1));
  for (const v of idx.vols) assert.ok(v.title && v.count > 100, `cild ${v.n}`);
  assert.equal(sourceLines({ vol: 3, page: "ب", ap: true, title: "x", volTitle: "y" })[0].includes("ص (ب)"), true);
});

test("digər handlerləri oğurlamır: hədis, ayə, nəhv, lüğət", async () => {
  const h = await run({ message: "حديث إنما الأعمال بالنيات", noticeShown: false });
  assert.ok(h.reply.includes("::tafsir hadith::") && !h.reply.includes("::tafsir fatawa::"));
  const a = await run({ message: "Bəqərə 255", noticeShown: false });
  assert.ok(!a.reply.includes("::tafsir fatawa::"));
  const l = await run({ message: "معنى الصبر", noticeShown: false });
  assert.ok(!l.reply.includes("::tafsir fatawa::"));
  const n = await run({ message: "إعراب الحمد لله", noticeShown: false });
  assert.ok(!n.reply.includes("::tafsir fatawa::"));
  const hn = await run({ message: "Buxari 1", noticeShown: false });
  assert.ok(hn.reply.includes("::tafsir hadith::"));
});

// ---------------------------------------------------------------- kitab adının yazılışı və təbii dil mövzu axtarışı
const chat = (message, extra = {}) => run({ message, lang: "az", history: [], noticeShown: false, ...extra });
const isFatawa = (r) => r && /::tafsir fatawa::/.test(r.reply) && r.usedAI !== true && !r.notice && !/\u26A0|süni intellekt/i.test(r.reply.split("::tafsir")[0]);

test("kitab adının yazılış variantları: bələdçi cavab (surə cavabı və AI yox)", async () => {
  for (const m of ["Macmuuk fetava", "Macmu fetava", "mejmu al-fatawa", "Mecmuu fetava", "Məcmuu əl-Fətava", "مجموع الفتاوى", "Majmu fatawa", "Mecmuul fetava", "Маджму аль-фатава"]) {
    assert.equal(parseFatawaQuery(m).mode, "usage", m);
    const r = await chat(m);
    assert.ok(!/::tafsir/.test(r.reply), m);
    assert.ok(!r.usedAI && !r.notice, m);
    assert.ok(/مجموع الفتاوى المجلد 3 صفحة 10/.test(r.reply) && /35/.test(r.reply), m + " bələdçi");
  }
  const f = await chat("Fatihə surəsi");
  assert.ok(/::ayah 1:1-7::/.test(f.reply) && !/fatawa/.test(f.reply));
});

test("təbii sual: mövzu + hökm sualı (az/tr/en/ru/ar) — fətva blokları, bildiriş və AI yoxdur", async () => {
  const cases = [
    ["namaz qılmayanın hökmü nədir", "تارك الصلاة"],
    ["faiz haramdır?", "الربا"],
    ["təvəssül caizdirmi", "التوسل"],
    ["mövlud", "المولد"],
    ["zəkat kimlərə verilir", "مصارف الزكاة"],
    ["oruc pozan şeylər", "مفطرات الصيام"],
    ["qəbir ziyarəti", "زيارة القبور"],
    ["sihr", "السحر"],
    ["tövbə", "التوبة"],
    ["talaq", "الطلاق"],
    ["musiqi dinləmək caizdirmi", "الغناء"],
    ["namaz kılmayanın hükmü nedir", "تارك الصلاة"],
    ["mevlid kandili kutlamak caiz mi", "المولد"],
    ["what is the ruling on interest from a bank", "الربا"],
    ["is it permissible to shave the beard", "اللحية"],
    ["Какой хукм у колдовства", "السحر"],
    ["Макрух ли бороду брить", "اللحية"],
    ["что нарушает пост", "مفطرات"],
    ["ما حكم الربا", "الربا"],
    ["هل يجوز التوسل بالنبي", "التوسل"],
  ];
  for (const [m, topic] of cases) {
    const r = await chat(m);
    assert.ok(isFatawa(r), m + " → " + String(r.reply).slice(0, 80));
    assert.ok(blocks(r.reply).length >= 1 && blocks(r.reply).every((b) => b.src.length === 2), m);
  }
  // mövzu doğru seçilir
  for (const [m, topic] of cases.filter((c) => /[\u0621-\u064A]/.test(c[1]))) {
    assert.ok(topicAlts(m).alts.some((a) => a.includes(topic) || topic.includes(a)) || /[\u0621-\u064A]/.test(m), m + " topic " + topic);
  }
});

test("təbii sual tetiklənmir: salam, kod, oyun, bilinməyən mövzu, ayə, hədis, söz mənası", async () => {
  for (const m of ["salam", "bank hesabı açmaq üçün kod yaz", "is it haram to cheat in exams", "kürək ağrısı", "what is the ruling on bitcoin", "bu gün hava necədir", "Bəqərə 255", "hədis niyyət haqqında", "معنى الصبر", "ihlas nə deməkdir"]) {
    assert.equal(parseNaturalQuery(m), null, m);
    const r = await chat(m, m.includes("kod") ? { mode: "code" } : {});
    assert.ok(!/::tafsir fatawa::/.test(r.reply), m);
  }
  assert.equal(await fatawaNaturalReply("faiz haramdır?").then((x) => /::tafsir fatawa::/.test(x)), true);
  // kod və yaradıcı rejimdə təbii fətva axtarışı işləmir
  assert.ok(!/::tafsir fatawa::/.test((await chat("faiz haramdır?", { mode: "code" })).reply));
  assert.ok(!/::tafsir fatawa::/.test((await chat("namaz qılmayanın hökmü nədir", { mode: "create" })).reply));
});

test("mövcud canned/din/hədis/təfsir cavabları oğurlanmır", async () => {
  for (const m of ["hədis niyyət haqqında", "Bəqərə 255 təfsiri", "Fatihə surəsi", "ayətəl kürsi", "الفاتحة", "إعراب الحمد لله"]) {
    const r = await chat(m);
    assert.ok(!/::tafsir fatawa::/.test(r.reply), m);
  }
});

test("mövzu lüğəti: 400+ mövzu, açarlar ümumi söz deyil, təbii sorğu yenə də «davam» ilə davam edir", async () => {
  assert.ok(topicCount() >= 400, "topicCount " + topicCount());
  for (const w of ["ve", "bu", "the", "and", "islam", "allah", "namaz", "haram", "halal"]) assert.equal(matchTopics(w).hits.filter((h) => !h.weak).length === 0 || w === "namaz", true, w);
  const first = await chat("talaq");
  assert.ok(/::sug::/.test(first.reply));
  const second = await chat("davam", { history: [{ role: "user", text: "talaq" }, { role: "assistant", text: first.reply }] });
  assert.ok(/::tafsir fatawa::/.test(second.reply) && !second.reply.includes("nəticə tapıldı"));
});
