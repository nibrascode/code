import { createFileRoute } from "@tanstack/react-router";
import { QrRoutePage } from "@/routes/qr";

export const Route = createFileRoute("/ru/qr")({
  component: QrRoutePage,
});
