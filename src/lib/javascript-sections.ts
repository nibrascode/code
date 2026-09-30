import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

const TITLES: Record<string, Record<Lang, string>> = {
  nedir: {
    az: "JavaScript nədir?",
    en: "What is JavaScript?",
    tr: "JavaScript nedir?",
    ar: "ما هي JavaScript؟",
    ru: "Что такое JavaScript?",
  },
  istifade: {
    az: "JavaScript nə üçün istifadə olunur?",
    en: "What is JavaScript used for?",
    tr: "JavaScript ne için kullanılır?",
    ar: "فيمَ تُستخدم JavaScript؟",
    ru: "Для чего используется JavaScript?",
  },
  "ne-etmek": {
    az: "JavaScript ilə nələr etmək olar?",
    en: "What can you do with JavaScript?",
    tr: "JavaScript ile neler yapılabilir?",
    ar: "ماذا يمكن أن تفعل باستخدام JavaScript؟",
    ru: "Что можно делать с помощью JavaScript?",
  },
  oyrenmek: {
    az: "JavaScript öyrənmək çətindirmi?",
    en: "Is JavaScript difficult to learn?",
    tr: "JavaScript öğrenmek zor mu?",
    ar: "هل تعلم JavaScript صعب؟",
    ru: "Сложно ли изучать JavaScript?",
  },
  ustunluk: {
    az: "JavaScript-in üstünlükləri və çatışmazlıqları",
    en: "Advantages and disadvantages of JavaScript",
    tr: "JavaScript'in avantajları ve dezavantajları",
    ar: "مميزات وعيوب JavaScript",
    ru: "Преимущества и недостатки JavaScript",
  },
  sintaksis: {
    az: "JavaScript sintaksisi və əsas anlayışlar",
    en: "JavaScript syntax and basic concepts",
    tr: "JavaScript sözdizimi ve temel kavramlar",
    ar: "بناء جمل JavaScript والمفاهيم الأساسية",
    ru: "Синтаксис JavaScript и основные понятия",
  },
  numuneler: {
    az: "JavaScript kod nümunələri",
    en: "JavaScript code examples",
    tr: "JavaScript kod örnekleri",
    ar: "أمثلة على أكواد JavaScript",
    ru: "Примеры кода JavaScript",
  },
  suallar: {
    az: "JavaScript haqqında tez-tez verilən suallar",
    en: "Frequently asked questions about JavaScript",
    tr: "JavaScript hakkında sık sorulan sorular",
    ar: "الأسئلة الشائعة حول JavaScript",
    ru: "Часто задаваемые вопросы о JavaScript",
  },
};

const ORDER = ["nedir", "istifade", "ne-etmek", "oyrenmek", "ustunluk", "sintaksis", "numuneler", "suallar"] as const;

export function javascriptSections(lang: Lang): readonly ProgrammingSection[] {
  return ORDER.map((id) => ({ id, title: TITLES[id][lang] }));
}
