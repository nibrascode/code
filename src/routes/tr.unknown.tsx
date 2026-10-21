import { createFileRoute } from "@tanstack/react-router";
import { UnknownPage } from "@/routes/unknown";

export const Route = createFileRoute("/tr/unknown")({
  component: UnknownPage,
});
