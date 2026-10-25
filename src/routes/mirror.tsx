import { createFileRoute, redirect } from "@tanstack/react-router";
import { MirrorPage } from "@/mirror/mirror";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/mirror")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/mirror"), replace: true });
  },
  component: MirrorPage,
});
