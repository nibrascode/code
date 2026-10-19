import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { CodeSamplePage, LibraryTopicPage, PythonArticle } from "@/components/library-page";
import { CourseHub, CourseLesson } from "@/components/course-page";
import { isCodeSampleSlug } from "@/lib/code-samples";
import { hubFor, isCourseHub, isCourseSlug } from "@/lib/course/meta";
import { findTopic } from "@/lib/library";
import { hasProgrammingLocale, programmingLocalePath } from "@/lib/programming-path";
import { readLang } from "@/lib/seo";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/programming/$topic")({
  beforeLoad: ({ params, location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    if (isCodeSampleSlug(params.topic) || isCourseSlug(params.topic) || hasProgrammingLocale(lang, params.topic)) {
      throw redirect({ href: programmingLocalePath(lang, params.topic), replace: true });
    }
  },
  loader: async ({ params }) => {
    if (isCodeSampleSlug(params.topic)) return { sample: params.topic, topic: null, privacy: [], course: null, article: null };
    if (isCourseSlug(params.topic)) {
      if (isCourseHub(params.topic)) return { sample: null, topic: null, privacy: [], course: { slug: params.topic, sections: [] }, article: null };
      const { loadCourseSections } = await import("@/lib/course/load");
      return { sample: null, topic: null, privacy: [], course: { slug: params.topic, sections: await loadCourseSections(params.topic, "az") }, article: null };
    }
    const topic = findTopic("programming", params.topic);
    if (!topic) throw notFound();
    const privacy = params.topic === "python" ? (await loadStudioBundle()).privacy : [];
    const { loadProgrammingView } = await import("@/lib/article-load");
    const article = await loadProgrammingView("az", params.topic, privacy);
    return { sample: null, topic, privacy, course: null, article };
  },
  component: TopicRoute,
});

function TopicRoute() {
  const { topic, privacy, sample, course, article } = Route.useLoaderData();
  if (sample) return <CodeSamplePage slug={sample} />;
  if (course) {
    const kind = hubFor(course.slug);
    return isCourseHub(course.slug) && kind ? <CourseHub kind={kind} /> : <CourseLesson slug={course.slug} sections={course.sections} />;
  }
  if (article?.slug === "python") return <PythonArticle privacy={privacy} title={article.title} sections={article.sections} bakedLang="az" />;
  if (!topic) throw notFound();
  return <LibraryTopicPage section="programming" topic={topic} rows={privacy} article={article} />;
}