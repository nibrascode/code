import { i as __toESM } from "../_runtime.mjs";
import { u as fetchStudioApp } from "./studio-BiKknOvt.mjs";
import { a as findProgrammingLocale, d as programmingLocalePath, f as LANGS, l as pdfPairFromPath, n as PDF_LOCALE_PAIRS, o as findResurs, s as findRuResource, t as OLD_PDF_SLUGS, u as programmingFromPath } from "./ru-resources-CuxB562x.mjs";
import { H as require_react, L as redirect, V as notFound, _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as readLang, i as pageUrl, n as buildHead, o as useI18n, r as langFromLocation, t as I18nProvider } from "./i18n-context-kLI-8zEj.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { S as ArrowLeft, _ as ChevronDown, n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { i as findTopic, n as LanguageSwitch, r as cn, t as LIBRARY } from "./library-B0gFzz3e.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio.functions-yOX0wWVl.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var loadStudioBundle = createServerFn({ method: "GET" }).handler(createSsrRpc("519616068c9ea61d7d898c414e7170fbaae397de6c1a2569ed0660f883997ffd"));
var syncStudioToGithub = createServerFn({ method: "POST" }).validator((input) => {
	const accessToken = input.accessToken?.trim() ?? "";
	if (accessToken.length < 20 || accessToken.length > 4e3) throw new Error("Sessiya yanlışdır.");
	const privacy = input.privacy?.slug ? {
		slug: String(input.privacy.slug).slice(0, 140),
		lang: String(input.privacy.lang || "az").slice(0, 8),
		title: String(input.privacy.title || "").slice(0, 400),
		updated_label: String(input.privacy.updated_label || "").slice(0, 80),
		body: String(input.privacy.body || "").slice(0, 2e5)
	} : null;
	const app = input.app?.slug ? {
		...input.app,
		slug: String(input.app.slug).slice(0, 80),
		name: String(input.app.name || "").slice(0, 120)
	} : null;
	return {
		accessToken,
		privacy,
		dropSlug: input.dropSlug ? String(input.dropSlug).slice(0, 140) : "",
		app,
		dropApp: input.dropApp ? String(input.dropApp).slice(0, 80) : ""
	};
}).handler(createSsrRpc("eeb2b86ddeb133b0894dbb47463d7981736804ceb2649523d5ecd8d5f2aed4a0"));
var recordHit = createServerFn({ method: "POST" }).validator((input) => {
	return {
		kind: input.kind === "download" ? "download" : "view",
		slug: typeof input.slug === "string" ? input.slug.slice(0, 64) : ""
	};
}).handler(createSsrRpc("32767ffa08db701344b383dca8bcfbbfe190c3f4a456643a7499e4f81d98c88c"));
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dtsiv1Tl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
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
				children: errorMessage(error)
			})
		]
	});
}
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
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
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
function VisitMeter() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		if (pathname.startsWith("/nx-studio")) return;
		const key = `nibras_view_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}`;
		if (localStorage.getItem(key)) return;
		recordHit({ data: {
			kind: "view",
			slug: ""
		} }).then((result) => {
			if (result.ok) localStorage.setItem(key, "1");
		}).catch(() => void 0);
	}, [pathname]);
	return null;
}
function countDownload(slug) {
	if (!slug) return;
	recordHit({ data: {
		kind: "download",
		slug
	} }).catch(() => void 0);
}
function NavMenu({ section }) {
	const { t, lang } = useI18n();
	const page = LIBRARY[section];
	const path = `/${section}`;
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const active = pathname === path || pathname.startsWith(`${path}/`) || section === "resources" && (pathname.startsWith("/resurslar") || pathname.startsWith("/ru/resources"));
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: path,
				children: t(page.title)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-expanded": open,
				"aria-label": t(page.title),
				onClick: () => setOpen((value) => !value),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("nav-chev", open && "is-open") })
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "nav-pop",
				children: page.topics.map((topic) => section === "resources" && topic.slug === "pdf" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: lang === "ru" ? "/ru/resources/$slug" : "/resurslar/$slug",
					params: { slug: "pdf" },
					children: t(topic.label)
				}, topic.slug) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: `/${section}/$topic`,
					params: { topic: topic.slug },
					children: t(topic.label)
				}, topic.slug))
			}) : null
		]
	});
}
function SiteHeader() {
	const { t } = useI18n();
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
				}), isHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "nav-link about-link",
					children: t("nav_about")
				}) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "header-actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/apps",
						className: "back-link",
						children: t("b_nav_apps")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/unutma",
						className: "back-link",
						children: t("remind_btn")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "back-link",
						children: t("nx_nav_contact")
					}),
					!isHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "back-link",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "rtl-flip size-3.5" }), t("b_nav_home")]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitch, {})
				]
			})]
		})
	});
}
function SiteFooter() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "footer-panels",
			"aria-label": "Nibras Code",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "resources" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "guides" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "programming" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "footer-domain",
				children: t("footer_domain")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "footer-year",
				children: "©2026"
			})]
		})]
	});
}
var CARDS = [
	{
		slug: "nibras-arabic",
		name: "Nibras Arabic",
		icon: "/apps/nibras-arabic.jpg",
		chip: "nx_ar_1"
	},
	{
		slug: "nibras-pdf",
		name: "Nibras PDF",
		icon: "/apps/nibras-pdf.jpg",
		chip: "nx_pdf_1"
	},
	{
		slug: "nibras-docs",
		name: "Nibras Docs",
		icon: "/apps/nibras-docs.jpg",
		chip: "nx_docs_1"
	},
	{
		slug: "nibras-plans",
		name: "Nibras Plans",
		icon: "/apps/nibras-plans.jpg",
		chip: "nx_plans_1"
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
	const { t, lang } = useI18n();
	if (pathname.startsWith("/nx-studio")) return null;
	const card = CARDS.find((item) => !pathname.startsWith(`/apps/${item.slug}`));
	if (!card) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "app-suggest",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: LABEL[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/apps/$slug",
			params: { slug: card.slug },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: card.icon,
				alt: ""
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: card.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t(card.chip) })] })]
		})]
	});
}
var styles_default = "/assets/styles-CDGqk3Sf.css";
var Route$25 = createRootRoute({
	beforeLoad: ({ location }) => ({ seoLang: langFromLocation(location.pathname, location.searchStr) }),
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
				...seo.meta
			],
			links: [
				{
					rel: "icon",
					type: "image/png",
					href: "/nibras-icon.png"
				},
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "manifest",
					href: "/__grok/manifest.webmanifest"
				},
				{
					rel: "apple-touch-icon",
					href: "/__grok/icon-180.png"
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Scheherazade+New:wght@500;700&family=Syne:wght@500;600;700;800&display=swap"
				}
			],
			scripts: seo.scripts
		};
	},
	component: RootDocument
});
function sceneFor(pathname) {
	if (pathname.startsWith("/unutma") || pathname.startsWith("/about")) return "mountains";
	if (pathname.startsWith("/why") || pathname.startsWith("/privacy") || pathname.startsWith("/contact") || pathname.startsWith("/nx-studio") || pathname.startsWith("/resources") || pathname.startsWith("/resurslar") || pathname.startsWith("/ru") || pathname.startsWith("/guides") || pathname.includes("/programming")) return "study";
	return "hero";
}
function SeoLinks() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const searchStr = useRouterState({ select: (state) => state.location.searchStr });
	const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
	const pair = pdfPairFromPath(path);
	const programming = programmingFromPath(path);
	if (programming && (programming.lang !== "az" || findProgrammingLocale("en", programming.slug))) {
		const canonical = programmingLocalePath(programming.lang, programming.slug);
		const alternates = [
			"az",
			"en",
			"tr",
			"ar",
			"ru"
		].filter((code) => code === "az" || findProgrammingLocale(code, programming.slug));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "canonical",
				href: `https://nibrascode.com${canonical}`
			}),
			alternates.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "alternate",
				hreflang: code,
				href: `https://nibrascode.com${programmingLocalePath(code, programming.slug)}`
			}, code)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "alternate",
				hreflang: "x-default",
				href: `https://nibrascode.com${programmingLocalePath("az", programming.slug)}`
			})
		] });
	}
	if (pair) {
		const canonical = path.startsWith("/ru/") ? pair.ru : pair.az;
		const alternates = [
			["az", pair.az],
			["ru", pair.ru],
			["en", `${pair.az}?lang=en`],
			["tr", `${pair.az}?lang=tr`],
			["ar", `${pair.az}?lang=ar`]
		];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "canonical",
				href: `https://nibrascode.com${canonical}`
			}),
			alternates.map(([code, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "alternate",
				hreflang: code,
				href: `https://nibrascode.com${href}`
			}, code)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
				rel: "alternate",
				hreflang: "x-default",
				href: `https://nibrascode.com${pair.az}`
			})
		] });
	}
	const lang = readLang(searchStr);
	const langs = [...LANGS];
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
	const isHome = pathname === "/";
	const isStudio = pathname.startsWith("/nx-studio");
	const lang = langFromLocation(pathname, searchStr);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoLinks, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: isHome ? "is-home" : isStudio ? "is-studio" : void 0,
			"data-scene": isHome || isStudio ? void 0 : sceneFor(pathname),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitMeter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I18nProvider, { children: [
					isHome || isStudio ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					isHome || isStudio ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSuggest, {}),
					isHome || isStudio ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				] }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$23 = () => import("./routes-b37Uhkjc.mjs");
var Route$24 = createFileRoute("/")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./about-BMpsAdsZ.mjs");
var Route$23 = createFileRoute("/about")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./contact-Cz8MAgBm.mjs");
var Route$22 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./nx-studio-iMF0FOZG.mjs");
var Route$21 = createFileRoute("/nx-studio")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./privacy-Dsjr3vfi.mjs");
var Route$20 = createFileRoute("/privacy")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./unutma-CNpAAVfa.mjs");
var Route$19 = createFileRoute("/unutma")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./why-BVcAXleq.mjs");
var Route$18 = createFileRoute("/why")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./apps-BUUV52vi.mjs");
var Route$17 = createFileRoute("/apps/")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var STUDIO_APPS = [
	{
		slug: "nibras-arabic",
		name: "Nibras Arabic",
		icon: "/apps/nibras-arabic.jpg",
		playStoreUrl: null,
		leadKey: "arabic_lead",
		bodyKey: "arabic_body",
		features: [
			"arabic_f2",
			"arabic_f3",
			"arabic_f4",
			"arabic_f5",
			"arabic_f6"
		],
		shots: [
			"/shots/nibras-arabic-1.jpg",
			"/shots/nibras-arabic-2.jpg",
			"/shots/nibras-arabic-3.jpg",
			"/shots/nibras-arabic-4.jpg",
			"/shots/nibras-arabic-5.jpg"
		]
	},
	{
		slug: "nibras-docs",
		name: "Nibras Docs",
		icon: "/apps/nibras-docs.jpg",
		playStoreUrl: null,
		leadKey: "docs_lead",
		bodyKey: "docs_body",
		features: [
			"docs_f1",
			"docs_f2",
			"docs_f3"
		],
		shots: []
	},
	{
		slug: "nibras-plans",
		name: "Nibras Plans",
		icon: "/apps/nibras-plans.jpg",
		playStoreUrl: null,
		leadKey: "plans_lead",
		bodyKey: "plans_body",
		features: [
			"plans_f1",
			"plans_f2",
			"plans_f3"
		],
		shots: []
	},
	{
		slug: "nibras-pdf",
		name: "Nibras PDF Tools",
		icon: "/apps/nibras-pdf.jpg",
		playStoreUrl: null,
		leadKey: "pdf_lead",
		bodyKey: "pdf_body",
		features: [
			"pdf_f1",
			"pdf_f2",
			"pdf_f3"
		],
		shots: []
	}
];
function getAppBySlug(slug) {
	return STUDIO_APPS.find((app) => app.slug === slug);
}
var $$splitComponentImporter$15 = () => import("../_slug-BEOehQLn.mjs");
var Route$16 = createFileRoute("/apps/$slug")({
	loader: async ({ params }) => {
		const app = getAppBySlug(params.slug);
		const row = await fetchStudioApp(params.slug);
		if (app) return {
			kind: "built",
			app,
			row
		};
		if (!row || row.visible === false) throw notFound();
		return {
			kind: "extra",
			row
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./guides-DpMyY9s_.mjs");
var Route$15 = createFileRoute("/guides/")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("../_topic-BsIGjC3U.mjs");
var Route$14 = createFileRoute("/guides/$topic")({
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
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("../_slug-Dm3mUCA0.mjs");
var Route$13 = createFileRoute("/privacy/$slug")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./privacy.nibras-pdf-DP9fNa3e.mjs");
var Route$12 = createFileRoute("/privacy/nibras-pdf")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./programming-CFALaEOJ.mjs");
var Route$11 = createFileRoute("/programming/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("../_topic-Rriz4H0L.mjs");
var Route$10 = createFileRoute("/programming/$topic")({
	beforeLoad: ({ params, location }) => {
		const lang = readLang(location.searchStr);
		if (lang === "az" || !findProgrammingLocale(lang, params.topic)) return;
		throw redirect({
			href: programmingLocalePath(lang, params.topic),
			replace: true
		});
	},
	loader: async ({ params }) => {
		const topic = findTopic("programming", params.topic);
		if (!topic) throw notFound();
		return {
			topic,
			privacy: (await loadStudioBundle()).privacy
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./resources-BNsuSAUx.mjs");
var Route$9 = createFileRoute("/resources/")({
	loader: () => loadStudioBundle(),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./route-I4L2K4YV.mjs");
var Route$8 = createFileRoute("/resources/$topic")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("../_slug-KBt53469.mjs");
var Route$7 = createFileRoute("/resurslar/$slug")({
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
			slug: params.slug
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./ar.programming._slug-BGZpkJAI.mjs");
var Route$6 = createFileRoute("/ar/programming/$slug")({
	loader: async ({ params }) => {
		const page = findProgrammingLocale("ar", params.slug);
		if (!page) throw notFound();
		return {
			page,
			privacy: (await loadStudioBundle()).privacy
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./en.programming._slug-Ct3vvbUd.mjs");
var Route$5 = createFileRoute("/en/programming/$slug")({
	loader: async ({ params }) => {
		const page = findProgrammingLocale("en", params.slug);
		if (!page) throw notFound();
		return {
			page,
			privacy: (await loadStudioBundle()).privacy
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("../_topic-DmxL1hr9.mjs");
var Route$4 = createFileRoute("/resources/$topic/")({
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
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var Route$3 = createFileRoute("/resources/$topic/$article")({ beforeLoad: ({ params }) => {
	const next = params.topic === "pdf" ? OLD_PDF_SLUGS[params.article] : void 0;
	if (!next) throw notFound();
	throw redirect({
		to: "/resurslar/$slug",
		params: { slug: next },
		replace: true
	});
} });
var $$splitComponentImporter$2 = () => import("./ru.programming._slug-D9VVb6mH.mjs");
var Route$2 = createFileRoute("/ru/programming/$slug")({
	loader: async ({ params }) => {
		const page = findProgrammingLocale("ru", params.slug);
		if (!page) throw notFound();
		return {
			page,
			privacy: (await loadStudioBundle()).privacy
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./ru.resources._slug-BgYzb4-h.mjs");
var Route$1 = createFileRoute("/ru/resources/$slug")({
	loader: async ({ params }) => {
		const page = findRuResource(params.slug);
		const studio = await loadStudioBundle();
		const pair = PDF_LOCALE_PAIRS.find((item) => item.ru === params.slug);
		if (!page && !pair) throw notFound();
		return {
			page,
			privacy: studio.privacy,
			id: pair?.az ?? params.slug
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./tr.programming._slug-BgCZD0Zg.mjs");
var Route = createFileRoute("/tr/programming/$slug")({
	loader: async ({ params }) => {
		const page = findProgrammingLocale("tr", params.slug);
		if (!page) throw notFound();
		return {
			page,
			privacy: (await loadStudioBundle()).privacy
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$24.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$25
});
var AboutRoute = Route$23.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$25
});
var ContactRoute = Route$22.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$25
});
var NxStudioRoute = Route$21.update({
	id: "/nx-studio",
	path: "/nx-studio",
	getParentRoute: () => Route$25
});
var PrivacyRoute = Route$20.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$25
});
var UnutmaRoute = Route$19.update({
	id: "/unutma",
	path: "/unutma",
	getParentRoute: () => Route$25
});
var WhyRoute = Route$18.update({
	id: "/why",
	path: "/why",
	getParentRoute: () => Route$25
});
var AppsIndexRoute = Route$17.update({
	id: "/apps/",
	path: "/apps/",
	getParentRoute: () => Route$25
});
var AppsSlugRoute = Route$16.update({
	id: "/apps/$slug",
	path: "/apps/$slug",
	getParentRoute: () => Route$25
});
var GuidesIndexRoute = Route$15.update({
	id: "/guides/",
	path: "/guides/",
	getParentRoute: () => Route$25
});
var GuidesTopicRoute = Route$14.update({
	id: "/guides/$topic",
	path: "/guides/$topic",
	getParentRoute: () => Route$25
});
var PrivacySlugRoute = Route$13.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => PrivacyRoute
});
var PrivacyNibrasPdfRoute = Route$12.update({
	id: "/nibras-pdf",
	path: "/nibras-pdf",
	getParentRoute: () => PrivacyRoute
});
var ProgrammingIndexRoute = Route$11.update({
	id: "/programming/",
	path: "/programming/",
	getParentRoute: () => Route$25
});
var ProgrammingTopicRoute = Route$10.update({
	id: "/programming/$topic",
	path: "/programming/$topic",
	getParentRoute: () => Route$25
});
var ResourcesIndexRoute = Route$9.update({
	id: "/resources/",
	path: "/resources/",
	getParentRoute: () => Route$25
});
var ResourcesTopicRouteRoute = Route$8.update({
	id: "/resources/$topic",
	path: "/resources/$topic",
	getParentRoute: () => Route$25
});
var ResurslarSlugRoute = Route$7.update({
	id: "/resurslar/$slug",
	path: "/resurslar/$slug",
	getParentRoute: () => Route$25
});
var ArProgrammingSlugRoute = Route$6.update({
	id: "/ar/programming/$slug",
	path: "/ar/programming/$slug",
	getParentRoute: () => Route$25
});
var EnProgrammingSlugRoute = Route$5.update({
	id: "/en/programming/$slug",
	path: "/en/programming/$slug",
	getParentRoute: () => Route$25
});
var ResourcesTopicIndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => ResourcesTopicRouteRoute
});
var ResourcesTopicArticleRoute = Route$3.update({
	id: "/$article",
	path: "/$article",
	getParentRoute: () => ResourcesTopicRouteRoute
});
var RuProgrammingSlugRoute = Route$2.update({
	id: "/ru/programming/$slug",
	path: "/ru/programming/$slug",
	getParentRoute: () => Route$25
});
var RuResourcesSlugRoute = Route$1.update({
	id: "/ru/resources/$slug",
	path: "/ru/resources/$slug",
	getParentRoute: () => Route$25
});
var TrProgrammingSlugRoute = Route.update({
	id: "/tr/programming/$slug",
	path: "/tr/programming/$slug",
	getParentRoute: () => Route$25
});
var PrivacyRouteChildren = {
	PrivacySlugRoute,
	PrivacyNibrasPdfRoute
};
var PrivacyRouteWithChildren = PrivacyRoute._addFileChildren(PrivacyRouteChildren);
var ResourcesTopicRouteRouteChildren = {
	ResourcesTopicArticleRoute,
	ResourcesTopicIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	NxStudioRoute,
	PrivacyRoute: PrivacyRouteWithChildren,
	UnutmaRoute,
	WhyRoute,
	ResourcesTopicRouteRoute: ResourcesTopicRouteRoute._addFileChildren(ResourcesTopicRouteRouteChildren),
	AppsSlugRoute,
	GuidesTopicRoute,
	ProgrammingTopicRoute,
	ResurslarSlugRoute,
	AppsIndexRoute,
	GuidesIndexRoute,
	ProgrammingIndexRoute,
	ResourcesIndexRoute,
	ArProgrammingSlugRoute,
	EnProgrammingSlugRoute,
	RuProgrammingSlugRoute,
	RuResourcesSlugRoute,
	TrProgrammingSlugRoute
};
var routeTree = Route$25._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { countDownload as C, NavMenu as S, syncStudioToGithub as T, Route$17 as _, Route$4 as a, Route$24 as b, Route$7 as c, Route$12 as d, Route$13 as f, STUDIO_APPS as g, Route$16 as h, Route$2 as i, Route$9 as l, Route$15 as m, Route as n, Route$5 as o, Route$14 as p, Route$1 as r, Route$6 as s, router_exports as t, Route$10 as u, Route$19 as v, loadStudioBundle as w, AppSuggest as x, Route$23 as y };
