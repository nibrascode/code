import type { Lang } from "@/lib/i18n";

export function stripLocalePrefix(pathname: string): { lang: Lang | null; path: string } {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname || "/";
  const match = path.match(/^\/(en|tr|ar|ru)(\/.*)$/);
  if (!match) return { lang: null, path };
  return { lang: match[1] as Lang, path: match[2] };
}

export function isSplitPage(path: string) {
  return path === "/about" || path === "/contact" || path === "/apps" || /^\/apps\/[^/]+$/.test(path);
}

export function localeHref(lang: Lang, path: string) {
  const bare = stripLocalePrefix(path).path;
  if (!isSplitPage(bare) || lang === "az") return bare;
  return `/${lang}${bare}`;
}
