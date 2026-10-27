import { createFileRoute } from "@tanstack/react-router";
import { AppPrivacyView } from "@/components/app-privacy";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/privacy/nibras-scan")({
  loader: () => loadStudioBundle(),
  component: NibrasScanPrivacyPage,
});

function NibrasScanPrivacyPage() {
  const { privacy } = Route.useLoaderData();
  return <AppPrivacyView slug="nibras-scan" rows={privacy} />;
}
