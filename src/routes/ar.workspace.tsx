import { createFileRoute } from "@tanstack/react-router";
import { WorkspacePage } from "@/workspace/workspace";

export const Route = createFileRoute("/ar/workspace")({
  component: WorkspacePage,
});
