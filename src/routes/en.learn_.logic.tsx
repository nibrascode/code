import { createFileRoute } from "@tanstack/react-router";
import { LogicLabPage } from "@/logiclab/logiclab";

export const Route = createFileRoute("/en/learn_/logic")({
  component: LogicLabPage,
});
