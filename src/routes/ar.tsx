import { createFileRoute } from "@tanstack/react-router";
import { HomeView } from "@/routes/index";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/ar")({
  loader: () => loadStudioBundle(),
  component: Page,
});

function Page() {
  return <HomeView apps={Route.useLoaderData().apps} />;
}
