import type { Lang } from "@/lib/i18n";
import type { ProgrammingBlock, ProgrammingSection } from "@/lib/programming";

const TITLES: Record<string, Record<Lang, string>> = {
  nedir: {
    az: "Java nədir?",
    en: "What is Java?",
    tr: "Java nedir?",
    ar: "ما هي Java؟",
    ru: "Что такое Java?",
  },
  istifade: {
    az: "Java nə üçün istifadə olunur?",
    en: "What is Java used for?",
    tr: "Java ne için kullanılır?",
    ar: "لم تُستخدم Java؟",
    ru: "Для чего используется Java?",
  },
  "ne-etmek": {
    az: "Java ilə nələr etmək olar?",
    en: "What can you do with Java?",
    tr: "Java ile neler yapılabilir?",
    ar: "ماذا يمكن عمله باستخدام Java؟",
    ru: "Что можно делать с помощью Java?",
  },
  oyrenmek: {
    az: "Java öyrənmək çətindirmi?",
    en: "Is Java difficult to learn?",
    tr: "Java öğrenmek zor mu?",
    ar: "هل تعلم Java صعب؟",
    ru: "Сложно ли изучать Java?",
  },
  ustunluk: {
    az: "Java-nın üstünlükləri və çatışmazlıqları",
    en: "Advantages and disadvantages of Java",
    tr: "Java'nın avantajları ve dezavantajları",
    ar: "مزايا وعيوب Java",
    ru: "Преимущества и недостатки Java",
  },
  sintaksis: {
    az: "Java sintaksisi və əsas anlayışlar",
    en: "Java syntax and core concepts",
    tr: "Java sözdizimi ve temel kavramlar",
    ar: "بنية جافا والمفاهيم الأساسية",
    ru: "Синтаксис Java и базовые концепции",
  },
  numuneler: {
    az: "Java kod nümunələri",
    en: "Java code examples",
    tr: "Java kod örnekleri",
    ar: "أمثلة كود Java",
    ru: "Примеры кода Java",
  },
  suallar: {
    az: "Java haqqında tez-tez verilən suallar",
    en: "Frequently asked questions about Java",
    tr: "Java hakkında sık sorulan sorular",
    ar: "الأسئلة الشائعة حول Java",
    ru: "Часто задаваемые вопросы о Java",
  },
};

const ORDER = ["nedir", "istifade", "ne-etmek", "oyrenmek", "ustunluk", "sintaksis", "numuneler", "suallar"] as const;

const AZ: Record<(typeof ORDER)[number], readonly ProgrammingBlock[]> = {
  nedir: [
    { paragraphs: ["Java, platformadan asılı olmayaraq işləyən, geniş yayılmış və güclü proqramlaşdırma dilidir. O, web, mobil, backend və sistem proqramlaşdırmada istifadə olunur.", "Java-nın əsas xüsusiyyəti onun "Yaz bir dəfə, hər yerdə işlət" prinsipi ilə işləməsidir. Bu, eyni kodun müxtəlif platformalarda işə yaramasına imkan verir."] },
  ],
  istifade: [
    { paragraphs: ["Java bir çox sahədə istifadə olunur:"], list: ["Android tətbiqləri", "Backend servisleri", "İnternet və enterprise tətbiqlər", "Bank, səhiyyə və maliyyə sistemləri", "Böyük miqyaslı iş tətbiqləri", "IoT və embedded sistemlər"], },
  ],
  "ne-etmek": [
    { paragraphs: ["Java ilə mobil tətbiqlər, veb sistemlər, API servisləri, bank proqramları və böyük layihələr hazırlamaq mümkündür. O, həm də kütləvi tətbiq inkişafı üçün stabil seçimdir."], heading: "Məsələn", code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Salam, Java!");\n  }\n}' },
  ],
  oyrenmek: [
    { paragraphs: ["Java öyrənmək üçün əsas mövzular strukturlaşdırılmış şəkildə öyrənilməlidir. Yeni başlayanlar üçün uyğun olsa da, OOP, siniflər, obyektlər və kolleksiyalar kimi anlayışlar başa düşülməlidir."], list: ["Dəyişənlər və məlumat tipləri", "Şərtlər", "Dövrlər", "Funksiyalar", "Siniflər və obyektlər", "OOP prinsipləri", "Kolleksiyalar", "Exception və xəta idarəetməsi"], ordered: true },
  ],
  ustunluk: [
    { heading: "Üstünlükləri", list: ["Platformalararası işləmə", "Güclü OOP yanaşması", "Böyük developer icması", "Etibarlı və sabit ekosistem", "Geniş istifadə olunan frameworklər"] },
    { heading: "Çatışmazlıqları", list: ["Kodun daha uzun yazılması", "Daha çox resurs tələb edə bilmesi", "Başlanğıc səviyyədə digər dillərə nisbətən daha çox termin anlayışı tələb etməsi"] },
  ],
  sintaksis: [
    { heading: "Dəyişənlər", code: 'int age = 25;\nString name = "Ali";' },
    { heading: "Şərt", code: 'if (age >= 18) {\n    System.out.println("Yetkin");\n}' },
    { heading: "Dövr", code: 'for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}' },
    { heading: "Funksiya", code: 'public static void greet(String name) {\n    System.out.println("Salam, " + name);\n}' },
  ],
  numuneler: [
    { heading: "Salam mesajı", code: 'System.out.println("Salam, dünya!");' },
    { heading: "Toplama", code: 'int a = 10;\nint b = 20;\nSystem.out.println(a + b);' },
    { heading: "Şərt yoxlanması", code: 'int score = 85;\nif (score >= 50) {\n    System.out.println("Keçdiniz");\n} else {\n    System.out.println("Keçmədiniz");\n}' },
    { heading: "Massiv", code: 'int[] numbers = {1, 2, 3, 4, 5};\nfor (int n : numbers) {\n    System.out.println(n);\n}' },
  ],
  suallar: [
    { heading: "Java nədir?", paragraphs: ["Java, geniş istifadə olunan, təməl OOP yanaşmasına malik, çoxplatformalı proqramlaşdırma dilidir."] },
    { heading: "Java ilə Android tətbiq hazırlamaq olar?", paragraphs: ["Bəli. Android tətbiqlərinin inkişafında Java uzun illər geniş istifadə olunub."] },
    { heading: "Java öyrənmək çətindirmi?", paragraphs: ["Bəzi anlayışlar ilk dəfə qarışıq görünsə də, düzgün metod və praktika ilə öyrənmək mümkündür."] },
    { heading: "Java və JavaScript eynidirmi?", paragraphs: ["Xeyr. Java və JavaScript fərqli dillərdir və fərqli məqsədlər üçün istifadə olunur."] },
  ],
};

const EN: Record<(typeof ORDER)[number], readonly ProgrammingBlock[]> = {
  nedir: [{ paragraphs: ["Java is a widely used, object-oriented programming language designed to be portable across platforms.", "It is commonly used for Android apps, enterprise software, backend systems, and large-scale applications."] }],
  istifade: [{ paragraphs: ["Java is used in many fields:"], list: ["Android development", "Enterprise software", "Web backend services", "Banking and finance systems", "Large business applications", "Embedded and IoT systems"] }],
  "ne-etmek": [{ paragraphs: ["With Java, you can build desktop apps, mobile apps, backend services, APIs, and large-scale business systems."], heading: "Example", code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Java!");\n  }\n}' }],
  oyrenmek: [{ paragraphs: ["Java is a structured language, but it introduces concepts like classes, objects, inheritance, and collections that take practice to master."], list: ["Variables", "Control flow", "Methods", "Classes and objects", "OOP", "Collections", "Exceptions"], ordered: true }],
  ustunluk: [{ heading: "Advantages", list: ["Portable", "Strong OOP model", "Large community", "Reliable ecosystem", "Popular frameworks"] }, { heading: "Disadvantages", list: ["More verbose code", "Needs more memory in some cases", "Learning curve for beginners"] }],
  sintaksis: [{ heading: "Variables", code: 'int age = 25;\nString name = "Ali";' }, { heading: "Condition", code: 'if (age >= 18) {\n    System.out.println("Adult");\n}' }, { heading: "Loop", code: 'for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}' }, { heading: "Method", code: 'public static void greet(String name) {\n    System.out.println("Hello, " + name);\n}' }],
  numuneler: [{ heading: "Hello message", code: 'System.out.println("Hello, world!");' }, { heading: "Addition", code: 'int a = 10;\nint b = 20;\nSystem.out.println(a + b);' }, { heading: "Check condition", code: 'int score = 85;\nif (score >= 50) {\n    System.out.println("Passed");\n} else {\n    System.out.println("Failed");\n}' }, { heading: "Array", code: 'int[] numbers = {1, 2, 3, 4, 5};\nfor (int n : numbers) {\n    System.out.println(n);\n}' }],
  suallar: [{ heading: "What is Java?", paragraphs: ["Java is a platform-independent programming language used for many application types."] }, { heading: "Can Java be used for Android?", paragraphs: ["Yes. Java has long been used in Android development."] }, { heading: "Is Java difficult to learn?", paragraphs: ["It is structured, but it requires practice and understanding of object-oriented concepts."] }, { heading: "Is Java the same as JavaScript?", paragraphs: ["No. They are different languages with different purposes."] }],
};

const TR: Record<(typeof ORDER)[number], readonly ProgrammingBlock[]> = {
  nedir: [{ paragraphs: ["Java, platformdan bağımsız çalışan ve geniş bir kullanım alanına sahip, nesneye dayalı bir programlama dilidir.", "Android uygulamaları, kurumsal sistemler ve arka uç yazılımları için sıkça tercih edilir."] }],
  istifade: [{ paragraphs: ["Java aşağıdaki alanlarda kullanılır:"], list: ["Android uygulamaları", "Sunucu tarafı geliştirme", "Kurumsal yazılımlar", "Banka ve finans uygulamaları", "Geniş ölçekli iş sistemleri", "IoT ve gömülü sistemler"] }],
  "ne-etmek": [{ paragraphs: ["Java ile mobil uygulamalar, web servisleri, API'ler ve büyük ölçekli iş yazılımları geliştirmek mümkündür."], heading: "Örnek", code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Merhaba, Java!");\n  }\n}' }],
  oyrenmek: [{ paragraphs: ["Java öğrenmek için sınıflar, nesneler, kalıtım ve koleksiyonlar gibi kavramları anlamak gerekir."], list: ["Değişkenler", "Koşullar", "Döngüler", "Metodlar", "Sınıflar ve nesneler", "OOP", "Koleksiyonlar", "İstisnalar"], ordered: true }],
  ustunluk: [{ heading: "Avantajları", list: ["Taşınabilirlik", "Güçlü OOP yapısı", "Geniş topluluk", "Güvenilir ekosistem", "Popüler frameworkler"] }, { heading: "Dezavantajları", list: ["Daha uzun kodlar", "Bazı durumlarda daha fazla kaynak tüketimi", "Yeni başlayanlar için öğrenme eğrisi"] }],
  sintaksis: [{ heading: "Değişkenler", code: 'int age = 25;\nString name = "Ali";' }, { heading: "Koşul", code: 'if (age >= 18) {\n    System.out.println("Yetişkin");\n}' }, { heading: "Döngü", code: 'for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}' }, { heading: "Metod", code: 'public static void greet(String name) {\n    System.out.println("Merhaba, " + name);\n}' }],
  numuneler: [{ heading: "Merhaba mesajı", code: 'System.out.println("Merhaba dünya!");' }, { heading: "Toplama", code: 'int a = 10;\nint b = 20;\nSystem.out.println(a + b);' }, { heading: "Koşul kontrolü", code: 'int score = 85;\nif (score >= 50) {\n    System.out.println("Geçtiniz");\n} else {\n    System.out.println("Başarısız");\n}' }, { heading: "Dizi", code: 'int[] numbers = {1, 2, 3, 4, 5};\nfor (int n : numbers) {\n    System.out.println(n);\n}' }],
  suallar: [{ heading: "Java nedir?", paragraphs: ["Java, pek çok türde uygulama geliştirmek için kullanılan nesne odaklı bir programlama dilidir."] }, { heading: "Java Android için kullanılabilir mi?", paragraphs: ["Evet. Android uygulama geliştirmede Java uzun süre yaygın olarak kullanıldı."] }, { heading: "Java öğrenmek zor mu?", paragraphs: ["Yapılandırılmış olması nedeniyle zor görünse de doğru yöntemle öğrenmek mümkündür."] }, { heading: "Java ve JavaScript aynı mı?", paragraphs: ["Hayır. İkisi farklı dillerdir ve farklı amaçlar için kullanılır."] }],
};

const AR: Record<(typeof ORDER)[number], readonly ProgrammingBlock[]> = {
  nedir: [{ paragraphs: ["Java هي لغة برمجة قوية ومُتعددة الاستخدامات تعتمد على البرمجة الشيئية، وتعمل عبر المنصات بشكل واسع.", "تُستخدم في تطبيقات الأندرويد والأنظمة المؤسسية والخدمات الخلفية ومشاريع البرمجة الكبيرة."] }],
  istifade: [{ paragraphs: ["تُستخدم Java في مجالات متعددة:"], list: ["تطبيقات Android", "الخدمات الخلفية", "البرمجيات المؤسسية", "أنظمة البنوك والتمويل", "تطبيقات الأعمال الكبيرة", "الأنظمة المدمجة والـ IoT"] }],
  "ne-etmek": [{ paragraphs: ["باستخدام Java يمكن بناء تطبيقات الهاتف والخدمات الخلفية وواجهات API ونظم أعمال كبيرة."], heading: "مثال", code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("مرحبًا، Java!");\n  }\n}' }],
  oyrenmek: [{ paragraphs: ["لتعلم Java يجب فهم المفاهيم الأساسية مثل الطبقات والكائنات والميراث والمجموعات."], list: ["المتغيرات", "الشروط", "الحلقات", "الوظائف", "الطبقات والكائنات", "البرمجة الشيئية", "المجموعات", "استثناءات الأخطاء"], ordered: true }],
  ustunluk: [{ heading: "المزايا", list: ["قابلية النقل عبر المنصات", "هيكل برمجي قوي", "مجتمع كبير", "بيئة موثوقة", "إطارات عمل شائعة"] }, { heading: "العيوب", list: ["كود أطول", "استهلاك أكبر للموارد في بعض الحالات", "منحنى تعلم أعلى للمبتدئين"] }],
  sintaksis: [{ heading: "المتغيرات", code: 'int age = 25;\nString name = "Ali";' }, { heading: "الشرط", code: 'if (age >= 18) {\n    System.out.println("بالغ");\n}' }, { heading: "الحلقة", code: 'for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}' }, { heading: "الدالة", code: 'public static void greet(String name) {\n    System.out.println("مرحبًا، " + name);\n}' }],
  numuneler: [{ heading: "رسالة ترحيب", code: 'System.out.println("مرحبًا بالعالم!");' }, { heading: "الجمع", code: 'int a = 10;\nint b = 20;\nSystem.out.println(a + b);' }, { heading: "فحص الشرط", code: 'int score = 85;\nif (score >= 50) {\n    System.out.println("نجحت");\n} else {\n    System.out.println("فشل");\n}' }, { heading: "المصفوفة", code: 'int[] numbers = {1, 2, 3, 4, 5};\nfor (int n : numbers) {\n    System.out.println(n);\n}' }],
  suallar: [{ heading: "ما هي Java؟", paragraphs: ["Java هي لغة برمجة قوية تُستخدم في أنواع كثيرة من التطبيقات."] }, { heading: "هل يمكن استخدام Java لتطبيقات Android؟", paragraphs: ["نعم. استخدمت Java لفترة طويلة في تطوير Android."] }, { heading: "هل تعلم Java صعب؟", paragraphs: ["قد يبدو الأمر معقدًا أولاً، لكن مع الممارسة يصبح ممكنًا."] }, { heading: "هل Java وJavaScript نفس اللغة؟", paragraphs: ["لا. هما لغتان مختلفتان ويستخدمان لأغراض مختلفة."] }],
};

const RU: Record<(typeof ORDER)[number], readonly ProgrammingBlock[]> = {
  nedir: [{ paragraphs: ["Java — широко используемый объектно-ориентированный язык программирования, который работает на разных платформах.", "Его применяют в Android, backend, enterprise-системах и крупных бизнес-приложениях."] }],
  istifade: [{ paragraphs: ["Java используют в разных областях:"], list: ["Android-приложения", "Backend-сервисы", "Корпоративные системы", "Банковские и финансовые решения", "Крупные бизнес-приложения", "Встраиваемые системы и IoT"] }],
  "ne-etmek": [{ paragraphs: ["С помощью Java можно создавать мобильные приложения, веб-сервисы, API и большие бизнес-системы."], heading: "Пример", code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Привет, Java!");\n  }\n}' }],
  oyrenmek: [{ paragraphs: ["Для изучения Java важно понимать классы, объекты, наследование и коллекции."], list: ["Переменные", "Условия", "Циклы", "Методы", "Классы и объекты", "ООП", "Коллекции", "Обработка исключений"], ordered: true }],
  ustunluk: [{ heading: "Преимущества", list: ["Портируемость", "Сильная модель ООП", "Большое сообщество", "Надёжная экосистема", "Популярные фреймворки"] }, { heading: "Недостатки", list: ["Более многословный синтаксис", "Больше расход памяти", "Порой более сложный старт для новичков"] }],
  sintaksis: [{ heading: "Переменные", code: 'int age = 25;\nString name = "Ali";' }, { heading: "Условие", code: 'if (age >= 18) {\n    System.out.println("Совершеннолетний");\n}' }, { heading: "Цикл", code: 'for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}' }, { heading: "Метод", code: 'public static void greet(String name) {\n    System.out.println("Привет, " + name);\n}' }],
  numuneler: [{ heading: "Приветствие", code: 'System.out.println("Привет, мир!");' }, { heading: "Сложение", code: 'int a = 10;\nint b = 20;\nSystem.out.println(a + b);' }, { heading: "Проверка условия", code: 'int score = 85;\nif (score >= 50) {\n    System.out.println("Зачёт");\n} else {\n    System.out.println("Не зачёт");\n}' }, { heading: "Массив", code: 'int[] numbers = {1, 2, 3, 4, 5};\nfor (int n : numbers) {\n    System.out.println(n);\n}' }],
  suallar: [{ heading: "Что такое Java?", paragraphs: ["Java — язык программирования, используемый во многих типах приложений."] }, { heading: "Можно ли использовать Java для Android?", paragraphs: ["Да. Java долгое время использовалась в Android-разработке."] }, { heading: "Сложно ли изучать Java?", paragraphs: ["Сначала может показаться сложно, но с практикой это вполне освоимо."] }, { heading: "Java и JavaScript — одно и то же?", paragraphs: ["Нет. Это разные языки с разными задачами."] }],
};

const BODIES: Partial<Record<Lang, typeof AZ>> = { az: AZ, en: EN, tr: TR, ar: AR, ru: RU };

export function javaSections(lang: Lang): readonly ProgrammingSection[] {
  const body = BODIES[lang];
  return ORDER.map((id) => ({
    id,
    title: TITLES[id][lang],
    blocks: body?.[id],
  }));
}
