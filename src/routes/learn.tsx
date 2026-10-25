import { createFileRoute, redirect } from "@tanstack/react-router";
import { LearnPage } from "@/learn/learn";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/learn")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/learn"), replace: true });
  },
  component: LearnPage,
});
