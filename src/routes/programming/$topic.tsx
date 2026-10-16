import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { CodeSamplePage, LibraryTopicPage, PythonArticle } from "@/components/library-page";
import { CourseHub, CourseLesson } from "@/components/course-page";
import { isCodeSampleSlug } from "@/lib/code-samples";
import { hubFor, isCourseHub, isCourseSlug } from "@/lib/course/meta";
import { findTopic } from "@/lib/library";
import { findProgrammingLocale, programmingLocalePath } from "@/lib/programming-locales";
import { readLang } from "@/lib/seo";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/programming/$topic")({
  beforeLoad: ({ params, location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    if (isCodeSampleSlug(params.topic) || isCourseSlug(params.topic) || findProgrammingLocale(lang, params.topic)) {
      throw redirect({ href: programmingLocalePath(lang, params.topic), replace: true });
    }
  },
  loader: async ({ params }) => {
    if (isCodeSampleSlug(params.topic)) return { sample: params.topic, topic: null, privacy: [], course: null };
    if (isCourseSlug(params.topic)) {
      if (isCourseHub(params.topic)) return { sample: null, topic: null, privacy: [], course: { slug: params.topic, sections: [] } };
      const { loadCourseSections } = await import("@/lib/course/load");
      return { sample: null, topic: null, privacy: [], course: { slug: params.topic, sections: await loadCourseSections(params.topic, "az") } };
    }
    const topic = findTopic("programming", params.topic);
    if (!topic) throw notFound();
    const studio = await loadStudioBundle();
    return { sample: null, topic, privacy: studio.privacy, course: null };
  },
  component: TopicRoute,
});

function TopicRoute() {
  const { topic, privacy, sample, course } = Route.useLoaderData();
  if (sample) return <CodeSamplePage slug={sample} />;
  if (course) {
    const kind = hubFor(course.slug);
    return isCourseHub(course.slug) && kind ? <CourseHub kind={kind} /> : <CourseLesson slug={course.slug} sections={course.sections} />;
  }
  if (!topic) throw notFound();
  if (topic.slug === "python") return <PythonArticle privacy={privacy} />;
  return <LibraryTopicPage section="programming" topic={topic} />;
}