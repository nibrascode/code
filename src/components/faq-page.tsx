import type { FaqCopy } from "@/lib/faq";

export function FaqView({ page }: { page: FaqCopy }) {
  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{page.heading}</h1>
      <p className="why-lead">{page.intro}</p>
      {page.items.map((item) => (
        <section key={item.q}>
          <h2>{item.q}</h2>
          <p>{item.a}</p>
        </section>
      ))}
    </main>
  );
}
