import { createFileRoute } from "@tanstack/react-router";
import { LibraryIndex } from "@/components/library-page";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/resources/")({
  loader: () => loadStudioBundle(),
  component: ResourcesIndex,
});

function ResourcesIndex() {
  return <LibraryIndex section="resources" rows={Route.useLoaderData().privacy} />;
}
