export type VerbForm = [arabic: string, az: string, exAr: string, exAz: string];
export type Verb = { id: number; s: string; a: string; m: string; p: VerbForm | null; r: VerbForm | null; i: VerbForm | null };
export const VERB_HUB = "/ereb-dili/feil";
export const verbPath = (slug: string) => `${VERB_HUB}/${slug}`;
let cache: Promise<Verb[]> | null = null;
/** 704 verbs from the Nibras Arabic app (src/data/arabic-verbs.json, made by scripts/gen-arabic-verbs.mjs). */
export function loadVerbs(): Promise<Verb[]> {
  cache ??= import("@/data/arabic-verbs.json").then((m) => m.default as Verb[]);
  return cache;
}
