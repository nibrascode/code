import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";
import { csharpSections } from "@/lib/csharp-sections";
import { javaSections } from "@/lib/java-sections";
import { javascriptSections } from "@/lib/javascript-sections";
import { htmlCssSections } from "@/lib/html-css-sections";
import { sqlSections } from "@/lib/sql-sections";
import { typescriptSections } from "@/lib/typescript-sections";
import { PYTHON_AR } from "@/lib/python-ar";
import { PYTHON_EN } from "@/lib/python-en";
import { PYTHON_RU } from "@/lib/python-ru";
import { PYTHON_TR } from "@/lib/python-tr";

export type ProgrammingLocale = {
  lang: Exclude<Lang, "az">;
  slug: string;
  title: string;
  sections: readonly ProgrammingSection[];
};

const LOCALES: readonly ProgrammingLocale[] = [
  { lang: "en", slug: "python", title: "What is Python? Uses and advantages", sections: PYTHON_EN },
  { lang: "tr", slug: "python", title: "Python nedir? Kullanım alanları ve avantajları", sections: PYTHON_TR },
  { lang: "ar", slug: "python", title: "ما هي بايثون؟ استخداماتها ومزاياها", sections: PYTHON_AR },
  { lang: "ru", slug: "python", title: "Что такое Python? Области применения и преимущества", sections: PYTHON_RU },
  { lang: "en", slug: "javascript", title: "What is JavaScript and what is it used for?", sections: javascriptSections("en") },
  { lang: "tr", slug: "javascript", title: "JavaScript nedir? Ne için kullanılır?", sections: javascriptSections("tr") },
  { lang: "ar", slug: "javascript", title: "ما هي جافاسكريبت ولماذا تُستخدم؟", sections: javascriptSections("ar") },
  { lang: "ru", slug: "javascript", title: "Что такое JavaScript и зачем он нужен?", sections: javascriptSections("ru") },
  { lang: "en", slug: "java", title: "What is Java? Its use in Android and programming", sections: javaSections("en") },
  { lang: "tr", slug: "java", title: "Java nedir? Android ve programlamada kullanımı", sections: javaSections("tr") },
  { lang: "ar", slug: "java", title: "ما هي Java؟ استخدامها في أندرويد والبرمجة", sections: javaSections("ar") },
  { lang: "ru", slug: "java", title: "Что такое Java? Применение в Android и программировании", sections: javaSections("ru") },
  { lang: "en", slug: "csharp", title: "What is C#? Uses and characteristics", sections: csharpSections("en") },
  { lang: "tr", slug: "csharp", title: "C# nedir? Kullanım alanları ve özellikleri", sections: csharpSections("tr") },
  { lang: "ar", slug: "csharp", title: "ما هي C#؟ استخداماتها وخصائصها", sections: csharpSections("ar") },
  { lang: "ru", slug: "csharp", title: "Что такое C#? Области применения и особенности", sections: csharpSections("ru") },
  { lang: "en", slug: "typescript", title: "What is TypeScript? How it differs from JavaScript", sections: typescriptSections("en") },
  { lang: "tr", slug: "typescript", title: "TypeScript nedir? JavaScript'ten farkı", sections: typescriptSections("tr") },
  { lang: "ar", slug: "typescript", title: "ما هو TypeScript؟ اختلافه عن JavaScript", sections: typescriptSections("ar") },
  { lang: "ru", slug: "typescript", title: "Что такое TypeScript? Отличие от JavaScript", sections: typescriptSections("ru") },
  { lang: "en", slug: "html-css", title: "What are HTML and CSS?", sections: htmlCssSections("en") },
  { lang: "tr", slug: "html-css", title: "HTML ve CSS nedir?", sections: htmlCssSections("tr") },
  { lang: "ar", slug: "html-css", title: "ما هما HTML وCSS؟", sections: htmlCssSections("ar") },
  { lang: "ru", slug: "html-css", title: "Что такое HTML и CSS?", sections: htmlCssSections("ru") },
  { lang: "en", slug: "sql", title: "What is SQL?", sections: sqlSections("en") },
  { lang: "tr", slug: "sql", title: "SQL nedir?", sections: sqlSections("tr") },
  { lang: "ar", slug: "sql", title: "ما هو SQL؟", sections: sqlSections("ar") },
  { lang: "ru", slug: "sql", title: "Что такое SQL?", sections: sqlSections("ru") },
];

export function programmingLocalePath(lang: Lang, slug: string) {
  if (lang === "az") return `/programming/${slug}`;
  return `/${lang}/programming/${slug}`;
}

export function programmingFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const prefixed = path.match(/^\/(en|tr|ar|ru)\/programming\/([^/]+)$/);
  if (prefixed) return { lang: prefixed[1] as Exclude<Lang, "az">, slug: prefixed[2] };
  const az = path.match(/^\/programming\/([^/]+)$/);
  if (az) return { lang: "az" as const, slug: az[1] };
  return null;
}

export function findProgrammingLocale(lang: Lang, slug: string) {
  if (lang === "az") return null;
  return LOCALES.find((page) => page.lang === lang && page.slug === slug) ?? null;
}

export function programmingLocalesFor(slug: string) {
  return LOCALES.filter((page) => page.slug === slug);
}
