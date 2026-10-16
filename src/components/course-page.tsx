import { ArrowUpRight } from "lucide-react";
import { ProgrammingArticle } from "@/components/library-page";
import { findCourse, HUBS, pagesOf, SOURCES, type CourseKind } from "@/lib/course/meta";
import { useI18n } from "@/lib/i18n-context";
import type { ProgrammingSection } from "@/lib/programming";
import { programmingLocalePath } from "@/lib/programming-locales";

const UI = {
  own: { az: "Orijinal Nibras Code mətnidir.", en: "Original text written for Nibras Code.", tr: "Nibras Code için yazılmış özgün metindir.", ar: "نص أصلي كُتب لـ Nibras Code.", ru: "Оригинальный текст, написанный для Nibras Code." },
  licenseTitle: { az: "Mənbə və lisenziya", en: "Source and license", tr: "Kaynak ve lisans", ar: "المصدر والترخيص", ru: "Источник и лицензия" },
  source: { az: "Mənbə", en: "Source", tr: "Kaynak", ar: "المصدر", ru: "Источник" },
  author: { az: "Müəllif", en: "Author", tr: "Yazar", ar: "المؤلف", ru: "Автор" },
  license: { az: "Lisenziya", en: "License", tr: "Lisans", ar: "الترخيص", ru: "Лицензия" },
  changes: {
    az: "Dəyişikliklər: fəsil başlıqlara bölünüb, şəkillər və interaktiv hissələr çıxarılıb, başlıq və qısa təsvir tərcümə olunub. Mətnin özü orijinal ingilis dilindədir. Yeni mətn eyni lisenziya (CC BY-SA) ilə paylaşılır.",
    en: "Changes: the chapter was split into headed sections, images and interactive parts were left out. The text itself is the English original. Our version is shared under the same license (CC BY-SA).",
    tr: "Değişiklikler: bölüm başlıklara ayrıldı, görseller ve etkileşimli kısımlar çıkarıldı, başlık ve kısa özet çevrildi. Metnin kendisi özgün İngilizcedir. Bu sürüm aynı lisansla (CC BY-SA) paylaşılır.",
    ar: "التغييرات: قُسِّم الفصل إلى أقسام بعناوين وحُذفت الصور والأجزاء التفاعلية وتُرجم العنوان والملخص القصير. النص نفسه بالإنجليزية الأصلية. تُشارك هذه النسخة بالترخيص نفسه (CC BY-SA).",
    ru: "Изменения: глава разбита на разделы с заголовками, изображения и интерактивные части опущены, название и краткое описание переведены. Сам текст — английский оригинал. Эта версия распространяется на тех же условиях (CC BY-SA).",
  },
  hubBack: { az: "Bütün dərslər", en: "All lessons", tr: "Tüm dersler", ar: "كل الدروس", ru: "Все уроки" },
  qa: { az: "Sual-cavab (5 dildə)", en: "Questions and answers (5 languages)", tr: "Soru-cevap (5 dilde)", ar: "أسئلة وأجوبة (بخمس لغات)", ru: "Вопросы и ответы (на 5 языках)" },
  book: { az: "Açıq lisenziyalı kitabdan fəsillər (mətn ingiliscə)", en: "Chapters from the openly licensed text (English body)", tr: "Açık lisanslı kaynaktan bölümler (metin İngilizce)", ar: "فصول من مصدر مفتوح الترخيص (النص بالإنجليزية)", ru: "Главы из источника с открытой лицензией (текст на английском)" },
  prev: { az: "Əvvəlki", en: "Previous", tr: "Önceki", ar: "السابق", ru: "Назад" },
  next: { az: "Növbəti", en: "Next", tr: "Sonraki", ar: "التالي", ru: "Далее" },
  bodyEn: { az: "Bu səhifənin mətni ingiliscədir; başlıq və təsvir sənin dilindədir.", en: "", tr: "Bu sayfanın metni İngilizcedir; başlık ve özet senin dilindedir.", ar: "نص هذه الصفحة بالإنجليزية؛ العنوان والملخص بلغتك.", ru: "Текст этой страницы на английском; название и описание — на вашем языке." },
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
  const src = book[0] && book[0].source !== "own" ? SOURCES[book[0].source] : null;
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
          {src ? (
            <p className="prog-license">
              {UI.licenseTitle[lang]}: <a href={src.url} rel="noopener noreferrer" target="_blank">{src.name}</a> — {src.author}, <a href={src.licenseUrl} rel="noopener noreferrer" target="_blank">{src.license}</a>
            </p>
          ) : null}
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
  const src = page.source === "own" ? null : SOURCES[page.source];
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
            {src && lang !== "en" ? <span>{UI.bodyEn[lang]}</span> : null}
          </p>
        </>
      }
      footer={
        <>
          <aside className="prog-license" aria-label={UI.licenseTitle[lang]}>
            <h2>{UI.licenseTitle[lang]}</h2>
            {src ? (
              <ul>
                <li>{UI.source[lang]}: <a href={src.url} rel="noopener noreferrer" target="_blank">{src.name}</a></li>
                <li>{UI.author[lang]}: {src.author}</li>
                <li>{UI.license[lang]}: <a href={src.licenseUrl} rel="noopener noreferrer" target="_blank">{src.license}</a></li>
                <li>{UI.changes[lang]}</li>
              </ul>
            ) : (
              <p>{UI.own[lang]}</p>
            )}
          </aside>
          <ul className="lib-list course-nav">
            {prev ? <Item href={programmingLocalePath(lang, prev.slug)} label={`← ${UI.prev[lang]}: ${prev.title[lang]}`} /> : null}
            {next ? <Item href={programmingLocalePath(lang, next.slug)} label={`${UI.next[lang]}: ${next.title[lang]}`} /> : null}
          </ul>
        </>
      }
    />
  );
}
