import { createFileRoute } from "@tanstack/react-router";
import { NedirPage } from "@/routes/nedir";

export const Route = createFileRoute("/ar/nedir")({
  component: NedirPage,
});
