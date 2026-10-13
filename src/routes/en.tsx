import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { HomeView } from "@/routes/index";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/en")({
  loader: () => loadStudioBundle(),
  component: Page,
});

function Page() {
  const { apps } = Route.useLoaderData();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const bare = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (bare !== "/en") return <Outlet />;
  return <HomeView apps={apps} />;
}
