import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, servicesMeta } from "@/components/services-page";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: servicesMeta("az") }),
  component: () => <ServicesPage lang="az" />,
});
