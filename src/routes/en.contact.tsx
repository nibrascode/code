import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/routes/contact";

export const Route = createFileRoute("/en/contact")({
  component: ContactPage,
});
