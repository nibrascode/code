import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/routes/seo";

export const Route = createFileRoute("/tr/seo")({
  component: SeoPage,
});
