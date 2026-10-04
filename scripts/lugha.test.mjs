// İbn Faris lüğəti: ərəbcə sözün mənası (api/_lugha.js). AI-siz, sözbəsöz çıxarış + mənbə sətri.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import handler from "../api/chat.js";
import { unpack } from "../api/_tafsir/_unpack.js";
import MQ, { COUNT as MQ_COUNT } from "../api/_lugha/maqayis.js";
import MJ, { COUNT as MJ_COUNT } from "../api/_lugha/mujmal.js";
import { lughaReply, parseLughaQuery, lookupWord, key, truncate, rootCandidates, __load } from "../api/_lugha.js";
import { ayahReply } from "../api/_ayah.js";
import { tafsirReply } from "../api/_tafsir.js";
import { quranReply } from "../api/_quran.js";
import { tawhidReply } from "../api/_tawhid.js";
import { cannedReply } from "../api/_canned.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("məlumat: sayı və bütövlük (Maqayis 4703, Mücməl 4835)", () => {
  const mq = unpack(MQ);
  const mj = unpack(MJ);
  assert.equal(mq.length, MQ_COUNT);
  assert.equal(mj.length, MJ_COUNT);
  assert.equal(mq.length, 4703);
  assert.equal(mj.length, 4835);
  for (const r of [...mq, ...mj]) {
    assert.equal(r.length, 5);
    assert.ok(r[0] && !/[\[\]]/.test(r[0]), "kök: " + r[0]);
    assert.ok(typeof r[4] === "string" && r[4].length > 5);
    assert.ok(Number.isInteger(r[2]) && Number.isInteger(r[3]) && r[3] >= r[2]);
  }
  // mətn sözbəsöz saxlanıb: «رحم» maddəsi
  const rahm = mq.find((r) => r[0] === "رحم");
  assert.ok(key(rahm[4]).startsWith(key("الراء والحاء والميم أصل واحد يدل على الرقة والعطف والرأفة.")));
  assert.equal(rahm[1], "2");
  assert.equal(rahm[2], 498);
  // mənbə fayl bu maşında varsa: mətnlər sözbəsöz eynidir
  const src = "/workspace/sham/lugha/books/21710.entries.json";
  if (fs.existsSync(src)) {
    const orig = JSON.parse(fs.readFileSync(src, "utf8"));
    assert.equal(orig.length, mq.length);
    const h1 = crypto.createHash("sha256").update(JSON.stringify(orig.map((e) => e.text))).digest("hex");
    const h2 = crypto.createHash("sha256").update(JSON.stringify(mq.map((r) => r[4]))).digest("hex");
    assert.equal(h1, h2);
  }
});

test("repo ölçüsü: lüğət modulları 3 MB-dan kiçikdir", () => {
  const sz = fs.readdirSync(path.join(ROOT, "api/_lugha")).reduce((n, f) => n + fs.statSync(path.join(ROOT, "api/_lugha", f)).size, 0);
  assert.ok(sz < 3e6, "ölçü " + sz);
});

test("kök tapılması: tez-tez rast gəlinən sözlər", async () => {
  const cases = {
    علم: "علم", رحمة: "رحم", الرحمة: "رحم", صبر: "صبر", بالصبر: "صبر", قلب: "قلب", القلوب: "قلب", يعلمون: "علم", معلم: "علم", العلماء: "علم",
    كتاب: "كتب", الكتاب: "كتب", كاتب: "كتب", مسجد: "سجد", مساجد: "سجد", قال: "قول", يقول: "قول", الله: "أله", إله: "أله",
    الشاكرين: "شكر", شاكرين: "شكر", استغفار: "غفر", جهاد: "جهد", الجنة: "جنه", الدين: "دين", الحمد: "حمد", الشرك: "شرك",
    مشرك: "شرك", توحيد: "وحد", التوحيد: "وحد", المتقين: "وقي", اتقوا: "وقي", الأرض: "أرض", مدّ: "مد", رسول: "رسل", المرسلين: "رسل",
    منافق: "نفق", تعليم: "علم", فتنة: "فتن", الهجرة: "هجر", مؤمن: "أمن", إيمان: "أمن", سماء: "سمو", الصلاة: "صلي",
  };
  const mq = await __load("mq");
  for (const [w, root] of Object.entries(cases)) {
    const h = await lookupWord(key(w));
    assert.ok(h && h.book === "mq", w);
    assert.equal(key(mq.rows[h.idxs[0]][0]), key(root), `${w} -> ${mq.rows[h.idxs[0]][0]}`);
  }
});

test("rootCandidates: dəqiq kök xərc 0, mənasız söz tapılmır", async () => {
  const mq = await __load("mq");
  assert.equal(rootCandidates(key("علم"), mq.map)[0].cost, 0);
  assert.equal(await lookupWord("ضضضضضضضضضض"), null);
  assert.equal(await lookupWord("xyz"), null);
});

test("sorğunun aşkarlanması: ərəbcə sözün mənası (ar/az/tr/en/ru)", () => {
  const ok = {
    "معنى كلمة علم": "علم", "ما معنى كلمة صبر": "صبر", "ما هو معنى كلمة قلب؟": "قلب", "معنى رحمة": "رحمة", "معنى علم": "علم",
    "ما معنى الرحمة في اللغة": "الرحمة", "ماذا تعني كلمة صبر": "صبر", "علم معناه": "علم", "ما معنى كلمة «التقوى»": "التقوى",
    "شرح كلمة الصبر": "الصبر", "ما أصل كلمة قلب": "قلب", "ما المراد بكلمة الصبر": "الصبر", "صبر معنى": "صبر", "مَعْنَى كَلِمَةِ عِلْم": "علم",
    "علم sözünün mənası": "علم", "صبر nə deməkdir": "صبر", "القلب nə deməkdir ərəbcə": "القلب", "ərəbcə قلب sözünün mənası nədir": "قلب",
    "صبر ne demek": "صبر", "صبر ne demektir arapça": "صبر", "قلب kelimesinin anlamı": "قلب", "what is the meaning of the word قلب": "قلب",
    "meaning of صبر": "صبر", "что значит слово صبر": "صبر", "значение слова علم": "علم", "كلمة علم ne deməkdir": "علم",
  };
  for (const [q, w] of Object.entries(ok)) {
    const r = parseLughaQuery(q);
    assert.ok(r, q);
    assert.equal(r.word, w, q);
  }
  const no = [
    "معنى آية الكرسي", "ما معنى قوله تعالى الحمد لله رب العالمين", "ما معنى كلمة في الآية ٢:٢٥٥", "تفسير كلمة الصبر", "تفسير سورة الفاتحة",
    "Bəqərə 3 ayəsində صبر sözünün mənası", "ما معنى لن في النحو", "ما إعراب كلمة علم", "ما معنى الحمد لله رب العالمين", "salam necəsən",
    "meaning of life", "Python nədir", "bu cümlənin mənası nədir", "ما هو الفاعل", "علم", "سلام عليكم", "ما معنى هذا الحديث", "fail nədir ərəbcə",
    "صبر nədir", "kitab sözünün mənası", "ما معنى كلمة التوحيد", "Quranda صبر sözünün mənası",
    "What is the meaning of the word صبر in the Quran", "hədis nə deməkdir", "", "   ",
  ];
  for (const q of no) assert.equal(parseLughaQuery(q), null, q);
});

test("kəsmə: qısa maddə tam, uzun maddə ~1500-də cümlə/söz sərhədində", () => {
  const short = "abc ".repeat(100);
  assert.deepEqual(truncate(short), [short.trim(), false]);
  const long = ("هذه جملة طويلة من الكلام العربي. ").repeat(200);
  const [t, cut] = truncate(long);
  assert.equal(cut, true);
  assert.ok(t.length <= 1510 && t.length > 700, "uzunluq " + t.length);
  assert.ok(t.endsWith(" ..."));
  assert.ok(/\.\s\.\.\.$/.test(t), "cümlə sərhədi");
  const noPunct = "كلمة ".repeat(600);
  const [t2] = truncate(noPunct);
  assert.ok(t2.endsWith("كلمة ..."));
});

test("cavab formatı: mətn kitabdan sözbəsöz, mənbə sətri ج/ص, AI yoxdur", async () => {
  const r = await lughaReply("معنى كلمة علم");
  assert.ok(r.startsWith("الكلمة «علم»"));
  assert.ok(r.includes("::tafsir lugha::") && r.includes("::/tafsir::"));
  assert.ok(r.includes("::src:: ابن فارس، معجم مقاييس اللغة، ج 4، ص 109–111"));
  const mq = await __load("mq");
  const row = mq.rows[mq.map.get("علم")[0]];
  const body = r.split("\n").filter((l) => !l.startsWith("::") && l !== r.split("\n")[0]);
  assert.equal(body.join("\n"), row[4].split("\n").filter((l) => l.trim()).join("\n"), "tam maddə sözbəsöz");
  const az = await lughaReply("صبر nə deməkdir");
  assert.ok(az.startsWith("«صبر» sözü üzrə İbn Farisin «Məqayis əl-luğə» kitabından (kök: صبر):"));
  assert.ok(az.includes("ج 3، ص 329–330"));
  for (const bad of ["yarat", "yaradıcı"]) assert.ok(!az.split("\n")[0].includes(bad));
  const ru = await lughaReply("значение слова علم");
  assert.ok(ru.startsWith("К слову «علم», из «Макайис аль-луга» Ибн Фариса (корень: علم):"));
});

test("uzun maddə kəsilir və qeyd əlavə olunur", async () => {
  const mq = await __load("mq");
  const longest = mq.rows.reduce((a, b) => (a[4].length >= b[4].length ? a : b));
  const r = await lughaReply("معنى كلمة " + longest[0]);
  assert.ok(r && r.includes(" ..."));
  assert.ok(r.includes("::note::"));
  const body = r.split("\n").filter((l) => !l.startsWith("::")).slice(1).join("\n");
  assert.ok(body.length < 1700, "uzunluq " + body.length);
  // kəsilmiş mətn orijinalın başlanğıcıdır (dəyişdirilməyib)
  assert.ok(longest[4].startsWith(body.replace(/ \.\.\.$/, "").split("\n")[0]));
});

test("Mücməl: yalnız Məqayisdə olmayan kök üçün ehtiyat", async () => {
  const mq = await __load("mq");
  const mj = await __load("mj");
  const miss = [...mj.map.keys()].find((k) => k.length === 3 && !mq.map.has(k) && !k.includes("ء") && rootCandidates(k, mq.map).length === 0);
  assert.ok(miss, "nümunə kök");
  const h = await lookupWord(miss);
  assert.equal(h.book, "mj");
  const r = await lughaReply("معنى كلمة " + miss);
  assert.ok(r.includes("مجمل اللغة") && /::src:: ابن فارس، مجمل اللغة، ص \d+/.test(r));
  assert.ok(!/::src:: [^\n]*ج \d/.test(r), "Mücməldə cild yoxdur");
  // Məqayisdə olan söz Mücmələ düşmür
  assert.ok(!(await lughaReply("معنى كلمة علم")).includes("مجمل"));
});

test("chat.js: kitab cavabı AI-yə getmir, bildiriş yoxdur; ayə/təfsir/Quran/tövhid/hazır cavablar dəyişməyib", async () => {
  const realFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    throw new Error("şəbəkə çağırışı olmamalıdır");
  };
  const run = async (message, extra = {}) => {
    const res = { setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
    await handler({ method: "POST", body: { message, ...extra } }, res);
    return res;
  };
  try {
    for (const q of ["معنى كلمة علم", "ما معنى كلمة صبر", "معنى كلمة قلب", "معنى كلمة رحمة", "كلمة علم nə deməkdir", "значение слова علم"]) {
      const res = await run(q, { noticeShown: false });
      assert.equal(res.code, 200, q);
      assert.equal(res.body.success, true, q);
      assert.equal(res.body.usedAI, false, q);
      assert.ok(!res.body.notice, q + " bildiriş olmamalıdır");
      assert.ok(!res.body.reply.includes("::notice::"), q);
      assert.ok(res.body.reply.includes("::src:: ابن فارس، معجم مقاييس اللغة، ج"), q);
      assert.equal(res.body.reply, await lughaReply(q));
    }
    // mövcud idarəçilər əvvəlki kimi qalır
    for (const q of ["معنى آية الكرسي", "تفسير الفاتحة", "Bəqərə 255", "معنى كلمة ريب", "ما معنى كلمة التوحيد", "Şirk neçə qismə bölünür", "Sələfilik nədir"]) {
      const res = await run(q);
      assert.ok(!res.body.reply.includes("::tafsir lugha::"), q);
      const want = (await tafsirReply(q)) || ayahReply(q) || tawhidReply(q) || cannedReply(q) || quranReply(q);
      if (want) assert.ok(res.body.reply.endsWith(want.slice(-40)) || res.body.reply.includes(want.slice(0, 40)), q);
    }
    assert.equal(calls, 0);
  } finally {
    globalThis.fetch = realFetch;
  }
});
