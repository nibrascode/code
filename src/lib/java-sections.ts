import type { Lang } from "@/lib/i18n";
import type { ProgrammingBlock, ProgrammingSection } from "@/lib/programming";

const TITLES: Record<string, Record<Lang, string>> = {
  "what-is-java": {
    az: "Java nədir?",
    en: "What Is Java?",
    tr: "Java nedir?",
    ar: "ما هي لغة Java؟",
    ru: "Что такое Java?",
  },
  "what-is-java-used-for": {
    az: "Java nə üçün istifadə olunur?",
    en: "What Is Java Used For?",
    tr: "Java ne için kullanılır?",
    ar: "فيما تُستخدم لغة Java؟",
    ru: "Для чего используется Java?",
  },
  "what-can-you-do-with-java": {
    az: "Java ilə nələr etmək olar?",
    en: "What Can You Do with Java?",
    tr: "Java ile neler yapılabilir?",
    ar: "ماذا يمكن فعله بلغة Java؟",
    ru: "Что можно делать с Java?",
  },
  "is-java-hard-to-learn": {
    az: "Java öyrənmək çətindirmi?",
    en: "Is Java Difficult to Learn?",
    tr: "Java öğrenmek zor mu?",
    ar: "هل تعلّم Java صعب؟",
    ru: "Сложно ли изучать Java?",
  },
  "advantages-and-disadvantages": {
    az: "Java-nın üstünlükləri və çatışmazlıqları",
    en: "Advantages and Disadvantages of Java",
    tr: "Java'nın avantajları ve dezavantajları",
    ar: "مزايا وعيوب Java",
    ru: "Преимущества и недостатки Java",
  },
  "syntax-and-basic-concepts": {
    az: "Java sintaksisi və əsas anlayışlar",
    en: "Java Syntax and Basic Concepts",
    tr: "Java sözdizimi ve temel kavramlar",
    ar: "قواعد Java والمفاهيم الأساسية",
    ru: "Синтаксис Java и основные понятия",
  },
  "code-examples": {
    az: "Java kod nümunələri",
    en: "Java Code Examples",
    tr: "Java kod örnekleri",
    ar: "أمثلة على أكواد Java",
    ru: "Примеры кода Java",
  },
  faq: {
    az: "Java haqqında tez-tez verilən suallar",
    en: "Frequently Asked Questions About Java",
    tr: "Java hakkında sık sorulan sorular",
    ar: "الأسئلة الشائعة حول Java",
    ru: "Часто задаваемые вопросы о Java",
  },
};

const ORDER = [
  "what-is-java",
  "what-is-java-used-for",
  "what-can-you-do-with-java",
  "is-java-hard-to-learn",
  "advantages-and-disadvantages",
  "syntax-and-basic-concepts",
  "code-examples",
  "faq",
] as const;

const AZ: Record<(typeof ORDER)[number], readonly ProgrammingBlock[]> = {
  "what-is-java": [
    {
      paragraphs: [
        "Java dünyada geniş istifadə olunan, obyekt yönümlü və platformadan asılı olmayan proqramlaşdırma dilidir. Java əsasən veb sistemlərin, korporativ proqramların, server tətbiqlərinin və müxtəlif platformalar üçün proqram təminatının hazırlanmasında istifadə olunur. Sadə sintaksisi və geniş ekosistemi onu həm yeni başlayanlar, həm də peşəkar proqramçılar üçün faydalı edir.",
        "Java yüksək səviyyəli, obyekt yönümlü proqramlaşdırma dilidir. İlk dəfə 1995-ci ildə təqdim edilən Java, “bir dəfə yaz, hər yerdə işlət” yanaşması ilə tanınır. Java proqramları Java Virtual Machine (JVM) vasitəsilə müxtəlif əməliyyat sistemlərində işləyə bilər.",
        "Java geniş kitabxana və alətlərə malikdir və böyük proqram təminatı layihələrində istifadə olunur.",
      ],
    },
  ],
  "what-is-java-used-for": [
    {
      paragraphs: ["Java müxtəlif sahələrdə tətbiq edilir:"],
      list: [
        "Backend və server proqramlaşdırması",
        "Korporativ idarəetmə sistemləri",
        "Veb tətbiqlər və API-lər",
        "Android tətbiqləri",
        "Masaüstü proqramlar",
        "Bank və maliyyə sistemləri",
        "Bulud əsaslı xidmətlər",
        "Böyük həcmli məlumat sistemləri",
      ],
    },
    {
      paragraphs: [
        "Java Android proqramlaşdırmasında uzun müddətdir istifadə olunur. Hazırda Android tətbiqləri Kotlin ilə də geniş şəkildə hazırlanır.",
      ],
    },
  ],
  "what-can-you-do-with-java": [
    {
      paragraphs: ["Java vasitəsilə müxtəlif növ proqramlar hazırlamaq mümkündür:"],
      list: [
        "Veb saytların server tərəfi",
        "Mobil tətbiqlər",
        "İdarəetmə və biznes sistemləri",
        "Məlumat bazası ilə işləyən proqramlar",
        "Masaüstü tətbiqlər",
        "Şəbəkə proqramları",
        "Oyunlar və təhsil layihələri",
        "Avtomatlaşdırma alətləri",
      ],
    },
    {
      heading: "Sadə nümunə",
      code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Salam, Nibras Code!");
    }
}`,
      after: ["Bu proqram konsola salam mesajı çıxarır."],
    },
  ],
  "is-java-hard-to-learn": [
    {
      paragraphs: [
        "Java öyrənməyə başlamaq mümkündür, lakin onun obyekt yönümlü quruluşunu və bəzi anlayışlarını mənimsəmək vaxt və praktika tələb edir.",
        "Başlanğıc üçün aşağıdakı mövzuları öyrənmək faydalıdır:",
      ],
      ordered: true,
      list: [
        "Dəyişənlər və məlumat tipləri",
        "Şərt operatorları",
        "Dövrlər",
        "Metodlar",
        "Massivlər",
        "Obyektlər və siniflər",
        "Obyekt yönümlü proqramlaşdırma",
        "İstisnaların idarə edilməsi",
        "Kolleksiyalar",
        "Fayllar və verilənlər bazaları ilə iş",
      ],
    },
    {
      paragraphs: ["Daimi məşq və kiçik layihələr hazırlamaq öyrənmə prosesini asanlaşdıra bilər."],
    },
  ],
  "advantages-and-disadvantages": [
    {
      heading: "Üstünlükləri",
      list: [
        "Müxtəlif əməliyyat sistemlərində işləyə bilir",
        "Obyekt yönümlü proqramlaşdırmanı dəstəkləyir",
        "Geniş kitabxana və framework ekosisteminə malikdir",
        "Böyük proqram təminatı layihələrində istifadə olunur",
        "Güclü inkişaf etdirici icması mövcuddur",
        "Böyük sistemlər üçün uyğun alətlər təqdim edir",
      ],
    },
    {
      heading: "Çatışmazlıqları",
      list: [
        "Bəzi sadə tapşırıqlar üçün kodu uzun ola bilər",
        "JVM-in işləməsi əlavə yaddaş resursları tələb edə bilər",
        "Obyekt yönümlü anlayışlar yeni başlayanlar üçün çətin görünə bilər",
        "Bəzi tətbiqlərdə daha sürətli və yüngül alternativlər uyğun ola bilər",
      ],
    },
  ],
  "syntax-and-basic-concepts": [
    {
      paragraphs: [
        "Java-da proqramlar adətən siniflər daxilində yazılır. Proqramın başlanğıc nöqtəsi \"main\" metodudur.",
      ],
    },
    {
      heading: "Dəyişənlər",
      code: `String name = "Ali";
int age = 20;`,
    },
    {
      heading: "Şərt",
      code: `if (age >= 18) {
    System.out.println("Yetkin");
}`,
    },
    {
      heading: "Dövr",
      code: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
    },
    {
      heading: "Metod",
      code: `public static int add(int a, int b) {
    return a + b;
}`,
    },
  ],
  "code-examples": [
    {
      heading: "Salam mesajı",
      code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Salam, dünya!");
    }
}`,
    },
    {
      heading: "İki ədədin cəmi",
      code: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        System.out.println(a + b);
    }
}`,
    },
    {
      heading: "Şərt nümunəsi",
      code: `public class Main {
    public static void main(String[] args) {
        int number = 10;

        if (number > 0) {
            System.out.println("Müsbət ədəddir");
        }
    }
}`,
    },
  ],
  faq: [
    {
      heading: "Java nədir?",
      paragraphs: ["Java müxtəlif platformalarda işləyə bilən, obyekt yönümlü proqramlaşdırma dilidir."],
    },
    {
      heading: "Java pulsuzdur?",
      paragraphs: [
        "Java-nın OpenJDK kimi pulsuz və açıq mənbəli tətbiqləri mövcuddur. İstifadə şərtləri konkret Java paylanmasından asılıdır.",
      ],
    },
    {
      heading: "Java ilə mobil tətbiq hazırlamaq olar?",
      paragraphs: ["Bəli. Java Android tətbiqlərinin hazırlanmasında istifadə edilə bilər."],
    },
    {
      heading: "Java ilə veb sayt hazırlamaq mümkündürmü?",
      paragraphs: ["Bəli. Java server tərəfli veb tətbiqlər və API-lər yaratmaq üçün istifadə olunur."],
    },
    {
      heading: "Java öyrənmək üçün əvvəlcədən proqramlaşdırma bilmək lazımdırmı?",
      paragraphs: ["Xeyr. Java-nı sıfırdan öyrənmək mümkündür."],
    },
    {
      heading: "Java və JavaScript eyni dildirmi?",
      paragraphs: ["Xeyr. Adları oxşar olsa da, Java və JavaScript fərqli proqramlaşdırma dilləridir."],
    },
    {
      heading: "Java hansı əməliyyat sistemlərində işləyir?",
      paragraphs: [
        "Uyğun Java mühiti quraşdırıldıqda Java proqramları Windows, Linux və macOS kimi sistemlərdə işləyə bilər.",
      ],
    },
  ],
};

export function javaSections(lang: Lang): readonly ProgrammingSection[] {
  return ORDER.map((id) => ({
    id,
    title: TITLES[id][lang],
    blocks: lang === "az" ? AZ[id] : undefined,
  }));
}
