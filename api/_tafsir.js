// Quran təfsirləri (daxili məlumat, AI-siz): Müyəssər, Sədi (QuranEnc.com), İbn Kəsir (ərəbcə, spa5k/tafsir_api).
// Təfsir mətni ərəbcə orijinalda, DƏYİŞDİRİLMƏDƏN verilir; Azərbaycancaya tərcümə UYDURULMUR.
// Cavab: ayə blokunu (ərəbcə + az mənası, api/_ayah.js) ::tafsir:: bloku izləyir. Uzun təfsir hissələrə bölünür («hissə 2»).
import { LOADERS } from "./_tafsir/loaders.js";
import { ayahLookup, ayahReply, buildBlock, detectLang, digitsAscii, foldLat, AYAH_COUNT } from "./_ayah.js";

export const BOOKS = ["muyassar", "saadi", "ibnkathir"];
export const PAGE_CHARS = { muyassar: 3500, saadi: 3500, ibnkathir: 4500 }; // bir cavabda təfsir mətninin təxmini ən çox simvolu (kitab üzrə)
const MAX_SEGS = 8; // bir cavabdakı ən çox ayə/bölmə
const MAX_AYAH_SHOWN = 8;

const LABEL = {
  az: { muyassar: "Təfsir əl-Müyəssər (ərəbcə)", saadi: "Təfsir əs-Sədi (ərəbcə)", ibnkathir: "Təfsir İbn Kəsir (ərəbcə)" },
  tr: { muyassar: "Tefsîr el-Müyesser (Arapça)", saadi: "Tefsîr es-Sa‘dî (Arapça)", ibnkathir: "Tefsîr İbn Kesîr (Arapça)" },
  en: { muyassar: "Tafsir al-Muyassar (Arabic)", saadi: "Tafsir as-Sa'di (Arabic)", ibnkathir: "Tafsir Ibn Kathir (Arabic)" },
  ru: { muyassar: "Тафсир аль-Муяссар (на арабском)", saadi: "Тафсир ас-Саади (на арабском)", ibnkathir: "Тафсир Ибн Касир (на арабском)" },
  ar: { muyassar: "التفسير الميسر", saadi: "تفسير السعدي", ibnkathir: "تفسير ابن كثير" },
};
// Mənbə sətri (ad linki UI-də QuranEnc.com / spa5k üzərindən qurulur)
const SRC = {
  az: { source: "Mənbə", muyassar: "QuranEnc.com · التفسير الميسر", saadi: "QuranEnc.com · تيسير الكريم الرحمن في تفسير كلام المنان — عبد الرحمن بن ناصر السعدي", ibnkathir: "spa5k/tafsir_api (Quran.com / QUL) · تفسير القرآن العظيم — ابن كثير" },
  tr: { source: "Kaynak" },
  en: { source: "Source" },
  ru: { source: "Источник" },
  ar: { source: "المصدر" },
};
const T = {
  az: {
    part: "hissə",
    nofree: "Təfsir ərəbcə orijinalda verilir; Azərbaycancaya tərcümə edilməyib.",
    more: (q) => `Davamı üçün yaz: «${q}»`,
    others: (list) => `Digər təfsirlər: ${list}.`,
    none: (what) => `Bu təfsirdə ${what} üçün ayrıca şərh yoxdur.`,
    intro: "Nibras AI-də 3 ərəb təfsiri daxili məlumatdan göstərilir (AI olmadan, mətn dəyişdirilmədən):",
    ask: (ex) => `Ayə və ya surə yaz, məsələn: ${ex}`,
    desc: { muyassar: "qısa və aydın məna izahı", saadi: "Təysirul-Kərimir-Rəhman (Əbdürrəhman ibn Nasir əs-Sədi)", ibnkathir: "Təfsirul-Quranil-Azim (Hafiz ibn Kəsir) — geniş, rəvayətlərlə" },
    lead: { muyassar: "Müyəssər təfsiri", saadi: "Sədi təfsiri", ibnkathir: "İbn Kəsir təfsiri" },
  },
  tr: {
    part: "bölüm",
    nofree: "Tefsir Arapça aslıyla verilir; Türkçeye çevrilmemiştir.",
    more: (q) => `Devamı için yaz: «${q}»`,
    others: (list) => `Diğer tefsirler: ${list}.`,
    none: (what) => `Bu tefsirde ${what} için ayrı bir açıklama yoktur.`,
    intro: "Nibras AI'de 3 Arapça tefsir iç veriden gösterilir (yapay zekâ olmadan, metin değiştirilmeden):",
    ask: (ex) => `Âyet veya sure yaz, örneğin: ${ex}`,
    desc: { muyassar: "kısa ve anlaşılır meal açıklaması", saadi: "Teysîru'l-Kerîmi'r-Rahmân (Abdurrahman b. Nâsır es-Sa‘dî)", ibnkathir: "Tefsîru'l-Kur'âni'l-Azîm (İbn Kesîr) — geniş, rivayetli" },
    lead: { muyassar: "Müyesser tefsiri", saadi: "Sa‘dî tefsiri", ibnkathir: "İbn Kesîr tefsiri" },
  },
  en: {
    part: "part",
    nofree: "The tafsir is given in its original Arabic; it has not been translated.",
    more: (q) => `For the rest, write: «${q}»`,
    others: (list) => `Other tafsirs: ${list}.`,
    none: (what) => `This tafsir has no separate commentary for ${what}.`,
    intro: "Nibras AI shows 3 Arabic tafsirs from built-in data (no AI, text unchanged):",
    ask: (ex) => `Write a verse or surah, for example: ${ex}`,
    desc: { muyassar: "short, clear explanation of the meanings", saadi: "Taysir al-Karim al-Rahman (Abd al-Rahman ibn Nasir as-Sa'di)", ibnkathir: "Tafsir al-Qur'an al-Azim (Hafiz Ibn Kathir) — extensive, with narrations" },
    lead: { muyassar: "Muyassar tafsir", saadi: "Sa'di tafsir", ibnkathir: "Ibn Kathir tafsir" },
  },
  ru: {
    part: "часть",
    nofree: "Тафсир приводится на арабском в оригинале; перевод не делался.",
    more: (q) => `Продолжение: напишите «${q}»`,
    others: (list) => `Другие тафсиры: ${list}.`,
    none: (what) => `В этом тафсире нет отдельного толкования для ${what}.`,
    intro: "В Nibras AI доступны 3 арабских тафсира из встроенных данных (без ИИ, текст без изменений):",
    ask: (ex) => `Напишите аят или суру, например: ${ex}`,
    desc: { muyassar: "краткое и ясное разъяснение смыслов", saadi: "Тайсир аль-Карим ар-Рахман (Абд ар-Рахман ибн Насир ас-Саади)", ibnkathir: "Тафсир аль-Куръан аль-Азым (аль-Хафиз Ибн Касир) — подробный, с передачами" },
    lead: { muyassar: "тафсир Муяссар", saadi: "тафсир ас-Саади", ibnkathir: "тафсир Ибн Касир" },
  },
  ar: {
    part: "الجزء",
    nofree: "التفسير بنصه العربي الأصلي دون تغيير.",
    more: (q) => `للمتابعة اكتب: «${q}»`,
    others: (list) => `تفاسير أخرى: ${list}.`,
    none: (what) => `لا يوجد في هذا التفسير شرح مستقل لـ${what}.`,
    intro: "يعرض Nibras AI ثلاثة تفاسير عربية من بيانات داخلية (دون ذكاء اصطناعي ودون تغيير النص):",
    ask: (ex) => `اكتب آية أو سورة، مثل: ${ex}`,
    desc: { muyassar: "شرح موجز وميسّر للمعاني", saadi: "تيسير الكريم الرحمن (عبد الرحمن بن ناصر السعدي)", ibnkathir: "تفسير القرآن العظيم (الحافظ ابن كثير) — موسّع بالآثار" },
    lead: { muyassar: "التفسير الميسر", saadi: "تفسير السعدي", ibnkathir: "تفسير ابن كثير" },
  },
};
const toAr = (n) => String(n).replace(/\d/g, (c) => "٠١٢٣٤٥٦٧٨٩"[Number(c)]);
const AR_MARKS = /[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g;
const arNorm = (t) => String(t).replace(AR_MARKS, "").replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه");

// ------------------------------------------------------------------ niyyət: təfsir sözü, kitab, hissə
const TAF_LAT = /^(?:tefsir|tafsir|tafseer|tafsiir|tafsirs?|tefsirler|tefsiri|tafsiri)\w*$/;
const TAF_RU = /^(?:тафсир|толкован)\w*$/i;
const TAF_AR = /^(?:تفسير|تفاسير|التفسير|والتفسير)$/;
const BOOK_MUY = /^m[uoy]{0,2}[yae]{1,2}s{1,2}[ae]r\w*$/;
const BOOK_SAADI = /^(?:sa+di|sedi|seedi|sa3di|saidi|saeedi|sa'?di)\w*$/;
const BOOK_KATHIR = /^(?:k[ae]s[iy]?r|k[ae]th[iy]?r|katir|kasyr)\w*$/;
const IBN = new Set(["ibn", "ibni", "ibnu", "ebn", "ibnul", "abn", "ибн"]);
const ARTICLE = new Set(["as", "es", "al", "el", "ul", "us", "ас", "аль", "ал", "əs", "əl"]);
const FILLER = new Set(["nedir", "nedi", "ne", "nece", "necedir", "izah", "izahi", "izahini", "et", "ele", "eyle", "ver", "mene", "bize", "goster", "yaz", "soyle", "danis", "aciqla", "haqqinda", "hakkinda", "about", "of", "the", "please", "give", "me", "show", "what", "is", "tell", "explain", "for", "and", "ve", "ile", "und", "ayetinin", "ayesinin", "kitabi", "kitab", "book", "by", "in", "from", "mi", "мне", "дай", "покажи", "объясни", "про", "о", "по"]);
const FILLER_AR = new Set(["لي", "اعطني", "اعرض", "اكتب", "ما", "هو", "هي", "ماهو", "ماهي", "عن", "من", "في", "لل", "ل"]);

/** @returns {null | {book:string|null, hasTafsir:boolean, stripped:string, part:number, lang:string}} */
export function parseTafsirQuery(message) {
  const raw0 = digitsAscii(String(message || "")).normalize("NFC");
  if (!raw0.trim() || raw0.length > 200) return null;
  // «hissə 2», «part 2», «2-ci hissə», «الجزء 2»: təfsir mətninin hissə nömrəsi (ayə nömrəsi sayılmasın)
  let part = 1;
  let raw = raw0;
  const partWords = "hiss[əeé]\\w*|part|bölüm|bolum|kısım|kisim|часть|части|الجزء|جزء|القسم|قسم";
  raw = raw.replace(new RegExp(`(?:${partWords})\\s*[:#№-]?\\s*(\\d{1,4})(?!\\s*[:：]\\d)`, "giu"), (m, n) => ((part = Number(n)), " "));
  raw = raw.replace(new RegExp(`(\\d{1,4})\\s*(?:-?\\s*(?:ci|cü|cı|cu|inci|nci|ncu|uncu|й|-й))?\\s*(?:${partWords})(?![\\p{L}])`, "giu"), (m, n) => ((part = Number(n)), " "));
  if (part < 1 || part > 9999) part = 1;

  const re = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]+|[\p{L}\p{M}'’ʻ]+|\d+/gu;
  const toks = [...raw.matchAll(re)].map((m) => ({ raw: m[0], idx: m.index, end: m.index + m[0].length, ar: /[\u0600-\u06FF\u0750-\u077F]/.test(m[0]) }));
  for (const t of toks) t.f = t.ar ? arNorm(t.raw) : foldLat(t.raw);
  let hasTafsir = false;
  let book = null;
  const drop = new Set();
  for (let i = 0; i < toks.length; i++) {
    const t = toks[i];
    if (/^\d+$/.test(t.raw)) continue;
    if (t.ar ? TAF_AR.test(t.f) : TAF_LAT.test(t.f) || TAF_RU.test(t.raw)) {
      hasTafsir = true;
      drop.add(i);
      continue;
    }
    let found = null;
    let span = [i];
    if (t.ar) {
      const nxt = toks[i + 1];
      if (/^(?:ابن|بن)$/.test(t.f) && nxt && /^كثير$/.test(nxt.f)) (found = "ibnkathir"), (span = [i, i + 1]);
      else if (/^(?:ال)?ميسر$/.test(t.f)) found = "muyassar";
      else if (/^(?:ال)?سعدي$/.test(t.f)) found = "saadi";
    } else if (IBN.has(t.f) && toks[i + 1] && !toks[i + 1].ar && BOOK_KATHIR.test(toks[i + 1].f)) (found = "ibnkathir"), (span = [i, i + 1]);
    else if (BOOK_KATHIR.test(t.f) && !/^(?:kesirli|kesim)/.test(t.f)) found = "ibnkathir";
    else if (BOOK_MUY.test(t.f)) found = "muyassar";
    else if (BOOK_SAADI.test(t.f)) found = "saadi";
    if (found) {
      if (!book) book = found;
      for (const k of span) drop.add(k);
      // əvvəlki tərif (as-/əs-/ас-)
      const p = toks[i - 1];
      if (p && !p.ar && ARTICLE.has(p.f) && drop.size) drop.add(i - 1);
    }
  }
  if (!hasTafsir) return null;
  for (let i = 0; i < toks.length; i++) {
    const t = toks[i];
    if (/^\d+$/.test(t.raw)) continue;
    if (t.ar ? FILLER_AR.has(t.f) : FILLER.has(t.f)) drop.add(i);
  }
  let out = "";
  let last = 0;
  toks.forEach((t, i) => {
    if (!drop.has(i)) return;
    out += raw.slice(last, t.idx) + " ";
    last = t.end;
  });
  out += raw.slice(last);
  return { book, hasTafsir, stripped: out.replace(/\s+/g, " ").replace(/^[\s\-–—]+|[\s\-–—]+$/g, ""), part, lang: detectLang(raw0) };
}

// ------------------------------------------------------------------ məlumat və səhifələmə
const CACHE = new Map();
async function loadSura(book, s) {
  const key = book + s;
  if (!CACHE.has(key)) {
    if (CACHE.size > 6) CACHE.delete(CACHE.keys().next().value);
    CACHE.set(key, LOADERS[book][s - 1]().then((m) => m.default));
  }
  return CACHE.get(key);
}
/** Seqmentlər: [{from, to, text, intro?}] — sorğu aralığına [a1,a2] düşənlər, sıra ilə */
export async function segments(book, s, a1, a2, whole = false) {
  const data = await loadSura(book, s);
  const out = [];
  if (book === "saadi") {
    if (whole && a1 === 1 && data.i) out.push({ from: 0, to: 0, text: data.i, intro: true });
    for (const [from, to, text] of data.b) if (to >= a1 && from <= a2) out.push({ from, to, text });
  } else {
    for (let a = a1; a <= a2; a++) if (data[a - 1]) out.push({ from: a, to: a, text: data[a - 1] });
  }
  return out;
}
// uzun mətni abzas/cümlə sərhədlərində ≤ cap hissələrə böl
export function chunkText(text, cap = 3500) {
  const out = [];
  for (const para of String(text).split(/\n+/)) {
    if (!para.trim()) continue;
    if (para.length <= cap) {
      out.push(para);
      continue;
    }
    let cur = "";
    for (const sent of para.split(/(?<=[.!؟?؛۔:\]])\s+/)) {
      if (sent.length > cap) {
        if (cur) (out.push(cur), (cur = ""));
        for (let i = 0; i < sent.length; ) {
          let end = Math.min(sent.length, i + cap);
          if (end < sent.length) {
            const sp = sent.lastIndexOf(" ", end);
            if (sp > i + cap * 0.5) end = sp;
          }
          out.push(sent.slice(i, end).trim());
          i = end;
        }
        continue;
      }
      if (cur && cur.length + 1 + sent.length > cap) (out.push(cur), (cur = ""));
      cur = cur ? cur + " " + sent : sent;
    }
    if (cur) out.push(cur);
  }
  return out;
}
// seqmentləri səhifələrə böl: səhifə = [{seg, text, first}]
export function paginate(segs, cap = 3500) {
  const pages = [];
  let page = [];
  let size = 0;
  const flush = () => {
    if (page.length) pages.push(page);
    page = [];
    size = 0;
  };
  for (const seg of segs) {
    const chunks = chunkText(seg.text, cap);
    chunks.forEach((c, ci) => {
      const newSeg = ci === 0;
      const segsOnPage = new Set(page.map((p) => p.seg)).size + (page.some((p) => p.seg === seg) ? 0 : 1);
      if (page.length && (size + c.length > cap || segsOnPage > MAX_SEGS)) flush();
      page.push({ seg, text: c, first: newSeg });
      size += c.length;
    });
  }
  flush();
  return pages;
}

// ------------------------------------------------------------------ cavabın qurulması
function bookQuery(lang, book, s, a1, a2) {
  const ref = a2 && a2 !== a1 ? `${s}:${a1}-${a2}` : `${s}:${a1}`;
  return lang === "ar" ? `${LABEL.ar[book]} ${ref}` : `${T[lang].lead[book]} ${ref}`;
}
function srcLine(lang, book) {
  const l = SRC[lang].source;
  const body = SRC.az[book];
  return `::src:: ${l}: ${body}`;
}
function verseTag(seg) {
  if (seg.intro) return "";
  return seg.from === seg.to ? `(${seg.from})` : `(${seg.from}–${seg.to})`;
}
function infoReply(lang, book) {
  const t = T[lang];
  const ex = (b) => `«${bookQuery(lang, b, 2, 255, 255).replace("2:255", "2:255")}»`;
  const lines = [t.intro];
  const list = book ? [book] : BOOKS;
  for (const b of list) lines.push(`• ${LABEL[lang][b]} — ${t.desc[b]}`);
  lines.push(t.ask(list.map(ex).join(", ")));
  lines.push("::note:: " + t.nofree);
  return lines.join("\n");
}

/** @returns {Promise<string|null>} */
export async function tafsirReply(message) {
  const q = parseTafsirQuery(message);
  if (!q) return null;
  const { lang } = q;
  // «Nur 35 təfsiri»: təfsir sözü güclü siqnaldır; ad tək tanınmasa «surə» işarəsi ilə təkrar yoxlanır
  const look = q.stripped ? ayahLookup(q.stripped + " yaz") || ayahLookup("surə " + q.stripped + " yaz") : null;
  if (!look) {
    // Ayə/surə tapılmadı: kitab adı yazılıbsa (və ya yalnız «təfsir») kitabları göstər; «təfsir elmi nədir» kimi ümumi suallar başqasına qalır
    const rest = q.stripped.replace(/[^\p{L}\p{M}\d]/gu, "");
    return q.book || !rest ? infoReply(lang, q.book) : null;
  }
  if (look.reps.some((r) => r.bad)) return ayahReply(q.stripped + " yaz");
  const book = q.book || "muyassar";
  const L = LABEL[lang] || LABEL.az;
  const tt = T[lang] || T.az;
  const out = [];
  // yalnız ilk istinad üçün tam səhifə; çoxlu istinadda (Muavvizeteyn) hər biri üçün birinci səhifə
  const multiRef = look.reps.length > 1;
  for (const rep of look.reps) {
    const { s } = rep;
    let { a1, a2 } = rep;
    const segs = await segments(book, s, a1, a2, rep.whole);
    if (!segs.length) {
      out.push(tt.none(`${s}:${a1}${a2 !== a1 ? "–" + a2 : ""}`));
      continue;
    }
    const pages = paginate(segs, PAGE_CHARS[book]);
    const total = pages.length;
    const pno = multiRef ? 1 : Math.min(Math.max(1, q.part), total);
    const page = pages[pno - 1];
    // ayə bloku: səhifədəki seqmentlərin ayə aralığı (davam səhifələrində ayə təkrar göstərilmir)
    const nums = page.filter((p) => !p.seg.intro).flatMap((p) => [Math.max(a1, p.seg.from), Math.min(a2, p.seg.to)]);
    const startsNew = page[0].first;
    if (nums.length && (startsNew || pno === 1)) {
      const lo = Math.min(...nums);
      const hi = Math.min(Math.max(...nums), lo + MAX_AYAH_SHOWN - 1);
      out.push(buildBlock({ s, a1: lo, a2: hi, lang }));
    }
    const label = L[book] + (total > 1 ? ` — ${tt.part} ${lang === "ar" ? toAr(pno) + "/" + toAr(total) : pno + "/" + total}` : "");
    const body = [];
    let lastSeg = null;
    const multi = new Set(page.map((p) => p.seg)).size > 1 || (page[0].seg.from !== a1 && !page[0].first);
    for (const piece of page) {
      if (piece.seg !== lastSeg) {
        const tag = verseTag(piece.seg);
        if (tag && (multi || piece.seg.from !== piece.seg.to || !piece.first)) body.push(`::tv:: ${tag}`);
        lastSeg = piece.seg;
      }
      body.push(piece.text);
    }
    out.push([`::tafsir ${book}::`, `::tl:: ${label}`, ...body, srcLine(lang, book), "::/tafsir::"].join("\n"));
    if (total > pno) {
      const lo = a1;
      out.push("::note:: " + tt.more(`${bookQuery(lang, book, s, lo, a2)} ${tt.part} ${lang === "ar" ? toAr(pno + 1) : pno + 1}`));
    }
  }
  const others = BOOKS.filter((b) => b !== book);
  const tail = [];
  if (!q.book) tail.push(tt.others(others.map((b) => `«${LABEL[lang][b]}»`).join(", ")));
  tail.push(tt.nofree);
  out.push("::note:: " + tail.join(" "));
  return out.join("\n\n");
}
export { AYAH_COUNT };
