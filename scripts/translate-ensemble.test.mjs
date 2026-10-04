// Nibras Tərcümə maşın mühərriki (ensemble): saxta provayderlərlə. Heç bir real AI/şəbəkə çağırışı yoxdur.
import test from "node:test";
import assert from "node:assert/strict";
import { translate } from "../api/_translate/engine.js";
import handler from "../api/translate.js";
import { aiConfig } from "../api/_ai.js";
import { createEnsemble, buildSystem, pickProviders, markProvider, ipAllowed, resetHealth, resetLimits } from "../api/_translate-ensemble.js";
import { splitChunks, maskVerses, unmaskVerses, consensus, similarity, cleanCandidate, validateCandidate } from "../api/_translate-consensus.js";
import { memoryStore, seedStore, layeredStore, cacheKey } from "../api/_translate-cache.js";

const HE = "عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللَّهِ بْنِ عُمَرَ بْنِ الخَطَّابِ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: «بُنِيَ الإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إلَهَ إلَّا اللَّهُ وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ»";
const FREE = "ذهب الولد إلى المدرسة صباحا مع أصدقائه، ثم عاد إلى البيت بعد الظهر.";
const AZ = "Oğlan səhər dostları ilə birlikdə məktəbə getdi, sonra günortadan sonra evə qayıtdı.";
const AZ2 = "Oğlan səhər dostları ilə məktəbə getdi, sonra günortadan sonra evə qayıtdı.";
const AZ3 = "Uşaq səhər yoldaşları ilə birlikdə məktəbə getdi, daha sonra günorta evə döndü.";

const fast = { deadlineMs: 1500, perCallMs: 800, graceMs: 60, verify: false };
function mk(replies, extra = {}) {
  const calls = [];
  const ask = async (id, history, message) => {
    const sys = aiConfig.getStore()?.system || "";
    calls.push({ id, message, sys });
    const r = replies[id];
    if (typeof r === "function") return r({ id, message, sys });
    return r === undefined ? { skipped: true } : r;
  };
  const engine = createEnsemble({ ask, available: () => Object.keys(replies), store: memoryStore(), ...fast, ...extra });
  return { engine, calls };
}
const ok = (t) => ({ ok: true, reply: t });
const run = (engine, text = FREE, to = "az", extra = {}) => translate({ text, from: "ar", to, ui: "az", engine, ...extra });

test.beforeEach(() => { resetHealth(); resetLimits(); });

test("razılaşma: 3 provayder eyni mənanı verir → method ensemble, yüksək etibar, maşın etiketi, footer, provayder adı yoxdur", async () => {
  const { engine, calls } = mk({ gemini: ok(AZ), xai: ok(AZ2), mistral: ok(AZ) });
  const r = await run(engine);
  assert.equal(r.method, "ensemble");
  assert.equal(r.translation, AZ);
  assert.equal(r.translation_lang, "az");
  assert.ok(r.confidence >= 0.8, "confidence " + r.confidence);
  assert.equal(r.machine, true);
  assert.match(r.notes[0], /Maşın tərcüməsi/);
  assert.equal(r.footer, "Nibras Tərcümə ilə tərcümə olunub, xətalar ola bilər");
  assert.deepEqual(r.sources.map((s) => s.name), ["Nibras Tərcümə"]);
  const json = JSON.stringify(r);
  for (const p of ["gemini", "xai", "mistral"]) assert.ok(!json.includes(p), p + " sızıb");
  assert.equal(calls.length, 3);
  assert.equal(r.diagnostics, undefined);
  const d = await run(mk({ gemini: ok(AZ), xai: ok(AZ2), mistral: ok(AZ) }).engine, FREE, "az", { debug: true });
  assert.deepEqual([...d.diagnostics.answered].sort(), ["gemini", "mistral", "xai"]);
});

test("ciddi fikir ayrılığı: medoid seçilir, etibar aşağı, xəbərdarlıq qeydi", async () => {
  const { engine } = mk({
    gemini: ok("Bugün hava çox gözəl idi və biz parka getdik, orada uzun müddət gəzdik."),
    xai: ok("Qiymətlər keçən ay xeyli artdı, ona görə bazara az adam gəldi."),
    mistral: ok("Müəllim şagirdlərə yeni dərs izah etdi və ev tapşırığı verdi."),
  });
  const r = await run(engine);
  assert.equal(r.method, "ensemble");
  assert.ok(r.confidence <= 0.5, "confidence " + r.confidence);
  assert.ok(r.flags.includes("disagree"));
  assert.ok(r.notes.some((n) => /fərqləndi/.test(n)));
});

test("kənar cavab: 2 razı + 1 kənar → razı olanlardan biri seçilir", async () => {
  const { engine } = mk({ gemini: ok(AZ), xai: ok("Qiymətlər keçən ay xeyli artdı, ona görə bazara az adam gəldi."), mistral: ok(AZ2) });
  const r = await run(engine);
  assert.ok([AZ, AZ2].includes(r.translation));
  assert.ok(r.confidence >= 0.6);
});

test("bir provayder uğursuz (xəta + atılan istisna): qalanlarla nəticə, 2-ci dalğa lazım olsa başqası çağırılır", async () => {
  const { engine, calls } = mk({ gemini: { ok: false, detail: "429" }, xai: () => { throw new Error("boom"); }, mistral: ok(AZ), groq: ok(AZ2), deepseek: ok(AZ) });
  const r = await run(engine, FREE, "az", { debug: true });
  assert.equal(r.method, "ensemble");
  assert.ok([AZ, AZ2].includes(r.translation));
  assert.ok(r.diagnostics.failed.length >= 1);
  assert.ok(calls.some((c) => ["groq", "deepseek"].includes(c.id)), "ehtiyat provayder çağırılmadı");
});

test("bütün provayderlər uğursuz və ya açar yoxdur → null → no-source (uydurma yoxdur)", async () => {
  const bad = mk({ gemini: { ok: false }, xai: { ok: false }, mistral: { ok: false } });
  const r = await run(bad.engine);
  assert.equal(r.method, "no-source");
  assert.equal(r.translation, null);
  const none = mk({});
  assert.equal((await run(none.engine)).method, "no-source");
});

test("timeout: asılan provayder gözlənilmir, qalan cavablar istifadə olunur", async () => {
  const hang = () => new Promise(() => {});
  const { engine } = mk({ gemini: hang, xai: ok(AZ), mistral: ok(AZ2) }, { deadlineMs: 500, perCallMs: 300, graceMs: 80 });
  const t0 = Date.now();
  const r = await run(engine, FREE, "az", { debug: true });
  assert.ok(Date.now() - t0 < 1500);
  assert.equal(r.method, "ensemble");
  assert.ok(r.diagnostics.failed.some((f) => f.id === "gemini" && f.reason === "timeout"));
});

test("yalnız 1 etibarlı cavab: etibar aşağı + «məhdud yoxlama» qeydi, yaddaşa yazılmır", async () => {
  const { engine } = mk({ gemini: ok(AZ), xai: { ok: false }, mistral: { ok: false }, groq: { ok: false }, deepseek: { ok: false } });
  const r = await run(engine);
  assert.equal(r.method, "ensemble");
  assert.ok(r.confidence <= 0.5);
  assert.ok(r.flags.includes("lowSupport"));
  const second = mk({ gemini: ok(AZ) });
  await run(second.engine);
  const n = second.calls.length;
  await run(second.engine);
  assert.ok(second.calls.length > n, "tək cavab keşlənməməlidir");
});

test("keş: eyni mətn (hərəkə/alif fərqi ilə) ikinci dəfə AI-ya getmir; fərqli hədəf dil ayrıca", async () => {
  const { engine, calls } = mk({ gemini: ok(AZ), xai: ok(AZ2), mistral: ok(AZ) });
  const a = await run(engine);
  assert.equal(calls.length, 3);
  const b = await run(engine, FREE.replace("إلى", "إِلَى"));
  assert.equal(calls.length, 3);
  assert.equal(b.translation, a.translation);
  assert.equal(b.method, "ensemble");
  const ru = await run(engine, FREE, "ru");
  assert.equal(calls.length, 6, "ru ayrıca açardır: yenidən çağırılır");
  assert.equal(ru.method, "no-source", "az mətni ru üçün kiril yoxlamasından keçmir");
});

test("toxum faylı: hazır tərcümə AI-ya getmədən qaytarılır", async () => {
  const seed = seedStore([{ ar: FREE, az: "Toxumdan tərcümə.", confidence: 0.9 }]);
  const { engine, calls } = mk({ gemini: ok(AZ) }, { store: layeredStore([seed, memoryStore()]) });
  const r = await run(engine);
  assert.equal(r.translation, "Toxumdan tərcümə.");
  assert.equal(calls.length, 0);
  assert.equal(r.method, "ensemble");
});

test("uzun mətn: cümlə-uyğun hissələr, sıra və nömrələmə qorunur, hər hissə ≤ chunkMax", async () => {
  const sentences = Array.from({ length: 12 }, (_, i) => `${i + 1}. ذهب الولد إلى المدرسة صباحا مع أصدقائه في اليوم رقم ${i + 1} وتعلم الدرس الجديد بعناية كبيرة وحفظ ما قاله المعلم.`);
  const text = sentences.join("\n");
  const sizes = [];
  const reply = ({ message }) => {
    const body = /<<<\n([\s\S]*)\n>>>/.exec(message)[1];
    sizes.push(body.length);
    return ok(body.split("\n").map((l) => l.replace(/^(\d+)\..*$/, "$1. Tərcümə cümləsi $1: oğlan sabah dostları ilə məktəbə getdi və yeni dərsi diqqətlə öyrəndi.")).join("\n"));
  };
  const { engine, calls } = mk({ gemini: reply, xai: reply, mistral: reply }, { chunkMax: 300 });
  const r = await run(engine, text, "az", { debug: true });
  assert.equal(r.method, "ensemble");
  assert.ok(r.diagnostics.chunks >= 4, "chunks " + r.diagnostics.chunks);
  assert.ok(sizes.every((s) => s <= 300), "böyük hissə: " + Math.max(...sizes));
  const lines = r.translation.split("\n");
  assert.equal(lines.length, 12);
  lines.forEach((l, i) => assert.equal(l, `${i + 1}. Tərcümə cümləsi ${i + 1}: oğlan sabah dostları ilə məktəbə getdi və yeni dərsi diqqətlə öyrəndi.`));
  assert.equal(new Set(calls.map((c) => c.message)).size, r.diagnostics.chunks);
});

test("splitChunks: cümlə sərhədi, çox uzun cümlə söz sərhədində bölünür, yer tutucu bölünmür", () => {
  const c = splitChunks("أولا. ثانيا؟ ثالثا! رابعا", 12);
  assert.ok(c.length >= 2 && c.every((x) => x.text.length <= 12));
  const long = splitChunks(Array(60).fill("كلمة").join(" "), 50);
  assert.ok(long.length > 3 && long.every((x) => x.text.length <= 50));
  const { masked } = maskVerses("قال {وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ} ثم");
  assert.equal(splitChunks(masked, 100).length, 1);
});

test("Quran ayələri: modelə yer tutucu gedir, cavabda olduğu kimi {…} içində geri qoyulur; yer tutucunu itirən namizəd atılır", async () => {
  const verse = "{وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ}";
  const text = `قال الله تعالى ${verse} وهذا أمر بالصلاة والزكاة.`;
  const good = ({ message }) => { assert.ok(!message.includes("وَأَقِيمُوا"), "ayə modelə getdi"); return ok("Uca Allah buyurdu: [[Q1]] Bu, namaz və zəkat əmridir."); };
  const lost = ok("Uca Allah buyurdu: Namazı qılın. Bu, namaz və zəkat əmridir.");
  const { engine } = mk({ gemini: good, xai: good, mistral: lost });
  const r = await run(engine, text, "az", { debug: true });
  assert.equal(r.method, "ensemble");
  assert.ok(r.translation.includes(verse));
  assert.ok(!r.translation.includes("[[Q"));
  assert.equal(r.translation, `Uca Allah buyurdu: ${verse} Bu, namaz və zəkat əmridir.`);
  assert.ok(r.diagnostics.failed.some((f) => f.reason === "verse-lost"));
  assert.ok(r.flags.includes("verseKept"));
});

test("prompt: yalnız tərcümə, ﷺ/رضي الله عنه cədvəli, «yaratmaq» qadağası, az üçün Latın + ingilis/türk çarpaz anlama", async () => {
  const { engine, calls } = mk({ gemini: ok(AZ), xai: ok(AZ), mistral: ok(AZ) });
  await run(engine, "قال رسول الله ﷺ كلاما حسنا يا أبا بكر رضي الله عنه وأحسن إلى الناس جميعا في كل وقت.");
  const sys = calls[0].sys;
  assert.match(sys, /ONLY the Azerbaijani/);
  assert.match(sys, /Do NOT add anything, do NOT omit anything/);
  assert.match(sys, /yaratmaq/);
  assert.match(sys, /ﷺ \/ صلى الله عليه وسلم → Allahın salavatı və salamı onun üzərinə olsun/);
  assert.match(sys, /رضي الله عنه → Allah ondan razı olsun/);
  assert.match(sys, /\[\[Q1\]\]/);
  assert.match(sys, /English and Turkish/);
  assert.match(sys, /Latin script/);
  assert.match(buildSystem("ru", []), /ONLY the Russian/);
  assert.ok(!/English and Turkish/.test(buildSystem("ru", [])));
});

test("rus dili: kiril yoxlaması — latın cavab etibarsız sayılır, kiril cavab qəbul olunur", async () => {
  const ruText = "Мальчик пошёл в школу утром вместе с друзьями, потом вернулся домой после полудня.";
  const { engine } = mk({ gemini: ok(ruText), xai: ok(ruText), mistral: ok(AZ) });
  const r = await run(engine, FREE, "ru", { debug: true });
  assert.equal(r.translation, ruText);
  assert.ok(r.diagnostics.failed.some((f) => f.reason === "script"));
});

test("«yaratmaq» cəzası: Allahdan başqa üçün «yaradıb» deyən namizəd seçilmir", async () => {
  const bad = "Oğlan səhər dostları ilə birlikdə məktəbə getdi, sonra yaradıb günortadan sonra evə qayıtdı.";
  const c = consensus([{ id: "a", text: bad, rank: 0 }, { id: "b", text: AZ, rank: 1 }, { id: "c", text: AZ, rank: 2 }], { source: FREE, to: "az" });
  assert.notEqual(c.best.id, "a");
});

test("yoxlama keçidi: etibar aşağı və tək hissə → JSON yoxlama; faithful:false etibarı azaldır", async () => {
  const withCheck = (t) => ({ sys }) => (/strict Arabic bilingual checker/.test(sys) ? ok('{"faithful": false, "issues": "omits the second clause"}') : ok(t));
  const { engine, calls } = mk(
    { gemini: withCheck(AZ), xai: withCheck("Qiymətlər keçən ay xeyli artdı, ona görə bazara az adam gəldi."), mistral: withCheck(AZ3) },
    { verify: true, deadlineMs: 30000, perCallMs: 5000 },
  );
  const r = await run(engine, FREE, "az", { debug: true, ctx: { deadlineAt: Date.now() + 30000 } });
  assert.ok(calls.some((c) => /checker/.test(c.sys)));
  assert.ok(r.diagnostics.verify && r.diagnostics.verify.faithful === false);
  assert.ok(r.flags.includes("unverified"));
});

test("hazır insan tərcüməsi varsa mühərrik çağırılmır; hədəfdə yoxdursa (hədis) maşın tərcüməsi, insan tərcümələri parallel[]-də", async () => {
  const { engine, calls } = mk({ gemini: ok(AZ), xai: ok(AZ), mistral: ok(AZ) });
  const hit = await translate({ text: HE, from: "ar", to: "ru", ui: "az", engine });
  assert.equal(hit.method, "lookup");
  assert.equal(calls.length, 0);
  // az dilində olmayan hədis: tapılana qədər axtarırıq
  const { loadPart } = await import("../api/_translate/data.js");
  const [ar, az] = [await loadPart("ar"), await loadPart("az")];
  const idx = ar.findIndex((_, i) => !az[i] && String(ar[i][1]).split(/\s+/).length > 8 && String(ar[i][1]).split(/\s+/).length < 60);
  const r = await translate({ text: ar[idx][1], from: "ar", to: "az", ui: "az", engine });
  assert.equal(r.method, "ensemble");
  assert.ok(r.parallel.length >= 1 && r.parallel.every((p) => p.lang !== "az"));
  assert.equal(r.translation, AZ);
  assert.ok(r.match && r.match.kind === "hadith");
});

test("hədis daha uzun mətnin içindədirsə: maşın tərcüməsi bütün mətn üçün, hədisin insan tərcüməsi parallel[]-də", async () => {
  const long = "سئل الشيخ عن حكم الصلاة فأجاب بأن الصلاة ركن عظيم من أركان الإسلام لا يجوز تركها ولا التهاون فيها، واستدل بما رواه ابن عمر رضي الله عنهما " + HE.replace(/^[^«]*/, "") + " فهذا هو الدليل على وجوب الصلاة وسائر الأركان ووجوب المحافظة عليها في وقتها.";
  const BIG = [AZ, AZ2, AZ3].join(" ");
  const { engine } = mk({ gemini: ok(BIG), xai: ok(BIG), mistral: ok(BIG) });
  const r = await translate({ text: long, from: "ar", to: "az", ui: "az", engine });
  assert.equal(r.method, "ensemble");
  assert.deepEqual(r.parallel.map((p) => p.lang).sort(), ["az", "en", "ru", "tr"]);
  assert.match(r.notes.join(" "), /hazır insan tərcüməsi/i);
});

test("limitlər: mətn > 3000 → aydın xəta; sorğu başına simvol limiti; IP limiti → 429 + mesaj", async () => {
  const long = await translate({ text: "ا".repeat(3001), from: "ar", to: "az" });
  assert.equal(long.ok, false);
  assert.match(long.error, /3000/);
  const { engine, calls } = mk({ gemini: ok(AZ), xai: ok(AZ), mistral: ok(AZ) });
  const ctx = { ip: "9.9.9.9", engineChars: 50, deadlineAt: Date.now() + 5000 };
  const lim = await translate({ text: FREE, from: "ar", to: "az", ui: "az", engine, ctx });
  assert.equal(lim.limited, "budget");
  assert.equal(lim.translation, null);
  assert.match(lim.notes[0], /limit/i);
  assert.equal(calls.length, 0);
  const e2 = mk({ gemini: ok(AZ), xai: ok(AZ), mistral: ok(AZ) }, { limits: { perMin: 2, perHour: 100 } });
  const outs = [];
  for (let i = 0; i < 3; i++) outs.push(await translate({ text: FREE + " " + i, from: "ar", to: "az", ui: "en", engine: e2.engine, ctx: { ip: "8.8.8.8", engineChars: 9999, deadlineAt: Date.now() + 5000 } }));
  assert.deepEqual(outs.map((o) => o.method), ["ensemble", "ensemble", "no-source"]);
  assert.equal(outs[2].limited, "rate");
  assert.match(outs[2].notes[0], /Too many requests/);
  assert.equal(ipAllowed("1.1.1.1", { perMin: 1, perHour: 5 }), true);
  assert.equal(ipAllowed("1.1.1.1", { perMin: 1, perHour: 5 }), false);
});

test("API: açar yoxdursa /api/translate ərəbcə sərbəst mətn üçün no-source (AI yoxdur); keş hit AI-ya getmir", async () => {
  const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, end(s) { this.raw = s; } };
  await handler({ method: "POST", headers: {}, body: { text: FREE, to: "az" }, socket: { remoteAddress: "5.5.5.5" } }, res);
  const out = JSON.parse(res.raw);
  assert.equal(res.statusCode, 200);
  assert.equal(out.method, "no-source");
});

test("provayder seçimi: açarı olan hamı fırlanmada; son vaxt cavab verənlər və hələ yoxlanmamışlar növbələşir; uğursuzlar sona", () => {
  const all = ["gemini", "xai", "mistral", "groq", "nvidia", "llm7"];
  const a = pickProviders(all, 6, new Set(), 0);
  assert.deepEqual([...a].sort(), [...all].sort(), "hamısı siyahıdadır");
  assert.equal(pickProviders(all, 5, new Set(["gemini"]), 0).includes("gemini"), false);
  // weak (nvidia, llm7) provayderlər də ilk 4-ə düşür (yalnız güclülər deyil)
  const seen = new Set();
  for (let o = 0; o < 6; o++) pickProviders(all, 3, new Set(), o).forEach((x) => seen.add(x));
  assert.ok(seen.has("nvidia") && seen.has("llm7"));
  // son vaxt OK olan öndədir; ardıcıl uğursuz olan sona düşür
  markProvider("groq", true);
  markProvider("xai", false);
  markProvider("xai", false);
  const c = pickProviders(all, 6, new Set(), 0);
  assert.equal(c[0], "groq");
  assert.equal(c[c.length - 1], "xai");
});

test("sağlamlıq diaqnostikası: açarsız yalnız kateqoriya, açarlı (x-debug-key) detail; hər provayder yoxlanır, sirr yoxdur", async () => {
  const { providerHealth, classify } = await import("../api/_translate-health.js");
  const saved = { ...process.env };
  const realFetch = globalThis.fetch;
  try {
    for (const k of Object.keys(process.env)) if (/^(GROQ|XAI|MISTRAL|OPENROUTER|HF_|GEMINI|GITHUB|GH_|DEEPSEEK|NVIDIA|NGC|CEREBRAS|SAMBANOVA|SCALEWAY|OLLAMA|LLM7|AIRFORCE|DEBUG_KEY|STATS_KEY)/i.test(k)) delete process.env[k];
    process.env.GROQ_API_KEY = "gsk_SECRET1";
    process.env.DEEPSEEK_API_KEY = "sk-SECRET2";
    process.env.SCALEWAY_ACCESS_KEY = "SCWACCESS";
    process.env.DEBUG_KEY = "dbg";
    globalThis.fetch = async (url, init) => {
      if (String(url).includes("groq")) return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: "OK" } }] }) };
      return { ok: false, status: 402, json: async () => ({ error: { message: "Insufficient Balance (request_id: x)" } }) };
    };
    const open = await providerHealth({ headers: {} });
    assert.equal(open.providers.length, 15);
    const g = open.providers.find((p) => p.provider === "groq");
    const d = open.providers.find((p) => p.provider === "deepseek");
    const sc = open.providers.find((p) => p.provider === "scaleway");
    assert.deepEqual([g.keyPresent, g.ok, g.reason], [true, true, "ok"]);
    assert.deepEqual([d.keyPresent, d.ok, d.reason], [true, false, "no-credit-or-quota"]);
    assert.deepEqual([sc.keyPresent, sc.reason], [false, "no-key"]);
    assert.deepEqual(sc.otherEnvPresent, { SCALEWAY_ACCESS_KEY: true });
    assert.deepEqual(sc.expects, ["SCALEWAY_SECRET_KEY", "SCALEWAY_API_KEY"]);
    assert.equal(d.detail, undefined);
    assert.equal(open.detailed, false);
    const json = JSON.stringify(open);
    for (const secret of ["SECRET1", "SECRET2", "SCWACCESS", "Insufficient"]) assert.ok(!json.includes(secret), secret);
    const full = await providerHealth({ headers: { "x-debug-key": "dbg" } });
    assert.equal(full.detailed, true);
    assert.match(full.providers.find((p) => p.provider === "deepseek").detail, /Insufficient Balance/);
    assert.equal(classify("Wrong API Key"), "invalid-key");
    assert.equal(classify("Rate limit exceeded"), "rate-limited");
    assert.equal(classify("Your team has either used all available credits"), "no-credit-or-quota");
  } finally {
    globalThis.fetch = realFetch;
    for (const k of Object.keys(process.env)) if (!(k in saved)) delete process.env[k];
    Object.assign(process.env, saved);
  }
});

test("oxşarlıq və təmizləmə", () => {
  assert.ok(similarity(AZ, AZ2) > 0.8);
  assert.ok(similarity(AZ, "Bazarda qiymətlər artdı.") < 0.4);
  assert.equal(cleanCandidate("```\nTərcümə: salam dünya\n```"), "salam dünya");
  assert.equal(cleanCandidate('<think>x</think>"salam"'), "salam");
  assert.equal(validateCandidate("", { source: "x", to: "az" }).ok, false);
  assert.equal(validateCandidate(AZ, { source: FREE, to: "az" }).ok, true);
  assert.equal(validateCandidate("ذهب الولد إلى المدرسة صباحا مع أصدقائه", { source: FREE, to: "az" }).reason, "script");
  assert.equal(unmaskVerses("[[Q2]] və [[Q1]]", ["{a}", "{b}"]), "{b} və {a}");
  assert.notEqual(cacheKey("أ", "az"), cacheKey("أ", "ru"));
});

test("Ərəb olmayan mənbə və ar hədəf: mühərrik null (yalnız ərəbcə mənbə)", async () => {
  const { engine, calls } = mk({ gemini: ok(AZ) });
  assert.equal(await engine({ text: "Salam dünya", from: "az", to: "ru" }), null);
  assert.equal(await engine({ text: FREE, from: "ar", to: "ar" }), null);
  assert.equal(calls.length, 0);
});
