/**
 * One permanent hop from legacy `?lang=xx` URLs to path locales (`/xx/...`),
 * dropping the `lang` query and any trailing slash.
 */
const PAGES = /^\/(why|unutma|guides|privacy|resources|resurslar|programming|about|contact|terms|trust|nedir|apps|qr|erase|image|vcard|zip|planner|calc|ai|soz-sayi|faiz|wifi|seo|flow|logic|unknown|pdf|oyun)(\/.*)?$/;

interface LangEvent {
  url: URL;
  req: { method: string };
}

export default function langRedirectMiddleware(event: LangEvent, next: () => unknown) {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();
  const lang = event.url.searchParams.get("lang");
  if (lang !== "en" && lang !== "tr" && lang !== "ar" && lang !== "ru") return next();
  const path = event.url.pathname.length > 1 ? event.url.pathname.replace(/\/+$/, "") : event.url.pathname;
  if (!PAGES.test(path)) return next();
  const params = new URLSearchParams(event.url.search);
  params.delete("lang");
  const qs = params.toString();
  return new Response(null, {
    status: 308,
    headers: { location: `/${lang}${path}${qs ? `?${qs}` : ""}`, "cache-control": "public, max-age=3600" },
  });
}
