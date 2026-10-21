import { createFileRoute } from "@tanstack/react-router";
import { LogicPage } from "@/routes/logic";

export const Route = createFileRoute("/en/logic")({
  component: LogicPage,
});
