import { createFileRoute } from "@tanstack/react-router";
import { AppPrivacyView } from "@/components/app-privacy";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/privacy/mushafuk")({
  loader: () => loadStudioBundle(),
  component: MushafukPrivacyPage,
});

function MushafukPrivacyPage() {
  const { privacy } = Route.useLoaderData();
  return <AppPrivacyView slug="mushafuk" rows={privacy} />;
}
