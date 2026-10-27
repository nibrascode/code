import { createFileRoute } from "@tanstack/react-router";
import { GroupPage, groupFromSlug } from "@/components/group-page";

export const Route = createFileRoute("/ar/hamisi/$group")({
  loader: ({ params }) => ({ group: groupFromSlug(params.group) }),
  component: function Page() {
    const { group } = Route.useLoaderData();
    return <GroupPage lang="ar" group={group} />;
  },
});
