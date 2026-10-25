import { createFileRoute } from "@tanstack/react-router";
import { MirrorPage } from "@/mirror/mirror";

export const Route = createFileRoute("/ar/mirror")({
  component: MirrorPage,
});
