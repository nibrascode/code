import { createFileRoute } from "@tanstack/react-router";
import { HijriPage } from "@/routes/hicri";

export const Route = createFileRoute("/ar/hicri")({
  component: HijriPage,
});
