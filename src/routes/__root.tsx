import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { VisitMeter } from "@/components/visit-meter";
import { I18nProvider } from "@/lib/i18n-context";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { SiteBackdrop } from "@/components/site-backdrop";
import { AppSuggest } from "@/components/app-suggest";
import appCss from "../styles.css?url";
import { buildHead, langFromLocation, pageUrl, SITE } from "@/lib/seo";
import { pdfPairFromPath } from "@/lib/pdf-pairs";
import {
  hasProgrammingLocale,
  programmingLocalePath,
  programmingFromPath,
} from "@/lib/programming-path";
import { isCodeSampleSlug } from "@/lib/code-samples";
import { isCourseSlug } from "@/lib/course/meta";
import { LANGS, type Lang } from "@/lib/i18n";
import { faqFromPath, faqPath, faqTopicFromPath, faqTopicPath } from "@/lib/faq";
import {
  searchFromPath,
  searchPath,
  searchTopicFromPath,
  searchTopicPath,
} from "@/lib/search-pages";
import {
  compareFromPath,
  comparePath,
  compareTopicFromPath,
  compareTopicPath,
} from "@/lib/learn-pages";
import { paketFromPath, paketPath } from "@/lib/paket";
import { toolFromPath, toolPath, toolsFromPath, toolsPath } from "@/lib/tools";
import { loadPathGuide } from "@/lib/guides";
import { GuideSection } from "@/components/guide-section";

export const Route = createRootRoute({
  beforeLoad: ({ location }) => ({
    seoLang: langFromLocation(location.pathname, location.searchStr),
  }),
  loader: async ({ location }) => {
    const lang = langFromLocation(location.pathname, location.searchStr);
    return { pathGuide: await loadPathGuide(location.pathname, lang), pathGuideLang: lang };
  },
  head: ({ matches }) => {
    const leaf = matches[matches.length - 1];
    const lang = matches[0]?.context.seoLang ?? "az";
    const seo = buildHead(leaf?.pathname ?? "/", lang);
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#10203a" },
        { name: "msvalidate.01", content: "68E3EDC6C5786EFB6CA2F8908BEBD488" },
        ...seo.meta,
      ],
      links: [
        { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
        { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/manifest.webmanifest" },
        { rel: "stylesheet", href: appCss },
      ],
      scripts: [
        {
          children:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','G-F1DMB5BCCD');addEventListener('load',function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-F1DMB5BCCD';document.head.appendChild(s);});",
        },
        {
          children:
            "addEventListener('vite:preloadError',function(e){try{var k='nx-preload-reload',t=+sessionStorage.getItem(k)||0;if(Date.now()-t<30000)return;sessionStorage.setItem(k,String(Date.now()));e.preventDefault();location.reload();}catch(_){}});if('serviceWorker'in navigator)addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});",
        },
        ...seo.scripts,
      ],
    };
  },
  component: RootDocument,
});

function sceneFor(pathname: string) {
  const path = pathname.replace(/^\/(en|tr|ar|ru)(?=\/)/, "");
  if (path.startsWith("/unutma") || path.startsWith("/about")) return "mountains";
  if (
    path.startsWith("/why") ||
    path.startsWith("/privacy") ||
    path.startsWith("/contact") ||
    path.startsWith("/nx-studio") ||
    path.startsWith("/resources") ||
    path.startsWith("/resurslar") ||
    path.startsWith("/ru") ||
    path.startsWith("/guides") ||
    path.includes("/programming") ||
    path.includes("/faq") ||
    path.startsWith("/apps")
  )
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
        <link
          rel="alternate"
          {...{ hreflang: "x-default" }}
          href={`${SITE}${faqTopicPath("az", topic.item.id)}`}
        />
      </>
    );
  }
  const searched = searchTopicFromPath(path);
  if (searched) {
    return (
      <>
        <link
          rel="canonical"
          href={`${SITE}${searchTopicPath(searched.lang, searched.kind, searched.item.slug)}`}
        />
        {LANGS.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`${SITE}${searchTopicPath(code, searched.kind, searched.item.slug)}`}
          />
        ))}
        <link
          rel="alternate"
          {...{ hreflang: "x-default" }}
          href={`${SITE}${searchTopicPath("az", searched.kind, searched.item.slug)}`}
        />
      </>
    );
  }
  const searchIndex = searchFromPath(path);
  if (searchIndex) {
    return (
      <>
        <link rel="canonical" href={`${SITE}${searchPath(searchIndex.lang, searchIndex.kind)}`} />
        {LANGS.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`${SITE}${searchPath(code, searchIndex.kind)}`}
          />
        ))}
        <link
          rel="alternate"
          {...{ hreflang: "x-default" }}
          href={`${SITE}${searchPath("az", searchIndex.kind)}`}
        />
      </>
    );
  }
  const paket = paketFromPath(path);
  if (paket) {
    return (
      <>
        <link rel="canonical" href={`${SITE}${paketPath(paket)}`} />
        {LANGS.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`${SITE}${paketPath(code)}`}
          />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href={`${SITE}${paketPath("az")}`} />
      </>
    );
  }
  const tool = toolFromPath(path);
  if (tool) {
    return (
      <>
        <link rel="canonical" href={`${SITE}${toolPath(tool.lang, tool.id)}`} />
        {LANGS.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`${SITE}${toolPath(code, tool.id)}`}
          />
        ))}
        <link
          rel="alternate"
          {...{ hreflang: "x-default" }}
          href={`${SITE}${toolPath("az", tool.id)}`}
        />
      </>
    );
  }
  const tools = toolsFromPath(path);
  if (tools) {
    return (
      <>
        <link rel="canonical" href={`${SITE}${toolsPath(tools)}`} />
        {LANGS.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`${SITE}${toolsPath(code)}`}
          />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href={`${SITE}${toolsPath("az")}`} />
      </>
    );
  }
  const compared = compareTopicFromPath(path);
  if (compared) {
    return (
      <>
        <link
          rel="canonical"
          href={`${SITE}${compareTopicPath(compared.lang, compared.item.slug)}`}
        />
        {LANGS.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`${SITE}${compareTopicPath(code, compared.item.slug)}`}
          />
        ))}
        <link
          rel="alternate"
          {...{ hreflang: "x-default" }}
          href={`${SITE}${compareTopicPath("az", compared.item.slug)}`}
        />
      </>
    );
  }
  const compareIndex = compareFromPath(path);
  if (compareIndex) {
    return (
      <>
        <link rel="canonical" href={`${SITE}${comparePath(compareIndex.lang)}`} />
        {LANGS.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`${SITE}${comparePath(code)}`}
          />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href={`${SITE}${comparePath("az")}`} />
      </>
    );
  }
  if (faq) {
    return (
      <>
        <link rel="canonical" href={`${SITE}${faq.path}`} />
        {LANGS.map((code) => (
          <link
            key={code}
            rel="alternate"
            {...{ hreflang: code }}
            href={`${SITE}${faqPath(code)}`}
          />
        ))}
        <link rel="alternate" {...{ hreflang: "x-default" }} href={`${SITE}/faq`} />
      </>
    );
  }
  if (
    programming &&
    (isCodeSampleSlug(programming.slug) ||
      isCourseSlug(programming.slug) ||
      programming.lang !== "az" ||
      hasProgrammingLocale("en", programming.slug))
  ) {
    const canonical = programmingLocalePath(programming.lang, programming.slug);
    const alternates = (["az", "en", "tr", "ar", "ru"] as const).filter(
      (code) =>
        code === "az" ||
        isCodeSampleSlug(programming.slug) ||
        isCourseSlug(programming.slug) ||
        hasProgrammingLocale(code, programming.slug),
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
        <link
          rel="alternate"
          {...{ hreflang: "x-default" }}
          href={`${SITE}${programmingLocalePath("az", programming.slug)}`}
        />
      </>
    );
  }
  if (pair) {
    const pairLang = langFromLocation(pathname, searchStr);
    const canonical = path.startsWith("/ru/")
      ? pair.ru
      : pairLang === "en" || pairLang === "tr" || pairLang === "ar"
        ? `/${pairLang}${pair.az}`
        : pair.az;
    const alternates = [
      ["az", pair.az],
      ["ru", pair.ru],
      ["en", `/en${pair.az}`],
      ["tr", `/tr${pair.az}`],
      ["ar", `/ar${pair.az}`],
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
  const isHome = pathname === "/" || /^\/(en|tr|ar|ru)\/?$/.test(pathname);
  const isStudio = pathname.startsWith("/nx-studio");
  const isPlanner = /(?:^|\/)planner\/?$/.test(pathname);
  const isPlay = /\/oyun\/[^/]+\/?$/.test(pathname);
  const lang = langFromLocation(pathname, searchStr);

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <HeadContent />
        <SeoLinks />
      </head>
      <body
        className={
          isHome ? "is-home" : isStudio ? "is-studio" : isPlanner ? "is-planner" : undefined
        }
        data-scene={isHome || isStudio || isPlanner ? undefined : sceneFor(pathname)}
      >
        <PreviewHostBridge />
        <SiteBackdrop />
        <VisitMeter />
        <AuthProvider>
          <I18nProvider>
            {isHome || isStudio || isPlanner ? null : <SiteHeader />}
            <Outlet />
            <PathGuide />
            {isHome || isStudio || isPlanner || isPlay ? null : <AppSuggest />}
            {isHome || isStudio || isPlanner || isPlay ? null : <SiteFooter />}
          </I18nProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
function PathGuide() {
  const data = Route.useLoaderData();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (!data?.pathGuide) return null;
  return (
    <div className="page-guide-wrap">
      <GuideSection
        guide={data.pathGuide}
        lang={data.pathGuideLang}
        game={/\/oyun(\/|$)/.test(pathname)}
      />
    </div>
  );
}
