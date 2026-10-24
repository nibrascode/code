import { createFileRoute, notFound } from "@tanstack/react-router";
import { PdfPage } from "@/pdf/pdf-page";
import { isToolId } from "@/pdf/tool-seo";
import { GuideSection } from "@/components/guide-section";
import { loadGuide } from "@/lib/guides";

export const Route = createFileRoute("/ar/pdf_/$tool")({
  beforeLoad: ({ params }) => {
    if (!isToolId(params.tool)) throw notFound();
  },
  loader: async ({ params }) => ({
    guide: isToolId(params.tool) ? await loadGuide("pdf", params.tool, "ar") : null,
  }),
  component: function Page() {
    const { tool } = Route.useParams();
    const { guide } = Route.useLoaderData();
    return (
      <>
        <PdfPage tool={isToolId(tool) ? tool : null} />
        <div className="page-guide-wrap">
          <GuideSection guide={guide} lang="ar" />
        </div>
      </>
    );
  },
});
