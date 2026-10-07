import type { Lang } from "@/lib/i18n";

const PREFIX: Record<Lang, string> = { az: "", en: "/en", tr: "/tr", ar: "/ar", ru: "/ru" };

export type ToolId =
  | "lorem"
  | "text"
  | "number"
  | "name"
  | "password"
  | "uuid"
  | "hash"
  | "md5"
  | "sha256"
  | "base64"
  | "url"
  | "html"
  | "json"
  | "json-min"
  | "xml"
  | "sql"
  | "js"
  | "css"
  | "html-min"
  | "css-min"
  | "unix"
  | "case"
  | "count"
  | "csv"
  | "regex"
  | "color"
  | "diff";

const L = (az: string, en: string, tr: string, ar: string, ru: string): Record<Lang, string> => ({ az, en, tr, ar, ru });

export const TOOLS_PAGE = {
  heading: L("Xidmətlər", "Services", "Hizmetler", "خدمات", "Услуги"),
  title: L(
    "Xidmətlər — kod alətləri",
    "Services — code tools",
    "Hizmetler — kod araçları",
    "خدمات — أدوات الكود",
    "Услуги — инструменты кода",
  ),
  description: L(
    "Lorem Ipsum, təsadüfi mətn, şifrə, UUID, MD5, SHA-256, Base64, JSON, XML, Unix vaxtı, hərf forması, söz sayı, rəng və regex.",
    "Lorem Ipsum, random text, a password, UUID, MD5, SHA-256, Base64, JSON, XML, Unix time, letter case, a word count, color, and regex.",
    "Lorem Ipsum, rastgele metin, parola, UUID, MD5, SHA-256, Base64, JSON, XML, Unix zamanı, harf biçimi, söz sayısı, renk ve regex.",
    "Lorem Ipsum ونص عشوائي وكلمة سر وUUID وMD5 وSHA-256 وBase64 وJSON وXML ووقت يونكس وشكل الحرف وعدّاد الكلمات واللون وregex.",
    "Lorem Ipsum, случайный текст, пароль, UUID, MD5, SHA-256, Base64, JSON, XML, время Unix, регистр, счётчик слов, цвет и regex.",
  ),
  group: L("Kod alətləri", "Code tools", "Kod araçları", "أدوات الكود", "Инструменты кода"),
  run: L("Yarat", "Make", "Üret", "أنشئ", "Сделать"),
  copy: L("Kopyala", "Copy", "Kopyala", "انسخ", "Копировать"),
  copied: L("Kopyalandı", "Copied", "Kopyalandı", "نُسخ", "Скопировано"),
  save: L("Faylı yüklə", "Download the file", "Dosyayı indir", "نزّل الملف", "Скачать файл"),
  load: L("Fayl seç", "Choose a file", "Dosya seç", "اختر ملفًا", "Выбрать файл"),
  bad: L("Mətn bu alətə uyğun deyil.", "This text does not fit the tool.", "Metin bu araca uymaz.", "هذا النص لا يناسب الأداة.", "Этот текст инструменту не подходит."),
  none: L("Uyğun gəlmədi.", "Nothing matched.", "Eşleşme yok.", "لا يوجد تطابق.", "Совпадений нет."),
  pattern: L("Nümunə", "Pattern", "Kalıp", "النمط", "Шаблон"),
  second: L("İkinci mətn", "Second text", "İkinci metin", "النص الثاني", "Второй текст"),
  upper: L("Böyük", "Upper", "Büyük", "كبير", "Верхний"),
  lower: L("Kiçik", "Lower", "Küçük", "صغير", "Нижний"),
  words: L("Söz", "Words", "Söz", "كلمات", "Слова"),
  chars: L("Simvol", "Characters", "Karakter", "حروف", "Символы"),
  nospace: L("Boşluqsuz", "No spaces", "Boşluksuz", "بلا فراغ", "Без пробелов"),
  lines: L("Sətir", "Lines", "Satır", "أسطر", "Строки"),
};

export const TOOLS: readonly { id: ToolId; label: Record<Lang, string> }[] = [
  { id: "json", label: L("JSON düzəlt", "JSON formatter", "JSON düzenle", "تنسيق JSON", "Формат JSON") },
  { id: "base64", label: L("Base64", "Base64", "Base64", "Base64", "Base64") },
  { id: "uuid", label: L("UUID", "UUID", "UUID", "UUID", "UUID") },
  { id: "password", label: L("Təsadüfi şifrə", "Random password", "Rastgele parola", "كلمة سر عشوائية", "Случайный пароль") },
  { id: "url", label: L("URL kodu", "URL code", "URL kodu", "ترميز URL", "Код URL") },
  { id: "md5", label: L("MD5", "MD5", "MD5", "MD5", "MD5") },
  { id: "sha256", label: L("SHA-256", "SHA-256", "SHA-256", "SHA-256", "SHA-256") },
  { id: "lorem", label: L("Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum") },
  { id: "json-min", label: L("JSON sıx", "JSON minifier", "JSON sıkıştır", "ضغط JSON", "Сжатие JSON") },
  { id: "html", label: L("HTML kodu", "HTML code", "HTML kodu", "ترميز HTML", "Код HTML") },
  { id: "hash", label: L("Hash", "Hash", "Hash", "Hash", "Hash") },
  { id: "css", label: L("CSS düzəlt", "CSS formatter", "CSS düzenle", "تنسيق CSS", "Формат CSS") },
  { id: "js", label: L("JavaScript düzəlt", "JavaScript formatter", "JavaScript düzenle", "تنسيق JavaScript", "Формат JavaScript") },
  { id: "html-min", label: L("HTML sıx", "HTML minifier", "HTML sıkıştır", "ضغط HTML", "Сжатие HTML") },
  { id: "css-min", label: L("CSS sıx", "CSS minifier", "CSS sıkıştır", "ضغط CSS", "Сжатие CSS") },
  { id: "number", label: L("Təsadüfi rəqəm", "Random number", "Rastgele sayı", "رقم عشوائي", "Случайное число") },
  { id: "xml", label: L("XML düzəlt", "XML formatter", "XML düzenle", "تنسيق XML", "Формат XML") },
  { id: "sql", label: L("SQL düzəlt", "SQL formatter", "SQL düzenle", "تنسيق SQL", "Формат SQL") },
  { id: "text", label: L("Təsadüfi mətn", "Random text", "Rastgele metin", "نص عشوائي", "Случайный текст") },
  { id: "name", label: L("Təsadüfi ad", "Random name", "Rastgele ad", "اسم عشوائي", "Случайное имя") },
  { id: "case", label: L("Hərf forması", "Letter case", "Harf biçimi", "شكل الحرف", "Регистр") },
  { id: "count", label: L("Söz sayğacı", "Word count", "Söz sayacı", "عدّاد الكلمات", "Счётчик слов") },
  { id: "diff", label: L("Mətn fərqi", "Text difference", "Metin farkı", "فرق النص", "Разница текста") },
  { id: "regex", label: L("Regex", "Regex", "Regex", "Regex", "Regex") },
  { id: "unix", label: L("Unix vaxtı", "Unix time", "Unix zamanı", "وقت يونكس", "Время Unix") },
  { id: "color", label: L("Rəng kodu", "Color code", "Renk kodu", "رمز اللون", "Код цвета") },
  { id: "csv", label: L("JSON və CSV", "JSON and CSV", "JSON ve CSV", "JSON و CSV", "JSON и CSV") },
];

export const TOOL_GROUPS: readonly { id: string; title: Record<Lang, string>; ids: readonly ToolId[] }[] = [
  {
    id: "gen",
    title: L("Generatorlar", "Generators", "Üreteçler", "مولدات", "Генераторы"),
    ids: ["uuid", "lorem", "number", "text", "name"],
  },
  {
    id: "code",
    title: L("Kodlaşdırma", "Encoding", "Kodlama", "ترميز", "Кодирование"),
    ids: ["base64", "url", "html"],
  },
  {
    id: "crypt",
    title: L("Şifrələmə", "Encryption", "Şifreleme", "تشفير", "Шифрование"),
    ids: ["password", "md5", "sha256", "hash"],
  },
  {
    id: "format",
    title: L("Düzəltmə", "Formatting", "Düzenleme", "تنسيق", "Оформление"),
    ids: ["json", "json-min", "css", "js", "html-min", "css-min", "xml", "sql"],
  },
  {
    id: "text",
    title: L("Mətn", "Text", "Metin", "نص", "Текст"),
    ids: ["case", "count", "diff", "regex"],
  },
  {
    id: "turn",
    title: L("Çevirici", "Converter", "Dönüştürücü", "محوّل", "Конвертер"),
    ids: ["unix", "color", "csv"],
  },
];

export function toolsPath(lang: Lang) {
  return `${PREFIX[lang]}/tools`;
}

export function toolsFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?tools$/);
  if (!match) return null;
  return (match[1] ?? "az") as Lang;
}
