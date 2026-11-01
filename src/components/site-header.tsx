import { useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { NavMenu } from "@/components/nav-menu";
import { faqPath } from "@/lib/faq";
import { gamePath } from "@/lib/games";
import { useI18n } from "@/lib/i18n-context";
import { homePath, localeHref } from "@/lib/locale-path";
import { groupLocalePath as groupPath } from "@/lib/group-path";
import { SERVICES_LABEL } from "@/components/services-page";
import type { Lang } from "@/lib/i18n";

const NAV: Record<Lang, { tools: string; workspace: string; learn: string; doctor: string }> = {
  az: { tools: "Alətlər", workspace: "İş sahəsi", learn: "Dərslər", doctor: "Sayt yoxla" },
  en: { tools: "Tools", workspace: "Workspace", learn: "Learn", doctor: "Site Doctor" },
  tr: { tools: "Araçlar", workspace: "Çalışma alanı", learn: "Dersler", doctor: "Site kontrolü" },
  ar: { tools: "الأدوات", workspace: "مساحة العمل", learn: "الدروس", doctor: "فحص الموقع" },
  ru: { tools: "Инструменты", workspace: "Рабочая область", learn: "Уроки", doctor: "Проверка сайта" },
};

export function SiteHeader() {
  const { t, lang } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const home = homePath(lang);
  const isHome = pathname === "/" || pathname === home || pathname === `${home}/`;
  const nav = NAV[lang];

  return (
    <header className="site-header is-scrolled">
      <div className="site-header-inner">
        <div className="brand-cluster">
          <a href={home} className="brand-mark" aria-label="Nibras Code">
            <img src="/nibras-icon.png" alt="Nibras Code" className="brand-icon" />
          </a>
          {isHome ? (
            <a href={localeHref(lang, "/about")} className="nav-link about-link">
              {t("nav_about")}
            </a>
          ) : null}
        </div>

        <div className="header-actions">
          <div className="header-links">
            <a href={groupPath(lang, "g1")} className="back-link" data-testid="nav-tools">
              {nav.tools}
            </a>{" "}
            <a href={localeHref(lang, "/apps")} className="back-link">
              {t("b_nav_apps")}
            </a>{" "}
            <a href={localeHref(lang, "/studio")} className="back-link" data-testid="nav-studio">
              Studio
            </a>{" "}
            <a href={localeHref(lang, "/workspace")} className="back-link">
              {nav.workspace}
            </a>{" "}
            <a href={localeHref(lang, "/learn")} className="back-link">
              {nav.learn}
            </a>{" "}
            <a href={localeHref(lang, "/doctor")} className="back-link">
              {nav.doctor}
            </a>{" "}
            <a href={localeHref(lang, "/qr")} className="back-link qr-nav-link">
              {t("nav_qr")}
            </a>{" "}
            <a href={localeHref(lang, "/unutma")} className="back-link">
              {t("remind_btn")}
            </a>{" "}
            <a href={localeHref(lang, "/contact")} className="back-link">
              {t("nx_nav_contact")}
            </a>
            {!isHome ? (
              <a href={home} className="back-link">
                <ArrowLeft className="rtl-flip size-3.5" />
                {t("b_nav_home")}
              </a>
            ) : null}
          </div>{" "}
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { t, lang } = useI18n();
  return (
    <footer className="site-footer">
      <nav className="footer-panels" aria-label="Nibras Code">
        <a className="footer-faq" href={localeHref(lang, "/services")}>
          {SERVICES_LABEL[lang]}
        </a>{" "}
        <NavMenu section="resources" />{" "}
        <NavMenu section="guides" />{" "}
        <NavMenu section="programming" />{" "}
        <a className="footer-faq" href={faqPath(lang)}>
          {t("faq_nav")}
        </a>{" "}
        <a className="footer-faq" href={gamePath(lang)}>
          {lang === "ar" ? "ألعاب" : lang === "ru" ? "Игры" : lang === "en" ? "Games" : "Oyunlar"}
        </a>
      </nav>{" "}
      <div className="footer-end">
        <span className="footer-domain">{t("footer_domain")}</span>{" "}
        <span className="footer-year">©2026</span>
      </div>{" "}
      <SiteLegal />
    </footer>
  );
}

const LEGAL: Record<Lang, { about: string; contact: string; privacy: string; terms: string; trust: string }> = {
  az: { about: "Haqqımızda", contact: "Əlaqə", privacy: "Məxfilik", terms: "İstifadə şərtləri", trust: "Şəffaflıq" },
  en: { about: "About", contact: "Contact", privacy: "Privacy", terms: "Terms", trust: "Transparency" },
  tr: { about: "Hakkımızda", contact: "İletişim", privacy: "Gizlilik", terms: "Kullanım şartları", trust: "Şeffaflık" },
  ar: { about: "من نحن", contact: "تواصل", privacy: "الخصوصية", terms: "شروط الاستخدام", trust: "الشفافية" },
  ru: { about: "О нас", contact: "Контакт", privacy: "Конфиденциальность", terms: "Условия", trust: "Прозрачность" },
};

export function SocialIcons() {
  return (
    <span className="social-icons">
      <a href="mailto:nibrascode@gmail.com" aria-label="Gmail">
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#4caf50" d="M45 16.2 35 23.7V40h7a3 3 0 0 0 3-3V16.2z" />
          <path fill="#1e88e5" d="M3 16.2 13 23.7V40H6a3 3 0 0 1-3-3V16.2z" />
          <path fill="#e53935" d="m35 11.2-11 8.25-11-8.25L12 17l1 6.7 11 8.25 11-8.25 1-6.7z" />
          <path fill="#c62828" d="M3 12.3V16.2l10 7.5V11.2L9.9 8.9A4.3 4.3 0 0 0 7.3 8C4.9 8 3 9.9 3 12.3z" />
          <path fill="#fbc02d" d="M45 12.3V16.2l-10 7.5V11.2l3.1-2.3A4.3 4.3 0 0 1 40.7 8C43.1 8 45 9.9 45 12.3z" />
        </svg>
      </a>{" "}
      <a href="https://www.youtube.com/@NibrasCode" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#FF0033" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z" />
          <path fill="#fff" d="M9.8 15.5v-7l6.2 3.5z" />
        </svg>
      </a>
    </span>
  );
}

export function SiteLegal() {
  const { lang } = useI18n();
  const copy = LEGAL[lang];
  return (
    <div className="site-legal">
      <SocialIcons />{" "}
      <nav aria-label={copy.contact}>
        <a href={localeHref(lang, "/about")}>{copy.about}</a>{" "}
        <a href={localeHref(lang, "/contact")}>{copy.contact}</a>{" "}
        <a href={localeHref(lang, "/privacy")}>{copy.privacy}</a>{" "}
        <a href={localeHref(lang, "/terms")}>{copy.terms}</a>{" "}
        <a href={localeHref(lang, "/trust")}>{copy.trust}</a>
      </nav>
    </div>
  );
}
