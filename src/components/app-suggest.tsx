import { Link, useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n-context";

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
  if (pathname.startsWith("/nx-studio")) return null;
  const card = CARDS.find((item) => !pathname.startsWith(`/apps/${item.slug}`));
  if (!card) return null;

  return (
    <aside className="app-suggest">
      <Link to="/apps/$slug" params={{ slug: card.slug }}>
        <img src={card.icon} alt="" />
        <b>{card.name}</b>
        <small>{LABEL[lang]}</small>
        <svg className="suggest-bot" viewBox="-1.5 -2 19 21" aria-hidden="true">
          <g className="bot-sparks" fill="#fff6c2">
            <path className="bot-spark bot-spark-a" d="M14.6 1.2l.45 1.1 1.1.45-1.1.45-.45 1.1-.45-1.1-1.1-.45 1.1-.45z" />
            <path className="bot-spark bot-spark-b" d="M1.6 3.2l.35.85.85.35-.85.35-.35.85-.35-.85-.85-.35.85-.35z" />
          </g>
          <ellipse className="bot-shadow" cx="8" cy="16.6" rx="4.2" ry="0.7" fill="#000" opacity="0.35" />
          <g className="bot-hop">
            <g className="bot-feet">
              <rect className="bot-foot bot-foot-l" x="4.15" y="12.7" width="2.5" height="2.55" rx="0.8" fill="#c5d2ea" />
              <rect className="bot-foot bot-foot-r" x="9.35" y="12.7" width="2.5" height="2.55" rx="0.8" fill="#c5d2ea" />
            </g>
            <g className="bot-arm bot-arm-l">
              <rect x="0.9" y="7.2" width="2.1" height="4.4" rx="1.05" fill="#c5d2ea" />
            </g>
            <g className="bot-arm bot-arm-r">
              <rect x="13" y="7.2" width="2.1" height="4.4" rx="1.05" fill="#c5d2ea" />
            </g>
            <g className="bot-head">
              <g className="bot-antenna">
                <path d="M8 2.1v2.3" stroke="#9fd6ff" strokeWidth="1" strokeLinecap="round" />
                <circle className="bot-tip" cx="8" cy="1.15" r="1.05" fill="#c9b6ff" />
              </g>
              <rect x="3.1" y="4.4" width="9.8" height="8.6" rx="3" fill="#e7eefc" />
              <rect x="4.2" y="5.8" width="7.6" height="4.6" rx="2" fill="#16203a" />
              <rect className="bot-face-glow" x="4.2" y="5.8" width="7.6" height="4.6" rx="2" fill="#7fe3ff" />
              <rect x="6.6" y="11.3" width="2.8" height="0.8" rx="0.4" fill="#8ea6cc" />
            </g>
          </g>
        </svg>
      </Link>
    </aside>
  );
}
