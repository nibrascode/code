import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { NavMenu } from "@/components/nav-menu";
import { faqPath } from "@/lib/faq";
import { useI18n } from "@/lib/i18n-context";

export function SiteHeader() {
  const { t } = useI18n();
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
            <Link to="/about" className="nav-link about-link">
              {t("nav_about")}
            </Link>
          ) : null}
        </div>

        <div className="header-actions">
          <Link to="/apps" className="back-link">
            {t("b_nav_apps")}
          </Link>
          <Link to="/unutma" className="back-link">
            {t("remind_btn")}
          </Link>
          <Link to="/contact" className="back-link">
            {t("nx_nav_contact")}
          </Link>
          {!isHome ? (
            <Link to="/" className="back-link">
              <ArrowLeft className="rtl-flip size-3.5" />
              {t("b_nav_home")}
            </Link>
          ) : null}
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
    </footer>
  );
}
