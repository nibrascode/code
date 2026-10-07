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
  | "css-min";

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
    "Lorem Ipsum, təsadüfi mətn, şifrə, UUID, MD5, SHA-256, Base64, JSON, XML, SQL, HTML və CSS alətləri.",
    "Lorem Ipsum, random text, a password, UUID, MD5, SHA-256, Base64, JSON, XML, SQL, HTML, and CSS tools.",
    "Lorem Ipsum, rastgele metin, parola, UUID, MD5, SHA-256, Base64, JSON, XML, SQL, HTML ve CSS araçları.",
    "Lorem Ipsum ونص عشوائي وكلمة سر وUUID وMD5 وSHA-256 وBase64 وJSON وXML وSQL وHTML وCSS.",
    "Lorem Ipsum, случайный текст, пароль, UUID, MD5, SHA-256, Base64, JSON, XML, SQL, HTML и CSS.",
  ),
  group: L("Kod alətləri", "Code tools", "Kod araçları", "أدوات الكود", "Инструменты кода"),
  run: L("Yarat", "Make", "Üret", "أنشئ", "Сделать"),
  copy: L("Kopyala", "Copy", "Kopyala", "انسخ", "Копировать"),
  copied: L("Kopyalandı", "Copied", "Kopyalandı", "نُسخ", "Скопировано"),
  save: L("Faylı yüklə", "Download the file", "Dosyayı indir", "نزّل الملف", "Скачать файл"),
  load: L("Fayl seç", "Choose a file", "Dosya seç", "اختر ملفًا", "Выбрать файл"),
  bad: L("Mətn bu alətə uyğun deyil.", "This text does not fit the tool.", "Metin bu araca uymaz.", "هذا النص لا يناسب الأداة.", "Этот текст инструменту не подходит."),
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
