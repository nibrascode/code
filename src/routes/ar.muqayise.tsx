import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { CompareIndex } from "@/components/learn-pages";

export const Route = createFileRoute("/ar/muqayise")({
  component: Page,
});

function Page() {
  const here = useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "");
  if (here !== "/ar/muqayise") return <Outlet />;
  return <CompareIndex lang="ar" />;
}
