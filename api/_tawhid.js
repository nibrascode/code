// Tövhid 1 (Əqidə 3001) dərs xülasəsi: AI-yə getmədən hazır cavab.
// Məlumat: api/_tawhid/entries.js (avtomatik yaranır: node scripts/build-tawhid.mjs;
// mənbə content/tawhid/ar.txt, az.txt və meta.mjs). Yeni tərcümə gələndə az.txt-ə əlavə edib skripti yenidən işlədin.
import { ENTRIES, TOPICS } from "./_tawhid/entries.js";
import { normAr } from "./_quran.js";

const SRC_AZ = "Mənbə: Tövhid 1 (Əqidə 3001) dərs xülasəsi (hazır cavab)";
const SRC_AR = "المصدر: التلخيص المفيد في مقرر «توحيد 1 - عقد 3001» (إجابة جاهزة)";
const NO_AZ = "Bu sualın Azərbaycanca tərcüməsi hələ əlavə olunmayıb. Ərəbcə mətn:";
const PART_AZ = "Bu sualın Azərbaycanca tərcüməsi hələ tam deyil. Hazırda olan hissə:";
const PART_AR_LABEL = "Ərəbcə tam mətn:";
const MIN_SCORE = 6;
const MAX_UNEXPLAINED = 4;
const MAX_TOKENS = 30;

// ---------- normallaşdırma ----------
function foldLat(text) {
  return String(text || "")
    .replace(/İ/g, "i")
    .replace(/I/g, "ı")
    .toLowerCase()
    .replace(/[’'`´ʻʼ‘ʿʾ]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ə/g, "e")
    .replace(/q/g, "k")
    .replace(/w/g, "v")
    .replace(/(.)\1+/g, "$1");
}

function arDigits(s) {
  return s.replace(/[٠-٩]/g, (c) => String(c.charCodeAt(0) - 0x0660)).replace(/[۰-۹]/g, (c) => String(c.charCodeAt(0) - 0x06f0));
}

const AR_RE = /[\u0600-\u06FF]/;
const AR_PREFIX = ["وال", "فال", "بال", "كال", "لل", "ال", "و", "ف", "ب", "ك", "ل"];

function arVariants(t) {
  const out = new Set([t]);
  for (let pass = 0; pass < 2; pass++) {
    for (const v of [...out]) for (const p of AR_PREFIX) if (v.startsWith(p) && v.length - p.length >= 2) out.add(v.slice(p.length));
  }
  return [...out];
}

const DROP = new Set(["hakinda", "baredə", "barede"]);

function tokenize(raw) {
  const text = arDigits(String(raw || "").replace(/[’'`´ʻʼ‘]/g, ""));
  const words = text.match(/[\p{L}\p{M}\p{N}]+/gu) || [];
  const out = [];
  for (const w of words) {
    if (AR_RE.test(w)) {
      const t = normAr(w);
      if (t) out.push({ t, ar: true, v: arVariants(t) });
    } else {
      const t = foldLat(w);
      if (t && !DROP.has(t)) out.push({ t, ar: false });
    }
  }
  return out;
}

// ---------- söz qrupları ----------
const SUF = new Set(["", "i", "in", "ni", "nin", "ini", "e", "a", "de", "da", "den", "dan", "ler", "lar", "leri", "lari", "si", "li", "lik", "ik", "dir", "dur", "tir", "tur", "di", "ki", "u", "un", "unu", "unun", "ye", "ya"]);
const GUARD = [/^sirket/, /^kismet/, /^kismen/, /^tatilde?$/];

function parseAlt(alt) {
  let s = alt.trim();
  const exact = s.endsWith("$");
  if (exact) s = s.slice(0, -1);
  const ar = AR_RE.test(s);
  const words = (ar ? s.split(/\s+/).map(normAr) : s.split(/\s+/).map(foldLat)).filter(Boolean);
  return { ar, exact, words };
}

function parseGroup(str) {
  return str.split("|").map(parseAlt).filter((a) => a.words.length);
}

function wordMatch(tok, s, alt) {
  if (alt.ar) {
    if (!tok.ar) return false;
    const exact = alt.exact || s.length < 3;
    for (const v of tok.v) {
      if (v === s) return true;
      if (!exact && v.startsWith(s) && v.length - s.length <= 3) return true;
    }
    return false;
  }
  if (tok.ar) return false;
  const t = tok.t;
  if (!t.startsWith(s)) return false;
  const rem = t.slice(s.length);
  if (alt.exact || s.length < 4) return rem === "" || (alt.exact && SUF.has(rem));
  if (rem.length > 7) return false;
  if (GUARD.some((g) => g.test(t)) && !(alt.exact)) return false;
  return true;
}

// qrupun uyğun gəldiyi token indeksləri (yoxdursa null)
function groupHit(tokens, group) {
  for (const alt of group) {
    const n = alt.words.length;
    for (let i = 0; i + n <= tokens.length; i++) {
      let ok = true;
      for (let k = 0; k < n; k++) if (!wordMatch(tokens[i + k], alt.words[k], alt)) { ok = false; break; }
      if (ok) return Array.from({ length: n }, (_, k) => i + k);
    }
  }
  return null;
}

// ---------- köməkçi sözlər (cavab sayılmayan, amma kontekst verən) ----------
const FILL = new Set(
  [
    "ne", "nedir", "nece", "kac", "hansi", "hangi", "hansilardir", "nelerdir", "neleredir", "nelerdi", "ve", "ile", "ucun", "bu", "bir", "de", "da", "ki", "mi", "mu", "mene", "bana", "zehmet", "olmasa", "lutfen", "izah", "edin", "et", "ede", "ver", "soyle", "yaz", "bilirsen", "bilersen", "say", "sadala", "demek", "deyir", "dir", "menasi", "mena", "olur", "olar", "sual", "cavab", "kisaca", "bele", "yeni", "melumat", "bilgi", "hakkinda", "nasil", "haqda", "gore", "daha", "cox", "bele", "var", "yox", "olan", "olub", "olunur", "edilir", "edir", "ola", "olarmi", "bilermi", "deyilmi", "kim", "kimdir", "niye", "nicin", "izahi", "tefsir", "yazin", "yazin", "bildir", "basa", "dusdurun", "aciqla", "acikla", "aciqlayin", "anlat", "anlatin",
    "علل", "ما", "هو", "هي", "في", "من", "على", "عن", "الي", "الى", "هل", "كيف", "لماذا", "اذكر", "عدد", "بين", "اشرح", "لي", "ممكن", "فضلك", "هذا", "هذه", "ان", "او", "و", "ثم", "كل", "قل", "اعط", "ماذا", "معني", "تعريف", "عرف",
  ].map((w) => (AR_RE.test(w) ? normAr(w) : foldLat(w))),
);

function isFill(tok) {
  return FILL.has(tok.t) || /^\d+$/.test(tok.t);
}

// ---------- girişlərin hazırlanması ----------
function prepEntries() {
  return ENTRIES.map((e) => {
    const trigs = [];
    for (const list of [e.triggers.az, e.triggers.tr, e.triggers.ar]) {
      for (const phrase of list || []) {
        const toks = tokenize(phrase).filter((t) => !isFill(t));
        if (toks.length) trigs.push(toks);
      }
    }
    return {
      e,
      core: e.core.map(parseGroup),
      opt: e.opt.map(parseGroup),
      not: e.not.map(parseGroup),
      trigs,
    };
  });
}
const PREPPED = prepEntries();

function tokEq(q, p) {
  if (q.ar !== p.ar) return false;
  if (q.ar) {
    for (const a of q.v) for (const b of p.v) {
      if (a === b) return true;
      if (Math.min(a.length, b.length) >= 4 && (a.startsWith(b) || b.startsWith(a)) && Math.abs(a.length - b.length) <= 3) return true;
    }
    return false;
  }
  if (q.t === p.t) return true;
  const m = Math.min(q.t.length, p.t.length);
  return m >= 5 && (q.t.startsWith(p.t) || p.t.startsWith(q.t)) && Math.abs(q.t.length - p.t.length) <= 6 && !GUARD.some((g) => g.test(q.t) !== g.test(p.t));
}

const ASK_WORDS = parseGroup("kim|kimdir|nece|necedir|niye|nicin|nedir|ne$|hansi|hardan|haradan|olarmi|bilermi|mumkundur|deyilmi|mi$|mu$|هل|كيف|لماذا|من$|ما$|ماذا|اين|ممكن|مستحيل|سبب|ihtimal|ehtimal");

function evaluate(p, tokens, raw) {
  const explained = new Set();
  let score = 0;
  for (const g of p.core) {
    const hit = groupHit(tokens, g);
    if (!hit) return null;
    hit.forEach((i) => explained.add(i));
    score += 3;
  }
  for (const g of p.not) if (groupHit(tokens, g)) return null;
  for (const g of p.opt) {
    const hit = groupHit(tokens, g);
    if (hit) {
      hit.forEach((i) => explained.add(i));
      score += 1;
    }
  }
  if (p.e.ask && !/[?؟]/.test(raw) && !groupHit(tokens, ASK_WORDS)) return null;
  let best = 0;
  let bestIdx = null;
  for (const phrase of p.trigs) {
    const idx = [];
    let hits = 0;
    for (const pt of phrase) {
      const j = tokens.findIndex((q) => tokEq(q, pt));
      if (j >= 0) {
        hits++;
        idx.push(j);
      }
    }
    const frac = hits / phrase.length;
    if (frac >= 0.6 && frac > best) {
      best = frac;
      bestIdx = idx;
    }
  }
  if (best) {
    score += 4 * best;
    bestIdx.forEach((i) => explained.add(i));
  }
  if (score < MIN_SCORE) return null;
  const unexplained = tokens.filter((t, i) => !explained.has(i) && !isFill(t)).length;
  if (unexplained > MAX_UNEXPLAINED) return null;
  return { p, score: score - unexplained * 0.25, coreN: p.core.length };
}

// ---------- mövzu siyahısı / giriş ----------
const TOV_G = parseGroup("tovhid|tevhid|tavhid|tauhid|توحيد");
const LIST_G = parseGroup("movzu|mevzu|konu|bolme|siyahi|mundericat|fihrist|baslik|sual$|suallar|مواضيع|موضوعات|موضوع|فهرس|قائمه|محتويات|ابواب");
const NUM_PREV_G = parseGroup("movzu|mevzu|konu|bolme|موضوع|باب");
const ORD_SUFFIX = new Set(["ci", "cu", "nci", "ncu", "inci", "uncu", "th", "ju"]);
const INTRO_EXTRA = new Set(["eksida", "eqide", "aqida", "akide", "3001", "1", "ders", "dersi", "xulase", "kurs", "fenn", "fenni", "kitab", "hazir", "عقد", "3001", "ma", "هو", "هي", "ما", "التوحيد"].map((w) => (AR_RE.test(w) ? normAr(w) : foldLat(w))));
const ORD_WORDS = new Map(
  [
    ["birinci", 1], ["ikinci", 2], ["ucuncu", 3], ["dorduncu", 4], ["besinci", 5], ["altinci", 6], ["yeddinci", 7], ["sekizinci", 8], ["dokuzuncu", 9], ["onuncu", 10], ["onbirinci", 11],
  ].map(([w, n]) => [foldLat(w), n]),
);
const AR_ORD = new Map([["اول", 1], ["ثاني", 2], ["ثالث", 3], ["رابع", 4], ["خامس", 5], ["سادس", 6], ["سابع", 7], ["ثامن", 8], ["تاسع", 9], ["عاشر", 10], ["حادي", 11]]);

function topicNumber(tokens) {
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (!t.ar && ORD_WORDS.has(t.t)) return ORD_WORDS.get(t.t);
    if (t.ar) {
      for (const v of t.v) if (AR_ORD.has(v)) return AR_ORD.get(v);
    }
    if (!t.ar && /^\d{1,2}$/.test(t.t)) {
      const n = Number(t.t);
      if (n < 1 || n > 11) continue;
      const next = tokens[i + 1];
      const prev = tokens[i - 1];
      if ((next && !next.ar && ORD_SUFFIX.has(next.t)) || (prev && NUM_PREV_G.some((a) => wordMatch(prev, a.words[0], a)))) return n;
    }
  }
  return 0;
}

function topicStatus(n) {
  const mains = ENTRIES.filter((e) => e.topic === n && e.main);
  const full = mains.filter((e) => e.a_az).length;
  const some = mains.filter((e) => e.a_az || e.a_az_partial).length;
  return { total: mains.length, full, some };
}

function topicListText(lang) {
  const lines = [];
  for (const t of TOPICS) {
    const st = topicStatus(t.n);
    if (lang === "ar") {
      lines.push(`${t.n}. ${t.title_ar}`);
    } else {
      const tag = st.full === st.total ? "Azərbaycanca tam" : st.some ? "Azərbaycanca qismən" : "hələ ərəbcə";
      lines.push(`${t.n}. ${t.title_az} (${tag})`);
    }
  }
  return lines.join("\n");
}

function headerAz() {
  return "Tövhid 1 (Əqidə 3001)";
}

function introReply(lang) {
  if (lang === "ar") {
    return [
      "التوحيد 1 (عقد 3001) — ملخص الدرس",
      "هذه إجابات جاهزة من ملخص مقرر التوحيد، تُعرض مباشرة دون الاستعانة بالذكاء الاصطناعي. اكتب السؤال كما هو، مثل: «ما هو توحيد الربوبية؟» أو «كم أقسام الشرك؟».",
      "المواضيع:",
      topicListText("ar"),
      "لعرض أسئلة موضوع معين اكتب مثلاً: «توحيد الموضوع الخامس».",
      SRC_AR,
    ].join("\n\n");
  }
  return [
    "Tövhid 1 (Əqidə 3001) — dərs xülasəsi",
    "Bu mənbədəki suallara cavab hazır mətndən, AI-yə müraciət etmədən verilir. Sualı yaz, məsələn: «Şirk neçə qismə bölünür?», «Rübubiyyət tövhidi nədir?», «Allahın adları təvqifidir nə deməkdir?» və ya «tövhidin növləri».",
    "Mövzular:\n" + topicListText("az"),
    "Bir mövzunun suallarına baxmaq üçün «tövhid 5-ci mövzu» yaz. Tərcüməsi hələ olmayan hissələr ərəbcə göstərilir.",
    SRC_AZ,
  ].join("\n\n");
}

// Azərbaycanca sıra sonluğu: 3-cü, 4-cü, 6-cı, 9-cu, 10-cu ...
const AZ_SUFFIX = { 1: "-ci", 2: "-ci", 3: "-cü", 4: "-cü", 5: "-ci", 6: "-cı", 7: "-ci", 8: "-ci", 9: "-cu", 10: "-cu", 11: "-ci" };

function topicQuestionsReply(n, lang) {
  const t = TOPICS.find((x) => x.n === n);
  const mains = ENTRIES.filter((e) => e.topic === n);
  if (lang === "ar") {
    const items = mains.map((e, i) => `${i + 1}. ${e.main ? e.q_ar : `${e.q_ar} — ${e.label}`}`);
    return [`التوحيد 1 (عقد 3001) — الموضوع ${n}: ${t.title_ar}`, "الأسئلة المتاحة:\n" + items.join("\n"), "اكتب السؤال لعرض الإجابة.", SRC_AR].join("\n\n");
  }
  const items = mains.map((e, i) => {
    const tag = e.a_az ? "" : e.a_az_partial ? " (tərcümə qismən)" : " (ərəbcə)";
    return `${i + 1}. ${e.main ? e.q_az || e.label : e.label}${tag}`;
  });
  return [`${headerAz()} — ${n}${AZ_SUFFIX[n] || "-ci"} mövzu: ${t.title_az}`, "Bu mövzuda hazır cavabı olan suallar:\n" + items.join("\n"), "Cavabı görmək üçün sualı yaz.", SRC_AZ].join("\n\n");
}

// ---------- cavabın formatı ----------
export function formatEntry(e, lang) {
  const t = TOPICS.find((x) => x.n === e.topic);
  if (lang === "ar") {
    const head = `التوحيد 1 (عقد 3001) — ${t.title_ar}`;
    const q = `السؤال: ${e.q_ar}`;
    // alt bölmənin ərəbcə cavabı öz başlığı ilə başlayır, ona görə ayrıca «bölmə» sətri yoxdur
    return [head, q, e.a_ar, SRC_AR].join("\n\n");
  }
  const head = `${headerAz()} — ${t.title_az}`;
  const q = e.q_az && (e.a_az || e.a_az_partial || e.main) ? e.q_az : e.q_ar;
  // Azərbaycanca alt bölmə öz başlığı ilə başlayır; «Bölmə» sətri yalnız ərəbcə göstərilən hissələr üçündür
  const part = e.main || e.a_az ? null : `Bölmə: ${e.label}`;
  const qBlock = [`Sual: ${q}`, part].filter(Boolean).join("\n");
  if (e.a_az) return [head, qBlock, e.a_az, SRC_AZ].join("\n\n");
  if (e.a_az_partial) return [head, qBlock, PART_AZ, e.a_az_partial, PART_AR_LABEL, e.a_ar, SRC_AZ].join("\n\n");
  return [head, qBlock, NO_AZ, e.a_ar, SRC_AZ].join("\n\n");
}

// ---------- əsas giriş ----------
export function tawhidMatch(message) {
  const raw = String(message || "").trim();
  if (!raw || raw.length > 600) return null;
  const tokens = tokenize(raw);
  if (!tokens.length || tokens.length > MAX_TOKENS) return null;
  const lang = AR_RE.test(raw) ? "ar" : "az";

  const hasTov = Boolean(groupHit(tokens, TOV_G));
  const hasList = Boolean(groupHit(tokens, LIST_G));
  if (hasTov && hasList && tokens.length <= 10) {
    const n = topicNumber(tokens);
    if (n) return { kind: "topic", n, lang };
    return { kind: "topics", lang };
  }
  if (hasTov && tokens.length <= 6) {
    const rest = tokens.filter((t) => !isFill(t) && !INTRO_EXTRA.has(t.t) && !TOV_G.some((a) => wordMatch(t, a.words[0], a)));
    if (!rest.length) return { kind: "intro", lang };
  }

  const found = [];
  for (const p of PREPPED) {
    const r = evaluate(p, tokens, raw);
    if (r) found.push(r);
  }
  if (!found.length) return null;
  found.sort((a, b) => b.score - a.score || b.coreN - a.coreN || Number(b.p.e.main) - Number(a.p.e.main));
  const top = found[0];
  const picks = [top];
  if (top.p.e.amb) {
    const second = found.find((f) => f !== top && f.p.e.amb === top.p.e.amb && top.score - f.score < 1.5);
    if (second) picks.push(second);
  }
  return { kind: "entry", ids: picks.map((x) => x.p.e.id), lang, score: top.score };
}

export function tawhidReply(message) {
  const m = tawhidMatch(message);
  if (!m) return null;
  if (m.kind === "topics" || m.kind === "intro") return introReply(m.lang);
  if (m.kind === "topic") return topicQuestionsReply(m.n, m.lang);
  const list = m.ids.map((id) => ENTRIES.find((e) => e.id === id));
  return list.map((e) => formatEntry(e, m.lang)).join("\n\n———\n\n");
}

export const __internals = { tokenize, foldLat, PREPPED, tawhidMatch, topicNumber, groupHit, evaluate };
