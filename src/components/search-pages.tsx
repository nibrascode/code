import type { Lang } from "@/lib/i18n";
import { SEARCH, searchPath, searchTopicPath, type SearchKind } from "@/lib/search-pages";
import { localeHref } from "@/lib/locale-path";
import type { ApkError } from "@/lib/apk-errors-types";
import { APK_LABELS } from "@/lib/apk-errors-types";
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
        <a href={localeHref(lang, "/programming")}>{lang === "ar" ? "البرمجة" : lang === "ru" ? "Программирование" : lang === "tr" ? "Programlama" : lang === "en" ? "Programming" : "Proqramlaşdırma"}</a>
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
  body,
}: {
  kind: SearchKind;
  lang: Lang;
  slug: string;
  body?: ApkError | null;
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
      {body ? (
        <ApkBody body={body} lang={lang} />
      ) : (
      <div className="why-lead topic-body">
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
          {item.code ? <pre dir="ltr">{item.code}</pre> : null}
        </div>
      )}
      {item.links?.length ? (
        <nav className="faq-links" aria-label={text.title}>
          {item.links.map((link) => (
            <a key={link.path} href={localeHref(lang, link.path)}>
              {link.label[lang]}
            </a>
          ))}
        </nav>
      ) : null}
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

function ApkBody({ body, lang }: { body: ApkError; lang: Lang }) {
  const t = body.l[lang];
  const lab = APK_LABELS[lang];
  return (
    <div className="why-lead apk-err">
      <h2>{lab.symptom}</h2>
      <pre dir="ltr">{body.err}</pre>
      <h2>{lab.cause}</h2>
      <p>
        <Rich text={t.cause} />
      </p>
      <h2>{lab.steps}</h2>
      <ol className="faq-points">
        {t.steps.map((step) => (
          <li key={step}>
            <Rich text={step} />
          </li>
        ))}
      </ol>
      <h2>{lab.commands}</h2>
      <pre dir="ltr">{body.cmd}</pre>
      <h2>{lab.prevent}</h2>
      <p>
        <Rich text={t.prevent} />
      </p>
      <p className="faq-note">{lab.author}</p>
    </div>
  );
}
