import { createFileRoute } from "@tanstack/react-router";
import { AboutView } from "@/routes/about";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/ru/about")({
  loader: () => loadStudioBundle(),
  component: function Page() {
    return <AboutView privacy={Route.useLoaderData().privacy} />;
  },
});
