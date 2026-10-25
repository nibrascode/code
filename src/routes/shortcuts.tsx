import { createFileRoute, redirect } from "@tanstack/react-router";
import { ShortcutsPage } from "@/shortcuts/shortcuts";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/shortcuts")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/shortcuts"), replace: true });
  },
  component: ShortcutsPage,
});
