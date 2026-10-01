import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProgrammingArticle, PythonArticle } from "@/components/library-page";
import { findProgrammingLocale } from "@/lib/programming-locales";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/ar/programming/$slug")({
  loader: async ({ params }) => {
    const page = findProgrammingLocale("ar", params.slug);
    if (!page) throw notFound();
    const studio = await loadStudioBundle();
    return { page, privacy: studio.privacy };
  },
  component: LocaleRoute,
});

function LocaleRoute() {
  const { page, privacy } = Route.useLoaderData();
  if (page.slug === "python") return <PythonArticle privacy={privacy} />;
  return <ProgrammingArticle title={page.title} sections={page.sections} />;
}
