import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/routes/seo";

export const Route = createFileRoute("/ar/seo")({
  component: SeoPage,
});
