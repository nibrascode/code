import { Link, useRouterState } from "@tanstack/react-router";

const CARDS = [
  { slug: "nibras-arabic", name: "Nibras Arabic", icon: "/apps/nibras-arabic.jpg" },
  { slug: "nibras-pdf", name: "Nibras PDF", icon: "/apps/nibras-pdf.jpg" },
  { slug: "nibras-docs", name: "Nibras Docs", icon: "/apps/nibras-docs.jpg" },
  { slug: "nibras-plans", name: "Nibras Plans", icon: "/apps/nibras-plans.jpg" },
] as const;

export function AppSuggest() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname.startsWith("/nx-studio")) return null;
  const card = CARDS.find((item) => !pathname.startsWith(`/apps/${item.slug}`));
  if (!card) return null;

  return (
    <aside className="app-suggest">
      <Link to="/apps/$slug" params={{ slug: card.slug }}>
        <img src={card.icon} alt="" />
        <b>{card.name}</b>
      </Link>
    </aside>
  );
}
