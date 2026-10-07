import { createFileRoute } from "@tanstack/react-router";
import { QiblaPage } from "@/components/learn-pages";

export const Route = createFileRoute("/ar/qible")({
  component: () => <QiblaPage lang="ar" />,
});
