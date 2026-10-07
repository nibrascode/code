import { createFileRoute, notFound } from "@tanstack/react-router";
import { CompareTopic } from "@/components/learn-pages";
import { compareTopicFromPath } from "@/lib/learn-pages";

export const Route = createFileRoute("/ru/muqayise/$slug")({
  loader: ({ params }) => {
    const found = compareTopicFromPath("/ru/muqayise/" + params.slug);
    if (!found) throw notFound();
    return found;
  },
  component: Page,
});

function Page() {
  const { lang, item } = Route.useLoaderData();
  return <CompareTopic lang={lang} slug={item.slug} />;
}
