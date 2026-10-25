import { createFileRoute, redirect } from "@tanstack/react-router";
import { ZipPage } from "@/kit/zip";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/zip")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/zip"), replace: true });
  },
  component: ZipPage,
});
