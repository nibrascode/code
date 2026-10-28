import { o as __toESM } from "../_runtime.mjs";
import { i as localeHref, t as homePath } from "./locale-path-fYvKyZ8f.mjs";
import { i as faqPath } from "./faq-CS6D-sSC.mjs";
import { a as searchPath, s as searchTopicPath, t as SEARCH } from "./search-pages-DC4DCEux.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as GAME_COPY, i as GAMES, m as gamePath, o as GAME_VERSION, x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { b as statusText } from "./studio-Dz15PtOL.mjs";
import { r as playListed, t as effectiveApp } from "./app-store-D7Bnka1x.mjs";
import { n as appStatus, o as statusStoreLinks, r as appStatusLabel, t as STUDIO_APPS } from "./apps-6qMCvgID.mjs";
import { Ar as ArrowUpRight, L as Shield, kr as BadgeCheck, st as RefreshCw, t as Zap } from "../_libs/lucide-react.mjs";
import { Bn as LanguageSwitch, Hn as SiteLegal, Kn as BAR, Un as SERVICES_LABEL, Vn as NavMenu, dn as HeroMark, fn as TechMark, ln as Route$309, mn as AppSuggest, pn as DeviceCheck, qn as BarGroupView, un as GameIcon } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bq7cjtTr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	const { t, lang } = useI18n();
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
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, { apps: Route$309.useLoaderData().apps });
}
//#endregion
export { HomeView, Home as component };
