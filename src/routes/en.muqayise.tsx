import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { CompareIndex } from "@/components/learn-pages";

export const Route = createFileRoute("/en/muqayise")({
  component: Page,
});

function Page() {
  const here = useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "");
  if (here !== "/en/muqayise") return <Outlet />;
  return <CompareIndex lang="en" />;
}
