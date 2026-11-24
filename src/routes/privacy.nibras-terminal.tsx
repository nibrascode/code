import { createFileRoute } from "@tanstack/react-router";
import { AppPrivacyView } from "@/components/app-privacy";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/privacy/nibras-terminal")({
  loader: () => loadStudioBundle(),
  component: NibrasTerminalPrivacyPage,
});

function NibrasTerminalPrivacyPage() {
  const { privacy } = Route.useLoaderData();
  return <AppPrivacyView slug="nibras-terminal" rows={privacy} />;
}
