import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, servicesMeta } from "@/components/services-page";

export const Route = createFileRoute("/ru/services")({
  head: () => ({ meta: servicesMeta("ru") }),
  component: () => <ServicesPage lang="ru" />,
});
