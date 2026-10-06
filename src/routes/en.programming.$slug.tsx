import { createFileRoute, notFound } from "@tanstack/react-router";
import { CodeSamplePage, ProgrammingArticle, PythonArticle } from "@/components/library-page";
import { isCodeSampleSlug } from "@/lib/code-samples";
import { findProgrammingLocale } from "@/lib/programming-locales";
import { loadStudioBundle } from "@/lib/studio.functions";

export const Route = createFileRoute("/en/programming/$slug")({
  loader: async ({ params }) => {
    if (isCodeSampleSlug(params.slug)) return { sample: params.slug, page: null, privacy: [] };
    const page = findProgrammingLocale("en", params.slug);
    if (!page) throw notFound();
    const studio = await loadStudioBundle();
    return { sample: null, page, privacy: studio.privacy };
  },
  component: LocaleRoute,
});

function LocaleRoute() {
  const { page, privacy, sample } = Route.useLoaderData();
  if (sample) return <CodeSamplePage slug={sample} />;
  if (!page) throw notFound();
  if (page.slug === "python") return <PythonArticle privacy={privacy} />;
  return <ProgrammingArticle slug={page.slug} title={page.title} sections={page.sections} />;
}