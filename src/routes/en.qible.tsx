import { createFileRoute } from "@tanstack/react-router";
import { QiblaPage } from "@/components/learn-pages";

export const Route = createFileRoute("/en/qible")({
  component: () => <QiblaPage lang="en" />,
});
