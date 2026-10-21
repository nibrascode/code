import { createFileRoute } from "@tanstack/react-router";
import { FlowPage } from "@/routes/flow";

export const Route = createFileRoute("/en/flow")({
  component: FlowPage,
});
