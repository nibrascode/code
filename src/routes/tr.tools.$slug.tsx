import { createFileRoute, notFound } from "@tanstack/react-router";
import { ToolsPage } from "@/components/tools-page";
import { toolFromPath } from "@/lib/tools";

export const Route = createFileRoute("/tr/tools/$slug")({
  loader: ({ params }) => {
    const found = toolFromPath("/tr/tools/" + params.slug);
    if (!found) throw notFound();
    return found;
  },
  component: Page,
});

function Page() {
  const { id } = Route.useLoaderData();
  return <ToolsPage lang="tr" focus={id} />;
}
