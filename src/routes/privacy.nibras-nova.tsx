import { createFileRoute } from "@tanstack/react-router";
import { AppPrivacyView } from "@/components/app-privacy";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/privacy/nibras-nova")({
  loader: () => loadStudioBundle(),
  component: NibrasNovaPrivacyPage,
});

function NibrasNovaPrivacyPage() {
  const { privacy } = Route.useLoaderData();
  return <AppPrivacyView slug="nibras-nova" rows={privacy} />;
}
