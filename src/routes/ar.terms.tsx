import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "@/routes/terms";

export const Route = createFileRoute("/ar/terms")({
  component: TermsPage,
});
