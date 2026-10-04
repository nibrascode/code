// Məcmuu əl-Fətava səhifə mətninin təmizlənməsi (build-fatawa.mjs və test üçün ortaq).
const asciiDigits = (s) => String(s).replace(/[٠-٩]/g, (c) => "٠١٢٣٤٥٦٧٨٩".indexOf(c));

/** Səhifə mətni -> {text, notes} (haşiyə ayrılır, mətndaxili haşiyə işarələri silinir) */
export function cleanPage(raw) {
  let s = String(raw || "").replace(/\r/g, "");
  let notes = "";
  const m = /(^|\n)----[ \t]*(\n|$)/.exec(s);
  if (m) {
    notes = s.slice(m.index + m[0].length);
    s = s.slice(0, m.index);
  }
  // haşiyə işarələri: (*) həmişə; (١) yalnız səhifədə haşiyə varsa
  s = s.replace(/[ \t]*\(\*\)/g, "");
  if (notes) s = s.replace(/[ \t]*\(\s*[٠-٩0-9]{1,3}\s*\)/g, ""); // haşiyəsi olan səhifədə (١) işarələri haşiyəyə istinaddır
  s = s
    .split("\n")
    .map((l) => l.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
  return { text: s, notes };
}

