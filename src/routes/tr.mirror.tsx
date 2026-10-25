import { createFileRoute } from "@tanstack/react-router";
import { MirrorPage } from "@/mirror/mirror";

export const Route = createFileRoute("/tr/mirror")({
  component: MirrorPage,
});
