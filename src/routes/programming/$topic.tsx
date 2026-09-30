import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { LibraryTopicPage, PythonArticle } from "@/components/library-page";
import { findTopic } from "@/lib/library";
import { findProgrammingLocale, programmingLocalePath } from "@/lib/programming-locales";
import { readLang } from "@/lib/seo";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/programming/$topic")({
  beforeLoad: ({ params, location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az" || !findProgrammingLocale(lang, params.topic)) return;
    throw redirect({ href: programmingLocalePath(lang, params.topic), replace: true });
  },
  loader: async ({ params }) => {
    const topic = findTopic("programming", params.topic);
    if (!topic) throw notFound();
    const studio = await loadStudioBundle();
    return { topic, privacy: studio.privacy };
  },
  component: TopicRoute,
});

function TopicRoute() {
  const { topic, privacy } = Route.useLoaderData();
  if (topic.slug === "python") return <PythonArticle privacy={privacy} />;
  return <LibraryTopicPage section="programming" topic={topic} />;
}
