import { createFileRoute, notFound } from "@tanstack/react-router";
import { LibraryTopicPage } from "@/components/library-page";
import { findTopic } from "@/lib/library";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/guides/$topic")({
  loader: async ({ params }) => {
    const topic = findTopic("guides", params.topic);
    const studio = await loadStudioBundle();
    const custom = studio.privacy.some((row) => row.slug === `lib-guide-${params.topic}`);
    if (!topic && !custom) throw notFound();
    return {
      topic: topic ?? { slug: params.topic, label: "guide_pdf" as const },
      privacy: studio.privacy,
    };
  },
  component: TopicRoute,
});

function TopicRoute() {
  const { topic, privacy } = Route.useLoaderData();
  return <LibraryTopicPage section="guides" topic={topic} rows={privacy} />;
}
