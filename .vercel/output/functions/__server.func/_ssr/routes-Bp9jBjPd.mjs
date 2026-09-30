import { h as statusText } from "./studio-BiKknOvt.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./i18n-context-DrTZEB-U.mjs";
import { b as BadgeCheck, c as Mail, o as RefreshCw, r as Shield, t as Zap, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as LanguageSwitch } from "./library-D-8zw1RB.mjs";
import { S as NavMenu, b as Route$24, x as AppSuggest } from "./router-BICY2qhT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bp9jBjPd.js
var import_jsx_runtime = require_jsx_runtime();
var STATUS = {
	"nibras-pdf": "soon",
	"nibras-plans": "soon",
	"nibras-docs": "nx_docs_stage"
};
var CARDS = [
	{
		slug: "nibras-arabic",
		name: "Nibras Arabic",
		icon: "/apps/nibras-arabic.jpg",
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
		icon: "/apps/nibras-pdf.jpg",
		desc: "nx_pdf_d",
		chips: [
			"nx_pdf_1",
			"nx_pdf_2",
			"nx_pdf_3"
		]
	},
	{
		slug: "nibras-docs",
		name: "Nibras Docs",
		icon: "/apps/nibras-docs.jpg",
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
		icon: "/apps/nibras-plans.jpg",
		desc: "nx_plans_d",
		chips: [
			"nx_plans_1",
			"nx_plans_2",
			"nx_plans_3"
		]
	}
];
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/nibras-icon.png",
		alt: "",
		className
	});
}
function Home() {
	const { t } = useI18n();
	const rows = Route$24.useLoaderData().apps;
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
					to: "/",
					className: "nx-brand",
					"aria-label": "Nibras Code",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Nibras ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Code" })] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "nx-links",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/apps",
							children: t("b_nav_apps")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: t("nav_about")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/unutma",
							children: t("remind_btn")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: t("nx_nav_contact")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitch, {})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "nx-hero",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nx-hero-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "nx-kicker",
							children: t("nx_kicker")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("nx_lead") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "nx-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								className: "nx-cta",
								to: "/apps",
								children: [t("b_hero_cta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/about",
								className: "nx-ghost",
								children: [t("nav_about"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "nx-stage",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/home/hero-desk.jpg",
						alt: ""
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "nx-apps",
				id: "apps",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nx-apps-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "nx-kicker",
						children: t("nx_apps_k")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t("nx_apps_h") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/apps",
						children: t("nx_all")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nx-grid",
					children: [cards.map(({ card, live }) => {
						const badge = statusText(live?.status, STATUS[card.slug] ? t(STATUS[card.slug]) : null, labels);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/apps/$slug",
							params: { slug: card.slug },
							className: "nx-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "nx-card-top",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "nx-ico",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: live?.icon_url || card.icon,
											alt: ""
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "nx-status",
										children: badge
									}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: live?.name || card.name })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "nx-chips",
									children: card.chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: t(chip) }, chip))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "nx-go" })
							]
						}, card.slug);
					}), extras.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/apps/$slug",
						params: { slug: row.slug },
						className: "nx-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "nx-card-top",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "nx-ico",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: row.icon_url || "/nibras-icon.png",
									alt: ""
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							className: "nx-cta",
							to: "/apps",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "nx-brand",
						"aria-label": "Nibras Code",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Nibras ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Code" })] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("nx_tag") })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: t("b_nav_home")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/apps",
							children: t("b_nav_apps")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: t("nav_about")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/unutma",
							children: t("remind_btn")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: t("nx_nav_contact")
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "nx-mail",
						"aria-label": t("nx_nav_contact"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "nx-foot-extra",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "resources" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "guides" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavMenu, { section: "programming" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "nx-verse",
						lang: "ar",
						dir: "rtl",
						children: t("remind_verse")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSuggest, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "nx-copy",
						children: ["© 2026 Nibras Code. ", t("nx_rights")]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
