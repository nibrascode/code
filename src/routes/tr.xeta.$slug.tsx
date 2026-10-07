import { createFileRoute, notFound } from "@tanstack/react-router";
import { SearchTopic } from "@/components/search-pages";
import { searchTopicFromPath } from "@/lib/search-pages";

export const Route = createFileRoute("/tr/xeta/$slug")({
  loader: ({ params }) => {
    const found = searchTopicFromPath("/tr/xeta/" + params.slug);
    if (!found) throw notFound();
    return found;
  },
  component: Page,
});

function Page() {
  const { kind, lang, item } = Route.useLoaderData();
  return <SearchTopic kind={kind} lang={lang} slug={item.slug} />;
}
