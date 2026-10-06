import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { CodeSamplePage, LibraryTopicPage, PythonArticle } from "@/components/library-page";
import { isCodeSampleSlug } from "@/lib/code-samples";
import { findTopic } from "@/lib/library";
import { findProgrammingLocale, programmingLocalePath } from "@/lib/programming-locales";
import { readLang } from "@/lib/seo";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/programming/$topic")({
  beforeLoad: ({ params, location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    if (isCodeSampleSlug(params.topic) || findProgrammingLocale(lang, params.topic)) {
      throw redirect({ href: programmingLocalePath(lang, params.topic), replace: true });
    }
  },
  loader: async ({ params }) => {
    if (isCodeSampleSlug(params.topic)) return { sample: params.topic, topic: null, privacy: [] };
    const topic = findTopic("programming", params.topic);
    if (!topic) throw notFound();
    const studio = await loadStudioBundle();
    return { sample: null, topic, privacy: studio.privacy };
  },
  component: TopicRoute,
});

function TopicRoute() {
  const { topic, privacy, sample } = Route.useLoaderData();
  if (sample) return <CodeSamplePage slug={sample} />;
  if (!topic) throw notFound();
  if (topic.slug === "python") return <PythonArticle privacy={privacy} />;
  return <LibraryTopicPage section="programming" topic={topic} />;
}