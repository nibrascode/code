import { createFileRoute } from "@tanstack/react-router";
import { AppPrivacyView } from "@/components/app-privacy";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/privacy/nibras-note")({
  loader: () => loadStudioBundle(),
  component: NibrasNotePrivacyPage,
});

function NibrasNotePrivacyPage() {
  const { privacy } = Route.useLoaderData();
  return <AppPrivacyView slug="nibras-note" rows={privacy} />;
}
