import { createFileRoute } from "@tanstack/react-router";
import { NedirPage } from "@/routes/nedir";

export const Route = createFileRoute("/tr/nedir")({
  component: NedirPage,
});
