import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";
import { findCourse, type CoursePage } from "./meta";
import type { OwnSection } from "./own-types";

const DATA = import.meta.glob<{ default: ProgrammingSection[] }>("./data/*.json");

function resolveOwn(sections: OwnSection[], lang: Lang): ProgrammingSection[] {
  return sections.map((s) => ({
    id: s.id,
    title: s.title[lang],
    blocks: s.blocks.map((b) => ({
      ...(b.heading ? { heading: b.heading[lang] } : {}),
      ...(b.paragraphs ? { paragraphs: b.paragraphs.map((p) => p[lang]) } : {}),
      ...(b.list ? { list: b.list.map((p) => p[lang]), ordered: b.ordered } : {}),
      ...(b.code ? { code: b.code } : {}),
    })),
  }));
}

/** Lazy-loads the lesson body (a separate JS chunk per file). */
export async function loadCourseSections(slug: string, lang: Lang): Promise<ProgrammingSection[]> {
  const page: CoursePage | null = findCourse(slug);
  if (!page) return [];
  if (page.source === "own") {
    const mod = page.kind === "python" ? await import("./own-python") : await import("./own-html");
    const all = page.kind === "python" ? (mod as typeof import("./own-python")).OWN_PYTHON : (mod as typeof import("./own-html")).OWN_HTML;
    return resolveOwn(all[page.file] ?? [], lang);
  }
  const loader = DATA[`./data/${page.source}-${page.file}.json`];
  if (!loader) return [];
  const sections = (await loader()).default;
  return sections as ProgrammingSection[];
}
