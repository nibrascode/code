import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { PdfPage } from "@/pdf/pdf-page";
import { isToolId } from "@/pdf/tool-seo";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/pdf_/$tool")({
  beforeLoad: ({ location, params }) => {
    if (!isToolId(params.tool)) throw notFound();
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, location.pathname), replace: true });
  },
  component: function Page() {
    const { tool } = Route.useParams();
    return <PdfPage tool={isToolId(tool) ? tool : null} />;
  },
});
