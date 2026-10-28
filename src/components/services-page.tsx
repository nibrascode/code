import { AppWindow, ChevronRight, Clapperboard, Code2, FileText, Headphones, Image as ImageIcon, LayoutGrid, QrCode, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { BAR } from "@/components/home-bars";
import { STUDIO_APPS } from "@/lib/apps";
import type { Lang } from "@/lib/i18n";
import { localeHref } from "@/lib/locale-path";
import { TOOL_GROUPS, TOOLS, toolPath, toolsPath } from "@/lib/tools";
import { VOICE_TITLE } from "@/voice/voice-page";
import { TOOL_IDS, TOOL_TEXT } from "@/pdf/tool-text";
import { VIDEO_KIT } from "@/kit/video-meta";

type L = Record<Lang, string>;
const T = (az: string, en: string, tr: string, ar: string, ru: string): L => ({ az, en, tr, ar, ru });

const TITLE = T("Services", "Services", "Services", "Services", "Services");
const DESC = T(
  "Nibras Code xidmətləri: PDF, video, səs, QR, şəkil, kod alətləri, tətbiqlər, Studio və Nibras AI — hamısı bir siyahıda.",
  "Nibras Code services: PDF, video, audio, QR, images, code tools, apps, Studio and Nibras AI — all in one list.",
  "Nibras Code hizmetleri: PDF, video, ses, QR, görsel, kod araçları, uygulamalar, Studio ve Nibras AI — hepsi tek listede.",
  "خدمات Nibras Code: PDF والفيديو والصوت وQR والصور وأدوات الكود والتطبيقات وStudio وNibras AI — كلها في قائمة واحدة.",
  "Сервисы Nibras Code: PDF, видео, аудио, QR, изображения, инструменты кода, приложения, Studio и Nibras AI — всё в одном списке.",
);

type Item = { href: string; label: string; hint?: string; ext?: boolean };
type Cat = { id: string; sub: L; icon: ReactNode; title: L; items: (lang: Lang) => Item[] };

const IMG_TOOL: Record<string, L> = {
  resize: T("Ölçünü dəyiş", "Resize", "Boyutlandır", "تغيير الحجم", "Изменить размер"),
  convert: T("Format dəyiş", "Convert", "Dönüştür", "تحويل الصيغة", "Конвертировать"),
  edit: T("Redaktə et", "Edit", "Düzenle", "تحرير", "Редактировать"),
};

const CATS: Cat[] = [
  {
    id: "pdf", sub: T("PDF ilə işləmək üçün alətlər", "Tools for working with PDF", "PDF ile çalışmak için araçlar", "أدوات للعمل مع PDF", "Инструменты для работы с PDF"), icon: <FileText size={22} />, title: T("PDF", "PDF", "PDF", "PDF", "PDF"),
    items: (lang) => [
      { href: localeHref(lang, "/pdf"), label: T("PDF ana", "PDF home", "PDF ana sayfa", "الصفحة الرئيسية لـ PDF", "PDF главная")[lang] },
      ...TOOL_IDS.map((id) => ({ href: localeHref(lang, `/pdf/${id}`), label: TOOL_TEXT[lang][id].title, hint: TOOL_TEXT[lang][id].description })),
    ],
  },
  {
    id: "qr", sub: T("QR kod hazırla və oxu", "Make and read QR codes", "QR kod hazırla ve oku", "أنشئ رموز QR واقرأها", "Создавайте и читайте QR-коды"), icon: <QrCode size={22} />, title: T("QR", "QR", "QR", "QR", "QR"),
    items: (lang) => [
      { href: localeHref(lang, "/qr"), label: BAR.qr[lang] },
      { href: localeHref(lang, "/wifi"), label: T("Wi-Fi QR", "Wi-Fi QR", "Wi-Fi QR", "QR للواي فاي", "Wi-Fi QR")[lang] },
      { href: localeHref(lang, "/vcard"), label: T("Vizit kartı QR", "vCard QR", "Kartvizit QR", "QR لبطاقة الاتصال", "QR визитка")[lang] },
    ],
  },
  {
    id: "image", sub: T("Şəkillə bağlı alətlər", "Tools for images", "Görsellerle ilgili araçlar", "أدوات للصور", "Инструменты для изображений"), icon: <ImageIcon size={22} />, title: T("Şəkil", "Images", "Görsel", "الصور", "Изображения"),
    items: (lang) => [
      { href: localeHref(lang, "/erase"), label: BAR.erase[lang] },
      { href: localeHref(lang, "/image"), label: BAR.image[lang] },
      ...Object.keys(IMG_TOOL).map((k) => ({ href: localeHref(lang, `/image/${k}`), label: IMG_TOOL[k][lang] })),
    ],
  },
  {
    id: "video", sub: T("Kəs, sıx, çərçivələ, ölçü, səssiz, çevir, birləşdir", "Trim, compress, crop, resize, mute, convert, merge", "Kes, sıkıştır, kırp, boyut, sessiz, dönüştür, birleştir", "قص وضغط واقتصاص وتغيير الحجم وكتم وتحويل ودمج", "Обрезка, сжатие, кадр, размер, без звука, конвертация, склейка"), icon: <Clapperboard size={22} />, title: T("Video", "Video", "Video", "الفيديو", "Видео"),
    items: (lang) => (["/video", "/video/trim", "/video/compress", "/video/crop", "/video/resize", "/video/mute", "/video/convert", "/video/merge", "/video/audio"] as const).map((p) => ({ href: localeHref(lang, p), label: VIDEO_KIT[p][lang].h1, hint: p === "/video" ? undefined : VIDEO_KIT[p][lang].lead })),
  },
  {
    id: "code", sub: T("Proqramçılar üçün faydalı alətlər", "Handy tools for developers", "Geliştiriciler için faydalı araçlar", "أدوات مفيدة للمبرمجين", "Полезные инструменты для разработчиков"), icon: <Code2 size={22} />, title: T("Kod alətləri", "Code tools", "Kod araçları", "أدوات الكود", "Инструменты кода"),
    items: (lang) => [
      { href: toolsPath(lang), label: T("Bütün alətlər", "All tools", "Tüm araçlar", "كل الأدوات", "Все инструменты")[lang] },
      ...TOOL_GROUPS.flatMap((g) =>
        g.ids.map((id) => ({ href: toolPath(lang, id), label: TOOLS.find((t) => t.id === id)?.label[lang] ?? id, hint: g.title[lang] })),
      ),
    ],
  },
  {
    id: "apps", sub: T("Onlayn tətbiqlər", "Online apps", "Çevrim içi uygulamalar", "تطبيقات على الإنترنت", "Онлайн-приложения"), icon: <AppWindow size={22} />, title: T("Tətbiqlər", "Apps", "Uygulamalar", "التطبيقات", "Приложения"),
    items: (lang) => [
      { href: localeHref(lang, "/apps"), label: T("Bütün tətbiqlər", "All apps", "Tüm uygulamalar", "كل التطبيقات", "Все приложения")[lang] },
      ...STUDIO_APPS.map((a) => ({ href: localeHref(lang, `/apps/${a.slug}`), label: a.name })),
    ],
  },
  {
    id: "studio", sub: T("Layihələrini hazırla", "Build your projects", "Projelerini hazırla", "جهّز مشاريعك", "Собирайте свои проекты"), icon: <LayoutGrid size={22} />, title: T("Studio", "Studio", "Studio", "الاستوديو", "Студия"),
    items: (lang) => [
      { href: "https://dev.nibrascode.com", label: BAR.dev[lang], ext: true },
      { href: "https://studio.nibrascode.com", label: BAR.apk[lang], ext: true },
      { href: localeHref(lang, "/studio"), label: BAR.studio[lang] },
      { href: localeHref(lang, "/workspace"), label: "Workspace" },
    ],
  },
  {
    id: "audio", sub: T("Səs yaz, montaj et, birləşdir — oflayn studio", "Record, edit, join — offline studio", "Kaydet, düzenle, birleştir — çevrimdışı stüdyo", "سجّل وحرّر وادمج — استوديو دون اتصال", "Запись, монтаж, склейка — офлайн-студия"), icon: <Headphones size={22} />, title: T("Səs", "Audio", "Ses", "الصوت", "Аудио"),
    items: (lang) => [
      { href: "/audio", label: T("Nibras Audio", "Nibras Audio", "Nibras Audio", "Nibras Audio", "Nibras Audio")[lang], hint: T("Oflayn səs studiyası", "Offline audio studio", "Çevrimdışı ses stüdyosu", "استوديو صوت دون اتصال", "Офлайн аудиостудия")[lang] },
      { href: "/audio/record", label: T("Yeni səs yazısı", "New recording", "Yeni ses kaydı", "تسجيل جديد", "Новая запись")[lang] },
      { href: "/audio/open", label: T("Audio fayl aç", "Open audio file", "Ses dosyası aç", "فتح ملف صوت", "Открыть аудиофайл")[lang] },
      { href: "/audio/edit", label: T("Montaj", "Edit", "Montaj", "مونتاج", "Монтаж")[lang] },
      { href: "/audio/join", label: T("Birləşdir", "Join", "Birleştir", "دمج", "Объединить")[lang] },
      { href: "/audio/batch", label: T("Toplu emal", "Batch process", "Toplu işlem", "معالجة دفعة", "Пакетная обработка")[lang] },
      { href: "/audio/mix", label: T("Qarışıq", "Mix", "Karışım", "مزج", "Микс")[lang] },
      { href: "/audio/fx", label: T("Effektlər", "Effects", "Efektler", "تأثيرات", "Эффекты")[lang] },
      { href: "/audio/denoise", label: T("Küyü azalt", "Reduce noise", "Gürültüyü azalt", "تقليل الضوضاء", "Шумоподавление")[lang] },
      { href: "/audio/export", label: T("Telefona saxla", "Save to phone", "Telefona kaydet", "حفظ على الهاتف", "Сохранить на телефон")[lang] },
      { href: "/audio/notes", label: T("Yadda saxlanmış qeydlər", "Saved notes", "Kayıtlı notlar", "ملاحظات محفوظة", "Сохранённые заметки")[lang] },
      { href: "/audio/share", label: T("Paylaş", "Share", "Paylaş", "مشاركة", "Поделиться")[lang] },
      { href: localeHref(lang, "/voice"), label: VOICE_TITLE[lang] },
    ],
  },
  {
    id: "other", sub: T("Əlavə alətlər və resurslar", "Extra tools and resources", "Ek araçlar ve kaynaklar", "أدوات وموارد إضافية", "Дополнительные инструменты и ресурсы"), icon: <Sparkles size={22} />, title: T("Digər", "More", "Diğer", "أخرى", "Другое"),
    items: (lang) => [
      { href: localeHref(lang, "/ai"), label: "Nibras AI" },
      { href: localeHref(lang, "/calc"), label: BAR.calc[lang] },
      { href: localeHref(lang, "/flow"), label: BAR.flow[lang] },
      { href: localeHref(lang, "/logic"), label: BAR.logic[lang] },
      { href: localeHref(lang, "/learn"), label: BAR.learn[lang] },
      { href: localeHref(lang, "/learn/logic"), label: BAR.logicLab[lang] },
      { href: localeHref(lang, "/doctor"), label: BAR.doctor[lang] },
      { href: localeHref(lang, "/error-help"), label: BAR.errorHelp[lang] },
      { href: localeHref(lang, "/seo"), label: BAR.seo[lang] },
      { href: localeHref(lang, "/mirror"), label: BAR.mirror[lang] },
      { href: localeHref(lang, "/shortcuts"), label: BAR.shortcuts[lang] },
      { href: localeHref(lang, "/schema"), label: BAR.schema[lang] },
      { href: localeHref(lang, "/filecheck"), label: BAR.filecheck[lang] },
    ],
  },
];

export const SERVICES_LABEL = TITLE;

export function servicesMeta(lang: Lang) {
  const title = `${TITLE[lang]} — Nibras Code`;
  return [
    { title },
    { property: "og:title", content: title },
    { name: "description", content: DESC[lang] },
    { property: "og:description", content: DESC[lang] },
  ];
}

export function ServicesPage({ lang }: { lang: Lang }) {
  return (
    <main className="why-page svc-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <div className="svc-list">
        {CATS.map((c) => (
          <details key={c.id} className={`svc-cat svc-${c.id}`} name="svc">
            <summary>
              <span className="svc-ico" aria-hidden="true">{c.icon}</span>
              <span className="svc-text"><b className="svc-name">{c.title[lang]}</b><small className="svc-sub">{c.sub[lang]}</small></span>
              <span className="svc-chev" aria-hidden="true"><ChevronRight size={18} /></span>
            </summary>
            <ul>
              {c.items(lang).map((it) => (
                <li key={`${it.href}::${it.label}`}>
                  <a href={it.href} {...(it.ext ? { target: "_blank", rel: "noopener" } : {})}>
                    <span>{it.label}</span>
                    {it.hint ? <small>{it.hint}</small> : null}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </main>
  );
}
