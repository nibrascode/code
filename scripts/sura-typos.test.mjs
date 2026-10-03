// Surə adı yazı səhvlərinə dözümlülük (ərəb: təkrar alef/hərf, ال, hamza/ya/ta marbuta, hərəkə; fuzzy məsafə 1-2 yalnız «surə» sözü ilə)
// və «Bəqərə 2» kimi sadə sorğuların söz izahı yox, Tanzil ayəsi + təfsir düymələri verməsi.
import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/chat.js";
import { ayahLookup, ayahReply } from "../api/_ayah.js";
import { tafsirReply } from "../api/_tafsir.js";
import { SURAS } from "../api/_quran/suras.js";
import { SURA_NAMES_AR } from "../api/_quran/quran.js";

async function chat(message, extra = {}) {
  const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const real = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try { await handler({ method: "POST", body: { message, ...extra } }, res); } finally { globalThis.fetch = real; }
  return res.body;
}
const one = (q) => {
  const r = ayahLookup(q);
  return r && r.reps.length === 1 ? r.reps[0].s : null;
};
const hasChips = (r) => /\n::sug::\n[\s\S]*::\/sug::$/.test(r) && (r.match(/^::sb:: /gm) || []).length === 3;

test("canlı hesabatlar: «Bəqərə 2» və s. söz izahı yox, ayə + təfsir düymələri; «سورة االكهف» Kəhf surəsidir (AI-yə getmir)", async () => {
  for (const [q, s, a] of [["Bəqərə 2", 2, 2], ["Bəqərə ayə 2", 2, 2], ["سورة البقرة الآية 2", 2, 2], ["البقرة 2", 2, 2], ["بقرة 2", 2, 2], ["Bəqərə 5-ci ayə", 2, 5], ["Bəqərə 1-5", 2, 1]]) {
    const r = await chat(q);
    assert.equal(r.usedAI, false, q);
    assert.ok(r.reply.startsWith(`::ayah ${s}:${a}`), q + " → " + r.reply.slice(0, 40));
    assert.ok(hasChips(r.reply), q);
    assert.doesNotMatch(r.reply, /جواب جاهز|Mənası:/, q);
  }
  for (const q of ["سورة االكهف", "سورة الكهف", "سورة كهف", "سوره الكهف", "سورة الكـهف", "سورة اللكهف"]) {
    const r = await chat(q);
    assert.equal(r.usedAI, false, q);
    assert.match(r.reply, /^::ayah 18:1-/, q);
    assert.ok(hasChips(r.reply), q);
    assert.match(r.reply, /::sb:: .* \| .*الكهف 1-8/, q);
  }
});

test("söz izahı yalnız açıq istəkdə: «كلمات», «معاني الكلمات», «söz izahı», «kəlmələrin mənası», «vocabulary»", async () => {
  for (const q of ["Bəqərə 1-59 sözlərin izahı", "Bəqərə 2 kəlmələrin mənası", "Bəqərə 2 vocabulary", "Bəqərə 2 söz izahı", "معاني الكلمات سورة البقرة 2", "البقرة 2 كلمات", "شرح كلمات سورة البقرة", "Bəqərə 5-ci ayənin sözlərinin mənası"]) {
    const r = await chat(q);
    assert.equal(r.usedAI, false, q);
    assert.doesNotMatch(r.reply, /^::ayah/, q);
    assert.doesNotMatch(r.reply, /::sug::/, q);
    assert.match(r.reply, /الْكِتَابُ|الٓمٓ|ٱلۡ|[\u0600-\u06FF]/, q);
  }
});

test("«سورة ملك» (ال-siz) və ال variantları Mülk surəsidir; təfsir sorğusu və təklif də işləyir", async () => {
  for (const q of ["سورة ملك", "سورة الملك", "سورة المُلك", "سوره الملك", "سورة المــلك", "سورة االملك", "سورة الملكك", "Mülk surəsi", "mulk surasi", "Mulk suresi"]) assert.equal(one(q), 67, q);
  const t = await tafsirReply("تفسير ملك 1-3");
  assert.match(t, /^::ayah 67:1::/);
  const t2 = await tafsirReply("تفسير سورة االملك 1-3");
  assert.match(t2, /^::ayah 67:1::/);
  assert.match((await chat("سورة ملك")).reply, /::sb:: .* \| .*الملك 1-8/);
});

// ---------------------------------------------------------------- bütün surələr
const strip = (w) => w.replace(/[\u064B-\u0652\u0670]/g, "");
const cue = { az: "surəsi", tr: "suresi", en: "surah", ru: "сура" };
function tally(variants) {
  let ok = 0, wrong = [], none = 0;
  for (const [q, s] of variants) {
    const r = one(q);
    if (r === s) ok++;
    else if (r === null) none++;
    else wrong.push(`${q}→${r}`);
  }
  return { ok, none, wrong, tot: variants.length };
}

test("ərəbcə: bütün 114 surə — təkrar alef, ال-siz, artıq ال, hərəkəsiz, ta marbuta, hamza variantları düzgün tanınır, yanlış surəyə düşmür", () => {
  const classes = {
    doubledAlefAfterCue: (n) => `سورة ا${strip(n)}`,
    plain: (n) => `سورة ${strip(n)}`,
    tashkeel: (n) => `سورة ${n}`,
    noAl: (n) => `سورة ${strip(n).replace(/^ال/, "")}`,
    extraAl: (n) => `سورة ال${strip(n).replace(/^ال/, "")}`,
    taMarbuta: (n) => `سورة ${strip(n).replace(/ة/g, "ه")}`,
    hamza: (n) => `سورة ${strip(n).replace(/[أإآ]/g, "ا")}`,
    ya: (n) => `سورة ${strip(n).replace(/ى/g, "ي")}`,
    dupLetter: (n) => { const w = strip(n); const i = Math.floor(w.length / 2); return `سورة ${w.slice(0, i)}${w[i]}${w.slice(i)}`; },
    tatweel: (n) => { const w = strip(n); const i = Math.floor(w.length / 2); return `سورة ${w.slice(0, i)}ـ${w.slice(i)}`; },
  };
  for (const [name, f] of Object.entries(classes)) {
    const v = SURA_NAMES_AR.map((n, i) => [f(n), i + 1]);
    const t = tally(v);
    assert.deepEqual(t.wrong, [], `${name}: yanlış surə`);
    assert.ok(t.ok / t.tot >= 0.9, `${name}: tanınma ${t.ok}/${t.tot}; tapılmayan nümunə ${v.filter(([q, s]) => one(q) !== s).slice(0, 8).map(([q]) => q)}`);
  }
});

test("latın/kiril: təkrar hərf (bütün dillər, 114 surə) tanınır; 1 hərf səhvi (silmə/yerdəyişmə/əvəzləmə) yalnız «surə» sözü ilə və yanlış surəyə az düşür", () => {
  const dbl = (w) => { const i = Math.floor(w.length / 2); return w.slice(0, i) + w[i] + w.slice(i); };
  const swap = (w) => { const i = Math.floor(w.length / 2) - 1; return w.slice(0, i) + w[i + 1] + w[i] + w.slice(i + 2); };
  const del = (w) => { const i = Math.floor(w.length / 2); return w.slice(0, i) + w.slice(i + 1); };
  let tot = 0, ok = 0, wrongN = 0;
  for (const lang of ["az", "tr", "en", "ru"]) {
    const dv = [];
    const ev = [];
    for (const s of SURAS) {
      const nm = s[lang];
      if (nm.replace(/[^\p{L}]/gu, "").length < 5) continue;
      dv.push([`${dbl(nm)} ${cue[lang]}`, s.n]);
      for (const f of [swap, del]) ev.push([`${f(nm)} ${cue[lang]}`, s.n]);
    }
    const d = tally(dv);
    assert.deepEqual(d.wrong, [], lang + " dbl");
    assert.ok(d.ok / d.tot >= 0.93, `${lang} dbl ${d.ok}/${d.tot}`);
    const e = tally(ev);
    tot += e.tot; ok += e.ok; wrongN += e.wrong.length;
  }
  assert.ok(ok / tot >= 0.6, `fuzzy tanınma ${ok}/${tot}`);
  assert.ok(wrongN / tot <= 0.06, `fuzzy yanlış ${wrongN}/${tot}`);
});

test("fuzzy adi söhbəti oğurlamır: «surə/ayə» sözü və ya nömrə yoxdursa heç bir yaxın ad işləmir", () => {
  for (const q of ["Kahv", "kehv", "Mulkk", "salam necəsən", "sabah gedirik", "bu gün hava gözəldir", "mənim adım Əli", "kitab oxudum", "ال", "كيف الحال", "هذا كتاب جميل", "الكهوف مظلمة", "كهف", "قرية", "ملك", "الملكة", "what is the best time", "Fatihah mosque", "fatiha", "hello world", "привет как дела", "балкон"]) {
    const r = ayahReply(q);
    // «Fatihə» və «kehf» kimi dəqiq/skelet adlar əvvəlki qaydalarla tanına bilər; yeni fuzzy yalnız cue ilə: dəyişən nəticə yoxdur
    assert.ok(r === null || /^::ayah (1|18):/.test(r), q + " → " + String(r).slice(0, 30));
  }
  for (const q of ["Kahv", "Mulkk", "salam necəsən", "sabah gedirik", "mənim adım Əli", "قرية", "ملك", "الملكة", "hello world", "привет как дела", "балкон"]) assert.equal(ayahReply(q), null, q);
  // cue olduqda isə fuzzy işləyir
  assert.equal(one("Kahv surəsi"), 18);
  assert.equal(one("Mulkk surasi"), 67);
  assert.equal(one("Bakarah suresi"), 2);
  assert.equal(one("سورة الكهوف"), 18);
});

test("fuzzy birmənalı olmalıdır: iki surəyə eyni məsafədə olan yazı cavabsız qalır", () => {
  // «Taha»/«Tahrim» kimi yaxın adlar: tək-yeganə ən yaxın yoxdursa null
  const r = ayahLookup("Xyzqw surəsi");
  assert.equal(r, null);
});
