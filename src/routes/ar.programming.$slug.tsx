import { createFileRoute, notFound } from "@tanstack/react-router";
import { CodeSamplePage, ProgrammingArticle, PythonArticle } from "@/components/library-page";
import { CourseHub, CourseLesson } from "@/components/course-page";
import { isCodeSampleSlug } from "@/lib/code-samples";
import { hubFor, isCourseHub, isCourseSlug } from "@/lib/course/meta";
import { findProgrammingLocale } from "@/lib/programming-locales";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/ar/programming/$slug")({
  loader: async ({ params }) => {
    if (isCodeSampleSlug(params.slug)) return { sample: params.slug, page: null, privacy: [], course: null };
    if (isCourseSlug(params.slug)) {
      if (isCourseHub(params.slug)) return { sample: null, page: null, privacy: [], course: { slug: params.slug, sections: [] } };
      const { loadCourseSections } = await import("@/lib/course/load");
      return { sample: null, page: null, privacy: [], course: { slug: params.slug, sections: await loadCourseSections(params.slug, "ar") } };
    }
    const page = findProgrammingLocale("ar", params.slug);
    if (!page) throw notFound();
    const studio = await loadStudioBundle();
    return { sample: null, page, privacy: studio.privacy, course: null };
  },
  component: LocaleRoute,
});

function LocaleRoute() {
  const { page, privacy, sample, course } = Route.useLoaderData();
  if (sample) return <CodeSamplePage slug={sample} />;
  if (course) {
    const kind = hubFor(course.slug);
    return isCourseHub(course.slug) && kind ? <CourseHub kind={kind} /> : <CourseLesson slug={course.slug} sections={course.sections} />;
  }
  if (!page) throw notFound();
  if (page.slug === "python") return <PythonArticle privacy={privacy} />;
  return <ProgrammingArticle slug={page.slug} title={page.title} sections={page.sections} />;
}