import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { HomeView } from "@/routes/index";
import { loadHomeApps } from "@/lib/studio.functions";
import type { StudioAppRow } from "@/lib/studio";

export const Route = createFileRoute("/ar")({
  loader: ({ location }) => {
    const path = location.pathname.replace(/\/$/, "") || "/";
    if (path !== "/ar") return { apps: [] as StudioAppRow[] };
    return loadHomeApps();
  },
  component: Page,
});

function Page() {
  const { apps } = Route.useLoaderData();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const bare = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (bare !== "/ar") return <Outlet />;
  return <HomeView apps={apps} />;
}
