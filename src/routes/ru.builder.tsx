import { createFileRoute } from "@tanstack/react-router";
import { BuilderPage } from "@/builder/builder-page";

export const Route = createFileRoute("/ru/builder")({
  component: BuilderPage,
});
