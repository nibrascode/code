import { createFileRoute } from "@tanstack/react-router";
import { QiblaPage } from "@/components/learn-pages";

export const Route = createFileRoute("/tr/qible")({
  component: () => <QiblaPage lang="tr" />,
});
