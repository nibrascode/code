import { createFileRoute } from "@tanstack/react-router";
import { AppPrivacyView } from "@/components/app-privacy";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/privacy/nibras-pdf")({
  loader: () => loadStudioBundle(),
  component: NibrasPdfPrivacyPage,
});

function NibrasPdfPrivacyPage() {
  const { privacy } = Route.useLoaderData();
  return <AppPrivacyView slug="nibras-pdf" rows={privacy} />;
}
