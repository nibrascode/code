import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { VisitMeter } from "@/components/visit-meter";
import { I18nProvider } from "@/lib/i18n-context";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { AppSuggest } from "@/components/app-suggest";
import appCss from "../styles.css?url";
import { buildHead, langFromLocation, pageUrl, readLang } from "@/lib/seo";
import { pdfPairFromPath } from "@/lib/pdf-pairs";
import { findProgrammingLocale, programmingLocalePath, programmingFromPath } from "@/lib/programming-locales";
import { LANGS, type Lang } from "@/lib/i18n";
import { faqFromPath, faqPath } from "@/lib/faq";

export const Route = createRootRoute({
  beforeLoad: ({ location }) => ({
    seoLang: langFromLocation(location.pathname, location.searchStr),
  }),
  head: ({ matches }) => {
    const leaf = matches[matches.length - 1];
    const lang = matches[0]?.context.seoLang ?? "az";
    const seo = buildHead(leaf?.pathname ?? "/", lang);
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#10203a" },
        ...seo.meta,
      ],
      links: [
        { rel: "icon", type: "image/png", href: "/nibras-icon.png" },
        { rel: "stylesheet", href: appCss },
        { rel: "manifest", href: "/__grok/manifest.webmanifest" },
        { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous" as const,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Scheherazade+New:wght@500;700&family=Syne:wght@500;600;700;800&display=swap",
        },
      ],
      scripts: seo.scripts,
    };
  },
  component: RootDocument,
});

function sceneFor(pathname: string) {
  if (pathname.startsWith("/unutma") || pathname.startsWith("/about")) return "mountains";
  if (pathname.startsWith("/why") || pathname.startsWith("/privacy") || pathname.startsWith("/contact") || pathname.startsWith("/nx-studio") || pathname.startsWith("/resources") || pathname.startsWith("/resurslar") || pathname.startsWith("/ru") || pathname.startsWith("/guides") || pathname.includes("/programming") || pathname === "/faq" || pathname.endsWith("/faq"))
    return "study";
  return "hero";
}

function SeoLinks() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const searchStr = useRouterState({ select: (state) => state.location.searchStr });
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
  const pair = pdfPairFromPath(path);
  const programming = programmingFromPath(path);
  const faq = faqFromPath(path);
  if (faq) {
    return (
      <>
        <link rel="canonical" href={`https://nibrascode.com${faq.path}`} />
        {LANGS.map((code) => (
          <link key={code} rel="alternate" {...{ hreflang: code }} href={`https://nibrascode.com${faqPath(code)}`} />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href="https://nibrascode.com/faq" />
      </>
    );
  }
  if (programming && (programming.lang !== "az" || findProgrammingLocale("en", programming.slug))) {
    const canonical = programmingLocalePath(programming.lang, programming.slug);
    const alternates = (["az", "en", "tr", "ar", "ru"] as const).filter(
      (code) => code === "az" || findProgrammingLocale(code, programming.slug),
    );
    return (
      <>
        <link rel="canonical" href={`https://nibrascode.com${canonical}`} />
        {alternates.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`https://nibrascode.com${programmingLocalePath(code, programming.slug)}`}
          />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href={`https://nibrascode.com${programmingLocalePath("az", programming.slug)}`} />
      </>
    );
  }
  if (pair) {
    const canonical = path.startsWith("/ru/") ? pair.ru : pair.az;
    const alternates = [
      ["az", pair.az],
      ["ru", pair.ru],
      ["en", `${pair.az}?lang=en`],
      ["tr", `${pair.az}?lang=tr`],
      ["ar", `${pair.az}?lang=ar`],
    ] as const;
    return (
      <>
        <link rel="canonical" href={`https://nibrascode.com${canonical}`} />
        {alternates.map(([code, href]) => (
          <link key={code} rel="alternate" {...{ hreflang: code }} href={`https://nibrascode.com${href}`} />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href={`https://nibrascode.com${pair.az}`} />
      </>
    );
  }
  const lang = readLang(searchStr);
  const langs: Lang[] = [...LANGS];
  return (
    <>
      <link rel="canonical" href={pageUrl(path, lang)} />
      {langs.map((code) => (
        <link key={code} rel="alternate" {...{ hreflang: code }} href={pageUrl(path, code)} />
      ))}
      <link rel="alternate" {...{ hreflang: "x-default" }} href={pageUrl(path, "az")} />
    </>
  );
}

function RootDocument() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const searchStr = useRouterState({ select: (state) => state.location.searchStr });
  const isHome = pathname === "/";
  const isStudio = pathname.startsWith("/nx-studio");
  const lang = langFromLocation(pathname, searchStr);

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <HeadContent />
        <SeoLinks />
      </head>
      <body
        className={isHome ? "is-home" : isStudio ? "is-studio" : undefined}
        data-scene={isHome || isStudio ? undefined : sceneFor(pathname)}
      >
        <PreviewHostBridge />
        <VisitMeter />
        <AuthProvider>
          <I18nProvider>
            {isHome || isStudio ? null : <SiteHeader />}
            <Outlet />
            {isHome || isStudio ? null : <AppSuggest />}
            {isHome || isStudio ? null : <SiteFooter />}
          </I18nProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}