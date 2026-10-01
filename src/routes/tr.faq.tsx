import { createFileRoute } from "@tanstack/react-router";
import { FaqView } from "@/components/faq-page";
import { FAQ } from "@/lib/faq";

export const Route = createFileRoute("/tr/faq")({
  component: () => <FaqView page={FAQ.tr} />,
});
