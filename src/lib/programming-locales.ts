import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";
import { JAVA_AR, JAVA_EN, JAVA_RU, JAVA_TR } from "@/lib/programming";

export type ProgrammingLocale = {
  lang: Exclude<Lang, "az">;
  slug: string;
  title: string;
  sections: readonly ProgrammingSection[];
};

const LOCALES: readonly ProgrammingLocale[] = [
  { lang: "en", slug: "python", title: "What is Python? Uses and advantages", sections: JAVA_EN },
  { lang: "tr", slug: "python", title: "Python nedir? Kullanım alanları ve avantajları", sections: JAVA_TR },
  { lang: "ar", slug: "python", title: "ما هي بايثون؟ استخداماتها ومزاياها", sections: JAVA_AR },
  { lang: "ru", slug: "python", title: "Что такое Python? Области применения и преимущества", sections: JAVA_RU },
  { lang: "en", slug: "javascript", title: "What is JavaScript and what is it used for?", sections: javascriptSections("en") },
  { lang: "tr", slug: "javascript", title: "JavaScript nedir? Ne için kullanılır?", sections: javascriptSections("tr") },
  { lang: "ar", slug: "javascript", title: "ما هي جافاسكريبت ولماذا تُستخدم؟", sections: javascriptSections("ar") },
  { lang: "ru", slug: "javascript", title: "Что такое JavaScript и зачем он нужен?", sections: javascriptSections("ru") },
  { lang: "en", slug: "java", title: "What is Java and how is it used?", sections: JAVA_EN },
  { lang: "tr", slug: "java", title: "Java nedir? Ne için kullanılır?", sections: JAVA_TR },
  { lang: "ar", slug: "java", title: "ما هي Java؟ ولماذا تُستخدم؟", sections: JAVA_AR },
  { lang: "ru", slug: "java", title: "Что такое Java и для чего она используется?", sections: JAVA_RU },
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
