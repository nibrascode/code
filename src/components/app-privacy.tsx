import { ARABIC_PRIVACY } from "@/lib/arabic-privacy";
import { PDF_PRIVACY } from "@/lib/pdf-privacy";
import type { StudioPrivacyRow } from "@/lib/studio";
import { useI18n } from "@/lib/i18n-context";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(nibrascode@gmail\.com|nibrascode\.com)/gi);
  return (
    <>
      {parts.map((part, index) => {
        const lower = part.toLowerCase();
        if (lower === "nibrascode@gmail.com") {
          return (
            <a key={index} href="mailto:nibrascode@gmail.com">
              {part}
            </a>
          );
        }
        if (lower === "nibrascode.com") {
          return (
            <a key={index} href="https://nibrascode.com">
              {part}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

const NAMES: Record<string, string> = {
  "nibras-arabic": "Nibras Arabic",
  "nibras-pdf": "Nibras PDF",
  "nibras-docs": "Nibras Docs",
  "nibras-plans": "Nibras Plans",
};

export function AppPrivacyView({ slug, rows }: { slug: string; rows: StudioPrivacyRow[] }) {
  const { lang } = useI18n();
  const live = rows.find((row) => row.slug === slug && row.lang === lang);
  const fallback =
    slug === "nibras-pdf" ? PDF_PRIVACY[lang] : slug === "nibras-arabic" ? ARABIC_PRIVACY : null;
  const copy = live
    ? {
        title: live.title,
        updated: live.updated_label,
        paragraphs: live.body
          .split(/\n\s*\n/)
          .map((part) => part.trim())
          .filter(Boolean),
      }
    : fallback;

  return (
    <main className="why-page privacy-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="eyebrow">
        <i />
        {NAMES[slug] ?? slug}
      </div>
      <h1>{copy?.title || "Məxfilik siyasəti"}</h1>
      {copy?.updated ? <p className="privacy-updated">{copy.updated}</p> : null}
      {copy?.paragraphs.map((paragraph) =>
        /^\d+\.\s/.test(paragraph) ? (
          <h2 key={paragraph}>{paragraph}</h2>
        ) : (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ),
      )}
    </main>
  );
}
