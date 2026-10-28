import { AppWindow, ChevronDown, Code2, FileText, Image as ImageIcon, LayoutGrid, QrCode, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { BAR } from "@/components/home-bars";
import { STUDIO_APPS } from "@/lib/apps";
import type { Lang } from "@/lib/i18n";
import { homePath, localeHref } from "@/lib/locale-path";
import { TOOL_GROUPS, TOOLS, toolPath, toolsPath } from "@/lib/tools";
import { TOOL_IDS, TOOL_TEXT } from "@/pdf/tool-text";

type L = Record<Lang, string>;
const T = (az: string, en: string, tr: string, ar: string, ru: string): L => ({ az, en, tr, ar, ru });

const TITLE = T("Xidmətlər", "Services", "Hizmetler", "الخدمات", "Услуги");
const LEAD = T(
  "Nibras Code-un bütün xidmətləri bir yerdə.",
  "All Nibras Code services in one place.",
  "Nibras Code'un tüm hizmetleri tek yerde.",
  "كل خدمات Nibras Code في مكان واحد.",
  "Все сервисы Nibras Code в одном месте.",
);
const DESC = T(
  "Nibras Code xidmətləri: PDF, QR, şəkil, kod alətləri, tətbiqlər, Studio və Nibras AI — hamısı bir siyahıda.",
  "Nibras Code services: PDF, QR, images, code tools, apps, Studio and Nibras AI — all in one list.",
  "Nibras Code hizmetleri: PDF, QR, görsel, kod araçları, uygulamalar, Studio ve Nibras AI — hepsi tek listede.",
  "خدمات Nibras Code: PDF وQR والصور وأدوات الكود والتطبيقات وStudio وNibras AI — كلها في قائمة واحدة.",
  "Сервисы Nibras Code: PDF, QR, изображения, инструменты кода, приложения, Studio и Nibras AI — всё в одном списке.",
);

type Item = { href: string; label: string; hint?: string; ext?: boolean };
type Cat = { id: string; icon: ReactNode; title: L; items: (lang: Lang) => Item[] };

const IMG_TOOL: Record<string, L> = {
  resize: T("Ölçünü dəyiş", "Resize", "Boyutlandır", "تغيير الحجم", "Изменить размер"),
  convert: T("Format dəyiş", "Convert", "Dönüştür", "تحويل الصيغة", "Конвертировать"),
  edit: T("Redaktə et", "Edit", "Düzenle", "تحرير", "Редактировать"),
};

const CATS: Cat[] = [
  {
    id: "pdf", icon: <FileText size={18} />, title: T("PDF", "PDF", "PDF", "PDF", "PDF"),
    items: (lang) => [
      { href: localeHref(lang, "/pdf"), label: T("PDF ana", "PDF home", "PDF ana sayfa", "الصفحة الرئيسية لـ PDF", "PDF главная")[lang] },
      ...TOOL_IDS.map((id) => ({ href: localeHref(lang, `/pdf/${id}`), label: TOOL_TEXT[lang][id].title, hint: TOOL_TEXT[lang][id].description })),
    ],
  },
  {
    id: "qr", icon: <QrCode size={18} />, title: T("QR", "QR", "QR", "QR", "QR"),
    items: (lang) => [
      { href: localeHref(lang, "/qr"), label: BAR.qr[lang] },
      { href: localeHref(lang, "/wifi"), label: T("Wi-Fi QR", "Wi-Fi QR", "Wi-Fi QR", "QR للواي فاي", "Wi-Fi QR")[lang] },
      { href: localeHref(lang, "/vcard"), label: T("Vizit kartı QR", "vCard QR", "Kartvizit QR", "QR لبطاقة الاتصال", "QR визитка")[lang] },
    ],
  },
  {
    id: "image", icon: <ImageIcon size={18} />, title: T("Şəkil", "Images", "Görsel", "الصور", "Изображения"),
    items: (lang) => [
      { href: localeHref(lang, "/erase"), label: BAR.erase[lang] },
      { href: localeHref(lang, "/image"), label: BAR.image[lang] },
      ...Object.keys(IMG_TOOL).map((k) => ({ href: localeHref(lang, `/image/${k}`), label: IMG_TOOL[k][lang] })),
    ],
  },
  {
    id: "code", icon: <Code2 size={18} />, title: T("Kod alətləri", "Code tools", "Kod araçları", "أدوات الكود", "Инструменты кода"),
    items: (lang) => [
      { href: toolsPath(lang), label: T("Bütün alətlər", "All tools", "Tüm araçlar", "كل الأدوات", "Все инструменты")[lang] },
      ...TOOL_GROUPS.flatMap((g) =>
        g.ids.map((id) => ({ href: toolPath(lang, id), label: TOOLS.find((t) => t.id === id)?.label[lang] ?? id, hint: g.title[lang] })),
      ),
    ],
  },
  {
    id: "apps", icon: <AppWindow size={18} />, title: T("Tətbiqlər", "Apps", "Uygulamalar", "التطبيقات", "Приложения"),
    items: (lang) => [
      { href: localeHref(lang, "/apps"), label: T("Bütün tətbiqlər", "All apps", "Tüm uygulamalar", "كل التطبيقات", "Все приложения")[lang] },
      ...STUDIO_APPS.map((a) => ({ href: localeHref(lang, `/apps/${a.slug}`), label: a.name })),
    ],
  },
  {
    id: "studio", icon: <LayoutGrid size={18} />, title: T("Studio", "Studio", "Studio", "الاستوديو", "Студия"),
    items: (lang) => [
      { href: "https://dev.nibrascode.com", label: BAR.dev[lang], ext: true },
      { href: "https://studio.nibrascode.com", label: BAR.apk[lang], ext: true },
      { href: localeHref(lang, "/studio"), label: BAR.studio[lang] },
      { href: localeHref(lang, "/workspace"), label: "Workspace" },
    ],
  },
  {
    id: "other", icon: <Sparkles size={18} />, title: T("Digər", "More", "Diğer", "أخرى", "Другое"),
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
      <p className="eyebrow"><i /><a href={homePath(lang)}>Nibras Code</a></p>
      <h1>{TITLE[lang]}</h1>
      <p>{LEAD[lang]}</p>
      <div className="svc-list">
        {CATS.map((c) => (
          <details key={c.id} className="svc-cat" name="svc">
            <summary>
              <span className="svc-ico" aria-hidden="true">{c.icon}</span>
              <span className="svc-name">{c.title[lang]}</span>
              <ChevronDown className="svc-chev" size={18} aria-hidden="true" />
            </summary>
            <ul>
              {c.items(lang).map((it) => (
                <li key={it.href}>
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
