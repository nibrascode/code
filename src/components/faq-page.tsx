import type { FaqCopy } from "@/lib/faq";

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
          <h2>{item.q}</h2>
          <p>{item.a}</p>
        </section>
      ))}
    </main>
  );
}
