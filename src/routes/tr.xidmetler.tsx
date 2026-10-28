import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, servicesMeta } from "@/components/services-page";

export const Route = createFileRoute("/tr/xidmetler")({
  head: () => ({ meta: servicesMeta("tr") }),
  component: () => <ServicesPage lang="tr" />,
});
