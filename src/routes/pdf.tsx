import { createFileRoute, redirect } from "@tanstack/react-router";
import { PdfPage } from "@/pdf/pdf-page";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/pdf")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, location.pathname), replace: true });
  },
  component: () => <PdfPage tool={null} />,
});
