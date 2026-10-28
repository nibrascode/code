import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as getAppBySlug } from "./apps-6qMCvgID.mjs";
import { c as Volume2 } from "../_libs/lucide-react.mjs";
import { En as verbPath, Tn as VERB_HUB } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/arabic-verbs-COVlr8gf.js
var import_jsx_runtime = require_jsx_runtime();
var app = getAppBySlug("nibras-arabic");
var PLAY = app?.playStoreUrl ?? "https://play.google.com/store/apps/details?id=com.nibrasarabic.app";
var HUAWEI = app?.huaweiStoreUrl ?? "";
function say(text) {
	if (typeof speechSynthesis === "undefined") return;
	const u = new SpeechSynthesisUtterance(text.replace(/[.!؟]/g, ""));
	u.lang = "ar-SA";
	u.rate = .8;
	speechSynthesis.cancel();
	speechSynthesis.speak(u);
}
function AppBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "my-8 flex flex-wrap items-center gap-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4",
		"data-testid": "arabic-app-banner",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/apps/nibras-arabic-v2.webp",
				alt: "",
				width: 56,
				height: 56,
				className: "size-14 rounded-2xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 basis-56",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
					className: "block",
					children: "Nibras Arabic — 704 feil telefonda"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: "Pulsuz Android tətbiqi: feillər, isimlər, dialoqlar, kartlar və hərf yazısı. İnternetsiz işləyir."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: PLAY,
					target: "_blank",
					rel: "noopener",
					className: "rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white",
					children: "Google Play"
				}), HUAWEI ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: HUAWEI,
					target: "_blank",
					rel: "noopener",
					className: "rounded-xl border border-white/20 px-4 py-2 text-sm",
					children: "Huawei AppGallery"
				}) : null]
			})
		]
	});
}
function FormRow({ label, f }) {
	if (!f) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: "border-t border-white/10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
				className: "py-3 pe-3 text-start text-sm font-medium text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-3 pe-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					lang: "ar",
					dir: "rtl",
					className: "font-arabic text-2xl",
					children: f[0]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-3 pe-3 text-sm",
				children: f[1]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-3 text-sm",
				children: f[2] && f[2] !== `${f[0]}.` ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					lang: "ar",
					dir: "rtl",
					className: "block text-lg",
					children: f[2]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: f[3]
				})] }) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Səsləndir",
					className: "rounded-lg p-2 hover:bg-white/10",
					onClick: () => say(f[0]),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
				})
			})
		]
	});
}
function VerbPage({ v, prev, next, related }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-4xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mb-4 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "hover:text-fg",
						children: "Nibras Code"
					}),
					" / ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: VERB_HUB,
						className: "hover:text-fg",
						children: "Ərəb feilləri"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-3xl font-bold md:text-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: "ar",
						dir: "rtl",
						children: v.a
					}),
					" — ",
					v.m
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-muted",
				children: [
					"Ərəb dilində «",
					v.m,
					"» feili: keçmiş zaman (mazi), indiki zaman (muzari) və əmr forması, Azərbaycan dilində tərcümə, misallar və səsləndirmə."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-start text-xs uppercase text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 text-start",
								children: "Forma"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 text-start",
								children: "Ərəbcə"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 text-start",
								children: "Tərcümə"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "pb-2 text-start",
								children: "Misal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormRow, {
							label: "Keçmiş (mazi)",
							f: v.p
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormRow, {
							label: "İndiki (muzari)",
							f: v.r
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormRow, {
							label: "Əmr (əmr)",
							f: v.i
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted",
				"data-nosnippet": true,
				children: "Səsləndirmə brauzerin ərəb səsi ilə oxunur; cihazda ərəb səsi yoxdursa eşidilməyə bilər."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBanner, {}),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-lg font-semibold",
				children: "Oxşar mənalı feillər"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-wrap gap-2",
				children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: verbPath(r.s),
					className: "inline-block rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "ar",
							children: r.a
						}),
						" · ",
						r.m
					]
				}) }, r.s))
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-8 flex justify-between gap-3 text-sm",
				children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: verbPath(prev.s),
					className: "hover:underline",
					children: [
						"← ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "ar",
							children: prev.a
						}),
						" ",
						prev.m
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: verbPath(next.s),
					className: "hover:underline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							lang: "ar",
							children: next.a
						}),
						" ",
						next.m,
						" →"
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
			})
		]
	});
}
function VerbHub({ verbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-5xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-3xl font-bold md:text-4xl",
				children: [
					"Ərəb dilində ",
					verbs.length,
					" feil — mazi, muzari, əmr"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Nibras Arabic tətbiqindəki bütün feillər: hər birinin keçmiş, indiki zaman və əmr forması, Azərbaycan dilində tərcümə və misallar. Feilə toxunun."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3",
				children: verbs.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: verbPath(v.s),
					className: "flex items-baseline justify-between gap-3 rounded-xl border border-white/10 px-3 py-2 hover:bg-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-sm",
						children: v.m
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						lang: "ar",
						dir: "rtl",
						className: "text-lg",
						children: v.a
					})]
				}) }, v.s))
			})
		]
	});
}
//#endregion
export { VerbPage as n, VerbHub as t };
