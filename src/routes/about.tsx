import { createFileRoute } from "@tanstack/react-router";
import { aboutFromRow } from "@/lib/pages";
import { loadStudioBundle } from "@/lib/studio.functions";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/about")({
  loader: () => loadStudioBundle(),
  component: AboutPage,
});

function AboutPage() {
  const { lang } = useI18n();
  const row = Route.useLoaderData().privacy.find((item) => item.slug === "about" && item.lang === lang);
  const copy = aboutFromRow(row, lang);

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        {copy.eyebrow}
      </p>
      <h1>{copy.title}</h1>
      {copy.intro.map((paragraph) => (
        <p key={paragraph} className={paragraph === copy.intro[0] ? "why-lead" : undefined}>
          {paragraph}
        </p>
      ))}

      <section>
        <h2>{copy.approachTitle}</h2>
        {copy.approach.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <p className="who-success">{copy.success}</p>
      <p className="who-verse" lang="ar" dir="rtl">
        {copy.verse}
      </p>
      <p className="who-verse-tr">{copy.verseTr}</p>
    </main>
  );
}
