import { createFileRoute } from "@tanstack/react-router";
import { PdfPage } from "@/pdf/pdf-page";

export const Route = createFileRoute("/tr/pdf")({
  component: () => <PdfPage tool={null} />,
});
