import { createFileRoute, redirect } from "@tanstack/react-router";
import { PhoneLab } from "@/phone/phone-lab";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/telefon")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/telefon"), replace: true });
  },
  component: PhoneLab,
});
