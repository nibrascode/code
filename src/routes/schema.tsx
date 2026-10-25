import { createFileRoute, redirect } from "@tanstack/react-router";
import { SchemaPage } from "@/schema/schema";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/schema")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/schema"), replace: true });
  },
  component: SchemaPage,
});
