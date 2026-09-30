import { i as __toESM } from "../_runtime.mjs";
import { t as LANGS } from "./programming-DwqnMd8d.mjs";
import { H as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as deleteApp, c as fetchPage, d as fetchStudioApps, f as saveApp, l as fetchPrivacyAll, m as signIn, o as deletePrivacy, p as savePrivacy, r as STUDIO_SQL, s as fetchHits, t as STUDIO_EMAIL, v as validSession, y as writeSession } from "./studio-BiKknOvt.mjs";
import { a as ScrollText, c as Mail, d as LayoutGrid, f as Info, g as ChevronRight, h as CodeXml, i as Search, l as LogOut, m as FileText, p as House, s as Moon, u as Library, v as Calendar, y as Bell } from "../_libs/lucide-react.mjs";
import { T as syncStudioToGithub, w as loadStudioBundle } from "./router-cbdsvDLy.mjs";
import { a as libSlug, n as libDefaults, o as savedLib, r as libItems, t as LIB_GROUPS } from "./library-admin-DOvxzdtr.mjs";
import { n as PDF_PRIVACY, t as ARABIC_PRIVACY } from "./pdf-privacy-yrRm7nDf.mjs";
import { i as slugifyLesson, n as lessonSlug, r as pythonSections, t as PYTHON_LESSONS } from "./lessons-BzeSPD5U.mjs";
import { a as lines, i as defaultUnutma, n as aboutFromRow, o as unutmaBody, r as defaultAbout, s as unutmaFromRow, t as aboutBody } from "./pages-B2tFtcF8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nx-studio-BGHpVxr7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATALOG = [
	{
		slug: "nibras-arabic",
		name: "Nibras Arabic"
	},
	{
		slug: "nibras-pdf",
		name: "Nibras PDF"
	},
	{
		slug: "nibras-docs",
		name: "Nibras Docs"
	},
	{
		slug: "nibras-plans",
		name: "Nibras Plans"
	}
];
var NAV = [
	{
		id: "home",
		label: "Ana səhifə",
		icon: House
	},
	{
		id: "apps",
		label: "Tətbiqlər",
		icon: LayoutGrid
	},
	{
		id: "lessons",
		label: "Proqramlaşdırma",
		icon: CodeXml
	},
	{
		id: "library",
		label: "Resurslar",
		icon: Library
	},
	{
		id: "guides",
		label: "Bələdçilər",
		icon: ScrollText
	},
	{
		id: "privacy",
		label: "Məxfilik",
		icon: FileText
	},
	{
		id: "contact",
		label: "Əlaqə",
		icon: Mail
	},
	{
		id: "unutma",
		label: "Unutma",
		icon: ScrollText
	},
	{
		id: "about",
		label: "Haqqımızda",
		icon: Info
	}
];
var MONTHS = [
	"yanvar",
	"fevral",
	"mart",
	"aprel",
	"may",
	"iyun",
	"iyul",
	"avqust",
	"sentyabr",
	"oktyabr",
	"noyabr",
	"dekabr"
];
function todayLabel() {
	const now = /* @__PURE__ */ new Date();
	return `${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
}
function readTarget() {
	if (typeof localStorage === "undefined") return "both";
	const value = localStorage.getItem("nibras_studio_target");
	return value === "github" || value === "supabase" ? value : "both";
}
var pendingPrivacy = null;
var pendingDrop = "";
var pendingApp = null;
var pendingDropApp = "";
function writePrivacy(row) {
	pendingPrivacy = row;
	pendingDrop = "";
	if (readTarget() === "github") return Promise.resolve();
	return savePrivacy(row);
}
function removePrivacy(slug) {
	pendingDrop = slug;
	pendingPrivacy = null;
	if (readTarget() === "github") return Promise.resolve();
	return deletePrivacy(slug);
}
function writeApp(row) {
	pendingApp = row;
	pendingDropApp = "";
	if (readTarget() === "github") return Promise.resolve();
	return saveApp(row);
}
function removeApp(slug) {
	pendingDropApp = slug;
	pendingApp = null;
	if (readTarget() === "github") return Promise.resolve();
	return deleteApp(slug);
}
function savedNote(base) {
	const target = readTarget();
	const privacy = pendingPrivacy;
	const dropSlug = pendingDrop;
	const app = pendingApp;
	const dropApp = pendingDropApp;
	pendingPrivacy = null;
	pendingDrop = "";
	pendingApp = null;
	pendingDropApp = "";
	if (target === "supabase") return Promise.resolve(`${base} Yalnız Supabase-ə yazıldı.`);
	const where = target === "both" ? "Supabase və GitHub-a yazıldı." : "Yalnız GitHub-a yazıldı.";
	return validSession().then((session) => {
		if (!session) return {
			ok: false,
			reason: "Sessiya bitib"
		};
		return syncStudioToGithub({ data: {
			accessToken: session.access_token,
			privacy,
			dropSlug,
			app,
			dropApp
		} });
	}).then((git) => git.ok ? `${base} ${where}` : `${base} GitHub: ${git.reason}`).catch(() => `${base} GitHub yazılmadı.`);
}
function TargetSwitch() {
	const [target, setTarget] = (0, import_react.useState)(() => readTarget());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "studio-langs dash-target",
		role: "group",
		"aria-label": "Saxlama yeri",
		children: [
			{
				id: "supabase",
				label: "Supabase"
			},
			{
				id: "github",
				label: "GitHub"
			},
			{
				id: "both",
				label: "Hər ikisi"
			}
		].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: target === item.id ? "is-on" : "",
			onClick: () => {
				localStorage.setItem("nibras_studio_target", item.id);
				setTarget(item.id);
			},
			children: item.label
		}, item.id))
	});
}
var EMPTY_APP = {
	slug: "",
	name: "",
	status: "soon",
	summary: "",
	play_url: "",
	huawei_url: "",
	appstore_url: "",
	galaxy_url: "",
	xiaomi_url: "",
	icon_url: "",
	sort: 200,
	visible: true
};
function StudioPage() {
	const [ready, setReady] = (0, import_react.useState)(null);
	const [session, setSession] = (0, import_react.useState)(null);
	const [tab, setTab] = (0, import_react.useState)("home");
	const [query, setQuery] = (0, import_react.useState)("");
	const [bell, setBell] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		loadStudioBundle().then((bundle) => setReady(bundle.ready));
		validSession().then(setSession);
	}, []);
	const found = NAV.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "dash",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "dash-side",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dash-logo",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/nibras-icon.png",
						alt: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: ["Nibras ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Code" })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "dash-kicker",
					children: "İdarə paneli"
				}),
				session ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { children: [NAV.map((item) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: tab === item.id ? "is-on" : "",
						onClick: () => setTab(item.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 }), item.label]
					}, item.id);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "dash-logout",
					onClick: () => {
						writeSession(null);
						setSession(null);
						setTab("home");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 18 }), "Çıxış"]
				})] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dash-legal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/nibras-icon.png",
						alt: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Nibras Code" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Gizlilik · Etibar · Azadlıq" })] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dash-body",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "dash-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "dash-search",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Axtar...",
						onKeyDown: (event) => {
							if (event.key === "Enter" && found[0]) setTab(found[0].id);
						}
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dash-tools",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TargetSwitch, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "dash-icon",
							"aria-label": "Tünd görünüş",
							title: "Tünd görünüş",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "dash-icon",
							"aria-label": "Bildirişlər",
							onClick: () => setBell((open) => !open),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { size: 16 })
						}),
						bell ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dash-pop",
							children: "Yeni bildiriş yoxdur."
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dash-user",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "A" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Admin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Super Admin" })] })]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "dash-content",
				children: [
					ready === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Setup, {}) : null,
					ready && !session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Login, { onIn: setSession }) : null,
					ready && session && tab === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskHome, {
						open: setTab,
						query,
						token: session.access_token
					}) : null,
					ready && session && tab === "privacy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyEditor, {}) : null,
					ready && session && tab === "apps" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppsEditor, {}) : null,
					ready && session && tab === "about" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutEditor, {}) : null,
					ready && session && tab === "unutma" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnutmaEditor, {}) : null,
					ready && session && tab === "lessons" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonsEditor, {}) : null,
					ready && session && tab === "library" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryEditor, { start: "resurs" }) : null,
					ready && session && tab === "guides" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryEditor, { start: "guide" }) : null,
					ready && session && tab === "contact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactPanel, {}) : null
				]
			})]
		})]
	});
}
function monthOf(day) {
	return day.slice(0, 7);
}
function sumHits(rows, kind, month, slug) {
	return rows.reduce((total, row) => {
		if (row.kind !== kind || monthOf(row.day) !== month) return total;
		if (slug !== void 0 && row.slug !== slug) return total;
		return total + row.total;
	}, 0);
}
function changeText(current, previous) {
	if (previous <= 0) return current === 0 ? "Bu ay hələ 0" : "Keçən ay 0 idi";
	const percent = Math.round((current - previous) / previous * 100);
	return `${percent > 0 ? "+" : ""}${percent}% keçən aya nisbətən`;
}
function DeskHome({ open, query, token }) {
	const q = query.trim().toLowerCase();
	const apps = CATALOG.filter((item) => item.name.toLowerCase().includes(q));
	const [hits, setHits] = (0, import_react.useState)(null);
	const [checked, setChecked] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		fetchHits(token).then((rows) => {
			setHits(rows);
			setChecked(true);
		});
	}, [token]);
	const now = /* @__PURE__ */ new Date();
	const thisMonth = now.toISOString().slice(0, 7);
	const lastMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1)).toISOString().slice(0, 7);
	const rows = hits ?? [];
	const views = sumHits(rows, "view", thisMonth);
	const prevViews = sumHits(rows, "view", lastMonth);
	const downloads = sumHits(rows, "download", thisMonth);
	const prevDownloads = sumHits(rows, "download", lastMonth);
	const series = Array.from({ length: 30 }, (_, index) => {
		const date = /* @__PURE__ */ new Date();
		date.setUTCDate(date.getUTCDate() - (29 - index));
		return date.toISOString().slice(0, 10);
	}).map((day) => rows.filter((row) => row.kind === "view" && row.day === day).reduce((sum, row) => sum + row.total, 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "dash-home",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dash-welcome",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Xoş gəlmisiniz, Admin!" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ziyarət saytda gündə bir dəfə sayılır. Yükləmə isə mağaza düyməsinə hər basılanda artır." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dash-date",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Bu gün" }), todayLabel()] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dash-stats",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => open("apps"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dash-stat-icon is-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { size: 18 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Bu ay sayt ziyarətləri" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: checked && hits ? views.toLocaleString("en") : "—" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: hits ? changeText(views, prevViews) : "Sayğac gözlənilir" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => open("apps"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dash-stat-icon is-violet",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 18 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Bu ay yükləmə düyməsi" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: checked && hits ? downloads.toLocaleString("en") : "—" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: hits ? changeText(downloads, prevDownloads) : "Mağaza düyməsinə basılma" })
					]
				})]
			}),
			checked && !hits ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dash-panel",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Sayğac hələ açılmayıb" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "dash-hint",
						children: "Supabase-də SQL Editor açın, admin paneldəki SQL mətnini yenidən yapışdırıb Run edin. Köhnə cədvəllər silinmir, yalnız sayğac əlavə olunur."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "nx-cta",
						onClick: () => {
							navigator.clipboard.writeText(STUDIO_SQL).then(() => setCopied(true));
						},
						children: copied ? "Kopyalandı" : "SQL-i kopyala"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dash-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Sayt ziyarətləri" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Son 30 gün" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RealChart, { values: series })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dash-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Tətbiqlər" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => open("apps"),
					children: "Hamısı"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dash-rows",
					children: apps.map((app) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => open("apps"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ICONS[app.slug],
								alt: ""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: app.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: hits ? `${sumHits(rows, "download", thisMonth, app.slug)} basılma` : app.slug }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
						]
					}, app.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dash-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Məzmun bölmələri" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dash-jumps",
					children: [
						["lessons", "Proqramlaşdırma"],
						["library", "Resurslar"],
						["guides", "Bələdçilər"],
						["about", "Haqqımızda"],
						["unutma", "Unutma"],
						["privacy", "Məxfilik"],
						["contact", "Əlaqə"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => open(id),
						children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })]
					}, id))
				})]
			})
		]
	});
}
function RealChart({ values }) {
	const max = Math.max(1, ...values);
	const width = 640;
	const points = values.map((value, index) => {
		return `${values.length === 1 ? width / 2 : 16 + index * 608 / (values.length - 1)},${156 - value / max * 130}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "dash-chart",
		viewBox: `0 0 ${width} 180`,
		role: "img",
		"aria-label": "Son 30 günün ziyarətləri",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
			points,
			fill: "none",
			stroke: "#4c8dff",
			strokeWidth: "3",
			strokeLinejoin: "round",
			strokeLinecap: "round"
		})
	});
}
function ContactPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "studio-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Əlaqə" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "studio-note",
				children: "Saytdakı əlaqə səhifəsində bu ünvan görünür."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "dash-mail",
				href: "mailto:nibrascode@gmail.com",
				children: "nibrascode@gmail.com"
			})
		]
	});
}
function Setup() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "studio-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Bir dəfəlik quraşdırma" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Supabase-də SQL Editor açın, bu mətni yapışdırın və Run düyməsinə basın." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				className: "studio-sql",
				readOnly: true,
				value: STUDIO_SQL
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "nx-cta",
				onClick: () => {
					navigator.clipboard.writeText(STUDIO_SQL).then(() => setCopied(true));
				},
				children: copied ? "Kopyalandı" : "SQL-i kopyala"
			})
		]
	});
}
function Login({ onIn }) {
	const [email, setEmail] = (0, import_react.useState)(STUDIO_EMAIL);
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "studio-card",
		onSubmit: (event) => {
			event.preventDefault();
			setBusy(true);
			setError("");
			signIn(email.trim(), password).then(onIn).catch((reason) => setError(reason.message)).finally(() => setBusy(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Giriş" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["E-poçt", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: email,
				onChange: (event) => setEmail(event.target.value),
				autoComplete: "username"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Şifrə", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "password",
				value: password,
				onChange: (event) => setPassword(event.target.value),
				autoComplete: "current-password"
			})] }),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "studio-error",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "studio-note",
				children: [
					"İstifadəçi yoxdursa Supabase-də Authentication, Users, Add user. E-poçt ",
					STUDIO_EMAIL,
					". Auto Confirm açıq olsun. Şifrəni burada yox, orada özünüz qoyun."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "nx-cta",
				type: "submit",
				disabled: busy,
				children: busy ? "Gözləyin" : "Daxil ol"
			})
		]
	});
}
function PrivacyEditor() {
	const [apps, setApps] = (0, import_react.useState)([]);
	const [slug, setSlug] = (0, import_react.useState)("");
	const [lang, setLang] = (0, import_react.useState)("az");
	const [title, setTitle] = (0, import_react.useState)("");
	const [updated, setUpdated] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		fetchStudioApps().then(setApps);
	}, []);
	const choices = [...CATALOG.map((item) => item), ...apps.filter((row) => !CATALOG.some((item) => item.slug === row.slug)).map((row) => ({
		slug: row.slug,
		name: row.name
	}))];
	const current = choices.find((item) => item.slug === slug);
	(0, import_react.useEffect)(() => {
		if (!slug) return;
		const fallback = slug === "nibras-pdf" ? PDF_PRIVACY[lang] : slug === "nibras-arabic" && lang === "az" ? ARABIC_PRIVACY : null;
		const name = choices.find((item) => item.slug === slug)?.name ?? slug;
		setTitle(fallback?.title ?? `${name} məxfilik siyasəti`);
		setUpdated(fallback?.updated ?? "");
		setBody(fallback?.paragraphs.join("\n\n") ?? "");
		setNote("");
		fetchPage(slug, lang).then((row) => {
			if (!row) return;
			setTitle(row.title);
			setUpdated(row.updated_label);
			setBody(row.body);
		});
	}, [slug, lang]);
	if (!current) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "desk-home",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Məxfilik" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Siyasətini yazmaq istədiyiniz tətbiqi seçin." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "desk-grid",
				children: choices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSlug(item.slug),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Məxfilik siyasəti" })]
				}, item.slug))
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "studio-card",
		onSubmit: (event) => {
			event.preventDefault();
			setBusy(true);
			setNote("");
			writePrivacy({
				slug,
				lang,
				title,
				updated_label: updated,
				body
			}).then(() => savedNote("Saxlanıldı.").then(setNote)).catch((reason) => setNote(reason.message)).finally(() => setBusy(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "desk-back",
				onClick: () => setSlug(""),
				children: "Bütün tətbiqlər"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: current.name }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangPick, {
				lang,
				setLang
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Başlıq", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: title,
				onChange: (event) => setTitle(event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Tarix sətri", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: updated,
				onChange: (event) => setUpdated(event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Mətn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: body,
				onChange: (event) => setBody(event.target.value),
				rows: 14
			})] }),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "studio-note",
				children: note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "nx-cta",
				type: "submit",
				disabled: busy,
				children: busy ? "Saxlanır" : "Saxla"
			})
		]
	});
}
var ICONS = {
	"nibras-arabic": "/apps/nibras-arabic.jpg",
	"nibras-pdf": "/apps/nibras-pdf.jpg",
	"nibras-docs": "/apps/nibras-docs.jpg",
	"nibras-plans": "/apps/nibras-plans.jpg"
};
function AppsEditor() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [lang, setLang] = (0, import_react.useState)("az");
	const [policy, setPolicy] = (0, import_react.useState)({
		title: "",
		updated: "",
		body: ""
	});
	const [note, setNote] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	function load() {
		fetchStudioApps().then(setRows);
	}
	(0, import_react.useEffect)(load, []);
	const extras = rows.filter((row) => !CATALOG.some((item) => item.slug === row.slug));
	const list = [...CATALOG.map((item) => {
		return rows.find((row) => row.slug === item.slug) ?? {
			...EMPTY_APP,
			slug: item.slug,
			name: item.name,
			icon_url: ICONS[item.slug],
			status: item.slug === "nibras-arabic" ? "ready" : item.slug === "nibras-docs" ? "building" : "soon"
		};
	}), ...extras];
	function fillPolicy(slug, name, nextLang) {
		const fallback = slug === "nibras-pdf" ? PDF_PRIVACY[nextLang] : slug === "nibras-arabic" && nextLang === "az" ? ARABIC_PRIVACY : null;
		setPolicy({
			title: fallback?.title ?? (name ? `${name} məxfilik siyasəti` : ""),
			updated: fallback?.updated ?? "",
			body: fallback?.paragraphs.join("\n\n") ?? ""
		});
		if (!slug) return;
		fetchPage(slug, nextLang).then((row) => {
			if (!row) return;
			setPolicy({
				title: row.title,
				updated: row.updated_label,
				body: row.body
			});
		});
	}
	function openApp(row) {
		setDraft(row);
		setLang("az");
		setNote("");
		fillPolicy(row.slug, row.name, "az");
	}
	if (!draft) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "desk-home",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Tətbiqlər" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tətbiqi seçin. Məxfilik siyasəti onun səhifəsinin içində yazılır." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "app-pick",
				children: list.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openApp(row),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: row.icon_url || ICONS[row.slug] || "/nibras-icon.png",
						alt: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: row.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["/privacy/", row.slug] })] })]
				}, row.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "desk-new",
				onClick: () => openApp({
					...EMPTY_APP,
					name: ""
				}),
				children: "Yeni tətbiq"
			})
		]
	});
	const known = CATALOG.some((item) => item.slug === draft.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "studio-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "desk-back",
				onClick: () => setDraft(null),
				children: "Bütün tətbiqlər"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: draft.name || "Yeni tətbiq" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (event) => {
					event.preventDefault();
					const slug = draft.slug.trim().toLowerCase();
					if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
						setNote("Ünvan yalnız kiçik hərf, rəqəm və tire ola bilər. Məsələn nibras-notes.");
						return;
					}
					setBusy(true);
					setNote("");
					const saving = writeApp({
						...draft,
						slug,
						name: draft.name.trim(),
						summary: draft.summary.trim()
					});
					const policySave = policy.title.trim() || policy.body.trim() ? writePrivacy({
						slug,
						lang,
						title: policy.title.trim(),
						updated_label: policy.updated.trim(),
						body: policy.body.trim()
					}) : Promise.resolve();
					Promise.all([saving, policySave]).then(() => {
						setDraft({
							...draft,
							slug
						});
						load();
						return savedNote("Saxlanıldı.").then(setNote);
					}).catch((reason) => setNote(reason.message)).finally(() => setBusy(false));
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Ad", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft.name,
						onChange: (event) => setDraft({
							...draft,
							name: event.target.value
						})
					})] }),
					known ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "studio-note",
						children: ["Səhifə ünvanı: /privacy/", draft.slug]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Səhifə ünvanı", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: draft.slug,
						onChange: (event) => setDraft({
							...draft,
							slug: event.target.value
						}),
						placeholder: "nibras-notes"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Vəziyyət", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: draft.status,
						onChange: (event) => setDraft({
							...draft,
							status: event.target.value
						}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "ready",
								children: "Hazır"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "soon",
								children: "Tezliklə"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "building",
								children: "Hazırlanır"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Qısa məlumat", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: draft.summary,
						onChange: (event) => setDraft({
							...draft,
							summary: event.target.value
						}),
						rows: 3
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "studio-stores",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mağaza keçidləri. Boş qalan görünməz." }), [
							["play_url", "Play Market"],
							["huawei_url", "Huawei Store"],
							["appstore_url", "App Store"],
							["galaxy_url", "Galaxy Store"],
							["xiaomi_url", "Xiaomi Store"]
						].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: draft[key],
							onChange: (event) => setDraft({
								...draft,
								[key]: event.target.value
							})
						})] }, key))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "policy-box",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Məxfilik əlavə et" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "studio-note",
								children: "Bu mətn həmin tətbiqin məxfilik səhifəsinə yazılır."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangPick, {
								lang,
								setLang: (next) => {
									setLang(next);
									fillPolicy(draft.slug, draft.name, next);
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Başlıq", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: policy.title,
								onChange: (event) => setPolicy({
									...policy,
									title: event.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Tarix", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: policy.updated,
								onChange: (event) => setPolicy({
									...policy,
									updated: event.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Məxfilik mətni", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: policy.body,
								onChange: (event) => setPolicy({
									...policy,
									body: event.target.value
								}),
								rows: 8
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "studio-check",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: draft.visible,
							onChange: (event) => setDraft({
								...draft,
								visible: event.target.checked
							})
						}), "Saytda görünsün"]
					}),
					note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "studio-note",
						children: note
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "studio-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "nx-cta",
							type: "submit",
							disabled: busy,
							children: busy ? "Saxlanır" : "Saxla"
						}), draft.slug && !known ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								removeApp(draft.slug).then(() => savedNote("Tətbiq silindi.")).then(() => {
									setDraft(null);
									load();
								}).catch((reason) => setNote(reason.message));
							},
							children: "Sil"
						}) : null]
					})
				]
			})
		]
	});
}
function LangPick({ lang, setLang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "studio-langs",
		children: LANGS.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: code === lang ? "is-on" : "",
			onClick: () => setLang(code),
			children: code.toUpperCase()
		}, code))
	});
}
function AboutEditor() {
	const [lang, setLang] = (0, import_react.useState)("az");
	const [copy, setCopy] = (0, import_react.useState)(defaultAbout("az"));
	const [note, setNote] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const fallback = defaultAbout(lang);
		setCopy(fallback);
		fetchPage("about", lang).then((row) => {
			if (row) setCopy(aboutFromRow(row, lang));
		});
	}, [lang]);
	function patch(part) {
		setCopy((current) => ({
			...current,
			...part
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "studio-card",
		onSubmit: (event) => {
			event.preventDefault();
			const next = {
				...copy,
				intro: lines(copy.intro.join("\n")),
				approach: lines(copy.approach.join("\n"))
			};
			setBusy(true);
			setNote("");
			writePrivacy({
				slug: "about",
				lang,
				title: next.title,
				updated_label: next.eyebrow,
				body: aboutBody(next)
			}).then(() => savedNote("Saxlanıldı. Haqqımızda səhifəsi bu mətni göstərəcək.").then(setNote)).catch((reason) => setNote(reason.message)).finally(() => setBusy(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Haqqımızda" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangPick, {
				lang,
				setLang
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Kiçik başlıq", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: copy.eyebrow,
				onChange: (event) => patch({ eyebrow: event.target.value })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Başlıq", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: copy.title,
				onChange: (event) => patch({ title: event.target.value })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Əsas mətn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 8,
				value: copy.intro.join("\n\n"),
				onChange: (event) => patch({ intro: event.target.value.split(/\n\s*\n/) })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Bölmə başlığı", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: copy.approachTitle,
				onChange: (event) => patch({ approachTitle: event.target.value })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Bölmə mətni", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 6,
				value: copy.approach.join("\n\n"),
				onChange: (event) => patch({ approach: event.target.value.split(/\n\s*\n/) })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Yekun sətir", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: copy.success,
				onChange: (event) => patch({ success: event.target.value })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Ərəbcə ayə", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: copy.verse,
				onChange: (event) => patch({ verse: event.target.value }),
				dir: "rtl"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Tərcümə", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: copy.verseTr,
				onChange: (event) => patch({ verseTr: event.target.value })
			})] }),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "studio-note",
				children: note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "nx-cta",
				type: "submit",
				disabled: busy,
				children: busy ? "Saxlanır" : "Saxla"
			})
		]
	});
}
function UnutmaEditor() {
	const [lang, setLang] = (0, import_react.useState)("az");
	const [copy, setCopy] = (0, import_react.useState)(defaultUnutma("az"));
	const [note, setNote] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setCopy(defaultUnutma(lang));
		fetchPage("unutma", lang).then((row) => {
			if (row) setCopy(unutmaFromRow(row, lang));
		});
	}, [lang]);
	function patch(part) {
		setCopy((current) => ({
			...current,
			...part
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "studio-card",
		onSubmit: (event) => {
			event.preventDefault();
			const next = {
				...copy,
				notes: lines(copy.notes.join("\n"))
			};
			setBusy(true);
			setNote("");
			writePrivacy({
				slug: "unutma",
				lang,
				title: next.title,
				updated_label: next.eyebrow,
				body: unutmaBody(next)
			}).then(() => savedNote("Saxlanıldı. Unutma səhifəsi bu mətni göstərəcək.").then(setNote)).catch((reason) => setNote(reason.message)).finally(() => setBusy(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Unutma" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "studio-note",
				children: "Hər xatırlatmanı ayrı sətirdə yazın. Boş sətir sayılmır."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangPick, {
				lang,
				setLang
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Kiçik başlıq", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: copy.eyebrow,
				onChange: (event) => patch({ eyebrow: event.target.value })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Başlıq", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: copy.title,
				onChange: (event) => patch({ title: event.target.value })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Ərəbcə ayə", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: copy.verse,
				onChange: (event) => patch({ verse: event.target.value }),
				dir: "rtl"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Xatırlatmalar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 14,
				value: copy.notes.join("\n"),
				onChange: (event) => patch({ notes: event.target.value.split("\n") })
			})] }),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "studio-note",
				children: note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "nx-cta",
				type: "submit",
				disabled: busy,
				children: busy ? "Saxlanır" : "Saxla"
			})
		]
	});
}
function LessonsEditor() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [id, setId] = (0, import_react.useState)("");
	const [lang, setLang] = (0, import_react.useState)("az");
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [fresh, setFresh] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	function load() {
		fetchPrivacyAll().then(setRows);
	}
	(0, import_react.useEffect)(load, []);
	const sections = pythonSections("az", rows);
	(0, import_react.useEffect)(() => {
		if (!id) return;
		const known = PYTHON_LESSONS.find((item) => item.id === id);
		const row = rows.find((item) => item.slug === lessonSlug(id) && item.lang === lang);
		setTitle(row?.title || known?.titles[lang] || "");
		setBody(row?.body ?? "");
	}, [
		id,
		lang,
		rows
	]);
	function openNew() {
		const name = fresh.trim();
		if (!name) return;
		let next = slugifyLesson(name);
		if (new Set(sections.map((item) => item.id)).has(next)) next = `${next}-2`.slice(0, 48);
		setBusy(true);
		setNote("");
		writePrivacy({
			slug: lessonSlug(next),
			lang: "az",
			title: name,
			updated_label: "200",
			body: ""
		}).then(() => {
			setFresh("");
			setId(next);
			setLang("az");
			return fetchPrivacyAll().then(setRows).then(() => savedNote("Səhifə əlavə olundu.").then(setNote));
		}).catch((reason) => setNote(reason.message)).finally(() => setBusy(false));
	}
	if (!id) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "desk-home",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Python" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bölməni seçin və mətnini 5 dildə ayrı-ayrı yazın. Boş mətn saytda görünmür." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "desk-grid",
				children: sections.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setId(item.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["/programming/python#", item.id] })]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "studio-card",
				onSubmit: (event) => {
					event.preventDefault();
					openNew();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Yeni səhifə" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Səhifə adı", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: fresh,
						placeholder: "Python nədir? Nə işə yarayır",
						onChange: (event) => setFresh(event.target.value)
					})] }),
					note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "studio-note",
						children: note
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "nx-cta",
						type: "submit",
						disabled: busy || !fresh.trim(),
						children: busy ? "Əlavə olunur" : "Səhifə əlavə et"
					})
				]
			})
		]
	});
	const custom = !PYTHON_LESSONS.some((item) => item.id === id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "studio-card",
		onSubmit: (event) => {
			event.preventDefault();
			setBusy(true);
			setNote("");
			const knownIndex = PYTHON_LESSONS.findIndex((item) => item.id === id);
			writePrivacy({
				slug: lessonSlug(id),
				lang,
				title: title.trim(),
				updated_label: knownIndex >= 0 ? String(knownIndex) : "200",
				body
			}).then(() => {
				return fetchPrivacyAll().then((next) => {
					setRows(next);
					return savedNote("Saxlanıldı. Bu dilin səhifəsində mətn görünəcək.").then(setNote);
				});
			}).catch((reason) => setNote(reason.message)).finally(() => setBusy(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "desk-back",
				onClick: () => setId(""),
				children: "Bütün bölmələr"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title || id }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "studio-note",
				children: ["Ünvan: /programming/python#", id]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangPick, {
				lang,
				setLang
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Başlıq", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: title,
				onChange: (event) => setTitle(event.target.value),
				dir: lang === "ar" ? "rtl" : void 0
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Mətn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 14,
				value: body,
				placeholder: "Bu dildə mətn hələ yoxdur.",
				dir: lang === "ar" ? "rtl" : void 0,
				onChange: (event) => setBody(event.target.value)
			})] }),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "studio-note",
				children: note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "nx-cta",
				type: "submit",
				disabled: busy || !title.trim(),
				children: busy ? "Saxlanır" : "Saxla"
			}),
			custom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "desk-back",
				disabled: busy,
				onClick: () => {
					setBusy(true);
					removePrivacy(lessonSlug(id)).then(() => savedNote("Səhifə silindi.")).then(() => {
						setId("");
						return fetchPrivacyAll().then(setRows);
					}).catch((reason) => setNote(reason.message)).finally(() => setBusy(false));
				},
				children: "Səhifəni sil"
			}) : null
		]
	});
}
function LibraryEditor({ start }) {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [group, setGroup] = (0, import_react.useState)(start);
	const [id, setId] = (0, import_react.useState)("");
	const [lang, setLang] = (0, import_react.useState)("az");
	const [title, setTitle] = (0, import_react.useState)("");
	const [body, setBody] = (0, import_react.useState)("");
	const [fresh, setFresh] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	function load() {
		fetchPrivacyAll().then(setRows);
	}
	(0, import_react.useEffect)(load, []);
	(0, import_react.useEffect)(() => {
		setGroup(start);
		setId("");
	}, [start]);
	const items = libItems(group, rows);
	const custom = id ? !LIB_GROUPS[group].pages.some((item) => item.id === id) : false;
	(0, import_react.useEffect)(() => {
		if (!id) return;
		const saved = savedLib(group, id, lang, rows);
		const fallback = libDefaults(group, id, lang);
		setTitle(saved?.title || fallback.title);
		setBody(saved?.body ?? fallback.body);
	}, [
		id,
		lang,
		group,
		rows
	]);
	function openNew() {
		const name = fresh.trim();
		if (!name) return;
		let next = slugifyLesson(name);
		if (new Set(items.map((item) => item.id)).has(next)) next = `${next}-2`.slice(0, 48);
		setBusy(true);
		setNote("");
		writePrivacy({
			slug: libSlug(group, next),
			lang: "az",
			title: name,
			updated_label: "200",
			body: ""
		}).then(() => savedNote("Səhifə əlavə olundu.").then(setNote)).then(() => {
			setFresh("");
			setId(next);
			setLang("az");
			return fetchPrivacyAll().then(setRows);
		}).catch((reason) => setNote(reason.message)).finally(() => setBusy(false));
	}
	if (!id) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "desk-home",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: LIB_GROUPS[group].label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Səhifəni seçin və mətnini 5 dildə ayrı-ayrı yazın. Boş saxlanmayan dil öz köhnə mətnini göstərir." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "studio-langs",
				children: Object.keys(LIB_GROUPS).map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: code === group ? "is-on" : "",
					onClick: () => setGroup(code),
					children: LIB_GROUPS[code].label
				}, code))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "desk-grid",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setId(item.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: group === "resurs" ? `/resurslar/${item.id}` : `/guides/${item.id}` })]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "studio-card",
				onSubmit: (event) => {
					event.preventDefault();
					openNew();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Yeni səhifə" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Səhifə adı", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: fresh,
						onChange: (event) => setFresh(event.target.value)
					})] }),
					note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "studio-note",
						children: note
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "nx-cta",
						type: "submit",
						disabled: busy || !fresh.trim(),
						children: busy ? "Əlavə olunur" : "Səhifə əlavə et"
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "studio-card",
		onSubmit: (event) => {
			event.preventDefault();
			setBusy(true);
			setNote("");
			writePrivacy({
				slug: libSlug(group, id),
				lang,
				title: title.trim(),
				updated_label: "0",
				body
			}).then(() => savedNote("Saxlanıldı. Bu dilin səhifəsi bu mətni göstərəcək.").then(setNote)).then(() => fetchPrivacyAll().then(setRows)).catch((reason) => setNote(reason.message)).finally(() => setBusy(false));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "desk-back",
				onClick: () => setId(""),
				children: "Bütün səhifələr"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: title || id }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangPick, {
				lang,
				setLang
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Başlıq", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: title,
				dir: lang === "ar" ? "rtl" : void 0,
				onChange: (event) => setTitle(event.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Mətn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 14,
				value: body,
				dir: lang === "ar" ? "rtl" : void 0,
				onChange: (event) => setBody(event.target.value)
			})] }),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "studio-note",
				children: note
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "nx-cta",
				type: "submit",
				disabled: busy || !title.trim(),
				children: busy ? "Saxlanır" : "Saxla"
			}),
			custom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "desk-back",
				disabled: busy,
				onClick: () => {
					setBusy(true);
					removePrivacy(libSlug(group, id)).then(() => {
						setId("");
						return fetchPrivacyAll().then(setRows);
					}).catch((reason) => setNote(reason.message)).finally(() => setBusy(false));
				},
				children: "Səhifəni sil"
			}) : null
		]
	});
}
//#endregion
export { StudioPage as component };
