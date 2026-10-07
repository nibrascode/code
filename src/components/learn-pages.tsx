import type { Lang } from "@/lib/i18n";
import {
  COMPARE,
  COMPARE_ITEMS,
  QIBLA,
  QIBLA_CITIES,
  comparePath,
  compareTopicPath,
  qiblaPath,
  qiblaSide,
} from "@/lib/learn-pages";

const PROG: Record<Lang, string> = {
  az: "Proqramlaşdırma",
  en: "Programming",
  tr: "Programlama",
  ar: "البرمجة",
  ru: "Программирование",
};

export function QiblaPage({ lang }: { lang: Lang }) {
  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{QIBLA.heading[lang]}</h1>
      <div className="why-lead">
        <p>{QIBLA.intro[lang]}</p>
        <ul className="faq-points">
          {QIBLA.points[lang].map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="faq-note">{QIBLA.note[lang]}</p>
      </div>
      <ul className="lib-list">
        {QIBLA_CITIES.map((city) => (
          <li key={city.deg + city.name.en}>
            <span>
              {city.name[lang]} — {city.deg}° {qiblaSide(lang, city.dir)}
            </span>
          </li>
        ))}
      </ul>
      <nav className="faq-links" aria-label={QIBLA.heading[lang]}>
        <a href={comparePath(lang)}>{COMPARE.heading[lang]}</a>
        <a href="/programming">{PROG[lang]}</a>
      </nav>
    </main>
  );
}

export function CompareIndex({ lang }: { lang: Lang }) {
  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{COMPARE.heading[lang]}</h1>
      <p className="why-lead">{COMPARE.intro[lang]}</p>
      <nav className="faq-links" aria-label={COMPARE.heading[lang]}>
        <a href={qiblaPath(lang)}>{QIBLA.heading[lang]}</a>
        <a href="/programming">{PROG[lang]}</a>
      </nav>
      <ul className="lib-list">
        {COMPARE_ITEMS.map((item) => (
          <li key={item.slug}>
            <a href={compareTopicPath(lang, item.slug)}>{item.title[lang]}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function CompareTopic({ lang, slug }: { lang: Lang; slug: string }) {
  const item = COMPARE_ITEMS.find((entry) => entry.slug === slug);
  if (!item) return null;
  const others = COMPARE_ITEMS.filter((entry) => entry.slug !== slug);
  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <a href={comparePath(lang)}>{COMPARE.heading[lang]}</a>
      </p>
      <h1>{item.title[lang]}</h1>
      <div className="why-lead">
        <p>{item.lead[lang]}</p>
        <ul className="faq-points">
          {item.points[lang].map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="faq-note">{item.note[lang]}</p>
      </div>
      <ul className="lib-list">
        {others.map((entry) => (
          <li key={entry.slug}>
            <a href={compareTopicPath(lang, entry.slug)}>{entry.title[lang]}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
