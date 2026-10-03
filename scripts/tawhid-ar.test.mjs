// Ərəbcə sual → ar.txt-dəki ərəbcə cavab (AI-siz). Bütün girişlər üçün suallar ar.txt-dən (entries.js vasitəsilə) yaradılır.
import test from "node:test";
import assert from "node:assert/strict";
import { tawhidMatch, tawhidReply } from "../api/_tawhid.js";
import { cannedReply } from "../api/_canned.js";
import handler from "../api/chat.js";
import { variantsOf, arQuestionOf, ENTRIES } from "./_ar-variants.mjs";

const hit = (e, q) => {
  const m = tawhidMatch(q);
  return Boolean(m && m.ids && m.ids.includes(e.id));
};

test("ərəbcə: ar.txt-dəki dəqiq sual (və təmiz forması) bütün girişləri tapır", () => {
  assert.equal(ENTRIES.length >= 80, true);
  const bad = [];
  for (const e of ENTRIES) {
    const v = variantsOf(e);
    for (const k of ["exact", "clean"]) if (!hit(e, v.get(k))) bad.push(`${k} ${e.id}: ${v.get(k)}`);
  }
  assert.deepEqual(bad, []);
});

test("ərəbcə: təbii variantlar (sual sözü atılıb, əvvəl/son hissə) ≥ 90%", () => {
  const stat = {};
  for (const e of ENTRIES) {
    for (const [k, q] of variantsOf(e)) {
      if (k === "exact" || k === "clean") continue;
      (stat[k] ||= [0, 0])[1]++;
      if (hit(e, q)) stat[k][0]++;
    }
  }
  for (const k of ["noqw", "prefix", "suffix"]) {
    const [ok, n] = stat[k];
    assert.ok(n >= 30, k + " say " + n);
    assert.ok(ok / n >= 0.9, `${k}: ${ok}/${n}`);
  }
  const [ok, n] = stat.core;
  assert.ok(ok / n >= 0.7, `core: ${ok}/${n}`);
});

test("ərəbcə: cavab ərəbcədir (a_ar), ərəbcə başlıq və mənbə; tərcüməsi olmayan girişlər də", () => {
  for (const e of ENTRIES) {
    const r = tawhidReply(arQuestionOf(e));
    assert.ok(r, e.id);
    assert.ok(r.startsWith("التوحيد 1 (عقد 3001) — "), e.id);
    assert.ok(r.includes("المصدر: التلخيص المفيد"), e.id);
    assert.ok(!r.includes("Mənbə:") && !r.includes("Sual:"), e.id);
    // cavabın ərəbcə mətni a_ar-dır (amb halında ikisi göstərilə bilər)
    assert.ok(r.includes(e.a_ar), e.id + ": a_ar cavabda yoxdur");
  }
  const noAz = ENTRIES.filter((e) => !e.a_az && !e.a_az_partial);
  assert.ok(noAz.length >= 3);
  for (const e of noAz) assert.ok(tawhidReply(arQuestionOf(e)).includes(e.a_ar), e.id);
});

const AR_NEGATIVE = [
  "السلام عليكم", "كيف حالك", "اكتب كود", "اكتب لي كود بايثون", "مرحبا", "شكرا جزيلا", "ما اسمك", "من أنت", "ما هو الإسلام", "كم عدد ركعات الصلاة",
  "ما هي أركان الإسلام", "ما هو الدعاء", "ما حكم الصلاة", "هل يجوز الصيام", "اشرح لي الرياضيات", "ما هي عاصمة أذربيجان", "كم الساعة الآن", "ما هو الطقس اليوم",
  "اكتب قصة قصيرة", "ترجم هذا النص", "ما معنى كلمة سعادة", "كيف أتعلم البرمجة", "ما هو الذكاء الاصطناعي", "الله", "أسماء الله الحسنى",
  "ما هي أركان الإيمان", "ما هي صفات المؤمن", "ما أقسام الكلام", "عدد أقسام الإعراب", "ما هو الحديث الصحيح", "ما هي السنة", "ما هي الصلاة",
];

test("ərəbcə söhbət/digər suallar tövhid cavabını tetikləmir", () => {
  const bad = AR_NEGATIVE.filter((q) => tawhidMatch(q)).map((q) => `${q} -> ${JSON.stringify(tawhidMatch(q))}`);
  assert.deepEqual(bad, []);
  assert.deepEqual(tawhidMatch("ما هو الشرك").ids, ["t5-sirk-terif"]);
  for (const q of ["أسماء الله الحسنى"]) assert.equal(tawhidReply(q), null, q);
});

function mkRes() {
  return { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
}

test("chat.js: ərəbcə tövhid sualları AI-siz ərəbcə cavab alır (a_az null olanlar da)", async () => {
  const realFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    throw new Error("şəbəkə çağırışı olmamalıdır");
  };
  try {
    const bad = [];
    for (const e of ENTRIES) {
      const q = arQuestionOf(e);
      const res = mkRes();
      await handler({ method: "POST", body: { message: q } }, res);
      const reply = res.body && res.body.reply;
      if (!(res.code === 200 && res.body.success && res.body.usedAI === false && reply && reply.startsWith("التوحيد 1 (عقد 3001) — ") && reply.includes(e.a_ar))) bad.push(e.id + ": " + q);
    }
    assert.deepEqual(bad, []);
    assert.equal(calls, 0);
    // söhbət: ərəbcə salam AI-yə (ya da yerli cavaba) gedir, tövhid cavabı gəlmir
    const res = mkRes();
    await handler({ method: "POST", body: { message: "كيف حالك" } }, res);
    assert.ok(!(res.body.reply || "").startsWith("التوحيد 1"));
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("ərəbcə: Azərbaycanca sorğular yenə Azərbaycanca cavab alır; hazır cavablar dəyişməyib", () => {
  const az = tawhidReply("Şirk neçə qismə bölünür");
  assert.ok(az.includes("Mənbə: Tövhid 1") && !az.includes("المصدر"));
  assert.equal(tawhidReply("Sələfilik nədir"), null);
  assert.ok(cannedReply("Sələfilik nədir"));
});
