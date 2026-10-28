import { i as localeHref } from "./_ssr/locale-path-fYvKyZ8f.mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./_ssr/i18n-context-BAcGBjAs.mjs";
import { b as statusText, d as fetchStudioApp } from "./_ssr/studio-Dz15PtOL.mjs";
import { i as getAppBySlug } from "./_ssr/apps-6qMCvgID.mjs";
import { Ar as ArrowUpRight } from "./_libs/lucide-react.mjs";
import { i as StoreAppPage, r as Route, t as AppDownload } from "./_slug-DxKDjMpQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DHCTktl-.js
var import_jsx_runtime = require_jsx_runtime();
async function loadAppPage(slug) {
	const app = getAppBySlug(slug);
	const row = await fetchStudioApp(slug);
	if (app) return {
		kind: "built",
		app,
		row
	};
	if (!row || row.visible === false) return null;
	return {
		kind: "extra",
		row
	};
}
function AppSlugView({ data }) {
	if (data.kind === "built") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreAppPage, {
		app: data.app,
		live: data.row
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtraApp, { row: data.row });
}
function ExtraApp({ row }) {
	const { t, lang } = useI18n();
	const badge = statusText(row.status, null, {
		soon: t("soon"),
		building: t("nx_docs_stage")
	});
	const app = {
		slug: "nibras-docs",
		name: row.name,
		icon: row.icon_url || "/nibras-icon.png",
		playStoreUrl: row.play_url || null,
		leadKey: "docs_lead",
		bodyKey: "docs_body",
		features: [],
		shots: []
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "simple-app",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "simple-app-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "simple-app-icon-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: app.icon,
					alt: ""
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "nx-status",
				children: badge
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: row.name })] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "simple-app-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "simple-lead",
					children: row.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: localeHref(lang, "/apps"),
					className: "simple-more",
					children: [t("app_other"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-3.5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppDownload, {
					app,
					live: row
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localeHref(lang, `/privacy/${row.slug}`),
					className: "privacy-btn",
					children: t("privacy_btn")
				})
			]
		})]
	});
}
var SplitComponent = function StudioAppPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSlugView, { data: Route.useLoaderData() });
};
//#endregion
export { AppSlugView, SplitComponent as component, loadAppPage };
