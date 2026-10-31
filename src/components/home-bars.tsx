import type { ReactElement } from "react";
import { localeHref } from "@/lib/locale-path";
import { groupLocalePath } from "@/lib/group-path";
import { toolsPath, TOOLS_PAGE } from "@/lib/tools";
import type { Lang } from "@/lib/i18n";

export const BAR_GROUPS: Record<"g1" | "g2" | "g3", Record<Lang, string>> = {
  g1: { az: "Alətlər", en: "Tools", tr: "Araçlar", ru: "Инструменты", ar: "أدوات" },
  g2: { az: "Studio", en: "Studio", tr: "Studio", ru: "Студия", ar: "الاستوديو" },
  g3: { az: "Öyrənmə", en: "Learn", tr: "Öğrenme", ru: "Обучение", ar: "التعلّم" },
};

export const BAR = {
  dev: { az: "Kod yaz", en: "Write code", tr: "Kod yaz", ar: "اكتب كوداً", ru: "Пиши код" },
  apk: { az: "APK hazırla", en: "Make an APK", tr: "APK hazırla", ar: "اصنع APK", ru: "Собрать APK" },
  pdf: { az: "PDF hazırla", en: "Make a PDF", tr: "PDF hazırla", ar: "جهّز PDF", ru: "Сделать PDF" },
  audio: { az: "Səs yaz", en: "Record audio", tr: "Ses kaydet", ar: "سجّل الصوت", ru: "Записать звук" },
  video: { az: "Video kəs", en: "Edit video", tr: "Video düzenle", ar: "حرّر الفيديو", ru: "Видео" },
  qr: { az: "QR hazırla", en: "Make a QR", tr: "QR hazırla", ar: "جهّز QR", ru: "Сделать QR" },
  erase: { az: "Fon sil", en: "Remove background", tr: "Arka plan sil", ar: "احذف الخلفية", ru: "Удалить фон" },
  image: { az: "Şəkil sıx", en: "Compress photo", tr: "Foto sıkıştır", ar: "ضغط الصورة", ru: "Сжать фото" },
  calc: { az: "Hesabla", en: "Calculate", tr: "Hesapla", ar: "احسب", ru: "Посчитай" },
  phone: { az: "Telefon", en: "Phone", tr: "Telefon", ar: "الهاتف", ru: "Телефон" },
  seo: { az: "SEO yoxla", en: "Check SEO", tr: "SEO bak", ar: "فحص SEO", ru: "Проверить SEO" },
  flow: { az: "Plan hazırla", en: "Make a plan", tr: "Plan hazırla", ar: "جهّز خطة", ru: "Собрать план" },
  logic: { az: "Sual qur", en: "Build questions", tr: "Soru kur", ar: "ابنِ أسئلة", ru: "Собрать вопросы" },
  unknown: { az: "Sirr", en: "Secret", tr: "Sır", ar: "سر", ru: "Тайна" },
  studio: { az: "Studio paneli", en: "Studio panel", tr: "Studio paneli", ar: "لوحة Studio", ru: "Панель Studio" },
  learn: { az: "Dərslər", en: "Lessons", tr: "Dersler", ar: "الدروس", ru: "Уроки" },
  doctor: { az: "Sayt yoxla", en: "Site Doctor", tr: "Site kontrolü", ar: "فحص الموقع", ru: "Проверка сайта" },
  errorHelp: { az: "Xəta yardımı", en: "Error Help", tr: "Hata yardımı", ar: "مساعدة الأخطاء", ru: "Помощь с ошибками" },
  logicLab: { az: "Məntiq", en: "Logic Lab", tr: "Mantık", ar: "المنطق", ru: "Логика" },
  mirror: { az: "Sayt güzgüsü", en: "Site Mirror", tr: "Site aynası", ar: "مرآة الموقع", ru: "Зеркало сайта" },
  shortcuts: { az: "Qısayollar", en: "Shortcuts", tr: "Kısayollar", ar: "الاختصارات", ru: "Горячие клавиши" },
  schema: { az: "Sxem", en: "Schema", tr: "Şema", ar: "المخطط", ru: "Схема" },
  filecheck: { az: "Fayl yoxla", en: "File Check", tr: "Dosya kontrolü", ar: "فحص الملف", ru: "Проверка файла" },
};

export const NEW_TAB: Record<Lang, string> = { az: "yeni pəncərədə açılır", en: "opens in a new tab", tr: "yeni sekmede açılır", ar: "يفتح في علامة تبويب جديدة", ru: "откроется в новой вкладке" };

export type BarGroup = "g1" | "g2" | "g3";
export const GROUP_SLUG: Record<BarGroup, string> = { g1: "aletler", g2: "studio", g3: "oyrenme" };
export const GROUP_CLASS: Record<BarGroup, string> = { g1: "tools", g2: "studio", g3: "learn" };
export const MORE: Record<Lang, string> = { az: "Daha çox", en: "More", tr: "Daha fazla", ar: "المزيد", ru: "Ещё" };
export const HOME_LIMIT = 4;

export function groupPath(lang: Lang, group: BarGroup) {
  return groupLocalePath(lang, group);
}

/** All bars per group, most important first (homepage shows the first HOME_LIMIT). */
export function barItems(lang: Lang): Record<BarGroup, ReactElement[]> {
  return {
    g1: [
              <a key="/ai" className="nx-ai-bar" href={localeHref(lang, "/ai")}>
                <img src="/nibras-ai.webp" alt="" width={40} height={36} decoding="async" />
                <span>Nibras AI</span>
              </a>,
              <a key="/pdf" className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/pdf")}>
                <svg className="nx-job nx-job-pdf" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 3.2h6.6L19 8.4V20a1.4 1.4 0 0 1-1.4 1.4H7.4A1.4 1.4 0 0 1 6 20V4.6A1.4 1.4 0 0 1 7.4 3.2H7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M13.4 3.4V8H18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M8.2 12.6h1.8a1.3 1.3 0 0 1 0 2.6H8.2v2.4M12.2 17.6v-5h1.6a1.5 1.5 0 0 1 0 3h-1.6M16.1 12.6H18.4M16.1 15h1.6M16.1 17.6v-5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="nx-qr-text">
                  <b>{BAR.pdf[lang]}</b>
                </span>
              </a>,
              <a key="/qr" className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/qr")}>
                <svg className="nx-job nx-job-qr" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4h6.2v6.2H4zM13.8 4H20v6.2h-6.2zM4 13.8h6.2V20H4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M6.1 6.1h1.9v1.9H6.1zM15.9 6.1h1.9v1.9h-1.9zM6.1 16h1.9v1.9H6.1zM14.2 14.2h1.7v1.7h-1.7zM17.6 14.2H20v1.7h-2.4zM14.2 17.6h1.7V20h-1.7zM17.6 17.6H20V20h-2.4z" fill="currentColor" />
                </svg>
                <span className="nx-qr-text">
                  <b>{BAR.qr[lang]}</b>
                </span>
              </a>,
              <a key="/audio" className="nx-ai-bar nx-qr-bar" href="/audio">
                <svg className="nx-job nx-job-audio" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 14v-2a8 8 0 0 1 16 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M4 14h3v6H5.4A1.4 1.4 0 0 1 4 18.6zM20 14h-3v6h1.6a1.4 1.4 0 0 0 1.4-1.4z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                <span className="nx-qr-text">
                  <b>{BAR.audio[lang]}</b>
                </span>
              </a>,
              <a key="/video" className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/video")}>
                <svg className="nx-job nx-job-video" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="6" width="13" height="12" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M16 10.5l5-3v9l-5-3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                <span className="nx-qr-text">
                  <b>{BAR.video[lang]}</b>
                </span>
              </a>,
              <a key="/erase" className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/erase")}>
                <svg className="nx-job nx-job-erase" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="4" width="12.5" height="11" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="6.6" cy="7.6" r="1.1" fill="currentColor" />
                  <path d="M3.6 13.4 7.4 10l2.6 2 2-1.4 2.6 2.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m14.6 12.6 4.8 4.8a1.5 1.5 0 0 1 0 2.1l-.3.3a1.5 1.5 0 0 1-2.1 0l-4.8-4.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                <span className="nx-qr-text">
                  <b>{BAR.erase[lang]}</b>
                </span>
              </a>,
              <a key="/image" className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/image")}>
                <svg className="nx-job nx-job-image" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="5" width="17" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M7.2 15.4 10.4 12l2.2 1.8 2.8-2.6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.2 8.4h2.4M8.2 8.4v2.4M15.8 15.6h-2.4M15.8 15.6v-2.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="nx-qr-text">
                  <b>{BAR.image[lang]}</b>
                </span>
              </a>,
              <a key="/calc" className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/calc")}>
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="2.5" width="16" height="19" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path fill="currentColor" d="M7 5.5h10v3.2H7zM7.2 11h2.3v2.2H7.2zm3.6 0h2.3v2.2h-2.3zm3.7 0H17v2.2h-2.5zM7.2 14.6h2.3V16.8H7.2zm3.6 0h2.3V16.8h-2.3zm3.7 0H17V16.8h-2.5z" />
                </svg>
                <span className="nx-qr-text">
                  <b>{BAR.calc[lang]}</b>
                </span>
              </a>,
              <a key="/telefon" className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/telefon")}>
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="7" y="2.5" width="10" height="19" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M11 18.5h2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span className="nx-qr-text">
                  <b>{BAR.phone[lang]}</b>
                </span>
              </a>,
              <a key="/flow" className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/flow")} data-testid="home-flow">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 7h6M5 12h10M5 17h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span className="nx-qr-text">
                  <b>{BAR.flow[lang]}</b>
                </span>
              </a>,
              <a key="/logic" className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/logic")} data-testid="home-logic">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 7h8M14 7v4H8M8 11v4h8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="nx-qr-text">
                  <b>{BAR.logic[lang]}</b>
                </span>
              </a>,
  ],
    g2: [
              <a key="https://dev.nibrascode.com"
                className="nx-studio-bar"
                href="https://dev.nibrascode.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BAR.dev[lang]} (${NEW_TAB[lang]})`}
              >
                <svg className="nx-term" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path
                    d="M7 9.2 10.2 12 7 14.8M12.2 15h5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{BAR.dev[lang]} <span className="nx-ext" aria-hidden="true">↗</span></span>
              </a>,
              <a key="https://studio.nibrascode.com"
                className="nx-apk-bar"
                href="https://studio.nibrascode.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${BAR.apk[lang]} (${NEW_TAB[lang]})`}
              >
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="7" y="2.4" width="10" height="19.2" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M10 5.2h4M10.2 18.4h3.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M12 8.2v4.2M10.2 10.4 12 12.4l1.8-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{BAR.apk[lang]} <span className="nx-ext" aria-hidden="true">↗</span></span>
              </a>,
              <a key="/studio" className="nx-apk-bar nx-studio-bar" href={localeHref(lang, "/studio")} data-testid="home-studio">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.5 7 3.5 12l5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{BAR.studio[lang]}</span>
              </a>,
              <a key="/workspace" className="nx-apk-bar" href={localeHref(lang, "/workspace")} data-testid="home-workspace">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3.5" width="7.5" height="7.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <rect x="13.5" y="3.5" width="7.5" height="7.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <rect x="3" y="13" width="7.5" height="7.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M17.25 13.5v6.5M14 16.75h6.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span>Workspace</span>
              </a>,
              <a key="tools" className="nx-apk-bar" href={toolsPath(lang)}>
                <svg className="nx-apk nx-tools" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.7 5.4a3.2 3.2 0 0 0-4.4 4.3L5.2 15a1.7 1.7 0 0 0 2.4 2.4l5.1-5.1a3.2 3.2 0 0 0 4.4-4.3l-2.2 2.2-1.6-1.6 2.2-2.2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                <span>{TOOLS_PAGE.heading[lang]}</span>
              </a>,
  ],
    g3: [
              <a key="/learn" className="nx-apk-bar" href={localeHref(lang, "/learn")} data-testid="home-learn">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                <span>{BAR.learn[lang]}</span>
              </a>,
              <a key="/error-help" className="nx-apk-bar" href={localeHref(lang, "/error-help")} data-testid="home-error-help">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20zM12 10v4M12 17h.01" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>{BAR.errorHelp[lang]}</span>
              </a>,
              <a key="/doctor" className="nx-apk-bar" href={localeHref(lang, "/doctor")} data-testid="home-doctor">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 12h4l2-5 4 10 2-5h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{BAR.doctor[lang]}</span>
              </a>,
              <a key="/seo" className="nx-apk-bar" href={localeHref(lang, "/seo")} data-testid="home-seo">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="10.5" cy="10.5" r="5.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M14.4 14.4 19 19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span>{BAR.seo[lang]}</span>
              </a>,
              <a key="/learn/logic" className="nx-apk-bar" href={localeHref(lang, "/learn/logic")} data-testid="home-learn-logic">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h5a5 5 0 0 1 0 10H4zM14 12h6M2 9.5h2M2 14.5h2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>{BAR.logicLab[lang]}</span>
              </a>,
              <a key="/mirror" className="nx-apk-bar" href={localeHref(lang, "/mirror")} data-testid="home-mirror">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h4M8 12c3 0 3-6 6-6h3M8 12c3 0 3 6 6 6h3M8 12h9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>{BAR.mirror[lang]}</span>
              </a>,
              <a key="/shortcuts" className="nx-apk-bar" href={localeHref(lang, "/shortcuts")} data-testid="home-shortcuts">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18v10H3zM6 10h1M9 10h1M12 10h1M15 10h1M18 10h0M7 14h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>{BAR.shortcuts[lang]}</span>
              </a>,
              <a key="/schema" className="nx-apk-bar" href={localeHref(lang, "/schema")} data-testid="home-schema">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>{BAR.schema[lang]}</span>
              </a>,
              <a key="/filecheck" className="nx-apk-bar" href={localeHref(lang, "/filecheck")} data-testid="home-filecheck">
                <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6zM14 3v4h4M9 13l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>{BAR.filecheck[lang]}</span>
              </a>,
  ],
  };
}

export function BarGroupView({ lang, group, full = false }: { lang: Lang; group: BarGroup; full?: boolean }) {
  const all = barItems(lang)[group];
  const shown = full ? all : all.slice(0, HOME_LIMIT);
  return (
    <div className={`nx-bar-group nx-bar-group--${GROUP_CLASS[group]}`}>
      {full ? null : <h2 className="nx-bar-group-title">{BAR_GROUPS[group][lang]}</h2>}
      <div className="nx-bar-group-grid">{shown}</div>
      {!full && all.length > HOME_LIMIT ? (
        <a className="nx-more-link" href={groupPath(lang, group)}>
          {MORE[lang]}
          <span className="nx-more-link-arrow" aria-hidden="true">→</span>
        </a>
      ) : null}
    </div>
  );
}
