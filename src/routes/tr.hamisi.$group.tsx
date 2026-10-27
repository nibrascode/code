import { createFileRoute } from "@tanstack/react-router";
import { GroupPage, groupFromSlug } from "@/components/group-page";

export const Route = createFileRoute("/tr/hamisi/$group")({
  loader: ({ params }) => ({ group: groupFromSlug(params.group) }),
  component: function Page() {
    const { group } = Route.useLoaderData();
    return <GroupPage lang="tr" group={group} />;
  },
});
