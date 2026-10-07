import { createFileRoute, notFound } from "@tanstack/react-router";
import { SearchTopic } from "@/components/search-pages";
import { searchTopicFromPath } from "@/lib/search-pages";

export const Route = createFileRoute("/ru/xeta/$slug")({
  loader: ({ params }) => {
    const found = searchTopicFromPath("/ru/xeta/" + params.slug);
    if (!found) throw notFound();
    return found;
  },
  component: Page,
});

function Page() {
  const { kind, lang, item } = Route.useLoaderData();
  return <SearchTopic kind={kind} lang={lang} slug={item.slug} />;
}
