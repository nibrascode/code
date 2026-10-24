import { createFileRoute, notFound } from "@tanstack/react-router";
import { GameScreen } from "@/components/games-page";
import { gameBySlug } from "@/lib/games";
import { GuideSection } from "@/components/guide-section";
import { loadGuide } from "@/lib/guides";

export const Route = createFileRoute("/ar/oyun/$slug")({
  loader: async ({ params }) => {
    if (!gameBySlug(params.slug)) throw notFound();
    return { slug: params.slug, guide: await loadGuide("games", params.slug, "ar") };
  },
  component: Page,
});

function Page() {
  const { slug, guide } = Route.useLoaderData();
  return (
    <>
      <GameScreen slug={slug} />
      <div className="page-guide-wrap">
        <GuideSection guide={guide} lang="ar" game />
      </div>
    </>
  );
}
