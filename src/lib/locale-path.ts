import type { Lang } from "@/lib/i18n";

export function stripLocalePrefix(pathname: string): { lang: Lang | null; path: string } {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname || "/";
  const bare = path.match(/^\/(en|tr|ar|ru)$/);
  if (bare) return { lang: bare[1] as Lang, path: "/" };
  const match = path.match(/^\/(en|tr|ar|ru)(\/.*)$/);
  if (!match) return { lang: null, path };
  return { lang: match[1] as Lang, path: match[2] };
}

/** Pages that keep one route file and get `/xx/...` URLs via router rewrite. */
export function isSharedLocalePage(path: string) {
  return path === "/why" || path === "/unutma" || path === "/guides" || /^\/guides\/[^/]+$/.test(path) || path === "/privacy" || /^\/privacy\/[^?#]+$/.test(path) || path === "/resources" || /^\/resources\/[^/]+(\/[^/]+)?$/.test(path) || /^\/resurslar\/[^/]+$/.test(path) || path === "/programming" || /^\/programming\/[^/]+$/.test(path);
}

export function isSplitPage(path: string) {
  return isSharedLocalePage(path) || path === "/about" || path === "/contact" || path === "/terms" || path === "/trust" || path === "/nedir" || path === "/apps" || path === "/qr" || path === "/erase" || path === "/image" || /^\/image\/(resize|convert|edit)$/.test(path) || path === "/vcard" || path === "/zip" || path === "/planner" || path === "/calc" || path === "/ai" || path === "/soz-sayi" || path === "/faiz" || path === "/wifi" || path === "/seo" || path === "/flow" || path === "/logic" || path === "/unknown" || path === "/pdf" || /^\/pdf\/[a-z-]+$/.test(path) || /^\/apps\/[^/]+$/.test(path) || path === "/oyun" || /^\/oyun\/[a-z0-9-]+$/.test(path);
}

export function homePath(lang: Lang) {
  return lang === "az" ? "/" : `/${lang}`;
}

export function localeHref(lang: Lang, path: string) {
  const hashAt = path.indexOf("#");
  const hash = hashAt >= 0 ? path.slice(hashAt) : "";
  const before = hashAt >= 0 ? path.slice(0, hashAt) : path;
  const queryAt = before.indexOf("?");
  const pathname = queryAt >= 0 ? before.slice(0, queryAt) : before;
  const query = queryAt >= 0 ? before.slice(queryAt + 1) : "";
  const bare = stripLocalePrefix(pathname).path;
  if (lang === "az" || isSplitPage(bare)) {
    const next = lang !== "az" && isSplitPage(bare) ? `/${lang}${bare}` : bare;
    return `${next}${query ? `?${query}` : ""}${hash}`;
  }
  const params = new URLSearchParams(query);
  if (!params.has("lang")) params.set("lang", lang);
  return `${bare}?${params.toString()}${hash}`;
}
