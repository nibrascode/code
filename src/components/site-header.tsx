import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { NavMenu } from "@/components/nav-menu";
import { faqPath } from "@/lib/faq";
import { SEARCH, searchPath } from "@/lib/search-pages";
import { COMPARE, QIBLA, comparePath, qiblaPath } from "@/lib/learn-pages";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";

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
        <a className="footer-faq" href={searchPath(lang, "soz")}>
          {SEARCH.soz.heading[lang]}
        </a>
        <a className="footer-faq" href={searchPath(lang, "xeta")}>
          {SEARCH.xeta.heading[lang]}
        </a>
        <a className="footer-faq" href={qiblaPath(lang)}>
          {QIBLA.heading[lang]}
        </a>
        <a className="footer-faq" href={comparePath(lang)}>
          {COMPARE.heading[lang]}
        </a>
      </nav>
      <div className="footer-end">
        <span className="footer-domain">{t("footer_domain")}</span>
        <span className="footer-year">©2026</span>
      </div>
    </footer>
  );
}
