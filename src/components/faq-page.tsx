import type { FaqCopy, FaqItem } from "@/lib/faq";
import { faqSlug, faqTopicHref, faqTopicPath } from "@/lib/faq";

const RELATED: Record<FaqCopy["lang"], string> = {
  az: "Rəsmi səhifə",
  en: "Official page",
  tr: "Resmi sayfa",
  ar: "الصفحة الرسمية",
  ru: "Официальная страница",
};

function FaqBody({ item }: { item: FaqItem }) {
  return (
    <>
      <p>{item.a}</p>
      {item.points?.length ? (
        <ul className="faq-points">
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
      {item.notes?.map((note) => (
        <p key={note} className="faq-note">
          {note}
        </p>
      ))}
    </>
  );
}

export function FaqView({ page }: { page: FaqCopy }) {
  return (
    <main className="why-page" lang={page.lang} dir={page.lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{page.heading}</h1>
      <p className="why-lead">{page.intro}</p>
      <nav className="faq-links" aria-label={page.heading}>
        {page.links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="prog-sections">
        {page.items.map((item) => (
          <details key={item.id} id={item.id} className="prog-fold">
            <summary>
              <h2>{item.q}</h2>
            </summary>
            <div className="prog-fold-body">
              <FaqBody item={item} />
            </div>
          </details>
        ))}
      </div>
    </main>
  );
}

export function FaqTopic({ page, item }: { page: FaqCopy; item: FaqItem }) {
  const related = faqTopicHref(item.id);
  const others = page.items.filter((entry) => entry.id !== item.id);
  return (
    <main className="why-page" lang={page.lang} dir={page.lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <a href={page.path}>{page.heading}</a>
      </p>
      <h1>{item.q}</h1>
      <div className="why-lead">
        <FaqBody item={item} />
      </div>
      <nav className="faq-links" aria-label={page.heading}>
        {related ? (
          <a href={related} {...(related.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {RELATED[page.lang]}
          </a>
        ) : null}
        {page.links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <ul className="lib-list">
        {others.map((entry) => (
          <li key={entry.id}>
            <a href={faqTopicPath(page.lang, faqSlug(entry.id))}>{entry.q}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
