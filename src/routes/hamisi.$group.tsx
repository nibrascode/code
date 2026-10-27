import { createFileRoute } from "@tanstack/react-router";
import { GroupPage, groupFromSlug, groupTitle } from "@/components/group-page";

export const Route = createFileRoute("/hamisi/$group")({
  loader: ({ params }) => ({ group: groupFromSlug(params.group) }),
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: groupTitle("az", loaderData.group) }, { property: "og:title", content: groupTitle("az", loaderData.group) }] : [],
  }),
  component: function Page() {
    const { group } = Route.useLoaderData();
    return <GroupPage lang="az" group={group} />;
  },
});
