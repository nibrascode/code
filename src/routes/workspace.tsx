import { createFileRoute, redirect } from "@tanstack/react-router";
import { WorkspacePage } from "@/workspace/workspace";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/workspace")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/workspace"), replace: true });
  },
  component: WorkspacePage,
});
