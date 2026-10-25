import { createFileRoute, redirect } from "@tanstack/react-router";
import { ToolsLegalPage } from "@/legal/tools-legal";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/tools-legal")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/tools-legal"), replace: true });
  },
  component: ToolsLegalPage,
});
