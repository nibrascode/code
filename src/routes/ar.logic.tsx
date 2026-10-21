import { createFileRoute } from "@tanstack/react-router";
import { LogicPage } from "@/routes/logic";

export const Route = createFileRoute("/ar/logic")({
  component: LogicPage,
});
