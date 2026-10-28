/**
 * Localized first URL segment per language for sections whose route files use
 * AZ slugs (e.g. public `/en/how-to/x` is served by route `/en/nece/$slug`).
 */
type L4 = "en" | "tr" | "ar" | "ru";

export const SECTION_SLUGS: Record<string, Record<L4, string>> = {
  nece: { en: "how-to", tr: "nasil", ar: "kayfa", ru: "kak" },
  movzu: { en: "topics", tr: "konular", ar: "mawadi", ru: "temy" },
  xeta: { en: "errors", tr: "hata", ar: "akhta", ru: "oshibki" },
  soz: { en: "words", tr: "kelime", ar: "kalimat", ru: "slova" },
  "soz-sayi": { en: "word-count", tr: "kelime-sayaci", ar: "adad-kalimat", ru: "schetchik-slov" },
  faiz: { en: "percent", tr: "yuzde", ar: "nisba", ru: "procent" },
  muqayise: { en: "compare", tr: "karsilastir", ar: "muqarana", ru: "sravnenie" },
  nedir: { en: "what-is", tr: "nedir", ar: "ma-huwa", ru: "chto-takoe" },
  oyun: { en: "games", tr: "oyunlar", ar: "alab", ru: "igry" },
  paket: { en: "packages", tr: "paketler", ar: "huzam", ru: "pakety" },
  services: { en: "services", tr: "hizmetler", ar: "khadamat", ru: "uslugi" },
};

const REVERSE: Record<L4, Record<string, string>> = { en: {}, tr: {}, ar: {}, ru: {} };
for (const [az, m] of Object.entries(SECTION_SLUGS)) for (const l of Object.keys(m) as L4[]) REVERSE[l][m[l]] = az;

const RE = /^\/(en|tr|ar|ru)\/([^/?#]+)(.*)$/;

/** `/en/nece/x` → `/en/how-to/x` (public URL). Idempotent; other paths untouched. */
export function localizeSection(path: string): string {
  const m = path.match(RE);
  if (!m) return path;
  const loc = SECTION_SLUGS[m[2]]?.[m[1] as L4];
  return loc && loc !== m[2] ? `/${m[1]}/${loc}${m[3]}` : path;
}

/** `/en/how-to/x` → `/en/nece/x` (internal route path). Idempotent. */
export function delocalizeSection(path: string): string {
  const m = path.match(RE);
  if (!m) return path;
  const az = REVERSE[m[1] as L4][m[2]];
  return az && az !== m[2] ? `/${m[1]}/${az}${m[3]}` : path;
}

/** Old AZ-slug public URL that should 301 to its localized form, or null. */
export function legacySectionRedirect(path: string): string | null {
  const next = localizeSection(path);
  return next !== path && delocalizeSection(next) === path ? next : null;
}
