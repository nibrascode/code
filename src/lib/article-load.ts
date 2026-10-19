import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";
import type { StudioPrivacyRow } from "@/lib/studio";
import { pythonSections } from "@/lib/lessons";

export type ProgrammingView = {
  slug: string;
  title: string;
  sections: readonly ProgrammingSection[];
};

function seoTitle(title: string | undefined, fallback: string) {
  return title?.replace(/ — Nibras Code$/, "") ?? fallback;
}

export async function loadProgrammingView(
  lang: Lang,
  slug: string,
  privacy: readonly StudioPrivacyRow[] = [],
): Promise<ProgrammingView | null> {
  const { findProgramming } = await import("@/lib/programming");
  const page = findProgramming(slug);
  if (!page) return null;
  const locale = lang === "az" ? null : (await import("@/lib/programming-locales")).findProgrammingLocale(lang, slug);
  if (slug === "python") {
    const azBaked = page.sections ?? [];
    const baked = lang === "az" ? azBaked : (locale?.sections ?? []);
    return {
      slug,
      title: seoTitle(page.seo[lang]?.title, page.title || "Python"),
      sections: pythonSections(lang, privacy, baked, azBaked),
    };
  }
  return {
    slug,
    title: locale?.title ?? seoTitle(page.seo[lang]?.title, page.title),
    sections: locale?.sections ?? page.sections ?? [],
  };
}

export async function loadPythonEditorSections(rows: readonly StudioPrivacyRow[]) {
  const view = await loadProgrammingView("az", "python", rows);
  return view?.sections ?? pythonSections("az", rows);
}
