import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, servicesMeta } from "@/components/services-page";

export const Route = createFileRoute("/en/xidmetler")({
  head: () => ({ meta: servicesMeta("en") }),
  component: () => <ServicesPage lang="en" />,
});
