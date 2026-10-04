// Nibras Tərcümə: modelsiz tərcümə xidməti (api/_translate), /api/translate, söhbət inteqrasiyası. AI çağırılmamalıdır.
import test from "node:test";
import assert from "node:assert/strict";
import chat from "../api/chat.js";
import tr from "../api/translate.js";
import { translate, coverage } from "../api/_translate/index.js";
import { loadPart } from "../api/_translate/data.js";
import { normAr, tokAr, numbersIn } from "../api/_translate/normalize.js";
import { parseTranslate, translateReply } from "../api/_translate-chat.js";
import { envEngine } from "../api/_translate/adapter.js";
import { FOOTER } from "../api/_translate/messages.js";

const HE = "عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللَّهِ بْنِ عُمَرَ بْنِ الخَطَّابِ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: «بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إلَهَ إلَّا اللَّهُ وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ»";
const run = async (body) => {
  const res = { setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const realFetch = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try { await chat({ method: "POST", body }, res); } finally { globalThis.fetch = realFetch; }
  return res.body;
};
const http = async (method, body, headers = {}) => {
  const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, end(s) { this.raw = s; } };
  await tr({ method, headers, body, socket: { remoteAddress: "127.0.0." + Math.floor(Math.random() * 250) } }, res);
  return { code: res.statusCode, headers: res.headers, json: res.raw ? JSON.parse(res.raw) : null };
};

test("əhatə: 3574 hədis, az/tr/en/ru sayları", async () => {
  const c = await coverage();
  assert.equal(c.ar, 3574);
  assert.ok(c.az > 400 && c.tr > 2000 && c.en > 2000 && c.ru > 2000);
});

test("normallaşdırma: hərəkələr, həmzə, Şamilə ligaturaları və ﷺ", () => {
  assert.equal(normAr("إِنَّمَا الأَعْمَالُ"), "انما الاعمال");
  assert.deepEqual(tokAr("سمعت عمر ﵁ يقول"), ["سمعت", "عمر", "رضي", "الله", "عنه", "يقول"]);
  assert.equal(tokAr("ﷺ").join(" "), normAr("صلى الله عليه وسلم"));
  assert.deepEqual(numbersIn("٣ və 12 və ۴"), ["3", "12", "4"]);
});

test("hədis: tam mətn -> az hazır tərcümə, mənbə, footer, çarpaz dillər", async () => {
  const r = await translate({ text: HE, to: "az" });
  assert.equal(r.ok, true);
  assert.equal(r.method, "lookup");
  assert.ok(["exact", "normalized"].includes(r.match.type));
  assert.equal(r.match.id, 66512);
  assert.match(r.translation, /İslam beş təməl üzərində qurulub/);
  assert.equal(r.translation_lang, "az");
  assert.equal(r.sources[0].name, "HadeethEnc.com");
  assert.match(r.sources[0].url, /^https:\/\/hadeethenc\.com\/az\/browse\/hadith\/66512$/);
  assert.equal(r.footer, "Nibras Tərcümə ilə tərcümə olunub, xətalar ola bilər");
  assert.equal(r.brand, "Nibras Tərcümə");
  assert.deepEqual(r.parallel.map((p) => p.lang).sort(), ["en", "ru", "tr"]);
  assert.equal(r.crosscheck.check, "numbers");
  assert.ok(r.confidence >= 0.97);
});

test("hədis: hərəkəsiz/hissəvi mətn -> fragment, hədisin tam tərcüməsi; isnadlı giriş -> contains", async () => {
  const frag = await translate({ text: "بني الاسلام على خمس شهادة ان لا اله الا الله", to: "tr" });
  assert.equal(frag.method, "lookup");
  assert.ok(["fragment", "matn"].includes(frag.match.type));
  assert.match(frag.translation_lang, /tr/);
  assert.match(frag.translation, /İslam/);
  const withIsnad = await translate({ text: "حدثنا فلان عن فلان، " + HE.replace(/^[^«]*/, "قال النبي: "), to: "az" });
  assert.ok(["contains", "matn", "fragment"].includes(withIsnad.match?.type), withIsnad.method);
});

test("formul lüğəti: ﷺ, رضي الله عنهما və tərs istiqamət; footer", async () => {
  const a = await translate({ text: "ﷺ", to: "az" });
  assert.equal(a.method, "lexicon");
  assert.equal(a.translation, "Allahın salavatı və salamı onun üzərinə olsun");
  assert.ok(a.footer);
  const b = await translate({ text: "رضي الله عنهما", to: "ru" });
  assert.equal(b.translation, "да будет доволен Аллах ими обоими");
  const back = await translate({ text: "Allah ondan razı olsun", to: "ar" });
  assert.equal(back.method, "lexicon");
  assert.match(back.translation, /^رضي الله عنه/);
  assert.ok(back.candidates.length >= 2, "az eyni mətn عنه/عنها üçün: qeyri-müəyyənlik bildirilir");
});

test("mənbə yoxdur: uydurma yoxdur, dürüst mesaj, footer yoxdur", async () => {
  for (const text of ["ذهب الولد إلى المدرسة صباحا مع أصدقائه في الصباح الباكر", "hello world this is a test"]) {
    const r = await translate({ text, to: "az" });
    assert.equal(r.method, "no-source");
    assert.equal(r.translation, null);
    assert.equal(r.notes[0], "Bu mətn üçün hazır tərcümə mənbəsi tapılmadı.");
    assert.equal(r.footer, undefined);
  }
});

test("qismən oxşarlıq: tərcümə kimi verilmir, closest ayrıca", async () => {
  // Buxari 1-in sözləri HadeethEnc-dəki eyni mənalı, lakin fərqli rəvayətdən fərqlənir
  const r = await translate({ text: "إنما الأعمال بالنيات وإنما لكل امرئ ما نوى فمن كانت هجرته إلى دنيا يصيبها أو إلى امرأة ينكحها فهجرته إلى ما هاجر إليه", to: "az" });
  assert.equal(r.translation, null);
  assert.equal(r.method, "no-source");
  assert.ok(r.closest && r.closest.match.id);
  assert.match(r.notes.join(" "), /ən yaxın hədis/);
});

test("hədəf dildə yoxdursa: digər dillər etiketlə, çevrilmir", async () => {
  const ar = await loadPart("ar");
  const az = await loadPart("az");
  const tr_ = await loadPart("tr");
  const i = ar.findIndex((row, k) => !az[k] && tr_[k] && row[1].split(/\s+/).length > 12);
  assert.ok(i >= 0);
  const r = await translate({ text: ar[i][1], to: "az" });
  assert.equal(r.method, "lookup-alt-lang");
  assert.equal(r.translation, null);
  assert.ok(r.parallel.length >= 1 && r.parallel.every((p) => p.lang !== "az" && p.label && p.source.url));
  assert.ok(r.footer);
  assert.match(r.notes[0], /dilində hazır tərcümə yoxdur/);
});

test("footer 5 dildə (az/tr/en/ru/ar), brend adı saxlanır", async () => {
  for (const ui of ["az", "tr", "en", "ru", "ar"]) {
    const r = await translate({ text: "ﷺ", to: "az", ui });
    assert.equal(r.footer, FOOTER[ui]);
    assert.ok(r.footer.includes("Nibras Tərcümə"));
  }
});

test("səhv girişlər: boş, eyni dil, naməlum dil, uzun mətn", async () => {
  assert.equal((await translate({ text: "", to: "az" })).ok, false);
  assert.equal((await translate({ text: "abc", from: "az", to: "az" })).ok, false);
  assert.equal((await translate({ text: "abc", to: "xx" })).ok, false);
  assert.equal((await translate({ text: "ا".repeat(4001), to: "az" })).ok, false);
});

test("model adapteri: opts.engine ilə method:model, maşın tərcüməsi etiketi; hazır tərcümə varsa model çağırılmır", async () => {
  let calls = 0;
  const engine = async ({ text, from, to }) => { calls++; return { translation: `M(${from}>${to})`, engine: "test-nmt", confidence: 0.55 }; };
  const r = await translate({ text: "ذهب الولد إلى المدرسة صباحا مع أصدقائه", to: "az", engine });
  assert.equal(r.method, "model");
  assert.equal(r.translation, "M(ar>az)");
  assert.equal(r.sources[0].type, "model");
  assert.match(r.notes[0], /Maşın tərcüməsi/);
  assert.ok(r.footer);
  const before = calls;
  const hit = await translate({ text: HE, to: "az", engine });
  assert.equal(hit.method, "lookup");
  assert.equal(calls, before);
  const off = await translate({ text: "ذهب الولد إلى المدرسة صباحا مع أصدقائه", to: "az", engine, model: false });
  assert.equal(off.method, "no-source");
  const bad = await translate({ text: "ذهب الولد إلى المدرسة صباحا مع أصدقائه", to: "az", engine: async () => null });
  assert.equal(bad.method, "no-source");
});

test("TRANSLATE_ENGINE_URL: env adapteri sorğu müqaviləsi, xətada null", async () => {
  const prev = { u: process.env.TRANSLATE_ENGINE_URL, k: process.env.TRANSLATE_ENGINE_KEY };
  const realFetch = globalThis.fetch;
  try {
    delete process.env.TRANSLATE_ENGINE_URL;
    assert.equal(envEngine(), null);
    process.env.TRANSLATE_ENGINE_URL = "https://nmt.example/translate";
    process.env.TRANSLATE_ENGINE_KEY = "s3cret";
    let seen;
    globalThis.fetch = async (url, init) => { seen = { url, init }; return { ok: true, json: async () => ({ translation: " salam ", engine: "nllb" }) }; };
    const out = await translate({ text: "ذهب الولد إلى المدرسة صباحا مع أصدقائه", to: "az" });
    assert.equal(out.method, "model");
    assert.equal(out.translation, "salam");
    assert.equal(seen.url, "https://nmt.example/translate");
    assert.deepEqual(JSON.parse(seen.init.body), { text: "ذهب الولد إلى المدرسة صباحا مع أصدقائه", from: "ar", to: "az" });
    assert.equal(seen.init.headers.Authorization, "Bearer s3cret");
    globalThis.fetch = async () => { throw new Error("down"); };
    const down = await translate({ text: "ذهب الولد إلى المدرسة صباحا مع أصدقائه", to: "az" });
    assert.equal(down.method, "no-source");
  } finally {
    globalThis.fetch = realFetch;
    for (const [k, v] of [["TRANSLATE_ENGINE_URL", prev.u], ["TRANSLATE_ENGINE_KEY", prev.k]]) if (v === undefined) delete process.env[k]; else process.env[k] = v;
  }
});

test("HTTP: GET məlumat, POST tək və toplu, CORS, API açarı, səhv JSON", async () => {
  const opt = await http("OPTIONS");
  assert.equal(opt.code, 204);
  assert.equal(opt.headers["Access-Control-Allow-Origin"], "*");
  const info = await http("GET");
  assert.equal(info.code, 200);
  assert.equal(info.json.brand, "Nibras Tərcümə");
  assert.equal(info.json.model_free, true);
  assert.equal(info.json.coverage.ar, 3574);
  const one = await http("POST", { text: HE, to: "ru" });
  assert.equal(one.code, 200);
  assert.equal(one.json.method, "lookup");
  assert.match(one.json.translation, /Ислам/);
  const batch = await http("POST", { texts: [HE, "ﷺ", "ذهب الولد إلى المدرسة صباحا مع أصدقائه"], to: "az" });
  assert.deepEqual(batch.json.results.map((x) => x.method), ["lookup", "lexicon", "no-source"]);
  assert.equal((await http("POST", { text: "", to: "az" })).code, 400);
  assert.equal((await http("PUT", {})).code, 405);
  const prev = process.env.TRANSLATE_API_KEY;
  process.env.TRANSLATE_API_KEY = "k-123";
  try {
    assert.equal((await http("POST", { text: HE, to: "az" })).code, 401);
    assert.equal((await http("POST", { text: HE, to: "az" }, { "x-api-key": "bad" })).code, 401);
    assert.equal((await http("POST", { text: HE, to: "az" }, { "x-api-key": "k-123" })).code, 200);
    assert.equal((await http("POST", { text: HE, to: "az" }, { authorization: "Bearer k-123" })).code, 200);
  } finally {
    if (prev === undefined) delete process.env.TRANSLATE_API_KEY; else process.env.TRANSLATE_API_KEY = prev;
  }
});

test("söhbət əmri: parseTranslate (cue, hədəf dil, iki nöqtə)", () => {
  assert.deepEqual(parseTranslate("tərcümə et: بني الإسلام على خمس"), { ui: "az", to: null, def: "az", text: "بني الإسلام على خمس" });
  assert.equal(parseTranslate("translate to russian: بني الإسلام على خمس").to, "ru");
  assert.equal(parseTranslate("переведи на турецкий: بني الإسلام على خمس").to, "tr");
  assert.equal(parseTranslate("ترجم إلى الإنجليزية: بني الإسلام على خمس").to, "en");
  assert.equal(parseTranslate("tərcümə et عن عمر قال: إنما الأعمال بالنيات").text, "عن عمر قال: إنما الأعمال بالنيات");
  assert.equal(parseTranslate("translate this code to python"), null);
  assert.equal(parseTranslate("salam necəsən"), null);
});

test("söhbət: «tərcümə et: …» hazır tərcümə + footer, AI çağırılmır, dini bildiriş yoxdur", async () => {
  const r = await run({ message: "tərcümə et: " + HE, noticeShown: false });
  assert.equal(r.success, true);
  assert.equal(r.usedAI, false);
  assert.ok(!r.notice, "bildiriş verilmir");
  assert.match(r.reply, /İslam beş təməl üzərində qurulub/);
  assert.match(r.reply, /hadeethenc\.com\/az\/browse\/hadith\/66512/);
  assert.match(r.reply, /Nibras Tərcümə ilə tərcümə olunub, xətalar ola bilər/);
  const ru = await run({ message: "переведи: صلى الله عليه وسلم" });
  assert.match(ru.reply, /мир ему и благословение Аллаха/);
  assert.match(ru.reply, /Переведено с помощью Nibras Tərcümə/);
  const none = await run({ message: "tərcümə et: ذهب الولد إلى المدرسة صباحا مع أصدقائه" });
  assert.equal(none.reply, "Bu mətn üçün hazır tərcümə mənbəsi tapılmadı.");
  assert.equal(none.usedAI, false);
});

test("söhbət: digər idarəçilər oğurlanmır; qeyri-ərəb tərcümə istəyi AI-yə keçir", async () => {
  const had = await run({ message: "hədis axtar: الصلاة نور" });
  assert.match(had.reply, /Kütübü-sittədə/);
  assert.equal(await translateReply("translate: hello world"), null);
  assert.equal(await translateReply("translate this code to python"), null);
  assert.equal(await translateReply("salam"), null);
});
