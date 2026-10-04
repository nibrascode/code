// Söz mənası: lüğətdə tapılmayanda AI-yə gedir, ancaq sərt «uydurma» təlimatı ilə, ayə blokları silinir, sonda «tapılmadı» qeydi; AI cavabına əlaqəsiz ayə bloku əlavə olunmur.
import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/chat.js";
import { lookupWord, key, lughaNotFoundNote, rootCandidates, __load } from "../api/_lugha.js";
import { finalizeAi, asksAyah } from "../api/_ayah.js";
import { AYAS } from "../api/_quran/quran.js";

async function run(body, ai = null) {
  const res = { setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const realFetch = globalThis.fetch;
  const prev = process.env.GROQ_API_KEY;
  let calls = 0;
  const sent = [];
  if (ai) {
    process.env.GROQ_API_KEY = "test-key";
    globalThis.fetch = async (url, init) => {
      calls++;
      sent.push(String(init && init.body));
      return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: ai } }] }) };
    };
  } else
    globalThis.fetch = async () => {
      calls++;
      throw new Error("AI çağırışı olmamalıdır");
    };
  try {
    await handler({ method: "POST", body }, res);
  } finally {
    globalThis.fetch = realFetch;
    if (prev === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = prev;
  }
  return { ...res.body, calls, sent };
}
const GARBAGE = "ضضضضضضضضضض";
// Maher-in gördüyü hallüsinasiya: AI əlaqəsiz ayəni (2:168) sözlə uyğunlaşdırıb əlavə etmişdi
const AYAH_168 = AYAS[1][167];

test("kök namizədləri: أسأ və أساء سوء kökünə gətirilir", async () => {
  for (const w of ["أسأ", "أساء"]) {
    const h = await lookupWord(key(w));
    assert.ok(h, w);
    assert.equal(key(h.db.rows[h.idxs[0]][0]), key("سوء"), w);
  }
  const mq = await __load("mq");
  assert.equal(rootCandidates(key("علم"), mq.map)[0].cost, 0); // dəqiq kök dəyişmir
});

test("«أسأ sözünün mənası», «ما معنى أسأ», «what does أسأ mean»: AI çağırılmır, ayə bloku və dini bildiriş yoxdur", async () => {
  for (const q of ["أسأ sözünün mənası", "أسأ sözünün mənası nədir", "ما معنى أسأ", "ما معنى كلمة أسأ", "what does أسأ mean", "معنى كلمة أساء"]) {
    const r = await run({ message: q, noticeShown: false });
    assert.equal(r.calls, 0, q);
    assert.equal(r.usedAI, false, q);
    assert.ok(!r.reply.includes("::ayah"), q);
    assert.ok(!r.reply.includes("Tanzil"), q);
    assert.ok(!r.notice && !r.religious, q);
    assert.ok(!r.reply.includes("din öyrənilməz"), q);
    assert.ok(r.reply.includes("::src:: ابن فارس"), q);
  }
});

test("lüğətdə tapılmayan söz: AI-yə gedir (sərt təlimatla), ayə/bildiriş yoxdur, sonda dilə uyğun qeyd", async () => {
  assert.equal(await lookupWord(key(GARBAGE)), null);
  const ai = "Bu sözün mənası dəqiq bilinmir. " + AYAH_168 + " [[ayah:2:168]] ﴿" + AYAH_168 + "﴾ (Bəqərə 168)";
  const cases = [
    [`${GARBAGE} sözünün mənası nədir`, /Qeyd: bu söz İbn Farisin lüğətində tapılmadı, cavab dəqiq olmaya bilər\.$/],
    [`${GARBAGE} kelimesinin anlamı`, /Not: bu kelime İbn Fâris'in sözlüğünde bulunamadı/],
    [`what does ${GARBAGE} mean`, /Note: this word was not found in Ibn Faris's dictionary/],
    [`что значит слово ${GARBAGE}`, /Примечание: это слово не найдено в словаре Ибн Фариса/],
    [`ما معنى كلمة ${GARBAGE}`, /ملاحظة: لم تُوجد هذه الكلمة في معجم ابن فارس/],
  ];
  for (const [q, re] of cases) {
    const r = await run({ message: q, noticeShown: false }, ai);
    assert.equal(r.calls, 1, q);
    assert.equal(r.success, true, q);
    assert.equal(r.usedAI, true, q);
    assert.match(r.reply, re, q);
    assert.ok(r.reply.includes("Bu sözün mənası dəqiq bilinmir."), q);
    assert.ok(!r.reply.includes("::ayah") && !r.reply.includes("[[ayah") && !r.reply.includes("Tanzil") && !r.reply.includes("﴿"), q);
    assert.ok(!r.reply.includes(AYAH_168), q + ": Quran mətni silinməlidir");
    assert.ok(!r.reply.includes("::notice") && !r.reply.includes("din öyrənilməz"), q);
    assert.ok(!r.notice && !r.religious, q);
    // sərt təlimat AI-yə göndərilir
    assert.ok(r.sent[0].includes("UYDURMA") && r.sent[0].includes("Quran ayəsi"), q);
  }
  assert.match(lughaNotFoundNote(`${GARBAGE} sözünün mənası`), /tapılmadı/);
  assert.equal(lughaNotFoundNote("salam necəsən"), null);
  assert.equal(lughaNotFoundNote("Python nədir"), null);
});

test("lüğət davamı: tapılmayan söz («ضضضضضضضضضض؟») AI-yə gedir və qeyd əlavə olunur", async () => {
  const r = await run({ message: GARBAGE + "؟", history: [{ role: "user", text: "ما معنى كلمة علم" }, { role: "assistant", text: "..." }, { role: "user", text: GARBAGE + "؟" }], noticeShown: false }, "Dəqiq bilmirəm.");
  assert.equal(r.calls, 1);
  assert.match(r.reply, /^Dəqiq bilmirəm\./);
  assert.match(r.reply, /ملاحظة|Qeyd/);
  assert.ok(!r.reply.includes("::ayah"));
});

test("lüğət olmayan sual hələ də AI-yə gedir (söz mənası ilə qarışmır)", async () => {
  const r = await run({ message: "Python nədir", noticeShown: true }, "Python proqramlaşdırma dilidir.");
  assert.equal(r.calls, 1);
  assert.equal(r.usedAI, true);
  assert.ok(!r.reply.includes("Qeyd: bu söz İbn Farisin"));
});

test("AI cavabına əlaqəsiz ayə bloku əlavə olunmur (söz uyğunluğu ilə)", async () => {
  const bold = `Quranda **${AYAH_168}** sözü bu kökdəndir.`;
  // istifadəçi ayə soruşmayıb, istinad yoxdur: mətn olduğu kimi qalır, blok yoxdur
  for (const msg of ["salam", "bu söz nə deməkdir", "ما إعراب كلمة", "write a poem"]) {
    const out = finalizeAi(bold, msg);
    assert.ok(!out.includes("::ayah"), msg);
    assert.ok(!out.includes("Tanzil"), msg);
    assert.equal(out, bold, msg);
  }
  assert.ok(!finalizeAi(`«${AYAH_168}»`, "salam").includes("::ayah"));
  // ayə soruşulanda / istinad olanda blok qalır
  assert.match(finalizeAi(AYAH_168, "168-ci ayəni yaz bəqərə"), /::ayah 2:168::/);
  assert.match(finalizeAi(`${AYAH_168} (Bəqərə 168)`, "salam"), /::ayah 2:168::/);
  assert.match(finalizeAi("[[ayah:2:168]]", "salam"), /::ayah 2:168::/);
  assert.match(finalizeAi(`﴿${AYAH_168}﴾`, "salam"), /::ayah 2:168::/);
  assert.equal(asksAyah("salam necəsən"), false);
  assert.equal(asksAyah("168-ci ayəni yaz"), true);
  // noBlocks: söz mənası kontekstində heç bir blok yoxdur, saxta işarə silinir
  const lex = finalizeAi(`${AYAH_168} (Bəqərə 168) [[ayah:2:168]] ﴿${AYAH_168}﴾`, "Bəqərə ayəsi", { noBlocks: true });
  assert.ok(!lex.includes("::ayah") && !lex.includes("[[ayah"));
});

test("chat.js: AI cavabında əlaqəsiz ayə mətni olsa da blok əlavə olunmur", async () => {
  const r = await run({ message: "Bu söz haqqında qısa danış", noticeShown: true }, `Quranda **${AYAH_168}** sözü işlənir.`);
  assert.equal(r.usedAI, true);
  assert.ok(!r.reply.includes("::ayah") && !r.reply.includes("Tanzil"));
  const r2 = await run({ message: "tezliklə nə olacaq", noticeShown: true }, `Salam. [[ayah:2:168]]`);
  assert.match(r2.reply, /::ayah 2:168::/); // AI-nin açıq işarəsi qalır
});
