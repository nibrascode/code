import type { Lang } from "@/lib/i18n";
import { javascriptSections } from "@/lib/javascript-sections";

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

export const JAVA_AZ: readonly ProgrammingSection[] = [
  {
    id: "nedir",
    title: "📌 Java nədir?",
    blocks: [
      {
        paragraphs: [
          "Java yüksək səviyyəli, ümumi məqsədli və platformalararası proqramlaşdırma dilidir. O, xüsusilə böyük layihələr, backend xidmətləri, Android tətbiqləri və korporativ proqramlar üçün geniş istifadə olunur.",
          "Java-nın əsas üstünlüklərindən biri onun 'yaz bir dəfə, hər yerdə işlət' (write once, run anywhere) prinsipi ilə işləməsi və platformalararası uyğunluğudur.",
          "Java həmçinin güclü obyekt yönümlü modellə, geniş standart kitabxana ekosistemə və əla inkişafetmə alətlərinə malikdir.",
        ],
      },
      {
        heading: "Qısaca",
        paragraphs: [
          "Java təhlükəsizlik, sabitlik və geniş tətbiq sahəsi ilə tanınan, böyük layihələr üçün çox populyar proqramlaşdırma dilidir.",
        ],
      },
    ],
  },
  {
    id: "istifade",
    title: "💻 Java nə üçün istifadə olunur?",
    blocks: [
      {
        paragraphs: [
          "Java bir çox sahədə istifadə olunur. O, xüsusilə aşağıdakı sahələrdə güclüdür:",
        ],
        list: [
          "Android tətbiqləri",
          "Backend və server xidmətləri",
          "Korporativ sistemlər",
          "Bank və maliyyə tətbiqləri",
          "Məlumat bazası ilə işləmə",
          "İnternet və mikroservis arxitekturaları",
          "Böyük miqyaslı layihələr",
          "Elmi və sistem proqramlaşdırması",
        ],
      },
      {
        heading: "Niyə Java?",
        paragraphs: [
          "Java-nın sabitliyi, böyük icması və inkişaf edən ekosistemi onu biznes layihələri, şirkət daxilində tətbiqlər və yüksək etibarlılıq tələb edən sistemlər üçün üstün seçim etməyə kömək edir.",
        ],
      },
    ],
  },
  {
    id: "ne-etmek",
    title: "🎯 Java ilə nələr etmək olar?",
    blocks: [
      {
        paragraphs: [
          "Java ilə aşağıdakı işləri etmək mümkündür:",
        ],
        list: [
          "Android tətbiqləri hazırlamaq",
          "Web backend xidmətləri yazmaq",
          "REST API yaratmaq",
          "Məlumat bazası ilə işləmək",
          "Mikroservis arquitekturası qurmaq",
          "Korporativ tətbiqlər hazırlamaq",
          "İşləmə gücü tələb edən sistemlər yazmaq",
          "İnternet və mobil platformalar üçün proqramlar hazırlamaq",
        ],
      },
      {
        heading: "Sadə Java nümunəsi",
        code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Salam, Java!");\n  }\n}',
        after: ["Bu kod ekranda mesaj çıxarır."],
      },
    ],
  },
  {
    id: "oyrenmek",
    title: "📚 Java öyrənmək çətindirmi?",
    blocks: [
      {
        paragraphs: [
          "Java öyrənmək mənbə və təcrübə ilə asanlaşan bir dildir. Başlanğıcda bəzi konseptlər qarışıq görünə bilər, lakin qayda-qanunlar anlaşıldıqdan sonra dilin quruluşu nisbi olaraq aydın olur.",
          "Java öyrənməyə başlamaq üçün aşağıdakı mövzuları öyrənmək faydalıdır:",
        ],
        list: [
          "Dəyişənlər və məlumat tipləri",
          "Şərtlər və dövrlər",
          "Funksiyalar və metodlar",
          "Siniflər və obyektlər",
          "Miras və inkapsulyasiya",
          "Kolleksiyalar",
          "İstisnalar",
          "Klasslar və paketlər",
          "Məlumat bazası ilə işləmə",
        ],
        ordered: true,
      },
      {
        paragraphs: [
          "Java öyrənmənin çətinliyi proqramlaşdırmaya başlanğıc səviyyəsindən asılıdır. Düzenli praktika və kiçik layihələr sayəsində dil öyrənmək asanlaşır.",
        ],
      },
    ],
  },
  {
    id: "ustunluk",
    title: "⚖️ Java-nın üstünlükləri və çatışmazlıqları",
    blocks: [
      {
        heading: "Üstünlükləri",
        list: [
          "Platformalararası uyğunluq",
          "Güclü obyekt yönümlü model",
          "Böyük icma və dokumentasiya",
          "Etibarlı və geniş ekosistem",
          "Android inkişafı üçün uyğunluq",
          "Böyük korporativ layihələr üçün uyğunluğu",
        ],
      },
      {
        heading: "Çatışmazlıqları",
        list: [
          "Sintaksis və ilkin öyrənmə nisbətən çoxdur",
          "Bəzi tətbiqlərdə daha çox kod yazmaq lazım ola bilər",
          "Yüksək performans tələb olunan sahələrdə başqa dillər daha optimal ola bilər",
          "Başlanğıcda obyekt yönümlü konseptlər qarışıq görüne bilər",
        ],
      },
      {
        heading: "Qısaca",
        paragraphs: [
          "Java-nın üstünlükləri onun etibarlılığı və geniş istifadəsidir. Çatışmazlığı isə öyrənmə əyrisinin nisbi olaraq daha uzun olmasıdır.",
        ],
      },
    ],
  },
  {
    id: "sintaksis",
    title: "🔤 Java sintaksisi və əsas anlayışlar",
    blocks: [
      {
        paragraphs: [
          "Java-da proqramlar siniflər və metodlar üzərində qurulur. Əsas anlayışlardan biri də obyekt yönümlü proqramlaşdırmadır.",
        ],
      },
      {
        heading: "Dəyişənlər",
        code: 'int age = 25;\nString name = "Ali";',
      },
      {
        heading: "Şərt",
        code: 'if (age >= 18) {\n    System.out.println("Yetkin");\n} else {\n    System.out.println("Yaşlı deyil");\n}',
      },
      {
        heading: "Dövr",
        code: 'for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}',
      },
      {
        heading: "Sinif və metod",
        code: 'class Main {\n  static void greet(String name) {\n    System.out.println("Salam, " + name);\n  }\n\n  public static void main(String[] args) {\n    greet("Java");\n  }\n}',
      },
    ],
  },
  {
    id: "numuneler",
    title: "🧩 Java kod nümunələri",
    blocks: [
      {
        heading: "Mətn çıxarmaq",
        code: 'System.out.println("Salam, dünya!");',
      },
      {
        heading: "İki ədədi toplamaq",
        code: 'int a = 10;\nint b = 20;\nint result = a + b;\nSystem.out.println(result);',
      },
      {
        heading: "Şərtə əsasən nəticə",
        code: 'int score = 80;\n\nif (score >= 50) {\n    System.out.println("Keçdiniz");\n} else {\n    System.out.println("Keçmədiniz");\n}',
      },
      {
        heading: "Dövr nümunəsi",
        code: 'for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}',
      },
      {
        heading: "Sadə metod",
        code: 'class Main {\n  static int topla(int a, int b) {\n    return a + b;\n  }\n\n  public static void main(String[] args) {\n    System.out.println(topla(10, 20));\n  }\n}',
      },
    ],
  },
  {
    id: "suallar",
    title: "❓ Java haqqında tez-tez verilən suallar",
    blocks: [
      {
        heading: "Java nədir?",
        paragraphs: [
          "Java platformalararası, obyekt yönümlü və müasir proqramlaşdırma dillərindən biridir.",
        ],
      },
      {
        heading: "Java nə üçün istifadə olunur?",
        paragraphs: [
          "Java backend, Android, böyük korporativ sistemlər, bank və maliyyə tətbiqləri üçün istifadə olunur.",
        ],
      },
      {
        heading: "Java öyrənmək çətindirmi?",
        paragraphs: [
          "Java sintaksisi nisbətən formal olsa da, düzgün öyrənmə metoduyla öyrənilə bilər. Təcrübə və kiçik layihələr bu prosesi asanlaşdırır.",
        ],
      },
      {
        heading: "Java və JavaScript eynidirmi?",
        paragraphs: [
          "Xeyr. Java və JavaScript fərqli dillərdir. Java daha çox backend və mobil tətbiqlərdə, JavaScript isə veb tətbiqlərdə istifadə olunur.",
        ],
      },
      {
        heading: "Java Android üçün çox vacibdirmi?",
        paragraphs: [
          "Bəli, Java əvvəllər Android proqramlaşdırmada geniş istifadə olunurdu. Bu gün Kotlin daha çox istifadə olunur, lakin Java hələ də vacib bir dildir.",
        ],
      },
    ],
  },
];

export const JAVA_EN: readonly ProgrammingSection[] = [
  {
    id: "nedir",
    title: "What is Java?",
    blocks: [
      {
        paragraphs: [
          "Java is a high-level, general-purpose programming language designed to be portable, reliable, and scalable.",
          "It is widely used for Android apps, backend services, enterprise systems, and large software projects.",
          "Java follows the object-oriented programming model and offers a robust standard library and large ecosystem.",
        ],
      },
      {
        heading: "In short",
        paragraphs: [
          "Java is a powerful and widely used language known for stability, portability, and strong ecosystem support.",
        ],
      },
    ],
  },
  {
    id: "istifade",
    title: "What is Java used for?",
    blocks: [
      {
        paragraphs: ["Java is used in many fields, including:"],
        list: [
          "Android applications",
          "Backend and server development",
          "Enterprise software",
          "Banking and financial systems",
          "Database-driven applications",
          "Microservices",
          "Large-scale software systems",
        ],
      },
    ],
  },
  {
    id: "ne-etmek",
    title: "What can you do with Java?",
    blocks: [
      {
        paragraphs: ["You can use Java to:"],
        list: [
          "Build Android apps",
          "Create web backend services",
          "Develop APIs",
          "Work with databases",
          "Build enterprise platforms",
          "Develop large and reliable systems",
        ],
      },
      {
        heading: "Simple example",
        code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Java!");\n  }\n}',
      },
    ],
  },
  {
    id: "oyrenmek",
    title: "Is Java difficult to learn?",
    blocks: [
      {
        paragraphs: [
          "Java can be learned step by step. New concepts like classes, objects, and methods may feel challenging at first, but the structure becomes clearer with practice.",
        ],
      },
    ],
  },
  {
    id: "ustunluk",
    title: "Advantages and disadvantages of Java",
    blocks: [
      {
        heading: "Advantages",
        list: [
          "Cross-platform support",
          "Strong object-oriented model",
          "Good enterprise ecosystem",
          "High reliability",
          "Large community",
        ],
      },
      {
        heading: "Disadvantages",
        list: [
          "More verbose syntax",
          "Longer learning curve",
          "Can require more code for simple tasks",
        ],
      },
    ],
  },
  {
    id: "sintaksis",
    title: "Java syntax and basic concepts",
    blocks: [
      {
        paragraphs: ["Java programs are built around classes and methods."],
      },
      { heading: "Variables", code: 'int age = 25;\nString name = "Ali";' },
      { heading: "Condition", code: 'if (age >= 18) {\n  System.out.println("Adult");\n}' },
      { heading: "Loop", code: 'for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}' },
    ],
  },
  {
    id: "numuneler",
    title: "Java code examples",
    blocks: [
      { heading: "Print message", code: 'System.out.println("Hello, world!");' },
      { heading: "Add numbers", code: 'int a = 10;\nint b = 20;\nSystem.out.println(a + b);' },
    ],
  },
  {
    id: "suallar",
    title: "Frequently asked questions about Java",
    blocks: [
      { heading: "What is Java?", paragraphs: ["Java is a widely used programming language for enterprise, backend, and Android development."] },
      { heading: "Is Java difficult to learn?", paragraphs: ["It has a structured syntax and a longer learning curve, but it is manageable with practice."] },
    ],
  },
];

export const JAVA_TR: readonly ProgrammingSection[] = [
  {
    id: "nedir",
    title: "Java nedir?",
    blocks: [
      {
        paragraphs: [
          "Java, taşınabilir, güvenilir ve ölçeklenebilir bir programlama dilidir.",
          "Android uygulamaları, sunucu tarafı yazılımlar, kurumsal sistemler ve büyük projelerde yaygın olarak kullanılır.",
        ],
      },
    ],
  },
  {
    id: "istifade",
    title: "Java ne için kullanılır?",
    blocks: [
      { paragraphs: ["Java şu alanlarda kullanılır:"], list: ["Android uygulamaları", "Backend", "Kurumsal yazılım", "Bankacılık sistemleri"] },
    ],
  },
  {
    id: "ne-etmek",
    title: "Java ile neler yapılabilir?",
    blocks: [
      { paragraphs: ["Java ile şunları yapabilirsiniz:"], list: ["Mobil uygulamalar", "API servisleri", "Veritabanı uygulamaları", "Kurumsal sistemler"] },
    ],
  },
  {
    id: "oyrenmek",
    title: "Java öğrenmek zor mu?",
    blocks: [{ paragraphs: ["Java, düzenli pratikle öğrenilebilen yapılandırılmış bir dildir."] }],
  },
  {
    id: "ustunluk",
    title: "Java'nın avantajları ve dezavantajları",
    blocks: [{ heading: "Avantajlar", list: ["Taşınabilirlik", "Güvenilirlik", "Geniş topluluk"] }, { heading: "Dezavantajlar", list: ["Daha uzun öğrenme süreci", "Daha ayrıntılı sentaks"] }],
  },
  { id: "sintaksis", title: "Java sözdizimi ve temel kavramlar", blocks: [{ code: 'int yas = 25;\nString ad = "Ali";' }] },
  { id: "numuneler", title: "Java örnekleri", blocks: [{ code: 'System.out.println("Merhaba Java!");' }] },
  { id: "suallar", title: "Java hakkında sık sorulan sorular", blocks: [{ heading: "Java nedir?", paragraphs: ["Java, kurumsal ve mobil uygulamalarda sıkça kullanılan bir dildir."] }] },
];

export const JAVA_RU: readonly ProgrammingSection[] = [
  {
    id: "nedir",
    title: "Что такое Java?",
    blocks: [
      {
        paragraphs: [
          "Java — популярный объектно-ориентированный язык программирования, который используется в веб-разработке, Android и корпоративных системах.",
        ],
      },
    ],
  },
  { id: "istifade", title: "Для чего используется Java?", blocks: [{ paragraphs: ["Java используется для backend, Android, enterprise-приложений и крупных проектов."] }] },
  { id: "ne-etmek", title: "Что можно делать с Java?", blocks: [{ paragraphs: ["Можно создавать серверы, API, мобильные и корпоративные приложения."] }] },
  { id: "oyrenmek", title: "Сложно ли изучать Java?", blocks: [{ paragraphs: ["Java учится постепенно, а регулярная практика помогает быстро освоить основы."] }] },
  { id: "ustunluk", title: "Преимущества и недостатки Java", blocks: [{ heading: "Плюсы", list: ["Портабельность", "Надежность", "Большое сообщество"] }, { heading: "Минусы", list: ["Более длинный синтаксис", "Длинный путь обучения"] }] },
  { id: "sintaksis", title: "Синтаксис Java и основные понятия", blocks: [{ code: 'int age = 25;\nString name = "Ali";' }] },
  { id: "numuneler", title: "Примеры кода Java", blocks: [{ code: 'System.out.println("Привет, Java!");' }] },
  { id: "suallar", title: "Часто задаваемые вопросы о Java", blocks: [{ heading: "Что такое Java?", paragraphs: ["Java — язык программирования для крупных приложений и Android."] }] },
];

export const JAVA_AR: readonly ProgrammingSection[] = [
  {
    id: "nedir",
    title: "ما هي Java؟",
    blocks: [{ paragraphs: ["Java لغة برمجة شائعة تُستخدم في تطوير التطبيقات المحمولة والخوادم والنظم المؤسسية."] }],
  },
  { id: "istifade", title: "لماذا تُستخدم Java؟", blocks: [{ paragraphs: ["تُستخدم Java في Android والخوادم والتطبيقات واسعة النطاق."] }] },
  { id: "ne-etmek", title: "ماذا يمكن أن تفعل باستخدام Java؟", blocks: [{ paragraphs: ["يمكنك بناء تطبيقات الهاتف والخدمات الخلفية والواجهات."] }] },
  { id: "oyrenmek", title: "هل تعلم Java صعب؟", blocks: [{ paragraphs: ["Java تحتاج إلى تدريب منتظم، لكنها قابلة للتعلم خطوة بخطوة."] }] },
  { id: "ustunluk", title: "مزايا وعيوب Java", blocks: [{ heading: "المزايا", list: ["قابلة للنقل", "موثوقة", "مجتمع كبير"] }, { heading: "العيوب", list: ["بنية أطول", "تعلم أبطأ"] }] },
  { id: "sintaksis", title: "بنية Java والمفاهيم الأساسية", blocks: [{ code: 'int age = 25;\nString name = "Ali";' }] },
  { id: "numuneler", title: "أمثلة Java", blocks: [{ code: 'System.out.println("مرحبًا، Java!");' }] },
  { id: "suallar", title: "أسئلة شائعة حول Java", blocks: [{ heading: "ما هي Java؟", paragraphs: ["Java لغة برمجة تستخدم في Android والخوادم والأنظمة المؤسسية."] }] },
];

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
              "Python sadə və oxunaqlı sintaksisə malik, geniş istifadə olunan proqramlaşdırma dilidir. Həm proqramlaşdırmaya yeni başlayanlar, həm də peşəkar proqramçılar Python-dan müxtəlif layihələrdə istifadə edirlər.",
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
      {
        id: "istifade",
        title: "💻 Python nə üçün istifadə olunur?",
        blocks: [
          {
            paragraphs: [
              "Python müxtəlif proqramlaşdırma və texnologiya sahələrində istifadə olunur. Dilin geniş kitabxana ekosistemi müxtəlif layihələrin hazırlanmasını asanlaşdırır.",
            ],
          },
          {
            heading: "Web proqramlaşdırma",
            paragraphs: [
              "Python ilə web saytların və web tətbiqlərinin server tərəfi hazırlana bilər. Django və Flask kimi framework-lər bu məqsədlə istifadə olunur.",
            ],
          },
          {
            heading: "Süni intellekt",
            paragraphs: [
              "Python süni intellekt və Machine Learning layihələrində geniş istifadə edilir. Məlumatların emalı və modellərin hazırlanması üçün çoxsaylı kitabxanalar mövcuddur.",
            ],
          },
          {
            heading: "Məlumat analizi",
            paragraphs: [
              "Python böyük həcmdə məlumatların işlənməsi, analiz edilməsi və vizuallaşdırılmasında istifadə olunur.",
            ],
          },
          {
            heading: "Avtomatlaşdırma",
            paragraphs: [
              "Təkrarlanan işləri avtomatlaşdırmaq üçün Python skriptlərindən istifadə etmək mümkündür. Faylların idarə edilməsi və məlumatların emalı buna nümunədir.",
            ],
          },
          {
            heading: "Təhsil",
            paragraphs: [
              "Python sadə sintaksisinə görə proqramlaşdırmanın əsaslarını öyrənmək üçün də geniş istifadə olunur.",
            ],
          },
          {
            heading: "Qısaca",
            paragraphs: [
              "Python əsasən web proqramlaşdırma, süni intellekt, məlumat analizi, avtomatlaşdırma və təhsil kimi sahələrdə istifadə edilir.",
            ],
          },
        ],
      },
      {
        id: "ne-etmek",
        title: "🎯 Python ilə nə etmək olar?",
        blocks: [
          {
            paragraphs: [
              "Python ilə sadə proqramlardan tutmuş mürəkkəb proqram təminatı layihələrinə qədər müxtəlif işlər görmək mümkündür.",
              "Python istifadə edərək:",
            ],
            list: [
              "Web tətbiqləri hazırlamaq",
              "Avtomatlaşdırma skriptləri yazmaq",
              "Məlumatları analiz etmək",
              "Süni intellekt layihələri hazırlamaq",
              "Faylları avtomatik idarə etmək",
              "API-lərlə işləmək",
              "Hesablamalar aparmaq",
              "Sadə oyun və proqramlar hazırlamaq",
              "Elmi və texniki layihələr üzərində işləmək mümkündür.",
            ],
          },
          {
            paragraphs: [
              "Python-un imkanları böyük ölçüdə istifadə olunan kitabxanalardan və framework-lərdən asılıdır.",
            ],
          },
          {
            heading: "Sadə nümunə",
            code: 'ad = "Nibras Code"\nprint("Salam,", ad)',
            after: ["Bu kod dəyişəndə saxlanılan məlumatı ekrana çıxarır."],
          },
          {
            heading: "Qısaca",
            paragraphs: [
              "Python yalnız bir sahə üçün deyil. Müxtəlif proqramlaşdırma, məlumat və avtomatlaşdırma layihələrində istifadə edilə bilən çoxməqsədli dildir.",
            ],
          },
        ],
      },
      {
        id: "oyrenmek",
        title: "📚 Python öyrənmək çətindirmi?",
        blocks: [
          {
            paragraphs: [
              "Python proqramlaşdırmaya yeni başlayan insanların tez-tez seçdiyi dillərdən biridir. Bunun əsas səbəblərindən biri sintaksisinin oxunaqlı və nisbətən sadə olmasıdır.",
              "Lakin Python-un sadə başlanğıca malik olması onun tamamilə asan olduğu demək deyil. Daha mürəkkəb proqramlar hazırlamaq üçün dəyişənlər, şərtlər, dövrlər, funksiyalar, məlumat strukturları və obyekt yönümlü proqramlaşdırma kimi mövzuları bilmək lazımdır.",
            ],
          },
          {
            heading: "Python öyrənməyə necə başlamaq olar?",
            paragraphs: ["Başlanğıc üçün aşağıdakı ardıcıllıq faydalı ola bilər:"],
            list: [
              "Python-un əsas sintaksisini öyrənmək",
              "Dəyişənlər və məlumat tipləri ilə işləmək",
              "\"if\", \"for\" və \"while\" kimi strukturları öyrənmək",
              "Funksiyalar hazırlamaq",
              "Siyahılar və lüğətlər kimi məlumat strukturlarını öyrənmək",
              "Kiçik layihələr hazırlamaq",
              "Daha sonra seçilən sahəyə uyğun kitabxanaları öyrənmək",
            ],
            ordered: true,
          },
          {
            paragraphs: [
              "Ən yaxşı nəticə yalnız nəzəri məlumat oxumaqla deyil, kod yazaraq və praktika edərək əldə edilir.",
            ],
          },
          {
            heading: "Qısaca",
            paragraphs: [
              "Python başlanğıc üçün münasib dillərdən biri ola bilər. Ancaq yaxşı proqramçı olmaq üçün davamlı öyrənmək və praktika etmək lazımdır.",
            ],
          },
        ],
      },
      {
        id: "ustunluk",
        title: "⚖️ Python-un üstünlükləri və çatışmazlıqları",
        blocks: [
          {
            paragraphs: [
              "Hər proqramlaşdırma dilində olduğu kimi Python-un da üstün və məhdud tərəfləri var. Dil seçərkən layihənin məqsədini nəzərə almaq vacibdir.",
            ],
          },
          {
            heading: "Python-un üstünlükləri",
            list: [
              "Sadə sintaksis: Kodun oxunması və yazılması nisbətən rahatdır.",
              "Geniş istifadə sahəsi: Web proqramlaşdırmadan süni intellektə qədər müxtəlif sahələrdə istifadə olunur.",
              "Böyük kitabxana ekosistemi: Müxtəlif məqsədlər üçün çoxsaylı kitabxanalar mövcuddur.",
              "Geniş icma: Python haqqında çoxlu tədris materialları və nümunələr tapmaq mümkündür.",
              "Platformalararası istifadə: Python müxtəlif əməliyyat sistemlərində işlədilə bilər.",
            ],
          },
          {
            heading: "Python-un çatışmazlıqları",
            paragraphs: [
              "Python bütün layihələr üçün ən uyğun seçim olmaya bilər. Bəzi yüksək performans tələb edən və resurs məhdudiyyətlərinin vacib olduğu layihələrdə başqa proqramlaşdırma dilləri daha yaxşı seçim ola bilər.",
              "Bundan əlavə, Python proqramlarının bəzi hallarda kompilyasiya edilmiş dillərlə müqayisədə daha aşağı icra sürəti ola bilər.",
            ],
          },
          {
            heading: "Qısaca",
            paragraphs: [
              "Python-un üstünlükləri və məhdudiyyətləri layihənin məqsədindən asılı olaraq fərqli əhəmiyyət daşıyır.",
            ],
          },
        ],
      },
      {
        id: "sintaksis",
        title: "🔤 Python sintaksisi və əsas anlayışlar",
        blocks: [
          {
            paragraphs: [
              "Python-un sintaksisi kodun oxunaqlı olmasına xüsusi diqqət yetirir. Proqramlaşdırmaya başlayan zaman bir neçə əsas anlayışı öyrənmək kifayətdir.",
            ],
          },
          {
            heading: "Dəyişənlər",
            paragraphs: ["Dəyişən məlumatı yadda saxlamaq üçün istifadə olunur:"],
            code: 'ad = "Mahir"\nyas = 25',
          },
          {
            heading: "Şərt",
            paragraphs: ["Müəyyən şərtə əsasən fərqli kodların işlədilməsi üçün \"if\" istifadə olunur:"],
            code: 'yas = 20\n\nif yas >= 18:\n    print("Yetkin")',
          },
          {
            heading: "Dövr",
            paragraphs: ["Eyni əməliyyatı bir neçə dəfə yerinə yetirmək üçün dövrlərdən istifadə edilir:"],
            code: "for i in range(5):\n    print(i)",
          },
          {
            heading: "Funksiya",
            paragraphs: ["Təkrar istifadə edilə bilən kod hissələri funksiyalar vasitəsilə yaradılır:"],
            code: 'def salamla(ad):\n    print("Salam,", ad)\n\nsalamla("Nibras Code")',
          },
          {
            paragraphs: [
              "Python-da dəyişənlər, məlumat tipləri, şərtlər, dövrlər, funksiyalar və məlumat strukturları əsas öyrənilməli mövzulardandır.",
            ],
          },
        ],
      },
      {
        id: "numuneler",
        title: "🧩 Sadə Python kod nümunələri",
        blocks: [
          {
            paragraphs: [
              "Python öyrənərkən kiçik kod nümunələri ilə praktika etmək əsas anlayışları daha yaxşı başa düşməyə kömək edə bilər.",
            ],
          },
          {
            heading: "Ekrana mətn çıxarmaq",
            code: 'print("Salam, dünya!")',
          },
          {
            heading: "İki ədədi toplamaq",
            code: "a = 10\nb = 5\n\nnetice = a + b\nprint(netice)",
          },
          {
            heading: "Şərtdən istifadə",
            code: 'bal = 85\n\nif bal >= 50:\n    print("Keçdiniz")\nelse:\n    print("Keçmədiniz")',
          },
          {
            heading: "Dövr nümunəsi",
            code: "for i in range(1, 6):\n    print(i)",
          },
          {
            heading: "Sadə funksiya",
            code: "def topla(a, b):\n    return a + b\n\nprint(topla(10, 20))",
          },
          {
            paragraphs: [
              "Bu nümunələr Python sintaksisinin əsaslarını anlamaq üçün başlanğıc səviyyəsində istifadə edilə bilər.",
              "Daha mürəkkəb layihələr hazırlamaq üçün məlumat strukturları, fayllarla işləmə, modullar və kitabxanalar kimi mövzuları da öyrənmək lazımdır.",
            ],
          },
        ],
      },
      {
        id: "suallar",
        title: "❓ Tez-tez verilən suallar",
        blocks: [
          {
            heading: "Python nədir?",
            paragraphs: [
              "Python müxtəlif proqram təminatlarının hazırlanmasında istifadə olunan, geniş imkanlara malik proqramlaşdırma dilidir.",
            ],
          },
          {
            heading: "Python nə üçün istifadə olunur?",
            paragraphs: [
              "Python web proqramlaşdırma, süni intellekt, məlumat analizi, avtomatlaşdırma, elmi hesablamalar və digər sahələrdə istifadə olunur.",
            ],
          },
          {
            heading: "Python öyrənmək çətindirmi?",
            paragraphs: [
              "Python-un sintaksisi nisbətən sadə və oxunaqlıdır. Buna görə yeni başlayanlar üçün uyğun proqramlaşdırma dillərindən biri hesab olunur. Yaxşı səviyyəyə çatmağın üçün davamlı təcrübə lazımdır.",
            ],
          },
          {
            heading: "Python pulsuzdur?",
            paragraphs: ["Bəli. Python açıq mənbəli və pulsuz istifadə edilə bilən proqramlaşdırma dilidir."],
          },
          {
            heading: "Python ilə web sayt hazırlamaq olar?",
            paragraphs: [
              "Bəli. Python ilə web tətbiqlərinin server tərəfini hazırlamaq mümkündür. Django və Flask kimi framework-lər bunun üçün istifadə olunur.",
            ],
          },
          {
            heading: "Python ilə süni intellekt hazırlamaq olar?",
            paragraphs: ["Bəli. Python süni intellekt və Machine Learning layihələrində geniş istifadə olunur."],
          },
          {
            heading: "Python ilə mobil tətbiq hazırlamaq olar?",
            paragraphs: [
              "Bəli, Python ilə mobil tətbiqlər hazırlamaq üçün müxtəlif vasitələr mövcuddur. Lakin Android və iOS üçün əsas mobil inkişafda başqa dillər və texnologiyalar də istifadə olunur.",
            ],
          },
          {
            heading: "Python və JavaScript eynidirmi?",
            paragraphs: [
              "Xeyr. Python və JavaScript fərqli proqramlaşdırma dilləridir və müxtəlif sintaksisə və xüsusiyyətlərə malikdir.",
            ],
          },
          {
            heading: "Python yeni başlayanlar üçün uyğundurmu?",
            paragraphs: [
              "Bəli. Sadə və oxunaqlı sintaksisi Python-u proqramlaşdırmaya başlamaq üçün məşhur seçimlərdən birinə çevirir.",
            ],
          },
        ],
      },
      {
        id: "javascript",
        title: "Python və JavaScript arasındakı fərq",
        blocks: [
          {
            paragraphs: [
              "Python və JavaScript hər ikisi geniş istifadə olunan proqramlaşdırma dilləridir, lakin əsas istifadə sahələri fərqlidir. Python daha çox süni intellekt, məlumat analizi və avtomatlaşdırmada istifadə olunur, JavaScript isə əsasən veb və interaktiv interfeys inkişafında istifadə edilir.",
            ],
          },
        ],
      },
      {
        id: "java",
        title: "Python və Java arasındakı fərq",
        blocks: [
          {
            paragraphs: [
              "Python və Java müxtəlif məqsədlər üçün istifadə olunan məşhur proqramlaşdırma dilləridir. Python sadə və oxunaqlı sintaksisə malikdir və süni intellekt, məlumat analizi və avtomatlaşdırma sahələrində çox populyardır. Java isə daha formal və strukturlaşdırılmış sintaksisə malikdir və çox vaxt backend, Android və böyük korporativ layihələrdə istifadə olunur.",
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
        title: "JavaScript nedir? Ne i��in kullanılır? — Nibras Code",
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
    sections: JAVA_AZ,
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
  {
    slug: "csharp",
    title: "C# nədir? İstifadə sahələri və xüsusiyyətləri",
    seo: seo(
      {
        title: "C# nədir? İstifadə sahələri və xüsusiyyətləri — Nibras Code",
        description: "C# dili: harada işlədilir və əsas xüsusiyyətləri nədir.",
        keywords: "C# nədir, C# istifadə sahələri, C# proqramlaşdırma",
      },
      {
        title: "What is C#? Uses and characteristics — Nibras Code",
        description: "Where the C# language is used and what defines it.",
        keywords: "what is C#, C# uses, C# programming language",
      },
      {
        title: "C# nedir? Kullanım alanları ve özellikleri — Nibras Code",
        description: "C# dili nerede kullanılır ve temel özellikleri nelerdir.",
        keywords: "C# nedir, C# kullanım alanları, C# programlama",
      },
      {
        title: "ما هي C#؟ استخداماتها وخصائصها — Nibras Code",
        description: "أين تُستخدم لغة C# وما الذي يميزها.",
        keywords: "ما هي C#, استخدامات C#, برمجة C#",
      },
      {
        title: "Что такое C#? Области применения и особенности — Nibras Code",
        description: "Где используют язык C# и чем он отличается.",
        keywords: "что такое C#, применение C#, язык C#",
      },
    ),
  },
  {
    slug: "typescript",
    title: "TypeScript nədir? JavaScript-dən fərqi",
    seo: seo(
      {
        title: "TypeScript nədir? JavaScript-dən fərqi — Nibras Code",
        description: "TypeScript nədir və JavaScript-dən hansı fərqi var.",
        keywords: "TypeScript nədir, TypeScript və JavaScript, TypeScript fərqi",
      },
      {
        title: "What is TypeScript? How it differs from JavaScript — Nibras Code",
        description: "What TypeScript adds, and how it differs from JavaScript.",
        keywords: "what is TypeScript, TypeScript vs JavaScript, TypeScript difference",
      },
      {
        title: "TypeScript nedir? JavaScript'ten farkı — Nibras Code",
        description: "TypeScript nedir ve JavaScript'ten farkı nedir.",
        keywords: "TypeScript nedir, TypeScript JavaScript farkı, TypeScript programlama",
      },
      {
        title: "ما هو TypeScript؟ اختلافه عن JavaScript — Nibras Code",
        description: "ما هو TypeScript وبماذا يختلف عن JavaScript.",
        keywords: "ما هو TypeScript, الفرق بين TypeScript وJavaScript",
      },
      {
        title: "Что такое TypeScript? Отличие от JavaScript — Nibras Code",
        description: "Что такое TypeScript и чем он отличается от JavaScript.",
        keywords: "что такое TypeScript, TypeScript и JavaScript, отличие TypeScript",
      },
    ),
  },
  {
    slug: "html-css",
    title: "HTML və CSS nədir?",
    seo: seo(
      {
        title: "HTML və CSS nədir? — Nibras Code",
        description: "HTML və CSS: səhifənin quruluşu və görünüşü.",
        keywords: "HTML nədir, CSS nədir, HTML və CSS",
      },
      {
        title: "What are HTML and CSS? — Nibras Code",
        description: "HTML and CSS: the structure of a page and how it looks.",
        keywords: "what is HTML, what is CSS, HTML and CSS",
      },
      {
        title: "HTML ve CSS nedir? — Nibras Code",
        description: "HTML ve CSS: sayfanın yapısı ve görünümü.",
        keywords: "HTML nedir, CSS nedir, HTML ve CSS",
      },
      {
        title: "ما هما HTML وCSS؟ — Nibras Code",
        description: "HTML وCSS: بنية الصفحة ومظهرها.",
        keywords: "ما هو HTML, ما هو CSS, HTML وCSS",
      },
      {
        title: "Что такое HTML и CSS? — Nibras Code",
        description: "HTML и CSS: структура страницы и её вид.",
        keywords: "что такое HTML, что такое CSS, HTML и CSS",
      },
    ),
  },
  {
    slug: "sql",
    title: "SQL nədir?",
    seo: seo(
      {
        title: "SQL nədir? — Nibras Code",
        description: "SQL: məlumatla sorğu və işləmə dili.",
        keywords: "SQL nədir, SQL sorğu, SQL verilənlər bazası",
      },
      {
        title: "What is SQL? — Nibras Code",
        description: "SQL is the language used to query and work with data.",
        keywords: "what is SQL, SQL query, SQL database",
      },
      {
        title: "SQL nedir? — Nibras Code",
        description: "SQL, verilerle sorgu ve işlem dilidir.",
        keywords: "SQL nedir, SQL sorgu, SQL veritabanı",
      },
      {
        title: "ما هو SQL؟ — Nibras Code",
        description: "SQL لغة للاستعلام عن البيانات والتعامل معها.",
        keywords: "ما هو SQL, استعلام SQL, قاعدة بيانات SQL",
      },
      {
        title: "Что такое SQL? — Nibras Code",
        description: "SQL — язык запросов и работы с данными.",
        keywords: "что такое SQL, запрос SQL, база данных SQL",
      },
    ),
  },
] as const;

export function findProgramming(slug: string) {
  return PROGRAMMING.find((page) => page.slug === slug) ?? null;
}

export { javascriptSections };

