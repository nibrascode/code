// Kitab, Quran və təfsir cavabları Nibras Library-dən (https://library.nibrascode.com) HTTP ilə alınır; bu saytda həmin məlumat saxlanmır.
// Library-nin «yalnız kitab» rejimi (başlıq x-nibras-books-only: 1) nibrascode-un əvvəlki məlumat idarəçilərini eyni sırada işlədir
// (fətava, İbn Teymiyyə kitabları, hədis, ayə davamı, təfsir, ayə, tövhid, hazır dini cavab, Quran lüğəti, ərəb lüğəti, nəhv) və heç vaxt AI çağırmır.
// Cavab mətni əvvəlki kimidir (eyni ::işarələr::). Hər sorğu ~8 s gözləyir, bir dəfə təkrarlanır; library əlçatan deyilsə null qaytarılır.
const BASE = String(process.env.LIBRARY_URL || "https://library.nibrascode.com").replace(/\/+$/, "");
const TIMEOUT_MS = 8000;
// modul yüklənəndəki fetch saxlanılır: testlərdə AI üçün əvəz edilən globalThis.fetch library sorğularına təsir etmir
const httpFetch = globalThis.fetch.bind(globalThis);

async function post(body) {
  for (let i = 0; i < 2; i++) {
    try {
      const r = await httpFetch(BASE + "/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-nibras-books-only": "1" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      if (r.status >= 500) throw new Error("http " + r.status);
      const j = await r.json();
      if (!j || typeof j !== "object") throw new Error("bad json");
      return j;
    } catch {
      /* vaxt bitdi və ya şəbəkə xətası: bir dəfə təkrar */
    }
  }
  return null;
}

/**
 * Kitab/Quran sualı: { reply, kind, religious, lexical, lexicalLoose } (reply:null — heç bir məlumat idarəçisi uyğun gəlmədi), library əlçatan deyilsə null.
 */
export async function libraryReply({ message, lang, history, noticeShown, mode }) {
  return post({ message, lang, history, noticeShown, mode });
}
/** Yalnız lüğət sualı əlamətləri ({lexical, lexicalLoose}) və ya null */
export async function libraryMeta({ message, history }) {
  return post({ op: "meta", message, history });
}
/** AI cavabının son emalı (ayə işarələri -> Tanzil mətni, lüğət qeydi): { text, note } və ya null */
export async function libraryFinalize({ text, message, history }) {
  const j = await post({ op: "finalize", text, message, history });
  return j && typeof j.text === "string" ? j : null;
}

// Library əlçatan olmayanda kitab/Quran sualına qısa nəzakətli cavab (istifadəçinin dilində)
const DOWN = {
  az: "Kitabxana xidməti hazırda əlçatan deyil. Bir az sonra yenidən yoxlayın.",
  tr: "Kütüphane hizmetine şu anda ulaşılamıyor. Lütfen biraz sonra tekrar deneyin.",
  en: "The library service is unavailable right now. Please try again in a little while.",
  ru: "Сервис библиотеки сейчас недоступен. Пожалуйста, попробуйте немного позже.",
  ar: "خدمة المكتبة غير متاحة حاليًا. يرجى المحاولة بعد قليل.",
};
export const libraryDownReply = (lang) => DOWN[lang] || DOWN.az;

// Kitab/qrammatika sualı əlaməti (api/_nahw/terms.js LAT_CUE ilə eyni) — library əlçatan olmayanda AI-yə göndərilmir
export const BOOK_CUE = /\b(?:erebce|arapca|arabic|arabcha|arab\w*|erab\w*|ereb\w*|nehv\w*|nahv\w*|nahiv\w*|nahw\w*|sarf\w*|serf\w*|tasrif\w*|i.?rab\w*|ierab\w*|qram+at\w*|gram+at\w*|grammar\w*|grammatik\w*|dilbilgisi\w*|sintaksis|syntax|ayə\w*|aye\w*|ayah|ayat\w*|sur[eə]\w*|surah|quran\w*|kuran\w*|tefsir\w*|tafsir\w*|hedis\w*|hadis\w*|hadith\w*|fetva\w*|fatwa\w*|fatawa\w*|teymiyy\w*|taymiyy\w*|buxari|buhari|bukhari|muslim)\b|араб|нахв|сарф|иъраб|грамматик|коран|сура|аят|хадис|фетв/i;
