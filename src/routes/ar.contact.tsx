import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/routes/contact";

export const Route = createFileRoute("/ar/contact")({
  component: ContactPage,
});
