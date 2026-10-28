import { createFileRoute } from "@tanstack/react-router";
import { GroupPage, groupFromSlug, groupMeta } from "@/components/group-page";

export const Route = createFileRoute("/en/all/$group")({
  loader: ({ params }) => ({ group: groupFromSlug(params.group, "en") }),
  head: ({ loaderData }) => ({
    meta: loaderData ? groupMeta("en", loaderData.group) : [],
  }),
  component: function Page() {
    const { group } = Route.useLoaderData();
    return <GroupPage lang="en" group={group} />;
  },
});
