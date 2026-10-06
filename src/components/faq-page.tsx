import type { FaqCopy, FaqItem } from "@/lib/faq";
import { faqSlug, faqTopicHref, faqTopicPath } from "@/lib/faq";

const RELATED: Record<FaqCopy["lang"], string> = {
  az: "Rəsmi səhifə",
  en: "Official page",
  tr: "Resmi sayfa",
  ar: "الصفحة الرسمية",
  ru: "Официальная страница",
};

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
      {page.items.map((item) => (
        <section key={item.id} id={item.id}>
          <h2>
            <a href={faqTopicPath(page.lang, item.id)}>{item.q}</a>
          </h2>
          <p>{item.a}</p>
        </section>
      ))}
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
      <p className="why-lead">{item.a}</p>
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
