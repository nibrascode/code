import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppSlugView, loadAppPage } from "@/routes/apps/$slug";

export const Route = createFileRoute("/tr/apps/$slug")({
  loader: async ({ params }) => {
    const data = await loadAppPage(params.slug);
    if (!data) throw notFound();
    return data;
  },
  component: function Page() {
    return <AppSlugView data={Route.useLoaderData()} />;
  },
});
