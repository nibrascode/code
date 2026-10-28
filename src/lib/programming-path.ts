import { delocalizeSection, localizeSection } from "@/lib/section-slugs";
import type { Lang } from "@/lib/i18n";
import { PROGRAMMING_SEO } from "@/lib/programming-seo";

export function programmingLocalePath(lang: Lang, slug: string) {
  if (lang === "az") return `/programming/${slug}`;
  return localizeSection(`/${lang}/programming/${slug}`);
}

export function programmingFromPath(pathname: string) {
  const path = delocalizeSection(pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname);
  const prefixed = path.match(/^\/(en|tr|ar|ru)\/programming\/([^/]+)$/);
  if (prefixed) return { lang: prefixed[1] as Exclude<Lang, "az">, slug: prefixed[2] };
  const az = path.match(/^\/programming\/([^/]+)$/);
  if (az) return { lang: "az" as const, slug: az[1] };
  return null;
}

export function hasProgrammingLocale(lang: Lang, slug: string) {
  if (lang === "az") return false;
  return Object.prototype.hasOwnProperty.call(PROGRAMMING_SEO, slug);
}
