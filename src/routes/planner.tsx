import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { plannerMarkup } from "@/planner/copy";
import { mountPlanner } from "@/planner/mount";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import { useI18n } from "@/lib/i18n-context";
import "@/planner/planner.css";

const plannerHead = {
  links: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
    },
  ],
};

export const Route = createFileRoute("/planner")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/planner"), replace: true });
  },
  head: () => plannerHead,
  component: PlannerPage,
});

export function PlannerPage() {
  const { lang } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    return mountPlanner(node, lang);
  }, [lang]);

  return (
    <div
      ref={ref}
      className="nibras-planner"
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      dangerouslySetInnerHTML={{ __html: plannerMarkup(lang) }}
    />
  );
}
