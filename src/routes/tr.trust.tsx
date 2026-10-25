import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/routes/trust";

export const Route = createFileRoute("/tr/trust")({
  component: TrustPage,
});
