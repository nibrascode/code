import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/routes/trust";

export const Route = createFileRoute("/ar/trust")({
  component: TrustPage,
});
