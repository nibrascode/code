import type { Lang } from "@/lib/i18n";
import { javascriptSections } from "@/lib/javascript-sections";
import { javaSections } from "@/lib/java-sections";

type Seo = { title: string; description: string; keywords: string };

export type ProgrammingBlock = {
  heading?: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
  ordered?: boolean;
  code?: string;
  after?: readonly string[];
};

export type ProgrammingSection = {
  id: string;
  title: string;
  blocks?: readonly ProgrammingBlock[];
};

export type ProgrammingPage = {
  slug: string;
  title: string;
  sections?: readonly ProgrammingSection[];
  seo: Record<Lang, Seo>;
};

function seo(az: Seo, en: Seo, tr: Seo, ar: Seo, ru: Seo): Record<Lang, Seo> {
  return { az, en, tr, ar, ru };
}

export const PROGRAMMING: readonly ProgrammingPage[] = [
  {
    slug: "python",
    title: "Python nədir? İstifadə sahələri və üstünlükləri",
    sections: [
      {
        id: "nedir",
        title: "📌 Python nədir?",
        blocks: [
          {
            paragraphs: [
              "Python sadə və oxunaqlı sintaksisə malik, geniş istifadə olunan proqramlaşdırma dilidir. Həm proqramlaşdırmaya yeni başlayanlar, həm də peşəkar proqramçılar Python ilə işləyə bilirlər.",
              "Python-un əsas üstünlüklərindən biri kodunun nisbətən asan oxunmasıdır. Buna görə proqramlaşdırmanı öyrənməyə başlayan insanlar üçün də uyğun seçimlərdən biridir.",
              "Python müxtəlif sahələrdə istifadə olunur. Bunlara web proqramlaşdırma, süni intellekt, Machine Learning, məlumat analizi, avtomatlaşdırma və elmi hesablamalar daxildir.",
              "Python çoxsaylı kitabxana və framework-lərə malikdir. Bu isə müxtəlif layihələr üçün hazır alətlərdən istifadə etməyə imkan verir.",
            ],
          },
          {
            heading: "Qısaca",
            paragraphs: [
              "Python çoxməqsədli proqramlaşdırma dilidir və sadə sintaksisi, geniş istifadə sahəsi və böyük kitabxana ekosistemi ilə tanınır.",
            ],
          },
        ],
      },
    ],
    seo: seo(
      {
        title: "Python nədir? İstifadə sahələri və üstünlükləri — Nibras Code",
        description: "Python proqramlaşdırma dili: harada işlədilir və nə üçün seçilir.",
        keywords: "Python nədir, Python istifadə sahələri, Python və JavaScript fərqi, Python və Java fərqi",
      },
      {
        title: "What is Python? Uses and advantages — Nibras Code",
        description: "What the Python programming language is used for, and why people choose it.",
        keywords: "what is Python, Python vs JavaScript, Python vs Java, Python programming language",
      },
      {
        title: "Python nedir? Kullanım alanları ve avantajları — Nibras Code",
        description: "Python programlama dili nerede kullanılır ve neden tercih edilir.",
        keywords: "Python nedir, Python JavaScript farkı, Python Java farkı, Python programlama",
      },
      {
        title: "ما هي بايثون؟ استخداماتها ومزاياها — Nibras Code",
        description: "ما هي لغة Python وأين تُستخدم ولماذا يختارها الناس.",
        keywords: "ما هي بايثون, الفرق بين Python وJavaScript, الفرق بين Python وJava",
      },
      {
        title: "Что такое Python? Области применения и преимущества — Nibras Code",
        description: "Где используют язык Python и почему его выбирают.",
        keywords: "что такое Python, разница Python и JavaScript, разница Python и Java",
      },
    ),
  },
  {
    slug: "javascript",
    title: "JavaScript nədir? Nə üçün istifadə olunur?",
    sections: javascriptSections("az"),
    seo: seo(
      {
        title: "JavaScript nədir? Nə üçün istifadə olunur? — Nibras Code",
        description: "JavaScript nə üçündür: səhifə, brauzer və proqram tərəfi.",
        keywords: "JavaScript nədir, JavaScript nə üçün lazımdır, JavaScript proqramlaşdırma",
      },
      {
        title: "What is JavaScript and what is it used for? — Nibras Code",
        description: "What JavaScript is for, in the browser and beyond the page.",
        keywords: "what is JavaScript, JavaScript uses, JavaScript programming",
      },
      {
        title: "JavaScript nedir? Ne için kullanılır? — Nibras Code",
        description: "JavaScript ne işe yarar: sayfa, tarayıcı ve uygulamanın diğer yüzü.",
        keywords: "JavaScript nedir, JavaScript ne için kullanılır, JavaScript programlama",
      },
      {
        title: "ما هي جافاسكريبت ولماذا تُستخدم؟ — Nibras Code",
        description: "ما دور JavaScript في الصفحة والمتصفح وخارجها.",
        keywords: "ما هي جافاسكريبت, استخدامات JavaScript, برمجة JavaScript",
      },
      {
        title: "Что такое JavaScript и зачем он нужен? — Nibras Code",
        description: "Зачем нужен JavaScript: страница, браузер и логика приложения.",
        keywords: "что такое JavaScript, зачем нужен JavaScript, программирование JavaScript",
      },
    ),
  },
  {
    slug: "java",
    title: "Java nədir? Android və proqramlaşdırmada istifadəsi",
    sections: javaSections("az"),
    seo: seo(
      {
        title: "Java nədir? Android və proqramlaşdırmada istifadəsi — Nibras Code",
        description: "Java dili və onun Android tətbiqləri ilə digər proqramlarda yeri.",
        keywords: "Java nədir, Java Android, Java proqramlaşdırma",
      },
      {
        title: "What is Java? Its use in Android and programming — Nibras Code",
        description: "What Java is, and where it sits in Android apps and other software.",
        keywords: "what is Java, Java for Android, Java programming language",
      },
      {
        title: "Java nedir? Android ve programlamada kullanımı — Nibras Code",
        description: "Java dili ve Android uygulamaları ile diğer yazılımlardaki yeri.",
        keywords: "Java nedir, Java Android, Java programlama",
      },
      {
        title: "ما هي جافا؟ استخدامها في أندرويد والبرمجة — Nibras Code",
        description: "ما هي Java وأين تُستخدم في تطبيقات أندرويد والبرامج الأخرى.",
        keywords: "ما هي جافا, Java لأندرويد, لغة Java",
      },
      {
        title: "Что такое Java? Применение в Android и программировании — Nibras Code",
        description: "Что такое Java и где её используют в приложениях Android и других программах.",
        keywords: "что такое Java, Java для Android, язык Java",
      },
    ),
  },
];

export function findProgramming(slug: string) {
  return PROGRAMMING.find((page) => page.slug === slug) ?? null;
}
