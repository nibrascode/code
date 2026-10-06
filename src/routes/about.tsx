import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { aboutFromRow } from "@/lib/pages";
import { readLang } from "@/lib/seo";
import type { StudioPrivacyRow } from "@/lib/studio";
import { loadStudioBundle } from "@/lib/studio.functions";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/about")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/about"), replace: true });
  },
  loader: () => loadStudioBundle(),
  component: AboutPage,
});

export function AboutView({ privacy }: { privacy: readonly StudioPrivacyRow[] }) {
  const { lang } = useI18n();
  const row = privacy.find((item) => item.slug === "about" && item.lang === lang);
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

function AboutPage() {
  return <AboutView privacy={Route.useLoaderData().privacy} />;
}
