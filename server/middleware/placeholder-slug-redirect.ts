/**
 * Permanent hop away from literal TanStack route templates that leaked as URLs
 * (e.g. /xeta/$slug or /xeta/%24slug) — GSC Not found (404).
 */
interface Ev {
  url: URL;
  req: { method: string };
}

const LITERAL = /^(?:\/(?:en|tr|ar|ru))?\/(?:xeta|faq|movzu|muqayise|nece|oyun|soz|tools)\/(?:\$slug|%24slug)\/?$/i;

export default function placeholderSlugRedirect(event: Ev, next: () => unknown) {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();
  const path = event.url.pathname;
  if (!LITERAL.test(path)) return next();
  const dest = path.replace(/\/(?:\$slug|%24slug)\/?$/i, "") || "/";
  return new Response(null, {
    status: 308,
    headers: { location: dest, "cache-control": "public, max-age=3600" },
  });
}
