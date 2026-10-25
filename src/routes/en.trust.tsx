import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/routes/trust";

export const Route = createFileRoute("/en/trust")({
  component: TrustPage,
});
