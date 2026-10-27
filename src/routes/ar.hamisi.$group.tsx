import { createFileRoute } from "@tanstack/react-router";
import { GroupPage, groupFromSlug, groupTitle } from "@/components/group-page";

export const Route = createFileRoute("/ar/hamisi/$group")({
  loader: ({ params }) => ({ group: groupFromSlug(params.group) }),
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: groupTitle("ar", loaderData.group) }, { property: "og:title", content: groupTitle("ar", loaderData.group) }] : [],
  }),
  component: function Page() {
    const { group } = Route.useLoaderData();
    return <GroupPage lang="ar" group={group} />;
  },
});
