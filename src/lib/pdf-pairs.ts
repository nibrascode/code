import type { Lang } from "@/lib/i18n";
import { faqFromPath, faqPath, faqTopicFromPath, faqTopicPath } from "@/lib/faq";
import { findProgrammingLocale, programmingFromPath, programmingLocalePath } from "@/lib/programming-locales";

export const PDF_LOCALE_PAIRS = [
  { az: "pdf", ru: "pdf" },
  { az: "pdf-birlesdirmek", ru: "obedinit-pdf" },
  { az: "pdf-sixisdirmak", ru: "szhat-pdf" },
  { az: "pdf-bolmek", ru: "razdelit-pdf" },
  { az: "pdf-den-sehife-cixarmaq", ru: "udalit-stranitsu-pdf" },
  { az: "pdf-den-sekil-cixarmaq", ru: "izvlech-izobrazhenie-iz-pdf" },
  { az: "sekilleri-pdf-e-cevirmek", ru: "sozdat-pdf-iz-izobrazheniy" },
  { az: "pdf-i-worde-cevirmek", ru: "pdf-v-word" },
  { az: "wordu-pdf-e-cevirmek", ru: "word-v-pdf" },
  { az: "telefonda-pdf-redakte-etmek", ru: "redaktirovat-pdf-na-telefone" },
  { az: "telefonda-pdf-yaratmaq", ru: "sozdat-pdf-na-telefone" },
  { az: "pdf-imzalamaq", ru: "podpisat-pdf" },
  { az: "pdf-e-sifre-qoymaq", ru: "parol-na-pdf" },
  { az: "pdf-den-metn-cixarmaq", ru: "izvlech-tekst-iz-pdf" },
  { az: "pdf-scanner", ru: "pdf-scanner" },
] as const;

export function pdfPairFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const az = path.match(/^\/resurslar\/([^/]+)$/);
  if (az) {
    const pair = PDF_LOCALE_PAIRS.find((item) => item.az === az[1]);
    return pair ? { az: `/resurslar/${pair.az}`, ru: `/ru/resources/${pair.ru}` } : null;
  }
  const ru = path.match(/^\/ru\/resources\/([^/]+)$/);
  if (ru) {
    const pair = PDF_LOCALE_PAIRS.find((item) => item.ru === ru[1]);
    return pair ? { az: `/resurslar/${pair.az}`, ru: `/ru/resources/${pair.ru}` } : null;
  }
  return null;
}

export function hrefForLang(pathname: string, lang: Lang) {
  const topic = faqTopicFromPath(pathname);
  if (topic) return faqTopicPath(lang, topic.item.id);
  if (faqFromPath(pathname)) return faqPath(lang);
  const programming = programmingFromPath(pathname);
  if (programming) {
    if (lang === "az") return programmingLocalePath("az", programming.slug);
    if (findProgrammingLocale(lang, programming.slug)) return programmingLocalePath(lang, programming.slug);
    return `${programmingLocalePath("az", programming.slug)}?lang=${lang}`;
  }
  const pair = pdfPairFromPath(pathname);
  if (pair) {
    if (lang === "ru") return pair.ru;
    if (lang === "az") return pair.az;
    return `${pair.az}?lang=${lang}`;
  }
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (
    path === "/resources" ||
    path.startsWith("/resources/") ||
    path === "/guides" ||
    path.startsWith("/guides/") ||
    path === "/programming"
  ) {
    return lang === "az" ? path : `${path}?lang=${lang}`;
  }
  return lang === "az" ? path : `${path}?lang=${lang}`;
}
