import { createFileRoute, notFound } from "@tanstack/react-router";
import { PdfPage } from "@/pdf/pdf-page";
import { isToolId } from "@/pdf/tool-seo";

export const Route = createFileRoute("/tr/pdf_/$tool")({
  beforeLoad: ({ params }) => {
    if (!isToolId(params.tool)) throw notFound();
  },
  component: function Page() {
    const { tool } = Route.useParams();
    return <PdfPage tool={isToolId(tool) ? tool : null} />;
  },
});
