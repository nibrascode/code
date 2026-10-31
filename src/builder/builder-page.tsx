import { useMemo, useState, type DragEvent } from "react";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

type Kind = "hero" | "text" | "stats" | "cards" | "cta";
type Align = "start" | "center";

type Block = {
  id: string;
  kind: Kind;
  align: Align;
  title: string;
  body: string;
  button: string;
  href: string;
  image: string;
};

type Copy = {
  name: string;
  lead: string;
  note: string;
  templates: string;
  blocks: string;
  design: string;
  empty: string;
  preview: string;
  edit: string;
  download: string;
  siteName: string;
  add: string;
  up: string;
  down: string;
  remove: string;
  align: string;
  left: string;
  center: string;
  title: string;
  body: string;
  button: string;
  link: string;
  image: string;
  imageHint: string;
  kinds: Record<Kind, string>;
  tpls: { id: string; name: string }[];
};

const COPY: Record<Lang, Copy> = {
  az: {
    name: "Nibras Builder",
    lead: "Kod yazmadan sadə sayt. Şablon seç, bloku sürüşdür və ya toxunaraq əlavə et, yazını dəyiş.",
    note: "Hazır səhifə bir HTML faylı kimi endirilir. Domen, hostinq və hesab yoxdur. Şəkil yalnız özün yazdığın ünvandan açılır.",
    templates: "Şablonlar",
    blocks: "Bloklar",
    design: "Dizayn",
    empty: "Soldan blok əlavə et.",
    preview: "Önizləmə",
    edit: "Redaktə",
    download: "Endir",
    siteName: "Saytın adı",
    add: "Əlavə et",
    up: "Yuxarı",
    down: "Aşağı",
    remove: "Sil",
    align: "Yerləşmə",
    left: "Sola",
    center: "Ortaya",
    title: "Başlıq",
    body: "Mətn",
    button: "Düymə",
    link: "Keçid",
    image: "Şəkil ünvanı",
    imageHint: "Boş qalsa rəngli kart qalır.",
    kinds: { hero: "Açılış", text: "Mətn", stats: "Rəqəmlər", cards: "Kartlar", cta: "Düymə bloku" },
    tpls: [
      { id: "landing", name: "Açılış" },
      { id: "services", name: "Xidmətlər" },
      { id: "portfolio", name: "İşlər" },
      { id: "contact", name: "Əlaqə" },
    ],
  },
  en: {
    name: "Nibras Builder",
    lead: "A simple site without writing code. Pick a template, drag a block or tap to add it, then change the words.",
    note: "The finished page downloads as one HTML file. There is no domain, hosting or account. A picture opens only from an address you type.",
    templates: "Templates",
    blocks: "Blocks",
    design: "Design",
    empty: "Add a block from the left.",
    preview: "Preview",
    edit: "Edit",
    download: "Download",
    siteName: "Site name",
    add: "Add",
    up: "Up",
    down: "Down",
    remove: "Delete",
    align: "Align",
    left: "Left",
    center: "Center",
    title: "Heading",
    body: "Text",
    button: "Button",
    link: "Link",
    image: "Image address",
    imageHint: "Leave it empty to keep the color card.",
    kinds: { hero: "Hero", text: "Text", stats: "Numbers", cards: "Cards", cta: "Button block" },
    tpls: [
      { id: "landing", name: "Landing" },
      { id: "services", name: "Services" },
      { id: "portfolio", name: "Work" },
      { id: "contact", name: "Contact" },
    ],
  },
  tr: {
    name: "Nibras Builder",
    lead: "Kod yazmadan sade bir site. Şablon seç, bloğu sürükle ya da dokunup ekle, yazıyı değiştir.",
    note: "Hazır sayfa tek bir HTML dosyası olarak iner. Alan adı, barındırma ve hesap yoktur. Resim yalnızca senin yazdığın adresten açılır.",
    templates: "Şablonlar",
    blocks: "Bloklar",
    design: "Tasarım",
    empty: "Soldan blok ekle.",
    preview: "Önizleme",
    edit: "Düzenle",
    download: "İndir",
    siteName: "Sitenin adı",
    add: "Ekle",
    up: "Yukarı",
    down: "Aşağı",
    remove: "Sil",
    align: "Hizalama",
    left: "Sola",
    center: "Ortaya",
    title: "Başlık",
    body: "Metin",
    button: "Düğme",
    link: "Bağlantı",
    image: "Resim adresi",
    imageHint: "Boş kalırsa renkli kart durur.",
    kinds: { hero: "Açılış", text: "Metin", stats: "Sayılar", cards: "Kartlar", cta: "Düğme bloğu" },
    tpls: [
      { id: "landing", name: "Açılış" },
      { id: "services", name: "Hizmetler" },
      { id: "portfolio", name: "İşler" },
      { id: "contact", name: "İletişim" },
    ],
  },
  ar: {
    name: "Nibras Builder",
    lead: "موقع بسيط بلا كتابة كود. اختر قالباً، واسحب بلوكاً أو المس لإضافته، ثم غيّر الكلام.",
    note: "تنزل الصفحة الجاهزة ملف HTML واحداً. لا يوجد نطاق أو استضافة أو حساب. الصورة تفتح فقط من عنوان تكتبه أنت.",
    templates: "قوالب",
    blocks: "بلوكات",
    design: "تصميم",
    empty: "أضف بلوكاً من اليسار.",
    preview: "معاينة",
    edit: "تحرير",
    download: "تنزيل",
    siteName: "اسم الموقع",
    add: "أضف",
    up: "أعلى",
    down: "أسفل",
    remove: "احذف",
    align: "المحاذاة",
    left: "يسار",
    center: "وسط",
    title: "العنوان",
    body: "النص",
    button: "الزر",
    link: "الرابط",
    image: "عنوان الصورة",
    imageHint: "إن تركته فارغاً تبقى البطاقة الملونة.",
    kinds: { hero: "افتتاح", text: "نص", stats: "أرقام", cards: "بطاقات", cta: "بلوك زر" },
    tpls: [
      { id: "landing", name: "افتتاح" },
      { id: "services", name: "خدمات" },
      { id: "portfolio", name: "أعمال" },
      { id: "contact", name: "تواصل" },
    ],
  },
  ru: {
    name: "Nibras Builder",
    lead: "Простой сайт без кода. Выберите шаблон, перетащите блок или нажмите, чтобы добавить, и смените текст.",
    note: "Готовая страница скачивается одним HTML-файлом. Домена, хостинга и аккаунта нет. Картинка открывается только с адреса, который вы написали.",
    templates: "Шаблоны",
    blocks: "Блоки",
    design: "Дизайн",
    empty: "Добавьте блок слева.",
    preview: "Просмотр",
    edit: "Правка",
    download: "Скачать",
    siteName: "Имя сайта",
    add: "Добавить",
    up: "Выше",
    down: "Ниже",
    remove: "Удалить",
    align: "Выравнивание",
    left: "Влево",
    center: "По центру",
    title: "Заголовок",
    body: "Текст",
    button: "Кнопка",
    link: "Ссылка",
    image: "Адрес картинки",
    imageHint: "Если пусто, остаётся цветная карточка.",
    kinds: { hero: "Шапка", text: "Текст", stats: "Цифры", cards: "Карточки", cta: "Блок кнопки" },
    tpls: [
      { id: "landing", name: "Главная" },
      { id: "services", name: "Услуги" },
      { id: "portfolio", name: "Работы" },
      { id: "contact", name: "Контакт" },
    ],
  },
};

const SEED: Record<Lang, Record<string, Omit<Block, "id">[]>> = {
  az: {
    landing: [
      { kind: "hero", align: "start", title: "Kiçik emalatxana üçün sadə səhifə", body: "Nə etdiyini bir ekranda göstər. Kod yazmaq lazım deyil.", button: "Başla", href: "#elaqe", image: "" },
      { kind: "stats", align: "center", title: "Qısa rəqəmlər", body: "6+ | il\n40+ | iş\n1 | şəhər", button: "", href: "", image: "" },
      { kind: "cards", align: "start", title: "Nə edilir", body: "Təmir | Eyni gündə baxış\nSifariş | Ölçü və qiymət\nÇatdırılma | Şəhər içi", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "Yazın", body: "Nömrəni özün yaz.", button: "Əlaqə", href: "mailto:numune@example.com", image: "" },
    ],
    services: [
      { kind: "hero", align: "center", title: "Xidmətlər", body: "Üç iş. Artıq söz yoxdur.", button: "Sifariş", href: "#elaqe", image: "" },
      { kind: "cards", align: "start", title: "Siyahı", body: "Birinci iş | Qısa izah\nİkinci iş | Qısa izah\nÜçüncü iş | Qısa izah", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "Hansı iş lazımdır?", body: "Bir cümlə kifayətdir.", button: "Yaz", href: "mailto:numune@example.com", image: "" },
    ],
    portfolio: [
      { kind: "hero", align: "start", title: "Son işlər", body: "Hər kart bir işdir. Adını dəyiş.", button: "Hamısı", href: "#isler", image: "" },
      { kind: "cards", align: "start", title: "Nümunələr", body: "Vitrin | Mağaza səhifəsi\nMenyu | Kafe üçün bir ekran\nKart | Vizit yerinə səhifə", button: "", href: "", image: "" },
      { kind: "text", align: "start", title: "", body: "Şəkilləri öz ünvanınla əvəz et. Bu səhifə şəkli saxlamır.", button: "", href: "", image: "" },
    ],
    contact: [
      { kind: "hero", align: "center", title: "Əlaqə", body: "Ad, şəhər və yazışma yolu.", button: "Məktub", href: "mailto:numune@example.com", image: "" },
      { kind: "text", align: "start", title: "Ünvan", body: "Şəhər, küçə. Telefonu özün yaz. Bu nümunədir, real nömrə deyil.", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "İş günləri", body: "Bazar ertəsi — şənbə.", button: "Yaz", href: "mailto:numune@example.com", image: "" },
    ],
  },
  en: {
    landing: [
      { kind: "hero", align: "start", title: "A simple page for a small workshop", body: "Show what you do on one screen. No code.", button: "Start", href: "#contact", image: "" },
      { kind: "stats", align: "center", title: "Short numbers", body: "6+ | years\n40+ | jobs\n1 | city", button: "", href: "", image: "" },
      { kind: "cards", align: "start", title: "What is done", body: "Repair | Same-day look\nOrder | Size and price\nDelivery | Inside the city", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "Write", body: "Put your own number in.", button: "Contact", href: "mailto:sample@example.com", image: "" },
    ],
    services: [
      { kind: "hero", align: "center", title: "Services", body: "Three jobs. No extra words.", button: "Order", href: "#contact", image: "" },
      { kind: "cards", align: "start", title: "List", body: "First job | Short line\nSecond job | Short line\nThird job | Short line", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "Which job?", body: "One sentence is enough.", button: "Write", href: "mailto:sample@example.com", image: "" },
    ],
    portfolio: [
      { kind: "hero", align: "start", title: "Recent work", body: "Each card is one job. Change the name.", button: "All", href: "#work", image: "" },
      { kind: "cards", align: "start", title: "Samples", body: "Window | A shop page\nMenu | One screen for a cafe\nCard | A page instead of a card", button: "", href: "", image: "" },
      { kind: "text", align: "start", title: "", body: "Replace pictures with your own address. This page does not store the file.", button: "", href: "", image: "" },
    ],
    contact: [
      { kind: "hero", align: "center", title: "Contact", body: "Name, city and a way to write.", button: "Letter", href: "mailto:sample@example.com", image: "" },
      { kind: "text", align: "start", title: "Address", body: "City, street. Write your own phone. This is a sample, not a real number.", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "Work days", body: "Monday — Saturday.", button: "Write", href: "mailto:sample@example.com", image: "" },
    ],
  },
  tr: {
    landing: [
      { kind: "hero", align: "start", title: "Küçük atölye için sade sayfa", body: "Ne yaptığını bir ekranda göster. Kod yok.", button: "Başla", href: "#iletisim", image: "" },
      { kind: "stats", align: "center", title: "Kısa sayılar", body: "6+ | yıl\n40+ | iş\n1 | şehir", button: "", href: "", image: "" },
      { kind: "cards", align: "start", title: "Ne yapılır", body: "Tamir | Aynı gün bakış\nSipariş | Ölçü ve fiyat\nTeslim | Şehir içi", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "Yazın", body: "Numarayı kendin yaz.", button: "İletişim", href: "mailto:ornek@example.com", image: "" },
    ],
    services: [
      { kind: "hero", align: "center", title: "Hizmetler", body: "Üç iş. Fazla söz yok.", button: "Sipariş", href: "#iletisim", image: "" },
      { kind: "cards", align: "start", title: "Liste", body: "Birinci iş | Kısa satır\nİkinci iş | Kısa satır\nÜçüncü iş | Kısa satır", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "Hangi iş?", body: "Bir cümle yeter.", button: "Yaz", href: "mailto:ornek@example.com", image: "" },
    ],
    portfolio: [
      { kind: "hero", align: "start", title: "Son işler", body: "Her kart bir iştir. Adını değiştir.", button: "Hepsi", href: "#isler", image: "" },
      { kind: "cards", align: "start", title: "Örnekler", body: "Vitrin | Mağaza sayfası\nMenü | Kafe için bir ekran\nKart | Kartvizit yerine sayfa", button: "", href: "", image: "" },
      { kind: "text", align: "start", title: "", body: "Resimleri kendi adresinle değiştir. Bu sayfa dosyayı saklamaz.", button: "", href: "", image: "" },
    ],
    contact: [
      { kind: "hero", align: "center", title: "İletişim", body: "Ad, şehir ve yazma yolu.", button: "Mektup", href: "mailto:ornek@example.com", image: "" },
      { kind: "text", align: "start", title: "Adres", body: "Şehir, sokak. Telefonu kendin yaz. Bu örnektir, gerçek numara değildir.", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "İş günleri", body: "Pazartesi — cumartesi.", button: "Yaz", href: "mailto:ornek@example.com", image: "" },
    ],
  },
  ar: {
    landing: [
      { kind: "hero", align: "start", title: "صفحة بسيطة لورشة صغيرة", body: "أظهر ما تفعله في شاشة واحدة. بلا كود.", button: "ابدأ", href: "#contact", image: "" },
      { kind: "stats", align: "center", title: "أرقام قصيرة", body: "6+ | سنوات\n40+ | أعمال\n1 | مدينة", button: "", href: "", image: "" },
      { kind: "cards", align: "start", title: "ماذا يُنجز", body: "إصلاح | نظرة في اليوم نفسه\nطلب | المقاس والسعر\nتوصيل | داخل المدينة", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "اكتب", body: "ضع رقمك أنت.", button: "تواصل", href: "mailto:sample@example.com", image: "" },
    ],
    services: [
      { kind: "hero", align: "center", title: "الخدمات", body: "ثلاثة أعمال. بلا كلام زائد.", button: "اطلب", href: "#contact", image: "" },
      { kind: "cards", align: "start", title: "القائمة", body: "العمل الأول | سطر قصير\nالعمل الثاني | سطر قصير\nالعمل الثالث | سطر قصير", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "أي عمل؟", body: "جملة واحدة تكفي.", button: "اكتب", href: "mailto:sample@example.com", image: "" },
    ],
    portfolio: [
      { kind: "hero", align: "start", title: "أعمال حديثة", body: "كل بطاقة عمل. غيّر الاسم.", button: "الكل", href: "#work", image: "" },
      { kind: "cards", align: "start", title: "نماذج", body: "واجهة | صفحة متجر\nقائمة | شاشة لمقهى\nبطاقة | صفحة بدل البطاقة", button: "", href: "", image: "" },
      { kind: "text", align: "start", title: "", body: "استبدل الصور بعنوانك. هذه الصفحة لا تحفظ الملف.", button: "", href: "", image: "" },
    ],
    contact: [
      { kind: "hero", align: "center", title: "تواصل", body: "الاسم والمدينة وطريق الكتابة.", button: "رسالة", href: "mailto:sample@example.com", image: "" },
      { kind: "text", align: "start", title: "العنوان", body: "مدينة، شارع. اكتب هاتفك أنت. هذا نموذج وليس رقماً حقيقياً.", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "أيام العمل", body: "الاثنين — السبت.", button: "اكتب", href: "mailto:sample@example.com", image: "" },
    ],
  },
  ru: {
    landing: [
      { kind: "hero", align: "start", title: "Простая страница для маленькой мастерской", body: "Покажите работу на одном экране. Без кода.", button: "Начать", href: "#kontakt", image: "" },
      { kind: "stats", align: "center", title: "Короткие цифры", body: "6+ | лет\n40+ | работ\n1 | город", button: "", href: "", image: "" },
      { kind: "cards", align: "start", title: "Что делается", body: "Ремонт | Осмотр в тот же день\nЗаказ | Размер и цена\nДоставка | По городу", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "Напишите", body: "Номер впишите свой.", button: "Связь", href: "mailto:primer@example.com", image: "" },
    ],
    services: [
      { kind: "hero", align: "center", title: "Услуги", body: "Три работы. Без лишних слов.", button: "Заказ", href: "#kontakt", image: "" },
      { kind: "cards", align: "start", title: "Список", body: "Первая работа | Короткая строка\nВторая работа | Короткая строка\nТретья работа | Короткая строка", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "Какая работа?", body: "Хватает одного предложения.", button: "Написать", href: "mailto:primer@example.com", image: "" },
    ],
    portfolio: [
      { kind: "hero", align: "start", title: "Недавние работы", body: "Каждая карточка — одна работа. Смените имя.", button: "Все", href: "#raboty", image: "" },
      { kind: "cards", align: "start", title: "Примеры", body: "Витрина | Страница магазина\nМеню | Один экран для кафе\nКарточка | Страница вместо визитки", button: "", href: "", image: "" },
      { kind: "text", align: "start", title: "", body: "Замените картинки своим адресом. Эта страница файл не хранит.", button: "", href: "", image: "" },
    ],
    contact: [
      { kind: "hero", align: "center", title: "Контакт", body: "Имя, город и способ написать.", button: "Письмо", href: "mailto:primer@example.com", image: "" },
      { kind: "text", align: "start", title: "Адрес", body: "Город, улица. Телефон впишите свой. Это образец, не настоящий номер.", button: "", href: "", image: "" },
      { kind: "cta", align: "center", title: "Рабочие дни", body: "Понедельник — суббота.", button: "Написать", href: "mailto:primer@example.com", image: "" },
    ],
  },
};

let seq = 1;
function withIds(rows: Omit<Block, "id">[]): Block[] {
  return rows.map((row) => ({ ...row, id: `b${seq++}` }));
}

function blank(kind: Kind): Omit<Block, "id"> {
  if (kind === "stats") return { kind, align: "center", title: "1 | 2 | 3", body: "1 | a\n2 | b\n3 | c", button: "", href: "", image: "" };
  if (kind === "cards") return { kind, align: "start", title: "", body: "A | ...\nB | ...", button: "", href: "", image: "" };
  if (kind === "cta") return { kind, align: "center", title: "", body: "", button: "OK", href: "#", image: "" };
  if (kind === "text") return { kind, align: "start", title: "", body: "", button: "", href: "", image: "" };
  return { kind, align: "start", title: "", body: "", button: "", href: "#", image: "" };
}

function lines(body: string) {
  return body.split("\n").map((line) => line.trim()).filter(Boolean);
}

function pair(line: string) {
  const [a, b] = line.split("|");
  return { a: (a ?? "").trim(), b: (b ?? "").trim() };
}

function esc(value: string) {
  return value.replace(/[&<>"']/g, (ch) => ({ "&": "&", "<": "<", ">": ">", '"': """, "'": "&#39;" })[ch] ?? ch);
}

function safeHref(value: string) {
  const href = value.trim();
  if (/^(https?:|mailto:|#)/i.test(href)) return href;
  return "#";
}

function safeImage(value: string) {
  const src = value.trim();
  if (/^https:\/\//i.test(src)) return src;
  return "";
}

function blockHtml(block: Block) {
  const align = block.align === "center" ? "center" : "left";
  if (block.kind === "hero") {
    const img = safeImage(block.image);
    const media = img
      ? `<img src="${esc(img)}" alt="">`
      : `<div class="card"></div>`;
    return `<section class="hero" style="text-align:${align}"><div><h1>${esc(block.title)}</h1><p>${esc(block.body)}</p>${block.button ? `<a class="btn" href="${esc(safeHref(block.href))}">${esc(block.button)}</a>` : ""}</div>${media}</section>`;
  }
  if (block.kind === "stats") {
    const cells = lines(block.body).map((line) => {
      const item = pair(line);
      return `<div><b>${esc(item.a)}</b><span>${esc(item.b)}</span></div>`;
    }).join("");
    return `<section style="text-align:${align}"><h2>${esc(block.title)}</h2><div class="stats">${cells}</div></section>`;
  }
  if (block.kind === "cards") {
    const cells = lines(block.body).map((line) => {
      const item = pair(line);
      return `<article><b>${esc(item.a)}</b><p>${esc(item.b)}</p></article>`;
    }).join("");
    return `<section style="text-align:${align}"><h2>${esc(block.title)}</h2><div class="cards">${cells}</div></section>`;
  }
  if (block.kind === "cta") {
    return `<section class="cta" style="text-align:${align}"><h2>${esc(block.title)}</h2><p>${esc(block.body)}</p>${block.button ? `<a class="btn" href="${esc(safeHref(block.href))}">${esc(block.button)}</a>` : ""}</section>`;
  }
  return `<section style="text-align:${align}">${block.title ? `<h2>${esc(block.title)}</h2>` : ""}<p>${esc(block.body)}</p></section>`;
}

function pageHtml(title: string, blocks: Block[], lang: Lang) {
  const body = blocks.map(blockHtml).join("\n");
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title || "Nibras")}</title>
<style>
body{margin:0;font-family:Georgia,serif;color:#1c2434;background:#f6f7fb}
section{max-width:880px;margin:0 auto;padding:28px 20px}
h1{font-size:2.2rem;line-height:1.15;margin:0 0 12px}
h2{margin:0 0 10px}
p{line-height:1.5}
.hero{display:grid;grid-template-columns:1.2fr .8fr;gap:20px;align-items:center}
.card{min-height:180px;border-radius:24px;background:linear-gradient(145deg,#6d5efc,#7fd3ff)}
img{width:100%;border-radius:24px;display:block}
.btn{display:inline-block;margin-top:12px;background:#5b4dff;color:#fff;text-decoration:none;padding:10px 16px;border-radius:10px}
.stats,.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.stats div,.cards article{background:#fff;border-radius:16px;padding:14px}
.cta{background:#fff;border-radius:20px}
@media(max-width:700px){.hero,.stats,.cards{grid-template-columns:1fr}}
</style>
</head>
<body>
${body}
</body>
</html>`;
}

const KINDS: Kind[] = ["hero", "text", "stats", "cards", "cta"];

export function BuilderPage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const [site, setSite] = useState(copy.name);
  const [blocks, setBlocks] = useState<Block[]>(() => withIds(SEED[lang].landing));
  const [selected, setSelected] = useState<string | null>(null);
  const [preview, setPreview] = useState(false);
  const current = useMemo(() => blocks.find((block) => block.id === selected) ?? null, [blocks, selected]);

  function load(id: string) {
    const rows = SEED[lang][id] ?? SEED[lang].landing;
    const next = withIds(rows);
    setBlocks(next);
    setSelected(next[0]?.id ?? null);
  }

  function insert(kind: Kind, index: number) {
    const block = { ...blank(kind), id: `b${seq++}` };
    setBlocks((old) => {
      const next = old.slice();
      next.splice(index, 0, block);
      return next;
    });
    setSelected(block.id);
  }

  function move(id: string, index: number) {
    setBlocks((old) => {
      const from = old.findIndex((block) => block.id === id);
      if (from < 0) return old;
      const next = old.slice();
      const [item] = next.splice(from, 1);
      const target = index > from ? index - 1 : index;
      next.splice(Math.max(0, Math.min(target, next.length)), 0, item);
      return next;
    });
  }

  function patch(id: string, part: Partial<Block>) {
    setBlocks((old) => old.map((block) => (block.id === id ? { ...block, ...part } : block)));
  }

  function shift(id: string, dir: -1 | 1) {
    setBlocks((old) => {
      const from = old.findIndex((block) => block.id === id);
      const to = from + dir;
      if (from < 0 || to < 0 || to >= old.length) return old;
      const next = old.slice();
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
  }

  function download() {
    const html = pageHtml(site, blocks, lang);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "nibras-sayt.html";
    link.click();
    URL.revokeObjectURL(url);
  }

  function onDragStart(event: DragEvent, payload: string) {
    event.dataTransfer.setData("text/plain", payload);
    event.dataTransfer.effectAllowed = "copyMove";
  }

  function take(event: DragEvent) {
    event.preventDefault();
    return event.dataTransfer.getData("text/plain");
  }

  return (
    <main className="nb">
      <header className="nb-top">
        <strong>{copy.name}</strong>
        <label>
          {copy.siteName}
          <input value={site} onChange={(event) => setSite(event.target.value)} />
        </label>
        <button type="button" onClick={() => setPreview((on) => !on)}>{preview ? copy.edit : copy.preview}</button>
        <button type="button" className="nb-go" onClick={download}>{copy.download}</button>
      </header>
      <p className="nb-lead">{copy.lead}</p>
      <div className={preview ? "nb-frame is-preview" : "nb-frame"}>
        <aside className="nb-side nb-left">
          <h2>{copy.templates}</h2>
          <div className="nb-picks">
            {copy.tpls.map((tpl) => (
              <button key={tpl.id} type="button" onClick={() => load(tpl.id)}>{tpl.name}</button>
            ))}
          </div>
          <h2>{copy.blocks}</h2>
          <div className="nb-picks">
            {KINDS.map((kind) => (
              <button
                key={kind}
                type="button"
                draggable
                onDragStart={(event) => onDragStart(event, `add:${kind}`)}
                onClick={() => insert(kind, blocks.length)}
              >
                {copy.kinds[kind]}
              </button>
            ))}
          </div>
        </aside>
        <section
          className="nb-canvas"
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            const data = take(event);
            if (data.startsWith("add:")) insert(data.slice(4) as Kind, blocks.length);
            if (data.startsWith("move:")) move(data.slice(5), blocks.length);
          }}
        >
          {blocks.length === 0 ? <p className="nb-empty">{copy.empty}</p> : null}
          {blocks.map((block, index) => (
            <article
              key={block.id}
              className={block.id === selected ? "is-on" : ""}
              style={{ textAlign: block.align }}
              draggable
              onDragStart={(event) => onDragStart(event, `move:${block.id}`)}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.stopPropagation();
                const data = take(event);
                if (data.startsWith("add:")) insert(data.slice(4) as Kind, index);
                if (data.startsWith("move:")) move(data.slice(5), index);
              }}
              onClick={() => setSelected(block.id)}
            >
              <BlockView block={block} />
            </article>
          ))}
        </section>
        <aside className="nb-side nb-right">
          <h2>{copy.design}</h2>
          {current ? (
            <form className="nb-form" onSubmit={(event) => event.preventDefault()}>
              <p>{copy.kinds[current.kind]}</p>
              <label>{copy.align}
                <span>
                  <button type="button" onClick={() => patch(current.id, { align: "start" })}>{copy.left}</button>
                  <button type="button" onClick={() => patch(current.id, { align: "center" })}>{copy.center}</button>
                </span>
              </label>
              <label>{copy.title}<input value={current.title} onChange={(event) => patch(current.id, { title: event.target.value })} /></label>
              <label>{copy.body}<textarea value={current.body} onChange={(event) => patch(current.id, { body: event.target.value })} /></label>
              {current.kind === "hero" || current.kind === "cta" ? (
                <>
                  <label>{copy.button}<input value={current.button} onChange={(event) => patch(current.id, { button: event.target.value })} /></label>
                  <label>{copy.link}<input value={current.href} onChange={(event) => patch(current.id, { href: event.target.value })} /></label>
                </>
              ) : null}
              {current.kind === "hero" ? (
                <label>{copy.image}<input value={current.image} placeholder="https://" onChange={(event) => patch(current.id, { image: event.target.value })} /><small>{copy.imageHint}</small></label>
              ) : null}
              <span className="nb-row">
                <button type="button" onClick={() => shift(current.id, -1)}>{copy.up}</button>
                <button type="button" onClick={() => shift(current.id, 1)}>{copy.down}</button>
                <button type="button" onClick={() => { setBlocks((old) => old.filter((block) => block.id !== current.id)); setSelected(null); }}>{copy.remove}</button>
              </span>
            </form>
          ) : <p>{copy.empty}</p>}
          <p className="nb-note">{copy.note}</p>
        </aside>
      </div>
    </main>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.kind === "hero") {
    const image = safeImage(block.image);
    return (
      <div className="nb-hero">
        <div>
          <h3>{block.title}</h3>
          <p>{block.body}</p>
          {block.button ? <span className="nb-btn">{block.button}</span> : null}
        </div>
        {image ? <img src={image} alt="" /> : <i />}
      </div>
    );
  }
  if (block.kind === "stats") {
    return (
      <div>
        <h3>{block.title}</h3>
        <div className="nb-grid">
          {lines(block.body).map((line) => {
            const item = pair(line);
            return <div key={line}><b>{item.a}</b><span>{item.b}</span></div>;
          })}
        </div>
      </div>
    );
  }
  if (block.kind === "cards") {
    return (
      <div>
        <h3>{block.title}</h3>
        <div className="nb-grid">
          {lines(block.body).map((line) => {
            const item = pair(line);
            return <div key={line}><b>{item.a}</b><span>{item.b}</span></div>;
          })}
        </div>
      </div>
    );
  }
  if (block.kind === "cta") {
    return (
      <div>
        <h3>{block.title}</h3>
        <p>{block.body}</p>
        {block.button ? <span className="nb-btn">{block.button}</span> : null}
      </div>
    );
  }
  return (
    <div>
      {block.title ? <h3>{block.title}</h3> : null}
      <p>{block.body}</p>
    </div>
  );
}
