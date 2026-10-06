import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { AppsIndex } from "@/routes/apps/index";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/ar/apps")({
  loader: () => loadStudioBundle(),
  component: Page,
});

function Page() {
  const path = useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "");
  if (path !== "/ar/apps") return <Outlet />;
  return <AppsIndex apps={Route.useLoaderData().apps} />;
}
