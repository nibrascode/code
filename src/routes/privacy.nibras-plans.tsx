import { createFileRoute } from "@tanstack/react-router";
import { AppPrivacyView } from "@/components/app-privacy";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/privacy/nibras-plans")({
  loader: () => loadStudioBundle(),
  component: NibrasPlansPrivacyPage,
});

function NibrasPlansPrivacyPage() {
  const { privacy } = Route.useLoaderData();
  return <AppPrivacyView slug="nibras-plans" rows={privacy} />;
}
