import { createFileRoute } from "@tanstack/react-router";
import { AboutView } from "@/routes/about";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/tr/about")({
  loader: () => loadStudioBundle(),
  component: function Page() {
    return <AboutView privacy={Route.useLoaderData().privacy} />;
  },
});
