import { l5 as t } from "./meta";
import type { OwnPageContent } from "./own-types";

export const OWN_SQL: OwnPageContent = {
  select: [
    {
      id: "select",
      title: t("SELECT: cədvəldən oxu", "SELECT: read from a table", "SELECT: tablodan oku", "SELECT: اقرأ من جدول", "SELECT: чтение из таблицы"),
      blocks: [
        {
          paragraphs: [t(
            "SQL cədvəldən soruşmaq dilidir. SELECT hansı sütunları, FROM hansı cədvəli göstərir.",
            "SQL is the language for asking a table. SELECT says which columns, FROM says which table.",
            "SQL tablodan sorma dilidir. SELECT hangi sütunları, FROM hangi tabloyu söyler.",
            "SQL لغة السؤال من جدول. SELECT يقول أي الأعمدة، وFROM أي جدول.",
            "SQL — язык вопросов к таблице. SELECT говорит, какие столбцы, FROM — какую таблицу.",
          )],
          code: 'SELECT name, city\nFROM users;',
        },
      ],
    },
    {
      id: "where",
      title: t("WHERE: şərt", "WHERE: a condition", "WHERE: koşul", "WHERE: شرط", "WHERE: условие"),
      blocks: [
        {
          paragraphs: [t(
            "WHERE yalnız uyğun sətirləri saxlayır. Bu sorğu Bakıdakı istifadəçilərin adını gətirir.",
            "WHERE keeps only the matching rows. This query brings the names of users in Baku.",
            "WHERE yalnız uyan satırları tutar. Bu sorgu Bakü'deki kullanıcıların adını getirir.",
            "WHERE يُبقي الصفوف المطابقة فقط. هذا الاستعلام يجلب أسماء المستخدمين في باكو.",
            "WHERE оставляет только подходящие строки. Этот запрос приносит имена пользователей из Баку.",
          )],
          code: 'SELECT name\nFROM users\nWHERE city = \'Baku\';',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("SELECT nə seçir? Cədvəldən görmək istədiyin sütunları.", "What does SELECT pick? The columns you want to see from the table.", "SELECT ne seçer? Tablodan görmek istediğin sütunları.", "ماذا يختار SELECT؟ الأعمدة التي تريد رؤيتها من الجدول.", "Что выбирает SELECT? Столбцы, которые вы хотите видеть из таблицы."),
            t("FROM nə üçündür? Məlumatın hansı cədvəldə olduğunu deyir.", "What is FROM for? It says which table holds the data.", "FROM ne işe yarar? Verinin hangi tabloda olduğunu söyler.", "فيم يُستخدم FROM؟ يقول في أي جدول البيانات.", "Зачем FROM? Говорит, в какой таблице лежат данные."),
            t("WHERE yazılmazsa nə olur? Cədvəldəki bütün sətirlər gəlir.", "What if there is no WHERE? Every row in the table comes back.", "WHERE yazılmazsa ne olur? Tablodaki bütün satırlar gelir.", "ماذا لو لم يُكتب WHERE؟ ترجع كل صفوف الجدول.", "Что если нет WHERE? Вернутся все строки таблицы."),
            t("Şəhər adı niyə dırnaqdadır? Mətn şərti dırnaq içində yazılır. Ədəd yazılmaz.", "Why is the city name in quotes? A text condition is written in quotes. A number is not.", "Şehir adı neden tırnakta? Metin koşulu tırnak içinde yazılır. Sayı yazılmaz.", "لماذا اسم المدينة بين علامتي اقتباس؟ شرط النص يُكتب بين علامتي اقتباس. الرقم لا يُكتب.", "Почему город в кавычках? Текстовое условие пишут в кавычках. Число — нет."),
          ],
        },
      ],
    },
  ],
};
