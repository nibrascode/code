import test from "node:test";
import assert from "node:assert/strict";
import { sentenceStart, sentenceEnd } from "../api/_excerpt.js";
import { excerpt as hadithExcerpt } from "../api/_hadith.js";
import { excerpt as fatawaExcerpt, getPage, searchFatawa, __loadIndex } from "../api/_fatawa.js";
import { bestWindow } from "../api/_nahw.js";
import { tokens } from "../api/_hadith/tok.js";

const S = (i) => `هذه الجملة رقم ${i} تتحدث عن مسألة في العقيدة والفقه وتفصيلها طويل جدا.`;
const longText = Array.from({ length: 60 }, (_, i) => S(i)).join(" ");

test("sentenceStart: cümlə başlanğıcına qayıdır", () => {
  const t = "جملة أولى تنتهي هنا. جملة ثانية فيها كلمة مهمة جدا.";
  const pos = t.indexOf("مهمة");
  assert.equal(t.slice(sentenceStart(t, pos)), "جملة ثانية فيها كلمة مهمة جدا.");
  assert.equal(sentenceStart(t, 0), 0);
});

test("sentenceStart: sətir başı, ؟ ! ؛ və bağlayıcı işarə", () => {
  assert.equal("ثانية كلمة".slice(0), "ثانية كلمة");
  let t = "أول\nثانية كلمة";
  assert.ok(t.slice(sentenceStart(t, t.indexOf("كلمة"))).startsWith("ثانية"));
  t = "قال «كذا». ثم قال كلمة";
  assert.ok(t.slice(sentenceStart(t, t.indexOf("كلمة"))).startsWith("ثم"));
  t = "هل هذا؟ نعم هذا كلمة";
  assert.ok(t.slice(sentenceStart(t, t.indexOf("كلمة"))).startsWith("نعم"));
  t = "الأول؛ الثاني كلمة";
  assert.ok(t.slice(sentenceStart(t, t.indexOf("كلمة"))).startsWith("الثاني"));
});

test("sentenceStart: cümlə çox uzundursa vergülə, sonra söz sərhədinə düşür; kəsik söz yox", () => {
  const long = "كلمة ".repeat(300) + "،  بداية جديدة " + "كلمة ".repeat(200) + "هدف";
  const pos = long.lastIndexOf("هدف");
  const a = sentenceStart(long, pos, 600);
  assert.ok(a > 0 && (long[a - 1] === " " || long[a - 1] === "\n"), "söz ortasında deyil");
  assert.ok(!/^[»)\]،.]/.test(long.slice(a)));
});

test("sentenceStart: bağlayıcı işarə ilə başlamır", () => {
  const t = "قال: «كلام طويل». » ثم جاء الحكم والمسألة كلمة";
  const a = sentenceStart(t, t.indexOf("كلمة"));
  assert.ok(!/^[»)\]"]/.test(t.slice(a)));
});

test("sentenceEnd: cümlə sonunda bitir", () => {
  const t = S(1) + " " + S(2) + " " + S(3);
  const target = S(1).length + 20;
  const e = sentenceEnd(t, target, { minPos: 0, maxFwd: 300 });
  assert.ok(t.slice(0, e).endsWith("."));
});

const startsAtBoundary = (full, piece) => {
  const i = full.indexOf(piece);
  assert.ok(i >= 0, "çıxarış mətndən götürülməlidir");
  return i === 0 || /[.؟!؛\n]\s*$/.test(full.slice(Math.max(0, i - 6), i));
};

test("fatawa excerpt: cümlə əvvəlindən başlayır, « ... » saxlanılır", () => {
  const t = longText + " " + "كلمةمفتاح هنا في الوسط. " + longText;
  const ex = fatawaExcerpt(t, new Set(tokens("كلمةمفتاح")), null);
  assert.ok(ex.cut);
  assert.ok(ex.text.startsWith("« ... » "));
  const body = ex.text.replace(/^« \.\.\. » /, "").replace(/ « \.\.\. »$/, "");
  assert.ok(startsAtBoundary(t, body), "cümlə başında olmalıdır");
  assert.ok(/[.؟!]$/.test(body), "cümlə sonunda bitməlidir: " + body.slice(-30));
  assert.ok(ex.text.endsWith(" « ... »"));
});

test("hadith excerpt: uzun mətndə cümlə əvvəlindən başlayır", () => {
  const t = longText.repeat(2) + " " + "هدفالبحث في الوسط. " + longText;
  const ex = hadithExcerpt(t, new Set(tokens("هدفالبحث")));
  const body = ex.text.replace(/^« \.\.\. » /, "").replace(/ « \.\.\. »$/, "");
  assert.ok(startsAtBoundary(t, body));
});

test("nahw bestWindow: cümlə əvvəlindən başlayır", () => {
  const t = longText + " " + "الفاعل مرفوع دائما. " + longText;
  const w = bestWindow(t, new Set(tokens("الفاعل")));
  const body = w.text.replace(/^\.\.\. /, "").replace(/ \.\.\.$/, "");
  assert.ok(startsAtBoundary(t, body));
});

test("real Məcmuu: axtarış nəticələrinin çıxarışı cümlə başlanğıcındadır", async () => {
  const idx = await __loadIndex();
  let checked = 0;
  for (const q of ["التوسل بالنبي", "الاستغاثة بالنبي", "البدعة", "الربا"]) {
    const r = await searchFatawa(q);
    const toks = new Set(tokens(q));
    for (const d of r.list.slice(0, 15)) {
      const p = await getPage(idx, d);
      const ex = fatawaExcerpt(p.text, toks, tokens(q));
      if (!ex.cut) continue;
      const body = ex.text.replace(/^« \.\.\. » /, "").replace(/ « \.\.\. »$/, "");
      const i = p.text.indexOf(body);
      assert.ok(i >= 0);
      assert.ok(!/^[»)\]،.:؛]/.test(body), "bağlayıcı işarə ilə başlamır");
      assert.ok(i === 0 || /\s$/.test(p.text.slice(i - 1, i)) || /[.؟!؛]$/.test(p.text.slice(i - 3, i)), "söz ortasında kəsilməyib");
      assert.ok(ex.text.length <= 1350);
      checked++;
    }
  }
  assert.ok(checked > 5);
});
