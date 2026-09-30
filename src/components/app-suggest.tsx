import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n-context";
import type { TKey } from "@/lib/i18n";

const CARDS: {
  slug: "nibras-arabic" | "nibras-pdf" | "nibras-docs" | "nibras-plans";
  name: string;
  icon: string;
  chip: TKey;
}[] = [
  { slug: "nibras-arabic", name: "Nibras Arabic", icon: "/apps/nibras-arabic.jpg", chip: "nx_ar_1" },
  { slug: "nibras-pdf", name: "Nibras PDF", icon: "/apps/nibras-pdf.jpg", chip: "nx_pdf_1" },
  { slug: "nibras-docs", name: "Nibras Docs", icon: "/apps/nibras-docs.jpg", chip: "nx_docs_1" },
  { slug: "nibras-plans", name: "Nibras Plans", icon: "/apps/nibras-plans.jpg", chip: "nx_plans_1" },
];

const LABEL = {
  az: "Tövsiyə",
  en: "Suggested",
  tr: "Öneri",
  ar: "اقتراح",
  ru: "Рекомендуем",
} as const;

export function AppSuggest() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { t, lang } = useI18n();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hidden = pathname === "/" || pathname.startsWith("/nx-studio");
  const cards = CARDS.filter((card) => !pathname.startsWith(`/apps/${card.slug}`));
  const card = cards[index % cards.length];

  useEffect(() => {
    setIndex(0);
  }, [pathname]);

  useEffect(() => {
    if (hidden || paused || cards.length < 2) return;
    const timer = window.setInterval(() => setIndex((current) => current + 1), 10000);
    return () => window.clearInterval(timer);
  }, [hidden, paused, cards.length]);

  if (hidden || !card) return null;

  return (
    <Link
      key={`${card.slug}-${index}`}
      to="/apps/$slug"
      params={{ slug: card.slug }}
      className="app-suggest"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <span className="app-suggest-kicker">{LABEL[lang]}</span>
      <span className="app-suggest-row">
        <img src={card.icon} alt="" />
        <span>
          <b>{card.name}</b>
          <em>{t(card.chip)}</em>
        </span>
      </span>
    </Link>
  );
}
