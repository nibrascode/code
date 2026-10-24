import type { Lang } from "@/lib/i18n";

export type Guide = { about: string[]; steps?: string[]; uses: string[]; faq: [string, string][] };
export type GuideKind = "tools" | "pdf" | "games" | "articles" | "pages";

const FILES = import.meta.glob<{ default: Record<Lang, Guide> }>("../data/guides/*/*.json");

/** Loads one page's long-form help text (lazy chunk, so other pages stay light). */
export async function loadGuide(kind: GuideKind, id: string, lang: Lang): Promise<Guide | null> {
  const load = FILES[`../data/guides/${kind}/${id}.json`];
  if (!load) return null;
  const data = (await load()).default;
  return data[lang] ?? data.en ?? null;
}

export const GUIDE_HEAD: Record<Lang, { about: string; steps: string; stepsGame: string; uses: string; usesGame: string; faq: string }> = {
  az: { about: "Ətraflı məlumat", steps: "Necə istifadə olunur", stepsGame: "Necə oynanılır", uses: "Harada işə yarayır", usesGame: "Məsləhətlər", faq: "Tez-tez verilən suallar" },
  en: { about: "About this tool", steps: "How to use it", stepsGame: "How to play", uses: "Common uses", usesGame: "Tips", faq: "Frequently asked questions" },
  tr: { about: "Ayrıntılı bilgi", steps: "Nasıl kullanılır", stepsGame: "Nasıl oynanır", uses: "Nerede işe yarar", usesGame: "İpuçları", faq: "Sık sorulan sorular" },
  ar: { about: "معلومات مفصلة", steps: "طريقة الاستخدام", stepsGame: "طريقة اللعب", uses: "استخدامات شائعة", usesGame: "نصائح", faq: "أسئلة شائعة" },
  ru: { about: "Подробнее", steps: "Как пользоваться", stepsGame: "Как играть", uses: "Где пригодится", usesGame: "Советы", faq: "Частые вопросы" },
};

/** All five languages of one guide, for routes whose language comes from ?lang=. */
export async function loadGuideAll(kind: GuideKind | "articles", id: string): Promise<Record<Lang, Guide> | null> {
  const load = FILES[`../data/guides/${kind}/${id}.json`];
  return load ? (await load()).default : null;
}

/** Guide keyed by page path (locale prefix stripped), e.g. /en/faq/nibras-pdf → pages/faq-nibras-pdf. */
export async function loadPathGuide(pathname: string, lang: Lang): Promise<Guide | null> {
  const path = pathname.replace(/^\/(en|ru|ar|tr)(?=\/|$)/, "").replace(/\/$/, "");
  const id = path.replace(/^\//, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  if (!id) return null;
  const load = FILES[`../data/guides/pages/${id}.json`];
  if (!load) return null;
  const data = (await load()).default;
  return data[lang] ?? data.en ?? null;
}
