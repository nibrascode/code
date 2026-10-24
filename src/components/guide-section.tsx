import type { Lang } from "@/lib/i18n";
import { GUIDE_HEAD, type Guide } from "@/lib/guides";

export function GuideSection({ guide, lang, game = false }: { guide: Guide | null | undefined; lang: Lang; game?: boolean }) {
  if (!guide) return null;
  const head = GUIDE_HEAD[lang];
  return (
    <section className="page-guide" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <h2>{head.about}</h2>
      {guide.about.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {guide.steps?.length ? (
        <>
          <h2>{game ? head.stepsGame : head.steps}</h2>
          <ol>
            {guide.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </>
      ) : null}
      <h2>{game ? head.usesGame : head.uses}</h2>
      <ul>
        {guide.uses.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <h2>{head.faq}</h2>
      {guide.faq.map(([q, a]) => (
        <details key={q} open>
          <summary>
            <h3>{q}</h3>
          </summary>
          <p>{a}</p>
        </details>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
          }).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}
