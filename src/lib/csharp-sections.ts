import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

const TITLES: Record<string, Record<Lang, string>> = {
  "what-is-csharp": {
    az: "C# nədir?",
    en: "What Is C#?",
    tr: "C# Nedir?",
    ar: "ما هي لغة C#؟",
    ru: "Что такое C#?",
  },
  "what-is-csharp-used-for": {
    az: "C# nə üçün istifadə olunur?",
    en: "What Is C# Used For?",
    tr: "C# Ne İçin Kullanılır?",
    ar: "فيمَ تُستخدم C#؟",
    ru: "Для чего используется C#?",
  },
  "what-can-you-do-with-csharp": {
    az: "C# ilə nələr etmək olar?",
    en: "What Can You Do with C#?",
    tr: "C# ile Neler Yapılabilir?",
    ar: "ماذا يمكن أن تفعل باستخدام C#؟",
    ru: "Что можно делать с C#?",
  },
  "is-csharp-hard-to-learn": {
    az: "C# öyrənmək çətindirmi?",
    en: "Is C# Difficult to Learn?",
    tr: "C# Öğrenmek Zor mu?",
    ar: "هل تعلم C# صعب؟",
    ru: "Сложно ли изучать C#?",
  },
  "advantages-and-disadvantages": {
    az: "C#-ın üstünlükləri və çatışmazlıqları",
    en: "Advantages and Disadvantages of C#",
    tr: "C#'ın Avantajları ve Dezavantajları",
    ar: "مميزات وعيوب C#",
    ru: "Преимущества и недостатки C#",
  },
  "syntax-and-basic-concepts": {
    az: "C# sintaksisi və əsas anlayışlar",
    en: "C# Syntax and Basic Concepts",
    tr: "C# Sözdizimi ve Temel Kavramlar",
    ar: "بناء جمل C# والمفاهيم الأساسية",
    ru: "Синтаксис C# и основные понятия",
  },
  "code-examples": {
    az: "C# kod nümunələri",
    en: "C# Code Examples",
    tr: "C# Kod Örnekleri",
    ar: "أمثلة على أكواد C#",
    ru: "Примеры кода на C#",
  },
  faq: {
    az: "C# haqqında tez-tez verilən suallar",
    en: "Frequently Asked Questions About C#",
    tr: "C# Hakkında Sık Sorulan Sorular",
    ar: "الأسئلة الشائعة حول C#",
    ru: "Часто задаваемые вопросы о C#",
  },
};

const ORDER = [
  "what-is-csharp",
  "what-is-csharp-used-for",
  "what-can-you-do-with-csharp",
  "is-csharp-hard-to-learn",
  "advantages-and-disadvantages",
  "syntax-and-basic-concepts",
  "code-examples",
  "faq",
] as const;

export function csharpSections(lang: Lang): readonly ProgrammingSection[] {
  return ORDER.map((id) => ({
    id,
    title: TITLES[id][lang],
  }));
}
