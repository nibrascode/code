import { BookOpen, GitCompare, Info, ListChecks } from "lucide-react";
import { InfoCard, InfoCards } from "@/components/info-card";
import type { Lang } from "@/lib/i18n";
import {
  COMPARE,
  COMPARE_ITEMS,
  comparePath,
  compareTopicPath,
} from "@/lib/learn-pages";
import { SEARCH, searchPath } from "@/lib/search-pages";
import { localeHref } from "@/lib/locale-path";

const PROG: Record<Lang, string> = {
  az: "Proqramlaşdırma",
  en: "Programming",
  tr: "Programlama",
  ar: "البرمجة",
  ru: "Программирование",
};

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
        <a href={searchPath(lang, "soz")}>{SEARCH.soz.heading[lang]}</a>
        <a href={searchPath(lang, "xeta")}>{SEARCH.xeta.heading[lang]}</a>
        <a href={localeHref(lang, "/programming")}>{PROG[lang]}</a>
      </nav>
      <InfoCards>
        {COMPARE_ITEMS.map((item) => (
          <InfoCard key={item.slug} icon={GitCompare} title={item.title[lang]} href={compareTopicPath(lang, item.slug)} />
        ))}
      </InfoCards>
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
      <InfoCards>
        <InfoCard icon={BookOpen}>
          {item.lead[lang].split(/\n\n+/).map((para) => (
            <p key={para}>{para}</p>
          ))}
        </InfoCard>
        <InfoCard icon={ListChecks}>
          <ul>
            {item.points[lang].map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </InfoCard>
        <InfoCard icon={Info}>
          <p>{item.note[lang]}</p>
        </InfoCard>
      </InfoCards>
      <InfoCards>
        {others.map((entry) => (
          <InfoCard key={entry.slug} icon={GitCompare} title={entry.title[lang]} href={compareTopicPath(lang, entry.slug)} />
        ))}
      </InfoCards>
    </main>
  );
}
