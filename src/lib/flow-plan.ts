import type { Lang } from "@/lib/i18n";

export type FlowKind = "shop" | "blog" | "course" | "portfolio" | "booking" | "app" | "forum" | "notes" | "site";

export type FlowPlan = {
  name: string;
  slug: string;
  kind: FlowKind;
  kindLabel: string;
  pages: { path: string; name: string; job: string }[];
  tree: string;
  steps: string[];
  files: { path: string; job: string }[];
};

const KINDS: { kind: FlowKind; words: string[] }[] = [
  { kind: "shop", words: ["magaza", "satis", "shop", "store", "mehsul", "product", "sebet", "cart", "market", "магазин", "продаж", "متجر", "ürün", "urun"] },
  { kind: "course", words: ["ders", "kurs", "telim", "oyren", "lesson", "course", "imtahan", "учеб", "دورة", "دروس", "egitim", "eğitim"] },
  { kind: "blog", words: ["blog", "bloq", "meqale", "article", "yazi", "yazı", "журнал", "مدونة"] },
  { kind: "forum", words: ["forum", "movzu", "community", "форум", "منتدى"] },
  { kind: "booking", words: ["rezerv", "randevu", "gorus", "booking", "appointment", "запись", "حجز"] },
  { kind: "app", words: ["tetbiq", "mobil", "android", "ios", "приложение", "تطبيق", "uygulama"] },
  { kind: "portfolio", words: ["portfolio", "numune", "portfolio", "işler", "isler", "портфолио"] },
  { kind: "notes", words: ["qeyd", "todo", "hatirlat", "notebook", "замет", "ملاحظة"] },
];

const PAGE_COPY: Record<Lang, Record<string, { name: string; job: string }>> = {
  az: {
    home: { name: "Ana", job: "Layihənin bir cümləsini və növbəti addımı göstərir." },
    list: { name: "Siyahı", job: "Əsas şeylərin siyahısı." },
    item: { name: "Tək", job: "Bir elementin öz səhifəsi." },
    cart: { name: "Səbət", job: "Seçilənlər burada durur." },
    pay: { name: "Ödəniş", job: "Ödənişdən əvvəl siyahını təsdiqləyir." },
    account: { name: "Hesab", job: "Adam öz məlumatını görür." },
    contact: { name: "Əlaqə", job: "Bir ünvan və qısa məktub." },
    about: { name: "Haqqında", job: "Layihənin kim üçün olduğu." },
    lesson: { name: "Dərs", job: "Bir dərsin mətni." },
    exam: { name: "İmtahan", job: "Dərsdən sonra qısa yoxlama." },
    work: { name: "İş", job: "Bir iş nümunəsi." },
    time: { name: "Vaxt", job: "Boş vaxtın seçimi." },
    confirm: { name: "Təsdiq", job: "Seçilən vaxtın yekunu." },
    download: { name: "Yüklə", job: "Tətbiqin haradan götürüldüyü." },
    privacy: { name: "Məxfilik", job: "Nəyin saxlanmadığı." },
    topic: { name: "Mövzu", job: "Bir mövzunun yazıları." },
    profile: { name: "Profil", job: "Adamın öz adı və yazıları." },
    note: { name: "Qeyd", job: "Bir qeydin mətni." },
    price: { name: "Qiymət", job: "Pulsuz və pullu hissə, varsa." },
  },
  en: {
    home: { name: "Home", job: "Shows the project in one sentence and the next step." },
    list: { name: "List", job: "The list of the main things." },
    item: { name: "One item", job: "A page for a single item." },
    cart: { name: "Cart", job: "Holds what was chosen." },
    pay: { name: "Payment", job: "Confirms the list before payment." },
    account: { name: "Account", job: "The person sees their own data." },
    contact: { name: "Contact", job: "One address and a short message." },
    about: { name: "About", job: "Who the project is for." },
    lesson: { name: "Lesson", job: "The text of one lesson." },
    exam: { name: "Quiz", job: "A short check after the lesson." },
    work: { name: "Work", job: "One sample of work." },
    time: { name: "Time", job: "Picking an open time." },
    confirm: { name: "Confirm", job: "The summary of the chosen time." },
    download: { name: "Download", job: "Where the app is taken from." },
    privacy: { name: "Privacy", job: "What is not stored." },
    topic: { name: "Topic", job: "The posts of one topic." },
    profile: { name: "Profile", job: "A person's name and posts." },
    note: { name: "Note", job: "The text of one note." },
    price: { name: "Price", job: "The free part and the paid part, if any." },
  },
  tr: {
    home: { name: "Ana", job: "Projenin bir cümlesini ve sonraki adımı gösterir." },
    list: { name: "Liste", job: "Ana şeylerin listesi." },
    item: { name: "Tek", job: "Bir öğenin kendi sayfası." },
    cart: { name: "Sepet", job: "Seçilenler burada durur." },
    pay: { name: "Ödeme", job: "Ödemeden önce listeyi onaylar." },
    account: { name: "Hesap", job: "Kişi kendi bilgisini görür." },
    contact: { name: "İletişim", job: "Bir adres ve kısa mektup." },
    about: { name: "Hakkında", job: "Proje kimin içindir." },
    lesson: { name: "Ders", job: "Bir dersin metni." },
    exam: { name: "Sınav", job: "Dersten sonra kısa yoklama." },
    work: { name: "İş", job: "Bir iş örneği." },
    time: { name: "Saat", job: "Boş saatin seçimi." },
    confirm: { name: "Onay", job: "Seçilen saatin özeti." },
    download: { name: "İndir", job: "Uygulamanın nereden alındığı." },
    privacy: { name: "Gizlilik", job: "Neyin saklanmadığı." },
    topic: { name: "Konu", job: "Bir konunun yazıları." },
    profile: { name: "Profil", job: "Kişinin adı ve yazıları." },
    note: { name: "Not", job: "Bir notun metni." },
    price: { name: "Fiyat", job: "Ücretsiz ve ücretli kısım, varsa." },
  },
  ar: {
    home: { name: "الرئيسية", job: "جملة واحدة عن المشروع والخطوة التالية." },
    list: { name: "القائمة", job: "قائمة الأشياء الأساسية." },
    item: { name: "عنصر", job: "صفحة عنصر واحد." },
    cart: { name: "السلة", job: "ما اختير يبقى هنا." },
    pay: { name: "الدفع", job: "يؤكد القائمة قبل الدفع." },
    account: { name: "الحساب", job: "يرى الشخص بياناته." },
    contact: { name: "تواصل", job: "عنوان ورسالة قصيرة." },
    about: { name: "عن المشروع", job: "لمن هذا المشروع." },
    lesson: { name: "درس", job: "نص درس واحد." },
    exam: { name: "اختبار", job: "فحص قصير بعد الدرس." },
    work: { name: "عمل", job: "نموذج عمل واحد." },
    time: { name: "الوقت", job: "اختيار وقت فارغ." },
    confirm: { name: "تأكيد", job: "خلاصة الوقت المختار." },
    download: { name: "تنزيل", job: "من أين يُؤخذ التطبيق." },
    privacy: { name: "الخصوصية", job: "ما الذي لا يُحفظ." },
    topic: { name: "موضوع", job: "كتابات موضوع واحد." },
    profile: { name: "الملف", job: "اسم الشخص وكتاباته." },
    note: { name: "ملاحظة", job: "نص ملاحظة واحدة." },
    price: { name: "السعر", job: "الجزء المجاني والمدفوع، إن وُجد." },
  },
  ru: {
    home: { name: "Главная", job: "Одно предложение о проекте и следующий шаг." },
    list: { name: "Список", job: "Список главного." },
    item: { name: "Один", job: "Страница одного элемента." },
    cart: { name: "Корзина", job: "Здесь лежит выбранное." },
    pay: { name: "Оплата", job: "Подтверждает список до оплаты." },
    account: { name: "Аккаунт", job: "Человек видит свои данные." },
    contact: { name: "Контакт", job: "Один адрес и короткое письмо." },
    about: { name: "О проекте", job: "Для кого проект." },
    lesson: { name: "Урок", job: "Текст одного урока." },
    exam: { name: "Проверка", job: "Короткая проверка после урока." },
    work: { name: "Работа", job: "Один образец работы." },
    time: { name: "Время", job: "Выбор свободного времени." },
    confirm: { name: "Подтверждение", job: "Итог выбранного времени." },
    download: { name: "Скачать", job: "Откуда берётся приложение." },
    privacy: { name: "Конфиденциальность", job: "Что не сохраняется." },
    topic: { name: "Тема", job: "Записи одной темы." },
    profile: { name: "Профиль", job: "Имя человека и его записи." },
    note: { name: "Заметка", job: "Текст одной заметки." },
    price: { name: "Цена", job: "Бесплатная и платная часть, если она есть." },
  },
};

const SHAPES: Record<FlowKind, { path: string; key: string }[]> = {
  shop: [
    { path: "/", key: "home" },
    { path: "/items", key: "list" },
    { path: "/items/one", key: "item" },
    { path: "/cart", key: "cart" },
    { path: "/pay", key: "pay" },
    { path: "/contact", key: "contact" },
  ],
  blog: [
    { path: "/", key: "home" },
    { path: "/posts", key: "list" },
    { path: "/posts/one", key: "item" },
    { path: "/about", key: "about" },
    { path: "/contact", key: "contact" },
  ],
  course: [
    { path: "/", key: "home" },
    { path: "/lessons", key: "list" },
    { path: "/lessons/one", key: "lesson" },
    { path: "/quiz", key: "exam" },
    { path: "/account", key: "account" },
  ],
  portfolio: [
    { path: "/", key: "home" },
    { path: "/work", key: "list" },
    { path: "/work/one", key: "work" },
    { path: "/about", key: "about" },
    { path: "/contact", key: "contact" },
  ],
  booking: [
    { path: "/", key: "home" },
    { path: "/services", key: "list" },
    { path: "/time", key: "time" },
    { path: "/confirm", key: "confirm" },
    { path: "/contact", key: "contact" },
  ],
  app: [
    { path: "/", key: "home" },
    { path: "/app", key: "item" },
    { path: "/download", key: "download" },
    { path: "/privacy", key: "privacy" },
    { path: "/contact", key: "contact" },
  ],
  forum: [
    { path: "/", key: "home" },
    { path: "/topics", key: "list" },
    { path: "/topics/one", key: "topic" },
    { path: "/profile", key: "profile" },
  ],
  notes: [
    { path: "/", key: "home" },
    { path: "/notes", key: "list" },
    { path: "/notes/one", key: "note" },
    { path: "/account", key: "account" },
  ],
  site: [
    { path: "/", key: "home" },
    { path: "/about", key: "about" },
    { path: "/price", key: "price" },
    { path: "/contact", key: "contact" },
  ],
};

const KIND_LABEL: Record<Lang, Record<FlowKind, string>> = {
  az: { shop: "Mağaza", blog: "Bloq", course: "Dərs", portfolio: "İş nümunəsi", booking: "Vaxt seçimi", app: "Tətbiq", forum: "Forum", notes: "Qeyd", site: "Sadə sayt" },
  en: { shop: "Shop", blog: "Blog", course: "Course", portfolio: "Portfolio", booking: "Booking", app: "App", forum: "Forum", notes: "Notes", site: "Simple site" },
  tr: { shop: "Mağaza", blog: "Blog", course: "Ders", portfolio: "İş örneği", booking: "Randevu", app: "Uygulama", forum: "Forum", notes: "Not", site: "Basit site" },
  ar: { shop: "متجر", blog: "مدونة", course: "دروس", portfolio: "أعمال", booking: "حجز", app: "تطبيق", forum: "منتدى", notes: "ملاحظات", site: "موقع بسيط" },
  ru: { shop: "Магазин", blog: "Блог", course: "Уроки", portfolio: "Портфолио", booking: "Запись", app: "Приложение", forum: "Форум", notes: "Заметки", site: "Простой сайт" },
};

const FALLBACK: Record<Lang, string> = { az: "Layihə", en: "Project", tr: "Proje", ar: "مشروع", ru: "Проект" };

const STEPS: Record<Lang, (label: string, first: string) => string[]> = {
  az: (label, first) => [
    `Bu, ${label.toLocaleLowerCase("az")} planıdır. Adı və bir cümləni yaz.`,
    `Əvvəl ${first} səhifəsini bitir.`,
    "Sonra siyahıdakı növbəti səhifəyə keç. Hamısını bir gündə açma.",
    "Məlumat nümunəsini src/lib/data.ts içində saxla. Serverə indidən bağlama.",
    "Bitəndə bir adamla yoxla: adı tapır, işini görür, çıxır.",
  ],
  en: (label, first) => [
    `This is a ${label.toLowerCase()} plan. Write the name and one sentence.`,
    `Finish the ${first} page first.`,
    "Then open the next page in the list. Do not open all of them in one day.",
    "Keep the sample data in src/lib/data.ts. Do not connect a server yet.",
    "When it is done, one person checks it: they find the name, finish the job, and leave.",
  ],
  tr: (label, first) => [
    `Bu, ${label.toLocaleLowerCase("tr")} planıdır. Adı ve bir cümleyi yaz.`,
    `Önce ${first} sayfasını bitir.`,
    "Sonra listedeki sonraki sayfaya geç. Hepsini bir günde açma.",
    "Örnek veriyi src/lib/data.ts içinde tut. Sunucuya şimdiden bağlama.",
    "Bitince bir kişiyle yokla: adı bulur, işini görür, çıkar.",
  ],
  ar: (label, first) => [
    `هذه خطة: ${label}. اكتب الاسم وجملة واحدة.`,
    `أنجز صفحة ${first} أولاً.`,
    "ثم انتقل إلى الصفحة التالية في القائمة. لا تفتح الكل في يوم واحد.",
    "أبقِ البيانات التجريبية في src/lib/data.ts. لا تربط خادماً الآن.",
    "عند الانتهاء يجرّبها شخص: يجد الاسم، ينهي العمل، ويخرج.",
  ],
  ru: (label, first) => [
    `Это план: ${label}. Напишите имя и одно предложение.`,
    `Сначала закончите страницу «${first}».`,
    "Потом откройте следующую страницу в списке. Не открывайте все за один день.",
    "Образец данных держите в src/lib/data.ts. Сервер пока не подключайте.",
    "В конце один человек проверяет: находит имя, делает дело и уходит.",
  ],
};

const FILE_JOB: Record<Lang, { readme: string; data: string }> = {
  az: { readme: "Layihənin adı və bir cümləsi.", data: "Nümunə məlumat. Hələ server yoxdur." },
  en: { readme: "The project name and one sentence.", data: "Sample data. There is no server yet." },
  tr: { readme: "Projenin adı ve bir cümlesi.", data: "Örnek veri. Henüz sunucu yok." },
  ar: { readme: "اسم المشروع وجملة واحدة.", data: "بيانات تجريبية. لا خادم بعد." },
  ru: { readme: "Имя проекта и одно предложение.", data: "Образец данных. Сервера пока нет." },
};

function fold(value: string) {
  return value
    .toLowerCase()
    .replace(/ə/g, "e")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ё/g, "е");
}

function detect(idea: string): FlowKind {
  const text = fold(idea);
  let best: FlowKind = "site";
  let score = 0;
  for (const item of KINDS) {
    const hit = item.words.reduce((sum, word) => sum + (text.includes(fold(word)) ? 1 : 0), 0);
    if (hit > score) {
      best = item.kind;
      score = hit;
    }
  }
  return best;
}

function projectName(idea: string, lang: Lang) {
  const line = idea.trim().split(/\n/)[0]?.replace(/\s+/g, " ").trim() ?? "";
  const cut = line.split(/[.:!?]/)[0]?.trim() ?? "";
  const name = (cut || line).slice(0, 42).trim();
  return name || FALLBACK[lang];
}

function slugOf(name: string) {
  const slug = fold(name)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 24);
  return slug || "layihe";
}

function fileFor(path: string) {
  if (path === "/") return "src/pages/index.tsx";
  return `src/pages${path}.tsx`;
}

export function planFromIdea(idea: string, lang: Lang): FlowPlan {
  const kind = detect(idea);
  const name = projectName(idea, lang);
  const slug = slugOf(name);
  const copy = PAGE_COPY[lang];
  const pages = SHAPES[kind].map((item) => ({ path: item.path, name: copy[item.key].name, job: copy[item.key].job }));
  const files = [
    { path: "README.md", job: FILE_JOB[lang].readme },
    ...pages.map((page) => ({ path: fileFor(page.path), job: page.job })),
    { path: "src/lib/data.ts", job: FILE_JOB[lang].data },
  ];
  const pageLines = pages.map((page) => `    pages/${fileFor(page.path).replace("src/pages/", "")}`);
  const tree = [`${slug}/`, "  src/", ...pageLines, "    lib/data.ts", "  public/", "  README.md"].join("\n");
  return {
    name,
    slug,
    kind,
    kindLabel: KIND_LABEL[lang][kind],
    pages,
    tree,
    steps: STEPS[lang](KIND_LABEL[lang][kind], pages[0]?.name ?? "Ana"),
    files,
  };
}
