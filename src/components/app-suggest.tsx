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
  if (pathname.startsWith("/nx-studio")) return null;
  const card = CARDS.find((item) => !pathname.startsWith(`/apps/${item.slug}`));
  if (!card) return null;

  return (
    <aside className="app-suggest">
      <p>{LABEL[lang]}</p>
      <Link to="/apps/$slug" params={{ slug: card.slug }}>
        <img src={card.icon} alt="" />
        <span>
          <b>{card.name}</b>
          <em>{t(card.chip)}</em>
        </span>
      </Link>
    </aside>
  );
}