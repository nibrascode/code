import type { Lang } from "@/lib/i18n";

const PREFIX: Record<Lang, string> = { az: "", en: "/en", tr: "/tr", ar: "/ar", ru: "/ru" };

export const PAKET = {
  heading: { az: "Paket adı", en: "Package name", tr: "Paket adı", ar: "اسم الحزمة", ru: "Имя пакета" } as Record<Lang, string>,
  title: {
    az: "Paket adı yoxlama — APK",
    en: "Check a package name — APK",
    tr: "Paket adı kontrolü — APK",
    ar: "فحص اسم الحزمة — APK",
    ru: "Проверка имени пакета — APK",
  } as Record<Lang, string>,
  description: {
    az: "APK paket adını yaz. Boşluq, böyük hərf, tire və tək hissə burada görünür.",
    en: "Type an APK package name. A space, a capital letter, a hyphen, and a single part show up here.",
    tr: "APK paket adını yaz. Boşluk, büyük harf, tire ve tek parça burada görünür.",
    ar: "اكتب اسم حزمة APK. الفراغ والحرف الكبير والشرطة والجزء الواحد تظهر هنا.",
    ru: "Напиши имя пакета APK. Пробел, заглавная буква, дефис и одна часть видны здесь.",
  } as Record<Lang, string>,
  lead: {
    az: "Ad `com.nibras.soz` kimi olmalıdır. Hər hissə hərf ilə başlayır. Arada nöqtə durur.",
    en: "The name should look like `com.nibras.soz`. Each part starts with a letter. A dot stands between them.",
    tr: "Ad `com.nibras.soz` gibi olmalıdır. Her parça harfle başlar. Arada nokta durur.",
    ar: "ينبغي أن يكون الاسم مثل `com.nibras.soz`. كل جزء يبدأ بحرف. وبينهما نقطة.",
    ru: "Имя должно быть как `com.nibras.soz`. Каждая часть начинается с буквы. Между ними точка.",
  } as Record<Lang, string>,
  placeholder: {
    az: "com.nibras.soz",
    en: "com.nibras.soz",
    tr: "com.nibras.soz",
    ar: "com.nibras.soz",
    ru: "com.nibras.soz",
  } as Record<Lang, string>,
  ok: {
    az: "Bu ad formaca düzdür.",
    en: "This name is right in form.",
    tr: "Bu ad biçimde doğrudur.",
    ar: "هذا الاسم صحيح في الشكل.",
    ru: "Это имя верно по форме.",
  } as Record<Lang, string>,
  empty: {
    az: "Adı yaz.",
    en: "Type the name.",
    tr: "Adı yaz.",
    ar: "اكتب الاسم.",
    ru: "Напиши имя.",
  } as Record<Lang, string>,
  problems: {
    az: ["Boşluq olmaz.", "Böyük hərf olmaz.", "Tire olmaz.", "Ən azı iki hissə olmalıdır.", "Nöqtə yan-yana, əvvəldə və ya sonda durmasın.", "Hər hissə hərf ilə başlayır. Sonra hərf, rəqəm və alt xətt ola bilər."],
    en: ["No space.", "No capital letter.", "No hyphen.", "There must be at least two parts.", "A dot must not stand twice, at the start, or at the end.", "Each part starts with a letter. Then a letter, a digit, and an underscore can follow."],
    tr: ["Boşluk olmaz.", "Büyük harf olmaz.", "Tire olmaz.", "En az iki parça olmalıdır.", "Nokta yan yana, başta ya da sonda durmasın.", "Her parça harfle başlar. Sonra harf, rakam ve alt çizgi olabilir."],
    ar: ["لا فراغ.", "لا حرف كبير.", "لا شرطة.", "يجب أن يكون هناك جزءان على الأقل.", "لا تقف النقطة مرتين ولا في الأول ولا في الآخر.", "كل جزء يبدأ بحرف. ثم يمكن أن يأتي حرف ورقم وشرطة سفلية."],
    ru: ["Пробела не бывает.", "Заглавной буквы не бывает.", "Дефиса не бывает.", "Должно быть хотя бы две части.", "Точка не стоит дважды, в начале или в конце.", "Каждая часть начинается с буквы. Дальше могут быть буква, цифра и подчёркивание."],
  } as Record<Lang, readonly string[]>,
};

export function paketPath(lang: Lang) {
  return `${PREFIX[lang]}/paket`;
}

export function paketFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?paket$/);
  if (!match) return null;
  return (match[1] ?? "az") as Lang;
}

export function paketProblems(raw: string, lang: Lang) {
  const name = raw.trim();
  const text = PAKET.problems[lang];
  if (!name) return [PAKET.empty[lang]];
  const found: string[] = [];
  if (/\s/.test(name)) found.push(text[0]);
  if (name !== name.toLowerCase()) found.push(text[1]);
  if (name.includes("-")) found.push(text[2]);
  const parts = name.split(".");
  if (parts.length < 2) found.push(text[3]);
  if (parts.some((part) => part.length === 0)) found.push(text[4]);
  if (parts.some((part) => part.length > 0 && !/^[a-z][a-z0-9_]*$/i.test(part))) found.push(text[5]);
  return found;
}
