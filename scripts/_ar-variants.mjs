// Ərəbcə sorğu variantlarının generasiyası (ar.txt-dən). Test və ölçmə üçün.
import { ENTRIES } from "../api/_tawhid/entries.js";
import { arHeading } from "../api/_tawhid.js";

const DIAC = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g;
export const stripAr = (s) =>
  String(s || "")
    .replace(DIAC, "")
    .replace(/[؟?!.,:;،؛()\[\]{}«»"“”﴿﴾\-–—_*•·\uFDFA\uFDFB]/g, " ")
    .replace(/[٠-٩۰-۹0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const QW = new Set(["ما", "هو", "هي", "هل", "كم", "اذكر", "عرف", "عدد", "بين", "علل", "ماذا", "كيف", "لماذا", "من", "أعط", "اعط", "وضح", "اشرح"]);

// Girişin ərəbcə «sualı»: əsas girişlər üçün ar.txt-dəki sual, alt girişlər üçün ərəbcə blokun ilk sətri
export function arQuestionOf(e) {
  if (e.main) return e.q_ar;
  return arHeading(e.a_ar);
}

export function variantsOf(e) {
  const q0 = arQuestionOf(e);
  const q1 = stripAr(q0).replace(/\s*(?:س|السؤال)\s*$/, "");
  const words = q1.split(" ").filter(Boolean);
  const noQw = words.filter((w, i) => !(i < 3 && QW.has(w)));
  const out = new Map();
  out.set("exact", q0);
  out.set("clean", q1);
  if (noQw.length && noQw.length !== words.length) out.set("noqw", noQw.join(" "));
  if (words.length >= 5) out.set("prefix", words.slice(0, Math.ceil(words.length * 0.7)).join(" "));
  if (words.length >= 5) out.set("suffix", words.slice(Math.floor(words.length * 0.3)).join(" "));
  if (noQw.length >= 4) out.set("core", noQw.slice(0, Math.min(noQw.length, 5)).join(" "));
  return out;
}
export { ENTRIES };
