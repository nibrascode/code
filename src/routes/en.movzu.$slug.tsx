import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { SearchTopic } from "@/components/search-pages";
import { searchTopicFromPath } from "@/lib/search-pages";

export const Route = createFileRoute("/en/movzu/$slug")({
  loader: ({ params }) => {
    if (params.slug === "python-2026") throw redirect({ href: "/en/muqayise/python-2026", replace: true });
    const found = searchTopicFromPath("/en/movzu/" + params.slug);
    if (!found) throw notFound();
    return found;
  },
  component: Page,
});

function Page() {
  const { kind, lang, item } = Route.useLoaderData();
  return <SearchTopic kind={kind} lang={lang} slug={item.slug} />;
}
