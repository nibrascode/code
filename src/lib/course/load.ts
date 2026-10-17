import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";
import { findCourse, type CoursePage } from "./meta";
import type { OwnSection } from "./own-types";

const BOOK = import.meta.glob<{ default: OwnSection[] }>("./book/*.ts");

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
    const loaders = {
      python: () => import("./own-python").then((mod) => mod.OWN_PYTHON),
      html: () => import("./own-html").then((mod) => mod.OWN_HTML),
      javascript: () => import("./own-javascript").then((mod) => mod.OWN_JS),
      css: () => import("./own-css").then((mod) => mod.OWN_CSS),
      sql: () => import("./own-sql").then((mod) => mod.OWN_SQL),
    };
    const all = await loaders[page.kind]();
    return resolveOwn(all[page.file] ?? [], lang);
  }
  const loader = BOOK[`./book/${page.kind}-${page.file}.ts`];
  if (!loader) return [];
  return resolveOwn((await loader()).default, lang);
}
