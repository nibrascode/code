import { createFileRoute, notFound } from "@tanstack/react-router";
import { RuResourcePage } from "@/components/resurs-page";
import { libParagraphs, savedLib } from "@/lib/library-admin";
import { PDF_LOCALE_PAIRS } from "@/lib/pdf-pairs";
import { findRuResource } from "@/lib/ru-resources";
import { loadStudioBundle } from "@/lib/studio.functions";
import { GuideSection } from "@/components/guide-section";
import { loadGuideAll } from "@/lib/guides";

export const Route = createFileRoute("/ru/resources/$slug")({
  loader: async ({ params }) => {
    const page = findRuResource(params.slug);
    const studio = await loadStudioBundle();
    const pair = PDF_LOCALE_PAIRS.find((item) => item.ru === params.slug);
    if (!page && !pair) throw notFound();
    return {
      page,
      privacy: studio.privacy,
      id: pair?.az ?? params.slug,
      guides: pair ? await loadGuideAll("articles", `r-${pair.az}`) : null,
    };
  },
  component: RuRoute,
});

function RuRoute() {
  const { page, privacy, id, guides } = Route.useLoaderData();
  const saved = savedLib("resurs", id, "ru", privacy);
  return (
    <>
      <RuResourcePage
        page={page ?? undefined}
        title={saved?.title}
        paragraphs={saved ? libParagraphs(saved.body) : undefined}
      />
      <div className="page-guide-wrap">
        <GuideSection guide={guides?.["ru"]} lang={"ru"} />
      </div>
    </>
  );
}
