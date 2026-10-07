import { createFileRoute, notFound } from "@tanstack/react-router";
import { SearchTopic } from "@/components/search-pages";
import { searchTopicFromPath } from "@/lib/search-pages";

export const Route = createFileRoute("/nece/$slug")({
  loader: ({ params }) => {
    const found = searchTopicFromPath("/nece/" + params.slug);
    if (!found) throw notFound();
    return found;
  },
  component: Page,
});

function Page() {
  const { kind, lang, item } = Route.useLoaderData();
  return <SearchTopic kind={kind} lang={lang} slug={item.slug} />;
}
