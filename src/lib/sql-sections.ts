import type { Lang } from "@/lib/i18n";
import type { ProgrammingBlock, ProgrammingSection } from "@/lib/programming";
import { sqlWorking } from "@/lib/sql-working";

const TITLES: Record<string, Record<Lang, string>> = {
  "what-is-sql": {
    az: "SQL nədir?",
    en: "What Is SQL?",
    tr: "SQL Nedir?",
    ar: "ما هو SQL؟",
    ru: "Что такое SQL?",
  },
  "what-is-sql-used-for": {
    az: "SQL nə üçün istifadə olunur?",
    en: "What Is SQL Used For?",
    tr: "SQL Ne İçin Kullanılır?",
    ar: "فيمَ يُستخدم SQL؟",
    ru: "Для чего используется SQL?",
  },
  "what-can-you-do": {
    az: "SQL ilə nələr etmək olar?",
    en: "What Can You Do with SQL?",
    tr: "SQL ile Neler Yapılabilir?",
    ar: "ماذا يمكن أن تفعل باستخدام SQL؟",
    ru: "Что можно делать с SQL?",
  },
  "is-it-hard": {
    az: "SQL öyrənmək çətindirmi?",
    en: "Is SQL Difficult to Learn?",
    tr: "SQL Öğrenmek Zor mu?",
    ar: "هل تعلم SQL صعب؟",
    ru: "Сложно ли изучать SQL?",
  },
  "advantages-and-disadvantages": {
    az: "Üstünlükləri və çatışmazlıqları",
    en: "Advantages and Disadvantages",
    tr: "Avantajları ve Dezavantajları",
    ar: "المميزات والعيوب",
    ru: "Преимущества и недостатки",
  },
  "syntax-and-basic-concepts": {
    az: "Sintaksis və əsas anlayışlar",
    en: "Syntax and Basic Concepts",
    tr: "Sözdizimi ve Temel Kavramlar",
    ar: "البناء والمفاهيم الأساسية",
    ru: "Синтаксис и основные понятия",
  },
  "code-examples": {
    az: "Kod nümunələri",
    en: "Code Examples",
    tr: "Kod Örnekleri",
    ar: "أمثلة على الأكواد",
    ru: "Примеры кода",
  },
  faq: {
    az: "Tez-tez verilən suallar",
    en: "Frequently Asked Questions",
    tr: "Sık Sorulan Sorular",
    ar: "الأسئلة الشائعة",
    ru: "Часто задаваемые вопросы",
  },
};

const ORDER = [
  "what-is-sql",
  "what-is-sql-used-for",
  "what-can-you-do",
  "is-it-hard",
  "advantages-and-disadvantages",
  "syntax-and-basic-concepts",
  "code-examples",
  "faq",
] as const;

const BODIES: Record<Lang, Record<(typeof ORDER)[number], readonly ProgrammingBlock[]>> = {
  az: {
    "what-is-sql": [
      {
        paragraphs: [
          "SQL əlaqəli verilənlər bazasındakı məlumatı sorğulamaq və dəyişdirmək üçün istifadə olunan dildir. Cədvəl sətir və sütunlardan ibarət olur. SQL həmin cədvəldən sətir seçir, yeni sətir əlavə edir, mövcud sətri yeniləyir və ya silir.",
          "SQL Python və ya JavaScript kimi ümumi proqramlaşdırma dili deyil. Onun işi proqramın pəncərəsini qurmaq deyil, saxlanmış məlumatla danışmaqdır. Sayt və tətbiq məlumatı çox vaxt bazada durur, proqram isə ona SQL ilə müraciət edir.",
          "PostgreSQL, MySQL, SQLite və SQL Server kimi sistemlər SQL qəbul edir. Əsas əmrlər oxşardır, amma hər sistemin öz kiçik fərqləri ola bilər. Buna görə bir sistemdə işləyən sorğu digərində eyni hərflə yazılmaya bilər.",
        ],
      },
    ],
    "what-is-sql-used-for": [
      {
        paragraphs: ["SQL məlumatın saxlandığı yerdə istifadə olunur:"],
        list: [
          "Lazım olan sətirləri seçmək",
          "Yeni qeyd əlavə etmək",
          "Mövcud qeydi dəyişmək",
          "Artıq lazım olmayan qeydi silmək",
          "Şərtə görə saymaq və qruplaşdırmaq",
          "Bir neçə cədvəldəki uyğun sətirləri birləşdirmək",
        ],
      },
      {
        paragraphs: [
          "Məsələn, bir tətbiq istifadəçinin yalnız öz qeydlərini göstərmək istəyəndə bu şərt adətən SQL sorğusunda yazılır. Şərt səhvdirsə, ya heç nə çıxmaz, ya da lazım olandan çox sətir çıxar.",
        ],
      },
    ],
    "what-can-you-do": [
      {
        paragraphs: ["SQL ilə cədvəl üzərində əsas işləri görmək olar:"],
        list: [
          "Bütün və ya bəzi sütunları oxumaq",
          "Bir şərtə uyğun sətirləri tapmaq",
          "Yeni sətir yazmaq",
          "Bir sütunun dəyərini dəyişmək",
          "Seçilmiş sətiri silmək",
        ],
      },
      {
        heading: "Sadə nümunə",
        code: `SELECT name
FROM books
WHERE year = 2026;`,
        after: ["Bu sorğu books cədvəlindən yalnız 2026-cı ilə aid adları seçir. Cədvəl və sütun əvvəlcədən mövcud olmalıdır."],
      },
    ],
    "is-it-hard": [
      {
        paragraphs: [
          "İlk SELECT sorğusunu oxumaq çətin deyil. Çətinlik şərt, bir neçə cədvəl və səhv silmə əmri ilə başlayır. Bir səhv WHERE olmadan yazılmış DELETE cədvəldəki sətirlərin hamısını silə bilər.",
          "Başlanğıc üçün bu sıra faydalıdır:",
        ],
        ordered: true,
        list: [
          "Cədvəl, sətir və sütun nədir",
          "SELECT və FROM",
          "WHERE ilə şərt",
          "INSERT ilə yeni sətir",
          "UPDATE ilə dəyişiklik",
          "DELETE-i əvvəl seçilmiş sətirdə sınamaq",
          "Kiçik bir cədvəl üzərində eyni sorğunu özün dəyişmək",
        ],
      },
      {
        paragraphs: ["Əvvəlcə real layihənin bazasına yox, boş və kiçik bir cədvələ sorğu yazmaq daha təhlükəsizdir."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Üstünlükləri",
        list: [
          "Lazım olan sətiri bütün cədvəli əl ilə gəzmədən seçir",
          "Əsas əmrlər bir neçə verilənlər bazasında oxşardır",
          "Şərt, sıra və sayma eyni sorğuda yazıla bilir",
          "Proqram kodu məlumatı öz içində saxlamağa məcbur qalmır",
          "Öyrənmək üçün pulsuz verilənlər bazası sistemləri var",
        ],
      },
      {
        heading: "Çatışmazlıqları",
        list: [
          "Səhifə, düymə və ya oyun məntiqi yazmır",
          "Sistemlərin yazımı hər yerdə eyni deyil",
          "Şərtsiz yeniləmə və silmə çox sətiri dəyişə bilər",
          "İstifadəçinin yazdığı mətni birbaşa sorğunun içinə yapışdırmaq təhlükəlidir",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: [
          "Sorğu adətən nə ediləcəyini deyən əmrlə başlayır. SELECT oxuyur, INSERT əlavə edir, UPDATE dəyişir, DELETE silir. Cədvəlin adı FROM və ya INTO-dan sonra yazılır.",
        ],
      },
      {
        heading: "Oxumaq",
        code: `SELECT name, year
FROM books
WHERE year >= 2020;`,
      },
      {
        heading: "Əlavə etmək",
        code: `INSERT INTO books (name, year)
VALUES ('Nümunə kitab', 2026);`,
      },
      {
        heading: "Dəyişmək",
        code: `UPDATE books
SET year = 2025
WHERE name = 'Nümunə kitab';`,
      },
      {
        paragraphs: [
          "WHERE hissəsi hansı sətirlərə toxunulacağını göstərir. Onu UPDATE və DELETE-də atmaq, şərtə uyğun bir sətir əvəzinə cədvəlin qalan sətirlərini də dəyişə bilər.",
        ],
      },
    ],
    "code-examples": [
      {
        heading: "Bir şərtə uyğun sətirlər",
        code: `SELECT title
FROM notes
WHERE lang = 'az';`,
      },
      {
        heading: "Saymaq",
        code: `SELECT COUNT(*)
FROM notes
WHERE lang = 'az';`,
      },
      {
        heading: "Yalnız seçilmiş sətiri silmək",
        code: `DELETE FROM notes
WHERE id = 15;`,
      },
    ],
    faq: [
      {
        heading: "SQL nədir?",
        paragraphs: ["SQL əlaqəli verilənlər bazasındakı məlumatı oxumaq və dəyişdirmək üçün istifadə olunan sorğu dilidir."],
      },
      {
        heading: "SQL proqramlaşdırma dilidirmi?",
        paragraphs: ["O, məlumat üçün sorğu dilidir. Python kimi proqramın bütün hissəsini yazmaq üçün istifadə olunmur."],
      },
      {
        heading: "SQL pulsuzdur?",
        paragraphs: ["Dilin özünü öyrənmək pulsuzdur. PostgreSQL və SQLite kimi sistemləri də pulsuz qurmaq olar. Bəzi server məhsullarının ayrıca şərtləri ola bilər."],
      },
      {
        heading: "SQL və MySQL eynidirmi?",
        paragraphs: ["Xeyr. SQL dildir. MySQL isə bu dili qəbul edən verilənlər bazası sistemlərindən biridir."],
      },
      {
        heading: "Excel ilə SQL eynidirmi?",
        paragraphs: ["Xeyr. Cədvəl fikir olaraq yaxındır, amma SQL sorğu ilə işləyir və verilənlər bazasında saxlanan sətirlər üçündür."],
      },
      {
        heading: "Bir səhv sorğu məlumatı silə bilərmi?",
        paragraphs: ["Bəli. WHERE olmadan yazılmış DELETE və ya UPDATE gözləniləndən çox sətirə toxuna bilər. Əvvəl kiçik cədvəldə yoxlamaq lazımdır."],
      },
      {
        heading: "İstifadəçinin yazdığı mətni sorğuya birbaşa əlavə etmək olarmı?",
        paragraphs: ["Olmaz. Mətni sorğunun içinə yapışdırmaq əvəzinə, verilənlər bazasının qəbul etdiyi ayrıca parametrdən istifadə etmək lazımdır."],
      },
    ],
  },
  en: {
    "what-is-sql": [
      {
        paragraphs: [
          "SQL is a language used to query and change data in a relational database. A table is made of rows and columns. SQL selects rows from that table, adds a new row, updates an existing row, or deletes one.",
          "SQL is not a general-purpose programming language like Python or JavaScript. Its job is not to build the program window. Its job is to talk to stored data. A site or an app often keeps its data in a database and reaches it with SQL.",
          "Systems such as PostgreSQL, MySQL, SQLite, and SQL Server accept SQL. The main commands are similar, but each system can have small differences. A query that works in one system may not be written with the same letters in another.",
        ],
      },
    ],
    "what-is-sql-used-for": [
      {
        paragraphs: ["SQL is used where data is stored:"],
        list: [
          "Selecting the rows you need",
          "Adding a new record",
          "Changing an existing record",
          "Deleting a record that is no longer needed",
          "Counting and grouping by a condition",
          "Joining matching rows from more than one table",
        ],
      },
      {
        paragraphs: [
          "For example, when an application wants to show only one user's own records, that condition is usually written in the SQL query. If the condition is wrong, the result may be empty or larger than it should be.",
        ],
      },
    ],
    "what-can-you-do": [
      {
        paragraphs: ["With SQL you can do the basic work on a table:"],
        list: [
          "Read all columns or only some of them",
          "Find rows that match a condition",
          "Write a new row",
          "Change the value of a column",
          "Delete a selected row",
        ],
      },
      {
        heading: "A simple example",
        code: `SELECT name
FROM books
WHERE year = 2026;`,
        after: ["This query selects only the names in the books table for the year 2026. The table and the columns must already exist."],
      },
    ],
    "is-it-hard": [
      {
        paragraphs: [
          "Reading a first SELECT query is not hard. It gets harder with conditions, more than one table, and a wrong delete command. A DELETE written without WHERE can remove every row in the table.",
          "This order is useful at the start:",
        ],
        ordered: true,
        list: [
          "What a table, a row, and a column are",
          "SELECT and FROM",
          "A condition with WHERE",
          "A new row with INSERT",
          "A change with UPDATE",
          "Trying DELETE on a row you selected first",
          "Changing the same query yourself on a small table",
        ],
      },
      {
        paragraphs: ["It is safer to write the first queries against an empty little table, not against a real project's database."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Advantages",
        list: [
          "It selects the needed rows without walking the whole table by hand",
          "The main commands are similar in several database systems",
          "A condition, an order, and a count can sit in the same query",
          "Application code does not have to keep all the data inside itself",
          "There are free database systems for learning",
        ],
      },
      {
        heading: "Disadvantages",
        list: [
          "It does not write a page, a button, or game logic",
          "The spelling is not identical in every system",
          "An update or a delete without a condition can change many rows",
          "Pasting text a user typed straight into the query is unsafe",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: [
          "A query usually starts with the command that says what to do. SELECT reads, INSERT adds, UPDATE changes, and DELETE removes. The table name comes after FROM or INTO.",
        ],
      },
      { heading: "Reading", code: `SELECT name, year\nFROM books\nWHERE year >= 2020;` },
      { heading: "Adding", code: `INSERT INTO books (name, year)\nVALUES ('Sample book', 2026);` },
      { heading: "Changing", code: `UPDATE books\nSET year = 2025\nWHERE name = 'Sample book';` },
      {
        paragraphs: [
          "The WHERE part says which rows are touched. Leaving it out of UPDATE or DELETE can change the rest of the table instead of one matching row.",
        ],
      },
    ],
    "code-examples": [
      { heading: "Rows that match one condition", code: `SELECT title\nFROM notes\nWHERE lang = 'en';` },
      { heading: "Counting", code: `SELECT COUNT(*)\nFROM notes\nWHERE lang = 'en';` },
      { heading: "Deleting only the selected row", code: `DELETE FROM notes\nWHERE id = 15;` },
    ],
    faq: [
      { heading: "What is SQL?", paragraphs: ["SQL is a query language used to read and change data in a relational database."] },
      { heading: "Is SQL a programming language?", paragraphs: ["It is a query language for data. It is not used the way Python is used to write the whole application."] },
      { heading: "Is SQL free?", paragraphs: ["Learning the language is free. Systems such as PostgreSQL and SQLite can also be installed for free. Some server products have their own terms."] },
      { heading: "Are SQL and MySQL the same?", paragraphs: ["No. SQL is the language. MySQL is one database system that accepts that language."] },
      { heading: "Are Excel and SQL the same?", paragraphs: ["No. A table is a similar idea, but SQL works by query and is meant for rows stored in a database."] },
      { heading: "Can one wrong query delete data?", paragraphs: ["Yes. A DELETE or an UPDATE written without WHERE can touch more rows than you expected. Try it first on a small table."] },
      { heading: "Can text typed by a user be pasted straight into a query?", paragraphs: ["No. Instead of gluing that text into the query, use a separate parameter that the database accepts."] },
    ],
  },
  tr: {
    "what-is-sql": [
      {
        paragraphs: [
          "SQL, ilişkisel bir veritabanındaki veriyi sorgulamak ve değiştirmek için kullanılan dildir. Tablo satır ve sütunlardan oluşur. SQL o tablodan satır seçer, yeni satır ekler, var olan satırı günceller veya siler.",
          "SQL, Python veya JavaScript gibi genel amaçlı bir programlama dili değildir. İşi program penceresini kurmak değil, saklanan veriyle konuşmaktır. Bir site veya uygulama verisini çoğu zaman veritabanında tutar ve ona SQL ile ulaşır.",
          "PostgreSQL, MySQL, SQLite ve SQL Server gibi sistemler SQL kabul eder. Ana komutlar benzerdir, ama her sistemin küçük farkları olabilir. Bir sistemde çalışan sorgu diğerinde aynı harflerle yazılmayabilir.",
        ],
      },
    ],
    "what-is-sql-used-for": [
      {
        paragraphs: ["SQL verinin durduğu yerde kullanılır:"],
        list: ["Gerekli satırları seçmek", "Yeni kayıt eklemek", "Var olan kaydı değiştirmek", "Artık gerekmeyen kaydı silmek", "Koşula göre saymak ve gruplamak", "Birden fazla tablodaki uyan satırları birleştirmek"],
      },
      { paragraphs: ["Örneğin bir uygulama yalnızca kullanıcının kendi kayıtlarını göstermek istediğinde bu koşul genellikle SQL sorgusunda yazılır. Koşul yanlışsa ya hiçbir şey çıkmaz ya da gerekenden fazla satır çıkar."] },
    ],
    "what-can-you-do": [
      {
        paragraphs: ["SQL ile bir tablo üzerinde temel işler yapılabilir:"],
        list: ["Tüm sütunları veya bir kısmını okumak", "Bir koşula uyan satırları bulmak", "Yeni satır yazmak", "Bir sütunun değerini değiştirmek", "Seçilen satırı silmek"],
      },
      {
        heading: "Basit örnek",
        code: `SELECT name\nFROM books\nWHERE year = 2026;`,
        after: ["Bu sorgu books tablosundan yalnızca 2026 yılına ait adları seçer. Tablo ve sütunlar önceden var olmalıdır."],
      },
    ],
    "is-it-hard": [
      {
        paragraphs: [
          "İlk SELECT sorgusunu okumak zor değildir. Zorluk koşul, birden fazla tablo ve yanlış silme komutuyla başlar. WHERE olmadan yazılmış bir DELETE tablodaki bütün satırları silebilir.",
          "Başlangıç için şu sıra faydalıdır:",
        ],
        ordered: true,
        list: ["Tablo, satır ve sütun nedir", "SELECT ve FROM", "WHERE ile koşul", "INSERT ile yeni satır", "UPDATE ile değişiklik", "DELETE'i önce seçtiğiniz satırda denemek", "Küçük bir tabloda aynı sorguyu kendiniz değiştirmek"],
      },
      { paragraphs: ["İlk sorguları gerçek bir projenin veritabanına değil, boş ve küçük bir tabloya yazmak daha güvenlidir."] },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Avantajları",
        list: ["Gerekli satırı bütün tabloyu elle gezmeden seçer", "Ana komutlar birkaç veritabanında benzerdir", "Koşul, sıralama ve sayma aynı sorguda yazılabilir", "Uygulama kodu verinin tamamını kendi içinde tutmak zorunda kalmaz", "Öğrenmek için ücretsiz veritabanı sistemleri vardır"],
      },
      {
        heading: "Dezavantajları",
        list: ["Sayfa, düğme veya oyun mantığı yazmaz", "Yazım her sistemde aynı değildir", "Koşulsuz güncelleme ve silme çok satırı değiştirebilir", "Kullanıcının yazdığı metni doğrudan sorgunun içine yapıştırmak tehlikelidir"],
      },
    ],
    "syntax-and-basic-concepts": [
      { paragraphs: ["Sorgu genellikle ne yapılacağını söyleyen komutla başlar. SELECT okur, INSERT ekler, UPDATE değiştirir, DELETE siler. Tablo adı FROM veya INTO sonrasında yazılır."] },
      { heading: "Okumak", code: `SELECT name, year\nFROM books\nWHERE year >= 2020;` },
      { heading: "Eklemek", code: `INSERT INTO books (name, year)\nVALUES ('Örnek kitap', 2026);` },
      { heading: "Değiştirmek", code: `UPDATE books\nSET year = 2025\nWHERE name = 'Örnek kitap';` },
      { paragraphs: ["WHERE kısmı hangi satırlara dokunulacağını gösterir. Onu UPDATE ve DELETE içinde atlamak, koşula uyan bir satır yerine tablonun kalan satırlarını da değiştirebilir."] },
    ],
    "code-examples": [
      { heading: "Bir koşula uyan satırlar", code: `SELECT title\nFROM notes\nWHERE lang = 'tr';` },
      { heading: "Saymak", code: `SELECT COUNT(*)\nFROM notes\nWHERE lang = 'tr';` },
      { heading: "Yalnızca seçilen satırı silmek", code: `DELETE FROM notes\nWHERE id = 15;` },
    ],
    faq: [
      { heading: "SQL nedir?", paragraphs: ["SQL, ilişkisel veritabanındaki veriyi okumak ve değiştirmek için kullanılan sorgu dilidir."] },
      { heading: "SQL bir programlama dili midir?", paragraphs: ["O, veri için bir sorgu dilidir. Python gibi uygulamanın bütün parçasını yazmak için kullanılmaz."] },
      { heading: "SQL ücretsiz mi?", paragraphs: ["Dilin kendisini öğrenmek ücretsizdir. PostgreSQL ve SQLite gibi sistemler de ücretsiz kurulabilir. Bazı sunucu ürünlerinin ayrı koşulları olabilir."] },
      { heading: "SQL ile MySQL aynı mıdır?", paragraphs: ["Hayır. SQL dildir. MySQL ise bu dili kabul eden veritabanı sistemlerinden biridir."] },
      { heading: "Excel ile SQL aynı mıdır?", paragraphs: ["Hayır. Tablo fikir olarak yakındır, ama SQL sorgu ile çalışır ve veritabanında duran satırlar içindir."] },
      { heading: "Yanlış bir sorgu veriyi silebilir mi?", paragraphs: ["Evet. WHERE olmadan yazılmış DELETE veya UPDATE beklenenden fazla satıra dokunabilir. Önce küçük bir tabloda denemek gerekir."] },
      { heading: "Kullanıcının yazdığı metin sorguya doğrudan eklenebilir mi?", paragraphs: ["Eklenmemelidir. Metni sorgunun içine yapıştırmak yerine veritabanının kabul ettiği ayrı bir parametre kullanılmalıdır."] },
    ],
  },
  ar: {
    "what-is-sql": [
      {
        paragraphs: [
          "SQL لغة تُستخدم للاستعلام عن البيانات وتغييرها في قاعدة بيانات علائقية. يتكوّن الجدول من صفوف وأعمدة. يختار SQL صفوفًا من ذلك الجدول، أو يضيف صفًا، أو يعدّل صفًا موجودًا، أو يحذفه.",
          "SQL ليست لغة برمجة عامة مثل Python أو JavaScript. عملها ليس بناء نافذة البرنامج، بل الحديث مع البيانات المخزّنة. كثير من المواقع والتطبيقات تبقي بياناتها في قاعدة وتصل إليها بـ SQL.",
          "أنظمة مثل PostgreSQL وMySQL وSQLite وSQL Server تقبل SQL. الأوامر الأساسية متشابهة، لكن قد تكون لكل نظام فروق صغيرة. والاستعلام الذي يعمل في نظام قد لا يُكتب بالحروف نفسها في نظام آخر.",
        ],
      },
    ],
    "what-is-sql-used-for": [
      {
        paragraphs: ["يُستخدم SQL حيث تُحفظ البيانات:"],
        list: ["اختيار الصفوف المطلوبة", "إضافة سجل جديد", "تغيير سجل موجود", "حذف سجل لم يعد مطلوبًا", "العد والتجميع حسب شرط", "جمع الصفوف المتطابقة من أكثر من جدول"],
      },
      { paragraphs: ["مثلًا حين يريد تطبيق أن يعرض سجلات المستخدم نفسه فقط، يُكتب هذا الشرط عادة في استعلام SQL. إذا كان الشرط خاطئًا فقد لا تظهر نتيجة، أو تظهر صفوف أكثر من اللازم."] },
    ],
    "what-can-you-do": [
      {
        paragraphs: ["يمكن باستخدام SQL القيام بالأعمال الأساسية على جدول:"],
        list: ["قراءة كل الأعمدة أو بعضها", "إيجاد الصفوف التي تطابق شرطًا", "كتابة صف جديد", "تغيير قيمة عمود", "حذف صف محدد"],
      },
      {
        heading: "مثال بسيط",
        code: `SELECT name\nFROM books\nWHERE year = 2026;`,
        after: ["يختار هذا الاستعلام من جدول books الأسماء الخاصة بسنة 2026 فقط. يجب أن يكون الجدول والأعمدة موجودين من قبل."],
      },
    ],
    "is-it-hard": [
      {
        paragraphs: [
          "قراءة أول استعلام SELECT ليست صعبة. تبدأ الصعوبة مع الشرط وأكثر من جدول وأمر حذف خاطئ. قد يحذف DELETE المكتوب من دون WHERE كل الصفوف في الجدول.",
          "هذا الترتيب مفيد في البداية:",
        ],
        ordered: true,
        list: ["ما الجدول والصف والعمود", "SELECT وFROM", "الشرط باستخدام WHERE", "صف جديد باستخدام INSERT", "التغيير باستخدام UPDATE", "تجربة DELETE على صف حددته أولًا", "تغيير الاستعلام نفسه بنفسك على جدول صغير"],
      },
      { paragraphs: ["الأأمن أن تُكتب الاستعلامات الأولى على جدول صغير فارغ، لا على قاعدة مشروع حقيقي."] },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "المزايا",
        list: ["يختار الصف المطلوب من دون المرور على الجدول كله يدويًا", "الأوامر الأساسية متشابهة في عدة أنظمة قواعد بيانات", "يمكن كتابة الشرط والترتيب والعد في الاستعلام نفسه", "لا يضطر كود التطبيق إلى حفظ كل البيانات داخله", "توجد أنظمة قواعد بيانات مجانية للتعلم"],
      },
      {
        heading: "العيوب",
        list: ["لا يكتب صفحة أو زرًا أو منطق لعبة", "طريقة الكتابة ليست متطابقة في كل نظام", "قد يغيّر التحديث أو الحذف من دون شرط صفوفًا كثيرة", "لصق النص الذي كتبه المستخدم مباشرة داخل الاستعلام خطر"],
      },
    ],
    "syntax-and-basic-concepts": [
      { paragraphs: ["يبدأ الاستعلام عادة بالأمر الذي يقول ماذا سيُفعل. SELECT يقرأ، وINSERT يضيف، وUPDATE يغيّر، وDELETE يحذف. ويأتي اسم الجدول بعد FROM أو INTO."] },
      { heading: "القراءة", code: `SELECT name, year\nFROM books\nWHERE year >= 2020;` },
      { heading: "الإضافة", code: `INSERT INTO books (name, year)\nVALUES ('كتاب مثال', 2026);` },
      { heading: "التغيير", code: `UPDATE books\nSET year = 2025\nWHERE name = 'كتاب مثال';` },
      { paragraphs: ["جزء WHERE يبيّن أي الصفوف ستُمَس. وتركه في UPDATE أو DELETE قد يغيّر بقية الجدول بدل صف واحد مطابق."] },
    ],
    "code-examples": [
      { heading: "صفوف تطابق شرطًا واحدًا", code: `SELECT title\nFROM notes\nWHERE lang = 'ar';` },
      { heading: "العد", code: `SELECT COUNT(*)\nFROM notes\nWHERE lang = 'ar';` },
      { heading: "حذف الصف المحدد فقط", code: `DELETE FROM notes\nWHERE id = 15;` },
    ],
    faq: [
      { heading: "ما هو SQL؟", paragraphs: ["SQL لغة استعلام تُستخدم لقراءة البيانات وتغييرها في قاعدة بيانات علائقية."] },
      { heading: "هل SQL لغة برمجة؟", paragraphs: ["هي لغة استعلام للبيانات. ولا تُستخدم كما تُستخدم Python لكتابة التطبيق كله."] },
      { heading: "هل SQL مجاني؟", paragraphs: ["تعلم اللغة نفسها مجاني. ويمكن تثبيت أنظمة مثل PostgreSQL وSQLite مجانًا. قد تكون لبعض منتجات الخادم شروط منفصلة."] },
      { heading: "هل SQL وMySQL شيء واحد؟", paragraphs: ["لا. SQL هي اللغة. وMySQL أحد أنظمة قواعد البيانات التي تقبل هذه اللغة."] },
      { heading: "هل Excel وSQL شيء واحد؟", paragraphs: ["لا. الجدول فكرة قريبة، لكن SQL يعمل بالاستعلام وهو للصفوف المحفوظة في قاعدة بيانات."] },
      { heading: "هل يمكن لاستعلام خاطئ أن يحذف البيانات؟", paragraphs: ["نعم. قد يمس DELETE أو UPDATE المكتوب من دون WHERE صفوفًا أكثر مما تتوقع. جرّبه أولًا على جدول صغير."] },
      { heading: "هل يجوز لصق النص الذي كتبه المستخدم مباشرة في الاستعلام؟", paragraphs: ["لا. بدل لصق النص داخل الاستعلام، استخدم معاملًا منفصلًا تقبله قاعدة البيانات."] },
    ],
  },
  ru: {
    "what-is-sql": [
      {
        paragraphs: [
          "SQL — язык, которым запрашивают и меняют данные в реляционной базе. Таблица состоит из строк и столбцов. SQL выбирает строки из этой таблицы, добавляет новую строку, обновляет существующую или удаляет её.",
          "SQL — не язык программирования общего назначения, как Python или JavaScript. Его дело не строить окно программы, а говорить с сохранёнными данными. Сайт или приложение часто держат данные в базе и обращаются к ним через SQL.",
          "Системы вроде PostgreSQL, MySQL, SQLite и SQL Server принимают SQL. Основные команды похожи, но у каждой системы могут быть небольшие отличия. Запрос, который работает в одной системе, в другой может быть записан не теми же буквами.",
        ],
      },
    ],
    "what-is-sql-used-for": [
      {
        paragraphs: ["SQL используют там, где хранятся данные:"],
        list: ["Выбрать нужные строки", "Добавить новую запись", "Изменить существующую запись", "Удалить запись, которая больше не нужна", "Считать и группировать по условию", "Соединить подходящие строки из нескольких таблиц"],
      },
      { paragraphs: ["Например, когда приложение хочет показать только собственные записи пользователя, это условие обычно пишут в запросе SQL. Если условие неверное, результат будет пустым или больше, чем нужно."] },
    ],
    "what-can-you-do": [
      {
        paragraphs: ["С помощью SQL можно делать основную работу с таблицей:"],
        list: ["Читать все столбцы или только некоторые", "Находить строки, которые подходят под условие", "Записывать новую строку", "Менять значение столбца", "Удалять выбранную строку"],
      },
      {
        heading: "Простой пример",
        code: `SELECT name\nFROM books\nWHERE year = 2026;`,
        after: ["Этот запрос выбирает из таблицы books только имена за 2026 год. Таблица и столбцы должны уже существовать."],
      },
    ],
    "is-it-hard": [
      {
        paragraphs: [
          "Прочитать первый запрос SELECT нетрудно. Труднее становится с условиями, несколькими таблицами и неверной командой удаления. DELETE без WHERE может удалить все строки таблицы.",
          "В начале полезен такой порядок:",
        ],
        ordered: true,
        list: ["Что такое таблица, строка и столбец", "SELECT и FROM", "Условие через WHERE", "Новая строка через INSERT", "Изменение через UPDATE", "Пробовать DELETE на строке, которую вы сначала выбрали", "Самому менять тот же запрос на маленькой таблице"],
      },
      { paragraphs: ["Первые запросы безопаснее писать к пустой маленькой таблице, а не к базе настоящего проекта."] },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Преимущества",
        list: ["Выбирает нужную строку, не обходя всю таблицу вручную", "Основные команды похожи в нескольких системах баз данных", "Условие, порядок и подсчёт можно записать в одном запросе", "Коду приложения не нужно хранить все данные внутри себя", "Для учёбы есть бесплатные системы баз данных"],
      },
      {
        heading: "Недостатки",
        list: ["Не пишет страницу, кнопку или игровую логику", "Запись не одинакова во всех системах", "Обновление или удаление без условия может изменить много строк", "Вставлять текст, который ввёл пользователь, прямо в запрос небезопасно"],
      },
    ],
    "syntax-and-basic-concepts": [
      { paragraphs: ["Запрос обычно начинается с команды, которая говорит, что сделать. SELECT читает, INSERT добавляет, UPDATE меняет, DELETE удаляет. Имя таблицы пишут после FROM или INTO."] },
      { heading: "Чтение", code: `SELECT name, year\nFROM books\nWHERE year >= 2020;` },
      { heading: "Добавление", code: `INSERT INTO books (name, year)\nVALUES ('Пример книги', 2026);` },
      { heading: "Изменение", code: `UPDATE books\nSET year = 2025\nWHERE name = 'Пример книги';` },
      { paragraphs: ["Часть WHERE говорит, каких строк касается команда. Если убрать её из UPDATE или DELETE, может измениться не одна подходящая строка, а остальные строки таблицы."] },
    ],
    "code-examples": [
      { heading: "Строки под одно условие", code: `SELECT title\nFROM notes\nWHERE lang = 'ru';` },
      { heading: "Подсчёт", code: `SELECT COUNT(*)\nFROM notes\nWHERE lang = 'ru';` },
      { heading: "Удалить только выбранную строку", code: `DELETE FROM notes\nWHERE id = 15;` },
    ],
    faq: [
      { heading: "Что такое SQL?", paragraphs: ["SQL — язык запросов, которым читают и меняют данные в реляционной базе."] },
      { heading: "SQL — это язык программирования?", paragraphs: ["Это язык запросов для данных. Им не пишут всё приложение так, как пишут на Python."] },
      { heading: "SQL бесплатный?", paragraphs: ["Сам язык можно изучать бесплатно. Системы вроде PostgreSQL и SQLite тоже можно поставить бесплатно. У некоторых серверных продуктов свои условия."] },
      { heading: "SQL и MySQL — это одно и то же?", paragraphs: ["Нет. SQL — это язык. MySQL — одна из систем баз данных, которая этот язык принимает."] },
      { heading: "Excel и SQL — это одно и то же?", paragraphs: ["Нет. Таблица — похожая идея, но SQL работает запросом и предназначен для строк, которые лежат в базе данных."] },
      { heading: "Может ли один неверный запрос удалить данные?", paragraphs: ["Да. DELETE или UPDATE без WHERE может затронуть больше строк, чем вы ожидали. Сначала проверьте это на маленькой таблице."] },
      { heading: "Можно ли вставлять текст пользователя прямо в запрос?", paragraphs: ["Нельзя. Вместо склейки этого текста в запрос нужен отдельный параметр, который принимает база данных."] },
    ],
  },
};

export function sqlSections(lang: Lang): readonly ProgrammingSection[] {
  const sections: ProgrammingSection[] = ORDER.map((id) => ({
    id,
    title: TITLES[id][lang],
    blocks: BODIES[lang][id],
  }));
  const at = sections.findIndex((item) => item.id === "faq");
  sections.splice(at < 0 ? sections.length : at, 0, sqlWorking(lang));
  return sections;
}
