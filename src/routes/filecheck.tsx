import { createFileRoute, redirect } from "@tanstack/react-router";
import { FileCheckPage } from "@/filecheck/filecheck";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/filecheck")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/filecheck"), replace: true });
  },
  component: FileCheckPage,
});
