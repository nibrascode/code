import { createFileRoute } from "@tanstack/react-router";
import { AppPrivacyView } from "@/components/app-privacy";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/privacy/$slug")({
  loader: () => loadStudioBundle(),
  component: PrivacyByApp,
});

function PrivacyByApp() {
  const { slug } = Route.useParams();
  const { privacy } = Route.useLoaderData();
  return <AppPrivacyView slug={slug} rows={privacy} />;
}
