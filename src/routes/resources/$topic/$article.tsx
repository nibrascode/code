import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { OLD_PDF_SLUGS } from "@/lib/resurslar";

export const Route = createFileRoute("/resources/$topic/$article")({
  beforeLoad: ({ params }) => {
    const next = params.topic === "pdf" ? OLD_PDF_SLUGS[params.article] : undefined;
    if (!next) throw notFound();
    throw redirect({ to: "/resurslar/$slug", params: { slug: next }, replace: true });
  },
});
