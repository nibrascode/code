import { createFileRoute } from "@tanstack/react-router";
import { QrRoutePage } from "@/routes/qr";

export const Route = createFileRoute("/tr/qr")({
  component: QrRoutePage,
});
