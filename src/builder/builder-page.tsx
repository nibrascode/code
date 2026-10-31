import { useEffect, useMemo, useRef, useState, type DragEvent } from "react";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { filesToZip } from "@/workspace/files";

type Kind = "hero" | "text" | "stats" | "cards" | "cta" | "columns" | "footer";
type Align = "start" | "center";
type Tone = "plain" | "soft" | "dark";
type Step = "s" | "m" | "l";

type Block = {
  id: string;
  kind: Kind;
  align: Align;
  title: string;
  body: string;
  button: string;
  href: string;
  image: string;
  tone?: Tone;
  size?: Step;
  pad?: Step;
  color?: string;
};

type SitePage = { id: string; name: string; blocks: Block[] };

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
    kinds: { hero: "Açılış", text: "Mətn", stats: "Rəqəmlər", cards: "Kartlar", cta: "Düymə bloku", columns: "İki sütun", footer: "Alt hissə" },
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
    kinds: { hero: "Hero", text: "Text", stats: "Numbers", cards: "Cards", cta: "Button block", columns: "Two columns", footer: "Footer" },
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
    kinds: { hero: "Açılış", text: "Metin", stats: "Sayılar", cards: "Kartlar", cta: "Düğme bloğu", columns: "İki sütun", footer: "Alt kısım" },
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
    kinds: { hero: "افتتاح", text: "نص", stats: "أرقام", cards: "بطاقات", cta: "بلوك زر", columns: "عمودان", footer: "التذييل" },
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
    kinds: { hero: "Шапка", text: "Текст", stats: "Цифры", cards: "Карточки", cta: "Блок кнопки", columns: "Две колонки", footer: "Подвал" },
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

function nid(prefix: string) {
  return prefix + Math.random().toString(36).slice(2, 8);
}

function withIds(rows: Omit<Block, "id">[]): Block[] {
  return rows.map((row) => ({ ...row, id: nid("b") }));
}

function blank(kind: Kind): Omit<Block, "id"> {
  if (kind === "stats") return { kind, align: "center", title: "", body: "1 | a\n2 | b\n3 | c", button: "", href: "", image: "" };
  if (kind === "cards") return { kind, align: "start", title: "", body: "A | ...\nB | ...", button: "", href: "", image: "" };
  if (kind === "cta") return { kind, align: "center", title: "", body: "", button: "OK", href: "#", image: "" };
  if (kind === "text") return { kind, align: "start", title: "", body: "", button: "", href: "", image: "" };
  if (kind === "columns") return { kind, align: "start", title: "", body: "Sol | Qisa setir || Sag | Qisa setir", button: "", href: "", image: "" };
  if (kind === "footer") return { kind, align: "center", title: "", body: "", button: "", href: "", image: "", tone: "dark" };
  return { kind, align: "start", title: "", body: "", button: "", href: "#", image: "" };
}

function lines(body: string) {
  return body.split("\n").map((line) => line.trim()).filter(Boolean);
}

function pair(line: string) {
  const cut = line.split("|");
  return { a: (cut[0] ?? "").trim(), b: (cut.slice(1).join("|") ?? "").trim() };
}

function esc(value: string) {
  return value
    .replaceAll("&", "\u0026amp;")
    .replaceAll("<", "\u0026lt;")
    .replaceAll(">", "\u0026gt;")
    .replaceAll('"', "\u0026quot;")
    .replaceAll("'", "\u0026#39;");
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

function safeColor(value: string | undefined, fallback: string) {
  return value && /^#[0-9a-fA-F]{6}$/.test(value) ? value : fallback;
}

function box(block: Block, accent: string) {
  const pad = block.pad === "l" ? "48px 22px" : block.pad === "s" ? "12px 16px" : "28px 20px";
  const bg = block.tone === "dark" ? "#172033" : block.tone === "soft" ? "#eef2ff" : "transparent";
  const color = block.tone === "dark" ? "#f8fafc" : "#1c2434";
  const size = block.size === "l" ? "2.7rem" : block.size === "s" ? "1.55rem" : "2.15rem";
  return { pad, bg, color, size, accent: safeColor(block.color, accent) };
}

function blockHtml(block: Block, accent: string) {
  const look = box(block, accent);
  const align = block.align === "center" ? "center" : "left";
  const style = `text-align:${align};padding:${look.pad};background:${look.bg};color:${look.color}`;
  if (block.kind === "hero") {
    const img = safeImage(block.image);
    const media = img ? `<img src="${esc(img)}" alt="">` : `<div class="card"></div>`;
    const button = block.button ? `<a class="btn" style="background:${look.accent}" href="${esc(safeHref(block.href))}">${esc(block.button)}</a>` : "";
    return `<section class="hero" style="${style}"><div><h1 style="font-size:${look.size}">${esc(block.title)}</h1><p>${esc(block.body)}</p>${button}</div>${media}</section>`;
  }
  if (block.kind === "stats" || block.kind === "cards") {
    const cells = lines(block.body).map((line) => {
      const item = pair(line);
      const tag = block.kind === "cards" ? "article" : "div";
      return `<${tag}><b>${esc(item.a)}</b><span>${esc(item.b)}</span></${tag}>`;
    }).join("");
    const klass = block.kind === "cards" ? "cards" : "stats";
    return `<section style="${style}"><h2>${esc(block.title)}</h2><div class="${klass}">${cells}</div></section>`;
  }
  if (block.kind === "columns") {
    const halves = block.body.split("||");
    const cells = halves.map((half) => `<div><p>${esc(half.trim())}</p></div>`).join("");
    return `<section style="${style}">${block.title ? `<h2>${esc(block.title)}</h2>` : ""}<div class="cols">${cells}</div></section>`;
  }
  if (block.kind === "cta" || block.kind === "footer") {
    const button = block.button ? `<a class="btn" style="background:${look.accent}" href="${esc(safeHref(block.href))}">${esc(block.button)}</a>` : "";
    return `<section class="${block.kind}" style="${style}"><h2>${esc(block.title)}</h2><p>${esc(block.body)}</p>${button}</section>`;
  }
  return `<section style="${style}">${block.title ? `<h2 style="font-size:${look.size}">${esc(block.title)}</h2>` : ""}<p>${esc(block.body)}</p></section>`;
}

function siteHtml(title: string, pages: SitePage[], lang: Lang, accent: string, fileNav?: { href: string; label: string }[]) {
  const paint = safeColor(accent, "#5b4dff");
  const nav = fileNav && fileNav.length > 1
    ? `<nav class="bar">${fileNav.map((link) => `<a href="${esc(link.href)}">${esc(link.label)}</a>`).join("")}</nav>`
    : pages.length > 1
      ? `<nav class="bar">${pages.map((page) => `<button type="button" data-go="${esc(page.id)}">${esc(page.name)}</button>`).join("")}</nav>`
      : "";
  const screens = pages.map((page) => `<div class="screen" data-screen="${esc(page.id)}">${page.blocks.map((block) => blockHtml(block, paint)).join("\n")}</div>`).join("\n");
  const first = pages[0]?.id ?? "p1";
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title || "Nibras")}</title>
<style>
body{margin:0;font-family:Georgia,serif;color:#1c2434;background:#f6f7fb}
section{max-width:880px;margin:0 auto}
h1{line-height:1.15;margin:0 0 12px}
h2{margin:0 0 10px}
p{line-height:1.5;white-space:pre-wrap}
.bar{display:flex;gap:8px;justify-content:center;padding:14px;background:#fff;position:sticky;top:0}
.bar button,.bar a{border:0;background:${paint};color:#fff;border-radius:999px;padding:8px 14px;cursor:pointer;text-decoration:none}
.hero{display:grid;grid-template-columns:1.2fr .8fr;gap:20px;align-items:center}
.card{min-height:180px;border-radius:24px;background:linear-gradient(145deg,${paint},#7fd3ff)}
img{width:100%;border-radius:24px;display:block}
.btn{display:inline-block;margin-top:12px;color:#fff;text-decoration:none;padding:10px 16px;border-radius:10px}
.stats,.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.stats div,.cards article,.cols div{background:#fff;border-radius:16px;padding:14px}
.footer{border-top:1px solid #e2e8f0}
@media(max-width:700px){.hero,.stats,.cards,.cols{grid-template-columns:1fr}}
</style>
</head>
<body>
${nav}
${screens}
<script>
function show(id){
  document.querySelectorAll("[data-screen]").forEach(function(node){
    node.hidden = node.getAttribute("data-screen") !== id;
  });
}
document.addEventListener("click", function(event){
  var node = event.target && event.target.closest ? event.target.closest("[data-go]") : null;
  if (!node) return;
  show(node.getAttribute("data-go"));
});
show(${JSON.stringify(first)});
<\/script>
</body>
</html>`;
}

const KINDS: Kind[] = ["hero", "text", "stats", "cards", "columns", "cta", "footer"];
const COLORS = ["#5b4dff", "#0f766e", "#b45309", "#be123c", "#111827"];
const STORE = "nibras-builder-v2";

const EXTRA: Record<Lang, {
  pages: string;
  newPage: string;
  pageName: string;
  delPage: string;
  layers: string;
  undo: string;
  duplicate: string;
  tone: string;
  plain: string;
  soft: string;
  dark: string;
  size: string;
  space: string;
  color: string;
  phone: string;
  tablet: string;
  desk: string;
  saved: string;
  home: string;
  colHint: string;
  zip: string;
  step1: string;
  step2: string;
  step3: string;
  addPart: string;
}> = {
  az: { pages: "Səhifələr", newPage: "Yeni səhifə", pageName: "Səhifənin adı", delPage: "Səhifəni sil", layers: "Laylar", undo: "Geri al", duplicate: "Kopyala", tone: "Fon", plain: "Ağ", soft: "Yumşaq", dark: "Tünd", size: "Ölçü", space: "Boşluq", color: "Rəng", phone: "Telefon", tablet: "Planşet", desk: "Masaüstü", saved: "Dəyişiklik bu telefonda qalır. Serverə getmir. Bir neçə səhifə bir HTML faylında endirilir.", home: "Ana", colHint: "İki tərəfi || ilə ayır.", zip: "ZIP", step1: "1. Hazır nümunə seç", step2: "2. Öz yazını yaz", step3: "3. Faylı endir", addPart: "Hissə əlavə et" },
  en: { pages: "Pages", newPage: "New page", pageName: "Page name", delPage: "Delete page", layers: "Layers", undo: "Undo", duplicate: "Duplicate", tone: "Background", plain: "White", soft: "Soft", dark: "Dark", size: "Size", space: "Space", color: "Color", phone: "Phone", tablet: "Tablet", desk: "Desktop", saved: "Changes stay on this phone. They are not sent to a server. Several pages download as one HTML file.", home: "Home", colHint: "Split the two sides with ||.", zip: "ZIP", step1: "1. Pick a sample", step2: "2. Write your own text", step3: "3. Download the file", addPart: "Add a part" },
  tr: { pages: "Sayfalar", newPage: "Yeni sayfa", pageName: "Sayfanın adı", delPage: "Sayfayı sil", layers: "Katmanlar", undo: "Geri al", duplicate: "Kopyala", tone: "Zemin", plain: "Beyaz", soft: "Yumuşak", dark: "Koyu", size: "Ölçü", space: "Boşluk", color: "Renk", phone: "Telefon", tablet: "Tablet", desk: "Masaüstü", saved: "Değişiklik bu telefonda kalır. Sunucuya gitmez. Birkaç sayfa tek HTML dosyasında iner.", home: "Ana", colHint: "İki tarafı || ile ayır.", zip: "ZIP", step1: "1. Hazır örnek seç", step2: "2. Kendi yazını yaz", step3: "3. Dosyayı indir", addPart: "Bölüm ekle" },
  ar: { pages: "صفحات", newPage: "صفحة جديدة", pageName: "اسم الصفحة", delPage: "احذف الصفحة", layers: "طبقات", undo: "تراجع", duplicate: "انسخ", tone: "الخلفية", plain: "أبيض", soft: "ناعم", dark: "داكن", size: "المقاس", space: "الفراغ", color: "اللون", phone: "هاتف", tablet: "جهاز لوحي", desk: "مكتب", saved: "تبقى التغييرات على هذا الهاتف ولا تُرسل إلى خادم. عدة صفحات تنزل في ملف HTML واحد.", home: "الرئيسية", colHint: "افصل الجانبين بـ ||.", zip: "ZIP", step1: "1. اختر نموذجاً", step2: "2. اكتب نصك", step3: "3. نزّل الملف", addPart: "أضف قسماً" },
  ru: { pages: "Страницы", newPage: "Новая страница", pageName: "Имя страницы", delPage: "Удалить страницу", layers: "Слои", undo: "Назад", duplicate: "Копия", tone: "Фон", plain: "Белый", soft: "Мягкий", dark: "Тёмный", size: "Размер", space: "Отступ", color: "Цвет", phone: "Телефон", tablet: "Планшет", desk: "Компьютер", saved: "Изменения остаются на этом телефоне и не уходят на сервер. Несколько страниц скачиваются одним HTML-файлом.", home: "Главная", colHint: "Две стороны разделите через ||.", zip: "ZIP", step1: "1. Выберите образец", step2: "2. Напишите свой текст", step3: "3. Скачайте файл", addPart: "Добавить часть" },
};

function freshSite(lang: Lang): SitePage[] {
  return [{
    id: "home",
    name: EXTRA[lang].home,
    blocks: SEED[lang].landing.map((row, index) => ({ ...row, id: `home-${index}` })),
  }];
}

function readSaved(): { name: string; pages: SitePage[]; pageId: string; accent: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORE);
    if (!raw) return null;
    const data = JSON.parse(raw) as { name?: string; pages?: SitePage[]; pageId?: string; accent?: string };
    if (!Array.isArray(data.pages) || data.pages.length === 0) return null;
    if (!data.pages.every((page) => page && Array.isArray(page.blocks) && typeof page.id === "string")) return null;
    return {
      name: typeof data.name === "string" ? data.name : "Nibras",
      pages: data.pages,
      pageId: data.pages.some((page) => page.id === data.pageId) ? data.pageId! : data.pages[0].id,
      accent: safeColor(data.accent, "#5b4dff"),
    };
  } catch {
    return null;
  }
}

export function BuilderPage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const extra = EXTRA[lang];
  const [site, setSite] = useState(copy.name);
  const [pages, setPages] = useState<SitePage[]>(() => freshSite(lang));
  const [pageId, setPageId] = useState("home");
  const [accent, setAccent] = useState("#5b4dff");
  const [selected, setSelected] = useState<string | null>(null);
  const [preview, setPreview] = useState(false);
  const [tab, setTab] = useState<"design" | "layers">("design");
  const [device, setDevice] = useState<"desk" | "tablet" | "phone">("desk");
  const [ready, setReady] = useState(false);
  const history = useRef<SitePage[][]>([]);
  const lastPush = useRef(0);
  const page = pages.find((item) => item.id === pageId) ?? pages[0];
  const blocks = page?.blocks ?? [];
  const current = useMemo(() => blocks.find((block) => block.id === selected) ?? null, [blocks, selected]);

  useEffect(() => {
    const saved = readSaved();
    if (saved) {
      setSite(saved.name);
      setPages(saved.pages);
      setPageId(saved.pageId);
      setAccent(saved.accent);
    } else {
      const next = freshSite(lang);
      setPages(next);
      setPageId(next[0].id);
      setSite(COPY[lang].name);
    }
    setReady(true);
  }, [lang]);

  useEffect(() => {
    if (!ready || !pageId) return;
    localStorage.setItem(STORE, JSON.stringify({ name: site, pages, pageId, accent }));
  }, [ready, site, pages, pageId, accent]);

  function remember() {
    const now = Date.now();
    if (now - lastPush.current < 700) return;
    history.current.push(pages.map((item) => ({ ...item, blocks: item.blocks.map((block) => ({ ...block })) })));
    if (history.current.length > 30) history.current.shift();
    lastPush.current = now;
  }

  function write(pageNext: SitePage[], id = page?.id) {
    remember();
    setPages(pageNext);
    if (id) setPageId(id);
  }

  function setBlocks(next: Block[]) {
    if (!page) return;
    write(pages.map((item) => (item.id === page.id ? { ...item, blocks: next } : item)));
  }

  function load(id: string) {
    const rows = SEED[lang][id] ?? SEED[lang].landing;
    const next = withIds(rows);
    setBlocks(next);
    setSelected(next[0]?.id ?? null);
  }

  function insert(kind: Kind, index: number) {
    const block = { ...blank(kind), id: nid("b") };
    const next = blocks.slice();
    next.splice(index, 0, block);
    setBlocks(next);
    setSelected(block.id);
  }

  function move(id: string, index: number) {
    const from = blocks.findIndex((block) => block.id === id);
    if (from < 0) return;
    const next = blocks.slice();
    const [item] = next.splice(from, 1);
    const target = index > from ? index - 1 : index;
    next.splice(Math.max(0, Math.min(target, next.length)), 0, item);
    setBlocks(next);
  }

  function patch(id: string, part: Partial<Block>) {
    setBlocks(blocks.map((block) => (block.id === id ? { ...block, ...part } : block)));
  }

  function shift(id: string, dir: -1 | 1) {
    const from = blocks.findIndex((block) => block.id === id);
    const to = from + dir;
    if (from < 0 || to < 0 || to >= blocks.length) return;
    const next = blocks.slice();
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    setBlocks(next);
  }

  function addPage() {
    const item: SitePage = { id: nid("p"), name: `${extra.newPage} ${pages.length + 1}`, blocks: withIds(SEED[lang].contact) };
    write([...pages, item], item.id);
    setSelected(item.blocks[0]?.id ?? null);
  }

  function undo() {
    const prev = history.current.pop();
    if (!prev) return;
    setPages(prev);
    if (!prev.some((item) => item.id === pageId)) setPageId(prev[0]?.id ?? "");
  }

  function saveFile(blob: Blob, name: string) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
    URL.revokeObjectURL(url);
  }

  function download() {
    saveFile(new Blob([siteHtml(site, pages, lang, accent)], { type: "text/html" }), "nibras-sayt.html");
  }

  async function downloadZip() {
    const names = pages.map((_, index) => (index === 0 ? "index.html" : `sehife-${index + 1}.html`));
    const fileNav = pages.map((item, index) => ({ href: names[index], label: item.name }));
    const files = [
      { name: "index.html", content: siteHtml(site, pages, lang, accent) },
      ...pages.slice(1).map((item, index) => ({
        name: names[index + 1],
        content: siteHtml(item.name, [item], lang, accent, fileNav),
      })),
    ];
    saveFile(await filesToZip(files), "nibras-sayt.zip");
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
      <div className="nb-simple">
        <header className="nb-intro">
          <h1>{copy.name}</h1>
          <p>{copy.lead}</p>
        </header>
        <div className="nb-steps">
          <div>
            <section className="nb-card">
              <h2>{extra.step1}</h2>
              <div className="nb-tpls">
                {copy.tpls.map((tpl) => (
                  <button key={tpl.id} type="button" onClick={() => load(tpl.id)}>{tpl.name}</button>
                ))}
              </div>
            </section>
            <section className="nb-card">
              <h2>{extra.step2}</h2>
              <label>{copy.siteName}
                <input value={site} onChange={(event) => setSite(event.target.value)} />
              </label>
              <div className="nb-pages">
                {pages.map((item) => (
                  <button key={item.id} type="button" className={item.id === page?.id ? "is-on" : ""} onClick={() => setPageId(item.id)}>{item.name}</button>
                ))}
                <button type="button" onClick={addPage}>+ {extra.newPage}</button>
              </div>
              {page ? (
                <label>{extra.pageName}
                  <input value={page.name} onChange={(event) => write(pages.map((item) => (item.id === page.id ? { ...item, name: event.target.value } : item)))} />
                </label>
              ) : null}
              {blocks.map((block, index) => (
                <div key={block.id} className="nb-part">
                  <b>{index + 1}. {copy.kinds[block.kind]}</b>
                  <label>{copy.title}
                    <input value={block.title} onChange={(event) => patch(block.id, { title: event.target.value })} />
                  </label>
                  <label>{copy.body}
                    <textarea value={block.body} onChange={(event) => patch(block.id, { body: event.target.value })} />
                  </label>
                  {block.kind === "hero" || block.kind === "cta" || block.kind === "footer" ? (
                    <>
                      <label>{copy.button}<input value={block.button} onChange={(event) => patch(block.id, { button: event.target.value })} /></label>
                      <label>{copy.link}<input value={block.href} onChange={(event) => patch(block.id, { href: event.target.value })} /></label>
                    </>
                  ) : null}
                  <span className="nb-row">
                    <button type="button" onClick={() => shift(block.id, -1)}>{copy.up}</button>
                    <button type="button" onClick={() => shift(block.id, 1)}>{copy.down}</button>
                    <button type="button" onClick={() => setBlocks(blocks.filter((item) => item.id !== block.id))}>{copy.remove}</button>
                  </span>
                </div>
              ))}
              <label>{extra.addPart}
                <select value="" onChange={(event) => { if (event.target.value) insert(event.target.value as Kind, blocks.length); }}>
                  <option value="">{extra.addPart}</option>
                  {KINDS.map((kind) => <option key={kind} value={kind}>{copy.kinds[kind]}</option>)}
                </select>
              </label>
              <label>{extra.color}
                <span className="nb-swatches">
                  {COLORS.map((color) => (
                    <button key={color} type="button" style={{ background: color }} aria-label={color} onClick={() => setAccent(color)} />
                  ))}
                </span>
              </label>
              {pages.length > 1 && page ? (
                <button type="button" className="nb-quiet" onClick={() => {
                  const next = pages.filter((item) => item.id !== page.id);
                  write(next, next[0]?.id);
                }}>{extra.delPage}</button>
              ) : null}
            </section>
          </div>
          <aside className="nb-card nb-look">
            <h2>{extra.step3}</h2>
            <div className="nb-canvas">
              {blocks.map((block) => {
                const look = box(block, accent);
                return (
                  <article key={block.id} style={{ textAlign: block.align, background: look.bg === "transparent" ? "#fff" : look.bg, color: look.color, padding: look.pad }}>
                    <BlockView block={block} accent={accent} size={look.size} />
                  </article>
                );
              })}
            </div>
            <div className="nb-row">
              <button type="button" className="nb-go" onClick={download}>{copy.download}</button>
              <button type="button" onClick={() => void downloadZip()}>{extra.zip}</button>
              <button type="button" onClick={undo}>{extra.undo}</button>
            </div>
            <p className="nb-note">{copy.note}</p>
          </aside>
        </div>
      </div>
    </main>
  );
}
function BlockView({ block, accent, size }: { block: Block; accent: string; size: string }) {
  if (block.kind === "hero") {
    const image = safeImage(block.image);
    return (
      <div className="nb-hero">
        <div>
          <h3 style={{ fontSize: size }}>{block.title}</h3>
          <p>{block.body}</p>
          {block.button ? <span className="nb-btn" style={{ background: accent }}>{block.button}</span> : null}
        </div>
        {image ? <img src={image} alt="" /> : <i style={{ background: `linear-gradient(145deg, ${accent}, #7fd3ff)` }} />}
      </div>
    );
  }
  if (block.kind === "stats" || block.kind === "cards") {
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
  if (block.kind === "columns") {
    return (
      <div>
        {block.title ? <h3>{block.title}</h3> : null}
        <div className="nb-cols">
          {block.body.split("||").map((half, index) => <p key={index}>{half.trim()}</p>)}
        </div>
      </div>
    );
  }
  return (
    <div>
      {block.title ? <h3 style={{ fontSize: block.kind === "text" ? size : undefined }}>{block.title}</h3> : null}
      <p>{block.body}</p>
      {block.button ? <span className="nb-btn" style={{ background: accent }}>{block.button}</span> : null}
    </div>
  );
}
