// api/_ayah.js-dən dəyişdirilmədən köçürülmüş, məlumatsız (Quran mətni yükləməyən) köməkçilər.
// Quran, təfsir və kitab məlumatı artıq Nibras Library-dədir (api/_library.js); chat.js və _notice.js yalnız bunları yerli istifadə edir.
const AR_LETTERS_G = /[\u0621-\u064A\u066E-\u06D3\u06FA-\u06FF\u0750-\u077F\u08A0-\u08C9]/g;
const CYR = { а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "j", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "c", ч: "c", ш: "s", щ: "s", ъ: "", ь: "", ы: "i", э: "e", ю: "yu", я: "ya", ґ: "g", ә: "a", ө: "o", ү: "u", ұ: "u", қ: "k", ғ: "g", һ: "h", ң: "n" };

export function foldLat(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ə/g, "e")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/[’'`´ʻʼ‘ʿʾ]/g, "")
    .replace(/[\u0400-\u04FF]/g, (c) => CYR[c] ?? c);
}

export function detectLang(text) {
  const t = String(text || "");
  if (AR_LETTERS_G.test(t) && (t.match(AR_LETTERS_G) || []).length > 3) {
    AR_LETTERS_G.lastIndex = 0;
    // Latın hərfləri çoxdursa ərəb mətni sitatdır
    const lat = (t.match(/[A-Za-zƏəĞğİıÖöŞşÜüÇç]/g) || []).length;
    const ar = (t.match(AR_LETTERS_G) || []).length;
    if (ar >= lat) return "ar";
  }
  AR_LETTERS_G.lastIndex = 0;
  if (/[\u0400-\u04FF]/.test(t)) return "ru";
  if (/[əƏ]/.test(t)) return "az";
  const q = foldLat(t);
  if (/\b(verse|verses|surah|chapter|please|show|write|give|read|the|quran|of)\b/.test(q)) return "en";
  if (/\b(sure|suresi|ayet|ayeti|goster|yazar misin|oku|lutfen|bakara|merhaba|kuran)\b/.test(q) && /[ıİğĞşŞçÇöÖüÜ]/.test(t)) return "tr";
  if (/\b(suresi|ayeti|goster|lutfen|kuran|kuranda)\b/.test(q)) return "tr";
  return "az";
}

export function stripAyahMarkup(text) {
  return String(text || "")
    .replace(/^[ \t]*::\/?ayah[^\n]*::[ \t]*$/gim, "")
    .replace(/^[ \t]*::src::[^\n]*$/gim, "")
    .replace(/^[ \t]*::(?:tr|note|ar|tl|tv|sl|sb|ctx|game)::[^\n]*$/gim, "")
    .replace(/^[ \t]*::\/?sug::[ \t]*$/gim, "")
    .replace(/^[ \t]*::\/?tafsir[^\n]*::[ \t]*$/gim, "")
    .replace(/^[ \t]*::\/?notice::[ \t]*$/gim, "")
    .replace(/::\/?ayah[^:\n]*::/gi, "")
    .replace(/::src::/gi, "");
}
// AI-yə göndərilən tarixçədə hazır ayə bloklarını qısa işarə ilə əvəz et (model onları təkrar yazmasın, işarə yazsın)
export function compactHistory(text) {
  // ilk dini cavabın bildiriş bloku modelə göndərilmir
  const out = String(text || "").replace(/::notice::[\s\S]*?::\/notice::/g, "").replace(/::tafsir [a-z]+::[\s\S]*?::\/tafsir::/g, "[[tafsir]]").replace(/::sug::[\s\S]*?::\/sug::/g, "").replace(/^::game:: ([a-z0-9-]+)[^\n]*\n+```[\s\S]*?```/gm, "[[game:$1]]").replace(/::ayah(?: (\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?)?::[\s\S]*?::\/ayah::/g, (m, s, a, b) => (s ? `[[ayah:${s}:${a}${b ? "-" + b : ""}]]` : "[[ayah]]"));
  return stripAyahMarkup(out).replace(/\n{3,}/g, "\n\n").trim();
}

export const AYAH_PROMPT =
  "Quran ayəsinin ərəbcə mətnini heç vaxt özün yazma, yadda saxladığın mətni də yazma. Ayə göstərmək lazım olsa, yalnız [[ayah:2:255]] və ya [[ayah:2:255-257]] formatında işarə yaz (surə nömrəsi:ayə nömrəsi). " +
  "Server işarəni dəqiq Tanzil mətni ilə əvəz edəcək. Ayənin nömrəsini dəqiq bilmirsənsə, işarə yazma, ayənin ərəbcə mətnini də uydurma. Ərəbcə mətni ﴿ ﴾ içində özün yazma. " +
  "Ayə mövzusunda «ayə», «surə» sözlərindən istifadə et.";
