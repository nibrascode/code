import { createFileRoute, notFound } from "@tanstack/react-router";
import { ToolsPage } from "@/components/tools-page";
import { toolFromPath } from "@/lib/tools";

export const Route = createFileRoute("/ru/tools/$slug")({
  loader: ({ params }) => {
    const found = toolFromPath("/ru/tools/" + params.slug);
    if (!found) throw notFound();
    return found;
  },
  component: Page,
});

function Page() {
  const { id } = Route.useLoaderData();
  return <ToolsPage lang="ru" focus={id} />;
}
