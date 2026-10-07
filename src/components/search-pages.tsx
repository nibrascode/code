import type { Lang } from "@/lib/i18n";
import { SEARCH, searchPath, searchTopicPath, type SearchKind } from "@/lib/search-pages";
import { TOOLS, TOOLS_PAGE, pageTools, toolPath } from "@/lib/tools";

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
        {text.lead.split(/\n\n+/).map((para) => (
          <p key={para}>
            <Rich text={para} />
          </p>
        ))}
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
      {pageTools(slug).length ? (
        <div className="prog-fold-body">
          <h2>{TOOLS_PAGE.toolsFor[lang]}</h2>
          <ul className="lib-list">
            {pageTools(slug).map((id) => (
              <li key={id}>
                <a href={toolPath(lang, id)}>{TOOLS.find((tool) => tool.id === id)!.label[lang]}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
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
