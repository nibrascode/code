import { createFileRoute } from "@tanstack/react-router";
import { GroupPage, groupFromSlug, groupMeta } from "@/components/group-page";

export const Route = createFileRoute("/tr/tumu/$group")({
  loader: ({ params }) => ({ group: groupFromSlug(params.group, "tr") }),
  head: ({ loaderData }) => ({
    meta: loaderData ? groupMeta("tr", loaderData.group) : [],
  }),
  component: function Page() {
    const { group } = Route.useLoaderData();
    return <GroupPage lang="tr" group={group} />;
  },
});
