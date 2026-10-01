import { createFileRoute } from "@tanstack/react-router";
import { FaqView } from "@/components/faq-page";
import { FAQ } from "@/lib/faq";

export const Route = createFileRoute("/ar/faq")({
  component: () => <FaqView page={FAQ.ar} />,
});
