import { createFileRoute, redirect } from "@tanstack/react-router";
import { BuilderPage } from "@/builder/builder-page";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/builder")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/builder"), replace: true });
  },
  component: BuilderPage,
});
