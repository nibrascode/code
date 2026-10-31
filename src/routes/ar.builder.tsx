import { createFileRoute } from "@tanstack/react-router";
import { BuilderPage } from "@/builder/builder-page";

export const Route = createFileRoute("/ar/builder")({
  component: BuilderPage,
});
