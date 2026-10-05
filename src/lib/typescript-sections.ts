import type { Lang } from "@/lib/i18n";
import type { ProgrammingBlock, ProgrammingSection } from "@/lib/programming";

const TITLES: Record<string, Record<Lang, string>> = {
  "what-is-typescript": {
    az: "TypeScript nədir?",
    en: "What Is TypeScript?",
    tr: "TypeScript Nedir?",
    ar: "ما هو TypeScript؟",
    ru: "Что такое TypeScript?",
  },
  "what-is-typescript-used-for": {
    az: "TypeScript nə üçün istifadə olunur?",
    en: "What Is TypeScript Used For?",
    tr: "TypeScript Ne İçin Kullanılır?",
    ar: "فيمَ يُستخدم TypeScript؟",
    ru: "Для чего используется TypeScript?",
  },
  "what-can-you-do-with-typescript": {
    az: "TypeScript ilə nələr etmək olar?",
    en: "What Can You Do with TypeScript?",
    tr: "TypeScript ile Neler Yapılabilir?",
    ar: "ماذا يمكن أن تفعل باستخدام TypeScript؟",
    ru: "Что можно делать с TypeScript?",
  },
  "is-typescript-hard-to-learn": {
    az: "TypeScript öyrənmək çətindirmi?",
    en: "Is TypeScript Difficult to Learn?",
    tr: "TypeScript Öğrenmek Zor mu?",
    ar: "هل تعلم TypeScript صعب؟",
    ru: "Сложно ли изучать TypeScript?",
  },
  "advantages-and-disadvantages": {
    az: "TypeScript-in üstünlükləri və çatışmazlıqları",
    en: "Advantages and Disadvantages of TypeScript",
    tr: "TypeScript'in Avantajları ve Dezavantajları",
    ar: "مميزات وعيوب TypeScript",
    ru: "Преимущества и недостатки TypeScript",
  },
  "syntax-and-basic-concepts": {
    az: "TypeScript sintaksisi və əsas anlayışlar",
    en: "TypeScript Syntax and Basic Concepts",
    tr: "TypeScript Sözdizimi ve Temel Kavramlar",
    ar: "بناء جمل TypeScript والمفاهيم الأساسية",
    ru: "Синтаксис TypeScript и основные понятия",
  },
  "code-examples": {
    az: "TypeScript kod nümunələri",
    en: "TypeScript Code Examples",
    tr: "TypeScript Kod Örnekleri",
    ar: "أمثلة على أكواد TypeScript",
    ru: "Примеры кода на TypeScript",
  },
  faq: {
    az: "TypeScript haqqında tez-tez verilən suallar",
    en: "Frequently Asked Questions About TypeScript",
    tr: "TypeScript Hakkında Sık Sorulan Sorular",
    ar: "الأسئلة الشائعة حول TypeScript",
    ru: "Часто задаваемые вопросы о TypeScript",
  },
};

const ORDER = [
  "what-is-typescript",
  "what-is-typescript-used-for",
  "what-can-you-do-with-typescript",
  "is-typescript-hard-to-learn",
  "advantages-and-disadvantages",
  "syntax-and-basic-concepts",
  "code-examples",
  "faq",
] as const;

const BODIES: Record<Lang, Record<(typeof ORDER)[number], readonly ProgrammingBlock[]>> = {
  az: {
    "what-is-typescript": [
      {
        paragraphs: [
          "TypeScript JavaScript-ə tip əlavə edən proqramlaşdırma dilidir. Onu Microsoft hazırlayıb. TypeScript kodu adi JavaScript-ə çevrilir. Brauzer və Node.js həmin JavaScript-i işlədir. Yəni TypeScript brauzerin ayrıca başa düşdüyü ikinci bir dil deyil.",
          "Əsas fərq tiplərdir. Dəyişənin mətn, ədəd və ya obyekt daşıdığı kodun içində yazılır. Uyğun gəlməyən dəyər çox vaxt proqram işləməzdən əvvəl görünür.",
          "TypeScript JavaScript-in üst qatıdır. Düzgün JavaScript kodu TypeScript faylında da qala bilər. Tiplər isə əlavə yoxlama və redaktor köməyi verir.",
        ],
      },
    ],
    "what-is-typescript-used-for": [
      {
        paragraphs: ["TypeScript əsasən JavaScript işlədilən yerlərdə istifadə olunur:"],
        list: [
          "Böyük veb tətbiqlər",
          "React, Angular və Vue layihələri",
          "Node.js ilə server tərəfi və API",
          "Başqalarının istifadə etdiyi kitabxanalar",
          "Bir neçə nəfərin birlikdə yazdığı kod",
        ],
      },
      {
        paragraphs: [
          "Kiçik bir səhifə üçün adi JavaScript kifayət edə bilər. Layihə böyüdükcə tip yazmaq səhvi daha tez tutmağa kömək edir.",
        ],
      },
    ],
    "what-can-you-do-with-typescript": [
      {
        paragraphs: ["TypeScript ilə JavaScript-in işlədildiyi işlərin çoxunu görmək olar:"],
        list: [
          "İnteraktiv veb tətbiq",
          "Server və API",
          "Tipi yazılmış kitabxana",
          "Forma və məlumat yoxlaması",
          "Böyük frontend layihəsi",
        ],
      },
      {
        heading: "Sadə nümunə",
        code: `function salamla(ad: string): string {
    return "Salam, " + ad;
}

console.log(salamla("Nibras Code"));`,
        after: ["Bu funksiya yalnız mətn qəbul edir və konsola salam yazır."],
      },
    ],
    "is-typescript-hard-to-learn": [
      {
        paragraphs: [
          "JavaScript-i bir az bilən şəxs üçün TypeScript-ə keçid daha rahatdır. Tiplər əvvəl əlavə yazı kimi görünür. Məqsəd kodu ağırlaşdırmaq deyil, uyğunsuz dəyəri tez göstərməkdir.",
          "Başlanğıc üçün bu sıra faydalıdır:",
        ],
        ordered: true,
        list: [
          "JavaScript-in dəyişən, funksiya və obyekt əsasları",
          "string, number və boolean tipləri",
          "Funksiyanın qəbul etdiyi və qaytardığı tip",
          "Obyekt və interface",
          "Bir neçə tipdən birini bildirən union",
          "Sadə massiv tipi",
          "TypeScript-i JavaScript-ə çevirən qurulma addımı",
        ],
      },
      {
        paragraphs: ["Əvvəlcə kiçik fayllara tip əlavə etmək, bütün dili bir anda əzbərləməkdən faydalıdır."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Üstünlükləri",
        list: [
          "Bir çox səhv proqram işləməzdən əvvəl görünür",
          "Redaktor adı, sahəni və funksiyanı daha dəqiq təklif edir",
          "Böyük layihədə kodu izləmək asanlaşır",
          "Mövcud JavaScript kodu ilə birlikdə istifadə edilə bilər",
          "Açıq mənbəlidir və ayrıca lisenziya haqqı tələb etmir",
        ],
      },
      {
        heading: "Çatışmazlıqları",
        list: [
          "Kod birbaşa brauzerdə yox, əvvəl JavaScript-ə çevrilir",
          "Çox kiçik skript üçün tip yazmaq artıq görünə bilər",
          "Tip hər məntiqi səhvi tutmur",
          "Bəzi tip tərifləri yeni başlayan üçün çətin oxunur",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: [
          "TypeScript sintaksisi JavaScript-ə bənzəyir. Fərq tipin dəyişənin və ya funksiyanın yanında yazılmasıdır.",
        ],
      },
      {
        heading: "Tipli dəyişən",
        code: `let name: string = "Ali";
let age: number = 20;`,
      },
      {
        heading: "Funksiya",
        code: `function add(a: number, b: number): number {
    return a + b;
}`,
      },
      {
        heading: "Obyektin forması",
        code: `type User = {
    name: string;
    age: number;
};

const user: User = { name: "Ali", age: 20 };`,
      },
    ],
    "code-examples": [
      {
        heading: "Salam mesajı",
        code: `const name: string = "Nibras Code";
console.log("Salam, " + name);`,
      },
      {
        heading: "İki ədədin cəmi",
        code: `function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));`,
      },
      {
        heading: "Şərt",
        code: `const age: number = 20;

if (age >= 18) {
    console.log("Yetkin");
}`,
      },
    ],
    faq: [
      {
        heading: "TypeScript nədir?",
        paragraphs: ["TypeScript JavaScript-ə tip əlavə edən və sonda JavaScript-ə çevrilən dildir."],
      },
      {
        heading: "TypeScript və JavaScript eynidirmi?",
        paragraphs: ["Xeyr. TypeScript JavaScript-in üzərinə tip qatı əlavə edir. Brauzer isə çevrilmiş JavaScript-i işlədir."],
      },
      {
        heading: "TypeScript pulsuzdur?",
        paragraphs: ["Bəli. TypeScript açıq mənbəlidir və dilin özü üçün ayrıca ödəniş yoxdur."],
      },
      {
        heading: "Əvvəl JavaScript öyrənmək lazımdırmı?",
        paragraphs: ["Vacib deyil, amma kömək edir. TypeScript JavaScript-i əvəz etmir, onun üstünə qurulur."],
      },
      {
        heading: "TypeScript brauzerdə birbaşa işləyirmi?",
        paragraphs: ["Adətən xeyr. Əvvəl JavaScript-ə çevrilir, sonra həmin fayl brauzerdə və ya Node.js-də işləyir."],
      },
      {
        heading: "TypeScript hər səhvi tuturmu?",
        paragraphs: ["Xeyr. Tip uyğunsuzluğunu yaxşı göstərir. Məntiqi səhv və səhv şərt yenə də proqramda qala bilər."],
      },
      {
        heading: "React ilə TypeScript istifadə etmək olar?",
        paragraphs: ["Bəli. React layihələrində TypeScript geniş istifadə olunur."],
      },
    ],
  },
  en: {
    "what-is-typescript": [
      {
        paragraphs: [
          "TypeScript is a programming language that adds types to JavaScript. Microsoft created it. TypeScript code is turned into ordinary JavaScript. The browser and Node.js then run that JavaScript. TypeScript is not a second language that the browser understands on its own.",
          "The main difference is types. You write whether a value is text, a number, or an object. A value that does not fit often shows up before the program runs.",
          "TypeScript sits on top of JavaScript. Valid JavaScript can stay in a TypeScript file. The types add checking and better editor help.",
        ],
      },
    ],
    "what-is-typescript-used-for": [
      {
        paragraphs: ["TypeScript is mainly used where JavaScript is used:"],
        list: [
          "Large web applications",
          "React, Angular, and Vue projects",
          "Server-side code and APIs with Node.js",
          "Libraries other people use",
          "Code written by more than one person",
        ],
      },
      {
        paragraphs: [
          "Plain JavaScript can be enough for a small page. As a project grows, writing types helps catch mismatches earlier.",
        ],
      },
    ],
    "what-can-you-do-with-typescript": [
      {
        paragraphs: ["With TypeScript you can do most of the work JavaScript is used for:"],
        list: [
          "An interactive web application",
          "A server and an API",
          "A library with written types",
          "Form and data checks",
          "A large frontend project",
        ],
      },
      {
        heading: "A simple example",
        code: `function greet(name: string): string {
    return "Hello, " + name;
}

console.log(greet("Nibras Code"));`,
        after: ["This function accepts only text and writes a greeting to the console."],
      },
    ],
    "is-typescript-hard-to-learn": [
      {
        paragraphs: [
          "If you already know a little JavaScript, moving to TypeScript is easier. Types can look like extra writing at first. The point is not to make the code heavy. It is to show a mismatched value early.",
          "This order is useful at the start:",
        ],
        ordered: true,
        list: [
          "JavaScript basics: variables, functions, and objects",
          "The string, number, and boolean types",
          "The type a function accepts and returns",
          "Objects and interfaces",
          "A union, which names more than one possible type",
          "A simple array type",
          "The build step that turns TypeScript into JavaScript",
        ],
      },
      {
        paragraphs: ["Adding types to small files is more useful than trying to memorize the whole language at once."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Advantages",
        list: [
          "Many mistakes show up before the program runs",
          "The editor suggests names, fields, and functions more precisely",
          "Large projects are easier to follow",
          "It can be used together with existing JavaScript",
          "It is open source and the language itself has no separate fee",
        ],
      },
      {
        heading: "Disadvantages",
        list: [
          "The code is turned into JavaScript before a browser runs it",
          "Writing types can feel extra for a very small script",
          "Types do not catch every logical mistake",
          "Some type definitions are hard for a beginner to read",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: ["TypeScript syntax looks like JavaScript. The difference is that a type is written beside a variable or a function."],
      },
      { heading: "A typed variable", code: `let name: string = "Ali";\nlet age: number = 20;` },
      {
        heading: "A function",
        code: `function add(a: number, b: number): number {
    return a + b;
}`,
      },
      {
        heading: "The shape of an object",
        code: `type User = {
    name: string;
    age: number;
};

const user: User = { name: "Ali", age: 20 };`,
      },
    ],
    "code-examples": [
      { heading: "A greeting", code: `const name: string = "Nibras Code";\nconsole.log("Hello, " + name);` },
      {
        heading: "The sum of two numbers",
        code: `function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));`,
      },
      {
        heading: "A condition",
        code: `const age: number = 20;

if (age >= 18) {
    console.log("Adult");
}`,
      },
    ],
    faq: [
      { heading: "What is TypeScript?", paragraphs: ["TypeScript adds types to JavaScript and is then turned into JavaScript."] },
      { heading: "Are TypeScript and JavaScript the same?", paragraphs: ["No. TypeScript adds a type layer on top of JavaScript. The browser runs the JavaScript that was produced."] },
      { heading: "Is TypeScript free?", paragraphs: ["Yes. TypeScript is open source, and the language itself has no separate fee."] },
      { heading: "Do I need to learn JavaScript first?", paragraphs: ["It is not required, but it helps. TypeScript does not replace JavaScript. It is built on it."] },
      { heading: "Does TypeScript run directly in the browser?", paragraphs: ["Usually no. It is turned into JavaScript first. That file then runs in the browser or in Node.js."] },
      { heading: "Does TypeScript catch every mistake?", paragraphs: ["No. It is good at showing a type mismatch. A wrong condition can still remain in the program."] },
      { heading: "Can TypeScript be used with React?", paragraphs: ["Yes. TypeScript is widely used in React projects."] },
    ],
  },
  tr: {
    "what-is-typescript": [
      {
        paragraphs: [
          "TypeScript, JavaScript'e tür ekleyen bir programlama dilidir. Microsoft tarafından geliştirilmiştir. TypeScript kodu sıradan JavaScript'e çevrilir. Tarayıcı ve Node.js o JavaScript'i çalıştırır. Yani TypeScript, tarayıcının ayrıca anladığı ikinci bir dil değildir.",
          "Asıl fark türlerdir. Bir değerin metin, sayı veya nesne olduğu kodun içinde yazılır. Uymayan bir değer çoğu zaman program çalışmadan görünür.",
          "TypeScript, JavaScript'in üst katmanıdır. Geçerli JavaScript kodu bir TypeScript dosyasında da durabilir. Türler ise ek denetim ve düzenleyici yardımı sağlar.",
        ],
      },
    ],
    "what-is-typescript-used-for": [
      {
        paragraphs: ["TypeScript özellikle JavaScript'in kullanıldığı yerlerde kullanılır:"],
        list: [
          "Büyük web uygulamaları",
          "React, Angular ve Vue projeleri",
          "Node.js ile sunucu tarafı ve API",
          "Başkalarının kullandığı kütüphaneler",
          "Birden fazla kişinin birlikte yazdığı kod",
        ],
      },
      {
        paragraphs: ["Küçük bir sayfa için düz JavaScript yeterli olabilir. Proje büyüdükçe tür yazmak uyumsuzluğu daha erken gösterir."],
      },
    ],
    "what-can-you-do-with-typescript": [
      {
        paragraphs: ["TypeScript ile JavaScript'in kullanıldığı işlerin çoğunu yapmak mümkündür:"],
        list: ["Etkileşimli bir web uygulaması", "Sunucu ve API", "Türü yazılmış bir kütüphane", "Form ve veri kontrolü", "Büyük bir frontend projesi"],
      },
      {
        heading: "Basit örnek",
        code: `function greet(name: string): string {
    return "Merhaba, " + name;
}

console.log(greet("Nibras Code"));`,
        after: ["Bu fonksiyon yalnızca metin kabul eder ve konsola bir selamlama yazar."],
      },
    ],
    "is-typescript-hard-to-learn": [
      {
        paragraphs: [
          "Biraz JavaScript bilen biri için TypeScript'e geçiş daha rahattır. Türler başta fazladan yazı gibi görünebilir. Amaç kodu ağırlaştırmak değil, uymayan değeri erken göstermektir.",
          "Başlangıç için şu sıra faydalıdır:",
        ],
        ordered: true,
        list: [
          "JavaScript'te değişken, fonksiyon ve nesne temelleri",
          "string, number ve boolean türleri",
          "Fonksiyonun aldığı ve döndürdüğü tür",
          "Nesne ve interface",
          "Birden fazla türden birini söyleyen union",
          "Basit dizi türü",
          "TypeScript'i JavaScript'e çeviren derleme adımı",
        ],
      },
      { paragraphs: ["Önce küçük dosyalara tür eklemek, dilin tamamını bir anda ezberlemekten daha faydalıdır."] },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Avantajları",
        list: [
          "Birçok hata program çalışmadan görünür",
          "Düzenleyici ad, alan ve fonksiyonu daha doğru önerir",
          "Büyük projede kodu izlemek kolaylaşır",
          "Var olan JavaScript koduyla birlikte kullanılabilir",
          "Açık kaynaklıdır ve dilin kendisi için ayrı bir ücret yoktur",
        ],
      },
      {
        heading: "Dezavantajları",
        list: [
          "Kod tarayıcıda doğrudan değil, önce JavaScript'e çevrilerek çalışır",
          "Çok küçük bir betik için tür yazmak fazla gelebilir",
          "Tür her mantık hatasını yakalamaz",
          "Bazı tür tanımları yeni başlayan için zor okunur",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      { paragraphs: ["TypeScript sözdizimi JavaScript'e benzer. Fark, türün değişkenin veya fonksiyonun yanında yazılmasıdır."] },
      { heading: "Türlü değişken", code: `let name: string = "Ali";\nlet age: number = 20;` },
      { heading: "Fonksiyon", code: `function add(a: number, b: number): number {\n    return a + b;\n}` },
      { heading: "Nesnenin biçimi", code: `type User = {\n    name: string;\n    age: number;\n};\n\nconst user: User = { name: "Ali", age: 20 };` },
    ],
    "code-examples": [
      { heading: "Selamlama", code: `const name: string = "Nibras Code";\nconsole.log("Merhaba, " + name);` },
      { heading: "İki sayının toplamı", code: `function add(a: number, b: number): number {\n    return a + b;\n}\n\nconsole.log(add(10, 20));` },
      { heading: "Koşul", code: `const age: number = 20;\n\nif (age >= 18) {\n    console.log("Yetişkin");\n}` },
    ],
    faq: [
      { heading: "TypeScript nedir?", paragraphs: ["TypeScript, JavaScript'e tür ekleyen ve sonunda JavaScript'e çevrilen bir dildir."] },
      { heading: "TypeScript ile JavaScript aynı mıdır?", paragraphs: ["Hayır. TypeScript, JavaScript'in üzerine bir tür katmanı ekler. Tarayıcı ise üretilen JavaScript'i çalıştırır."] },
      { heading: "TypeScript ücretsiz mi?", paragraphs: ["Evet. TypeScript açık kaynaklıdır ve dilin kendisi için ayrı bir ücret yoktur."] },
      { heading: "Önce JavaScript öğrenmek gerekir mi?", paragraphs: ["Şart değildir, ama yardımcı olur. TypeScript, JavaScript'in yerine geçmez; onun üstüne kurulur."] },
      { heading: "TypeScript tarayıcıda doğrudan çalışır mı?", paragraphs: ["Genellikle hayır. Önce JavaScript'e çevrilir. O dosya sonra tarayıcıda veya Node.js'te çalışır."] },
      { heading: "TypeScript her hatayı yakalar mı?", paragraphs: ["Hayır. Tür uyumsuzluğunu iyi gösterir. Yanlış bir koşul yine programda kalabilir."] },
      { heading: "React ile TypeScript kullanılabilir mi?", paragraphs: ["Evet. React projelerinde TypeScript yaygın olarak kullanılır."] },
    ],
  },
  ar: {
    "what-is-typescript": [
      {
        paragraphs: [
          "TypeScript لغة برمجة تضيف الأنواع إلى JavaScript. طورتها Microsoft. يُحوَّل كود TypeScript إلى JavaScript عادية، ثم يشغّل المتصفح وNode.js تلك الـ JavaScript. أي أن TypeScript ليست لغة ثانية يفهمها المتصفح وحدها.",
          "الفرق الأساسي هو الأنواع. تكتب في الكود هل القيمة نص أو رقم أو كائن. والقيمة غير المناسبة تظهر غالبًا قبل تشغيل البرنامج.",
          "TypeScript طبقة فوق JavaScript. يمكن أن يبقى كود JavaScript الصحيح داخل ملف TypeScript. أما الأنواع فتضيف فحصًا ومساعدة أفضل من المحرر.",
        ],
      },
    ],
    "what-is-typescript-used-for": [
      {
        paragraphs: ["يُستخدم TypeScript خصوصًا حيث تُستخدم JavaScript:"],
        list: ["تطبيقات الويب الكبيرة", "مشاريع React وAngular وVue", "جهة الخادم وواجهات API مع Node.js", "المكتبات التي يستخدمها الآخرون", "الكود الذي يكتبه أكثر من شخص"],
      },
      { paragraphs: ["قد تكفي JavaScript العادية لصفحة صغيرة. وكلما كبر المشروع ساعد كتابة الأنواع على إظهار عدم التطابق مبكرًا."] },
    ],
    "what-can-you-do-with-typescript": [
      {
        paragraphs: ["يمكن باستخدام TypeScript القيام بمعظم ما تُستخدم له JavaScript:"],
        list: ["تطبيق ويب تفاعلي", "خادم وواجهة API", "مكتبة أنواعها مكتوبة", "التحقق من النماذج والبيانات", "مشروع واجهة أمامية كبير"],
      },
      {
        heading: "مثال بسيط",
        code: `function greet(name: string): string {
    return "مرحبًا، " + name;
}

console.log(greet("Nibras Code"));`,
        after: ["تقبل هذه الدالة نصًا فقط وتكتب ترحيبًا في وحدة التحكم."],
      },
    ],
    "is-typescript-hard-to-learn": [
      {
        paragraphs: [
          "من يعرف قليلًا من JavaScript ينتقل إلى TypeScript براحة أكبر. قد تبدو الأنواع في البداية كتابة إضافية. الهدف ليس إثقال الكود، بل إظهار القيمة غير المناسبة مبكرًا.",
          "هذا الترتيب مفيد في البداية:",
        ],
        ordered: true,
        list: ["أساسيات المتغيرات والدوال والكائنات في JavaScript", "أنواع string وnumber وboolean", "النوع الذي تقبله الدالة والذي تُرجعه", "الكائن وinterface", "الاتحاد الذي يسمّي أكثر من نوع ممكن", "نوع بسيط للمصفوفة", "خطوة البناء التي تحوّل TypeScript إلى JavaScript"],
      },
      { paragraphs: ["إضافة الأنواع إلى ملفات صغيرة أنفع من محاولة حفظ اللغة كلها دفعة واحدة."] },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "المزايا",
        list: ["تظهر كثير من الأخطاء قبل تشغيل البرنامج", "يقترح المحرر الأسماء والحقول والدوال بدقة أكبر", "يسهل تتبع الكود في المشروع الكبير", "يمكن استخدامه مع كود JavaScript الموجود", "مفتوح المصدر ولا رسوم منفصلة على اللغة نفسها"],
      },
      {
        heading: "العيوب",
        list: ["لا يعمل الكود في المتصفح مباشرة، بل بعد تحويله إلى JavaScript", "قد تبدو كتابة الأنواع زائدة في برنامج نصي صغير جدًا", "لا تلتقط الأنواع كل خطأ منطقي", "يصعب على المبتدئ قراءة بعض تعريفات الأنواع"],
      },
    ],
    "syntax-and-basic-concepts": [
      { paragraphs: ["يشبه بناء TypeScript بناء JavaScript. الفرق أن النوع يُكتب بجانب المتغير أو الدالة."] },
      { heading: "متغير بنوع", code: `let name: string = "Ali";\nlet age: number = 20;` },
      { heading: "دالة", code: `function add(a: number, b: number): number {\n    return a + b;\n}` },
      { heading: "شكل الكائن", code: `type User = {\n    name: string;\n    age: number;\n};\n\nconst user: User = { name: "Ali", age: 20 };` },
    ],
    "code-examples": [
      { heading: "رسالة ترحيب", code: `const name: string = "Nibras Code";\nconsole.log("مرحبًا، " + name);` },
      { heading: "جمع عددين", code: `function add(a: number, b: number): number {\n    return a + b;\n}\n\nconsole.log(add(10, 20));` },
      { heading: "شرط", code: `const age: number = 20;\n\nif (age >= 18) {\n    console.log("بالغ");\n}` },
    ],
    faq: [
      { heading: "ما هو TypeScript؟", paragraphs: ["TypeScript يضيف الأنواع إلى JavaScript ثم يُحوَّل إلى JavaScript."] },
      { heading: "هل TypeScript وJavaScript شيء واحد؟", paragraphs: ["لا. يضيف TypeScript طبقة أنواع فوق JavaScript. والمتصفح يشغّل الـ JavaScript الناتجة."] },
      { heading: "هل TypeScript مجاني؟", paragraphs: ["نعم. TypeScript مفتوح المصدر ولا رسوم منفصلة على اللغة نفسها."] },
      { heading: "هل يلزم تعلم JavaScript أولًا؟", paragraphs: ["ليس شرطًا، لكنه يساعد. TypeScript لا يحل محل JavaScript، بل يُبنى فوقه."] },
      { heading: "هل يعمل TypeScript مباشرة في المتصفح؟", paragraphs: ["عادة لا. يُحوَّل أولًا إلى JavaScript، ثم يعمل ذلك الملف في المتصفح أو في Node.js."] },
      { heading: "هل يلتقط TypeScript كل الأخطاء؟", paragraphs: ["لا. يُظهر عدم تطابق النوع جيدًا. أما الشرط الخاطئ فقد يبقى في البرنامج."] },
      { heading: "هل يمكن استخدام TypeScript مع React؟", paragraphs: ["نعم. يُستخدم TypeScript على نطاق واسع في مشاريع React."] },
    ],
  },
  ru: {
    "what-is-typescript": [
      {
        paragraphs: [
          "TypeScript — это язык программирования, который добавляет типы к JavaScript. Его создала Microsoft. Код TypeScript превращается в обычный JavaScript. Браузер и Node.js выполняют уже этот JavaScript. То есть TypeScript — не второй язык, который браузер понимает сам по себе.",
          "Главное отличие — типы. В коде записывают, является значение текстом, числом или объектом. Неподходящее значение часто видно ещё до запуска программы.",
          "TypeScript стоит поверх JavaScript. Правильный код JavaScript может оставаться в файле TypeScript. Типы добавляют проверку и более точную помощь редактора.",
        ],
      },
    ],
    "what-is-typescript-used-for": [
      {
        paragraphs: ["TypeScript в основном используют там, где используют JavaScript:"],
        list: ["Крупные веб-приложения", "Проекты на React, Angular и Vue", "Серверный код и API на Node.js", "Библиотеки, которыми пользуются другие", "Код, который пишут несколько человек"],
      },
      { paragraphs: ["Для небольшой страницы может хватить обычного JavaScript. Когда проект растёт, типы помогают раньше увидеть несовпадение."] },
    ],
    "what-can-you-do-with-typescript": [
      {
        paragraphs: ["На TypeScript можно делать большую часть того, для чего используют JavaScript:"],
        list: ["Интерактивное веб-приложение", "Сервер и API", "Библиотеку с записанными типами", "Проверку форм и данных", "Крупный frontend-проект"],
      },
      {
        heading: "Простой пример",
        code: `function greet(name: string): string {
    return "Здравствуйте, " + name;
}

console.log(greet("Nibras Code"));`,
        after: ["Эта функция принимает только текст и пишет приветствие в консоль."],
      },
    ],
    "is-typescript-hard-to-learn": [
      {
        paragraphs: [
          "Если вы уже немного знаете JavaScript, перейти к TypeScript легче. Сначала типы могут выглядеть как лишняя запись. Цель не в том, чтобы утяжелить код, а в том, чтобы рано показать неподходящее значение.",
          "В начале полезен такой порядок:",
        ],
        ordered: true,
        list: ["Основы JavaScript: переменные, функции и объекты", "Типы string, number и boolean", "Тип, который функция принимает и возвращает", "Объекты и interface", "Объединение, которое называет больше одного возможного типа", "Простой тип массива", "Шаг сборки, который превращает TypeScript в JavaScript"],
      },
      { paragraphs: ["Полезнее добавлять типы в небольшие файлы, чем пытаться запомнить весь язык сразу."] },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Преимущества",
        list: ["Многие ошибки видны до запуска программы", "Редактор точнее подсказывает имена, поля и функции", "Крупный проект легче читать", "Его можно использовать вместе с уже написанным JavaScript", "Это открытый код, и за сам язык отдельно платить не нужно"],
      },
      {
        heading: "Недостатки",
        list: ["Код не выполняется в браузере напрямую: сначала он превращается в JavaScript", "Для очень короткого скрипта типы могут казаться лишними", "Типы не ловят каждую логическую ошибку", "Некоторые описания типов новичку трудно читать"],
      },
    ],
    "syntax-and-basic-concepts": [
      { paragraphs: ["Синтаксис TypeScript похож на JavaScript. Разница в том, что тип пишут рядом с переменной или функцией."] },
      { heading: "Переменная с типом", code: `let name: string = "Ali";\nlet age: number = 20;` },
      { heading: "Функция", code: `function add(a: number, b: number): number {\n    return a + b;\n}` },
      { heading: "Форма объекта", code: `type User = {\n    name: string;\n    age: number;\n};\n\nconst user: User = { name: "Ali", age: 20 };` },
    ],
    "code-examples": [
      { heading: "Приветствие", code: `const name: string = "Nibras Code";\nconsole.log("Здравствуйте, " + name);` },
      { heading: "Сумма двух чисел", code: `function add(a: number, b: number): number {\n    return a + b;\n}\n\nconsole.log(add(10, 20));` },
      { heading: "Условие", code: `const age: number = 20;\n\nif (age >= 18) {\n    console.log("Совершеннолетний");\n}` },
    ],
    faq: [
      { heading: "Что такое TypeScript?", paragraphs: ["TypeScript добавляет типы к JavaScript, а затем превращается в JavaScript."] },
      { heading: "TypeScript и JavaScript — это одно и то же?", paragraphs: ["Нет. TypeScript добавляет слой типов поверх JavaScript. Браузер выполняет уже полученный JavaScript."] },
      { heading: "TypeScript бесплатный?", paragraphs: ["Да. TypeScript — это открытый код, и за сам язык отдельно платить не нужно."] },
      { heading: "Нужно ли сначала учить JavaScript?", paragraphs: ["Это не обязательно, но помогает. TypeScript не заменяет JavaScript, а строится на нём."] },
      { heading: "TypeScript работает в браузере напрямую?", paragraphs: ["Обычно нет. Сначала он превращается в JavaScript. Этот файл затем работает в браузере или в Node.js."] },
      { heading: "TypeScript ловит все ошибки?", paragraphs: ["Нет. Он хорошо показывает несовпадение типа. Неверное условие всё равно может остаться в программе."] },
      { heading: "Можно ли использовать TypeScript с React?", paragraphs: ["Да. В проектах на React TypeScript используют широко."] },
    ],
  },
};

export function typescriptSections(lang: Lang): readonly ProgrammingSection[] {
  return ORDER.map((id) => ({
    id,
    title: TITLES[id][lang],
    blocks: BODIES[lang][id],
  }));
}
