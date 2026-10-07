import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { ToolsPage } from "@/components/tools-page";

export const Route = createFileRoute("/tools")({
  component: Page,
});

function Page() {
  const here = useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "");
  if (here !== "/tools") return <Outlet />;
  return <ToolsPage lang="az" />;
}
