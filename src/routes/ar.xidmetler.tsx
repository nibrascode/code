import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, servicesMeta } from "@/components/services-page";

export const Route = createFileRoute("/ar/xidmetler")({
  head: () => ({ meta: servicesMeta("ar") }),
  component: () => <ServicesPage lang="ar" />,
});
