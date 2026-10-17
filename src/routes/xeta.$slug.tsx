import { createFileRoute, notFound } from "@tanstack/react-router";
import { SearchTopic } from "@/components/search-pages";
import { loadApkBody, searchTopicFromPath } from "@/lib/search-pages";

export const Route = createFileRoute("/xeta/$slug")({
  loader: async ({ params }) => {
    const found = searchTopicFromPath("/xeta/" + params.slug);
    if (!found) throw notFound();
    const body = found.item.lazy ? await loadApkBody(found.item.slug) : null;
    return { ...found, body };
  },
  component: Page,
});

function Page() {
  const { kind, lang, item, body } = Route.useLoaderData();
  return <SearchTopic kind={kind} lang={lang} slug={item.slug} body={body} />;
}
