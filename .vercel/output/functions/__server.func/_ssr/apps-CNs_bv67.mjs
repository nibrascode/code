import { i as localeHref } from "./locale-path-fYvKyZ8f.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { b as statusText } from "./studio-Dz15PtOL.mjs";
import { r as playListed, t as effectiveApp } from "./app-store-D7Bnka1x.mjs";
import { o as statusStoreLinks, r as appStatusLabel, t as STUDIO_APPS } from "./apps-6qMCvgID.mjs";
import { Ar as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { Bt as Route$259 } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apps-CNs_bv67.js
var import_jsx_runtime = require_jsx_runtime();
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
	const { t, lang } = useI18n();
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
function AppsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppsIndex, { apps: Route$259.useLoaderData().apps });
}
//#endregion
export { AppsIndex, AppsPage as component };
