/**
 * One permanent hop from legacy `?lang=xx` URLs to path locales (`/xx/...`),
 * dropping the `lang` query and any trailing slash.
 */
import { legacySectionRedirect, localizeSection } from "../../src/lib/section-slugs";

const PAGES = /^\/(services|why|unutma|guides|privacy|resources|resurslar|programming|about|contact|terms|trust|nedir|apps|qr|erase|image|vcard|zip|video|planner|calc|ai|soz-sayi|faiz|wifi|seo|flow|logic|unknown|pdf|oyun|doctor|studio|learn|workspace|filecheck|schema|shortcuts|mirror|tools-legal|error-help|paket|planner|vcard)(\/.*)?$/;

/** `/hamisi/<group>?lang=xx` → the language's own folder + slug (one hop). */
const ALL_GROUPS: Record<string, Record<string, string>> = {
  en: { aletler: "/en/all/tools", studio: "/en/all/studio", oyrenme: "/en/all/learn" },
  tr: { aletler: "/tr/tumu/araclar", studio: "/tr/tumu/studio", oyrenme: "/tr/tumu/ogrenme" },
  ar: { aletler: "/ar/jami/adawat", studio: "/ar/jami/studio", oyrenme: "/ar/jami/taallum" },
  ru: { aletler: "/ru/vse/instrumenty", studio: "/ru/vse/studiya", oyrenme: "/ru/vse/obuchenie" },
};

interface LangEvent {
  url: URL;
  req: { method: string };
}

export default function langRedirectMiddleware(event: LangEvent, next: () => unknown) {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();
  const legacy = legacySectionRedirect(event.url.pathname.replace(/\/+$/, ""));
  if (legacy) {
    return new Response(null, {
      status: 301,
      headers: { location: `${legacy}${event.url.search}`, "cache-control": "public, max-age=3600" },
    });
  }
  const lang = event.url.searchParams.get("lang");
  if (lang !== "en" && lang !== "tr" && lang !== "ar" && lang !== "ru") return next();
  const path = event.url.pathname.length > 1 ? event.url.pathname.replace(/\/+$/, "") : event.url.pathname;
  const params = new URLSearchParams(event.url.search);
  params.delete("lang");
  const qs = params.toString();
  const all = path.match(/^\/hamisi\/([a-z]+)$/);
  const allDest = all ? ALL_GROUPS[lang][all[1]] : undefined;
  if (allDest) {
    return new Response(null, {
      status: 308,
      headers: { location: `${allDest}${qs ? `?${qs}` : ""}`, "cache-control": "public, max-age=3600" },
    });
  }
  if (!PAGES.test(path)) return next();
  return new Response(null, {
    status: 308,
    headers: { location: `${localizeSection(`/${lang}${path}`)}${qs ? `?${qs}` : ""}`, "cache-control": "public, max-age=3600" },
  });
}
