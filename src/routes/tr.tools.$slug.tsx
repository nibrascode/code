import { createFileRoute, notFound } from "@tanstack/react-router";
import { ToolsPage } from "@/components/tools-page";
import { toolFromPath } from "@/lib/tools";
import { loadGuide } from "@/lib/guides";

export const Route = createFileRoute("/tr/tools/$slug")({
  loader: async ({ params }) => {
    const found = toolFromPath("/tr/tools/" + params.slug);
    if (!found) throw notFound();
    return { ...found, guide: await loadGuide("tools", found.id, "tr") };
  },
  component: Page,
});

function Page() {
  const { id, guide } = Route.useLoaderData();
  return <ToolsPage lang="tr" focus={id} guide={guide} />;
}
