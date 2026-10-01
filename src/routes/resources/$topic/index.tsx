import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { LibraryTopicPage } from "@/components/library-page";
import { findTopic } from "@/lib/library";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/resources/$topic/")({
  beforeLoad: ({ params }) => {
    if (params.topic === "pdf") {
      throw redirect({ to: "/resurslar/$slug", params: { slug: "pdf" }, replace: true });
    }
  },
  loader: async ({ params }) => {
    const topic = findTopic("resources", params.topic);
    const studio = await loadStudioBundle();
    const custom = studio.privacy.some((row) => row.slug === `lib-resurs-${params.topic}`);
    if (!topic && !custom) throw notFound();
    return {
      topic: topic ?? { slug: params.topic, label: "res_docs" as const },
      privacy: studio.privacy,
    };
  },
  component: TopicRoute,
});

function TopicRoute() {
  const { topic, privacy } = Route.useLoaderData();
  return <LibraryTopicPage section="resources" topic={topic} rows={privacy} />;
}
