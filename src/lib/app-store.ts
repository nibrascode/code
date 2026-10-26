import type { Lang } from "@/lib/i18n";
import type { AppSlug, StudioApp } from "@/lib/apps";
import PLAY from "@/data/play-facts.json";
import SIZES from "@/data/app-sizes.json";

/** Real, verifiable facts only. Unknown values stay undefined and are not shown. */
export type StoreFacts = {
  version?: string;
  updated?: string; // ISO date (Asia/Riyadh)
  size?: string; // download size of the linked file
  pkg?: string;
  released?: string;
  downloads?: string;
  iap?: boolean;
  /** Play version the manual `size` belongs to; size is hidden once Play reports a newer version. */
  sizeVersion?: string;
  minAndroid?: string;
  category?: Partial<Record<Lang, string>> & { en: string };
  apkUrl?: string;
  apkLabel?: string;
  privacyUrl: string;
  soon?: boolean;
  /** Screenshot bases per language; `en` is the fallback. "/shots/x-1" → x-1-s.webp (360w) + x-1.webp (full). */
  shots?: Partial<Record<Lang, readonly string[]>>;
  shotLabels?: readonly string[];
  whatsNew?: Partial<Record<Lang, string>> & { en: string };
  /** Extra about text per language (shown in the expandable About block). */
  about?: Partial<Record<Lang, string>> & { en: string };
  permissions?: Partial<Record<Lang, string>> & { en: string };
};

const range = (base: string, n: number) => Array.from({ length: n }, (_, i) => `/shots/${base}-${i + 1}`);

const BOOKS = { en: "Books & Reference", az: "Kitablar və məlumat", ar: "كتب ومراجع", ru: "Книги и справочники", tr: "Kitap ve Referans" };
const TOOLS = { en: "Productivity", az: "Məhsuldarlıq", ar: "الإنتاجية", ru: "Продуктивность", tr: "Verimlilik" };
const EDU = { en: "Education", az: "Təhsil", ar: "التعليم", ru: "Образование", tr: "Eğitim" };

export const STORE: Partial<Record<AppSlug, StoreFacts>> = {
  "nibras-arabic": {
    category: EDU,
    privacyUrl: "/privacy/nibras-arabic",
    shots: { az: range("nibras-arabic", 5), en: range("nibras-arabic", 5) },
  },
  "nibras-docs": {
    version: "1.0.1",
    updated: "2026-10-19",
    size: "16.8 MB",
    pkg: "com.nibras.docs",
    minAndroid: "7.0",
    category: TOOLS,
    apkUrl: "https://github.com/nibrascode/docs/releases/download/v1.0.1/nibras-docs-arm64.apk",
    apkLabel: "APK · arm64",
    privacyUrl: "/privacy/nibras-docs",
    shots: { en: range("nibras-docs", 8) },
    whatsNew: {
      en: "No photo or storage permissions needed anymore. Interface translated into 4 languages, cleaner title bar, scrollable export menu.",
      az: "Artıq foto və yaddaş icazəsi lazım deyil. İnterfeys 4 dilə tərcümə olundu, başlıq paneli sadələşdi, ixrac menyusu sürüşdürülə bilir.",
      ar: "لم تعد هناك حاجة لإذن الصور أو التخزين. ترجمة الواجهة إلى 4 لغات، وشريط عنوان أنظف، وقائمة تصدير قابلة للتمرير.",
      ru: "Больше не нужны разрешения на фото и хранилище. Интерфейс переведён на 4 языка, чище заголовок, прокручиваемое меню экспорта.",
      tr: "Artık fotoğraf ve depolama izni gerekmiyor. Arayüz 4 dile çevrildi, başlık çubuğu sadeleşti, dışa aktarma menüsü kaydırılabilir.",
    },
    about: {
      en: "What you see on screen is what you get in the PDF: same margins, fonts, line breaks and page ends. Chapters, automatic table of contents, footnotes, tables, images and more than 100 cover designs. Export to PDF, Word (DOCX), EPUB and TXT. Arabic lines switch to right-to-left automatically. All features are currently free.",
      az: "Ekranda nə görürsənsə, PDF-də də odur: eyni kənar boşluqlar, şriftlər, sətir və səhifə sonları. Fəsillər, avtomatik mündəricat, haşiyələr, cədvəllər, şəkillər və 100-dən çox üz qabığı dizaynı. PDF, Word (DOCX), EPUB və TXT ixracı. Ərəb sətirləri avtomatik sağdan sola keçir. Hazırda bütün funksiyalar pulsuzdur.",
      ar: "ما تراه على الشاشة هو ما تحصل عليه في PDF: الهوامش والخطوط وفواصل الأسطر والصفحات نفسها. فصول وفهرس تلقائي وحواشٍ وجداول وصور وأكثر من 100 تصميم غلاف. تصدير إلى PDF وWord وEPUB وTXT. الأسطر العربية تتحول تلقائيًا من اليمين إلى اليسار. جميع الميزات مجانية حاليًا.",
      ru: "Что на экране, то и в PDF: те же поля, шрифты, переносы и концы страниц. Главы, автоматическое оглавление, сноски, таблицы, изображения и более 100 обложек. Экспорт в PDF, Word (DOCX), EPUB и TXT. Арабские строки автоматически идут справа налево. Сейчас все функции бесплатны.",
      tr: "Ekranda ne görürsen PDF'te de o: aynı kenar boşlukları, yazı tipleri, satır ve sayfa sonları. Bölümler, otomatik içindekiler, dipnotlar, tablolar, görseller ve 100'den fazla kapak tasarımı. PDF, Word (DOCX), EPUB ve TXT dışa aktarma. Arapça satırlar otomatik olarak sağdan sola geçer. Şu an tüm özellikler ücretsiz.",
    },
    permissions: {
      en: "Internet, camera, network state. No photo, media or storage permission.",
      az: "İnternet, kamera, şəbəkə vəziyyəti. Foto, media və yaddaş icazəsi yoxdur.",
      ar: "الإنترنت، الكاميرا، حالة الشبكة. لا إذن للصور أو الوسائط أو التخزين.",
      ru: "Интернет, камера, состояние сети. Без доступа к фото, медиа и хранилищу.",
      tr: "İnternet, kamera, ağ durumu. Fotoğraf, medya veya depolama izni yok.",
    },
  },
  "nibras-qr": {
    version: "1.0.2",
    updated: "2026-10-12",
    pkg: "com.nibras.qr",
    minAndroid: "7.0",
    category: TOOLS,
    privacyUrl: "/privacy/nibras-qr",
  },
  "nibras-pdf": {
    version: "1.0.5",
    updated: "2026-10-19",
    released: "2026-10-21",
    size: "50.10 MB",
    sizeVersion: "1.0.5",
    minAndroid: "7.0",
    iap: true,
    pkg: "com.nibras.pdf",
    category: TOOLS,
    privacyUrl: "/privacy/nibras-pdf",
  },
  "nibras-plans": { soon: true, privacyUrl: "/privacy/nibras-plans" },
  "nibras-office": {
    version: "1.0.1",
    updated: "2026-10-26",
    pkg: "com.nibrascode.pdf",
    minAndroid: "8.0",
    category: TOOLS,
    soon: false,
    privacyUrl: "/nibras-office/privacy",
    shots: { en: range("nibras-office-en", 6) },
    shotLabels: [
      "Your PDFs, beautifully organized",
      "Pen, highlighter & shapes",
      "Search, OCR & password",
      "Organize pages",
      "Distraction-free reading",
      "5 languages, night mode, full screen",
    ],
    permissions: {
      en: "Files stay on your device. Internet is used only once to download OCR language files (~10 MB).",
      az: "Fayllar cihazında qalır. İnternet yalnız OCR dil fayllarını bir dəfə yükləmək üçündür (~10 MB).",
      ar: "تبقى الملفات على جهازك. يُستخدم الإنترنت مرة واحدة فقط لتنزيل ملفات لغة OCR (نحو 10 ميغابايت).",
      ru: "Файлы остаются на устройстве. Интернет нужен один раз — скачать языковые файлы OCR (~10 МБ).",
      tr: "Dosyalar cihazında kalır. İnternet yalnızca OCR dil dosyalarını bir kez indirmek için kullanılır (~10 MB).",
    },
  },
  "majmu-al-fatawa": {
    version: "1.0.0",
    pkg: "com.nibrascode.fatawa",
    minAndroid: "7.0",
    category: BOOKS,
    soon: true,
    privacyUrl: "https://library.nibrascode.com/fatawa/privacy",
    shots: { en: range("majmu-al-fatawa", 7) },
    permissions: {
      en: "No permissions at all — the app never connects to the internet. No accounts, ads or analytics.",
      az: "Heç bir icazə yoxdur — tətbiq internetə qoşulmur. Hesab, reklam və analitika yoxdur.",
      ar: "لا أذونات إطلاقًا — التطبيق لا يتصل بالإنترنت. بلا حسابات ولا إعلانات ولا تحليلات.",
      ru: "Никаких разрешений — приложение не выходит в интернет. Без аккаунтов, рекламы и аналитики.",
      tr: "Hiç izin yok — uygulama internete bağlanmaz. Hesap, reklam ve analiz yok.",
    },
  },
};

export function shotsFor(facts: StoreFacts | undefined, lang: Lang): readonly string[] {
  return facts?.shots?.[lang] ?? facts?.shots?.en ?? [];
}

export function pick<T extends string>(rec: (Partial<Record<Lang, T>> & { en: T }) | undefined, lang: Lang) {
  return rec ? (rec[lang] ?? rec.en) : undefined;
}

type PlayFacts = { listed: boolean; playUrl?: string; version?: string; updated?: string; minAndroid?: string };
const SIZE_OVERRIDES = SIZES as Partial<Record<string, { size?: string; sizeVersion?: string }>>;
const PLAY_FACTS = PLAY as Partial<Record<string, PlayFacts>>;

/** Manual facts merged with the auto-synced Play data (scripts/sync-play.mjs). */
export function effectiveApp(app: StudioApp): { app: StudioApp; facts: StoreFacts } {
  const stored: StoreFacts = STORE[app.slug] ?? { privacyUrl: `/privacy/${app.slug}` };
  // NX Studio-dan yazılan ölçü (src/data/app-sizes.json) əl ilə yazılmış ölçünü əvəz edir
  const sized = SIZE_OVERRIDES[app.slug];
  const base: StoreFacts = sized?.size ? { ...stored, size: sized.size, sizeVersion: sized.sizeVersion || undefined } : stored;
  const play = PLAY_FACTS[app.slug];
  if (!play) return { app, facts: base };
  if (!play.listed) return { app: { ...app, playStoreUrl: null }, facts: base };
  const facts: StoreFacts = {
    ...base,
    soon: false,
    version: play.version ?? base.version,
    updated: play.updated ?? base.updated,
    minAndroid: play.minAndroid ?? base.minAndroid,
  };
  if (base.sizeVersion && play.version && play.version !== base.sizeVersion) delete facts.size;
  return { app: { ...app, playStoreUrl: play.playUrl ?? app.playStoreUrl }, facts };
}

export function playListed(slug: string): boolean | undefined {
  return PLAY_FACTS[slug]?.listed;
}
