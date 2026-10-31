import type { Lang } from "@/lib/i18n";
export type VerbForm = [arabic: string, az: string, exAr: string, exAz: string];
export type Verb = { id: number; s: string; a: string; m: string; p: VerbForm | null; r: VerbForm | null; i: VerbForm | null };
export const VERB_HUB = "/ereb-dili/feil";
export const VERB_LANGS: Lang[] = ["az", "en", "tr", "ar", "ru"];
export const verbHub = (lang: Lang = "az") => (lang === "az" ? VERB_HUB : `/${lang}${VERB_HUB}`);
export const verbPath = (slug: string, lang: Lang = "az") => `${verbHub(lang)}/${slug}`;
type Tr = Record<string, [m: string, p1: string, p3: string, r1: string, r3: string, i1: string, i3: string]>;
const TR: Record<Exclude<Lang, "az">, () => Promise<{ default: unknown }>> = {
  en: () => import("@/data/arabic-verbs.en.json"),
  tr: () => import("@/data/arabic-verbs.tr.json"),
  ar: () => import("@/data/arabic-verbs.ar.json"),
  ru: () => import("@/data/arabic-verbs.ru.json"),
};
const cache = new Map<Lang, Promise<Verb[]>>();
/** 704 verbs from the Nibras Arabic app (src/data/arabic-verbs.json, made by scripts/gen-arabic-verbs.mjs).
 *  Other languages overlay machine-translated meanings/examples from arabic-verbs.<lang>.json. */
export function loadVerbs(lang: Lang = "az"): Promise<Verb[]> {
  let p = cache.get(lang);
  if (!p) {
    const base = import("@/data/arabic-verbs.json").then((m) => m.default as Verb[]);
    p = lang === "az" ? base : Promise.all([base, TR[lang]()]).then(([all, t]) => {
      const tr = t.default as Tr;
      const f = (x: VerbForm | null, a: string, b: string): VerbForm | null => (x ? [x[0], a, x[2], b] : null);
      return all.map((v) => { const r = tr[v.id]; return r ? { ...v, m: r[0] || v.m, p: f(v.p, r[1], r[2]), r: f(v.r, r[3], r[4]), i: f(v.i, r[5], r[6]) } : v; });
    });
    cache.set(lang, p);
  }
  return p;
}
