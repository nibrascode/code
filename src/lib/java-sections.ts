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

const BODIES: Record<Lang, Record<(typeof ORDER)[number], readonly ProgrammingBlock[]>> = {
  az: AZ,
  en: {
    "what-is-java": [
      {
        paragraphs: [
          "Java is a widely used, object-oriented programming language that is not tied to a single operating system. It is used to build web systems, enterprise software, server applications, and programs for different platforms. Its relatively clear syntax and large ecosystem make it useful for both beginners and professional developers.",
          "Java is a high-level, object-oriented language. First released in 1995, it is known for the idea of “write once, run anywhere.” Java programs can run on different operating systems through the Java Virtual Machine (JVM).",
          "Java has a large set of libraries and tools, and it is used in large software projects.",
        ],
      },
    ],
    "what-is-java-used-for": [
      {
        paragraphs: ["Java is used in many areas:"],
        list: [
          "Backend and server programming",
          "Enterprise management systems",
          "Web applications and APIs",
          "Android applications",
          "Desktop programs",
          "Banking and finance systems",
          "Cloud services",
          "Large-scale data systems",
        ],
      },
      {
        paragraphs: [
          "Java has long been used in Android development. Today, many Android apps are also built with Kotlin.",
        ],
      },
    ],
    "what-can-you-do-with-java": [
      {
        paragraphs: ["Java can be used to build many kinds of programs:"],
        list: [
          "The server side of websites",
          "Mobile applications",
          "Management and business systems",
          "Programs that work with databases",
          "Desktop applications",
          "Network programs",
          "Games and educational projects",
          "Automation tools",
        ],
      },
      {
        heading: "A simple example",
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Nibras Code!");
    }
}`,
        after: ["This program prints a greeting to the console."],
      },
    ],
    "is-java-hard-to-learn": [
      {
        paragraphs: [
          "You can start learning Java, but understanding its object-oriented structure and some of its concepts takes time and practice.",
          "These topics are useful at the beginning:",
        ],
        ordered: true,
        list: [
          "Variables and data types",
          "Conditional statements",
          "Loops",
          "Methods",
          "Arrays",
          "Objects and classes",
          "Object-oriented programming",
          "Exception handling",
          "Collections",
          "Working with files and databases",
        ],
      },
      {
        paragraphs: ["Regular practice and small projects can make the learning process easier."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Advantages",
        list: [
          "It can run on different operating systems",
          "It supports object-oriented programming",
          "It has a large library and framework ecosystem",
          "It is used in large software projects",
          "It has a strong developer community",
          "It offers tools suited to large systems",
        ],
      },
      {
        heading: "Disadvantages",
        list: [
          "The code can be long for some simple tasks",
          "Running on the JVM can require extra memory",
          "Object-oriented ideas can look difficult to beginners",
          "A faster or lighter alternative may fit some applications better",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: [
          "Java programs are usually written inside classes. The starting point of a program is the \"main\" method.",
        ],
      },
      {
        heading: "Variables",
        code: `String name = "Ali";
int age = 20;`,
      },
      {
        heading: "Condition",
        code: `if (age >= 18) {
    System.out.println("Adult");
}`,
      },
      {
        heading: "Loop",
        code: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
      },
      {
        heading: "Method",
        code: `public static int add(int a, int b) {
    return a + b;
}`,
      },
    ],
    "code-examples": [
      {
        heading: "A greeting",
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}`,
      },
      {
        heading: "The sum of two numbers",
        code: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        System.out.println(a + b);
    }
}`,
      },
      {
        heading: "A condition",
        code: `public class Main {
    public static void main(String[] args) {
        int number = 10;

        if (number > 0) {
            System.out.println("Positive number");
        }
    }
}`,
      },
    ],
    faq: [
      {
        heading: "What is Java?",
        paragraphs: ["Java is an object-oriented programming language that can run on different platforms."],
      },
      {
        heading: "Is Java free?",
        paragraphs: [
          "Free and open-source implementations such as OpenJDK are available. The terms depend on the specific Java distribution.",
        ],
      },
      {
        heading: "Can Java be used to build mobile apps?",
        paragraphs: ["Yes. Java can be used to build Android applications."],
      },
      {
        heading: "Can Java be used to build a website?",
        paragraphs: ["Yes. Java is used to create server-side web applications and APIs."],
      },
      {
        heading: "Do I need to know programming before learning Java?",
        paragraphs: ["No. Java can be learned from the beginning."],
      },
      {
        heading: "Are Java and JavaScript the same language?",
        paragraphs: ["No. The names are similar, but Java and JavaScript are different programming languages."],
      },
      {
        heading: "Which operating systems does Java run on?",
        paragraphs: [
          "When a suitable Java environment is installed, Java programs can run on systems such as Windows, Linux, and macOS.",
        ],
      },
    ],
  },
  tr: {
    "what-is-java": [
      {
        paragraphs: [
          "Java, tek bir işletim sistemine bağlı olmayan, yaygın kullanılan ve nesne yönelimli bir programlama dilidir. Web sistemleri, kurumsal yazılımlar, sunucu uygulamaları ve farklı platformlar için programlar geliştirmede kullanılır. Görece sade sözdizimi ve geniş ekosistemi, hem yeni başlayanlar hem de profesyonel geliştiriciler için yararlıdır.",
          "Java, yüksek seviyeli ve nesne yönelimli bir dildir. İlk kez 1995'te tanıtılan Java, “bir kez yaz, her yerde çalıştır” yaklaşımıyla bilinir. Java programları, Java Virtual Machine (JVM) sayesinde farklı işletim sistemlerinde çalışabilir.",
          "Java'nın geniş bir kütüphane ve araç seti vardır ve büyük yazılım projelerinde kullanılır.",
        ],
      },
    ],
    "what-is-java-used-for": [
      {
        paragraphs: ["Java birçok alanda kullanılır:"],
        list: [
          "Backend ve sunucu programlama",
          "Kurumsal yönetim sistemleri",
          "Web uygulamaları ve API'ler",
          "Android uygulamaları",
          "Masaüstü programlar",
          "Banka ve finans sistemleri",
          "Bulut hizmetleri",
          "Büyük ölçekli veri sistemleri",
        ],
      },
      {
        paragraphs: [
          "Java, Android geliştirmede uzun süredir kullanılır. Günümüzde birçok Android uygulaması Kotlin ile de geliştirilir.",
        ],
      },
    ],
    "what-can-you-do-with-java": [
      {
        paragraphs: ["Java ile farklı türde programlar hazırlanabilir:"],
        list: [
          "Web sitelerinin sunucu tarafı",
          "Mobil uygulamalar",
          "Yönetim ve iş sistemleri",
          "Veritabanıyla çalışan programlar",
          "Masaüstü uygulamalar",
          "Ağ programları",
          "Oyunlar ve eğitim projeleri",
          "Otomasyon araçları",
        ],
      },
      {
        heading: "Basit örnek",
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Merhaba, Nibras Code!");
    }
}`,
        after: ["Bu program konsola bir selamlama yazar."],
      },
    ],
    "is-java-hard-to-learn": [
      {
        paragraphs: [
          "Java öğrenmeye başlamak mümkündür. Ancak nesne yönelimli yapısını ve bazı kavramlarını kavramak zaman ve pratik ister.",
          "Başlangıç için şu konular faydalıdır:",
        ],
        ordered: true,
        list: [
          "Değişkenler ve veri türleri",
          "Koşul ifadeleri",
          "Döngüler",
          "Metotlar",
          "Diziler",
          "Nesneler ve sınıflar",
          "Nesne yönelimli programlama",
          "İstisnaların yönetimi",
          "Koleksiyonlar",
          "Dosyalar ve veritabanlarıyla çalışma",
        ],
      },
      {
        paragraphs: ["Düzenli pratik ve küçük projeler öğrenmeyi kolaylaştırabilir."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Avantajları",
        list: [
          "Farklı işletim sistemlerinde çalışabilir",
          "Nesne yönelimli programlamayı destekler",
          "Geniş bir kütüphane ve framework ekosistemi vardır",
          "Büyük yazılım projelerinde kullanılır",
          "Güçlü bir geliştirici topluluğu vardır",
          "Büyük sistemler için uygun araçlar sunar",
        ],
      },
      {
        heading: "Dezavantajları",
        list: [
          "Bazı basit işler için kod uzun olabilir",
          "JVM'in çalışması ek bellek gerektirebilir",
          "Nesne yönelimli kavramlar yeni başlayanlara zor görünebilir",
          "Bazı uygulamalarda daha hızlı veya daha hafif bir alternatif daha uygun olabilir",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: [
          "Java'da programlar genellikle sınıfların içinde yazılır. Programın başlangıç noktası \"main\" metodudur.",
        ],
      },
      {
        heading: "Değişkenler",
        code: `String name = "Ali";
int age = 20;`,
      },
      {
        heading: "Koşul",
        code: `if (age >= 18) {
    System.out.println("Yetişkin");
}`,
      },
      {
        heading: "Döngü",
        code: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
      },
      {
        heading: "Metot",
        code: `public static int add(int a, int b) {
    return a + b;
}`,
      },
    ],
    "code-examples": [
      {
        heading: "Selamlama",
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Merhaba dünya!");
    }
}`,
      },
      {
        heading: "İki sayının toplamı",
        code: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        System.out.println(a + b);
    }
}`,
      },
      {
        heading: "Koşul örneği",
        code: `public class Main {
    public static void main(String[] args) {
        int number = 10;

        if (number > 0) {
            System.out.println("Pozitif sayı");
        }
    }
}`,
      },
    ],
    faq: [
      {
        heading: "Java nedir?",
        paragraphs: ["Java, farklı platformlarda çalışabilen nesne yönelimli bir programlama dilidir."],
      },
      {
        heading: "Java ücretsiz mi?",
        paragraphs: [
          "OpenJDK gibi ücretsiz ve açık kaynaklı Java dağıtımları vardır. Kullanım koşulları seçilen dağıtıma bağlıdır.",
        ],
      },
      {
        heading: "Java ile mobil uygulama yapılabilir mi?",
        paragraphs: ["Evet. Java, Android uygulamaları geliştirmek için kullanılabilir."],
      },
      {
        heading: "Java ile web sitesi yapılabilir mi?",
        paragraphs: ["Evet. Java, sunucu tarafı web uygulamaları ve API'ler oluşturmak için kullanılır."],
      },
      {
        heading: "Java öğrenmek için önceden programlama bilmek gerekir mi?",
        paragraphs: ["Hayır. Java'yı sıfırdan öğrenmek mümkündür."],
      },
      {
        heading: "Java ve JavaScript aynı dil midir?",
        paragraphs: ["Hayır. Adları benzesin, Java ve JavaScript farklı programlama dilleridir."],
      },
      {
        heading: "Java hangi işletim sistemlerinde çalışır?",
        paragraphs: [
          "Uygun bir Java ortamı kurulduğunda Java programları Windows, Linux ve macOS gibi sistemlerde çalışabilir.",
        ],
      },
    ],
  },
  ar: {
    "what-is-java": [
      {
        paragraphs: [
          "جافا لغة برمجة واسعة الاستخدام، كائنية التوجه، وغير مرتبطة بنظام تشغيل واحد. تُستخدم لبناء أنظمة الويب والبرمجيات المؤسسية وتطبيقات الخادم وبرامج لمنصات مختلفة. يجعلها تركيبها الواضح نسبيًا ونظامها الواسع مفيدة للمبتدئين وللمبرمجين المحترفين.",
          "جافا لغة عالية المستوى وكائنية التوجه. ظهرت أول مرة عام 1995، وتُعرف بفكرة «اكتب مرة واحدة وشغّل في كل مكان». يمكن لبرامج جافا أن تعمل على أنظمة تشغيل مختلفة عبر آلة جافا الافتراضية (JVM).",
          "تمتلك جافا مجموعة كبيرة من المكتبات والأدوات، وتُستخدم في مشاريع البرمجيات الكبيرة.",
        ],
      },
    ],
    "what-is-java-used-for": [
      {
        paragraphs: ["تُستخدم جافا في مجالات كثيرة:"],
        list: [
          "برمجة الواجهة الخلفية والخوادم",
          "أنظمة الإدارة المؤسسية",
          "تطبيقات الويب وواجهات API",
          "تطبيقات أندرويد",
          "برامج سطح المكتب",
          "أنظمة البنوك والمالية",
          "الخدمات السحابية",
          "أنظمة البيانات كبيرة الحجم",
        ],
      },
      {
        paragraphs: [
          "استُخدمت جافا طويلًا في تطوير أندرويد. واليوم تُبنى كثير من تطبيقات أندرويد أيضًا بلغة Kotlin.",
        ],
      },
    ],
    "what-can-you-do-with-java": [
      {
        paragraphs: ["يمكن باستخدام جافا إعداد أنواع مختلفة من البرامج:"],
        list: [
          "الجزء الخلفي من مواقع الويب",
          "تطبيقات الهاتف",
          "أنظمة الإدارة والأعمال",
          "برامج تعمل مع قواعد البيانات",
          "تطبيقات سطح المكتب",
          "برامج الشبكات",
          "الألعاب والمشاريع التعليمية",
          "أدوات الأتمتة",
        ],
      },
      {
        heading: "مثال بسيط",
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("مرحبًا، Nibras Code!");
    }
}`,
        after: ["يعرض هذا البرنامج رسالة ترحيب في وحدة التحكم."],
      },
    ],
    "is-java-hard-to-learn": [
      {
        paragraphs: [
          "يمكن البدء بتعلم جافا، لكن فهم بنيتها الكائنية وبعض مفاهيمها يحتاج إلى وقت وممارسة.",
          "هذه الموضوعات مفيدة في البداية:",
        ],
        ordered: true,
        list: [
          "المتغيرات وأنواع البيانات",
          "الشروط",
          "الحلقات",
          "الدوال",
          "المصفوفات",
          "الكائنات والأصناف",
          "البرمجة كائنية التوجه",
          "معالجة الاستثناءات",
          "المجموعات",
          "العمل مع الملفات وقواعد البيانات",
        ],
      },
      {
        paragraphs: ["الممارسة المنتظمة والمشاريع الصغيرة قد تسهّل التعلم."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "المزايا",
        list: [
          "تعمل على أنظمة تشغيل مختلفة",
          "تدعم البرمجة كائنية التوجه",
          "لديها منظومة واسعة من المكتبات وأطر العمل",
          "تُستخدم في مشاريع البرمجيات الكبيرة",
          "لديها مجتمع مطورين قوي",
          "تقدّم أدوات مناسبة للأنظمة الكبيرة",
        ],
      },
      {
        heading: "العيوب",
        list: [
          "قد يطول الكود في بعض المهام البسيطة",
          "قد يحتاج تشغيل JVM إلى ذاكرة إضافية",
          "قد تبدو المفاهيم الكائنية صعبة على المبتدئين",
          "قد يناسب بعض التطبيقات بديل أسرع أو أخف",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: ["تُكتب برامج جافا عادة داخل الأصناف. نقطة بداية البرنامج هي الدالة \"main\"."],
      },
      {
        heading: "المتغيرات",
        code: `String name = "Ali";
int age = 20;`,
      },
      {
        heading: "الشرط",
        code: `if (age >= 18) {
    System.out.println("بالغ");
}`,
      },
      {
        heading: "الحلقة",
        code: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
      },
      {
        heading: "الدالة",
        code: `public static int add(int a, int b) {
    return a + b;
}`,
      },
    ],
    "code-examples": [
      {
        heading: "رسالة ترحيب",
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("مرحبًا بالعالم!");
    }
}`,
      },
      {
        heading: "جمع عددين",
        code: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        System.out.println(a + b);
    }
}`,
      },
      {
        heading: "مثال على شرط",
        code: `public class Main {
    public static void main(String[] args) {
        int number = 10;

        if (number > 0) {
            System.out.println("عدد موجب");
        }
    }
}`,
      },
    ],
    faq: [
      {
        heading: "ما هي Java؟",
        paragraphs: ["جافا لغة برمجة كائنية التوجه يمكنها العمل على منصات مختلفة."],
      },
      {
        heading: "هل Java مجانية؟",
        paragraphs: ["توجد توزيعات مجانية ومفتوحة المصدر مثل OpenJDK. شروط الاستخدام تعتمد على التوزيعة المختارة."],
      },
      {
        heading: "هل يمكن إنشاء تطبيقات الهاتف باستخدام Java؟",
        paragraphs: ["نعم. يمكن استخدام جافا لتطوير تطبيقات أندرويد."],
      },
      {
        heading: "هل يمكن إنشاء موقع باستخدام Java؟",
        paragraphs: ["نعم. تُستخدم جافا لإنشاء تطبيقات الويب من جهة الخادم وواجهات API."],
      },
      {
        heading: "هل يلزم معرفة البرمجة قبل تعلم Java؟",
        paragraphs: ["لا. يمكن تعلم جافا من البداية."],
      },
      {
        heading: "هل Java وJavaScript لغة واحدة؟",
        paragraphs: ["لا. الاسم متشابه، لكن جافا وجافاسكريبت لغتا برمجة مختلفتان."],
      },
      {
        heading: "على أي أنظمة تعمل Java؟",
        paragraphs: ["عند تثبيت بيئة جافا المناسبة يمكن للبرامج أن تعمل على أنظمة مثل Windows وLinux وmacOS."],
      },
    ],
  },
  ru: {
    "what-is-java": [
      {
        paragraphs: [
          "Java — широко используемый объектно-ориентированный язык программирования, не привязанный к одной операционной системе. Его применяют для веб-систем, корпоративных программ, серверных приложений и программ для разных платформ. Относительно понятный синтаксис и большая экосистема делают его полезным и для начинающих, и для профессиональных разработчиков.",
          "Java — высокоуровневый объектно-ориентированный язык. Впервые представленный в 1995 году, он известен принципом «напиши один раз — запускай везде». Программы на Java могут работать в разных операционных системах через виртуальную машину Java (JVM).",
          "У Java большой набор библиотек и инструментов, и язык используют в крупных программных проектах.",
        ],
      },
    ],
    "what-is-java-used-for": [
      {
        paragraphs: ["Java применяют во многих областях:"],
        list: [
          "Серверная и backend-разработка",
          "Корпоративные системы управления",
          "Веб-приложения и API",
          "Приложения Android",
          "Настольные программы",
          "Банковские и финансовые системы",
          "Облачные сервисы",
          "Системы для больших объёмов данных",
        ],
      },
      {
        paragraphs: [
          "Java давно используют в разработке под Android. Сегодня многие приложения Android также создают на Kotlin.",
        ],
      },
    ],
    "what-can-you-do-with-java": [
      {
        paragraphs: ["На Java можно создавать разные виды программ:"],
        list: [
          "Серверную часть сайтов",
          "Мобильные приложения",
          "Системы управления и бизнес-программы",
          "Программы, работающие с базами данных",
          "Настольные приложения",
          "Сетевые программы",
          "Игры и учебные проекты",
          "Инструменты автоматизации",
        ],
      },
      {
        heading: "Простой пример",
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Здравствуйте, Nibras Code!");
    }
}`,
        after: ["Эта программа выводит приветствие в консоль."],
      },
    ],
    "is-java-hard-to-learn": [
      {
        paragraphs: [
          "Начать изучение Java можно, но чтобы понять её объектно-ориентированное устройство и некоторые понятия, нужны время и практика.",
          "В начале полезны такие темы:",
        ],
        ordered: true,
        list: [
          "Переменные и типы данных",
          "Условия",
          "Циклы",
          "Методы",
          "Массивы",
          "Объекты и классы",
          "Объектно-ориентированное программирование",
          "Обработка исключений",
          "Коллекции",
          "Работа с файлами и базами данных",
        ],
      },
      {
        paragraphs: ["Регулярная практика и небольшие проекты могут облегчить обучение."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Преимущества",
        list: [
          "Работает в разных операционных системах",
          "Поддерживает объектно-ориентированное программирование",
          "Имеет большую экосистему библиотек и фреймворков",
          "Используется в крупных программных проектах",
          "Имеет сильное сообщество разработчиков",
          "Предлагает инструменты для больших систем",
        ],
      },
      {
        heading: "Недостатки",
        list: [
          "Для некоторых простых задач код может быть длинным",
          "Работа JVM может требовать дополнительной памяти",
          "Объектно-ориентированные понятия могут казаться сложными новичкам",
          "Для части задач может лучше подойти более быстрая или лёгкая альтернатива",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: [
          "Программы на Java обычно пишут внутри классов. Точка входа программы — метод \"main\".",
        ],
      },
      {
        heading: "Переменные",
        code: `String name = "Ali";
int age = 20;`,
      },
      {
        heading: "Условие",
        code: `if (age >= 18) {
    System.out.println("Совершеннолетний");
}`,
      },
      {
        heading: "Цикл",
        code: `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
      },
      {
        heading: "Метод",
        code: `public static int add(int a, int b) {
    return a + b;
}`,
      },
    ],
    "code-examples": [
      {
        heading: "Приветствие",
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Здравствуй, мир!");
    }
}`,
      },
      {
        heading: "Сумма двух чисел",
        code: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        System.out.println(a + b);
    }
}`,
      },
      {
        heading: "Пример условия",
        code: `public class Main {
    public static void main(String[] args) {
        int number = 10;

        if (number > 0) {
            System.out.println("Положительное число");
        }
    }
}`,
      },
    ],
    faq: [
      {
        heading: "Что такое Java?",
        paragraphs: ["Java — объектно-ориентированный язык программирования, который может работать на разных платформах."],
      },
      {
        heading: "Java бесплатная?",
        paragraphs: [
          "Существуют бесплатные реализации с открытым кодом, например OpenJDK. Условия зависят от конкретного дистрибутива Java.",
        ],
      },
      {
        heading: "Можно ли создавать мобильные приложения на Java?",
        paragraphs: ["Да. Java можно использовать для разработки приложений Android."],
      },
      {
        heading: "Можно ли создать сайт на Java?",
        paragraphs: ["Да. Java используют для серверных веб-приложений и API."],
      },
      {
        heading: "Нужно ли знать программирование до изучения Java?",
        paragraphs: ["Нет. Java можно изучать с нуля."],
      },
      {
        heading: "Java и JavaScript — это один язык?",
        paragraphs: ["Нет. Названия похожи, но Java и JavaScript — разные языки программирования."],
      },
      {
        heading: "В каких операционных системах работает Java?",
        paragraphs: [
          "Если установлена подходящая среда Java, программы могут работать в Windows, Linux и macOS.",
        ],
      },
    ],
  },
};

export function javaSections(lang: Lang): readonly ProgrammingSection[] {
  return ORDER.map((id) => ({
    id,
    title: TITLES[id][lang],
    blocks: BODIES[lang][id],
  }));
}
