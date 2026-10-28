import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, servicesMeta } from "@/components/services-page";

export const Route = createFileRoute("/xidmetler")({
  head: () => ({ meta: servicesMeta("az") }),
  component: () => <ServicesPage lang="az" />,
});
