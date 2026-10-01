import { createFileRoute } from "@tanstack/react-router";
import { LibraryIndex } from "@/components/library-page";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/guides/")({
  loader: () => loadStudioBundle(),
  component: GuidesIndex,
});

function GuidesIndex() {
  return <LibraryIndex section="guides" rows={Route.useLoaderData().privacy} />;
}
