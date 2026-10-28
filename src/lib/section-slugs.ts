/**
 * Localized first URL segment per language for sections whose route files use
 * AZ slugs (e.g. public `/en/how-to/x` is served by route `/en/nece/$slug`).
 */
import { ARTICLE_SLUGS as GENERATED_SLUGS } from "./article-slugs.generated";

type Loc4 = { en: string; tr: string; ar: string; ru: string };
/** Hand-kept localized child slugs (not generated). */
const MANUAL_SLUGS: Record<string, Record<string, Loc4>> = {
  programming: {
    "numune-kod": { en: "sample-code", tr: "ornek-kod", ar: "amthilat-alkod", ru: "primery-koda" },
    "tetbiq-kodu": { en: "app-code", tr: "uygulama-kodu", ar: "kod-altatbiq", ru: "kod-prilozheniya" },
    "oyun-kodu": { en: "game-code", tr: "oyun-kodlari", ar: "kod-allueba", ru: "kod-igry" },
    "sayt-kodu": { en: "website-code", tr: "site-kodu", ar: "kod-almawqi", ru: "kod-sayta" },
  },
};
const ARTICLE_SLUGS: Record<string, Record<string, Loc4>> = { ...GENERATED_SLUGS };
for (const [sec, items] of Object.entries(MANUAL_SLUGS)) ARTICLE_SLUGS[sec] = { ...(ARTICLE_SLUGS[sec] ?? {}), ...items };

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

const ART_REV: Record<string, Record<L4, Record<string, string>>> = {};
for (const [sec, items] of Object.entries(ARTICLE_SLUGS)) {
  const r: Record<L4, Record<string, string>> = (ART_REV[sec] = { en: {}, tr: {}, ar: {}, ru: {} });
  for (const [az, m] of Object.entries(items)) for (const l of Object.keys(m) as L4[]) r[l][m[l]] = az;
}
const ART_RE = /^\/([^/?#]+)(.*)$/;
function artOut(l: L4, sec: string, rest: string) {
  const m = rest.match(ART_RE);
  const loc = m && ARTICLE_SLUGS[sec]?.[m[1]]?.[l];
  return loc ? `/${loc}${m![2]}` : rest;
}
function artIn(l: L4, sec: string, rest: string) {
  const m = rest.match(ART_RE);
  const az = m && ART_REV[sec]?.[l][m[1]];
  return az ? `/${az}${m![2]}` : rest;
}

const RE = /^\/(en|tr|ar|ru)\/([^/?#]+)(.*)$/;

/** `/en/nece/x` → `/en/how-to/x` (public URL). Idempotent; other paths untouched. */
export function localizeSection(path: string): string {
  const m = path.match(RE);
  if (!m) return path;
  const l = m[1] as L4;
  const az = REVERSE[l][m[2]] ?? m[2];
  const loc = SECTION_SLUGS[az]?.[l] ?? m[2];
  return `/${l}/${loc}${artOut(l, az, artIn(l, az, m[3]))}`;
}

/** `/en/how-to/x` → `/en/nece/x` (internal route path). Idempotent. */
export function delocalizeSection(path: string): string {
  const m = path.match(RE);
  if (!m) return path;
  const l = m[1] as L4;
  const az = REVERSE[l][m[2]] ?? m[2];
  return `/${l}/${az}${artIn(l, az, m[3])}`;
}

/** Old AZ-slug public URL that should 301 to its localized form, or null. */
export function legacySectionRedirect(path: string): string | null {
  const next = localizeSection(path);
  return next !== path ? next : null;
}
