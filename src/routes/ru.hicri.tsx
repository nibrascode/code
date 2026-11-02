import { createFileRoute } from "@tanstack/react-router";
import { HijriPage } from "@/routes/hicri";

export const Route = createFileRoute("/ru/hicri")({
  component: HijriPage,
});
