import type { Lang } from "@/lib/i18n";
import type { ProgrammingBlock, ProgrammingSection } from "@/lib/programming";

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

const AZ: Record<(typeof ORDER)[number], readonly ProgrammingBlock[]> = {
  nedir: [
    {
      paragraphs: [
        "JavaScript müasir veb saytların və veb tətbiqlərin hazırlanmasında geniş istifadə olunan məşhur proqramlaşdırma dilidir. HTML və CSS ilə birlikdə veb texnologiyalarının əsas hissələrindən biridir. JavaScript veb səhifələrə interaktivlik əlavə etməyə və müxtəlif tətbiqlər hazırlamağa imkan verir.",
        "JavaScript əsasən veb səhifələri interaktiv və dinamik etmək üçün istifadə olunan proqramlaşdırma dilidir. Əvvəllər daha çox brauzerdə istifadə edilsə də, bu gün JavaScript server tərəfində və müxtəlif tətbiq mühitlərində də istifadə olunur.",
        "JavaScript ilə düymələrə reaksiyalar, formaların idarə edilməsi, animasiyalar, məlumatların dəyişdirilməsi və istifadəçi ilə qarşılıqlı əlaqə yaratmaq mümkündür.",
      ],
    },
  ],
  istifade: [
    {
      paragraphs: ["JavaScript müxtəlif sahələrdə istifadə edilir:"],
      list: [
        "Veb saytların hazırlanması",
        "İnteraktiv veb tətbiqlər",
        "Frontend proqramlaşdırma",
        "Backend proqramlaşdırma",
        "API-lərlə işləmək",
        "Mobil tətbiqlər",
        "Masaüstü tətbiqlər",
        "Oyunlar və interaktiv layihələr",
        "Form və istifadəçi məlumatlarının idarə edilməsi",
      ],
    },
    {
      paragraphs: ["Node.js kimi texnologiyalar vasitəsilə JavaScript server tərəfində də işlədilə bilər."],
    },
  ],
  "ne-etmek": [
    {
      paragraphs: [
        "JavaScript ilə interaktiv veb saytlar, kalkulyatorlar, oyunlar, formalar, menyular və müxtəlif veb tətbiqlər hazırlamaq olar.",
      ],
    },
    {
      heading: "Məsələn",
      code: 'const name = "Nibras Code";\nconsole.log("Salam, " + name);',
      after: ['Bu kod "Nibras Code" adını istifadə edərək konsola salam mesajı yazdırır.'],
    },
  ],
  oyrenmek: [
    {
      paragraphs: [
        "JavaScript-in əsaslarını öyrənmək mümkündür, lakin dili yaxşı mənimsəmək üçün davamlı praktika lazımdır.",
        "Başlanğıcda aşağıdakı mövzuları öyrənmək faydalıdır:",
      ],
      list: [
        "Dəyişənlər",
        "Məlumat tipləri",
        "Şərtlər",
        "Dövrlər",
        "Funksiyalar",
        "Massivlər və obyektlər",
        "DOM ilə işləmək",
        "Hadisələr",
        "Asinxron JavaScript",
        "API-lər",
      ],
      ordered: true,
    },
  ],
  ustunluk: [
    {
      heading: "Üstünlükləri",
      list: [
        "Brauzerlərdə birbaşa işləyə bilir",
        "Veb proqramlaşdırmada geniş istifadə olunur",
        "Böyük kitabxana və framework ekosisteminə malikdir",
        "Frontend və backend üçün istifadə edilə bilər",
        "Böyük proqramçı icması mövcuddur",
        "Bir çox platformada istifadə edilə bilər",
      ],
    },
    {
      heading: "Çatışmazlıqları",
      list: [
        "Dilin bəzi xüsusiyyətləri yeni başlayanlar üçün qarışıq ola bilər",
        "Asinxron proqramlaşdırma əvvəlcə çətin görünə bilər",
        "Böyük layihələrdə kodun düzgün strukturlaşdırılması vacibdir",
        "Çoxsaylı kitabxana və framework seçimləri yeni başlayanları çaşdıra bilər",
      ],
    },
  ],
  sintaksis: [
    {
      paragraphs: ['JavaScript-də dəyişən yaratmaq üçün "let" və "const" kimi açar sözlərdən istifadə olunur.'],
      code: 'const name = "Ali";\nlet age = 20;',
    },
    {
      heading: "Şərt",
      code: 'if (age >= 18) {\n    console.log("Yetkin");\n}',
    },
    {
      heading: "Dövr",
      code: "for (let i = 1; i <= 5; i++) {\n    console.log(i);\n}",
    },
    {
      heading: "Funksiya",
      code: 'function salamla(name) {\n    return "Salam, " + name;\n}\n\nconsole.log(salamla("Ali"));',
    },
  ],
  numuneler: [
    {
      heading: "Sadə mesaj",
      code: 'console.log("Salam, dünya!");',
    },
    {
      heading: "Toplama",
      code: "let a = 10;\nlet b = 20;\n\nconsole.log(a + b);",
    },
    {
      heading: "Ədədin yoxlanılması",
      code: 'let number = 10;\n\nif (number > 0) {\n    console.log("Müsbət ədəddir");\n}',
    },
    {
      heading: "Massiv",
      code: 'const fruits = ["Apple", "Banana", "Orange"];\n\nfor (const fruit of fruits) {\n    console.log(fruit);\n}',
    },
  ],
  suallar: [
    {
      heading: "JavaScript nədir?",
      paragraphs: [
        "JavaScript əsasən interaktiv və dinamik veb saytlar hazırlamaq üçün istifadə olunan proqramlaşdırma dilidir.",
      ],
    },
    {
      heading: "JavaScript pulsuzdur?",
      paragraphs: ["Bəli. JavaScript-dən istifadə etmək üçün ayrıca lisenziya haqqı tələb olunmur."],
    },
    {
      heading: "JavaScript ilə veb sayt hazırlamaq olar?",
      paragraphs: [
        "Bəli. JavaScript HTML və CSS ilə birlikdə müasir veb saytların hazırlanmasında geniş istifadə olunur.",
      ],
    },
    {
      heading: "JavaScript ilə mobil tətbiq hazırlamaq olar?",
      paragraphs: [
        "Bəli. Müxtəlif framework və texnologiyalar vasitəsilə JavaScript ilə mobil tətbiqlər hazırlamaq mümkündür.",
      ],
    },
    {
      heading: "JavaScript server tərəfində işləyə bilər?",
      paragraphs: ["Bəli. Məsələn, Node.js vasitəsilə JavaScript server tərəfində işlədilə bilər."],
    },
    {
      heading: "JavaScript ilə Java eynidirmi?",
      paragraphs: [
        "Xeyr. Adları oxşar olsa da, Java və JavaScript fərqli proqramlaşdırma dilləridir.",
      ],
    },
  ],
};

export function javascriptSections(lang: Lang): readonly ProgrammingSection[] {
  return ORDER.map((id) => ({
    id,
    title: TITLES[id][lang],
    blocks: lang === "az" ? AZ[id] : undefined,
  }));
}
