import { createFileRoute } from "@tanstack/react-router";
import { PaketTool } from "@/components/paket-tool";

export const Route = createFileRoute("/paket")({
  component: Page,
});

function Page() {
  return <PaketTool lang="az" />;
}
