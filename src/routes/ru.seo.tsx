import { createFileRoute } from "@tanstack/react-router";
import { SeoPage } from "@/routes/seo";

export const Route = createFileRoute("/ru/seo")({
  component: SeoPage,
});
