// Ərəbcə sözlərin mənası: AI-yə getmədən, yalnız İbn Farisin lüğətlərindən sözbəsöz çıxarış.
//   əsas: «Məqayis əl-luğə» (api/_lugha/maqayis.js, 4703 kök maddəsi); ehtiyat: «Mücməl əl-luğə» (mujmal.js, keyfiyyəti aşağıdır).
// Heç nə tərcümə olunmur, qısaldılmır (yalnız çox uzun maddə ~1500 simvolda kəsilir) və uydurulmur. Azərbaycanca çərçivə mətni qısa və ümumidir.
// Sözün kökü namizəd yaradılması + lüğət axtarışı ilə tapılır; tapılmasa maddə mətnində söz axtarılır; yenə tapılmasa null (adi davranış).
import { unpack } from "./_tafsir/_unpack.js";
import { detectLang } from "./_ayah.js";
import { PARTICLES } from "./_nahw/terms.js";

const MAX_CHARS = 1500; // bundan uzun maddə kəsilir
const SLACK = 150; // MAX_CHARS-dan bu qədər uzun olmayan maddə tam verilir
const MAX_ENTRIES = 2; // eyni kök üçün bir neçə maddə varsa ən çox
const TOTAL_CAP = 2400;

// ---------------------------------------------------------------- normallaşdırma
const MARKS = /[\u064B-\u065F\u0670\u06D6-\u06ED\u0640\u0610-\u061A\u08D3-\u08FF\u200c\u200d\u200e\u200f]/g;
/** Ərəbcə açar: hərəkələr, tətvil atılır; bütün həmzə formaları (أ إ آ ؤ ئ ء) -> ء, ٱ -> ا, ى -> ي, ة -> ه */
export function key(s) {
  return String(s || "")
    .replace(MARKS, "")
    .replace(/[آأإؤئء]/g, "ء")
    .replace(/ٱ/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[ڪک]/g, "ك")
    .replace(/[یې]/g, "ي");
}
const isAr = (s) => /[\u0621-\u064A\u0671-\u06D3]/.test(s);

// ---------------------------------------------------------------- məlumat (tənbəl yüklənir)
let _mq = null;
let _mj = null;
function build(rows) {
  const map = new Map();
  rows.forEach((r, i) => {
    const k = key(r[0]);
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(i);
  });
  return { rows, map, norm: null };
}
async function load(which) {
  if (which === "mq") {
    if (!_mq) _mq = import("./_lugha/maqayis.js").then((m) => build(unpack(m.default)));
    return _mq;
  }
  if (!_mj) _mj = import("./_lugha/mujmal.js").then((m) => build(unpack(m.default)));
  return _mj;
}
export const __load = load;

// ---------------------------------------------------------------- kök namizədləri
const PREFIXES = ["", "و", "ف", "ب", "ل", "ك", "س", "ال", "لل", "وال", "فال", "بال", "كال", "وب", "ول", "فب", "فل", "وس", "فس", "وك", "ولل", "وبال", "فلل"];
const SUFFIXES = ["", "اء", "ء", "ها", "هم", "هن", "هما", "كم", "كن", "كما", "نا", "ني", "ون", "ين", "ان", "ات", "وا", "تم", "تن", "تما", "ما", "ه", "ك", "ي", "ت", "ن", "ا", "او", "يه", "ته"];
// kökdən əvvəl gələ bilən artırmalar (məs. است، م، ت، ي، ن، ا)
const LEAD = new Set(["ا", "م", "ت", "ي", "ن", "س", "ست", "است", "مت", "يت", "نت", "تت", "ان", "ات", "ام", "اتت", "منت"]);
const WEAK = ["ا", "و", "ي"];
const WEAKX = ["ا", "و", "ي", "ء"]; // həmzə də dəyişə bilər: «سال» ~ سأل
// «الله» və s. üçün xüsusi hal
const SPECIAL = new Map([["الله", "ءله"], ["لله", "ءله"], ["بالله", "ءله"], ["والله", "ءله"], ["تالله", "ءله"], ["اللهم", "ءله"], ["فالله", "ءله"], ["ءيمان", "ءمن"], ["ايمان", "ءمن"], ["الايمان", "ءمن"], ["الءيمان", "ءمن"], ["بالايمان", "ءمن"]]);

const PFX_W = { "و": 0.8, "ف": 0.8, "ب": 1.2, "ل": 1.2, "ك": 2.5, "س": 2 };
function prefixCost(p) {
  if (!p) return 0;
  let c = 0;
  let r = p;
  if (r.endsWith("ال")) {
    c += 0.8;
    r = r.slice(0, -2);
  }
  for (const ch of r) c += PFX_W[ch] ?? 1.2;
  return c;
}

function combos(n, k) {
  const out = [];
  const rec = (start, cur) => {
    if (cur.length === k) return out.push(cur.slice());
    for (let i = start; i < n; i++) {
      cur.push(i);
      rec(i + 1, cur);
      cur.pop();
    }
  };
  rec(0, []);
  return out;
}

function weakVariants(t) {
  // t: 3 hərf. 0, 1 və ya 2 zəif hərf (ا و ي ء) dəyişdirilir; başdakı ت (افتعال) -> و / ا / ء
  const out = [{ s: t, c: 0 }];
  const pos = [0, 1, 2].filter((i) => WEAKX.includes(t[i]));
  const alts = (ch) =>
    WEAKX.filter((w) => w !== ch).map((w) => ({ w, c: ch === "ء" ? 1.2 : w === "ء" ? 1.3 : w === "ي" && ch === "ا" ? 1.3 : 1 }));
  for (const i of pos) for (const a of alts(t[i])) out.push({ s: t.slice(0, i) + a.w + t.slice(i + 1), c: a.c });
  for (let x = 0; x < pos.length; x++)
    for (let y = x + 1; y < pos.length; y++)
      for (const a of alts(t[pos[x]]))
        for (const b of alts(t[pos[y]])) {
          const arr = t.split("");
          arr[pos[x]] = a.w;
          arr[pos[y]] = b.w;
          out.push({ s: arr.join(""), c: a.c + b.c });
        }
  if (t[0] === "ت") {
    out.push({ s: "و" + t.slice(1), c: 1.5 });
    out.push({ s: "ء" + t.slice(1), c: 1.5 });
  }
  return out;
}

/** Hərf atma planları: stem-dən n-target hərf atılır; yalnız morfoloji cəhətdən məqbul mövqelər. [{t, cost}] */
function dropPlans(stem, target) {
  const n = stem.length;
  const k = n - target;
  const plans = [];
  for (const idx of combos(n, k)) {
    const set = new Set(idx);
    // başdakı artırma bloku
    let run = 0;
    while (set.has(run)) run++;
    let lead = 0;
    for (let l = run; l >= 1; l--) {
      if (LEAD.has(stem.slice(0, l).replace(/ء/g, "ا"))) {
        lead = l;
        break;
      }
    }
    if (lead && stem[0] === "ا" && stem[1] === "ل") continue; // «ال» artikl kimi ayrıca soyulur
    let cost = lead * 1.0 + (lead > 1 ? 1.5 : 0);
    let ok = true;
    for (const i of idx) {
      if (i < lead) continue;
      const ch = stem[i];
      if (i >= 1 && i <= n - 2 && WEAK.includes(ch)) cost += 1.5; // uzun saitlər: كتاب، رسول، قضية
      else if (i === n - 1 && "اويهنت".includes(ch)) cost += 1.5;
      else if (ch === "ت" && i === 2 && n >= 5 && "امينء".includes(stem[0])) cost += 2.5; // افتعال، مفتعل
      else if (ch === "ن" && i === 1 && "اميء".includes(stem[0])) cost += 2.5; // انفعال
      else {
        ok = false;
        break;
      }
    }
    if (!ok) continue;
    plans.push({ t: stem.split("").filter((_, i) => !set.has(i)).join(""), cost });
  }
  return plans;
}

/** word: açar formasında söz. map: kök açarı -> maddələr. Qaytarır: [{root, cost}] artan xərc üzrə. */
export function rootCandidates(word, map) {
  const best = new Map();
  const add = (root, cost) => {
    if (!map.has(root)) return;
    if (!best.has(root) || best.get(root) > cost) best.set(root, cost);
  };
  if (SPECIAL.has(word)) add(SPECIAL.get(word), 0.5);
  const stems = new Map();
  for (const p of PREFIXES) {
    if (p && !word.startsWith(p)) continue;
    const r1 = word.slice(p.length);
    for (const sx of SUFFIXES) {
      if (sx && !r1.endsWith(sx)) continue;
      const stem = sx ? r1.slice(0, r1.length - sx.length) : r1;
      if (stem.length < 2 || stem.length > 8) continue;
      const cost = prefixCost(p) + (sx ? (sx.length === 1 ? 1.2 : 1) : 0);
      if (!stems.has(stem) || stems.get(stem) > cost) stems.set(stem, cost);
    }
  }
  for (const [stem, base] of stems) {
    const n = stem.length;
    if (n === 2) {
      add(stem, base ? base + 1.5 : 0); // ikihərfli (muda'af) köklər
      for (const w of WEAK) {
        add(w + stem, base + 2);
        add(stem[0] + w + stem[1], base + 2);
        add(stem + w, base + 2);
      }
      continue;
    }
    add(stem, base); // dəqiq
    // افتعال/متقين/اتقوا: ت əvəzinə و/ء (وقي، وعد، أخذ)
    if (n >= 3 && n <= 5 && "امينء".includes(stem[0]) && stem[1] === "ت") {
      const r = stem.slice(2);
      if (r.length === 2) for (const f of ["و", "ء"]) add(f + r, base + 1.5);
      if (r.length === 1) for (const f of ["و", "ء"]) for (const l of ["ي", "و"]) add(f + r + l, base + 1.4);
    }
    const tri = (t, extra) => {
      for (const v of weakVariants(t)) {
        add(v.s, base + extra + v.c);
        if (v.s[1] === v.s[2]) add(v.s.slice(0, 2), base + extra + v.c + 0.5);
      }
    };
    if (n === 3) tri(stem, 0);
    if (n >= 4) {
      for (const target of n >= 5 ? [3, 4] : [3]) {
        for (const pl of dropPlans(stem, target)) {
          if (target === 3) tri(pl.t, pl.cost);
          else add(pl.t, base + pl.cost);
        }
      }
      if (n === 4 && stem[1] === stem[2]) add(stem.slice(0, 2), base + 1); // «مددت» -> مد
      if (n === 4 && stem[2] === stem[3]) add(stem.slice(0, 3), base + 0.5);
    }
  }
  return [...best].map(([root, cost]) => ({ root, cost })).sort((a, b) => a.cost - b.cost || a.root.length - b.root.length);
}

// ---------------------------------------------------------------- sorğunun aşkarlanması
const QURAN_AR = /آي[ةه]|ايه|ايات|آيات|سور[ةه]|قرآن|القرآن|قران|تفسير|تفاسير|﴿|﴾|\d\s*[:：]\s*\d/;
const QURAN_LAT = /\b(ay[eə]t?\w*|ayah|ayat|aya|sur[eə]\w*|surah|sura|quran\w*|qur'?an|kur'?an\w*|koran|tef?sir\w*|tafsir\w*|verse|verses|bəqərə|beqere|bakara|hadis\w*|hədis\w*|hadith)\b/i;
const QURAN_RU = /аят|сура|коран|тафсир|хадис/i;
// Nəhv hərfləri: «معنى لن» kimi suallar qrammatika idarəçisinə (api/_nahw.js) aiddir, lüğət maddəsinə yox
const GRAMMAR_PARTICLES = new Set(["لن", "لم", "لما", "لا", "إن", "أن", "كي", "حتى", "إذن", "إذا", "لعل", "ليت", "كأن", "لكن", "ثم", "أو", "بل", "هل", "قد", "سوف"].filter((p) => PARTICLES.includes(p)).map((p) => key(p)));
const GRAMMAR_AR = /نحو|إعراب|اعراب|صرف|النحو|الصرف|مبتدأ|مبتدا|فاعل|مفعول|حروف|فعل|اسم\s+(?:ال)?(?:فاعل|مفعول)|مضاف|معرب|مبني/;
const GRAMMAR_LAT = /\b(n[eə]hv\w*|qramat\w*|grammat\w*|qrammat\w*|ƏRƏB qram\w*|syntax|i'?rab|sarf|gramer\w*|грамматик\w*)\b/i;

const FILLER = new Set(["في", "من", "على", "عن", "الى", "إلى", "هو", "هي", "ما", "ماذا", "هل", "اللغه", "اللغة", "لغه", "لغة", "العربيه", "العربية", "بالعربيه", "بالعربية", "عربي", "عربيا", "عند", "العرب", "المعجم", "فى", "ارجو", "أرجو", "لو", "سمحت", "فضلا", "فضلاً", "لنا", "لي", "اخي", "أخي", "يا", "كلمة", "كلمه", "لفظ", "لفظة", "لفظه", "مفردة", "الكلمة", "الكلمه", "اللفظ", "اللفظة", "مصطلح", "الجذر", "جذر"]);

function cleanTokens(str) {
  return String(str || "")
    .replace(/[«»"“”„'‘’()\[\]{}<>؟?!.,،؛:;*_~=+\-–—\\/|]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * Mesajdan ərəbcə sözü çıxarır. Qaytarır {word} və ya null.
 * word hərəkələrsiz ərəbcə yazıdır (ilk söz); sorğu «ərəbcə sözün mənası» formasında olmalıdır.
 */
export function parseLughaQuery(message) {
  let raw = String(message || "").replace(MARKS, "").replace(/\s+/g, " ").trim();
  if (!raw || raw.length > 200) return null;
  if (!isAr(raw)) return null; // yalnız ərəb yazılı söz
  if (QURAN_AR.test(raw) || QURAN_LAT.test(raw) || QURAN_RU.test(raw)) return null;
  const arLetters = (raw.match(/[\u0621-\u064A\u0671-\u06D3]/g) || []).length;
  const latLetters = (raw.match(/[A-Za-zƏəĞğİıÖöŞşÜüÇç]/g) || []).length;
  const cyr = (raw.match(/[\u0400-\u04FF]/g) || []).length;
  let tail = null;

  if (arLetters >= latLetters + cyr) {
    // --- ərəbcə sual
    const pats = [
      /(?:^|\s)(?:ما|ماذا|وما|ماهو|ما هو|ماهي|ما هي)?\s*(?:معنى|معني|المعنى)\s+(?:(?:كلمة|كلمه|لفظة|لفظ|مفردة|الكلمة|الكلمه|اللفظة|اللفظ|المفردة|الجذر|جذر|مادة|ماده)\s+)?(.+)$/,
      /(?:^|\s)(?:ماذا|ما)\s+(?:تعني|يعني|تعنى|يعنى|تفيد)\s+(?:كلمة\s+|كلمه\s+|لفظة\s+|لفظ\s+)?(.+)$/,
      /(?:^|\s)(?:شرح|بيان|تفسير)\s+(?:معنى\s+)?(?:كلمة|كلمه|لفظة|لفظ|مفردة)\s+(.+)$/,
      /(?:^|\s)(?:ما\s+)?(?:أصل|اصل)\s+(?:كلمة|كلمه|لفظة|لفظ)\s+(.+)$/,
      /(?:^|\s)(?:ما\s+)?(?:المراد|المقصود)\s+(?:ب|بكلمة|بلفظ|بلفظة)\s*(?:كلمة\s+|لفظ\s+)?(.+)$/,
      /^(.+?)\s+(?:معناها|معناه|ما معناها|ما معناه|ماذا تعني|ما تعني|ما يعني|ماذا يعني)$/,
      /^(?:كلمة|لفظة|لفظ)\s+(.+?)\s+(?:معناها|معناه|ما معناها|ما معناه|ماذا تعني|ما تعني)$/,
    ];
    for (const p of pats) {
      const m = raw.match(p);
      if (m && m[1]) {
        tail = m[1];
        break;
      }
    }
    // mətndə yalnız ərəbcə söz var və «معنى» sonda gəlir: «علم معنى»
    if (!tail) {
      const m = raw.match(/^(.+?)\s+(?:معنى|معني)$/);
      if (m) tail = m[1];
    }
  } else {
    // --- latın/kiril yazılı sual, ərəbcə yazılmış söz
    const words = raw.split(/\s+/);
    const nonAr = words.filter((w) => !isAr(w));
    if (nonAr.length > 8 || words.length > 12) return null;
    const f = raw.toLowerCase().replace(/ə/g, "e").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ç/g, "c").replace(/ğ/g, "g").replace(/[’'`´]/g, "");
    const cue = /\b(menasi\w*|menasini|mena\b|demek\w*|anlami\w*|anlam\w*|ne demek|nedir|meaning|means?\b|mean\b|translat\w*)\b/.test(f) || /значени|значит|означает|смысл|перевод/i.test(raw);
    const needsAr = /\bnedir\b/.test(f) && !/(erebce|arapca|arabic|arabcha|ərəbcə)/.test(f) && !/menasi|demek|anlam|meaning|mean/.test(f);
    if (!cue || needsAr) return null;
    tail = words.filter((w) => isAr(w)).join(" ");
  }
  if (!tail) return null;
  // «هذا الحديث» (nəyə işarə olduğu bilinmir) və «كلمة التوحيد» kimi ifadələr lüğət sualı deyil
  if (/^(هذا|هذه|ذلك|تلك|هاذا|هؤلاء)(\s|$)/.test(tail.trim())) return null;
  if (/كلم[ةه]\s+(?:ال)?(?:توحيد|اخلاص|إخلاص|شهاد[ةه]|سواء|تقوى)(\s|$)/.test(raw)) return null;
  const toks = cleanTokens(tail).filter((t) => isAr(t));
  const core = toks.filter((t) => !FILLER.has(t) && !FILLER.has(key(t)));
  if (!core.length || core.length > 2 || toks.length > 3) return null;
  // ərəb tokenlərində başqa dilli qalıq (məs. latın hərfləri) olan tail -> söz deyil
  if (core.some((t) => /[A-Za-z0-9]/.test(t))) return null;
  // qrammatika sualı: bu idarəçiyə aid deyil
  const gtext = raw.replace(tail, " ") + " " + toks.filter((t) => t !== core[0]).join(" ");
  if (GRAMMAR_AR.test(gtext) || GRAMMAR_LAT.test(gtext)) return null;
  const w = key(core[0]);
  if (w.length < 2) return null;
  if (core.length === 1 && GRAMMAR_PARTICLES.has(w)) return null;
  return { word: core[0].replace(MARKS, ""), key: w, second: core[1] ? key(core[1]) : null, lang: detectLang(message) };
}

// ---------------------------------------------------------------- axtarış
function normText(db) {
  if (!db.norm) db.norm = db.rows.map((r) => " " + key(r[4]).replace(/[^\u0621-\u064A\u0671-\u06D3]+/g, " ") + " ");
  return db.norm;
}

function subseq(root, word) {
  // kökün sabit (zəif olmayan) hərfləri sözdə sıra ilə gəlməlidir
  const letters = root.split("").filter((c) => !WEAKX.includes(c));
  let i = 0;
  for (const c of word) if (i < letters.length && c === letters[i]) i++;
  return letters.length > 0 && i === letters.length;
}

function findIn(db, k) {
  const cands = rootCandidates(k, db.map).filter((c) => c.cost <= 7);
  if (!cands.length) return null;
  const len = (r) => Math.max(...db.map.get(r).map((i) => db.rows[i][4].length));
  // dəqiq uyğunluq üstündür; qalanlarda xərc eyni olanda daha geniş (daha məşhur) maddə seçilir
  let top = cands.find((c) => c.cost === 0);
  if (!top) top = cands.map((c) => ({ ...c, score: c.cost - 0.5 * Math.log10(len(c.root) + 1) })).sort((a, b) => a.score - b.score)[0];
  return { via: "root", root: top.root, idxs: db.map.get(top.root), cost: top.cost };
}

function findByText(db, k) {
  if (k.length < 3) return null;
  const norm = normText(db);
  const needle = " " + k + " ";
  let bestI = -1;
  let bestN = 0;
  for (let i = 0; i < norm.length; i++) {
    if (!subseq(key(db.rows[i][0]), k)) continue;
    let n = 0;
    let p = -1;
    while ((p = norm[i].indexOf(needle, p + 1)) >= 0) n++;
    if (n > bestN) {
      bestN = n;
      bestI = i;
    }
  }
  return bestI >= 0 ? { via: "text", root: key(db.rows[bestI][0]), idxs: [bestI], cost: 99 } : null;
}

export async function lookupWord(k) {
  const mq = await load("mq");
  let hit = findIn(mq, k) || findByText(mq, k);
  if (hit) return { db: mq, book: "mq", ...hit };
  const mj = await load("mj");
  hit = findIn(mj, k) || findByText(mj, k);
  if (hit) return { db: mj, book: "mj", ...hit };
  return null;
}

// ---------------------------------------------------------------- cavab
const BOOK = {
  mq: { title: "معجم مقاييس اللغة", ar: "ابن فارس", hasVol: true },
  mj: { title: "مجمل اللغة", ar: "ابن فارس", hasVol: false },
};
const T = {
  az: {
    mq: (w, r) => `«${w}» sözü üzrə İbn Farisin «Məqayis əl-luğə» kitabından (kök: ${r}):`,
    mj: (w, r) => `«Məqayis əl-luğə»də bu kök tapılmadı. «${w}» sözü üzrə İbn Farisin «Mücməl əl-luğə» kitabından (kök: ${r}):`,
    cut: "Maddə uzun olduğuna görə qısaldılıb; tam mətn göstərilən səhifələrdədir.",
    more: "Eyni kökün başqa maddəsi də var; mənbə sətirlərinə bax.",
  },
  tr: {
    mq: (w, r) => `«${w}» kelimesi için İbn Fâris'in «Mekâyîs el-Luğa» kitabından (kök: ${r}):`,
    mj: (w, r) => `«Mekâyîs el-Luğa»da bu kök bulunamadı. «${w}» kelimesi için İbn Fâris'in «Mücmel el-Luğa» kitabından (kök: ${r}):`,
    cut: "Madde uzun olduğu için kısaltıldı; tam metin belirtilen sayfalardadır.",
    more: "Aynı kökün başka maddesi de var; kaynak satırlarına bak.",
  },
  en: {
    mq: (w, r) => `For the word «${w}», from Ibn Faris's «Maqayis al-Lugha» (root: ${r}):`,
    mj: (w, r) => `This root is not in «Maqayis al-Lugha». For the word «${w}», from Ibn Faris's «Mujmal al-Lugha» (root: ${r}):`,
    cut: "The entry is long and was shortened; the full text is on the cited pages.",
    more: "The same root has another entry; see the source lines.",
  },
  ru: {
    mq: (w, r) => `К слову «${w}», из «Макайис аль-луга» Ибн Фариса (корень: ${r}):`,
    mj: (w, r) => `Этого корня нет в «Макайис аль-луга». К слову «${w}», из «Муджмаль аль-луга» Ибн Фариса (корень: ${r}):`,
    cut: "Статья длинная и сокращена; полный текст на указанных страницах.",
    more: "У этого корня есть ещё одна статья; см. строки источника.",
  },
  ar: {
    mq: (w, r) => `الكلمة «${w}»، من «معجم مقاييس اللغة» لابن فارس (الجذر: ${r}):`,
    mj: (w, r) => `لم يرد هذا الجذر في «معجم مقاييس اللغة». الكلمة «${w}»، من «مجمل اللغة» لابن فارس (الجذر: ${r}):`,
    cut: "المادة طويلة فاختُصرت؛ النص الكامل في الصفحات المذكورة.",
    more: "للجذر نفسه مادة أخرى؛ انظر أسطر المصدر.",
  },
};

/** ~1500 simvolda cümlə/söz sərhədində kəsir. [mətn, kəsildi] */
export function truncate(text, max = MAX_CHARS, slack = SLACK) {
  const t = String(text || "").trim();
  if (t.length <= max + slack) return [t, false];
  let cut = -1;
  const win = t.slice(0, max);
  const re = /[.؟!۔\n]/g;
  let m;
  while ((m = re.exec(win))) if (m.index >= max * 0.5) cut = m.index + 1;
  if (cut < 0) cut = win.lastIndexOf(" ");
  if (cut < max * 0.3) cut = max;
  return [t.slice(0, cut).trimEnd() + " ...", true];
}

const pageRef = (r, which) => {
  const [, part, a, b] = r;
  const pages = a === b || b == null ? `${a}` : `${a}–${b}`;
  const vol = BOOK[which].hasVol && /^\d+$/.test(part) ? `ج ${part}، ` : "";
  return `${vol}ص ${pages}`;
};
const srcLine = (r, which) => `${BOOK[which].ar}، ${BOOK[which].title}، ${pageRef(r, which)}`;

export function formatLugha(hit, q) {
  const lang = T[q.lang] ? q.lang : "az";
  const t = T[lang];
  const which = hit.book;
  const rows = hit.idxs.slice(0, MAX_ENTRIES).map((i) => hit.db.rows[i]);
  const blocks = [];
  let anyCut = false;
  let budget = TOTAL_CAP;
  rows.forEach((r, n) => {
    const [txt, cut] = truncate(r[4], Math.min(MAX_CHARS, Math.max(500, budget)));
    budget -= txt.length;
    anyCut = anyCut || cut;
    blocks.push(["::tafsir lugha::", `::tl:: ${BOOK[which].ar} — ${BOOK[which].title}`, ...txt.split("\n").filter((l) => l.trim()), `::src:: ${srcLine(r, which)}`, "::/tafsir::"].join("\n"));
  });
  const out = [t[which](q.word, hit.root === key(q.word) ? hit.root : hit.root), ...blocks];
  const notes = [];
  if (anyCut) notes.push(t.cut);
  if (hit.idxs.length > rows.length) notes.push(t.more);
  if (notes.length) out.push("::note:: " + notes.join(" "));
  return out.join("\n");
}

/** Əsas giriş: ərəbcə sözün mənası sualı üçün cavab, yoxsa null (adi davranış). AI çağırılmır. */
export async function lughaReply(message) {
  const q = parseLughaQuery(message);
  if (!q) return null;
  let hit = await lookupWord(q.key);
  if (!hit && q.second) hit = await lookupWord(q.second);
  if (!hit) return null;
  // göstəriləcək kök yazısı: kitabdakı orijinal yazılış
  const first = hit.db.rows[hit.idxs[0]][0];
  return formatLugha({ ...hit, root: first }, q);
}
