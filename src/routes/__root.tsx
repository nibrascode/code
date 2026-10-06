import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { VisitMeter } from "@/components/visit-meter";
import { I18nProvider } from "@/lib/i18n-context";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { AppSuggest } from "@/components/app-suggest";
import appCss from "../styles.css?url";
import { buildHead, langFromLocation, pageUrl, SITE } from "@/lib/seo";
import { pdfPairFromPath } from "@/lib/pdf-pairs";
import { findProgrammingLocale, programmingLocalePath, programmingFromPath } from "@/lib/programming-locales";
import { isCodeSampleSlug } from "@/lib/code-samples";
import { LANGS, type Lang } from "@/lib/i18n";
import { faqFromPath, faqPath, faqTopicFromPath, faqTopicPath } from "@/lib/faq";

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
  const path = pathname.replace(/^\/(en|tr|ar|ru)(?=\/)/, "");
  if (path.startsWith("/unutma") || path.startsWith("/about")) return "mountains";
  if (path.startsWith("/why") || path.startsWith("/privacy") || path.startsWith("/contact") || path.startsWith("/nx-studio") || path.startsWith("/resources") || path.startsWith("/resurslar") || path.startsWith("/ru") || path.startsWith("/guides") || path.includes("/programming") || path.includes("/faq") || path.startsWith("/apps"))
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
  const topic = faqTopicFromPath(path);
  if (topic) {
    return (
      <>
        <link rel="canonical" href={`${SITE}${faqTopicPath(topic.page.lang, topic.item.id)}`} />
        {LANGS.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`${SITE}${faqTopicPath(code, topic.item.id)}`}
          />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href={`${SITE}${faqTopicPath("az", topic.item.id)}`} />
      </>
    );
  }
  if (faq) {
    return (
      <>
        <link rel="canonical" href={`${SITE}${faq.path}`} />
        {LANGS.map((code) => (
          <link key={code} rel="alternate" {...{ hreflang: code }} href={`${SITE}${faqPath(code)}`} />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href={`${SITE}/faq`} />
      </>
    );
  }
  if (programming && (isCodeSampleSlug(programming.slug) || programming.lang !== "az" || findProgrammingLocale("en", programming.slug))) {
    const canonical = programmingLocalePath(programming.lang, programming.slug);
    const alternates = (["az", "en", "tr", "ar", "ru"] as const).filter(
      (code) => code === "az" || isCodeSampleSlug(programming.slug) || findProgrammingLocale(code, programming.slug),
    );
    return (
      <>
        <link rel="canonical" href={`${SITE}${canonical}`} />
        {alternates.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`${SITE}${programmingLocalePath(code, programming.slug)}`}
          />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href={`${SITE}${programmingLocalePath("az", programming.slug)}`} />
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
        <link rel="canonical" href={`${SITE}${canonical}`} />
        {alternates.map(([code, href]) => (
          <link key={code} rel="alternate" {...{ hreflang: code }} href={`${SITE}${href}`} />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href={`${SITE}${pair.az}`} />
      </>
    );
  }
  const lang = langFromLocation(pathname, searchStr);
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