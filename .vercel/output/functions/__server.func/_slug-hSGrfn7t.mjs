import { b as require_jsx_runtime, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./_ssr/i18n-context-DrTZEB-U.mjs";
import { g as storeLinks, h as statusText } from "./_ssr/studio-BiKknOvt.mjs";
import { x as ArrowUpRight } from "./_libs/lucide-react.mjs";
import { C as countDownload, h as Route$16 } from "./_ssr/router-C7jubh50.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-hSGrfn7t.js
var import_jsx_runtime = require_jsx_runtime();
function PlayMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M4.5 3.2c-.7-.4-1.5.1-1.5.9v15.8c0 .8.8 1.3 1.5.9l14.5-7.9c.7-.4.7-1.4 0-1.8L4.5 3.2Z"
		})
	});
}
function AppDownload({ app, live }) {
	const { t } = useI18n();
	const stores = storeLinks({
		play_url: live?.play_url || app.playStoreUrl || "",
		huawei_url: live?.huawei_url,
		appstore_url: live?.appstore_url,
		galaxy_url: live?.galaxy_url,
		xiaomi_url: live?.xiaomi_url
	});
	if (stores.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "download-panel",
		"aria-label": t("download_title"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("download_kicker")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t("download_title") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("download_ready_d") })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "download-stores",
			children: stores.map((store) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "play-btn",
				href: store.href,
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: () => countDownload(app.slug),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayMark, { className: "play-btn-mark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("download_cta") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: store.name })] })]
			}, store.id))
		})]
	});
}
var STATUS = {
	"nibras-pdf": "soon",
	"nibras-plans": "soon",
	"nibras-docs": "nx_docs_stage"
};
function SimpleAppPage({ app, live }) {
	const { t } = useI18n();
	const badge = statusText(live?.status, STATUS[app.slug] ? t(STATUS[app.slug]) : null, {
		soon: t("soon"),
		building: t("nx_docs_stage")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "simple-app",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "simple-app-head",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "simple-app-icon-wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: live?.icon_url || app.icon,
					alt: ""
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "nx-status",
				children: badge
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: live?.name || app.name })] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "simple-app-copy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("app_family_kicker")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "simple-lead",
					children: live?.summary || t(app.leadKey)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "simple-body",
					children: t(app.bodyKey)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "simple-feats",
					children: app.features.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t(key)] }, key))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/apps",
					className: "simple-more",
					children: [t("app_other"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-3.5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppDownload, {
					app,
					live
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/privacy/$slug",
					params: { slug: app.slug },
					className: "privacy-btn",
					children: t("privacy_btn")
				})
			]
		})]
	});
}
function StudioAppPage() {
	const data = Route$16.useLoaderData();
	if (data.kind === "built") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleAppPage, {
		app: data.app,
		live: data.row
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtraApp, { row: data.row });
}
function ExtraApp({ row }) {
	const { t } = useI18n();
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/apps",
					className: "simple-more",
					children: [t("app_other"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-3.5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppDownload, {
					app,
					live: row
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/privacy/$slug",
					params: { slug: row.slug },
					className: "privacy-btn",
					children: t("privacy_btn")
				})
			]
		})]
	});
}
//#endregion
export { StudioAppPage as component };
