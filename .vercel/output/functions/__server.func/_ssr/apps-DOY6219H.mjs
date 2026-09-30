import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./i18n-context-DmemM7--.mjs";
import { h as statusText } from "./studio-BiKknOvt.mjs";
import { x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { _ as Route$17, g as STUDIO_APPS } from "./router-DbS9gEQ6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apps-DOY6219H.js
var import_jsx_runtime = require_jsx_runtime();
var ORDER = [
	"nibras-arabic",
	"nibras-pdf",
	"nibras-docs",
	"nibras-plans"
];
var STATUS = {
	"nibras-pdf": "soon",
	"nibras-plans": "soon",
	"nibras-docs": "nx_docs_stage"
};
function AppsPage() {
	const { t } = useI18n();
	const rows = Route$17.useLoaderData().apps;
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
					const badge = statusText(live?.status, STATUS[slug] ? t(STATUS[slug]) : null, labels);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/apps/$slug",
						params: { slug },
						className: "app-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: live?.icon_url || app.icon,
								alt: ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: badge }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: (live?.name || app.name).replace(" Tools", "") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: live?.summary || t(app.leadKey) })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })
						]
					}, slug);
				}), extras.map((row) => {
					const badge = statusText(row.status, null, labels);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/apps/$slug",
						params: { slug: row.slug },
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
//#endregion
export { AppsPage as component };
