import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { SearchIndex } from "@/components/search-pages";

export const Route = createFileRoute("/ar/soz")({
  component: Page,
});

function Page() {
  const here = useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "");
  if (here !== "/ar/soz") return <Outlet />;
  return <SearchIndex kind="soz" lang="ar" />;
}
