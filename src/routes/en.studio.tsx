import { createFileRoute } from "@tanstack/react-router";
import { StudioPage } from "@/studio/studio";

export const Route = createFileRoute("/en/studio")({
  component: StudioPage,
});
