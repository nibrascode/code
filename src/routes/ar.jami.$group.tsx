import { createFileRoute } from "@tanstack/react-router";
import { GroupPage, groupFromSlug, groupMeta } from "@/components/group-page";

export const Route = createFileRoute("/ar/jami/$group")({
  loader: ({ params }) => ({ group: groupFromSlug(params.group, "ar") }),
  head: ({ loaderData }) => ({
    meta: loaderData ? groupMeta("ar", loaderData.group) : [],
  }),
  component: function Page() {
    const { group } = Route.useLoaderData();
    return <GroupPage lang="ar" group={group} />;
  },
});
