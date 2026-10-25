import { createFileRoute, redirect } from "@tanstack/react-router";
import { DoctorPage } from "@/doctor/doctor";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/doctor")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/doctor"), replace: true });
  },
  component: DoctorPage,
});
