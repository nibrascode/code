import { createFileRoute } from "@tanstack/react-router";
import { GroupPage, groupFromSlug, groupTitle } from "@/components/group-page";

export const Route = createFileRoute("/tr/hamisi/$group")({
  loader: ({ params }) => ({ group: groupFromSlug(params.group) }),
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: groupTitle("tr", loaderData.group) }, { property: "og:title", content: groupTitle("tr", loaderData.group) }] : [],
  }),
  component: function Page() {
    const { group } = Route.useLoaderData();
    return <GroupPage lang="tr" group={group} />;
  },
});
