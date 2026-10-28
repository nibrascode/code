import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, servicesMeta } from "@/components/services-page";

export const Route = createFileRoute("/tr/services")({
  head: () => ({ meta: servicesMeta("tr") }),
  component: () => <ServicesPage lang="tr" />,
});
