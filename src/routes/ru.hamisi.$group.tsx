import { createFileRoute } from "@tanstack/react-router";
import { GroupPage, groupFromSlug, groupMeta } from "@/components/group-page";

export const Route = createFileRoute("/ru/hamisi/$group")({
  loader: ({ params }) => ({ group: groupFromSlug(params.group) }),
  head: ({ loaderData }) => ({
    meta: loaderData ? groupMeta("ru", loaderData.group) : [],
  }),
  component: function Page() {
    const { group } = Route.useLoaderData();
    return <GroupPage lang="ru" group={group} />;
  },
});
