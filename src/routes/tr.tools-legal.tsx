import { createFileRoute } from "@tanstack/react-router";
import { ToolsLegalPage } from "@/legal/tools-legal";

export const Route = createFileRoute("/tr/tools-legal")({
  component: ToolsLegalPage,
});
