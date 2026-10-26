import { createFileRoute, redirect } from "@tanstack/react-router";
import { ErrorHelpPage } from "@/error-help/error-help";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/error-help")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/error-help"), replace: true });
  },
  component: ErrorHelpPage,
});
