import { createFileRoute } from "@tanstack/react-router";
import { WorkspacePage } from "@/workspace/workspace";

export const Route = createFileRoute("/tr/workspace")({
  component: WorkspacePage,
});
