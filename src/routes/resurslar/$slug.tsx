import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ResursPageView } from "@/components/resurs-page";
import { useI18n } from "@/lib/i18n-context";
import { libParagraphs, savedLib } from "@/lib/library-admin";
import { pdfPairFromPath } from "@/lib/pdf-pairs";
import { findResurs } from "@/lib/resurslar";
import { readLang } from "@/lib/seo";
import { loadStudioBundle } from "@/lib/studio.functions";
import { GuideSection } from "@/components/guide-section";
import { loadGuideAll } from "@/lib/guides";

export const Route = createFileRoute("/resurslar/$slug")({
  beforeLoad: ({ params, location }) => {
    if (readLang(location.searchStr) !== "ru") return;
    const pair = pdfPairFromPath(`/resurslar/${params.slug}`);
    if (pair) throw redirect({ href: pair.ru, replace: true });
  },
  loader: async ({ params }) => {
    const page = findResurs(params.slug);
    const studio = await loadStudioBundle();
    const saved = studio.privacy.some((row) => row.slug === `lib-resurs-${params.slug}`);
    if (!page && !saved) throw notFound();
    return {
      page,
      privacy: studio.privacy,
      slug: params.slug,
      guides: await loadGuideAll("articles", `r-${params.slug}`),
    };
  },
  component: ResursRoute,
});

function ResursRoute() {
  const { page, privacy, slug, guides } = Route.useLoaderData();
  const { lang } = useI18n();
  const saved =
    savedLib("resurs", slug, lang, privacy) ??
    (page ? null : savedLib("resurs", slug, "az", privacy));
  return (
    <>
      <ResursPageView
        page={page ?? undefined}
        title={saved?.title}
        paragraphs={saved ? libParagraphs(saved.body) : undefined}
      />
      <div className="page-guide-wrap">
        <GuideSection guide={guides?.[lang]} lang={lang} />
      </div>
    </>
  );
}
