import { createFileRoute } from "@tanstack/react-router";
import { PaketTool } from "@/components/paket-tool";

export const Route = createFileRoute("/ar/paket")({
  component: Page,
});

function Page() {
  return <PaketTool lang="ar" />;
}
