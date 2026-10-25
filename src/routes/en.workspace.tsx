import { createFileRoute } from "@tanstack/react-router";
import { WorkspacePage } from "@/workspace/workspace";

export const Route = createFileRoute("/en/workspace")({
  component: WorkspacePage,
});
