/**
 * Path-based locales for pages that share one route file across languages.
 * Public URL `/en/why` is served internally as `/why?lang=en`, and internal
 * `?lang=` links are rendered back as `/en/...` paths.
 */
import { isCodeSampleSlug } from "@/lib/code-samples";
import { isCourseSlug } from "@/lib/course/meta";
import { hasProgrammingLocale } from "@/lib/programming-path";
import { PDF_LOCALE_PAIRS } from "@/lib/pdf-pairs";
import { isSharedLocalePage } from "@/lib/locale-path";
import { delocalizeSection, localizeSection } from "@/lib/section-slugs";

const LANGS = ["en", "tr", "ar", "ru"] as const;
type PrefixLang = (typeof LANGS)[number];
const RU_PAIR_SLUGS = new Set<string>(PDF_LOCALE_PAIRS.map((p) => String(p.ru).split("/").pop() ?? ""));

/** True when `/${lang}${path}` has no dedicated route and must be rewritten. */
export function needsLocaleRewrite(lang: PrefixLang, path: string) {
  if (!isSharedLocalePage(path)) return false;
  const prog = path.match(/^\/programming\/([^/]+)$/);
  if (prog) {
    const slug = prog[1];
    if (isCodeSampleSlug(slug) || isCourseSlug(slug) || hasProgrammingLocale(lang, slug)) return false;
  }
  const ruRes = path.match(/^\/resources\/([^/]+)$/);
  if (lang === "ru" && ruRes && RU_PAIR_SLUGS.has(ruRes[1])) return false;
  return true;
}

export const localeRewrite = {
  input: ({ url }: { url: URL }) => {
    url.pathname = delocalizeSection(url.pathname);
    const m = url.pathname.match(/^\/(en|tr|ar|ru)(\/.+?)\/?$/);
    if (!m) return url;
    const lang = m[1] as PrefixLang;
    if (!needsLocaleRewrite(lang, m[2])) return url;
    url.pathname = m[2];
    url.searchParams.set("lang", lang);
    return url;
  },
  output: ({ url }: { url: URL }) => {
    url.pathname = localizeSection(url.pathname);
    const lang = url.searchParams.get("lang");
    if (!lang || !(LANGS as readonly string[]).includes(lang)) return url;
    const path = url.pathname.length > 1 ? url.pathname.replace(/\/$/, "") : url.pathname;
    if (!needsLocaleRewrite(lang as PrefixLang, path)) return url;
    url.pathname = localizeSection(`/${lang}${path}`);
    url.searchParams.delete("lang");
    return url;
  },
};
