import type { Lang } from "@/lib/i18n";
import { SEARCH, searchPath, searchTopicPath, type SearchKind } from "@/lib/search-pages";

function Rich({ text }: { text: string }) {
  const parts = text.split(/`([^`]+)`/g);
  return (
    <>
      {parts.map((part, index) => (index % 2 === 1 ? <code key={index}>{part}</code> : <span key={index}>{part}</span>))}
    </>
  );
}

export function SearchIndex({ kind, lang }: { kind: SearchKind; lang: Lang }) {
  const section = SEARCH[kind];
  const other = kind === "soz" ? "xeta" : "soz";
  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{section.heading[lang]}</h1>
      <p className="why-lead">{section.intro[lang]}</p>
      <nav className="faq-links" aria-label={section.heading[lang]}>
        <a href="/programming">{lang === "ar" ? "البرمجة" : lang === "ru" ? "Программирование" : lang === "tr" ? "Programlama" : lang === "en" ? "Programming" : "Proqramlaşdırma"}</a>
        <a href={searchPath(lang, other)}>{SEARCH[other].heading[lang]}</a>
      </nav>
      <ul className="lib-list">
        {section.items.map((item) => (
          <li key={item.slug}>
            <a href={searchTopicPath(lang, kind, item.slug)}>{item.piece[lang].title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function SearchTopic({
  kind,
  lang,
  slug,
}: {
  kind: SearchKind;
  lang: Lang;
  slug: string;
}) {
  const section = SEARCH[kind];
  const item = section.items.find((entry) => entry.slug === slug);
  if (!item) return null;
  const text = item.piece[lang];
  const others = section.items.filter((entry) => entry.slug !== slug);
  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <a href={searchPath(lang, kind)}>{section.heading[lang]}</a>
      </p>
      <h1>{text.title}</h1>
      <div className="why-lead">
        <p>
          <Rich text={text.lead} />
        </p>
        <ul className="faq-points">
          {text.points.map((point) => (
            <li key={point}>
              <Rich text={point} />
            </li>
          ))}
        </ul>
        {text.note ? (
          <p className="faq-note">
            <Rich text={text.note} />
          </p>
        ) : null}
      </div>
      <ul className="lib-list">
        {others.map((entry) => (
          <li key={entry.slug}>
            <a href={searchTopicPath(lang, kind, entry.slug)}>{entry.piece[lang].title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
