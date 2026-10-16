import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { NavMenu } from "@/components/nav-menu";
import { faqPath } from "@/lib/faq";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import type { Lang } from "@/lib/i18n";

export function SiteHeader() {
  const { t, lang } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <header className="site-header is-scrolled">
      <div className="site-header-inner">
        <div className="brand-cluster">
          <Link to="/" className="brand-mark" aria-label="Nibras Code">
            <img src="/nibras-icon.png" alt="Nibras Code" className="brand-icon" />
          </Link>
          {isHome ? (
            <a href={localeHref(lang, "/about")} className="nav-link about-link">
              {t("nav_about")}
            </a>
          ) : null}
        </div>

        <div className="header-actions">
          <div className="header-links">
            <a href={localeHref(lang, "/apps")} className="back-link">
              {t("b_nav_apps")}
            </a>
            <a href="/qr" className="back-link qr-nav-link">
              {t("nav_qr")}
            </a>
            <Link to="/unutma" className="back-link">
              {t("remind_btn")}
            </Link>
            <a href={localeHref(lang, "/contact")} className="back-link">
              {t("nx_nav_contact")}
            </a>
            {!isHome ? (
              <Link to="/" className="back-link">
                <ArrowLeft className="rtl-flip size-3.5" />
                {t("b_nav_home")}
              </Link>
            ) : null}
          </div>
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
        <NavMenu section="resources" />
        <NavMenu section="guides" />
        <NavMenu section="programming" />
        <a className="footer-faq" href={faqPath(lang)}>
          {t("faq_nav")}
        </a>
      </nav>
      <div className="footer-end">
        <span className="footer-domain">{t("footer_domain")}</span>
        <span className="footer-year">©2026</span>
      </div>
      <SiteLegal />
    </footer>
  );
}

const LEGAL: Record<Lang, { owner: string; about: string; contact: string; privacy: string; terms: string }> = {
  az: { owner: "Qurucu: Mahir Əliyev", about: "Haqqımızda", contact: "Əlaqə", privacy: "Məxfilik", terms: "İstifadə şərtləri" },
  en: { owner: "Founder: Mahir Əliyev", about: "About", contact: "Contact", privacy: "Privacy", terms: "Terms" },
  tr: { owner: "Kurucu: Mahir Əliyev", about: "Hakkımızda", contact: "İletişim", privacy: "Gizlilik", terms: "Kullanım şartları" },
  ar: { owner: "المؤسس: Mahir Əliyev", about: "من نحن", contact: "تواصل", privacy: "الخصوصية", terms: "شروط الاستخدام" },
  ru: { owner: "Основатель: Mahir Əliyev", about: "О нас", contact: "Контакт", privacy: "Конфиденциальность", terms: "Условия" },
};

export function SiteLegal() {
  const { lang } = useI18n();
  const copy = LEGAL[lang];
  return (
    <div className="site-legal">
      <p>{copy.owner}</p>
      <a href="mailto:nibrascode@gmail.com">nibrascode@gmail.com</a>
      <nav aria-label={copy.contact}>
        <a href={localeHref(lang, "/about")}>{copy.about}</a>
        <a href={localeHref(lang, "/contact")}>{copy.contact}</a>
        <a href={localeHref(lang, "/privacy")}>{copy.privacy}</a>
        <a href={localeHref(lang, "/terms")}>{copy.terms}</a>
      </nav>
    </div>
  );
}
