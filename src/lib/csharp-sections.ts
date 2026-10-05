import type { Lang } from "@/lib/i18n";
import type { ProgrammingBlock, ProgrammingSection } from "@/lib/programming";

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

const BODIES: Record<Lang, Record<(typeof ORDER)[number], readonly ProgrammingBlock[]>> = {
  az: {
    "what-is-csharp": [
      {
        paragraphs: [
          "C# Microsoft tərəfindən hazırlanmış, müasir və obyekt yönümlü proqramlaşdırma dilidir. Əsasən .NET platforması ilə birlikdə istifadə olunur. Windows proqramları, veb tətbiqlər, oyunlar və server xidmətləri C# ilə hazırlana bilər.",
          "C# yüksək səviyyəli dildir. Sintaksisi Java və C ailəsinə yaxındır, ona görə bu dillərdən birini bilən şəxs üçün oxumaq nisbətən asandır. Dil güclü tip yoxlaması ilə işləyir: dəyişənin tipi əvvəlcədən bəlli olur və bir çox səhv proqram işləməzdən əvvəl görünür.",
          "Bu gün C# yalnız Windows üçün deyil. .NET müxtəlif əməliyyat sistemlərində işləyə bilər. Unity mühərriki də oyun hazırlamaq üçün C#-dan geniş istifadə edir.",
        ],
      },
    ],
    "what-is-csharp-used-for": [
      {
        paragraphs: ["C# bir çox sahədə istifadə olunur:"],
        list: [
          "Windows və masaüstü proqramlar",
          "Veb saytların server tərəfi və API-lər",
          "Unity ilə oyun hazırlamaq",
          "Korporativ və biznes sistemləri",
          "Bulud xidmətləri",
          ".NET ilə mobil və çoxplatformalı tətbiqlər",
          "Masaüstü alətlər və avtomatlaşdırma",
        ],
      },
      {
        paragraphs: [
          "ASP.NET veb tətbiqlər üçün, Unity isə oyunlar üçün ən çox rast gəlinən C# mühitlərindəndir. Dilin özü bu sahələrlə məhdudlaşmır.",
        ],
      },
    ],
    "what-can-you-do-with-csharp": [
      {
        paragraphs: ["C# ilə müxtəlif proqramlar yazmaq olar:"],
        list: [
          "Veb tətbiqlər və API-lər",
          "Masaüstü proqramlar",
          "2D və 3D oyunlar",
          "Verilənlər bazası ilə işləyən sistemlər",
          "Şirkət daxili idarəetmə proqramları",
          "Kiçik konsol alətləri",
        ],
      },
      {
        heading: "Sadə nümunə",
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Salam, Nibras Code!");
    }
}`,
        after: ["Bu proqram konsola salam mesajı yazır."],
      },
    ],
    "is-csharp-hard-to-learn": [
      {
        paragraphs: [
          "C# öyrənməyə başlamaq olar. İlk proqramı yazmaq çətin deyil. Daha irəli getmək üçün tiplər, siniflər və obyekt yönümlü quruluşu anlamaq lazımdır.",
          "Başlanğıc üçün bu ardıcıllıq faydalıdır:",
        ],
        ordered: true,
        list: [
          "Dəyişənlər və tiplər",
          "Şərtlər və dövrlər",
          "Metodlar",
          "Massivlər və siyahılar",
          "Siniflər və obyektlər",
          "İnterfeyslər",
          "Xətaların idarə edilməsi",
          "Kiçik bir konsol və ya Unity layihəsi",
        ],
      },
      {
        paragraphs: ["Yaxşı nəticə oxumaqla yox, kiçik proqramlar yazmaqla gəlir."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Üstünlükləri",
        list: [
          "Aydın və ciddi tip sistemi var",
          ".NET kitabxanaları genişdir",
          "Windows, veb və Unity oyunlarında güclü dəstək var",
          "Müasir dil imkanları var: async, LINQ və generiklər",
          "Visual Studio kimi alətlərlə işləmək rahatdır",
          ".NET bir neçə əməliyyat sistemində işləyə bilir",
        ],
      },
      {
        heading: "Çatışmazlıqları",
        list: [
          "Çox qısa skriptlər üçün Python kimi dillər daha yüngül görünə bilər",
          "Obyekt yönümlü anlayışlar əvvəl çətin gələ bilər",
          "Bəzi nümunələr Microsoft alətlərinə bağlanır, bu da seçimi qarışdıra bilər",
          "Kiçik proqram üçün layihə quruluşu artıq görünə bilər",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: [
          "C# proqramı adətən bir sinif və Main metodu ilə başlayır. Main proqramın giriş nöqtəsidir.",
        ],
      },
      {
        heading: "Dəyişənlər",
        code: `string name = "Ali";
int age = 20;`,
      },
      {
        heading: "Şərt",
        code: `if (age >= 18)
{
    Console.WriteLine("Yetkin");
}`,
      },
      {
        heading: "Dövr",
        code: `for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}`,
      },
      {
        heading: "Metod",
        code: `static int Add(int a, int b)
{
    return a + b;
}`,
      },
    ],
    "code-examples": [
      {
        heading: "Salam mesajı",
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Salam, dünya!");
    }
}`,
      },
      {
        heading: "İki ədədin cəmi",
        code: `using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 20;
        Console.WriteLine(a + b);
    }
}`,
      },
      {
        heading: "Şərt nümunəsi",
        code: `using System;

class Program
{
    static void Main()
    {
        int number = 10;
        if (number > 0)
        {
            Console.WriteLine("Müsbət ədəddir");
        }
    }
}`,
      },
    ],
    faq: [
      {
        heading: "C# nədir?",
        paragraphs: ["C# .NET platformasında geniş istifadə olunan, obyekt yönümlü proqramlaşdırma dilidir."],
      },
      {
        heading: "C# pulsuzdur?",
        paragraphs: [
          ".NET SDK və C# kompilyatoru pulsuz istifadə edilə bilər. Visual Studio-nun da pulsuz Community buraxılışı var. Ayrı lisenziya şərtləri seçilən alətdən asılıdır.",
        ],
      },
      {
        heading: "C# ilə oyun yazmaq olar?",
        paragraphs: ["Bəli. Unity oyun mühərrikində əsas skript dili C#-dır."],
      },
      {
        heading: "C# yalnız Windows üçündürmü?",
        paragraphs: ["Xeyr. .NET Linux və macOS daxil olmaqla bir neçə sistemdə işləyə bilər. Windows proqramları isə onun güclü olduğu sahələrdən biridir."],
      },
      {
        heading: "C# ilə veb sayt hazırlamaq olar?",
        paragraphs: ["Bəli. ASP.NET ilə server tərəfi veb tətbiqlər və API-lər yazılır."],
      },
      {
        heading: "C# və C++ eyni dildirmi?",
        paragraphs: ["Xeyr. Adları yaxındır, amma C# və C++ fərqli dillərdir və fərqli məqsədlər üçün seçilir."],
      },
      {
        heading: "C# yeni başlayan üçün uyğundurmu?",
        paragraphs: ["Bəli, ilk dili kimi öyrənilə bilər. Tip və sinif anlayışlarını sakit-sakit məşq etmək lazımdır."],
      },
    ],
  },
  en: {
    "what-is-csharp": [
      {
        paragraphs: [
          "C# is a modern, object-oriented programming language from Microsoft. It is mainly used with the .NET platform. Windows programs, web applications, games, and server services can be built with C#.",
          "C# is a high-level language. Its syntax is close to Java and the C family, so it is relatively readable if you already know one of those languages. It uses strong type checking: a variable's type is known in advance, and many mistakes show up before the program runs.",
          "C# is no longer only for Windows. .NET can run on several operating systems. The Unity engine also uses C# widely for making games.",
        ],
      },
    ],
    "what-is-csharp-used-for": [
      {
        paragraphs: ["C# is used in many areas:"],
        list: [
          "Windows and desktop programs",
          "The server side of websites and APIs",
          "Games with Unity",
          "Enterprise and business systems",
          "Cloud services",
          "Mobile and cross-platform apps with .NET",
          "Desktop tools and automation",
        ],
      },
      {
        paragraphs: [
          "ASP.NET is a common choice for web applications, and Unity is a common choice for games. The language itself is not limited to those areas.",
        ],
      },
    ],
    "what-can-you-do-with-csharp": [
      {
        paragraphs: ["You can write many kinds of programs in C#:"],
        list: [
          "Web applications and APIs",
          "Desktop programs",
          "2D and 3D games",
          "Systems that work with databases",
          "Internal business software",
          "Small console tools",
        ],
      },
      {
        heading: "A simple example",
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, Nibras Code!");
    }
}`,
        after: ["This program writes a greeting to the console."],
      },
    ],
    "is-csharp-hard-to-learn": [
      {
        paragraphs: [
          "You can start learning C#. The first program is not hard. To go further, you need to understand types, classes, and the object-oriented structure.",
          "This order is useful at the beginning:",
        ],
        ordered: true,
        list: [
          "Variables and types",
          "Conditions and loops",
          "Methods",
          "Arrays and lists",
          "Classes and objects",
          "Interfaces",
          "Handling errors",
          "A small console or Unity project",
        ],
      },
      {
        paragraphs: ["Good progress comes from writing small programs, not only from reading."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Advantages",
        list: [
          "It has a clear and strict type system",
          "The .NET libraries are broad",
          "It is well supported for Windows, the web, and Unity games",
          "It has modern features such as async, LINQ, and generics",
          "Tools such as Visual Studio make the work comfortable",
          ".NET can run on more than one operating system",
        ],
      },
      {
        heading: "Disadvantages",
        list: [
          "For very short scripts, a language such as Python can feel lighter",
          "Object-oriented ideas can look difficult at first",
          "Some examples are tied to Microsoft tools, which can make the choice confusing",
          "The project structure can feel heavy for a tiny program",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: ["A C# program usually starts with a class and a Main method. Main is the entry point."],
      },
      { heading: "Variables", code: `string name = "Ali";\nint age = 20;` },
      {
        heading: "Condition",
        code: `if (age >= 18)
{
    Console.WriteLine("Adult");
}`,
      },
      {
        heading: "Loop",
        code: `for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}`,
      },
      {
        heading: "Method",
        code: `static int Add(int a, int b)
{
    return a + b;
}`,
      },
    ],
    "code-examples": [
      {
        heading: "A greeting",
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, world!");
    }
}`,
      },
      {
        heading: "The sum of two numbers",
        code: `using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 20;
        Console.WriteLine(a + b);
    }
}`,
      },
      {
        heading: "A condition",
        code: `using System;

class Program
{
    static void Main()
    {
        int number = 10;
        if (number > 0)
        {
            Console.WriteLine("Positive number");
        }
    }
}`,
      },
    ],
    faq: [
      {
        heading: "What is C#?",
        paragraphs: ["C# is an object-oriented programming language widely used on the .NET platform."],
      },
      {
        heading: "Is C# free?",
        paragraphs: [
          "The .NET SDK and the C# compiler can be used for free. Visual Studio also has a free Community edition. License terms depend on the tool you choose.",
        ],
      },
      {
        heading: "Can C# be used to make games?",
        paragraphs: ["Yes. C# is the main scripting language in the Unity game engine."],
      },
      {
        heading: "Is C# only for Windows?",
        paragraphs: ["No. .NET can run on several systems, including Linux and macOS. Windows applications are one of its strong areas."],
      },
      {
        heading: "Can C# be used to build a website?",
        paragraphs: ["Yes. ASP.NET is used to write server-side web applications and APIs."],
      },
      {
        heading: "Are C# and C++ the same language?",
        paragraphs: ["No. The names are close, but C# and C++ are different languages and are chosen for different jobs."],
      },
      {
        heading: "Is C# suitable for beginners?",
        paragraphs: ["Yes. It can be a first language. Types and classes need calm, repeated practice."],
      },
    ],
  },
  tr: {
    "what-is-csharp": [
      {
        paragraphs: [
          "C#, Microsoft tarafından geliştirilen modern ve nesne yönelimli bir programlama dilidir. Ağırlıklı olarak .NET platformuyla kullanılır. Windows programları, web uygulamaları, oyunlar ve sunucu hizmetleri C# ile hazırlanabilir.",
          "C# yüksek seviyeli bir dildir. Sözdizimi Java ve C ailesine yakındır. Bu yüzden o dillerden birini bilen kişi için okuması görece kolaydır. Güçlü tür denetimi kullanır: değişkenin türü önceden bellidir ve birçok hata program çalışmadan görünür.",
          "C# artık yalnızca Windows için değildir. .NET farklı işletim sistemlerinde çalışabilir. Unity motoru da oyun geliştirmek için C#'ı yaygın kullanır.",
        ],
      },
    ],
    "what-is-csharp-used-for": [
      {
        paragraphs: ["C# birçok alanda kullanılır:"],
        list: [
          "Windows ve masaüstü programlar",
          "Web sitelerinin sunucu tarafı ve API'ler",
          "Unity ile oyun geliştirme",
          "Kurumsal ve iş sistemleri",
          "Bulut hizmetleri",
          ".NET ile mobil ve çok platformlu uygulamalar",
          "Masaüstü araçlar ve otomasyon",
        ],
      },
      {
        paragraphs: [
          "ASP.NET web uygulamaları için, Unity ise oyunlar için sık görülen C# ortamlarındandır. Dil bu alanlarla sınırlı değildir.",
        ],
      },
    ],
    "what-can-you-do-with-csharp": [
      {
        paragraphs: ["C# ile çeşitli programlar yazılabilir:"],
        list: [
          "Web uygulamaları ve API'ler",
          "Masaüstü programlar",
          "2D ve 3D oyunlar",
          "Veritabanıyla çalışan sistemler",
          "Şirket içi yönetim yazılımları",
          "Küçük konsol araçları",
        ],
      },
      {
        heading: "Basit örnek",
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Merhaba, Nibras Code!");
    }
}`,
        after: ["Bu program konsola bir selamlama yazar."],
      },
    ],
    "is-csharp-hard-to-learn": [
      {
        paragraphs: [
          "C# öğrenmeye başlanabilir. İlk programı yazmak zor değildir. İlerlemek için türleri, sınıfları ve nesne yönelimli yapıyı anlamak gerekir.",
          "Başlangıç için şu sıra faydalıdır:",
        ],
        ordered: true,
        list: [
          "Değişkenler ve türler",
          "Koşullar ve döngüler",
          "Metotlar",
          "Diziler ve listeler",
          "Sınıflar ve nesneler",
          "Arayüzler",
          "Hataların yönetimi",
          "Küçük bir konsol veya Unity projesi",
        ],
      },
      {
        paragraphs: ["İyi sonuç yalnızca okumakla değil, küçük programlar yazmakla gelir."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Avantajları",
        list: [
          "Açık ve sıkı bir tür sistemi vardır",
          ".NET kütüphaneleri geniştir",
          "Windows, web ve Unity oyunlarında güçlü destek vardır",
          "async, LINQ ve generic gibi modern dil olanakları vardır",
          "Visual Studio gibi araçlarla çalışmak rahattır",
          ".NET birden fazla işletim sisteminde çalışabilir",
        ],
      },
      {
        heading: "Dezavantajları",
        list: [
          "Çok kısa betikler için Python gibi diller daha hafif gelebilir",
          "Nesne yönelimli kavramlar başta zor görünebilir",
          "Bazı örnekler Microsoft araçlarına bağlıdır, bu da seçimi karıştırabilir",
          "Küçük bir program için proje yapısı ağır gelebilir",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: ["Bir C# programı genellikle bir sınıf ve Main metodu ile başlar. Main, programın giriş noktasıdır."],
      },
      { heading: "Değişkenler", code: `string name = "Ali";\nint age = 20;` },
      {
        heading: "Koşul",
        code: `if (age >= 18)
{
    Console.WriteLine("Yetişkin");
}`,
      },
      {
        heading: "Döngü",
        code: `for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}`,
      },
      {
        heading: "Metot",
        code: `static int Add(int a, int b)
{
    return a + b;
}`,
      },
    ],
    "code-examples": [
      {
        heading: "Selamlama",
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Merhaba dünya!");
    }
}`,
      },
      {
        heading: "İki sayının toplamı",
        code: `using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 20;
        Console.WriteLine(a + b);
    }
}`,
      },
      {
        heading: "Koşul örneği",
        code: `using System;

class Program
{
    static void Main()
    {
        int number = 10;
        if (number > 0)
        {
            Console.WriteLine("Pozitif sayı");
        }
    }
}`,
      },
    ],
    faq: [
      {
        heading: "C# nedir?",
        paragraphs: ["C#, .NET platformunda yaygın kullanılan nesne yönelimli bir programlama dilidir."],
      },
      {
        heading: "C# ücretsiz mi?",
        paragraphs: [
          ".NET SDK ve C# derleyicisi ücretsiz kullanılabilir. Visual Studio'nun da ücretsiz Community sürümü vardır. Lisans koşulları seçilen araca bağlıdır.",
        ],
      },
      {
        heading: "C# ile oyun yazılır mı?",
        paragraphs: ["Evet. Unity oyun motorunda ana betik dili C#'tır."],
      },
      {
        heading: "C# yalnızca Windows için midir?",
        paragraphs: ["Hayır. .NET, Linux ve macOS dahil birkaç sistemde çalışabilir. Windows programları ise güçlü olduğu alanlardan biridir."],
      },
      {
        heading: "C# ile web sitesi yapılır mı?",
        paragraphs: ["Evet. ASP.NET ile sunucu tarafı web uygulamaları ve API'ler yazılır."],
      },
      {
        heading: "C# ve C++ aynı dil midir?",
        paragraphs: ["Hayır. Adları yakındır, ama C# ve C++ farklı dillerdir ve farklı işler için seçilir."],
      },
      {
        heading: "C# yeni başlayanlar için uygun mu?",
        paragraphs: ["Evet. İlk dil olarak öğrenilebilir. Tür ve sınıf kavramları sakin bir pratik ister."],
      },
    ],
  },
  ar: {
    "what-is-csharp": [
      {
        paragraphs: [
          "C# لغة برمجة حديثة وكائنية التوجه من تطوير Microsoft. تُستخدم أساسًا مع منصة .NET. يمكن بها إعداد برامج ويندوز وتطبيقات الويب والألعاب وخدمات الخادم.",
          "C# لغة عالية المستوى. بناؤها قريب من Java وعائلة C، لذلك تكون قراءتها أسهل نسبيًا لمن يعرف إحدى هاتين اللغتين. تعمل بفحص صارم للأنواع: نوع المتغير معروف مسبقًا، وتظهر كثير من الأخطاء قبل تشغيل البرنامج.",
          "لم تعد C# خاصة بويندوز فقط. يمكن لـ .NET أن يعمل على أنظمة تشغيل مختلفة. ويستخدم محرك Unity لغة C# على نطاق واسع لصناعة الألعاب.",
        ],
      },
    ],
    "what-is-csharp-used-for": [
      {
        paragraphs: ["تُستخدم C# في مجالات كثيرة:"],
        list: [
          "برامج ويندوز وسطح المكتب",
          "الجزء الخلفي من مواقع الويب وواجهات API",
          "صناعة الألعاب مع Unity",
          "الأنظمة المؤسسية وأنظمة الأعمال",
          "الخدمات السحابية",
          "تطبيقات الهاتف ومتعددة المنصات مع .NET",
          "أدوات سطح المكتب والأتمتة",
        ],
      },
      {
        paragraphs: [
          "ASP.NET خيار شائع لتطبيقات الويب، وUnity خيار شائع للألعاب. واللغة نفسها لا تنحصر في هذين المجالين.",
        ],
      },
    ],
    "what-can-you-do-with-csharp": [
      {
        paragraphs: ["يمكن كتابة برامج متنوعة باستخدام C#:"],
        list: [
          "تطبيقات الويب وواجهات API",
          "برامج سطح المكتب",
          "ألعاب ثنائية وثلاثية الأبعاد",
          "أنظمة تعمل مع قواعد البيانات",
          "برمجيات الإدارة داخل الشركات",
          "أدوات صغيرة تعمل في وحدة التحكم",
        ],
      },
      {
        heading: "مثال بسيط",
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("مرحبًا، Nibras Code!");
    }
}`,
        after: ["يكتب هذا البرنامج رسالة ترحيب في وحدة التحكم."],
      },
    ],
    "is-csharp-hard-to-learn": [
      {
        paragraphs: [
          "يمكن البدء بتعلم C#. البرنامج الأول ليس صعبًا. أما التقدم فيحتاج إلى فهم الأنواع والأصناف والبنية الكائنية.",
          "هذا الترتيب مفيد في البداية:",
        ],
        ordered: true,
        list: [
          "المتغيرات والأنواع",
          "الشروط والحلقات",
          "الدوال",
          "المصفوفات والقوائم",
          "الأصناف والكائنات",
          "الواجهات",
          "معالجة الأخطاء",
          "مشروع صغير في وحدة التحكم أو Unity",
        ],
      },
      {
        paragraphs: ["النتيجة الجيدة تأتي من كتابة برامج صغيرة، لا من القراءة وحدها."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "المزايا",
        list: [
          "لديها نظام أنواع واضح وصارم",
          "مكتبات .NET واسعة",
          "دعم قوي لويندوز والويب وألعاب Unity",
          "فيها إمكانات حديثة مثل async وLINQ والأنواع العامة",
          "العمل مريح مع أدوات مثل Visual Studio",
          "يمكن لـ .NET أن يعمل على أكثر من نظام تشغيل",
        ],
      },
      {
        heading: "العيوب",
        list: [
          "للبرامج النصية القصيرة جدًا قد تبدو لغة مثل Python أخف",
          "قد تبدو المفاهيم الكائنية صعبة في البداية",
          "بعض الأمثلة مرتبطة بأدوات Microsoft، وهذا قد يربك الاختيار",
          "قد تبدو بنية المشروع ثقيلة لبرنامج صغير",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: ["يبدأ برنامج C# عادة بصنف ودالة Main. ودالة Main هي نقطة الدخول."],
      },
      { heading: "المتغيرات", code: `string name = "Ali";\nint age = 20;` },
      {
        heading: "الشرط",
        code: `if (age >= 18)
{
    Console.WriteLine("بالغ");
}`,
      },
      {
        heading: "الحلقة",
        code: `for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}`,
      },
      {
        heading: "الدالة",
        code: `static int Add(int a, int b)
{
    return a + b;
}`,
      },
    ],
    "code-examples": [
      {
        heading: "رسالة ترحيب",
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("مرحبًا بالعالم!");
    }
}`,
      },
      {
        heading: "جمع عددين",
        code: `using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 20;
        Console.WriteLine(a + b);
    }
}`,
      },
      {
        heading: "مثال على شرط",
        code: `using System;

class Program
{
    static void Main()
    {
        int number = 10;
        if (number > 0)
        {
            Console.WriteLine("عدد موجب");
        }
    }
}`,
      },
    ],
    faq: [
      {
        heading: "ما هي C#؟",
        paragraphs: ["C# لغة برمجة كائنية التوجه تُستخدم على نطاق واسع مع منصة .NET."],
      },
      {
        heading: "هل C# مجانية؟",
        paragraphs: [
          "يمكن استخدام .NET SDK ومترجم C# مجانًا. ولبرنامج Visual Studio إصدار Community مجاني. شروط الترخيص تعتمد على الأداة المختارة.",
        ],
      },
      {
        heading: "هل يمكن صناعة ألعاب باستخدام C#؟",
        paragraphs: ["نعم. C# هي لغة البرمجة الأساسية في محرك الألعاب Unity."],
      },
      {
        heading: "هل C# خاصة بويندوز فقط؟",
        paragraphs: ["لا. يمكن لـ .NET أن يعمل على عدة أنظمة، منها Linux وmacOS. وتطبيقات ويندوز أحد مجالات قوتها."],
      },
      {
        heading: "هل يمكن إنشاء موقع باستخدام C#؟",
        paragraphs: ["نعم. يُستخدم ASP.NET لكتابة تطبيقات الويب من جهة الخادم وواجهات API."],
      },
      {
        heading: "هل C# وC++ لغة واحدة؟",
        paragraphs: ["لا. الاسمان متقاربان، لكن C# وC++ لغتان مختلفتان وتُختاران لأعمال مختلفة."],
      },
      {
        heading: "هل C# مناسبة للمبتدئين؟",
        paragraphs: ["نعم. يمكن تعلمها كلغة أولى. مفاهيم الأنواع والأصناف تحتاج إلى تدريب هادئ."],
      },
    ],
  },
  ru: {
    "what-is-csharp": [
      {
        paragraphs: [
          "C# — современный объектно-ориентированный язык программирования от Microsoft. Его в основном используют вместе с платформой .NET. На C# можно создавать программы для Windows, веб-приложения, игры и серверные службы.",
          "C# — язык высокого уровня. Его синтаксис близок к Java и семейству C, поэтому его относительно легко читать, если вы уже знаете один из этих языков. В нём строгая проверка типов: тип переменной известен заранее, и многие ошибки видны до запуска программы.",
          "Сегодня C# — это не только Windows. .NET может работать в разных операционных системах. Движок Unity тоже широко использует C# для создания игр.",
        ],
      },
    ],
    "what-is-csharp-used-for": [
      {
        paragraphs: ["C# используют во многих областях:"],
        list: [
          "Программы для Windows и настольные приложения",
          "Серверная часть сайтов и API",
          "Игры на Unity",
          "Корпоративные и бизнес-системы",
          "Облачные сервисы",
          "Мобильные и кроссплатформенные приложения на .NET",
          "Настольные инструменты и автоматизация",
        ],
      },
      {
        paragraphs: [
          "ASP.NET часто выбирают для веб-приложений, а Unity — для игр. Сам язык этими областями не ограничен.",
        ],
      },
    ],
    "what-can-you-do-with-csharp": [
      {
        paragraphs: ["На C# можно писать разные программы:"],
        list: [
          "Веб-приложения и API",
          "Настольные программы",
          "2D- и 3D-игры",
          "Системы, работающие с базами данных",
          "Внутренние программы для компаний",
          "Небольшие консольные инструменты",
        ],
      },
      {
        heading: "Простой пример",
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Здравствуйте, Nibras Code!");
    }
}`,
        after: ["Эта программа пишет приветствие в консоль."],
      },
    ],
    "is-csharp-hard-to-learn": [
      {
        paragraphs: [
          "Начать изучение C# можно. Первая программа несложна. Чтобы идти дальше, нужно понять типы, классы и объектно-ориентированное устройство.",
          "В начале полезен такой порядок:",
        ],
        ordered: true,
        list: [
          "Переменные и типы",
          "Условия и циклы",
          "Методы",
          "Массивы и списки",
          "Классы и объекты",
          "Интерфейсы",
          "Обработка ошибок",
          "Небольшой консольный проект или проект на Unity",
        ],
      },
      {
        paragraphs: ["Хороший результат даёт не только чтение, а написание небольших программ."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Преимущества",
        list: [
          "Понятная и строгая система типов",
          "Широкие библиотеки .NET",
          "Сильная поддержка Windows, веба и игр на Unity",
          "Современные возможности: async, LINQ и обобщения",
          "С инструментами вроде Visual Studio работать удобно",
          ".NET может работать в нескольких операционных системах",
        ],
      },
      {
        heading: "Недостатки",
        list: [
          "Для очень коротких скриптов язык вроде Python может казаться легче",
          "Объектно-ориентированные понятия сначала могут выглядеть сложными",
          "Часть примеров привязана к инструментам Microsoft, и из-за этого выбор может путать",
          "Структура проекта может казаться тяжёлой для крошечной программы",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: ["Программа на C# обычно начинается с класса и метода Main. Main — это точка входа."],
      },
      { heading: "Переменные", code: `string name = "Ali";\nint age = 20;` },
      {
        heading: "Условие",
        code: `if (age >= 18)
{
    Console.WriteLine("Совершеннолетний");
}`,
      },
      {
        heading: "Цикл",
        code: `for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}`,
      },
      {
        heading: "Метод",
        code: `static int Add(int a, int b)
{
    return a + b;
}`,
      },
    ],
    "code-examples": [
      {
        heading: "Приветствие",
        code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Здравствуй, мир!");
    }
}`,
      },
      {
        heading: "Сумма двух чисел",
        code: `using System;

class Program
{
    static void Main()
    {
        int a = 10;
        int b = 20;
        Console.WriteLine(a + b);
    }
}`,
      },
      {
        heading: "Пример условия",
        code: `using System;

class Program
{
    static void Main()
    {
        int number = 10;
        if (number > 0)
        {
            Console.WriteLine("Положительное число");
        }
    }
}`,
      },
    ],
    faq: [
      {
        heading: "Что такое C#?",
        paragraphs: ["C# — объектно-ориентированный язык программирования, который широко используют на платформе .NET."],
      },
      {
        heading: "C# бесплатный?",
        paragraphs: [
          ".NET SDK и компилятор C# можно использовать бесплатно. У Visual Studio есть бесплатная редакция Community. Условия лицензии зависят от выбранного инструмента.",
        ],
      },
      {
        heading: "Можно ли писать игры на C#?",
        paragraphs: ["Да. В игровом движке Unity основной язык скриптов — C#."],
      },
      {
        heading: "C# только для Windows?",
        paragraphs: ["Нет. .NET может работать в нескольких системах, включая Linux и macOS. Приложения для Windows — одна из его сильных областей."],
      },
      {
        heading: "Можно ли сделать сайт на C#?",
        paragraphs: ["Да. На ASP.NET пишут серверные веб-приложения и API."],
      },
      {
        heading: "C# и C++ — это один язык?",
        paragraphs: ["Нет. Названия близки, но C# и C++ — разные языки, и их выбирают для разных задач."],
      },
      {
        heading: "Подходит ли C# новичкам?",
        paragraphs: ["Да. Его можно учить как первый язык. Типы и классы требуют спокойной практики."],
      },
    ],
  },
};

export function csharpSections(lang: Lang): readonly ProgrammingSection[] {
  return ORDER.map((id) => ({
    id,
    title: TITLES[id][lang],
    blocks: BODIES[lang][id],
  }));
}
