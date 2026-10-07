import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { SearchIndex } from "@/components/search-pages";

export const Route = createFileRoute("/ar/xeta")({
  component: Page,
});

function Page() {
  const here = useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "");
  if (here !== "/ar/xeta") return <Outlet />;
  return <SearchIndex kind="xeta" lang="ar" />;
}
