import { useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n-context";
import { localeHref, stripLocalePrefix } from "@/lib/locale-path";

const CARDS = [
  { slug: "nibras-arabic", name: "Nibras Arabic", icon: "/apps/nibras-arabic.jpg" },
  { slug: "nibras-pdf", name: "Nibras PDF", icon: "/apps/nibras-pdf.jpg" },
  { slug: "nibras-docs", name: "Nibras Docs", icon: "/apps/nibras-docs.jpg" },
  { slug: "nibras-plans", name: "Nibras Plans", icon: "/apps/nibras-plans.jpg" },
] as const;

const LABEL = {
  az: "Tövsiyə",
  en: "Suggested",
  tr: "Öneri",
  ar: "اقتراح",
  ru: "Рекомендуем",
} as const;

export function AppSuggest() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { lang } = useI18n();
  const here = stripLocalePrefix(pathname).path;
  if (pathname.startsWith("/nx-studio")) return null;
  const card = CARDS.find((item) => !here.startsWith(`/apps/${item.slug}`));
  if (!card) return null;

  return (
    <aside className="app-suggest">
      <a href={localeHref(lang, `/apps/${card.slug}`)}>
        <img src={card.icon} alt="" />
        <b>{card.name}</b>
        <small>{LABEL[lang]}</small>
        <svg className="suggest-bot" viewBox="0 0 16 18" aria-hidden="true">
          <circle cx="8" cy="1.15" r="1.05" fill="#c9b6ff" />
          <path d="M8 2.1v2.2" stroke="#9fd6ff" strokeWidth="1" strokeLinecap="round" />
          <rect x="3.1" y="4.4" width="9.8" height="8.6" rx="3" fill="#e7eefc" />
          <rect x="5.1" y="7.1" width="5.8" height="1.35" rx="0.65" fill="#8ea6cc" />
          <rect x="4.15" y="12.7" width="2.5" height="2.55" rx="0.8" fill="#c5d2ea" />
          <rect x="9.35" y="12.7" width="2.5" height="2.55" rx="0.8" fill="#c5d2ea" />
        </svg>
      </a>
    </aside>
  );
}
