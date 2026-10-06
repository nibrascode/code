import { createFileRoute, notFound } from "@tanstack/react-router";
import { FaqTopic } from "@/components/faq-page";
import { faqTopicFromPath } from "@/lib/faq";

export const Route = createFileRoute("/tr/faq/$slug")({
  loader: ({ params }) => {
    const found = faqTopicFromPath(`/tr/faq/${params.slug}`);
    if (!found) throw notFound();
    return found;
  },
  component: TopicPage,
});

function TopicPage() {
  const { page, item } = Route.useLoaderData();
  return <FaqTopic page={page} item={item} />;
}
