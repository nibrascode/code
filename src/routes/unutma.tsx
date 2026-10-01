import { createFileRoute } from "@tanstack/react-router";
import { unutmaFromRow } from "@/lib/pages";
import { loadStudioBundle } from "@/lib/studio.functions";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/unutma")({
  loader: () => loadStudioBundle(),
  component: UnutmaPage,
});

function UnutmaPage() {
  const { lang } = useI18n();
  const row = Route.useLoaderData().privacy.find((item) => item.slug === "unutma" && item.lang === lang);
  const copy = unutmaFromRow(row, lang);

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        {copy.eyebrow}
      </p>
      <h1>{copy.title}</h1>
      <p className="who-verse" lang="ar" dir="rtl">
        {copy.verse}
      </p>
      <ol className="remind-list">
        {copy.notes.map((note, index) => (
          <li key={note}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{note}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
