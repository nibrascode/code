import { createFileRoute } from "@tanstack/react-router";
import { LogicLabPage } from "@/logiclab/logiclab";

export const Route = createFileRoute("/ru/learn_/logic")({
  component: LogicLabPage,
});
