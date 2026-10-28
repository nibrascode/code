import type { Lang } from "@/lib/i18n";

export type GroupKey = "g1" | "g2" | "g3";

/** Localized section segment + group slugs per language (SEO-friendly URLs). */
export const GROUP_BASE: Record<Lang, string> = {
  az: "/hamisi",
  en: "/en/all",
  tr: "/tr/tumu",
  ar: "/ar/jami",
  ru: "/ru/vse",
};

export const GROUP_SLUGS: Record<Lang, Record<GroupKey, string>> = {
  az: { g1: "aletler", g2: "studio", g3: "oyrenme" },
  en: { g1: "tools", g2: "studio", g3: "learn" },
  tr: { g1: "araclar", g2: "studio", g3: "ogrenme" },
  ar: { g1: "adawat", g2: "studio", g3: "taallum" },
  ru: { g1: "instrumenty", g2: "studiya", g3: "obuchenie" },
};

export function groupLocalePath(lang: Lang, group: GroupKey) {
  return `${GROUP_BASE[lang]}/${GROUP_SLUGS[lang][group]}`;
}

export function groupKeyFromSlug(lang: Lang, slug: string): GroupKey | null {
  const map = GROUP_SLUGS[lang];
  return ((Object.keys(map) as GroupKey[]).find((g) => map[g] === slug) ?? null);
}

export function groupFromPath(pathname: string): { lang: Lang; group: GroupKey } | null {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  for (const lang of Object.keys(GROUP_BASE) as Lang[]) {
    const base = GROUP_BASE[lang];
    if (!path.startsWith(`${base}/`)) continue;
    const slug = path.slice(base.length + 1);
    if (slug.includes("/")) continue;
    const group = groupKeyFromSlug(lang, slug);
    if (group) return { lang, group };
  }
  return null;
}
