import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { PdfPage } from "@/pdf/pdf-page";
import { isToolId } from "@/pdf/tool-seo";
import { GuideSection } from "@/components/guide-section";
import { loadGuide } from "@/lib/guides";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/pdf_/$tool")({
  beforeLoad: ({ location, params }) => {
    if (!isToolId(params.tool)) throw notFound();
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, location.pathname), replace: true });
  },
  loader: async ({ params }) => ({
    guide: isToolId(params.tool) ? await loadGuide("pdf", params.tool, "az") : null,
  }),
  component: function Page() {
    const { tool } = Route.useParams();
    const { guide } = Route.useLoaderData();
    return (
      <>
        <PdfPage tool={isToolId(tool) ? tool : null} />
        <div className="page-guide-wrap">
          <GuideSection guide={guide} lang="az" />
        </div>
      </>
    );
  },
});
