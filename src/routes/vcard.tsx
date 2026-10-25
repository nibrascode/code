import { createFileRoute, redirect } from "@tanstack/react-router";
import { VcardPage } from "@/kit/vcard";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/vcard")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/vcard"), replace: true });
  },
  component: VcardPage,
});
