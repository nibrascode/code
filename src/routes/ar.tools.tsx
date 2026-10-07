import { createFileRoute } from "@tanstack/react-router";
import { ToolsPage } from "@/components/tools-page";

export const Route = createFileRoute("/ar/tools")({
  component: Page,
});

function Page() {
  return <ToolsPage lang="ar" />;
}
