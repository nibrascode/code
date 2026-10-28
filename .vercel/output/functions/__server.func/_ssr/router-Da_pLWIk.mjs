import { o as __toESM } from "../_runtime.mjs";
import { a as isCourseSlug, i as isCourseHub } from "./meta-Bb3__USb.mjs";
import { n as localizeSection, t as delocalizeSection } from "./section-slugs-C1KQkil1.mjs";
import { n as groupKeyFromSlug, r as groupLocalePath } from "./group-path-BsJC4AiN.mjs";
import { a as stripLocalePrefix, i as localeHref, n as isSharedLocalePage, t as homePath } from "./locale-path-fYvKyZ8f.mjs";
import { c as faqTopicPath, i as faqPath, o as faqTopicFromPath, r as faqFromPath } from "./faq-CS6D-sSC.mjs";
import { c as toolFromPath, d as toolsPath, l as toolPath, n as TOOLS_PAGE, r as TOOL_GROUPS, t as TOOLS, u as toolsFromPath } from "./tools-Du7YMG1G.mjs";
import { S as translations, _ as hrefForLang, a as PDF_LOCALE_PAIRS, b as programmingLocalePath, f as findResourceArticle, g as hasProgrammingLocale, h as findRuResource, i as OLD_PDF_SLUGS, m as findResurs, n as LANG_META, t as LANGS$1, u as STORAGE_KEY, v as pdfPairFromPath, y as programmingFromPath } from "./ru-resources-BOxHqTS-.mjs";
import { n as TOOL_TEXT, r as VIDEO_KIT, t as TOOL_IDS } from "./video-meta-BEES0Ogr.mjs";
import { a as searchPath, i as searchFromPath, o as searchTopicFromPath, r as loadApkBody, s as searchTopicPath, t as SEARCH } from "./search-pages-DC4DCEux.mjs";
import { a as compareTopicFromPath, i as comparePath, o as compareTopicPath, r as compareFromPath, t as COMPARE } from "./learn-pages-BHxENIQ7.mjs";
import { n as paketFromPath, r as paketPath, t as PAKET } from "./paket-Wy15rr00.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as useRouter, X as notFound, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as redirect, v as createFileRoute, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as langFromLocation, a as GAME_COPY, c as KIT, f as buildHead, g as isToolId, h as isCodeSampleSlug, i as GAMES, l as SEARCH_FAQ, m as gamePath, n as CODE_SAMPLE_HUB, o as GAME_VERSION, p as gameBySlug, r as FAQ_TITLE, s as I18nProvider, u as SITE$2, v as pageUrl, x as useI18n$1, y as readLang } from "./i18n-context-BAcGBjAs.mjs";
import { b as statusText } from "./studio-Dz15PtOL.mjs";
import { a as strFromU8, i as inflateSync, n as deflateSync, o as strToU8 } from "../_libs/@cantoo/pdf-lib+[...].mjs";
import { a as loadHomeApps, o as loadStudioBundle, r as playListed, t as effectiveApp } from "./app-store-D7Bnka1x.mjs";
import { n as appStatus, o as statusStoreLinks, r as appStatusLabel, t as STUDIO_APPS } from "./apps-6qMCvgID.mjs";
import { $ as Scale, A as Stethoscope, Ar as ArrowUpRight, En as FileText, F as Smartphone, Fr as AppWindow, J as Scissors, Jn as Crop, L as Shield, Mr as ArrowLeft, Mt as Minimize2, N as Sparkles, Nt as Mic, Or as Ban, Ot as Music, Q as Scaling, Qt as Link2, R as ShieldCheck, St as Paperclip, Vt as Mail, Zn as Copy, an as Image, ar as Clapperboard, cn as Headphones, cr as ChevronRight, d as User, en as LayoutGrid, er as Compass, f as UserRound, ft as QrCode, hn as Gift, in as Info, j as Square, jn as FileLock, kr as BadgeCheck, lr as ChevronDown, n as X, or as CircleHelp, r as Wrench, rr as CodeXml, s as VolumeX, st as RefreshCw, t as Zap, tr as Combine, u as Users, v as TriangleAlert, xr as Bot, y as Trash2, zn as ExternalLink } from "../_libs/lucide-react.mjs";
import { a as VisitMeter, o as loadAppPage, r as Route$311 } from "../_slug-DxKDjMpQ.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as NextLinks } from "./next-links-DdKXidFf.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guide-section-CNXliD95.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILES = /* #__PURE__ */ Object.assign({
	"../data/guides/articles/a-android-android-nedir.json": () => import("./a-android-android-nedir-Ww3fiyut.mjs"),
	"../data/guides/articles/a-android-apk-nedir.json": () => import("./a-android-apk-nedir-DIrehOsN.mjs"),
	"../data/guides/articles/a-android-telefonda-tetbiq-qurasdirmaq.json": () => import("./a-android-telefonda-tetbiq-qurasdirmaq-y8LqMLBg.mjs"),
	"../data/guides/articles/a-android-tetbiq-icazeleri.json": () => import("./a-android-tetbiq-icazeleri-B3ey6szT.mjs"),
	"../data/guides/articles/a-ereb-dili-ereb-elifbasi.json": () => import("./a-ereb-dili-ereb-elifbasi-DobHQHIJ.mjs"),
	"../data/guides/articles/a-ereb-dili-ereb-herflerini-oyrenmek.json": () => import("./a-ereb-dili-ereb-herflerini-oyrenmek-2bcmuc05.mjs"),
	"../data/guides/articles/a-ereb-dili-ereb-soz-ehtiyati.json": () => import("./a-ereb-dili-ereb-soz-ehtiyati-D_vURjG6.mjs"),
	"../data/guides/articles/a-ereb-dili-herekeler-nedir.json": () => import("./a-ereb-dili-herekeler-nedir-C_R0Z2p6.mjs"),
	"../data/guides/articles/a-fayl-aletleri-fayl-adini-saxlamaq.json": () => import("./a-fayl-aletleri-fayl-adini-saxlamaq-D8FcnFaf.mjs"),
	"../data/guides/articles/a-fayl-aletleri-fayl-formati-nedir.json": () => import("./a-fayl-aletleri-fayl-formati-nedir-DKsFaAv6.mjs"),
	"../data/guides/articles/a-fayl-aletleri-fayl-novleri.json": () => import("./a-fayl-aletleri-fayl-novleri-DEvW3IQ_.mjs"),
	"../data/guides/articles/a-fayl-aletleri-fayli-kiciltmek.json": () => import("./a-fayl-aletleri-fayli-kiciltmek-Tb3D_apT.mjs"),
	"../data/guides/articles/a-senedler-sened-nedir.json": () => import("./a-senedler-sened-nedir-DBI2fFGv.mjs"),
	"../data/guides/articles/a-senedler-senedi-imzalamaq.json": () => import("./a-senedler-senedi-imzalamaq-CUOviO3k.mjs"),
	"../data/guides/articles/a-senedler-senedin-nusxesi.json": () => import("./a-senedler-senedin-nusxesi-iKbGT81n.mjs"),
	"../data/guides/articles/a-senedler-skan-ve-metn.json": () => import("./a-senedler-skan-ve-metn-5sR0TLap.mjs"),
	"../data/guides/articles/a-tehsil-gundelik-tekrar.json": () => import("./a-tehsil-gundelik-tekrar-wn5Fk8a_.mjs"),
	"../data/guides/articles/a-tehsil-kartlarla-tekrar.json": () => import("./a-tehsil-kartlarla-tekrar-Qs7HkFr9.mjs"),
	"../data/guides/articles/a-tehsil-oyreneni-yoxlamaq.json": () => import("./a-tehsil-oyreneni-yoxlamaq-DEwXFZlO.mjs"),
	"../data/guides/articles/a-tehsil-qisa-mesq.json": () => import("./a-tehsil-qisa-mesq-C_GQYU1_.mjs"),
	"../data/guides/articles/r-nibras-pdf.json": () => import("./r-nibras-pdf-C5cSj2kL.mjs"),
	"../data/guides/articles/r-pdf-birlesdirmek.json": () => import("./r-pdf-birlesdirmek-Caht3Akf.mjs"),
	"../data/guides/articles/r-pdf-bolmek.json": () => import("./r-pdf-bolmek-BkqVpUtv.mjs"),
	"../data/guides/articles/r-pdf-den-metn-cixarmaq.json": () => import("./r-pdf-den-metn-cixarmaq-DaBueKp-.mjs"),
	"../data/guides/articles/r-pdf-den-sehife-cixarmaq.json": () => import("./r-pdf-den-sehife-cixarmaq-C_En9W-s.mjs"),
	"../data/guides/articles/r-pdf-den-sekil-cixarmaq.json": () => import("./r-pdf-den-sekil-cixarmaq-DxCMCqOR.mjs"),
	"../data/guides/articles/r-pdf-e-sifre-qoymaq.json": () => import("./r-pdf-e-sifre-qoymaq-mn0oBZD7.mjs"),
	"../data/guides/articles/r-pdf-i-worde-cevirmek.json": () => import("./r-pdf-i-worde-cevirmek-D_VUSnk9.mjs"),
	"../data/guides/articles/r-pdf-imzalamaq.json": () => import("./r-pdf-imzalamaq--em_94Vx.mjs"),
	"../data/guides/articles/r-pdf-scanner.json": () => import("./r-pdf-scanner-BOHDQWez.mjs"),
	"../data/guides/articles/r-pdf-sixisdirmak.json": () => import("./r-pdf-sixisdirmak-BNexNAtv.mjs"),
	"../data/guides/articles/r-pdf.json": () => import("./r-pdf-DJGRXye7.mjs"),
	"../data/guides/articles/r-sekilleri-pdf-e-cevirmek.json": () => import("./r-sekilleri-pdf-e-cevirmek-DlEXez_O.mjs"),
	"../data/guides/articles/r-telefonda-pdf-redakte-etmek.json": () => import("./r-telefonda-pdf-redakte-etmek-PYAyOu0n.mjs"),
	"../data/guides/articles/r-telefonda-pdf-yaratmaq.json": () => import("./r-telefonda-pdf-yaratmaq-CcJAErlr.mjs"),
	"../data/guides/articles/r-wordu-pdf-e-cevirmek.json": () => import("./r-wordu-pdf-e-cevirmek-DEfiEdxT.mjs"),
	"../data/guides/games/2048.json": () => import("./2048-CsxKCBiE.mjs"),
	"../data/guides/games/ilan.json": () => import("./ilan-d_xwfmWN.mjs"),
	"../data/guides/games/kosmos.json": () => import("./kosmos-Bs37YmPx.mjs"),
	"../data/guides/games/meyve.json": () => import("./meyve-BqEUAxj-.mjs"),
	"../data/guides/games/neon.json": () => import("./neon-I96GoxEJ.mjs"),
	"../data/guides/games/qala.json": () => import("./qala-BdjZkWKa.mjs"),
	"../data/guides/games/soz.json": () => import("./soz-HPaJJPp_.mjs"),
	"../data/guides/games/tetris.json": () => import("./tetris-DYPc1YES.mjs"),
	"../data/guides/games/x-o.json": () => import("./x-o-Bcpn4GaD.mjs"),
	"../data/guides/pages/apps-majmu-al-fatawa.json": () => import("./apps-majmu-al-fatawa-8b9utVJo.mjs"),
	"../data/guides/pages/apps-nibras-arabic.json": () => import("./apps-nibras-arabic-Bk4S_mz-.mjs"),
	"../data/guides/pages/apps-nibras-docs.json": () => import("./apps-nibras-docs-BGBBhJMg.mjs"),
	"../data/guides/pages/apps-nibras-office.json": () => import("./apps-nibras-office-BsSEFKTe.mjs"),
	"../data/guides/pages/apps-nibras-plans.json": () => import("./apps-nibras-plans-DKuayh2t.mjs"),
	"../data/guides/pages/apps.json": () => import("./apps-B0UgKLSa.mjs"),
	"../data/guides/pages/faq-elaqe.json": () => import("./faq-elaqe-lY4dcfvX.mjs"),
	"../data/guides/pages/faq-mexfilik-siyaseti.json": () => import("./faq-mexfilik-siyaseti-BXCas2lo.mjs"),
	"../data/guides/pages/faq-nibras-ai.json": () => import("./faq-nibras-ai-BDyf3BgN.mjs"),
	"../data/guides/pages/faq-nibras-apk.json": () => import("./faq-nibras-apk-DTx9HTNj.mjs"),
	"../data/guides/pages/faq-nibras-code-layihe.json": () => import("./faq-nibras-code-layihe-DC3ZuNAS.mjs"),
	"../data/guides/pages/faq-nibras-code-tetbiqleri.json": () => import("./faq-nibras-code-tetbiqleri-Dx9Ro9uk.mjs"),
	"../data/guides/pages/faq-nibras-code.json": () => import("./faq-nibras-code-Bae4XaVG.mjs"),
	"../data/guides/pages/faq-nibras-dev.json": () => import("./faq-nibras-dev-CpVOMuLe.mjs"),
	"../data/guides/pages/faq-nibras-docs.json": () => import("./faq-nibras-docs-CMKw9gnY.mjs"),
	"../data/guides/pages/faq-nibras-plans.json": () => import("./faq-nibras-plans-BxN0hVmh.mjs"),
	"../data/guides/pages/faq-nibras-qr.json": () => import("./faq-nibras-qr-CogLvKAG.mjs"),
	"../data/guides/pages/faq-pulsuz-ve-reklam.json": () => import("./faq-pulsuz-ve-reklam-CL5LupzV.mjs"),
	"../data/guides/pages/faq-resurslar-ve-proqramlasdirma.json": () => import("./faq-resurslar-ve-proqramlasdirma-ssPojbyw.mjs"),
	"../data/guides/pages/faq-sayt-dilleri.json": () => import("./faq-sayt-dilleri-gNOc1454.mjs"),
	"../data/guides/pages/faq-tetbiq-yuklemek.json": () => import("./faq-tetbiq-yuklemek-BEnH8Bds.mjs"),
	"../data/guides/pages/faq-xidmetler.json": () => import("./faq-xidmetler-CPC9AMap.mjs"),
	"../data/guides/pages/faq-yeni-tetbiqler.json": () => import("./faq-yeni-tetbiqler-DXRwYXA1.mjs"),
	"../data/guides/pages/movzu-ai-ile-kod-oyrenmek.json": () => import("./movzu-ai-ile-kod-oyrenmek-CmEHbm2O.mjs"),
	"../data/guides/pages/movzu-chatgpt-nedir.json": () => import("./movzu-chatgpt-nedir-BfQwyVGC.mjs"),
	"../data/guides/pages/movzu-claude-artifact.json": () => import("./movzu-claude-artifact-DWaLFWu2.mjs"),
	"../data/guides/pages/movzu-claude-nedir.json": () => import("./movzu-claude-nedir-D58FzzyV.mjs"),
	"../data/guides/pages/movzu-ereb-dili-baslangic.json": () => import("./movzu-ereb-dili-baslangic-CU8X3zF0.mjs"),
	"../data/guides/pages/movzu-gemini-nedir.json": () => import("./movzu-gemini-nedir-CKSvRq-2.mjs"),
	"../data/guides/pages/movzu-gemini-qrafik.json": () => import("./movzu-gemini-qrafik-CzeoIwlo.mjs"),
	"../data/guides/pages/movzu-gpt-6.json": () => import("./movzu-gpt-6-DVlO9D0M.mjs"),
	"../data/guides/pages/movzu-prompt-nedir.json": () => import("./movzu-prompt-nedir-D6SFiOwi.mjs"),
	"../data/guides/pages/movzu-prompt-numuneleri.json": () => import("./movzu-prompt-numuneleri-CNjrnWc0.mjs"),
	"../data/guides/pages/movzu-pulsuz-chatgpt-alternativleri.json": () => import("./movzu-pulsuz-chatgpt-alternativleri-BtFxSd7k.mjs"),
	"../data/guides/pages/movzu.json": () => import("./movzu-CxQwxmdl.mjs"),
	"../data/guides/pages/muqayise-java-yoxsa-kotlin.json": () => import("./muqayise-java-yoxsa-kotlin-Ca81nfMX.mjs"),
	"../data/guides/pages/muqayise-python-2026.json": () => import("./muqayise-python-2026-CrOpk9hf.mjs"),
	"../data/guides/pages/muqayise-python-yoxsa-javascript.json": () => import("./muqayise-python-yoxsa-javascript-Bv0FbUmw.mjs"),
	"../data/guides/pages/muqayise.json": () => import("./muqayise-DdattJwF.mjs"),
	"../data/guides/pages/nece-excel-pdf-cevirmek.json": () => import("./nece-excel-pdf-cevirmek-BPP7Tbp6.mjs"),
	"../data/guides/pages/nece-hesab-faktura-pdf.json": () => import("./nece-hesab-faktura-pdf-CqF4xO1-.mjs"),
	"../data/guides/pages/nece-ilk-html.json": () => import("./nece-ilk-html-Bss81xWS.mjs"),
	"../data/guides/pages/nece-pdf-birlesdirmek.json": () => import("./nece-pdf-birlesdirmek-kJJU46YF.mjs"),
	"../data/guides/pages/nece-pdf-bolmek.json": () => import("./nece-pdf-bolmek-BLC1q5mR.mjs"),
	"../data/guides/pages/nece-pdf-boz-etmek.json": () => import("./nece-pdf-boz-etmek-DFQseeW0.mjs"),
	"../data/guides/pages/nece-pdf-den-sekil.json": () => import("./nece-pdf-den-sekil-Dba0w_5a.mjs"),
	"../data/guides/pages/nece-pdf-hecmini-kicilmek.json": () => import("./nece-pdf-hecmini-kicilmek-CnfhUAxG.mjs"),
	"../data/guides/pages/nece-pdf-kesmek.json": () => import("./nece-pdf-kesmek-XO7vJidr.mjs"),
	"../data/guides/pages/nece-pdf-metn-qaraltmaq.json": () => import("./nece-pdf-metn-qaraltmaq-BenqiF0I.mjs"),
	"../data/guides/pages/nece-pdf-parol-acmaq.json": () => import("./nece-pdf-parol-acmaq-peEgBLJ1.mjs"),
	"../data/guides/pages/nece-pdf-parol-qoymaq.json": () => import("./nece-pdf-parol-qoymaq-DvAeNpOa.mjs"),
	"../data/guides/pages/nece-pdf-sehife-cevirmek.json": () => import("./nece-pdf-sehife-cevirmek-DQkXE2JG.mjs"),
	"../data/guides/pages/nece-pdf-sehife-cixarmaq.json": () => import("./nece-pdf-sehife-cixarmaq-B5LcomRM.mjs"),
	"../data/guides/pages/nece-pdf-sehife-nomresi.json": () => import("./nece-pdf-sehife-nomresi-OvQCR6ee.mjs"),
	"../data/guides/pages/nece-pdf-su-nisani.json": () => import("./nece-pdf-su-nisani-XhGcxJV7.mjs"),
	"../data/guides/pages/nece-pdf-word-cevirmek.json": () => import("./nece-pdf-word-cevirmek-DbkusiO9.mjs"),
	"../data/guides/pages/nece-play-console.json": () => import("./nece-play-console-BWhZuR0T.mjs"),
	"../data/guides/pages/nece-python-ilk-proqram.json": () => import("./nece-python-ilk-proqram-DOEYSf4E.mjs"),
	"../data/guides/pages/nece-qr-kod-hazirlamaq.json": () => import("./nece-qr-kod-hazirlamaq--GncFwE5.mjs"),
	"../data/guides/pages/nece-sekil-fonu-silmek.json": () => import("./nece-sekil-fonu-silmek-CpVmDJu7.mjs"),
	"../data/guides/pages/nece-sekil-formati-cevirmek.json": () => import("./nece-sekil-formati-cevirmek-u7IEulcU.mjs"),
	"../data/guides/pages/nece-sekil-olcusu-deyismek.json": () => import("./nece-sekil-olcusu-deyismek-DQTI6CYx.mjs"),
	"../data/guides/pages/nece-sekli-kiciltmek.json": () => import("./nece-sekli-kiciltmek-n85dpwg-.mjs"),
	"../data/guides/pages/nece-sekli-pdf-cevirmek.json": () => import("./nece-sekli-pdf-cevirmek--0McW2d3.mjs"),
	"../data/guides/pages/nece-skandan-metn-cixarmaq.json": () => import("./nece-skandan-metn-cixarmaq-CWReyO4I.mjs"),
	"../data/guides/pages/nece-telefonda-pdf-imzalamaq.json": () => import("./nece-telefonda-pdf-imzalamaq-DNfyPpAU.mjs"),
	"../data/guides/pages/nece-telefonda-python.json": () => import("./nece-telefonda-python-DU6EzKM9.mjs"),
	"../data/guides/pages/nece-vizit-qr-kod.json": () => import("./nece-vizit-qr-kod-D4XSGj5L.mjs"),
	"../data/guides/pages/nece-wifi-qr-kod.json": () => import("./nece-wifi-qr-kod-CE9s3d4U.mjs"),
	"../data/guides/pages/nece-word-pdf-cevirmek.json": () => import("./nece-word-pdf-cevirmek-Dtns-Kfm.mjs"),
	"../data/guides/pages/nece-zip-sixmaq-acmaq.json": () => import("./nece-zip-sixmaq-acmaq-DJJrEhEo.mjs"),
	"../data/guides/pages/nece.json": () => import("./nece-DDaVcHDm.mjs"),
	"../data/guides/pages/oyun.json": () => import("./oyun-BSXa5402.mjs"),
	"../data/guides/pages/programming-csharp-qurasdir.json": () => import("./programming-csharp-qurasdir-Bc9d-z7d.mjs"),
	"../data/guides/pages/programming-css-kurs.json": () => import("./programming-css-kurs-dSLspjqq.mjs"),
	"../data/guides/pages/programming-css-sual-hover.json": () => import("./programming-css-sual-hover-DR_-4ZhI.mjs"),
	"../data/guides/pages/programming-css-sual-nedir.json": () => import("./programming-css-sual-nedir-Bok3bKU7.mjs"),
	"../data/guides/pages/programming-css-sual-qutu.json": () => import("./programming-css-sual-qutu-B2pmtDbi.mjs"),
	"../data/guides/pages/programming-html-dars-basic-syntax.json": () => import("./programming-html-dars-basic-syntax-QdSNqavm.mjs"),
	"../data/guides/pages/programming-html-dars-debugging.json": () => import("./programming-html-dars-debugging-ek0-u5u9.mjs"),
	"../data/guides/pages/programming-html-dars-document-structure.json": () => import("./programming-html-dars-document-structure-COTJ3AJl.mjs"),
	"../data/guides/pages/programming-html-dars-emphasis.json": () => import("./programming-html-dars-emphasis-BOTiCjrt.mjs"),
	"../data/guides/pages/programming-html-dars-forms.json": () => import("./programming-html-dars-forms-WdbSW6gW.mjs"),
	"../data/guides/pages/programming-html-dars-headings-paragraphs.json": () => import("./programming-html-dars-headings-paragraphs-le6e7dxw.mjs"),
	"../data/guides/pages/programming-html-dars-images.json": () => import("./programming-html-dars-images-B9SV6i_0.mjs"),
	"../data/guides/pages/programming-html-dars-links.json": () => import("./programming-html-dars-links-D1UsFeNR.mjs"),
	"../data/guides/pages/programming-html-dars-lists.json": () => import("./programming-html-dars-lists-DjS9z-PW.mjs"),
	"../data/guides/pages/programming-html-dars-metadata.json": () => import("./programming-html-dars-metadata-Di_hWq6u.mjs"),
	"../data/guides/pages/programming-html-dars-tables.json": () => import("./programming-html-dars-tables-DHUK8iF-.mjs"),
	"../data/guides/pages/programming-html-sual-baslangic.json": () => import("./programming-html-sual-baslangic-B5vMDE3F.mjs"),
	"../data/guides/pages/programming-html-sual-form.json": () => import("./programming-html-sual-form-7zaNSQ1g.mjs"),
	"../data/guides/pages/programming-html-sual-link-sekil.json": () => import("./programming-html-sual-link-sekil-C_dF_4mf.mjs"),
	"../data/guides/pages/programming-html-sual-semantik.json": () => import("./programming-html-sual-semantik-BBkVeuVT.mjs"),
	"../data/guides/pages/programming-html-sual-teqler.json": () => import("./programming-html-sual-teqler-DRl2yTpP.mjs"),
	"../data/guides/pages/programming-html-sual-xeta.json": () => import("./programming-html-sual-xeta-C9SXWM52.mjs"),
	"../data/guides/pages/programming-java-qurasdir.json": () => import("./programming-java-qurasdir-EYU2XGAT.mjs"),
	"../data/guides/pages/programming-javascript-sual-baslangic.json": () => import("./programming-javascript-sual-baslangic-CaGmCrlw.mjs"),
	"../data/guides/pages/programming-javascript-sual-duyme.json": () => import("./programming-javascript-sual-duyme-D76skBoC.mjs"),
	"../data/guides/pages/programming-javascript-sual-env.json": () => import("./programming-javascript-sual-env-UHGr6pg0.mjs"),
	"../data/guides/pages/programming-javascript-sual-idare.json": () => import("./programming-javascript-sual-idare-BewGE_JO.mjs"),
	"../data/guides/pages/programming-javascript-sual-massiv.json": () => import("./programming-javascript-sual-massiv-7yquYxJS.mjs"),
	"../data/guides/pages/programming-javascript-sual-obyekt.json": () => import("./programming-javascript-sual-obyekt-DxuJQqXH.mjs"),
	"../data/guides/pages/programming-javascript-sual-termux.json": () => import("./programming-javascript-sual-termux-CYgpPFUU.mjs"),
	"../data/guides/pages/programming-javascript-sual-undefined.json": () => import("./programming-javascript-sual-undefined-CqfirSKh.mjs"),
	"../data/guides/pages/programming-javascript-sual-xulase.json": () => import("./programming-javascript-sual-xulase-DeHUewuN.mjs"),
	"../data/guides/pages/programming-node-qurasdir.json": () => import("./programming-node-qurasdir-BmIMySaR.mjs"),
	"../data/guides/pages/programming-numune-kod.json": () => import("./programming-numune-kod-BU82hwOF.mjs"),
	"../data/guides/pages/programming-oyun-kodu.json": () => import("./programming-oyun-kodu-BU6OPEFg.mjs"),
	"../data/guides/pages/programming-python-dars-data-structures.json": () => import("./programming-python-dars-data-structures-Bz4xR9Jp.mjs"),
	"../data/guides/pages/programming-python-dars-exceptions.json": () => import("./programming-python-dars-exceptions-BzXRBexo.mjs"),
	"../data/guides/pages/programming-python-dars-input-output.json": () => import("./programming-python-dars-input-output-Dcq4rgE9.mjs"),
	"../data/guides/pages/programming-python-dars-modules.json": () => import("./programming-python-dars-modules-BuMmSNHJ.mjs"),
	"../data/guides/pages/programming-python-dars-stdlib.json": () => import("./programming-python-dars-stdlib-CceLYEg7.mjs"),
	"../data/guides/pages/programming-python-qurasdir.json": () => import("./programming-python-qurasdir-Bq1uElOa.mjs"),
	"../data/guides/pages/programming-python-sual-baslangic.json": () => import("./programming-python-sual-baslangic-4eINbbP3.mjs"),
	"../data/guides/pages/programming-python-sual-deyisen.json": () => import("./programming-python-sual-deyisen-CD-RUShP.mjs"),
	"../data/guides/pages/programming-python-sual-funksiya.json": () => import("./programming-python-sual-funksiya-C3kg_IpN.mjs"),
	"../data/guides/pages/programming-python-sual-hardan.json": () => import("./programming-python-sual-hardan-Crb_DSK2.mjs"),
	"../data/guides/pages/programming-python-sual-sert-dovr.json": () => import("./programming-python-sual-sert-dovr-BhLeEqCD.mjs"),
	"../data/guides/pages/programming-python-sual-xeta.json": () => import("./programming-python-sual-xeta-Bz3QxaKn.mjs"),
	"../data/guides/pages/programming-sql-kurs.json": () => import("./programming-sql-kurs-D4QIM7LP.mjs"),
	"../data/guides/pages/programming-sql-qurasdir.json": () => import("./programming-sql-qurasdir-DD_56BhI.mjs"),
	"../data/guides/pages/programming-sql-sual-say.json": () => import("./programming-sql-sual-say-Y5Y--cke.mjs"),
	"../data/guides/pages/programming-sql-sual-select.json": () => import("./programming-sql-sual-select-BrieoPB7.mjs"),
	"../data/guides/pages/programming-sql-sual-sirala.json": () => import("./programming-sql-sual-sirala-BbgWOgBp.mjs"),
	"../data/guides/pages/programming-tetbiq-kodu.json": () => import("./programming-tetbiq-kodu-BNcGWnfx.mjs"),
	"../data/guides/pages/services.json": () => import("./services-CRrC828s.mjs"),
	"../data/guides/pages/soz-alqoritm-nedir.json": () => import("./soz-alqoritm-nedir-dvS1Hj5-.mjs"),
	"../data/guides/pages/soz-api-nedir.json": () => import("./soz-api-nedir-BWhxpP38.mjs"),
	"../data/guides/pages/soz-css-nedir.json": () => import("./soz-css-nedir-YN8dPmkQ.mjs"),
	"../data/guides/pages/soz-deyisen-nedir.json": () => import("./soz-deyisen-nedir-bBd3U1UU.mjs"),
	"../data/guides/pages/soz-dongu-nedir.json": () => import("./soz-dongu-nedir-BQaZGzN7.mjs"),
	"../data/guides/pages/soz-funksiya-nedir.json": () => import("./soz-funksiya-nedir-CmLg5bbf.mjs"),
	"../data/guides/pages/soz-html-nedir.json": () => import("./soz-html-nedir-DK9wS0NS.mjs"),
	"../data/guides/pages/soz-javascript-nedir.json": () => import("./soz-javascript-nedir-Dk7DGAQg.mjs"),
	"../data/guides/pages/soz-json-nedir.json": () => import("./soz-json-nedir-CZNLI85Z.mjs"),
	"../data/guides/pages/soz-python-nedir.json": () => import("./soz-python-nedir-C8UsESRU.mjs"),
	"../data/guides/pages/soz.json": () => import("./soz-wyKGBs8Y.mjs"),
	"../data/guides/pages/video.json": () => import("./video-D36DFMwn.mjs"),
	"../data/guides/pdf/batch.json": () => import("./batch-CNDv3bMC.mjs"),
	"../data/guides/pdf/compress.json": () => import("./compress-uwBK240y.mjs"),
	"../data/guides/pdf/extract-pages.json": () => import("./extract-pages-D7Kf6He6.mjs"),
	"../data/guides/pdf/image-pdf.json": () => import("./image-pdf-PwHQVqsj.mjs"),
	"../data/guides/pdf/merge.json": () => import("./merge-CdL09AS9.mjs"),
	"../data/guides/pdf/ocr.json": () => import("./ocr-BSnOgrG8.mjs"),
	"../data/guides/pdf/pages.json": () => import("./pages-CBpLFUZV.mjs"),
	"../data/guides/pdf/pdf-image.json": () => import("./pdf-image-Dnoe3Sn-.mjs"),
	"../data/guides/pdf/pdf-ocr.json": () => import("./pdf-ocr-BXJXnUUx.mjs"),
	"../data/guides/pdf/pdf-word.json": () => import("./pdf-word-X3UGInpX.mjs"),
	"../data/guides/pdf/preview.json": () => import("./preview-PVBht6Gq.mjs"),
	"../data/guides/pdf/protect.json": () => import("./protect-GQd7Gx9w.mjs"),
	"../data/guides/pdf/rotate.json": () => import("./rotate-B4aLTg1U.mjs"),
	"../data/guides/pdf/scan.json": () => import("./scan-B-MgT0PK.mjs"),
	"../data/guides/pdf/sign.json": () => import("./sign-m1Mrp_2o.mjs"),
	"../data/guides/pdf/split.json": () => import("./split-B4SR6Zrw.mjs"),
	"../data/guides/pdf/watermark.json": () => import("./watermark-Ww_65Z8k.mjs"),
	"../data/guides/pdf/word-pdf.json": () => import("./word-pdf-C56o7WPt.mjs"),
	"../data/guides/pdf/write-pdf.json": () => import("./write-pdf-BJryEjVk.mjs"),
	"../data/guides/tools/area.json": () => import("./area-Bu-K-I94.mjs"),
	"../data/guides/tools/base.json": () => import("./base-Chn2xNIf.mjs"),
	"../data/guides/tools/base64.json": () => import("./base64-B9eJ5lzU.mjs"),
	"../data/guides/tools/binary.json": () => import("./binary-B3WLsvJC.mjs"),
	"../data/guides/tools/blank.json": () => import("./blank-BcmCnuPF.mjs"),
	"../data/guides/tools/case.json": () => import("./case-CWr1HkTC.mjs"),
	"../data/guides/tools/chars.json": () => import("./chars-B45kigip.mjs"),
	"../data/guides/tools/chmod.json": () => import("./chmod-D3a8CHNl.mjs"),
	"../data/guides/tools/color.json": () => import("./color-DokWs_kk.mjs"),
	"../data/guides/tools/contrast.json": () => import("./contrast-BlufC26C.mjs"),
	"../data/guides/tools/count.json": () => import("./count-CXdeySk1.mjs"),
	"../data/guides/tools/cron.json": () => import("./cron-lAPRBIWv.mjs"),
	"../data/guides/tools/css-min.json": () => import("./css-min-yGNtcyyP.mjs"),
	"../data/guides/tools/css.json": () => import("./css-DBCrPFei.mjs"),
	"../data/guides/tools/cssvar.json": () => import("./cssvar-mkJoqCba.mjs"),
	"../data/guides/tools/csv.json": () => import("./csv-BKZi4ykz.mjs"),
	"../data/guides/tools/days.json": () => import("./days-BERuiV5T.mjs"),
	"../data/guides/tools/diff.json": () => import("./diff-DMixa81v.mjs"),
	"../data/guides/tools/discount.json": () => import("./discount-D3Z0RS0Z.mjs"),
	"../data/guides/tools/domain.json": () => import("./domain-0bkYcOwi.mjs"),
	"../data/guides/tools/email.json": () => import("./email-BUpaWo-y.mjs"),
	"../data/guides/tools/escape.json": () => import("./escape-Cvpy3jIF.mjs"),
	"../data/guides/tools/freq.json": () => import("./freq-wsemAwb3.mjs"),
	"../data/guides/tools/gradient.json": () => import("./gradient-DYM5HE-U.mjs"),
	"../data/guides/tools/hash.json": () => import("./hash-pqRHfuCQ.mjs"),
	"../data/guides/tools/hex.json": () => import("./hex-D81u5ZL2.mjs"),
	"../data/guides/tools/htaccess.json": () => import("./htaccess-CiuPV9B7.mjs"),
	"../data/guides/tools/html-min.json": () => import("./html-min-Ci-Lq0uh.mjs"),
	"../data/guides/tools/html.json": () => import("./html-Dc2pizqY.mjs"),
	"../data/guides/tools/htmlfmt.json": () => import("./htmlfmt-ooVdy57s.mjs"),
	"../data/guides/tools/htmlmd.json": () => import("./htmlmd-DjNmWLg9.mjs"),
	"../data/guides/tools/ip.json": () => import("./ip-BN-VVPUA.mjs"),
	"../data/guides/tools/join.json": () => import("./join-CxeBpRVJ.mjs"),
	"../data/guides/tools/js-min.json": () => import("./js-min-BPsMk8_1.mjs"),
	"../data/guides/tools/js.json": () => import("./js-OZDKmHhL.mjs"),
	"../data/guides/tools/json-min.json": () => import("./json-min-Dfyg4vOT.mjs"),
	"../data/guides/tools/json.json": () => import("./json-Cza_17FG.mjs"),
	"../data/guides/tools/jsoncsv.json": () => import("./jsoncsv-CpcPFcvg.mjs"),
	"../data/guides/tools/jsonyaml.json": () => import("./jsonyaml-C6o1ZbCJ.mjs"),
	"../data/guides/tools/jwt.json": () => import("./jwt-Bm1dOx2y.mjs"),
	"../data/guides/tools/keys.json": () => import("./keys-D3dAjIpc.mjs"),
	"../data/guides/tools/leap.json": () => import("./leap-Z52udDIJ.mjs"),
	"../data/guides/tools/length.json": () => import("./length-C7V646Ro.mjs"),
	"../data/guides/tools/lines.json": () => import("./lines-C4iJDaJm.mjs"),
	"../data/guides/tools/link.json": () => import("./link-5VYExdqD.mjs"),
	"../data/guides/tools/lorem.json": () => import("./lorem-ttEJOB5u.mjs"),
	"../data/guides/tools/markdown.json": () => import("./markdown-DJhBHGP1.mjs"),
	"../data/guides/tools/md5.json": () => import("./md5-CylI9fSm.mjs"),
	"../data/guides/tools/meta.json": () => import("./meta-CJufkcZz.mjs"),
	"../data/guides/tools/mime.json": () => import("./mime-tudbJPU4.mjs"),
	"../data/guides/tools/morse.json": () => import("./morse-Bq8CQv3L.mjs"),
	"../data/guides/tools/name.json": () => import("./name-CT7ghMPY.mjs"),
	"../data/guides/tools/number.json": () => import("./number-BqqlkVeY.mjs"),
	"../data/guides/tools/palette.json": () => import("./palette-Cata3Iz1.mjs"),
	"../data/guides/tools/password.json": () => import("./password-B6XxKeWf.mjs"),
	"../data/guides/tools/percent.json": () => import("./percent-C3wRUkoa.mjs"),
	"../data/guides/tools/php.json": () => import("./php-dMKveVTQ.mjs"),
	"../data/guides/tools/prefix.json": () => import("./prefix-CiYzIAE4.mjs"),
	"../data/guides/tools/pxrem.json": () => import("./pxrem-C6TYB1aU.mjs"),
	"../data/guides/tools/python.json": () => import("./python-4tEIS6pg.mjs"),
	"../data/guides/tools/qr.json": () => import("./qr-Ds_LiaHt.mjs"),
	"../data/guides/tools/query.json": () => import("./query-C0nDVTIy.mjs"),
	"../data/guides/tools/radius.json": () => import("./radius-1K2kXqRz.mjs"),
	"../data/guides/tools/read.json": () => import("./read-DhNSfgNe.mjs"),
	"../data/guides/tools/regex.json": () => import("./regex-Bi6AIYPP.mjs"),
	"../data/guides/tools/replace.json": () => import("./replace-BjaU4gdX.mjs"),
	"../data/guides/tools/robots.json": () => import("./robots-2prRyZ1q.mjs"),
	"../data/guides/tools/roman.json": () => import("./roman-KTh6mnLZ.mjs"),
	"../data/guides/tools/sha256.json": () => import("./sha256-CBA1X-0X.mjs"),
	"../data/guides/tools/shadow.json": () => import("./shadow-dz5SKesX.mjs"),
	"../data/guides/tools/sitemap.json": () => import("./sitemap-77jylnt1.mjs"),
	"../data/guides/tools/slug.json": () => import("./slug-DPHtUz9G.mjs"),
	"../data/guides/tools/sort.json": () => import("./sort-CT_GEnXr.mjs"),
	"../data/guides/tools/speed.json": () => import("./speed-DYbkqMob.mjs"),
	"../data/guides/tools/split.json": () => import("./split-DPUrabPa.mjs"),
	"../data/guides/tools/sql-min.json": () => import("./sql-min-CnTUpsRP.mjs"),
	"../data/guides/tools/sql.json": () => import("./sql-yaG5u4K8.mjs"),
	"../data/guides/tools/strength.json": () => import("./strength-BdtKHivF.mjs"),
	"../data/guides/tools/strip.json": () => import("./strip-BTiPbsJ6.mjs"),
	"../data/guides/tools/table.json": () => import("./table-BAylIJE6.mjs"),
	"../data/guides/tools/temp.json": () => import("./temp-BVC0-H4i.mjs"),
	"../data/guides/tools/text.json": () => import("./text-CTQk3JbI.mjs"),
	"../data/guides/tools/tip.json": () => import("./tip-D9AZ06sr.mjs"),
	"../data/guides/tools/trim.json": () => import("./trim-BHVgG6Ms.mjs"),
	"../data/guides/tools/unique.json": () => import("./unique-C49KBNhz.mjs"),
	"../data/guides/tools/unix.json": () => import("./unix-D99AgZZn.mjs"),
	"../data/guides/tools/url.json": () => import("./url-BnmmAdBL.mjs"),
	"../data/guides/tools/utm.json": () => import("./utm-Ybm056q_.mjs"),
	"../data/guides/tools/uuid.json": () => import("./uuid-fnqrwsZ7.mjs"),
	"../data/guides/tools/vat.json": () => import("./vat-CnKBnrMC.mjs"),
	"../data/guides/tools/weekday.json": () => import("./weekday-BLzSqiBf.mjs"),
	"../data/guides/tools/weight.json": () => import("./weight-CH90ZeJD.mjs"),
	"../data/guides/tools/words.json": () => import("./words-BXWb_d9J.mjs"),
	"../data/guides/tools/xml-min.json": () => import("./xml-min-DjDNaCFM.mjs"),
	"../data/guides/tools/xml.json": () => import("./xml-BFzpqLOb.mjs"),
	"../data/guides/tools/yaml.json": () => import("./yaml-Bq5DmdbO.mjs"),
	"../data/guides/tools/yamljson.json": () => import("./yamljson-nWzv_ur-.mjs")
});
/** Loads one page's long-form help text (lazy chunk, so other pages stay light). */
async function loadGuide(kind, id, lang) {
	const load = FILES[`../data/guides/${kind}/${id}.json`];
	if (!load) return null;
	const data = (await load()).default;
	return data[lang] ?? data.en ?? null;
}
var GUIDE_HEAD = {
	az: {
		about: "Ətraflı məlumat",
		steps: "Necə istifadə olunur",
		stepsGame: "Necə oynanılır",
		uses: "Harada işə yarayır",
		usesGame: "Məsləhətlər",
		faq: "Tez-tez verilən suallar"
	},
	en: {
		about: "About this tool",
		steps: "How to use it",
		stepsGame: "How to play",
		uses: "Common uses",
		usesGame: "Tips",
		faq: "Frequently asked questions"
	},
	tr: {
		about: "Ayrıntılı bilgi",
		steps: "Nasıl kullanılır",
		stepsGame: "Nasıl oynanır",
		uses: "Nerede işe yarar",
		usesGame: "İpuçları",
		faq: "Sık sorulan sorular"
	},
	ar: {
		about: "معلومات مفصلة",
		steps: "طريقة الاستخدام",
		stepsGame: "طريقة اللعب",
		uses: "استخدامات شائعة",
		usesGame: "نصائح",
		faq: "أسئلة شائعة"
	},
	ru: {
		about: "Подробнее",
		steps: "Как пользоваться",
		stepsGame: "Как играть",
		uses: "Где пригодится",
		usesGame: "Советы",
		faq: "Частые вопросы"
	}
};
/** All five languages of one guide, for routes whose language comes from ?lang=. */
async function loadGuideAll(kind, id) {
	const load = FILES[`../data/guides/${kind}/${id}.json`];
	return load ? (await load()).default : null;
}
/** Guide keyed by page path (locale prefix stripped), e.g. /en/faq/nibras-pdf → pages/faq-nibras-pdf. */
async function loadPathGuide(pathname, lang) {
	const id = pathname.replace(/^\/(en|ru|ar|tr)(?=\/|$)/, "").replace(/\/$/, "").replace(/^\//, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
	if (!id) return null;
	const load = FILES[`../data/guides/pages/${id}.json`];
	if (!load) return null;
	const data = (await load()).default;
	return data[lang] ?? data.en ?? null;
}
function GuideSection({ guide, lang, game = false }) {
	if (!guide) return null;
	const head = GUIDE_HEAD[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-guide",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: head.about }),
			guide.about.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p)),
			guide.steps?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: game ? head.stepsGame : head.steps }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: guide.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s)) })] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: game ? head.usesGame : head.uses }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: guide.uses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: head.faq }),
			guide.faq.map(([q, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				open: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: q }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: a })]
			}, q)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: guide.faq.map(([q, a]) => ({
						"@type": "Question",
						name: q,
						acceptedAnswer: {
							"@type": "Answer",
							text: a
						}
					}))
				}).replace(/</g, "\\u003c") }
			})
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/rolldown-runtime-D7D4PA-g.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/recent-files-DkYIcC9Z.js
var DB = "nibras-recent";
var STORE = "files";
var MAX_ITEMS = 20;
var MAX_BYTES = 157286400;
var MAX_ONE = 62914560;
var EVT = "nibras-recent-change";
function open() {
	return new Promise((res, rej) => {
		if (typeof indexedDB === "undefined") return rej(/* @__PURE__ */ new Error("no-idb"));
		const r = indexedDB.open(DB, 1);
		r.onupgradeneeded = () => r.result.createObjectStore(STORE, { keyPath: "id" });
		r.onsuccess = () => res(r.result);
		r.onerror = () => rej(r.error);
	});
}
async function tx(mode, fn) {
	const db = await open();
	return new Promise((res, rej) => {
		const t = db.transaction(STORE, mode);
		const q = fn(t.objectStore(STORE));
		t.oncomplete = () => {
			res(q.result);
			db.close();
		};
		t.onerror = () => {
			rej(t.error);
			db.close();
		};
	});
}
var all = () => tx("readonly", (s) => s.getAll()).catch(() => []);
async function listRecent() {
	return (await all()).sort((a, b) => b.at - a.at).map(({ blob: _b, ...m }) => m);
}
async function getRecent(id) {
	const r = await tx("readonly", (s) => s.get(id)).catch(() => void 0);
	return r ? new File([r.blob], r.name, {
		type: r.type,
		lastModified: r.at
	}) : null;
}
async function addRecent(blob, name, from) {
	if (!blob.size || blob.size > MAX_ONE) return;
	try {
		const id = (await all()).find((r) => r.name === name && r.size === blob.size)?.id ?? `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
		await tx("readwrite", (s) => s.put({
			id,
			name,
			type: blob.type || "application/octet-stream",
			size: blob.size,
			at: Date.now(),
			from,
			blob
		}));
		const left = (await all()).sort((a, b) => b.at - a.at);
		let bytes = 0;
		const drop = [];
		left.forEach((r, i) => {
			bytes += r.size;
			if (i >= MAX_ITEMS || bytes > MAX_BYTES) drop.push(r.id);
		});
		for (const d of drop) await tx("readwrite", (s) => s.delete(d));
		window.dispatchEvent(new Event(EVT));
	} catch {}
}
async function removeRecent(id) {
	await tx("readwrite", (s) => id ? s.delete(id) : s.clear()).catch(() => void 0);
	window.dispatchEvent(new Event(EVT));
}
var RECENT_EVENT = EVT;
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/handoff-CVW374ZI.js
/** In-tab file hand-off between tools (Tool chaining): no re-download / re-upload. */
var pending = null;
function handOff(files) {
	pending = {
		files,
		at: Date.now()
	};
}
/** Take files handed to the next tool (valid for 10 min, once). */
function takeHandOff() {
	const p = pending;
	pending = null;
	return p && Date.now() - p.at < 6e5 ? p.files : [];
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/phone-link-6FfjkXE-.js
var b64u = (u) => {
	let s = "";
	for (let i = 0; i < u.length; i += 32768) s += String.fromCharCode(...u.subarray(i, i + 32768));
	return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
var unb64u = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
function packLink(origin, qrPath, p) {
	const name = strToU8(p.n.slice(0, 80));
	const type = strToU8(p.t.slice(0, 80));
	const head = new Uint8Array([name.length, type.length]);
	const body = new Uint8Array(head.length + name.length + type.length + p.d.length);
	body.set(head, 0);
	body.set(name, 2);
	body.set(type, 2 + name.length);
	body.set(p.d, 2 + name.length + type.length);
	return `${origin}${qrPath}#get=${b64u(deflateSync(body, { level: 9 }))}`;
}
function unpackHash(hash) {
	const m = /^#get=([A-Za-z0-9_-]+)$/.exec(hash);
	if (!m) return null;
	try {
		const u = inflateSync(unb64u(m[1]));
		const nl = u[0], tl = u[1];
		return {
			n: strFromU8(u.subarray(2, 2 + nl)),
			t: strFromU8(u.subarray(2 + nl, 2 + nl + tl)),
			d: u.subarray(2 + nl + tl)
		};
	} catch {
		return null;
	}
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/i18n-eadUge6P.js
var QR_DICT = {
	en: {
		brand: "Nibras QR",
		tagline: "Print your QR once. Change the link any time.",
		nav: {
			create: "Create",
			scan: "Scanner",
			templates: "Templates",
			dashboard: "My QRs",
			pricing: "Pricing",
			signIn: "Sign in"
		},
		hero: {
			kicker: "QR Toolkit · Dynamic QR · Analytics",
			title: "QR for business — print it, change it later.",
			body: "Restaurant menus, Wi-Fi, WhatsApp and payments. The QR stays the same while you manage its link and design from your dashboard. Scan counts, country and device stats included.",
			cta: "Create QR",
			secondary: "Open scanner",
			point1: "11 QR types",
			point2: "Dynamic links",
			point3: "Live analytics"
		},
		features: {
			title: "Not just a generator — a business tool",
			create: "Create",
			createBody: "URL, text, phone, email, WhatsApp, Wi-Fi, vCard, location, SMS, event and app link.",
			dynamic: "Dynamic QR",
			dynamicBody: "The QR stays the same. Change your menu, campaign or WhatsApp number from the dashboard.",
			design: "Design",
			designBody: "Colours, gradient, dot shape, eye style, logo, frame and transparent background.",
			stats: "Analytics",
			statsBody: "Scan count, daily/monthly chart, device and country. See which QR works.",
			scan: "Scanner",
			scanBody: "Camera or gallery. Copy the result, open the link, keep it in history.",
			export: "Export",
			exportBody: "PNG, JPG, SVG and PDF. High quality and no branding on Premium."
		},
		types: {
			url: "URL",
			text: "Text",
			phone: "Phone",
			email: "Email",
			whatsapp: "WhatsApp",
			wifi: "Wi-Fi",
			vcard: "Contact",
			location: "Location",
			sms: "SMS",
			event: "Event",
			app: "App link"
		},
		fields: {
			url: "Link",
			text: "Text",
			phone: "Phone",
			email: "Email",
			subject: "Subject",
			body: "Message",
			ssid: "Network name (SSID)",
			password: "Password",
			encryption: "Encryption",
			hidden: "Hidden network",
			firstName: "First name",
			lastName: "Last name",
			org: "Company",
			title: "Job title",
			street: "Street",
			city: "City",
			country: "Country",
			lat: "Latitude",
			lng: "Longitude",
			query: "Address or place",
			start: "Start",
			end: "End",
			location: "Location",
			description: "Description",
			name: "QR name"
		},
		create: {
			title: "Create QR",
			static: "Static",
			dynamic: "Dynamic",
			dynamicHint: "The QR stays the same, the link can change later. Requires Premium.",
			save: "Save",
			update: "Update",
			saved: "Saved",
			needAuth: "Sign in for dynamic QR",
			needPremium: "Dynamic QR is a Premium feature",
			empty: "Fill in the content — the QR updates live"
		},
		design: {
			title: "Design",
			colors: "Colours",
			foreground: "Foreground",
			background: "Background",
			transparent: "Transparent background",
			gradient: "Gradient",
			dots: "Dots",
			eyes: "Eyes",
			logo: "Logo",
			frame: "Frame",
			scanText: "Text",
			bgImage: "Background image",
			premium: "Premium",
			square: "Square",
			rounded: "Rounded",
			dotsStyle: "Dots",
			classy: "Classy",
			extra: "Soft",
			leaf: "Leaf",
			none: "None",
			quiet: "Quiet",
			banner: "Banner",
			scanme: "Scan me",
			ticket: "Ticket"
		},
		export: {
			png: "PNG",
			jpg: "JPG",
			svg: "SVG",
			pdf: "PDF",
			copy: "Copy",
			copied: "Copied",
			share: "Share"
		},
		scan: {
			title: "Scanner",
			camera: "Camera",
			gallery: "Gallery",
			start: "Open camera",
			stop: "Stop",
			result: "Result",
			open: "Open",
			copy: "Copy",
			empty: "Point at a QR or upload an image",
			history: "History",
			clear: "Clear",
			denied: "Camera permission denied. Scan from the gallery instead."
		},
		dash: {
			title: "My QRs",
			empty: "No QRs yet. Create one and manage it here.",
			scans: "scans",
			active: "Active",
			paused: "Paused",
			edit: "Edit",
			download: "Download",
			duplicate: "Duplicate",
			pause: "Pause",
			resume: "Activate",
			delete: "Delete",
			folder: "Folder",
			all: "All",
			newFolder: "New folder",
			stats: "Analytics",
			created: "Created",
			type: "Type",
			dynamic: "Dynamic",
			static: "Static"
		},
		stats: {
			total: "Total scans",
			week: "7 days",
			month: "30 days",
			devices: "Devices",
			countries: "Countries",
			series: "Daily scans",
			empty: "No scans yet. Print the QR and track it.",
			dest: "Current link",
			saveDest: "Update link"
		},
		pricing: {
			title: "A price that works for everyone. About a cup of tea a month.",
			free: "Free",
			premium: "Premium",
			business: "Business",
			month: "/ mo",
			year: "/ yr",
			once: "one-time",
			periodMonthly: "Monthly",
			periodYearly: "Yearly",
			periodLifetime: "Lifetime",
			save: "Save {n}%",
			perMonth: "just {price} a month",
			lifetimeNote: "Pay once, use forever",
			ctaFree: "Start free",
			ctaPremium: "Go Premium",
			ctaBusiness: "Go Business",
			current: "Current plan",
			note: "Payments are coming in the next stage. For now, activate a plan and try every tool.",
			f1: "Unlimited static QR",
			f2: "Scanner",
			f3: "PNG export",
			f4: "Basic colours",
			f5: "3 dynamic QRs",
			p1: "Dynamic QR",
			p2: "Logo and custom design",
			p3: "SVG / PDF / high quality",
			p4: "Analytics",
			p5: "Folders",
			p6: "Unbranded export",
			p7: "Business templates",
			b1: "500 dynamic QRs",
			b2: "API key",
			b3: "Ready for teams",
			b4: "Advanced analytics",
			b5: "White-label roadmap"
		},
		templates: {
			title: "Ready templates",
			body: "Don't design from scratch. Pick a template, fill in your details, print.",
			use: "Use",
			wifi: "Wi-Fi",
			restaurant: "Restaurant",
			business: "Business card",
			social: "Social media",
			contact: "Contact",
			event: "Event",
			payment: "Payment",
			whatsapp: "WhatsApp"
		},
		login: {
			title: "Sign in to Nibras QR",
			body: "Keep your QRs, dynamic links and analytics in one dashboard.",
			google: "Continue with Google",
			error: "Sign-in failed. Please try again."
		},
		public: {
			missing: "This QR was not found",
			inactive: "This QR is temporarily paused",
			open: "Open link",
			wifi: "Wi-Fi network",
			connect: "Copy password",
			contact: "Save contact"
		},
		common: {
			loading: "Loading",
			cancel: "Cancel",
			confirm: "Confirm",
			search: "Search",
			upgrade: "Go Premium",
			locked: "Premium"
		},
		legal: {
			privacy: "Privacy policy",
			version: "Version"
		}
	},
	az: {
		brand: "Nibras QR",
		tagline: "QR-ni bir dəfə çap et. Linki istədiyin vaxt dəyiş.",
		nav: {
			create: "Düzəlt",
			scan: "Skaner",
			templates: "Şablonlar",
			dashboard: "QR-lərim",
			pricing: "Tariflər",
			signIn: "Daxil ol"
		},
		hero: {
			kicker: "QR Toolkit · Dynamic QR · Statistika",
			title: "Biznes üçün QR — çap et, sonra dəyiş.",
			body: "Restoran menyusu, Wi-Fi, WhatsApp və ödəniş. Eyni QR qalır, panelindən linki və dizaynı idarə edirsən. Skan sayı, ölkə və cihaz statistikası daxildir.",
			cta: "QR düzəlt",
			secondary: "Skaneri aç",
			point1: "11 növ QR",
			point2: "Dinamik link",
			point3: "Canlı statistika"
		},
		features: {
			title: "Sadə generator yox, biznes aləti",
			create: "Düzəlt",
			createBody: "URL, mətn, telefon, email, WhatsApp, Wi-Fi, vCard, məkan, SMS, tədbir və app linki.",
			dynamic: "Dinamik QR",
			dynamicBody: "QR eyni qalır. Menyunu, kampaniyanı və ya WhatsApp nömrəsini paneldən dəyişirsən.",
			design: "Dizayn",
			designBody: "Rəng, gradient, nöqtə forması, göz stili, loqo, çərçivə və şəffaf fon.",
			stats: "Statistika",
			statsBody: "Skan sayı, gün/ay qrafiki, cihaz və ölkə. Hansı QR işləyir, görünür.",
			scan: "Skaner",
			scanBody: "Kamera və ya qalereya. Nəticəni kopyala, linki aç, tarixçədə saxla.",
			export: "Export",
			exportBody: "PNG, JPG, SVG və PDF. Premium-da yüksək keyfiyyət, brendinqsiz."
		},
		types: {
			url: "URL",
			text: "Mətn",
			phone: "Telefon",
			email: "Email",
			whatsapp: "WhatsApp",
			wifi: "Wi-Fi",
			vcard: "Kontakt",
			location: "Məkan",
			sms: "SMS",
			event: "Tədbir",
			app: "App linki"
		},
		fields: {
			url: "Keçid",
			text: "Mətn",
			phone: "Telefon",
			email: "Email",
			subject: "Mövzu",
			body: "Məzmun",
			ssid: "Şəbəkə adı (SSID)",
			password: "Şifrə",
			encryption: "Şifrələmə",
			hidden: "Gizli şəbəkə",
			firstName: "Ad",
			lastName: "Soyad",
			org: "Şirkət",
			title: "Vəzifə",
			street: "Küçə",
			city: "Şəhər",
			country: "Ölkə",
			lat: "Enlik",
			lng: "Uzunluq",
			query: "Ünvan və ya yer",
			start: "Başlanğıc",
			end: "Bitmə",
			location: "Yer",
			description: "Təsvir",
			name: "QR adı"
		},
		create: {
			title: "QR düzəlt",
			static: "Statik",
			dynamic: "Dinamik",
			dynamicHint: "QR eyni qalır, link sonradan dəyişir. Premium tələb olunur.",
			save: "Yadda saxla",
			update: "Yenilə",
			saved: "Saxlanıldı",
			needAuth: "Dinamik QR üçün daxil ol",
			needPremium: "Dinamik QR Premium-dadır",
			empty: "Məzmunu doldur — QR canlı yenilənir"
		},
		design: {
			title: "Dizayn",
			colors: "Rənglər",
			foreground: "Ön plan",
			background: "Fon",
			transparent: "Şəffaf fon",
			gradient: "Gradient",
			dots: "Nöqtələr",
			eyes: "Gözlər",
			logo: "Loqo",
			frame: "Çərçivə",
			scanText: "Yazı",
			bgImage: "Fon şəkli",
			premium: "Premium",
			square: "Kvadrat",
			rounded: "Dairəvi",
			dotsStyle: "Nöqtə",
			classy: "Classy",
			extra: "Yumşaq",
			leaf: "Yarpaq",
			none: "Yoxdur",
			quiet: "Sakit",
			banner: "Banner",
			scanme: "Scan me",
			ticket: "Bilet"
		},
		export: {
			png: "PNG",
			jpg: "JPG",
			svg: "SVG",
			pdf: "PDF",
			copy: "Kopyala",
			copied: "Kopyalandı",
			share: "Paylaş"
		},
		scan: {
			title: "Skaner",
			camera: "Kamera",
			gallery: "Qalereya",
			start: "Kameranı aç",
			stop: "Dayandır",
			result: "Nəticə",
			open: "Aç",
			copy: "Kopyala",
			empty: "QR-ə tuşla və ya şəkil yüklə",
			history: "Tarixçə",
			clear: "Təmizlə",
			denied: "Kamera icazəsi verilmədi. Qalereyadan oxut."
		},
		dash: {
			title: "QR-lərim",
			empty: "Hələ QR yoxdur. Birini düzəlt, burada idarə et.",
			scans: "skan",
			active: "Aktiv",
			paused: "Deaktiv",
			edit: "Redaktə",
			download: "Yüklə",
			duplicate: "Dublikat",
			pause: "Dayandır",
			resume: "Aktiv et",
			delete: "Sil",
			folder: "Qovluq",
			all: "Hamısı",
			newFolder: "Yeni qovluq",
			stats: "Statistika",
			created: "Düzəldilib",
			type: "Növ",
			dynamic: "Dinamik",
			static: "Statik"
		},
		stats: {
			total: "Cəmi skan",
			week: "7 gün",
			month: "30 gün",
			devices: "Cihazlar",
			countries: "Ölkələr",
			series: "Günlük skan",
			empty: "Hələ skan yoxdur. QR-i çap et və izlə.",
			dest: "Cari keçid",
			saveDest: "Keçidi yenilə"
		},
		pricing: {
			title: "Hər kəsə sərf edən tarif. Ayda bir çay pulu.",
			free: "Free",
			premium: "Premium",
			business: "Business",
			month: "/ ay",
			year: "/ il",
			once: "bir dəfəlik",
			periodMonthly: "Aylıq",
			periodYearly: "İllik",
			periodLifetime: "Ömürlük",
			save: "{n}% qənaət",
			perMonth: "ayda cəmi {price}",
			lifetimeNote: "Bir dəfə ödə, həmişəlik istifadə et",
			ctaFree: "Pulsuz başla",
			ctaPremium: "Premium-a keç",
			ctaBusiness: "Business-ə keç",
			current: "Cari plan",
			note: "Ödəniş inteqrasiyası növbəti mərhələdədir. İndi planı aktivləşdirib bütün alətləri sına.",
			f1: "Limitsiz statik QR",
			f2: "Skaner",
			f3: "PNG export",
			f4: "Əsas rənglər",
			f5: "3 dinamik QR",
			p1: "Dinamik QR",
			p2: "Loqo və xüsusi dizayn",
			p3: "SVG / PDF / yüksək keyfiyyət",
			p4: "Statistika",
			p5: "Qovluqlar",
			p6: "Brendinqsiz export",
			p7: "Biznes şablonları",
			b1: "500 dinamik QR",
			b2: "API açarı",
			b3: "Komanda üçün hazır",
			b4: "Geniş statistika",
			b5: "White-label yol xəritəsi"
		},
		templates: {
			title: "Hazır şablonlar",
			body: "Sıfırdan dizayn etmə. Şablonu seç, məlumatı yaz, çap et.",
			use: "İstifadə et",
			wifi: "Wi-Fi",
			restaurant: "Restoran",
			business: "Biznes kartı",
			social: "Sosial media",
			contact: "Kontakt",
			event: "Tədbir",
			payment: "Ödəniş",
			whatsapp: "WhatsApp"
		},
		login: {
			title: "Nibras QR-ə daxil ol",
			body: "QR-lərini, dinamik linkləri və statistikanı bir paneldə saxla.",
			google: "Google ilə davam et",
			error: "Daxil olmaq alınmadı. Yenidən cəhd et."
		},
		public: {
			missing: "Bu QR tapılmadı",
			inactive: "Bu QR müvəqqəti dayandırılıb",
			open: "Keçidi aç",
			wifi: "Wi-Fi şəbəkəsi",
			connect: "Şifrəni kopyala",
			contact: "Kontaktı yüklə"
		},
		common: {
			loading: "Yüklənir",
			cancel: "Ləğv et",
			confirm: "Təsdiq et",
			search: "Axtar",
			upgrade: "Premium-a keç",
			locked: "Premium"
		},
		legal: {
			privacy: "Məxfilik siyasəti",
			version: "Versiya"
		}
	},
	ar: {
		brand: "Nibras QR",
		tagline: "اطبع رمز QR مرة واحدة. غيّر الرابط متى شئت.",
		nav: {
			create: "إنشاء",
			scan: "ماسح",
			templates: "قوالب",
			dashboard: "رموزي",
			pricing: "الباقات",
			signIn: "دخول"
		},
		hero: {
			kicker: "أدوات QR · رموز ديناميكية · إحصاءات",
			title: "QR للأعمال — اطبعه ثم غيّره.",
			body: "قائمة المطعم وواي فاي وواتساب والدفع. يبقى الرمز كما هو وتدير الرابط والتصميم من اللوحة. يشمل عدد المسح والدولة والجهاز.",
			cta: "أنشئ QR",
			secondary: "افتح الماسح",
			point1: "11 نوعاً",
			point2: "رابط ديناميكي",
			point3: "إحصاءات مباشرة"
		},
		features: {
			title: "ليس مولّداً بسيطاً — أداة أعمال",
			create: "إنشاء",
			createBody: "رابط، نص، هاتف، بريد، واتساب، واي فاي، بطاقة اتصال، موقع، رسالة، فعالية وروابط التطبيقات.",
			dynamic: "QR ديناميكي",
			dynamicBody: "الرمز ثابت. غيّر القائمة أو الحملة أو رقم واتساب من اللوحة.",
			design: "التصميم",
			designBody: "لون، تدرج، شكل النقاط، العيون، الشعار، الإطار والخلفية الشفافة.",
			stats: "الإحصاءات",
			statsBody: "عدد المسح، رسم يومي/شهري، الجهاز والدولة. اعرف أي رمز يعمل.",
			scan: "الماسح",
			scanBody: "كاميرا أو معرض. انسخ النتيجة، افتح الرابط، احفظ السجل.",
			export: "تصدير",
			exportBody: "PNG وJPG وSVG وPDF. في بريميوم جودة عالية بلا علامة تجارية."
		},
		types: {
			url: "رابط",
			text: "نص",
			phone: "هاتف",
			email: "بريد",
			whatsapp: "واتساب",
			wifi: "واي فاي",
			vcard: "جهة اتصال",
			location: "موقع",
			sms: "رسالة",
			event: "فعالية",
			app: "رابط تطبيق"
		},
		fields: {
			url: "الرابط",
			text: "النص",
			phone: "الهاتف",
			email: "البريد",
			subject: "الموضوع",
			body: "المحتوى",
			ssid: "اسم الشبكة (SSID)",
			password: "كلمة المرور",
			encryption: "التشفير",
			hidden: "شبكة مخفية",
			firstName: "الاسم",
			lastName: "اللقب",
			org: "الشركة",
			title: "المنصب",
			street: "الشارع",
			city: "المدينة",
			country: "الدولة",
			lat: "خط العرض",
			lng: "خط الطول",
			query: "العنوان أو المكان",
			start: "البداية",
			end: "النهاية",
			location: "المكان",
			description: "الوصف",
			name: "اسم الرمز"
		},
		create: {
			title: "إنشاء QR",
			static: "ثابت",
			dynamic: "ديناميكي",
			dynamicHint: "الرمز المطبوع لا يتغير، والرابط يمكن تبديله لاحقاً. يتطلب بريميوم.",
			save: "حفظ",
			update: "تحديث",
			saved: "تم الحفظ",
			needAuth: "سجّل الدخول للرموز الديناميكية",
			needPremium: "الرمز الديناميكي ضمن بريميوم",
			empty: "املأ المحتوى — يتحدّث الرمز فوراً"
		},
		design: {
			title: "التصميم",
			colors: "الألوان",
			foreground: "المقدمة",
			background: "الخلفية",
			transparent: "خلفية شفافة",
			gradient: "تدرج",
			dots: "النقاط",
			eyes: "العيون",
			logo: "الشعار",
			frame: "الإطار",
			scanText: "النص",
			bgImage: "صورة الخلفية",
			premium: "بريميوم",
			square: "مربع",
			rounded: "مدوّر",
			dotsStyle: "نقاط",
			classy: "أنيق",
			extra: "ناعم",
			leaf: "ورقة",
			none: "بدون",
			quiet: "هادئ",
			banner: "شريط",
			scanme: "امسحني",
			ticket: "تذكرة"
		},
		export: {
			png: "PNG",
			jpg: "JPG",
			svg: "SVG",
			pdf: "PDF",
			copy: "نسخ",
			copied: "تم النسخ",
			share: "مشاركة"
		},
		scan: {
			title: "الماسح",
			camera: "كاميرا",
			gallery: "معرض",
			start: "افتح الكاميرا",
			stop: "إيقاف",
			result: "النتيجة",
			open: "فتح",
			copy: "نسخ",
			empty: "وجّه نحو الرمز أو ارفع صورة",
			history: "السجل",
			clear: "مسح",
			denied: "رُفض إذن الكاميرا. استخدم صورة من المعرض."
		},
		dash: {
			title: "رموز QR",
			empty: "لا رموز بعد. أنشئ واحداً وأدره من هنا.",
			scans: "مسح",
			active: "نشط",
			paused: "متوقف",
			edit: "تعديل",
			download: "تنزيل",
			duplicate: "نسخ",
			pause: "إيقاف",
			resume: "تفعيل",
			delete: "حذف",
			folder: "مجلد",
			all: "الكل",
			newFolder: "مجلد جديد",
			stats: "إحصاءات",
			created: "أُنشئ",
			type: "النوع",
			dynamic: "ديناميكي",
			static: "ثابت"
		},
		stats: {
			total: "إجمالي المسح",
			week: "7 أيام",
			month: "30 يوماً",
			devices: "الأجهزة",
			countries: "الدول",
			series: "المسح اليومي",
			empty: "لا مسح بعد. اطبع الرمز وتابعه.",
			dest: "الوجهة الحالية",
			saveDest: "حدّث الوجهة"
		},
		pricing: {
			title: "باقات في متناول الجميع. بسعر فنجان شاي شهرياً.",
			free: "مجاني",
			premium: "بريميوم",
			business: "أعمال",
			month: "/ شهر",
			year: "/ سنة",
			once: "مرة واحدة",
			periodMonthly: "شهري",
			periodYearly: "سنوي",
			periodLifetime: "مدى الحياة",
			save: "وفّر {n}%",
			perMonth: "فقط {price} شهرياً",
			lifetimeNote: "ادفع مرة واحدة واستخدمه للأبد",
			ctaFree: "ابدأ مجاناً",
			ctaPremium: "انتقل إلى بريميوم",
			ctaBusiness: "انتقل إلى أعمال",
			current: "الباقة الحالية",
			note: "الدفع في المرحلة التالية. فعّل باقة الآن لتجربة كل الأدوات.",
			f1: "رموز ثابتة بلا حد",
			f2: "الماسح",
			f3: "تصدير PNG",
			f4: "ألوان أساسية",
			f5: "3 رموز QR ديناميكية",
			p1: "QR ديناميكي",
			p2: "شعار وتصميم مخصص",
			p3: "SVG / PDF / دقة عالية",
			p4: "إحصاءات",
			p5: "مجلدات",
			p6: "تصدير بلا علامة",
			p7: "قوالب أعمال",
			b1: "500 رمزاً ديناميكياً",
			b2: "مفتاح API",
			b3: "جاهز للفريق",
			b4: "إحصاءات أوسع",
			b5: "وسم أبيض على الخارطة"
		},
		templates: {
			title: "قوالب جاهزة",
			body: "لا تبدأ من الصفر. اختر قالباً، املأه، اطبعه.",
			use: "استخدم",
			wifi: "واي فاي",
			restaurant: "مطعم",
			business: "بطاقة عمل",
			social: "تواصل اجتماعي",
			contact: "جهة اتصال",
			event: "فعالية",
			payment: "دفع",
			whatsapp: "واتساب"
		},
		login: {
			title: "دخول إلى Nibras QR",
			body: "احفظ الرموز والروابط الديناميكية والإحصاءات في لوحة واحدة.",
			google: "المتابعة عبر Google",
			error: "تعذّر تسجيل الدخول. حاول مرة أخرى."
		},
		public: {
			missing: "هذا الرمز غير موجود",
			inactive: "هذا الرمز متوقف مؤقتاً",
			open: "افتح الرابط",
			wifi: "شبكة واي فاي",
			connect: "انسخ كلمة المرور",
			contact: "نزّل جهة الاتصال"
		},
		common: {
			loading: "جارٍ التحميل",
			cancel: "إلغاء",
			confirm: "تأكيد",
			search: "بحث",
			upgrade: "انتقل إلى بريميوم",
			locked: "بريميوم"
		},
		legal: {
			privacy: "سياسة الخصوصية",
			version: "الإصدار"
		}
	},
	ru: {
		brand: "Nibras QR",
		tagline: "Напечатайте QR один раз. Меняйте ссылку когда угодно.",
		nav: {
			create: "Создать",
			scan: "Сканер",
			templates: "Шаблоны",
			dashboard: "Мои QR",
			pricing: "Тарифы",
			signIn: "Войти"
		},
		hero: {
			kicker: "QR Toolkit · Динамический QR · Статистика",
			title: "QR для бизнеса — напечатали, потом меняете.",
			body: "Меню ресторана, Wi-Fi, WhatsApp и оплата. Код остаётся тем же, ссылку и дизайн вы ведёте из панели. Есть сканы, страна и устройство.",
			cta: "Создать QR",
			secondary: "Открыть сканер",
			point1: "11 типов QR",
			point2: "Динамическая ссылка",
			point3: "Живая статистика"
		},
		features: {
			title: "Не игрушечный генератор, а рабочий инструмент",
			create: "Создать",
			createBody: "URL, текст, телефон, email, WhatsApp, Wi-Fi, визитка, место, SMS, событие и ссылка на приложение.",
			dynamic: "Динамический QR",
			dynamicBody: "Код не меняется. Меню, кампанию или номер WhatsApp меняете в панели.",
			design: "Дизайн",
			designBody: "Цвет, градиент, форма точек, глаза, логотип, рамка и прозрачный фон.",
			stats: "Статистика",
			statsBody: "Число сканов, график по дням, устройство и страна. Видно, какой QR работает.",
			scan: "Сканер",
			scanBody: "Камера или галерея. Скопировать, открыть ссылку, сохранить историю.",
			export: "Экспорт",
			exportBody: "PNG, JPG, SVG и PDF. В Premium — высокое качество без бренда."
		},
		types: {
			url: "URL",
			text: "Текст",
			phone: "Телефон",
			email: "Email",
			whatsapp: "WhatsApp",
			wifi: "Wi-Fi",
			vcard: "Контакт",
			location: "Место",
			sms: "SMS",
			event: "Событие",
			app: "Ссылка на приложение"
		},
		fields: {
			url: "Ссылка",
			text: "Текст",
			phone: "Телефон",
			email: "Email",
			subject: "Тема",
			body: "Текст",
			ssid: "Имя сети (SSID)",
			password: "Пароль",
			encryption: "Шифрование",
			hidden: "Скрытая сеть",
			firstName: "Имя",
			lastName: "Фамилия",
			org: "Компания",
			title: "Должность",
			street: "Улица",
			city: "Город",
			country: "Страна",
			lat: "Широта",
			lng: "Долгота",
			query: "Адрес или место",
			start: "Начало",
			end: "Конец",
			location: "Место",
			description: "Описание",
			name: "Имя QR"
		},
		create: {
			title: "Создать QR",
			static: "Статический",
			dynamic: "Динамический",
			dynamicHint: "Печатный код тот же, ссылку можно сменить позже. Нужен Premium.",
			save: "Сохранить",
			update: "Обновить",
			saved: "Сохранено",
			needAuth: "Войдите для динамического QR",
			needPremium: "Динамический QR — в Premium",
			empty: "Заполните содержимое — QR обновляется сразу"
		},
		design: {
			title: "Дизайн",
			colors: "Цвета",
			foreground: "Передний план",
			background: "Фон",
			transparent: "Прозрачный фон",
			gradient: "Градиент",
			dots: "Точки",
			eyes: "Глаза",
			logo: "Логотип",
			frame: "Рамка",
			scanText: "Подпись",
			bgImage: "Фоновое изображение",
			premium: "Premium",
			square: "Квадрат",
			rounded: "Скругление",
			dotsStyle: "Точки",
			classy: "Классика",
			extra: "Мягкий",
			leaf: "Лист",
			none: "Нет",
			quiet: "Тихий",
			banner: "Баннер",
			scanme: "Scan me",
			ticket: "Билет"
		},
		export: {
			png: "PNG",
			jpg: "JPG",
			svg: "SVG",
			pdf: "PDF",
			copy: "Копировать",
			copied: "Скопировано",
			share: "Поделиться"
		},
		scan: {
			title: "Сканер",
			camera: "Камера",
			gallery: "Галерея",
			start: "Открыть камеру",
			stop: "Стоп",
			result: "Результат",
			open: "Открыть",
			copy: "Копировать",
			empty: "Наведите на QR или загрузите фото",
			history: "История",
			clear: "Очистить",
			denied: "Нет доступа к камере. Используйте фото из галереи."
		},
		dash: {
			title: "Мои QR",
			empty: "Пока нет кодов. Создайте один и управляйте здесь.",
			scans: "сканов",
			active: "Активен",
			paused: "Пауза",
			edit: "Изменить",
			download: "Скачать",
			duplicate: "Дублировать",
			pause: "Пауза",
			resume: "Включить",
			delete: "Удалить",
			folder: "Папка",
			all: "Все",
			newFolder: "Новая папка",
			stats: "Статистика",
			created: "Создан",
			type: "Тип",
			dynamic: "Динамический",
			static: "Статический"
		},
		stats: {
			total: "Всего сканов",
			week: "7 дней",
			month: "30 дней",
			devices: "Устройства",
			countries: "Страны",
			series: "Сканы по дням",
			empty: "Сканов ещё нет. Напечатайте код и следите.",
			dest: "Текущая ссылка",
			saveDest: "Обновить ссылку"
		},
		pricing: {
			title: "Доступный тариф для всех. Как чашка чая в месяц.",
			free: "Free",
			premium: "Premium",
			business: "Business",
			month: "/ мес",
			year: "/ год",
			once: "разово",
			periodMonthly: "Месяц",
			periodYearly: "Год",
			periodLifetime: "Навсегда",
			save: "Экономия {n}%",
			perMonth: "всего {price} в месяц",
			lifetimeNote: "Платите один раз — пользуйтесь всегда",
			ctaFree: "Начать бесплатно",
			ctaPremium: "Перейти на Premium",
			ctaBusiness: "Перейти на Business",
			current: "Текущий план",
			note: "Оплата — на следующем этапе. Активируйте план сейчас и проверьте весь набор.",
			f1: "Безлимитные статические QR",
			f2: "Сканер",
			f3: "Экспорт PNG",
			f4: "Базовые цвета",
			f5: "3 динамических QR",
			p1: "Динамический QR",
			p2: "Логотип и свой дизайн",
			p3: "SVG / PDF / высокое качество",
			p4: "Статистика",
			p5: "Папки",
			p6: "Экспорт без бренда",
			p7: "Бизнес-шаблоны",
			b1: "500 динамических QR",
			b2: "API-ключ",
			b3: "Готово для команды",
			b4: "Расширенная статистика",
			b5: "White-label в планах"
		},
		templates: {
			title: "Готовые шаблоны",
			body: "Не с нуля. Выберите шаблон, заполните, печатайте.",
			use: "Использовать",
			wifi: "Wi-Fi",
			restaurant: "Ресторан",
			business: "Визитка",
			social: "Соцсети",
			contact: "Контакт",
			event: "Событие",
			payment: "Оплата",
			whatsapp: "WhatsApp"
		},
		login: {
			title: "Вход в Nibras QR",
			body: "Коды, динамические ссылки и статистика — в одной панели.",
			google: "Продолжить с Google",
			error: "Не удалось войти. Попробуйте ещё раз."
		},
		public: {
			missing: "Этот QR не найден",
			inactive: "Этот QR временно отключён",
			open: "Открыть ссылку",
			wifi: "Сеть Wi-Fi",
			connect: "Скопировать пароль",
			contact: "Скачать контакт"
		},
		common: {
			loading: "Загрузка",
			cancel: "Отмена",
			confirm: "Подтвердить",
			search: "Поиск",
			upgrade: "Перейти на Premium",
			locked: "Premium"
		},
		legal: {
			privacy: "Политика конфиденциальности",
			version: "Версия"
		}
	},
	tr: {
		brand: "Nibras QR",
		tagline: "QR'ı bir kez yazdır. Bağlantıyı istediğin zaman değiştir.",
		nav: {
			create: "Oluştur",
			scan: "Tarayıcı",
			templates: "Şablonlar",
			dashboard: "QR'larım",
			pricing: "Planlar",
			signIn: "Giriş"
		},
		hero: {
			kicker: "QR Toolkit · Dinamik QR · İstatistik",
			title: "İş için QR — yazdır, sonra değiştir.",
			body: "Restoran menüsü, Wi-Fi, WhatsApp ve ödeme. Aynı QR kalır; bağlantıyı ve tasarımı panelden yönetirsin. Tarama sayısı, ülke ve cihaz dahildir.",
			cta: "QR oluştur",
			secondary: "Tarayıcıyı aç",
			point1: "11 QR türü",
			point2: "Dinamik bağlantı",
			point3: "Canlı istatistik"
		},
		features: {
			title: "Basit bir üreteç değil, iş aracı",
			create: "Oluştur",
			createBody: "URL, metin, telefon, e-posta, WhatsApp, Wi-Fi, kartvizit, konum, SMS, etkinlik ve uygulama bağlantısı.",
			dynamic: "Dinamik QR",
			dynamicBody: "Kod aynı kalır. Menüyü, kampanyayı veya WhatsApp numarasını panelden değiştirirsin.",
			design: "Tasarım",
			designBody: "Renk, gradyan, nokta şekli, göz stili, logo, çerçeve ve şeffaf arka plan.",
			stats: "İstatistik",
			statsBody: "Tarama sayısı, gün/ay grafiği, cihaz ve ülke. Hangi QR çalışıyor, görünür.",
			scan: "Tarayıcı",
			scanBody: "Kamera veya galeri. Sonucu kopyala, bağlantıyı aç, geçmişi tut.",
			export: "Dışa aktar",
			exportBody: "PNG, JPG, SVG ve PDF. Premium'da yüksek kalite, markasız."
		},
		types: {
			url: "URL",
			text: "Metin",
			phone: "Telefon",
			email: "E-posta",
			whatsapp: "WhatsApp",
			wifi: "Wi-Fi",
			vcard: "Kişi",
			location: "Konum",
			sms: "SMS",
			event: "Etkinlik",
			app: "Uygulama bağlantısı"
		},
		fields: {
			url: "Bağlantı",
			text: "Metin",
			phone: "Telefon",
			email: "E-posta",
			subject: "Konu",
			body: "İçerik",
			ssid: "Ağ adı (SSID)",
			password: "Şifre",
			encryption: "Şifreleme",
			hidden: "Gizli ağ",
			firstName: "Ad",
			lastName: "Soyad",
			org: "Şirket",
			title: "Unvan",
			street: "Sokak",
			city: "Şehir",
			country: "Ülke",
			lat: "Enlem",
			lng: "Boylam",
			query: "Adres veya yer",
			start: "Başlangıç",
			end: "Bitiş",
			location: "Yer",
			description: "Açıklama",
			name: "QR adı"
		},
		create: {
			title: "QR oluştur",
			static: "Statik",
			dynamic: "Dinamik",
			dynamicHint: "Yazdırılan QR aynı kalır, bağlantı sonra değişir. Premium gerekir.",
			save: "Kaydet",
			update: "Güncelle",
			saved: "Kaydedildi",
			needAuth: "Dinamik QR için giriş yap",
			needPremium: "Dinamik QR Premium'dadır",
			empty: "İçeriği doldur — QR anında güncellenir"
		},
		design: {
			title: "Tasarım",
			colors: "Renkler",
			foreground: "Ön plan",
			background: "Arka plan",
			transparent: "Şeffaf arka plan",
			gradient: "Gradyan",
			dots: "Noktalar",
			eyes: "Gözler",
			logo: "Logo",
			frame: "Çerçeve",
			scanText: "Yazı",
			bgImage: "Arka plan görseli",
			premium: "Premium",
			square: "Kare",
			rounded: "Yuvarlak",
			dotsStyle: "Nokta",
			classy: "Klasik",
			extra: "Yumuşak",
			leaf: "Yaprak",
			none: "Yok",
			quiet: "Sakin",
			banner: "Banner",
			scanme: "Scan me",
			ticket: "Bilet"
		},
		export: {
			png: "PNG",
			jpg: "JPG",
			svg: "SVG",
			pdf: "PDF",
			copy: "Kopyala",
			copied: "Kopyalandı",
			share: "Paylaş"
		},
		scan: {
			title: "Tarayıcı",
			camera: "Kamera",
			gallery: "Galeri",
			start: "Kamerayı aç",
			stop: "Durdur",
			result: "Sonuç",
			open: "Aç",
			copy: "Kopyala",
			empty: "QR'a tut veya görsel yükle",
			history: "Geçmiş",
			clear: "Temizle",
			denied: "Kamera izni verilmedi. Galeriden oku."
		},
		dash: {
			title: "QR'larım",
			empty: "Henüz QR yok. Bir tane oluştur, buradan yönet.",
			scans: "tarama",
			active: "Aktif",
			paused: "Duraklatıldı",
			edit: "Düzenle",
			download: "İndir",
			duplicate: "Çoğalt",
			pause: "Duraklat",
			resume: "Aktif et",
			delete: "Sil",
			folder: "Klasör",
			all: "Tümü",
			newFolder: "Yeni klasör",
			stats: "İstatistik",
			created: "Oluşturuldu",
			type: "Tür",
			dynamic: "Dinamik",
			static: "Statik"
		},
		stats: {
			total: "Toplam tarama",
			week: "7 gün",
			month: "30 gün",
			devices: "Cihazlar",
			countries: "Ülkeler",
			series: "Günlük tarama",
			empty: "Henüz tarama yok. QR'ı yazdır ve izle.",
			dest: "Güncel bağlantı",
			saveDest: "Bağlantıyı güncelle"
		},
		pricing: {
			title: "Herkesin bütçesine uygun tarife. Ayda bir çay parası.",
			free: "Free",
			premium: "Premium",
			business: "Business",
			month: "/ ay",
			year: "/ yıl",
			once: "tek sefer",
			periodMonthly: "Aylık",
			periodYearly: "Yıllık",
			periodLifetime: "Ömür boyu",
			save: "%{n} tasarruf",
			perMonth: "ayda sadece {price}",
			lifetimeNote: "Bir kez öde, sonsuza dek kullan",
			ctaFree: "Ücretsiz başla",
			ctaPremium: "Premium'a geç",
			ctaBusiness: "Business'a geç",
			current: "Mevcut plan",
			note: "Ödeme sonraki aşamada. Şimdi planı açıp tüm araçları dene.",
			f1: "Sınırsız statik QR",
			f2: "Tarayıcı",
			f3: "PNG dışa aktarma",
			f4: "Temel renkler",
			f5: "3 dinamik QR",
			p1: "Dinamik QR",
			p2: "Logo ve özel tasarım",
			p3: "SVG / PDF / yüksek kalite",
			p4: "İstatistik",
			p5: "Klasörler",
			p6: "Markasız dışa aktarma",
			p7: "İş şablonları",
			b1: "500 dinamik QR",
			b2: "API anahtarı",
			b3: "Ekip için hazır",
			b4: "Geniş istatistik",
			b5: "White-label yol haritasında"
		},
		templates: {
			title: "Hazır şablonlar",
			body: "Sıfırdan tasarlama. Şablon seç, doldur, yazdır.",
			use: "Kullan",
			wifi: "Wi-Fi",
			restaurant: "Restoran",
			business: "Kartvizit",
			social: "Sosyal medya",
			contact: "Kişi",
			event: "Etkinlik",
			payment: "Ödeme",
			whatsapp: "WhatsApp"
		},
		login: {
			title: "Nibras QR'a giriş",
			body: "QR'larını, dinamik bağlantıları ve istatistiği tek panelde tut.",
			google: "Google ile devam et",
			error: "Giriş yapılamadı. Tekrar dene."
		},
		public: {
			missing: "Bu QR bulunamadı",
			inactive: "Bu QR geçici olarak durduruldu",
			open: "Bağlantıyı aç",
			wifi: "Wi-Fi ağı",
			connect: "Şifreyi kopyala",
			contact: "Kişiyi indir"
		},
		common: {
			loading: "Yükleniyor",
			cancel: "İptal",
			confirm: "Onayla",
			search: "Ara",
			upgrade: "Premium'a geç",
			locked: "Premium"
		},
		legal: {
			privacy: "Gizlilik politikası",
			version: "Sürüm"
		}
	}
};
var MOBILE_STRINGS = {
	en: {
		home: "Home",
		library: "Library",
		saved: "Saved",
		account: "Account",
		hello: "Hello 👋",
		heroTitle: "Eye-catching QR codes in seconds",
		heroBody: "Create, design, scan. Works offline too.",
		tools: "Tools",
		toolCreate: "Create QR",
		toolScan: "Scan",
		toolBarcode: "Barcode",
		toolBatch: "Batch QR",
		toolDynamic: "Dynamic QR",
		toolTemplates: "Templates",
		recent: "Recent QRs",
		seeAll: "See all",
		proBannerTitle: "Nibras QR Pro",
		proBannerBody: "Dynamic QR, analytics, logos, batch creation, cloud and unlimited storage.",
		proBannerCta: "Discover Pro",
		proActive: "Pro is active",
		o1Title: "A QR for everything",
		o1Body: "Links, Wi-Fi, business cards, WhatsApp, events and more — 11 types, offline.",
		o2Title: "Smart, safe scanner",
		o2Body: "Warnings about suspicious links; add Wi-Fi, contacts and events in one tap.",
		o3Title: "Stand out with Pro",
		o3Body: "Dynamic QR you can change after printing, scan stats, logos, frames and premium templates.",
		next: "Next",
		start: "Get started",
		skip: "Skip",
		pwTitle: "Go unlimited with Pro",
		pwSubtitle: "One subscription, every Pro feature. Cancel any time in Google Play.",
		compare: "Compare",
		free: "Free",
		pro: "Pro",
		rDynamic: "Dynamic QR (edit after printing)",
		rStats: "Scan analytics",
		rDesign: "Logo, gradients, shapes, frames",
		rTemplates: "Premium template packs",
		rBatch: "Batch QR + ZIP",
		rBarcode: "Barcodes (EAN, UPC, Code128, Data Matrix)",
		rCloud: "Cloud sync and tags",
		rExport: "SVG/PDF, high quality",
		rSaved: "Saved QRs",
		rHistory: "Scan history",
		rBatchScan: "Batch scan mode",
		unlimited: "Unlimited",
		bestValue: "Best value",
		monthly: "Monthly",
		yearly: "Yearly",
		lifetime: "Lifetime",
		perMonthApprox: "≈ {price}/mo",
		oneTime: "one-time",
		continue: "Continue",
		restore: "Restore purchases",
		restored: "Purchases restored",
		nothingToRestore: "No active purchase found to restore",
		purchaseDone: "Congratulations! Pro is active 🎉",
		storeUnavailable: "The store isn't ready. Install the app from Google Play and connect to the internet.",
		noPackages: "Prices couldn't be loaded. Please try again shortly.",
		manage: "Manage subscription",
		legal: "Subscriptions renew automatically and can be cancelled in Google Play.",
		signInTip: "Sign in first to use Pro on all your devices.",
		close: "Close",
		savedEmpty: "No saved QRs yet. Tap “Save” on the Create screen.",
		savedLocal: "QRs are stored on this device, no internet needed.",
		open: "Open",
		newQr: "New QR",
		deleted: "Deleted",
		confirmDelete: "Delete this QR?",
		tags: "Tags",
		addTag: "Add tag",
		all: "All",
		limitReached: "The free plan can save {n} QRs. Go Pro for unlimited.",
		cloud: "Cloud",
		syncNow: "Sync now",
		syncing: "Syncing…",
		synced: "Synced",
		syncPro: "Cloud backup and cross-device sync are Pro features.",
		syncSignIn: "Sign in to use cloud sync.",
		history: "History",
		dynamic: "Dynamic QR",
		dynamicHint: "Change the link after printing and track scans.",
		dynamicNeedsUrl: "Dynamic QR works only with an http(s) link.",
		dynamicNeedsSignIn: "Sign in to use dynamic QR.",
		dynamicCreated: "Dynamic QR created",
		dynamicOffline: "Dynamic QR needs an internet connection.",
		dynTitle: "Dynamic QRs",
		dynEmpty: "No dynamic QRs yet. Turn on “Dynamic QR” on the Create screen.",
		scans: "Scans",
		last30: "Last 30 days",
		devices: "Devices",
		systems: "Systems",
		countries: "Countries",
		countryNA: "Country data is not available yet.",
		destination: "Destination link",
		active: "Active",
		expires: "Expiry date",
		scanLimit: "Scan limit",
		noLimit: "No limit",
		save: "Save",
		savedOk: "Saved",
		copyLink: "Copy link",
		confirmDeleteLink: "Delete this dynamic QR? Printed codes will stop working.",
		shortLink: "Short link",
		bcTitle: "Barcode generator",
		bcFormat: "Format",
		bcValue: "Content",
		bcInvalid: "The content is not valid for this format.",
		bcHintEan: "12 or 13 digits",
		bcHintUpc: "11 or 12 digits",
		bcHintCode128: "Any text (ASCII)",
		bcHintDm: "Any text",
		batTitle: "Batch QR",
		batBody: "One link or text per line. Optionally “name,content” (CSV). The current design is applied.",
		batImport: "Import CSV/TXT",
		batGenerate: "Create ZIP",
		batCount: "{n} QRs",
		batDone: "{n} QRs added to the ZIP",
		batMax: "Up to {n} lines at a time.",
		scanNative: "Open camera",
		scanning: "Hold the QR inside the frame",
		cancel: "Close",
		permission: "Camera permission is required. Allow it in Settings.",
		settings: "Settings",
		warnTitle: "Careful: this link may be suspicious",
		warnShort: "Shortened link — the real address is hidden.",
		warnIp: "Uses an IP address instead of a domain.",
		warnHttp: "Unencrypted connection (http).",
		warnPuny: "Special characters that imitate another site (punycode).",
		warnAt: "The link contains “@” — it may be a deceptive address.",
		warnTld: "A domain zone often used for spam.",
		openAnyway: "Open anyway",
		safeLink: "No problems found",
		wifiNetwork: "Network",
		wifiPassword: "Password",
		copyPassword: "Copy password",
		wifiSettings: "Wi-Fi settings",
		wifiHint: "Copy the password, then pick the network in Wi-Fi settings.",
		addContact: "Add to contacts",
		addEvent: "Add to calendar",
		call: "Call",
		sendEmail: "Send email",
		share: "Share",
		batchScan: "Batch scan",
		batchScanHint: "Scan codes one after another, then share the list.",
		batchCount: "{n} codes scanned",
		finish: "Finish",
		historyFree: "The free plan keeps the last {n} scans.",
		signedOut: "You're not signed in",
		signInHint: "Signing in is optional. It's needed for Pro, dynamic QR and cloud sync.",
		signOut: "Sign out",
		plan: "Plan",
		offline: "Couldn't reach the server. Check your internet connection.",
		notConfigured: "The server is not configured in this build.",
		language: "Language",
		theme: "Appearance",
		dark: "Dark",
		light: "Light",
		dynamicWeb: "Dynamic QR can be changed after printing and counts scans (Pro).",
		proFeature: "Pro feature",
		about: "About",
		madeBy: "Made by Nibras Code",
		privacyWeb: "Open web version",
		deleteAccount: "Delete account",
		deleteBody: "Your account, cloud QRs, dynamic links (printed codes will stop working) and scan statistics will be permanently deleted. QRs on this device stay. Your subscription is not cancelled automatically — cancel it in Google Play.",
		deleteConfirm: "Yes, delete permanently",
		deleteDone: "Account deleted",
		deleteFailed: "Couldn't delete the account. Check your connection and try again."
	},
	az: {
		home: "Ana səhifə",
		library: "Kitabxana",
		saved: "Saxlanılanlar",
		account: "Hesab",
		hello: "Salam 👋",
		heroTitle: "Diqqət çəkən QR-lər, saniyələr içində",
		heroBody: "Düzəlt, dizayn et, skan et. İnternetsiz də işləyir.",
		tools: "Alətlər",
		toolCreate: "QR düzəlt",
		toolScan: "Skan et",
		toolBarcode: "Barkod",
		toolBatch: "Toplu QR",
		toolDynamic: "Dinamik QR",
		toolTemplates: "Şablonlar",
		recent: "Son QR-lər",
		seeAll: "Hamısı",
		proBannerTitle: "Nibras QR Pro",
		proBannerBody: "Dinamik QR, statistika, loqo, toplu düzəltmə, bulud və limitsiz yaddaş.",
		proBannerCta: "Pro-nu kəşf et",
		proActive: "Pro aktivdir",
		o1Title: "Hər şey üçün QR",
		o1Body: "Link, Wi-Fi, vizit kartı, WhatsApp, tədbir və daha çox — 11 növ, internetsiz.",
		o2Title: "Ağıllı və təhlükəsiz skaner",
		o2Body: "Şübhəli linklər barədə xəbərdarlıq, Wi-Fi, kontakt və tədbiri bir toxunuşla əlavə et.",
		o3Title: "Pro ilə fərqlən",
		o3Body: "Çapdan sonra dəyişən dinamik QR, skan statistikası, loqo, çərçivə və premium şablonlar.",
		next: "Növbəti",
		start: "Başla",
		skip: "Keç",
		pwTitle: "Pro ilə limitsiz",
		pwSubtitle: "Bir abunə, bütün Pro imkanları. İstənilən vaxt Google Play-dən ləğv et.",
		compare: "Müqayisə",
		free: "Pulsuz",
		pro: "Pro",
		rDynamic: "Dinamik QR (çapdan sonra dəyiş)",
		rStats: "Skan statistikası",
		rDesign: "Loqo, gradient, formalar, çərçivə",
		rTemplates: "Premium şablon paketləri",
		rBatch: "Toplu QR + ZIP",
		rBarcode: "Barkod (EAN, UPC, Code128, Data Matrix)",
		rCloud: "Bulud sinxronizasiyası və etiketlər",
		rExport: "SVG/PDF, yüksək keyfiyyət",
		rSaved: "Saxlanılan QR",
		rHistory: "Skan tarixçəsi",
		rBatchScan: "Toplu skan rejimi",
		unlimited: "Limitsiz",
		bestValue: "Ən sərfəli",
		monthly: "Aylıq",
		yearly: "İllik",
		lifetime: "Ömürlük",
		perMonthApprox: "≈ {price}/ay",
		oneTime: "birdəfəlik",
		continue: "Davam et",
		restore: "Alışları bərpa et",
		restored: "Alışlar bərpa olundu",
		nothingToRestore: "Bərpa ediləcək aktiv alış tapılmadı",
		purchaseDone: "Təbriklər! Pro aktivdir 🎉",
		storeUnavailable: "Mağaza hazır deyil. Google Play ilə tətbiqi yüklə və internetə qoşul.",
		noPackages: "Qiymətlər yüklənmədi. Bir az sonra yenidən yoxla.",
		manage: "Abunəni idarə et",
		legal: "Abunə avtomatik yenilənir, Google Play-də ləğv edilə bilər.",
		signInTip: "Pro-nu bütün cihazlarda istifadə etmək üçün əvvəlcə daxil ol.",
		close: "Bağla",
		savedEmpty: "Hələ saxlanılmış QR yoxdur. Düzəlt bölməsində «Yadda saxla» düyməsini bas.",
		savedLocal: "QR-lər bu cihazda saxlanılır, internet lazım deyil.",
		open: "Aç",
		newQr: "Yeni QR",
		deleted: "Silindi",
		confirmDelete: "Bu QR silinsin?",
		tags: "Etiketlər",
		addTag: "Etiket əlavə et",
		all: "Hamısı",
		limitReached: "Pulsuz planda {n} QR saxlamaq olar. Limitsiz üçün Pro.",
		cloud: "Bulud",
		syncNow: "İndi sinxronlaşdır",
		syncing: "Sinxronlaşdırılır…",
		synced: "Sinxronlaşdırıldı",
		syncPro: "Bulud ehtiyat nüsxəsi və cihazlar arası sinxronizasiya Pro-dadır.",
		syncSignIn: "Bulud sinxronizasiyası üçün daxil ol.",
		history: "Tarixçə",
		dynamic: "Dinamik QR",
		dynamicHint: "Çapdan sonra linki dəyiş, skanları izlə.",
		dynamicNeedsUrl: "Dinamik QR yalnız http(s) link ilə işləyir.",
		dynamicNeedsSignIn: "Dinamik QR üçün daxil ol.",
		dynamicCreated: "Dinamik QR düzəldildi",
		dynamicOffline: "Dinamik QR üçün internet lazımdır.",
		dynTitle: "Dinamik QR-lər",
		dynEmpty: "Hələ dinamik QR yoxdur. Düzəlt bölməsində «Dinamik QR»-ı aç.",
		scans: "Skan",
		last30: "Son 30 gün",
		devices: "Cihazlar",
		systems: "Sistemlər",
		countries: "Ölkələr",
		countryNA: "Ölkə məlumatı hələ mövcud deyil.",
		destination: "Yönləndirmə linki",
		active: "Aktiv",
		expires: "Bitmə tarixi",
		scanLimit: "Skan limiti",
		noLimit: "Limitsiz",
		save: "Yadda saxla",
		savedOk: "Yadda saxlandı",
		copyLink: "Linki kopyala",
		confirmDeleteLink: "Bu dinamik QR silinsin? Çap olunmuş kod işləməyəcək.",
		shortLink: "Qısa link",
		bcTitle: "Barkod generatoru",
		bcFormat: "Format",
		bcValue: "Məzmun",
		bcInvalid: "Bu format üçün məzmun yanlışdır.",
		bcHintEan: "12 və ya 13 rəqəm",
		bcHintUpc: "11 və ya 12 rəqəm",
		bcHintCode128: "İstənilən mətn (ASCII)",
		bcHintDm: "İstənilən mətn",
		batTitle: "Toplu QR",
		batBody: "Hər sətirdə bir link və ya mətn. İstəyə görə «ad,məzmun» (CSV). Cari dizayn tətbiq olunur.",
		batImport: "CSV/TXT idxal et",
		batGenerate: "ZIP düzəlt",
		batCount: "{n} QR",
		batDone: "{n} QR ZIP-ə əlavə olundu",
		batMax: "Bir dəfəyə maksimum {n} sətir.",
		scanNative: "Kameranı aç",
		scanning: "QR-i çərçivəyə tut",
		cancel: "Bağla",
		permission: "Kamera icazəsi lazımdır. Ayarlardan icazə ver.",
		settings: "Ayarlar",
		warnTitle: "Diqqət: bu link şübhəli ola bilər",
		warnShort: "Qısaldılmış link — əsl ünvan gizlidir.",
		warnIp: "Domen əvəzinə IP ünvanı istifadə olunub.",
		warnHttp: "Şifrələnməmiş bağlantı (http).",
		warnPuny: "Başqa sayta oxşamaq üçün xüsusi simvollar (punycode).",
		warnAt: "Linkdə «@» var — aldadıcı ünvan ola bilər.",
		warnTld: "Tez-tez spam üçün istifadə olunan domen zonası.",
		openAnyway: "Yenə də aç",
		safeLink: "Problem aşkarlanmadı",
		wifiNetwork: "Şəbəkə",
		wifiPassword: "Şifrə",
		copyPassword: "Şifrəni kopyala",
		wifiSettings: "Wi-Fi ayarları",
		wifiHint: "Şifrəni kopyala, sonra Wi-Fi ayarlarında şəbəkəni seç.",
		addContact: "Kontaktlara əlavə et",
		addEvent: "Təqvimə əlavə et",
		call: "Zəng et",
		sendEmail: "Email yaz",
		share: "Paylaş",
		batchScan: "Toplu skan",
		batchScanHint: "Kodları ardıcıl skan et, sonra siyahını paylaş.",
		batchCount: "{n} kod skan edildi",
		finish: "Bitir",
		historyFree: "Pulsuz planda son {n} skan saxlanılır.",
		signedOut: "Daxil olmamısan",
		signInHint: "Daxil olmaq könüllüdür. Pro, dinamik QR və bulud sinxronizasiyası üçün lazımdır.",
		signOut: "Çıxış",
		plan: "Plan",
		offline: "Serverə qoşulmaq alınmadı. İnternet bağlantısını yoxla.",
		notConfigured: "Bu versiyada server qoşulmayıb.",
		language: "Dil",
		theme: "Görünüş",
		dark: "Tünd",
		light: "Açıq",
		dynamicWeb: "Dinamik QR çapdan sonra dəyişdirilə bilər və skanları sayır (Pro).",
		proFeature: "Pro funksiyası",
		about: "Haqqında",
		madeBy: "Hazırlayan: Nibras Code",
		privacyWeb: "Veb versiyanı aç",
		deleteAccount: "Hesabı sil",
		deleteBody: "Hesabın, buluddakı QR-lər, dinamik linklər (çap olunmuş kodlar işləməyəcək) və skan statistikası birdəfəlik silinəcək. Cihazdakı QR-lər qalır. Abunəlik avtomatik ləğv olunmur — Google Play-də ləğv et.",
		deleteConfirm: "Bəli, birdəfəlik sil",
		deleteDone: "Hesab silindi",
		deleteFailed: "Hesabı silmək alınmadı. İnterneti yoxla və yenidən cəhd et."
	},
	ar: {
		home: "الرئيسية",
		library: "المكتبة",
		saved: "المحفوظات",
		account: "الحساب",
		hello: "مرحباً 👋",
		heroTitle: "رموز QR لافتة في ثوانٍ",
		heroBody: "أنشئ وصمّم وامسح. يعمل حتى دون إنترنت.",
		tools: "الأدوات",
		toolCreate: "إنشاء QR",
		toolScan: "مسح",
		toolBarcode: "باركود",
		toolBatch: "QR بالجملة",
		toolDynamic: "QR ديناميكي",
		toolTemplates: "القوالب",
		recent: "أحدث الرموز",
		seeAll: "الكل",
		proBannerTitle: "Nibras QR Pro",
		proBannerBody: "QR ديناميكي، إحصاءات، شعار، إنشاء بالجملة، سحابة وحفظ غير محدود.",
		proBannerCta: "اكتشف Pro",
		proActive: "Pro مفعّل",
		o1Title: "QR لكل شيء",
		o1Body: "رابط، Wi-Fi، بطاقة عمل، واتساب، فعالية والمزيد — 11 نوعاً دون إنترنت.",
		o2Title: "ماسح ذكي وآمن",
		o2Body: "تحذير من الروابط المشبوهة، وإضافة Wi-Fi وجهات الاتصال والفعاليات بلمسة.",
		o3Title: "تميّز مع Pro",
		o3Body: "QR ديناميكي يتغير بعد الطباعة، إحصاءات المسح، شعار، إطارات وقوالب مميزة.",
		next: "التالي",
		start: "ابدأ",
		skip: "تخطَّ",
		pwTitle: "بلا حدود مع Pro",
		pwSubtitle: "اشتراك واحد لكل مزايا Pro. ألغِ في أي وقت من Google Play.",
		compare: "مقارنة",
		free: "مجاني",
		pro: "Pro",
		rDynamic: "QR ديناميكي (غيّر بعد الطباعة)",
		rStats: "إحصاءات المسح",
		rDesign: "شعار، تدرّج، أشكال، إطار",
		rTemplates: "حزم قوالب مميزة",
		rBatch: "QR بالجملة + ZIP",
		rBarcode: "باركود (EAN، UPC، Code128، Data Matrix)",
		rCloud: "مزامنة سحابية ووسوم",
		rExport: "SVG/PDF بجودة عالية",
		rSaved: "الرموز المحفوظة",
		rHistory: "سجل المسح",
		rBatchScan: "وضع المسح المتتابع",
		unlimited: "غير محدود",
		bestValue: "الأفضل قيمة",
		monthly: "شهري",
		yearly: "سنوي",
		lifetime: "مدى الحياة",
		perMonthApprox: "≈ {price}/شهر",
		oneTime: "دفعة واحدة",
		continue: "متابعة",
		restore: "استعادة المشتريات",
		restored: "تمت استعادة المشتريات",
		nothingToRestore: "لا توجد مشتريات نشطة للاستعادة",
		purchaseDone: "تهانينا! Pro مفعّل 🎉",
		storeUnavailable: "المتجر غير جاهز. ثبّت التطبيق من Google Play واتصل بالإنترنت.",
		noPackages: "تعذّر تحميل الأسعار. حاول لاحقاً.",
		manage: "إدارة الاشتراك",
		legal: "يتجدد الاشتراك تلقائياً ويمكن إلغاؤه من Google Play.",
		signInTip: "سجّل الدخول أولاً لاستخدام Pro على كل أجهزتك.",
		close: "إغلاق",
		savedEmpty: "لا توجد رموز محفوظة بعد. اضغط «حفظ» في قسم الإنشاء.",
		savedLocal: "تُحفظ الرموز على هذا الجهاز، دون الحاجة إلى الإنترنت.",
		open: "فتح",
		newQr: "رمز جديد",
		deleted: "تم الحذف",
		confirmDelete: "حذف هذا الرمز؟",
		tags: "الوسوم",
		addTag: "إضافة وسم",
		all: "الكل",
		limitReached: "الخطة المجانية تحفظ {n} رموز. للحفظ غير المحدود اشترك في Pro.",
		cloud: "السحابة",
		syncNow: "مزامنة الآن",
		syncing: "جارٍ المزامنة…",
		synced: "تمت المزامنة",
		syncPro: "النسخ الاحتياطي السحابي والمزامنة بين الأجهزة ضمن Pro.",
		syncSignIn: "سجّل الدخول للمزامنة السحابية.",
		history: "السجل",
		dynamic: "QR ديناميكي",
		dynamicHint: "غيّر الرابط بعد الطباعة وتابع عمليات المسح.",
		dynamicNeedsUrl: "الـQR الديناميكي يعمل مع روابط http(s) فقط.",
		dynamicNeedsSignIn: "سجّل الدخول لإنشاء QR ديناميكي.",
		dynamicCreated: "تم إنشاء QR ديناميكي",
		dynamicOffline: "الـQR الديناميكي يحتاج إلى الإنترنت.",
		dynTitle: "رموز QR الديناميكية",
		dynEmpty: "لا توجد رموز ديناميكية بعد. فعّل «QR ديناميكي» في قسم الإنشاء.",
		scans: "مسح",
		last30: "آخر 30 يوماً",
		devices: "الأجهزة",
		systems: "الأنظمة",
		countries: "الدول",
		countryNA: "بيانات الدولة غير متاحة بعد.",
		destination: "رابط التوجيه",
		active: "نشط",
		expires: "تاريخ الانتهاء",
		scanLimit: "حد المسح",
		noLimit: "بلا حد",
		save: "حفظ",
		savedOk: "تم الحفظ",
		copyLink: "نسخ الرابط",
		confirmDeleteLink: "حذف هذا الرمز الديناميكي؟ لن يعمل الرمز المطبوع.",
		shortLink: "رابط قصير",
		bcTitle: "مولّد الباركود",
		bcFormat: "الصيغة",
		bcValue: "المحتوى",
		bcInvalid: "المحتوى غير صالح لهذه الصيغة.",
		bcHintEan: "12 أو 13 رقماً",
		bcHintUpc: "11 أو 12 رقماً",
		bcHintCode128: "أي نص (ASCII)",
		bcHintDm: "أي نص",
		batTitle: "QR بالجملة",
		batBody: "رابط أو نص في كل سطر. أو «اسم,محتوى» (CSV). يُطبَّق التصميم الحالي.",
		batImport: "استيراد CSV/TXT",
		batGenerate: "إنشاء ZIP",
		batCount: "{n} رمز",
		batDone: "أُضيف {n} رمز إلى ZIP",
		batMax: "الحد الأقصى {n} سطر في المرة.",
		scanNative: "افتح الكاميرا",
		scanning: "وجّه الكاميرا إلى الرمز",
		cancel: "إغلاق",
		permission: "يلزم إذن الكاميرا. فعّله من الإعدادات.",
		settings: "الإعدادات",
		warnTitle: "انتبه: قد يكون هذا الرابط مشبوهاً",
		warnShort: "رابط مختصر — العنوان الحقيقي مخفي.",
		warnIp: "يُستخدم عنوان IP بدلاً من اسم نطاق.",
		warnHttp: "اتصال غير مشفّر (http).",
		warnPuny: "رموز خاصة لتقليد موقع آخر (punycode).",
		warnAt: "يحتوي الرابط على «@» — قد يكون عنواناً مضللاً.",
		warnTld: "نطاق يُستخدم كثيراً في الرسائل المزعجة.",
		openAnyway: "افتح على أي حال",
		safeLink: "لم تُكتشف مشكلات",
		wifiNetwork: "الشبكة",
		wifiPassword: "كلمة المرور",
		copyPassword: "نسخ كلمة المرور",
		wifiSettings: "إعدادات Wi-Fi",
		wifiHint: "انسخ كلمة المرور ثم اختر الشبكة من إعدادات Wi-Fi.",
		addContact: "إضافة إلى جهات الاتصال",
		addEvent: "إضافة إلى التقويم",
		call: "اتصال",
		sendEmail: "إرسال بريد",
		share: "مشاركة",
		batchScan: "مسح متتابع",
		batchScanHint: "امسح الرموز واحداً تلو الآخر ثم شارك القائمة.",
		batchCount: "تم مسح {n} رمز",
		finish: "إنهاء",
		historyFree: "الخطة المجانية تحفظ آخر {n} عملية مسح.",
		signedOut: "لم تسجّل الدخول",
		signInHint: "تسجيل الدخول اختياري، ويلزم لـ Pro والـQR الديناميكي والمزامنة.",
		signOut: "خروج",
		plan: "الباقة",
		offline: "تعذّر الاتصال بالخادم. تحقق من الإنترنت.",
		notConfigured: "الخادم غير مهيأ في هذا الإصدار.",
		language: "اللغة",
		theme: "المظهر",
		dark: "داكن",
		light: "فاتح",
		dynamicWeb: "يمكن تعديل الـQR الديناميكي بعد الطباعة ويحصي عمليات المسح (Pro).",
		proFeature: "ميزة Pro",
		about: "حول التطبيق",
		madeBy: "إعداد: Nibras Code",
		privacyWeb: "فتح النسخة على الويب",
		deleteAccount: "حذف الحساب",
		deleteBody: "سيُحذف حسابك ورموز QR في السحابة والروابط الديناميكية (لن تعمل الرموز المطبوعة) وإحصاءات المسح نهائياً. تبقى الرموز المحفوظة على الجهاز. لا يُلغى الاشتراك تلقائياً — ألغِه من Google Play.",
		deleteConfirm: "نعم، احذف نهائياً",
		deleteDone: "تم حذف الحساب",
		deleteFailed: "تعذّر حذف الحساب. تحقق من الاتصال وحاول مجدداً."
	},
	ru: {
		home: "Главная",
		library: "Библиотека",
		saved: "Сохранённые",
		account: "Аккаунт",
		hello: "Привет 👋",
		heroTitle: "Яркие QR-коды за секунды",
		heroBody: "Создавайте, оформляйте, сканируйте. Работает даже без интернета.",
		tools: "Инструменты",
		toolCreate: "Создать QR",
		toolScan: "Сканер",
		toolBarcode: "Штрихкод",
		toolBatch: "Пакет QR",
		toolDynamic: "Динамический QR",
		toolTemplates: "Шаблоны",
		recent: "Недавние",
		seeAll: "Все",
		proBannerTitle: "Nibras QR Pro",
		proBannerBody: "Динамические QR, статистика, логотип, пакетное создание, облако и безлимит.",
		proBannerCta: "Открыть Pro",
		proActive: "Pro активен",
		o1Title: "QR для всего",
		o1Body: "Ссылка, Wi-Fi, визитка, WhatsApp, событие и другое — 11 типов, без интернета.",
		o2Title: "Умный и безопасный сканер",
		o2Body: "Предупреждение о подозрительных ссылках, Wi-Fi, контакты и события в одно касание.",
		o3Title: "Выделяйтесь с Pro",
		o3Body: "Динамические QR после печати, статистика сканов, логотип, рамки и премиум-шаблоны.",
		next: "Далее",
		start: "Начать",
		skip: "Пропустить",
		pwTitle: "Без ограничений с Pro",
		pwSubtitle: "Одна подписка — все возможности Pro. Отмена в любой момент в Google Play.",
		compare: "Сравнение",
		free: "Бесплатно",
		pro: "Pro",
		rDynamic: "Динамический QR (меняйте после печати)",
		rStats: "Статистика сканов",
		rDesign: "Логотип, градиент, формы, рамка",
		rTemplates: "Премиум-наборы шаблонов",
		rBatch: "Пакет QR + ZIP",
		rBarcode: "Штрихкоды (EAN, UPC, Code128, Data Matrix)",
		rCloud: "Облачная синхронизация и теги",
		rExport: "SVG/PDF, высокое качество",
		rSaved: "Сохранённые QR",
		rHistory: "История сканов",
		rBatchScan: "Пакетное сканирование",
		unlimited: "Безлимит",
		bestValue: "Выгоднее всего",
		monthly: "Месяц",
		yearly: "Год",
		lifetime: "Навсегда",
		perMonthApprox: "≈ {price}/мес",
		oneTime: "разово",
		continue: "Продолжить",
		restore: "Восстановить покупки",
		restored: "Покупки восстановлены",
		nothingToRestore: "Активных покупок не найдено",
		purchaseDone: "Поздравляем! Pro активен 🎉",
		storeUnavailable: "Магазин недоступен. Установите приложение из Google Play и подключитесь к интернету.",
		noPackages: "Не удалось загрузить цены. Попробуйте позже.",
		manage: "Управлять подпиской",
		legal: "Подписка продлевается автоматически, отмена — в Google Play.",
		signInTip: "Войдите, чтобы пользоваться Pro на всех устройствах.",
		close: "Закрыть",
		savedEmpty: "Пока нет сохранённых QR. Нажмите «Сохранить» в разделе создания.",
		savedLocal: "QR хранятся на этом устройстве, интернет не нужен.",
		open: "Открыть",
		newQr: "Новый QR",
		deleted: "Удалено",
		confirmDelete: "Удалить этот QR?",
		tags: "Теги",
		addTag: "Добавить тег",
		all: "Все",
		limitReached: "В бесплатном тарифе можно сохранить {n} QR. Безлимит — в Pro.",
		cloud: "Облако",
		syncNow: "Синхронизировать",
		syncing: "Синхронизация…",
		synced: "Синхронизировано",
		syncPro: "Облачная копия и синхронизация между устройствами — в Pro.",
		syncSignIn: "Войдите для облачной синхронизации.",
		history: "История",
		dynamic: "Динамический QR",
		dynamicHint: "Меняйте ссылку после печати и следите за сканами.",
		dynamicNeedsUrl: "Динамический QR работает только со ссылкой http(s).",
		dynamicNeedsSignIn: "Войдите, чтобы создать динамический QR.",
		dynamicCreated: "Динамический QR создан",
		dynamicOffline: "Для динамического QR нужен интернет.",
		dynTitle: "Динамические QR",
		dynEmpty: "Динамических QR пока нет. Включите «Динамический QR» при создании.",
		scans: "Сканы",
		last30: "Последние 30 дней",
		devices: "Устройства",
		systems: "Системы",
		countries: "Страны",
		countryNA: "Данные о странах пока недоступны.",
		destination: "Ссылка назначения",
		active: "Активен",
		expires: "Срок действия",
		scanLimit: "Лимит сканов",
		noLimit: "Без лимита",
		save: "Сохранить",
		savedOk: "Сохранено",
		copyLink: "Копировать ссылку",
		confirmDeleteLink: "Удалить динамический QR? Напечатанный код перестанет работать.",
		shortLink: "Короткая ссылка",
		bcTitle: "Генератор штрихкодов",
		bcFormat: "Формат",
		bcValue: "Содержимое",
		bcInvalid: "Неверное содержимое для этого формата.",
		bcHintEan: "12 или 13 цифр",
		bcHintUpc: "11 или 12 цифр",
		bcHintCode128: "Любой текст (ASCII)",
		bcHintDm: "Любой текст",
		batTitle: "Пакет QR",
		batBody: "По одной ссылке или тексту в строке. Или «имя,содержимое» (CSV). Применяется текущий дизайн.",
		batImport: "Импорт CSV/TXT",
		batGenerate: "Создать ZIP",
		batCount: "{n} QR",
		batDone: "{n} QR добавлено в ZIP",
		batMax: "Максимум {n} строк за раз.",
		scanNative: "Открыть камеру",
		scanning: "Наведите камеру на QR",
		cancel: "Закрыть",
		permission: "Нужен доступ к камере. Разрешите в настройках.",
		settings: "Настройки",
		warnTitle: "Осторожно: ссылка может быть подозрительной",
		warnShort: "Сокращённая ссылка — настоящий адрес скрыт.",
		warnIp: "Вместо домена используется IP-адрес.",
		warnHttp: "Незашифрованное соединение (http).",
		warnPuny: "Спецсимволы для имитации другого сайта (punycode).",
		warnAt: "В ссылке есть «@» — адрес может вводить в заблуждение.",
		warnTld: "Доменная зона, часто используемая для спама.",
		openAnyway: "Всё равно открыть",
		safeLink: "Проблем не найдено",
		wifiNetwork: "Сеть",
		wifiPassword: "Пароль",
		copyPassword: "Копировать пароль",
		wifiSettings: "Настройки Wi-Fi",
		wifiHint: "Скопируйте пароль и выберите сеть в настройках Wi-Fi.",
		addContact: "Добавить в контакты",
		addEvent: "Добавить в календарь",
		call: "Позвонить",
		sendEmail: "Написать email",
		share: "Поделиться",
		batchScan: "Пакетный скан",
		batchScanHint: "Сканируйте коды подряд, затем поделитесь списком.",
		batchCount: "Отсканировано: {n}",
		finish: "Готово",
		historyFree: "В бесплатном тарифе хранятся последние {n} сканов.",
		signedOut: "Вы не вошли",
		signInHint: "Вход необязателен. Нужен для Pro, динамических QR и синхронизации.",
		signOut: "Выйти",
		plan: "Тариф",
		offline: "Не удалось подключиться к серверу. Проверьте интернет.",
		notConfigured: "В этой сборке сервер не настроен.",
		language: "Язык",
		theme: "Тема",
		dark: "Тёмная",
		light: "Светлая",
		dynamicWeb: "Динамический QR можно менять после печати, он считает сканы (Pro).",
		proFeature: "Функция Pro",
		about: "О приложении",
		madeBy: "Разработчик: Nibras Code",
		privacyWeb: "Открыть веб-версию",
		deleteAccount: "Удалить аккаунт",
		deleteBody: "Аккаунт, QR-коды в облаке, динамические ссылки (напечатанные коды перестанут работать) и статистика сканов будут удалены навсегда. QR-коды на устройстве останутся. Подписка не отменяется автоматически — отмените её в Google Play.",
		deleteConfirm: "Да, удалить навсегда",
		deleteDone: "Аккаунт удалён",
		deleteFailed: "Не удалось удалить аккаунт. Проверьте интернет и попробуйте снова."
	},
	tr: {
		home: "Ana sayfa",
		library: "Kitaplık",
		saved: "Kaydedilenler",
		account: "Hesap",
		hello: "Merhaba 👋",
		heroTitle: "Göz alıcı QR'lar, saniyeler içinde",
		heroBody: "Oluştur, tasarla, tara. İnternetsiz de çalışır.",
		tools: "Araçlar",
		toolCreate: "QR oluştur",
		toolScan: "Tara",
		toolBarcode: "Barkod",
		toolBatch: "Toplu QR",
		toolDynamic: "Dinamik QR",
		toolTemplates: "Şablonlar",
		recent: "Son QR'lar",
		seeAll: "Tümü",
		proBannerTitle: "Nibras QR Pro",
		proBannerBody: "Dinamik QR, istatistik, logo, toplu oluşturma, bulut ve sınırsız kayıt.",
		proBannerCta: "Pro'yu keşfet",
		proActive: "Pro aktif",
		o1Title: "Her şey için QR",
		o1Body: "Link, Wi-Fi, kartvizit, WhatsApp, etkinlik ve fazlası — 11 tür, internetsiz.",
		o2Title: "Akıllı ve güvenli tarayıcı",
		o2Body: "Şüpheli linklere uyarı; Wi-Fi, kişi ve etkinliği tek dokunuşla ekle.",
		o3Title: "Pro ile öne çık",
		o3Body: "Baskıdan sonra değişen dinamik QR, tarama istatistiği, logo, çerçeve ve premium şablonlar.",
		next: "İleri",
		start: "Başla",
		skip: "Geç",
		pwTitle: "Pro ile sınırsız",
		pwSubtitle: "Tek abonelik, tüm Pro özellikleri. Google Play'den istediğin zaman iptal et.",
		compare: "Karşılaştırma",
		free: "Ücretsiz",
		pro: "Pro",
		rDynamic: "Dinamik QR (baskıdan sonra değiştir)",
		rStats: "Tarama istatistikleri",
		rDesign: "Logo, gradyan, şekiller, çerçeve",
		rTemplates: "Premium şablon paketleri",
		rBatch: "Toplu QR + ZIP",
		rBarcode: "Barkod (EAN, UPC, Code128, Data Matrix)",
		rCloud: "Bulut senkronizasyonu ve etiketler",
		rExport: "SVG/PDF, yüksek kalite",
		rSaved: "Kayıtlı QR",
		rHistory: "Tarama geçmişi",
		rBatchScan: "Toplu tarama modu",
		unlimited: "Sınırsız",
		bestValue: "En avantajlı",
		monthly: "Aylık",
		yearly: "Yıllık",
		lifetime: "Ömür boyu",
		perMonthApprox: "≈ {price}/ay",
		oneTime: "tek seferlik",
		continue: "Devam et",
		restore: "Satın alımları geri yükle",
		restored: "Satın alımlar geri yüklendi",
		nothingToRestore: "Geri yüklenecek aktif satın alım bulunamadı",
		purchaseDone: "Tebrikler! Pro aktif 🎉",
		storeUnavailable: "Mağaza hazır değil. Uygulamayı Google Play'den yükle ve internete bağlan.",
		noPackages: "Fiyatlar yüklenemedi. Biraz sonra tekrar dene.",
		manage: "Aboneliği yönet",
		legal: "Abonelik otomatik yenilenir, Google Play'den iptal edilebilir.",
		signInTip: "Pro'yu tüm cihazlarda kullanmak için önce giriş yap.",
		close: "Kapat",
		savedEmpty: "Henüz kayıtlı QR yok. Oluştur bölümünde «Kaydet»e bas.",
		savedLocal: "QR'lar bu cihazda saklanır, internet gerekmez.",
		open: "Aç",
		newQr: "Yeni QR",
		deleted: "Silindi",
		confirmDelete: "Bu QR silinsin mi?",
		tags: "Etiketler",
		addTag: "Etiket ekle",
		all: "Tümü",
		limitReached: "Ücretsiz planda {n} QR kaydedilebilir. Sınırsız için Pro.",
		cloud: "Bulut",
		syncNow: "Şimdi senkronize et",
		syncing: "Senkronize ediliyor…",
		synced: "Senkronize edildi",
		syncPro: "Bulut yedekleme ve cihazlar arası senkronizasyon Pro'da.",
		syncSignIn: "Bulut senkronizasyonu için giriş yap.",
		history: "Geçmiş",
		dynamic: "Dinamik QR",
		dynamicHint: "Baskıdan sonra linki değiştir, taramaları izle.",
		dynamicNeedsUrl: "Dinamik QR yalnızca http(s) link ile çalışır.",
		dynamicNeedsSignIn: "Dinamik QR için giriş yap.",
		dynamicCreated: "Dinamik QR oluşturuldu",
		dynamicOffline: "Dinamik QR için internet gerekir.",
		dynTitle: "Dinamik QR'lar",
		dynEmpty: "Henüz dinamik QR yok. Oluştur bölümünde «Dinamik QR»ı aç.",
		scans: "Tarama",
		last30: "Son 30 gün",
		devices: "Cihazlar",
		systems: "Sistemler",
		countries: "Ülkeler",
		countryNA: "Ülke verisi henüz mevcut değil.",
		destination: "Yönlendirme linki",
		active: "Aktif",
		expires: "Bitiş tarihi",
		scanLimit: "Tarama limiti",
		noLimit: "Sınırsız",
		save: "Kaydet",
		savedOk: "Kaydedildi",
		copyLink: "Linki kopyala",
		confirmDeleteLink: "Bu dinamik QR silinsin mi? Basılı kod çalışmayacak.",
		shortLink: "Kısa link",
		bcTitle: "Barkod oluşturucu",
		bcFormat: "Format",
		bcValue: "İçerik",
		bcInvalid: "Bu format için içerik geçersiz.",
		bcHintEan: "12 veya 13 rakam",
		bcHintUpc: "11 veya 12 rakam",
		bcHintCode128: "Herhangi bir metin (ASCII)",
		bcHintDm: "Herhangi bir metin",
		batTitle: "Toplu QR",
		batBody: "Her satıra bir link veya metin. İstersen «ad,içerik» (CSV). Mevcut tasarım uygulanır.",
		batImport: "CSV/TXT içe aktar",
		batGenerate: "ZIP oluştur",
		batCount: "{n} QR",
		batDone: "{n} QR ZIP'e eklendi",
		batMax: "Bir seferde en fazla {n} satır.",
		scanNative: "Kamerayı aç",
		scanning: "Kamerayı QR'a tut",
		cancel: "Kapat",
		permission: "Kamera izni gerekli. Ayarlardan izin ver.",
		settings: "Ayarlar",
		warnTitle: "Dikkat: bu link şüpheli olabilir",
		warnShort: "Kısaltılmış link — gerçek adres gizli.",
		warnIp: "Alan adı yerine IP adresi kullanılmış.",
		warnHttp: "Şifrelenmemiş bağlantı (http).",
		warnPuny: "Başka bir siteyi taklit eden özel karakterler (punycode).",
		warnAt: "Linkte «@» var — yanıltıcı adres olabilir.",
		warnTld: "Spam için sık kullanılan alan adı uzantısı.",
		openAnyway: "Yine de aç",
		safeLink: "Sorun bulunamadı",
		wifiNetwork: "Ağ",
		wifiPassword: "Şifre",
		copyPassword: "Şifreyi kopyala",
		wifiSettings: "Wi-Fi ayarları",
		wifiHint: "Şifreyi kopyala, ardından Wi-Fi ayarlarından ağı seç.",
		addContact: "Kişilere ekle",
		addEvent: "Takvime ekle",
		call: "Ara",
		sendEmail: "E-posta yaz",
		share: "Paylaş",
		batchScan: "Toplu tarama",
		batchScanHint: "Kodları art arda tara, sonra listeyi paylaş.",
		batchCount: "{n} kod tarandı",
		finish: "Bitir",
		historyFree: "Ücretsiz planda son {n} tarama saklanır.",
		signedOut: "Giriş yapılmadı",
		signInHint: "Giriş isteğe bağlıdır. Pro, dinamik QR ve bulut senkronizasyonu için gerekir.",
		signOut: "Çıkış",
		plan: "Plan",
		offline: "Sunucuya bağlanılamadı. İnterneti kontrol et.",
		notConfigured: "Bu sürümde sunucu yapılandırılmamış.",
		language: "Dil",
		theme: "Görünüm",
		dark: "Koyu",
		light: "Açık",
		dynamicWeb: "Dinamik QR baskıdan sonra değiştirilebilir ve taramaları sayar (Pro).",
		proFeature: "Pro özelliği",
		about: "Hakkında",
		madeBy: "Hazırlayan: Nibras Code",
		privacyWeb: "Web sürümünü aç",
		deleteAccount: "Hesabı sil",
		deleteBody: "Hesabın, buluttaki QR'lar, dinamik linkler (basılı kodlar çalışmayacak) ve tarama istatistikleri kalıcı olarak silinecek. Cihazdaki QR'lar kalır. Abonelik otomatik iptal edilmez — Google Play'den iptal et.",
		deleteConfirm: "Evet, kalıcı olarak sil",
		deleteDone: "Hesap silindi",
		deleteFailed: "Hesap silinemedi. İnternet bağlantını kontrol edip tekrar dene."
	}
};
var WEB_STRINGS = {
	az: {
		title: "Nibras QR — onlayn QR generator",
		lead: "QR kod düzəlt, dizayn et, skan et. Hər şey brauzerində işləyir — heç nə serverə göndərilmir.",
		tabCreate: "Düzəlt",
		tabTemplates: "Şablonlar",
		tabScan: "Skan",
		tabBarcode: "Barkod",
		tabSaved: "Saxlanılanlar",
		lockTitle: "Nibras QR Pro",
		lockBody: "Bütün Pro funksiyalarını vebdə aç: loqo, gradientlər, premium şablonlar, SVG/PDF eksport, barkodlar və limitsiz saxlama. Birdəfəlik ödəniş, abunə yoxdur.",
		lockSignIn: "Almaq üçün əvvəlcə Google ilə daxil ol. Tətbiqdə artıq Pro-san? Eyni hesabla daxil ol — Pro burada da açılacaq.",
		getApp: "Tətbiqi yüklə",
		signIn: "Google ilə daxil ol",
		signOut: "Çıxış",
		proActive: "Pro aktivdir",
		freePlan: "Pulsuz plan",
		localNote: "QR-lər bu brauzerdə saxlanılır.",
		appPage: "Android tətbiqi",
		privacy: "Məxfilik",
		edit: "Redaktə",
		plan1y: "1 il",
		plan1yNote: "Dinamik QR üçün ən yaxşısı",
		planLife: "Ömürlük",
		planLifeNote: "Bir dəfə ödə, həmişəlik istifadə et",
		oneTime: "birdəfəlik",
		buy: "Al",
		appNote: "Vebdə alınan Pro eyni Google hesabı ilə Android tətbiqində də işləyir.",
		payError: "Ödəniş səhifəsi açılmadı. Bir az sonra yenidən cəhd et.",
		purchaseThanks: "Təşəkkürlər! Ödəniş təsdiqlənən kimi Pro aktivləşəcək.",
		securePay: "Təhlükəsiz ödəniş: Lemon Squeezy",
		camBlocked: "Kameraya icazə bloklanıb. Ünvan sətrindəki kilid işarəsinə toxun → Kamera → İcazə ver, sonra yenidən cəhd et.",
		camNone: "Kamera tapılmadı. Şəkil yükləyərək skan et.",
		term1y: "1 il üçün",
		termLife: "həmişəlik"
	},
	en: {
		title: "Nibras QR — online QR generator",
		lead: "Create, design and scan QR codes. Everything runs in your browser — nothing is sent to a server.",
		tabCreate: "Create",
		tabTemplates: "Templates",
		tabScan: "Scan",
		tabBarcode: "Barcode",
		tabSaved: "Saved",
		lockTitle: "Nibras QR Pro",
		lockBody: "Unlock every Pro feature on the web: logos, gradients, premium templates, SVG/PDF export, barcodes and unlimited saves. One-time payment, no subscription.",
		lockSignIn: "Sign in with Google first to buy. Already Pro in the app? Sign in with the same account and Pro unlocks here too.",
		getApp: "Get the app",
		signIn: "Sign in with Google",
		signOut: "Sign out",
		proActive: "Pro is active",
		freePlan: "Free plan",
		localNote: "QRs are stored in this browser.",
		appPage: "Android app",
		privacy: "Privacy",
		edit: "Edit",
		plan1y: "1 Year",
		plan1yNote: "Best for dynamic QR",
		planLife: "Lifetime",
		planLifeNote: "Pay once, use forever",
		oneTime: "one-time",
		buy: "Buy",
		appNote: "Pro bought on the web also works in the Android app with the same Google account.",
		payError: "Couldn't open checkout. Please try again in a moment.",
		purchaseThanks: "Thank you! Pro will activate as soon as the payment is confirmed.",
		securePay: "Secure checkout by Lemon Squeezy",
		camBlocked: "Camera access is blocked. Tap the lock icon in the address bar → Camera → Allow, then try again.",
		camNone: "No camera found. Scan by uploading an image instead.",
		term1y: "for 1 year",
		termLife: "forever"
	},
	tr: {
		title: "Nibras QR — çevrimiçi QR oluşturucu",
		lead: "QR kod oluştur, tasarla, tara. Her şey tarayıcında çalışır — hiçbir şey sunucuya gönderilmez.",
		tabCreate: "Oluştur",
		tabTemplates: "Şablonlar",
		tabScan: "Tara",
		tabBarcode: "Barkod",
		tabSaved: "Kaydedilenler",
		lockTitle: "Nibras QR Pro",
		lockBody: "Tüm Pro özelliklerini web'de aç: logo, gradyanlar, premium şablonlar, SVG/PDF dışa aktarma, barkodlar ve sınırsız kayıt. Tek seferlik ödeme, abonelik yok.",
		lockSignIn: "Satın almak için önce Google ile giriş yap. Uygulamada zaten Pro musun? Aynı hesapla giriş yap — Pro burada da açılır.",
		getApp: "Uygulamayı indir",
		signIn: "Google ile giriş yap",
		signOut: "Çıkış",
		proActive: "Pro aktif",
		freePlan: "Ücretsiz plan",
		localNote: "QR'lar bu tarayıcıda saklanır.",
		appPage: "Android uygulaması",
		privacy: "Gizlilik",
		edit: "Düzenle",
		plan1y: "1 Yıl",
		plan1yNote: "Dinamik QR için en iyisi",
		planLife: "Ömür boyu",
		planLifeNote: "Bir kez öde, sonsuza dek kullan",
		oneTime: "tek seferlik",
		buy: "Satın al",
		appNote: "Web'de alınan Pro, aynı Google hesabıyla Android uygulamasında da çalışır.",
		payError: "Ödeme sayfası açılamadı. Lütfen birazdan tekrar dene.",
		purchaseThanks: "Teşekkürler! Ödeme onaylanır onaylanmaz Pro etkinleşecek.",
		securePay: "Güvenli ödeme: Lemon Squeezy",
		camBlocked: "Kamera erişimi engellendi. Adres çubuğundaki kilit simgesine dokun → Kamera → İzin ver, sonra tekrar dene.",
		camNone: "Kamera bulunamadı. Bunun yerine resim yükleyerek tara.",
		term1y: "1 yıl için",
		termLife: "ömür boyu"
	},
	ar: {
		title: "Nibras QR — مولّد رموز QR عبر الإنترنت",
		lead: "أنشئ رموز QR وصمّمها وامسحها. كل شيء يعمل في متصفحك — لا يُرسَل شيء إلى أي خادم.",
		tabCreate: "إنشاء",
		tabTemplates: "القوالب",
		tabScan: "مسح",
		tabBarcode: "باركود",
		tabSaved: "المحفوظة",
		lockTitle: "Nibras QR Pro",
		lockBody: "افتح كل ميزات Pro على الويب: الشعار، التدرّجات، القوالب المميزة، تصدير SVG/PDF، الباركود والحفظ غير المحدود. دفعة واحدة بلا اشتراك.",
		lockSignIn: "سجّل الدخول بحساب Google أولاً للشراء. لديك Pro في التطبيق؟ سجّل الدخول بالحساب نفسه ليُفتح Pro هنا أيضاً.",
		getApp: "حمّل التطبيق",
		signIn: "تسجيل الدخول عبر Google",
		signOut: "تسجيل الخروج",
		proActive: "Pro مفعّل",
		freePlan: "الخطة المجانية",
		localNote: "تُحفظ الرموز في هذا المتصفح.",
		appPage: "تطبيق أندرويد",
		privacy: "الخصوصية",
		edit: "تعديل",
		plan1y: "سنة واحدة",
		plan1yNote: "الأفضل لرموز QR الديناميكية",
		planLife: "مدى الحياة",
		planLifeNote: "ادفع مرة واستخدم للأبد",
		oneTime: "دفعة واحدة",
		buy: "شراء",
		appNote: "Pro الذي تشتريه على الويب يعمل أيضاً في تطبيق أندرويد بحساب Google نفسه.",
		payError: "تعذّر فتح صفحة الدفع. حاول مجدداً بعد قليل.",
		purchaseThanks: "شكراً لك! سيتم تفعيل Pro فور تأكيد الدفع.",
		securePay: "دفع آمن عبر Lemon Squeezy",
		camBlocked: "الوصول إلى الكاميرا محظور. اضغط على رمز القفل في شريط العنوان ← الكاميرا ← سماح، ثم حاول مجدداً.",
		camNone: "لم يتم العثور على كاميرا. امسح برفع صورة بدلاً من ذلك.",
		term1y: "لمدة سنة",
		termLife: "مدى الحياة"
	},
	ru: {
		title: "Nibras QR — онлайн-генератор QR-кодов",
		lead: "Создавайте, оформляйте и сканируйте QR-коды. Всё работает в браузере — ничего не отправляется на сервер.",
		tabCreate: "Создать",
		tabTemplates: "Шаблоны",
		tabScan: "Скан",
		tabBarcode: "Штрихкод",
		tabSaved: "Сохранённые",
		lockTitle: "Nibras QR Pro",
		lockBody: "Откройте все функции Pro в вебе: логотип, градиенты, премиум-шаблоны, экспорт SVG/PDF, штрихкоды и безлимитное сохранение. Разовый платёж, без подписки.",
		lockSignIn: "Чтобы купить, сначала войдите через Google. Уже есть Pro в приложении? Войдите тем же аккаунтом — Pro откроется и здесь.",
		getApp: "Скачать приложение",
		signIn: "Войти через Google",
		signOut: "Выйти",
		proActive: "Pro активен",
		freePlan: "Бесплатный план",
		localNote: "QR-коды хранятся в этом браузере.",
		appPage: "Android-приложение",
		privacy: "Конфиденциальность",
		edit: "Изменить",
		plan1y: "1 год",
		plan1yNote: "Лучше всего для динамических QR",
		planLife: "Навсегда",
		planLifeNote: "Заплатите один раз — пользуйтесь всегда",
		oneTime: "разово",
		buy: "Купить",
		appNote: "Pro, купленный на сайте, работает и в Android-приложении с тем же аккаунтом Google.",
		payError: "Не удалось открыть оплату. Попробуйте ещё раз чуть позже.",
		purchaseThanks: "Спасибо! Pro активируется сразу после подтверждения оплаты.",
		securePay: "Безопасная оплата через Lemon Squeezy",
		camBlocked: "Доступ к камере заблокирован. Нажмите на значок замка в адресной строке → Камера → Разрешить и попробуйте снова.",
		camNone: "Камера не найдена. Отсканируйте, загрузив изображение.",
		term1y: "на 1 год",
		termLife: "навсегда"
	}
};
/** QR tool strings follow the site language (same 5 languages as the app). */
function useI18n() {
	const { lang, setLang } = useI18n$1();
	const l = lang;
	return {
		lang: l,
		setLang,
		t: QR_DICT[l],
		m: MOBILE_STRINGS[l],
		w: WEB_STRINGS[l]
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/library-DvTLwkF8.js
var LIBRARY = {
	resources: {
		title: "nav_resources",
		topics: [
			{
				slug: "pdf",
				label: "res_pdf"
			},
			{
				slug: "ereb-dili",
				label: "res_arabic"
			},
			{
				slug: "android",
				label: "res_android"
			},
			{
				slug: "fayl-aletleri",
				label: "res_files"
			},
			{
				slug: "tehsil",
				label: "res_edu"
			},
			{
				slug: "senedler",
				label: "res_docs"
			}
		]
	},
	guides: {
		title: "nav_guides",
		topics: [
			{
				slug: "pdf",
				label: "guide_pdf"
			},
			{
				slug: "android",
				label: "guide_android"
			},
			{
				slug: "ereb-dili",
				label: "guide_arabic"
			}
		]
	},
	programming: {
		title: "nav_programming",
		topics: [
			{
				slug: "python",
				label: "prog_python"
			},
			{
				slug: "python-qurasdir",
				label: "prog_python_setup"
			},
			{
				slug: "javascript",
				label: "prog_javascript"
			},
			{
				slug: "java",
				label: "prog_java"
			},
			{
				slug: "java-qurasdir",
				label: "prog_java_setup"
			},
			{
				slug: "csharp",
				label: "prog_csharp"
			},
			{
				slug: "csharp-qurasdir",
				label: "prog_csharp_setup"
			},
			{
				slug: "typescript",
				label: "prog_typescript"
			},
			{
				slug: "html-css",
				label: "prog_html"
			},
			{
				slug: "apk-hazirla",
				label: "prog_apk_make"
			},
			{
				slug: "sql",
				label: "prog_sql"
			},
			{
				slug: "sql-qurasdir",
				label: "prog_sql_setup"
			},
			{
				slug: "go",
				label: "prog_go"
			},
			{
				slug: "php",
				label: "prog_php"
			},
			{
				slug: "kotlin",
				label: "prog_kotlin"
			},
			{
				slug: "cpp",
				label: "prog_cpp"
			},
			{
				slug: "rust",
				label: "prog_rust"
			},
			{
				slug: "ubuntu",
				label: "prog_ubuntu"
			},
			{
				slug: "java-17",
				label: "prog_java17"
			},
			{
				slug: "nodejs",
				label: "prog_node"
			},
			{
				slug: "node-qurasdir",
				label: "prog_node_setup"
			},
			{
				slug: "android-sdk",
				label: "prog_android_sdk"
			},
			{
				slug: "gradle",
				label: "prog_gradle"
			},
			{
				slug: "capacitor",
				label: "prog_capacitor"
			},
			{
				slug: "docker",
				label: "prog_docker"
			},
			{
				slug: "nginx",
				label: "prog_nginx"
			},
			{
				slug: "ssl",
				label: "prog_ssl"
			},
			{
				slug: "firewall",
				label: "prog_firewall"
			},
			{
				slug: "git",
				label: "prog_git"
			},
			{
				slug: "bash",
				label: "prog_bash"
			},
			{
				slug: "json",
				label: "prog_json"
			},
			{
				slug: "react",
				label: "prog_react"
			},
			{
				slug: "c",
				label: "prog_c"
			},
			{
				slug: "mysql",
				label: "prog_mysql"
			},
			{
				slug: "http",
				label: "prog_http"
			},
			{
				slug: "linux",
				label: "prog_linux"
			},
			{
				slug: "ssh",
				label: "prog_ssh"
			},
			{
				slug: "dns",
				label: "prog_dns"
			},
			{
				slug: "npm",
				label: "prog_npm"
			},
			{
				slug: "redis",
				label: "prog_redis"
			},
			{
				slug: "cron",
				label: "prog_cron"
			},
			{
				slug: "pip",
				label: "prog_pip"
			},
			{
				slug: "sqlite",
				label: "prog_sqlite"
			},
			{
				slug: "curl",
				label: "prog_curl"
			},
			{
				slug: "composer",
				label: "prog_composer"
			},
			{
				slug: "cargo",
				label: "prog_cargo"
			},
			{
				slug: "make",
				label: "prog_make"
			},
			{
				slug: "maven",
				label: "prog_maven"
			},
			{
				slug: "yaml",
				label: "prog_yaml"
			},
			{
				slug: "systemd",
				label: "prog_systemd"
			},
			{
				slug: "postgresql",
				label: "prog_postgresql"
			},
			{
				slug: "markdown",
				label: "prog_markdown"
			},
			{
				slug: "rsync",
				label: "prog_rsync"
			},
			{
				slug: "git-github",
				label: "prog_git_github"
			},
			{
				slug: "api",
				label: "prog_api"
			},
			{
				slug: "python-javascript",
				label: "prog_python_js"
			},
			{
				slug: "localhost",
				label: "prog_localhost"
			},
			{
				slug: "frontend-backend",
				label: "prog_frontend"
			},
			{
				slug: "framework",
				label: "prog_framework"
			},
			{
				slug: "terminal",
				label: "prog_terminal"
			},
			{
				slug: "deploy",
				label: "prog_deploy"
			}
		]
	}
};
function findTopic(section, slug) {
	return LIBRARY[section].topics.find((topic) => topic.slug === slug) ?? null;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/home-bars-DVduxXHi.js
var BAR_GROUPS = {
	g1: {
		az: "Alətlər",
		en: "Tools",
		tr: "Araçlar",
		ru: "Инструменты",
		ar: "أدوات"
	},
	g2: {
		az: "Studio",
		en: "Studio",
		tr: "Studio",
		ru: "Студия",
		ar: "الاستوديو"
	},
	g3: {
		az: "Öyrənmə",
		en: "Learn",
		tr: "Öğrenme",
		ru: "Обучение",
		ar: "التعلّم"
	}
};
var BAR = {
	dev: {
		az: "Kod yaz",
		en: "Write code",
		tr: "Kod yaz",
		ar: "اكتب كوداً",
		ru: "Пиши код"
	},
	apk: {
		az: "APK hazırla",
		en: "Make an APK",
		tr: "APK hazırla",
		ar: "اصنع APK",
		ru: "Собрать APK"
	},
	pdf: {
		az: "PDF hazırla",
		en: "Make a PDF",
		tr: "PDF hazırla",
		ar: "جهّز PDF",
		ru: "Сделать PDF"
	},
	audio: {
		az: "Səs yaz",
		en: "Record audio",
		tr: "Ses kaydet",
		ar: "سجّل الصوت",
		ru: "Записать звук"
	},
	video: {
		az: "Video kəs",
		en: "Edit video",
		tr: "Video düzenle",
		ar: "حرّر الفيديو",
		ru: "Видео"
	},
	qr: {
		az: "QR hazırla",
		en: "Make a QR",
		tr: "QR hazırla",
		ar: "جهّز QR",
		ru: "Сделать QR"
	},
	erase: {
		az: "Fon sil",
		en: "Remove background",
		tr: "Arka plan sil",
		ar: "احذف الخلفية",
		ru: "Удалить фон"
	},
	image: {
		az: "Şəkil sıx",
		en: "Compress photo",
		tr: "Foto sıkıştır",
		ar: "ضغط الصورة",
		ru: "Сжать фото"
	},
	calc: {
		az: "Hesabla",
		en: "Calculate",
		tr: "Hesapla",
		ar: "احسب",
		ru: "Посчитай"
	},
	seo: {
		az: "SEO yoxla",
		en: "Check SEO",
		tr: "SEO bak",
		ar: "فحص SEO",
		ru: "Проверить SEO"
	},
	flow: {
		az: "Plan hazırla",
		en: "Make a plan",
		tr: "Plan hazırla",
		ar: "جهّز خطة",
		ru: "Собрать план"
	},
	logic: {
		az: "Sual qur",
		en: "Build questions",
		tr: "Soru kur",
		ar: "ابنِ أسئلة",
		ru: "Собрать вопросы"
	},
	unknown: {
		az: "Sirr",
		en: "Secret",
		tr: "Sır",
		ar: "سر",
		ru: "Тайна"
	},
	studio: {
		az: "Studio paneli",
		en: "Studio panel",
		tr: "Studio paneli",
		ar: "لوحة Studio",
		ru: "Панель Studio"
	},
	learn: {
		az: "Dərslər",
		en: "Lessons",
		tr: "Dersler",
		ar: "الدروس",
		ru: "Уроки"
	},
	doctor: {
		az: "Sayt yoxla",
		en: "Site Doctor",
		tr: "Site kontrolü",
		ar: "فحص الموقع",
		ru: "Проверка сайта"
	},
	errorHelp: {
		az: "Xəta yardımı",
		en: "Error Help",
		tr: "Hata yardımı",
		ar: "مساعدة الأخطاء",
		ru: "Помощь с ошибками"
	},
	logicLab: {
		az: "Məntiq",
		en: "Logic Lab",
		tr: "Mantık",
		ar: "المنطق",
		ru: "Логика"
	},
	mirror: {
		az: "Sayt güzgüsü",
		en: "Site Mirror",
		tr: "Site aynası",
		ar: "مرآة الموقع",
		ru: "Зеркало сайта"
	},
	shortcuts: {
		az: "Qısayollar",
		en: "Shortcuts",
		tr: "Kısayollar",
		ar: "الاختصارات",
		ru: "Горячие клавиши"
	},
	schema: {
		az: "Sxem",
		en: "Schema",
		tr: "Şema",
		ar: "المخطط",
		ru: "Схема"
	},
	filecheck: {
		az: "Fayl yoxla",
		en: "File Check",
		tr: "Dosya kontrolü",
		ar: "فحص الملف",
		ru: "Проверка файла"
	}
};
var NEW_TAB = {
	az: "yeni pəncərədə açılır",
	en: "opens in a new tab",
	tr: "yeni sekmede açılır",
	ar: "يفتح في علامة تبويب جديدة",
	ru: "откроется в новой вкладке"
};
var GROUP_CLASS = {
	g1: "tools",
	g2: "studio",
	g3: "learn"
};
var MORE$1 = {
	az: "Daha çox",
	en: "More",
	tr: "Daha fazla",
	ar: "المزيد",
	ru: "Ещё"
};
function groupPath(lang, group) {
	return groupLocalePath(lang, group);
}
/** All bars per group, most important first (homepage shows the first HOME_LIMIT). */
function barItems(lang) {
	return {
		g1: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-ai-bar",
				href: localeHref(lang, "/ai"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/nibras-ai.webp",
					alt: "",
					width: 40,
					height: 36,
					decoding: "async"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nibras AI" })]
			}, "/ai"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-ai-bar nx-qr-bar",
				href: localeHref(lang, "/pdf"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-job nx-job-pdf",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M7 3.2h6.6L19 8.4V20a1.4 1.4 0 0 1-1.4 1.4H7.4A1.4 1.4 0 0 1 6 20V4.6A1.4 1.4 0 0 1 7.4 3.2H7Z",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M13.4 3.4V8H18",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M8.2 12.6h1.8a1.3 1.3 0 0 1 0 2.6H8.2v2.4M12.2 17.6v-5h1.6a1.5 1.5 0 0 1 0 3h-1.6M16.1 12.6H18.4M16.1 15h1.6M16.1 17.6v-5",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.25",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nx-qr-text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: BAR.pdf[lang] })
				})]
			}, "/pdf"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-ai-bar nx-qr-bar",
				href: localeHref(lang, "/qr"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-job nx-job-qr",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M4 4h6.2v6.2H4zM13.8 4H20v6.2h-6.2zM4 13.8h6.2V20H4z",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M6.1 6.1h1.9v1.9H6.1zM15.9 6.1h1.9v1.9h-1.9zM6.1 16h1.9v1.9H6.1zM14.2 14.2h1.7v1.7h-1.7zM17.6 14.2H20v1.7h-2.4zM14.2 17.6h1.7V20h-1.7zM17.6 17.6H20V20h-2.4z",
						fill: "currentColor"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nx-qr-text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: BAR.qr[lang] })
				})]
			}, "/qr"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-ai-bar nx-qr-bar",
				href: "/audio",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-job nx-job-audio",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M4 14v-2a8 8 0 0 1 16 0v2",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M4 14h3v6H5.4A1.4 1.4 0 0 1 4 18.6zM20 14h-3v6h1.6a1.4 1.4 0 0 0 1.4-1.4z",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinejoin: "round"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nx-qr-text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: BAR.audio[lang] })
				})]
			}, "/audio"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-ai-bar nx-qr-bar",
				href: localeHref(lang, "/video"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-job nx-job-video",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "3",
						y: "6",
						width: "13",
						height: "12",
						rx: "1.6",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M16 10.5l5-3v9l-5-3z",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinejoin: "round"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nx-qr-text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: BAR.video[lang] })
				})]
			}, "/video"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-ai-bar nx-qr-bar",
				href: localeHref(lang, "/erase"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-job nx-job-erase",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "3",
							y: "4",
							width: "12.5",
							height: "11",
							rx: "1.6",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "6.6",
							cy: "7.6",
							r: "1.1",
							fill: "currentColor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M3.6 13.4 7.4 10l2.6 2 2-1.4 2.6 2.5",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.3",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "m14.6 12.6 4.8 4.8a1.5 1.5 0 0 1 0 2.1l-.3.3a1.5 1.5 0 0 1-2.1 0l-4.8-4.8",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6",
							strokeLinejoin: "round"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nx-qr-text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: BAR.erase[lang] })
				})]
			}, "/erase"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-ai-bar nx-qr-bar",
				href: localeHref(lang, "/image"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-job nx-job-image",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "3.5",
							y: "5",
							width: "17",
							height: "14",
							rx: "2",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M7.2 15.4 10.4 12l2.2 1.8 2.8-2.6",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M8.2 8.4h2.4M8.2 8.4v2.4M15.8 15.6h-2.4M15.8 15.6v-2.4",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nx-qr-text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: BAR.image[lang] })
				})]
			}, "/image"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-ai-bar nx-qr-bar",
				href: localeHref(lang, "/calc"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "4",
						y: "2.5",
						width: "16",
						height: "19",
						rx: "2.2",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "currentColor",
						d: "M7 5.5h10v3.2H7zM7.2 11h2.3v2.2H7.2zm3.6 0h2.3v2.2h-2.3zm3.7 0H17v2.2h-2.5zM7.2 14.6h2.3V16.8H7.2zm3.6 0h2.3V16.8h-2.3zm3.7 0H17V16.8h-2.5z"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nx-qr-text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: BAR.calc[lang] })
				})]
			}, "/calc"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-ai-bar nx-qr-bar",
				href: localeHref(lang, "/flow"),
				"data-testid": "home-flow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M5 7h6M5 12h10M5 17h14",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nx-qr-text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: BAR.flow[lang] })
				})]
			}, "/flow"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-ai-bar nx-qr-bar",
				href: localeHref(lang, "/logic"),
				"data-testid": "home-logic",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M6 7h8M14 7v4H8M8 11v4h8",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nx-qr-text",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: BAR.logic[lang] })
				})]
			}, "/logic")
		],
		g2: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-studio-bar",
				href: "https://dev.nibrascode.com",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": `${BAR.dev[lang]} (${NEW_TAB[lang]})`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-term",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "3",
						y: "4",
						width: "18",
						height: "16",
						rx: "3",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M7 9.2 10.2 12 7 14.8M12.2 15h5",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					BAR.dev[lang],
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "nx-ext",
						"aria-hidden": "true",
						children: "↗"
					})
				] })]
			}, "https://dev.nibrascode.com"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: "https://studio.nibrascode.com",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": `${BAR.apk[lang]} (${NEW_TAB[lang]})`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "7",
							y: "2.4",
							width: "10",
							height: "19.2",
							rx: "2",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M10 5.2h4M10.2 18.4h3.6",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M12 8.2v4.2M10.2 10.4 12 12.4l1.8-2",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					BAR.apk[lang],
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "nx-ext",
						"aria-hidden": "true",
						children: "↗"
					})
				] })]
			}, "https://studio.nibrascode.com"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar nx-studio-bar",
				href: localeHref(lang, "/studio"),
				"data-testid": "home-studio",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M8.5 7 3.5 12l5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.7",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BAR.studio[lang] })]
			}, "/studio"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: localeHref(lang, "/workspace"),
				"data-testid": "home-workspace",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "3",
							y: "3.5",
							width: "7.5",
							height: "7.5",
							rx: "2",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "13.5",
							y: "3.5",
							width: "7.5",
							height: "7.5",
							rx: "2",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "3",
							y: "13",
							width: "7.5",
							height: "7.5",
							rx: "2",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M17.25 13.5v6.5M14 16.75h6.5",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.6",
							strokeLinecap: "round"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Workspace" })]
			}, "/workspace"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: toolsPath(lang),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk nx-tools",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M14.7 5.4a3.2 3.2 0 0 0-4.4 4.3L5.2 15a1.7 1.7 0 0 0 2.4 2.4l5.1-5.1a3.2 3.2 0 0 0 4.4-4.3l-2.2 2.2-1.6-1.6 2.2-2.2Z",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: TOOLS_PAGE.heading[lang] })]
			}, "tools")
		],
		g3: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: localeHref(lang, "/learn"),
				"data-testid": "home-learn",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BAR.learn[lang] })]
			}, "/learn"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: localeHref(lang, "/error-help"),
				"data-testid": "home-error-help",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M12 3 2 20h20zM12 10v4M12 17h.01",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BAR.errorHelp[lang] })]
			}, "/error-help"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: localeHref(lang, "/doctor"),
				"data-testid": "home-doctor",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M3 12h4l2-5 4 10 2-5h6",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BAR.doctor[lang] })]
			}, "/doctor"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: localeHref(lang, "/seo"),
				"data-testid": "home-seo",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "10.5",
						cy: "10.5",
						r: "5.2",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M14.4 14.4 19 19",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BAR.seo[lang] })]
			}, "/seo"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: localeHref(lang, "/learn/logic"),
				"data-testid": "home-learn-logic",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M4 7h5a5 5 0 0 1 0 10H4zM14 12h6M2 9.5h2M2 14.5h2",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BAR.logicLab[lang] })]
			}, "/learn/logic"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: localeHref(lang, "/mirror"),
				"data-testid": "home-mirror",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M4 12h4M8 12c3 0 3-6 6-6h3M8 12c3 0 3 6 6 6h3M8 12h9",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BAR.mirror[lang] })]
			}, "/mirror"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: localeHref(lang, "/shortcuts"),
				"data-testid": "home-shortcuts",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M3 7h18v10H3zM6 10h1M9 10h1M12 10h1M15 10h1M18 10h0M7 14h10",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BAR.shortcuts[lang] })]
			}, "/shortcuts"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: localeHref(lang, "/schema"),
				"data-testid": "home-schema",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BAR.schema[lang] })]
			}, "/schema"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-apk-bar",
				href: localeHref(lang, "/filecheck"),
				"data-testid": "home-filecheck",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "nx-apk",
					viewBox: "0 0 24 24",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M6 3h8l4 4v14H6zM14 3v4h4M9 13l2 2 4-4",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: BAR.filecheck[lang] })]
			}, "/filecheck")
		]
	};
}
function BarGroupView({ lang, group, full = false }) {
	const all = barItems(lang)[group];
	const shown = full ? all : all.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `nx-bar-group nx-bar-group--${GROUP_CLASS[group]}`,
		children: [
			full ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "nx-bar-group-title",
				children: BAR_GROUPS[group][lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "nx-bar-group-grid",
				children: shown
			}),
			!full && all.length > 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "nx-more-link",
				href: groupPath(lang, group),
				children: [MORE$1[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "nx-more-link-arrow",
					"aria-hidden": "true",
					children: "→"
				})]
			}) : null
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/voice-page-BzTbeysd.js
var T$7 = (az, en, tr, ar, ru) => ({
	az,
	en,
	tr,
	ar,
	ru
});
var S = {
	title: T$7("Səsdən mətnə", "Speech to text", "Sesten metne", "تحويل الصوت إلى نص", "Голос в текст"),
	lead: T$7("Danış, mətn yazılsın. Pulsuz, qeydiyyatsız.", "Speak and the text is typed. Free, no sign-up.", "Konuş, metin yazılsın. Ücretsiz, kayıtsız, tarayıcıda.", "تحدّث ويُكتب النص. مجاناً، بلا تسجيل، في المتصفح.", "Говорите — текст печатается. Бесплатно, без регистрации, в браузере."),
	speechLang: T$7("Danışıq dili", "Spoken language", "Konuşma dili", "لغة الكلام", "Язык речи"),
	ready: T$7("Hazırdır", "Ready", "Hazır", "جاهز", "Готово"),
	listening: T$7("Dinləyirəm…", "Listening…", "Dinliyorum…", "أستمع…", "Слушаю…"),
	start: T$7("Başla", "Start", "Başla", "ابدأ", "Начать"),
	stop: T$7("Dayandır", "Stop", "Durdur", "إيقاف", "Остановить"),
	placeholder: T$7("Mətn burada görünəcək. Redaktə edə bilərsən.", "Text appears here. You can edit it.", "Metin burada görünecek. Düzenleyebilirsin.", "سيظهر النص هنا ويمكنك تعديله.", "Текст появится здесь. Его можно править."),
	copy: T$7("Kopyala", "Copy", "Kopyala", "نسخ", "Копировать"),
	clear: T$7("Təmizlə", "Clear", "Temizle", "مسح", "Очистить"),
	again: T$7("Yenə bas", "Tap again", "Tekrar bas", "اضغط مجدداً", "Ещё раз"),
	copied: T$7("Kopyalandı", "Copied", "Kopyalandı", "تم النسخ", "Скопировано"),
	copyFail: T$7("Kopyalanmadı: mətni seçib özün kopyala", "Copy failed: select the text and copy it", "Kopyalanamadı: metni seçip kendin kopyala", "تعذّر النسخ: حدّد النص وانسخه", "Не скопировано: выделите текст и скопируйте"),
	words: T$7("söz", "words", "kelime", "كلمة", "слов"),
	chars: T$7("simvol", "characters", "karakter", "حرف", "символов"),
	deny: T$7("Mikrofona və ya səs tanımaya icazə verilməyib. Brauzer ayarlarından icazə ver və ya linki birbaşa brauzerdə aç.", "Microphone or speech recognition is blocked. Allow it in browser settings or open the link directly in the browser.", "Mikrofon veya ses tanıma izni yok. Tarayıcı ayarlarından izin ver veya bağlantıyı doğrudan tarayıcıda aç.", "الميكروفون أو التعرف على الصوت محظور. اسمح به من إعدادات المتصفح أو افتح الرابط في المتصفح مباشرة.", "Микрофон или распознавание речи запрещены. Разрешите в настройках браузера или откройте ссылку прямо в браузере."),
	steps: T$7("Android Chrome: ünvan sətrindəki kilid → Sayt ayarları → Mikrofon → İcazə ver, sonra səhifəni yenilə. iPhone Safari: ünvan sətrində «AA» → Veb sayt ayarları → Mikrofon → İcazə ver (və ya Ayarlar → Safari → Mikrofon). Telegram, Instagram kimi tətbiqlərin içində yox, Chrome və ya Safari-də aç.", "Android Chrome: tap the lock in the address bar → Site settings → Microphone → Allow, then reload. iPhone Safari: tap «AA» in the address bar → Website Settings → Microphone → Allow (or Settings → Safari → Microphone). Open it in Chrome or Safari, not inside Telegram or Instagram.", "Android Chrome: adres çubuğundaki kilit → Site ayarları → Mikrofon → İzin ver, sonra sayfayı yenile. iPhone Safari: adres çubuğunda «AA» → Web Sitesi Ayarları → Mikrofon → İzin ver (veya Ayarlar → Safari → Mikrofon). Telegram, Instagram içinde değil, Chrome veya Safari'de aç.", "أندرويد Chrome: اضغط القفل في شريط العنوان ← إعدادات الموقع ← الميكروفون ← السماح، ثم أعد التحميل. آيفون Safari: اضغط «AA» ← إعدادات موقع الويب ← الميكروفون ← السماح (أو الإعدادات ← Safari ← الميكروفون). افتحه في Chrome أو Safari وليس داخل Telegram أو Instagram.", "Android Chrome: замок в адресной строке → Настройки сайта → Микрофон → Разрешить, затем обновите. iPhone Safari: «AA» в адресной строке → Настройки веб-сайта → Микрофон → Разрешить (или Настройки → Safari → Микрофон). Открывайте в Chrome или Safari, а не внутри Telegram или Instagram."),
	embedded: T$7("Bu səhifə tətbiq içində və ya çərçivədə açılıb — mikrofon burada çox vaxt bağlı olur. Brauzerdə aç.", "This page is open inside an app or a frame, where the microphone is often blocked. Open it in your browser.", "Bu sayfa bir uygulama veya çerçeve içinde açık; mikrofon burada çoğu zaman kapalıdır. Tarayıcıda aç.", "هذه الصفحة مفتوحة داخل تطبيق أو إطار، وغالباً ما يكون الميكروفون محظوراً هنا. افتحها في المتصفح.", "Страница открыта внутри приложения или фрейма — там микрофон часто заблокирован. Откройте в браузере."),
	openBrowser: T$7("Brauzerdə aç", "Open in browser", "Tarayıcıda aç", "افتح في المتصفح", "Открыть в браузере"),
	copyLink: T$7("Linki kopyala", "Copy link", "Bağlantıyı kopyala", "نسخ الرابط", "Копировать ссылку"),
	audio: T$7("Mikrofon tapılmadı və ya başqa tətbiq onu istifadə edir.", "No microphone found, or another app is using it.", "Mikrofon bulunamadı veya başka uygulama kullanıyor.", "لم يُعثر على ميكروفون أو أن تطبيقاً آخر يستخدمه.", "Микрофон не найден или занят другим приложением."),
	network: T$7("İnternet lazımdır: səs tanıma onlayn işləyir.", "Internet needed: recognition works online.", "İnternet gerekli: ses tanıma çevrim içi çalışır.", "يلزم اتصال بالإنترنت: التعرف يعمل عبر الشبكة.", "Нужен интернет: распознавание работает онлайн."),
	langNo: T$7("Bu dil bu cihazda dəstəklənmir. Başqa dil seç.", "This language is not supported on this device. Pick another.", "Bu dil bu cihazda desteklenmiyor. Başka dil seç.", "هذه اللغة غير مدعومة على هذا الجهاز. اختر لغة أخرى.", "Этот язык не поддерживается на устройстве. Выберите другой."),
	err: T$7("Xəta baş verdi: ", "Error: ", "Hata: ", "حدث خطأ: ", "Ошибка: "),
	unsupported: T$7("Bu pəncərə səs tanımanı dəstəkləmir. Linki brauzerdə aç: Chrome (Android, kompüter), Edge və ya Safari (iPhone).", "This window does not support speech recognition. Open the link in Chrome (Android, desktop), Edge or Safari (iPhone).", "Bu pencere ses tanımayı desteklemiyor. Bağlantıyı Chrome (Android, bilgisayar), Edge veya Safari (iPhone) ile aç.", "هذه النافذة لا تدعم التعرف على الصوت. افتح الرابط في Chrome (أندرويد، الحاسوب) أو Edge أو Safari (آيفون).", "Это окно не поддерживает распознавание речи. Откройте ссылку в Chrome (Android, ПК), Edge или Safari (iPhone)."),
	privacy: T$7("Danışarkən səsin brauzerin səs tanıma xidmətinə yüklənir (Chrome-da Google, Safari-də Apple). Səs yalnız cihazda qalmır. Alınan mətn bu cihazda saxlanır; Nibras Code serverinə heç nə göndərilmir. Firefox dəstəkləmir.", "While you speak, the audio is uploaded to the browser's speech-recognition service (Google in Chrome, Apple in Safari). The audio does not stay only on your device. The resulting text is stored on this device; nothing is sent to Nibras Code servers. Firefox is not supported.", "Konuşurken ses tarayıcının ses tanıma hizmetine yüklenir (Chrome'da Google, Safari'de Apple). Ses yalnız cihazda kalmaz. Çıkan metin bu cihazda saklanır; Nibras Code sunucularına hiçbir şey gönderilmez. Firefox desteklenmez.", "أثناء الكلام يُرفع الصوت إلى خدمة التعرف على الكلام في المتصفح (Google في Chrome وApple في Safari)، فلا يبقى الصوت على جهازك فقط. يُحفظ النص الناتج على هذا الجهاز، ولا يُرسل شيء إلى خوادم Nibras Code. Firefox غير مدعوم.", "Пока вы говорите, звук загружается в сервис распознавания браузера (Google в Chrome, Apple в Safari) — он не остаётся только на устройстве. Полученный текст хранится на этом устройстве; на серверы Nibras Code ничего не отправляется. Firefox не поддерживается."),
	upHint: T$7("Danışarkən səs tanıma xidmətinə yüklənir", "Audio is uploaded to the recognition service while you speak", "Konuşurken ses tanıma hizmetine yüklenir", "يُرفع الصوت إلى خدمة التعرف أثناء الكلام", "Во время речи звук загружается в сервис распознавания")
};
var VOICE_TITLE = S.title;
function voiceMeta(lang) {
	const title = `${S.title[lang]} — Nibras Code`;
	return [
		{ title },
		{
			property: "og:title",
			content: title
		},
		{
			name: "description",
			content: S.lead[lang]
		},
		{
			property: "og:description",
			content: S.lead[lang]
		}
	];
}
var LOCALES = [
	["az-AZ", "Azərbaycanca"],
	["tr-TR", "Türkçe"],
	["ru-RU", "Русский"],
	["en-US", "English"],
	["ar-SA", "العربية"]
];
var DEFAULT_LOC = {
	az: "az-AZ",
	tr: "tr-TR",
	ru: "ru-RU",
	en: "en-US",
	ar: "ar-SA"
};
var store = {
	get(k) {
		try {
			return localStorage.getItem(k);
		} catch {
			return null;
		}
	},
	set(k, v) {
		try {
			localStorage.setItem(k, v);
		} catch {}
	}
};
function VoicePage({ lang }) {
	const t = (k) => S[k][lang] ?? S[k].az;
	const [text, setText] = (0, import_react.useState)("");
	const [loc, setLoc] = (0, import_react.useState)(DEFAULT_LOC[lang]);
	const [on, setOn] = (0, import_react.useState)(false);
	const [interim, setInterim] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)(null);
	const [armed, setArmed] = (0, import_react.useState)(false);
	const [supported, setSupported] = (0, import_react.useState)(true);
	const [embedded, setEmbedded] = (0, import_react.useState)(false);
	const [denied, setDenied] = (0, import_react.useState)(false);
	const recRef = (0, import_react.useRef)(null);
	const want = (0, import_react.useRef)(false);
	const locRef = (0, import_react.useRef)(loc);
	const outRef = (0, import_react.useRef)(null);
	const noteTm = (0, import_react.useRef)(void 0);
	const armTm = (0, import_react.useRef)(void 0);
	const tRef = (0, import_react.useRef)(t);
	tRef.current = t;
	(0, import_react.useEffect)(() => {
		const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
		setSupported(!!SR);
		let framed = false;
		try {
			framed = window.top !== window.self;
		} catch {
			framed = true;
		}
		setEmbedded(framed || /FBAN|FBAV|Instagram|\bLine\/|Twitter|MicroMessenger|Telegram|; wv\)|\bWV\b/i.test(navigator.userAgent));
		const saved = store.get("stt-lang");
		if (saved && LOCALES.some(([v]) => v === saved)) {
			setLoc(saved);
			locRef.current = saved;
		}
		setText(store.get("stt-text") || "");
		return () => {
			want.current = false;
			try {
				recRef.current?.abort();
			} catch {}
		};
	}, []);
	(0, import_react.useEffect)(() => {
		store.set("stt-text", text);
	}, [text]);
	const say = (0, import_react.useCallback)((msg, ms) => {
		clearTimeout(noteTm.current);
		setNote(msg ? {
			t: msg,
			err: !ms
		} : null);
		if (ms) noteTm.current = setTimeout(() => setNote(null), ms);
	}, []);
	const add = (0, import_react.useCallback)((raw) => {
		let s = raw.trim();
		if (!s) return;
		setText((v) => {
			if (/(^|[.!?]\s*)$/.test(v)) s = s.charAt(0).toLocaleUpperCase(locRef.current) + s.slice(1);
			return v + (v && !/\s$/.test(v) ? " " : "") + s;
		});
		requestAnimationFrame(() => {
			const o = outRef.current;
			if (o) o.scrollTop = o.scrollHeight;
		});
	}, []);
	const begin = (0, import_react.useCallback)(() => {
		const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
		if (!SR) return;
		const old = recRef.current;
		if (old) {
			old.onresult = old.onerror = old.onend = null;
			try {
				old.abort();
			} catch {}
		}
		const r = new SR();
		recRef.current = r;
		r.lang = locRef.current;
		r.interimResults = true;
		r.continuous = !/Android/i.test(navigator.userAgent);
		r.onstart = () => setOn(true);
		r.onresult = (e) => {
			let im = "";
			for (let i = e.resultIndex; i < e.results.length; i++) {
				const x = e.results[i];
				if (x.isFinal) add(x[0].transcript);
				else im += x[0].transcript;
			}
			setInterim(im);
		};
		r.onerror = (e) => {
			const tt = tRef.current;
			const map = {
				"not-allowed": tt("deny"),
				"service-not-allowed": tt("deny"),
				"audio-capture": tt("audio"),
				network: tt("network"),
				"language-not-supported": tt("langNo")
			};
			if (e.error === "not-allowed" || e.error === "service-not-allowed") setDenied(true);
			if (map[e.error]) {
				want.current = false;
				say(map[e.error]);
			} else if (e.error !== "no-speech" && e.error !== "aborted") say(tt("err") + e.error);
		};
		r.onend = () => {
			setInterim("");
			if (want.current) setTimeout(() => {
				if (want.current) begin();
			}, 250);
			else setOn(false);
		};
		try {
			r.start();
		} catch {
			want.current = false;
			setOn(false);
		}
	}, [add, say]);
	const toggle = async () => {
		if (want.current) {
			want.current = false;
			try {
				recRef.current?.stop();
			} catch {}
			setOn(false);
			setInterim("");
			return;
		}
		say("");
		setDenied(false);
		want.current = true;
		const md = navigator.mediaDevices;
		if (!md?.getUserMedia) {
			begin();
			return;
		}
		try {
			(await md.getUserMedia({ audio: true })).getTracks().forEach((tr) => tr.stop());
		} catch (e) {
			want.current = false;
			const n = e?.name;
			if (n === "NotAllowedError" || n === "SecurityError") {
				setDenied(true);
				say(t("deny"));
			} else if (n === "NotFoundError" || n === "NotReadableError") say(t("audio"));
			else say(t("err") + (n || "mic"));
			return;
		}
		if (want.current) begin();
	};
	const changeLoc = (v) => {
		setLoc(v);
		locRef.current = v;
		store.set("stt-lang", v);
		if (want.current && recRef.current) try {
			recRef.current.stop();
		} catch {}
	};
	const copy = async () => {
		if (!text) return;
		try {
			await navigator.clipboard.writeText(text);
			say(t("copied"), 1800);
		} catch {
			const o = outRef.current;
			o?.focus();
			o?.select();
			o?.setSelectionRange(0, text.length);
			say(document.execCommand("copy") ? t("copied") : t("copyFail"), 1800);
		}
	};
	const clear = () => {
		if (!text) return;
		if (!armed) {
			setArmed(true);
			armTm.current = setTimeout(() => setArmed(false), 2500);
			return;
		}
		clearTimeout(armTm.current);
		setArmed(false);
		setText("");
	};
	const absUrl = "https://nibrascode.com" + localeHref(lang, "/voice");
	const words = (text.trim().match(/\S+/g) || []).length;
	const shownNote = !supported ? {
		t: t("unsupported"),
		err: true
	} : note;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "voice-page mx-auto w-full max-w-2xl px-4 pt-28 pb-16 md:px-6",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/5 text-amber-200 md:size-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { size: 24 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
					children: t("title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: t("lead")
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mb-5 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: t("speechLang")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: loc,
					onChange: (e) => changeLoc(e.target.value),
					className: "rounded-lg border border-white/15 bg-[#0c1220] px-3 py-1.5 text-white",
					children: LOCALES.map(([v, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: v,
						children: n
					}, v))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-col items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: toggle,
						disabled: !supported,
						"aria-pressed": on,
						"aria-label": on ? t("stop") : t("start"),
						className: `voice-mic${on ? " on" : ""}`,
						children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {
							size: 30,
							fill: "currentColor"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { size: 36 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `min-h-[1.5em] text-center text-sm ${interim ? "italic text-white/80" : "text-muted"}`,
						"aria-live": "polite",
						children: interim || (on ? t("listening") : t("ready"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "-mt-2 text-center text-[11px] text-white/45",
						children: t("upHint")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `voice-sheet${on ? " on-air" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					ref: outRef,
					value: text,
					onChange: (e) => setText(e.target.value),
					placeholder: t("placeholder"),
					dir: "auto",
					className: "block h-64 w-full resize-y bg-transparent p-4 text-base leading-relaxed text-white outline-none placeholder:text-white/35"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 border-t border-white/10 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted",
						children: [
							words,
							" ",
							t("words"),
							" · ",
							text.length,
							" ",
							t("chars")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: copy,
							disabled: !text,
							className: "voice-btn",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 15 }), t("copy")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: clear,
							disabled: !text,
							className: `voice-btn${armed ? " warn" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 15 }), armed ? t("again") : t("clear")]
						})]
					})]
				})]
			}),
			shownNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				className: `mt-3 rounded-xl px-4 py-2 text-sm ${shownNote.err ? "border border-red-400/30 bg-red-500/10 text-red-200" : "border border-emerald-400/30 bg-emerald-500/10 text-emerald-200"}`,
				children: shownNote.t
			}) : null,
			embedded || denied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-xl border border-amber-200/30 bg-amber-200/[0.06] p-4 text-sm text-[#e8eeff]",
				children: [
					embedded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2",
						children: t("embedded")
					}) : null,
					denied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-[#d5def0]",
						children: t("steps")
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: absUrl,
							target: "_blank",
							rel: "noopener",
							className: "inline-flex items-center gap-1.5 rounded-full bg-amber-200 px-4 py-1.5 font-semibold text-[#0c1220]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 15 }), t("openBrowser")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "voice-btn",
							onClick: async () => {
								try {
									await navigator.clipboard.writeText(absUrl);
									say(t("copied"), 1800);
								} catch {
									say(absUrl);
								}
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 15 }), t("copyLink")]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 break-all text-xs text-muted",
						dir: "ltr",
						children: absUrl
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xs leading-relaxed text-muted",
				children: t("privacy")
			})
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/services-page-BwR9VUZD.js
var T$6 = (az, en, tr, ar, ru) => ({
	az,
	en,
	tr,
	ar,
	ru
});
var TITLE = T$6("Services", "Services", "Services", "Services", "Services");
var DESC$1 = T$6("Nibras Code xidmətləri: PDF, video, səs, QR, şəkil, kod alətləri, tətbiqlər, Studio və Nibras AI — hamısı bir siyahıda.", "Nibras Code services: PDF, video, audio, QR, images, code tools, apps, Studio and Nibras AI — all in one list.", "Nibras Code hizmetleri: PDF, video, ses, QR, görsel, kod araçları, uygulamalar, Studio ve Nibras AI — hepsi tek listede.", "خدمات Nibras Code: PDF والفيديو والصوت وQR والصور وأدوات الكود والتطبيقات وStudio وNibras AI — كلها في قائمة واحدة.", "Сервисы Nibras Code: PDF, видео, аудио, QR, изображения, инструменты кода, приложения, Studio и Nibras AI — всё в одном списке.");
var IMG_TOOL = {
	resize: T$6("Ölçünü dəyiş", "Resize", "Boyutlandır", "تغيير الحجم", "Изменить размер"),
	convert: T$6("Format dəyiş", "Convert", "Dönüştür", "تحويل الصيغة", "Конвертировать"),
	edit: T$6("Redaktə et", "Edit", "Düzenle", "تحرير", "Редактировать")
};
var CATS = [
	{
		id: "pdf",
		sub: T$6("PDF ilə işləmək üçün alətlər", "Tools for working with PDF", "PDF ile çalışmak için araçlar", "أدوات للعمل مع PDF", "Инструменты для работы с PDF"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 22 }),
		title: T$6("PDF", "PDF", "PDF", "PDF", "PDF"),
		items: (lang) => [{
			href: localeHref(lang, "/pdf"),
			label: T$6("PDF ana", "PDF home", "PDF ana sayfa", "الصفحة الرئيسية لـ PDF", "PDF главная")[lang]
		}, ...TOOL_IDS.map((id) => ({
			href: localeHref(lang, `/pdf/${id}`),
			label: TOOL_TEXT[lang][id].title,
			hint: TOOL_TEXT[lang][id].description
		}))]
	},
	{
		id: "qr",
		sub: T$6("QR kod hazırla və oxu", "Make and read QR codes", "QR kod hazırla ve oku", "أنشئ رموز QR واقرأها", "Создавайте и читайте QR-коды"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { size: 22 }),
		title: T$6("QR", "QR", "QR", "QR", "QR"),
		items: (lang) => [
			{
				href: localeHref(lang, "/qr"),
				label: BAR.qr[lang]
			},
			{
				href: localeHref(lang, "/wifi"),
				label: T$6("Wi-Fi QR", "Wi-Fi QR", "Wi-Fi QR", "QR للواي فاي", "Wi-Fi QR")[lang]
			},
			{
				href: localeHref(lang, "/vcard"),
				label: T$6("Vizit kartı QR", "vCard QR", "Kartvizit QR", "QR لبطاقة الاتصال", "QR визитка")[lang]
			}
		]
	},
	{
		id: "image",
		sub: T$6("Şəkillə bağlı alətlər", "Tools for images", "Görsellerle ilgili araçlar", "أدوات للصور", "Инструменты для изображений"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { size: 22 }),
		title: T$6("Şəkil", "Images", "Görsel", "الصور", "Изображения"),
		items: (lang) => [
			{
				href: localeHref(lang, "/erase"),
				label: BAR.erase[lang]
			},
			{
				href: localeHref(lang, "/image"),
				label: BAR.image[lang]
			},
			...Object.keys(IMG_TOOL).map((k) => ({
				href: localeHref(lang, `/image/${k}`),
				label: IMG_TOOL[k][lang]
			}))
		]
	},
	{
		id: "video",
		sub: T$6("Kəs, sıx, çərçivələ, ölçü, səssiz, çevir, birləşdir", "Trim, compress, crop, resize, mute, convert, merge", "Kes, sıkıştır, kırp, boyut, sessiz, dönüştür, birleştir", "قص وضغط واقتصاص وتغيير الحجم وكتم وتحويل ودمج", "Обрезка, сжатие, кадр, размер, без звука, конвертация, склейка"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clapperboard, { size: 22 }),
		title: T$6("Video", "Video", "Video", "الفيديو", "Видео"),
		items: (lang) => [
			"/video",
			"/video/trim",
			"/video/compress",
			"/video/crop",
			"/video/resize",
			"/video/mute",
			"/video/convert",
			"/video/merge",
			"/video/audio"
		].map((p) => ({
			href: localeHref(lang, p),
			label: VIDEO_KIT[p][lang].h1,
			hint: p === "/video" ? void 0 : VIDEO_KIT[p][lang].lead
		}))
	},
	{
		id: "code",
		sub: T$6("Proqramçılar üçün faydalı alətlər", "Handy tools for developers", "Geliştiriciler için faydalı araçlar", "أدوات مفيدة للمبرمجين", "Полезные инструменты для разработчиков"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { size: 22 }),
		title: T$6("Kod alətləri", "Code tools", "Kod araçları", "أدوات الكود", "Инструменты кода"),
		items: (lang) => [{
			href: toolsPath(lang),
			label: T$6("Bütün alətlər", "All tools", "Tüm araçlar", "كل الأدوات", "Все инструменты")[lang]
		}, ...TOOL_GROUPS.flatMap((g) => g.ids.map((id) => ({
			href: toolPath(lang, id),
			label: TOOLS.find((t) => t.id === id)?.label[lang] ?? id,
			hint: g.title[lang]
		})))]
	},
	{
		id: "apps",
		sub: T$6("Onlayn tətbiqlər", "Online apps", "Çevrim içi uygulamalar", "تطبيقات على الإنترنت", "Онлайн-приложения"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppWindow, { size: 22 }),
		title: T$6("Tətbiqlər", "Apps", "Uygulamalar", "التطبيقات", "Приложения"),
		items: (lang) => [{
			href: localeHref(lang, "/apps"),
			label: T$6("Bütün tətbiqlər", "All apps", "Tüm uygulamalar", "كل التطبيقات", "Все приложения")[lang]
		}, ...STUDIO_APPS.map((a) => ({
			href: localeHref(lang, `/apps/${a.slug}`),
			label: a.name
		}))]
	},
	{
		id: "studio",
		sub: T$6("Layihələrini hazırla", "Build your projects", "Projelerini hazırla", "جهّز مشاريعك", "Собирайте свои проекты"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { size: 22 }),
		title: T$6("Studio", "Studio", "Studio", "الاستوديو", "Студия"),
		items: (lang) => [
			{
				href: "https://dev.nibrascode.com",
				label: BAR.dev[lang],
				ext: true
			},
			{
				href: "https://studio.nibrascode.com",
				label: BAR.apk[lang],
				ext: true
			},
			{
				href: localeHref(lang, "/studio"),
				label: BAR.studio[lang]
			},
			{
				href: localeHref(lang, "/workspace"),
				label: "Workspace"
			}
		]
	},
	{
		id: "audio",
		sub: T$6("Səs yaz, montaj et, birləşdir — oflayn studio", "Record, edit, join — offline studio", "Kaydet, düzenle, birleştir — çevrimdışı stüdyo", "سجّل وحرّر وادمج — استوديو دون اتصال", "Запись, монтаж, склейка — офлайн-студия"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { size: 22 }),
		title: T$6("Səs", "Audio", "Ses", "الصوت", "Аудио"),
		items: (lang) => [
			{
				href: "/audio",
				label: T$6("Nibras Audio", "Nibras Audio", "Nibras Audio", "Nibras Audio", "Nibras Audio")[lang],
				hint: T$6("Oflayn səs studiyası", "Offline audio studio", "Çevrimdışı ses stüdyosu", "استوديو صوت دون اتصال", "Офлайн аудиостудия")[lang]
			},
			{
				href: "/audio/record",
				label: T$6("Yeni səs yazısı", "New recording", "Yeni ses kaydı", "تسجيل جديد", "Новая запись")[lang]
			},
			{
				href: "/audio/open",
				label: T$6("Audio fayl aç", "Open audio file", "Ses dosyası aç", "فتح ملف صوت", "Открыть аудиофайл")[lang]
			},
			{
				href: "/audio/edit",
				label: T$6("Montaj", "Edit", "Montaj", "مونتاج", "Монтаж")[lang]
			},
			{
				href: "/audio/join",
				label: T$6("Birləşdir", "Join", "Birleştir", "دمج", "Объединить")[lang]
			},
			{
				href: "/audio/batch",
				label: T$6("Toplu emal", "Batch process", "Toplu işlem", "معالجة دفعة", "Пакетная обработка")[lang]
			},
			{
				href: "/audio/mix",
				label: T$6("Qarışıq", "Mix", "Karışım", "مزج", "Микс")[lang]
			},
			{
				href: "/audio/fx",
				label: T$6("Effektlər", "Effects", "Efektler", "تأثيرات", "Эффекты")[lang]
			},
			{
				href: "/audio/denoise",
				label: T$6("Küyü azalt", "Reduce noise", "Gürültüyü azalt", "تقليل الضوضاء", "Шумоподавление")[lang]
			},
			{
				href: "/audio/export",
				label: T$6("Telefona saxla", "Save to phone", "Telefona kaydet", "حفظ على الهاتف", "Сохранить на телефон")[lang]
			},
			{
				href: "/audio/notes",
				label: T$6("Yadda saxlanmış qeydlər", "Saved notes", "Kayıtlı notlar", "ملاحظات محفوظة", "Сохранённые заметки")[lang]
			},
			{
				href: "/audio/share",
				label: T$6("Paylaş", "Share", "Paylaş", "مشاركة", "Поделиться")[lang]
			},
			{
				href: localeHref(lang, "/voice"),
				label: VOICE_TITLE[lang]
			}
		]
	},
	{
		id: "other",
		sub: T$6("Əlavə alətlər və resurslar", "Extra tools and resources", "Ek araçlar ve kaynaklar", "أدوات وموارد إضافية", "Дополнительные инструменты и ресурсы"),
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 22 }),
		title: T$6("Digər", "More", "Diğer", "أخرى", "Другое"),
		items: (lang) => [
			{
				href: localeHref(lang, "/ai"),
				label: "Nibras AI"
			},
			{
				href: localeHref(lang, "/calc"),
				label: BAR.calc[lang]
			},
			{
				href: localeHref(lang, "/flow"),
				label: BAR.flow[lang]
			},
			{
				href: localeHref(lang, "/logic"),
				label: BAR.logic[lang]
			},
			{
				href: localeHref(lang, "/learn"),
				label: BAR.learn[lang]
			},
			{
				href: localeHref(lang, "/learn/logic"),
				label: BAR.logicLab[lang]
			},
			{
				href: localeHref(lang, "/doctor"),
				label: BAR.doctor[lang]
			},
			{
				href: localeHref(lang, "/error-help"),
				label: BAR.errorHelp[lang]
			},
			{
				href: localeHref(lang, "/seo"),
				label: BAR.seo[lang]
			},
			{
				href: localeHref(lang, "/mirror"),
				label: BAR.mirror[lang]
			},
			{
				href: localeHref(lang, "/shortcuts"),
				label: BAR.shortcuts[lang]
			},
			{
				href: localeHref(lang, "/schema"),
				label: BAR.schema[lang]
			},
			{
				href: localeHref(lang, "/filecheck"),
				label: BAR.filecheck[lang]
			}
		]
	}
];
var SERVICES_LABEL = TITLE;
function servicesMeta(lang) {
	const title = `${TITLE[lang]} — Nibras Code`;
	return [
		{ title },
		{
			property: "og:title",
			content: title
		},
		{
			name: "description",
			content: DESC$1[lang]
		},
		{
			property: "og:description",
			content: DESC$1[lang]
		}
	];
}
function ServicesPage({ lang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page svc-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "why-glow",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "svc-list",
			children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: `svc-cat svc-${c.id}`,
				name: "svc",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "svc-ico",
						"aria-hidden": "true",
						children: c.icon
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "svc-text",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "svc-name",
							children: c.title[lang]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
							className: "svc-sub",
							children: c.sub[lang]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "svc-chev",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: c.items(lang).map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: it.href,
					...it.ext ? {
						target: "_blank",
						rel: "noopener"
					} : {},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it.label }), it.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: it.hint }) : null]
				}) }, `${it.href}::${it.label}`)) })]
			}, c.id))
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/site-header-CiR5YUVm.js
function LanguageSwitch() {
	const { lang, t, setLang } = useI18n$1();
	const router = useRouter();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const searchStr = useRouterState({ select: (state) => state.location.searchStr });
	const choose = (code) => {
		if (code === lang) return;
		try {
			localStorage.setItem(STORAGE_KEY, code);
		} catch {}
		const href = hrefForLang(pathname, code);
		const params = new URLSearchParams((searchStr ?? "").replace(/^\?/, ""));
		params.delete("lang");
		const qs = params.toString();
		const next = href ?? localeHref(code, `${pathname}${qs ? `?${qs}` : ""}`);
		setLang(code);
		if (next === `${pathname}${searchStr ?? ""}`) return;
		router.history.replace(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "lang-menu",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: t("lang_label")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			className: "lang-pick",
			value: lang,
			"aria-label": t("lang_label"),
			onChange: (event) => choose(event.target.value),
			children: LANGS$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: code,
				children: LANG_META[code].label
			}, code))
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function NavMenu({ section }) {
	const { t, lang } = useI18n$1();
	const page = LIBRARY[section];
	const path = `/${section}`;
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const bare = stripLocalePrefix(pathname).path;
	const active = bare === path || bare.startsWith(`${path}/`) || section === "resources" && (bare.startsWith("/resurslar") || pathname.startsWith("/ru/resources"));
	const [open, setOpen] = (0, import_react.useState)(false);
	const rootRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onPointer = (event) => {
			if (!rootRef.current?.contains(event.target)) setOpen(false);
		};
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		document.addEventListener("pointerdown", onPointer);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("pointerdown", onPointer);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: cn("nav-drop", active && "is-on", open && "is-open"),
		onMouseEnter: () => setOpen(true),
		onMouseLeave: () => setOpen(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: localeHref(lang, path),
				children: t(page.title)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-expanded": open,
				"aria-label": t(page.title),
				onClick: () => setOpen((value) => !value),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("nav-chev", open && "is-open") })
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nav-pop",
				children: [page.topics.map((topic) => {
					const href = section === "programming" ? lang !== "az" && hasProgrammingLocale(lang, topic.slug) ? programmingLocalePath(lang, topic.slug) : localeHref(lang, `/programming/${topic.slug}`) : section === "resources" && topic.slug === "pdf" ? lang === "ru" ? "/ru/resources/pdf" : localeHref(lang, "/resurslar/pdf") : localeHref(lang, `/${section}/${topic.slug}`);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						children: t(topic.label)
					}, topic.slug);
				}), section === "programming" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: searchPath(lang, "soz"),
						children: SEARCH.soz.heading[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: searchPath(lang, "xeta"),
						children: SEARCH.xeta.heading[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: searchPath(lang, "movzu"),
						children: SEARCH.movzu.heading[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: searchPath(lang, "nece"),
						children: SEARCH.nece.heading[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: paketPath(lang),
						children: PAKET.heading[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: comparePath(lang),
						children: COMPARE.heading[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: programmingLocalePath(lang, CODE_SAMPLE_HUB),
						children: t("code_samples")
					})
				] }) : null]
			}) : null
		]
	});
}
function SiteHeader() {
	const { t, lang } = useI18n$1();
	const isHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "site-header is-scrolled",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-header-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brand-cluster",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "brand-mark",
					"aria-label": "Nibras Code",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/nibras-icon.png",
						alt: "Nibras Code",
						className: "brand-icon"
					})
				}), isHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localeHref(lang, "/about"),
					className: "nav-link about-link",
					children: t("nav_about")
				}) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "header-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "header-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/apps"),
							className: "back-link",
							children: t("b_nav_apps")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/studio"),
							className: "back-link",
							"data-testid": "nav-studio",
							children: "Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/workspace"),
							className: "back-link",
							children: "Workspace"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/learn"),
							className: "back-link",
							children: "Learn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/doctor"),
							className: "back-link",
							children: "Site Doctor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/qr",
							className: "back-link qr-nav-link",
							children: t("nav_qr")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/unutma",
							className: "back-link",
							children: t("remind_btn")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/contact"),
							className: "back-link",
							children: t("nx_nav_contact")
						}),
						!isHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "back-link",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "rtl-flip size-3.5" }), t("b_nav_home")]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitch, {})]
			})]
		})
	});
}
function SiteFooter() {
	const { t, lang } = useI18n$1();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "footer-panels",
				"aria-label": "Nibras Code",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "footer-faq",
						href: localeHref(lang, "/services"),
						children: SERVICES_LABEL[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "resources" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "guides" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "programming" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "footer-faq",
						href: faqPath(lang),
						children: t("faq_nav")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "footer-faq",
						href: gamePath(lang),
						children: lang === "ar" ? "ألعاب" : lang === "ru" ? "Игры" : lang === "en" ? "Games" : "Oyunlar"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "footer-domain",
					children: t("footer_domain")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "footer-year",
					children: "©2026"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLegal, {})
		]
	});
}
var LEGAL = {
	az: {
		about: "Haqqımızda",
		contact: "Əlaqə",
		privacy: "Məxfilik",
		terms: "İstifadə şərtləri",
		trust: "Şəffaflıq"
	},
	en: {
		about: "About",
		contact: "Contact",
		privacy: "Privacy",
		terms: "Terms",
		trust: "Transparency"
	},
	tr: {
		about: "Hakkımızda",
		contact: "İletişim",
		privacy: "Gizlilik",
		terms: "Kullanım şartları",
		trust: "Şeffaflık"
	},
	ar: {
		about: "من نحن",
		contact: "تواصل",
		privacy: "الخصوصية",
		terms: "شروط الاستخدام",
		trust: "الشفافية"
	},
	ru: {
		about: "О нас",
		contact: "Контакт",
		privacy: "Конфиденциальность",
		terms: "Условия",
		trust: "Прозрачность"
	}
};
function SocialIcons() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "social-icons",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "mailto:nibrascode@gmail.com",
			"aria-label": "Gmail",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 48 48",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "#4caf50",
						d: "M45 16.2 35 23.7V40h7a3 3 0 0 0 3-3V16.2z"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "#1e88e5",
						d: "M3 16.2 13 23.7V40H6a3 3 0 0 1-3-3V16.2z"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "#e53935",
						d: "m35 11.2-11 8.25-11-8.25L12 17l1 6.7 11 8.25 11-8.25 1-6.7z"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "#c62828",
						d: "M3 12.3V16.2l10 7.5V11.2L9.9 8.9A4.3 4.3 0 0 0 7.3 8C4.9 8 3 9.9 3 12.3z"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "#fbc02d",
						d: "M45 12.3V16.2l-10 7.5V11.2l3.1-2.3A4.3 4.3 0 0 1 40.7 8C43.1 8 45 9.9 45 12.3z"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "https://www.youtube.com/@NibrasCode",
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "YouTube",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 24 24",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#FF0033",
					d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#fff",
					d: "M9.8 15.5v-7l6.2 3.5z"
				})]
			})
		})]
	});
}
function SiteLegal() {
	const { lang } = useI18n$1();
	const copy = LEGAL[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-legal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": copy.contact,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localeHref(lang, "/about"),
					children: copy.about
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localeHref(lang, "/contact"),
					children: copy.contact
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localeHref(lang, "/privacy"),
					children: copy.privacy
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localeHref(lang, "/terms"),
					children: copy.terms
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localeHref(lang, "/trust"),
					children: copy.trust
				})
			]
		})]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/info-card-5No8_9x1.js
/** Dark card with a gold icon, styled like the store Data Safety card (.ns-safe). */
function InfoCard({ icon: Icon, title, href, muted, children, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "info-card",
		id,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "info-card-icon",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "info-card-body",
			children: [
				muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "info-card-muted",
					children: muted
				}) : null,
				title ? href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "info-card-title",
					href,
					children: title
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "info-card-title",
					children: title
				}) : null,
				children
			]
		})]
	});
}
function InfoCards({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "info-cards",
		children
	});
}
/** Split prose into sentences without breaking URLs, domains, emails or decimals. */
function splitSentences(text) {
	return text.split(/(?<=[.!?。؟])\s+(?=[^\s.])/u).map((s) => s.trim()).filter(Boolean);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/pages-BUEPdXJx.js
function lines(text) {
	return text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
}
function defaultAbout(lang) {
	const text = translations[lang];
	return {
		eyebrow: text.who_btn,
		title: text.who_h,
		intro: [
			text.who_p1,
			text.who_p2,
			text.who_p3,
			text.who_p4,
			text.who_p5
		],
		approachTitle: text.who_approach,
		approach: [
			text.who_a1,
			text.who_a2,
			text.who_a3,
			text.who_a4
		],
		success: text.who_success,
		verse: text.who_verse,
		verseTr: text.who_verse_tr
	};
}
var FOUNDER = {
	az: {
		title: "Nibras Code-un sahibi və qurucusu",
		body: [
			"Nibras Code-un arxasında texnologiyanı yalnız kod yazmaq vasitəsi deyil, insanlara fayda vermək üçün bir imkan kimi görən müstəqil bir proqram təminatı həvəskarı dayanır.",
			"Özünü ön plana çıxarmaqdansa, hazırladığı layihələr və təqdim etdiyi faydalı həllərlə tanınmağa üstünlük verir. Onun yanaşması sadədir: gündəlik ehtiyacları anlamaq, lazımsız mürəkkəbliyi aradan qaldırmaq və texnologiyanı hər kəs üçün daha əlçatan etmək.",
			"Nibras Code fərdi təşəbbüs əsasında inkişaf etdirilir. Layihənin əsas istiqaməti PDF alətləri, sənəd idarəetməsi, QR kod xidmətləri və gündəlik istifadə üçün nəzərdə tutulan digər faydalı tətbiqlərin hazırlanmasıdır.",
			"Bu layihənin arxasındakı düşüncə yalnız proqram təminatı hazırlamaqla məhdudlaşmır. Məqsəd insanların vaxtına qənaət edən, istifadəsi rahat və mümkün qədər münasib qiymətlərlə əlçatan olan rəqəmsal həllər təqdim etməkdir.",
			"Onun üçün əsas məsələ adının tanınması deyil, gördüyü işin insanlara fayda verməsidir."
		]
	},
	en: {
		title: "Owner and founder of Nibras Code",
		body: [
			"Behind Nibras Code is an independent software enthusiast who sees technology not only as a way to write code, but as a way to help people.",
			"Rather than putting himself forward, he prefers to be known by the projects he builds and the useful solutions he offers. His approach is simple: understand everyday needs, remove needless complexity, and make technology more reachable for everyone.",
			"Nibras Code is developed as a personal effort. Its main direction is PDF tools, document handling, QR code services, and other useful apps meant for daily use.",
			"The idea behind this project is not limited to making software. The aim is to offer digital tools that save people’s time, are comfortable to use, and stay as affordable as possible.",
			"For him, the main point is not that his name be known, but that the work helps people."
		]
	},
	tr: {
		title: "Nibras Code’un sahibi ve kurucusu",
		body: [
			"Nibras Code’un arkasında, teknolojiyi yalnızca kod yazma aracı değil, insanlara fayda vermek için bir imkân olarak gören bağımsız bir yazılım meraklısı vardır.",
			"Kendini öne çıkarmaktansa, hazırladığı projeler ve sunduğu faydalı çözümlerle tanınmayı tercih eder. Yaklaşımı basittir: günlük ihtiyaçları anlamak, gereksiz karmaşıklığı kaldırmak ve teknolojiyi herkes için daha erişilebilir yapmak.",
			"Nibras Code bireysel bir girişim olarak geliştirilir. Projenin ana yönü PDF araçları, belge yönetimi, QR kod hizmetleri ve günlük kullanım için diğer faydalı uygulamalardır.",
			"Bu projenin arkasındaki düşünce yalnızca yazılım yapmakla sınırlı değildir. Amaç, insanların zamanından tasarruf eden, kullanımı rahat ve mümkün olduğunca uygun fiyatlı dijital çözümler sunmaktır.",
			"Onun için asıl mesele adının tanınması değil, yaptığı işin insanlara fayda vermesidir."
		]
	},
	ar: {
		title: "صاحب Nibras Code ومؤسسه",
		body: [
			"خلف Nibras Code هاوٍ مستقل للبرمجيات يرى التقنية ليست مجرد وسيلة لكتابة الكود، بل فرصة لنفع الناس.",
			"وهو يفضّل أن يُعرف بمشاريعه والحلول المفيدة التي يقدّمها، لا بتقديم نفسه. منهجه بسيط: فهم الحاجات اليومية، وإزالة التعقيد غير اللازم، وجعل التقنية أقرب إلى الجميع.",
			"يُطوَّر Nibras Code بمبادرة فردية. اتجاهه الأساسي أدوات PDF وإدارة المستندات وخدمات رموز QR وتطبيقات مفيدة أخرى للاستعمال اليومي.",
			"الفكرة وراء هذا المشروع لا تقتصر على صنع البرمجيات. الهدف تقديم حلول رقمية توفّر وقت الناس، ويسهل استعمالها، وتبقى في متناول اليد بقدر الإمكان.",
			"المهم عنده ليس أن يُعرف اسمه، بل أن ينفع عمله الناس."
		]
	},
	ru: {
		title: "Владелец и основатель Nibras Code",
		body: [
			"За Nibras Code стоит независимый энтузиаст программного обеспечения, который видит технологию не только как способ писать код, а как возможность приносить пользу людям.",
			"Он предпочитает, чтобы его узнавали по проектам и полезным решениям, а не по тому, что он выставляет себя вперёд. Подход простой: понять повседневные нужды, убрать лишнюю сложность и сделать технологию доступнее для каждого.",
			"Nibras Code развивается как личная инициатива. Основное направление — инструменты PDF, работа с документами, сервисы QR-кодов и другие полезные приложения для каждого дня.",
			"Мысль за этим проектом не сводится только к созданию программ. Цель — давать цифровые решения, которые берегут время людей, удобны в использовании и остаются по возможности доступными по цене.",
			"Для него главное не то, чтобы знали его имя, а то, чтобы работа приносила людям пользу."
		]
	}
};
function founderCopy(lang) {
	return FOUNDER[lang];
}
function defaultUnutma(lang) {
	const text = translations[lang];
	const notes = Array.from({ length: 12 }, (_, index) => text[`remind_${index + 1}`]);
	return {
		eyebrow: text.remind_btn,
		title: text.remind_h,
		verse: text.remind_verse,
		notes
	};
}
function aboutFromRow(row, lang) {
	if (!row) return defaultAbout(lang);
	try {
		const data = JSON.parse(row.body);
		const base = defaultAbout(lang);
		return {
			...base,
			...data,
			title: data.title || row.title || base.title,
			intro: Array.isArray(data.intro) ? data.intro.map((item) => item.trim()).filter(Boolean) : base.intro,
			approach: Array.isArray(data.approach) ? data.approach.map((item) => item.trim()).filter(Boolean) : base.approach
		};
	} catch {
		return defaultAbout(lang);
	}
}
function unutmaFromRow(row, lang) {
	if (!row) return defaultUnutma(lang);
	try {
		const data = JSON.parse(row.body);
		const base = defaultUnutma(lang);
		return {
			...base,
			...data,
			title: data.title || row.title || base.title,
			notes: Array.isArray(data.notes) ? data.notes.map((item) => item.trim()).filter(Boolean) : base.notes
		};
	} catch {
		return defaultUnutma(lang);
	}
}
function aboutBody(copy) {
	return JSON.stringify(copy);
}
function unutmaBody(copy) {
	return JSON.stringify({
		...copy,
		notes: copy.notes.map((item) => item.trim()).filter(Boolean)
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/apk-diagnose-2NwDVCkW.js
var L = (az, en, tr, ar, ru) => ({
	az,
	en,
	tr,
	ar,
	ru
});
var ERRS = [
	[
		"notinst",
		L("«Tətbiq quraşdırılmadı»", "«App not installed»", "«Uygulama yüklenmedi»", "«لم يتم تثبيت التطبيق»", "«Приложение не установлено»"),
		"apk-qurulmur"
	],
	[
		"parse",
		L("«Paket təhlil edilərkən xəta»", "«There was a problem parsing the package»", "«Paket ayrıştırılırken sorun»", "«حدثت مشكلة أثناء تحليل الحزمة»", "«Ошибка при синтаксическом анализе пакета»"),
		"parse-error"
	],
	[
		"protect",
		L("Play Protect bloklayır", "Play Protect blocks it", "Play Protect engelliyor", "Play Protect يحظره", "Play Protect блокирует"),
		"play-protect-bloklayir"
	],
	[
		"sign",
		L("İmza uyğun deyil / mövcud tətbiqlə toqquşur", "Signature mismatch / conflicts with installed app", "İmza uyuşmuyor / yüklü uygulamayla çakışıyor", "التوقيع لا يطابق / يتعارض مع تطبيق مثبت", "Подпись не совпадает / конфликт с установленным"),
		"imza-uygun-deyil"
	],
	[
		"invalid",
		L("«Paket etibarsızdır»", "«Package appears to be invalid»", "«Paket geçersiz görünüyor»", "«يبدو أن الحزمة غير صالحة»", "«Пакет недействителен»"),
		"paket-etibarsizdir"
	],
	[
		"corrupt",
		L("Fayl zədələnib / tam yüklənməyib", "File is corrupt / incomplete download", "Dosya bozuk / tam inmemiş", "الملف تالف / التنزيل ناقص", "Файл повреждён / скачан не полностью"),
		"apk-fayli-zedelenib"
	],
	[
		"old",
		L("Köhnə versiya qurulmur", "An older version won't install", "Eski sürüm kurulmuyor", "لا يُثبَّت إصدار أقدم", "Старая версия не ставится"),
		"kohne-versiya-qurulmur"
	],
	[
		"device",
		L("«Telefonunuz bu versiyaya uyğun deyil»", "«Your device isn't compatible»", "«Cihazınız uyumlu değil»", "«جهازك غير متوافق»", "«Устройство несовместимо»"),
		"telefon-uygun-deyil"
	]
];
var T$5 = {
	title: L("APK xəta diaqnostikası — 3 sual", "APK error diagnosis — 3 questions", "APK hata teşhisi — 3 soru", "تشخيص أخطاء APK — 3 أسئلة", "Диагностика ошибки APK — 3 вопроса"),
	q1: L("Hansı xəta çıxır?", "What error appears?", "Hangi hata çıkıyor?", "ما الخطأ الذي يظهر؟", "Какая ошибка появляется?"),
	q2: L("Android versiyanız nədir?", "What is your Android version?", "Android sürümünüz nedir?", "ما إصدار Android لديك؟", "Какая у вас версия Android?"),
	q3: L("Fayl .apk, .xapk yoxsa .aab-dir?", "Is the file .apk, .xapk or .aab?", "Dosya .apk mı, .xapk mı, .aab mi?", "هل الملف ‎.apk أم ‎.xapk أم ‎.aab؟", "Файл .apk, .xapk или .aab?"),
	det: L("Brauzer göstərir: Android {v}", "Your browser says: Android {v}", "Tarayıcı diyor: Android {v}", "يقول المتصفح: Android {v}", "Браузер сообщает: Android {v}"),
	ans: L("Həll", "Solution", "Çözüm", "الحل", "Решение"),
	open: L("Addım-addım bələdçini aç", "Open the step-by-step guide", "Adım adım rehberi aç", "افتح الدليل خطوة بخطوة", "Открыть пошаговую инструкцию"),
	again: L("Yenidən başla", "Start over", "Baştan başla", "ابدأ من جديد", "Начать сначала"),
	back: L("Geri", "Back", "Geri", "رجوع", "Назад"),
	v_lt7: L("7.0-dan köhnə", "Older than 7.0", "7.0'dan eski", "أقدم من 7.0", "Старше 7.0"),
	v_7: L("7.x", "7.x", "7.x", "7.x", "7.x"),
	v_8to13: L("8 – 13", "8 – 13", "8 – 13", "8 – 13", "8 – 13"),
	v_14: L("14 və yuxarı", "14 or newer", "14 ve üstü", "14 أو أحدث", "14 и новее"),
	e_apk: L(".apk (tək fayl)", ".apk (single file)", ".apk (tek dosya)", "‎.apk (ملف واحد)", ".apk (один файл)"),
	e_xapk: L(".xapk / .apks / .apkm", ".xapk / .apks / .apkm", ".xapk / .apks / .apkm", "‎.xapk / .apks / .apkm", ".xapk / .apks / .apkm"),
	e_aab: L(".aab", ".aab", ".aab", "‎.aab", ".aab"),
	tooOld: L("Android 7.0-dan köhnə cihazda Nibras tətbiqləri qurulmur (minSdk 24). Veb alətləri brauzerdə istifadə edin.", "Nibras apps don't install below Android 7.0 (minSdk 24). Use the web tools in the browser instead.", "Nibras uygulamaları Android 7.0 altında kurulmaz (minSdk 24). Web araçlarını tarayıcıda kullanın.", "لا تُثبَّت تطبيقات نبراس تحت Android 7.0 (minSdk 24). استخدم أدوات الويب في المتصفح.", "Приложения Nibras не ставятся ниже Android 7.0 (minSdk 24). Используйте веб-инструменты в браузере."),
	aab: L(".aab faylı telefona birbaşa qurulmur — bu Google Play üçün paketdir. Tətbiqi Google Play-dən yükləyin və ya .apk versiyasını tapın.", ".aab files can't be installed on a phone directly — they're for Google Play. Install from Google Play or get the .apk.", ".aab dosyası telefona doğrudan kurulmaz — Google Play içindir. Google Play'den yükleyin ya da .apk sürümünü bulun.", "ملفات ‎.aab لا تُثبَّت مباشرة على الهاتف، فهي مخصصة لـ Google Play. ثبّت من Google Play أو احصل على ‎.apk.", ".aab нельзя установить на телефон напрямую — это пакет для Google Play. Установите из Google Play или найдите .apk."),
	xapk: L(".xapk bir neçə APK-dan ibarət arxivdir; sistem quraşdırıcısı onu açmır. SAI (Split APKs Installer) və ya APKMirror Installer kimi split-quraşdırıcıdan istifadə edin.", ".xapk is an archive of several APKs; the system installer can't open it. Use a split installer such as SAI or APKMirror Installer.", ".xapk birkaç APK içeren bir arşivdir; sistem yükleyicisi açamaz. SAI ya da APKMirror Installer gibi bir split yükleyici kullanın.", "‎.xapk أرشيف يضم عدة ملفات APK ولا يفتحه مثبّت النظام. استخدم مثبّتاً مثل SAI أو APKMirror Installer.", ".xapk — архив из нескольких APK; системный установщик его не открывает. Используйте SAI или APKMirror Installer."),
	unk7: L("Android 7-də: Parametrlər → Təhlükəsizlik → «Naməlum mənbələr»i açın.", "On Android 7: Settings → Security → turn on «Unknown sources».", "Android 7'de: Ayarlar → Güvenlik → «Bilinmeyen kaynaklar»ı açın.", "في Android 7: الإعدادات ← الأمان ← فعّل «مصادر غير معروفة».", "На Android 7: Настройки → Безопасность → включите «Неизвестные источники»."),
	unk8: L("Android 8+: faylı açdığınız tətbiqə (brauzer və ya Fayllar) «Naməlum tətbiqləri quraşdır» icazəsi verin.", "Android 8+: give the app you open the file from (browser or Files) the «Install unknown apps» permission.", "Android 8+: dosyayı açtığınız uygulamaya (tarayıcı ya da Dosyalar) «Bilinmeyen uygulamaları yükle» izni verin.", "Android 8+: امنح التطبيق الذي تفتح منه الملف (المتصفح أو الملفات) إذن «تثبيت تطبيقات غير معروفة».", "Android 8+: дайте приложению, из которого открываете файл (браузер или «Файлы»), разрешение «Установка неизвестных приложений»."),
	a14: L("Android 14+ çox köhnə hədəfli (targetSdk < 23) APK-ları bloklayır; tətbiqin yeni versiyasını götürün.", "Android 14+ blocks APKs with a very old target (targetSdk < 23); get a newer version of the app.", "Android 14+ çok eski hedefli (targetSdk < 23) APK'ları engeller; uygulamanın yeni sürümünü alın.", "يحظر Android 14+ ملفات APK ذات الهدف القديم جداً (targetSdk < 23)؛ احصل على إصدار أحدث.", "Android 14+ блокирует APK со старым target (targetSdk < 23); возьмите новую версию.")
};
var TIP = {
	notinst: L("Ən çox səbəb: köhnə versiya fərqli imza ilə qurulub və ya yaddaş azdır. Köhnəni silib yenidən cəhd edin, 200 MB+ boş yer saxlayın.", "Most often: an old copy signed with a different key is installed, or storage is low. Uninstall the old one, keep 200 MB+ free, retry.", "En sık neden: farklı imzalı eski sürüm yüklü ya da depolama az. Eskisini kaldırın, 200 MB+ boş yer bırakın, tekrar deneyin.", "السبب الأكثر شيوعاً: نسخة قديمة بتوقيع مختلف مثبّتة أو المساحة قليلة. احذف القديمة واترك 200 ميغابايت وأعد المحاولة.", "Чаще всего: установлена старая копия с другой подписью или мало места. Удалите старую, освободите 200 МБ+, повторите."),
	parse: L("Fayl ya tam yüklənməyib, ya da Android versiyanız üçün yeni deyil. Faylı yenidən yükləyin (ölçüsünü yoxlayın).", "The file is incomplete or built for a newer Android than yours. Download it again and check the size.", "Dosya eksik inmiş ya da sizin Android'iniz için fazla yeni. Yeniden indirip boyutu kontrol edin.", "الملف ناقص أو مبني لإصدار Android أحدث. نزّله مجدداً وتحقق من الحجم.", "Файл скачан не полностью или собран для более нового Android. Скачайте заново и проверьте размер."),
	protect: L("Play Protect tanımadığı APK-nı xəbərdar edir. «Daha ətraflı → Yenə də quraşdır» seçin; yalnız rəsmi mənbədən yüklədiyiniz fayla edin.", "Play Protect warns about APKs it doesn't know. Tap «More details → Install anyway» — only for files from the official source.", "Play Protect tanımadığı APK için uyarır. «Daha fazla ayrıntı → Yine de yükle» seçin; yalnızca resmi kaynaktan indirdiğiniz dosyada.", "يحذّر Play Protect من ملفات لا يعرفها. اختر «مزيد من التفاصيل ← التثبيت على أي حال»، فقط لملف من المصدر الرسمي.", "Play Protect предупреждает о незнакомых APK. Нажмите «Подробнее → Всё равно установить» — только для файлов из официального источника."),
	sign: L("Telefondakı versiya başqa açarla imzalanıb (məs. Play versiyası). Məlumatı saxlayın, köhnə tətbiqi silin, sonra quraşdırın.", "The installed copy is signed with another key (e.g. the Play version). Back up, uninstall it, then install.", "Yüklü sürüm başka anahtarla imzalanmış (ör. Play sürümü). Yedekleyin, kaldırın, sonra yükleyin.", "النسخة المثبّتة موقّعة بمفتاح آخر (مثل نسخة Play). احفظ بياناتك واحذفها ثم ثبّت.", "Установленная копия подписана другим ключом (например, версия из Play). Сделайте копию, удалите, затем установите."),
	invalid: L("Fayl adı/uzantısı dəyişib və ya yükləmə qırılıb. Faylı brauzerlə yenidən yükləyin, adının sonu .apk olsun.", "The file name/extension changed or the download broke. Re-download in the browser and make sure it ends with .apk.", "Dosya adı/uzantısı değişmiş ya da indirme kesilmiş. Tarayıcıyla yeniden indirin, sonu .apk olsun.", "تغيّر اسم الملف أو امتداده أو انقطع التنزيل. أعد التنزيل وتأكد أنه ينتهي بـ ‎.apk.", "Изменилось имя/расширение или прервалась загрузка. Скачайте заново, файл должен заканчиваться на .apk."),
	corrupt: L("Yükləməni Wi‑Fi ilə təkrarlayın; messencerlər faylı sıxa və ya korlaya bilər — birbaşa linkdən yükləyin.", "Re-download over Wi‑Fi; messengers can compress or break files — use the direct link.", "Wi‑Fi ile yeniden indirin; mesajlaşma uygulamaları dosyayı bozabilir — doğrudan bağlantıyı kullanın.", "أعد التنزيل عبر Wi‑Fi؛ قد تُتلف تطبيقات المراسلة الملف — استخدم الرابط المباشر.", "Скачайте заново по Wi‑Fi; мессенджеры могут испортить файл — используйте прямую ссылку."),
	old: L("Android daha yeni versiyanın üstünə köhnəni qoymur. Yeni versiyanı silin (məlumat gedə bilər) və ya ən son versiyanı qurun.", "Android won't put an older version over a newer one. Uninstall the newer one (data may be lost) or install the latest.", "Android eski sürümü yeninin üstüne kurmaz. Yeniyi kaldırın (veriler gidebilir) ya da en son sürümü kurun.", "لا يثبّت Android إصداراً أقدم فوق أحدث. احذف الأحدث (قد تضيع البيانات) أو ثبّت الأخير.", "Android не ставит старую версию поверх новой. Удалите новую (данные могут пропасть) или поставьте последнюю."),
	device: L("Prosessor arxitekturası (arm64/armeabi) və ya Android versiyası uyğun deyil. Cihazınıza uyğun APK variantını götürün.", "CPU architecture (arm64/armeabi) or Android version doesn't match. Get the APK variant for your device.", "İşlemci mimarisi (arm64/armeabi) ya da Android sürümü uymuyor. Cihazınıza uygun APK varyantını alın.", "معمارية المعالج (arm64/armeabi) أو إصدار Android غير متوافق. احصل على نسخة APK المناسبة لجهازك.", "Не совпадает архитектура (arm64/armeabi) или версия Android. Возьмите APK под ваше устройство.")
};
function detect$1() {
	if (typeof navigator === "undefined") return null;
	const m = navigator.userAgent.match(/Android\s+(\d+)(?:\.(\d+))?/i);
	if (!m) return null;
	const n = Number(m[1]);
	return {
		ver: n < 7 ? "lt7" : n === 7 ? "7" : n >= 14 ? "14" : "8to13",
		label: m[2] ? `${m[1]}.${m[2]}` : m[1]
	};
}
var chip = "rounded-xl border border-white/15 px-3 py-2 text-start text-sm hover:border-primary hover:bg-white/10";
/** Nibras Logic for APK install errors: 3 questions → exact guide + tailored tips. */
function ApkDiagnose({ lang }) {
	const [err, setErr] = (0, import_react.useState)(null);
	const [ver, setVer] = (0, import_react.useState)(null);
	const [ext, setExt] = (0, import_react.useState)(null);
	const [auto, setAuto] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => setAuto(detect$1()), []);
	const step = !err ? 1 : !ver ? 2 : !ext ? 3 : 4;
	const reset = () => {
		setErr(null);
		setVer(null);
		setExt(null);
	};
	const back = () => ext ? setExt(null) : ver ? setVer(null) : setErr(null);
	let guide = "", lines = [];
	if (step === 4 && err && ver && ext) {
		if (ext === "aab") {
			guide = "apk-qurulmur";
			lines = [T$5.aab[lang]];
		} else if (ext === "xapk") {
			guide = "xapk-qurulmur";
			lines = [T$5.xapk[lang]];
		} else if (ver === "lt7") {
			guide = "telefon-uygun-deyil";
			lines = [T$5.tooOld[lang]];
		} else {
			guide = ERRS.find((e) => e[0] === err)[2];
			lines = [TIP[err][lang], ver === "7" ? T$5.unk7[lang] : T$5.unk8[lang]];
			if (ver === "14") lines.push(T$5.a14[lang]);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "my-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/[0.06] p-4",
		"data-testid": "apk-diagnose",
		"data-nosnippet": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mb-3 flex items-center gap-2 text-lg font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "size-5" }), T$5.title[lang]]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mb-3 flex gap-2 text-xs text-muted",
				children: [
					1,
					2,
					3
				].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: `rounded-full px-2 py-0.5 ${step >= n ? "bg-primary/30 text-fg" : "bg-white/5"}`,
					children: n
				}, n))
			}),
			step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-medium",
				children: T$5.q1[lang]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: ERRS.map(([id, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: chip,
					onClick: () => setErr(id),
					"data-testid": `dx-err-${id}`,
					children: l[lang]
				}, id))
			})] }) : null,
			step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 font-medium",
					children: T$5.q2[lang]
				}),
				auto ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs text-emerald-300",
					children: T$5.det[lang].replace("{v}", auto.label)
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2 sm:grid-cols-4",
					children: [
						"lt7",
						"7",
						"8to13",
						"14"
					].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `${chip} ${auto?.ver === v ? "border-emerald-400" : ""}`,
						onClick: () => setVer(v),
						"data-testid": `dx-ver-${v}`,
						children: T$5[`v_${v}`][lang]
					}, v))
				})
			] }) : null,
			step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 font-medium",
				children: T$5.q3[lang]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-3",
				children: [
					"apk",
					"xapk",
					"aab"
				].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: chip,
					onClick: () => setExt(e),
					"data-testid": `dx-ext-${e}`,
					children: T$5[`e_${e}`][lang]
				}, e))
			})] }) : null,
			step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-testid": "dx-result",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 font-semibold text-emerald-300",
						children: T$5.ans[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "list-disc space-y-1 ps-5 text-sm",
						children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: l }, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: searchTopicPath(lang, "xeta", guide),
						className: "mt-3 inline-block rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white",
						children: [T$5.open[lang], " →"]
					})
				]
			}) : null,
			step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "text-muted hover:text-fg",
					onClick: back,
					children: ["← ", T$5.back[lang]]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-muted hover:text-fg",
					onClick: reset,
					children: T$5.again[lang]
				})]
			}) : null
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/page-assistant-CDLBRKG1.js
var QR_CARD_I18N = {
	"az": {
		"title": "QR xidməti",
		"sub": "Növü seç, xanaları doldur. Boş xana ilə hazırlanmır.",
		"go": "QR hazırla",
		"dl": "Yüklə",
		"open": "QR səhifəsində aç",
		"missing": "{f} boş qala bilməz.",
		"bad": "Bu məlumatla QR hazırlanmır.",
		"alt": "QR kod",
		"kind": {
			"url": "Ünvan",
			"text": "Mətn",
			"phone": "Telefon",
			"email": "E-poçt",
			"whatsapp": "WhatsApp",
			"wifi": "Wi-Fi",
			"vcard": "Vizit",
			"sms": "SMS",
			"location": "Yer",
			"event": "Tədbir",
			"app": "Tətbiq"
		},
		"f": {
			"url": "Ünvan",
			"text": "Mətn",
			"phone": "Telefon",
			"email": "E-poçt",
			"subject": "Mövzu",
			"body": "Mətn",
			"message": "Mesaj",
			"ssid": "Şəbəkə adı",
			"password": "Şifrə",
			"first": "Ad",
			"last": "Soyad",
			"org": "Şirkət",
			"lat": "Enlik",
			"lng": "Uzunluq",
			"evTitle": "Ad",
			"start": "Başlanğıc",
			"place": "Yer"
		},
		"ph": { "text": "Yazı" }
	},
	"en": {
		"title": "QR service",
		"sub": "Pick a type and fill in the fields. It won't be created with empty fields.",
		"go": "Create QR",
		"dl": "Download",
		"open": "Open on the QR page",
		"missing": "{f} cannot be empty.",
		"bad": "A QR code cannot be made from this data.",
		"alt": "QR code",
		"kind": {
			"url": "Link",
			"text": "Text",
			"phone": "Phone",
			"email": "Email",
			"whatsapp": "WhatsApp",
			"wifi": "Wi-Fi",
			"vcard": "Contact",
			"sms": "SMS",
			"location": "Location",
			"event": "Event",
			"app": "App"
		},
		"f": {
			"url": "Link",
			"text": "Text",
			"phone": "Phone",
			"email": "Email",
			"subject": "Subject",
			"body": "Text",
			"message": "Message",
			"ssid": "Network name",
			"password": "Password",
			"first": "First name",
			"last": "Last name",
			"org": "Company",
			"lat": "Latitude",
			"lng": "Longitude",
			"evTitle": "Title",
			"start": "Start",
			"place": "Place"
		},
		"ph": { "text": "Your text" }
	},
	"tr": {
		"title": "QR hizmeti",
		"sub": "Türü seç, alanları doldur. Boş alanla hazırlanmaz.",
		"go": "QR oluştur",
		"dl": "İndir",
		"open": "QR sayfasında aç",
		"missing": "{f} boş bırakılamaz.",
		"bad": "Bu bilgiyle QR oluşturulamaz.",
		"alt": "QR kod",
		"kind": {
			"url": "Adres",
			"text": "Metin",
			"phone": "Telefon",
			"email": "E-posta",
			"whatsapp": "WhatsApp",
			"wifi": "Wi-Fi",
			"vcard": "Kartvizit",
			"sms": "SMS",
			"location": "Konum",
			"event": "Etkinlik",
			"app": "Uygulama"
		},
		"f": {
			"url": "Adres",
			"text": "Metin",
			"phone": "Telefon",
			"email": "E-posta",
			"subject": "Konu",
			"body": "Metin",
			"message": "Mesaj",
			"ssid": "Ağ adı",
			"password": "Şifre",
			"first": "Ad",
			"last": "Soyad",
			"org": "Şirket",
			"lat": "Enlem",
			"lng": "Boylam",
			"evTitle": "Ad",
			"start": "Başlangıç",
			"place": "Yer"
		},
		"ph": { "text": "Yazı" }
	},
	"ar": {
		"title": "خدمة QR",
		"sub": "اختر النوع واملأ الحقول. لا يتم الإنشاء بحقول فارغة.",
		"go": "إنشاء QR",
		"dl": "تنزيل",
		"open": "فتح في صفحة QR",
		"missing": "حقل «{f}» لا يمكن أن يكون فارغاً.",
		"bad": "لا يمكن إنشاء QR بهذه البيانات.",
		"alt": "رمز QR",
		"kind": {
			"url": "رابط",
			"text": "نص",
			"phone": "هاتف",
			"email": "بريد إلكتروني",
			"whatsapp": "WhatsApp",
			"wifi": "Wi-Fi",
			"vcard": "بطاقة",
			"sms": "SMS",
			"location": "موقع",
			"event": "فعالية",
			"app": "تطبيق"
		},
		"f": {
			"url": "الرابط",
			"text": "النص",
			"phone": "الهاتف",
			"email": "البريد الإلكتروني",
			"subject": "الموضوع",
			"body": "النص",
			"message": "الرسالة",
			"ssid": "اسم الشبكة",
			"password": "كلمة المرور",
			"first": "الاسم",
			"last": "اللقب",
			"org": "الشركة",
			"lat": "خط العرض",
			"lng": "خط الطول",
			"evTitle": "العنوان",
			"start": "البداية",
			"place": "المكان"
		},
		"ph": { "text": "اكتب النص" }
	},
	"ru": {
		"title": "Сервис QR",
		"sub": "Выберите тип и заполните поля. С пустыми полями QR не создаётся.",
		"go": "Создать QR",
		"dl": "Скачать",
		"open": "Открыть на странице QR",
		"missing": "Поле «{f}» не может быть пустым.",
		"bad": "Из этих данных QR создать нельзя.",
		"alt": "QR-код",
		"kind": {
			"url": "Ссылка",
			"text": "Текст",
			"phone": "Телефон",
			"email": "E-mail",
			"whatsapp": "WhatsApp",
			"wifi": "Wi-Fi",
			"vcard": "Визитка",
			"sms": "SMS",
			"location": "Место",
			"event": "Событие",
			"app": "Приложение"
		},
		"f": {
			"url": "Ссылка",
			"text": "Текст",
			"phone": "Телефон",
			"email": "E-mail",
			"subject": "Тема",
			"body": "Текст",
			"message": "Сообщение",
			"ssid": "Имя сети",
			"password": "Пароль",
			"first": "Имя",
			"last": "Фамилия",
			"org": "Компания",
			"lat": "Широта",
			"lng": "Долгота",
			"evTitle": "Название",
			"start": "Начало",
			"place": "Место"
		},
		"ph": { "text": "Ваш текст" }
	}
};
var KINDS$1 = [
	{
		id: "url",
		icon: "🔗",
		fields: [{
			k: "url",
			f: "url",
			ph: "https://",
			req: true
		}]
	},
	{
		id: "text",
		icon: "✎",
		fields: [{
			k: "text",
			f: "text",
			phk: "text",
			req: true,
			area: true
		}]
	},
	{
		id: "phone",
		icon: "☎",
		fields: [{
			k: "phone",
			f: "phone",
			ph: "+994",
			req: true
		}]
	},
	{
		id: "email",
		icon: "✉",
		fields: [
			{
				k: "email",
				f: "email",
				ph: "ad@mail.com",
				req: true
			},
			{
				k: "subject",
				f: "subject"
			},
			{
				k: "body",
				f: "body",
				area: true
			}
		]
	},
	{
		id: "whatsapp",
		icon: "💬",
		fields: [{
			k: "phone",
			f: "phone",
			ph: "994501112233",
			req: true
		}, {
			k: "text",
			f: "message",
			area: true
		}]
	},
	{
		id: "wifi",
		icon: "📶",
		fields: [{
			k: "ssid",
			f: "ssid",
			req: true
		}, {
			k: "password",
			f: "password"
		}]
	},
	{
		id: "vcard",
		icon: "👤",
		fields: [
			{
				k: "firstName",
				f: "first",
				req: true
			},
			{
				k: "lastName",
				f: "last"
			},
			{
				k: "phone",
				f: "phone"
			},
			{
				k: "email",
				f: "email"
			},
			{
				k: "org",
				f: "org"
			}
		]
	},
	{
		id: "sms",
		icon: "💬",
		fields: [{
			k: "phone",
			f: "phone",
			ph: "+994",
			req: true
		}, {
			k: "text",
			f: "message",
			area: true
		}]
	},
	{
		id: "location",
		icon: "📍",
		fields: [{
			k: "lat",
			f: "lat",
			req: true
		}, {
			k: "lng",
			f: "lng",
			req: true
		}]
	},
	{
		id: "event",
		icon: "📅",
		fields: [
			{
				k: "title",
				f: "evTitle",
				req: true
			},
			{
				k: "start",
				f: "start",
				req: true
			},
			{
				k: "location",
				f: "place"
			}
		]
	},
	{
		id: "app",
		icon: "▣",
		fields: [{
			k: "url",
			f: "url",
			ph: "https://",
			req: true
		}]
	}
];
function buildQrValue(kind, d) {
	const digits = (s) => s.replace(/\D/g, "");
	if (kind === "url" || kind === "app") return /^https?:\/\//i.test(d.url) ? d.url : "https://" + d.url;
	if (kind === "text") return d.text;
	if (kind === "phone") return "tel:" + d.phone.replace(/[^\d+]/g, "");
	if (kind === "sms") return "sms:" + d.phone.replace(/[^\d+]/g, "") + (d.text ? "?body=" + encodeURIComponent(d.text) : "");
	if (kind === "email") return "mailto:" + d.email + (d.subject ? "?subject=" + encodeURIComponent(d.subject) : "") + (d.body ? (d.subject ? "&" : "?") + "body=" + encodeURIComponent(d.body) : "");
	if (kind === "whatsapp") return "https://wa.me/" + digits(d.phone) + (d.text ? "?text=" + encodeURIComponent(d.text) : "");
	if (kind === "wifi") return "WIFI:T:WPA;S:" + d.ssid + ";P:" + (d.password || "") + ";;";
	if (kind === "location") return "https://maps.google.com/?q=" + encodeURIComponent(d.lat + "," + d.lng);
	if (kind === "event") return [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"BEGIN:VEVENT",
		"SUMMARY:" + d.title,
		d.start ? "DTSTART:" + d.start : "",
		d.location ? "LOCATION:" + d.location : "",
		"END:VEVENT",
		"END:VCALENDAR"
	].filter(Boolean).join("\n");
	if (kind === "vcard") return [
		"BEGIN:VCARD",
		"VERSION:3.0",
		"N:" + (d.lastName || "") + ";" + (d.firstName || ""),
		"FN:" + ((d.firstName || "") + " " + (d.lastName || "")).trim(),
		d.phone ? "TEL:" + d.phone : "",
		d.email ? "EMAIL:" + d.email : "",
		d.org ? "ORG:" + d.org : "",
		"END:VCARD"
	].filter(Boolean).join("\n");
	return "";
}
/** QR form card shown inside the assistant. `lang` = reply language (from the ::qrform::kind@lang marker). */
function QrCard({ lang, preset }) {
	const C = QR_CARD_I18N[lang in QR_CARD_I18N ? lang : "az"];
	const dir = lang === "ar" ? "rtl" : "ltr";
	const [kind, setKind] = (0, import_react.useState)(KINDS$1.some((k) => k.id === preset) ? preset : "");
	const [vals, setVals] = (0, import_react.useState)({});
	const [err, setErr] = (0, import_react.useState)("");
	const [shot, setShot] = (0, import_react.useState)(null);
	const cur = KINDS$1.find((k) => k.id === kind);
	const field = "w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-sm";
	function go() {
		if (!cur) return;
		const d = {};
		for (const f of cur.fields) {
			d[f.k] = (vals[f.k] || "").trim();
			if (f.req && !d[f.k]) return setErr(C.missing.replace("{f}", C.f[f.f]));
		}
		const value = buildQrValue(cur.id, d);
		if (!value) return setErr(C.bad);
		const u = new URL(`https://nibrascode.com${lang === "az" ? "" : "/" + lang}/qr`);
		u.searchParams.set("type", cur.id);
		for (const [k, v] of Object.entries(d)) if (v) u.searchParams.set(k, v);
		setErr("");
		setShot({
			url: "/api/qr?text=" + encodeURIComponent(value),
			page: u.toString()
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		dir,
		className: "mt-2 rounded-xl border border-white/10 bg-black/20 p-3 text-sm",
		"data-qr-card": lang,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-8 place-items-center rounded-lg bg-white/15 text-xs font-bold",
					children: "QR"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold",
					children: C.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted",
					children: C.sub
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: KINDS$1.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setKind(k.id);
						setErr("");
						setShot(null);
					},
					className: "rounded-full border px-3 py-1 text-xs " + (k.id === kind ? "border-white bg-white text-black" : "border-white/20"),
					children: [
						k.icon,
						" ",
						C.kind[k.id]
					]
				}, k.id))
			}),
			cur ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-2",
				children: [cur.fields.map((f) => {
					const label = C.f[f.f] + (f.req ? " *" : "");
					const common = {
						value: vals[f.k] || "",
						placeholder: f.ph || f.phk && C.ph[f.phk] || C.f[f.f],
						className: field,
						dir: "auto",
						onChange: (e) => setVals((v) => ({
							...v,
							[f.k]: e.target.value
						}))
					};
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "grid gap-1 text-xs text-muted",
						children: [label, f.area ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							...common,
							rows: 3
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { ...common })]
					}, f.k);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: go,
					className: "rounded-lg bg-white/15 px-4 py-2 font-semibold",
					children: C.go
				})]
			}) : null,
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 text-xs text-red-300",
				role: "alert",
				children: err
			}) : null,
			shot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: shot.url,
					alt: C.alt,
					width: 180,
					height: 180,
					className: "rounded-xl bg-white p-2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: shot.url,
						download: "nibras-qr.png",
						target: "_blank",
						rel: "noopener",
						className: "rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold",
						children: C.dl
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: shot.page,
						target: "_blank",
						rel: "noopener",
						className: "rounded-lg border border-white/20 px-3 py-1.5 text-xs",
						children: C.open
					})]
				})]
			}) : null
		]
	});
}
var kindOf = (f) => {
	const n = f.name.toLowerCase();
	if (f.type === "application/pdf" || n.endsWith(".pdf")) return "pdf";
	if (n.endsWith(".docx")) return "docx";
	if (/^image\/(png|jpeg|webp)$/.test(f.type) || /\.(png|jpe?g|webp)$/.test(n)) return "image";
	return "";
};
/** Runs one PDF action in the browser (lazy runner bundle) and renders the result cards. */
function PdfRun({ run }) {
	const box = (0, import_react.useRef)(null);
	const started = (0, import_react.useRef)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (started.current || !box.current) return;
		started.current = true;
		import(
			/* @vite-ignore */
			"/pdf-assets/runner/runner.js"
).then((m) => m.default.handle({
			action: run.action,
			files: run.files,
			lang: run.lang,
			container: box.current
		})).then(() => setDone(true)).catch(() => {});
	}, [run]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: box }), done && run.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 text-xs text-muted",
		children: run.done
	}) : null] });
}
var T$4 = {
	az: {
		title: "Nibras AI köməkçi",
		hint: {
			qr: "QR haqqında soruş: «Wi-Fi üçün QR necə düzəldim?»",
			erase: "Fon silmə haqqında soruş: «Şəklin fonunu necə silim?»",
			pdf: ""
		},
		ph: "Sualını yaz...",
		send: "Göndər",
		thinking: "Düşünür...",
		err: "Cavab alınmadı. Bir az sonra yenidən yoxla.",
		net: "Şəbəkə xətası. Bir az sonra yenidən yoxla.",
		attach: "PDF və ya şəkil əlavə et",
		drop: "Faylı bura burax",
		bad: "Yalnız PDF, DOCX və şəkil qəbul olunur.",
		pdfHint: "PDF yüklə və yaz: «şəkillərə çevir», «mətni çıxar», «birləşdir», «parol qoy»"
	},
	en: {
		title: "Nibras AI assistant",
		hint: {
			qr: "Ask about QR: “How do I make a QR code for Wi-Fi?”",
			erase: "Ask about background removal: “How do I remove a photo background?”",
			pdf: ""
		},
		ph: "Type your question...",
		send: "Send",
		thinking: "Thinking...",
		err: "No answer received. Please try again in a moment.",
		net: "Network error. Please try again in a moment.",
		attach: "Attach a PDF or image",
		drop: "Drop the file here",
		bad: "Only PDF, DOCX and images are accepted.",
		pdfHint: "Attach a PDF and write: “convert to images”, “extract text”, “merge”, “add password”"
	},
	tr: {
		title: "Nibras AI yardımcı",
		hint: {
			qr: "QR hakkında sor: «Wi-Fi için QR nasıl yapılır?»",
			erase: "Arka plan silme hakkında sor: «Fotoğrafın arka planını nasıl silerim?»",
			pdf: ""
		},
		ph: "Sorunu yaz...",
		send: "Gönder",
		thinking: "Düşünüyor...",
		err: "Cevap alınamadı. Biraz sonra tekrar dene.",
		net: "Ağ hatası. Biraz sonra tekrar dene.",
		attach: "PDF veya görsel ekle",
		drop: "Dosyayı buraya bırak",
		bad: "Yalnızca PDF, DOCX ve görseller kabul edilir.",
		pdfHint: "PDF ekle ve yaz: «görsellere çevir», «metni çıkar», «birleştir», «parola ekle»"
	},
	ar: {
		title: "مساعد Nibras AI",
		hint: {
			qr: "اسأل عن QR: «كيف أنشئ رمز QR للـ Wi-Fi؟»",
			erase: "اسأل عن إزالة الخلفية: «كيف أزيل خلفية الصورة؟»",
			pdf: ""
		},
		ph: "اكتب سؤالك...",
		send: "إرسال",
		thinking: "يفكّر...",
		err: "لم تصل إجابة. حاول مرة أخرى بعد قليل.",
		net: "خطأ في الشبكة. حاول مرة أخرى بعد قليل.",
		attach: "أرفق PDF أو صورة",
		drop: "أفلت الملف هنا",
		bad: "يُقبل فقط PDF وDOCX والصور.",
		pdfHint: "أرفق PDF واكتب: «حوّل إلى صور»، «استخرج النص»، «ادمج»، «أضف كلمة مرور»"
	},
	ru: {
		title: "Помощник Nibras AI",
		hint: {
			qr: "Спросите про QR: «Как сделать QR-код для Wi-Fi?»",
			erase: "Спросите про удаление фона: «Как убрать фон с фото?»",
			pdf: ""
		},
		ph: "Напишите вопрос...",
		send: "Отправить",
		thinking: "Думает...",
		err: "Ответ не получен. Попробуйте ещё раз чуть позже.",
		net: "Ошибка сети. Попробуйте ещё раз чуть позже.",
		attach: "Прикрепить PDF или изображение",
		drop: "Отпустите файл здесь",
		bad: "Принимаются только PDF, DOCX и изображения.",
		pdfHint: "Прикрепите PDF и напишите: «в изображения», «извлеки текст», «объедини», «поставь пароль»"
	}
};
/** Small Nibras AI box shared by /qr and /erase. Sends the selected UI language; the server
*  also detects the language of the question and answers in that language. */
function PageAssistant({ topic }) {
	const { lang } = useI18n$1();
	const c = T$4[lang] ?? T$4.az;
	const [msgs, setMsgs] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const endRef = (0, import_react.useRef)(null);
	const [files, setFiles] = (0, import_react.useState)([]);
	const [pending, setPending] = (0, import_react.useState)([]);
	const [over, setOver] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	const pick = (0, import_react.useRef)(null);
	function addFiles(list) {
		const add = [];
		for (const f of Array.from(list)) {
			const kind = kindOf(f);
			if (!kind) {
				setNote(c.bad);
				continue;
			}
			add.push({
				id: `f${Date.now().toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}`,
				file: f,
				kind,
				name: f.name
			});
		}
		if (!add.length) return;
		setNote("");
		setFiles((cur) => [...cur, ...add].slice(-12));
		setPending((cur) => [...cur, ...add.map((a) => a.id)]);
	}
	const onDrop = (e) => {
		if (!e.dataTransfer?.types?.includes("Files")) return;
		e.preventDefault();
		setOver(false);
		addFiles(e.dataTransfer.files);
	};
	async function ask(e) {
		e.preventDefault();
		const attachedNow = files.filter((f) => pending.includes(f.id));
		const q = input.trim() || (attachedNow.length ? `📎 ${attachedNow.map((f) => f.name).join(", ").slice(0, 200)}` : "");
		if (!q || busy) return;
		setInput("");
		const next = [...msgs, {
			role: "user",
			text: q
		}];
		setMsgs(next);
		setBusy(true);
		try {
			const data = await (await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					message: q,
					lang,
					mode: "ask",
					files: files.length ? files.map((f) => ({
						id: f.id,
						name: f.name,
						kind: f.kind,
						attached: pending.includes(f.id)
					})) : void 0,
					messages: next.slice(-8).map((m) => ({
						role: m.role === "bot" ? "assistant" : "user",
						text: m.text
					}))
				})
			})).json();
			setPending([]);
			if (data.pdfAction) {
				const byId = new Map(files.map((f) => [f.id, f.file]));
				const run = {
					action: data.pdfAction,
					files: data.pdfAction.targets.map((id) => byId.get(id)).filter((f) => !!f),
					lang: data.lang || lang,
					done: data.done
				};
				setMsgs((m) => [...m, {
					role: "bot",
					text: data.reply || "",
					pdf: run
				}]);
				return;
			}
			const raw = String(data.reply || c.err);
			const hit = raw.match(/::qrform::([a-z]*)(?:@([a-z]{2}))?/);
			const text = raw.replace(/^::\w+::.*$/gm, "").trim() || (hit ? "" : c.err);
			setMsgs((m) => [...m, {
				role: "bot",
				text,
				url: data.url,
				card: hit ? {
					kind: hit[1] || "",
					lang: hit[2] || lang
				} : void 0
			}]);
		} catch {
			setMsgs((m) => [...m, {
				role: "bot",
				text: c.net
			}]);
		} finally {
			setBusy(false);
			setTimeout(() => endRef.current?.scrollIntoView({ block: "nearest" }), 0);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `relative mt-8 rounded-2xl border bg-white/5 p-4 transition ${over ? "border-primary bg-primary/10" : "border-white/10"}`,
		"aria-label": c.title,
		dir: lang === "ar" ? "rtl" : "ltr",
		onDragOver: (e) => {
			if (e.dataTransfer?.types?.includes("Files")) {
				e.preventDefault();
				setOver(true);
			}
		},
		onDragLeave: (e) => {
			if (e.currentTarget === e.target) setOver(false);
		},
		onDrop,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-base font-bold",
				children: c.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: topic === "pdf" ? c.pdfHint : c.hint[topic]
			}),
			over ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-semibold text-primary",
				children: c.drop
			}) : null,
			msgs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex max-h-[34rem] flex-col gap-2 overflow-auto text-sm",
				"aria-live": "polite",
				children: [
					msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: m.role === "user" ? "self-end rounded-xl bg-white/10 px-3 py-2" : "self-start whitespace-pre-line rounded-xl bg-black/20 px-3 py-2",
						dir: "auto",
						children: [
							m.text,
							m.pdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfRun, { run: m.pdf }) : null,
							m.card ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCard, {
								lang: m.card.lang,
								preset: m.card.kind
							}) : null,
							m.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.url,
								alt: "QR",
								width: 160,
								height: 160,
								className: "mt-2 rounded-lg bg-white p-2"
							}) : null
						]
					}, i)),
					busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted",
						children: c.thinking
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
				]
			}) : null,
			files.some((f) => pending.includes(f.id)) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				"data-testid": "assistant-chips",
				children: files.filter((f) => pending.includes(f.id)).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex max-w-full items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 py-1 ps-3 pe-1 text-xs font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						style: { maxWidth: "14rem" },
						children: f.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "×",
						className: "grid size-5 place-items-center rounded-full hover:bg-white/15",
						onClick: () => {
							setPending((p) => p.filter((x) => x !== f.id));
							setFiles((p) => p.filter((x) => x.id !== f.id));
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
					})]
				}, f.id))
			}) : null,
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-red-300",
				children: note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: ask,
				className: "mt-3 flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: pick,
						type: "file",
						hidden: true,
						multiple: true,
						accept: "application/pdf,.pdf,.docx,image/png,image/jpeg,image/webp",
						"data-testid": "assistant-file",
						onChange: (e) => {
							if (e.target.files) addFiles(e.target.files);
							e.target.value = "";
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": c.attach,
						title: c.attach,
						onClick: () => pick.current?.click(),
						className: "grid size-10 shrink-0 place-items-center rounded-lg border border-white/15 bg-black/20 transition hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: input,
						onChange: (e) => setInput(e.target.value),
						placeholder: c.ph,
						maxLength: 800,
						className: "min-w-0 flex-1 rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-sm",
						dir: "auto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy || !input.trim(),
						className: "rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold disabled:opacity-50",
						children: c.send
					})
				]
			})
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/arabic-verbs-BLvxa7J2.js
var VERB_HUB = "/ereb-dili/feil";
var verbPath = (slug) => `${VERB_HUB}/${slug}`;
var cache = null;
/** 704 verbs from the Nibras Arabic app (src/data/arabic-verbs.json, made by scripts/gen-arabic-verbs.mjs). */
function loadVerbs() {
	cache ??= import("./arabic-verbs-IOrxE-xp.mjs").then((m) => m.default);
	return cache;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/group-page-xna1OV4S.js
var LEAD = {
	g1: {
		az: "Saytdakı bütün alətlər. Hesab açılmır.",
		en: "All tools on the site. No account needed.",
		tr: "Sitedeki tüm araçlar. Hesap gerekmez.",
		ar: "كل أدوات الموقع. لا حاجة إلى حساب.",
		ru: "Все инструменты сайта. Аккаунт не нужен."
	},
	g2: {
		az: "Kod yazmaq, APK və iş paneli — hamısı bir siyahıda.",
		en: "Writing code, APK, and work panels — all in one list.",
		tr: "Kod yazmak, APK ve çalışma paneli — hepsi bir listede.",
		ar: "كتابة الكود وAPK ولوحات العمل — كلها في قائمة واحدة.",
		ru: "Код, APK и рабочие панели — всё в одном списке."
	},
	g3: {
		az: "Dərslər, yoxlamalar və yardım səhifələri.",
		en: "Lessons, checks, and help pages.",
		tr: "Dersler, kontroller ve yardım sayfaları.",
		ar: "الدروس والفحوص وصفحات المساعدة.",
		ru: "Уроки, проверки и страницы помощи."
	}
};
var DESC = {
	g1: {
		az: "Pulsuz onlayn alətlər: PDF hazırla, QR hazırla, fon sil, şəkil sıx, hesabla, plan hazırla, sual qur və Nibras AI. Hesab lazım deyil.",
		en: "Free online tools: make a PDF, make a QR code, remove a background, compress photos, calculate, make a plan, build questions and Nibras AI. No account.",
		tr: "Ücretsiz çevrim içi araçlar: PDF hazırla, QR hazırla, arka plan sil, foto sıkıştır, hesapla, plan hazırla, soru kur ve Nibras AI. Hesap gerekmez.",
		ar: "أدوات مجانية على الإنترنت: PDF وQR وحذف الخلفية وضغط الصور والحساب والخطط والأسئلة وNibras AI. بلا حساب.",
		ru: "Бесплатные онлайн-инструменты: PDF, QR-код, удаление фона, сжатие фото, расчёты, планы, вопросы и Nibras AI. Без аккаунта."
	},
	g2: {
		az: "Code Studio, Workspace və APK Studio: brauzerdə kod yaz, layihəni saxla və APK üçün ZIP hazırla. Pulsuz, hesabsız.",
		en: "Code Studio, Workspace and APK Studio: write code in the browser, keep projects and prepare a ZIP for an APK. Free, no account.",
		tr: "Code Studio, Workspace ve APK Studio: tarayıcıda kod yaz, projeyi sakla ve APK için ZIP hazırla. Ücretsiz, hesapsız.",
		ar: "Code Studio وWorkspace وAPK Studio: اكتب الكود في المتصفح واحفظ المشروع وجهّز ZIP لتطبيق APK. مجاني وبلا حساب.",
		ru: "Code Studio, Workspace и APK Studio: пишите код в браузере, храните проекты и готовьте ZIP для APK. Бесплатно, без аккаунта."
	},
	g3: {
		az: "Learn, Logic Lab, Site Doctor, Error Help və digər yoxlama alətləri: öyrən, saytı yoxla, xətanı başa düş. Pulsuz.",
		en: "Learn, Logic Lab, Site Doctor, Error Help and other check tools: learn, check a site, understand an error. Free.",
		tr: "Learn, Logic Lab, Site Doctor, Error Help ve diğer kontrol araçları: öğren, siteyi kontrol et, hatayı anla. Ücretsiz.",
		ar: "Learn وLogic Lab وSite Doctor وError Help وأدوات فحص أخرى: تعلّم وافحص موقعك وافهم الخطأ. مجاناً.",
		ru: "Learn, Logic Lab, Site Doctor, Error Help и другие проверки: учитесь, проверяйте сайт, разбирайте ошибки. Бесплатно."
	}
};
var HOW_T = {
	az: "Necə istifadə etməli",
	en: "How to use",
	tr: "Nasıl kullanılır",
	ar: "طريقة الاستخدام",
	ru: "Как пользоваться"
};
var FAQ_T = {
	az: "Tez-tez verilən suallar",
	en: "Frequently asked questions",
	tr: "Sık sorulan sorular",
	ar: "أسئلة شائعة",
	ru: "Частые вопросы"
};
var PRIV_T = {
	az: "Məxfilik",
	en: "Privacy",
	tr: "Gizlilik",
	ar: "الخصوصية",
	ru: "Конфиденциальность"
};
var POLICY = {
	az: "Məxfilik siyasəti",
	en: "Privacy policy",
	tr: "Gizlilik politikası",
	ar: "سياسة الخصوصية",
	ru: "Политика конфиденциальности"
};
var AI_POLICY = {
	az: "Nibras AI məxfiliyi",
	en: "Nibras AI privacy",
	tr: "Nibras AI gizliliği",
	ar: "خصوصية Nibras AI",
	ru: "Конфиденциальность Nibras AI"
};
var HOW = {
	az: "Lazım olan alətə toxunun — o dərhal açılır. Hesab, qeydiyyat və ödəniş yoxdur. Hamısı telefonda və kompüterdə brauzerdə işləyir.",
	en: "Tap the tool you need — it opens right away. There is no account, sign-up or payment. Everything works in the browser on phone and computer.",
	tr: "İhtiyacınız olan araca dokunun — hemen açılır. Hesap, kayıt veya ödeme yoktur. Hepsi telefonda ve bilgisayarda tarayıcıda çalışır.",
	ar: "اضغط على الأداة التي تحتاجها فتُفتح فوراً. لا حساب ولا تسجيل ولا دفع. كل شيء يعمل في المتصفح على الهاتف والكمبيوتر.",
	ru: "Нажмите нужный инструмент — он сразу откроется. Нет аккаунта, регистрации и оплаты. Всё работает в браузере на телефоне и компьютере."
};
var FAQ = {
	g1: [
		{
			q: {
				az: "Bu alətlər pulsuzdur?",
				en: "Are these tools free?",
				tr: "Bu araçlar ücretsiz mi?",
				ar: "هل هذه الأدوات مجانية؟",
				ru: "Эти инструменты бесплатные?"
			},
			a: {
				az: "Bəli, pulsuzdur. Hesab açmaq lazım deyil.",
				en: "Yes, they are free. You do not need an account.",
				tr: "Evet, ücretsiz. Hesap açmanız gerekmez.",
				ar: "نعم، مجانية. لا تحتاج إلى حساب.",
				ru: "Да, бесплатно. Аккаунт не нужен."
			}
		},
		{
			q: {
				az: "Faylım serverə yüklənir?",
				en: "Is my file uploaded to a server?",
				tr: "Dosyam sunucuya yüklenir mi?",
				ar: "هل يُرفع ملفي إلى خادم؟",
				ru: "Мой файл загружается на сервер?"
			},
			a: {
				az: "PDF, QR, fon silmə və şəkil sıxma brauzerinizdə işləyir. Fayl Nibras Code serverinə göndərilmir.",
				en: "PDF, QR, background removal and photo compression run in your browser. The file is not sent to a Nibras Code server.",
				tr: "PDF, QR, arka plan silme ve foto sıkıştırma tarayıcınızda çalışır. Dosya Nibras Code sunucusuna gönderilmez.",
				ar: "PDF وQR وحذف الخلفية وضغط الصور تعمل في متصفحك. لا يُرسل الملف إلى خادم Nibras Code.",
				ru: "PDF, QR, удаление фона и сжатие фото работают в браузере. Файл не отправляется на сервер Nibras Code."
			}
		},
		{
			q: {
				az: "Telefonda işləyir?",
				en: "Does it work on a phone?",
				tr: "Telefonda çalışır mı?",
				ar: "هل تعمل على الهاتف؟",
				ru: "Работает ли на телефоне?"
			},
			a: {
				az: "Bəli, istənilən müasir brauzerdə işləyir. Proqram quraşdırmaq lazım deyil.",
				en: "Yes, in any modern browser. Nothing to install.",
				tr: "Evet, her modern tarayıcıda çalışır. Kurulum gerekmez.",
				ar: "نعم، في أي متصفح حديث. لا حاجة إلى تثبيت.",
				ru: "Да, в любом современном браузере. Ничего устанавливать не нужно."
			}
		},
		{
			q: {
				az: "Nibras AI nədir?",
				en: "What is Nibras AI?",
				tr: "Nibras AI nedir?",
				ar: "ما هو Nibras AI؟",
				ru: "Что такое Nibras AI?"
			},
			a: {
				az: "Sual yazıb cavab aldığınız söhbət alətidir. Yazdığınız mətn cavab üçün serverə göndərilir.",
				en: "A chat tool where you type a question and get an answer. Your text is sent to a server to make the answer.",
				tr: "Soru yazıp cevap aldığınız sohbet aracıdır. Yazdığınız metin cevap için sunucuya gönderilir.",
				ar: "أداة محادثة تكتب فيها سؤالك وتحصل على جواب. يُرسل نصك إلى الخادم لإعداد الجواب.",
				ru: "Чат, где вы пишете вопрос и получаете ответ. Ваш текст отправляется на сервер для ответа."
			}
		}
	],
	g2: [
		{
			q: {
				az: "Studio nədir?",
				en: "What is Studio?",
				tr: "Studio nedir?",
				ar: "ما هو Studio؟",
				ru: "Что такое Studio?"
			},
			a: {
				az: "Brauzerdə kod yazmaq və yoxlamaq üçün redaktordur. Layihələr brauzerinizdə saxlanır.",
				en: "An editor for writing and checking code in the browser. Projects are saved in your browser.",
				tr: "Tarayıcıda kod yazmak ve kontrol etmek için bir editördür. Projeler tarayıcınızda saklanır.",
				ar: "محرر لكتابة الكود وفحصه في المتصفح. تُحفظ المشاريع في متصفحك.",
				ru: "Редактор для написания и проверки кода в браузере. Проекты хранятся в вашем браузере."
			}
		},
		{
			q: {
				az: "APK necə hazırlanır?",
				en: "How do I make an APK?",
				tr: "APK nasıl hazırlanır?",
				ar: "كيف أجهّز APK؟",
				ru: "Как сделать APK?"
			},
			a: {
				az: "APK Studio layihəni ZIP kimi cihazınıza endirir. Onu sonra özünüz yığırsınız.",
				en: "APK Studio downloads the project as a ZIP to your device. You build it yourself afterwards.",
				tr: "APK Studio projeyi ZIP olarak cihazınıza indirir. Sonra kendiniz derlersiniz.",
				ar: "يحمّل APK Studio المشروع كملف ZIP إلى جهازك. ثم تبنيه بنفسك.",
				ru: "APK Studio скачивает проект ZIP-архивом на ваше устройство. Собираете его вы сами."
			}
		},
		{
			q: {
				az: "Brauzeri təmizləsəm nə olur?",
				en: "What if I clear my browser?",
				tr: "Tarayıcıyı temizlersem ne olur?",
				ar: "ماذا لو مسحت بيانات المتصفح؟",
				ru: "Что будет, если очистить браузер?"
			},
			a: {
				az: "Layihələr silinir və geri qaytarılmır. Vacib işin ZIP nüsxəsini saxlayın.",
				en: "Projects are deleted and cannot be restored. Keep a ZIP copy of important work.",
				tr: "Projeler silinir ve geri gelmez. Önemli işlerin ZIP kopyasını saklayın.",
				ar: "تُحذف المشاريع ولا يمكن استعادتها. احتفظ بنسخة ZIP من العمل المهم.",
				ru: "Проекты удалятся без возможности восстановления. Храните ZIP-копию важной работы."
			}
		}
	],
	g3: [
		{
			q: {
				az: "Kimlər üçündür?",
				en: "Who is it for?",
				tr: "Kimler için?",
				ar: "لمن هذه الأدوات؟",
				ru: "Для кого это?"
			},
			a: {
				az: "Proqramlaşdırmağa yeni başlayanlar üçündür. Sadə dildə izah olunur.",
				en: "For people new to programming. Everything is explained in plain words.",
				tr: "Programlamaya yeni başlayanlar için. Sade dille anlatılır.",
				ar: "للمبتدئين في البرمجة. الشرح بلغة بسيطة.",
				ru: "Для тех, кто только начинает программировать. Объяснения простым языком."
			}
		},
		{
			q: {
				az: "Site Doctor nəyi yoxlayır?",
				en: "What does Site Doctor check?",
				tr: "Site Doctor neyi kontrol eder?",
				ar: "ماذا يفحص Site Doctor؟",
				ru: "Что проверяет Site Doctor?"
			},
			a: {
				az: "Yazdığınız ünvanın açıq səhifəsini, robots.txt və sitemap faylını yoxlayır. Nəticə saxlanmır.",
				en: "It checks the public page, robots.txt and sitemap of the address you enter. The result is not stored.",
				tr: "Girdiğiniz adresin açık sayfasını, robots.txt ve sitemap dosyasını kontrol eder. Sonuç saklanmaz.",
				ar: "يفحص الصفحة العامة وملف robots.txt وsitemap للعنوان الذي تكتبه. لا تُحفظ النتيجة.",
				ru: "Проверяет публичную страницу, robots.txt и sitemap указанного адреса. Результат не сохраняется."
			}
		},
		{
			q: {
				az: "Error Help necə işləyir?",
				en: "How does Error Help work?",
				tr: "Error Help nasıl çalışır?",
				ar: "كيف يعمل Error Help؟",
				ru: "Как работает Error Help?"
			},
			a: {
				az: "Xəta mətnini yapışdırırsınız və sadə izah alırsınız. Mətn izah üçün serverə göndərilir.",
				en: "You paste an error message and get a plain explanation. The text is sent to a server for the explanation.",
				tr: "Hata metnini yapıştırırsınız ve sade bir açıklama alırsınız. Metin açıklama için sunucuya gönderilir.",
				ar: "تلصق نص الخطأ وتحصل على شرح بسيط. يُرسل النص إلى الخادم للشرح.",
				ru: "Вставляете текст ошибки и получаете простое объяснение. Текст отправляется на сервер."
			}
		}
	]
};
var PRIV = {
	g1: {
		az: "PDF hazırla, QR hazırla, fon sil, şəkil sıx və ZIP brauzerinizdə işləyir. Seçdiyiniz fayllar Nibras Code serverinə göndərilmir. Hesabla, Plan hazırla və Sual qur məlumatı brauzerdə saxlayır. SEO yoxla yazdığınız ünvanı yoxlamaq üçün serverə göndərir. Nibras AI-yə yazdığınız mətn cavab üçün serverə göndərilir. Şəxsi məlumat, şifrə və ya kart nömrəsi yazmayın.",
		en: "Make a PDF, Make a QR, Remove background, Compress photo and ZIP run in your browser. Files you choose are not sent to a Nibras Code server. Calculate, Make a plan and Build questions keep data in the browser. Check SEO sends the address you enter to the server to check it. Text you type into Nibras AI is sent to a server for the answer. Do not type personal data, passwords or card numbers.",
		tr: "PDF hazırla, QR hazırla, arka plan sil, foto sıkıştır ve ZIP tarayıcınızda çalışır. Seçtiğiniz dosyalar Nibras Code sunucusuna gönderilmez. Hesapla, Plan hazırla ve Soru kur verileri tarayıcıda saklar. SEO bak girdiğiniz adresi kontrol için sunucuya gönderir. Nibras AI'ya yazdığınız metin cevap için sunucuya gönderilir. Kişisel veri, şifre veya kart numarası yazmayın.",
		ar: "أدوات PDF وQR وحذف الخلفية وضغط الصور وZIP تعمل في متصفحك. لا تُرسل الملفات التي تختارها إلى خادم Nibras Code. أدوات الحساب والخطة والأسئلة تحفظ البيانات في المتصفح. فحص SEO يرسل العنوان الذي تكتبه إلى الخادم لفحصه. النص الذي تكتبه في Nibras AI يُرسل إلى الخادم للجواب. لا تكتب بيانات شخصية أو كلمات مرور أو أرقام بطاقات.",
		ru: "PDF, QR, удаление фона, сжатие фото и ZIP работают в браузере. Выбранные файлы не отправляются на сервер Nibras Code. Расчёты, планы и вопросы хранят данные в браузере. Проверка SEO отправляет введённый адрес на сервер для проверки. Текст для Nibras AI отправляется на сервер для ответа. Не вводите личные данные, пароли или номера карт."
	},
	g2: {
		az: "Studio və Workspace layihələri yalnız brauzerinizdə saxlanır. Kodunuz Nibras Code serverinə yüklənmir. Studio-dakı köməkçi brauzerdə işləyən qaydalardır və kodu xarici AI-yə göndərmir.",
		en: "Studio and Workspace projects are stored only in your browser. Your code is not uploaded to a Nibras Code server. The Studio assistant is rules running in your browser and does not send code to external AI.",
		tr: "Studio ve Workspace projeleri yalnızca tarayıcınızda saklanır. Kodunuz Nibras Code sunucusuna yüklenmez. Studio yardımcısı tarayıcıda çalışan kurallardır ve kodu harici yapay zekâya göndermez.",
		ar: "تُحفظ مشاريع Studio وWorkspace في متصفحك فقط. لا يُرفع كودك إلى خادم Nibras Code. مساعد Studio قواعد تعمل في متصفحك ولا يرسل الكود إلى ذكاء اصطناعي خارجي.",
		ru: "Проекты Studio и Workspace хранятся только в вашем браузере. Код не загружается на сервер Nibras Code. Помощник Studio — это правила в браузере, код не уходит во внешний ИИ."
	},
	g3: {
		az: "Learn, Logic Lab və File Check brauzerinizdə işləyir. Site Doctor ünvanı yoxlamaq üçün serverə göndərir və nəticəni saxlamır. Error Help xəta mətnini izah üçün serverə və AI xidmətlərinə göndərir. Gizli açar və şifrə yapışdırmayın.",
		en: "Learn, Logic Lab and File Check run in your browser. Site Doctor sends the address to the server to check it and does not store the result. Error Help sends the error text to the server and AI services for the explanation. Do not paste secret keys or passwords.",
		tr: "Learn, Logic Lab ve File Check tarayıcınızda çalışır. Site Doctor adresi kontrol için sunucuya gönderir ve sonucu saklamaz. Error Help hata metnini açıklama için sunucuya ve yapay zekâ servislerine gönderir. Gizli anahtar veya şifre yapıştırmayın.",
		ar: "تعمل Learn وLogic Lab وFile Check في متصفحك. يرسل Site Doctor العنوان إلى الخادم لفحصه ولا يحفظ النتيجة. يرسل Error Help نص الخطأ إلى الخادم وخدمات الذكاء الاصطناعي للشرح. لا تلصق مفاتيح سرية أو كلمات مرور.",
		ru: "Learn, Logic Lab и File Check работают в браузере. Site Doctor отправляет адрес на сервер для проверки и не хранит результат. Error Help отправляет текст ошибки на сервер и в ИИ-сервисы. Не вставляйте секретные ключи и пароли."
	}
};
function groupFromSlug(slug, lang = "az") {
	const found = groupKeyFromSlug(lang, slug);
	if (!found) throw notFound();
	return found;
}
function groupTitle(lang, group) {
	return `${BAR_GROUPS[group][lang]} — Nibras Code`;
}
function groupDescription(lang, group) {
	return DESC[group][lang];
}
function groupMeta(lang, group) {
	const title = groupTitle(lang, group);
	const description = groupDescription(lang, group);
	return [
		{ title },
		{
			property: "og:title",
			content: title
		},
		{
			name: "description",
			content: description
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:url",
			content: `https://nibrascode.com${groupLocalePath(lang, group)}`
		}
	];
}
function Sentences({ text, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: splitSentences(text).map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
		icon,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: s })
	}, i)) });
}
function GroupPage({ lang, group }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page nx-group-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: homePath(lang),
					children: "Nibras Code"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: BAR_GROUPS[group][lang] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: LEAD[group][lang] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "nx-bars nx-bars--full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarGroupView, {
					lang,
					group,
					full: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "info-section-title",
				children: HOW_T[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sentences, {
				text: HOW[lang],
				icon: Info
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "info-section-title",
				children: FAQ_T[lang]
			}),
			FAQ[group].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "info-section-title",
				children: x.q[lang]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sentences, {
				text: x.a[lang],
				icon: CircleHelp
			})] }, x.q.en)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "privacy",
				className: "info-section-title",
				children: PRIV_T[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sentences, {
				text: PRIV[group][lang],
				icon: ShieldCheck
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCards, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: ShieldCheck,
				title: POLICY[lang],
				href: `${localeHref(lang, "/tools-legal")}#privacy`
			}), group === "g1" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: ShieldCheck,
				title: AI_POLICY[lang],
				href: localeHref(lang, "/privacy")
			}) : null] })
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/shell-CNhlb11C.js
var LINKS = {
	"/image": {
		az: "Şəkil sıx",
		en: "Compress photo",
		tr: "Fotoğraf sıkıştır",
		ar: "ضغط الصورة",
		ru: "Сжать фото"
	},
	"/image/resize": {
		az: "Ölçünü dəyiş",
		en: "Resize",
		tr: "Boyut değiştir",
		ar: "تغيير الحجم",
		ru: "Размер"
	},
	"/image/convert": {
		az: "Formatı çevir",
		en: "Convert format",
		tr: "Biçim dönüştür",
		ar: "تحويل الصيغة",
		ru: "Формат"
	},
	"/image/edit": {
		az: "Kəs və döndər",
		en: "Crop & rotate",
		tr: "Kırp ve döndür",
		ar: "قص وتدوير",
		ru: "Обрезка и поворот"
	},
	"/erase": {
		az: "Fon sil",
		en: "Remove background",
		tr: "Arka plan sil",
		ar: "حذف الخلفية",
		ru: "Удалить фон"
	},
	"/pdf/image-pdf": {
		az: "Şəkildən PDF",
		en: "Image to PDF",
		tr: "Görselden PDF",
		ar: "من صورة إلى PDF",
		ru: "Фото в PDF"
	},
	"/qr": {
		az: "QR kod",
		en: "QR code",
		tr: "QR kod",
		ar: "رمز QR",
		ru: "QR-код"
	},
	"/wifi": {
		az: "Wi-Fi QR",
		en: "Wi-Fi QR",
		tr: "Wi-Fi QR",
		ar: "Wi-Fi QR",
		ru: "Wi-Fi QR"
	},
	"/vcard": {
		az: "Vizit kartı QR",
		en: "Contact QR",
		tr: "Kartvizit QR",
		ar: "QR جهة الاتصال",
		ru: "QR-визитка"
	},
	"/zip": {
		az: "ZIP sıx və aç",
		en: "Zip & unzip",
		tr: "ZIP",
		ar: "ZIP",
		ru: "ZIP"
	},
	"/pdf/merge": {
		az: "PDF birləşdir",
		en: "Merge PDF",
		tr: "PDF birleştir",
		ar: "دمج PDF",
		ru: "Объединить PDF"
	},
	"/video": {
		az: "Video alətləri",
		en: "Video tools",
		tr: "Video araçları",
		ar: "أدوات الفيديو",
		ru: "Видео"
	},
	"/video/trim": {
		az: "Video kəs",
		en: "Trim video",
		tr: "Video kes",
		ar: "قص الفيديو",
		ru: "Обрезать видео"
	},
	"/video/compress": {
		az: "Video sıx",
		en: "Compress video",
		tr: "Video sıkıştır",
		ar: "ضغط الفيديو",
		ru: "Сжать видео"
	},
	"/video/crop": {
		az: "Çərçivəni kəs",
		en: "Crop video",
		tr: "Video kırp",
		ar: "اقتصاص الفيديو",
		ru: "Кадрировать видео"
	},
	"/video/resize": {
		az: "Video ölçüsü",
		en: "Resize video",
		tr: "Video boyutu",
		ar: "تغيير حجم الفيديو",
		ru: "Размер видео"
	},
	"/video/mute": {
		az: "Videonu səssiz et",
		en: "Mute video",
		tr: "Videonun sesini kapat",
		ar: "كتم صوت الفيديو",
		ru: "Убрать звук"
	},
	"/video/convert": {
		az: "Video çevir / GIF",
		en: "Convert / GIF",
		tr: "Dönüştür / GIF",
		ar: "تحويل / GIF",
		ru: "Конвертер / GIF"
	},
	"/video/merge": {
		az: "Video birləşdir",
		en: "Merge videos",
		tr: "Video birleştir",
		ar: "دمج الفيديو",
		ru: "Склеить видео"
	},
	"/video/audio": {
		az: "Videodan səs",
		en: "Extract audio",
		tr: "Videodan ses",
		ar: "استخراج الصوت",
		ru: "Звук из видео"
	},
	"/voice": {
		az: "Səs",
		en: "Voice",
		tr: "Ses",
		ar: "الصوت",
		ru: "Голос"
	},
	"/pdf/compress": {
		az: "PDF sıx",
		en: "Compress PDF",
		tr: "PDF sıkıştır",
		ar: "ضغط PDF",
		ru: "Сжать PDF"
	}
};
var IMAGE_FAMILY = [
	"/image",
	"/image/resize",
	"/image/convert",
	"/image/edit",
	"/erase"
];
var ui = {
	field: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm",
	btn: "inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/10 disabled:opacity-40",
	primary: "inline-flex items-center gap-2 rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50",
	drop: "mb-4 grid cursor-pointer place-items-center rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-10 text-center text-sm"
};
function kb$1(size) {
	if (size < 1024) return `${size} B`;
	if (size < 1048576) return `${Math.max(1, Math.round(size / 1024))} KB`;
	return `${(size / 1048576).toFixed(1)} MB`;
}
function save(name, blob) {
	const a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = name;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(a.href), 4e3);
}
function KitShell({ path, lang, icon, next, children }) {
	const m = KIT[path][lang] ?? KIT[path].en;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6",
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6 flex items-center gap-4",
				children: [icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: icon,
					alt: "",
					width: 64,
					height: 64,
					className: "size-12 shrink-0 rounded-2xl md:size-14"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
					children: m.h1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: m.lead
				})] })]
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextLinks, { links: next.filter((h) => h !== path && LINKS[h]).map((href) => ({
					href,
					label: LINKS[href]
				})) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				"aria-labelledby": "kit-faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "kit-faq",
					className: "text-base font-semibold",
					children: FAQ_TITLE[lang]
				}), m.faq.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.a
				})] }, item.q))]
			})
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/image-tools-DBRE7Im9.js
var IMAGE_TOOLS = [
	"resize",
	"convert",
	"edit"
];
var isImageTool = (v) => IMAGE_TOOLS.includes(v);
var EXT = {
	"image/png": "png",
	"image/jpeg": "jpg",
	"image/webp": "webp"
};
var T$3 = {
	az: {
		pick: "Şəkil seçin",
		picks: "Şəkilləri seçin",
		drop: "və ya bura buraxın",
		width: "En (px)",
		height: "Hündürlük (px)",
		keep: "Nisbəti qoru",
		percent: "Faiz",
		format: "Format",
		quality: "Keyfiyyət",
		download: "Yüklə",
		all: "Hamısını yüklə (ZIP)",
		orig: "Əvvəl",
		res: "Sonra",
		bad: "Bu şəkil açılmadı. HEIC-dirsə, telefonda JPG kimi paylaşın.",
		ratio: "Nisbət",
		free: "Sərbəst",
		rotL: "Sola 90°",
		rotR: "Sağa 90°",
		flipH: "Üfüqi çevir",
		flipV: "Şaquli çevir",
		reset: "Sıfırla",
		cropHint: "Kəsmək üçün şəklin üstündə çərçivə dartın.",
		same: "Format",
		keepFmt: "Eyni format",
		jpgNote: "JPG şəffaflığı saxlamır: fon ağ olur."
	},
	en: {
		pick: "Choose a photo",
		picks: "Choose photos",
		drop: "or drop here",
		width: "Width (px)",
		height: "Height (px)",
		keep: "Keep ratio",
		percent: "Percent",
		format: "Format",
		quality: "Quality",
		download: "Download",
		all: "Download all (ZIP)",
		orig: "Before",
		res: "After",
		bad: "This photo could not be opened. If it is HEIC, share it as JPG from the phone.",
		ratio: "Ratio",
		free: "Free",
		rotL: "Left 90°",
		rotR: "Right 90°",
		flipH: "Flip horizontal",
		flipV: "Flip vertical",
		reset: "Reset",
		cropHint: "Drag a frame on the photo to crop.",
		same: "Format",
		keepFmt: "Same format",
		jpgNote: "JPG has no transparency: the background becomes white."
	},
	tr: {
		pick: "Fotoğraf seçin",
		picks: "Fotoğrafları seçin",
		drop: "veya buraya bırakın",
		width: "Genişlik (px)",
		height: "Yükseklik (px)",
		keep: "Oranı koru",
		percent: "Yüzde",
		format: "Biçim",
		quality: "Kalite",
		download: "İndir",
		all: "Hepsini indir (ZIP)",
		orig: "Önce",
		res: "Sonra",
		bad: "Fotoğraf açılamadı. HEIC ise telefondan JPG olarak paylaşın.",
		ratio: "Oran",
		free: "Serbest",
		rotL: "Sola 90°",
		rotR: "Sağa 90°",
		flipH: "Yatay çevir",
		flipV: "Dikey çevir",
		reset: "Sıfırla",
		cropHint: "Kırpmak için fotoğrafta çerçeve sürükleyin.",
		same: "Biçim",
		keepFmt: "Aynı biçim",
		jpgNote: "JPG şeffaflık tutmaz: arka plan beyaz olur."
	},
	ar: {
		pick: "اختر صورة",
		picks: "اختر الصور",
		drop: "أو أفلتها هنا",
		width: "العرض (px)",
		height: "الارتفاع (px)",
		keep: "حفظ التناسب",
		percent: "النسبة",
		format: "الصيغة",
		quality: "الجودة",
		download: "تنزيل",
		all: "تنزيل الكل (ZIP)",
		orig: "قبل",
		res: "بعد",
		bad: "تعذر فتح الصورة. إن كانت HEIC فشاركها من الهاتف بصيغة JPG.",
		ratio: "النسبة",
		free: "حر",
		rotL: "يسار 90°",
		rotR: "يمين 90°",
		flipH: "قلب أفقي",
		flipV: "قلب عمودي",
		reset: "إعادة",
		cropHint: "اسحب إطاراً على الصورة للقص.",
		same: "الصيغة",
		keepFmt: "نفس الصيغة",
		jpgNote: "صيغة JPG بلا شفافية: تصبح الخلفية بيضاء."
	},
	ru: {
		pick: "Выбрать фото",
		picks: "Выбрать фото",
		drop: "или перетащите сюда",
		width: "Ширина (px)",
		height: "Высота (px)",
		keep: "Сохранять пропорции",
		percent: "Процент",
		format: "Формат",
		quality: "Качество",
		download: "Скачать",
		all: "Скачать всё (ZIP)",
		orig: "До",
		res: "После",
		bad: "Фото не открылось. Если это HEIC, отправьте его с телефона как JPG.",
		ratio: "Пропорция",
		free: "Свободно",
		rotL: "Влево 90°",
		rotR: "Вправо 90°",
		flipH: "Отразить по горизонтали",
		flipV: "Отразить по вертикали",
		reset: "Сбросить",
		cropHint: "Протяните рамку по фото, чтобы обрезать.",
		same: "Формат",
		keepFmt: "Тот же формат",
		jpgNote: "JPG без прозрачности: фон станет белым."
	}
};
async function load(file) {
	return createImageBitmap(file, { imageOrientation: "from-image" });
}
function toBlob(c, fmt, q) {
	return new Promise((res, rej) => c.toBlob((b) => b ? res(b) : rej(/* @__PURE__ */ new Error("encode")), fmt, q));
}
var fmtOf = (f) => f.type === "image/png" ? "image/png" : f.type === "image/webp" ? "image/webp" : "image/jpeg";
var baseName$1 = (n) => n.replace(/\.[^.]+$/, "") || "image";
async function encode(bmp, w, h, fmt, q, draw) {
	const c = document.createElement("canvas");
	c.width = Math.max(1, Math.round(w));
	c.height = Math.max(1, Math.round(h));
	const ctx = c.getContext("2d");
	if (fmt === "image/jpeg") {
		ctx.fillStyle = "#fff";
		ctx.fillRect(0, 0, c.width, c.height);
	}
	ctx.imageSmoothingQuality = "high";
	if (draw) draw(ctx);
	else ctx.drawImage(bmp, 0, 0, c.width, c.height);
	const b = await toBlob(c, fmt, q);
	c.width = c.height = 0;
	return b;
}
function Picker$1({ t, multiple, onFiles }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: ui.drop,
		onDragOver: (e) => e.preventDefault(),
		onDrop: (e) => {
			e.preventDefault();
			onFiles([...e.dataTransfer.files].filter((f) => f.type.startsWith("image/") || /\.heic$/i.test(f.name)));
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: multiple ? t.picks : t.pick }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: t.drop
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "sr-only",
			type: "file",
			accept: "image/*",
			multiple,
			onChange: (e) => {
				onFiles([...e.target.files ?? []]);
				e.target.value = "";
			},
			"data-testid": "img-pick"
		})]
	});
}
function FmtPick({ t, v, set, allowSame }) {
	const opts = [
		...allowSame ? [["same", t.keepFmt]] : [],
		["image/jpeg", "JPG"],
		["image/png", "PNG"],
		["image/webp", "WebP"]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-24 shrink-0",
			children: t.format
		}), opts.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: `${ui.btn} ${v === id ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`,
			onClick: () => set(id),
			"data-fmt": id,
			children: label
		}, id))]
	});
}
function Quality({ t, q, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center gap-3 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-24 shrink-0",
				children: t.quality
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "range",
				min: .4,
				max: 1,
				step: .05,
				value: q,
				onChange: (e) => set(Number(e.target.value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(q * 100), "%"] })
		]
	});
}
function Result({ t, before, blob, name }) {
	const url = (0, import_react.useMemo)(() => blob ? URL.createObjectURL(blob) : "", [blob]);
	(0, import_react.useEffect)(() => () => {
		if (url) URL.revokeObjectURL(url);
	}, [url]);
	if (!blob) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: url,
			alt: "",
			className: "max-h-80 rounded-xl border border-white/10 bg-[repeating-conic-gradient(#ffffff10_0_25%,transparent_0_50%)] [background-size:16px_16px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-3 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					t.orig,
					": ",
					kb$1(before)
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					t.res,
					": ",
					kb$1(blob.size)
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: ui.primary,
					href: url,
					download: name,
					"data-testid": "img-download",
					children: t.download
				})
			]
		})]
	});
}
function Resize$1({ t }) {
	const [file, setFile] = (0, import_react.useState)(null);
	const [nat, setNat] = (0, import_react.useState)({
		w: 0,
		h: 0
	});
	const [w, setW] = (0, import_react.useState)(0);
	const [h, setH] = (0, import_react.useState)(0);
	const [keep, setKeep] = (0, import_react.useState)(true);
	const [fmt, setFmt] = (0, import_react.useState)("same");
	const [q, setQ] = (0, import_react.useState)(.9);
	const [out, setOut] = (0, import_react.useState)(null);
	const [err, setErr] = (0, import_react.useState)("");
	const bmp = (0, import_react.useRef)(null);
	const pick = async (f) => {
		if (!f[0]) return;
		setErr("");
		setOut(null);
		try {
			bmp.current?.close();
			bmp.current = await load(f[0]);
		} catch {
			setErr(t.bad);
			return;
		}
		setFile(f[0]);
		setNat({
			w: bmp.current.width,
			h: bmp.current.height
		});
		setW(bmp.current.width);
		setH(bmp.current.height);
	};
	const setWidth = (v) => {
		setW(v);
		if (keep && nat.w) setH(Math.round(v * nat.h / nat.w));
	};
	const setHeight = (v) => {
		setH(v);
		if (keep && nat.h) setW(Math.round(v * nat.w / nat.h));
	};
	(0, import_react.useEffect)(() => {
		if (!file || !bmp.current || w < 1 || h < 1 || w > 12e3 || h > 12e3) return;
		const f = fmt === "same" ? fmtOf(file) : fmt;
		let dead = false;
		const id = setTimeout(() => {
			encode(bmp.current, w, h, f, q).then((b) => {
				if (!dead) setOut(b);
			});
		}, 250);
		return () => {
			dead = true;
			clearTimeout(id);
		};
	}, [
		file,
		w,
		h,
		fmt,
		q
	]);
	const f = file ? fmt === "same" ? fmtOf(file) : fmt : "image/jpeg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker$1, {
			t,
			onFiles: pick
		}),
		err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-sm text-red-400",
			children: err
		}) : null,
		file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					dir: "ltr",
					children: [
						file.name,
						" · ",
						nat.w,
						" × ",
						nat.h
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-muted",
							children: t.width
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 1,
							max: 12e3,
							className: ui.field,
							value: w || "",
							onChange: (e) => setWidth(Number(e.target.value)),
							"data-testid": "rs-w"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-muted",
							children: t.height
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 1,
							max: 12e3,
							className: ui.field,
							value: h || "",
							onChange: (e) => setHeight(Number(e.target.value)),
							"data-testid": "rs-h"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: keep,
						onChange: (e) => setKeep(e.target.checked)
					}), t.keep]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-24 shrink-0",
						children: t.percent
					}), [
						25,
						50,
						75,
						150,
						200
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: ui.btn,
						onClick: () => {
							setW(Math.round(nat.w * p / 100));
							setH(Math.round(nat.h * p / 100));
						},
						children: [p, "%"]
					}, p))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FmtPick, {
					t,
					v: fmt,
					set: setFmt,
					allowSame: true
				}),
				f !== "image/png" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quality, {
					t,
					q,
					set: setQ
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
					t,
					before: file.size,
					blob: out,
					name: `${baseName$1(file.name)}-${w}x${h}.${EXT[f]}`
				})
			]
		}) : null
	] });
}
function Convert$1({ t }) {
	const [files, setFiles] = (0, import_react.useState)([]);
	const [fmt, setFmt] = (0, import_react.useState)("image/jpeg");
	const [q, setQ] = (0, import_react.useState)(.9);
	const [outs, setOuts] = (0, import_react.useState)([]);
	const [bad, setBad] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!files.length) return;
		let dead = false;
		setBusy(true);
		(async () => {
			const res = [];
			const fails = [];
			for (const f of files) try {
				const b = await load(f);
				const blob = await encode(b, b.width, b.height, fmt, q);
				b.close();
				let name = `${baseName$1(f.name)}.${EXT[fmt]}`;
				for (let n = 2; res.some((r) => r.name === name); n++) name = `${baseName$1(f.name)}-${n}.${EXT[fmt]}`;
				res.push({
					name,
					blob,
					before: f.size
				});
			} catch {
				fails.push(f.name);
			}
			if (!dead) {
				setOuts(res);
				setBad(fails);
				setBusy(false);
			}
		})();
		return () => {
			dead = true;
		};
	}, [
		files,
		fmt,
		q
	]);
	const zipAll = async () => {
		const { zipSync } = await import("../_libs/@cantoo/pdf-lib+[...].mjs").then((n) => n.r);
		const entries = {};
		for (const o of outs) entries[o.name] = new Uint8Array(await o.blob.arrayBuffer());
		save("images.zip", new Blob([zipSync(entries, { level: 0 })], { type: "application/zip" }));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker$1, {
			t,
			multiple: true,
			onFiles: (f) => f.length && setFiles(f)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FmtPick, {
					t,
					v: fmt,
					set: (v) => v !== "same" && setFmt(v)
				}),
				fmt !== "image/png" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quality, {
					t,
					q,
					set: setQ
				}) : null,
				fmt === "image/jpeg" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: t.jpgNote
				}) : null
			]
		}),
		bad.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm text-red-400",
			children: [
				t.bad,
				" (",
				bad.join(", "),
				")"
			]
		}) : null,
		busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted",
			children: "…"
		}) : null,
		outs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-4 space-y-2",
			"data-testid": "conv-list",
			children: [outs.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-wrap items-center gap-3 rounded-xl border border-white/10 px-3 py-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate",
						dir: "ltr",
						children: o.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted",
						children: [
							kb$1(o.before),
							" → ",
							kb$1(o.blob.size)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: ui.btn,
						onClick: () => save(o.name, o.blob),
						children: t.download
					})
				]
			}, o.name)), outs.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: ui.primary,
				onClick: zipAll,
				children: t.all
			}) }) : null]
		}) : null
	] });
}
var RATIOS = [
	["free", null],
	["1:1", 1],
	["4:3", 4 / 3],
	["3:2", 3 / 2],
	["16:9", 16 / 9],
	["9:16", 9 / 16],
	["3:4", 3 / 4]
];
function Edit({ t }) {
	const [file, setFile] = (0, import_react.useState)(null);
	const [src, setSrc] = (0, import_react.useState)(null);
	const [rot, setRot] = (0, import_react.useState)(0);
	const [fh, setFh] = (0, import_react.useState)(false);
	const [fv, setFv] = (0, import_react.useState)(false);
	const [ratio, setRatio] = (0, import_react.useState)(null);
	const [crop, setCrop] = (0, import_react.useState)(null);
	const [drag, setDrag] = (0, import_react.useState)(null);
	const [fmt, setFmt] = (0, import_react.useState)("same");
	const [q, setQ] = (0, import_react.useState)(.92);
	const [preview, setPreview] = (0, import_react.useState)("");
	const [out, setOut] = (0, import_react.useState)(null);
	const [err, setErr] = (0, import_react.useState)("");
	const box = (0, import_react.useRef)(null);
	const pick = async (f) => {
		if (!f[0]) return;
		setErr("");
		try {
			const b = await load(f[0]);
			src?.close();
			setSrc(b);
			setFile(f[0]);
			setRot(0);
			setFh(false);
			setFv(false);
			setCrop(null);
		} catch {
			setErr(t.bad);
		}
	};
	const oriented = (0, import_react.useMemo)(() => {
		if (!src) return null;
		const sw = rot % 180 ? src.height : src.width, sh = rot % 180 ? src.width : src.height;
		const c = document.createElement("canvas");
		c.width = sw;
		c.height = sh;
		const ctx = c.getContext("2d");
		ctx.translate(sw / 2, sh / 2);
		ctx.rotate(rot * Math.PI / 180);
		ctx.scale(fh ? -1 : 1, fv ? -1 : 1);
		ctx.drawImage(src, -src.width / 2, -src.height / 2);
		return c;
	}, [
		src,
		rot,
		fh,
		fv
	]);
	(0, import_react.useEffect)(() => {
		if (!oriented) {
			setPreview("");
			return;
		}
		const k = Math.min(1, 1200 / Math.max(oriented.width, oriented.height));
		const c = document.createElement("canvas");
		c.width = Math.round(oriented.width * k);
		c.height = Math.round(oriented.height * k);
		c.getContext("2d").drawImage(oriented, 0, 0, c.width, c.height);
		setPreview(c.toDataURL("image/jpeg", .85));
	}, [oriented]);
	(0, import_react.useEffect)(() => {
		if (!oriented || !file) return;
		const f = fmt === "same" ? fmtOf(file) : fmt;
		const r = crop ?? {
			x: 0,
			y: 0,
			w: 1,
			h: 1
		};
		const W = oriented.width, H = oriented.height;
		let dead = false;
		const id = setTimeout(() => {
			encode(oriented, r.w * W, r.h * H, f, q, (ctx) => ctx.drawImage(oriented, r.x * W, r.y * H, r.w * W, r.h * H, 0, 0, r.w * W, r.h * H)).then((b) => {
				if (!dead) setOut(b);
			});
		}, 250);
		return () => {
			dead = true;
			clearTimeout(id);
		};
	}, [
		oriented,
		crop,
		fmt,
		q,
		file
	]);
	const pos = (e) => {
		const r = box.current.getBoundingClientRect();
		return {
			x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
			y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))
		};
	};
	const update = (a, b) => {
		let w = Math.abs(b.x - a.x), h = Math.abs(b.y - a.y);
		if (ratio && oriented) {
			const ar = ratio * (oriented.height / oriented.width);
			if (w / Math.max(h, 1e-6) > ar) w = h * ar;
			else h = w / ar;
		}
		const x = b.x < a.x ? a.x - w : a.x, y = b.y < a.y ? a.y - h : a.y;
		setCrop({
			x: Math.max(0, x),
			y: Math.max(0, y),
			w: Math.min(w, 1 - Math.max(0, x)),
			h: Math.min(h, 1 - Math.max(0, y))
		});
	};
	const f = file ? fmt === "same" ? fmtOf(file) : fmt : "image/jpeg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker$1, {
			t,
			onFiles: pick
		}),
		err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-sm text-red-400",
			children: err
		}) : null,
		file && preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => {
								setRot((r) => (r + 270) % 360);
								setCrop(null);
							},
							children: ["↺ ", t.rotL]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => {
								setRot((r) => (r + 90) % 360);
								setCrop(null);
							},
							"data-testid": "rot-r",
							children: ["↻ ", t.rotR]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => {
								setFh((v) => !v);
								setCrop(null);
							},
							children: ["⇋ ", t.flipH]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => {
								setFv((v) => !v);
								setCrop(null);
							},
							children: ["⇵ ", t.flipV]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => {
								setRot(0);
								setFh(false);
								setFv(false);
								setCrop(null);
							},
							children: t.reset
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-24 shrink-0",
						children: t.ratio
					}), RATIOS.map(([id, r]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `${ui.btn} ${ratio === r ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`,
						onClick: () => {
							setRatio(r);
							setCrop(null);
						},
						children: id === "free" ? t.free : id
					}, id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: t.cropHint
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: box,
					className: "relative mx-auto w-fit max-w-full touch-none select-none",
					"data-testid": "crop-box",
					onPointerDown: (e) => {
						e.target.setPointerCapture?.(e.pointerId);
						const p = pos(e);
						setDrag(p);
						setCrop(null);
					},
					onPointerMove: (e) => {
						if (drag) update(drag, pos(e));
					},
					onPointerUp: () => {
						setDrag(null);
						setCrop((c) => c && c.w > .01 && c.h > .01 ? c : null);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: preview,
						alt: "",
						draggable: false,
						className: "block max-h-[60vh] max-w-full rounded-lg"
					}), crop ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.55)]",
						style: {
							left: `${crop.x * 100}%`,
							top: `${crop.y * 100}%`,
							width: `${crop.w * 100}%`,
							height: `${crop.h * 100}%`
						}
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FmtPick, {
					t,
					v: fmt,
					set: setFmt,
					allowSame: true
				}),
				f !== "image/png" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quality, {
					t,
					q,
					set: setQ
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
					t,
					before: file.size,
					blob: out,
					name: `${baseName$1(file.name)}-edit.${EXT[f]}`
				})
			]
		}) : null
	] });
}
function ImageToolPage({ tool }) {
	const { lang } = useI18n$1();
	const t = T$3[lang] ?? T$3.en;
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KitShell, {
		path: `/image/${tool}`,
		lang,
		icon: "/apps/nibras-image.png",
		next: [...IMAGE_FAMILY, "/pdf/image-pdf"],
		children: mounted ? tool === "resize" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resize$1, { t }) : tool === "convert" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Convert$1, { t }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Edit, { t }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-2xl bg-white/5" })
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/video-tools-CDLwNcD8.js
var VIDEO_TOOLS = [
	"trim",
	"compress",
	"crop",
	"resize",
	"mute",
	"convert",
	"merge",
	"audio"
];
var isVideoTool = (v) => VIDEO_TOOLS.includes(v);
var VIDEO_FAMILY = [
	"/video",
	"/video/trim",
	"/video/compress",
	"/video/crop",
	"/video/resize",
	"/video/mute",
	"/video/convert",
	"/video/merge",
	"/video/audio"
];
var T$2 = {
	az: {
		pick: "Video seçin",
		picks: "Videoları seçin",
		drop: "və ya bura buraxın",
		loading: "Video mühərriki yüklənir (~30 MB, bir dəfə)…",
		ready: "Hazırdır",
		start: "Başlanğıc (san)",
		end: "Son (san)",
		fast: "Sürətli (yenidən kodlaşdırmadan)",
		run: "Başla",
		working: "İşlənir",
		download: "Yüklə",
		before: "Əvvəl",
		after: "Sonra",
		fail: "Alınmadı. Başqa format və ya daha kiçik video yoxlayın.",
		format: "Format",
		width: "En",
		fps: "Kadr/san",
		orig: "Orijinal",
		up: "Yuxarı",
		down: "Aşağı",
		remove: "Sil",
		add: "Video əlavə et",
		need2: "Ən azı 2 video seçin.",
		setStart: "Bu an başlanğıc",
		setEnd: "Bu an son",
		engineFail: "Mühərrik yüklənmədi. Səhifəni yeniləyin.",
		sel: "Seçilən hissə",
		preview: "Seçimi izlə",
		hint: "Zolaqda tutub sürüşdürün: sol tutacaq başlanğıc, sağ tutacaq son.",
		open: "Aç",
		zIn: "Yaxınlaşdır",
		zOut: "Uzaqlaşdır",
		zSel: "Seçimə yaxınlaş",
		zAll: "Hamısı",
		frame: "kadr",
		mode: "Kəsmə üsulu",
		exact: "Dəqiq (kadra qədər, yenidən kodlaşdırma)",
		fastShort: "Sürətli (açar kadra yuvarlanır)",
		keys: "Ox düymələri: 1 kadr · Shift: 1 san · tutacağa klik edib istifadə edin.",
		goA: "Başlanğıca get",
		goB: "Sona get"
	},
	en: {
		pick: "Choose a video",
		picks: "Choose videos",
		drop: "or drop here",
		loading: "Loading the video engine (~30 MB, once)…",
		ready: "Ready",
		start: "Start (s)",
		end: "End (s)",
		fast: "Fast (no re-encode)",
		run: "Start",
		working: "Working",
		download: "Download",
		before: "Before",
		after: "After",
		fail: "That did not work. Try another format or a smaller video.",
		format: "Format",
		width: "Width",
		fps: "FPS",
		orig: "Original",
		up: "Up",
		down: "Down",
		remove: "Remove",
		add: "Add video",
		need2: "Choose at least 2 videos.",
		setStart: "Set start here",
		setEnd: "Set end here",
		engineFail: "The engine did not load. Reload the page.",
		sel: "Selected part",
		preview: "Play selection",
		hint: "Drag on the bar: left handle is the start, right handle is the end.",
		open: "Open",
		zIn: "Zoom in",
		zOut: "Zoom out",
		zSel: "Zoom to selection",
		zAll: "All",
		frame: "frame",
		mode: "Cut mode",
		exact: "Exact (frame-accurate, re-encode)",
		fastShort: "Fast (snaps to keyframes)",
		keys: "Arrow keys: 1 frame · Shift: 1 s · click a handle first.",
		goA: "Go to start",
		goB: "Go to end"
	},
	tr: {
		pick: "Video seçin",
		picks: "Videoları seçin",
		drop: "veya buraya bırakın",
		loading: "Video motoru yükleniyor (~30 MB, bir kez)…",
		ready: "Hazır",
		start: "Başlangıç (sn)",
		end: "Bitiş (sn)",
		fast: "Hızlı (yeniden kodlamasız)",
		run: "Başlat",
		working: "İşleniyor",
		download: "İndir",
		before: "Önce",
		after: "Sonra",
		fail: "Olmadı. Başka biçim veya daha küçük video deneyin.",
		format: "Biçim",
		width: "Genişlik",
		fps: "Kare/sn",
		orig: "Orijinal",
		up: "Yukarı",
		down: "Aşağı",
		remove: "Sil",
		add: "Video ekle",
		need2: "En az 2 video seçin.",
		setStart: "Başlangıç burası",
		setEnd: "Bitiş burası",
		engineFail: "Motor yüklenmedi. Sayfayı yenileyin.",
		sel: "Seçilen kısım",
		preview: "Seçimi oynat",
		hint: "Çubukta sürükleyin: sol tutamaç başlangıç, sağ tutamaç bitiş.",
		open: "Aç",
		zIn: "Yakınlaştır",
		zOut: "Uzaklaştır",
		zSel: "Seçime yakınlaş",
		zAll: "Tümü",
		frame: "kare",
		mode: "Kesme yöntemi",
		exact: "Hassas (kare kare, yeniden kodlama)",
		fastShort: "Hızlı (anahtar kareye yuvarlanır)",
		keys: "Ok tuşları: 1 kare · Shift: 1 sn · önce tutamaca tıklayın.",
		goA: "Başlangıca git",
		goB: "Sona git"
	},
	ar: {
		pick: "اختر فيديو",
		picks: "اختر الفيديوهات",
		drop: "أو أفلته هنا",
		loading: "جارٍ تحميل محرك الفيديو (~30 ميغابايت، مرة واحدة)…",
		ready: "جاهز",
		start: "البداية (ث)",
		end: "النهاية (ث)",
		fast: "سريع (بلا إعادة ترميز)",
		run: "ابدأ",
		working: "جارٍ المعالجة",
		download: "تنزيل",
		before: "قبل",
		after: "بعد",
		fail: "لم ينجح. جرّب صيغة أخرى أو فيديو أصغر.",
		format: "الصيغة",
		width: "العرض",
		fps: "إطار/ث",
		orig: "الأصلي",
		up: "أعلى",
		down: "أسفل",
		remove: "حذف",
		add: "إضافة فيديو",
		need2: "اختر فيديوهين على الأقل.",
		setStart: "البداية هنا",
		setEnd: "النهاية هنا",
		engineFail: "لم يُحمَّل المحرك. أعد تحميل الصفحة.",
		sel: "الجزء المحدد",
		preview: "تشغيل التحديد",
		hint: "اسحب على الشريط: المقبض الأيسر للبداية والأيمن للنهاية.",
		open: "فتح",
		zIn: "تكبير",
		zOut: "تصغير",
		zSel: "تكبير إلى التحديد",
		zAll: "الكل",
		frame: "إطار",
		mode: "طريقة القص",
		exact: "دقيق (حتى الإطار، إعادة ترميز)",
		fastShort: "سريع (يلتصق بالإطارات المفتاحية)",
		keys: "الأسهم: إطار واحد · Shift: ثانية · انقر على المقبض أولاً.",
		goA: "اذهب إلى البداية",
		goB: "اذهب إلى النهاية"
	},
	ru: {
		pick: "Выбрать видео",
		picks: "Выбрать видео",
		drop: "или перетащите сюда",
		loading: "Загружается видеодвижок (~30 МБ, один раз)…",
		ready: "Готово",
		start: "Начало (с)",
		end: "Конец (с)",
		fast: "Быстро (без перекодирования)",
		run: "Начать",
		working: "Обработка",
		download: "Скачать",
		before: "До",
		after: "После",
		fail: "Не получилось. Попробуйте другой формат или видео поменьше.",
		format: "Формат",
		width: "Ширина",
		fps: "Кадр/с",
		orig: "Исходная",
		up: "Вверх",
		down: "Вниз",
		remove: "Убрать",
		add: "Добавить видео",
		need2: "Выберите минимум 2 видео.",
		setStart: "Начало здесь",
		setEnd: "Конец здесь",
		engineFail: "Движок не загрузился. Обновите страницу.",
		sel: "Выбранный фрагмент",
		preview: "Проиграть выбор",
		hint: "Тяните по полосе: левый маркер — начало, правый — конец.",
		open: "Открыть",
		zIn: "Приблизить",
		zOut: "Отдалить",
		zSel: "К выделению",
		zAll: "Всё",
		frame: "кадр",
		mode: "Способ резки",
		exact: "Точно (до кадра, перекодирование)",
		fastShort: "Быстро (по ключевым кадрам)",
		keys: "Стрелки: 1 кадр · Shift: 1 с · сначала нажмите на маркер.",
		goA: "К началу",
		goB: "К концу"
	}
};
var ffPromise = null;
/** ffmpeg.wasm is fetched only when a video tool page is opened. */
function getFF() {
	if (!ffPromise) ffPromise = (async () => {
		const { FFmpeg } = await import("../_libs/ffmpeg__ffmpeg.mjs").then((n) => n.t);
		const ff = new FFmpeg();
		const base = `${location.origin}/ffmpeg`;
		await ff.load({
			coreURL: `${base}/ffmpeg-core.js`,
			wasmURL: `${base}/ffmpeg-core.wasm`
		});
		return ff;
	})().catch((e) => {
		ffPromise = null;
		throw e;
	});
	return ffPromise;
}
var extOf = (n) => (n.match(/\.([a-z0-9]+)$/i)?.[1] ?? "mp4").toLowerCase();
var baseName = (n) => n.replace(/\.[^.]+$/, "") || "video";
var MIME = {
	mp4: "video/mp4",
	webm: "video/webm",
	gif: "image/gif",
	mp3: "audio/mpeg",
	m4a: "audio/mp4",
	wav: "audio/wav",
	mov: "video/quicktime",
	mkv: "video/x-matroska"
};
function useEngine() {
	const [ff, setFF] = (0, import_react.useState)(null);
	const [err, setErr] = (0, import_react.useState)(false);
	const [pct, setPct] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let dead = false;
		getFF().then((f) => {
			if (!dead) setFF(f);
		}).catch(() => !dead && setErr(true));
		return () => {
			dead = true;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ff) return;
		const on = ({ progress }) => setPct(Math.max(0, Math.min(100, Math.round(progress * 100))));
		ff.on("progress", on);
		return () => ff.off("progress", on);
	}, [ff]);
	return {
		ff,
		err,
		pct,
		setPct
	};
}
async function run(ff, inputs, args, out) {
	const { fetchFile } = await import("../_libs/ffmpeg__util.mjs").then((n) => n.t);
	const names = inputs.map((f, i) => `in${i}.${extOf(f.name)}`);
	for (let i = 0; i < inputs.length; i++) await ff.writeFile(names[i], await fetchFile(inputs[i]));
	try {
		const code = await ff.exec(args(names));
		const data = await ff.readFile(out);
		if (code !== 0 && !data.length) throw new Error("ffmpeg");
		if (!data.length) throw new Error("empty");
		return new Blob([data.slice().buffer], { type: MIME[extOf(out)] ?? "application/octet-stream" });
	} finally {
		for (const n of [...names, out]) await ff.deleteFile(n).catch(() => {});
	}
}
function Picker({ t, multiple, onFiles }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: ui.drop,
		onDragOver: (e) => e.preventDefault(),
		onDrop: (e) => {
			e.preventDefault();
			onFiles([...e.dataTransfer.files].filter((f) => f.type.startsWith("video/") || /\.(mp4|mov|mkv|webm|avi|m4v|3gp)$/i.test(f.name)));
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: multiple ? t.picks : t.pick }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: t.drop
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "sr-only",
			type: "file",
			accept: "video/*,.mkv,.avi,.mov",
			multiple,
			onChange: (e) => {
				onFiles([...e.target.files ?? []]);
				e.target.value = "";
			},
			"data-testid": "video-pick"
		})]
	});
}
function Status({ t, ff, err, busy, pct }) {
	if (err) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 text-sm text-red-400",
		children: t.engineFail
	});
	if (!ff) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 text-sm text-muted",
		"data-testid": "video-engine",
		children: t.loading
	});
	if (busy) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			t.working,
			"… ",
			pct,
			"%"
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-[#2f6bff] transition-[width]",
				style: { width: `${pct}%` }
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 text-sm text-muted",
		"data-testid": "video-ready",
		children: t.ready
	});
}
function Out({ t, before, blob, name }) {
	const url = (0, import_react.useMemo)(() => blob ? URL.createObjectURL(blob) : "", [blob]);
	(0, import_react.useEffect)(() => () => {
		if (url) URL.revokeObjectURL(url);
	}, [url]);
	if (!blob) return null;
	const kind = blob.type.split("/")[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 space-y-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-3",
		children: [blob.type === "image/gif" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: url,
			alt: "",
			className: "max-h-80 rounded-xl"
		}) : kind === "audio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
			src: url,
			controls: true,
			className: "w-full"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			src: url,
			controls: true,
			className: "max-h-80 w-full rounded-2xl bg-black ring-1 ring-white/10"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-3 text-sm",
			children: [
				before ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					t.before,
					": ",
					kb$1(before)
				] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					t.after,
					": ",
					kb$1(blob.size)
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: ui.primary,
					href: url,
					download: name,
					"data-testid": "video-download",
					children: t.download
				})
			]
		})]
	});
}
function Opts({ label, v, set, opts }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-24 shrink-0",
			children: label
		}), opts.map(([id, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: `${ui.btn} ${v === id ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`,
			onClick: () => set(id),
			children: l
		}, String(id)))]
	});
}
function useJob() {
	const eng = useEngine();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [out, setOut] = (0, import_react.useState)(null);
	const [fail, setFail] = (0, import_react.useState)(false);
	const go = async (fn) => {
		if (!eng.ff || busy) return;
		setBusy(true);
		setFail(false);
		setOut(null);
		eng.setPct(0);
		try {
			setOut(await fn(eng.ff));
		} catch {
			setFail(true);
		} finally {
			setBusy(false);
		}
	};
	return {
		...eng,
		busy,
		out,
		fail,
		go,
		setOut
	};
}
var fmt = (n, ms = false) => {
	const m = Math.floor(n / 60);
	const s = n - m * 60;
	return `${m}:${s < 10 ? "0" : ""}${s.toFixed(ms ? 3 : 1)}`;
};
var r3 = (n) => Math.round(n * 1e3) / 1e3;
/** Range selector with zoom: drag handles or tap the bar; nearest handle jumps there. Always LTR. */
function Timeline({ t, dur, fps, a, b, now, setA, setB, seek }) {
	const bar = (0, import_react.useRef)(null);
	const drag = (0, import_react.useRef)(null);
	const [view, setView] = (0, import_react.useState)([0, dur]);
	(0, import_react.useEffect)(() => setView([0, dur]), [dur]);
	const [v0, v1] = view;
	const span = Math.max(v1 - v0, 1e-6);
	const zoomed = span < dur - .001;
	const fr = 1 / fps;
	const snap = (n) => r3(Math.round(n * fps) / fps);
	const at = (x) => {
		const r = bar.current.getBoundingClientRect();
		return snap(Math.max(0, Math.min(dur, v0 + Math.max(0, Math.min(1, (x - r.left) / r.width)) * span)));
	};
	const apply = (which, v) => {
		v = Math.max(0, Math.min(dur, v));
		if (which === "a") {
			v = Math.min(v, Math.max(0, b - fr));
			setA(r3(v));
		} else {
			v = Math.max(v, Math.min(dur, a + fr));
			setB(r3(v));
		}
		seek(v);
	};
	const zoomTo = (c0, c1) => {
		let w = Math.max(c1 - c0, Math.min(dur, fr * 20));
		w = Math.min(w, dur);
		let s0 = Math.max(0, (c0 + c1) / 2 - w / 2);
		if (s0 + w > dur) s0 = dur - w;
		setView([s0, s0 + w]);
	};
	const pcRaw = (n) => (n - v0) / span * 100;
	const pc = (n) => `${Math.max(-2, Math.min(102, pcRaw(n)))}%`;
	const vis = (n) => n >= v0 - 1e-6 && n <= v1 + 1e-6;
	const ticks = [];
	{
		const st = [
			1 / fps,
			.1,
			.5,
			1,
			2,
			5,
			10,
			30,
			60,
			300,
			600
		].find((x) => span / x <= 10) ?? 1200;
		for (let x = Math.ceil(v0 / st) * st; x <= v1 + 1e-9; x += st) ticks.push(x);
	}
	const handle = (w) => vis(w === "a" ? a : b) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "slider",
		"aria-label": w === "a" ? t.start : t.end,
		"aria-valuemin": 0,
		"aria-valuemax": r3(dur),
		"aria-valuenow": w === "a" ? a : b,
		tabIndex: 0,
		onKeyDown: (e) => {
			const d = e.key === "ArrowLeft" ? -1 : e.key === "ArrowRight" ? 1 : 0;
			if (d) {
				e.preventDefault();
				apply(w, snap((w === "a" ? a : b) + d * (e.shiftKey ? 1 : fr)));
			}
		},
		onPointerDown: (e) => {
			e.stopPropagation();
			e.currentTarget.focus();
			drag.current = w;
			bar.current?.setPointerCapture(e.pointerId);
		},
		className: "absolute top-1/2 z-10 flex h-11 w-7 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center outline-none focus-visible:[&>span]:ring-2 focus-visible:[&>span]:ring-white",
		style: { left: pc(w === "a" ? a : b) },
		"data-testid": `trim-handle-${w}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex h-12 w-4 items-center justify-center rounded-md bg-[#3b74ff] shadow-md ring-1 ring-white/70 transition-transform active:scale-110",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-5 w-0.5 rounded-full bg-white/90" })
		})
	}) : null;
	const zb = "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs transition hover:border-white/25 hover:bg-white/10 disabled:opacity-40";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				dir: "ltr",
				className: "flex flex-wrap items-center gap-1.5",
				"data-testid": "trim-zoom",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: zb,
						onClick: () => zoomTo(v0 + span * .25, v1 - span * .25),
						children: ["＋ ", t.zIn]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: zb,
						disabled: !zoomed,
						onClick: () => zoomTo(v0 - span / 2, v1 + span / 2),
						children: ["－ ", t.zOut]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: zb,
						onClick: () => zoomTo(a - (b - a) * .1, b + (b - a) * .1),
						children: ["⤢ ", t.zSel]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: zb,
						disabled: !zoomed,
						onClick: () => setView([0, dur]),
						children: t.zAll
					}),
					zoomed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto text-xs text-muted",
						children: [
							fmt(v0, true),
							" – ",
							fmt(v1, true)
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				dir: "ltr",
				ref: bar,
				className: "relative h-16 cursor-pointer touch-none select-none overflow-hidden rounded-xl bg-black/30 ring-1 ring-inset ring-white/5",
				"data-testid": "trim-timeline",
				onWheel: (e) => {
					if (!e.ctrlKey && Math.abs(e.deltaX) <= Math.abs(e.deltaY) && !e.altKey) return;
					const c = at(e.clientX);
					const k = e.deltaY > 0 ? 1.25 : .8;
					zoomTo(c - (c - v0) * k, c + (v1 - c) * k);
				},
				onPointerDown: (e) => {
					const v = at(e.clientX);
					drag.current = Math.abs(v - a) <= Math.abs(v - b) ? "a" : "b";
					bar.current?.setPointerCapture(e.pointerId);
					apply(drag.current, v);
				},
				onPointerMove: (e) => {
					if (drag.current) apply(drag.current, at(e.clientX));
				},
				onPointerUp: () => {
					drag.current = null;
				},
				onPointerCancel: () => {
					drag.current = null;
				},
				children: [
					ticks.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute top-0 h-2.5 w-px bg-white/25",
						style: { left: pc(x) }
					}, x)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-2 top-1/2 h-8 -translate-y-1/2 rounded-lg bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.07)_0_2px,transparent_2px_6px)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-1/2 h-8 -translate-y-1/2 rounded-md border-y-2 border-[#5b8cff] bg-[#2f6bff]/30",
						style: {
							left: pc(Math.max(a, v0)),
							width: `${Math.max(0, pcRaw(Math.min(b, v1)) - pcRaw(Math.max(a, v0)))}%`
						}
					}),
					vis(now) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute top-1 bottom-1 w-0.5 rounded-full bg-white",
						style: { left: pc(now) }
					}) : null,
					handle("a"),
					handle("b")
				]
			}),
			zoomed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				dir: "ltr",
				type: "range",
				"aria-label": "scroll",
				className: "w-full",
				min: 0,
				max: r3(dur - span),
				step: fr,
				value: v0,
				onChange: (e) => {
					const s0 = Number(e.target.value);
					setView([s0, s0 + span]);
				}
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				dir: "ltr",
				className: "flex items-center justify-between font-mono text-xs text-muted tabular-nums",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmt(a, true) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full bg-[#2f6bff]/15 px-2.5 py-0.5 font-medium text-[#9db8ff]",
						children: [
							t.sel,
							": ",
							fmt(Math.max(0, b - a), true),
							" · ",
							Math.round((b - a) * fps),
							" ",
							t.frame
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmt(b, true) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					t.hint,
					" ",
					t.keys
				]
			})
		]
	});
}
function Trim({ t }) {
	const job = useJob();
	const [file, setFile] = (0, import_react.useState)(null);
	const [dur, setDur] = (0, import_react.useState)(0);
	const [a, setA] = (0, import_react.useState)(0);
	const [b, setB] = (0, import_react.useState)(0);
	const [fast, setFast] = (0, import_react.useState)(false);
	const [fps, setFps] = (0, import_react.useState)(30);
	const [now, setNow] = (0, import_react.useState)(0);
	const stopAt = (0, import_react.useRef)(null);
	const vid = (0, import_react.useRef)(null);
	const src = (0, import_react.useMemo)(() => file ? URL.createObjectURL(file) : "", [file]);
	(0, import_react.useEffect)(() => () => {
		if (src) URL.revokeObjectURL(src);
	}, [src]);
	const ext = file ? extOf(file.name) : "mp4";
	const outExt = fast ? ext : "mp4";
	const fr = 1 / fps;
	const seek = (n) => {
		stopAt.current = null;
		const v = vid.current;
		if (v) {
			v.pause();
			v.currentTime = Math.max(0, Math.min(dur, n));
			setNow(v.currentTime);
		}
	};
	const cur = () => vid.current?.currentTime ?? 0;
	const sb = "min-w-[2.75rem] rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs tabular-nums transition hover:border-white/25 hover:bg-white/10 active:scale-95";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, {
				t,
				ff: job.ff,
				err: job.err,
				busy: job.busy,
				pct: job.pct
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
				t,
				onFiles: (f) => {
					if (f[0]) {
						setFile(f[0]);
						job.setOut(null);
					}
				}
			}),
			file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					ref: vid,
					src,
					controls: true,
					className: "max-h-[26rem] w-full rounded-2xl bg-black ring-1 ring-white/10",
					onLoadedMetadata: (e) => {
						const d = e.currentTarget.duration || 0;
						setDur(d);
						setA(0);
						setB(r3(d));
					},
					onTimeUpdate: (e) => {
						const c = e.currentTarget.currentTime;
						setNow(c);
						if (stopAt.current !== null && c >= stopAt.current) {
							e.currentTarget.pause();
							stopAt.current = null;
						}
					}
				}),
				dur > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
					t,
					dur,
					fps,
					a,
					b,
					now,
					setA,
					setB,
					seek
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					dir: "ltr",
					className: "flex flex-wrap items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-2.5",
					"data-testid": "trim-step",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: sb,
							onClick: () => seek(cur() - 1),
							children: "−1s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: sb,
							onClick: () => seek(cur() - fr),
							children: ["−1 ", t.frame]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-lg bg-black/40 px-3 py-1.5 font-mono text-sm tabular-nums ring-1 ring-white/10",
							children: fmt(now, true)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: sb,
							onClick: () => seek(cur() + fr),
							children: ["+1 ", t.frame]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: sb,
							onClick: () => seek(cur() + 1),
							children: "+1s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "ml-auto flex items-center gap-1 text-xs text-muted",
							children: [t.fps, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5",
								value: fps,
								onChange: (e) => setFps(Number(e.target.value)),
								children: [
									24,
									25,
									30,
									50,
									60
								].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: x,
									children: x
								}, x))
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => {
								const c = r3(cur());
								if (c < b) setA(c);
							},
							children: t.setStart
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => {
								const c = r3(cur());
								if (c > a) setB(c);
							},
							children: t.setEnd
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => seek(a),
							children: ["⇤ ", t.goA]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => seek(b),
							children: [t.goB, " ⇥"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: `${ui.btn} border-[#2f6bff]/50 bg-[#2f6bff]/15`,
							disabled: b <= a,
							onClick: () => {
								const v = vid.current;
								if (!v) return;
								v.currentTime = a;
								stopAt.current = b;
								v.play();
							},
							"data-testid": "trim-preview",
							children: ["▶ ", t.preview]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t.start, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: ui.field,
						type: "number",
						min: 0,
						step: .001,
						max: dur || void 0,
						value: a,
						onChange: (e) => setA(r3(Math.max(0, Number(e.target.value))))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [t.end, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: ui.field,
						type: "number",
						min: 0,
						step: .001,
						max: dur || void 0,
						value: b,
						onChange: (e) => setB(r3(Math.min(dur || Infinity, Number(e.target.value))))
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "grid gap-2 text-sm sm:grid-cols-2",
					"data-testid": "trim-mode",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "mb-1.5 text-xs text-muted",
						children: t.mode
					}), [[false, t.exact], [true, t.fastShort]].map(([f, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: `flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 transition ${fast === f ? "border-[#2f6bff]/70 bg-[#2f6bff]/15" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "trim-mode",
							className: "accent-[#2f6bff]",
							checked: fast === f,
							onChange: () => setFast(f)
						}), l]
					}, String(f)))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${ui.primary} w-full py-3 text-base sm:w-auto sm:px-8`,
					disabled: !job.ff || job.busy || b <= a,
					"data-testid": "video-run",
					onClick: () => job.go((ff) => run(ff, [file], ([n]) => fast ? [
						"-ss",
						a.toFixed(3),
						"-i",
						n,
						"-t",
						(b - a).toFixed(3),
						"-c",
						"copy",
						"-avoid_negative_ts",
						"make_zero",
						`out.${outExt}`
					] : [
						"-i",
						n,
						"-ss",
						a.toFixed(3),
						"-to",
						b.toFixed(3),
						"-c:v",
						"libx264",
						"-preset",
						"veryfast",
						"-crf",
						"20",
						"-pix_fmt",
						"yuv420p",
						"-c:a",
						"aac",
						"-movflags",
						"+faststart",
						`out.${outExt}`
					], `out.${outExt}`)),
					children: t.run
				})
			] }) : null,
			job.fail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red-400",
				children: t.fail
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
				t,
				before: file?.size ?? 0,
				blob: job.out,
				name: `${baseName(file?.name ?? "video")}-kesik.${outExt}`
			})
		]
	});
}
function Convert({ t }) {
	const job = useJob();
	const [file, setFile] = (0, import_react.useState)(null);
	const [fmt, setFmt] = (0, import_react.useState)("mp4");
	const [w, setW] = (0, import_react.useState)(0);
	const [fps, setFps] = (0, import_react.useState)(12);
	const isGif = fmt === "gif";
	const width = isGif && !w ? 480 : w;
	const scale = width ? [`scale=${width}:-2:flags=lanczos`] : [];
	const args = (n) => {
		if (fmt === "gif") return [
			"-i",
			n,
			"-vf",
			`fps=${fps},${scale[0] ?? "scale=480:-2"},split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`,
			"-loop",
			"0",
			"out.gif"
		];
		const vf = scale.length ? ["-vf", scale[0]] : [];
		if (fmt === "webm") return [
			"-i",
			n,
			...vf,
			"-c:v",
			"libvpx",
			"-b:v",
			"1M",
			"-deadline",
			"realtime",
			"-cpu-used",
			"8",
			"-c:a",
			"libvorbis",
			"out.webm"
		];
		return [
			"-i",
			n,
			...vf,
			"-c:v",
			"libx264",
			"-preset",
			"veryfast",
			"-crf",
			"23",
			"-pix_fmt",
			"yuv420p",
			"-c:a",
			"aac",
			"-movflags",
			"+faststart",
			"out.mp4"
		];
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, {
				t,
				ff: job.ff,
				err: job.err,
				busy: job.busy,
				pct: job.pct
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
				t,
				onFiles: (f) => {
					if (f[0]) {
						setFile(f[0]);
						job.setOut(null);
					}
				}
			}),
			file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					file.name,
					" · ",
					kb$1(file.size)
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: t.format,
				v: fmt,
				set: setFmt,
				opts: [
					["mp4", "MP4"],
					["webm", "WebM"],
					["gif", "GIF"]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: t.width,
				v: w,
				set: setW,
				opts: [
					[0, isGif ? "480 px" : t.orig],
					[320, "320"],
					[640, "640"],
					[1280, "1280"]
				]
			}),
			isGif ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: t.fps,
				v: fps,
				set: setFps,
				opts: [
					[8, "8"],
					[12, "12"],
					[15, "15"],
					[24, "24"]
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: ui.primary,
				disabled: !file || !job.ff || job.busy,
				"data-testid": "video-run",
				onClick: () => file && job.go((ff) => run(ff, [file], ([n]) => args(n), `out.${fmt}`)),
				children: t.run
			}),
			job.fail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red-400",
				children: t.fail
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
				t,
				before: file?.size ?? 0,
				blob: job.out,
				name: `${baseName(file?.name ?? "video")}.${fmt}`
			})
		]
	});
}
function Merge({ t }) {
	const job = useJob();
	const [files, setFiles] = (0, import_react.useState)([]);
	const [h, setH] = (0, import_react.useState)(720);
	const move = (i, d) => setFiles((l) => {
		const n = [...l];
		const j = i + d;
		if (j < 0 || j >= n.length) return l;
		[n[i], n[j]] = [n[j], n[i]];
		return n;
	});
	const args = (names) => {
		const W = Math.round(h * 16 / 9 / 2) * 2;
		const parts = names.map((_, i) => `[${i}:v]scale=${W}:${h}:force_original_aspect_ratio=decrease,pad=${W}:${h}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30,format=yuv420p[v${i}];[${i}:a]aresample=44100,aformat=channel_layouts=stereo[a${i}]`);
		const cat = names.map((_, i) => `[v${i}][a${i}]`).join("") + `concat=n=${names.length}:v=1:a=1[v][a]`;
		return [
			...names.flatMap((n) => ["-i", n]),
			"-filter_complex",
			`${parts.join(";")};${cat}`,
			"-map",
			"[v]",
			"-map",
			"[a]",
			"-c:v",
			"libx264",
			"-preset",
			"veryfast",
			"-crf",
			"23",
			"-c:a",
			"aac",
			"-movflags",
			"+faststart",
			"out.mp4"
		];
	};
	const argsNoAudio = (names) => {
		const W = Math.round(h * 16 / 9 / 2) * 2;
		const parts = names.map((_, i) => `[${i}:v]scale=${W}:${h}:force_original_aspect_ratio=decrease,pad=${W}:${h}:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30,format=yuv420p[v${i}]`);
		return [
			...names.flatMap((n) => ["-i", n]),
			"-filter_complex",
			`${parts.join(";")};${names.map((_, i) => `[v${i}]`).join("")}concat=n=${names.length}:v=1:a=0[v]`,
			"-map",
			"[v]",
			"-c:v",
			"libx264",
			"-preset",
			"veryfast",
			"-crf",
			"23",
			"-movflags",
			"+faststart",
			"out.mp4"
		];
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, {
				t,
				ff: job.ff,
				err: job.err,
				busy: job.busy,
				pct: job.pct
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
				t,
				multiple: true,
				onFiles: (f) => {
					setFiles((l) => [...l, ...f]);
					job.setOut(null);
				}
			}),
			files.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-2 text-sm",
				children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-center gap-2 rounded-xl border border-white/10 px-3 py-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1 truncate",
							children: [
								i + 1,
								". ",
								f.name,
								" · ",
								kb$1(f.size)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => move(i, -1),
							"aria-label": t.up,
							children: "↑"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => move(i, 1),
							"aria-label": t.down,
							children: "↓"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => setFiles((l) => l.filter((_, j) => j !== i)),
							children: t.remove
						})
					]
				}, `${f.name}-${i}`))
			}) : null,
			files.length === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: t.need2
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: "",
				v: h,
				set: setH,
				opts: [
					[480, "480p"],
					[720, "720p"],
					[1080, "1080p"]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: ui.primary,
				disabled: files.length < 2 || !job.ff || job.busy,
				"data-testid": "video-run",
				onClick: () => job.go(async (ff) => {
					try {
						return await run(ff, files, args, "out.mp4");
					} catch {
						return run(ff, files, argsNoAudio, "out.mp4");
					}
				}),
				children: t.run
			}),
			job.fail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red-400",
				children: t.fail
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
				t,
				before: files.reduce((s, f) => s + f.size, 0),
				blob: job.out,
				name: "nibras-video.mp4"
			})
		]
	});
}
function Audio({ t }) {
	const job = useJob();
	const [file, setFile] = (0, import_react.useState)(null);
	const [fmt, setFmt] = (0, import_react.useState)("mp3");
	const args = (n) => fmt === "mp3" ? [
		"-i",
		n,
		"-vn",
		"-c:a",
		"libmp3lame",
		"-q:a",
		"2",
		"out.mp3"
	] : fmt === "wav" ? [
		"-i",
		n,
		"-vn",
		"-c:a",
		"pcm_s16le",
		"out.wav"
	] : [
		"-i",
		n,
		"-vn",
		"-c:a",
		"aac",
		"-b:a",
		"192k",
		"out.m4a"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, {
				t,
				ff: job.ff,
				err: job.err,
				busy: job.busy,
				pct: job.pct
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
				t,
				onFiles: (f) => {
					if (f[0]) {
						setFile(f[0]);
						job.setOut(null);
					}
				}
			}),
			file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [
					file.name,
					" · ",
					kb$1(file.size)
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: t.format,
				v: fmt,
				set: setFmt,
				opts: [
					["mp3", "MP3"],
					["m4a", "M4A"],
					["wav", "WAV"]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: ui.primary,
				disabled: !file || !job.ff || job.busy,
				"data-testid": "video-run",
				onClick: () => file && job.go((ff) => run(ff, [file], ([n]) => args(n), `out.${fmt}`)),
				children: t.run
			}),
			job.fail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red-400",
				children: t.fail
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
				t,
				before: file?.size ?? 0,
				blob: job.out,
				name: `${baseName(file?.name ?? "video")}.${fmt}`
			})
		]
	});
}
var X$1 = {
	az: {
		level: "Sıxma",
		light: "Yüngül",
		medium: "Orta",
		strong: "Güclü",
		target: "Hədəf ölçü",
		size: "Ölçü",
		res: "Keyfiyyət",
		ratio: "Nisbət",
		pos: "Yer",
		left: "Sol/Yuxarı",
		center: "Orta",
		right: "Sağ/Aşağı",
		fit: "Yerləşdirmə",
		pad: "Qara zolaqla sığdır",
		fill: "Doldur (kənarları kəs)",
		noAudio: "Səs silinir, görüntü olduğu kimi qalır (yenidən kodlaşdırmadan).",
		none: "Yox"
	},
	en: {
		level: "Compression",
		light: "Light",
		medium: "Medium",
		strong: "Strong",
		target: "Target size",
		size: "Size",
		res: "Resolution",
		ratio: "Ratio",
		pos: "Position",
		left: "Left/Top",
		center: "Center",
		right: "Right/Bottom",
		fit: "Fit",
		pad: "Fit with black bars",
		fill: "Fill (crop edges)",
		noAudio: "Sound is removed, the picture stays as is (no re-encode).",
		none: "Off"
	},
	tr: {
		level: "Sıkıştırma",
		light: "Hafif",
		medium: "Orta",
		strong: "Güçlü",
		target: "Hedef boyut",
		size: "Boyut",
		res: "Çözünürlük",
		ratio: "Oran",
		pos: "Konum",
		left: "Sol/Üst",
		center: "Orta",
		right: "Sağ/Alt",
		fit: "Yerleşim",
		pad: "Siyah şeritle sığdır",
		fill: "Doldur (kenarları kırp)",
		noAudio: "Ses silinir, görüntü olduğu gibi kalır (yeniden kodlamasız).",
		none: "Kapalı"
	},
	ar: {
		level: "الضغط",
		light: "خفيف",
		medium: "متوسط",
		strong: "قوي",
		target: "الحجم المستهدف",
		size: "المقاس",
		res: "الدقة",
		ratio: "النسبة",
		pos: "الموضع",
		left: "يسار/أعلى",
		center: "الوسط",
		right: "يمين/أسفل",
		fit: "الملاءمة",
		pad: "ملاءمة بحواف سوداء",
		fill: "ملء (قص الحواف)",
		noAudio: "يُحذف الصوت وتبقى الصورة كما هي (بلا إعادة ترميز).",
		none: "إيقاف"
	},
	ru: {
		level: "Сжатие",
		light: "Слабое",
		medium: "Среднее",
		strong: "Сильное",
		target: "Целевой размер",
		size: "Размер",
		res: "Разрешение",
		ratio: "Пропорции",
		pos: "Положение",
		left: "Слева/Сверху",
		center: "Центр",
		right: "Справа/Снизу",
		fit: "Вписать",
		pad: "С чёрными полями",
		fill: "Заполнить (обрезать края)",
		noAudio: "Звук удаляется, картинка остаётся как есть (без перекодирования).",
		none: "Нет"
	}
};
var durOf = (f) => new Promise((res) => {
	const v = document.createElement("video");
	const u = URL.createObjectURL(f);
	v.preload = "metadata";
	v.onloadedmetadata = () => {
		res(v.duration || 0);
		URL.revokeObjectURL(u);
	};
	v.onerror = () => {
		res(0);
		URL.revokeObjectURL(u);
	};
	v.src = u;
});
var H264 = [
	"-c:v",
	"libx264",
	"-preset",
	"veryfast",
	"-pix_fmt",
	"yuv420p",
	"-movflags",
	"+faststart"
];
function OneFile({ t, job, file, setFile }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Status, {
			t,
			ff: job.ff,
			err: job.err,
			busy: job.busy,
			pct: job.pct
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
			t,
			onFiles: (f) => {
				if (f[0]) {
					setFile(f[0]);
					job.setOut(null);
				}
			}
		}),
		file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm",
			children: [
				file.name,
				" · ",
				kb$1(file.size)
			]
		}) : null
	] });
}
function RunBtn({ t, job, file, onRun }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: ui.primary,
		disabled: !file || !job.ff || job.busy,
		"data-testid": "video-run",
		onClick: onRun,
		children: t.run
	});
}
function Compress({ t }) {
	const x = X$1[useI18n$1().lang] ?? X$1.en;
	const job = useJob();
	const [file, setFile] = (0, import_react.useState)(null);
	const [lvl, setLvl] = (0, import_react.useState)(28);
	const [h, setH] = (0, import_react.useState)(0);
	const [mb, setMb] = (0, import_react.useState)(0);
	const go = () => file && job.go(async (ff) => {
		const vf = h ? ["-vf", `scale=-2:'min(${h},ih)'`] : [];
		let rate = ["-crf", String(lvl)];
		if (mb) {
			const d = await durOf(file);
			if (d > 0) {
				const kbps = Math.max(150, Math.floor(mb * 8192 / d) - 96);
				rate = [
					"-b:v",
					`${kbps}k`,
					"-maxrate",
					`${kbps}k`,
					"-bufsize",
					`${kbps * 2}k`
				];
			}
		}
		return run(ff, [file], ([n]) => [
			"-i",
			n,
			...vf,
			...H264,
			...rate,
			"-c:a",
			"aac",
			"-b:a",
			"96k",
			"out.mp4"
		], "out.mp4");
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneFile, {
				t,
				job,
				file,
				setFile
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: x.level,
				v: lvl,
				set: (v) => {
					setLvl(v);
					setMb(0);
				},
				opts: [
					[24, x.light],
					[28, x.medium],
					[33, x.strong]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: x.res,
				v: h,
				set: setH,
				opts: [
					[0, t.orig],
					[1080, "1080p"],
					[720, "720p"],
					[480, "480p"]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: x.target,
				v: mb,
				set: setMb,
				opts: [
					[0, x.none],
					[8, "8 MB"],
					[16, "16 MB"],
					[25, "25 MB"],
					[50, "50 MB"]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RunBtn, {
				t,
				job,
				file,
				onRun: go
			}),
			job.fail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red-400",
				children: t.fail
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
				t,
				before: file?.size ?? 0,
				blob: job.out,
				name: `${baseName(file?.name ?? "video")}-sixilmis.mp4`
			})
		]
	});
}
function Crop$1({ t }) {
	const x = X$1[useI18n$1().lang] ?? X$1.en;
	const job = useJob();
	const [file, setFile] = (0, import_react.useState)(null);
	const [r, setR] = (0, import_react.useState)("9:16");
	const [p, setP] = (0, import_react.useState)(.5);
	const src = (0, import_react.useMemo)(() => file ? URL.createObjectURL(file) : "", [file]);
	(0, import_react.useEffect)(() => () => {
		if (src) URL.revokeObjectURL(src);
	}, [src]);
	const [rw, rh] = r.split(":").map(Number);
	const k = rw / rh;
	const go = () => file && job.go((ff) => {
		const cw = `trunc(min(iw\\,ih*${k})/2)*2`, ch = `trunc(min(ih\\,iw/${k})/2)*2`;
		return run(ff, [file], ([n]) => [
			"-i",
			n,
			"-vf",
			`crop=${cw}:${ch}:(iw-${cw})*${p}:(ih-${ch})*${p}`,
			...H264,
			"-crf",
			"20",
			"-c:a",
			"copy",
			"out.mp4"
		], "out.mp4").catch(() => run(ff, [file], ([n]) => [
			"-i",
			n,
			"-vf",
			`crop=${cw}:${ch}:(iw-${cw})*${p}:(ih-${ch})*${p}`,
			...H264,
			"-crf",
			"20",
			"-c:a",
			"aac",
			"out.mp4"
		], "out.mp4"));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneFile, {
				t,
				job,
				file,
				setFile
			}),
			src ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-fit overflow-hidden rounded-2xl bg-black ring-1 ring-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src,
					muted: true,
					playsInline: true,
					controls: true,
					className: "block max-h-72"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 grid",
					style: { placeItems: "center" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full max-h-full max-w-full border-2 border-[#2f6bff] shadow-[0_0_0_9999px_rgba(0,0,0,0.55)]",
						style: {
							aspectRatio: `${rw}/${rh}`,
							justifySelf: p === 0 ? "start" : p === 1 ? "end" : "center",
							alignSelf: p === 0 ? "start" : p === 1 ? "end" : "center",
							width: k >= 1 ? "100%" : "auto"
						}
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: x.ratio,
				v: r,
				set: setR,
				opts: [
					["9:16", "9:16"],
					["1:1", "1:1"],
					["4:5", "4:5"],
					["16:9", "16:9"],
					["4:3", "4:3"]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: x.pos,
				v: p,
				set: setP,
				opts: [
					[0, x.left],
					[.5, x.center],
					[1, x.right]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RunBtn, {
				t,
				job,
				file,
				onRun: go
			}),
			job.fail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red-400",
				children: t.fail
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
				t,
				before: file?.size ?? 0,
				blob: job.out,
				name: `${baseName(file?.name ?? "video")}-${r.replace(":", "x")}.mp4`
			})
		]
	});
}
function Resize({ t }) {
	const x = X$1[useI18n$1().lang] ?? X$1.en;
	const job = useJob();
	const [file, setFile] = (0, import_react.useState)(null);
	const [s, setS] = (0, import_react.useState)("1280x720");
	const [fit, setFit] = (0, import_react.useState)("pad");
	const go = () => file && job.go((ff) => {
		const [w, h] = s.split("x");
		const vf = fit === "pad" ? `scale=${w}:${h}:force_original_aspect_ratio=decrease,pad=${w}:${h}:(ow-iw)/2:(oh-ih)/2,setsar=1` : `scale=${w}:${h}:force_original_aspect_ratio=increase,crop=${w}:${h},setsar=1`;
		return run(ff, [file], ([n]) => [
			"-i",
			n,
			"-vf",
			vf,
			...H264,
			"-crf",
			"22",
			"-c:a",
			"aac",
			"-b:a",
			"128k",
			"out.mp4"
		], "out.mp4");
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneFile, {
				t,
				job,
				file,
				setFile
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: x.size,
				v: s,
				set: setS,
				opts: [
					["1920x1080", "1080p 16:9"],
					["1280x720", "720p 16:9"],
					["854x480", "480p 16:9"],
					["1080x1920", "9:16 Reels/TikTok"],
					["1080x1080", "1:1"],
					["1080x1350", "4:5"]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opts, {
				label: x.fit,
				v: fit,
				set: setFit,
				opts: [["pad", x.pad], ["fill", x.fill]]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RunBtn, {
				t,
				job,
				file,
				onRun: go
			}),
			job.fail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red-400",
				children: t.fail
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
				t,
				before: file?.size ?? 0,
				blob: job.out,
				name: `${baseName(file?.name ?? "video")}-${s}.mp4`
			})
		]
	});
}
function Mute({ t }) {
	const x = X$1[useI18n$1().lang] ?? X$1.en;
	const job = useJob();
	const [file, setFile] = (0, import_react.useState)(null);
	const ext = file ? [
		"mp4",
		"mov",
		"mkv",
		"webm",
		"m4v"
	].includes(extOf(file.name)) ? extOf(file.name) : "mp4" : "mp4";
	const go = () => file && job.go((ff) => run(ff, [file], ([n]) => [
		"-i",
		n,
		"-an",
		"-c:v",
		"copy",
		`out.${ext}`
	], `out.${ext}`).catch(() => run(ff, [file], ([n]) => [
		"-i",
		n,
		"-an",
		...H264,
		"-crf",
		"20",
		"out.mp4"
	], "out.mp4")));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OneFile, {
				t,
				job,
				file,
				setFile
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: x.noAudio
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RunBtn, {
				t,
				job,
				file,
				onRun: go
			}),
			job.fail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red-400",
				children: t.fail
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
				t,
				before: file?.size ?? 0,
				blob: job.out,
				name: `${baseName(file?.name ?? "video")}-sessiz.${ext}`
			})
		]
	});
}
function VideoToolPage({ tool }) {
	const { lang } = useI18n$1();
	const t = T$2[lang] ?? T$2.en;
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	const C = {
		trim: Trim,
		compress: Compress,
		crop: Crop$1,
		resize: Resize,
		mute: Mute,
		convert: Convert,
		merge: Merge,
		audio: Audio
	}[tool];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KitShell, {
		path: `/video/${tool}`,
		lang,
		next: [...VIDEO_FAMILY, "/voice"],
		children: mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { t }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-40 animate-pulse rounded-2xl bg-white/5" })
	});
}
var VHUB_ICON = {
	trim: Scissors,
	compress: Minimize2,
	crop: Crop,
	resize: Scaling,
	mute: VolumeX,
	convert: RefreshCw,
	merge: Combine,
	audio: Music
};
function VideoHubPage() {
	const { lang } = useI18n$1();
	const t = T$2[lang] ?? T$2.en;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KitShell, {
		path: "/video",
		lang,
		next: [
			"/image",
			"/pdf/merge",
			"/zip"
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "svc-list vhub",
			children: VIDEO_TOOLS.map((id) => {
				const k = VIDEO_KIT[`/video/${id}`][lang];
				const I = VHUB_ICON[id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: localeHref(lang, `/video/${id}`),
					className: `svc-cat vhub-card vhub-${id}`,
					"data-testid": `video-card-${id}`,
					"aria-label": `${k.h1} — ${t.open}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "svc-ico",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { size: 22 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "svc-text",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "svc-name",
								children: k.h1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "svc-sub",
								children: k.lead
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "svc-chev vhub-chev",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 18 })
						})
					]
				}, id);
			})
		})
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Da_pLWIk.js
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
var CHUNK_ERROR = /dynamically imported module|Importing a module script failed|error loading dynamically imported module/i;
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	const message = errorMessage(error);
	(0, import_react.useEffect)(() => {
		if (!CHUNK_ERROR.test(message)) return;
		try {
			if (sessionStorage.getItem("nx-chunk-reload")) return;
			sessionStorage.setItem("nx-chunk-reload", "1");
		} catch {
			return;
		}
		window.location.reload();
	}, [message]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		"data-nosnippet": "",
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: CHUNK_ERROR.test(message) ? "A new version is available. Reload the page." : message
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900",
				onClick: () => window.location.reload(),
				children: "Yenilə"
			})
		]
	});
}
/**
* Path-based locales for pages that share one route file across languages.
* Public URL `/en/why` is served internally as `/why?lang=en`, and internal
* `?lang=` links are rendered back as `/en/...` paths.
*/
var LANGS = [
	"en",
	"tr",
	"ar",
	"ru"
];
var RU_PAIR_SLUGS = new Set(PDF_LOCALE_PAIRS.map((p) => String(p.ru).split("/").pop() ?? ""));
/** True when `/${lang}${path}` has no dedicated route and must be rewritten. */
function needsLocaleRewrite(lang, path) {
	if (!isSharedLocalePage(path)) return false;
	const prog = path.match(/^\/programming\/([^/]+)$/);
	if (prog) {
		const slug = prog[1];
		if (isCodeSampleSlug(slug) || isCourseSlug(slug) || hasProgrammingLocale(lang, slug)) return false;
	}
	const ruRes = path.match(/^\/resources\/([^/]+)$/);
	if (lang === "ru" && ruRes && RU_PAIR_SLUGS.has(ruRes[1])) return false;
	return true;
}
var localeRewrite = {
	input: ({ url }) => {
		url.pathname = delocalizeSection(url.pathname);
		const m = url.pathname.match(/^\/(en|tr|ar|ru)(\/.+?)\/?$/);
		if (!m) return url;
		const lang = m[1];
		if (!needsLocaleRewrite(lang, m[2])) return url;
		url.pathname = m[2];
		url.searchParams.set("lang", lang);
		return url;
	},
	output: ({ url }) => {
		url.pathname = localizeSection(url.pathname);
		const lang = url.searchParams.get("lang");
		if (!lang || !LANGS.includes(lang)) return url;
		const path = url.pathname.length > 1 ? url.pathname.replace(/\/$/, "") : url.pathname;
		if (!needsLocaleRewrite(lang, path)) return url;
		url.pathname = localizeSection(`/${lang}${path}`);
		url.searchParams.delete("lang");
		return url;
	}
};
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") {
			if (full.includes("$")) return;
			paths.add(full.startsWith("/") ? full : `/${full}`);
		} else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function SiteBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "site-backdrop",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "site-bg-base" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "site-bg-shaft" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "site-bg-tl",
				viewBox: "0 0 820 460",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "tlA",
							x1: "0",
							y1: "1",
							x2: "1",
							y2: "0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0",
									stopColor: "#5b4dff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0.35",
									stopColor: "#2f6dff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0.72",
									stopColor: "#3ec6ff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "1",
									stopColor: "#d7f4ff"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "tlB",
							x1: "0",
							y1: "1",
							x2: "1",
							y2: "0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0",
									stopColor: "#2a1f88"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0.5",
									stopColor: "#2456d6"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "1",
									stopColor: "#7ad8ff"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
							id: "bloom",
							x: "-30%",
							y: "-80%",
							width: "160%",
							height: "260%",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
								stdDeviation: "5",
								result: "b"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "b" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-40 250C120 190 230 110 390 48c120-46 250-70 470-86",
						stroke: "url(#tlB)",
						strokeWidth: "10",
						opacity: "0.35",
						filter: "url(#bloom)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-40 250C120 190 230 110 390 48c120-46 250-70 470-86",
						stroke: "url(#tlA)",
						strokeWidth: "2.4",
						filter: "url(#bloom)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-50 330C130 250 270 160 450 92c140-52 280-78 430-92",
						stroke: "#1d4ed8",
						strokeWidth: "8",
						opacity: "0.28",
						filter: "url(#bloom)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-50 330C130 250 270 160 450 92c140-52 280-78 430-92",
						stroke: "url(#tlB)",
						strokeWidth: "1.7",
						opacity: "0.9"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "site-bg-tr",
				viewBox: "0 0 380 280",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "trA",
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0",
							stopColor: "#1d4ed8",
							stopOpacity: "0.95"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "1",
							stopColor: "#0a1d4d",
							stopOpacity: "0.35"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "trB",
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0",
							stopColor: "#2563eb",
							stopOpacity: "0.8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "1",
							stopColor: "#071433",
							stopOpacity: "0.2"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "20,18 300,70 250,128 -10,78",
						fill: "url(#trA)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "48,118 328,168 286,220 8,172",
						fill: "url(#trB)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "site-bg-bl",
				viewBox: "0 0 520 420",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "blA",
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0",
							stopColor: "#3b82f6"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "1",
							stopColor: "#12327a"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "blB",
						x1: "0",
						y1: "1",
						x2: "1",
						y2: "0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0",
							stopColor: "#1d4ed8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "1",
							stopColor: "#0b1d4a"
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "-40,150 280,210 230,286 -70,226",
						fill: "url(#blB)",
						opacity: "0.9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "-20,230 250,292 206,360 -64,298",
						fill: "url(#blA)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "10,310 210,356 176,408 -20,364",
						fill: "#2563eb",
						opacity: "0.55"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "site-bg-br",
				viewBox: "0 0 1440 560",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "wave",
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0",
								stopColor: "#0c2f78"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "1",
								stopColor: "#02060f"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "rim",
							x1: "0",
							y1: "0",
							x2: "1",
							y2: "0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0",
									stopColor: "#1d4ed8",
									stopOpacity: "0.2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0.45",
									stopColor: "#49b7ff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0.72",
									stopColor: "#e9f8ff"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "1",
									stopColor: "#7c5cff"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
							id: "wb",
							x: "-10%",
							y: "-40%",
							width: "120%",
							height: "180%",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
								stdDeviation: "7",
								result: "b"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "b" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-80 300C240 150 520 230 860 286C1120 328 1280 230 1560 90L1560 600L-80 600Z",
						fill: "url(#wave)",
						opacity: "0.92"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-80 340C260 190 540 270 900 330C1160 374 1300 270 1580 130",
						stroke: "#2457d6",
						strokeWidth: "16",
						opacity: "0.28",
						filter: "url(#wb)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-40 230C280 70 560 170 900 240C1160 292 1320 170 1600 20",
						stroke: "url(#rim)",
						strokeWidth: "3.2",
						filter: "url(#wb)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M-20 310C300 160 580 250 940 320C1180 368 1320 270 1600 150",
						stroke: "#67d4ff",
						strokeWidth: "1.5",
						opacity: "0.8"
					})
				]
			})
		]
	});
}
var CARDS$1 = [
	{
		slug: "nibras-arabic",
		name: "Nibras Arabic",
		icon: "/apps/nibras-arabic-v2.webp"
	},
	{
		slug: "nibras-pdf",
		name: "Nibras PDF",
		icon: "/apps/nibras-pdf.webp"
	},
	{
		slug: "nibras-docs",
		name: "Nibras Docs",
		icon: "/apps/nibras-docs.webp"
	},
	{
		slug: "nibras-plans",
		name: "Nibras Plans",
		icon: "/apps/nibras-plans.webp"
	},
	{
		slug: "nibras-note",
		name: "Nibras Note",
		icon: "/apps/nibras-note.webp"
	},
	{
		slug: "nibras-scan",
		name: "Nibras Scan",
		icon: "/apps/nibras-scan.webp"
	}
];
var LABEL = {
	az: "Tövsiyə",
	en: "Suggested",
	tr: "Öneri",
	ar: "اقتراح",
	ru: "Рекомендуем"
};
function AppSuggest() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const { lang } = useI18n$1();
	const here = stripLocalePrefix(pathname).path;
	if (pathname.startsWith("/nx-studio")) return null;
	const card = CARDS$1.find((item) => !here.startsWith(`/apps/${item.slug}`));
	if (!card) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "app-suggest",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: localeHref(lang, `/apps/${card.slug}`),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: card.icon,
					alt: "",
					width: 34,
					height: 34,
					loading: "lazy",
					decoding: "async"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: card.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: LABEL[lang] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "suggest-bot",
					viewBox: "0 0 16 18",
					"aria-hidden": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "8",
							cy: "1.15",
							r: "1.05",
							fill: "#c9b6ff"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M8 2.1v2.2",
							stroke: "#9fd6ff",
							strokeWidth: "1",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "3.1",
							y: "4.4",
							width: "9.8",
							height: "8.6",
							rx: "3",
							fill: "#e7eefc"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "5.1",
							y: "7.1",
							width: "5.8",
							height: "1.35",
							rx: "0.65",
							fill: "#8ea6cc"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "4.15",
							y: "12.7",
							width: "2.5",
							height: "2.55",
							rx: "0.8",
							fill: "#c5d2ea"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: "9.35",
							y: "12.7",
							width: "2.5",
							height: "2.55",
							rx: "0.8",
							fill: "#c5d2ea"
						})
					]
				})
			]
		})
	});
}
var styles_default = "/assets/styles-Dk8fJay_.css";
var Route$310 = createRootRoute({
	beforeLoad: ({ location }) => ({ seoLang: langFromLocation(location.pathname, location.searchStr) }),
	loader: async ({ location }) => {
		const lang = langFromLocation(location.pathname, location.searchStr);
		return {
			pathGuide: await loadPathGuide(location.pathname, lang),
			pathGuideLang: lang
		};
	},
	head: ({ matches }) => {
		const leaf = matches[matches.length - 1];
		const lang = matches[0]?.context.seoLang ?? "az";
		const seo = buildHead(leaf?.pathname ?? "/", lang);
		return {
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{
					name: "theme-color",
					content: "#10203a"
				},
				{
					name: "msvalidate.01",
					content: "68E3EDC6C5786EFB6CA2F8908BEBD488"
				},
				...seo.meta
			],
			links: [
				{
					rel: "icon",
					href: "/favicon.ico",
					sizes: "48x48"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "48x48",
					href: "/favicon-48.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "192x192",
					href: "/favicon-192.png"
				},
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png"
				},
				{
					rel: "manifest",
					href: "/manifest.webmanifest"
				},
				{
					rel: "stylesheet",
					href: styles_default
				}
			],
			scripts: [
				{ children: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','G-F1DMB5BCCD');addEventListener('load',function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-F1DMB5BCCD';document.head.appendChild(s);});" },
				{ children: "addEventListener('vite:preloadError',function(e){try{var k='nx-preload-reload',t=+sessionStorage.getItem(k)||0;if(Date.now()-t<30000)return;sessionStorage.setItem(k,String(Date.now()));e.preventDefault();location.reload();}catch(_){}});if('serviceWorker'in navigator)addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});" },
				...seo.scripts
			]
		};
	},
	component: RootDocument
});
function sceneFor(pathname) {
	const path = pathname.replace(/^\/(en|tr|ar|ru)(?=\/)/, "");
	if (path.startsWith("/unutma") || path.startsWith("/about")) return "mountains";
	if (path.startsWith("/why") || path.startsWith("/privacy") || path.startsWith("/contact") || path.startsWith("/nx-studio") || path.startsWith("/resources") || path.startsWith("/resurslar") || path.startsWith("/ru") || path.startsWith("/guides") || path.includes("/programming") || path.includes("/faq") || path.startsWith("/apps")) return "study";
	return "hero";
}
function SeoLinks() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const searchStr = useRouterState({ select: (state) => state.location.searchStr });
	const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
	if (path === "/ereb-dili/feil" || path.startsWith("/ereb-dili/feil/")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: `${SITE$2}${path}`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "az",
			href: `${SITE$2}${path}`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: `${SITE$2}${path}`
		})
	] });
	const pair = pdfPairFromPath(path);
	const programming = programmingFromPath(path);
	const faq = faqFromPath(path);
	const topic = faqTopicFromPath(path);
	if (topic) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: `${SITE$2}${faqTopicPath(topic.page.lang, topic.item.id)}`
		}),
		LANGS$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: code,
			href: `${SITE$2}${faqTopicPath(code, topic.item.id)}`
		}, code)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: `${SITE$2}${faqTopicPath("az", topic.item.id)}`
		})
	] });
	const searched = searchTopicFromPath(path);
	if (searched) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: `${SITE$2}${searchTopicPath(searched.lang, searched.kind, searched.item.slug)}`
		}),
		LANGS$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: code,
			href: `${SITE$2}${searchTopicPath(code, searched.kind, searched.item.slug)}`
		}, code)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: `${SITE$2}${searchTopicPath("az", searched.kind, searched.item.slug)}`
		})
	] });
	const searchIndex = searchFromPath(path);
	if (searchIndex) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: `${SITE$2}${searchPath(searchIndex.lang, searchIndex.kind)}`
		}),
		LANGS$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: code,
			href: `${SITE$2}${searchPath(code, searchIndex.kind)}`
		}, code)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: `${SITE$2}${searchPath("az", searchIndex.kind)}`
		})
	] });
	const paket = paketFromPath(path);
	if (paket) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: `${SITE$2}${paketPath(paket)}`
		}),
		LANGS$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: code,
			href: `${SITE$2}${paketPath(code)}`
		}, code)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: `${SITE$2}${paketPath("az")}`
		})
	] });
	const tool = toolFromPath(path);
	if (tool) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: `${SITE$2}${toolPath(tool.lang, tool.id)}`
		}),
		LANGS$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: code,
			href: `${SITE$2}${toolPath(code, tool.id)}`
		}, code)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: `${SITE$2}${toolPath("az", tool.id)}`
		})
	] });
	const tools = toolsFromPath(path);
	if (tools) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: `${SITE$2}${toolsPath(tools)}`
		}),
		LANGS$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: code,
			href: `${SITE$2}${toolsPath(code)}`
		}, code)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: `${SITE$2}${toolsPath("az")}`
		})
	] });
	const compared = compareTopicFromPath(path);
	if (compared) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: `${SITE$2}${compareTopicPath(compared.lang, compared.item.slug)}`
		}),
		LANGS$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: code,
			href: `${SITE$2}${compareTopicPath(code, compared.item.slug)}`
		}, code)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: `${SITE$2}${compareTopicPath("az", compared.item.slug)}`
		})
	] });
	const compareIndex = compareFromPath(path);
	if (compareIndex) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: `${SITE$2}${comparePath(compareIndex.lang)}`
		}),
		LANGS$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: code,
			href: `${SITE$2}${comparePath(code)}`
		}, code)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: `${SITE$2}${comparePath("az")}`
		})
	] });
	if (faq) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: `${SITE$2}${faq.path}`
		}),
		LANGS$1.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: code,
			href: `${SITE$2}${faqPath(code)}`
		}, code)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: `${SITE$2}/faq`
		})
	] });
	if (programming && (isCodeSampleSlug(programming.slug) || isCourseSlug(programming.slug) || programming.lang !== "az" || hasProgrammingLocale("en", programming.slug))) {
		const canonical = programmingLocalePath(programming.lang, programming.slug);
		const alternates = [
			"az",
			"en",
			"tr",
			"ar",
			"ru"
		].filter((code) => code === "az" || isCodeSampleSlug(programming.slug) || isCourseSlug(programming.slug) || hasProgrammingLocale(code, programming.slug));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "canonical",
				href: `${SITE$2}${canonical}`
			}),
			alternates.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "alternate",
				hreflang: code,
				href: `${SITE$2}${programmingLocalePath(code, programming.slug)}`
			}, code)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "alternate",
				hreflang: "x-default",
				href: `${SITE$2}${programmingLocalePath("az", programming.slug)}`
			})
		] });
	}
	if (pair) {
		const pairLang = langFromLocation(pathname, searchStr);
		const canonical = path.startsWith("/ru/") ? pair.ru : pairLang === "en" || pairLang === "tr" || pairLang === "ar" ? `/${pairLang}${pair.az}` : pair.az;
		const alternates = [
			["az", pair.az],
			["ru", pair.ru],
			["en", `/en${pair.az}`],
			["tr", `/tr${pair.az}`],
			["ar", `/ar${pair.az}`]
		];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "canonical",
				href: `${SITE$2}${canonical}`
			}),
			alternates.map(([code, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "alternate",
				hreflang: code,
				href: `${SITE$2}${href}`
			}, code)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "alternate",
				hreflang: "x-default",
				href: `${SITE$2}${pair.az}`
			})
		] });
	}
	const lang = langFromLocation(pathname, searchStr);
	const langs = [...LANGS$1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "canonical",
			href: pageUrl(path, lang)
		}),
		langs.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: code,
			href: pageUrl(path, code)
		}, code)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "alternate",
			hreflang: "x-default",
			href: pageUrl(path, "az")
		})
	] });
}
function RootDocument() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const searchStr = useRouterState({ select: (state) => state.location.searchStr });
	const isHome = pathname === "/" || /^\/(en|tr|ar|ru)\/?$/.test(pathname);
	const isStudio = pathname.startsWith("/nx-studio");
	const isPlanner = /(?:^|\/)planner\/?$/.test(pathname);
	const isPlay = /\/oyun\/[^/]+\/?$/.test(pathname);
	const lang = langFromLocation(pathname, searchStr);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoLinks, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: isHome ? "is-home" : isStudio ? "is-studio" : isPlanner ? "is-planner" : void 0,
			"data-scene": isHome || isStudio || isPlanner ? void 0 : sceneFor(pathname),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteBackdrop, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitMeter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I18nProvider, { children: [
					isHome || isStudio || isPlanner ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathGuide, {}),
					isHome || isStudio || isPlanner || isPlay ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSuggest, {}),
					isHome || isStudio || isPlanner || isPlay ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function PathGuide() {
	const data = Route$310.useLoaderData();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	if (!data?.pathGuide) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-guide-wrap",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideSection, {
			guide: data.pathGuide,
			lang: data.pathGuideLang,
			game: /\/oyun(\/|$)/.test(pathname)
		})
	});
}
/** Nibras apps need Android 7.0+ (minSdk 24, see src/data/play-facts.json). */
var MIN = 7;
var T$1 = {
	az: {
		title: "Cihaz yoxlaması",
		ok: "Sizin cihazınız (Android {v}) Nibras tətbiqlərini dəstəkləyir.",
		old: "Android {v} köhnədir: Nibras tətbiqləri Android 7.0 və yuxarı tələb edir.",
		ios: "Bu iPhone/iPad-dir. APK yalnız Android-də qurulur; veb alətlər brauzerdə işləyir.",
		desktop: "Kompüterdən baxırsınız. APK-nı Android 7.0+ telefonda açın."
	},
	en: {
		title: "Device check",
		ok: "Your device (Android {v}) supports Nibras apps.",
		old: "Android {v} is too old: Nibras apps need Android 7.0 or newer.",
		ios: "This is an iPhone/iPad. APKs install only on Android; the web tools work in the browser.",
		desktop: "You're on a computer. Open the APK on an Android 7.0+ phone."
	},
	tr: {
		title: "Cihaz kontrolü",
		ok: "Cihazınız (Android {v}) Nibras uygulamalarını destekliyor.",
		old: "Android {v} eski: Nibras uygulamaları Android 7.0 ve üstü gerektirir.",
		ios: "Bu bir iPhone/iPad. APK yalnızca Android'de kurulur; web araçları tarayıcıda çalışır.",
		desktop: "Bilgisayardasınız. APK'yı Android 7.0+ telefonda açın."
	},
	ar: {
		title: "فحص الجهاز",
		ok: "جهازك (Android {v}) يدعم تطبيقات نبراس.",
		old: "Android {v} قديم: تطبيقات نبراس تحتاج Android 7.0 أو أحدث.",
		ios: "هذا iPhone/iPad. ملفات APK تُثبَّت على Android فقط؛ أدوات الويب تعمل في المتصفح.",
		desktop: "أنت على حاسوب. افتح APK على هاتف Android 7.0 أو أحدث."
	},
	ru: {
		title: "Проверка устройства",
		ok: "Ваше устройство (Android {v}) поддерживает приложения Nibras.",
		old: "Android {v} устарел: приложениям Nibras нужен Android 7.0 или новее.",
		ios: "Это iPhone/iPad. APK ставится только на Android; веб-инструменты работают в браузере.",
		desktop: "Вы за компьютером. Откройте APK на телефоне с Android 7.0+."
	}
};
function DeviceCheck({ lang }) {
	const [s, setS] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const ua = navigator.userAgent;
		const m = ua.match(/Android\s+(\d+)(?:\.(\d+))?/i);
		if (m) setS({
			kind: Number(m[1]) >= MIN ? "ok" : "old",
			ver: m[2] ? `${m[1]}.${m[2]}` : m[1]
		});
		else if (/iPhone|iPad|iPod/i.test(ua) || /Macintosh/.test(ua) && navigator.maxTouchPoints > 1) setS({ kind: "ios" });
		else setS({ kind: "desktop" });
	}, []);
	if (!s) return null;
	const t = T$1[lang] ?? T$1.en;
	const color = s.kind === "ok" ? "#16a34a" : s.kind === "old" ? "#dc2626" : "#64748b";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		"data-nosnippet": "",
		"data-testid": "device-check",
		style: {
			display: "flex",
			gap: 10,
			alignItems: "center",
			border: `1px solid ${color}55`,
			background: `${color}14`,
			borderRadius: 14,
			padding: "10px 14px",
			margin: "12px 0",
			fontSize: 14
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			style: {
				width: 10,
				height: 10,
				borderRadius: 99,
				background: color,
				flex: "none"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [t.title, ":"] }),
			" ",
			t[s.kind].replace("{v}", s.ver ?? "")
		] })]
	});
}
function Mark({ id }) {
	if (id === "apk") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "currentColor",
				d: "M7 3.5h7.2L19 8.2V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1-1.5Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#05060c",
				d: "M14 3.8V8h4.1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#05060c",
				d: "M12 11.2a.8.8 0 0 1 .8.8v2.1h2.1a.8.8 0 0 1 0 1.6h-2.1V18a.8.8 0 0 1-1.6 0v-2.3H8.9a.8.8 0 0 1 0-1.6h2.3V12a.8.8 0 0 1 .8-.8Z"
			})
		]
	});
	if (id === "kotlin") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M4 4h8.2L4 16.2V4Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12.4 4 4 16.4V20l8.6-8.6L20 20V12.2L12.4 4Z",
			opacity: ".72"
		})]
	});
	if (id === "java") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12 3.2c.7 1.3-.2 2.2-.8 3.1-.5.8-1.1 1.7-.3 2.8 1.3-.5 2.2-1.6 2.4-2.8.8 1.4.3 3.2-.8 4.3 2.2-.2 3.8-1.6 4.1-3.6.9 2.4-.4 5-3 6.2 3 .4 5.2-1.2 5.6-3.6C20.6 14.8 16.8 19 12 19c-3.2 0-6.2-2-6.8-5.2.8 1.6 2.6 2.6 4.4 2.4-2.2-.8-3.4-3-2.6-5.2.6 1.1 2 1.8 3.3 1.5-1.6-1-2.1-3.1-1.2-4.7.8 1 2.2 1.4 3.3 1 .2-2.2-.8-4.1-2.4-5.6Z"
		})
	});
	if (id === "swift") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M16.8 6.2c-2.4-1.6-6.3.2-8.7 3.2C6.4 7.6 5 6.6 4.2 6.8c2.2 1.5 3.4 3.4 3.6 5.6-2.4 1.5-4.3 1.2-5.3.4 1.8 3.6 5.4 5.8 9.2 5.4 3.2-.3 6.4-2.6 7.8-5.8-2.2 1.2-4.6.8-6.3-.4 2.6-.2 4.8-1.8 5.6-3.8-1.2.8-2.6 1.1-4 1-2.2-2-3.8-2.6-3.2-3.8 1.6.2 3.4-.2 5.2-1.2Z"
		})
	});
	if (id === "js" || id === "ts") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3.5",
			y: "3.5",
			width: "17",
			height: "17",
			rx: "3",
			fill: "currentColor"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "12",
			y: "16",
			textAnchor: "middle",
			fontSize: "8",
			fontWeight: "700",
			fill: "#05060c",
			fontFamily: "DM Sans, sans-serif",
			children: id === "js" ? "JS" : "TS"
		})]
	});
	if (id === "dart") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M14.2 3 4 13.2 8.8 18 21 5.8 14.2 3Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M8.8 18 4 13.2V19a2 2 0 0 0 2 2h5.8L8.8 18Z",
			opacity: ".65"
		})]
	});
	if (id === "python") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12 3.5c-3.2 0-4.2.8-4.2 2.4v2.2h4.3v.8H6.4C4.6 8.9 3.5 10 3.5 12.2c0 2.2 1.2 3.3 3 3.3h1.8v-1.6c0-1.6 1.4-2.8 3.2-2.8h4.2c1.4 0 2.4-.9 2.4-2.4V5.9c0-1.6-1.3-2.4-6.1-2.4Zm-1.6 1.6a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12 20.5c3.2 0 4.2-.8 4.2-2.4v-2.2h-4.3v-.8h5.7c1.8 0 2.9-1.1 2.9-3.3 0-2.2-1.2-3.3-3-3.3h-1.8v1.6c0 1.6-1.4 2.8-3.2 2.8H8.3c-1.4 0-2.4.9-2.4 2.4v2.8c0 1.6 1.3 2.4 6.1 2.4Zm1.6-1.6a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z",
			opacity: ".72"
		})]
	});
	if (id === "cpp") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "12",
			y: "16",
			textAnchor: "middle",
			fontSize: "9",
			fontWeight: "700",
			fill: "currentColor",
			fontFamily: "Syne, sans-serif",
			children: "C++"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "2.1",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "12",
				cy: "12",
				rx: "9",
				ry: "3.4",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "12",
				cy: "12",
				rx: "9",
				ry: "3.4",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4",
				transform: "rotate(60 12 12)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "12",
				cy: "12",
				rx: "9",
				ry: "3.4",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4",
				transform: "rotate(120 12 12)"
			})
		]
	});
}
function TechMark({ id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { id });
}
var FACES = [
	[
		"N",
		190,
		""
	],
	[
		"AI",
		300,
		"rotateY(180deg)"
	],
	[
		"</>",
		215,
		"rotateY(90deg)"
	],
	[
		"PDF",
		335,
		"rotateY(-90deg)"
	],
	[
		"{ }",
		160,
		"rotateX(90deg)"
	],
	[
		"✦",
		250,
		"rotateX(-90deg)"
	]
];
function HeroMark() {
	const stage = (0, import_react.useRef)(null);
	const scene = (0, import_react.useRef)(null);
	const world = (0, import_react.useRef)(null);
	const dust = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const stageEl = stage.current;
		const sceneEl = scene.current;
		const worldEl = world.current;
		const dustEl = dust.current;
		if (!stageEl || !sceneEl || !worldEl || !dustEl) return;
		worldEl.replaceChildren();
		dustEl.replaceChildren();
		const el = (cls, parent) => {
			const node = document.createElement("div");
			node.className = cls;
			parent.appendChild(node);
			return node;
		};
		const cube = (cls, withText) => {
			const node = el("nx-5d-cube " + cls, worldEl);
			for (const [text, hue, rot] of FACES) {
				const face = document.createElement("div");
				face.className = "nx-5d-face";
				face.style.cssText = "--h:" + hue + ";transform:" + rot + " translateZ(calc(var(--s) / 2 + var(--g)))";
				if (withText) face.textContent = text;
				node.appendChild(face);
			}
		};
		cube("nx-5d-core", false);
		cube("nx-5d-shell", true);
		[
			[
				"rotateX(72deg)",
				10,
				190,
				false
			],
			[
				"rotateY(72deg) rotateZ(38deg)",
				13,
				300,
				true
			],
			[
				"rotateX(-34deg) rotateY(58deg)",
				16,
				160,
				false
			]
		].forEach(([transform, duration, hue, reverse]) => {
			const orb = el("nx-5d-orb", worldEl);
			orb.style.transform = transform;
			const ring = el("nx-5d-ring", orb);
			ring.style.cssText = "--h:" + hue + ";animation-duration:" + duration + "s" + (reverse ? ";animation-direction:reverse" : "");
		});
		for (let i = 0; i < 46; i++) {
			const u = Math.random() * 2 - 1;
			const a = Math.random() * Math.PI * 2;
			const s = Math.sqrt(1 - u * u);
			const r = 1.35 + Math.random() * .6;
			const p = el("nx-5d-p", dustEl);
			p.style.cssText = "--h:" + [
				190,
				215,
				270,
				300,
				160
			][i % 5] + ";--z:" + (2 + Math.random() * 3).toFixed(1) + "px;animation-delay:-" + (Math.random() * 3).toFixed(2) + "s;transform:translate3d(calc(var(--S) * " + (r * s * Math.cos(a)).toFixed(3) + "),calc(var(--S) * " + (r * s * Math.sin(a)).toFixed(3) + "),calc(var(--S) * " + (r * u).toFixed(3) + "))";
		}
		const mul = (a, b) => {
			const out = [];
			for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) out[i * 3 + j] = a[i * 3] * b[j] + a[i * 3 + 1] * b[3 + j] + a[i * 3 + 2] * b[6 + j];
			return out;
		};
		const inc = (x, y) => {
			const cx = Math.cos(x);
			const sx = Math.sin(x);
			const cy = Math.cos(y);
			const sy = Math.sin(y);
			return mul([
				1,
				0,
				0,
				0,
				cx,
				-sx,
				0,
				sx,
				cx
			], [
				cy,
				0,
				sy,
				0,
				1,
				0,
				-sy,
				0,
				cy
			]);
		};
		const css = (m) => "matrix3d(" + [
			m[0],
			m[3],
			m[6],
			0,
			m[1],
			m[4],
			m[7],
			0,
			m[2],
			m[5],
			m[8],
			0,
			0,
			0,
			0,
			1
		].join(",") + ")";
		let R = inc(-.45, .65);
		let P = inc(.3, -.2);
		const fit = () => sceneEl.style.setProperty("--S", stageEl.clientWidth * .27 + "px");
		fit();
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const clamp = (v) => Math.max(-.4, Math.min(.4, v));
		let down = 0;
		let over = 0;
		let lx = 0;
		let ly = 0;
		let mv = 0;
		let pdx = 0;
		let pdy = 0;
		let vx = 0;
		let vy = 0;
		let frame = 0;
		const onEnter = (event) => {
			over = 1;
			lx = event.clientX;
			ly = event.clientY;
			stageEl.classList.add("hot");
		};
		const onLeave = () => {
			over = 0;
			down = 0;
			stageEl.classList.remove("hot");
		};
		const onDown = (event) => {
			down = 1;
			mv = 0;
			lx = event.clientX;
			ly = event.clientY;
			try {
				stageEl.setPointerCapture(event.pointerId);
			} catch {}
			stageEl.classList.add("hot");
		};
		const onUp = () => {
			down = 0;
			if (mv < 6) {
				vx = (Math.random() - .5) * .7;
				vy = (Math.random() - .5) * .7 + .25;
			}
		};
		const onMove = (event) => {
			const box = stageEl.getBoundingClientRect();
			stageEl.style.setProperty("--mx", (event.clientX - box.left) / box.width * 100 + "%");
			stageEl.style.setProperty("--my", (event.clientY - box.top) / box.height * 100 + "%");
			const dx = event.clientX - lx;
			const dy = event.clientY - ly;
			lx = event.clientX;
			ly = event.clientY;
			pdx += dx;
			pdy += dy;
			if (down) mv += Math.abs(dx) + Math.abs(dy);
		};
		const tick = () => {
			if (pdx || pdy) {
				const k = down ? .011 : .0065;
				vy = clamp(pdx * k);
				vx = clamp(-pdy * k);
				pdx = 0;
				pdy = 0;
			}
			const ax = vx + (over || reduced ? 0 : .0012);
			const ay = vy + (over || reduced ? 0 : .0036);
			R = mul(inc(ax, ay), R);
			P = mul(inc(ax * .4, ay * .4), P);
			vx *= .93;
			vy *= .93;
			worldEl.style.transform = css(R);
			dustEl.style.transform = css(P);
			frame = requestAnimationFrame(tick);
		};
		stageEl.addEventListener("pointerenter", onEnter);
		stageEl.addEventListener("pointerleave", onLeave);
		stageEl.addEventListener("pointerdown", onDown);
		stageEl.addEventListener("pointerup", onUp);
		stageEl.addEventListener("pointermove", onMove);
		window.addEventListener("resize", fit);
		frame = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(frame);
			stageEl.removeEventListener("pointerenter", onEnter);
			stageEl.removeEventListener("pointerleave", onLeave);
			stageEl.removeEventListener("pointerdown", onDown);
			stageEl.removeEventListener("pointerup", onUp);
			stageEl.removeEventListener("pointermove", onMove);
			window.removeEventListener("resize", fit);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "nx-5d",
		ref: stage,
		role: "img",
		"aria-label": "Nibras",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "nx-5d-floor" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "nx-5d-scene",
			ref: scene,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "nx-5d-dust",
				ref: dust
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "nx-5d-world",
				ref: world
			})]
		})]
	});
}
function GameIcon({ slug }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: `game-ico is-${slug}`,
		viewBox: "0 0 64 64",
		"aria-hidden": "true",
		children: [
			slug === "x-o" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "8",
					y: "8",
					width: "22",
					height: "22",
					rx: "6",
					fill: "#ffd166"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "34",
					y: "8",
					width: "22",
					height: "22",
					rx: "6",
					fill: "#1a1204"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "8",
					y: "34",
					width: "22",
					height: "22",
					rx: "6",
					fill: "#10241c"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "34",
					y: "34",
					width: "22",
					height: "22",
					rx: "6",
					fill: "#6ee7b7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M14 14l10 10M24 14L14 24",
					stroke: "#1a1204",
					strokeWidth: "2.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "45",
					cy: "45",
					r: "5",
					fill: "none",
					stroke: "#042016",
					strokeWidth: "2.4"
				})
			] }) : null,
			slug === "soz" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "6",
					y: "20",
					width: "12",
					height: "12",
					rx: "3",
					fill: "#6ee7b7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "20",
					y: "20",
					width: "12",
					height: "12",
					rx: "3",
					fill: "#ffd166"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "34",
					y: "20",
					width: "12",
					height: "12",
					rx: "3",
					fill: "#243044"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "48",
					y: "20",
					width: "10",
					height: "12",
					rx: "3",
					fill: "#243044"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "14",
					y: "36",
					width: "12",
					height: "10",
					rx: "3",
					fill: "#60a5fa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "28",
					y: "36",
					width: "12",
					height: "10",
					rx: "3",
					fill: "#a78bfa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "42",
					y: "36",
					width: "10",
					height: "10",
					rx: "3",
					fill: "#ff5c7a"
				})
			] }) : null,
			slug === "ilan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "18",
					cy: "42",
					r: "6",
					fill: "#0f766e"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "28",
					cy: "34",
					r: "6.5",
					fill: "#14b8a6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "38",
					cy: "26",
					r: "7",
					fill: "#2dd4bf"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "46",
					cy: "18",
					r: "8",
					fill: "#6ee7b7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "43",
					cy: "16",
					r: "1.4",
					fill: "#042016"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "49",
					cy: "16",
					r: "1.4",
					fill: "#042016"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "14",
					cy: "22",
					r: "4",
					fill: "#ffd166"
				})
			] }) : null,
			slug === "kosmos" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "14",
					r: "1.2",
					fill: "#cfe9ff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "48",
					cy: "20",
					r: "1.2",
					fill: "#cfe9ff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "22",
					cy: "48",
					r: "1",
					fill: "#cfe9ff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M32 10l12 28-12-6-12 6z",
					fill: "#6ee7b7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "24",
					r: "3",
					fill: "#fff"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M26 40l6 10 6-10",
					fill: "#22d3a7"
				})
			] }) : null,
			slug === "qala" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M10 46h44v8H10z",
					fill: "#ffd166"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M16 28h8v18h-8zM28 18h8v28h-8zM40 28h8v18h-8z",
					fill: "#fb923c"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M28 12h8v6h-8z",
					fill: "#ffd166"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "32",
					cy: "34",
					r: "2",
					fill: "#1a1204"
				})
			] }) : null,
			slug === "neon" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "10",
					y: "12",
					width: "14",
					height: "8",
					rx: "2",
					fill: "#a78bfa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "26",
					y: "12",
					width: "14",
					height: "8",
					rx: "2",
					fill: "#60a5fa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "42",
					y: "12",
					width: "12",
					height: "8",
					rx: "2",
					fill: "#6ee7b7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "10",
					y: "22",
					width: "14",
					height: "8",
					rx: "2",
					fill: "#ffd166"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "26",
					y: "22",
					width: "14",
					height: "8",
					rx: "2",
					fill: "#fb923c"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "42",
					y: "22",
					width: "12",
					height: "8",
					rx: "2",
					fill: "#ff5c7a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "30",
					cy: "42",
					r: "4",
					fill: "#d1fae5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "18",
					y: "50",
					width: "24",
					height: "5",
					rx: "2",
					fill: "#22d3a7"
				})
			] }) : null,
			slug === "tetris" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "14",
					y: "12",
					width: "10",
					height: "10",
					rx: "2",
					fill: "#22d3ee"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "26",
					y: "12",
					width: "10",
					height: "10",
					rx: "2",
					fill: "#22d3ee"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "38",
					y: "12",
					width: "10",
					height: "10",
					rx: "2",
					fill: "#22d3ee"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "26",
					y: "24",
					width: "10",
					height: "10",
					rx: "2",
					fill: "#a78bfa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "14",
					y: "36",
					width: "10",
					height: "10",
					rx: "2",
					fill: "#ffd166"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "26",
					y: "36",
					width: "10",
					height: "10",
					rx: "2",
					fill: "#ffd166"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "38",
					y: "36",
					width: "10",
					height: "10",
					rx: "2",
					fill: "#6ee7b7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "38",
					y: "48",
					width: "10",
					height: "8",
					rx: "2",
					fill: "#ff5c7a"
				})
			] }) : null,
			slug === "2048" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "8",
					y: "8",
					width: "22",
					height: "22",
					rx: "6",
					fill: "#dbeafe"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "34",
					y: "8",
					width: "22",
					height: "22",
					rx: "6",
					fill: "#22d3ee"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "8",
					y: "34",
					width: "22",
					height: "22",
					rx: "6",
					fill: "#fbbf24"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "34",
					y: "34",
					width: "22",
					height: "22",
					rx: "6",
					fill: "#fff"
				})
			] }) : null,
			slug === "meyve" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "22",
					cy: "24",
					r: "12",
					fill: "#ff5c7a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "42",
					cy: "22",
					r: "11",
					fill: "#fb923c"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "20",
					cy: "44",
					r: "10",
					fill: "#84cc16"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "40",
					cy: "44",
					r: "11",
					fill: "#a78bfa"
				})
			] }) : null
		]
	});
}
var $$splitComponentImporter$295 = () => import("./routes-Bq7cjtTr.mjs");
var Route$309 = createFileRoute("/")({
	loader: () => loadHomeApps(),
	component: lazyRouteComponent($$splitComponentImporter$295, "component")
});
var APK_HELP = {
	az: "APK qurulmur? Həll yolları",
	en: "APK won't install? Fixes",
	tr: "APK kurulmuyor mu? Çözümler",
	ar: "لا يُثبَّت APK؟ الحلول",
	ru: "APK не ставится? Решения"
};
var CARDS = [
	{
		slug: "nibras-arabic",
		name: "Nibras Arabic",
		icon: "/apps/nibras-arabic-v2.webp",
		desc: "nx_ar_d",
		chips: [
			"nx_ar_1",
			"nx_ar_2",
			"nx_ar_3"
		]
	},
	{
		slug: "nibras-pdf",
		name: "Nibras PDF",
		icon: "/apps/nibras-pdf.webp",
		desc: "nx_pdf_d",
		chips: [
			"nx_pdf_1",
			"nx_pdf_2",
			"nx_pdf_3"
		]
	},
	{
		slug: "nibras-office",
		name: "Nibras Office",
		icon: "/apps/nibras-office.webp",
		desc: "office_lead",
		chips: [
			"office_f1",
			"office_f2",
			"office_f3"
		]
	},
	{
		slug: "nibras-qr",
		name: "Nibras QR",
		icon: "/apps/nibras-qr-v2.webp",
		desc: "nx_qr_d",
		chips: [
			"nx_qr_1",
			"nx_qr_2",
			"nx_qr_3"
		]
	},
	{
		slug: "nibras-docs",
		name: "Nibras Docs",
		icon: "/apps/nibras-docs.webp",
		desc: "nx_docs_d",
		chips: [
			"nx_docs_1",
			"nx_docs_2",
			"nx_docs_3"
		]
	},
	{
		slug: "nibras-plans",
		name: "Nibras Plans",
		icon: "/apps/nibras-plans.webp",
		desc: "nx_plans_d",
		chips: [
			"nx_plans_1",
			"nx_plans_2",
			"nx_plans_3"
		]
	},
	{
		slug: "nibras-scan",
		name: "Nibras Scan",
		icon: "/apps/nibras-scan.webp",
		desc: "nx_scan_d",
		chips: [
			"nx_scan_1",
			"nx_scan_2",
			"nx_scan_3"
		]
	},
	{
		slug: "nibras-note",
		name: "Nibras Note",
		icon: "/apps/nibras-note.webp",
		desc: "nx_note_d",
		chips: [
			"nx_note_1",
			"nx_note_2",
			"nx_note_3"
		]
	}
];
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/nibras-icon.webp",
		alt: "",
		width: 54,
		height: 28,
		decoding: "async",
		className
	});
}
var DRIFT = [
	"python",
	"js",
	"ts",
	"java",
	"kotlin",
	"swift",
	"cpp",
	"dart",
	"apk",
	"ios"
].map((id, kind) => ({
	id,
	size: kind % 3 === 0 ? 22 : 28
}));
function HomeDrift() {
	const root = (0, import_react.useRef)(null);
	const nodes = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		const box = root.current;
		if (!box) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const width = () => box.clientWidth || window.innerWidth;
		const height = () => box.clientHeight || window.innerHeight;
		const parts = DRIFT.map((item, index) => {
			const w = width();
			const h = height();
			const r = item.size / 2;
			const speed = 46 + index * 19 % 70;
			const angle = index * 2.399 % (Math.PI * 2);
			return {
				x: r + index * 97 % Math.max(1, w - r * 2),
				y: r + index * 53 % Math.max(1, h - r * 2),
				vx: Math.cos(angle) * speed,
				vy: Math.sin(angle) * speed,
				r
			};
		});
		const keepOffCopy = () => {
			const copy = box.parentElement?.querySelector(".nx-hero-copy");
			if (!copy) return;
			const host = box.getBoundingClientRect();
			const area = copy.getBoundingClientRect();
			const pad = 18;
			const left = area.left - host.left - pad;
			const top = area.top - host.top - pad;
			const right = area.right - host.left + pad;
			const bottom = area.bottom - host.top + pad;
			if (right - left < 40 || bottom - top < 40) return;
			for (const part of parts) {
				if (part.x <= left || part.x >= right || part.y <= top || part.y >= bottom) continue;
				const toLeft = part.x - left;
				const toRight = right - part.x;
				const toTop = part.y - top;
				const toBottom = bottom - part.y;
				const near = Math.min(toLeft, toRight, toTop, toBottom);
				if (near === toLeft) {
					part.x = left;
					part.vx = -Math.abs(part.vx);
				} else if (near === toRight) {
					part.x = right;
					part.vx = Math.abs(part.vx);
				} else if (near === toTop) {
					part.y = top;
					part.vy = -Math.abs(part.vy);
				} else {
					part.y = bottom;
					part.vy = Math.abs(part.vy);
				}
			}
		};
		const paint = () => {
			parts.forEach((part, index) => {
				const node = nodes.current[index];
				if (node) node.style.transform = `translate3d(${part.x - part.r}px, ${part.y - part.r}px, 0)`;
			});
		};
		if (reduce) {
			keepOffCopy();
			paint();
			return;
		}
		let frame = 0;
		let last = performance.now();
		const tick = (now) => {
			const dt = Math.min(.032, (now - last) / 1e3);
			last = now;
			const w = width();
			const h = height();
			for (const part of parts) {
				part.x += part.vx * dt;
				part.y += part.vy * dt;
				if (part.x < part.r) {
					part.x = part.r;
					part.vx = Math.abs(part.vx);
				} else if (part.x > w - part.r) {
					part.x = w - part.r;
					part.vx = -Math.abs(part.vx);
				}
				if (part.y < part.r) {
					part.y = part.r;
					part.vy = Math.abs(part.vy);
				} else if (part.y > h - part.r) {
					part.y = h - part.r;
					part.vy = -Math.abs(part.vy);
				}
			}
			for (let i = 0; i < parts.length; i++) {
				const a = parts[i];
				for (let j = i + 1; j < parts.length; j++) {
					const b = parts[j];
					const dx = b.x - a.x;
					const dy = b.y - a.y;
					const min = a.r + b.r;
					const dist2 = dx * dx + dy * dy;
					if (dist2 === 0 || dist2 >= min * min) continue;
					const dist = Math.sqrt(dist2);
					const nx = dx / dist;
					const ny = dy / dist;
					const overlap = (min - dist) / 2;
					a.x -= nx * overlap;
					a.y -= ny * overlap;
					b.x += nx * overlap;
					b.y += ny * overlap;
					const rel = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
					if (rel > 0) continue;
					a.vx -= rel * nx;
					a.vy -= rel * ny;
					b.vx += rel * nx;
					b.vy += rel * ny;
				}
			}
			keepOffCopy();
			paint();
			frame = requestAnimationFrame(tick);
		};
		keepOffCopy();
		paint();
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "nx-drift",
		"aria-hidden": "true",
		ref: root,
		children: DRIFT.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			ref: (node) => {
				nodes.current[index] = node;
			},
			className: `is-${item.id}${item.size < 28 ? " is-small" : ""}`,
			style: {
				width: item.size,
				height: item.size
			},
			children: item.id === "ios" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IosMark, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechMark, { id: item.id })
		}, `${item.id}-${index}`))
	});
}
function IosMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M16.2 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.4 1 8.4.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7 1.8-1 2.5-2c.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3.6ZM14.6 6.7c.6-.7.9-1.6.8-2.6-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.6-.9 2.6 1 .1 1.9-.5 2.7-1.4Z"
		})
	});
}
var XETA_LINKS = [
	"apk-qurulmur",
	"paket-etibarsizdir",
	"play-protect-bloklayir",
	"xapk-qurulmur",
	"yaddas-catmir",
	"telefon-uygun-deyil"
];
function HomeView({ apps }) {
	const { t, lang } = useI18n$1();
	const [gamesOpen, setGamesOpen] = (0, import_react.useState)(false);
	const rows = apps;
	const labels = {
		soon: t("soon"),
		building: t("nx_docs_stage")
	};
	const cards = CARDS.flatMap((card) => {
		const live = rows?.find((row) => row.slug === card.slug);
		if (live?.visible === false) return [];
		return [{
			card,
			live
		}];
	});
	const extras = (rows ?? []).filter((row) => row.visible !== false && !CARDS.some((card) => card.slug === row.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "nx",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "nx-nav",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: homePath(lang),
					className: "nx-brand",
					"aria-label": "Nibras Code",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Nibras ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Code" })] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "nx-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/about"),
							children: t("nav_about")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/unutma"),
							children: t("remind_btn")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/contact"),
							children: t("nx_nav_contact")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitch, {})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "nx-hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeDrift, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "nx-hero-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "nx-kicker",
								children: t("nx_kicker")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("nx_lead") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("nx_no_ads") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "nx-actions",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "nx-cta",
										href: localeHref(lang, "/apps"),
										children: [t("b_hero_cta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: localeHref(lang, "/services"),
										className: "nx-ghost",
										children: [SERVICES_LABEL[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: localeHref(lang, "/about"),
										className: "nx-ghost",
										children: [t("nav_about"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "nx-bars",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarGroupView, {
										lang,
										group: "g1"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarGroupView, {
										lang,
										group: "g2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarGroupView, {
										lang,
										group: "g3"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "nx-stage",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroMark, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "nx-apps nx-play",
				"aria-label": GAME_COPY.heading[lang],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `nx-card nx-play-card${gamesOpen ? " is-open" : ""}`,
					"aria-expanded": gamesOpen,
					onClick: () => setGamesOpen((open) => !open),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "nx-card-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "nx-play-mark",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "is-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "is-green" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "nx-status",
							children: GAME_VERSION
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: GAME_COPY.heading[lang] })] })]
					})
				}), gamesOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "game-icon-grid",
					children: GAMES.map((game) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: gamePath(lang, game.slug),
						"aria-label": game.name[lang],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameIcon, { slug: game.slug })
					}, game.slug))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "nx-apps",
				id: "apps",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "nx-kicker",
					children: t("nx_apps_k")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nx-grid",
					children: [cards.map(({ card, live }) => {
						const badge = appStatusLabel(card.slug, lang);
						const soon = appStatus(card.slug) !== "ready" && appStatus(card.slug) !== "beta";
						const built = STUDIO_APPS.find((item) => item.slug === card.slug);
						const stores = built && !soon ? statusStoreLinks(effectiveApp(built).app, live && playListed(card.slug) === false ? {
							...live,
							play_url: ""
						} : live) : [];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `nx-card${soon ? " is-soon" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: localeHref(lang, `/apps/${card.slug}`),
								className: "nx-card-main",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "nx-card-top",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "nx-ico",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: live?.icon_url || card.icon,
												alt: "",
												width: 52,
												height: 52,
												loading: "lazy",
												decoding: "async"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "nx-status",
											children: badge
										}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: card.name })] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "nx-chips",
										children: card.chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t(chip) }, chip))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "nx-go" })
								]
							}), stores.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "nx-card-stores",
								children: stores.map((store) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: `nx-store-btn nx-store-${store.id}`,
									href: store.href,
									target: "_blank",
									rel: "noopener noreferrer",
									children: store.label
								}, store.id))
							}) : null]
						}, card.slug);
					}), extras.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: localeHref(lang, `/apps/${row.slug}`),
						className: "nx-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "nx-card-top",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "nx-ico",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: row.icon_url || "/nibras-icon.webp",
									alt: "",
									width: 52,
									height: 52,
									loading: "lazy",
									decoding: "async"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [statusText(row.status, null, labels) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "nx-status",
								children: statusText(row.status, null, labels)
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: row.name })] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "nx-go" })]
					}, row.slug))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "nx-apps",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "nx-kicker",
						children: APK_HELP[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceCheck, { lang }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "faq-links",
						"aria-label": APK_HELP[lang],
						children: XETA_LINKS.map((slug) => {
							const item = SEARCH.xeta.items.find((entry) => entry.slug === slug);
							if (!item) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: searchTopicPath(lang, "xeta", slug),
								children: item.piece[lang].title
							}, slug);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "nx-split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nx-why",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "nx-kicker",
							children: t("nx_why_k")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [t("nx_why_a"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("nx_why_b") })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("nx_why_p") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "nx-cta",
							href: localeHref(lang, "/apps"),
							children: [t("b_hero_cta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("nx_w1t") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("nx_w1d") })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("nx_w2t") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("nx_w2d") })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("nx_w3t") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("nx_w3d") })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("nx_w4t") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("nx_w4d") })
						] })
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "nx-who",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "nx-kicker",
							children: t("nx_who_k")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("nx_who_1") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("nx_who_2") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("nx_who_3") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "nx-verse",
							lang: "ar",
							dir: "rtl",
							children: t("remind_verse")
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "nx-foot",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "nx-foot-extra",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "resources" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "guides" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "footer-faq",
								href: searchPath(lang, "movzu"),
								children: SEARCH.movzu.heading[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "footer-faq",
								href: faqPath(lang),
								children: t("faq_nav")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "footer-faq",
								href: gamePath(lang),
								children: lang === "ar" ? "ألعاب" : lang === "ru" ? "Игры" : lang === "en" ? "Games" : "Oyunlar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "programming" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "footer-faq",
								href: localeHref(lang, "/unknown"),
								children: BAR.unknown[lang]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSuggest, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLegal, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "nx-copy",
						children: ["© 2026 Nibras Code. ", t("nx_rights")]
					})
				]
			})
		]
	});
}
var $$splitComponentImporter$294 = () => import("./about-DQy4QZ97.mjs");
var Route$308 = createFileRoute("/about")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/about"),
			replace: true
		});
	},
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$294, "component")
});
function AboutView({ privacy }) {
	const { lang } = useI18n$1();
	const copy = aboutFromRow(privacy.find((item) => item.slug === "about" && item.lang === lang), lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), copy.eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: copy.title }),
			copy.intro.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: paragraph === copy.intro[0] ? "why-lead" : void 0,
				children: paragraph
			}, paragraph)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCards, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: Compass,
				title: copy.approachTitle,
				children: copy.approach.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: UserRound,
				muted: founderCopy(lang).title,
				title: "Mahir Əliyev",
				children: founderCopy(lang).body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "who-success",
				children: copy.success
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "who-verse",
				lang: "ar",
				dir: "rtl",
				children: copy.verse
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "who-verse-tr",
				children: copy.verseTr
			})
		]
	});
}
var $$splitComponentImporter$293 = () => import("./ar-DxDfdl7V.mjs");
var Route$307 = createFileRoute("/ar")({
	loader: ({ location }) => {
		if ((location.pathname.replace(/\/$/, "") || "/") !== "/ar") return { apps: [] };
		return loadHomeApps();
	},
	component: lazyRouteComponent($$splitComponentImporter$293, "component")
});
var Route$306 = createFileRoute("/contact")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/contact"),
			replace: true
		});
	},
	component: ContactPage
});
var NOTE = {
	az: ["Nibras Code şəxsi layihədir, ofisi olan şirkət deyil.", "Telefon nömrəsi və fiziki ünvan yoxdur. Rəsmi əlaqə yalnız bu e-poçtdur."],
	en: ["Nibras Code is a personal project, not a company with an office.", "There is no phone number and no physical address. This email is the only official contact."],
	tr: ["Nibras Code kişisel bir projedir, ofisi olan bir şirket değildir.", "Telefon numarası ve fiziksel adres yoktur. Resmi iletişim yalnızca bu e-postadır."],
	ar: ["Nibras Code مشروع شخصي، وليس شركة لها مكتب.", "لا يوجد رقم هاتف ولا عنوان فعلي. هذا البريد هو التواصل الرسمي الوحيد."],
	ru: ["Nibras Code — личный проект, не компания с офисом.", "Телефона и физического адреса нет. Официальная связь только эта почта."]
};
function ContactPage() {
	const { t, lang } = useI18n$1();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("nx_nav_contact")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t("contact_title") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "why-lead",
				children: t("contact_note")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCards, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: Mail,
				muted: t("nx_nav_contact"),
				title: "nibrascode@gmail.com",
				href: "mailto:nibrascode@gmail.com"
			}), NOTE[lang].map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: i === 0 ? User : Info,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line })
			}, line))] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, {})
		]
	});
}
var $$splitComponentImporter$292 = () => import("./doctor-HWRkBWuQ.mjs");
var Route$305 = createFileRoute("/doctor")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/doctor"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$292, "component")
});
var $$splitComponentImporter$291 = () => import("./en-I8cFDST8.mjs");
var Route$304 = createFileRoute("/en")({
	loader: ({ location }) => {
		if ((location.pathname.replace(/\/$/, "") || "/") !== "/en") return { apps: [] };
		return loadHomeApps();
	},
	component: lazyRouteComponent($$splitComponentImporter$291, "component")
});
var $$splitComponentImporter$290 = () => import("./erase-BnLBrlvU.mjs");
var Route$303 = createFileRoute("/erase")({ component: lazyRouteComponent($$splitComponentImporter$290, "component") });
var $$splitComponentImporter$289 = () => import("./error-help-BYTe23Bl.mjs");
var Route$302 = createFileRoute("/error-help")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/error-help"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$289, "component")
});
var Route$301 = createFileRoute("/faiz")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/faiz"),
			replace: true
		});
	},
	component: PercentPage
});
var COPY$10 = {
	az: {
		h1: "Faiz hesabla",
		lead: "Faizin nəticəsini və bir ədədin neçə faiz olduğunu hesabla. Pulsuz, hesabsız.",
		rate: "Faiz",
		of: "Ədəd",
		result: "Nəticə",
		part: "Bu ədəd",
		whole: "Bundan",
		share: "Neçə faizdir"
	},
	en: {
		h1: "Calculate a percent",
		lead: "Find a percent of a number, and what percent one number is of another. Free, no account.",
		rate: "Percent",
		of: "Number",
		result: "Result",
		part: "This number",
		whole: "Of this",
		share: "What percent"
	},
	tr: {
		h1: "Yüzde hesapla",
		lead: "Yüzdenin sonucunu ve bir sayının yüzde kaç olduğunu hesapla. Ücretsiz, hesapsız.",
		rate: "Yüzde",
		of: "Sayı",
		result: "Sonuç",
		part: "Bu sayı",
		whole: "Bundan",
		share: "Yüzde kaç"
	},
	ar: {
		h1: "احسب النسبة",
		lead: "احسب ناتج النسبة وكم بالمئة عدد من آخر. مجاناً وبلا حساب.",
		rate: "النسبة",
		of: "العدد",
		result: "النتيجة",
		part: "هذا العدد",
		whole: "من هذا",
		share: "كم بالمئة"
	},
	ru: {
		h1: "Посчитать процент",
		lead: "Найдите процент от числа и сколько процентов одно число составляет от другого. Бесплатно, без аккаунта.",
		rate: "Процент",
		of: "Число",
		result: "Результат",
		part: "Это число",
		whole: "От этого",
		share: "Сколько процентов"
	}
};
function num(value) {
	const next = Number(value.replace(",", "."));
	return Number.isFinite(next) ? next : NaN;
}
function show(value) {
	if (!Number.isFinite(value)) return "—";
	return String(Math.round(value * 100) / 100);
}
function PercentPage() {
	const { lang } = useI18n$1();
	const copy = COPY$10[lang];
	const faq = SEARCH_FAQ["/faiz"];
	const [rate, setRate] = (0, import_react.useState)("15");
	const [whole, setWhole] = (0, import_react.useState)("200");
	const [part, setPart] = (0, import_react.useState)("30");
	const [base, setBase] = (0, import_react.useState)("200");
	const amount = num(rate) * num(whole) / 100;
	const share = num(base) ? num(part) / num(base) * 100 : NaN;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
					children: copy.h1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: copy.lead
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-muted",
							children: copy.rate
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
							inputMode: "decimal",
							value: rate,
							onChange: (event) => setRate(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-muted",
							children: copy.of
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
							inputMode: "decimal",
							value: whole,
							onChange: (event) => setWhole(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted",
							children: copy.result
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl font-bold",
							children: show(amount)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-muted",
							children: copy.part
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
							inputMode: "decimal",
							value: part,
							onChange: (event) => setPart(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-muted",
							children: copy.whole
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
							inputMode: "decimal",
							value: base,
							onChange: (event) => setBase(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted",
							children: copy.share
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-2xl font-bold",
							children: [show(share), "%"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextLinks, { links: [{
				href: "/soz-sayi",
				label: {
					az: "Söz sayı",
					en: "Word count",
					tr: "Söz sayısı",
					ar: "عدد الكلمات",
					ru: "Количество слов"
				}
			}, {
				href: "/wifi",
				label: {
					az: "Wi-Fi QR",
					en: "Wi-Fi QR",
					tr: "Wi-Fi QR",
					ar: "رمز Wi-Fi",
					ru: "Wi-Fi QR"
				}
			}] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				"aria-labelledby": "faiz-faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "faiz-faq",
					className: "text-base font-semibold",
					children: faq.title[lang]
				}), faq.items[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.a
				})] }, item.q))]
			})
		]
	});
}
var $$splitComponentImporter$288 = () => import("./faq-DwfBTimP.mjs");
var Route$300 = createFileRoute("/faq")({ component: lazyRouteComponent($$splitComponentImporter$288, "component") });
var $$splitComponentImporter$287 = () => import("./filecheck-Bj7vvH2X.mjs");
var Route$299 = createFileRoute("/filecheck")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/filecheck"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$287, "component")
});
var KINDS = [
	{
		kind: "shop",
		words: [
			"magaza",
			"satis",
			"shop",
			"store",
			"mehsul",
			"product",
			"sebet",
			"cart",
			"market",
			"магазин",
			"продаж",
			"متجر",
			"ürün",
			"urun"
		]
	},
	{
		kind: "course",
		words: [
			"ders",
			"kurs",
			"telim",
			"oyren",
			"lesson",
			"course",
			"imtahan",
			"учеб",
			"دورة",
			"دروس",
			"egitim",
			"eğitim"
		]
	},
	{
		kind: "blog",
		words: [
			"blog",
			"bloq",
			"meqale",
			"article",
			"yazi",
			"yazı",
			"журнал",
			"مدونة"
		]
	},
	{
		kind: "forum",
		words: [
			"forum",
			"movzu",
			"community",
			"форум",
			"منتدى"
		]
	},
	{
		kind: "booking",
		words: [
			"rezerv",
			"randevu",
			"gorus",
			"booking",
			"appointment",
			"запись",
			"حجز"
		]
	},
	{
		kind: "app",
		words: [
			"tetbiq",
			"mobil",
			"android",
			"ios",
			"приложение",
			"تطبيق",
			"uygulama"
		]
	},
	{
		kind: "portfolio",
		words: [
			"portfolio",
			"numune",
			"portfolio",
			"işler",
			"isler",
			"портфолио"
		]
	},
	{
		kind: "notes",
		words: [
			"qeyd",
			"todo",
			"hatirlat",
			"notebook",
			"замет",
			"ملاحظة"
		]
	}
];
var PAGE_COPY = {
	az: {
		home: {
			name: "Ana",
			job: "Layihənin bir cümləsini və növbəti addımı göstərir."
		},
		list: {
			name: "Siyahı",
			job: "Əsas şeylərin siyahısı."
		},
		item: {
			name: "Tək",
			job: "Bir elementin öz səhifəsi."
		},
		cart: {
			name: "Səbət",
			job: "Seçilənlər burada durur."
		},
		pay: {
			name: "Ödəniş",
			job: "Ödənişdən əvvəl siyahını təsdiqləyir."
		},
		account: {
			name: "Hesab",
			job: "Adam öz məlumatını görür."
		},
		contact: {
			name: "Əlaqə",
			job: "Bir ünvan və qısa məktub."
		},
		about: {
			name: "Haqqında",
			job: "Layihənin kim üçün olduğu."
		},
		lesson: {
			name: "Dərs",
			job: "Bir dərsin mətni."
		},
		exam: {
			name: "İmtahan",
			job: "Dərsdən sonra qısa yoxlama."
		},
		work: {
			name: "İş",
			job: "Bir iş nümunəsi."
		},
		time: {
			name: "Vaxt",
			job: "Boş vaxtın seçimi."
		},
		confirm: {
			name: "Təsdiq",
			job: "Seçilən vaxtın yekunu."
		},
		download: {
			name: "Yüklə",
			job: "Tətbiqin haradan götürüldüyü."
		},
		privacy: {
			name: "Məxfilik",
			job: "Nəyin saxlanmadığı."
		},
		topic: {
			name: "Mövzu",
			job: "Bir mövzunun yazıları."
		},
		profile: {
			name: "Profil",
			job: "Adamın öz adı və yazıları."
		},
		note: {
			name: "Qeyd",
			job: "Bir qeydin mətni."
		},
		price: {
			name: "Qiymət",
			job: "Pulsuz və pullu hissə, varsa."
		}
	},
	en: {
		home: {
			name: "Home",
			job: "Shows the project in one sentence and the next step."
		},
		list: {
			name: "List",
			job: "The list of the main things."
		},
		item: {
			name: "One item",
			job: "A page for a single item."
		},
		cart: {
			name: "Cart",
			job: "Holds what was chosen."
		},
		pay: {
			name: "Payment",
			job: "Confirms the list before payment."
		},
		account: {
			name: "Account",
			job: "The person sees their own data."
		},
		contact: {
			name: "Contact",
			job: "One address and a short message."
		},
		about: {
			name: "About",
			job: "Who the project is for."
		},
		lesson: {
			name: "Lesson",
			job: "The text of one lesson."
		},
		exam: {
			name: "Quiz",
			job: "A short check after the lesson."
		},
		work: {
			name: "Work",
			job: "One sample of work."
		},
		time: {
			name: "Time",
			job: "Picking an open time."
		},
		confirm: {
			name: "Confirm",
			job: "The summary of the chosen time."
		},
		download: {
			name: "Download",
			job: "Where the app is taken from."
		},
		privacy: {
			name: "Privacy",
			job: "What is not stored."
		},
		topic: {
			name: "Topic",
			job: "The posts of one topic."
		},
		profile: {
			name: "Profile",
			job: "A person's name and posts."
		},
		note: {
			name: "Note",
			job: "The text of one note."
		},
		price: {
			name: "Price",
			job: "The free part and the paid part, if any."
		}
	},
	tr: {
		home: {
			name: "Ana",
			job: "Projenin bir cümlesini ve sonraki adımı gösterir."
		},
		list: {
			name: "Liste",
			job: "Ana şeylerin listesi."
		},
		item: {
			name: "Tek",
			job: "Bir öğenin kendi sayfası."
		},
		cart: {
			name: "Sepet",
			job: "Seçilenler burada durur."
		},
		pay: {
			name: "Ödeme",
			job: "Ödemeden önce listeyi onaylar."
		},
		account: {
			name: "Hesap",
			job: "Kişi kendi bilgisini görür."
		},
		contact: {
			name: "İletişim",
			job: "Bir adres ve kısa mektup."
		},
		about: {
			name: "Hakkında",
			job: "Proje kimin içindir."
		},
		lesson: {
			name: "Ders",
			job: "Bir dersin metni."
		},
		exam: {
			name: "Sınav",
			job: "Dersten sonra kısa yoklama."
		},
		work: {
			name: "İş",
			job: "Bir iş örneği."
		},
		time: {
			name: "Saat",
			job: "Boş saatin seçimi."
		},
		confirm: {
			name: "Onay",
			job: "Seçilen saatin özeti."
		},
		download: {
			name: "İndir",
			job: "Uygulamanın nereden alındığı."
		},
		privacy: {
			name: "Gizlilik",
			job: "Neyin saklanmadığı."
		},
		topic: {
			name: "Konu",
			job: "Bir konunun yazıları."
		},
		profile: {
			name: "Profil",
			job: "Kişinin adı ve yazıları."
		},
		note: {
			name: "Not",
			job: "Bir notun metni."
		},
		price: {
			name: "Fiyat",
			job: "Ücretsiz ve ücretli kısım, varsa."
		}
	},
	ar: {
		home: {
			name: "الرئيسية",
			job: "جملة واحدة عن المشروع والخطوة التالية."
		},
		list: {
			name: "القائمة",
			job: "قائمة الأشياء الأساسية."
		},
		item: {
			name: "عنصر",
			job: "صفحة عنصر واحد."
		},
		cart: {
			name: "السلة",
			job: "ما اختير يبقى هنا."
		},
		pay: {
			name: "الدفع",
			job: "يؤكد القائمة قبل الدفع."
		},
		account: {
			name: "الحساب",
			job: "يرى الشخص بياناته."
		},
		contact: {
			name: "تواصل",
			job: "عنوان ورسالة قصيرة."
		},
		about: {
			name: "عن المشروع",
			job: "لمن هذا المشروع."
		},
		lesson: {
			name: "درس",
			job: "نص درس واحد."
		},
		exam: {
			name: "اختبار",
			job: "فحص قصير بعد الدرس."
		},
		work: {
			name: "عمل",
			job: "نموذج عمل واحد."
		},
		time: {
			name: "الوقت",
			job: "اختيار وقت فارغ."
		},
		confirm: {
			name: "تأكيد",
			job: "خلاصة الوقت المختار."
		},
		download: {
			name: "تنزيل",
			job: "من أين يُؤخذ التطبيق."
		},
		privacy: {
			name: "الخصوصية",
			job: "ما الذي لا يُحفظ."
		},
		topic: {
			name: "موضوع",
			job: "كتابات موضوع واحد."
		},
		profile: {
			name: "الملف",
			job: "اسم الشخص وكتاباته."
		},
		note: {
			name: "ملاحظة",
			job: "نص ملاحظة واحدة."
		},
		price: {
			name: "السعر",
			job: "الجزء المجاني والمدفوع، إن وُجد."
		}
	},
	ru: {
		home: {
			name: "Главная",
			job: "Одно предложение о проекте и следующий шаг."
		},
		list: {
			name: "Список",
			job: "Список главного."
		},
		item: {
			name: "Один",
			job: "Страница одного элемента."
		},
		cart: {
			name: "Корзина",
			job: "Здесь лежит выбранное."
		},
		pay: {
			name: "Оплата",
			job: "Подтверждает список до оплаты."
		},
		account: {
			name: "Аккаунт",
			job: "Человек видит свои данные."
		},
		contact: {
			name: "Контакт",
			job: "Один адрес и короткое письмо."
		},
		about: {
			name: "О проекте",
			job: "Для кого проект."
		},
		lesson: {
			name: "Урок",
			job: "Текст одного урока."
		},
		exam: {
			name: "Проверка",
			job: "Короткая проверка после урока."
		},
		work: {
			name: "Работа",
			job: "Один образец работы."
		},
		time: {
			name: "Время",
			job: "Выбор свободного времени."
		},
		confirm: {
			name: "Подтверждение",
			job: "Итог выбранного времени."
		},
		download: {
			name: "Скачать",
			job: "Откуда берётся приложение."
		},
		privacy: {
			name: "Конфиденциальность",
			job: "Что не сохраняется."
		},
		topic: {
			name: "Тема",
			job: "Записи одной темы."
		},
		profile: {
			name: "Профиль",
			job: "Имя человека и его записи."
		},
		note: {
			name: "Заметка",
			job: "Текст одной заметки."
		},
		price: {
			name: "Цена",
			job: "Бесплатная и платная часть, если она есть."
		}
	}
};
var SHAPES = {
	shop: [
		{
			path: "/",
			key: "home"
		},
		{
			path: "/items",
			key: "list"
		},
		{
			path: "/items/one",
			key: "item"
		},
		{
			path: "/cart",
			key: "cart"
		},
		{
			path: "/pay",
			key: "pay"
		},
		{
			path: "/contact",
			key: "contact"
		}
	],
	blog: [
		{
			path: "/",
			key: "home"
		},
		{
			path: "/posts",
			key: "list"
		},
		{
			path: "/posts/one",
			key: "item"
		},
		{
			path: "/about",
			key: "about"
		},
		{
			path: "/contact",
			key: "contact"
		}
	],
	course: [
		{
			path: "/",
			key: "home"
		},
		{
			path: "/lessons",
			key: "list"
		},
		{
			path: "/lessons/one",
			key: "lesson"
		},
		{
			path: "/quiz",
			key: "exam"
		},
		{
			path: "/account",
			key: "account"
		}
	],
	portfolio: [
		{
			path: "/",
			key: "home"
		},
		{
			path: "/work",
			key: "list"
		},
		{
			path: "/work/one",
			key: "work"
		},
		{
			path: "/about",
			key: "about"
		},
		{
			path: "/contact",
			key: "contact"
		}
	],
	booking: [
		{
			path: "/",
			key: "home"
		},
		{
			path: "/services",
			key: "list"
		},
		{
			path: "/time",
			key: "time"
		},
		{
			path: "/confirm",
			key: "confirm"
		},
		{
			path: "/contact",
			key: "contact"
		}
	],
	app: [
		{
			path: "/",
			key: "home"
		},
		{
			path: "/app",
			key: "item"
		},
		{
			path: "/download",
			key: "download"
		},
		{
			path: "/privacy",
			key: "privacy"
		},
		{
			path: "/contact",
			key: "contact"
		}
	],
	forum: [
		{
			path: "/",
			key: "home"
		},
		{
			path: "/topics",
			key: "list"
		},
		{
			path: "/topics/one",
			key: "topic"
		},
		{
			path: "/profile",
			key: "profile"
		}
	],
	notes: [
		{
			path: "/",
			key: "home"
		},
		{
			path: "/notes",
			key: "list"
		},
		{
			path: "/notes/one",
			key: "note"
		},
		{
			path: "/account",
			key: "account"
		}
	],
	site: [
		{
			path: "/",
			key: "home"
		},
		{
			path: "/about",
			key: "about"
		},
		{
			path: "/price",
			key: "price"
		},
		{
			path: "/contact",
			key: "contact"
		}
	]
};
var KIND_LABEL = {
	az: {
		shop: "Mağaza",
		blog: "Bloq",
		course: "Dərs",
		portfolio: "İş nümunəsi",
		booking: "Vaxt seçimi",
		app: "Tətbiq",
		forum: "Forum",
		notes: "Qeyd",
		site: "Sadə sayt"
	},
	en: {
		shop: "Shop",
		blog: "Blog",
		course: "Course",
		portfolio: "Portfolio",
		booking: "Booking",
		app: "App",
		forum: "Forum",
		notes: "Notes",
		site: "Simple site"
	},
	tr: {
		shop: "Mağaza",
		blog: "Blog",
		course: "Ders",
		portfolio: "İş örneği",
		booking: "Randevu",
		app: "Uygulama",
		forum: "Forum",
		notes: "Not",
		site: "Basit site"
	},
	ar: {
		shop: "متجر",
		blog: "مدونة",
		course: "دروس",
		portfolio: "أعمال",
		booking: "حجز",
		app: "تطبيق",
		forum: "منتدى",
		notes: "ملاحظات",
		site: "موقع بسيط"
	},
	ru: {
		shop: "Магазин",
		blog: "Блог",
		course: "Уроки",
		portfolio: "Портфолио",
		booking: "Запись",
		app: "Приложение",
		forum: "Форум",
		notes: "Заметки",
		site: "Простой сайт"
	}
};
var FALLBACK = {
	az: "Layihə",
	en: "Project",
	tr: "Proje",
	ar: "مشروع",
	ru: "Проект"
};
var STEPS = {
	az: (label, first) => [
		`Bu, ${label.toLocaleLowerCase("az")} planıdır. Adı və bir cümləni yaz.`,
		`Əvvəl ${first} səhifəsini bitir.`,
		"Sonra siyahıdakı növbəti səhifəyə keç. Hamısını bir gündə açma.",
		"Məlumat nümunəsini src/lib/data.ts içində saxla. Serverə indidən bağlama.",
		"Bitəndə bir adamla yoxla: adı tapır, işini görür, çıxır."
	],
	en: (label, first) => [
		`This is a ${label.toLowerCase()} plan. Write the name and one sentence.`,
		`Finish the ${first} page first.`,
		"Then open the next page in the list. Do not open all of them in one day.",
		"Keep the sample data in src/lib/data.ts. Do not connect a server yet.",
		"When it is done, one person checks it: they find the name, finish the job, and leave."
	],
	tr: (label, first) => [
		`Bu, ${label.toLocaleLowerCase("tr")} planıdır. Adı ve bir cümleyi yaz.`,
		`Önce ${first} sayfasını bitir.`,
		"Sonra listedeki sonraki sayfaya geç. Hepsini bir günde açma.",
		"Örnek veriyi src/lib/data.ts içinde tut. Sunucuya şimdiden bağlama.",
		"Bitince bir kişiyle yokla: adı bulur, işini görür, çıkar."
	],
	ar: (label, first) => [
		`هذه خطة: ${label}. اكتب الاسم وجملة واحدة.`,
		`أنجز صفحة ${first} أولاً.`,
		"ثم انتقل إلى الصفحة التالية في القائمة. لا تفتح الكل في يوم واحد.",
		"أبقِ البيانات التجريبية في src/lib/data.ts. لا تربط خادماً الآن.",
		"عند الانتهاء يجرّبها شخص: يجد الاسم، ينهي العمل، ويخرج."
	],
	ru: (label, first) => [
		`Это план: ${label}. Напишите имя и одно предложение.`,
		`Сначала закончите страницу «${first}».`,
		"Потом откройте следующую страницу в списке. Не открывайте все за один день.",
		"Образец данных держите в src/lib/data.ts. Сервер пока не подключайте.",
		"В конце один человек проверяет: находит имя, делает дело и уходит."
	]
};
var FILE_JOB = {
	az: {
		readme: "Layihənin adı və bir cümləsi.",
		data: "Nümunə məlumat. Hələ server yoxdur."
	},
	en: {
		readme: "The project name and one sentence.",
		data: "Sample data. There is no server yet."
	},
	tr: {
		readme: "Projenin adı ve bir cümlesi.",
		data: "Örnek veri. Henüz sunucu yok."
	},
	ar: {
		readme: "اسم المشروع وجملة واحدة.",
		data: "بيانات تجريبية. لا خادم بعد."
	},
	ru: {
		readme: "Имя проекта и одно предложение.",
		data: "Образец данных. Сервера пока нет."
	}
};
function fold(value) {
	return value.toLowerCase().replace(/ə/g, "e").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i").replace(/ё/g, "е");
}
function detect(idea) {
	const text = fold(idea);
	let best = "site";
	let score = 0;
	for (const item of KINDS) {
		const hit = item.words.reduce((sum, word) => sum + (text.includes(fold(word)) ? 1 : 0), 0);
		if (hit > score) {
			best = item.kind;
			score = hit;
		}
	}
	return best;
}
function projectName(idea, lang) {
	const line = idea.trim().split(/\n/)[0]?.replace(/\s+/g, " ").trim() ?? "";
	return ((line.split(/[.:!?]/)[0]?.trim() ?? "") || line).slice(0, 42).trim() || FALLBACK[lang];
}
function slugOf(name) {
	return fold(name).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 24) || "layihe";
}
function fileFor(path) {
	if (path === "/") return "src/pages/index.tsx";
	return `src/pages${path}.tsx`;
}
function planFromIdea(idea, lang) {
	const kind = detect(idea);
	const name = projectName(idea, lang);
	const slug = slugOf(name);
	const copy = PAGE_COPY[lang];
	const pages = SHAPES[kind].map((item) => ({
		path: item.path,
		name: copy[item.key].name,
		job: copy[item.key].job
	}));
	const files = [
		{
			path: "README.md",
			job: FILE_JOB[lang].readme
		},
		...pages.map((page) => ({
			path: fileFor(page.path),
			job: page.job
		})),
		{
			path: "src/lib/data.ts",
			job: FILE_JOB[lang].data
		}
	];
	const pageLines = pages.map((page) => `    pages/${fileFor(page.path).replace("src/pages/", "")}`);
	const tree = [
		`${slug}/`,
		"  src/",
		...pageLines,
		"    lib/data.ts",
		"  public/",
		"  README.md"
	].join("\n");
	return {
		name,
		slug,
		kind,
		kindLabel: KIND_LABEL[lang][kind],
		pages,
		tree,
		steps: STEPS[lang](KIND_LABEL[lang][kind], pages[0]?.name ?? "Ana"),
		files
	};
}
var Route$298 = createFileRoute("/flow")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/flow"),
			replace: true
		});
	},
	component: FlowPage
});
var COPY$9 = {
	az: {
		h1: "Nibras Flow",
		lead: "İdeyanı yaz. Səhifələrin xəritəsi, qovluq, iş sırası və başlanğıc fayl adları burada qurulur. Kod yazılmır və heç yerə göndərilmir.",
		label: "İdeya",
		button: "Hazırla",
		kind: "Növ",
		pages: "Səhifələr",
		tree: "Qovluq",
		steps: "İş sırası",
		files: "Fayllar",
		copy: "Kopyala",
		copied: "Kopyalandı"
	},
	en: {
		h1: "Nibras Flow",
		lead: "Write the idea. The page map, folders, work order, and starter file names are built here. No code is written and nothing is sent.",
		label: "Idea",
		button: "Prepare",
		kind: "Kind",
		pages: "Pages",
		tree: "Folders",
		steps: "Work order",
		files: "Files",
		copy: "Copy",
		copied: "Copied"
	},
	tr: {
		h1: "Nibras Flow",
		lead: "Fikri yaz. Sayfa haritası, klasör, iş sırası ve başlangıç dosya adları burada kurulur. Kod yazılmaz ve hiçbir yere gönderilmez.",
		label: "Fikir",
		button: "Hazırla",
		kind: "Tür",
		pages: "Sayfalar",
		tree: "Klasör",
		steps: "İş sırası",
		files: "Dosyalar",
		copy: "Kopyala",
		copied: "Kopyalandı"
	},
	ar: {
		h1: "Nibras Flow",
		lead: "اكتب الفكرة. تُبنى هنا خريطة الصفحات والمجلدات وترتيب العمل وأسماء الملفات الأولى. لا يُكتب كود ولا يُرسل شيء.",
		label: "الفكرة",
		button: "جهّز",
		kind: "النوع",
		pages: "الصفحات",
		tree: "المجلدات",
		steps: "ترتيب العمل",
		files: "الملفات",
		copy: "انسخ",
		copied: "تم النسخ"
	},
	ru: {
		h1: "Nibras Flow",
		lead: "Напишите идею. Карта страниц, папки, порядок работы и имена начальных файлов собираются здесь. Код не пишется и никуда не отправляется.",
		label: "Идея",
		button: "Подготовь",
		kind: "Вид",
		pages: "Страницы",
		tree: "Папки",
		steps: "Порядок работы",
		files: "Файлы",
		copy: "Копировать",
		copied: "Скопировано"
	}
};
function FlowPage() {
	const { lang } = useI18n$1();
	const copy = COPY$9[lang];
	const faq = SEARCH_FAQ["/flow"];
	const [idea, setIdea] = (0, import_react.useState)("");
	const [ready, setReady] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const plan = (0, import_react.useMemo)(() => ready ? planFromIdea(idea, lang) : null, [
		ready,
		idea,
		lang
	]);
	function onSubmit(event) {
		event.preventDefault();
		setCopied(false);
		setReady(true);
	}
	async function onCopy() {
		if (!plan) return;
		const text = [
			plan.name,
			plan.kindLabel,
			"",
			...plan.pages.map((page) => `${page.path}  ${page.name}  ${page.job}`),
			"",
			plan.tree,
			"",
			...plan.steps,
			"",
			...plan.files.map((file) => `${file.path}  ${file.job}`)
		].join("\n");
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "nx-tool files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "nx-tool-mark",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
						children: copy.h1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: copy.lead
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mb-6 grid gap-3",
				onSubmit,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1 block text-muted",
						children: copy.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "min-h-28 w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
						value: idea,
						onChange: (event) => {
							setIdea(event.target.value);
							setReady(false);
						}
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "nx-go w-fit rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white",
					children: copy.button
				})]
			}),
			plan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nx-panel mb-8 grid gap-6 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted",
						children: [copy.kind, ". "]
					}), plan.kindLabel] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 text-base font-semibold",
						children: copy.pages
					}), plan.pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "grid grid-cols-[6.5rem_1fr] gap-3 border-b border-white/10 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: page.path
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [page.name, "."] }),
							" ",
							page.job
						] })]
					}, page.path))] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 text-base font-semibold",
						children: copy.tree
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-3 text-xs leading-5",
						children: plan.tree
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 text-base font-semibold",
						children: copy.steps
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "list-decimal space-y-1 pl-5",
						children: plan.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: step }, step))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 text-base font-semibold",
						children: copy.files
					}), plan.files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "grid gap-1 border-b border-white/10 py-2 sm:grid-cols-[14rem_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "break-all text-muted",
							children: file.path
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: file.job })]
					}, file.path))] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "w-fit rounded-xl border border-white/15 px-4 py-2",
						onClick: onCopy,
						children: copied ? copy.copied : copy.copy
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextLinks, { links: [{
				href: "/seo",
				label: {
					az: "SEO yoxla",
					en: "Check SEO",
					tr: "SEO bak",
					ar: "فحص SEO",
					ru: "Проверить SEO"
				}
			}, {
				href: "/tools",
				label: {
					az: "Xidmətlər",
					en: "Tools",
					tr: "Araçlar",
					ar: "الأدوات",
					ru: "Сервисы"
				}
			}] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				"aria-labelledby": "flow-faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "flow-faq",
					className: "text-base font-semibold",
					children: faq.title[lang]
				}), faq.items[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.a
				})] }, item.q))]
			})
		]
	});
}
var Route$297 = createFileRoute("/image")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/image"),
			replace: true
		});
	},
	component: ImagePage
});
var COPY$8 = {
	az: {
		h1: "Şəkil sıx",
		lead: "Şəkilin ölçüsünü kiçilt. Pulsuz, hesabsız, şəkil brauzerdən çıxmır.",
		pick: "Şəkil seç",
		quality: "Keyfiyyət",
		download: "Yüklə",
		before: "Əvvəl",
		after: "Sonra"
	},
	en: {
		h1: "Compress photo",
		lead: "Make a photo smaller. Free, no account, the photo stays in your browser.",
		pick: "Choose a photo",
		quality: "Quality",
		download: "Download",
		before: "Before",
		after: "After"
	},
	tr: {
		h1: "Fotoğraf sıkıştır",
		lead: "Fotoğrafın boyutunu küçült. Ücretsiz, hesapsız, fotoğraf tarayıcıdan çıkmaz.",
		pick: "Fotoğraf seç",
		quality: "Kalite",
		download: "İndir",
		before: "Önce",
		after: "Sonra"
	},
	ar: {
		h1: "ضغط الصورة",
		lead: "صغّر حجم الصورة. مجاناً وبلا حساب، والصورة تبقى في المتصفح.",
		pick: "اختر صورة",
		quality: "الجودة",
		download: "تنزيل",
		before: "قبل",
		after: "بعد"
	},
	ru: {
		h1: "Сжать фото",
		lead: "Уменьшите размер фото. Бесплатно, без аккаунта, фото остаётся в браузере.",
		pick: "Выбрать фото",
		quality: "Качество",
		download: "Скачать",
		before: "До",
		after: "После"
	}
};
var EXTRA = {
	az: {
		picks: "Şəkilləri seçin (bir neçəsi olar)",
		drop: "və ya bura buraxın",
		format: "Format",
		max: "Maks. tərəf",
		target: "Hədəf ölçü",
		off: "Yox",
		orig: "Orijinal",
		all: "Hamısını yüklə (ZIP)",
		working: "Sıxılır"
	},
	en: {
		picks: "Choose photos (several at once)",
		drop: "or drop here",
		format: "Format",
		max: "Max side",
		target: "Target size",
		off: "Off",
		orig: "Original",
		all: "Download all (ZIP)",
		working: "Compressing"
	},
	tr: {
		picks: "Fotoğrafları seçin (birden fazla)",
		drop: "veya buraya bırakın",
		format: "Biçim",
		max: "Maks. kenar",
		target: "Hedef boyut",
		off: "Kapalı",
		orig: "Orijinal",
		all: "Hepsini indir (ZIP)",
		working: "Sıkıştırılıyor"
	},
	ar: {
		picks: "اختر الصور (عدة صور معاً)",
		drop: "أو أفلتها هنا",
		format: "الصيغة",
		max: "أقصى ضلع",
		target: "الحجم المستهدف",
		off: "إيقاف",
		orig: "الأصلي",
		all: "تنزيل الكل (ZIP)",
		working: "جارٍ الضغط"
	},
	ru: {
		picks: "Выберите фото (можно несколько)",
		drop: "или перетащите сюда",
		format: "Формат",
		max: "Макс. сторона",
		target: "Целевой размер",
		off: "Нет",
		orig: "Исходный",
		all: "Скачать все (ZIP)",
		working: "Сжатие"
	}
};
function kb(size) {
	if (size < 1024) return `${size} B`;
	if (size < 1048576) return `${Math.max(1, Math.round(size / 1024))} KB`;
	return `${(size / 1048576).toFixed(1)} MB`;
}
function ImagePage() {
	const { lang } = useI18n$1();
	const copy = COPY$8[lang];
	const faq = SEARCH_FAQ["/image"];
	const x = EXTRA[lang] ?? EXTRA.en;
	const [quality, setQuality] = (0, import_react.useState)(.75);
	const [fmt, setFmt] = (0, import_react.useState)("image/jpeg");
	const [max, setMax] = (0, import_react.useState)(2400);
	const [target, setTarget] = (0, import_react.useState)(0);
	const [files, setFiles] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const h = takeHandOff();
		if (h.length) setFiles(h);
	}, []);
	const [outs, setOuts] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!files.length) return;
		let dead = false;
		setBusy(true);
		(async () => {
			const res = [];
			for (const f of files) try {
				const bmp = await createImageBitmap(f, { imageOrientation: "from-image" });
				const enc = async (scale, q) => {
					const c = document.createElement("canvas");
					c.width = Math.max(1, Math.round(bmp.width * scale));
					c.height = Math.max(1, Math.round(bmp.height * scale));
					const ctx = c.getContext("2d");
					if (fmt === "image/jpeg") {
						ctx.fillStyle = "#fff";
						ctx.fillRect(0, 0, c.width, c.height);
					}
					ctx.imageSmoothingQuality = "high";
					ctx.drawImage(bmp, 0, 0, c.width, c.height);
					const out = await new Promise((ok, no) => c.toBlob((bb) => bb ? ok(bb) : no(/* @__PURE__ */ new Error("enc")), fmt, q));
					c.width = c.height = 0;
					return out;
				};
				let scale = max ? Math.min(1, max / Math.max(bmp.width, bmp.height)) : 1;
				let blob;
				if (target) {
					const goal = target * 1024;
					let lo = .3, hi = .95;
					blob = await enc(scale, hi);
					for (let tries = 0; blob.size > goal && tries < 4; tries++) {
						let best = null;
						lo = .3;
						hi = .95;
						for (let i = 0; i < 7; i++) {
							const mid = (lo + hi) / 2;
							const bb = await enc(scale, mid);
							if (bb.size <= goal) {
								best = bb;
								lo = mid;
							} else hi = mid;
						}
						if (best) {
							blob = best;
							break;
						}
						scale *= .75;
						blob = await enc(scale, .8);
					}
				} else blob = await enc(scale, quality);
				bmp.close();
				if (blob.size >= f.size && f.type === fmt && !target) blob = f;
				const ext = fmt === "image/webp" ? "webp" : "jpg";
				let name = `${f.name.replace(/\.[^.]+$/, "") || "image"}-sixilmis.${ext}`;
				for (let n = 2; res.some((r) => r.name === name); n++) name = name.replace(/(-\d+)?\.(\w+)$/, `-${n}.$2`);
				res.push({
					name,
					blob,
					url: URL.createObjectURL(blob),
					before: f.size
				});
			} catch {}
			if (dead) {
				res.forEach((r) => URL.revokeObjectURL(r.url));
				return;
			}
			setOuts((prev) => {
				prev.forEach((r) => URL.revokeObjectURL(r.url));
				return res;
			});
			setBusy(false);
		})();
		return () => {
			dead = true;
		};
	}, [
		files,
		quality,
		fmt,
		max,
		target
	]);
	const zipAll = async () => {
		const { zipSync } = await import("../_libs/@cantoo/pdf-lib+[...].mjs").then((n) => n.r);
		const entries = {};
		for (const o of outs) entries[o.name] = new Uint8Array(await o.blob.arrayBuffer());
		const u = URL.createObjectURL(new Blob([zipSync(entries, { level: 0 })], { type: "application/zip" }));
		const el = document.createElement("a");
		el.href = u;
		el.download = "nibras-images.zip";
		el.click();
		setTimeout(() => URL.revokeObjectURL(u), 4e3);
	};
	const tb = outs.reduce((n, o) => n + o.before, 0), ta = outs.reduce((n, o) => n + o.blob.size, 0);
	const chip = (on) => `inline-flex items-center rounded-xl border px-3 py-2 text-sm ${on ? "border-[#2f6bff] bg-[#2f6bff]/20" : "border-white/15 hover:bg-white/10"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/apps/nibras-image.png",
					alt: "",
					width: 64,
					height: 64,
					className: "size-14 shrink-0 rounded-2xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
					children: copy.h1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: copy.lead
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mb-4 grid cursor-pointer place-items-center rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-10 text-center text-sm",
				onDragOver: (e) => e.preventDefault(),
				onDrop: (e) => {
					e.preventDefault();
					const f = [...e.dataTransfer.files].filter((v) => v.type.startsWith("image/"));
					if (f.length) setFiles(f);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: x.picks }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: x.drop
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "sr-only",
					type: "file",
					accept: "image/*",
					multiple: true,
					"data-testid": "img-pick",
					onChange: (event) => {
						const f = [...event.target.files ?? []];
						if (f.length) setFiles(f);
						event.target.value = "";
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-24 shrink-0",
							children: x.format
						}), [["image/jpeg", "JPG"], ["image/webp", "WebP"]].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: chip(fmt === v),
							onClick: () => setFmt(v),
							children: l
						}, v))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-24 shrink-0",
							children: x.max
						}), [
							[0, x.orig],
							[2400, "2400"],
							[1920, "1920"],
							[1280, "1280"],
							[800, "800"]
						].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: chip(max === v),
							onClick: () => setMax(v),
							children: l
						}, v))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-24 shrink-0",
							children: x.target
						}), [
							[0, x.off],
							[100, "100 KB"],
							[200, "200 KB"],
							[500, "500 KB"],
							[1024, "1 MB"]
						].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: chip(target === v),
							onClick: () => setTarget(v),
							children: l
						}, v))]
					}),
					!target ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-24 shrink-0",
								children: copy.quality
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: .3,
								max: .95,
								step: .05,
								value: quality,
								onChange: (event) => setQuality(Number(event.target.value))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(quality * 100), "%"] })
						]
					}) : null
				]
			}),
			busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 text-sm text-muted",
				children: [x.working, "…"]
			}) : null,
			outs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							copy.before,
							": ",
							kb(tb),
							" → ",
							copy.after,
							": ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: kb(ta) }),
							tb ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ms-2 text-emerald-400",
								children: [
									"−",
									Math.max(0, Math.round((1 - ta / tb) * 100)),
									"%"
								]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: outs.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-wrap items-center gap-3 rounded-xl border border-white/10 p-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: o.url,
									alt: "",
									className: "size-12 rounded-lg object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1 truncate",
									children: [
										o.name,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted",
											children: [
												kb(o.before),
												" → ",
												kb(o.blob.size)
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "rounded-xl bg-[#2f6bff] px-4 py-2 font-semibold text-white",
									href: o.url,
									download: o.name,
									"data-testid": "img-download",
									children: copy.download
								})
							]
						}, o.url))
					}),
					outs.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white",
						onClick: zipAll,
						children: x.all
					}) : null
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextLinks, { links: [
				{
					href: "/image/resize",
					label: {
						az: "Ölçünü dəyiş",
						en: "Resize",
						tr: "Boyut değiştir",
						ar: "تغيير الحجم",
						ru: "Размер"
					}
				},
				{
					href: "/image/convert",
					label: {
						az: "Formatı çevir",
						en: "Convert format",
						tr: "Biçim dönüştür",
						ar: "تحويل الصيغة",
						ru: "Формат"
					}
				},
				{
					href: "/image/edit",
					label: {
						az: "Kəs və döndər",
						en: "Crop & rotate",
						tr: "Kırp ve döndür",
						ar: "قص وتدوير",
						ru: "Обрезка и поворот"
					}
				},
				{
					href: "/erase",
					label: {
						az: "Şəkil fon sil",
						en: "Remove background",
						tr: "Arka plan sil",
						ar: "حذف الخلفية",
						ru: "Удалить фон"
					}
				},
				{
					href: "/pdf/image-pdf",
					label: {
						az: "JPG-dən PDF",
						en: "JPG to PDF",
						tr: "JPG'den PDF",
						ar: "من JPG إلى PDF",
						ru: "JPG в PDF"
					}
				}
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 space-y-3",
				"aria-labelledby": "image-faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "image-faq",
					className: "text-base font-semibold",
					children: faq.title[lang]
				}), faq.items[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.a
				})] }, item.q))]
			})
		]
	});
}
var $$splitComponentImporter$286 = () => import("./learn-CtOchOde.mjs");
var Route$296 = createFileRoute("/learn")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/learn"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$286, "component")
});
var SAMPLE = {
	az: [{
		q: "Hansı yol olsun?",
		a: {
			t: "Qısa",
			to: null
		},
		b: {
			t: "Ətraflı",
			to: 1
		}
	}, {
		q: "Davam edək?",
		a: {
			t: "Bəli",
			to: null
		},
		b: {
			t: "Xeyr",
			to: null
		}
	}],
	en: [{
		q: "Which way?",
		a: {
			t: "Short",
			to: null
		},
		b: {
			t: "Longer",
			to: 1
		}
	}, {
		q: "Go on?",
		a: {
			t: "Yes",
			to: null
		},
		b: {
			t: "No",
			to: null
		}
	}],
	tr: [{
		q: "Hangi yol olsun?",
		a: {
			t: "Kısa",
			to: null
		},
		b: {
			t: "Ayrıntılı",
			to: 1
		}
	}, {
		q: "Devam edelim mi?",
		a: {
			t: "Evet",
			to: null
		},
		b: {
			t: "Hayır",
			to: null
		}
	}],
	ar: [{
		q: "أي طريق؟",
		a: {
			t: "قصير",
			to: null
		},
		b: {
			t: "أطول",
			to: 1
		}
	}, {
		q: "نكمل؟",
		a: {
			t: "نعم",
			to: null
		},
		b: {
			t: "لا",
			to: null
		}
	}],
	ru: [{
		q: "Какой путь?",
		a: {
			t: "Короткий",
			to: null
		},
		b: {
			t: "Подробный",
			to: 1
		}
	}, {
		q: "Продолжаем?",
		a: {
			t: "Да",
			to: null
		},
		b: {
			t: "Нет",
			to: null
		}
	}]
};
function sampleTree(lang) {
	return SAMPLE[lang].map((step) => ({
		q: step.q,
		a: { ...step.a },
		b: { ...step.b }
	}));
}
function clip(value) {
	return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, 80);
}
function choice(value, count) {
	const raw = value && typeof value === "object" ? value : {};
	const to = raw.to;
	const next = typeof to === "number" && Number.isInteger(to) && to >= 0 && to < count ? to : null;
	return {
		t: clip(raw.t),
		to: next
	};
}
function normalizeTree(value) {
	if (!Array.isArray(value) || value.length === 0) return null;
	const count = Math.min(value.length, 8);
	const steps = value.slice(0, count).map((item) => {
		const raw = item && typeof item === "object" ? item : {};
		return {
			q: clip(raw.q),
			a: choice(raw.a, count),
			b: choice(raw.b, count)
		};
	});
	return steps.some((step) => step.q || step.a.t || step.b.t) ? steps : null;
}
function encodeTree(steps) {
	const json = JSON.stringify(normalizeTree(steps) ?? []);
	const bytes = new TextEncoder().encode(json);
	let bin = "";
	for (const byte of bytes) bin += String.fromCharCode(byte);
	return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function decodeTree(token) {
	try {
		const pad = token.replace(/-/g, "+").replace(/_/g, "/");
		const bin = atob(pad + "=".repeat((4 - pad.length % 4) % 4));
		const bytes = Uint8Array.from(bin, (char) => char.charCodeAt(0));
		return normalizeTree(JSON.parse(new TextDecoder().decode(bytes)));
	} catch {
		return null;
	}
}
function tokenFromHash(hash) {
	return hash.match(/(?:^#|[&#])t=([A-Za-z0-9_-]+)/)?.[1] ?? "";
}
var Route$295 = createFileRoute("/logic")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/logic"),
			replace: true
		});
	},
	component: LogicPage
});
var COPY$7 = {
	az: {
		h1: "Nibras Logic",
		lead: "Sual yaz, hər suala iki cavab ver. Cavab növbəti suala və ya sona gedir. Sonra yolu özün gəz. Link ünvanın içindədir, heç nə saxlanmır.",
		q: "Sual",
		a: "Cavab A",
		b: "Cavab B",
		to: "Gedər",
		end: "Son",
		add: "Sual əlavə et",
		remove: "Sil",
		try: "Yoxla",
		link: "Linki kopyala",
		copied: "Kopyalandı",
		edit: "Dəyiş",
		restart: "Başa qayıt",
		done: "Bu sondur.",
		loop: "Eyni yerə döndün. Başdan başla.",
		step: "Sual"
	},
	en: {
		h1: "Nibras Logic",
		lead: "Write a question and give it two answers. An answer goes to the next question or to the end. Then walk the path. The link is in the address. Nothing is stored.",
		q: "Question",
		a: "Answer A",
		b: "Answer B",
		to: "Goes to",
		end: "End",
		add: "Add a question",
		remove: "Remove",
		try: "Try",
		link: "Copy link",
		copied: "Copied",
		edit: "Edit",
		restart: "Start over",
		done: "This is the end.",
		loop: "You returned to the same place. Start over.",
		step: "Question"
	},
	tr: {
		h1: "Nibras Logic",
		lead: "Soru yaz, her soruya iki cevap ver. Cevap sonraki soruya ya da sona gider. Sonra yolu kendin gez. Bağlantı adresin içindedir, hiçbir şey saklanmaz.",
		q: "Soru",
		a: "Cevap A",
		b: "Cevap B",
		to: "Gider",
		end: "Son",
		add: "Soru ekle",
		remove: "Sil",
		try: "Dene",
		link: "Bağlantıyı kopyala",
		copied: "Kopyalandı",
		edit: "Değiştir",
		restart: "Başa dön",
		done: "Bu sondur.",
		loop: "Aynı yere döndün. Baştan başla.",
		step: "Soru"
	},
	ar: {
		h1: "Nibras Logic",
		lead: "اكتب سؤالاً وأعطه جوابين. الجواب يذهب إلى السؤال التالي أو إلى النهاية. ثم اسلك الطريق. الرابط داخل العنوان ولا يُحفظ شيء.",
		q: "سؤال",
		a: "جواب أ",
		b: "جواب ب",
		to: "يذهب إلى",
		end: "النهاية",
		add: "أضف سؤالاً",
		remove: "احذف",
		try: "جرّب",
		link: "انسخ الرابط",
		copied: "تم النسخ",
		edit: "عدّل",
		restart: "من البداية",
		done: "هذه النهاية.",
		loop: "عدت إلى المكان نفسه. ابدأ من جديد.",
		step: "سؤال"
	},
	ru: {
		h1: "Nibras Logic",
		lead: "Напишите вопрос и дайте два ответа. Ответ ведёт к следующему вопросу или к концу. Потом пройдите путь. Ссылка внутри адреса, ничего не сохраняется.",
		q: "Вопрос",
		a: "Ответ А",
		b: "Ответ Б",
		to: "Ведёт",
		end: "Конец",
		add: "Добавить вопрос",
		remove: "Удалить",
		try: "Проверить",
		link: "Копировать ссылку",
		copied: "Скопировано",
		edit: "Изменить",
		restart: "Сначала",
		done: "Это конец.",
		loop: "Вы вернулись на то же место. Начните сначала.",
		step: "Вопрос"
	}
};
function writeHash(steps) {
	const next = `#t=${encodeTree(steps)}`;
	if (window.location.hash !== next) window.history.replaceState(null, "", next);
	return `${window.location.origin}${window.location.pathname}${window.location.search}${next}`;
}
function LogicPage() {
	const { lang } = useI18n$1();
	const copy = COPY$7[lang];
	const faq = SEARCH_FAQ["/logic"];
	const [steps, setSteps] = (0, import_react.useState)(() => sampleTree(lang));
	const [mode, setMode] = (0, import_react.useState)("edit");
	const [at, setAt] = (0, import_react.useState)(0);
	const [seen, setSeen] = (0, import_react.useState)([]);
	const [end, setEnd] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const shared = decodeTree(tokenFromHash(window.location.hash));
		if (!shared) return;
		setSteps(shared);
		setMode("walk");
	}, []);
	function update(index, next) {
		setSteps((list) => list.map((item, i) => i === index ? next : item));
		setCopied(false);
	}
	function add() {
		setSteps((list) => list.length >= 8 ? list : [...list, {
			q: "",
			a: {
				t: "",
				to: null
			},
			b: {
				t: "",
				to: null
			}
		}]);
	}
	function remove(index) {
		setSteps((list) => {
			if (list.length === 1) return list;
			return list.filter((_, i) => i !== index).map((step) => ({
				...step,
				a: {
					...step.a,
					to: step.a.to === null ? null : step.a.to === index ? null : step.a.to > index ? step.a.to - 1 : step.a.to
				},
				b: {
					...step.b,
					to: step.b.to === null ? null : step.b.to === index ? null : step.b.to > index ? step.b.to - 1 : step.b.to
				}
			}));
		});
	}
	function choose(to, label) {
		if (to === null || !steps[to]) {
			setEnd(label || copy.done);
			return;
		}
		if (to === at || seen.includes(to) || seen.length > 12) {
			setEnd(copy.loop);
			return;
		}
		setSeen((list) => [...list, at]);
		setAt(to);
	}
	function restart(nextMode) {
		setMode(nextMode);
		setAt(0);
		setSeen([]);
		setEnd("");
		setCopied(false);
	}
	async function share() {
		const url = writeHash(steps);
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	const step = steps[at] ?? steps[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "nx-tool files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "nx-tool-mark",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
						children: copy.h1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: copy.lead
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApkDiagnose, { lang }),
			mode === "edit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nx-panel mb-8 grid gap-4",
				children: [steps.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "grid gap-2 rounded-xl border border-white/10 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
							className: "px-1 text-sm text-muted",
							children: [
								copy.step,
								" ",
								index + 1
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
							placeholder: copy.q,
							value: item.q,
							maxLength: 80,
							onChange: (event) => update(index, {
								...item,
								q: event.target.value
							})
						}),
						["a", "b"].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2 sm:grid-cols-[1fr_9rem]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
								placeholder: copy[side],
								value: item[side].t,
								maxLength: 80,
								onChange: (event) => update(index, {
									...item,
									[side]: {
										...item[side],
										t: event.target.value
									}
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "rounded-xl border border-white/15 bg-white/5 px-3 py-2",
								value: item[side].to === null ? "end" : String(item[side].to),
								onChange: (event) => update(index, {
									...item,
									[side]: {
										...item[side],
										to: event.target.value === "end" ? null : Number(event.target.value)
									}
								}),
								"aria-label": copy.to,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "end",
									children: copy.end
								}), steps.map((_, other) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: other,
									children: [
										copy.step,
										" ",
										other + 1
									]
								}, other))]
							})]
						}, side)),
						steps.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "w-fit text-sm text-muted",
							onClick: () => remove(index),
							children: copy.remove
						}) : null
					]
				}, index)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nx-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-xl border border-white/15 px-4 py-2 text-sm",
							onClick: add,
							disabled: steps.length >= 8,
							children: copy.add
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "nx-go rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white",
							onClick: () => {
								writeHash(steps);
								restart("walk");
							},
							children: copy.try
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-xl border border-white/15 px-4 py-2 text-sm",
							onClick: share,
							children: copied ? copy.copied : copy.link
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nx-panel mb-8 grid gap-4",
				children: [end ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg",
					children: end
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg",
					children: step?.q || `${copy.step} ${at + 1}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nx-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "nx-go rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white",
						onClick: () => choose(step.a.to, step.a.t),
						children: step.a.t || copy.a
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-xl border border-white/15 px-4 py-2 text-sm",
						onClick: () => choose(step.b.to, step.b.t),
						children: step.b.t || copy.b
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nx-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-xl border border-white/15 px-4 py-2 text-sm",
						onClick: () => restart("walk"),
						children: copy.restart
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rounded-xl border border-white/15 px-4 py-2 text-sm",
						onClick: () => restart("edit"),
						children: copy.edit
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextLinks, { links: [{
				href: "/flow",
				label: {
					az: "Plan hazırla",
					en: "Make a plan",
					tr: "Plan hazırla",
					ar: "جهّز خطة",
					ru: "Собрать план"
				}
			}, {
				href: "/tools",
				label: {
					az: "Xidmətlər",
					en: "Tools",
					tr: "Araçlar",
					ar: "الأدوات",
					ru: "Сервисы"
				}
			}] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				"aria-labelledby": "logic-faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "logic-faq",
					className: "text-base font-semibold",
					children: faq.title[lang]
				}), faq.items[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.a
				})] }, item.q))]
			})
		]
	});
}
var $$splitComponentImporter$285 = () => import("./mirror-Vkj-eEf5.mjs");
var Route$294 = createFileRoute("/mirror")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/mirror"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$285, "component")
});
var $$splitComponentImporter$284 = () => import("./movzu-CHIM_zds.mjs");
var Route$293 = createFileRoute("/movzu")({ component: lazyRouteComponent($$splitComponentImporter$284, "component") });
var $$splitComponentImporter$283 = () => import("./muqayise-MnFZgvly.mjs");
var Route$292 = createFileRoute("/muqayise")({ component: lazyRouteComponent($$splitComponentImporter$283, "component") });
var $$splitComponentImporter$282 = () => import("./nece-DGxEYMnr.mjs");
var Route$291 = createFileRoute("/nece")({ component: lazyRouteComponent($$splitComponentImporter$282, "component") });
var Route$290 = createFileRoute("/nedir")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/nedir"),
			replace: true
		});
	},
	component: NedirPage
});
var COPY$6 = {
	az: {
		title: "Nibras Code nədir?",
		lead: "Nibras Code pulsuz onlayn alətlər, Android tətbiqləri və öyrənmə səhifələri olan müstəqil sayt və layihədir. Qurucusu Mahir Əliyevdir.",
		whoH: "Kim üçündür",
		who: "PDF və şəkillə tez iş görmək istəyənlər, tələbələr, kod öyrənənlər və ərəb dilini öyrənənlər üçün. Sayt 5 dildədir: azərbaycan, ingilis, türk, ərəb, rus.",
		prodH: "Əsas məhsullar",
		prods: [
			[
				"/pdf",
				"PDF alətləri",
				"birləşdirmək, bölmək, sıxmaq, səhifə nömrəsi, OCR və s."
			],
			[
				"/image",
				"Şəkil alətləri",
				"sıxmaq, ölçü, format, fon silmək"
			],
			[
				"/qr",
				"QR kod",
				"link, Wi-Fi, vizit kartı"
			],
			[
				"/ai",
				"Nibras AI",
				"sual-cavab köməkçisi"
			],
			[
				"/apps",
				"Tətbiqlər",
				"Nibras PDF, Nibras QR, Nibras Arabic və b."
			],
			[
				"/nece",
				"Bələdçilər",
				"addım-addım izahlar"
			]
		],
		privH: "Məxfilik",
		priv: "PDF, şəkil, QR və ZIP alətləri brauzerdə işləyir, fayl serverə getmir. Hesab lazım deyil.",
		more: "Ətraflı",
		contact: "Əlaqə: nibrascode@gmail.com"
	},
	en: {
		title: "What is Nibras Code?",
		lead: "Nibras Code is an independent site and project with free online tools, Android apps and learning pages. Its founder is Mahir Aliyev.",
		whoH: "Who it is for",
		who: "People who want quick PDF and image work, students, people learning to code, and Arabic learners. The site is in 5 languages: Azerbaijani, English, Turkish, Arabic, Russian.",
		prodH: "Main products",
		prods: [
			[
				"/pdf",
				"PDF tools",
				"merge, split, compress, page numbers, OCR and more"
			],
			[
				"/image",
				"Image tools",
				"compress, resize, convert, remove background"
			],
			[
				"/qr",
				"QR codes",
				"link, Wi-Fi, contact card"
			],
			[
				"/ai",
				"Nibras AI",
				"question-and-answer assistant"
			],
			[
				"/apps",
				"Apps",
				"Nibras PDF, Nibras QR, Nibras Arabic and more"
			],
			[
				"/nece",
				"Guides",
				"step-by-step how-tos"
			]
		],
		privH: "Privacy",
		priv: "The PDF, image, QR and ZIP tools run in the browser; files do not go to a server. No account is needed.",
		more: "More",
		contact: "Contact: nibrascode@gmail.com"
	},
	tr: {
		title: "Nibras Code nedir?",
		lead: "Nibras Code ücretsiz çevrim içi araçlar, Android uygulamaları ve öğrenme sayfaları sunan bağımsız bir site ve projedir. Kurucusu Mahir Aliyev'dir.",
		whoH: "Kimin için",
		who: "PDF ve resimle hızlı iş yapmak isteyenler, öğrenciler, kod öğrenenler ve Arapça öğrenenler için. Site 5 dildedir: Azerbaycanca, İngilizce, Türkçe, Arapça, Rusça.",
		prodH: "Ana ürünler",
		prods: [
			[
				"/pdf",
				"PDF araçları",
				"birleştirme, bölme, sıkıştırma, sayfa numarası, OCR vb."
			],
			[
				"/image",
				"Resim araçları",
				"sıkıştırma, boyut, format, arka plan silme"
			],
			[
				"/qr",
				"QR kod",
				"bağlantı, Wi-Fi, kartvizit"
			],
			[
				"/ai",
				"Nibras AI",
				"soru-cevap asistanı"
			],
			[
				"/apps",
				"Uygulamalar",
				"Nibras PDF, Nibras QR, Nibras Arabic ve diğerleri"
			],
			[
				"/nece",
				"Rehberler",
				"adım adım anlatımlar"
			]
		],
		privH: "Gizlilik",
		priv: "PDF, resim, QR ve ZIP araçları tarayıcıda çalışır, dosya sunucuya gitmez. Hesap gerekmez.",
		more: "Daha fazla",
		contact: "İletişim: nibrascode@gmail.com"
	},
	ar: {
		title: "ما هو Nibras Code؟",
		lead: "Nibras Code موقع ومشروع مستقل يقدّم أدوات مجانية على الإنترنت وتطبيقات أندرويد وصفحات تعليمية. مؤسسه ماهر علييف.",
		whoH: "لمن هو",
		who: "لمن يريد إنجاز عمل PDF والصور بسرعة، وللطلاب، ومتعلمي البرمجة، ومتعلمي العربية. الموقع بخمس لغات: الأذربيجانية والإنجليزية والتركية والعربية والروسية.",
		prodH: "المنتجات الرئيسية",
		prods: [
			[
				"/pdf",
				"أدوات PDF",
				"دمج، تقسيم، ضغط، ترقيم الصفحات، OCR وغيرها"
			],
			[
				"/image",
				"أدوات الصور",
				"ضغط، تغيير الحجم، تحويل، إزالة الخلفية"
			],
			[
				"/qr",
				"رمز QR",
				"رابط، Wi-Fi، بطاقة اتصال"
			],
			[
				"/ai",
				"Nibras AI",
				"مساعد سؤال وجواب"
			],
			[
				"/apps",
				"التطبيقات",
				"Nibras PDF وNibras QR وNibras Arabic وغيرها"
			],
			[
				"/nece",
				"الأدلة",
				"شروح خطوة بخطوة"
			]
		],
		privH: "الخصوصية",
		priv: "أدوات PDF والصور وQR وZIP تعمل في المتصفح، ولا يذهب الملف إلى خادم. لا حاجة إلى حساب.",
		more: "المزيد",
		contact: "التواصل: nibrascode@gmail.com"
	},
	ru: {
		title: "Что такое Nibras Code?",
		lead: "Nibras Code — независимый сайт и проект с бесплатными онлайн-инструментами, Android-приложениями и учебными страницами. Основатель — Махир Алиев.",
		whoH: "Для кого",
		who: "Для тех, кому нужно быстро поработать с PDF и изображениями, для студентов, изучающих программирование и арабский язык. Сайт на 5 языках: азербайджанском, английском, турецком, арабском, русском.",
		prodH: "Основные продукты",
		prods: [
			[
				"/pdf",
				"Инструменты PDF",
				"объединение, разделение, сжатие, нумерация, OCR и другое"
			],
			[
				"/image",
				"Инструменты изображений",
				"сжатие, размер, формат, удаление фона"
			],
			[
				"/qr",
				"QR-коды",
				"ссылка, Wi-Fi, визитка"
			],
			[
				"/ai",
				"Nibras AI",
				"помощник вопрос-ответ"
			],
			[
				"/apps",
				"Приложения",
				"Nibras PDF, Nibras QR, Nibras Arabic и другие"
			],
			[
				"/nece",
				"Руководства",
				"пошаговые инструкции"
			]
		],
		privH: "Конфиденциальность",
		priv: "Инструменты PDF, изображений, QR и ZIP работают в браузере, файл не уходит на сервер. Аккаунт не нужен.",
		more: "Подробнее",
		contact: "Связь: nibrascode@gmail.com"
	}
};
var MORE = {
	az: [
		["/trust", "Şəffaflıq və xidmət səviyyəsi"],
		["/about", "Haqqımızda"],
		["/privacy", "Məxfilik siyasətləri"],
		["/contact", "Əlaqə"]
	],
	en: [
		["/trust", "Transparency and service level"],
		["/about", "About"],
		["/privacy", "Privacy policies"],
		["/contact", "Contact"]
	],
	tr: [
		["/trust", "Şeffaflık ve hizmet seviyesi"],
		["/about", "Hakkımızda"],
		["/privacy", "Gizlilik politikaları"],
		["/contact", "İletişim"]
	],
	ar: [
		["/trust", "الشفافية ومستوى الخدمة"],
		["/about", "من نحن"],
		["/privacy", "سياسات الخصوصية"],
		["/contact", "تواصل"]
	],
	ru: [
		["/trust", "Прозрачность и уровень сервиса"],
		["/about", "О нас"],
		["/privacy", "Политики конфиденциальности"],
		["/contact", "Контакт"]
	]
};
function NedirPage() {
	const { lang } = useI18n$1();
	const c = COPY$6[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: c.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "why-lead",
				children: c.lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: User,
				title: c.whoH,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.who })
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "info-section-title",
				children: c.prodH
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: c.prods.map(([href, name, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: LayoutGrid,
				title: name,
				href: localeHref(lang, href),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: desc })
			}, href)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCards, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: ShieldCheck,
					title: c.privH,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.priv })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Link2,
					title: c.more,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [MORE[lang].map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, href),
							children: label
						}),
						" ·",
						" "
					] }, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/llms.txt",
						children: "llms.txt"
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Mail,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: c.contact })
				})
			] })
		]
	});
}
var $$splitComponentImporter$281 = () => import("./nx-studio-C5cjLjQG.mjs");
var Route$289 = createFileRoute("/nx-studio")({ component: lazyRouteComponent($$splitComponentImporter$281, "component") });
var $$splitComponentImporter$280 = () => import("./oyun-0Mh9uL15.mjs");
var Route$288 = createFileRoute("/oyun")({ component: lazyRouteComponent($$splitComponentImporter$280, "component") });
var $$splitComponentImporter$279 = () => import("./paket-DPZTocse.mjs");
var Route$287 = createFileRoute("/paket")({ component: lazyRouteComponent($$splitComponentImporter$279, "component") });
var $$splitComponentImporter$278 = () => import("./pdf-DigpDy34.mjs");
var Route$286 = createFileRoute("/pdf")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, location.pathname),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$278, "component")
});
var PLANNER_MARKUP = "<div class=\"wrap\">\n\n  <div id=\"home\">\n    <div class=\"logo\">🧱</div>\n    <h1>Nibras Planner</h1>\n    <p>Evin ölçüsünü seç. Materialın sayı və qiyməti özü hesablanır.</p>\n    <div class=\"home-actions\">\n      <button class=\"btn-primary\" data-act=\"yeni\">Başla</button>\n      <button type=\"button\" class=\"btn-ghost hidden\" id=\"btnContinue\" data-act=\"davam\">Son layihəyə davam et</button>\n    </div>\n  </div>\n\n  <div id=\"project\" class=\"hidden\">\n    <button class=\"btn-back\" data-act=\"ana\">← Geri</button>\n    <div class=\"proj-title\">Smeta</div>\n    <div class=\"proj-sub\">Rəqəmi dəyişən kimi qiymət yenilənir</div>\n\n    <ol class=\"steps\">\n      <li><b>1. Ölçü</b>Evin eni və otaq sayı</li>\n      <li><b>2. Plan</b>Qapı və pəncərə</li>\n      <li><b>3. Qiymət</b>Material və məbləğ</li>\n    </ol>\n\n    <div class=\"estimate\">\n      <div class=\"label\">Cəmi</div>\n      <div class=\"amount\" id=\"totalPrice\">0.00 AZN</div>\n      <div id=\"estLines\"></div>\n      <div class=\"qty-row\" id=\"qtyChips\"></div>\n    </div>\n    <div class=\"action-row\">\n      <button type=\"button\" class=\"btn-ghost btn-print\" data-act=\"print\">Çap et</button>\n      <button type=\"button\" class=\"btn-ghost btn-copy\" data-act=\"copy\">Kopyala</button>\n    </div>\n\n    <div class=\"panel open\" id=\"panel-olcu\">\n      <div class=\"panel-header\" data-panel=\"panel-olcu\">\n        <h2>1. Ölçü</h2><span class=\"chev\">▾</span>\n      </div>\n      <div class=\"panel-body\"><div class=\"panel-body-inner\">\n        <div class=\"size-picks\">\n          <button type=\"button\" data-size=\"8,5,2.8,2\">Kiçik ev · 8×5</button>\n          <button type=\"button\" data-size=\"10,6,3,3\">Orta ev · 10×6</button>\n          <button type=\"button\" data-size=\"12,9,3,4\">Böyük ev · 12×9</button>\n        </div>\n        <label for=\"evForm\">Tikinti forması</label>\n        <select id=\"evForm\"><option value=\"az-brick\">Azərbaycan — Kərpic hörgü</option></select>\n        <p class=\"hint\" id=\"formNote\" style=\"margin:8px 0 12px;\"></p>\n        <div class=\"row\">\n          <div><label for=\"uzunluq\">Uzunluq, m</label><input type=\"number\" id=\"uzunluq\" value=\"10\" min=\"0\" step=\"0.1\" inputmode=\"decimal\"></div>\n          <div><label for=\"en\">En, m</label><input type=\"number\" id=\"en\" value=\"6\" min=\"0\" step=\"0.1\" inputmode=\"decimal\"></div>\n          <div><label for=\"hund\">Hündürlük, m</label><input type=\"number\" id=\"hund\" value=\"3\" min=\"0\" step=\"0.1\" inputmode=\"decimal\"></div>\n        </div>\n        <label for=\"otaqSayi\">Neçə otaq</label>\n        <input type=\"number\" id=\"otaqSayi\" value=\"3\" min=\"1\" step=\"1\" style=\"max-width:120px;\">\n      </div></div>\n    </div>\n\n    <div class=\"panel open\" id=\"panel-3d\">\n      <div class=\"panel-header\" data-panel=\"panel-3d\">\n        <h2>2. Model</h2><span class=\"chev\">▾</span>\n      </div>\n      <div class=\"panel-body\"><div class=\"panel-body-inner\">\n        <p class=\"hint\" style=\"margin:0 0 10px;\">Barmağınla fırlat. Addım seçəndə ev o mərhələyə qədər tikilir.</p>\n        <div class=\"scene\" id=\"scene\" data-stage=\"5\">\n          <div class=\"cube\" id=\"cube\" data-stage=\"5\">\n            <div class=\"face\" id=\"f-top\"></div>\n            <div class=\"face\" id=\"f-ridge\"></div>\n            <div class=\"face\" id=\"f-bottom\"></div>\n            <div class=\"face\" id=\"f-plinth\"></div>\n          </div>\n          <div class=\"scene-empty\" id=\"sceneEmpty\">Ölçünü yaz</div>\n          <div class=\"scene-badge\" id=\"sceneBadge\">5/5 · Dam</div>\n          <div class=\"scene-cost\" id=\"fiveCost\"><span>Bu adıma qədər</span><b id=\"fiveCostAmt\">0.00</b><small>AZN</small></div>\n          <div class=\"sky-picks\" id=\"skyPicks\">\n            <button type=\"button\" data-sky=\"day\" class=\"is-on\">Gün</button>\n            <button type=\"button\" data-sky=\"sun\">Günəş</button>\n            <button type=\"button\" data-sky=\"dusk\">Axşam</button>\n            <button type=\"button\" data-sky=\"night\">Gecə</button>\n            <button type=\"button\" data-sky=\"snow\">Qar</button>\n          </div>\n          <input type=\"hidden\" id=\"skyId\" value=\"day\">\n          <div class=\"zoom-ctrl\">\n            <button type=\"button\" data-act=\"zoom-in\" aria-label=\"Böyüt\">＋</button>\n            <button type=\"button\" data-act=\"zoom-out\" aria-label=\"Kiçilt\">－</button>\n          </div>\n        </div>\n        <div class=\"dims\" id=\"dimsLabel\">Uzunluq: <b>0</b> m · En: <b>0</b> m · Hündürlük: <b>0</b> m</div>\n        <div class=\"stage-rail\" id=\"stageRail\" data-stage=\"5\">\n          <button type=\"button\" data-stage=\"1\"><b>Təməl</b></button>\n          <button type=\"button\" data-stage=\"2\"><b>Divar</b></button>\n          <button type=\"button\" data-stage=\"3\"><b>Otaq</b></button>\n          <button type=\"button\" data-stage=\"4\"><b>Suvaq</b></button>\n          <button type=\"button\" data-stage=\"5\" class=\"is-on is-current\"><b>Dam</b></button>\n        </div>\n        <input type=\"range\" id=\"stageSlider\" class=\"stage-slider\" min=\"1\" max=\"5\" value=\"5\" step=\"1\" aria-label=\"Tikinti addımı\">\n        <div class=\"stage-detail\" id=\"stageLabel\"></div>\n      </div></div>\n    </div>\n\n    <div class=\"panel open\" id=\"panel-plan\">\n      <div class=\"panel-header\" data-panel=\"panel-plan\">\n        <h2>3. Plan</h2><span class=\"chev\">▾</span>\n      </div>\n      <div class=\"panel-body\"><div class=\"panel-body-inner\">\n        <p class=\"hint\" style=\"margin:0 0 8px;\">Divara toxun — qapı və ya pəncərə qoy. Sonra tutub yerini dəyiş.</p>\n        <svg id=\"planSvg\" viewBox=\"0 0 100 100\" style=\"width:100%; height:auto; display:block; touch-action:none;\"></svg>\n        <div class=\"legend\">\n          <span><i class=\"lg-box\" style=\"background:var(--accent)\"></i>Divar</span>\n          <span><i class=\"lg-box\" style=\"background:#f2d9a8\"></i>Qapı</span>\n          <span><i class=\"lg-box\" style=\"background:#9fd0e8\"></i>Pəncərə</span>\n          <span><i class=\"lg-box\" style=\"background:#4caf50\"></i>Giriş</span>\n        </div>\n        <div class=\"wall-editor hidden\" id=\"wallEditor\">\n          <div class=\"proj-sub\" id=\"weTitle\" style=\"margin:0 0 8px;\">Divar</div>\n          <div class=\"row\" style=\"margin-bottom:10px;\">\n            <button type=\"button\" class=\"we-type\" id=\"we-door\" data-act=\"we-door\">Qapı</button>\n            <button type=\"button\" class=\"we-type\" id=\"we-window\" data-act=\"we-window\">Pəncərə</button>\n          </div>\n          <div class=\"row\">\n            <div><label for=\"weWidth\">En, m</label><input type=\"number\" id=\"weWidth\" value=\"0.9\" step=\"0.1\" min=\"0.3\"></div>\n            <div><label for=\"weHeight\">Hündürlük, m</label><input type=\"number\" id=\"weHeight\" value=\"2.1\" step=\"0.1\" min=\"0.4\"></div>\n          </div>\n          <div class=\"mat-row\" id=\"weEntranceRow\" style=\"margin-top:8px;\">\n            <input type=\"checkbox\" id=\"weEntrance\">\n            <label for=\"weEntrance\">Əsas giriş qapısı</label>\n          </div>\n          <div class=\"row\" style=\"margin-top:12px;\">\n            <button type=\"button\" class=\"btn-primary\" style=\"padding:10px;\" data-act=\"we-save\">Qoy</button>\n            <button type=\"button\" class=\"btn-ghost\" data-act=\"we-del\">Sil</button>\n            <button type=\"button\" class=\"btn-ghost\" data-act=\"we-close\">Bağla</button>\n          </div>\n        </div>\n      </div></div>\n    </div>\n\n    <div class=\"panel\" id=\"panel-xerc\">\n      <div class=\"panel-header\" data-panel=\"panel-xerc\">\n        <h2>4. Material və qiymət</h2><span class=\"chev\">▾</span>\n      </div>\n      <div class=\"panel-body\"><div class=\"panel-body-inner\">\n        <p class=\"hint\" style=\"margin:0 0 10px;\">İşarəni götürsən, həmin sətir cəmdən çıxır. Qiyməti öz bazarına görə yaz.</p>\n\n        <div class=\"mat-item\">\n          <div class=\"mat-item-header\">\n            <input type=\"checkbox\" id=\"c-kerpic\" checked>\n            <span class=\"mat-item-title\" data-mat=\"mi-kerpic\">Divar</span>\n            <span class=\"mat-chev\" id=\"chev-mi-kerpic\">▾</span>\n          </div>\n          <div class=\"mat-item-body\" id=\"mi-kerpic\"><div class=\"mat-item-body-inner\">\n            <label for=\"kerpicSecim\">Hazır ölçü</label>\n            <select id=\"kerpicSecim\">\n              <option value=\"adi\">kərpic · 250×120×65</option>\n            </select>\n            <p class=\"hint\" id=\"unitNote\" style=\"margin:8px 0 0;\"></p>\n            <div class=\"row hidden\" id=\"unitDims\" style=\"margin-top:12px;\">\n              <div><label for=\"kUzun\">Uzunluq, mm</label><input type=\"number\" id=\"kUzun\" value=\"250\"></div>\n              <div><label for=\"kEn\">En, mm</label><input type=\"number\" id=\"kEn\" value=\"120\"></div>\n              <div><label for=\"kHund\">Hündürlük, mm</label><input type=\"number\" id=\"kHund\" value=\"65\"></div>\n            </div>\n            <div class=\"row\">\n              <div>\n                <label for=\"tikis\">Tikiş, mm</label>\n                <input type=\"number\" id=\"tikis\" value=\"10\" min=\"0\" step=\"1\">\n              </div>\n              <div>\n                <label for=\"divarQalinliq\">Divar qalınlığı</label>\n                <select id=\"divarQalinliq\">\n                  <option value=\"120\">120 mm — nazik</option>\n                  <option value=\"250\" selected>250 mm — adi</option>\n                  <option value=\"380\">380 mm — qalın</option>\n                  <option value=\"510\">510 mm — iki kərpic</option>\n                  <option value=\"ferdi\">Özüm yazım</option>\n                </select>\n                <input type=\"number\" id=\"qalinliqFerdi\" class=\"custom-thick\" placeholder=\"məs. 300\">\n              </div>\n            </div>\n            <label for=\"qKerpic\">1 ədədin qiyməti, AZN</label>\n            <input type=\"number\" id=\"qKerpic\" value=\"0.35\" step=\"0.01\">\n          </div></div>\n        </div>\n\n        <div class=\"mat-item\">\n          <div class=\"mat-item-header\">\n            <input type=\"checkbox\" id=\"c-sement\" checked>\n            <span class=\"mat-item-title\" data-mat=\"mi-sement\">Sement</span>\n            <span class=\"mat-chev\" id=\"chev-mi-sement\">▾</span>\n          </div>\n          <div class=\"mat-item-body\" id=\"mi-sement\"><div class=\"mat-item-body-inner\">\n            <div class=\"row\">\n              <div><label for=\"p-sement\">1 m²-ə kq</label><input type=\"number\" id=\"p-sement\" value=\"17\"></div>\n              <div><label for=\"q-sement\">1 kq, AZN</label><input type=\"number\" id=\"q-sement\" value=\"0.25\" step=\"0.01\"></div>\n            </div>\n          </div></div>\n        </div>\n\n        <div class=\"mat-item\">\n          <div class=\"mat-item-header\">\n            <input type=\"checkbox\" id=\"c-boya\" checked>\n            <span class=\"mat-item-title\" data-mat=\"mi-boya\">Boya</span>\n            <span class=\"mat-chev\" id=\"chev-mi-boya\">▾</span>\n          </div>\n          <div class=\"mat-item-body\" id=\"mi-boya\"><div class=\"mat-item-body-inner\">\n            <div class=\"row\">\n              <div><label for=\"p-boya\">1 m²-ə litr</label><input type=\"number\" id=\"p-boya\" value=\"0.2\" step=\"0.01\"></div>\n              <div><label for=\"q-boya\">1 litr, AZN</label><input type=\"number\" id=\"q-boya\" value=\"6\" step=\"0.1\"></div>\n            </div>\n          </div></div>\n        </div>\n\n        <div class=\"mat-item\">\n          <div class=\"mat-item-header\">\n            <input type=\"checkbox\" id=\"c-kafel\" checked>\n            <span class=\"mat-item-title\" data-mat=\"mi-kafel\">Döşəmə</span>\n            <span class=\"mat-chev\" id=\"chev-mi-kafel\">▾</span>\n          </div>\n          <div class=\"mat-item-body\" id=\"mi-kafel\"><div class=\"mat-item-body-inner\">\n            <div class=\"row\">\n              <div><label for=\"p-kafel\">Ehtiyat, 1.1 = 10%</label><input type=\"number\" id=\"p-kafel\" value=\"1.1\" step=\"0.01\"></div>\n              <div><label for=\"q-kafel\">1 m², AZN</label><input type=\"number\" id=\"q-kafel\" value=\"12\" step=\"0.1\"></div>\n            </div>\n          </div></div>\n        </div>\n      </div></div>\n    </div>\n\n    <p class=\"hint\">Qapı və pəncərə divar materialından çıxılır. Layihə bu telefonda yadda qalır.</p>\n    <div class=\"site-foot\">Nibras · nibrascode.com</div>\n  </div>\n</div>\n";
var ORDER$1 = [
	"az",
	"en",
	"tr",
	"ar",
	"ru"
];
function cell(row, lang) {
	return row[ORDER$1.indexOf(lang)];
}
var CHROME = [
	[
		"Evin ölçüsünü seç. Materialın sayı və qiyməti özü hesablanır.",
		"Enter the house size. Material counts and prices are calculated for you.",
		"Ev ölçüsünü seç. Malzeme adedi ve fiyatı kendiliğinden hesaplanır.",
		"اختر مقاس البيت. يُحسب عدد المواد وسعرها وحدهما.",
		"Введите размеры дома. Количество и цена материалов считаются сами."
	],
	[
		"Son layihəyə davam et",
		"Continue last project",
		"Son projeye devam et",
		"تابع آخر مشروع",
		"Продолжить последний проект"
	],
	[
		"Rəqəmi dəyişən kimi qiymət yenilənir",
		"The price updates as you change a number",
		"Rakam değişince fiyat yenilenir",
		"يتحدّث السعر كلما غيّرت رقماً",
		"Цена обновляется, как только меняется число"
	],
	[
		"Evin eni və otaq sayı",
		"Width and room count",
		"Evin eni ve oda sayısı",
		"عرض البيت وعدد الغرف",
		"Ширина дома и число комнат"
	],
	[
		"Material və məbləğ",
		"Materials and total",
		"Malzeme ve tutar",
		"المواد والمبلغ",
		"Материалы и сумма"
	],
	[
		"Barmağınla fırlat. Addım seçəndə ev o mərhələyə qədər tikilir.",
		"Drag to rotate. The house builds up to the step you pick.",
		"Parmağınla döndür. Adım seçilince ev o aşamaya kadar kurulur.",
		"أدر بإصبعك. عند اختيار الخطوة يُبنى البيت حتى تلك المرحلة.",
		"Крутите пальцем. Дом строится до выбранного шага."
	],
	[
		"Divara toxun — qapı və ya pəncərə qoy. Sonra tutub yerini dəyiş.",
		"Tap a wall to place a door or window. Then drag it.",
		"Duvara dokun — kapı veya pencere koy. Sonra tutup yerini değiştir.",
		"المس الجدار لوضع باب أو نافذة. ثم اسحب لتغيير المكان.",
		"Коснитесь стены — поставьте дверь или окно. Потом перетащите."
	],
	[
		"İşarəni götürsən, həmin sətir cəmdən çıxır. Qiyməti öz bazarına görə yaz.",
		"Uncheck a row to drop it from the total. Type the price for your market.",
		"İşareti kaldırırsan o satır toplamdan çıkar. Fiyatı kendi pazarına göre yaz.",
		"أزل العلامة ليخرج السطر من المجموع. اكتب السعر حسب سوقك.",
		"Снимите галочку — строка выйдет из суммы. Цену пишите по своему рынку."
	],
	[
		"Qapı və pəncərə divar materialından çıxılır. Layihə bu telefonda yadda qalır.",
		"Doors and windows are subtracted from the wall material. The project stays on this phone.",
		"Kapı ve pencere duvar malzemesinden düşülür. Proje bu telefonda kalır.",
		"يُخصم الباب والنافذة من مادة الجدار. يبقى المشروع على هذا الهاتف.",
		"Двери и окна вычитаются из материала стены. Проект остаётся на этом телефоне."
	],
	[
		"4. Material və qiymət",
		"4. Materials and price",
		"4. Malzeme ve fiyat",
		"4. المواد والسعر",
		"4. Материалы и цена"
	],
	[
		"Əsas giriş qapısı",
		"Main entrance",
		"Ana giriş kapısı",
		"باب المدخل الرئيسي",
		"Главная входная дверь"
	],
	[
		"510 mm — iki kərpic",
		"510 mm — two bricks",
		"510 mm — iki tuğla",
		"510 مم — طوبتان",
		"510 мм — два кирпича"
	],
	[
		"120 mm — nazik",
		"120 mm — thin",
		"120 mm — ince",
		"120 مم — رقيق",
		"120 мм — тонкая"
	],
	[
		"250 mm — adi",
		"250 mm — standard",
		"250 mm — normal",
		"250 مم — عادي",
		"250 мм — обычная"
	],
	[
		"380 mm — qalın",
		"380 mm — thick",
		"380 mm — kalın",
		"380 مم — سميك",
		"380 мм — толстая"
	],
	[
		"Divar qalınlığı",
		"Wall thickness",
		"Duvar kalınlığı",
		"سُمك الجدار",
		"Толщина стены"
	],
	[
		"1 ədədin qiyməti, AZN",
		"Price per piece, AZN",
		"1 adet fiyatı, AZN",
		"سعر القطعة، AZN",
		"Цена 1 штуки, AZN"
	],
	[
		"Ehtiyat, 1.1 = 10%",
		"Extra, 1.1 = 10%",
		"Pay, 1.1 = %10",
		"احتياط، 1.1 = 10%",
		"Запас, 1.1 = 10%"
	],
	[
		"Bu adıma qədər",
		"Up to this step",
		"Bu adıma kadar",
		"حتى هذه الخطوة",
		"До этого шага"
	],
	[
		"Kiçik ev · 8×5",
		"Small house · 8×5",
		"Küçük ev · 8×5",
		"بيت صغير · 8×5",
		"Маленький дом · 8×5"
	],
	[
		"Orta ev · 10×6",
		"Medium house · 10×6",
		"Orta ev · 10×6",
		"بيت متوسط · 10×6",
		"Средний дом · 10×6"
	],
	[
		"Böyük ev · 12×9",
		"Large house · 12×9",
		"Büyük ev · 12×9",
		"بيت كبير · 12×9",
		"Большой дом · 12×9"
	],
	[
		"Tikinti forması",
		"Building type",
		"Yapı biçimi",
		"شكل البناء",
		"Тип постройки"
	],
	[
		"Tikinti addımı",
		"Building step",
		"Yapı adımı",
		"خطوة البناء",
		"Шаг стройки"
	],
	[
		"Hündürlük, mm",
		"Height, mm",
		"Yükseklik, mm",
		"الارتفاع، مم",
		"Высота, мм"
	],
	[
		"Hündürlük, m",
		"Height, m",
		"Yükseklik, m",
		"الارتفاع، م",
		"Высота, м"
	],
	[
		"Uzunluq, mm",
		"Length, mm",
		"Uzunluk, mm",
		"الطول، مم",
		"Длина, мм"
	],
	[
		"Uzunluq, m",
		"Length, m",
		"Uzunluk, m",
		"الطول، م",
		"Длина, м"
	],
	[
		"Qapı və pəncərə",
		"Doors and windows",
		"Kapı ve pencere",
		"الباب والنافذة",
		"Дверь и окно"
	],
	[
		"Neçə otaq",
		"How many rooms",
		"Kaç oda",
		"كم غرفة",
		"Сколько комнат"
	],
	[
		"Hazır ölçü",
		"Standard size",
		"Hazır ölçü",
		"مقاس جاهز",
		"Готовый размер"
	],
	[
		"Tikiş, mm",
		"Joint, mm",
		"Derz, mm",
		"الفاصل، مم",
		"Шов, мм"
	],
	[
		"1 m²-ə litr",
		"Litres per m²",
		"1 m²'ye litre",
		"لتر لكل م²",
		"Литров на м²"
	],
	[
		"1 m²-ə kq",
		"kg per m²",
		"1 m²'ye kg",
		"كغ لكل م²",
		"кг на м²"
	],
	[
		"1 litr, AZN",
		"1 litre, AZN",
		"1 litre, AZN",
		"1 لتر، AZN",
		"1 литр, AZN"
	],
	[
		"1 kq, AZN",
		"1 kg, AZN",
		"1 kg, AZN",
		"1 كغ، AZN",
		"1 кг, AZN"
	],
	[
		"1 m², AZN",
		"1 m², AZN",
		"1 m², AZN",
		"1 م²، AZN",
		"1 м², AZN"
	],
	[
		"Ölçünü yaz",
		"Enter the size",
		"Ölçüyü yaz",
		"اكتب المقاس",
		"Введите размер"
	],
	[
		"Özüm yazım",
		"Custom",
		"Kendim yazayım",
		"أكتب بنفسي",
		"Свой размер"
	],
	[
		"məs. 300",
		"e.g. 300",
		"ör. 300",
		"مثلاً 300",
		"напр. 300"
	],
	[
		"← Geri",
		"← Back",
		"← Geri",
		"← رجوع",
		"← Назад"
	],
	[
		"1. Ölçü",
		"1. Size",
		"1. Ölçü",
		"1. المقاس",
		"1. Размер"
	],
	[
		"2. Model",
		"2. Model",
		"2. Model",
		"2. النموذج",
		"2. Модель"
	],
	[
		"2. Plan",
		"2. Plan",
		"2. Plan",
		"2. المخطط",
		"2. План"
	],
	[
		"3. Plan",
		"3. Plan",
		"3. Plan",
		"3. المخطط",
		"3. План"
	],
	[
		"3. Qiymət",
		"3. Price",
		"3. Fiyat",
		"3. السعر",
		"3. Цена"
	],
	[
		"5/5 · Dam",
		"5/5 · Roof",
		"5/5 · Çatı",
		"5/5 · السقف",
		"5/5 · Крыша"
	],
	[
		"Çap et",
		"Print",
		"Yazdır",
		"اطبع",
		"Печать"
	],
	[
		"Kopyala",
		"Copy",
		"Kopyala",
		"انسخ",
		"Копировать"
	],
	[
		"Başla",
		"Start",
		"Başla",
		"ابدأ",
		"Начать"
	],
	[
		"Smeta",
		"Estimate",
		"Keşif",
		"التقدير",
		"Смета"
	],
	[
		"Cəmi",
		"Total",
		"Toplam",
		"المجموع",
		"Итого"
	],
	[
		"Təməl",
		"Foundation",
		"Temel",
		"الأساس",
		"Фундамент"
	],
	[
		"Suvaq",
		"Plaster",
		"Sıva",
		"اللياسة",
		"Штукатурка"
	],
	[
		"Döşəmə",
		"Floor",
		"Döşeme",
		"الأرضية",
		"Пол"
	],
	[
		"Sement",
		"Cement",
		"Çimento",
		"إسمنت",
		"Цемент"
	],
	[
		"Pəncərə",
		"Window",
		"Pencere",
		"نافذة",
		"Окно"
	],
	[
		"Giriş",
		"Entrance",
		"Giriş",
		"مدخل",
		"Вход"
	],
	[
		"Divar",
		"Wall",
		"Duvar",
		"جدار",
		"Стена"
	],
	[
		"Qapı",
		"Door",
		"Kapı",
		"باب",
		"Дверь"
	],
	[
		"Otaq",
		"Rooms",
		"Odalar",
		"غرف",
		"Комнаты"
	],
	[
		"Boya",
		"Paint",
		"Boya",
		"دهان",
		"Краска"
	],
	[
		"Günəş",
		"Sun",
		"Güneş",
		"شمس",
		"Солнце"
	],
	[
		"Axşam",
		"Evening",
		"Akşam",
		"مساء",
		"Вечер"
	],
	[
		"Gecə",
		"Night",
		"Gece",
		"ليل",
		"Ночь"
	],
	[
		"Böyüt",
		"Zoom in",
		"Büyüt",
		"كبّر",
		"Ближе"
	],
	[
		"Kiçilt",
		"Zoom out",
		"Küçült",
		"صغّر",
		"Дальше"
	],
	[
		"Dam",
		"Roof",
		"Çatı",
		"سقف",
		"Крыша"
	],
	[
		"Gün",
		"Day",
		"Gün",
		"نهار",
		"День"
	],
	[
		"Qar",
		"Snow",
		"Kar",
		"ثلج",
		"Снег"
	],
	[
		"Qoy",
		"Place",
		"Koy",
		"ضع",
		"Поставить"
	],
	[
		"Sil",
		"Delete",
		"Sil",
		"احذف",
		"Удалить"
	],
	[
		"Bağla",
		"Close",
		"Kapat",
		"أغلق",
		"Закрыть"
	],
	[
		"Azərbaycan — Kərpic hörgü",
		"Azerbaijan — Brickwork",
		"Azerbaycan — Tuğla duvar",
		"أذربيجان — بناء طوب",
		"Азербайджан — Кирпичная кладка"
	],
	[
		"Hündürlük:",
		"Height:",
		"Yükseklik:",
		"الارتفاع:",
		"Высота:"
	],
	[
		"Uzunluq:",
		"Length:",
		"Uzunluk:",
		"الطول:",
		"Длина:"
	],
	[
		"En:",
		"Width:",
		"En:",
		"العرض:",
		"Ширина:"
	],
	[
		"En, m",
		"Width, m",
		"En, m",
		"العرض، م",
		"Ширина, м"
	]
];
var COUNTRY = {
	Azərbaycan: [
		"Azərbaycan",
		"Azerbaijan",
		"Azerbaycan",
		"أذربيجان",
		"Азербайджан"
	],
	Türkiyə: [
		"Türkiyə",
		"Turkey",
		"Türkiye",
		"تركيا",
		"Турция"
	],
	Almaniya: [
		"Almaniya",
		"Germany",
		"Almanya",
		"ألمانيا",
		"Германия"
	],
	"Böyük Britaniya": [
		"Böyük Britaniya",
		"United Kingdom",
		"Birleşik Krallık",
		"بريطانيا",
		"Великобритания"
	],
	ABŞ: [
		"ABŞ",
		"United States",
		"ABD",
		"الولايات المتحدة",
		"США"
	],
	Avstraliya: [
		"Avstraliya",
		"Australia",
		"Avustralya",
		"أستراليا",
		"Австралия"
	],
	Hindistan: [
		"Hindistan",
		"India",
		"Hindistan",
		"الهند",
		"Индия"
	],
	Çin: [
		"Çin",
		"China",
		"Çin",
		"الصين",
		"Китай"
	],
	İran: [
		"İran",
		"Iran",
		"İran",
		"إيران",
		"Иран"
	],
	Misir: [
		"Misir",
		"Egypt",
		"Mısır",
		"مصر",
		"Египет"
	],
	Fransa: [
		"Fransa",
		"France",
		"Fransa",
		"فرنسا",
		"Франция"
	],
	"BƏƏ və Körfəz": [
		"BƏƏ və Körfəz",
		"UAE and the Gulf",
		"BAE ve Körfez",
		"الإمارات والخليج",
		"ОАЭ и Залив"
	]
};
var UNIT_TITLE = {
	adi: [
		"Adi kərpic",
		"Common brick",
		"Normal tuğla",
		"طوب عادي",
		"Обычный кирпич"
	],
	birbucaq: [
		"Birbuçaqlı kərpic",
		"One-and-a-half brick",
		"Bir buçuk tuğla",
		"طوب بسمك ونصف",
		"Полуторный кирпич"
	],
	ikiqat: [
		"İkiqat kərpic",
		"Double brick",
		"Çift tuğla",
		"طوب مزدوج",
		"Двойной кирпич"
	],
	silikat: [
		"Silikat kərpic",
		"Sand-lime brick",
		"Silikat tuğla",
		"طوب سيليكات",
		"Силикатный кирпич"
	],
	bos: [
		"Deşikli kərpic",
		"Hollow brick",
		"Delikli tuğla",
		"طوب مفرّغ",
		"Пустотелый кирпич"
	],
	qazbeton: [
		"Qazbeton blok",
		"Aerated block",
		"Gazbeton blok",
		"بلوك خرسانة خلوية",
		"Газобетонный блок"
	],
	"tr-harman": [
		"Harman kərpici",
		"Handmade brick",
		"Harman tuğlası",
		"طوب يدوي",
		"Кирпич ручной формовки"
	],
	"tr-delik": [
		"Deşikli kərpic",
		"Perforated brick",
		"Delikli tuğla",
		"طوب مثقوب",
		"Дырчатый кирпич"
	],
	"tr-bims": [
		"Bims blok",
		"Pumice block",
		"Bims blok",
		"بلوك خفّان",
		"Пемзоблок"
	],
	"tr-gaz": [
		"Qazbeton",
		"Aerated concrete",
		"Gazbeton",
		"خرسانة خلوية",
		"Газобетон"
	],
	"de-nf": [
		"Normal kərpic",
		"Standard brick",
		"Normal tuğla",
		"طوب قياسي",
		"Стандартный кирпич"
	],
	"de-df": [
		"Nazik kərpic",
		"Thin brick",
		"İnce tuğla",
		"طوب رقيق",
		"Тонкий кирпич"
	],
	uk: [
		"Standart kərpic",
		"Standard brick",
		"Standart tuğla",
		"طوب قياسي",
		"Стандартный кирпич"
	],
	"us-brick": [
		"Modul kərpic",
		"Modular brick",
		"Modüler tuğla",
		"طوب معياري",
		"Модульный кирпич"
	],
	"us-cmu": [
		"Beton blok",
		"Concrete block",
		"Beton blok",
		"بلوك خرساني",
		"Бетонный блок"
	],
	au: [
		"Standart kərpic",
		"Standard brick",
		"Standart tuğla",
		"طوب قياسي",
		"Стандартный кирпич"
	],
	in: [
		"Modul kərpic",
		"Modular brick",
		"Modüler tuğla",
		"طوب معياري",
		"Модульный кирпич"
	],
	cn: [
		"Standart kərpic",
		"Standard brick",
		"Standart tuğla",
		"طوب قياسي",
		"Стандартный кирпич"
	],
	ir: [
		"Sıxılmış kərpic",
		"Pressed brick",
		"Sıkıştırılmış tuğla",
		"طوب مضغوط",
		"Прессованный кирпич"
	],
	eg: [
		"Qırmızı kərpic",
		"Red brick",
		"Kırmızı tuğla",
		"طوب أحمر",
		"Красный кирпич"
	],
	"fr-brique": [
		"Kərpic",
		"Brick",
		"Tuğla",
		"طوب",
		"Кирпич"
	],
	"fr-parpaing": [
		"Beton blok",
		"Concrete block",
		"Beton blok",
		"بلوك خرساني",
		"Бетонный блок"
	],
	gulf: [
		"Beton blok",
		"Concrete block",
		"Beton blok",
		"بلوك خرساني",
		"Бетонный блок"
	]
};
var FORM_TITLE = {
	"az-brick": [
		"Kərpic hörgü",
		"Brickwork",
		"Tuğla duvar",
		"بناء طوب",
		"Кирпичная кладка"
	],
	"az-qaz": [
		"Qazbeton",
		"Aerated concrete",
		"Gazbeton",
		"خرسانة خلوية",
		"Газобетон"
	],
	"tr-karkas": [
		"Beton karkas",
		"Concrete frame",
		"Betonarme karkas",
		"هيكل خرساني",
		"Бетонный каркас"
	],
	"de-ziegel": [
		"Dik dam",
		"Steep roof",
		"Dik çatı",
		"سقف حاد",
		"Крутая крыша"
	],
	"uk-cavity": [
		"İkiqat divar",
		"Cavity wall",
		"Boşluklu duvar",
		"جدار مزدوج",
		"Двойная стена"
	],
	"us-wood": [
		"Taxta karkas",
		"Wood frame",
		"Ahşap karkas",
		"هيكل خشبي",
		"Деревянный каркас"
	],
	"au-veneer": [
		"Kərpic üzlük",
		"Brick veneer",
		"Tuğla kaplama",
		"كسوة طوب",
		"Кирпичная облицовка"
	],
	"fr-parpaing": [
		"Beton blok",
		"Concrete block",
		"Beton blok",
		"بلوك خرساني",
		"Бетонный блок"
	],
	"in-rcc": [
		"Beton karkas",
		"Concrete frame",
		"Betonarme",
		"هيكل خرساني",
		"Бетонный каркас"
	],
	"eg-flat": [
		"Düz dam",
		"Flat roof",
		"Düz çatı",
		"سقف مسطح",
		"Плоская крыша"
	],
	"gulf-block": [
		"Beton blok",
		"Concrete block",
		"Beton blok",
		"بلوك خرساني",
		"Бетонный блок"
	],
	"cn-brick": [
		"Kərpic-beton",
		"Brick and concrete",
		"Tuğla-beton",
		"طوب وخرسانة",
		"Кирпич и бетон"
	],
	"ir-brick": [
		"Kərpic hörgü",
		"Brickwork",
		"Tuğla duvar",
		"بناء طوب",
		"Кирпичная кладка"
	]
};
var FORM_NOTE = {
	"az-brick": [
		"Daşıyıcı kərpic divar, kirəmit dam.",
		"Load-bearing brick wall, tile roof.",
		"Taşıyıcı tuğla duvar, kiremit çatı.",
		"جدار طوب حامل، سقف قرميد.",
		"Несущая кирпичная стена, черепичная крыша."
	],
	"az-qaz": [
		"Blok divar, kirəmit dam.",
		"Block wall, tile roof.",
		"Blok duvar, kiremit çatı.",
		"جدار بلوك، سقف قرميد.",
		"Стена из блоков, черепичная крыша."
	],
	"tr-karkas": [
		"Beton sütun, arası tuğla. Kirəmit dam.",
		"Concrete columns, brick infill. Tile roof.",
		"Beton kolon, arası tuğla. Kiremit çatı.",
		"أعمدة خرسانية وبينها طوب. سقف قرميد.",
		"Бетонные колонны, заполнение кирпичом. Черепичная крыша."
	],
	"de-ziegel": [
		"Kərpic hörgü, dik kirəmit dam.",
		"Brickwork, steep tile roof.",
		"Tuğla duvar, dik kiremit çatı.",
		"بناء طوب، سقف قرميد حاد.",
		"Кирпичная кладка, крутая черепичная крыша."
	],
	"uk-cavity": [
		"Çöldə kərpic, içəridə blok, arada boşluq.",
		"Brick outside, block inside, a gap between.",
		"Dışta tuğla, içte blok, arada boşluk.",
		"طوب من الخارج وبلوك من الداخل وبينهما فراغ.",
		"Снаружи кирпич, внутри блок, между ними зазор."
	],
	"us-wood": [
		"Dirəklər 40 sm aralı. Üstü şingl dam.",
		"Studs 40 cm apart. Shingle roof.",
		"Dikmeler 40 cm arayla. Şıngıl çatı.",
		"قوائم كل 40 سم. سقف ألواح.",
		"Стойки через 40 см. Гонтовая крыша."
	],
	"au-veneer": [
		"İçəridə taxta, çöldə bir sıra kərpic.",
		"Timber inside, one row of brick outside.",
		"İçte ahşap, dışta bir sıra tuğla.",
		"خشب من الداخل وصف طوب من الخارج.",
		"Внутри дерево, снаружи один ряд кирпича."
	],
	"fr-parpaing": [
		"Blok hörülür, üstü suvaq. Kirəmit dam.",
		"Blockwork, then plaster. Tile roof.",
		"Blok örülür, üstü sıva. Kiremit çatı.",
		"بلوك ثم لياسة. سقف قرميد.",
		"Кладка из блоков, затем штукатурка. Черепичная крыша."
	],
	"in-rcc": [
		"Beton sütun, arası kərpic. Düz dam.",
		"Concrete columns, brick infill. Flat roof.",
		"Beton kolon, arası tuğla. Düz çatı.",
		"أعمدة خرسانية وبينها طوب. سقف مسطح.",
		"Бетонные колонны, заполнение кирпичом. Плоская крыша."
	],
	"eg-flat": [
		"Qırmızı kərpic, beton düz dam.",
		"Red brick, flat concrete roof.",
		"Kırmızı tuğla, beton düz çatı.",
		"طوب أحمر وسقف خرساني مسطح.",
		"Красный кирпич, плоская бетонная крыша."
	],
	"gulf-block": [
		"Blok divar, düz dam, alçaq parapet.",
		"Block wall, flat roof, low parapet.",
		"Blok duvar, düz çatı, alçak parapet.",
		"جدار بلوك وسقف مسطح وحاجز منخفض.",
		"Стена из блоков, плоская крыша, низкий парапет."
	],
	"cn-brick": [
		"Kərpic və beton. Az mailli dam.",
		"Brick and concrete. Low-slope roof.",
		"Tuğla ve beton. Az eğimli çatı.",
		"طوب وخرسانة. سقف قليل الميل.",
		"Кирпич и бетон. Кровля с малым уклоном."
	],
	"ir-brick": [
		"Kərpic divar, az mailli dam.",
		"Brick wall, low-slope roof.",
		"Tuğla duvar, az eğimli çatı.",
		"جدار طوب وسقف قليل الميل.",
		"Кирпичная стена, кровля с малым уклоном."
	]
};
var STAGE = [
	{
		name: [
			"1. Təməl",
			"1. Foundation",
			"1. Temel",
			"1. الأساس",
			"1. Фундамент"
		],
		short: [
			"Təməl",
			"Foundation",
			"Temel",
			"الأساس",
			"Фундамент"
		],
		blurb: [
			"Yalnız beton əsas görünür.",
			"Only the concrete base shows.",
			"Yalnız beton taban görünür.",
			"يظهر الأساس الخرساني فقط.",
			"Видно только бетонное основание."
		]
	},
	{
		name: [
			"2. Divar",
			"2. Wall",
			"2. Duvar",
			"2. الجدار",
			"2. Стена"
		],
		short: [
			"Divar",
			"Wall",
			"Duvar",
			"الجدار",
			"Стена"
		],
		blurb: [
			"Divarlar hörülür. Material xərci buradan başlayır.",
			"Walls go up. Material cost starts here.",
			"Duvarlar örülür. Malzeme gideri buradan başlar.",
			"تُبنى الجدران. تكلفة المادة تبدأ من هنا.",
			"Стены кладутся. Расход материала начинается здесь."
		]
	},
	{
		name: [
			"3. Otaq",
			"3. Rooms",
			"3. Odalar",
			"3. الغرف",
			"3. Комнаты"
		],
		short: [
			"Otaq",
			"Rooms",
			"Odalar",
			"الغرف",
			"Комнаты"
		],
		blurb: [
			"Dam yoxdur. Otaqlar yuxarıdan görünür.",
			"No roof. Rooms are visible from above.",
			"Çatı yok. Odalar yukarıdan görünür.",
			"لا سقف. الغرف تظهر من الأعلى.",
			"Крыши нет. Комнаты видны сверху."
		]
	},
	{
		name: [
			"4. Suvaq",
			"4. Plaster",
			"4. Sıva",
			"4. اللياسة",
			"4. Штукатурка"
		],
		short: [
			"Suvaq",
			"Plaster",
			"Sıva",
			"اللياسة",
			"Штукатурка"
		],
		blurb: [
			"Divar suvanır, döşəmə hazırlanır. Dam hələ açıqdır.",
			"Walls are plastered and the floor is prepared. The roof is still open.",
			"Duvar sıvanır, döşeme hazırlanır. Çatı hâlâ açık.",
			"يُليّس الجدار وتُجهّز الأرضية. السقف ما زال مفتوحاً.",
			"Стена штукатурится, пол готовится. Крыша ещё открыта."
		]
	},
	{
		name: [
			"5. Dam",
			"5. Roof",
			"5. Çatı",
			"5. السقف",
			"5. Крыша"
		],
		short: [
			"Dam",
			"Roof",
			"Çatı",
			"السقف",
			"Крыша"
		],
		blurb: [
			"Dam bağlanır. Aşağıdakı məbləğ tam smetadır.",
			"The roof closes. The amount below is the full estimate.",
			"Çatı kapanır. Aşağıdaki tutar tam keşiftir.",
			"يُغلق السقف. المبلغ أدناه هو التقدير الكامل.",
			"Крыша закрывается. Сумма ниже — полная смета."
		]
	}
];
var WALL = {
	"ext-N": [
		"Arxa divar",
		"Back wall",
		"Arka duvar",
		"الجدار الخلفي",
		"Задняя стена"
	],
	"ext-S": [
		"Ön divar",
		"Front wall",
		"Ön duvar",
		"الجدار الأمامي",
		"Передняя стена"
	],
	"ext-E": [
		"Sağ divar",
		"Right wall",
		"Sağ duvar",
		"الجدار الأيمن",
		"Правая стена"
	],
	"ext-W": [
		"Sol divar",
		"Left wall",
		"Sol duvar",
		"الجدار الأيسر",
		"Левая стена"
	],
	room: [
		"Otaq bölməsi",
		"Room divider",
		"Oda bölmesi",
		"فاصل الغرفة",
		"Перегородка"
	]
};
function replacePhrase(html, from, to) {
	const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	return html.replace(new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, "gu"), () => to);
}
function langNav(lang) {
	return `<nav class="planner-langs" aria-label="Language">${ORDER$1.map((code) => {
		return `<a href="${code === "az" ? "/planner" : `/${code}/planner`}" lang="${code}"${code === lang ? " aria-current=\"page\"" : ""}>${code === "ar" ? "عربي" : code.toUpperCase()}</a>`;
	}).join("")}</nav>`;
}
function plannerMarkup(lang) {
	let html = PLANNER_MARKUP.replace(`<div class="home-actions">`, `${langNav(lang)}<div class="home-actions">`);
	if (lang === "az") return html;
	const rows = [...CHROME].sort((a, b) => b[0].length - a[0].length);
	for (const row of rows) html = replacePhrase(html, row[0], cell(row, lang));
	return html;
}
var LOCALE = {
	az: "az-AZ",
	en: "en-GB",
	tr: "tr-TR",
	ar: "ar",
	ru: "ru-RU"
};
function plannerCopy(lang) {
	const say = (row) => cell(row, lang);
	const named = (table, id, fallback) => table[id] ? say(table[id]) : fallback;
	return {
		locale: LOCALE[lang],
		country: (name) => named(COUNTRY, name, name),
		unitTitle: (id, fallback) => named(UNIT_TITLE, id, fallback),
		formTitle: (id, fallback) => named(FORM_TITLE, id, fallback),
		formNote: (id, fallback) => named(FORM_NOTE, id, fallback),
		stages: STAGE.map((stage) => ({
			name: say(stage.name),
			short: say(stage.short),
			blurb: say(stage.blurb)
		})),
		noteFoundation: say([
			" Təməl xərci bu smetada yoxdur.",
			" Foundation cost is not in this estimate.",
			" Temel gideri bu keşifte yok.",
			" تكلفة الأساس ليست في هذا التقدير.",
			" Расход на фундамент в эту смету не входит."
		]),
		noteRoof: say([
			" Dam ayrıca qiymətlənməyib.",
			" The roof is not priced separately.",
			" Çatı ayrıca fiyatlanmadı.",
			" السقف لم يُسعّر وحده.",
			" Крыша отдельно не оценена."
		]),
		upTo: say([
			"Bu mərhələyə qədər",
			"Up to this stage",
			"Bu aşamaya kadar",
			"حتى هذه المرحلة",
			"До этого этапа"
		]),
		customUnit: say([
			"Fərdi ölçü (özün yaz)",
			"Custom size (type your own)",
			"Özel ölçü (kendin yaz)",
			"مقاس خاص (اكتب بنفسك)",
			"Свой размер (впишите)"
		]),
		customSizeHint: say([
			"Ölçünü millimetrlə özün yaz.",
			"Enter the size in millimetres.",
			"Ölçüyü milimetreyle kendin yaz.",
			"اكتب المقاس بالمليمتر.",
			"Впишите размер в миллиметрах."
		]),
		unitNote: (country, local, wall) => say([
			`${country}: buna ${local} deyirlər. Divar adətən ${wall} mm olur.`,
			`${country}: locally called ${local}. A wall is usually ${wall} mm.`,
			`${country}: yerelde adı ${local}. Duvar genelde ${wall} mm olur.`,
			`${country}: يُسمّى محلياً ${local}. سُمك الجدار عادة ${wall} مم.`,
			`${country}: местное название — ${local}. Стена обычно ${wall} мм.`
		]),
		localName: say([
			"yerli adı",
			"local name",
			"yerel adı",
			"الاسم المحلي",
			"местное название"
		]),
		piecePrice: say([
			"1 ədədin qiyməti, AZN",
			"Price per piece, AZN",
			"1 adet fiyatı, AZN",
			"سعر القطعة، AZN",
			"Цена 1 штуки, AZN"
		]),
		studPrice: say([
			"1 dirəyin qiyməti, AZN",
			"Price of one stud, AZN",
			"1 dikmenin fiyatı, AZN",
			"سعر القائم، AZN",
			"Цена 1 стойки, AZN"
		]),
		element: say([
			"element",
			"piece",
			"parça",
			"قطعة",
			"элемент"
		]),
		studLine: (boards) => say([
			`Dirək — ${boards} əd (40 sm aralı)`,
			`Studs — ${boards} pcs (40 cm apart)`,
			`Dikme — ${boards} adet (40 cm arayla)`,
			`قوائم — ${boards} قطعة (كل 40 سم)`,
			`Стойки — ${boards} шт. (шаг 40 см)`
		]),
		pieceLine: (piece, count, layers) => say([
			`${piece} — ${count} əd (${layers} sıra)`,
			`${piece} — ${count} pcs (${layers} courses)`,
			`${piece} — ${count} adet (${layers} sıra)`,
			`${piece} — ${count} قطعة (${layers} صف)`,
			`${piece} — ${count} шт. (${layers} ряд.)`
		]),
		cementLine: (qty) => say([
			`Sement — ${qty} kg`,
			`Cement — ${qty} kg`,
			`Çimento — ${qty} kg`,
			`إسمنت — ${qty} كغ`,
			`Цемент — ${qty} кг`
		]),
		paintLine: (qty) => say([
			`Boya — ${qty} litr`,
			`Paint — ${qty} L`,
			`Boya — ${qty} litre`,
			`دهان — ${qty} لتر`,
			`Краска — ${qty} л`
		]),
		floorLine: (qty) => say([
			`Kafel/laminat — ${qty} m²`,
			`Tile/laminate — ${qty} m²`,
			`Fayans/laminat — ${qty} m²`,
			`بلاط/لامينيت — ${qty} م²`,
			`Плитка/ламинат — ${qty} м²`
		]),
		wallChip: (area) => say([
			`Divar ${area} m²`,
			`Wall ${area} m²`,
			`Duvar ${area} m²`,
			`جدار ${area} م²`,
			`Стена ${area} м²`
		]),
		floorChip: (area) => say([
			`Döşəmə ${area} m²`,
			`Floor ${area} m²`,
			`Döşeme ${area} m²`,
			`أرضية ${area} م²`,
			`Пол ${area} м²`
		]),
		openChip: (area) => say([
			`Açılış −${area} m²`,
			`Openings −${area} m²`,
			`Boşluk −${area} m²`,
			`فتحات −${area} م²`,
			`Проёмы −${area} м²`
		]),
		noOpen: say([
			"Açılış yoxdur",
			"No openings",
			"Boşluk yok",
			"لا فتحات",
			"Проёмов нет"
		]),
		dims: (length, width, height, rooms) => say([
			`Uzunluq: <b>${length}</b> m · En: <b>${width}</b> m · Hündürlük: <b>${height}</b> m · Otaq: <b>${rooms}</b>`,
			`Length: <b>${length}</b> m · Width: <b>${width}</b> m · Height: <b>${height}</b> m · Rooms: <b>${rooms}</b>`,
			`Uzunluk: <b>${length}</b> m · En: <b>${width}</b> m · Yükseklik: <b>${height}</b> m · Oda: <b>${rooms}</b>`,
			`الطول: <b>${length}</b> م · العرض: <b>${width}</b> م · الارتفاع: <b>${height}</b> م · الغرف: <b>${rooms}</b>`,
			`Длина: <b>${length}</b> м · Ширина: <b>${width}</b> м · Высота: <b>${height}</b> м · Комнаты: <b>${rooms}</b>`
		]),
		wall: (id) => named(WALL, id, say(WALL.room)),
		room: (n) => say([
			`Otaq ${n}`,
			`Room ${n}`,
			`Oda ${n}`,
			`غرفة ${n}`,
			`Комната ${n}`
		]),
		copied: say([
			"Kopyalandı",
			"Copied",
			"Kopyalandı",
			"تم النسخ",
			"Скопировано"
		]),
		estimateTitle: say([
			"Nibras smeta",
			"Nibras estimate",
			"Nibras keşif",
			"تقدير Nibras",
			"Смета Nibras"
		])
	};
}
var wallUnits = [
	{
		id: "adi",
		country: "Azərbaycan",
		title: "Adi kərpic",
		local: "kərpic",
		l: 250,
		w: 120,
		h: 65,
		wall: 250
	},
	{
		id: "birbucaq",
		country: "Azərbaycan",
		title: "Birbuçaqlı kərpic",
		local: "birbuçaqlı kərpic",
		l: 250,
		w: 120,
		h: 88,
		wall: 250
	},
	{
		id: "ikiqat",
		country: "Azərbaycan",
		title: "İkiqat kərpic",
		local: "ikiqat kərpic",
		l: 250,
		w: 120,
		h: 138,
		wall: 250
	},
	{
		id: "silikat",
		country: "Azərbaycan",
		title: "Silikat kərpic",
		local: "silikat",
		l: 250,
		w: 120,
		h: 65,
		wall: 250
	},
	{
		id: "bos",
		country: "Azərbaycan",
		title: "Deşikli kərpic",
		local: "boş kərpic",
		l: 250,
		w: 120,
		h: 138,
		wall: 250
	},
	{
		id: "qazbeton",
		country: "Azərbaycan",
		title: "Qazbeton blok",
		local: "qazbeton",
		l: 600,
		w: 200,
		h: 300,
		wall: 200
	},
	{
		id: "tr-harman",
		country: "Türkiyə",
		title: "Harman kərpici",
		local: "tuğla",
		l: 190,
		w: 90,
		h: 50,
		wall: 190
	},
	{
		id: "tr-delik",
		country: "Türkiyə",
		title: "Deşikli kərpic",
		local: "delikli tuğla",
		l: 190,
		w: 190,
		h: 135,
		wall: 190
	},
	{
		id: "tr-bims",
		country: "Türkiyə",
		title: "Bims blok",
		local: "bims",
		l: 390,
		w: 190,
		h: 185,
		wall: 190
	},
	{
		id: "tr-gaz",
		country: "Türkiyə",
		title: "Qazbeton",
		local: "gazbeton",
		l: 600,
		w: 250,
		h: 200,
		wall: 250
	},
	{
		id: "de-nf",
		country: "Almaniya",
		title: "Normal kərpic",
		local: "Ziegel NF",
		l: 240,
		w: 115,
		h: 71,
		wall: 240
	},
	{
		id: "de-df",
		country: "Almaniya",
		title: "Nazik kərpic",
		local: "Ziegel DF",
		l: 240,
		w: 115,
		h: 52,
		wall: 115
	},
	{
		id: "uk",
		country: "Böyük Britaniya",
		title: "Standart kərpic",
		local: "brick",
		l: 215,
		w: 102.5,
		h: 65,
		wall: 215
	},
	{
		id: "us-brick",
		country: "ABŞ",
		title: "Modul kərpic",
		local: "modular brick",
		l: 194,
		w: 92,
		h: 57,
		wall: 92
	},
	{
		id: "us-cmu",
		country: "ABŞ",
		title: "Beton blok",
		local: "CMU",
		l: 390,
		w: 190,
		h: 190,
		wall: 190
	},
	{
		id: "au",
		country: "Avstraliya",
		title: "Standart kərpic",
		local: "brick",
		l: 230,
		w: 110,
		h: 76,
		wall: 110
	},
	{
		id: "in",
		country: "Hindistan",
		title: "Modul kərpic",
		local: "ईंट",
		l: 190,
		w: 90,
		h: 90,
		wall: 190
	},
	{
		id: "cn",
		country: "Çin",
		title: "Standart kərpic",
		local: "砖",
		l: 240,
		w: 115,
		h: 53,
		wall: 240
	},
	{
		id: "ir",
		country: "İran",
		title: "Sıxılmış kərpic",
		local: "آجر",
		l: 220,
		w: 110,
		h: 55,
		wall: 220
	},
	{
		id: "eg",
		country: "Misir",
		title: "Qırmızı kərpic",
		local: "طوب",
		l: 250,
		w: 120,
		h: 60,
		wall: 120
	},
	{
		id: "fr-brique",
		country: "Fransa",
		title: "Kərpic",
		local: "brique",
		l: 220,
		w: 105,
		h: 55,
		wall: 220
	},
	{
		id: "fr-parpaing",
		country: "Fransa",
		title: "Beton blok",
		local: "parpaing",
		l: 500,
		w: 200,
		h: 200,
		wall: 200
	},
	{
		id: "gulf",
		country: "BƏƏ və Körfəz",
		title: "Beton blok",
		local: "بلوك",
		l: 400,
		w: 200,
		h: 200,
		wall: 200
	}
];
function unitById(id) {
	return wallUnits.find((unit) => unit.id === id);
}
var buildForms = [
	{
		id: "az-brick",
		country: "Azərbaycan",
		title: "Kərpic hörgü",
		local: "kərpic ev",
		note: "Daşıyıcı kərpic divar, kirəmit dam.",
		unit: "adi",
		roof: "tile",
		skin: "brick"
	},
	{
		id: "az-qaz",
		country: "Azərbaycan",
		title: "Qazbeton",
		local: "qazbeton",
		note: "Blok divar, kirəmit dam.",
		unit: "qazbeton",
		roof: "tile",
		skin: "block"
	},
	{
		id: "tr-karkas",
		country: "Türkiyə",
		title: "Beton karkas",
		local: "betonarme",
		note: "Beton sütun, arası tuğla. Kirəmit dam.",
		unit: "tr-delik",
		roof: "tile",
		skin: "brick"
	},
	{
		id: "de-ziegel",
		country: "Almaniya",
		title: "Dik dam",
		local: "Ziegelhaus",
		note: "Kərpic hörgü, dik kirəmit dam.",
		unit: "de-nf",
		roof: "steep",
		skin: "brick"
	},
	{
		id: "uk-cavity",
		country: "Böyük Britaniya",
		title: "İkiqat divar",
		local: "cavity wall",
		note: "Çöldə kərpic, içəridə blok, arada boşluq.",
		unit: "uk",
		roof: "tile",
		skin: "brick"
	},
	{
		id: "us-wood",
		country: "ABŞ",
		title: "Taxta karkas",
		local: "wood frame",
		note: "Dirəklər 40 sm aralı. Üstü şingl dam.",
		unit: "us-brick",
		roof: "shingle",
		skin: "wood"
	},
	{
		id: "au-veneer",
		country: "Avstraliya",
		title: "Kərpic üzlük",
		local: "brick veneer",
		note: "İçəridə taxta, çöldə bir sıra kərpic.",
		unit: "au",
		roof: "tile",
		skin: "brick"
	},
	{
		id: "fr-parpaing",
		country: "Fransa",
		title: "Beton blok",
		local: "parpaing",
		note: "Blok hörülür, üstü suvaq. Kirəmit dam.",
		unit: "fr-parpaing",
		roof: "tile",
		skin: "plaster"
	},
	{
		id: "in-rcc",
		country: "Hindistan",
		title: "Beton karkas",
		local: "RCC",
		note: "Beton sütun, arası kərpic. Düz dam.",
		unit: "in",
		roof: "flat",
		skin: "brick"
	},
	{
		id: "eg-flat",
		country: "Misir",
		title: "Düz dam",
		local: "طوب",
		note: "Qırmızı kərpic, beton düz dam.",
		unit: "eg",
		roof: "flat",
		skin: "brick"
	},
	{
		id: "gulf-block",
		country: "BƏƏ və Körfəz",
		title: "Beton blok",
		local: "بلوك",
		note: "Blok divar, düz dam, alçaq parapet.",
		unit: "gulf",
		roof: "flat",
		skin: "block"
	},
	{
		id: "cn-brick",
		country: "Çin",
		title: "Kərpic-beton",
		local: "砖混",
		note: "Kərpic və beton. Az mailli dam.",
		unit: "cn",
		roof: "low",
		skin: "brick"
	},
	{
		id: "ir-brick",
		country: "İran",
		title: "Kərpic hörgü",
		local: "آجر",
		note: "Kərpic divar, az mailli dam.",
		unit: "ir",
		roof: "low",
		skin: "brick"
	}
];
function formById(id) {
	return buildForms.find((form) => form.id === id) || buildForms[0];
}
var stageDefs = [
	{
		name: "1. Təməl",
		short: "Təməl",
		blurb: "Yalnız beton əsas görünür.",
		parts: ["bottom"],
		keys: []
	},
	{
		name: "2. Divar",
		short: "Divar",
		blurb: "Divarlar hörülür. Material xərci buradan başlayır.",
		parts: ["bottom", "walls"],
		keys: ["kerpic"]
	},
	{
		name: "3. Otaq",
		short: "Otaq",
		blurb: "Dam yoxdur. Otaqlar yuxarıdan görünür.",
		parts: [
			"bottom",
			"walls",
			"interior"
		],
		keys: ["kerpic"]
	},
	{
		name: "4. Suvaq",
		short: "Suvaq",
		blurb: "Divar suvanır, döşəmə hazırlanır. Dam hələ açıqdır.",
		parts: [
			"bottom",
			"walls",
			"interior"
		],
		keys: [
			"kerpic",
			"suvaq",
			"bitirme"
		]
	},
	{
		name: "5. Dam",
		short: "Dam",
		blurb: "Dam bağlanır. Aşağıdakı məbləğ tam smetadır.",
		parts: [
			"bottom",
			"walls",
			"roof",
			"interior"
		],
		keys: [
			"kerpic",
			"suvaq",
			"bitirme"
		]
	}
];
function must(id) {
	const el = document.getElementById(id);
	if (!el) throw new Error(`Nibras Planner: #${id} tapılmadı`);
	return el;
}
function mountPlanner(root, lang = "az") {
	const copy = plannerCopy(lang);
	const cleanups = [];
	const on = (el, type, fn, opts) => {
		if (!el) return;
		el.addEventListener(type, fn, opts);
		cleanups.push(() => el.removeEventListener(type, fn, opts));
	};
	const home = must("home");
	const project = must("project");
	const cube = must("cube");
	const scene = must("scene");
	const anaSehife = () => {
		project.classList.add("hidden");
		home.classList.remove("hidden");
		allowSave = false;
		showContinue();
	};
	const yeniLayihe = () => {
		localStorage.removeItem(saveKey);
		planState.n = 0;
		planState.items = {};
		openingsReady = false;
		must("uzunluq").value = "10";
		must("en").value = "6";
		must("hund").value = "3";
		must("otaqSayi").value = "3";
		home.classList.add("hidden");
		project.classList.remove("hidden");
		allowSave = true;
		hesabla();
	};
	const devamEt = () => {
		const data = readSave();
		if (!data) return yeniLayihe();
		applySave(data);
		home.classList.add("hidden");
		project.classList.remove("hidden");
		allowSave = true;
		hesabla();
	};
	const togglePanel = (id) => {
		must(id).classList.toggle("open");
	};
	const toggleMat = (id) => {
		must(id).parentElement?.classList.toggle("open");
	};
	const applyWallThickness = (mm) => {
		const thick = must("divarQalinliq");
		if (Array.from(thick.options).some((option) => option.value === String(mm))) {
			thick.value = String(mm);
			must("qalinliqFerdi").style.display = "none";
		} else {
			thick.value = "ferdi";
			must("qalinliqFerdi").value = String(mm);
			must("qalinliqFerdi").style.display = "block";
		}
	};
	const refreshUnitNote = () => {
		const unit = unitById(must("kerpicSecim").value);
		must("unitDims").classList.toggle("hidden", Boolean(unit));
		must("unitNote").textContent = unit ? copy.unitNote(copy.country(unit.country), unit.local, unit.wall) : copy.customSizeHint;
		if (document.getElementById("evForm")) refreshFormNote();
	};
	const fillUnitSelect = () => {
		const sel = must("kerpicSecim");
		const current = sel.value || "adi";
		sel.innerHTML = "";
		const groups = [];
		for (const unit of wallUnits) if (!groups.includes(unit.country)) groups.push(unit.country);
		for (const country of groups) {
			const group = document.createElement("optgroup");
			group.label = copy.country(country);
			for (const unit of wallUnits.filter((item) => item.country === country)) {
				const option = document.createElement("option");
				option.value = unit.id;
				option.textContent = `${unit.local} · ${copy.unitTitle(unit.id, unit.title)} — ${unit.l}×${unit.w}×${unit.h}`;
				group.appendChild(option);
			}
			sel.appendChild(group);
		}
		const custom = document.createElement("option");
		custom.value = "ferdi";
		custom.textContent = copy.customUnit;
		sel.appendChild(custom);
		sel.value = unitById(current) || current === "ferdi" ? current : "adi";
	};
	const kerpicSecimDeyisdi = () => {
		const secim = must("kerpicSecim").value;
		refreshUnitNote();
		if (secim === "ferdi") return;
		const unit = unitById(secim);
		if (!unit) return;
		must("kUzun").value = String(unit.l);
		must("kEn").value = String(unit.w);
		must("kHund").value = String(unit.h);
		applyWallThickness(unit.wall);
		hesabla();
	};
	const refreshFormNote = () => {
		const form = formById(must("evForm").value);
		must("formNote").textContent = `${copy.country(form.country)} — ${copy.localName}: ${form.local}. ${copy.formNote(form.id, form.note)}`;
		const priceLabel = root.querySelector("label[for=\"qKerpic\"]");
		if (priceLabel) priceLabel.textContent = form.skin === "wood" ? copy.studPrice : copy.piecePrice;
	};
	const fillFormSelect = () => {
		const sel = must("evForm");
		const current = sel.value || "az-brick";
		sel.innerHTML = "";
		for (const form of buildForms) {
			const option = document.createElement("option");
			option.value = form.id;
			option.textContent = `${copy.country(form.country)} — ${copy.formTitle(form.id, form.title)}`;
			sel.appendChild(option);
		}
		sel.value = buildForms.some((form) => form.id === current) ? current : "az-brick";
	};
	const formaDeyisdi = () => {
		const form = formById(must("evForm").value);
		const price = must("qKerpic");
		if (form.skin === "wood" && price.value === "0.35") price.value = "3.5";
		if (form.skin !== "wood" && price.value === "3.5") price.value = "0.35";
		must("kerpicSecim").value = form.unit;
		kerpicSecimDeyisdi();
	};
	const qalinliqDeyisdi = () => {
		const val = must("divarQalinliq").value;
		must("qalinliqFerdi").style.display = val === "ferdi" ? "block" : "none";
		hesabla();
	};
	let rotX = -18;
	let rotY = 208;
	let zoomScale = 1.12;
	let dragging = false;
	let lastX = 0;
	let lastY = 0;
	const activePointers = /* @__PURE__ */ new Map();
	let pinchStartDist = null;
	let pinchStartZoom = 1;
	let rafId = 0;
	const zoomBy = (delta) => {
		zoomScale = Math.max(.5, Math.min(2.5, zoomScale + delta));
	};
	const pointerDist = () => {
		const pts = [...activePointers.values()];
		if (pts.length < 2) return null;
		return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
	};
	const spinLoop = () => {
		rafId = requestAnimationFrame(spinLoop);
		if (!dragging && activePointers.size === 0) rotY += .07;
		cube.style.transform = `scale(${zoomScale}) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
	};
	on(scene, "pointerdown", (event) => {
		const e = event;
		activePointers.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		scene.setPointerCapture(e.pointerId);
		if (activePointers.size === 2) {
			pinchStartDist = pointerDist();
			pinchStartZoom = zoomScale;
			dragging = false;
		} else if (activePointers.size === 1) {
			dragging = true;
			lastX = e.clientX;
			lastY = e.clientY;
		}
	});
	on(scene, "pointermove", (event) => {
		const e = event;
		if (!activePointers.has(e.pointerId)) return;
		activePointers.set(e.pointerId, {
			x: e.clientX,
			y: e.clientY
		});
		if (activePointers.size === 2) {
			const d = pointerDist();
			if (pinchStartDist && d) zoomScale = Math.max(.5, Math.min(2.5, pinchStartZoom * (d / pinchStartDist)));
			return;
		}
		if (!dragging) return;
		rotY += (e.clientX - lastX) * .5;
		rotX -= (e.clientY - lastY) * .5;
		rotX = Math.max(-85, Math.min(85, rotX));
		lastX = e.clientX;
		lastY = e.clientY;
	});
	const endPointer = (event) => {
		const e = event;
		activePointers.delete(e.pointerId);
		if (activePointers.size < 2) pinchStartDist = null;
		dragging = activePointers.size === 1;
	};
	on(scene, "pointerup", endPointer);
	on(scene, "pointercancel", endPointer);
	on(scene, "wheel", (event) => {
		const e = event;
		e.preventDefault();
		zoomBy(e.deltaY < 0 ? .12 : -.12);
	}, { passive: false });
	spinLoop();
	const brickTexture = (scale, kLmm, kHmm, tikisMm, shade) => {
		const bw = Math.max(3, kLmm / 1e3 * scale);
		const bh = Math.max(2, kHmm / 1e3 * scale);
		const j = Math.max(1, tikisMm / 1e3 * scale);
		const courseH = bh + j;
		const mortar = "#cbb89a";
		return `background-color:${shade};background-image:linear-gradient(180deg,rgba(255,255,255,.2),rgba(0,0,0,.12)),linear-gradient(${mortar} ${j}px,transparent ${j}px),linear-gradient(90deg,${mortar} ${j}px,transparent ${j}px),linear-gradient(90deg,${mortar} ${j}px,transparent ${j}px);background-size:100% 100%,100% ${courseH}px,${bw + j}px ${courseH * 2}px,${bw + j}px ${courseH * 2}px;background-position:0 0,0 0,0 0,${(bw + j) / 2}px ${courseH}px;`;
	};
	const planState = {
		n: 0,
		cols: 1,
		rowFracs: [0, 1],
		colFracsPerRow: [[0, 1]],
		items: {},
		Lm: 1,
		Wm: 1,
		_wallGeom: {}
	};
	let weCurrentWall = null;
	let weType = "door";
	let openingsReady = false;
	let allowSave = false;
	const saveKey = "nibras-planner-v1";
	const stageCosts = {
		kerpic: 0,
		suvaq: 0,
		bitirme: 0
	};
	const resetPlanGrid = (n) => {
		const cols = Math.ceil(Math.sqrt(n));
		const fullRows = Math.floor(n / cols);
		const remainder = n - fullRows * cols;
		const rows = remainder > 0 ? fullRows + 1 : fullRows;
		planState.n = n;
		planState.cols = cols;
		planState.rowFracs = Array.from({ length: rows + 1 }, (_, i) => i / rows);
		planState.colFracsPerRow = [];
		for (let r = 0; r < rows; r++) {
			const cells = r === rows - 1 && remainder > 0 ? remainder : cols;
			planState.colFracsPerRow.push(Array.from({ length: cells + 1 }, (_, i) => i / cells));
		}
		const kept = {};
		for (const id of [
			"ext-N",
			"ext-S",
			"ext-E",
			"ext-W"
		]) if (planState.items[id]) kept[id] = planState.items[id];
		planState.items = kept;
		if (!openingsReady && Object.keys(kept).length === 0) {
			openingsReady = true;
			planState.items["ext-S"] = {
				type: "door",
				width: .9,
				height: 2.1,
				isEntrance: true,
				offset: .5
			};
			planState.items["ext-N"] = {
				type: "window",
				width: 1.4,
				height: 1.2,
				isEntrance: false,
				offset: .5
			};
			planState.items["ext-E"] = {
				type: "window",
				width: 1.2,
				height: 1.2,
				isEntrance: false,
				offset: .5
			};
			planState.items["ext-W"] = {
				type: "window",
				width: 1.2,
				height: 1.2,
				isEntrance: false,
				offset: .5
			};
		}
	};
	const currentWallMm = () => {
		const v = must("divarQalinliq").value;
		return v === "ferdi" ? parseFloat(must("qalinliqFerdi").value) || 250 : parseFloat(v);
	};
	const updateStageDisplay = () => {
		const stage = parseInt(must("stageSlider").value, 10) || 5;
		const def = stageDefs[stage - 1];
		if (!def) return;
		const show = (part) => def.parts.includes(part);
		must("f-bottom").style.opacity = show("bottom") ? "1" : "0";
		must("f-plinth").style.opacity = show("bottom") ? "1" : "0";
		cube.querySelectorAll(".lawn").forEach((el) => {
			el.style.opacity = show("bottom") ? "1" : "0";
		});
		cube.querySelectorAll(".ext-wall").forEach((el) => {
			el.style.opacity = show("walls") ? "1" : "0";
		});
		cube.querySelectorAll(".roof-bit").forEach((el) => {
			el.style.opacity = show("roof") ? "1" : "0";
		});
		must("f-top").style.display = "none";
		must("f-ridge").style.display = "none";
		cube.querySelectorAll(".iface").forEach((el) => {
			el.style.opacity = show("interior") ? "1" : "0";
		});
		cube.dataset.stage = String(stage);
		must("scene").dataset.stage = String(stage);
		const rail = must("stageRail");
		rail.dataset.stage = String(stage);
		rail.querySelectorAll("[data-stage]").forEach((btn) => {
			const n = parseInt(btn.dataset.stage || "0", 10);
			btn.classList.toggle("is-on", n <= stage);
			btn.classList.toggle("is-current", n === stage);
		});
		const text = copy.stages[stage - 1];
		const sum = def.keys.reduce((s, key) => s + (stageCosts[key] || 0), 0);
		must("fiveCostAmt").textContent = sum.toFixed(2);
		must("sceneBadge").textContent = `${stage}/5 · ${text.short}`;
		const note = stage <= 1 ? copy.noteFoundation : stage === 5 ? copy.noteRoof : "";
		must("stageLabel").innerHTML = `<b>${text.name}</b> — ${text.blurb}<br>${copy.upTo}: <b>${sum.toFixed(2)} AZN</b>` + (note ? `<span class="stage-note">${note}</span>` : "");
	};
	const update3D = (L, W, H, wallMm, kL, kH, tikis, roomCount) => {
		const hasDims = L > 0 && W > 0 && H > 0;
		must("sceneEmpty").style.display = hasDims ? "none" : "flex";
		cube.style.visibility = hasDims ? "visible" : "hidden";
		const scale = Math.max(14, Math.min(95, 280 / Math.max(L, W, H, .1)));
		const lp = Math.max(L, .1) * scale;
		const wp = Math.max(W, .1) * scale;
		const hp = Math.max(H, .1) * scale;
		const bw = Math.max(2, Math.min(14, (wallMm || 250) / 1e3 * scale));
		cube.style.width = `${lp}px`;
		cube.style.height = `${hp}px`;
		cube.style.marginLeft = `${-lp / 2}px`;
		cube.style.marginTop = `${-hp / 2}px`;
		const bwStyle = "border:none;";
		const stageNow = parseInt(must("stageSlider").value, 10) || 5;
		const finish = stageNow >= 4;
		const form = formById(must("evForm").value);
		const sky = must("skyId").value || "day";
		must("scene").dataset.sky = sky;
		root.querySelectorAll("#skyPicks [data-sky]").forEach((btn) => {
			btn.classList.toggle("is-on", btn.dataset.sky === sky);
		});
		const wallHi = sky === "night" ? "#b7b2a8" : sky === "dusk" ? "#f3d2ae" : "#fffdf8";
		const wallLo = sky === "night" ? "#7e7a72" : sky === "dusk" ? "#e4b48a" : "#efe2cc";
		const baseH = Math.max(9, hp * .14);
		const plasterOf = (hi, lo, shade) => `background:linear-gradient(#8d8680,#8d8680) bottom/100% ${baseH}px no-repeat,linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px) bottom/${Math.max(18, baseH)}px ${baseH}px no-repeat,radial-gradient(circle at 16% 20%,rgba(255,255,255,.28),transparent 22%),linear-gradient(100deg,${shade},transparent 28%),linear-gradient(180deg,${hi},${lo});border:none;`;
		const plaster = plasterOf(wallHi, wallLo, "rgba(255,255,255,.2)");
		const plasterShade = plasterOf(sky === "night" ? "#8e8a84" : "#e4d5be", sky === "night" ? "#6a6660" : "#c9b496", "rgba(40,24,10,.18)");
		const siding = "background:repeating-linear-gradient(#e7d3ae 0 12px,#c49a68 12px 14px,#d7bc90 14px 26px);border:none;";
		const blockSkin = (color) => `background-color:${color};background-image:linear-gradient(rgba(255,255,255,.28) 0 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.16) 1px,transparent 1px);background-size:100% ${Math.max(16, kH * scale * .35)}px,${Math.max(22, kL * scale * .28)}px 100%;border:none;`;
		const rendered = finish && form.skin !== "wood" || form.skin === "plaster";
		const texFront = rendered ? plaster : form.skin === "wood" ? siding : form.skin === "block" ? blockSkin("#c8bba8") : brickTexture(scale, kL, kH, tikis, "#c4653e");
		const texSide = rendered ? plasterShade : form.skin === "wood" ? siding : form.skin === "block" ? blockSkin("#a89886") : brickTexture(scale, kL, kH, tikis, "#8d4328");
		const texBack = rendered ? plasterShade : form.skin === "wood" ? siding : form.skin === "block" ? blockSkin("#9a8b7a") : brickTexture(scale, kL, kH, tikis, "#7a3b24");
		cube.querySelectorAll(".iface, .ext-wall, .roof-bit, .lawn").forEach((el) => el.remove());
		const roomsNow = Math.max(1, Math.round(roomCount) || 1);
		if (roomsNow !== planState.n) resetPlanGrid(roomsNow);
		const doorSkin = (entrance) => {
			const wood = entrance ? "#7b4322" : "#8d5b36";
			const panel = entrance ? "#4e2b16" : "#684028";
			return `background:radial-gradient(circle at 80% 54%,#f0d48a 1.6px,transparent 2.2px),linear-gradient(${panel},${panel}) 16% 10%/30% 34% no-repeat,linear-gradient(${panel},${panel}) 54% 10%/30% 34% no-repeat,linear-gradient(${panel},${panel}) 16% 52%/30% 36% no-repeat,linear-gradient(${panel},${panel}) 54% 52%/30% 36% no-repeat,linear-gradient(180deg,${wood},#3d2414);box-shadow:inset 0 0 0 3px #3a2416;border:none;`;
		};
		const facadeHoles = (id, full) => {
			const win = Math.min(full * .2, Math.max(18, 1.15 * scale));
			const door = Math.min(full * .22, Math.max(20, .95 * scale));
			const user = planState.items[id];
			if (user?.type === "door" && full > win * 2 + door) return [
				{
					offset: .18,
					widthPx: win,
					kind: "window"
				},
				{
					offset: user.offset ?? .5,
					widthPx: Math.min(full * .28, Math.max(18, user.width * scale)),
					kind: "door",
					entrance: user.isEntrance,
					heightM: user.height
				},
				{
					offset: .82,
					widthPx: win,
					kind: "window"
				}
			];
			if (user) {
				const widthPx = Math.min(full * .82, Math.max(16, user.width * scale));
				return [{
					offset: user.offset ?? .5,
					widthPx,
					kind: user.type,
					entrance: user.isEntrance,
					heightM: user.height
				}];
			}
			if (id === "ext-S" && full > door + win * 2 + 12) return [
				{
					offset: .22,
					widthPx: win,
					kind: "window"
				},
				{
					offset: .5,
					widthPx: door,
					kind: "door",
					entrance: true
				},
				{
					offset: .78,
					widthPx: win,
					kind: "window"
				}
			];
			if ((id === "ext-N" || id === "ext-S") && full > win * 2 + 16) return [{
				offset: .3,
				widthPx: win,
				kind: "window"
			}, {
				offset: .7,
				widthPx: win,
				kind: "window"
			}];
			return [{
				offset: .5,
				widthPx: Math.min(win, full * .46),
				kind: "window"
			}];
		};
		const addWall = (id, full, tex, transform, baseLeft) => {
			const mk = (left, w, h, top, style, proud = "") => {
				const d = document.createElement("div");
				d.className = "face ext-wall";
				d.style.cssText = `width:${w}px;height:${h}px;left:${baseLeft + left}px;top:${top}px;transform:${transform}${proud};${bwStyle}${style}`;
				cube.appendChild(d);
			};
			mk(0, full, hp, 0, tex);
			for (const hole of facadeHoles(id, full)) {
				const left = Math.max(3, Math.min(full - hole.widthPx - 3, hole.offset * full - hole.widthPx / 2));
				if (hole.kind === "window") {
					const h = hole.heightM ? Math.max(16, Math.min(hp * .9, hole.heightM / Math.max(H, .1) * hp)) : Math.max(16, hp * .34);
					const top = Math.max(4, Math.min(hp - h - 4, hp * .22));
					const t = Math.max(3, Math.min(6, hole.widthPx * .08));
					const frame = "background:#f7f4ee;border:none;box-shadow:0 1px 0 rgba(80,50,20,.25);";
					const glass = sky === "night" ? "background:linear-gradient(180deg,#ffe7b0,#ffb15a);box-shadow:0 0 10px rgba(255,170,60,.8);border:none;" : "background:linear-gradient(115deg,rgba(255,255,255,.85),rgba(255,255,255,0) 38%),linear-gradient(180deg,#f4fbff 0%,#9ec8de 46%,#d5ecf8 47%,#7eafcc);border:none;";
					mk(left - 1, hole.widthPx + 2, t, top - 1, frame, " translateZ(2.4px)");
					mk(left - 1, hole.widthPx + 2, t, top + h - t, frame, " translateZ(2.4px)");
					mk(left - 1, t, h, top, frame, " translateZ(2.4px)");
					mk(left + hole.widthPx - t, t, h, top, frame, " translateZ(2.4px)");
					mk(left + t, hole.widthPx - t * 2, h - t * 2, top + t, glass, " translateZ(1.2px)");
					mk(left + hole.widthPx / 2 - 1, 2, h - t * 2, top + t, frame, " translateZ(1.8px)");
					mk(left + t, hole.widthPx - t * 2, 2, top + h * .46, frame, " translateZ(1.8px)");
					mk(left - 3, hole.widthPx + 6, Math.max(4, t + 1), top + h - 2, "background:linear-gradient(#fff,#d9cbb6);border:none;border-radius:1px;", " translateZ(3.4px)");
				} else {
					const h = hole.heightM ? Math.max(20, Math.min(hp * .94, hole.heightM / Math.max(H, .1) * hp)) : Math.max(20, hp * .66);
					const top = hp - h;
					const frame = "background:#f3eee6;border:none;";
					mk(left - 3, hole.widthPx + 6, 5, top - 4, frame, " translateZ(2.6px)");
					mk(left - 3, 4, h + 4, top - 4, frame, " translateZ(2.6px)");
					mk(left + hole.widthPx - 1, 4, h + 4, top - 4, frame, " translateZ(2.6px)");
					mk(left, hole.widthPx, h, top, doorSkin(Boolean(hole.entrance)), " translateZ(1.8px)");
					mk(left + hole.widthPx * .78, 3, 3, top + h * .48, "background:radial-gradient(circle,#f0d48a,#b08a3e);border:none;border-radius:50%;", " translateZ(2.8px)");
				}
			}
		};
		addWall("ext-N", lp, texBack, `translateZ(${wp / 2}px)`, 0);
		addWall("ext-S", lp, texFront, `rotateY(180deg) translateZ(${wp / 2}px)`, 0);
		addWall("ext-E", wp, texSide, `rotateY(90deg) translateZ(${lp / 2}px)`, lp / 2 - wp / 2);
		addWall("ext-W", wp, texSide, `rotateY(-90deg) translateZ(${lp / 2}px)`, lp / 2 - wp / 2);
		const eave = Math.max(10, bw + 4);
		const rise = form.roof === "flat" ? 0 : form.roof === "steep" ? Math.max(40, wp * .58) : form.roof === "low" ? Math.max(16, wp * .16) : form.roof === "shingle" ? Math.max(22, wp * .28) : Math.max(26, wp * .34);
		const addBit = (css) => {
			const d = document.createElement("div");
			d.className = "face roof-bit";
			d.style.cssText = css;
			cube.appendChild(d);
		};
		if (form.roof === "flat") {
			const slab = Math.max(7, hp * .04);
			addBit(`width:${lp + 10}px;height:${wp + 10}px;left:-5px;top:${hp / 2 - (wp + 10) / 2}px;transform:rotateX(90deg) translateZ(${hp / 2 + slab}px);background:linear-gradient(#ddd6cb,#b7b1a6);border:none;`);
			const ph = Math.max(12, hp * .07);
			const para = "background:#d5cfc3;border:none;";
			addBit(`width:${lp}px;height:${ph}px;top:${-ph}px;transform:translateZ(${wp / 2}px);${para}`);
			addBit(`width:${lp}px;height:${ph}px;top:${-ph}px;transform:rotateY(180deg) translateZ(${wp / 2}px);${para}`);
			addBit(`width:${wp}px;height:${ph}px;left:${lp / 2 - wp / 2}px;top:${-ph}px;transform:rotateY(90deg) translateZ(${lp / 2}px);${para}`);
			addBit(`width:${wp}px;height:${ph}px;left:${lp / 2 - wp / 2}px;top:${-ph}px;transform:rotateY(-90deg) translateZ(${lp / 2}px);${para}`);
		} else {
			const run = wp / 2 + eave;
			const slopeLen = Math.hypot(run, rise);
			const rot = 90 - Math.atan2(rise, run) * 180 / Math.PI;
			const tile = form.roof === "shingle" ? "background-color:#5e646c;background-image:linear-gradient(90deg,rgba(0,0,0,.22) 1px,transparent 1px),repeating-linear-gradient(180deg,#8b929a 0 2px,#5a6168 3px 8px,#6d747c 9px 11px);background-size:26px 100%,100% 12px;border:none;box-shadow:inset 0 -10px 14px rgba(0,0,0,.25);" : "background-color:#8d3a2a;background-image:linear-gradient(90deg,rgba(0,0,0,.2) 1px,transparent 1px),repeating-linear-gradient(180deg,#d06a4e 0 2px,#8a3426 3px 8px,#b5523c 9px 13px);background-size:22px 100%,100% 14px;border:none;box-shadow:inset 0 -14px 16px rgba(40,10,6,.3);";
			const addRoof = (transform) => {
				addBit(`width:${lp + eave * 2}px;height:${slopeLen}px;left:${-eave}px;top:${-slopeLen}px;transform-origin:center bottom;transform:${transform};${tile}`);
			};
			addRoof(`translateZ(${wp / 2 + eave}px) rotateX(${rot}deg)`);
			addRoof(`translateZ(${-(wp / 2 + eave)}px) rotateX(${-rot}deg)`);
			const gableTex = form.skin === "wood" ? siding : finish ? plaster : brickTexture(scale, kL, kH, tikis, "#9a4a30");
			const addGable = (transform) => {
				addBit(`width:${wp}px;height:${rise}px;left:${lp / 2 - wp / 2}px;top:${-rise}px;transform:${transform};clip-path:polygon(0 100%,50% 0,100% 100%);${gableTex}border:none;`);
			};
			addGable(`rotateY(90deg) translateZ(${lp / 2 - 1}px)`);
			addGable(`rotateY(-90deg) translateZ(${lp / 2 - 1}px)`);
			if (form.roof === "tile" || form.roof === "steep") {
				const cw = Math.max(12, lp * .07);
				const cd = Math.max(10, wp * .12);
				const ch = Math.max(20, rise * .55);
				const cx = lp * .62;
				const sink = Math.round(rise * .18);
				const chimneyBrick = brickTexture(scale, kL, kH, tikis, "#6e3424");
				addBit(`width:${cw}px;height:${ch}px;left:${cx}px;top:${-rise - ch + sink}px;transform:translateZ(${cd / 2}px);${chimneyBrick}border:none;`);
				addBit(`width:${cw}px;height:${ch}px;left:${cx}px;top:${-rise - ch + sink}px;transform:rotateY(180deg) translateZ(${cd / 2}px);${chimneyBrick}border:none;`);
				addBit(`width:${cd}px;height:${ch}px;left:${cx + cw / 2 - cd / 2}px;top:${-rise - ch + sink}px;transform:rotateY(90deg) translateZ(${cw / 2}px);${chimneyBrick}border:none;`);
				addBit(`width:${cd}px;height:${ch}px;left:${cx + cw / 2 - cd / 2}px;top:${-rise - ch + sink}px;transform:rotateY(-90deg) translateZ(${cw / 2}px);${chimneyBrick}border:none;`);
			}
		}
		const floor = finish ? "background-color:#e4cfaa;background-image:linear-gradient(rgba(110,70,30,.22) 1px,transparent 1px),linear-gradient(90deg,rgba(110,70,30,.22) 1px,transparent 1px);background-size:18px 18px;border:none;" : stageNow >= 3 ? "background:linear-gradient(160deg,#f3e2c4,#d7b98a);border:none;" : "background:linear-gradient(160deg,#d5d0c8,#9a958d);border:none;";
		must("f-bottom").style.cssText = `width:${lp}px;height:${wp}px;top:${hp / 2 - wp / 2}px;transform:rotateX(-90deg) translateZ(${hp / 2}px);${floor}`;
		const plinth = Math.max(6, hp * .045);
		const groundZ = hp / 2 + plinth + 1;
		must("f-plinth").style.cssText = `width:${lp + 18}px;height:${wp + 18}px;left:-9px;top:${hp / 2 - (wp + 18) / 2}px;transform:rotateX(-90deg) translateZ(${hp / 2 + plinth}px);border:none;background:linear-gradient(180deg,#b7b1a6,#6f6a64);`;
		const gw = 1600;
		const gd = 1200;
		const site = (css) => {
			const d = document.createElement("div");
			d.className = "face lawn";
			d.style.cssText = css;
			cube.appendChild(d);
		};
		site(`width:${gw}px;height:${gd}px;left:${(lp - gw) / 2}px;top:${hp / 2 - gd / 2}px;transform:rotateX(-90deg) translateZ(${groundZ}px);border:none;background:` + (sky === "snow" ? `radial-gradient(ellipse at 30% 40%,rgba(255,255,255,.7),transparent 40%),linear-gradient(165deg,#ffffff,#e4edf5 55%,#d5e1ec);` : sky === "night" ? `radial-gradient(ellipse at 40% 45%,rgba(0,0,0,.2),transparent 46%),linear-gradient(165deg,#2a5a40,#173628 60%,#10241a);` : sky === "dusk" ? `radial-gradient(ellipse at 36% 40%,rgba(255,200,120,.12),transparent 40%),linear-gradient(165deg,#7d9456,#4a6236 52%,#314628);` : `radial-gradient(ellipse at 32% 42%,rgba(255,255,255,.12),transparent 36%),radial-gradient(ellipse at 70% 60%,rgba(20,40,8,.14),transparent 42%),linear-gradient(165deg,#b6e278,#5c9e40 48%,#3b7a2e);`));
		site(`width:${lp * 1.4}px;height:${wp * 1.5}px;left:${(lp - lp * 1.4) / 2}px;top:${hp / 2 - wp * 1.5 / 2}px;transform:rotateX(-90deg) translateZ(${groundZ - 1.2}px);border:none;background:radial-gradient(ellipse at center,rgba(20,16,10,.32),rgba(20,16,10,0) 70%);`);
		const pathW = Math.max(18, lp * .15);
		const pathL = Math.max(78, wp);
		site(`width:${pathW}px;height:${pathL}px;left:${(lp - pathW) / 2}px;top:${hp / 2 - pathL / 2}px;transform:rotateX(-90deg) translateZ(${groundZ - 2}px) translateY(${wp / 2 + pathL / 2 - 10}px);border:none;border-radius:10px;background:${sky === "snow" ? "linear-gradient(#f4f7fb,#d5dee8)" : sky === "night" ? "linear-gradient(#3c4438,#2a3128)" : "linear-gradient(#f3e6c8,#c9b08a)"};`);
		const tree = (x, z, tall) => {
			const th = Math.max(20, hp * tall);
			const crown = Math.max(30, th * .95);
			site(`width:7px;height:${th}px;left:${x}px;top:${hp - th}px;transform:translateZ(${z}px);background:linear-gradient(#8d5a34,#4e311c);border:none;border-radius:3px;`);
			site(`width:${crown}px;height:${crown}px;left:${x - crown / 2 + 3}px;top:${hp - th - crown * .46}px;transform:translateZ(${z}px);background:radial-gradient(circle at 40% 38%,#def6a4,#3e8c32 60%,#1c541e);border:none;border-radius:50%;`);
			site(`width:${crown * .82}px;height:${crown * .7}px;left:${x - crown * .32}px;top:${hp - th - crown * .2}px;transform:translateZ(${z}px) rotateY(80deg);background:radial-gradient(circle at 50% 40%,#b6dc70,#2a6e26 66%,#163e16);border:none;border-radius:50%;`);
		};
		tree(-78, wp * .55, .66);
		tree(lp + 52, wp * .1, .82);
		const n = Math.max(1, Math.round(roomCount) || 1);
		if (n !== planState.n) resetPlanGrid(n);
		const iw = Math.max(2, bw * .55);
		const openRooms = stageNow === 3;
		const interiorH = openRooms ? Math.max(22, hp * .55) : hp;
		const interiorTop = hp - interiorH;
		const texIn = openRooms ? "background:linear-gradient(180deg,#f6efe2,#d7b48a);box-shadow:inset 0 0 0 3px #8a5a32;border:none;" : "background:#e7dcc8;box-shadow:inset 0 0 0 2px rgba(0,0,0,.12);border:none;";
		const rows = planState.rowFracs.length - 1;
		for (let j = 1; j < rows; j++) {
			const dz = planState.rowFracs[j] * wp - wp / 2;
			const d = document.createElement("div");
			d.className = "face iface";
			d.style.cssText = `width:${lp}px;height:${interiorH}px;top:${interiorTop}px;transform:translateZ(${dz}px);border-width:${iw}px;${texIn}`;
			cube.appendChild(d);
		}
		const uniqueColFracs = /* @__PURE__ */ new Set();
		planState.colFracsPerRow.forEach((cf) => {
			for (let c = 1; c < cf.length - 1; c++) uniqueColFracs.add(cf[c].toFixed(3));
		});
		uniqueColFracs.forEach((fracStr) => {
			const dx = parseFloat(fracStr) * lp - lp / 2;
			const d = document.createElement("div");
			d.className = "face iface";
			d.style.cssText = `width:${wp}px;height:${interiorH}px;top:${interiorTop}px;left:${lp / 2 - wp / 2}px;transform:rotateY(90deg) translateZ(${dx}px);border-width:${iw}px;${texIn}`;
			cube.appendChild(d);
		});
		must("dimsLabel").innerHTML = copy.dims(L || 0, W || 0, H || 0, n);
	};
	const wallTitle = (id) => copy.wall(id);
	const openWallEditor = (id) => {
		weCurrentWall = id;
		const item = planState.items[id];
		weType = item ? item.type : "door";
		must("weTitle").textContent = wallTitle(id);
		must("weWidth").value = String(item ? item.width : weType === "door" ? .9 : 1.2);
		must("weHeight").value = String(item?.height ?? (weType === "door" ? 2.1 : 1.2));
		must("weEntrance").checked = Boolean(item && item.isEntrance);
		weRefreshTypeButtons();
		must("wallEditor").classList.remove("hidden");
		must("wallEditor").scrollIntoView({
			behavior: "smooth",
			block: "nearest"
		});
	};
	const weSetType = (t) => {
		weType = t;
		must("weWidth").value = t === "door" ? "0.9" : "1.2";
		must("weHeight").value = t === "door" ? "2.1" : "1.2";
		weRefreshTypeButtons();
	};
	const weRefreshTypeButtons = () => {
		must("we-door").classList.toggle("active", weType === "door");
		must("we-window").classList.toggle("active", weType === "window");
		must("weEntranceRow").style.display = weType === "door" ? "flex" : "none";
	};
	const weSave = () => {
		if (!weCurrentWall) return;
		const width = parseFloat(must("weWidth").value) || .9;
		const height = parseFloat(must("weHeight").value) || (weType === "door" ? 2.1 : 1.2);
		const isEntrance = weType === "door" && must("weEntrance").checked;
		if (isEntrance) Object.values(planState.items).forEach((it) => {
			if (it.isEntrance) it.isEntrance = false;
		});
		const existingOffset = planState.items[weCurrentWall] ? planState.items[weCurrentWall].offset : .5;
		planState.items[weCurrentWall] = {
			type: weType,
			width,
			height,
			isEntrance,
			offset: existingOffset
		};
		weClose();
		hesabla();
	};
	const weDelete = () => {
		if (weCurrentWall) delete planState.items[weCurrentWall];
		weClose();
		hesabla();
	};
	const weClose = () => {
		must("wallEditor").classList.add("hidden");
		weCurrentWall = null;
	};
	const renderFloorPlan = (L, W, roomCount, wallMm) => {
		const n = Math.max(1, Math.round(roomCount) || 1);
		if (n !== planState.n) resetPlanGrid(n);
		const Lm = Math.max(L, .1);
		const Wm = Math.max(W, .1);
		planState.Lm = Lm;
		planState.Wm = Wm;
		const SC = 100;
		const vbW = Lm * SC;
		const vbH = Wm * SC;
		const svg = must("planSvg");
		svg.setAttribute("viewBox", `0 0 ${vbW} ${vbH}`);
		const wallPx = Math.max(2, Math.min(vbW, vbH) * .03, (wallMm || 250) / 1e3 * SC * .4);
		const rows = planState.rowFracs.length - 1;
		let html = "";
		let roomNo = 1;
		for (let r = 0; r < rows; r++) {
			const y0 = planState.rowFracs[r] * vbH;
			const y1 = planState.rowFracs[r + 1] * vbH;
			const cf = planState.colFracsPerRow[r];
			for (let c = 0; c < cf.length - 1; c++) {
				const x0 = cf[c] * vbW;
				const x1 = cf[c + 1] * vbW;
				const areaM2 = (x1 - x0) / SC * ((y1 - y0) / SC);
				const fs = Math.min(x1 - x0, y1 - y0) * .15;
				html += `<text x="${(x0 + x1) / 2}" y="${(y0 + y1) / 2 - fs * .4}" text-anchor="middle" font-size="${fs}" fill="var(--text)" font-weight="600">${copy.room(roomNo)}</text>`;
				html += `<text x="${(x0 + x1) / 2}" y="${(y0 + y1) / 2 + fs * .9}" text-anchor="middle" font-size="${fs * .85}" fill="var(--muted)">${areaM2.toFixed(1)} m²</text>`;
				roomNo++;
			}
		}
		const wallGeom = {};
		const hits = [];
		const wallLine = (id, x0, y0, x1, y1, thick) => {
			wallGeom[id] = {
				x0,
				y0,
				x1,
				y1
			};
			const item = planState.items[id];
			const nx = vbW / 2 - (x0 + x1) / 2;
			const ny = vbH / 2 - (y0 + y1) / 2;
			const nlen = Math.hypot(nx, ny) || 1;
			const ix = nx / nlen * Math.max(10, thick * 2.2);
			const iy = ny / nlen * Math.max(10, thick * 2.2);
			const hit = `<line data-drag-item="${id}" x1="${x0 + ix}" y1="${y0 + iy}" x2="${x1 + ix}" y2="${y1 + iy}" stroke="rgba(0,0,0,0.015)" stroke-width="${Math.max(22, thick * 6)}" stroke-linecap="round" style="cursor:grab;"/>`;
			if (!item) {
				hits.push(`<line data-wall="${id}" x1="${x0 + ix}" y1="${y0 + iy}" x2="${x1 + ix}" y2="${y1 + iy}" stroke="rgba(0,0,0,0.015)" stroke-width="${Math.max(22, thick * 6)}" stroke-linecap="round" style="cursor:pointer;"/>`);
				return `<line data-wall="${id}" x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="var(--accent)" stroke-width="${thick}" style="cursor:pointer;"/>`;
			}
			const len = Math.hypot(x1 - x0, y1 - y0) || 1;
			const gap = Math.max(6, item.width * SC);
			const minOff = gap / 2 / len;
			const maxOff = 1 - minOff;
			const off = Math.max(minOff, Math.min(maxOff, item.offset != null ? item.offset : .5));
			item.offset = off;
			const midX = x0 + (x1 - x0) * off;
			const midY = y0 + (y1 - y0) * off;
			const ux = (x1 - x0) / len;
			const uy = (y1 - y0) / len;
			const gx0 = midX - ux * (gap / 2);
			const gy0 = midY - uy * (gap / 2);
			const gx1 = midX + ux * (gap / 2);
			const gy1 = midY + uy * (gap / 2);
			const color = item.type === "window" ? "#9fd0e8" : item.isEntrance ? "#4caf50" : "#f2d9a8";
			const icon = item.type === "window" ? "🪟" : item.isEntrance ? "🏠" : "🚪";
			hits.push(hit);
			return `<line data-wall="${id}" x1="${x0}" y1="${y0}" x2="${gx0}" y2="${gy0}" stroke="var(--accent)" stroke-width="${thick}" style="cursor:pointer;"/><line data-wall="${id}" x1="${gx1}" y1="${gy1}" x2="${x1}" y2="${y1}" stroke="var(--accent)" stroke-width="${thick}" style="cursor:pointer;"/><line data-drag-item="${id}" x1="${gx0}" y1="${gy0}" x2="${gx1}" y2="${gy1}" stroke="${color}" stroke-width="${thick * 1.8}" stroke-linecap="round" style="cursor:grab;"/><text data-drag-item="${id}" x="${midX + ix}" y="${midY + iy}" text-anchor="middle" dominant-baseline="middle" font-size="${thick * 3.2}" style="cursor:grab;">${icon}</text>`;
		};
		html += wallLine("ext-N", 0, 0, vbW, 0, wallPx);
		html += wallLine("ext-S", 0, vbH, vbW, vbH, wallPx);
		html += wallLine("ext-W", 0, 0, 0, vbH, wallPx);
		html += wallLine("ext-E", vbW, 0, vbW, vbH, wallPx);
		for (let j = 1; j < rows; j++) {
			const y = planState.rowFracs[j] * vbH;
			html += wallLine(`rowdiv-${j}`, 0, y, vbW, y, wallPx * .6);
			html += `<line data-drag-row="1" data-idx="${j}" x1="0" y1="${y}" x2="${vbW}" y2="${y}" stroke="transparent" stroke-width="${wallPx * 3 + 10}" style="cursor:row-resize;"/>`;
		}
		for (let r = 0; r < rows; r++) {
			const y0v = planState.rowFracs[r] * vbH;
			const y1v = planState.rowFracs[r + 1] * vbH;
			const cf = planState.colFracsPerRow[r];
			for (let c = 1; c < cf.length - 1; c++) {
				const x = cf[c] * vbW;
				html += wallLine(`coldiv-${r}-${c}`, x, y0v, x, y1v, wallPx * .6);
				html += `<line data-drag-col="1" data-row="${r}" data-idx="${c}" x1="${x}" y1="${y0v}" x2="${x}" y2="${y1v}" stroke="transparent" stroke-width="${wallPx * 3 + 10}" style="cursor:col-resize;"/>`;
			}
		}
		html += hits.join("");
		svg.innerHTML = html;
		planState._wallGeom = wallGeom;
		const wallPointerDown = (event) => {
			event.stopPropagation();
			const id = event.currentTarget.dataset.wall;
			if (id) openWallEditor(id);
		};
		const dragPointerDown = (event) => {
			event.stopPropagation();
			const el = event.currentTarget;
			const ev0 = event;
			const rect = svg.getBoundingClientRect();
			const isRow = Boolean(el.dataset.dragRow);
			const j = parseInt(el.dataset.idx || "0", 10);
			const rIdx = parseInt(el.dataset.row || "0", 10);
			const startX = ev0.clientX;
			const startY = ev0.clientY;
			let moved = false;
			svg.setPointerCapture(ev0.pointerId);
			const onMove = (ev) => {
				if (Math.abs(ev.clientX - startX) > 4 || Math.abs(ev.clientY - startY) > 4) moved = true;
				if (isRow) {
					const fracY = (ev.clientY - rect.top) / rect.height;
					const minGap = 1.3 / planState.Wm;
					const lo = planState.rowFracs[j - 1] + minGap;
					const hi = planState.rowFracs[j + 1] - minGap;
					planState.rowFracs[j] = Math.max(lo, Math.min(hi, fracY));
				} else {
					const fracX = (ev.clientX - rect.left) / rect.width;
					const cf = planState.colFracsPerRow[rIdx];
					const minGap = 1.3 / planState.Lm;
					const lo = cf[j - 1] + minGap;
					const hi = cf[j + 1] - minGap;
					cf[j] = Math.max(lo, Math.min(hi, fracX));
				}
				renderFloorPlan(planState.Lm, planState.Wm, planState.n, currentWallMm());
			};
			const onUp = () => {
				svg.removeEventListener("pointermove", onMove);
				svg.removeEventListener("pointerup", onUp);
				if (!moved) openWallEditor(isRow ? `rowdiv-${j}` : `coldiv-${rIdx}-${j}`);
			};
			svg.addEventListener("pointermove", onMove);
			svg.addEventListener("pointerup", onUp);
		};
		const itemDragPointerDown = (event) => {
			event.stopPropagation();
			event.preventDefault();
			let activeId = event.currentTarget.dataset.dragItem || "";
			if (!planState.items[activeId] || !planState._wallGeom[activeId]) return;
			const ev0 = event;
			const startX = ev0.clientX;
			const startY = ev0.clientY;
			let moved = false;
			svg.setPointerCapture(ev0.pointerId);
			const toSvg = (ev) => {
				const rect = svg.getBoundingClientRect();
				const vb = svg.viewBox.baseVal;
				return {
					px: (ev.clientX - rect.left) / Math.max(rect.width, 1) * vb.width,
					py: (ev.clientY - rect.top) / Math.max(rect.height, 1) * vb.height,
					reach: Math.min(vb.width, vb.height) * .22
				};
			};
			const project = (id, px, py) => {
				const g = planState._wallGeom[id];
				const dx = g.x1 - g.x0;
				const dy = g.y1 - g.y0;
				const len2 = dx * dx + dy * dy || 1;
				const t = Math.max(.06, Math.min(.94, ((px - g.x0) * dx + (py - g.y0) * dy) / len2));
				const x = g.x0 + dx * t;
				const y = g.y0 + dy * t;
				return {
					t,
					dist: Math.hypot(px - x, py - y)
				};
			};
			const onMove = (ev) => {
				if (Math.abs(ev.clientX - startX) > 3 || Math.abs(ev.clientY - startY) > 3) moved = true;
				const current = planState.items[activeId];
				if (!current) return;
				const { px, py, reach } = toSvg(ev);
				let bestId = activeId;
				let best = project(activeId, px, py);
				for (const id of Object.keys(planState._wallGeom)) {
					const cand = project(id, px, py);
					if (cand.dist < best.dist) {
						best = cand;
						bestId = id;
					}
				}
				if (bestId !== activeId && best.dist < reach) {
					const other = planState.items[bestId];
					if (other) planState.items[activeId] = {
						...other,
						offset: current.offset
					};
					else delete planState.items[activeId];
					planState.items[bestId] = {
						...current,
						offset: best.t
					};
					activeId = bestId;
				} else current.offset = project(activeId, px, py).t;
				renderFloorPlan(planState.Lm, planState.Wm, planState.n, currentWallMm());
			};
			const onUp = () => {
				svg.removeEventListener("pointermove", onMove);
				svg.removeEventListener("pointerup", onUp);
				if (!moved) openWallEditor(activeId);
				else hesabla();
			};
			svg.addEventListener("pointermove", onMove);
			svg.addEventListener("pointerup", onUp);
		};
		svg.querySelectorAll("[data-wall]").forEach((el) => el.addEventListener("pointerdown", wallPointerDown));
		svg.querySelectorAll("[data-drag-row], [data-drag-col]").forEach((el) => el.addEventListener("pointerdown", dragPointerDown));
		svg.querySelectorAll("[data-drag-item]").forEach((el) => el.addEventListener("pointerdown", itemDragPointerDown));
	};
	const hesabla = () => {
		const L = parseFloat(must("uzunluq").value) || 0;
		const W = parseFloat(must("en").value) || 0;
		const H = parseFloat(must("hund").value) || 0;
		const otaqSayi = parseFloat(must("otaqSayi").value) || 1;
		const wallArea = 2 * (L + W) * H;
		const floorArea = L * W;
		const lines = [];
		let total = 0;
		const kL = parseFloat(must("kUzun").value) || 1;
		const kW = parseFloat(must("kEn").value) || 1;
		const kH = parseFloat(must("kHund").value) || 1;
		const tikis = parseFloat(must("tikis").value) || 0;
		const qalinRaw = must("divarQalinliq").value;
		const divarQalinliq = qalinRaw === "ferdi" ? parseFloat(must("qalinliqFerdi").value) || kW : parseFloat(qalinRaw);
		update3D(L, W, H, divarQalinliq, kL, kH, tikis, otaqSayi);
		renderFloorPlan(L, W, otaqSayi, divarQalinliq);
		let openingArea = 0;
		for (const [id, item] of Object.entries(planState.items)) {
			if (!id.startsWith("ext-")) continue;
			const h = Math.min(H, item.height ?? (item.type === "door" ? 2.1 : 1.2));
			openingArea += Math.max(0, item.width) * Math.max(0, h);
			if (item.type === "door") {
				if ((id === "ext-N" || id === "ext-S" ? L : W) > 5) openingArea += 2.88;
			}
		}
		openingArea = Math.min(openingArea, wallArea);
		const netWall = Math.max(0, wallArea - openingArea);
		const layers = Math.max(1, Math.round(divarQalinliq / (kW + tikis)));
		const brickFace = (kL + tikis) * (kH + tikis);
		const brickCount = brickFace > 0 ? Math.ceil(netWall * 1e6 * layers / brickFace) : 0;
		const brickPrice = parseFloat(must("qKerpic").value) || 0;
		stageCosts.suvaq = 0;
		stageCosts.bitirme = 0;
		if (must("c-kerpic").checked) {
			const form = formById(must("evForm").value);
			const unit = unitById(must("kerpicSecim").value);
			let brickCost = 0;
			if (form.skin === "wood") {
				const boards = Math.max(8, Math.ceil(2 * (L + W) / .4)) + Math.ceil(2 * (L + W) / 2.4) * 3;
				brickCost = boards * brickPrice;
				lines.push([copy.studLine(boards.toLocaleString(copy.locale)), brickCost]);
			} else {
				const piece = unit ? unit.local : copy.element;
				brickCost = brickCount * brickPrice;
				lines.push([copy.pieceLine(piece, brickCount.toLocaleString(copy.locale), layers), brickCost]);
			}
			total += brickCost;
			stageCosts.kerpic = brickCost;
		} else stageCosts.kerpic = 0;
		if (must("c-sement").checked) {
			const qty = Math.ceil(netWall * (parseFloat(must("p-sement").value) || 0));
			const cost = qty * (parseFloat(must("q-sement").value) || 0);
			total += cost;
			lines.push([copy.cementLine(qty), cost]);
			stageCosts.suvaq = cost;
		}
		if (must("c-boya").checked) {
			const qty = Math.round(netWall * (parseFloat(must("p-boya").value) || 0) * 10) / 10;
			const cost = qty * (parseFloat(must("q-boya").value) || 0);
			total += cost;
			lines.push([copy.paintLine(qty), cost]);
			stageCosts.bitirme += cost;
		}
		if (must("c-kafel").checked) {
			const qty = Math.round(floorArea * (parseFloat(must("p-kafel").value) || 0) * 10) / 10;
			const cost = qty * (parseFloat(must("q-kafel").value) || 0);
			total += cost;
			lines.push([copy.floorLine(qty), cost]);
			stageCosts.bitirme += cost;
		}
		must("totalPrice").textContent = `${total.toFixed(2)} AZN`;
		must("estLines").innerHTML = lines.map(([name, cost]) => `<div class="line"><span>${name}</span><span>${cost.toFixed(2)} AZN</span></div>`).join("");
		const chips = [
			copy.wallChip(netWall.toFixed(1)),
			copy.floorChip(floorArea.toFixed(1)),
			openingArea > 0 ? copy.openChip(openingArea.toFixed(1)) : copy.noOpen
		];
		must("qtyChips").innerHTML = chips.map((text) => `<span>${text}</span>`).join("");
		updateStageDisplay();
		refreshUnitNote();
		if (allowSave) persist();
	};
	const smetaText = () => {
		return [
			copy.estimateTitle,
			must("dimsLabel").innerText.replace(/\s+/g, " ").trim(),
			must("qtyChips").innerText.replace(/\s+/g, " ").trim(),
			"",
			...Array.from(must("estLines").querySelectorAll(".line")).map((el) => el.textContent?.replace(/\s+/g, " ").trim()),
			"",
			must("totalPrice").textContent
		].filter((line) => line !== void 0).join("\n");
	};
	const persist = () => {
		try {
			const fields = {};
			project.querySelectorAll("input[id], select[id]").forEach((el) => {
				fields[el.id] = el instanceof HTMLInputElement && el.type === "checkbox" ? el.checked ? "1" : "0" : el.value;
			});
			localStorage.setItem(saveKey, JSON.stringify({
				fields,
				plan: {
					n: planState.n,
					cols: planState.cols,
					rowFracs: planState.rowFracs,
					colFracsPerRow: planState.colFracsPerRow,
					items: planState.items
				}
			}));
		} catch {}
	};
	const readSave = () => {
		try {
			const raw = localStorage.getItem(saveKey);
			return raw ? JSON.parse(raw) : null;
		} catch {
			return null;
		}
	};
	const applySave = (data) => {
		for (const [id, value] of Object.entries(data.fields)) {
			const el = document.getElementById(id);
			if (!el || !project.contains(el)) continue;
			if (el instanceof HTMLInputElement && el.type === "checkbox") el.checked = value === "1";
			else el.value = value;
		}
		const plan = data.plan;
		if (plan) {
			planState.n = plan.n;
			planState.cols = plan.cols;
			planState.rowFracs = plan.rowFracs;
			planState.colFracsPerRow = plan.colFracsPerRow;
			planState.items = plan.items || {};
			openingsReady = true;
		}
	};
	const showContinue = () => {
		must("btnContinue").classList.toggle("hidden", !readSave());
	};
	on(root.querySelector("[data-act=\"yeni\"]"), "click", yeniLayihe);
	on(root.querySelector("[data-act=\"davam\"]"), "click", devamEt);
	on(root.querySelector("[data-act=\"ana\"]"), "click", anaSehife);
	on(root.querySelector("[data-act=\"print\"]"), "click", () => window.print());
	on(root.querySelector("[data-act=\"copy\"]"), "click", async () => {
		const text = smetaText();
		const btn = root.querySelector("[data-act=\"copy\"]");
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			const area = document.createElement("textarea");
			area.value = text;
			root.appendChild(area);
			area.select();
			document.execCommand("copy");
			area.remove();
		}
		if (btn) {
			const prev = btn.textContent;
			btn.textContent = copy.copied;
			window.setTimeout(() => {
				btn.textContent = prev;
			}, 1400);
		}
	});
	root.querySelectorAll("[data-size]").forEach((btn) => {
		on(btn, "click", () => {
			const [l, w, h, rooms] = (btn.dataset.size || "").split(",");
			must("uzunluq").value = l;
			must("en").value = w;
			must("hund").value = h;
			must("otaqSayi").value = rooms;
			hesabla();
		});
	});
	root.querySelectorAll("[data-panel]").forEach((el) => {
		const id = el.dataset.panel;
		if (id) on(el, "click", () => togglePanel(id));
	});
	on(root.querySelector("[data-act=\"zoom-in\"]"), "click", () => zoomBy(.2));
	on(root.querySelector("[data-act=\"zoom-out\"]"), "click", () => zoomBy(-.2));
	root.querySelectorAll("#skyPicks [data-sky]").forEach((btn) => {
		on(btn, "pointerdown", (event) => event.stopPropagation());
		on(btn, "click", () => {
			must("skyId").value = btn.dataset.sky || "day";
			hesabla();
		});
	});
	root.querySelectorAll("#stageRail [data-stage]").forEach((btn) => {
		on(btn, "click", () => {
			const slider = must("stageSlider");
			const next = btn.dataset.stage || "5";
			slider.value = next;
			if (next === "3") {
				rotX = -52;
				rotY = 36;
			} else if (next === "5") {
				rotX = -20;
				rotY = 208;
			}
			slider.dispatchEvent(new Event("input", { bubbles: true }));
		});
	});
	root.querySelectorAll("[data-mat]").forEach((el) => {
		const id = el.dataset.mat;
		if (id) on(el, "click", () => toggleMat(id));
	});
	root.querySelectorAll(".mat-chev").forEach((el) => {
		const id = el.id.replace(/^chev-/, "");
		if (id) on(el, "click", () => toggleMat(id));
	});
	on(must("kerpicSecim"), "change", kerpicSecimDeyisdi);
	on(must("divarQalinliq"), "change", qalinliqDeyisdi);
	on(must("evForm"), "change", formaDeyisdi);
	fillUnitSelect();
	fillFormSelect();
	refreshUnitNote();
	on(root.querySelector("[data-act=\"we-door\"]"), "click", () => weSetType("door"));
	on(root.querySelector("[data-act=\"we-window\"]"), "click", () => weSetType("window"));
	on(root.querySelector("[data-act=\"we-save\"]"), "click", weSave);
	on(root.querySelector("[data-act=\"we-del\"]"), "click", weDelete);
	on(root.querySelector("[data-act=\"we-close\"]"), "click", weClose);
	on(project, "input", hesabla);
	on(project, "change", hesabla);
	showContinue();
	return () => {
		cancelAnimationFrame(rafId);
		cleanups.forEach((fn) => fn());
	};
}
var plannerHead = { links: [{
	rel: "stylesheet",
	href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
}] };
var Route$285 = createFileRoute("/planner")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/planner"),
			replace: true
		});
	},
	head: () => plannerHead,
	component: PlannerPage
});
function PlannerPage() {
	const { lang } = useI18n$1();
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		return mountPlanner(node, lang);
	}, [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "nibras-planner",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		dangerouslySetInnerHTML: { __html: plannerMarkup(lang) }
	});
}
var $$splitComponentImporter$277 = () => import("./privacy-B0p_gvj0.mjs");
var Route$284 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$277, "component") });
var T = {
	az: {
		got: "Kompüterdən gələn fayl",
		dl: "Yüklə",
		saved: "«Son fayllarım»-a da yazıldı."
	},
	en: {
		got: "File sent from your computer",
		dl: "Download",
		saved: "Also saved to «My recent files»."
	},
	tr: {
		got: "Bilgisayardan gelen dosya",
		dl: "İndir",
		saved: "«Son dosyalarım»a da kaydedildi."
	},
	ar: {
		got: "ملف مُرسل من حاسوبك",
		dl: "تنزيل",
		saved: "حُفظ أيضاً في «ملفاتي الأخيرة»."
	},
	ru: {
		got: "Файл с вашего компьютера",
		dl: "Скачать",
		saved: "Также сохранён в «Мои недавние файлы»."
	}
};
/** Shows a note/file packed into /qr#get=… by «Telefona göndər». */
function PhoneReceive() {
	const { lang } = useI18n$1();
	const t = T[lang] ?? T.en;
	const [p, setP] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const read = () => {
			const x = unpackHash(location.hash);
			setP(x);
			if (x) addRecent(new Blob([x.d], { type: x.t }), x.n, "phone");
		};
		read();
		window.addEventListener("hashchange", read);
		return () => window.removeEventListener("hashchange", read);
	}, []);
	if (!p) return null;
	const blob = new Blob([p.d], { type: p.t || "application/octet-stream" });
	const isText = p.t.startsWith("text/") || /\.(txt|md)$/i.test(p.n);
	const dl = () => {
		const u = URL.createObjectURL(blob);
		Object.assign(document.createElement("a"), {
			href: u,
			download: p.n
		}).click();
		setTimeout(() => URL.revokeObjectURL(u), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mb-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4",
		"data-testid": "phone-receive",
		"data-nosnippet": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm font-semibold",
				children: [
					t.got,
					": ",
					p.n
				]
			}),
			isText ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				readOnly: true,
				dir: "auto",
				className: "mt-2 h-40 w-full rounded-xl bg-black/30 p-2 font-mono text-sm",
				value: new TextDecoder().decode(p.d)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-white",
					onClick: dl,
					children: t.dl
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: t.saved
				})]
			})
		]
	});
}
var QrTool = (0, import_react.lazy)(() => import("./qr-tool-39Nm74y5.mjs").then((m) => ({ default: m.QrTool })));
var Route$283 = createFileRoute("/qr")({ component: QrRoutePage });
function QrRoutePage() {
	const { w, lang } = useI18n();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "qr-page mx-auto w-full max-w-7xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6 flex flex-wrap items-center gap-x-4 gap-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/apps/nibras-qr-v2.jpg",
						alt: "",
						width: 56,
						height: 56,
						className: "size-12 shrink-0 rounded-2xl md:size-14"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 basis-56",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
							children: w.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: w.lead
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex w-full gap-4 text-sm text-muted sm:w-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/apps/nibras-qr"),
							className: "hover:text-fg",
							children: w.appPage
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: localeHref(lang, "/privacy/nibras-qr"),
							className: "hover:text-fg",
							children: w.privacy
						})]
					})
				]
			}),
			mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneReceive, {}) : null,
			mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 animate-pulse rounded-2xl bg-bg-elevated" }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrTool, {})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 animate-pulse rounded-2xl bg-bg-elevated" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageAssistant, { topic: "qr" })
		]
	});
}
var $$splitComponentImporter$276 = () => import("./ru-D-gfcYtN.mjs");
var Route$282 = createFileRoute("/ru")({
	loader: ({ location }) => {
		if ((location.pathname.replace(/\/$/, "") || "/") !== "/ru") return { apps: [] };
		return loadHomeApps();
	},
	component: lazyRouteComponent($$splitComponentImporter$276, "component")
});
var $$splitComponentImporter$275 = () => import("./schema-CPohUair.mjs");
var Route$281 = createFileRoute("/schema")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/schema"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$275, "component")
});
var Route$280 = createFileRoute("/seo")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/seo"),
			replace: true
		});
	},
	component: SeoPage
});
var COPY$5 = {
	az: {
		h1: "Nibras SEO Check",
		lead: "Bir səhifənin title, description, canonical, robots və sitemap vəziyyətinə bax. Başqa səhifələr açılmır. Ünvan saxlanmır.",
		label: "Sayt ünvanı",
		button: "Yoxla",
		working: "Yoxlanır…",
		empty: "—",
		yes: "Bəli",
		no: "Xeyr",
		rows: {
			status: "Cavab",
			time: "Vaxt",
			https: "HTTPS",
			title: "Title",
			description: "Description",
			canonical: "Canonical",
			robots: "Robots",
			h1: "H1",
			images: "Şəkillər",
			alt: "Alt-ı olmayan",
			robotsFile: "robots.txt",
			sitemap: "Sitemap"
		},
		notes: {
			"no-https": "Ünvan HTTPS deyil.",
			redirect: "Ünvan başqa ünvana keçir.",
			"no-title": "Title yoxdur.",
			"title-long": "Title 60 simvoldan uzundur.",
			"no-description": "Description yoxdur.",
			"description-long": "Description 160 simvoldan uzundur.",
			"no-canonical": "Canonical yoxdur.",
			noindex: "Səhifə noindex-dir.",
			"h1-none": "H1 yoxdur.",
			"h1-many": "H1 birdən çoxdur.",
			"alt-missing": "Bəzi şəkillərdə alt yoxdur.",
			"robots-missing": "robots.txt tapılmadı.",
			"robots-block": "robots.txt bu ünvanı bağlayır.",
			"sitemap-missing": "Sitemap tapılmadı.",
			truncated: "Fayl böyük olduğu üçün bir hissəsi oxundu."
		},
		errors: {
			"bad-url": "Ünvan http və ya https olmalıdır.",
			blocked: "Bu ünvan yoxlanmır.",
			unreachable: "Sayt açılmadı.",
			rate: "Bir az gözlə, sonra yenidən yoxla.",
			"not-html": "Cavab HTML deyil."
		}
	},
	en: {
		h1: "Nibras SEO Check",
		lead: "Check one page for title, description, canonical, robots, and sitemap. Other pages are not opened. The address is not stored.",
		label: "Site address",
		button: "Check",
		working: "Checking…",
		empty: "—",
		yes: "Yes",
		no: "No",
		rows: {
			status: "Status",
			time: "Time",
			https: "HTTPS",
			title: "Title",
			description: "Description",
			canonical: "Canonical",
			robots: "Robots",
			h1: "H1",
			images: "Images",
			alt: "Images without alt",
			robotsFile: "robots.txt",
			sitemap: "Sitemap"
		},
		notes: {
			"no-https": "The address is not HTTPS.",
			redirect: "The address redirects.",
			"no-title": "There is no title.",
			"title-long": "The title is longer than 60 characters.",
			"no-description": "There is no description.",
			"description-long": "The description is longer than 160 characters.",
			"no-canonical": "There is no canonical.",
			noindex: "The page is noindex.",
			"h1-none": "There is no H1.",
			"h1-many": "There is more than one H1.",
			"alt-missing": "Some images have no alt.",
			"robots-missing": "robots.txt was not found.",
			"robots-block": "robots.txt blocks this address.",
			"sitemap-missing": "No sitemap was found.",
			truncated: "Only part of a large file was read."
		},
		errors: {
			"bad-url": "The address must be http or https.",
			blocked: "This address is not checked.",
			unreachable: "The site did not open.",
			rate: "Wait a moment, then check again.",
			"not-html": "The response is not HTML."
		}
	},
	tr: {
		h1: "Nibras SEO Check",
		lead: "Bir sayfanın title, description, canonical, robots ve sitemap durumuna bak. Başka sayfalar açılmaz. Adres saklanmaz.",
		label: "Site adresi",
		button: "Bak",
		working: "Bakılıyor…",
		empty: "—",
		yes: "Evet",
		no: "Hayır",
		rows: {
			status: "Yanıt",
			time: "Süre",
			https: "HTTPS",
			title: "Title",
			description: "Description",
			canonical: "Canonical",
			robots: "Robots",
			h1: "H1",
			images: "Görseller",
			alt: "Alt olmayan",
			robotsFile: "robots.txt",
			sitemap: "Sitemap"
		},
		notes: {
			"no-https": "Adres HTTPS değil.",
			redirect: "Adres başka adrese gider.",
			"no-title": "Title yok.",
			"title-long": "Title 60 karakterden uzun.",
			"no-description": "Description yok.",
			"description-long": "Description 160 karakterden uzun.",
			"no-canonical": "Canonical yok.",
			noindex: "Sayfa noindex.",
			"h1-none": "H1 yok.",
			"h1-many": "H1 birden fazla.",
			"alt-missing": "Bazı görsellerde alt yok.",
			"robots-missing": "robots.txt bulunamadı.",
			"robots-block": "robots.txt bu adresi kapatıyor.",
			"sitemap-missing": "Sitemap bulunamadı.",
			truncated: "Dosya büyük olduğu için bir kısmı okundu."
		},
		errors: {
			"bad-url": "Adres http veya https olmalıdır.",
			blocked: "Bu adres bakılmaz.",
			unreachable: "Site açılmadı.",
			rate: "Biraz bekle, sonra yeniden bak.",
			"not-html": "Yanıt HTML değil."
		}
	},
	ar: {
		h1: "Nibras SEO Check",
		lead: "يفحص صفحة واحدة: العنوان والوصف والرابط الأساسي وrobots وsitemap. لا تُفتح الصفحات الأخرى. لا يُحفظ العنوان.",
		label: "عنوان الموقع",
		button: "افحص",
		working: "جارٍ الفحص…",
		empty: "—",
		yes: "نعم",
		no: "لا",
		rows: {
			status: "الرد",
			time: "الوقت",
			https: "HTTPS",
			title: "Title",
			description: "Description",
			canonical: "Canonical",
			robots: "Robots",
			h1: "H1",
			images: "الصور",
			alt: "بلا alt",
			robotsFile: "robots.txt",
			sitemap: "Sitemap"
		},
		notes: {
			"no-https": "العنوان ليس HTTPS.",
			redirect: "العنوان يحوّل إلى عنوان آخر.",
			"no-title": "لا يوجد title.",
			"title-long": "العنوان أطول من 60 حرفاً.",
			"no-description": "لا يوجد description.",
			"description-long": "الوصف أطول من 160 حرفاً.",
			"no-canonical": "لا يوجد canonical.",
			noindex: "الصفحة noindex.",
			"h1-none": "لا يوجد H1.",
			"h1-many": "أكثر من H1.",
			"alt-missing": "بعض الصور بلا alt.",
			"robots-missing": "لم يُعثر على robots.txt.",
			"robots-block": "robots.txt يغلق هذا العنوان.",
			"sitemap-missing": "لم يُعثر على sitemap.",
			truncated: "قُرئ جزء من ملف كبير."
		},
		errors: {
			"bad-url": "يجب أن يكون العنوان http أو https.",
			blocked: "لا يُفحص هذا العنوان.",
			unreachable: "الموقع لم يفتح.",
			rate: "انتظر قليلاً ثم أعد الفحص.",
			"not-html": "الرد ليس HTML."
		}
	},
	ru: {
		h1: "Nibras SEO Check",
		lead: "Проверка одной страницы: title, description, canonical, robots и sitemap. Другие страницы не открываются. Адрес не сохраняется.",
		label: "Адрес сайта",
		button: "Проверить",
		working: "Проверка…",
		empty: "—",
		yes: "Да",
		no: "Нет",
		rows: {
			status: "Ответ",
			time: "Время",
			https: "HTTPS",
			title: "Title",
			description: "Description",
			canonical: "Canonical",
			robots: "Robots",
			h1: "H1",
			images: "Картинки",
			alt: "Без alt",
			robotsFile: "robots.txt",
			sitemap: "Sitemap"
		},
		notes: {
			"no-https": "Адрес не HTTPS.",
			redirect: "Адрес перенаправляет.",
			"no-title": "Нет title.",
			"title-long": "Title длиннее 60 символов.",
			"no-description": "Нет description.",
			"description-long": "Description длиннее 160 символов.",
			"no-canonical": "Нет canonical.",
			noindex: "Страница noindex.",
			"h1-none": "Нет H1.",
			"h1-many": "H1 больше одного.",
			"alt-missing": "У части картинок нет alt.",
			"robots-missing": "robots.txt не найден.",
			"robots-block": "robots.txt закрывает этот адрес.",
			"sitemap-missing": "Sitemap не найден.",
			truncated: "Большой файл прочитан частично."
		},
		errors: {
			"bad-url": "Адрес должен быть http или https.",
			blocked: "Этот адрес не проверяется.",
			unreachable: "Сайт не открылся.",
			rate: "Подождите немного и проверьте снова.",
			"not-html": "Ответ не HTML."
		}
	}
};
function SeoPage() {
	const { lang } = useI18n$1();
	const copy = COPY$5[lang];
	const faq = SEARCH_FAQ["/seo"];
	const [url, setUrl] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [report, setReport] = (0, import_react.useState)(null);
	async function onSubmit(event) {
		event.preventDefault();
		setBusy(true);
		setError("");
		setReport(null);
		try {
			const data = await (await fetch("/api/seo-check", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ url: url.trim() })
			})).json();
			if (!data.ok) setError(copy.errors[data.error || "unreachable"] || copy.errors.unreachable);
			else setReport(data);
		} catch {
			setError(copy.errors.unreachable);
		} finally {
			setBusy(false);
		}
	}
	const sitemapText = report ? report.sitemap.found ? report.sitemap.kind === "index" ? `${report.sitemap.count} sitemap` : `${report.sitemap.count}` : copy.no : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "nx-tool files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "nx-tool-mark",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
						children: copy.h1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: copy.lead
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mb-6 grid gap-3",
				onSubmit,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1 block text-muted",
						children: copy.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
						value: url,
						inputMode: "url",
						placeholder: "https://",
						onChange: (event) => setUrl(event.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "nx-go w-fit rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60",
					disabled: busy || !url.trim(),
					children: busy ? copy.working : copy.button
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-sm text-red-300",
				children: error
			}) : null,
			report ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nx-panel mb-8 grid gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "break-all text-muted",
						children: report.finalUrl
					}),
					[
						[copy.rows.status, String(report.status)],
						[copy.rows.time, `${report.ms} ms`],
						[copy.rows.https, report.https ? copy.yes : copy.no],
						[copy.rows.title, report.title || copy.empty],
						[copy.rows.description, report.description || copy.empty],
						[copy.rows.canonical, report.canonical || copy.empty],
						[copy.rows.robots, report.robots || copy.empty],
						[copy.rows.h1, String(report.h1)],
						[copy.rows.images, String(report.images)],
						[copy.rows.alt, String(report.missingAlt)],
						[copy.rows.robotsFile, report.robotsFound ? copy.yes : copy.no],
						[copy.rows.sitemap, sitemapText]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "grid grid-cols-[9rem_1fr] gap-3 border-b border-white/10 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "break-words",
							children: value
						})]
					}, label)),
					report.notes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 list-disc pl-5 text-muted",
						children: report.notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: copy.notes[note] || note }, note))
					}) : null
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextLinks, { links: [{
				href: "/tools",
				label: {
					az: "Xidmətlər",
					en: "Tools",
					tr: "Araçlar",
					ar: "الأدوات",
					ru: "Сервисы"
				}
			}, {
				href: "/wifi",
				label: {
					az: "Wi-Fi QR",
					en: "Wi-Fi QR",
					tr: "Wi-Fi QR",
					ar: "Wi-Fi QR",
					ru: "Wi-Fi QR"
				}
			}] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				"aria-labelledby": "seo-faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "seo-faq",
					className: "text-base font-semibold",
					children: faq.title[lang]
				}), faq.items[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.a
				})] }, item.q))]
			})
		]
	});
}
var $$splitComponentImporter$274 = () => import("./services-0fkxypND.mjs");
var Route$279 = createFileRoute("/services")({
	head: () => ({ meta: servicesMeta("az") }),
	component: lazyRouteComponent($$splitComponentImporter$274, "component")
});
var $$splitComponentImporter$273 = () => import("./shortcuts-5I3b_toa.mjs");
var Route$278 = createFileRoute("/shortcuts")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/shortcuts"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$273, "component")
});
var $$splitComponentImporter$272 = () => import("./soz-Bc3rQRVa.mjs");
var Route$277 = createFileRoute("/soz")({ component: lazyRouteComponent($$splitComponentImporter$272, "component") });
var Route$276 = createFileRoute("/soz-sayi")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/soz-sayi"),
			replace: true
		});
	},
	component: WordCountPage
});
var COPY$4 = {
	az: {
		h1: "Söz sayı",
		lead: "Mətndə neçə söz, hərf və sətir olduğunu say. Pulsuz, mətn brauzerdən çıxmır.",
		placeholder: "Mətni bura yaz",
		words: "Söz",
		chars: "Hərf",
		nospace: "Boşluqsuz",
		lines: "Sətir"
	},
	en: {
		h1: "Word count",
		lead: "Count the words, letters and lines in a text. Free, the text stays in your browser.",
		placeholder: "Write the text here",
		words: "Words",
		chars: "Characters",
		nospace: "No spaces",
		lines: "Lines"
	},
	tr: {
		h1: "Söz sayısı",
		lead: "Metinde kaç söz, harf ve satır olduğunu say. Ücretsiz, metin tarayıcıdan çıkmaz.",
		placeholder: "Metni buraya yaz",
		words: "Söz",
		chars: "Harf",
		nospace: "Boşluksuz",
		lines: "Satır"
	},
	ar: {
		h1: "عدد الكلمات",
		lead: "عدّ الكلمات والحروف والأسطر في النص. مجاناً، والنص يبقى في المتصفح.",
		placeholder: "اكتب النص هنا",
		words: "كلمة",
		chars: "حرف",
		nospace: "بلا فراغ",
		lines: "سطر"
	},
	ru: {
		h1: "Количество слов",
		lead: "Посчитайте слова, буквы и строки в тексте. Бесплатно, текст остаётся в браузере.",
		placeholder: "Напишите текст здесь",
		words: "Слова",
		chars: "Буквы",
		nospace: "Без пробелов",
		lines: "Строки"
	}
};
function WordCountPage() {
	const { lang } = useI18n$1();
	const copy = COPY$4[lang];
	const faq = SEARCH_FAQ["/soz-sayi"];
	const [text, setText] = (0, import_react.useState)("");
	const chars = Array.from(text).length;
	const nospace = Array.from(text.replace(/\s/g, "")).length;
	const words = text.trim() ? text.trim().split(/\s+/).length : 0;
	const lines = text.length ? text.split(/\n/).length : 0;
	const stats = [
		[copy.words, words],
		[copy.chars, chars],
		[copy.nospace, nospace],
		[copy.lines, lines]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
					children: copy.h1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: copy.lead
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "mb-4 min-h-40 w-full rounded-2xl border border-white/15 bg-white/5 p-4 text-sm",
				placeholder: copy.placeholder,
				value: text,
				onChange: (event) => setText(event.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: stats.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-2xl font-bold",
						children: value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs text-muted",
						children: label
					})]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextLinks, { links: [{
				href: "/faiz",
				label: {
					az: "Faiz hesabla",
					en: "Calculate a percent",
					tr: "Yüzde hesapla",
					ar: "احسب النسبة",
					ru: "Посчитать процент"
				}
			}, {
				href: "/wifi",
				label: {
					az: "Wi-Fi QR",
					en: "Wi-Fi QR",
					tr: "Wi-Fi QR",
					ar: "رمز Wi-Fi",
					ru: "Wi-Fi QR"
				}
			}] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				"aria-labelledby": "soz-faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "soz-faq",
					className: "text-base font-semibold",
					children: faq.title[lang]
				}), faq.items[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.a
				})] }, item.q))]
			})
		]
	});
}
var $$splitComponentImporter$271 = () => import("./studio-CZrslPa4.mjs");
var Route$275 = createFileRoute("/studio")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/studio"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$271, "component")
});
var Route$274 = createFileRoute("/terms")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/terms"),
			replace: true
		});
	},
	component: TermsPage
});
var COPY$3 = {
	az: {
		eyebrow: "İstifadə şərtləri",
		title: "İstifadə şərtləri",
		body: [
			"Nibras Code müstəqil şəxsi layihədir. Bu, ofisi olan şirkət deyil. Telefon nömrəsi və fiziki ünvan yoxdur.",
			"Rəsmi əlaqə yalnız e-poçtdur: nibrascode@gmail.com. Məktub oxunur və cavablandırılır.",
			"Sayt və alətlər olduğu kimi, pulsuz təqdim olunur. Hesab açmaq şərt deyil. Özün yaratdığın fayl və mətn sənindir.",
			"Saytı qanuna zidd, başqasının hüququnu pozan və ya zərər vermək üçün istifadə etmə.",
			"Fasilə, səhv və ya məlumat itkisinə görə zəmanət verilmir. Vacib sənədin öz nüsxəsini saxla.",
			"Şərtlər dəyişə bilər. Keçərli olan bu səhifənin son halıdır. Məxfilik siyasəti ayrıca səhifədədir."
		]
	},
	en: {
		eyebrow: "Terms of use",
		title: "Terms of use",
		body: [
			"Nibras Code is an independent personal project. It is not a company with an office. There is no phone number and no physical address.",
			"The only official contact is email: nibrascode@gmail.com. A letter is read and answered.",
			"The site and the tools are offered as they are, free of charge. An account is not required. A file or text you create is yours.",
			"Do not use the site for anything illegal, for violating someone else’s rights, or to cause harm.",
			"There is no warranty against interruption, error, or loss of data. Keep your own copy of an important document.",
			"These terms can change. The current text of this page is the one that applies. The privacy policy is on its own page."
		]
	},
	tr: {
		eyebrow: "Kullanım şartları",
		title: "Kullanım şartları",
		body: [
			"Nibras Code bağımsız kişisel bir projedir. Ofisi olan bir şirket değildir. Telefon numarası ve fiziksel adres yoktur.",
			"Resmi iletişim yalnızca e-postadır: nibrascode@gmail.com. Mektup okunur ve cevaplanır.",
			"Site ve araçlar olduğu gibi, ücretsiz sunulur. Hesap açmak şart değildir. Kendin oluşturduğun dosya ve metin senindir.",
			"Siteyi yasaya aykırı, başkasının hakkını çiğneyen veya zarar vermek için kullanma.",
			"Kesinti, hata veya veri kaybı için garanti verilmez. Önemli belgenin kendi kopyasını sakla.",
			"Şartlar değişebilir. Geçerli olan bu sayfanın son halidir. Gizlilik politikası ayrı bir sayfadadır."
		]
	},
	ar: {
		eyebrow: "شروط الاستخدام",
		title: "شروط الاستخدام",
		body: [
			"Nibras Code مشروع شخصي مستقل. ليس شركة لها مكتب. لا يوجد رقم هاتف ولا عنوان فعلي.",
			"التواصل الرسمي بالبريد فقط: nibrascode@gmail.com. تُقرأ الرسالة ويُرد عليها.",
			"يُقدَّم الموقع والأدوات كما هي، مجاناً. فتح حساب ليس شرطاً. الملف أو النص الذي تنشئه لك.",
			"لا تستخدم الموقع فيما يخالف القانون أو ينتهك حق غيرك أو يسبب ضرراً.",
			"لا ضمان ضد الانقطاع أو الخطأ أو فقدان البيانات. احتفظ بنسختك من أي مستند مهم.",
			"قد تتغير الشروط. النص الحالي لهذه الصفحة هو المعمول به. سياسة الخصوصية في صفحة مستقلة."
		]
	},
	ru: {
		eyebrow: "Условия использования",
		title: "Условия использования",
		body: [
			"Nibras Code — независимый личный проект. Это не компания с офисом. Телефона и физического адреса нет.",
			"Официальная связь только по почте: nibrascode@gmail.com. Письмо читают и на него отвечают.",
			"Сайт и инструменты даются как есть, бесплатно. Учётная запись не обязательна. Файл или текст, который вы создали, ваш.",
			"Не используйте сайт для незаконного, для нарушения чужого права или чтобы причинить вред.",
			"Гарантии от перерыва, ошибки или потери данных нет. Важную копию храните у себя.",
			"Условия могут измениться. Действует последняя версия этой страницы. Политика конфиденциальности — на отдельной странице."
		]
	}
};
function TermsPage() {
	const { lang } = useI18n$1();
	const copy = COPY$3[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), copy.eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: copy.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoCards, { children: [
				copy.body.map((paragraph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: [
						User,
						Mail,
						Gift,
						Ban,
						TriangleAlert,
						RefreshCw
					][i] ?? FileText,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph })
				}, paragraph)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: ShieldCheck,
					href: localeHref(lang, "/privacy"),
					title: lang === "az" ? "Məxfilik siyasəti" : lang === "tr" ? "Gizlilik politikası" : lang === "ar" ? "سياسة الخصوصية" : lang === "ru" ? "Политика конфиденциальности" : "Privacy policy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Scale,
					href: localeHref(lang, "/tools-legal"),
					title: {
						az: "Studio, Workspace, Learn və Site Doctor üçün məxfilik və şərtlər",
						en: "Privacy and terms for Studio, Workspace, Learn and Site Doctor",
						tr: "Studio, Workspace, Learn ve Site Doctor için gizlilik ve koşullar",
						ar: "الخصوصية والشروط لـ Studio وWorkspace وLearn وSite Doctor",
						ru: "Конфиденциальность и условия для Studio, Workspace, Learn и Site Doctor"
					}[lang] ?? "Privacy and terms for Studio, Workspace, Learn and Site Doctor"
				})
			] })
		]
	});
}
var $$splitComponentImporter$270 = () => import("./tools-g647lJ7A.mjs");
var Route$273 = createFileRoute("/tools")({ component: lazyRouteComponent($$splitComponentImporter$270, "component") });
var $$splitComponentImporter$269 = () => import("./tools-legal-DFgrFsFX.mjs");
var Route$272 = createFileRoute("/tools-legal")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/tools-legal"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$269, "component")
});
var $$splitComponentImporter$268 = () => import("./tr-5fZyBxwU.mjs");
var Route$271 = createFileRoute("/tr")({
	loader: ({ location }) => {
		if ((location.pathname.replace(/\/$/, "") || "/") !== "/tr") return { apps: [] };
		return loadHomeApps();
	},
	component: lazyRouteComponent($$splitComponentImporter$268, "component")
});
var Route$270 = createFileRoute("/trust")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/trust"),
			replace: true
		});
	},
	component: TrustPage
});
var COPY$2 = {
	az: {
		eyebrow: "Şəffaflıq",
		title: "Nibras Code-a nə qədər güvənmək olar",
		lead: "Bu səhifə açıq yazır: kimik, fayllarla nə olur və nəyi vəd edirik, nəyi yox.",
		blocks: [
			{
				h: "Kimik",
				p: ["Nibras Code müstəqil layihədir. Qurucusu Mahir Əliyevdir. Ofis və telefon yoxdur.", "Rəsmi əlaqə yalnız e-poçtdur: nibrascode@gmail.com."]
			},
			{
				h: "Fayllarınla nə olur",
				p: [
					"PDF, şəkil, QR, ZIP alətləri brauzerdə işləyir. Fayl serverə göndərilmir.",
					"Nibras AI-yə yazdığın mətn cavab üçün serverə gedir. Şəxsi məlumat yazma.",
					"Tətbiqlərin öz məxfilik səhifəsi var."
				]
			},
			{
				h: "Saxta rəy yoxdur",
				p: ["Saytda uydurma ulduz, reytinq, rəy və ya yükləmə sayı yoxdur və olmayacaq.", "Real reytinqlər Google Play-dədir. Saytda onları köçürmürük, yalnız mağazaya link veririk."]
			}
		],
		levelTitle: "Xidmət səviyyəsi",
		levels: [
			["Pulsuz alətlər", "Brauzerdə işləyir, hesab lazım deyil. Mümkün qədər işlək saxlanılır, amma zəmanət yoxdur."],
			["Tətbiqlər", "Google Play və Huawei AppGallery linkləri realdır. Yeniləmələr mağaza vasitəsilə gəlir."],
			["Nibras AI", "Pulsuzdur. Bəzən yavaşlaya və ya müvəqqəti dayana bilər. Cavab səhv ola bilər, yoxla."],
			["Xəta olarsa", "nibrascode@gmail.com ünvanına yaz: hansı səhifə, nə baş verdi. Məktub oxunur."]
		],
		links: [
			["/about", "Haqqımızda"],
			["/privacy", "Bütün məxfilik siyasətləri"],
			["/nedir", "Nibras Code nədir?"],
			["/terms", "İstifadə şərtləri"],
			["/contact", "Əlaqə"],
			["/apps", "Tətbiqlər"]
		]
	},
	en: {
		eyebrow: "Transparency",
		title: "How far you can trust Nibras Code",
		lead: "This page says it plainly: who we are, what happens to files, and what we promise and what we do not.",
		blocks: [
			{
				h: "Who we are",
				p: ["Nibras Code is an independent project. Its founder is Mahir Aliyev. There is no office and no phone.", "The only official contact is email: nibrascode@gmail.com."]
			},
			{
				h: "What happens to your files",
				p: [
					"The PDF, image, QR and ZIP tools run in your browser. The file is not sent to a server.",
					"Text you write to Nibras AI goes to a server to get an answer. Do not write personal data.",
					"Each app has its own privacy page."
				]
			},
			{
				h: "No fake reviews",
				p: ["The site has no invented stars, ratings, reviews or download counts, and it will not.", "Real ratings live on Google Play. We do not copy numbers here, we only link to the store."]
			}
		],
		levelTitle: "Service level",
		levels: [
			["Free tools", "Run in the browser, no account. Kept working as well as possible, but with no guarantee."],
			["Apps", "The Google Play and Huawei AppGallery links are real. Updates come through the store."],
			["Nibras AI", "Free. It can be slow or stop for a while. An answer can be wrong, so check it."],
			["If something breaks", "Write to nibrascode@gmail.com: which page and what happened. The letter is read."]
		],
		links: [
			["/about", "About"],
			["/privacy", "All privacy policies"],
			["/nedir", "What is Nibras Code?"],
			["/terms", "Terms"],
			["/contact", "Contact"],
			["/apps", "Apps"]
		]
	},
	tr: {
		eyebrow: "Şeffaflık",
		title: "Nibras Code'a ne kadar güvenilir",
		lead: "Bu sayfa açıkça yazar: kimiz, dosyalara ne olur, neyi vaat ediyoruz, neyi etmiyoruz.",
		blocks: [
			{
				h: "Kimiz",
				p: ["Nibras Code bağımsız bir projedir. Kurucusu Mahir Aliyev'dir. Ofis ve telefon yoktur.", "Resmi iletişim yalnızca e-postadır: nibrascode@gmail.com."]
			},
			{
				h: "Dosyalarına ne olur",
				p: [
					"PDF, resim, QR ve ZIP araçları tarayıcıda çalışır. Dosya sunucuya gönderilmez.",
					"Nibras AI'ye yazdığın metin cevap için sunucuya gider. Kişisel bilgi yazma.",
					"Uygulamaların kendi gizlilik sayfası vardır."
				]
			},
			{
				h: "Sahte yorum yok",
				p: ["Sitede uydurma yıldız, puan, yorum veya indirme sayısı yoktur ve olmayacak.", "Gerçek puanlar Google Play'dedir. Burada sayı kopyalamıyoruz, yalnızca mağazaya bağlantı veriyoruz."]
			}
		],
		levelTitle: "Hizmet seviyesi",
		levels: [
			["Ücretsiz araçlar", "Tarayıcıda çalışır, hesap gerekmez. Mümkün olduğunca çalışır tutulur, ama garanti yoktur."],
			["Uygulamalar", "Google Play ve Huawei AppGallery bağlantıları gerçektir. Güncellemeler mağazadan gelir."],
			["Nibras AI", "Ücretsizdir. Bazen yavaşlayabilir veya geçici durabilir. Cevap yanlış olabilir, kontrol et."],
			["Hata olursa", "nibrascode@gmail.com adresine yaz: hangi sayfa, ne oldu. Mektup okunur."]
		],
		links: [
			["/about", "Hakkımızda"],
			["/privacy", "Tüm gizlilik politikaları"],
			["/nedir", "Nibras Code nedir?"],
			["/terms", "Kullanım şartları"],
			["/contact", "İletişim"],
			["/apps", "Uygulamalar"]
		]
	},
	ar: {
		eyebrow: "الشفافية",
		title: "إلى أي حد يمكن الوثوق بـ Nibras Code",
		lead: "هذه الصفحة تقول بوضوح: من نحن، وماذا يحدث للملفات، وما نعد به وما لا نعد به.",
		blocks: [
			{
				h: "من نحن",
				p: ["Nibras Code مشروع مستقل. مؤسسه ماهر علييف. لا مكتب ولا هاتف.", "التواصل الرسمي بالبريد فقط: nibrascode@gmail.com."]
			},
			{
				h: "ماذا يحدث لملفاتك",
				p: [
					"أدوات PDF والصور وQR وZIP تعمل في المتصفح. لا يُرسل الملف إلى خادم.",
					"النص الذي تكتبه لـ Nibras AI يذهب إلى خادم للحصول على جواب. لا تكتب بيانات شخصية.",
					"لكل تطبيق صفحة خصوصية خاصة."
				]
			},
			{
				h: "لا تقييمات مزيفة",
				p: ["لا توجد في الموقع نجوم أو تقييمات أو مراجعات أو أرقام تنزيل مختلقة، ولن توجد.", "التقييمات الحقيقية موجودة في Google Play. لا ننقل الأرقام هنا، بل نضع رابط المتجر فقط."]
			}
		],
		levelTitle: "مستوى الخدمة",
		levels: [
			["الأدوات المجانية", "تعمل في المتصفح بلا حساب. نحافظ على عملها قدر الإمكان، دون ضمان."],
			["التطبيقات", "روابط Google Play وHuawei AppGallery حقيقية. التحديثات تأتي عبر المتجر."],
			["Nibras AI", "مجاني. قد يبطئ أو يتوقف مؤقتاً. قد يكون الجواب خاطئاً، فتحقق منه."],
			["إن حدث خطأ", "اكتب إلى nibrascode@gmail.com: أي صفحة وماذا حدث. تُقرأ الرسالة."]
		],
		links: [
			["/about", "من نحن"],
			["/privacy", "كل سياسات الخصوصية"],
			["/nedir", "ما هو Nibras Code؟"],
			["/terms", "شروط الاستخدام"],
			["/contact", "تواصل"],
			["/apps", "التطبيقات"]
		]
	},
	ru: {
		eyebrow: "Прозрачность",
		title: "Насколько можно доверять Nibras Code",
		lead: "Здесь прямо написано: кто мы, что происходит с файлами, что мы обещаем и чего нет.",
		blocks: [
			{
				h: "Кто мы",
				p: ["Nibras Code — независимый проект. Основатель — Махир Алиев. Офиса и телефона нет.", "Официальная связь только по почте: nibrascode@gmail.com."]
			},
			{
				h: "Что происходит с файлами",
				p: [
					"Инструменты PDF, изображений, QR и ZIP работают в браузере. Файл не отправляется на сервер.",
					"Текст для Nibras AI уходит на сервер, чтобы получить ответ. Не пишите личные данные.",
					"У каждого приложения своя страница конфиденциальности."
				]
			},
			{
				h: "Без фальшивых отзывов",
				p: ["На сайте нет выдуманных звёзд, оценок, отзывов или числа загрузок, и не будет.", "Настоящие оценки — в Google Play. Мы не переносим цифры сюда, а только даём ссылку на магазин."]
			}
		],
		levelTitle: "Уровень сервиса",
		levels: [
			["Бесплатные инструменты", "Работают в браузере, без аккаунта. Поддерживаются по мере сил, без гарантии."],
			["Приложения", "Ссылки Google Play и Huawei AppGallery настоящие. Обновления приходят через магазин."],
			["Nibras AI", "Бесплатно. Может замедлиться или временно остановиться. Ответ может быть неверным — проверяйте."],
			["Если что-то сломалось", "Напишите на nibrascode@gmail.com: какая страница и что случилось. Письмо читают."]
		],
		links: [
			["/about", "О нас"],
			["/privacy", "Все политики конфиденциальности"],
			["/nedir", "Что такое Nibras Code?"],
			["/terms", "Условия"],
			["/contact", "Контакт"],
			["/apps", "Приложения"]
		]
	}
};
function TrustPage() {
	const { lang } = useI18n$1();
	const c = COPY$2[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), c.eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: c.title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "why-lead",
				children: c.lead
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: c.blocks.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: [
					Users,
					FileLock,
					BadgeCheck
				][i] ?? ShieldCheck,
				title: b.h,
				children: b.p.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p))
			}, b.h)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "info-section-title",
				children: c.levelTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: c.levels.map(([k, v], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: [
					Wrench,
					Smartphone,
					Bot,
					Mail
				][i] ?? ShieldCheck,
				title: k,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: v })
			}, k)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: c.links.map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: ArrowUpRight,
				title: label,
				href: localeHref(lang, href)
			}, href)) })
		]
	});
}
var Route$269 = createFileRoute("/unknown")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/unknown"),
			replace: true
		});
	},
	component: UnknownPage
});
var KEY = "nibras-unknown";
var CODE = 1186581832;
var PASS = 31680021;
function sig(value) {
	let n = 2166136261;
	const text = value.trim().toUpperCase();
	for (const char of text) n = Math.imul(n ^ char.charCodeAt(0), 16777619);
	return n >>> 0;
}
var COPY$1 = {
	az: {
		h1: "Nibras Unknown",
		lead: "Üç addım var: qeyd, kod, şifrə. Düzgün açılış növbəti hissəni göstərir. Serverə getmir, bu cihazda qalır.",
		note: "Qeyd. Qapının kodu üç işarədir. Birincisi saytın adının ilk hərfidir. İkincisi X-dir. Üçüncüsü bu oyundakı addımların sayıdır. Bitişik yaz.",
		code: "const key = \"NI\" + \"BR\" + \"3\";",
		end: "Qapı açıldı. Otaq boşdur. Divarda bir cümlə var: növbəti hissə hələ yazılmayıb. Bu, birinci sirrdən sonrakı ilk dayanacaqdır.",
		ph: "Kodu və ya şifrəni yaz",
		open: "Aç",
		wrong: "Bu deyil.",
		again: "Başdan",
		steps: [
			"Qeyd",
			"Kod",
			"Şifrə"
		]
	},
	en: {
		h1: "Nibras Unknown",
		lead: "Three steps: a note, a code, a password. The right one opens the next part. Nothing is sent. It stays on this device.",
		note: "Note. The door code is three marks. The first is the first letter of the site name. The second is X. The third is how many steps this game has. Write them together.",
		code: "const key = \"NI\" + \"BR\" + \"3\";",
		end: "The door opened. The room is empty. One line is on the wall: the next part is not written yet. This is the first stop after the first secret.",
		ph: "Write the code or the password",
		open: "Open",
		wrong: "Not this.",
		again: "Start over",
		steps: [
			"Note",
			"Code",
			"Password"
		]
	},
	tr: {
		h1: "Nibras Unknown",
		lead: "Üç adım var: not, kod, şifre. Doğru açılış sonraki parçayı gösterir. Sunucuya gitmez, bu cihazda kalır.",
		note: "Not. Kapının kodu üç işarettir. Birincisi sitenin adının ilk harfidir. İkincisi X'tir. Üçüncüsü bu oyundaki adım sayısıdır. Bitişik yaz.",
		code: "const key = \"NI\" + \"BR\" + \"3\";",
		end: "Kapı açıldı. Oda boş. Duvarda bir cümle var: sonraki parça henüz yazılmadı. Bu, ilk sırdan sonraki ilk duraktır.",
		ph: "Kodu ya da şifreyi yaz",
		open: "Aç",
		wrong: "Bu değil.",
		again: "Baştan",
		steps: [
			"Not",
			"Kod",
			"Şifre"
		]
	},
	ar: {
		h1: "Nibras Unknown",
		lead: "ثلاث خطوات: ملاحظة وكود وكلمة سر. الفتح الصحيح يُظهر الجزء التالي. لا يذهب إلى خادم ويبقى على هذا الجهاز.",
		note: "ملاحظة. رمز الباب ثلاث علامات. الأولى أول حرف من اسم الموقع. الثانية X. الثالثة عدد خطوات هذه اللعبة. اكتبها متصلة.",
		code: "const key = \"NI\" + \"BR\" + \"3\";",
		end: "فُتح الباب. الغرفة فارغة. على الجدار جملة: الجزء التالي لم يُكتب بعد. هذه أول محطة بعد السر الأول.",
		ph: "اكتب الرمز أو كلمة السر",
		open: "افتح",
		wrong: "ليس هذا.",
		again: "من البداية",
		steps: [
			"ملاحظة",
			"كود",
			"كلمة سر"
		]
	},
	ru: {
		h1: "Nibras Unknown",
		lead: "Три шага: записка, код, пароль. Верный ввод открывает следующую часть. На сервер не уходит и остаётся на этом устройстве.",
		note: "Записка. Код двери — три знака. Первый — первая буква имени сайта. Второй — X. Третий — число шагов в этой игре. Пишите слитно.",
		code: "const key = \"NI\" + \"BR\" + \"3\";",
		end: "Дверь открылась. Комната пуста. На стене одна строка: следующая часть ещё не написана. Это первая остановка после первой тайны.",
		ph: "Введите код или пароль",
		open: "Открыть",
		wrong: "Не то.",
		again: "Сначала",
		steps: [
			"Записка",
			"Код",
			"Пароль"
		]
	}
};
function UnknownPage() {
	const { lang } = useI18n$1();
	const copy = COPY$1[lang];
	const faq = SEARCH_FAQ["/unknown"];
	const [level, setLevel] = (0, import_react.useState)(0);
	const [value, setValue] = (0, import_react.useState)("");
	const [wrong, setWrong] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = Number(localStorage.getItem(KEY) || "0");
		if (saved === 1 || saved === 2) setLevel(saved);
	}, []);
	function save(next) {
		setLevel(next);
		setValue("");
		setWrong(false);
		localStorage.setItem(KEY, String(next));
	}
	function onSubmit(event) {
		event.preventDefault();
		const hit = sig(value);
		if (level === 0 && hit === CODE) save(1);
		else if (level === 1 && hit === PASS) save(2);
		else setWrong(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "nx-tool files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "nx-tool-mark",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
						children: copy.h1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: copy.lead
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 flex gap-2 text-sm",
				children: copy.steps.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: index <= level ? "text-white" : "text-muted",
					children: [
						index + 1,
						". ",
						label
					]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: copy.steps[0]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm",
					children: copy.note
				})]
			}),
			level >= 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: copy.steps[1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-2 overflow-x-auto rounded-xl p-3 text-xs",
					children: copy.code
				})]
			}) : null,
			level >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: copy.steps[2]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm",
					children: copy.end
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mb-6 grid gap-3",
				onSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full rounded-xl border border-white/15 px-3 py-2",
						value,
						placeholder: copy.ph,
						autoComplete: "off",
						onChange: (event) => {
							setValue(event.target.value);
							setWrong(false);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "nx-go w-fit rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white",
						children: copy.open
					}),
					wrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-red-300",
						children: copy.wrong
					}) : null
				]
			}),
			level > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mb-8 text-sm text-muted",
				onClick: () => {
					localStorage.removeItem(KEY);
					setLevel(0);
					setValue("");
					setWrong(false);
				},
				children: copy.again
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextLinks, { links: [{
				href: "/logic",
				label: {
					az: "Sual qur",
					en: "Build questions",
					tr: "Soru kur",
					ar: "ابنِ أسئلة",
					ru: "Собрать вопросы"
				}
			}, {
				href: "/flow",
				label: {
					az: "Hazırla",
					en: "Prepare",
					tr: "Hazırla",
					ar: "جهّز",
					ru: "Подготовь"
				}
			}] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				"aria-labelledby": "unknown-faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "unknown-faq",
					className: "text-base font-semibold",
					children: faq.title[lang]
				}), faq.items[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.a
				})] }, item.q))]
			})
		]
	});
}
var $$splitComponentImporter$267 = () => import("./unutma-CrfzrDVg.mjs");
var Route$268 = createFileRoute("/unutma")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$267, "component")
});
var $$splitComponentImporter$266 = () => import("./vcard-phY9b8OX.mjs");
var Route$267 = createFileRoute("/vcard")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/vcard"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$266, "component")
});
var $$splitComponentImporter$265 = () => import("./video-BdY69RHD.mjs");
var Route$266 = createFileRoute("/video")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/video"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$265, "component")
});
var $$splitComponentImporter$264 = () => import("./voice-BkCEvVDg.mjs");
var Route$265 = createFileRoute("/voice")({
	head: () => ({ meta: voiceMeta("az") }),
	component: lazyRouteComponent($$splitComponentImporter$264, "component")
});
var $$splitComponentImporter$263 = () => import("./why-DzTwLqnx.mjs");
var Route$264 = createFileRoute("/why")({ component: lazyRouteComponent($$splitComponentImporter$263, "component") });
var Route$263 = createFileRoute("/wifi")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/wifi"),
			replace: true
		});
	},
	component: WifiPage
});
var COPY = {
	az: {
		h1: "Wi-Fi QR",
		lead: "Şəbəkə adını və şifrəni QR koda çevir. Qonaq skan edib qoşulsun. Pulsuz, şifrə brauzerdən çıxmır.",
		ssid: "Şəbəkə adı",
		password: "Şifrə",
		security: "Qoruma",
		wpa: "WPA",
		wep: "WEP",
		open: "Şifrəsiz",
		download: "Yüklə"
	},
	en: {
		h1: "Wi-Fi QR",
		lead: "Turn a network name and password into a QR code. A guest scans it and joins. Free, the password stays in your browser.",
		ssid: "Network name",
		password: "Password",
		security: "Security",
		wpa: "WPA",
		wep: "WEP",
		open: "No password",
		download: "Download"
	},
	tr: {
		h1: "Wi-Fi QR",
		lead: "Ağ adını ve şifreyi QR koda çevir. Konuk tarayıp bağlansın. Ücretsiz, şifre tarayıcıdan çıkmaz.",
		ssid: "Ağ adı",
		password: "Şifre",
		security: "Koruma",
		wpa: "WPA",
		wep: "WEP",
		open: "Şifresiz",
		download: "İndir"
	},
	ar: {
		h1: "رمز QR لـ Wi-Fi",
		lead: "حوّل اسم الشبكة وكلمة المرور إلى رمز QR. يمسحه الضيف ويتصل. مجاناً، وكلمة المرور تبقى في المتصفح.",
		ssid: "اسم الشبكة",
		password: "كلمة المرور",
		security: "الحماية",
		wpa: "WPA",
		wep: "WEP",
		open: "بلا كلمة مرور",
		download: "تنزيل"
	},
	ru: {
		h1: "Wi-Fi QR",
		lead: "Превратите имя сети и пароль в QR-код. Гость сканирует и подключается. Бесплатно, пароль остаётся в браузере.",
		ssid: "Имя сети",
		password: "Пароль",
		security: "Защита",
		wpa: "WPA",
		wep: "WEP",
		open: "Без пароля",
		download: "Скачать"
	}
};
function payload(ssid, password, security) {
	const esc = (value) => value.replace(/([\\;,:"])/g, "\\$1");
	const auth = security === "nopass" ? "nopass" : security;
	const pass = auth === "nopass" ? "" : `P:${esc(password)};`;
	return `WIFI:T:${auth};S:${esc(ssid)};${pass}H:false;;`;
}
function WifiPage() {
	const { lang } = useI18n$1();
	const copy = COPY[lang];
	const faq = SEARCH_FAQ["/wifi"];
	const [ssid, setSsid] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [security, setSecurity] = (0, import_react.useState)("WPA");
	const [url, setUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!ssid.trim()) {
			setUrl("");
			return;
		}
		let stop = false;
		import("../_libs/qrcode.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then((mod) => {
			return mod.default.toDataURL(payload(ssid.trim(), password, security), {
				margin: 1,
				width: 320
			});
		}).then((next) => {
			if (!stop) setUrl(next);
		}).catch(() => {
			if (!stop) setUrl("");
		});
		return () => {
			stop = true;
		};
	}, [
		ssid,
		password,
		security
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
					children: copy.h1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: copy.lead
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-muted",
							children: copy.ssid
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
							value: ssid,
							onChange: (event) => setSsid(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-muted",
							children: copy.password
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
							value: password,
							onChange: (event) => setPassword(event.target.value),
							disabled: security === "nopass"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-muted",
							children: copy.security
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2",
							value: security,
							onChange: (event) => setSecurity(event.target.value),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "WPA",
									children: copy.wpa
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "WEP",
									children: copy.wep
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "nopass",
									children: copy.open
								})
							]
						})]
					})
				]
			}),
			url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-col items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: url,
					alt: "",
					width: 220,
					height: 220,
					className: "rounded-2xl bg-white p-3"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white",
					href: url,
					download: "wifi-qr.png",
					children: copy.download
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextLinks, { links: [
				{
					href: "/qr",
					label: {
						az: "QR kod",
						en: "QR code",
						tr: "QR kod",
						ar: "رمز QR",
						ru: "QR-код"
					}
				},
				{
					href: "/vcard",
					label: {
						az: "Vizit kartı QR",
						en: "Contact QR",
						tr: "Kartvizit QR",
						ar: "QR جهة الاتصال",
						ru: "QR-визитка"
					}
				},
				{
					href: "/soz-sayi",
					label: {
						az: "Söz sayı",
						en: "Word count",
						tr: "Söz sayısı",
						ar: "عدد الكلمات",
						ru: "Количество слов"
					}
				}
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				"aria-labelledby": "wifi-faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "wifi-faq",
					className: "text-base font-semibold",
					children: faq.title[lang]
				}), faq.items[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.a
				})] }, item.q))]
			})
		]
	});
}
var $$splitComponentImporter$262 = () => import("./workspace-BkiE3AVU.mjs");
var Route$262 = createFileRoute("/workspace")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/workspace"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$262, "component")
});
var $$splitComponentImporter$261 = () => import("./xeta-BMIErSTw.mjs");
var Route$261 = createFileRoute("/xeta")({ component: lazyRouteComponent($$splitComponentImporter$261, "component") });
var $$splitComponentImporter$260 = () => import("./zip-82h7BN6z.mjs");
var Route$260 = createFileRoute("/zip")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/zip"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$260, "component")
});
var $$splitComponentImporter$259 = () => import("./apps-CNs_bv67.mjs");
var Route$259 = createFileRoute("/apps/")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/apps"),
			replace: true
		});
	},
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$259, "component")
});
var ORDER = [
	"nibras-arabic",
	"nibras-docs",
	"nibras-office",
	"nibras-pdf",
	"nibras-qr",
	"majmu-al-fatawa",
	"nibras-scan",
	"nibras-note",
	"nibras-plans"
];
function AppsIndex({ apps }) {
	const { t, lang } = useI18n$1();
	const rows = apps;
	const labels = {
		soon: t("soon"),
		building: t("nx_docs_stage")
	};
	const extras = (rows ?? []).filter((row) => row.visible !== false && !ORDER.includes(row.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("nx_apps_k")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t("nx_apps_h") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "app-stack",
				children: [ORDER.map((slug) => {
					const app = STUDIO_APPS.find((item) => item.slug === slug);
					if (!app) return null;
					const live = rows?.find((row) => row.slug === slug);
					if (live?.visible === false) return null;
					const badge = appStatusLabel(slug, lang);
					const stores = statusStoreLinks(effectiveApp(app).app, live && playListed(slug) === false ? {
						...live,
						play_url: ""
					} : live);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "app-row-slot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: localeHref(lang, `/apps/${slug}`),
							className: "app-row",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: live?.icon_url || app.icon.replace(/\.(jpg|png)$/, ".webp"),
									alt: "",
									width: 56,
									height: 56,
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: badge }) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: app.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(app.leadKey) })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })
							]
						}), stores.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "nx-card-stores",
							children: stores.map((store) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: store.href,
								target: "_blank",
								rel: "noopener noreferrer",
								children: store.label
							}, store.id))
						}) : null]
					}, slug);
				}), extras.map((row) => {
					const badge = statusText(row.status, null, labels);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: localeHref(lang, `/apps/${row.slug}`),
						className: "app-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: row.icon_url || "/nibras-icon.png",
								alt: ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: badge }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: row.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: row.summary })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })
						]
					}, row.slug);
				})]
			})
		]
	});
}
var $$splitComponentImporter$258 = () => import("./ar.about-CPTKM554.mjs");
var Route$258 = createFileRoute("/ar/about")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$258, "component")
});
var $$splitComponentImporter$257 = () => import("./ar.apps-DpCt5bvX.mjs");
var Route$257 = createFileRoute("/ar/apps")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$257, "component")
});
var $$splitComponentImporter$256 = () => import("./ar.contact-D9hbJJEa.mjs");
var Route$256 = createFileRoute("/ar/contact")({ component: lazyRouteComponent($$splitComponentImporter$256, "component") });
var $$splitComponentImporter$255 = () => import("./ar.doctor-D7gGclQy.mjs");
var Route$255 = createFileRoute("/ar/doctor")({ component: lazyRouteComponent($$splitComponentImporter$255, "component") });
var $$splitComponentImporter$254 = () => import("./ar.erase-D7ymEJut.mjs");
var Route$254 = createFileRoute("/ar/erase")({ component: lazyRouteComponent($$splitComponentImporter$254, "component") });
var $$splitComponentImporter$253 = () => import("./ar.error-help-BShKzMs5.mjs");
var Route$253 = createFileRoute("/ar/error-help")({ component: lazyRouteComponent($$splitComponentImporter$253, "component") });
var $$splitComponentImporter$252 = () => import("./ar.faiz-D0PeCouJ.mjs");
var Route$252 = createFileRoute("/ar/faiz")({ component: lazyRouteComponent($$splitComponentImporter$252, "component") });
var $$splitComponentImporter$251 = () => import("./ar.faq-DuHsUDd7.mjs");
var Route$251 = createFileRoute("/ar/faq")({ component: lazyRouteComponent($$splitComponentImporter$251, "component") });
var $$splitComponentImporter$250 = () => import("./ar.filecheck-oDe50n4b.mjs");
var Route$250 = createFileRoute("/ar/filecheck")({ component: lazyRouteComponent($$splitComponentImporter$250, "component") });
var $$splitComponentImporter$249 = () => import("./ar.flow-ByLeVC7J.mjs");
var Route$249 = createFileRoute("/ar/flow")({ component: lazyRouteComponent($$splitComponentImporter$249, "component") });
var $$splitComponentImporter$248 = () => import("./ar.image-Y9rnbVFT.mjs");
var Route$248 = createFileRoute("/ar/image")({ component: lazyRouteComponent($$splitComponentImporter$248, "component") });
var $$splitComponentImporter$247 = () => import("./ar.learn-BKgMWAmp.mjs");
var Route$247 = createFileRoute("/ar/learn")({ component: lazyRouteComponent($$splitComponentImporter$247, "component") });
var $$splitComponentImporter$246 = () => import("./ar.logic-DU2CMuuD.mjs");
var Route$246 = createFileRoute("/ar/logic")({ component: lazyRouteComponent($$splitComponentImporter$246, "component") });
var $$splitComponentImporter$245 = () => import("./ar.mirror-BocWm1Xr.mjs");
var Route$245 = createFileRoute("/ar/mirror")({ component: lazyRouteComponent($$splitComponentImporter$245, "component") });
var $$splitComponentImporter$244 = () => import("./ar.movzu-zc6edfO0.mjs");
var Route$244 = createFileRoute("/ar/movzu")({ component: lazyRouteComponent($$splitComponentImporter$244, "component") });
var $$splitComponentImporter$243 = () => import("./ar.muqayise-Byob9rYC.mjs");
var Route$243 = createFileRoute("/ar/muqayise")({ component: lazyRouteComponent($$splitComponentImporter$243, "component") });
var $$splitComponentImporter$242 = () => import("./ar.nece-DMR9wJBq.mjs");
var Route$242 = createFileRoute("/ar/nece")({ component: lazyRouteComponent($$splitComponentImporter$242, "component") });
var $$splitComponentImporter$241 = () => import("./ar.nedir-CBbh9Odk.mjs");
var Route$241 = createFileRoute("/ar/nedir")({ component: lazyRouteComponent($$splitComponentImporter$241, "component") });
var $$splitComponentImporter$240 = () => import("./ar.oyun-C-41meXs.mjs");
var Route$240 = createFileRoute("/ar/oyun")({ component: lazyRouteComponent($$splitComponentImporter$240, "component") });
var $$splitComponentImporter$239 = () => import("./ar.paket-Dz-sTF45.mjs");
var Route$239 = createFileRoute("/ar/paket")({ component: lazyRouteComponent($$splitComponentImporter$239, "component") });
var $$splitComponentImporter$238 = () => import("./ar.pdf-DQyhRozQ.mjs");
var Route$238 = createFileRoute("/ar/pdf")({ component: lazyRouteComponent($$splitComponentImporter$238, "component") });
var $$splitComponentImporter$237 = () => import("./ar.planner-xetoWZVf.mjs");
var Route$237 = createFileRoute("/ar/planner")({
	head: () => ({ links: [{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$237, "component")
});
var $$splitComponentImporter$236 = () => import("./ar.qr-Cs157ON1.mjs");
var Route$236 = createFileRoute("/ar/qr")({ component: lazyRouteComponent($$splitComponentImporter$236, "component") });
var $$splitComponentImporter$235 = () => import("./ar.schema-BmhdArm-.mjs");
var Route$235 = createFileRoute("/ar/schema")({ component: lazyRouteComponent($$splitComponentImporter$235, "component") });
var $$splitComponentImporter$234 = () => import("./ar.seo-D3EP7anD.mjs");
var Route$234 = createFileRoute("/ar/seo")({ component: lazyRouteComponent($$splitComponentImporter$234, "component") });
var $$splitComponentImporter$233 = () => import("./ar.services-C-uLyimA.mjs");
var Route$233 = createFileRoute("/ar/services")({
	head: () => ({ meta: servicesMeta("ar") }),
	component: lazyRouteComponent($$splitComponentImporter$233, "component")
});
var $$splitComponentImporter$232 = () => import("./ar.shortcuts-pDtIxem0.mjs");
var Route$232 = createFileRoute("/ar/shortcuts")({ component: lazyRouteComponent($$splitComponentImporter$232, "component") });
var $$splitComponentImporter$231 = () => import("./ar.soz-ClybyNxf.mjs");
var Route$231 = createFileRoute("/ar/soz")({ component: lazyRouteComponent($$splitComponentImporter$231, "component") });
var $$splitComponentImporter$230 = () => import("./ar.soz-sayi-uqg43zni.mjs");
var Route$230 = createFileRoute("/ar/soz-sayi")({ component: lazyRouteComponent($$splitComponentImporter$230, "component") });
var $$splitComponentImporter$229 = () => import("./ar.studio-D-DTQjqB.mjs");
var Route$229 = createFileRoute("/ar/studio")({ component: lazyRouteComponent($$splitComponentImporter$229, "component") });
var $$splitComponentImporter$228 = () => import("./ar.terms-DoQsvani.mjs");
var Route$228 = createFileRoute("/ar/terms")({ component: lazyRouteComponent($$splitComponentImporter$228, "component") });
var $$splitComponentImporter$227 = () => import("./ar.tools-Bvbxmw2S.mjs");
var Route$227 = createFileRoute("/ar/tools")({ component: lazyRouteComponent($$splitComponentImporter$227, "component") });
var $$splitComponentImporter$226 = () => import("./ar.tools-legal-B5wDO9TT.mjs");
var Route$226 = createFileRoute("/ar/tools-legal")({ component: lazyRouteComponent($$splitComponentImporter$226, "component") });
var $$splitComponentImporter$225 = () => import("./ar.trust-Cf10fjwy.mjs");
var Route$225 = createFileRoute("/ar/trust")({ component: lazyRouteComponent($$splitComponentImporter$225, "component") });
var $$splitComponentImporter$224 = () => import("./ar.unknown-BPwcF2TQ.mjs");
var Route$224 = createFileRoute("/ar/unknown")({ component: lazyRouteComponent($$splitComponentImporter$224, "component") });
var $$splitComponentImporter$223 = () => import("./ar.vcard-BG-QZT_F.mjs");
var Route$223 = createFileRoute("/ar/vcard")({ component: lazyRouteComponent($$splitComponentImporter$223, "component") });
var $$splitComponentImporter$222 = () => import("./ar.video-B77A2tSJ.mjs");
var Route$222 = createFileRoute("/ar/video")({ component: lazyRouteComponent($$splitComponentImporter$222, "component") });
var $$splitComponentImporter$221 = () => import("./ar.voice-BvhQGF2C.mjs");
var Route$221 = createFileRoute("/ar/voice")({
	head: () => ({ meta: voiceMeta("ar") }),
	component: lazyRouteComponent($$splitComponentImporter$221, "component")
});
var $$splitComponentImporter$220 = () => import("./ar.wifi-CEBNBcPs.mjs");
var Route$220 = createFileRoute("/ar/wifi")({ component: lazyRouteComponent($$splitComponentImporter$220, "component") });
var $$splitComponentImporter$219 = () => import("./ar.workspace-C6cEdt-a.mjs");
var Route$219 = createFileRoute("/ar/workspace")({ component: lazyRouteComponent($$splitComponentImporter$219, "component") });
var $$splitComponentImporter$218 = () => import("./ar.xeta-CVqxS4aZ.mjs");
var Route$218 = createFileRoute("/ar/xeta")({ component: lazyRouteComponent($$splitComponentImporter$218, "component") });
var $$splitComponentImporter$217 = () => import("./ar.zip-DmLSWpD0.mjs");
var Route$217 = createFileRoute("/ar/zip")({ component: lazyRouteComponent($$splitComponentImporter$217, "component") });
var $$splitComponentImporter$216 = () => import("./en.about-DBpdasmZ.mjs");
var Route$216 = createFileRoute("/en/about")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$216, "component")
});
var $$splitComponentImporter$215 = () => import("./en.apps-jR_Mep8o.mjs");
var Route$215 = createFileRoute("/en/apps")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$215, "component")
});
var $$splitComponentImporter$214 = () => import("./en.contact-BNZ1LSqL.mjs");
var Route$214 = createFileRoute("/en/contact")({ component: lazyRouteComponent($$splitComponentImporter$214, "component") });
var $$splitComponentImporter$213 = () => import("./en.doctor-8P7aaKdp.mjs");
var Route$213 = createFileRoute("/en/doctor")({ component: lazyRouteComponent($$splitComponentImporter$213, "component") });
var $$splitComponentImporter$212 = () => import("./en.erase-DpuWsiXH.mjs");
var Route$212 = createFileRoute("/en/erase")({ component: lazyRouteComponent($$splitComponentImporter$212, "component") });
var $$splitComponentImporter$211 = () => import("./en.error-help-DLTgm36L.mjs");
var Route$211 = createFileRoute("/en/error-help")({ component: lazyRouteComponent($$splitComponentImporter$211, "component") });
var $$splitComponentImporter$210 = () => import("./en.faiz-BqCyYun2.mjs");
var Route$210 = createFileRoute("/en/faiz")({ component: lazyRouteComponent($$splitComponentImporter$210, "component") });
var $$splitComponentImporter$209 = () => import("./en.faq-BbH4I9Mp.mjs");
var Route$209 = createFileRoute("/en/faq")({ component: lazyRouteComponent($$splitComponentImporter$209, "component") });
var $$splitComponentImporter$208 = () => import("./en.filecheck-EMat7wz0.mjs");
var Route$208 = createFileRoute("/en/filecheck")({ component: lazyRouteComponent($$splitComponentImporter$208, "component") });
var $$splitComponentImporter$207 = () => import("./en.flow-X3_YPaTP.mjs");
var Route$207 = createFileRoute("/en/flow")({ component: lazyRouteComponent($$splitComponentImporter$207, "component") });
var $$splitComponentImporter$206 = () => import("./en.image-heGkjVLW.mjs");
var Route$206 = createFileRoute("/en/image")({ component: lazyRouteComponent($$splitComponentImporter$206, "component") });
var $$splitComponentImporter$205 = () => import("./en.learn-Bq31RrS2.mjs");
var Route$205 = createFileRoute("/en/learn")({ component: lazyRouteComponent($$splitComponentImporter$205, "component") });
var $$splitComponentImporter$204 = () => import("./en.logic-CiF4a3w7.mjs");
var Route$204 = createFileRoute("/en/logic")({ component: lazyRouteComponent($$splitComponentImporter$204, "component") });
var $$splitComponentImporter$203 = () => import("./en.mirror-CCs8o2cM.mjs");
var Route$203 = createFileRoute("/en/mirror")({ component: lazyRouteComponent($$splitComponentImporter$203, "component") });
var $$splitComponentImporter$202 = () => import("./en.movzu-Dr4Anzhj.mjs");
var Route$202 = createFileRoute("/en/movzu")({ component: lazyRouteComponent($$splitComponentImporter$202, "component") });
var $$splitComponentImporter$201 = () => import("./en.muqayise-DKB07BFM.mjs");
var Route$201 = createFileRoute("/en/muqayise")({ component: lazyRouteComponent($$splitComponentImporter$201, "component") });
var $$splitComponentImporter$200 = () => import("./en.nece-BN_ERAep.mjs");
var Route$200 = createFileRoute("/en/nece")({ component: lazyRouteComponent($$splitComponentImporter$200, "component") });
var $$splitComponentImporter$199 = () => import("./en.nedir-D102HmZr.mjs");
var Route$199 = createFileRoute("/en/nedir")({ component: lazyRouteComponent($$splitComponentImporter$199, "component") });
var $$splitComponentImporter$198 = () => import("./en.oyun-BrnbkGgH.mjs");
var Route$198 = createFileRoute("/en/oyun")({ component: lazyRouteComponent($$splitComponentImporter$198, "component") });
var $$splitComponentImporter$197 = () => import("./en.paket-B9J_TqWY.mjs");
var Route$197 = createFileRoute("/en/paket")({ component: lazyRouteComponent($$splitComponentImporter$197, "component") });
var $$splitComponentImporter$196 = () => import("./en.pdf-BWOBYr62.mjs");
var Route$196 = createFileRoute("/en/pdf")({ component: lazyRouteComponent($$splitComponentImporter$196, "component") });
var $$splitComponentImporter$195 = () => import("./en.planner-DmT_9uXF.mjs");
var Route$195 = createFileRoute("/en/planner")({
	head: () => ({ links: [{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$195, "component")
});
var $$splitComponentImporter$194 = () => import("./en.qr-DhI1qD4o.mjs");
var Route$194 = createFileRoute("/en/qr")({ component: lazyRouteComponent($$splitComponentImporter$194, "component") });
var $$splitComponentImporter$193 = () => import("./en.schema-DKpM8HzG.mjs");
var Route$193 = createFileRoute("/en/schema")({ component: lazyRouteComponent($$splitComponentImporter$193, "component") });
var $$splitComponentImporter$192 = () => import("./en.seo-C2a72xF3.mjs");
var Route$192 = createFileRoute("/en/seo")({ component: lazyRouteComponent($$splitComponentImporter$192, "component") });
var $$splitComponentImporter$191 = () => import("./en.services-G1Z4MOyv.mjs");
var Route$191 = createFileRoute("/en/services")({
	head: () => ({ meta: servicesMeta("en") }),
	component: lazyRouteComponent($$splitComponentImporter$191, "component")
});
var $$splitComponentImporter$190 = () => import("./en.shortcuts-hGnpsJBA.mjs");
var Route$190 = createFileRoute("/en/shortcuts")({ component: lazyRouteComponent($$splitComponentImporter$190, "component") });
var $$splitComponentImporter$189 = () => import("./en.soz-CDtOCqYd.mjs");
var Route$189 = createFileRoute("/en/soz")({ component: lazyRouteComponent($$splitComponentImporter$189, "component") });
var $$splitComponentImporter$188 = () => import("./en.soz-sayi-SUPVQlDX.mjs");
var Route$188 = createFileRoute("/en/soz-sayi")({ component: lazyRouteComponent($$splitComponentImporter$188, "component") });
var $$splitComponentImporter$187 = () => import("./en.studio-DV7k4igG.mjs");
var Route$187 = createFileRoute("/en/studio")({ component: lazyRouteComponent($$splitComponentImporter$187, "component") });
var $$splitComponentImporter$186 = () => import("./en.terms-B5mZBzUc.mjs");
var Route$186 = createFileRoute("/en/terms")({ component: lazyRouteComponent($$splitComponentImporter$186, "component") });
var $$splitComponentImporter$185 = () => import("./en.tools-DSxJNUP-.mjs");
var Route$185 = createFileRoute("/en/tools")({ component: lazyRouteComponent($$splitComponentImporter$185, "component") });
var $$splitComponentImporter$184 = () => import("./en.tools-legal-kdccaO-8.mjs");
var Route$184 = createFileRoute("/en/tools-legal")({ component: lazyRouteComponent($$splitComponentImporter$184, "component") });
var $$splitComponentImporter$183 = () => import("./en.trust-CaF0zhaz.mjs");
var Route$183 = createFileRoute("/en/trust")({ component: lazyRouteComponent($$splitComponentImporter$183, "component") });
var $$splitComponentImporter$182 = () => import("./en.unknown-dvZWgY1T.mjs");
var Route$182 = createFileRoute("/en/unknown")({ component: lazyRouteComponent($$splitComponentImporter$182, "component") });
var $$splitComponentImporter$181 = () => import("./en.vcard-DDLI7kJZ.mjs");
var Route$181 = createFileRoute("/en/vcard")({ component: lazyRouteComponent($$splitComponentImporter$181, "component") });
var $$splitComponentImporter$180 = () => import("./en.video-Dj9eh9WS.mjs");
var Route$180 = createFileRoute("/en/video")({ component: lazyRouteComponent($$splitComponentImporter$180, "component") });
var $$splitComponentImporter$179 = () => import("./en.voice-DxFAws9Q.mjs");
var Route$179 = createFileRoute("/en/voice")({
	head: () => ({ meta: voiceMeta("en") }),
	component: lazyRouteComponent($$splitComponentImporter$179, "component")
});
var $$splitComponentImporter$178 = () => import("./en.wifi-CA-YCwb8.mjs");
var Route$178 = createFileRoute("/en/wifi")({ component: lazyRouteComponent($$splitComponentImporter$178, "component") });
var $$splitComponentImporter$177 = () => import("./en.workspace-Dk5nLpUq.mjs");
var Route$177 = createFileRoute("/en/workspace")({ component: lazyRouteComponent($$splitComponentImporter$177, "component") });
var $$splitComponentImporter$176 = () => import("./en.xeta-CmBZ2SBt.mjs");
var Route$176 = createFileRoute("/en/xeta")({ component: lazyRouteComponent($$splitComponentImporter$176, "component") });
var $$splitComponentImporter$175 = () => import("./en.zip-Ct3ewUXF.mjs");
var Route$175 = createFileRoute("/en/zip")({ component: lazyRouteComponent($$splitComponentImporter$175, "component") });
var $$splitComponentImporter$174 = () => import("./ereb-dili.feil-DIIjUTQY.mjs");
var SITE$1 = "https://nibrascode.com";
var Route$174 = createFileRoute("/ereb-dili/feil")({
	loader: async () => ({ verbs: await loadVerbs() }),
	head: () => ({ meta: [
		{ title: "Ərəb dilində 704 feil: mazi, muzari, əmr formaları — Nibras Arabic" },
		{
			name: "description",
			content: "Ərəb feilləri siyahısı: 704 feilin keçmiş, indiki zaman və əmr forması, Azərbaycan dilində tərcümə, misallar və səsləndirmə. Pulsuz."
		},
		{
			property: "og:title",
			content: "Ərəb dilində 704 feil — Nibras Arabic"
		},
		{
			property: "og:url",
			content: `${SITE$1}${VERB_HUB}`
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$174, "component")
});
var $$splitComponentImporter$173 = () => import("./faq._slug-DvnpwH02.mjs");
var Route$173 = createFileRoute("/faq/$slug")({
	loader: ({ params }) => {
		const found = faqTopicFromPath(`/faq/${params.slug}`);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$173, "component")
});
var $$splitComponentImporter$172 = () => import("./guides-DAgLb47V.mjs");
var Route$172 = createFileRoute("/guides/")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$172, "component")
});
var $$splitComponentImporter$171 = () => import("../_topic-C9wSjIEn.mjs");
var Route$171 = createFileRoute("/guides/$topic")({
	loader: async ({ params }) => {
		const topic = findTopic("guides", params.topic);
		const studio = await loadStudioBundle();
		const custom = studio.privacy.some((row) => row.slug === `lib-guide-${params.topic}`);
		if (!topic && !custom) throw notFound();
		return {
			topic: topic ?? {
				slug: params.topic,
				label: "guide_pdf"
			},
			privacy: studio.privacy
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$171, "component")
});
var $$splitComponentImporter$170 = () => import("./hamisi._group-CbgsV3dx.mjs");
var Route$170 = createFileRoute("/hamisi/$group")({
	loader: ({ params }) => ({ group: groupFromSlug(params.group) }),
	head: ({ loaderData }) => ({ meta: loaderData ? groupMeta("az", loaderData.group) : [] }),
	component: lazyRouteComponent($$splitComponentImporter$170, "component")
});
var $$splitComponentImporter$169 = () => import("./image_._tool--BmdA2O9.mjs");
var Route$169 = createFileRoute("/image_/$tool")({
	beforeLoad: ({ location, params }) => {
		if (!isImageTool(params.tool)) throw notFound();
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, location.pathname),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$169, "component")
});
var $$splitComponentImporter$168 = () => import("./learn_.logic-B-3BCh_J.mjs");
var Route$168 = createFileRoute("/learn_/logic")({
	beforeLoad: ({ location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, "/learn/logic"),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$168, "component")
});
var $$splitComponentImporter$167 = () => import("./movzu._slug-DLQm1Mss.mjs");
var Route$167 = createFileRoute("/movzu/$slug")({
	loader: ({ params }) => {
		if (params.slug === "python-2026") throw redirect({
			href: "/muqayise/python-2026",
			replace: true
		});
		const found = searchTopicFromPath("/movzu/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$167, "component")
});
var $$splitComponentImporter$166 = () => import("./muqayise._slug-DAExYIY2.mjs");
var Route$166 = createFileRoute("/muqayise/$slug")({
	loader: ({ params }) => {
		const found = compareTopicFromPath("/muqayise/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$166, "component")
});
var $$splitComponentImporter$165 = () => import("./nece._slug-XC9okZbw.mjs");
var Route$165 = createFileRoute("/nece/$slug")({
	loader: ({ params }) => {
		const found = searchTopicFromPath("/nece/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$165, "component")
});
var $$splitComponentImporter$164 = () => import("./oyun._slug-pDl0unkQ.mjs");
var Route$164 = createFileRoute("/oyun/$slug")({
	loader: async ({ params }) => {
		if (!gameBySlug(params.slug)) throw notFound();
		return {
			slug: params.slug,
			guide: await loadGuide("games", params.slug, "az")
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$164, "component")
});
var $$splitComponentImporter$163 = () => import("./pdf_._tool-B5GxuQB7.mjs");
var Route$163 = createFileRoute("/pdf_/$tool")({
	beforeLoad: ({ location, params }) => {
		if (!isToolId(params.tool)) throw notFound();
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, location.pathname),
			replace: true
		});
	},
	loader: async ({ params }) => ({ guide: isToolId(params.tool) ? await loadGuide("pdf", params.tool, "az") : null }),
	component: lazyRouteComponent($$splitComponentImporter$163, "component")
});
var $$splitComponentImporter$162 = () => import("../_slug-BD1TlJRe.mjs");
var Route$162 = createFileRoute("/privacy/$slug")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$162, "component")
});
var $$splitComponentImporter$161 = () => import("./privacy.nibras-note-CntRRl02.mjs");
var Route$161 = createFileRoute("/privacy/nibras-note")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$161, "component")
});
var $$splitComponentImporter$160 = () => import("./privacy.nibras-pdf-DXsVy5In.mjs");
var Route$160 = createFileRoute("/privacy/nibras-pdf")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$160, "component")
});
var $$splitComponentImporter$159 = () => import("./privacy.nibras-plans-qrkyXHcu.mjs");
var Route$159 = createFileRoute("/privacy/nibras-plans")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$159, "component")
});
var $$splitComponentImporter$158 = () => import("./privacy.nibras-scan-DEhVDmtV.mjs");
var Route$158 = createFileRoute("/privacy/nibras-scan")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$158, "component")
});
var $$splitComponentImporter$157 = () => import("./programming-BmLYzbuy.mjs");
var Route$157 = createFileRoute("/programming/")({ component: lazyRouteComponent($$splitComponentImporter$157, "component") });
var $$splitComponentImporter$156 = () => import("../_topic-Bdc5S6Et.mjs");
var Route$156 = createFileRoute("/programming/$topic")({
	beforeLoad: ({ params, location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		if (isCodeSampleSlug(params.topic) || isCourseSlug(params.topic) || hasProgrammingLocale(lang, params.topic)) throw redirect({
			href: programmingLocalePath(lang, params.topic),
			replace: true
		});
	},
	loader: async ({ params }) => {
		if (isCodeSampleSlug(params.topic)) return {
			sample: params.topic,
			topic: null,
			privacy: [],
			course: null,
			article: null
		};
		if (isCourseSlug(params.topic)) {
			if (isCourseHub(params.topic)) return {
				sample: null,
				topic: null,
				privacy: [],
				course: {
					slug: params.topic,
					sections: []
				},
				article: null
			};
			const { loadCourseSections } = await import("./load-dM_7jOIF.mjs");
			return {
				sample: null,
				topic: null,
				privacy: [],
				course: {
					slug: params.topic,
					sections: await loadCourseSections(params.topic, "az")
				},
				article: null
			};
		}
		const topic = findTopic("programming", params.topic);
		if (!topic) throw notFound();
		const privacy = params.topic === "python" ? (await loadStudioBundle()).privacy : [];
		const { loadProgrammingView } = await import("./article-load-DnXnJeGk.mjs");
		return {
			sample: null,
			topic,
			privacy,
			course: null,
			article: await loadProgrammingView("az", params.topic, privacy)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$156, "component")
});
var $$splitComponentImporter$155 = () => import("./resources-Cf3ROl8H.mjs");
var Route$155 = createFileRoute("/resources/")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$155, "component")
});
var $$splitComponentImporter$154 = () => import("./route-I4L2K4YV.mjs");
var Route$154 = createFileRoute("/resources/$topic")({ component: lazyRouteComponent($$splitComponentImporter$154, "component") });
var $$splitComponentImporter$153 = () => import("../_slug-Bi8M96HP.mjs");
var Route$153 = createFileRoute("/resurslar/$slug")({
	beforeLoad: ({ params, location }) => {
		if (readLang(location.searchStr) !== "ru") return;
		const pair = pdfPairFromPath(`/resurslar/${params.slug}`);
		if (pair) throw redirect({
			href: pair.ru,
			replace: true
		});
	},
	loader: async ({ params }) => {
		const page = findResurs(params.slug);
		const studio = await loadStudioBundle();
		const saved = studio.privacy.some((row) => row.slug === `lib-resurs-${params.slug}`);
		if (!page && !saved) throw notFound();
		return {
			page,
			privacy: studio.privacy,
			slug: params.slug,
			guides: await loadGuideAll("articles", `r-${params.slug}`)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$153, "component")
});
var $$splitComponentImporter$152 = () => import("./ru.about-6PusdH-_.mjs");
var Route$152 = createFileRoute("/ru/about")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$152, "component")
});
var $$splitComponentImporter$151 = () => import("./ru.apps-CMhho2FK.mjs");
var Route$151 = createFileRoute("/ru/apps")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$151, "component")
});
var $$splitComponentImporter$150 = () => import("./ru.contact-Bdd0aVPG.mjs");
var Route$150 = createFileRoute("/ru/contact")({ component: lazyRouteComponent($$splitComponentImporter$150, "component") });
var $$splitComponentImporter$149 = () => import("./ru.doctor-DHanTJjm.mjs");
var Route$149 = createFileRoute("/ru/doctor")({ component: lazyRouteComponent($$splitComponentImporter$149, "component") });
var $$splitComponentImporter$148 = () => import("./ru.erase-p47J5ypG.mjs");
var Route$148 = createFileRoute("/ru/erase")({ component: lazyRouteComponent($$splitComponentImporter$148, "component") });
var $$splitComponentImporter$147 = () => import("./ru.error-help-B2jCjnpp.mjs");
var Route$147 = createFileRoute("/ru/error-help")({ component: lazyRouteComponent($$splitComponentImporter$147, "component") });
var $$splitComponentImporter$146 = () => import("./ru.faiz-C13SSx8A.mjs");
var Route$146 = createFileRoute("/ru/faiz")({ component: lazyRouteComponent($$splitComponentImporter$146, "component") });
var $$splitComponentImporter$145 = () => import("./ru.faq-ES4DGw5W.mjs");
var Route$145 = createFileRoute("/ru/faq")({ component: lazyRouteComponent($$splitComponentImporter$145, "component") });
var $$splitComponentImporter$144 = () => import("./ru.filecheck-BbnhrfQx.mjs");
var Route$144 = createFileRoute("/ru/filecheck")({ component: lazyRouteComponent($$splitComponentImporter$144, "component") });
var $$splitComponentImporter$143 = () => import("./ru.flow-94nJl-gi.mjs");
var Route$143 = createFileRoute("/ru/flow")({ component: lazyRouteComponent($$splitComponentImporter$143, "component") });
var $$splitComponentImporter$142 = () => import("./ru.image-H0rTd2oQ.mjs");
var Route$142 = createFileRoute("/ru/image")({ component: lazyRouteComponent($$splitComponentImporter$142, "component") });
var $$splitComponentImporter$141 = () => import("./ru.learn-BLeWedKA.mjs");
var Route$141 = createFileRoute("/ru/learn")({ component: lazyRouteComponent($$splitComponentImporter$141, "component") });
var $$splitComponentImporter$140 = () => import("./ru.logic-PQzltCRu.mjs");
var Route$140 = createFileRoute("/ru/logic")({ component: lazyRouteComponent($$splitComponentImporter$140, "component") });
var $$splitComponentImporter$139 = () => import("./ru.mirror-WTKeseUP.mjs");
var Route$139 = createFileRoute("/ru/mirror")({ component: lazyRouteComponent($$splitComponentImporter$139, "component") });
var $$splitComponentImporter$138 = () => import("./ru.movzu-D3soNoPV.mjs");
var Route$138 = createFileRoute("/ru/movzu")({ component: lazyRouteComponent($$splitComponentImporter$138, "component") });
var $$splitComponentImporter$137 = () => import("./ru.muqayise-BSPSG0p4.mjs");
var Route$137 = createFileRoute("/ru/muqayise")({ component: lazyRouteComponent($$splitComponentImporter$137, "component") });
var $$splitComponentImporter$136 = () => import("./ru.nece-CAZLLguy.mjs");
var Route$136 = createFileRoute("/ru/nece")({ component: lazyRouteComponent($$splitComponentImporter$136, "component") });
var $$splitComponentImporter$135 = () => import("./ru.nedir-sbbv_b4C.mjs");
var Route$135 = createFileRoute("/ru/nedir")({ component: lazyRouteComponent($$splitComponentImporter$135, "component") });
var $$splitComponentImporter$134 = () => import("./ru.oyun-CVIh0z5P.mjs");
var Route$134 = createFileRoute("/ru/oyun")({ component: lazyRouteComponent($$splitComponentImporter$134, "component") });
var $$splitComponentImporter$133 = () => import("./ru.paket-C95Muuae.mjs");
var Route$133 = createFileRoute("/ru/paket")({ component: lazyRouteComponent($$splitComponentImporter$133, "component") });
var $$splitComponentImporter$132 = () => import("./ru.pdf-BwnlD07_.mjs");
var Route$132 = createFileRoute("/ru/pdf")({ component: lazyRouteComponent($$splitComponentImporter$132, "component") });
var $$splitComponentImporter$131 = () => import("./ru.planner-Ca264sMa.mjs");
var Route$131 = createFileRoute("/ru/planner")({
	head: () => ({ links: [{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$131, "component")
});
var $$splitComponentImporter$130 = () => import("./ru.qr-BSHHjP99.mjs");
var Route$130 = createFileRoute("/ru/qr")({ component: lazyRouteComponent($$splitComponentImporter$130, "component") });
var $$splitComponentImporter$129 = () => import("./ru.schema-DmvzOK0p.mjs");
var Route$129 = createFileRoute("/ru/schema")({ component: lazyRouteComponent($$splitComponentImporter$129, "component") });
var $$splitComponentImporter$128 = () => import("./ru.seo-CCWNCKiO.mjs");
var Route$128 = createFileRoute("/ru/seo")({ component: lazyRouteComponent($$splitComponentImporter$128, "component") });
var $$splitComponentImporter$127 = () => import("./ru.services-C-wIUpWX.mjs");
var Route$127 = createFileRoute("/ru/services")({
	head: () => ({ meta: servicesMeta("ru") }),
	component: lazyRouteComponent($$splitComponentImporter$127, "component")
});
var $$splitComponentImporter$126 = () => import("./ru.shortcuts-Cce-vNn3.mjs");
var Route$126 = createFileRoute("/ru/shortcuts")({ component: lazyRouteComponent($$splitComponentImporter$126, "component") });
var $$splitComponentImporter$125 = () => import("./ru.soz-DB2EoMca.mjs");
var Route$125 = createFileRoute("/ru/soz")({ component: lazyRouteComponent($$splitComponentImporter$125, "component") });
var $$splitComponentImporter$124 = () => import("./ru.soz-sayi-v2nVxQ3Z.mjs");
var Route$124 = createFileRoute("/ru/soz-sayi")({ component: lazyRouteComponent($$splitComponentImporter$124, "component") });
var $$splitComponentImporter$123 = () => import("./ru.studio-CJ-rW_1S.mjs");
var Route$123 = createFileRoute("/ru/studio")({ component: lazyRouteComponent($$splitComponentImporter$123, "component") });
var $$splitComponentImporter$122 = () => import("./ru.terms-DeZQTgy2.mjs");
var Route$122 = createFileRoute("/ru/terms")({ component: lazyRouteComponent($$splitComponentImporter$122, "component") });
var $$splitComponentImporter$121 = () => import("./ru.tools-DGZHOQfC.mjs");
var Route$121 = createFileRoute("/ru/tools")({ component: lazyRouteComponent($$splitComponentImporter$121, "component") });
var $$splitComponentImporter$120 = () => import("./ru.tools-legal-D6bVJ3sO.mjs");
var Route$120 = createFileRoute("/ru/tools-legal")({ component: lazyRouteComponent($$splitComponentImporter$120, "component") });
var $$splitComponentImporter$119 = () => import("./ru.trust-h1sAXZ4I.mjs");
var Route$119 = createFileRoute("/ru/trust")({ component: lazyRouteComponent($$splitComponentImporter$119, "component") });
var $$splitComponentImporter$118 = () => import("./ru.unknown-vcW2dn-c.mjs");
var Route$118 = createFileRoute("/ru/unknown")({ component: lazyRouteComponent($$splitComponentImporter$118, "component") });
var $$splitComponentImporter$117 = () => import("./ru.vcard-B7gZ-r49.mjs");
var Route$117 = createFileRoute("/ru/vcard")({ component: lazyRouteComponent($$splitComponentImporter$117, "component") });
var $$splitComponentImporter$116 = () => import("./ru.video-DX8FLQgb.mjs");
var Route$116 = createFileRoute("/ru/video")({ component: lazyRouteComponent($$splitComponentImporter$116, "component") });
var $$splitComponentImporter$115 = () => import("./ru.voice-Cm4d5bWg.mjs");
var Route$115 = createFileRoute("/ru/voice")({
	head: () => ({ meta: voiceMeta("ru") }),
	component: lazyRouteComponent($$splitComponentImporter$115, "component")
});
var $$splitComponentImporter$114 = () => import("./ru.wifi-Do1dQ2bX.mjs");
var Route$114 = createFileRoute("/ru/wifi")({ component: lazyRouteComponent($$splitComponentImporter$114, "component") });
var $$splitComponentImporter$113 = () => import("./ru.workspace-Dv5CUfjg.mjs");
var Route$113 = createFileRoute("/ru/workspace")({ component: lazyRouteComponent($$splitComponentImporter$113, "component") });
var $$splitComponentImporter$112 = () => import("./ru.xeta-DkjMnszU.mjs");
var Route$112 = createFileRoute("/ru/xeta")({ component: lazyRouteComponent($$splitComponentImporter$112, "component") });
var $$splitComponentImporter$111 = () => import("./ru.zip-BS0OXGA7.mjs");
var Route$111 = createFileRoute("/ru/zip")({ component: lazyRouteComponent($$splitComponentImporter$111, "component") });
var $$splitComponentImporter$110 = () => import("./soz._slug-DwV_ZJm3.mjs");
var Route$110 = createFileRoute("/soz/$slug")({
	loader: ({ params }) => {
		const found = searchTopicFromPath("/soz/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$110, "component")
});
var $$splitComponentImporter$109 = () => import("./tools._slug-CIbFnh4U.mjs");
var Route$109 = createFileRoute("/tools/$slug")({
	loader: async ({ params }) => {
		const found = toolFromPath("/tools/" + params.slug);
		if (!found) throw notFound();
		return {
			...found,
			guide: await loadGuide("tools", found.id, "az")
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$109, "component")
});
var $$splitComponentImporter$108 = () => import("./tr.about-DkNKsu49.mjs");
var Route$108 = createFileRoute("/tr/about")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$108, "component")
});
var $$splitComponentImporter$107 = () => import("./tr.apps-B0Y-PJTU.mjs");
var Route$107 = createFileRoute("/tr/apps")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$107, "component")
});
var $$splitComponentImporter$106 = () => import("./tr.contact-Chrqudy2.mjs");
var Route$106 = createFileRoute("/tr/contact")({ component: lazyRouteComponent($$splitComponentImporter$106, "component") });
var $$splitComponentImporter$105 = () => import("./tr.doctor-C8RzkDwS.mjs");
var Route$105 = createFileRoute("/tr/doctor")({ component: lazyRouteComponent($$splitComponentImporter$105, "component") });
var $$splitComponentImporter$104 = () => import("./tr.erase-BVQ7V1-9.mjs");
var Route$104 = createFileRoute("/tr/erase")({ component: lazyRouteComponent($$splitComponentImporter$104, "component") });
var $$splitComponentImporter$103 = () => import("./tr.error-help-ICBYxFqc.mjs");
var Route$103 = createFileRoute("/tr/error-help")({ component: lazyRouteComponent($$splitComponentImporter$103, "component") });
var $$splitComponentImporter$102 = () => import("./tr.faiz-D4p7yKzp.mjs");
var Route$102 = createFileRoute("/tr/faiz")({ component: lazyRouteComponent($$splitComponentImporter$102, "component") });
var $$splitComponentImporter$101 = () => import("./tr.faq-D_fRH1DQ.mjs");
var Route$101 = createFileRoute("/tr/faq")({ component: lazyRouteComponent($$splitComponentImporter$101, "component") });
var $$splitComponentImporter$100 = () => import("./tr.filecheck-C8TQAP7q.mjs");
var Route$100 = createFileRoute("/tr/filecheck")({ component: lazyRouteComponent($$splitComponentImporter$100, "component") });
var $$splitComponentImporter$99 = () => import("./tr.flow-jiwLC9z4.mjs");
var Route$99 = createFileRoute("/tr/flow")({ component: lazyRouteComponent($$splitComponentImporter$99, "component") });
var $$splitComponentImporter$98 = () => import("./tr.image-DzTTnPAN.mjs");
var Route$98 = createFileRoute("/tr/image")({ component: lazyRouteComponent($$splitComponentImporter$98, "component") });
var $$splitComponentImporter$97 = () => import("./tr.learn-Bs8urF14.mjs");
var Route$97 = createFileRoute("/tr/learn")({ component: lazyRouteComponent($$splitComponentImporter$97, "component") });
var $$splitComponentImporter$96 = () => import("./tr.logic-BJX2S-Ki.mjs");
var Route$96 = createFileRoute("/tr/logic")({ component: lazyRouteComponent($$splitComponentImporter$96, "component") });
var $$splitComponentImporter$95 = () => import("./tr.mirror-BQ_7zLuA.mjs");
var Route$95 = createFileRoute("/tr/mirror")({ component: lazyRouteComponent($$splitComponentImporter$95, "component") });
var $$splitComponentImporter$94 = () => import("./tr.movzu-JGgkyrJv.mjs");
var Route$94 = createFileRoute("/tr/movzu")({ component: lazyRouteComponent($$splitComponentImporter$94, "component") });
var $$splitComponentImporter$93 = () => import("./tr.muqayise-BYCfGQRF.mjs");
var Route$93 = createFileRoute("/tr/muqayise")({ component: lazyRouteComponent($$splitComponentImporter$93, "component") });
var $$splitComponentImporter$92 = () => import("./tr.nece-Dc8NFsek.mjs");
var Route$92 = createFileRoute("/tr/nece")({ component: lazyRouteComponent($$splitComponentImporter$92, "component") });
var $$splitComponentImporter$91 = () => import("./tr.nedir-C90Qd6BW.mjs");
var Route$91 = createFileRoute("/tr/nedir")({ component: lazyRouteComponent($$splitComponentImporter$91, "component") });
var $$splitComponentImporter$90 = () => import("./tr.oyun-BDCWeo3e.mjs");
var Route$90 = createFileRoute("/tr/oyun")({ component: lazyRouteComponent($$splitComponentImporter$90, "component") });
var $$splitComponentImporter$89 = () => import("./tr.paket-DJCEYjDy.mjs");
var Route$89 = createFileRoute("/tr/paket")({ component: lazyRouteComponent($$splitComponentImporter$89, "component") });
var $$splitComponentImporter$88 = () => import("./tr.pdf-B6r6UbOK.mjs");
var Route$88 = createFileRoute("/tr/pdf")({ component: lazyRouteComponent($$splitComponentImporter$88, "component") });
var $$splitComponentImporter$87 = () => import("./tr.planner-CDo4zQwu.mjs");
var Route$87 = createFileRoute("/tr/planner")({
	head: () => ({ links: [{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$87, "component")
});
var $$splitComponentImporter$86 = () => import("./tr.qr-CZE4SorZ.mjs");
var Route$86 = createFileRoute("/tr/qr")({ component: lazyRouteComponent($$splitComponentImporter$86, "component") });
var $$splitComponentImporter$85 = () => import("./tr.schema-DcVjApEq.mjs");
var Route$85 = createFileRoute("/tr/schema")({ component: lazyRouteComponent($$splitComponentImporter$85, "component") });
var $$splitComponentImporter$84 = () => import("./tr.seo-DZfm9QLN.mjs");
var Route$84 = createFileRoute("/tr/seo")({ component: lazyRouteComponent($$splitComponentImporter$84, "component") });
var $$splitComponentImporter$83 = () => import("./tr.services-DNHKOTqW.mjs");
var Route$83 = createFileRoute("/tr/services")({
	head: () => ({ meta: servicesMeta("tr") }),
	component: lazyRouteComponent($$splitComponentImporter$83, "component")
});
var $$splitComponentImporter$82 = () => import("./tr.shortcuts-COlrp5dW.mjs");
var Route$82 = createFileRoute("/tr/shortcuts")({ component: lazyRouteComponent($$splitComponentImporter$82, "component") });
var $$splitComponentImporter$81 = () => import("./tr.soz-BQ9l5P0E.mjs");
var Route$81 = createFileRoute("/tr/soz")({ component: lazyRouteComponent($$splitComponentImporter$81, "component") });
var $$splitComponentImporter$80 = () => import("./tr.soz-sayi-jd3g5GgT.mjs");
var Route$80 = createFileRoute("/tr/soz-sayi")({ component: lazyRouteComponent($$splitComponentImporter$80, "component") });
var $$splitComponentImporter$79 = () => import("./tr.studio-C9LZBs9p.mjs");
var Route$79 = createFileRoute("/tr/studio")({ component: lazyRouteComponent($$splitComponentImporter$79, "component") });
var $$splitComponentImporter$78 = () => import("./tr.terms-Kj4GRNvo.mjs");
var Route$78 = createFileRoute("/tr/terms")({ component: lazyRouteComponent($$splitComponentImporter$78, "component") });
var $$splitComponentImporter$77 = () => import("./tr.tools-qG1ij79q.mjs");
var Route$77 = createFileRoute("/tr/tools")({ component: lazyRouteComponent($$splitComponentImporter$77, "component") });
var $$splitComponentImporter$76 = () => import("./tr.tools-legal-D3hlBWhC.mjs");
var Route$76 = createFileRoute("/tr/tools-legal")({ component: lazyRouteComponent($$splitComponentImporter$76, "component") });
var $$splitComponentImporter$75 = () => import("./tr.trust-DYh970Bo.mjs");
var Route$75 = createFileRoute("/tr/trust")({ component: lazyRouteComponent($$splitComponentImporter$75, "component") });
var $$splitComponentImporter$74 = () => import("./tr.unknown-DUkDrqnN.mjs");
var Route$74 = createFileRoute("/tr/unknown")({ component: lazyRouteComponent($$splitComponentImporter$74, "component") });
var $$splitComponentImporter$73 = () => import("./tr.vcard-CrjGKvJ8.mjs");
var Route$73 = createFileRoute("/tr/vcard")({ component: lazyRouteComponent($$splitComponentImporter$73, "component") });
var $$splitComponentImporter$72 = () => import("./tr.video-CEMDPnFn.mjs");
var Route$72 = createFileRoute("/tr/video")({ component: lazyRouteComponent($$splitComponentImporter$72, "component") });
var $$splitComponentImporter$71 = () => import("./tr.voice-DALGKScd.mjs");
var Route$71 = createFileRoute("/tr/voice")({
	head: () => ({ meta: voiceMeta("tr") }),
	component: lazyRouteComponent($$splitComponentImporter$71, "component")
});
var $$splitComponentImporter$70 = () => import("./tr.wifi-BF3evPqo.mjs");
var Route$70 = createFileRoute("/tr/wifi")({ component: lazyRouteComponent($$splitComponentImporter$70, "component") });
var $$splitComponentImporter$69 = () => import("./tr.workspace-D8sx9Euk.mjs");
var Route$69 = createFileRoute("/tr/workspace")({ component: lazyRouteComponent($$splitComponentImporter$69, "component") });
var $$splitComponentImporter$68 = () => import("./tr.xeta-BbX8uVIW.mjs");
var Route$68 = createFileRoute("/tr/xeta")({ component: lazyRouteComponent($$splitComponentImporter$68, "component") });
var $$splitComponentImporter$67 = () => import("./tr.zip-CnPwffFE.mjs");
var Route$67 = createFileRoute("/tr/zip")({ component: lazyRouteComponent($$splitComponentImporter$67, "component") });
var $$splitComponentImporter$66 = () => import("./video_._tool-Q0juZrY2.mjs");
var Route$66 = createFileRoute("/video_/$tool")({
	beforeLoad: ({ location, params }) => {
		if (!isVideoTool(params.tool)) throw notFound();
		const lang = readLang(location.searchStr);
		if (lang === "az") return;
		throw redirect({
			href: localeHref(lang, location.pathname),
			replace: true
		});
	},
	component: lazyRouteComponent($$splitComponentImporter$66, "component")
});
var $$splitComponentImporter$65 = () => import("./xeta._slug-CvYWnFXC.mjs");
var Route$65 = createFileRoute("/xeta/$slug")({
	loader: async ({ params }) => {
		const found = searchTopicFromPath("/xeta/" + params.slug);
		if (!found) throw notFound();
		const body = found.item.lazy ? await loadApkBody(found.item.slug) : null;
		return {
			...found,
			body
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$65, "component")
});
var $$splitComponentImporter$64 = () => import("./ar.apps._slug-M8Mqs6Pd.mjs");
var Route$64 = createFileRoute("/ar/apps/$slug")({
	loader: async ({ params }) => {
		const data = await loadAppPage(params.slug);
		if (!data) throw notFound();
		return data;
	},
	component: lazyRouteComponent($$splitComponentImporter$64, "component")
});
var $$splitComponentImporter$63 = () => import("./ar.faq._slug-7dOlKyHI.mjs");
var Route$63 = createFileRoute("/ar/faq/$slug")({
	loader: ({ params }) => {
		const found = faqTopicFromPath(`/ar/faq/${params.slug}`);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$63, "component")
});
var $$splitComponentImporter$62 = () => import("./ar.image_._tool-B4SYhhLR.mjs");
var Route$62 = createFileRoute("/ar/image_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isImageTool(params.tool)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$62, "component")
});
var $$splitComponentImporter$61 = () => import("./ar.jami._group-_oHSCY7-.mjs");
var Route$61 = createFileRoute("/ar/jami/$group")({
	loader: ({ params }) => ({ group: groupFromSlug(params.group, "ar") }),
	head: ({ loaderData }) => ({ meta: loaderData ? groupMeta("ar", loaderData.group) : [] }),
	component: lazyRouteComponent($$splitComponentImporter$61, "component")
});
var $$splitComponentImporter$60 = () => import("./ar.learn_.logic-DxMQs84x.mjs");
var Route$60 = createFileRoute("/ar/learn_/logic")({ component: lazyRouteComponent($$splitComponentImporter$60, "component") });
var $$splitComponentImporter$59 = () => import("./ar.movzu._slug-CXR9v5OD.mjs");
var Route$59 = createFileRoute("/ar/movzu/$slug")({
	loader: ({ params }) => {
		if (params.slug === "python-2026") throw redirect({
			href: "/ar/muqayise/python-2026",
			replace: true
		});
		const found = searchTopicFromPath("/ar/movzu/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$59, "component")
});
var $$splitComponentImporter$58 = () => import("./ar.muqayise._slug-I5fexZnr.mjs");
var Route$58 = createFileRoute("/ar/muqayise/$slug")({
	loader: ({ params }) => {
		const found = compareTopicFromPath("/ar/muqayise/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$58, "component")
});
var $$splitComponentImporter$57 = () => import("./ar.nece._slug-C-4teM5R.mjs");
var Route$57 = createFileRoute("/ar/nece/$slug")({
	loader: ({ params }) => {
		const found = searchTopicFromPath("/ar/nece/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$57, "component")
});
var $$splitComponentImporter$56 = () => import("./ar.oyun._slug-OdaLD82C.mjs");
var Route$56 = createFileRoute("/ar/oyun/$slug")({
	loader: async ({ params }) => {
		if (!gameBySlug(params.slug)) throw notFound();
		return {
			slug: params.slug,
			guide: await loadGuide("games", params.slug, "ar")
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$56, "component")
});
var $$splitComponentImporter$55 = () => import("./ar.pdf_._tool-Bct4_DpN.mjs");
var Route$55 = createFileRoute("/ar/pdf_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isToolId(params.tool)) throw notFound();
	},
	loader: async ({ params }) => ({ guide: isToolId(params.tool) ? await loadGuide("pdf", params.tool, "ar") : null }),
	component: lazyRouteComponent($$splitComponentImporter$55, "component")
});
var $$splitComponentImporter$54 = () => import("./ar.programming._slug-Ci7foFeg.mjs");
var Route$54 = createFileRoute("/ar/programming/$slug")({
	loader: async ({ params }) => {
		if (isCodeSampleSlug(params.slug)) return {
			sample: params.slug,
			page: null,
			privacy: [],
			course: null
		};
		if (isCourseSlug(params.slug)) {
			if (isCourseHub(params.slug)) return {
				sample: null,
				page: null,
				privacy: [],
				course: {
					slug: params.slug,
					sections: []
				}
			};
			const { loadCourseSections } = await import("./load-dM_7jOIF.mjs");
			return {
				sample: null,
				page: null,
				privacy: [],
				course: {
					slug: params.slug,
					sections: await loadCourseSections(params.slug, "ar")
				}
			};
		}
		const privacy = params.slug === "python" ? (await loadStudioBundle()).privacy : [];
		const { loadProgrammingView } = await import("./article-load-DnXnJeGk.mjs");
		const page = await loadProgrammingView("ar", params.slug, privacy);
		if (!page) throw notFound();
		return {
			sample: null,
			page,
			privacy,
			course: null
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$54, "component")
});
var $$splitComponentImporter$53 = () => import("./ar.soz._slug-BMEre8aQ.mjs");
var Route$53 = createFileRoute("/ar/soz/$slug")({
	loader: ({ params }) => {
		const found = searchTopicFromPath("/ar/soz/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$53, "component")
});
var $$splitComponentImporter$52 = () => import("./ar.tools._slug-BgM5hylp.mjs");
var Route$52 = createFileRoute("/ar/tools/$slug")({
	loader: async ({ params }) => {
		const found = toolFromPath("/ar/tools/" + params.slug);
		if (!found) throw notFound();
		return {
			...found,
			guide: await loadGuide("tools", found.id, "ar")
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$52, "component")
});
var $$splitComponentImporter$51 = () => import("./ar.video_._tool-BJ3DY6ci.mjs");
var Route$51 = createFileRoute("/ar/video_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isVideoTool(params.tool)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$51, "component")
});
var $$splitComponentImporter$50 = () => import("./ar.xeta._slug-BNaefwK5.mjs");
var Route$50 = createFileRoute("/ar/xeta/$slug")({
	loader: async ({ params }) => {
		const found = searchTopicFromPath("/ar/xeta/" + params.slug);
		if (!found) throw notFound();
		const body = found.item.lazy ? await loadApkBody(found.item.slug) : null;
		return {
			...found,
			body
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$50, "component")
});
var $$splitComponentImporter$49 = () => import("./en.all._group-D6SHAapX.mjs");
var Route$49 = createFileRoute("/en/all/$group")({
	loader: ({ params }) => ({ group: groupFromSlug(params.group, "en") }),
	head: ({ loaderData }) => ({ meta: loaderData ? groupMeta("en", loaderData.group) : [] }),
	component: lazyRouteComponent($$splitComponentImporter$49, "component")
});
var $$splitComponentImporter$48 = () => import("./en.apps._slug-CcBB-4H0.mjs");
var Route$48 = createFileRoute("/en/apps/$slug")({
	loader: async ({ params }) => {
		const data = await loadAppPage(params.slug);
		if (!data) throw notFound();
		return data;
	},
	component: lazyRouteComponent($$splitComponentImporter$48, "component")
});
var $$splitComponentImporter$47 = () => import("./en.faq._slug-BW3GArXA.mjs");
var Route$47 = createFileRoute("/en/faq/$slug")({
	loader: ({ params }) => {
		const found = faqTopicFromPath(`/en/faq/${params.slug}`);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$47, "component")
});
var $$splitComponentImporter$46 = () => import("./en.image_._tool-CCT62d68.mjs");
var Route$46 = createFileRoute("/en/image_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isImageTool(params.tool)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$46, "component")
});
var $$splitComponentImporter$45 = () => import("./en.learn_.logic-D7QhVpHO.mjs");
var Route$45 = createFileRoute("/en/learn_/logic")({ component: lazyRouteComponent($$splitComponentImporter$45, "component") });
var $$splitComponentImporter$44 = () => import("./en.movzu._slug-DZPGWi2G.mjs");
var Route$44 = createFileRoute("/en/movzu/$slug")({
	loader: ({ params }) => {
		if (params.slug === "python-2026") throw redirect({
			href: "/en/muqayise/python-2026",
			replace: true
		});
		const found = searchTopicFromPath("/en/movzu/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$44, "component")
});
var $$splitComponentImporter$43 = () => import("./en.muqayise._slug-Cq4uAVDl.mjs");
var Route$43 = createFileRoute("/en/muqayise/$slug")({
	loader: ({ params }) => {
		const found = compareTopicFromPath("/en/muqayise/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$43, "component")
});
var $$splitComponentImporter$42 = () => import("./en.nece._slug-DVT2R7tE.mjs");
var Route$42 = createFileRoute("/en/nece/$slug")({
	loader: ({ params }) => {
		const found = searchTopicFromPath("/en/nece/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$42, "component")
});
var $$splitComponentImporter$41 = () => import("./en.oyun._slug-ScHA_0wt.mjs");
var Route$41 = createFileRoute("/en/oyun/$slug")({
	loader: async ({ params }) => {
		if (!gameBySlug(params.slug)) throw notFound();
		return {
			slug: params.slug,
			guide: await loadGuide("games", params.slug, "en")
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$41, "component")
});
var $$splitComponentImporter$40 = () => import("./en.pdf_._tool-IBIVOthV.mjs");
var Route$40 = createFileRoute("/en/pdf_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isToolId(params.tool)) throw notFound();
	},
	loader: async ({ params }) => ({ guide: isToolId(params.tool) ? await loadGuide("pdf", params.tool, "en") : null }),
	component: lazyRouteComponent($$splitComponentImporter$40, "component")
});
var $$splitComponentImporter$39 = () => import("./en.programming._slug-4ncs6QNr.mjs");
var Route$39 = createFileRoute("/en/programming/$slug")({
	loader: async ({ params }) => {
		if (isCodeSampleSlug(params.slug)) return {
			sample: params.slug,
			page: null,
			privacy: [],
			course: null
		};
		if (isCourseSlug(params.slug)) {
			if (isCourseHub(params.slug)) return {
				sample: null,
				page: null,
				privacy: [],
				course: {
					slug: params.slug,
					sections: []
				}
			};
			const { loadCourseSections } = await import("./load-dM_7jOIF.mjs");
			return {
				sample: null,
				page: null,
				privacy: [],
				course: {
					slug: params.slug,
					sections: await loadCourseSections(params.slug, "en")
				}
			};
		}
		const privacy = params.slug === "python" ? (await loadStudioBundle()).privacy : [];
		const { loadProgrammingView } = await import("./article-load-DnXnJeGk.mjs");
		const page = await loadProgrammingView("en", params.slug, privacy);
		if (!page) throw notFound();
		return {
			sample: null,
			page,
			privacy,
			course: null
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$39, "component")
});
var $$splitComponentImporter$38 = () => import("./en.soz._slug-BbYvDrjG.mjs");
var Route$38 = createFileRoute("/en/soz/$slug")({
	loader: ({ params }) => {
		const found = searchTopicFromPath("/en/soz/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$38, "component")
});
var $$splitComponentImporter$37 = () => import("./en.tools._slug-CAhRV9ZX.mjs");
var Route$37 = createFileRoute("/en/tools/$slug")({
	loader: async ({ params }) => {
		const found = toolFromPath("/en/tools/" + params.slug);
		if (!found) throw notFound();
		return {
			...found,
			guide: await loadGuide("tools", found.id, "en")
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$37, "component")
});
var $$splitComponentImporter$36 = () => import("./en.video_._tool-D3QxGfsU.mjs");
var Route$36 = createFileRoute("/en/video_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isVideoTool(params.tool)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./en.xeta._slug-DtwDjL94.mjs");
var Route$35 = createFileRoute("/en/xeta/$slug")({
	loader: async ({ params }) => {
		const found = searchTopicFromPath("/en/xeta/" + params.slug);
		if (!found) throw notFound();
		const body = found.item.lazy ? await loadApkBody(found.item.slug) : null;
		return {
			...found,
			body
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$35, "component")
});
var $$splitComponentImporter$34 = () => import("./ereb-dili.feil._slug-HB0Ofz6W.mjs");
var SITE = "https://nibrascode.com";
var key = (m) => m.split(/[,/]/)[0].trim().toLowerCase();
var Route$34 = createFileRoute("/ereb-dili/feil/$slug")({
	loader: async ({ params }) => {
		const all = await loadVerbs();
		const i = all.findIndex((v) => v.s === params.slug);
		if (i < 0) throw notFound();
		const v = all[i];
		const related = all.filter((x) => x !== v && key(x.m) === key(v.m)).slice(0, 8);
		return {
			v,
			prev: all[i - 1],
			next: all[i + 1],
			related
		};
	},
	head: ({ loaderData }) => {
		const v = loaderData?.v;
		if (!v) return {};
		const title = `${v.a} — «${v.m}» ərəbcə: ${v.r?.[0] ?? ""} ${v.i?.[0] ?? ""} | Ərəb feilləri`;
		const desc = `«${v.m}» ərəb dilində ${v.a}. İndiki zaman: ${v.r?.[0] ?? "—"} (${v.r?.[1] ?? ""}), əmr: ${v.i?.[0] ?? "—"} (${v.i?.[1] ?? ""}). Misallar və səsləndirmə.`;
		const url = `${SITE}${verbPath(v.s)}`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: desc
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: desc
			},
			{
				property: "og:url",
				content: url
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$34, "component")
});
var $$splitComponentImporter$33 = () => import("./nibras-qr.delete-account-B-OxR9jG.mjs");
var Route$33 = createFileRoute("/privacy/nibras-qr/delete-account")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("../_topic-D9y27yXu.mjs");
var Route$32 = createFileRoute("/resources/$topic/")({
	beforeLoad: ({ params }) => {
		if (params.topic === "pdf") throw redirect({
			to: "/resurslar/$slug",
			params: { slug: "pdf" },
			replace: true
		});
	},
	loader: async ({ params }) => {
		const topic = findTopic("resources", params.topic);
		const studio = await loadStudioBundle();
		const custom = studio.privacy.some((row) => row.slug === `lib-resurs-${params.topic}`);
		if (!topic && !custom) throw notFound();
		return {
			topic: topic ?? {
				slug: params.topic,
				label: "res_docs"
			},
			privacy: studio.privacy
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$32, "component")
});
var $$splitComponentImporter$31 = () => import("../_article-Cjdkek2j.mjs");
var Route$31 = createFileRoute("/resources/$topic/$article")({
	beforeLoad: ({ params }) => {
		const next = params.topic === "pdf" ? OLD_PDF_SLUGS[params.article] : void 0;
		if (next) throw redirect({
			to: "/resurslar/$slug",
			params: { slug: next },
			replace: true
		});
	},
	loader: async ({ params }) => {
		const article = findResourceArticle(params.topic, params.article);
		if (!article) throw notFound();
		return {
			article,
			guides: await loadGuideAll("articles", `a-${params.topic}-${params.article}`)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./ru.apps._slug-C0Zy24W6.mjs");
var Route$30 = createFileRoute("/ru/apps/$slug")({
	loader: async ({ params }) => {
		const data = await loadAppPage(params.slug);
		if (!data) throw notFound();
		return data;
	},
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./ru.faq._slug-BEek3Se2.mjs");
var Route$29 = createFileRoute("/ru/faq/$slug")({
	loader: ({ params }) => {
		const found = faqTopicFromPath(`/ru/faq/${params.slug}`);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./ru.image_._tool-DD6KPz-E.mjs");
var Route$28 = createFileRoute("/ru/image_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isImageTool(params.tool)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./ru.learn_.logic-CScgvrDs.mjs");
var Route$27 = createFileRoute("/ru/learn_/logic")({ component: lazyRouteComponent($$splitComponentImporter$27, "component") });
var $$splitComponentImporter$26 = () => import("./ru.movzu._slug-DADQ2LOy.mjs");
var Route$26 = createFileRoute("/ru/movzu/$slug")({
	loader: ({ params }) => {
		if (params.slug === "python-2026") throw redirect({
			href: "/ru/muqayise/python-2026",
			replace: true
		});
		const found = searchTopicFromPath("/ru/movzu/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./ru.muqayise._slug-BXArPRp9.mjs");
var Route$25 = createFileRoute("/ru/muqayise/$slug")({
	loader: ({ params }) => {
		const found = compareTopicFromPath("/ru/muqayise/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./ru.nece._slug-BqLjDfFE.mjs");
var Route$24 = createFileRoute("/ru/nece/$slug")({
	loader: ({ params }) => {
		const found = searchTopicFromPath("/ru/nece/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./ru.oyun._slug-C6Wuqgtd.mjs");
var Route$23 = createFileRoute("/ru/oyun/$slug")({
	loader: async ({ params }) => {
		if (!gameBySlug(params.slug)) throw notFound();
		return {
			slug: params.slug,
			guide: await loadGuide("games", params.slug, "ru")
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./ru.pdf_._tool-CXbtKdXl.mjs");
var Route$22 = createFileRoute("/ru/pdf_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isToolId(params.tool)) throw notFound();
	},
	loader: async ({ params }) => ({ guide: isToolId(params.tool) ? await loadGuide("pdf", params.tool, "ru") : null }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./ru.programming._slug-CRtT9jC1.mjs");
var Route$21 = createFileRoute("/ru/programming/$slug")({
	loader: async ({ params }) => {
		if (isCodeSampleSlug(params.slug)) return {
			sample: params.slug,
			page: null,
			privacy: [],
			course: null
		};
		if (isCourseSlug(params.slug)) {
			if (isCourseHub(params.slug)) return {
				sample: null,
				page: null,
				privacy: [],
				course: {
					slug: params.slug,
					sections: []
				}
			};
			const { loadCourseSections } = await import("./load-dM_7jOIF.mjs");
			return {
				sample: null,
				page: null,
				privacy: [],
				course: {
					slug: params.slug,
					sections: await loadCourseSections(params.slug, "ru")
				}
			};
		}
		const privacy = params.slug === "python" ? (await loadStudioBundle()).privacy : [];
		const { loadProgrammingView } = await import("./article-load-DnXnJeGk.mjs");
		const page = await loadProgrammingView("ru", params.slug, privacy);
		if (!page) throw notFound();
		return {
			sample: null,
			page,
			privacy,
			course: null
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./ru.resources._slug-CdvcVuXj.mjs");
var Route$20 = createFileRoute("/ru/resources/$slug")({
	loader: async ({ params }) => {
		const page = findRuResource(params.slug);
		const studio = await loadStudioBundle();
		const pair = PDF_LOCALE_PAIRS.find((item) => item.ru === params.slug);
		if (!page && !pair) throw notFound();
		return {
			page,
			privacy: studio.privacy,
			id: pair?.az ?? params.slug,
			guides: pair ? await loadGuideAll("articles", `r-${pair.az}`) : null
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./ru.soz._slug-Bvhul-Kv.mjs");
var Route$19 = createFileRoute("/ru/soz/$slug")({
	loader: ({ params }) => {
		const found = searchTopicFromPath("/ru/soz/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./ru.tools._slug-DzaNFSez.mjs");
var Route$18 = createFileRoute("/ru/tools/$slug")({
	loader: async ({ params }) => {
		const found = toolFromPath("/ru/tools/" + params.slug);
		if (!found) throw notFound();
		return {
			...found,
			guide: await loadGuide("tools", found.id, "ru")
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./ru.video_._tool-CMblMaeY.mjs");
var Route$17 = createFileRoute("/ru/video_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isVideoTool(params.tool)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./ru.vse._group-cbOYYBWj.mjs");
var Route$16 = createFileRoute("/ru/vse/$group")({
	loader: ({ params }) => ({ group: groupFromSlug(params.group, "ru") }),
	head: ({ loaderData }) => ({ meta: loaderData ? groupMeta("ru", loaderData.group) : [] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./ru.xeta._slug-B8Sz62Pm.mjs");
var Route$15 = createFileRoute("/ru/xeta/$slug")({
	loader: async ({ params }) => {
		const found = searchTopicFromPath("/ru/xeta/" + params.slug);
		if (!found) throw notFound();
		const body = found.item.lazy ? await loadApkBody(found.item.slug) : null;
		return {
			...found,
			body
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./tr.apps._slug-DsLDUyBC.mjs");
var Route$14 = createFileRoute("/tr/apps/$slug")({
	loader: async ({ params }) => {
		const data = await loadAppPage(params.slug);
		if (!data) throw notFound();
		return data;
	},
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./tr.faq._slug-DbanbWZ7.mjs");
var Route$13 = createFileRoute("/tr/faq/$slug")({
	loader: ({ params }) => {
		const found = faqTopicFromPath(`/tr/faq/${params.slug}`);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./tr.image_._tool-BrvVwJwi.mjs");
var Route$12 = createFileRoute("/tr/image_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isImageTool(params.tool)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./tr.learn_.logic-RRysaPEF.mjs");
var Route$11 = createFileRoute("/tr/learn_/logic")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./tr.movzu._slug-CixQ-B3Q.mjs");
var Route$10 = createFileRoute("/tr/movzu/$slug")({
	loader: ({ params }) => {
		if (params.slug === "python-2026") throw redirect({
			href: "/tr/muqayise/python-2026",
			replace: true
		});
		const found = searchTopicFromPath("/tr/movzu/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./tr.muqayise._slug-BrPtMRiv.mjs");
var Route$9 = createFileRoute("/tr/muqayise/$slug")({
	loader: ({ params }) => {
		const found = compareTopicFromPath("/tr/muqayise/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./tr.nece._slug-Cdd6rECu.mjs");
var Route$8 = createFileRoute("/tr/nece/$slug")({
	loader: ({ params }) => {
		const found = searchTopicFromPath("/tr/nece/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./tr.oyun._slug-CrVOBY-N.mjs");
var Route$7 = createFileRoute("/tr/oyun/$slug")({
	loader: async ({ params }) => {
		if (!gameBySlug(params.slug)) throw notFound();
		return {
			slug: params.slug,
			guide: await loadGuide("games", params.slug, "tr")
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./tr.pdf_._tool-Dpnj_pLW.mjs");
var Route$6 = createFileRoute("/tr/pdf_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isToolId(params.tool)) throw notFound();
	},
	loader: async ({ params }) => ({ guide: isToolId(params.tool) ? await loadGuide("pdf", params.tool, "tr") : null }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./tr.programming._slug-CNSSmArQ.mjs");
var Route$5 = createFileRoute("/tr/programming/$slug")({
	loader: async ({ params }) => {
		if (isCodeSampleSlug(params.slug)) return {
			sample: params.slug,
			page: null,
			privacy: [],
			course: null
		};
		if (isCourseSlug(params.slug)) {
			if (isCourseHub(params.slug)) return {
				sample: null,
				page: null,
				privacy: [],
				course: {
					slug: params.slug,
					sections: []
				}
			};
			const { loadCourseSections } = await import("./load-dM_7jOIF.mjs");
			return {
				sample: null,
				page: null,
				privacy: [],
				course: {
					slug: params.slug,
					sections: await loadCourseSections(params.slug, "tr")
				}
			};
		}
		const privacy = params.slug === "python" ? (await loadStudioBundle()).privacy : [];
		const { loadProgrammingView } = await import("./article-load-DnXnJeGk.mjs");
		const page = await loadProgrammingView("tr", params.slug, privacy);
		if (!page) throw notFound();
		return {
			sample: null,
			page,
			privacy,
			course: null
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./tr.soz._slug-f2sk9dEQ.mjs");
var Route$4 = createFileRoute("/tr/soz/$slug")({
	loader: ({ params }) => {
		const found = searchTopicFromPath("/tr/soz/" + params.slug);
		if (!found) throw notFound();
		return found;
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./tr.tools._slug-BOHJjaFe.mjs");
var Route$3 = createFileRoute("/tr/tools/$slug")({
	loader: async ({ params }) => {
		const found = toolFromPath("/tr/tools/" + params.slug);
		if (!found) throw notFound();
		return {
			...found,
			guide: await loadGuide("tools", found.id, "tr")
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./tr.tumu._group-CNFtYzRR.mjs");
var Route$2 = createFileRoute("/tr/tumu/$group")({
	loader: ({ params }) => ({ group: groupFromSlug(params.group, "tr") }),
	head: ({ loaderData }) => ({ meta: loaderData ? groupMeta("tr", loaderData.group) : [] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./tr.video_._tool-CSj_w0dd.mjs");
var Route$1 = createFileRoute("/tr/video_/$tool")({
	beforeLoad: ({ params }) => {
		if (!isVideoTool(params.tool)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./tr.xeta._slug-C91vy9Fi.mjs");
var Route = createFileRoute("/tr/xeta/$slug")({
	loader: async ({ params }) => {
		const found = searchTopicFromPath("/tr/xeta/" + params.slug);
		if (!found) throw notFound();
		const body = found.item.lazy ? await loadApkBody(found.item.slug) : null;
		return {
			...found,
			body
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$309.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$310
});
var AboutRoute = Route$308.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$310
});
var ArRoute = Route$307.update({
	id: "/ar",
	path: "/ar",
	getParentRoute: () => Route$310
});
var ContactRoute = Route$306.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$310
});
var DoctorRoute = Route$305.update({
	id: "/doctor",
	path: "/doctor",
	getParentRoute: () => Route$310
});
var EnRoute = Route$304.update({
	id: "/en",
	path: "/en",
	getParentRoute: () => Route$310
});
var EraseRoute = Route$303.update({
	id: "/erase",
	path: "/erase",
	getParentRoute: () => Route$310
});
var ErrorHelpRoute = Route$302.update({
	id: "/error-help",
	path: "/error-help",
	getParentRoute: () => Route$310
});
var FaizRoute = Route$301.update({
	id: "/faiz",
	path: "/faiz",
	getParentRoute: () => Route$310
});
var FaqRoute = Route$300.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$310
});
var FilecheckRoute = Route$299.update({
	id: "/filecheck",
	path: "/filecheck",
	getParentRoute: () => Route$310
});
var FlowRoute = Route$298.update({
	id: "/flow",
	path: "/flow",
	getParentRoute: () => Route$310
});
var ImageRoute = Route$297.update({
	id: "/image",
	path: "/image",
	getParentRoute: () => Route$310
});
var LearnRoute = Route$296.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => Route$310
});
var LogicRoute = Route$295.update({
	id: "/logic",
	path: "/logic",
	getParentRoute: () => Route$310
});
var MirrorRoute = Route$294.update({
	id: "/mirror",
	path: "/mirror",
	getParentRoute: () => Route$310
});
var MovzuRoute = Route$293.update({
	id: "/movzu",
	path: "/movzu",
	getParentRoute: () => Route$310
});
var MuqayiseRoute = Route$292.update({
	id: "/muqayise",
	path: "/muqayise",
	getParentRoute: () => Route$310
});
var NeceRoute = Route$291.update({
	id: "/nece",
	path: "/nece",
	getParentRoute: () => Route$310
});
var NedirRoute = Route$290.update({
	id: "/nedir",
	path: "/nedir",
	getParentRoute: () => Route$310
});
var NxStudioRoute = Route$289.update({
	id: "/nx-studio",
	path: "/nx-studio",
	getParentRoute: () => Route$310
});
var OyunRoute = Route$288.update({
	id: "/oyun",
	path: "/oyun",
	getParentRoute: () => Route$310
});
var PaketRoute = Route$287.update({
	id: "/paket",
	path: "/paket",
	getParentRoute: () => Route$310
});
var PdfRoute = Route$286.update({
	id: "/pdf",
	path: "/pdf",
	getParentRoute: () => Route$310
});
var PlannerRoute = Route$285.update({
	id: "/planner",
	path: "/planner",
	getParentRoute: () => Route$310
});
var PrivacyRoute = Route$284.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$310
});
var QrRoute = Route$283.update({
	id: "/qr",
	path: "/qr",
	getParentRoute: () => Route$310
});
var RuRoute = Route$282.update({
	id: "/ru",
	path: "/ru",
	getParentRoute: () => Route$310
});
var SchemaRoute = Route$281.update({
	id: "/schema",
	path: "/schema",
	getParentRoute: () => Route$310
});
var SeoRoute = Route$280.update({
	id: "/seo",
	path: "/seo",
	getParentRoute: () => Route$310
});
var ServicesRoute = Route$279.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$310
});
var ShortcutsRoute = Route$278.update({
	id: "/shortcuts",
	path: "/shortcuts",
	getParentRoute: () => Route$310
});
var SozRoute = Route$277.update({
	id: "/soz",
	path: "/soz",
	getParentRoute: () => Route$310
});
var SozSayiRoute = Route$276.update({
	id: "/soz-sayi",
	path: "/soz-sayi",
	getParentRoute: () => Route$310
});
var StudioRoute = Route$275.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => Route$310
});
var TermsRoute = Route$274.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$310
});
var ToolsRoute = Route$273.update({
	id: "/tools",
	path: "/tools",
	getParentRoute: () => Route$310
});
var ToolsLegalRoute = Route$272.update({
	id: "/tools-legal",
	path: "/tools-legal",
	getParentRoute: () => Route$310
});
var TrRoute = Route$271.update({
	id: "/tr",
	path: "/tr",
	getParentRoute: () => Route$310
});
var TrustRoute = Route$270.update({
	id: "/trust",
	path: "/trust",
	getParentRoute: () => Route$310
});
var UnknownRoute = Route$269.update({
	id: "/unknown",
	path: "/unknown",
	getParentRoute: () => Route$310
});
var UnutmaRoute = Route$268.update({
	id: "/unutma",
	path: "/unutma",
	getParentRoute: () => Route$310
});
var VcardRoute = Route$267.update({
	id: "/vcard",
	path: "/vcard",
	getParentRoute: () => Route$310
});
var VideoRoute = Route$266.update({
	id: "/video",
	path: "/video",
	getParentRoute: () => Route$310
});
var VoiceRoute = Route$265.update({
	id: "/voice",
	path: "/voice",
	getParentRoute: () => Route$310
});
var WhyRoute = Route$264.update({
	id: "/why",
	path: "/why",
	getParentRoute: () => Route$310
});
var WifiRoute = Route$263.update({
	id: "/wifi",
	path: "/wifi",
	getParentRoute: () => Route$310
});
var WorkspaceRoute = Route$262.update({
	id: "/workspace",
	path: "/workspace",
	getParentRoute: () => Route$310
});
var XetaRoute = Route$261.update({
	id: "/xeta",
	path: "/xeta",
	getParentRoute: () => Route$310
});
var ZipRoute = Route$260.update({
	id: "/zip",
	path: "/zip",
	getParentRoute: () => Route$310
});
var AppsIndexRoute = Route$259.update({
	id: "/apps/",
	path: "/apps/",
	getParentRoute: () => Route$310
});
var AppsSlugRoute = Route$311.update({
	id: "/apps/$slug",
	path: "/apps/$slug",
	getParentRoute: () => Route$310
});
var ArAboutRoute = Route$258.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => ArRoute
});
var ArAppsRoute = Route$257.update({
	id: "/apps",
	path: "/apps",
	getParentRoute: () => ArRoute
});
var ArContactRoute = Route$256.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => ArRoute
});
var ArDoctorRoute = Route$255.update({
	id: "/doctor",
	path: "/doctor",
	getParentRoute: () => ArRoute
});
var ArEraseRoute = Route$254.update({
	id: "/erase",
	path: "/erase",
	getParentRoute: () => ArRoute
});
var ArErrorHelpRoute = Route$253.update({
	id: "/error-help",
	path: "/error-help",
	getParentRoute: () => ArRoute
});
var ArFaizRoute = Route$252.update({
	id: "/faiz",
	path: "/faiz",
	getParentRoute: () => ArRoute
});
var ArFaqRoute = Route$251.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => ArRoute
});
var ArFilecheckRoute = Route$250.update({
	id: "/filecheck",
	path: "/filecheck",
	getParentRoute: () => ArRoute
});
var ArFlowRoute = Route$249.update({
	id: "/flow",
	path: "/flow",
	getParentRoute: () => ArRoute
});
var ArImageRoute = Route$248.update({
	id: "/image",
	path: "/image",
	getParentRoute: () => ArRoute
});
var ArLearnRoute = Route$247.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => ArRoute
});
var ArLogicRoute = Route$246.update({
	id: "/logic",
	path: "/logic",
	getParentRoute: () => ArRoute
});
var ArMirrorRoute = Route$245.update({
	id: "/mirror",
	path: "/mirror",
	getParentRoute: () => ArRoute
});
var ArMovzuRoute = Route$244.update({
	id: "/movzu",
	path: "/movzu",
	getParentRoute: () => ArRoute
});
var ArMuqayiseRoute = Route$243.update({
	id: "/muqayise",
	path: "/muqayise",
	getParentRoute: () => ArRoute
});
var ArNeceRoute = Route$242.update({
	id: "/nece",
	path: "/nece",
	getParentRoute: () => ArRoute
});
var ArNedirRoute = Route$241.update({
	id: "/nedir",
	path: "/nedir",
	getParentRoute: () => ArRoute
});
var ArOyunRoute = Route$240.update({
	id: "/oyun",
	path: "/oyun",
	getParentRoute: () => ArRoute
});
var ArPaketRoute = Route$239.update({
	id: "/paket",
	path: "/paket",
	getParentRoute: () => ArRoute
});
var ArPdfRoute = Route$238.update({
	id: "/pdf",
	path: "/pdf",
	getParentRoute: () => ArRoute
});
var ArPlannerRoute = Route$237.update({
	id: "/planner",
	path: "/planner",
	getParentRoute: () => ArRoute
});
var ArQrRoute = Route$236.update({
	id: "/qr",
	path: "/qr",
	getParentRoute: () => ArRoute
});
var ArSchemaRoute = Route$235.update({
	id: "/schema",
	path: "/schema",
	getParentRoute: () => ArRoute
});
var ArSeoRoute = Route$234.update({
	id: "/seo",
	path: "/seo",
	getParentRoute: () => ArRoute
});
var ArServicesRoute = Route$233.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => ArRoute
});
var ArShortcutsRoute = Route$232.update({
	id: "/shortcuts",
	path: "/shortcuts",
	getParentRoute: () => ArRoute
});
var ArSozRoute = Route$231.update({
	id: "/soz",
	path: "/soz",
	getParentRoute: () => ArRoute
});
var ArSozSayiRoute = Route$230.update({
	id: "/soz-sayi",
	path: "/soz-sayi",
	getParentRoute: () => ArRoute
});
var ArStudioRoute = Route$229.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => ArRoute
});
var ArTermsRoute = Route$228.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => ArRoute
});
var ArToolsRoute = Route$227.update({
	id: "/tools",
	path: "/tools",
	getParentRoute: () => ArRoute
});
var ArToolsLegalRoute = Route$226.update({
	id: "/tools-legal",
	path: "/tools-legal",
	getParentRoute: () => ArRoute
});
var ArTrustRoute = Route$225.update({
	id: "/trust",
	path: "/trust",
	getParentRoute: () => ArRoute
});
var ArUnknownRoute = Route$224.update({
	id: "/unknown",
	path: "/unknown",
	getParentRoute: () => ArRoute
});
var ArVcardRoute = Route$223.update({
	id: "/vcard",
	path: "/vcard",
	getParentRoute: () => ArRoute
});
var ArVideoRoute = Route$222.update({
	id: "/video",
	path: "/video",
	getParentRoute: () => ArRoute
});
var ArVoiceRoute = Route$221.update({
	id: "/voice",
	path: "/voice",
	getParentRoute: () => ArRoute
});
var ArWifiRoute = Route$220.update({
	id: "/wifi",
	path: "/wifi",
	getParentRoute: () => ArRoute
});
var ArWorkspaceRoute = Route$219.update({
	id: "/workspace",
	path: "/workspace",
	getParentRoute: () => ArRoute
});
var ArXetaRoute = Route$218.update({
	id: "/xeta",
	path: "/xeta",
	getParentRoute: () => ArRoute
});
var ArZipRoute = Route$217.update({
	id: "/zip",
	path: "/zip",
	getParentRoute: () => ArRoute
});
var EnAboutRoute = Route$216.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => EnRoute
});
var EnAppsRoute = Route$215.update({
	id: "/apps",
	path: "/apps",
	getParentRoute: () => EnRoute
});
var EnContactRoute = Route$214.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => EnRoute
});
var EnDoctorRoute = Route$213.update({
	id: "/doctor",
	path: "/doctor",
	getParentRoute: () => EnRoute
});
var EnEraseRoute = Route$212.update({
	id: "/erase",
	path: "/erase",
	getParentRoute: () => EnRoute
});
var EnErrorHelpRoute = Route$211.update({
	id: "/error-help",
	path: "/error-help",
	getParentRoute: () => EnRoute
});
var EnFaizRoute = Route$210.update({
	id: "/faiz",
	path: "/faiz",
	getParentRoute: () => EnRoute
});
var EnFaqRoute = Route$209.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => EnRoute
});
var EnFilecheckRoute = Route$208.update({
	id: "/filecheck",
	path: "/filecheck",
	getParentRoute: () => EnRoute
});
var EnFlowRoute = Route$207.update({
	id: "/flow",
	path: "/flow",
	getParentRoute: () => EnRoute
});
var EnImageRoute = Route$206.update({
	id: "/image",
	path: "/image",
	getParentRoute: () => EnRoute
});
var EnLearnRoute = Route$205.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => EnRoute
});
var EnLogicRoute = Route$204.update({
	id: "/logic",
	path: "/logic",
	getParentRoute: () => EnRoute
});
var EnMirrorRoute = Route$203.update({
	id: "/mirror",
	path: "/mirror",
	getParentRoute: () => EnRoute
});
var EnMovzuRoute = Route$202.update({
	id: "/movzu",
	path: "/movzu",
	getParentRoute: () => EnRoute
});
var EnMuqayiseRoute = Route$201.update({
	id: "/muqayise",
	path: "/muqayise",
	getParentRoute: () => EnRoute
});
var EnNeceRoute = Route$200.update({
	id: "/nece",
	path: "/nece",
	getParentRoute: () => EnRoute
});
var EnNedirRoute = Route$199.update({
	id: "/nedir",
	path: "/nedir",
	getParentRoute: () => EnRoute
});
var EnOyunRoute = Route$198.update({
	id: "/oyun",
	path: "/oyun",
	getParentRoute: () => EnRoute
});
var EnPaketRoute = Route$197.update({
	id: "/paket",
	path: "/paket",
	getParentRoute: () => EnRoute
});
var EnPdfRoute = Route$196.update({
	id: "/pdf",
	path: "/pdf",
	getParentRoute: () => EnRoute
});
var EnPlannerRoute = Route$195.update({
	id: "/planner",
	path: "/planner",
	getParentRoute: () => EnRoute
});
var EnQrRoute = Route$194.update({
	id: "/qr",
	path: "/qr",
	getParentRoute: () => EnRoute
});
var EnSchemaRoute = Route$193.update({
	id: "/schema",
	path: "/schema",
	getParentRoute: () => EnRoute
});
var EnSeoRoute = Route$192.update({
	id: "/seo",
	path: "/seo",
	getParentRoute: () => EnRoute
});
var EnServicesRoute = Route$191.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => EnRoute
});
var EnShortcutsRoute = Route$190.update({
	id: "/shortcuts",
	path: "/shortcuts",
	getParentRoute: () => EnRoute
});
var EnSozRoute = Route$189.update({
	id: "/soz",
	path: "/soz",
	getParentRoute: () => EnRoute
});
var EnSozSayiRoute = Route$188.update({
	id: "/soz-sayi",
	path: "/soz-sayi",
	getParentRoute: () => EnRoute
});
var EnStudioRoute = Route$187.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => EnRoute
});
var EnTermsRoute = Route$186.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => EnRoute
});
var EnToolsRoute = Route$185.update({
	id: "/tools",
	path: "/tools",
	getParentRoute: () => EnRoute
});
var EnToolsLegalRoute = Route$184.update({
	id: "/tools-legal",
	path: "/tools-legal",
	getParentRoute: () => EnRoute
});
var EnTrustRoute = Route$183.update({
	id: "/trust",
	path: "/trust",
	getParentRoute: () => EnRoute
});
var EnUnknownRoute = Route$182.update({
	id: "/unknown",
	path: "/unknown",
	getParentRoute: () => EnRoute
});
var EnVcardRoute = Route$181.update({
	id: "/vcard",
	path: "/vcard",
	getParentRoute: () => EnRoute
});
var EnVideoRoute = Route$180.update({
	id: "/video",
	path: "/video",
	getParentRoute: () => EnRoute
});
var EnVoiceRoute = Route$179.update({
	id: "/voice",
	path: "/voice",
	getParentRoute: () => EnRoute
});
var EnWifiRoute = Route$178.update({
	id: "/wifi",
	path: "/wifi",
	getParentRoute: () => EnRoute
});
var EnWorkspaceRoute = Route$177.update({
	id: "/workspace",
	path: "/workspace",
	getParentRoute: () => EnRoute
});
var EnXetaRoute = Route$176.update({
	id: "/xeta",
	path: "/xeta",
	getParentRoute: () => EnRoute
});
var EnZipRoute = Route$175.update({
	id: "/zip",
	path: "/zip",
	getParentRoute: () => EnRoute
});
var ErebDiliFeilRoute = Route$174.update({
	id: "/ereb-dili/feil",
	path: "/ereb-dili/feil",
	getParentRoute: () => Route$310
});
var FaqSlugRoute = Route$173.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => FaqRoute
});
var GuidesIndexRoute = Route$172.update({
	id: "/guides/",
	path: "/guides/",
	getParentRoute: () => Route$310
});
var GuidesTopicRoute = Route$171.update({
	id: "/guides/$topic",
	path: "/guides/$topic",
	getParentRoute: () => Route$310
});
var HamisiGroupRoute = Route$170.update({
	id: "/hamisi/$group",
	path: "/hamisi/$group",
	getParentRoute: () => Route$310
});
var ImageToolRoute = Route$169.update({
	id: "/image_/$tool",
	path: "/image/$tool",
	getParentRoute: () => Route$310
});
var LearnLogicRoute = Route$168.update({
	id: "/learn_/logic",
	path: "/learn/logic",
	getParentRoute: () => Route$310
});
var MovzuSlugRoute = Route$167.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => MovzuRoute
});
var MuqayiseSlugRoute = Route$166.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => MuqayiseRoute
});
var NeceSlugRoute = Route$165.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => NeceRoute
});
var OyunSlugRoute = Route$164.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => OyunRoute
});
var PdfToolRoute = Route$163.update({
	id: "/pdf_/$tool",
	path: "/pdf/$tool",
	getParentRoute: () => Route$310
});
var PrivacySlugRoute = Route$162.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => PrivacyRoute
});
var PrivacyNibrasNoteRoute = Route$161.update({
	id: "/nibras-note",
	path: "/nibras-note",
	getParentRoute: () => PrivacyRoute
});
var PrivacyNibrasPdfRoute = Route$160.update({
	id: "/nibras-pdf",
	path: "/nibras-pdf",
	getParentRoute: () => PrivacyRoute
});
var PrivacyNibrasPlansRoute = Route$159.update({
	id: "/nibras-plans",
	path: "/nibras-plans",
	getParentRoute: () => PrivacyRoute
});
var PrivacyNibrasScanRoute = Route$158.update({
	id: "/nibras-scan",
	path: "/nibras-scan",
	getParentRoute: () => PrivacyRoute
});
var ProgrammingIndexRoute = Route$157.update({
	id: "/programming/",
	path: "/programming/",
	getParentRoute: () => Route$310
});
var ProgrammingTopicRoute = Route$156.update({
	id: "/programming/$topic",
	path: "/programming/$topic",
	getParentRoute: () => Route$310
});
var ResourcesIndexRoute = Route$155.update({
	id: "/resources/",
	path: "/resources/",
	getParentRoute: () => Route$310
});
var ResourcesTopicRouteRoute = Route$154.update({
	id: "/resources/$topic",
	path: "/resources/$topic",
	getParentRoute: () => Route$310
});
var ResurslarSlugRoute = Route$153.update({
	id: "/resurslar/$slug",
	path: "/resurslar/$slug",
	getParentRoute: () => Route$310
});
var RuAboutRoute = Route$152.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => RuRoute
});
var RuAppsRoute = Route$151.update({
	id: "/apps",
	path: "/apps",
	getParentRoute: () => RuRoute
});
var RuContactRoute = Route$150.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => RuRoute
});
var RuDoctorRoute = Route$149.update({
	id: "/doctor",
	path: "/doctor",
	getParentRoute: () => RuRoute
});
var RuEraseRoute = Route$148.update({
	id: "/erase",
	path: "/erase",
	getParentRoute: () => RuRoute
});
var RuErrorHelpRoute = Route$147.update({
	id: "/error-help",
	path: "/error-help",
	getParentRoute: () => RuRoute
});
var RuFaizRoute = Route$146.update({
	id: "/faiz",
	path: "/faiz",
	getParentRoute: () => RuRoute
});
var RuFaqRoute = Route$145.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => RuRoute
});
var RuFilecheckRoute = Route$144.update({
	id: "/filecheck",
	path: "/filecheck",
	getParentRoute: () => RuRoute
});
var RuFlowRoute = Route$143.update({
	id: "/flow",
	path: "/flow",
	getParentRoute: () => RuRoute
});
var RuImageRoute = Route$142.update({
	id: "/image",
	path: "/image",
	getParentRoute: () => RuRoute
});
var RuLearnRoute = Route$141.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => RuRoute
});
var RuLogicRoute = Route$140.update({
	id: "/logic",
	path: "/logic",
	getParentRoute: () => RuRoute
});
var RuMirrorRoute = Route$139.update({
	id: "/mirror",
	path: "/mirror",
	getParentRoute: () => RuRoute
});
var RuMovzuRoute = Route$138.update({
	id: "/movzu",
	path: "/movzu",
	getParentRoute: () => RuRoute
});
var RuMuqayiseRoute = Route$137.update({
	id: "/muqayise",
	path: "/muqayise",
	getParentRoute: () => RuRoute
});
var RuNeceRoute = Route$136.update({
	id: "/nece",
	path: "/nece",
	getParentRoute: () => RuRoute
});
var RuNedirRoute = Route$135.update({
	id: "/nedir",
	path: "/nedir",
	getParentRoute: () => RuRoute
});
var RuOyunRoute = Route$134.update({
	id: "/oyun",
	path: "/oyun",
	getParentRoute: () => RuRoute
});
var RuPaketRoute = Route$133.update({
	id: "/paket",
	path: "/paket",
	getParentRoute: () => RuRoute
});
var RuPdfRoute = Route$132.update({
	id: "/pdf",
	path: "/pdf",
	getParentRoute: () => RuRoute
});
var RuPlannerRoute = Route$131.update({
	id: "/planner",
	path: "/planner",
	getParentRoute: () => RuRoute
});
var RuQrRoute = Route$130.update({
	id: "/qr",
	path: "/qr",
	getParentRoute: () => RuRoute
});
var RuSchemaRoute = Route$129.update({
	id: "/schema",
	path: "/schema",
	getParentRoute: () => RuRoute
});
var RuSeoRoute = Route$128.update({
	id: "/seo",
	path: "/seo",
	getParentRoute: () => RuRoute
});
var RuServicesRoute = Route$127.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => RuRoute
});
var RuShortcutsRoute = Route$126.update({
	id: "/shortcuts",
	path: "/shortcuts",
	getParentRoute: () => RuRoute
});
var RuSozRoute = Route$125.update({
	id: "/soz",
	path: "/soz",
	getParentRoute: () => RuRoute
});
var RuSozSayiRoute = Route$124.update({
	id: "/soz-sayi",
	path: "/soz-sayi",
	getParentRoute: () => RuRoute
});
var RuStudioRoute = Route$123.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => RuRoute
});
var RuTermsRoute = Route$122.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => RuRoute
});
var RuToolsRoute = Route$121.update({
	id: "/tools",
	path: "/tools",
	getParentRoute: () => RuRoute
});
var RuToolsLegalRoute = Route$120.update({
	id: "/tools-legal",
	path: "/tools-legal",
	getParentRoute: () => RuRoute
});
var RuTrustRoute = Route$119.update({
	id: "/trust",
	path: "/trust",
	getParentRoute: () => RuRoute
});
var RuUnknownRoute = Route$118.update({
	id: "/unknown",
	path: "/unknown",
	getParentRoute: () => RuRoute
});
var RuVcardRoute = Route$117.update({
	id: "/vcard",
	path: "/vcard",
	getParentRoute: () => RuRoute
});
var RuVideoRoute = Route$116.update({
	id: "/video",
	path: "/video",
	getParentRoute: () => RuRoute
});
var RuVoiceRoute = Route$115.update({
	id: "/voice",
	path: "/voice",
	getParentRoute: () => RuRoute
});
var RuWifiRoute = Route$114.update({
	id: "/wifi",
	path: "/wifi",
	getParentRoute: () => RuRoute
});
var RuWorkspaceRoute = Route$113.update({
	id: "/workspace",
	path: "/workspace",
	getParentRoute: () => RuRoute
});
var RuXetaRoute = Route$112.update({
	id: "/xeta",
	path: "/xeta",
	getParentRoute: () => RuRoute
});
var RuZipRoute = Route$111.update({
	id: "/zip",
	path: "/zip",
	getParentRoute: () => RuRoute
});
var SozSlugRoute = Route$110.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => SozRoute
});
var ToolsSlugRoute = Route$109.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ToolsRoute
});
var TrAboutRoute = Route$108.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => TrRoute
});
var TrAppsRoute = Route$107.update({
	id: "/apps",
	path: "/apps",
	getParentRoute: () => TrRoute
});
var TrContactRoute = Route$106.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => TrRoute
});
var TrDoctorRoute = Route$105.update({
	id: "/doctor",
	path: "/doctor",
	getParentRoute: () => TrRoute
});
var TrEraseRoute = Route$104.update({
	id: "/erase",
	path: "/erase",
	getParentRoute: () => TrRoute
});
var TrErrorHelpRoute = Route$103.update({
	id: "/error-help",
	path: "/error-help",
	getParentRoute: () => TrRoute
});
var TrFaizRoute = Route$102.update({
	id: "/faiz",
	path: "/faiz",
	getParentRoute: () => TrRoute
});
var TrFaqRoute = Route$101.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => TrRoute
});
var TrFilecheckRoute = Route$100.update({
	id: "/filecheck",
	path: "/filecheck",
	getParentRoute: () => TrRoute
});
var TrFlowRoute = Route$99.update({
	id: "/flow",
	path: "/flow",
	getParentRoute: () => TrRoute
});
var TrImageRoute = Route$98.update({
	id: "/image",
	path: "/image",
	getParentRoute: () => TrRoute
});
var TrLearnRoute = Route$97.update({
	id: "/learn",
	path: "/learn",
	getParentRoute: () => TrRoute
});
var TrLogicRoute = Route$96.update({
	id: "/logic",
	path: "/logic",
	getParentRoute: () => TrRoute
});
var TrMirrorRoute = Route$95.update({
	id: "/mirror",
	path: "/mirror",
	getParentRoute: () => TrRoute
});
var TrMovzuRoute = Route$94.update({
	id: "/movzu",
	path: "/movzu",
	getParentRoute: () => TrRoute
});
var TrMuqayiseRoute = Route$93.update({
	id: "/muqayise",
	path: "/muqayise",
	getParentRoute: () => TrRoute
});
var TrNeceRoute = Route$92.update({
	id: "/nece",
	path: "/nece",
	getParentRoute: () => TrRoute
});
var TrNedirRoute = Route$91.update({
	id: "/nedir",
	path: "/nedir",
	getParentRoute: () => TrRoute
});
var TrOyunRoute = Route$90.update({
	id: "/oyun",
	path: "/oyun",
	getParentRoute: () => TrRoute
});
var TrPaketRoute = Route$89.update({
	id: "/paket",
	path: "/paket",
	getParentRoute: () => TrRoute
});
var TrPdfRoute = Route$88.update({
	id: "/pdf",
	path: "/pdf",
	getParentRoute: () => TrRoute
});
var TrPlannerRoute = Route$87.update({
	id: "/planner",
	path: "/planner",
	getParentRoute: () => TrRoute
});
var TrQrRoute = Route$86.update({
	id: "/qr",
	path: "/qr",
	getParentRoute: () => TrRoute
});
var TrSchemaRoute = Route$85.update({
	id: "/schema",
	path: "/schema",
	getParentRoute: () => TrRoute
});
var TrSeoRoute = Route$84.update({
	id: "/seo",
	path: "/seo",
	getParentRoute: () => TrRoute
});
var TrServicesRoute = Route$83.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => TrRoute
});
var TrShortcutsRoute = Route$82.update({
	id: "/shortcuts",
	path: "/shortcuts",
	getParentRoute: () => TrRoute
});
var TrSozRoute = Route$81.update({
	id: "/soz",
	path: "/soz",
	getParentRoute: () => TrRoute
});
var TrSozSayiRoute = Route$80.update({
	id: "/soz-sayi",
	path: "/soz-sayi",
	getParentRoute: () => TrRoute
});
var TrStudioRoute = Route$79.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => TrRoute
});
var TrTermsRoute = Route$78.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => TrRoute
});
var TrToolsRoute = Route$77.update({
	id: "/tools",
	path: "/tools",
	getParentRoute: () => TrRoute
});
var TrToolsLegalRoute = Route$76.update({
	id: "/tools-legal",
	path: "/tools-legal",
	getParentRoute: () => TrRoute
});
var TrTrustRoute = Route$75.update({
	id: "/trust",
	path: "/trust",
	getParentRoute: () => TrRoute
});
var TrUnknownRoute = Route$74.update({
	id: "/unknown",
	path: "/unknown",
	getParentRoute: () => TrRoute
});
var TrVcardRoute = Route$73.update({
	id: "/vcard",
	path: "/vcard",
	getParentRoute: () => TrRoute
});
var TrVideoRoute = Route$72.update({
	id: "/video",
	path: "/video",
	getParentRoute: () => TrRoute
});
var TrVoiceRoute = Route$71.update({
	id: "/voice",
	path: "/voice",
	getParentRoute: () => TrRoute
});
var TrWifiRoute = Route$70.update({
	id: "/wifi",
	path: "/wifi",
	getParentRoute: () => TrRoute
});
var TrWorkspaceRoute = Route$69.update({
	id: "/workspace",
	path: "/workspace",
	getParentRoute: () => TrRoute
});
var TrXetaRoute = Route$68.update({
	id: "/xeta",
	path: "/xeta",
	getParentRoute: () => TrRoute
});
var TrZipRoute = Route$67.update({
	id: "/zip",
	path: "/zip",
	getParentRoute: () => TrRoute
});
var VideoToolRoute = Route$66.update({
	id: "/video_/$tool",
	path: "/video/$tool",
	getParentRoute: () => Route$310
});
var XetaSlugRoute = Route$65.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => XetaRoute
});
var ArAppsSlugRoute = Route$64.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ArAppsRoute
});
var ArFaqSlugRoute = Route$63.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ArFaqRoute
});
var ArImageToolRoute = Route$62.update({
	id: "/image_/$tool",
	path: "/image/$tool",
	getParentRoute: () => ArRoute
});
var ArJamiGroupRoute = Route$61.update({
	id: "/jami/$group",
	path: "/jami/$group",
	getParentRoute: () => ArRoute
});
var ArLearnLogicRoute = Route$60.update({
	id: "/learn_/logic",
	path: "/learn/logic",
	getParentRoute: () => ArRoute
});
var ArMovzuSlugRoute = Route$59.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ArMovzuRoute
});
var ArMuqayiseSlugRoute = Route$58.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ArMuqayiseRoute
});
var ArNeceSlugRoute = Route$57.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ArNeceRoute
});
var ArOyunSlugRoute = Route$56.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ArOyunRoute
});
var ArPdfToolRoute = Route$55.update({
	id: "/pdf_/$tool",
	path: "/pdf/$tool",
	getParentRoute: () => ArRoute
});
var ArProgrammingSlugRoute = Route$54.update({
	id: "/programming/$slug",
	path: "/programming/$slug",
	getParentRoute: () => ArRoute
});
var ArSozSlugRoute = Route$53.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ArSozRoute
});
var ArToolsSlugRoute = Route$52.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ArToolsRoute
});
var ArVideoToolRoute = Route$51.update({
	id: "/video_/$tool",
	path: "/video/$tool",
	getParentRoute: () => ArRoute
});
var ArXetaSlugRoute = Route$50.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ArXetaRoute
});
var EnAllGroupRoute = Route$49.update({
	id: "/all/$group",
	path: "/all/$group",
	getParentRoute: () => EnRoute
});
var EnAppsSlugRoute = Route$48.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => EnAppsRoute
});
var EnFaqSlugRoute = Route$47.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => EnFaqRoute
});
var EnImageToolRoute = Route$46.update({
	id: "/image_/$tool",
	path: "/image/$tool",
	getParentRoute: () => EnRoute
});
var EnLearnLogicRoute = Route$45.update({
	id: "/learn_/logic",
	path: "/learn/logic",
	getParentRoute: () => EnRoute
});
var EnMovzuSlugRoute = Route$44.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => EnMovzuRoute
});
var EnMuqayiseSlugRoute = Route$43.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => EnMuqayiseRoute
});
var EnNeceSlugRoute = Route$42.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => EnNeceRoute
});
var EnOyunSlugRoute = Route$41.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => EnOyunRoute
});
var EnPdfToolRoute = Route$40.update({
	id: "/pdf_/$tool",
	path: "/pdf/$tool",
	getParentRoute: () => EnRoute
});
var EnProgrammingSlugRoute = Route$39.update({
	id: "/programming/$slug",
	path: "/programming/$slug",
	getParentRoute: () => EnRoute
});
var EnSozSlugRoute = Route$38.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => EnSozRoute
});
var EnToolsSlugRoute = Route$37.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => EnToolsRoute
});
var EnVideoToolRoute = Route$36.update({
	id: "/video_/$tool",
	path: "/video/$tool",
	getParentRoute: () => EnRoute
});
var EnXetaSlugRoute = Route$35.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => EnXetaRoute
});
var ErebDiliFeilSlugRoute = Route$34.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ErebDiliFeilRoute
});
var PrivacyNibrasQrDeleteAccountRoute = Route$33.update({
	id: "/nibras-qr/delete-account",
	path: "/nibras-qr/delete-account",
	getParentRoute: () => PrivacyRoute
});
var ResourcesTopicIndexRoute = Route$32.update({
	id: "/",
	path: "/",
	getParentRoute: () => ResourcesTopicRouteRoute
});
var ResourcesTopicArticleRoute = Route$31.update({
	id: "/$article",
	path: "/$article",
	getParentRoute: () => ResourcesTopicRouteRoute
});
var RuAppsSlugRoute = Route$30.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RuAppsRoute
});
var RuFaqSlugRoute = Route$29.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RuFaqRoute
});
var RuImageToolRoute = Route$28.update({
	id: "/image_/$tool",
	path: "/image/$tool",
	getParentRoute: () => RuRoute
});
var RuLearnLogicRoute = Route$27.update({
	id: "/learn_/logic",
	path: "/learn/logic",
	getParentRoute: () => RuRoute
});
var RuMovzuSlugRoute = Route$26.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RuMovzuRoute
});
var RuMuqayiseSlugRoute = Route$25.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RuMuqayiseRoute
});
var RuNeceSlugRoute = Route$24.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RuNeceRoute
});
var RuOyunSlugRoute = Route$23.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RuOyunRoute
});
var RuPdfToolRoute = Route$22.update({
	id: "/pdf_/$tool",
	path: "/pdf/$tool",
	getParentRoute: () => RuRoute
});
var RuProgrammingSlugRoute = Route$21.update({
	id: "/programming/$slug",
	path: "/programming/$slug",
	getParentRoute: () => RuRoute
});
var RuResourcesSlugRoute = Route$20.update({
	id: "/resources/$slug",
	path: "/resources/$slug",
	getParentRoute: () => RuRoute
});
var RuSozSlugRoute = Route$19.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RuSozRoute
});
var RuToolsSlugRoute = Route$18.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RuToolsRoute
});
var RuVideoToolRoute = Route$17.update({
	id: "/video_/$tool",
	path: "/video/$tool",
	getParentRoute: () => RuRoute
});
var RuVseGroupRoute = Route$16.update({
	id: "/vse/$group",
	path: "/vse/$group",
	getParentRoute: () => RuRoute
});
var RuXetaSlugRoute = Route$15.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => RuXetaRoute
});
var TrAppsSlugRoute = Route$14.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TrAppsRoute
});
var TrFaqSlugRoute = Route$13.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TrFaqRoute
});
var TrImageToolRoute = Route$12.update({
	id: "/image_/$tool",
	path: "/image/$tool",
	getParentRoute: () => TrRoute
});
var TrLearnLogicRoute = Route$11.update({
	id: "/learn_/logic",
	path: "/learn/logic",
	getParentRoute: () => TrRoute
});
var TrMovzuSlugRoute = Route$10.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TrMovzuRoute
});
var TrMuqayiseSlugRoute = Route$9.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TrMuqayiseRoute
});
var TrNeceSlugRoute = Route$8.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TrNeceRoute
});
var TrOyunSlugRoute = Route$7.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TrOyunRoute
});
var TrPdfToolRoute = Route$6.update({
	id: "/pdf_/$tool",
	path: "/pdf/$tool",
	getParentRoute: () => TrRoute
});
var TrProgrammingSlugRoute = Route$5.update({
	id: "/programming/$slug",
	path: "/programming/$slug",
	getParentRoute: () => TrRoute
});
var TrSozSlugRoute = Route$4.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TrSozRoute
});
var TrToolsSlugRoute = Route$3.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TrToolsRoute
});
var TrTumuGroupRoute = Route$2.update({
	id: "/tumu/$group",
	path: "/tumu/$group",
	getParentRoute: () => TrRoute
});
var TrVideoToolRoute = Route$1.update({
	id: "/video_/$tool",
	path: "/video/$tool",
	getParentRoute: () => TrRoute
});
var TrXetaSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TrXetaRoute
});
var ArAppsRouteChildren = { ArAppsSlugRoute };
var ArAppsRouteWithChildren = ArAppsRoute._addFileChildren(ArAppsRouteChildren);
var ArFaqRouteChildren = { ArFaqSlugRoute };
var ArFaqRouteWithChildren = ArFaqRoute._addFileChildren(ArFaqRouteChildren);
var ArMovzuRouteChildren = { ArMovzuSlugRoute };
var ArMovzuRouteWithChildren = ArMovzuRoute._addFileChildren(ArMovzuRouteChildren);
var ArMuqayiseRouteChildren = { ArMuqayiseSlugRoute };
var ArMuqayiseRouteWithChildren = ArMuqayiseRoute._addFileChildren(ArMuqayiseRouteChildren);
var ArNeceRouteChildren = { ArNeceSlugRoute };
var ArNeceRouteWithChildren = ArNeceRoute._addFileChildren(ArNeceRouteChildren);
var ArOyunRouteChildren = { ArOyunSlugRoute };
var ArOyunRouteWithChildren = ArOyunRoute._addFileChildren(ArOyunRouteChildren);
var ArSozRouteChildren = { ArSozSlugRoute };
var ArSozRouteWithChildren = ArSozRoute._addFileChildren(ArSozRouteChildren);
var ArToolsRouteChildren = { ArToolsSlugRoute };
var ArToolsRouteWithChildren = ArToolsRoute._addFileChildren(ArToolsRouteChildren);
var ArXetaRouteChildren = { ArXetaSlugRoute };
var ArRouteChildren = {
	ArAboutRoute,
	ArAppsRoute: ArAppsRouteWithChildren,
	ArContactRoute,
	ArDoctorRoute,
	ArEraseRoute,
	ArErrorHelpRoute,
	ArFaizRoute,
	ArFaqRoute: ArFaqRouteWithChildren,
	ArFilecheckRoute,
	ArFlowRoute,
	ArImageRoute,
	ArLearnRoute,
	ArLogicRoute,
	ArMirrorRoute,
	ArMovzuRoute: ArMovzuRouteWithChildren,
	ArMuqayiseRoute: ArMuqayiseRouteWithChildren,
	ArNeceRoute: ArNeceRouteWithChildren,
	ArNedirRoute,
	ArOyunRoute: ArOyunRouteWithChildren,
	ArPaketRoute,
	ArPdfRoute,
	ArPlannerRoute,
	ArQrRoute,
	ArSchemaRoute,
	ArSeoRoute,
	ArServicesRoute,
	ArShortcutsRoute,
	ArSozRoute: ArSozRouteWithChildren,
	ArSozSayiRoute,
	ArStudioRoute,
	ArTermsRoute,
	ArToolsRoute: ArToolsRouteWithChildren,
	ArToolsLegalRoute,
	ArTrustRoute,
	ArUnknownRoute,
	ArVcardRoute,
	ArVideoRoute,
	ArVoiceRoute,
	ArWifiRoute,
	ArWorkspaceRoute,
	ArXetaRoute: ArXetaRoute._addFileChildren(ArXetaRouteChildren),
	ArZipRoute,
	ArImageToolRoute,
	ArJamiGroupRoute,
	ArLearnLogicRoute,
	ArPdfToolRoute,
	ArProgrammingSlugRoute,
	ArVideoToolRoute
};
var ArRouteWithChildren = ArRoute._addFileChildren(ArRouteChildren);
var EnAppsRouteChildren = { EnAppsSlugRoute };
var EnAppsRouteWithChildren = EnAppsRoute._addFileChildren(EnAppsRouteChildren);
var EnFaqRouteChildren = { EnFaqSlugRoute };
var EnFaqRouteWithChildren = EnFaqRoute._addFileChildren(EnFaqRouteChildren);
var EnMovzuRouteChildren = { EnMovzuSlugRoute };
var EnMovzuRouteWithChildren = EnMovzuRoute._addFileChildren(EnMovzuRouteChildren);
var EnMuqayiseRouteChildren = { EnMuqayiseSlugRoute };
var EnMuqayiseRouteWithChildren = EnMuqayiseRoute._addFileChildren(EnMuqayiseRouteChildren);
var EnNeceRouteChildren = { EnNeceSlugRoute };
var EnNeceRouteWithChildren = EnNeceRoute._addFileChildren(EnNeceRouteChildren);
var EnOyunRouteChildren = { EnOyunSlugRoute };
var EnOyunRouteWithChildren = EnOyunRoute._addFileChildren(EnOyunRouteChildren);
var EnSozRouteChildren = { EnSozSlugRoute };
var EnSozRouteWithChildren = EnSozRoute._addFileChildren(EnSozRouteChildren);
var EnToolsRouteChildren = { EnToolsSlugRoute };
var EnToolsRouteWithChildren = EnToolsRoute._addFileChildren(EnToolsRouteChildren);
var EnXetaRouteChildren = { EnXetaSlugRoute };
var EnRouteChildren = {
	EnAboutRoute,
	EnAppsRoute: EnAppsRouteWithChildren,
	EnContactRoute,
	EnDoctorRoute,
	EnEraseRoute,
	EnErrorHelpRoute,
	EnFaizRoute,
	EnFaqRoute: EnFaqRouteWithChildren,
	EnFilecheckRoute,
	EnFlowRoute,
	EnImageRoute,
	EnLearnRoute,
	EnLogicRoute,
	EnMirrorRoute,
	EnMovzuRoute: EnMovzuRouteWithChildren,
	EnMuqayiseRoute: EnMuqayiseRouteWithChildren,
	EnNeceRoute: EnNeceRouteWithChildren,
	EnNedirRoute,
	EnOyunRoute: EnOyunRouteWithChildren,
	EnPaketRoute,
	EnPdfRoute,
	EnPlannerRoute,
	EnQrRoute,
	EnSchemaRoute,
	EnSeoRoute,
	EnServicesRoute,
	EnShortcutsRoute,
	EnSozRoute: EnSozRouteWithChildren,
	EnSozSayiRoute,
	EnStudioRoute,
	EnTermsRoute,
	EnToolsRoute: EnToolsRouteWithChildren,
	EnToolsLegalRoute,
	EnTrustRoute,
	EnUnknownRoute,
	EnVcardRoute,
	EnVideoRoute,
	EnVoiceRoute,
	EnWifiRoute,
	EnWorkspaceRoute,
	EnXetaRoute: EnXetaRoute._addFileChildren(EnXetaRouteChildren),
	EnZipRoute,
	EnAllGroupRoute,
	EnImageToolRoute,
	EnLearnLogicRoute,
	EnPdfToolRoute,
	EnProgrammingSlugRoute,
	EnVideoToolRoute
};
var EnRouteWithChildren = EnRoute._addFileChildren(EnRouteChildren);
var FaqRouteChildren = { FaqSlugRoute };
var FaqRouteWithChildren = FaqRoute._addFileChildren(FaqRouteChildren);
var MovzuRouteChildren = { MovzuSlugRoute };
var MovzuRouteWithChildren = MovzuRoute._addFileChildren(MovzuRouteChildren);
var MuqayiseRouteChildren = { MuqayiseSlugRoute };
var MuqayiseRouteWithChildren = MuqayiseRoute._addFileChildren(MuqayiseRouteChildren);
var NeceRouteChildren = { NeceSlugRoute };
var NeceRouteWithChildren = NeceRoute._addFileChildren(NeceRouteChildren);
var OyunRouteChildren = { OyunSlugRoute };
var OyunRouteWithChildren = OyunRoute._addFileChildren(OyunRouteChildren);
var PrivacyRouteChildren = {
	PrivacySlugRoute,
	PrivacyNibrasNoteRoute,
	PrivacyNibrasPdfRoute,
	PrivacyNibrasPlansRoute,
	PrivacyNibrasScanRoute,
	PrivacyNibrasQrDeleteAccountRoute
};
var PrivacyRouteWithChildren = PrivacyRoute._addFileChildren(PrivacyRouteChildren);
var RuAppsRouteChildren = { RuAppsSlugRoute };
var RuAppsRouteWithChildren = RuAppsRoute._addFileChildren(RuAppsRouteChildren);
var RuFaqRouteChildren = { RuFaqSlugRoute };
var RuFaqRouteWithChildren = RuFaqRoute._addFileChildren(RuFaqRouteChildren);
var RuMovzuRouteChildren = { RuMovzuSlugRoute };
var RuMovzuRouteWithChildren = RuMovzuRoute._addFileChildren(RuMovzuRouteChildren);
var RuMuqayiseRouteChildren = { RuMuqayiseSlugRoute };
var RuMuqayiseRouteWithChildren = RuMuqayiseRoute._addFileChildren(RuMuqayiseRouteChildren);
var RuNeceRouteChildren = { RuNeceSlugRoute };
var RuNeceRouteWithChildren = RuNeceRoute._addFileChildren(RuNeceRouteChildren);
var RuOyunRouteChildren = { RuOyunSlugRoute };
var RuOyunRouteWithChildren = RuOyunRoute._addFileChildren(RuOyunRouteChildren);
var RuSozRouteChildren = { RuSozSlugRoute };
var RuSozRouteWithChildren = RuSozRoute._addFileChildren(RuSozRouteChildren);
var RuToolsRouteChildren = { RuToolsSlugRoute };
var RuToolsRouteWithChildren = RuToolsRoute._addFileChildren(RuToolsRouteChildren);
var RuXetaRouteChildren = { RuXetaSlugRoute };
var RuRouteChildren = {
	RuAboutRoute,
	RuAppsRoute: RuAppsRouteWithChildren,
	RuContactRoute,
	RuDoctorRoute,
	RuEraseRoute,
	RuErrorHelpRoute,
	RuFaizRoute,
	RuFaqRoute: RuFaqRouteWithChildren,
	RuFilecheckRoute,
	RuFlowRoute,
	RuImageRoute,
	RuLearnRoute,
	RuLogicRoute,
	RuMirrorRoute,
	RuMovzuRoute: RuMovzuRouteWithChildren,
	RuMuqayiseRoute: RuMuqayiseRouteWithChildren,
	RuNeceRoute: RuNeceRouteWithChildren,
	RuNedirRoute,
	RuOyunRoute: RuOyunRouteWithChildren,
	RuPaketRoute,
	RuPdfRoute,
	RuPlannerRoute,
	RuQrRoute,
	RuSchemaRoute,
	RuSeoRoute,
	RuServicesRoute,
	RuShortcutsRoute,
	RuSozRoute: RuSozRouteWithChildren,
	RuSozSayiRoute,
	RuStudioRoute,
	RuTermsRoute,
	RuToolsRoute: RuToolsRouteWithChildren,
	RuToolsLegalRoute,
	RuTrustRoute,
	RuUnknownRoute,
	RuVcardRoute,
	RuVideoRoute,
	RuVoiceRoute,
	RuWifiRoute,
	RuWorkspaceRoute,
	RuXetaRoute: RuXetaRoute._addFileChildren(RuXetaRouteChildren),
	RuZipRoute,
	RuImageToolRoute,
	RuLearnLogicRoute,
	RuPdfToolRoute,
	RuProgrammingSlugRoute,
	RuResourcesSlugRoute,
	RuVideoToolRoute,
	RuVseGroupRoute
};
var RuRouteWithChildren = RuRoute._addFileChildren(RuRouteChildren);
var SozRouteChildren = { SozSlugRoute };
var SozRouteWithChildren = SozRoute._addFileChildren(SozRouteChildren);
var ToolsRouteChildren = { ToolsSlugRoute };
var ToolsRouteWithChildren = ToolsRoute._addFileChildren(ToolsRouteChildren);
var TrAppsRouteChildren = { TrAppsSlugRoute };
var TrAppsRouteWithChildren = TrAppsRoute._addFileChildren(TrAppsRouteChildren);
var TrFaqRouteChildren = { TrFaqSlugRoute };
var TrFaqRouteWithChildren = TrFaqRoute._addFileChildren(TrFaqRouteChildren);
var TrMovzuRouteChildren = { TrMovzuSlugRoute };
var TrMovzuRouteWithChildren = TrMovzuRoute._addFileChildren(TrMovzuRouteChildren);
var TrMuqayiseRouteChildren = { TrMuqayiseSlugRoute };
var TrMuqayiseRouteWithChildren = TrMuqayiseRoute._addFileChildren(TrMuqayiseRouteChildren);
var TrNeceRouteChildren = { TrNeceSlugRoute };
var TrNeceRouteWithChildren = TrNeceRoute._addFileChildren(TrNeceRouteChildren);
var TrOyunRouteChildren = { TrOyunSlugRoute };
var TrOyunRouteWithChildren = TrOyunRoute._addFileChildren(TrOyunRouteChildren);
var TrSozRouteChildren = { TrSozSlugRoute };
var TrSozRouteWithChildren = TrSozRoute._addFileChildren(TrSozRouteChildren);
var TrToolsRouteChildren = { TrToolsSlugRoute };
var TrToolsRouteWithChildren = TrToolsRoute._addFileChildren(TrToolsRouteChildren);
var TrXetaRouteChildren = { TrXetaSlugRoute };
var TrRouteChildren = {
	TrAboutRoute,
	TrAppsRoute: TrAppsRouteWithChildren,
	TrContactRoute,
	TrDoctorRoute,
	TrEraseRoute,
	TrErrorHelpRoute,
	TrFaizRoute,
	TrFaqRoute: TrFaqRouteWithChildren,
	TrFilecheckRoute,
	TrFlowRoute,
	TrImageRoute,
	TrLearnRoute,
	TrLogicRoute,
	TrMirrorRoute,
	TrMovzuRoute: TrMovzuRouteWithChildren,
	TrMuqayiseRoute: TrMuqayiseRouteWithChildren,
	TrNeceRoute: TrNeceRouteWithChildren,
	TrNedirRoute,
	TrOyunRoute: TrOyunRouteWithChildren,
	TrPaketRoute,
	TrPdfRoute,
	TrPlannerRoute,
	TrQrRoute,
	TrSchemaRoute,
	TrSeoRoute,
	TrServicesRoute,
	TrShortcutsRoute,
	TrSozRoute: TrSozRouteWithChildren,
	TrSozSayiRoute,
	TrStudioRoute,
	TrTermsRoute,
	TrToolsRoute: TrToolsRouteWithChildren,
	TrToolsLegalRoute,
	TrTrustRoute,
	TrUnknownRoute,
	TrVcardRoute,
	TrVideoRoute,
	TrVoiceRoute,
	TrWifiRoute,
	TrWorkspaceRoute,
	TrXetaRoute: TrXetaRoute._addFileChildren(TrXetaRouteChildren),
	TrZipRoute,
	TrImageToolRoute,
	TrLearnLogicRoute,
	TrPdfToolRoute,
	TrProgrammingSlugRoute,
	TrTumuGroupRoute,
	TrVideoToolRoute
};
var TrRouteWithChildren = TrRoute._addFileChildren(TrRouteChildren);
var XetaRouteChildren = { XetaSlugRoute };
var XetaRouteWithChildren = XetaRoute._addFileChildren(XetaRouteChildren);
var ResourcesTopicRouteRouteChildren = {
	ResourcesTopicArticleRoute,
	ResourcesTopicIndexRoute
};
var ResourcesTopicRouteRouteWithChildren = ResourcesTopicRouteRoute._addFileChildren(ResourcesTopicRouteRouteChildren);
var ErebDiliFeilRouteChildren = { ErebDiliFeilSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ArRoute: ArRouteWithChildren,
	ContactRoute,
	DoctorRoute,
	EnRoute: EnRouteWithChildren,
	EraseRoute,
	ErrorHelpRoute,
	FaizRoute,
	FaqRoute: FaqRouteWithChildren,
	FilecheckRoute,
	FlowRoute,
	ImageRoute,
	LearnRoute,
	LogicRoute,
	MirrorRoute,
	MovzuRoute: MovzuRouteWithChildren,
	MuqayiseRoute: MuqayiseRouteWithChildren,
	NeceRoute: NeceRouteWithChildren,
	NedirRoute,
	NxStudioRoute,
	OyunRoute: OyunRouteWithChildren,
	PaketRoute,
	PdfRoute,
	PlannerRoute,
	PrivacyRoute: PrivacyRouteWithChildren,
	QrRoute,
	RuRoute: RuRouteWithChildren,
	SchemaRoute,
	SeoRoute,
	ServicesRoute,
	ShortcutsRoute,
	SozRoute: SozRouteWithChildren,
	SozSayiRoute,
	StudioRoute,
	TermsRoute,
	ToolsRoute: ToolsRouteWithChildren,
	ToolsLegalRoute,
	TrRoute: TrRouteWithChildren,
	TrustRoute,
	UnknownRoute,
	UnutmaRoute,
	VcardRoute,
	VideoRoute,
	VoiceRoute,
	WhyRoute,
	WifiRoute,
	WorkspaceRoute,
	XetaRoute: XetaRouteWithChildren,
	ZipRoute,
	ResourcesTopicRouteRoute: ResourcesTopicRouteRouteWithChildren,
	AppsSlugRoute,
	ErebDiliFeilRoute: ErebDiliFeilRoute._addFileChildren(ErebDiliFeilRouteChildren),
	GuidesTopicRoute,
	HamisiGroupRoute,
	ImageToolRoute,
	LearnLogicRoute,
	PdfToolRoute,
	ProgrammingTopicRoute,
	ResurslarSlugRoute,
	VideoToolRoute,
	AppsIndexRoute,
	GuidesIndexRoute,
	ProgrammingIndexRoute,
	ResourcesIndexRoute
};
var routeTree = Route$310._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		rewrite: localeRewrite
	});
}
//#endregion
export { Route$55 as $, RECENT_EVENT as $n, LogicPage as $t, Route$30 as A, aboutFromRow as An, Route$170 as At, Route$41 as B, LanguageSwitch as Bn, Route$259 as Bt, Route$22 as C, ui as Cn, Route$162 as Ct, Route$26 as D, PageAssistant as Dn, Route$166 as Dt, Route$25 as E, verbPath as En, Route$165 as Et, Route$36 as F, unutmaBody as Fn, Route$215 as Ft, Route$47 as G, VoicePage as Gn, Route$271 as Gt, Route$43 as H, SiteLegal as Hn, Route$268 as Ht, Route$37 as I, unutmaFromRow as In, Route$216 as It, Route$50 as J, LIBRARY as Jn, SeoPage as Jt, Route$48 as K, BAR as Kn, TermsPage as Kt, Route$38 as L, InfoCard as Ln, Route$257 as Lt, Route$32 as M, defaultUnutma as Mn, Route$172 as Mt, Route$34 as N, founderCopy as Nn, Route$173 as Nt, Route$28 as O, ApkDiagnose as On, Route$167 as Ot, Route$35 as P, lines as Pn, Route$174 as Pt, Route$54 as Q, takeHandOff as Qn, NedirPage as Qt, Route$39 as R, InfoCards as Rn, Route$258 as Rt, Route$21 as S, save as Sn, Route$161 as St, Route$24 as T, VERB_HUB as Tn, Route$164 as Tt, Route$44 as U, SERVICES_LABEL as Un, UnknownPage as Ut, Route$42 as V, NavMenu as Vn, WifiPage as Vt, Route$46 as W, ServicesPage as Wn, TrustPage as Wt, Route$52 as X, packLink as Xn, QrRoutePage as Xt, Route$51 as Y, useI18n as Yn, Route$282 as Yt, Route$53 as Z, handOff as Zn, PlannerPage as Zt, Route$16 as _, isVideoTool as _n, Route$155 as _t, Route$3 as a, Route$307 as an, GuideSection as ar, Route$62 as at, Route$19 as b, KitShell as bn, Route$159 as bt, Route$6 as c, HomeView as cn, Route$65 as ct, Route$9 as d, HeroMark as dn, Route$108 as dt, ImagePage as en, addRecent as er, Route$56 as et, Route$10 as f, TechMark as fn, Route$109 as ft, Route$15 as g, VideoToolPage as gn, Route$153 as gt, Route$14 as h, VideoHubPage as hn, Route$152 as ht, Route$2 as i, ContactPage as in, __exportAll as ir, Route$61 as it, Route$31 as j, defaultAbout as jn, Route$171 as jt, Route$29 as k, aboutBody as kn, Route$169 as kt, Route$7 as l, Route$309 as ln, Route$66 as lt, Route$13 as m, AppSuggest as mn, Route$151 as mt, Route as n, PercentPage as nn, listRecent as nr, Route$58 as nt, Route$4 as o, AboutView as on, Route$63 as ot, Route$12 as p, DeviceCheck as pn, Route$110 as pt, Route$49 as q, BarGroupView as qn, WordCountPage as qt, Route$1 as r, Route$304 as rn, removeRecent as rr, Route$59 as rt, Route$5 as s, Route$308 as sn, Route$64 as st, router_exports as t, FlowPage as tn, getRecent as tr, Route$57 as tt, Route$8 as u, GameIcon as un, Route$107 as ut, Route$17 as v, ImageToolPage as vn, Route$156 as vt, Route$23 as w, GroupPage as wn, Route$163 as wt, Route$20 as x, kb$1 as xn, Route$160 as xt, Route$18 as y, isImageTool as yn, Route$158 as yt, Route$40 as z, splitSentences as zn, AppsIndex as zt };
