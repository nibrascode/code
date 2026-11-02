import { createFileRoute } from "@tanstack/react-router";
import { HijriPage } from "@/routes/hicri";

export const Route = createFileRoute("/en/hicri")({
  component: HijriPage,
});
