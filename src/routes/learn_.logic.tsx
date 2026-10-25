import { createFileRoute, redirect } from "@tanstack/react-router";
import { LogicLabPage } from "@/logiclab/logiclab";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/learn_/logic")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/learn/logic"), replace: true });
  },
  component: LogicLabPage,
});
