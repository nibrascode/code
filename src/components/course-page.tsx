import { ArrowUpRight } from "lucide-react";
import { ProgrammingArticle } from "@/components/library-page";
import { findCourse, HUBS, pagesOf, type CourseKind } from "@/lib/course/meta";
import { useI18n } from "@/lib/i18n-context";
import type { ProgrammingSection } from "@/lib/programming";
import { programmingLocalePath } from "@/lib/programming-locales";

const UI = {
  author: { az: "Müəllif: Nibras Code", en: "Author: Nibras Code", tr: "Yazar: Nibras Code", ar: "المؤلف: Nibras Code", ru: "Автор: Nibras Code" },
  hubBack: { az: "Bütün dərslər", en: "All lessons", tr: "Tüm dersler", ar: "كل الدروس", ru: "Все уроки" },
  qa: { az: "Sual-cavab", en: "Questions and answers", tr: "Soru-cevap", ar: "أسئلة وأجوبة", ru: "Вопросы и ответы" },
  book: { az: "Dərs fəsilləri", en: "Lesson chapters", tr: "Ders bölümleri", ar: "فصول الدروس", ru: "Главы уроков" },
  prev: { az: "Əvvəlki", en: "Previous", tr: "Önceki", ar: "السابق", ru: "Назад" },
  next: { az: "Növbəti", en: "Next", tr: "Sonraki", ar: "التالي", ru: "Далее" },
} satisfies Record<string, Record<"az" | "en" | "tr" | "ar" | "ru", string>>;

function Item({ href, label, desc }: { href: string; label: string; desc?: string }) {
  return (
    <li>
      <a href={href}>
        {label}
        <ArrowUpRight className="rtl-flip size-4" />
      </a>
      {desc ? <small className="lib-desc">{desc}</small> : null}
    </li>
  );
}

export function CourseHub({ kind }: { kind: CourseKind }) {
  const { lang } = useI18n();
  const hub = HUBS[kind];
  const pages = pagesOf(kind);
  const own = pages.filter((p) => p.source === "own");
  const book = pages.filter((p) => p.source !== "own");
  const group = (title: string, list: typeof pages) => (
    <section className="prog-fold-body">
      <h2>{title}</h2>
      <ul className="lib-list">
        {list.map((p) => (
          <Item key={p.slug} href={programmingLocalePath(lang, p.slug)} label={p.title[lang]} desc={p.description[lang]} />
        ))}
      </ul>
    </section>
  );
  return (
    <ProgrammingArticle
      title={hub.title[lang]}
      sections={[]}
      intro={<p>{hub.intro[lang]}</p>}
      footer={
        <>
          {group(UI.qa[lang], own)}
          {group(UI.book[lang], book)}
        </>
      }
    />
  );
}

export function CourseLesson({ slug, sections }: { slug: string; sections: readonly ProgrammingSection[] }) {
  const { lang } = useI18n();
  const page = findCourse(slug)!;
  const hub = HUBS[page.kind];
  const list = pagesOf(page.kind).filter((p) => p.source === page.source);
  const index = list.findIndex((p) => p.slug === slug);
  const prev = list[index - 1];
  const next = list[index + 1];
  return (
    <ProgrammingArticle
      title={page.title[lang]}
      sections={sections}
      openAll
      intro={
        <>
          <p>{page.description[lang]}</p>
          <p className="prog-try">
            <a href={programmingLocalePath(lang, hub.slug)}>{UI.hubBack[lang]} · {hub.title[lang]}</a>
          </p>
        </>
      }
      footer={
        <>
          <p className="prog-license prog-author">{UI.author[lang]}</p>
          <ul className="lib-list course-nav">
            {prev ? <Item href={programmingLocalePath(lang, prev.slug)} label={`← ${UI.prev[lang]}: ${prev.title[lang]}`} /> : null}
            {next ? <Item href={programmingLocalePath(lang, next.slug)} label={`${UI.next[lang]}: ${next.title[lang]}`} /> : null}
          </ul>
        </>
      }
    />
  );
}
