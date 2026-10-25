import { createFileRoute, redirect } from "@tanstack/react-router";
import { StudioPage } from "@/studio/studio";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/studio")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/studio"), replace: true });
  },
  component: StudioPage,
});
