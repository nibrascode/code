import { createFileRoute, notFound } from "@tanstack/react-router";
import { ToolsPage } from "@/components/tools-page";
import { toolFromPath } from "@/lib/tools";
import { loadGuide } from "@/lib/guides";

export const Route = createFileRoute("/en/tools/$slug")({
  loader: async ({ params }) => {
    const found = toolFromPath("/en/tools/" + params.slug);
    if (!found) throw notFound();
    return { ...found, guide: await loadGuide("tools", found.id, "en") };
  },
  component: Page,
});

function Page() {
  const { id, guide } = Route.useLoaderData();
  return <ToolsPage lang="en" focus={id} guide={guide} />;
}
