import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Slot } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { $n as Contact, Bt as MapPin, Dr as Barcode, Fr as AppWindow, Ft as MessageCircle, Ht as LogOut, Kt as LoaderCircle, Pt as MessageSquare, Sr as Bookmark, Un as Download, Ut as Lock, V as Share2, Vt as Mail, Z as ScanLine, Zn as Copy, _t as Phone, en as LayoutGrid, fn as Globe, ft as QrCode, g as Type, i as Wifi, m as Upload, mr as Calendar, n as X, qn as Crown, ur as Check, y as Trash2 } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { Yn as useI18n } from "./router-Da_pLWIk.mjs";
import { n as encode, t as QrCodeDataType } from "../_libs/uqr.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/render-DlJhrdam.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:opacity-90",
			secondary: "bg-bg-subtle text-fg hover:bg-bg-elevated",
			outline: "border border-border bg-transparent text-fg hover:bg-bg-subtle",
			ghost: "text-fg hover:bg-bg-subtle",
			danger: "bg-danger text-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var FINDER = 7;
function isFinder(x, y, n) {
	const inBox = (fx, fy) => x >= fx && x < fx + FINDER && y >= fy && y < fy + FINDER;
	return inBox(0, 0) || inBox(n - FINDER, 0) || inBox(0, n - FINDER);
}
function eyeRadius(style) {
	switch (style) {
		case "rounded": return {
			outer: 1.6,
			inner: .7
		};
		case "extra-rounded": return {
			outer: 2.4,
			inner: 1.1
		};
		case "dots": return {
			outer: 3.5,
			inner: 1.5
		};
		case "leaf": return {
			outer: 2.8,
			inner: 1.2
		};
		default: return {
			outer: .4,
			inner: .2
		};
	}
}
function roundedRectPath(x, y, w, h, r) {
	const radii = typeof r === "number" ? {
		tl: r,
		tr: r,
		br: r,
		bl: r
	} : r;
	const tl = Math.min(radii.tl, w / 2, h / 2);
	const tr = Math.min(radii.tr, w / 2, h / 2);
	const br = Math.min(radii.br, w / 2, h / 2);
	const bl = Math.min(radii.bl, w / 2, h / 2);
	return [
		`M${x + tl} ${y}`,
		`H${x + w - tr}`,
		`A${tr} ${tr} 0 0 1 ${x + w} ${y + tr}`,
		`V${y + h - br}`,
		`A${br} ${br} 0 0 1 ${x + w - br} ${y + h}`,
		`H${x + bl}`,
		`A${bl} ${bl} 0 0 1 ${x} ${y + h - bl}`,
		`V${y + tl}`,
		`A${tl} ${tl} 0 0 1 ${x + tl} ${y}`,
		"Z"
	].join(" ");
}
function modulePath(x, y, dark, style) {
	const n = dark(x, y - 1);
	const s = dark(x, y + 1);
	const e = dark(x + 1, y);
	const w = dark(x - 1, y);
	if (style === "dots") return `M${x + .5} ${y + .12} a0.38 0.38 0 1 0 0.001 0 Z`;
	if (style === "square") return `M${x} ${y}h1v1h-1Z`;
	if (style === "rounded") return roundedRectPath(x + .08, y + .08, .84, .84, .22);
	if (style === "classy") {
		if (!n && !s && !e && !w) return `M${x + .5} ${y + .14} a0.36 0.36 0 1 0 0.001 0 Z`;
		return roundedRectPath(x + .06, y + .06, .88, .88, .18);
	}
	const r = .5;
	return roundedRectPath(x, y, 1, 1, {
		tl: !n && !w ? r : 0,
		tr: !n && !e ? r : 0,
		br: !s && !e ? r : 0,
		bl: !s && !w ? r : 0
	});
}
function drawEye(fx, fy, style, fill) {
	const { outer, inner } = eyeRadius(style);
	const leaf = style === "leaf" ? {
		tl: outer,
		tr: .35,
		br: outer,
		bl: .35
	} : outer;
	const ring = roundedRectPath(fx, fy, FINDER, FINDER, leaf);
	const hole = roundedRectPath(fx + 1, fy + 1, 5, 5, typeof leaf === "number" ? Math.max(outer - .7, .2) : 1.4);
	const pupilR = style === "dots" ? 1.5 : inner;
	return `<path fill="${fill}" fill-rule="evenodd" d="${ring}${hole}"/><path fill="${fill}" d="${roundedRectPath(fx + 2, fy + 2, 3, 3, pupilR)}"/>`;
}
function frameMetrics(design, modules) {
	const quiet = 2;
	const qr = modules + 4;
	let pad = 0;
	let banner = 0;
	if (design.frame === "quiet") pad = 1.6;
	if (design.frame === "banner" || design.frame === "scanme") {
		pad = 1.4;
		banner = 3.2;
	}
	if (design.frame === "ticket") {
		pad = 2.2;
		banner = 2.6;
	}
	const width = qr + pad * 2;
	const height = qr + pad * 2 + banner;
	return {
		quiet,
		qr,
		pad,
		banner,
		width,
		height,
		modules
	};
}
function renderQrSvg(value, design, opts) {
	const encoded = encode(value || "https://nibrascode.com", {
		ecc: "H",
		border: 0,
		boostEcc: true
	});
	const matrix = encoded.data;
	const types = encoded.types;
	const n = encoded.size;
	const m = frameMetrics(design, n);
	const ox = m.pad + m.quiet;
	const oy = m.pad + m.quiet;
	const isDark = (x, y) => {
		if (x < 0 || y < 0 || x >= n || y >= n) return false;
		if (types[y]?.[x] === QrCodeDataType.Position) return false;
		return Boolean(matrix[y]?.[x]);
	};
	const uid = `nq${Math.abs(hash(value + design.fg + design.gradientFrom)).toString(36)}`;
	const fgFill = design.gradientEnabled ? `url(#g-${uid})` : design.fg;
	const eyeFill = design.eyeColorMatch ? fgFill : design.eyeColor;
	const bg = design.transparent ? "none" : design.bg;
	let dots = "";
	for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
		if (!matrix[y]?.[x]) continue;
		if (isFinder(x, y, n)) continue;
		dots += modulePath(x, y, isDark, design.dotStyle);
	}
	const eyes = drawEye(0, 0, design.eyeStyle, eyeFill) + drawEye(n - FINDER, 0, design.eyeStyle, eyeFill) + drawEye(0, n - FINDER, design.eyeStyle, eyeFill);
	const logo = design.logoDataUrl ? (() => {
		const s = n * design.logoSize;
		const x = (n - s) / 2;
		const pad = s * .12;
		return `<rect x="${x - pad / 2}" y="${x - pad / 2}" width="${s + pad}" height="${s + pad}" rx="${s * .18}" fill="${design.transparent ? "#ffffff" : design.bg}"/><image href="${escapeXml(design.logoDataUrl)}" x="${x}" y="${x}" width="${s}" height="${s}" preserveAspectRatio="xMidYMid meet"/>`;
	})() : "";
	const bgImage = design.backgroundImage ? `<image href="${escapeXml(design.backgroundImage)}" x="0" y="0" width="${n}" height="${n}" preserveAspectRatio="xMidYMid slice" opacity="0.22"/>` : "";
	const gradient = design.gradientEnabled ? design.gradientType === "radial" ? `<radialGradient id="g-${uid}" cx="50%" cy="50%" r="70%"><stop offset="0%" stop-color="${design.gradientFrom}"/><stop offset="100%" stop-color="${design.gradientTo}"/></radialGradient>` : `<linearGradient id="g-${uid}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${design.gradientFrom}"/><stop offset="100%" stop-color="${design.gradientTo}"/></linearGradient>` : "";
	const frameFill = design.frame === "none" ? "none" : design.frameColor;
	const frameShape = design.frame === "none" ? "" : `<rect x="0" y="0" width="${m.width}" height="${m.height}" rx="${design.frame === "ticket" ? 1.4 : 1.1}" fill="${frameFill}"/><rect x="${m.pad * .55}" y="${m.pad * .55}" width="${m.width - m.pad * 1.1}" height="${m.height - m.pad * 1.1}" rx="0.9" fill="${design.transparent ? "#ffffff" : design.bg}"/>`;
	const label = m.banner ? `<text x="${m.width / 2}" y="${m.pad + m.qr + m.banner * .62}" text-anchor="middle" font-family="Sora, Manrope, sans-serif" font-weight="700" font-size="1.45" fill="${design.frame === "none" ? design.fg : "#f8faf8"}" letter-spacing="0.18">${escapeXml((design.frameText || "SCAN ME").toUpperCase())}</text>` : "";
	const brand = opts?.branded ? `<text x="${m.width / 2}" y="${m.height - .35}" text-anchor="middle" font-family="Manrope, sans-serif" font-size="0.72" fill="${design.frame === "none" ? "#8b929c" : "#d1d5db"}">Nibras QR</text>` : "";
	const innerBg = design.transparent && design.frame === "none" ? "" : `<rect x="${ox - m.quiet}" y="${oy - m.quiet}" width="${m.qr}" height="${m.qr}" fill="${bg}"/>`;
	return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${m.width} ${m.height}" width="100%" role="img" aria-label="QR code">
  <defs>${gradient}</defs>
  ${frameShape}
  <g transform="translate(${ox} ${oy})">
    ${innerBg}
    ${bgImage}
    <path fill="${fgFill}" d="${dots}"/>
    ${eyes}
    ${logo}
  </g>
  ${label}
  ${brand}
</svg>`;
}
function escapeXml(s) {
	return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function hash(s) {
	let h = 0;
	for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) | 0;
	return h;
}
async function svgToPng(svg, px, jpeg = false) {
	const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	try {
		const img = await loadImage(url);
		const canvas = document.createElement("canvas");
		canvas.width = px;
		canvas.height = px;
		const ctx = canvas.getContext("2d");
		if (!ctx) throw new Error("Canvas unavailable");
		if (jpeg) {
			ctx.fillStyle = "#ffffff";
			ctx.fillRect(0, 0, px, px);
		}
		ctx.drawImage(img, 0, 0, px, px);
		const mime = jpeg ? "image/jpeg" : "image/png";
		const quality = jpeg ? .92 : void 0;
		return await new Promise((resolve, reject) => {
			canvas.toBlob((b) => b ? resolve(b) : reject(/* @__PURE__ */ new Error("Export failed")), mime, quality);
		});
	} finally {
		URL.revokeObjectURL(url);
	}
}
function loadImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = () => reject(/* @__PURE__ */ new Error("Image load failed"));
		img.src = src;
	});
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/qr-tool-39Nm74y5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-lg border border-border bg-bg-elevated px-3 text-sm text-fg placeholder:text-subtle", "transition-[box-shadow,border-color] duration-150 ease-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70", "disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium text-muted", className),
		...props
	});
}
/**
* Optional Google sign-in for the web QR tool via the Nibras QR Supabase
* project (same accounts as the Android app). Pro = a row in
* public.entitlements (RLS: users read only their own row).
* supabase-js is loaded lazily, only when someone signs in or already has a session.
*/
var SUPABASE_URL = "https://rbnhwyvpuobdmgqjdiyj.supabase.co";
var SUPABASE_KEY = "sb_publishable_05Dn4alWjic-532f_IRkVg_eQsll1NB";
var STORAGE_KEY = "sb-rbnhwyvpuobdmgqjdiyj-auth-token";
var client = null;
function sb() {
	client ??= import("../_libs/supabase__supabase-js.mjs").then((n) => n.t).then(({ createClient }) => createClient(SUPABASE_URL, SUPABASE_KEY, { auth: {
		flowType: "pkce",
		detectSessionInUrl: true,
		persistSession: true,
		storageKey: STORAGE_KEY
	} }));
	return client;
}
async function proFor(c, userId) {
	const { data } = await c.from("entitlements").select("is_pro, expires_at").eq("user_id", userId).maybeSingle();
	if (!data?.is_pro) return false;
	return !data.expires_at || Date.parse(data.expires_at) > Date.now();
}
var useQrAuth = create((set, get) => ({
	ready: false,
	busy: false,
	user: null,
	pro: false,
	init: async () => {
		const url = new URL(window.location.href);
		const returning = url.searchParams.has("code");
		let hasSession = false;
		try {
			hasSession = Boolean(localStorage.getItem(STORAGE_KEY));
		} catch {}
		if (!returning && !hasSession) return set({ ready: true });
		try {
			const c = await sb();
			const { data } = await c.auth.getSession();
			const u = data.session?.user;
			if (returning) {
				url.searchParams.delete("code");
				window.history.replaceState(null, "", url.pathname + url.search + url.hash);
			}
			if (!u) return set({
				ready: true,
				user: null,
				pro: false
			});
			const meta = u.user_metadata ?? {};
			const str = (v) => typeof v === "string" && v ? v : null;
			set({
				user: {
					id: u.id,
					email: u.email ?? null,
					name: str(meta.full_name) ?? str(meta.name),
					image: str(meta.avatar_url) ?? str(meta.picture)
				},
				pro: await proFor(c, u.id),
				ready: true
			});
		} catch {
			set({ ready: true });
		}
	},
	signIn: async () => {
		set({ busy: true });
		try {
			await (await sb()).auth.signInWithOAuth({
				provider: "google",
				options: { redirectTo: `${window.location.origin}/qr` }
			});
		} finally {
			set({ busy: false });
		}
	},
	buy: async (plan) => {
		set({ busy: true });
		try {
			const { data, error } = await (await sb()).functions.invoke("lemon-checkout", { body: { plan } });
			if (error || !data?.url) throw new Error("checkout failed");
			window.location.assign(data.url);
		} finally {
			set({ busy: false });
		}
	},
	refreshPro: async () => {
		const u = get().user;
		if (!u) return false;
		const pro = await proFor(await sb(), u.id);
		set({ pro });
		return pro;
	},
	signOut: async () => {
		set({ busy: true });
		try {
			await (await sb()).auth.signOut({ scope: "local" });
		} finally {
			set({
				busy: false,
				user: null,
				pro: false
			});
		}
	}
}));
var PLAY_URL = "https://play.google.com/store/apps/details?id=com.nibras.qr";
var useLock = create((set) => ({
	open: false,
	show: () => set({ open: true }),
	hide: () => set({ open: false })
}));
function ProBadge({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 px-2 py-0.5 text-[10px] font-bold text-white", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-2.5" }), " PRO"]
	});
}
/** Web paywall: one-time Lemon Squeezy purchase (sign-in required). */
function LockDialog() {
	const { w } = useI18n();
	const { open, hide } = useLock();
	const { user, pro, signIn, busy, buy } = useQrAuth();
	const [plan, setPlan] = (0, import_react.useState)("1y");
	const [err, setErr] = (0, import_react.useState)(false);
	if (!open) return null;
	const plans = [{
		id: "1y",
		name: w.plan1y,
		note: w.plan1yNote,
		price: "$9.99",
		term: w.term1y
	}, {
		id: "lifetime",
		name: w.planLife,
		note: w.planLifeNote,
		price: "$19.99",
		term: w.termLife
	}];
	const onBuy = async () => {
		setErr(false);
		try {
			await buy(plan);
		} catch {
			setErr(true);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm",
		role: "dialog",
		"aria-modal": "true",
		onClick: hide,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md rounded-2xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute end-3 top-3 text-muted hover:text-fg",
					onClick: hide,
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-fuchsia-500 text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-xl font-bold",
					children: w.lockTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: w.lockBody
				}),
				pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 rounded-xl bg-bg-subtle p-3 text-sm font-semibold",
					children: [w.proActive, " ✓"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-2",
					role: "radiogroup",
					children: plans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "radio",
						"aria-checked": plan === p.id,
						"data-plan": p.id,
						onClick: () => setPlan(p.id),
						className: cn("relative flex items-center justify-between gap-3 rounded-xl border-2 p-3 text-start transition-colors", plan === p.id ? "border-fuchsia-500 bg-fuchsia-500/5" : "border-border hover:border-fg/30"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-semibold",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("block text-xs", p.id === "1y" ? "font-semibold text-fuchsia-600 dark:text-fuchsia-400" : "text-muted"),
							children: [p.id === "1y" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "me-1 inline size-3" }), p.note]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-lg font-bold",
								children: p.price
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] text-subtle",
								children: p.term
							})]
						})]
					}, p.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-2",
					children: [
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							disabled: busy,
							onClick: () => void onBuy(),
							"data-testid": "qr-buy",
							children: [
								busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }),
								" ",
								w.buy,
								" · ",
								plans.find((p) => p.id === plan).price
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: w.lockSignIn
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: busy,
							onClick: () => void signIn(),
							children: w.signIn
						})] }),
						err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-red-600",
							children: w.payError
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: w.appNote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-subtle",
							children: w.securePay
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 border-t border-border pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: PLAY_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "text-xs text-muted underline-offset-2 hover:underline",
						children: [w.getApp, " (Android)"]
					})
				})
			]
		})
	});
}
var QR_TYPES = [
	"url",
	"text",
	"phone",
	"email",
	"whatsapp",
	"wifi",
	"vcard",
	"location",
	"sms",
	"event",
	"app"
];
var DOT_STYLES = [
	"square",
	"rounded",
	"dots",
	"classy",
	"extra-rounded"
];
var EYE_STYLES = [
	"square",
	"rounded",
	"dots",
	"leaf",
	"extra-rounded"
];
var FRAME_STYLES = [
	"none",
	"quiet",
	"banner",
	"scanme",
	"ticket"
];
var DEFAULT_DESIGN = {
	fg: "#12141a",
	bg: "#ffffff",
	transparent: false,
	gradientEnabled: false,
	gradientFrom: "#0f766e",
	gradientTo: "#2dd4bf",
	gradientType: "linear",
	dotStyle: "square",
	eyeStyle: "square",
	eyeColor: "#12141a",
	eyeColorMatch: true,
	logoDataUrl: null,
	logoSize: .2,
	frame: "none",
	frameColor: "#12141a",
	frameText: "SCAN ME",
	backgroundImage: null
};
var PLAN_LIMITS = {
	free: {
		dynamic: 3,
		svg: false,
		pdf: false,
		designPro: false,
		stats: false,
		folders: false,
		hq: false,
		api: false,
		branded: true
	},
	premium: {
		dynamic: 50,
		svg: true,
		pdf: true,
		designPro: true,
		stats: true,
		folders: true,
		hq: true,
		api: false,
		branded: false
	},
	business: {
		dynamic: 500,
		svg: true,
		pdf: true,
		designPro: true,
		stats: true,
		folders: true,
		hq: true,
		api: true,
		branded: false
	}
};
function escWifi(value) {
	return value.replace(/([\\;,:"])/g, "\\$1");
}
function digitsPhone(raw) {
	const trimmed = raw.trim();
	const plus = trimmed.startsWith("+");
	const digits = trimmed.replace(/[^\d]/g, "");
	return plus ? `+${digits}` : digits;
}
function withHttps(url) {
	const t = url.trim();
	if (!t) return "";
	if (/^[a-z][a-z0-9+.-]*:/i.test(t)) return t;
	return `https://${t}`;
}
function buildPayload(type, fields) {
	switch (type) {
		case "url": return withHttps(fields.url ?? "") || "https://nibrascode.com";
		case "text": return (fields.text ?? "").trim() || "Nibras QR";
		case "phone": return `tel:${digitsPhone(fields.phone ?? "")}`;
		case "email": {
			const addr = (fields.email ?? "").trim();
			const subject = encodeURIComponent(fields.subject ?? "");
			const body = encodeURIComponent(fields.body ?? "");
			const q = [subject ? `subject=${subject}` : "", body ? `body=${body}` : ""].filter(Boolean).join("&");
			return q ? `mailto:${addr}?${q}` : `mailto:${addr}`;
		}
		case "whatsapp": {
			const phone = digitsPhone(fields.phone ?? "").replace(/^\+/, "");
			const text = encodeURIComponent(fields.text ?? "");
			return text ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/${phone}`;
		}
		case "wifi": {
			const enc = (fields.encryption ?? "WPA").toUpperCase();
			const hidden = fields.hidden === "true" ? "true" : "false";
			const auth = enc === "NOPASS" ? "nopass" : enc;
			const pass = auth === "nopass" ? "" : `P:${escWifi(fields.password ?? "")};`;
			return `WIFI:T:${auth};S:${escWifi(fields.ssid ?? "")};${pass}H:${hidden};;`;
		}
		case "vcard": {
			const first = fields.firstName ?? "";
			const last = fields.lastName ?? "";
			const fn = (fields.fullName ?? `${first} ${last}`).trim();
			return [
				"BEGIN:VCARD",
				"VERSION:3.0",
				`N:${last};${first};;;`,
				`FN:${fn}`,
				fields.org ? `ORG:${fields.org}` : "",
				fields.title ? `TITLE:${fields.title}` : "",
				fields.phone ? `TEL;TYPE=CELL:${digitsPhone(fields.phone)}` : "",
				fields.email ? `EMAIL:${fields.email}` : "",
				fields.url ? `URL:${withHttps(fields.url)}` : "",
				fields.street || fields.city ? `ADR:;;${fields.street ?? ""};${fields.city ?? ""};;;${fields.country ?? ""}` : "",
				"END:VCARD"
			].filter(Boolean).join("\n");
		}
		case "location": {
			const lat = (fields.lat ?? "").trim();
			const lng = (fields.lng ?? "").trim();
			if (lat && lng) return `geo:${lat},${lng}`;
			const q = encodeURIComponent(fields.query ?? "");
			return q ? `https://maps.google.com/?q=${q}` : "https://maps.google.com";
		}
		case "sms": {
			const phone = digitsPhone(fields.phone ?? "");
			const body = encodeURIComponent(fields.text ?? "");
			return body ? `sms:${phone}?body=${body}` : `sms:${phone}`;
		}
		case "event": {
			const stamp = (iso) => {
				const d = new Date(iso);
				if (Number.isNaN(d.getTime())) return "";
				return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
			};
			const start = stamp(fields.start ?? "");
			const end = stamp(fields.end ?? "") || start;
			return [
				"BEGIN:VCALENDAR",
				"VERSION:2.0",
				"BEGIN:VEVENT",
				`SUMMARY:${fields.title ?? "Event"}`,
				start ? `DTSTART:${start}` : "",
				end ? `DTEND:${end}` : "",
				fields.location ? `LOCATION:${fields.location}` : "",
				fields.description ? `DESCRIPTION:${fields.description}` : "",
				"END:VEVENT",
				"END:VCALENDAR"
			].filter(Boolean).join("\n");
		}
		case "app": return withHttps(fields.url ?? "") || "https://nibrascode.com";
		default: return "https://nibrascode.com";
	}
}
function defaultFields(type) {
	switch (type) {
		case "url": return { url: "https://" };
		case "text": return { text: "" };
		case "phone": return { phone: "+994" };
		case "email": return {
			email: "",
			subject: "",
			body: ""
		};
		case "whatsapp": return {
			phone: "994",
			text: ""
		};
		case "wifi": return {
			ssid: "",
			password: "",
			encryption: "WPA",
			hidden: "false"
		};
		case "vcard": return {
			firstName: "",
			lastName: "",
			org: "",
			title: "",
			phone: "",
			email: "",
			url: "",
			street: "",
			city: "",
			country: ""
		};
		case "location": return {
			lat: "",
			lng: "",
			query: ""
		};
		case "sms": return {
			phone: "+994",
			text: ""
		};
		case "event": return {
			title: "",
			start: "",
			end: "",
			location: "",
			description: ""
		};
		case "app": return { url: "" };
		default: return {};
	}
}
function defaultName(type, fields) {
	switch (type) {
		case "url": try {
			return new URL(withHttps(fields.url ?? "")).hostname || "URL";
		} catch {
			return "URL";
		}
		case "wifi": return fields.ssid ? `Wi-Fi · ${fields.ssid}` : "Wi-Fi";
		case "vcard": return `${fields.firstName ?? ""} ${fields.lastName ?? ""}`.trim() || "Kontakt";
		case "whatsapp": return "WhatsApp";
		case "event": return fields.title || "Tədbir";
		case "app": return "App";
		default: return type;
	}
}
var TEMPLATES = [
	{
		id: "wifi",
		type: "wifi",
		premium: false,
		fields: {
			ssid: "Restaurant-WiFi",
			password: "",
			encryption: "WPA",
			hidden: "false"
		},
		design: {
			...DEFAULT_DESIGN,
			fg: "#0f766e",
			dotStyle: "rounded",
			eyeStyle: "rounded",
			frame: "scanme",
			frameColor: "#0f766e",
			frameText: "WI-FI"
		}
	},
	{
		id: "restaurant",
		type: "url",
		premium: true,
		fields: { url: "https://nibrascode.com/menu" },
		design: {
			...DEFAULT_DESIGN,
			fg: "#7c2d12",
			bg: "#fff7ed",
			dotStyle: "extra-rounded",
			eyeStyle: "leaf",
			frame: "banner",
			frameColor: "#9a3412",
			frameText: "MENU"
		}
	},
	{
		id: "business",
		type: "vcard",
		premium: true,
		fields: {
			firstName: "",
			lastName: "",
			org: "",
			title: "",
			phone: "",
			email: "",
			url: ""
		},
		design: {
			...DEFAULT_DESIGN,
			fg: "#12141a",
			bg: "#f8fafc",
			dotStyle: "classy",
			eyeStyle: "extra-rounded",
			frame: "quiet",
			frameColor: "#12141a"
		}
	},
	{
		id: "social",
		type: "url",
		premium: true,
		fields: { url: "https://instagram.com/" },
		design: {
			...DEFAULT_DESIGN,
			gradientEnabled: true,
			gradientFrom: "#0e7490",
			gradientTo: "#134e4a",
			fg: "#134e4a",
			dotStyle: "dots",
			eyeStyle: "dots",
			frame: "scanme",
			frameColor: "#134e4a",
			frameText: "FOLLOW"
		}
	},
	{
		id: "contact",
		type: "vcard",
		premium: false,
		fields: {
			firstName: "",
			lastName: "",
			phone: "",
			email: ""
		},
		design: {
			...DEFAULT_DESIGN,
			fg: "#1e3a5f",
			dotStyle: "rounded",
			eyeStyle: "rounded",
			frame: "none"
		}
	},
	{
		id: "event",
		type: "event",
		premium: true,
		fields: {
			title: "",
			start: "",
			end: "",
			location: ""
		},
		design: {
			...DEFAULT_DESIGN,
			fg: "#111827",
			bg: "#f5f5f4",
			dotStyle: "square",
			eyeStyle: "leaf",
			frame: "ticket",
			frameColor: "#1c1917",
			frameText: "EVENT"
		}
	},
	{
		id: "payment",
		type: "url",
		premium: true,
		fields: { url: "https://" },
		design: {
			...DEFAULT_DESIGN,
			fg: "#064e3b",
			bg: "#ecfdf5",
			dotStyle: "extra-rounded",
			eyeStyle: "rounded",
			frame: "scanme",
			frameColor: "#064e3b",
			frameText: "PAY"
		}
	},
	{
		id: "whatsapp",
		type: "whatsapp",
		premium: false,
		fields: {
			phone: "994",
			text: "Salam!"
		},
		design: {
			...DEFAULT_DESIGN,
			fg: "#14532d",
			bg: "#f0fdf4",
			dotStyle: "rounded",
			eyeStyle: "rounded",
			frame: "banner",
			frameColor: "#166534",
			frameText: "CHAT"
		}
	}
];
function templateById(id) {
	return TEMPLATES.find((t) => t.id === id);
}
var useGenerator = create((set) => ({
	type: "url",
	name: "",
	isDynamic: false,
	fields: defaultFields("url"),
	design: { ...DEFAULT_DESIGN },
	editingId: null,
	shortCode: null,
	setType: (type) => set({
		type,
		fields: defaultFields(type),
		name: "",
		editingId: null,
		shortCode: null
	}),
	setName: (name) => set({ name }),
	setDynamic: (isDynamic) => set({ isDynamic }),
	setField: (key, value) => set((s) => ({ fields: {
		...s.fields,
		[key]: value
	} })),
	setFields: (fields) => set({ fields }),
	setDesign: (patch) => set((s) => ({ design: {
		...s.design,
		...patch
	} })),
	applyTemplate: (id) => {
		const t = templateById(id);
		if (!t) return false;
		set({
			type: t.type,
			fields: {
				...defaultFields(t.type),
				...t.fields
			},
			design: { ...t.design },
			isDynamic: false,
			editingId: null,
			shortCode: null
		});
		return true;
	},
	loadSaved: (input) => set({
		editingId: input.id,
		shortCode: input.shortCode ?? null,
		type: input.type,
		name: input.name,
		isDynamic: input.isDynamic,
		fields: input.fields,
		design: input.design
	}),
	reset: () => set({
		type: "url",
		name: "",
		isDynamic: false,
		fields: defaultFields("url"),
		design: { ...DEFAULT_DESIGN },
		editingId: null,
		shortCode: null
	})
}));
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-border transition-colors", "data-[state=checked]:bg-primary data-[state=unchecked]:bg-bg-subtle", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 translate-x-0.5 rounded-full bg-fg transition-transform data-[state=checked]:translate-x-[22px] data-[state=checked]:bg-primary-fg" })
	});
}
function Color({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center justify-between gap-3 rounded-xl bg-bg-subtle px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11px] text-subtle",
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "color",
				value,
				onChange: (e) => onChange(e.target.value),
				className: "size-8 cursor-pointer rounded-md border border-border bg-transparent"
			})]
		})]
	});
}
function Lockable({ locked, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", locked && "opacity-70"),
		children: [children, locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute top-0 right-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3 text-muted" })
		})]
	});
}
var DOT_LABEL = {
	square: "square",
	rounded: "rounded",
	dots: "dotsStyle",
	classy: "classy",
	"extra-rounded": "extra"
};
var EYE_LABEL = {
	square: "square",
	rounded: "rounded",
	dots: "dotsStyle",
	leaf: "leaf",
	"extra-rounded": "extra"
};
var FRAME_LABEL = {
	none: "none",
	quiet: "quiet",
	banner: "banner",
	scanme: "scanme",
	ticket: "ticket"
};
function Designer({ canPro, onLocked }) {
	const { t } = useI18n();
	const design = useGenerator((s) => s.design);
	const setDesign = useGenerator((s) => s.setDesign);
	const gate = (ok, patch) => {
		if (!ok) {
			onLocked();
			return;
		}
		setDesign(patch);
	};
	const readFile = (file, key) => {
		if (!canPro) {
			onLocked();
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === "string") setDesign({ [key]: reader.result });
		};
		reader.readAsDataURL(file);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
				children: t.design.colors
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Color, {
						label: t.design.foreground,
						value: design.fg,
						onChange: (fg) => setDesign({
							fg,
							...design.eyeColorMatch ? { eyeColor: fg } : {}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Color, {
						label: t.design.background,
						value: design.bg,
						onChange: (bg) => setDesign({ bg })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lockable, {
						locked: !canPro,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center justify-between gap-3 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: t.design.transparent
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: design.transparent,
								onCheckedChange: (v) => gate(canPro, { transparent: v })
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lockable, {
						locked: !canPro,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center justify-between gap-3 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: t.design.gradient
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: design.gradientEnabled,
								onCheckedChange: (v) => gate(canPro, { gradientEnabled: v })
							})]
						})
					}),
					design.gradientEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Color, {
							label: "A",
							value: design.gradientFrom,
							onChange: (gradientFrom) => setDesign({ gradientFrom })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Color, {
							label: "B",
							value: design.gradientTo,
							onChange: (gradientTo) => setDesign({ gradientTo })
						})]
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
				children: t.design.dots
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-5 gap-1.5",
				children: DOT_STYLES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDesign({ dotStyle: s }),
					className: cn("h-10 rounded-lg border text-[10px]", design.dotStyle === s ? "border-primary/50 bg-primary/10 text-primary" : "border-border text-muted"),
					children: t.design[DOT_LABEL[s]]
				}, s))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
				children: t.design.eyes
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-5 gap-1.5",
				children: EYE_STYLES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDesign({ eyeStyle: s }),
					className: cn("h-10 rounded-lg border text-[10px]", design.eyeStyle === s ? "border-primary/50 bg-primary/10 text-primary" : "border-border text-muted"),
					children: t.design[EYE_LABEL[s]]
				}, s))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lockable, {
				locked: !canPro,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
						children: t.design.logo
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border text-xs text-muted hover:text-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }),
							"PNG / SVG",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*",
								className: "hidden",
								onChange: (e) => {
									const file = e.target.files?.[0];
									if (file) readFile(file, "logoDataUrl");
								}
							})
						]
					}),
					design.logoDataUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-2 text-xs text-muted underline",
						onClick: () => setDesign({ logoDataUrl: null }),
						children: t.design.none
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
					children: t.design.frame
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-5 gap-1.5",
					children: FRAME_STYLES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => gate(s === "none" || canPro, { frame: s }),
						className: cn("h-10 rounded-lg border text-[10px]", design.frame === s ? "border-primary/50 bg-primary/10 text-primary" : "border-border text-muted"),
						children: t.design[FRAME_LABEL[s]]
					}, s))
				}),
				design.frame !== "none" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Color, {
						label: t.design.frame,
						value: design.frameColor,
						onChange: (frameColor) => setDesign({ frameColor })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "frameText",
							children: t.design.scanText
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "frameText",
							value: design.frameText,
							maxLength: 16,
							onChange: (e) => setDesign({ frameText: e.target.value })
						})]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Lockable, {
				locked: !canPro,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-medium tracking-wide text-muted uppercase",
					children: t.design.bgImage
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border text-xs text-muted hover:text-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }),
						"JPG / PNG",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "image/*",
							className: "hidden",
							onChange: (e) => {
								const file = e.target.files?.[0];
								if (file) readFile(file, "backgroundImage");
							}
						})
					]
				})]
			})
		]
	});
}
function blobToDataUrl(blob) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result));
		reader.onerror = () => reject(/* @__PURE__ */ new Error("read failed"));
		reader.readAsDataURL(blob);
	});
}
function ExportBar({ value, design, name, plan, onLocked, pngSize, printPdf = false }) {
	const { t } = useI18n();
	const limits = PLAN_LIMITS[plan];
	const branded = limits.branded;
	const fileBase = (name || "nibras-qr").replace(/[^\w-]+/g, "-").slice(0, 40);
	const svg = () => renderQrSvg(value, design, { branded });
	const exportPng = async (jpeg = false) => {
		const px = limits.hq ? pngSize ?? 2048 : 640;
		downloadBlob(await svgToPng(svg(), px, jpeg), `${fileBase}.${jpeg ? "jpg" : "png"}`);
	};
	const exportSvg = () => {
		if (!limits.svg) return onLocked();
		downloadBlob(new Blob([svg()], { type: "image/svg+xml" }), `${fileBase}.svg`);
	};
	const exportPdf = async () => {
		if (!limits.pdf) return onLocked();
		const dataUrl = await blobToDataUrl(await svgToPng(svg(), limits.hq ? Math.max(1600, pngSize ?? 0) : 1600));
		const { jsPDF } = await import("../_libs/jspdf.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
		const doc = new jsPDF({
			orientation: "portrait",
			unit: "pt",
			format: "a4"
		});
		const w = 360;
		const x = 235.27999999999997 / 2;
		const y = 140;
		if (!printPdf) {
			doc.setFillColor(9, 10, 12);
			doc.rect(0, 0, 595.28, 841.89, "F");
		}
		doc.addImage(dataUrl, "PNG", x, y, w, w);
		if (printPdf) doc.setTextColor(20, 20, 20);
		else doc.setTextColor(238, 241, 244);
		doc.setFontSize(11);
		doc.text(name || "Nibras QR", 297.64, 528, { align: "center" });
		downloadBlob(doc.output("blob"), `${fileBase}.pdf`);
	};
	const copy = async () => {
		const blob = await svgToPng(svg(), 1024);
		try {
			await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
			toast.success(t.export.copied);
		} catch {
			await navigator.clipboard.writeText(value);
			toast.success(t.export.copied);
		}
	};
	const share = async () => {
		const blob = await svgToPng(svg(), 1024);
		const file = new File([blob], `${fileBase}.png`, { type: "image/png" });
		if (navigator.share && navigator.canShare?.({ files: [file] })) {
			await navigator.share({
				files: [file],
				title: name || "QR"
			});
			return;
		}
		await copy();
	};
	const btn = "h-10 w-full min-w-0 gap-1.5 px-2 text-xs [&_svg]:size-3.5";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-3 gap-2",
		"data-testid": "qr-export",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "secondary",
				className: btn,
				onClick: () => void exportPng(false),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}),
					" ",
					t.export.png
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				className: btn,
				onClick: () => void exportPng(true),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}),
					" ",
					t.export.jpg
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				className: btn,
				onClick: exportSvg,
				children: [
					limits.svg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {}),
					" ",
					t.export.svg
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				className: btn,
				onClick: () => void exportPdf(),
				children: [
					limits.pdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {}),
					" ",
					t.export.pdf
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				className: btn,
				onClick: () => void copy(),
				"aria-label": t.export.copy,
				title: t.export.copy,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: t.export.copy
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				className: btn,
				onClick: () => void share(),
				"aria-label": t.export.share,
				title: t.export.share,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: t.export.share
					})
				]
			})
		]
	});
}
function QrPreview({ value, design, branded, className }) {
	const svg = (0, import_react.useMemo)(() => renderQrSvg(value, design, { branded }), [
		value,
		design,
		branded
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("w-full overflow-hidden rounded-2xl bg-paper p-3 shadow-[var(--shadow-border)]", design.transparent && "bg-[repeating-conic-gradient(#d4d0c8_0_25%,#efece4_0_50%)] bg-[size:18px_18px]", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full [&_svg]:block [&_svg]:h-auto [&_svg]:w-full",
			dangerouslySetInnerHTML: { __html: svg }
		})
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm text-fg placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70", className),
		...props
	});
}
var ICONS = {
	url: Globe,
	text: Type,
	phone: Phone,
	email: Mail,
	whatsapp: MessageCircle,
	wifi: Wifi,
	vcard: Contact,
	location: MapPin,
	sms: MessageSquare,
	event: Calendar,
	app: AppWindow
};
function Field({ id, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			children: label
		}), children]
	});
}
function TypePicker() {
	const { t } = useI18n();
	const type = useGenerator((s) => s.type);
	const setType = useGenerator((s) => s.setType);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6",
		children: QR_TYPES.map((id) => {
			const Icon = ICONS[id];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setType(id),
				className: cn("flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-2 text-xs transition-colors", type === id ? "border-primary/40 bg-primary/10 text-primary" : "border-border bg-bg-elevated text-muted hover:text-fg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), t.types[id]]
			}, id);
		})
	});
}
function TypeForm() {
	const { t } = useI18n();
	const type = useGenerator((s) => s.type);
	const fields = useGenerator((s) => s.fields);
	const setField = useGenerator((s) => s.setField);
	const f = (key, props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		id: key,
		label: t.fields[key] ?? key,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id: key,
			value: fields[key] ?? "",
			onChange: (e) => setField(key, e.target.value),
			...props
		})
	});
	switch (type) {
		case "url": return f("url", {
			placeholder: "https://",
			inputMode: "url"
		});
		case "text": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			id: "text",
			label: t.fields.text,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				id: "text",
				value: fields.text ?? "",
				onChange: (e) => setField("text", e.target.value),
				rows: 5
			})
		});
		case "phone": return f("phone", {
			inputMode: "tel",
			placeholder: "+994"
		});
		case "email": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				f("email", { type: "email" }),
				f("subject"),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "body",
					label: t.fields.body,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "body",
						value: fields.body ?? "",
						onChange: (e) => setField("body", e.target.value)
					})
				})
			]
		});
		case "whatsapp": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [f("phone", {
				inputMode: "tel",
				placeholder: "99450..."
			}), f("text")]
		});
		case "wifi": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				f("ssid"),
				f("password", { type: "text" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "encryption",
					label: t.fields.encryption,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "encryption",
						value: fields.encryption ?? "WPA",
						onChange: (e) => setField("encryption", e.target.value),
						className: "h-11 w-full rounded-lg border border-border bg-bg-elevated px-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "WPA",
								children: "WPA/WPA2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "WEP",
								children: "WEP"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "nopass",
								children: "Open"
							})
						]
					})
				})
			]
		});
		case "vcard": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [
				f("firstName"),
				f("lastName"),
				f("org"),
				f("title"),
				f("phone", { inputMode: "tel" }),
				f("email", { type: "email" }),
				f("url", { inputMode: "url" }),
				f("city")
			]
		});
		case "location": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [
				f("lat", { placeholder: "40.4093" }),
				f("lng", { placeholder: "49.8671" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sm:col-span-2",
					children: f("query")
				})
			]
		});
		case "sms": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [f("phone", { inputMode: "tel" }), f("text")]
		});
		case "event": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				f("title"),
				f("start", { type: "datetime-local" }),
				f("end", { type: "datetime-local" }),
				f("location"),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "description",
					label: t.fields.description,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "description",
						value: fields.description ?? "",
						onChange: (e) => setField("description", e.target.value)
					})
				})
			]
		});
		case "app": return f("url", { placeholder: "https://apps.apple.com/..." });
		default: return null;
	}
}
/** Same free vs Pro limits as the app. */
var LIMITS = {
	free: {
		saved: 3,
		history: 50
	},
	pro: {
		saved: 5e3,
		history: 5e3
	}
};
var CODES_KEY = "nibras-qr.saved.v1";
function read() {
	try {
		const raw = localStorage.getItem(CODES_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function listCodes() {
	return read().sort((a, b) => b.updatedAt - a.updatedAt);
}
/** Insert or update. Returns "limit" when a new code would exceed the plan limit. */
function upsertCode(code, max) {
	const all = read();
	const i = all.findIndex((c) => c.id === code.id);
	if (i >= 0) all[i] = code;
	else {
		if (all.length >= max) return "limit";
		all.push(code);
	}
	localStorage.setItem(CODES_KEY, JSON.stringify(all));
	return "ok";
}
function deleteCode(id) {
	localStorage.setItem(CODES_KEY, JSON.stringify(read().filter((c) => c.id !== id)));
}
function newLocalId() {
	return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}
var PACKS = [
	{
		id: "basic",
		pro: false,
		emoji: "✨",
		name: {
			en: "Basic",
			az: "Əsas",
			ar: "أساسي",
			ru: "Базовые",
			tr: "Temel"
		}
	},
	{
		id: "business",
		pro: true,
		emoji: "💼",
		name: {
			en: "Business",
			az: "Biznes",
			ar: "أعمال",
			ru: "Бизнес",
			tr: "İş"
		}
	},
	{
		id: "restaurant",
		pro: true,
		emoji: "🍽️",
		name: {
			en: "Restaurant",
			az: "Restoran",
			ar: "مطعم",
			ru: "Ресторан",
			tr: "Restoran"
		}
	},
	{
		id: "event",
		pro: true,
		emoji: "🎟️",
		name: {
			en: "Event",
			az: "Tədbir",
			ar: "فعالية",
			ru: "События",
			tr: "Etkinlik"
		}
	},
	{
		id: "social",
		pro: true,
		emoji: "📣",
		name: {
			en: "Social",
			az: "Sosial",
			ar: "تواصل",
			ru: "Соцсети",
			tr: "Sosyal"
		}
	}
];
var d = (p) => ({
	...DEFAULT_DESIGN,
	...p
});
var grad = (from, to, extra = {}) => d({
	gradientEnabled: true,
	gradientFrom: from,
	gradientTo: to,
	fg: to,
	...extra
});
var MOBILE_TEMPLATES = [
	{
		id: "b-wifi",
		pack: "basic",
		type: "wifi",
		name: {
			en: "Wi-Fi",
			az: "Wi-Fi",
			ar: "واي فاي",
			ru: "Wi-Fi",
			tr: "Wi-Fi"
		},
		fields: {
			ssid: "",
			password: "",
			encryption: "WPA",
			hidden: "false"
		},
		design: d({
			fg: "#0f766e",
			dotStyle: "rounded"
		})
	},
	{
		id: "b-link",
		pack: "basic",
		type: "url",
		name: {
			en: "Link",
			az: "Link",
			ar: "رابط",
			ru: "Ссылка",
			tr: "Link"
		},
		fields: { url: "https://" },
		design: d({ fg: "#1e293b" })
	},
	{
		id: "b-whatsapp",
		pack: "basic",
		type: "whatsapp",
		name: {
			en: "WhatsApp",
			az: "WhatsApp",
			ar: "واتساب",
			ru: "WhatsApp",
			tr: "WhatsApp"
		},
		fields: {
			phone: "",
			text: ""
		},
		design: d({
			fg: "#15803d",
			dotStyle: "rounded"
		})
	},
	{
		id: "b-contact",
		pack: "basic",
		type: "vcard",
		name: {
			en: "Contact",
			az: "Kontakt",
			ar: "جهة اتصال",
			ru: "Контакт",
			tr: "Kişi"
		},
		fields: {},
		design: d({ fg: "#1e3a8a" })
	},
	{
		id: "biz-card",
		pack: "business",
		type: "vcard",
		name: {
			en: "Business card",
			az: "Vizit kartı",
			ar: "بطاقة عمل",
			ru: "Визитка",
			tr: "Kartvizit"
		},
		fields: {},
		design: grad("#0f172a", "#334155", {
			bg: "#f8fafc",
			dotStyle: "classy",
			eyeStyle: "extra-rounded",
			frame: "quiet",
			frameColor: "#0f172a"
		})
	},
	{
		id: "biz-review",
		pack: "business",
		type: "url",
		name: {
			en: "Leave a review",
			az: "Rəy bildir",
			ar: "قيّمنا",
			ru: "Отзыв",
			tr: "Yorum yap"
		},
		fields: { url: "https://g.page/r/" },
		design: grad("#f59e0b", "#b45309", {
			dotStyle: "dots",
			eyeStyle: "rounded",
			frame: "scanme",
			frameColor: "#b45309",
			frameText: "★ REVIEW"
		})
	},
	{
		id: "biz-pay",
		pack: "business",
		type: "url",
		name: {
			en: "Payment",
			az: "Ödəniş",
			ar: "الدفع",
			ru: "Оплата",
			tr: "Ödeme"
		},
		fields: { url: "https://" },
		design: grad("#059669", "#064e3b", {
			bg: "#ecfdf5",
			dotStyle: "extra-rounded",
			eyeStyle: "leaf",
			frame: "banner",
			frameColor: "#064e3b",
			frameText: "PAY"
		})
	},
	{
		id: "biz-linkedin",
		pack: "business",
		type: "url",
		name: {
			en: "LinkedIn",
			az: "LinkedIn",
			ar: "لينكدإن",
			ru: "LinkedIn",
			tr: "LinkedIn"
		},
		fields: { url: "https://linkedin.com/in/" },
		design: d({
			fg: "#0a66c2",
			eyeColorMatch: false,
			eyeColor: "#004182",
			dotStyle: "rounded",
			eyeStyle: "rounded",
			frame: "scanme",
			frameColor: "#0a66c2",
			frameText: "CONNECT"
		})
	},
	{
		id: "rest-menu",
		pack: "restaurant",
		type: "url",
		name: {
			en: "Menu",
			az: "Menyu",
			ar: "القائمة",
			ru: "Меню",
			tr: "Menü"
		},
		fields: { url: "https://" },
		design: grad("#ea580c", "#7c2d12", {
			bg: "#fff7ed",
			dotStyle: "extra-rounded",
			eyeStyle: "leaf",
			frame: "banner",
			frameColor: "#9a3412",
			frameText: "MENU"
		})
	},
	{
		id: "rest-wifi",
		pack: "restaurant",
		type: "wifi",
		name: {
			en: "Guest Wi-Fi",
			az: "Qonaq Wi-Fi",
			ar: "واي فاي الضيوف",
			ru: "Гостевой Wi-Fi",
			tr: "Misafir Wi-Fi"
		},
		fields: {
			ssid: "",
			password: "",
			encryption: "WPA",
			hidden: "false"
		},
		design: d({
			fg: "#7c2d12",
			bg: "#fffbeb",
			dotStyle: "dots",
			eyeStyle: "rounded",
			frame: "scanme",
			frameColor: "#7c2d12",
			frameText: "FREE WI-FI"
		})
	},
	{
		id: "rest-order",
		pack: "restaurant",
		type: "whatsapp",
		name: {
			en: "Order",
			az: "Sifariş",
			ar: "اطلب",
			ru: "Заказ",
			tr: "Sipariş"
		},
		fields: {
			phone: "",
			text: ""
		},
		design: grad("#22c55e", "#14532d", {
			bg: "#f0fdf4",
			dotStyle: "rounded",
			eyeStyle: "extra-rounded",
			frame: "ticket",
			frameColor: "#166534",
			frameText: "ORDER"
		})
	},
	{
		id: "ev-invite",
		pack: "event",
		type: "event",
		name: {
			en: "Invitation",
			az: "Dəvətnamə",
			ar: "دعوة",
			ru: "Приглашение",
			tr: "Davetiye"
		},
		fields: {},
		design: grad("#a855f7", "#4c1d95", {
			bg: "#faf5ff",
			dotStyle: "classy",
			eyeStyle: "leaf",
			frame: "ticket",
			frameColor: "#4c1d95",
			frameText: "RSVP"
		})
	},
	{
		id: "ev-ticket",
		pack: "event",
		type: "text",
		name: {
			en: "Ticket",
			az: "Bilet",
			ar: "تذكرة",
			ru: "Билет",
			tr: "Bilet"
		},
		fields: { text: "TICKET-0001" },
		design: d({
			fg: "#111827",
			bg: "#f5f5f4",
			eyeStyle: "leaf",
			frame: "ticket",
			frameColor: "#1c1917",
			frameText: "ADMIT ONE"
		})
	},
	{
		id: "ev-wedding",
		pack: "event",
		type: "url",
		name: {
			en: "Wedding",
			az: "Toy",
			ar: "زفاف",
			ru: "Свадьба",
			tr: "Düğün"
		},
		fields: { url: "https://" },
		design: grad("#f472b6", "#9d174d", {
			bg: "#fdf2f8",
			dotStyle: "dots",
			eyeStyle: "extra-rounded",
			frame: "quiet",
			frameColor: "#9d174d",
			frameText: "♥"
		})
	},
	{
		id: "so-instagram",
		pack: "social",
		type: "url",
		name: {
			en: "Instagram",
			az: "Instagram",
			ar: "إنستغرام",
			ru: "Instagram",
			tr: "Instagram"
		},
		fields: { url: "https://instagram.com/" },
		design: grad("#f59e0b", "#c026d3", {
			dotStyle: "dots",
			eyeStyle: "extra-rounded",
			frame: "scanme",
			frameColor: "#c026d3",
			frameText: "FOLLOW"
		})
	},
	{
		id: "so-tiktok",
		pack: "social",
		type: "url",
		name: {
			en: "TikTok",
			az: "TikTok",
			ar: "تيك توك",
			ru: "TikTok",
			tr: "TikTok"
		},
		fields: { url: "https://tiktok.com/@" },
		design: d({
			fg: "#010101",
			eyeColorMatch: false,
			eyeColor: "#fe2c55",
			dotStyle: "rounded",
			eyeStyle: "rounded",
			frame: "banner",
			frameColor: "#010101",
			frameText: "TIKTOK"
		})
	},
	{
		id: "so-youtube",
		pack: "social",
		type: "url",
		name: {
			en: "YouTube",
			az: "YouTube",
			ar: "يوتيوب",
			ru: "YouTube",
			tr: "YouTube"
		},
		fields: { url: "https://youtube.com/@" },
		design: d({
			fg: "#b91c1c",
			dotStyle: "extra-rounded",
			eyeStyle: "rounded",
			frame: "scanme",
			frameColor: "#dc2626",
			frameText: "SUBSCRIBE"
		})
	},
	{
		id: "so-telegram",
		pack: "social",
		type: "url",
		name: {
			en: "Telegram",
			az: "Telegram",
			ar: "تيليجرام",
			ru: "Telegram",
			tr: "Telegram"
		},
		fields: { url: "https://t.me/" },
		design: grad("#38bdf8", "#0369a1", {
			dotStyle: "rounded",
			eyeStyle: "leaf",
			frame: "quiet",
			frameColor: "#0369a1",
			frameText: "JOIN"
		})
	}
];
function templateFields(t) {
	return {
		...defaultFields(t.type),
		...t.fields
	};
}
function Templates({ pro, onUse }) {
	const { t, lang } = useI18n();
	const showLock = useLock((s) => s.show);
	const [pack, setPack] = (0, import_react.useState)("basic");
	const locked = PACKS.find((p) => p.id === pack).pro && !pro;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: t.templates.body
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: PACKS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setPack(p.id),
				className: cn("flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors", pack === p.id ? "bg-primary text-primary-fg" : "bg-bg-elevated shadow-[var(--shadow-border)] hover:bg-bg-subtle"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.emoji }),
					p.name[lang],
					p.pro && !pro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProBadge, { className: "px-1.5" })
				]
			}, p.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
			children: MOBILE_TEMPLATES.filter((x) => x.pack === pack).map((tpl) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "relative flex flex-col rounded-2xl bg-bg-elevated p-3 text-start shadow-[var(--shadow-border)] transition-transform hover:-translate-y-0.5",
				onClick: () => {
					if (locked) return showLock();
					useGenerator.setState({
						type: tpl.type,
						fields: templateFields(tpl),
						design: { ...tpl.design },
						name: "",
						isDynamic: false,
						editingId: null,
						shortCode: null
					});
					onUse();
				},
				children: [
					locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProBadge, { className: "absolute end-2 top-2 z-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrPreview, {
						value: buildPayload(tpl.type, templateFields(tpl)) || "https://nibrascode.com",
						design: tpl.design
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 truncate text-sm font-semibold",
						children: tpl.name[lang]
					})
				]
			}, tpl.id))
		})
	] });
}
var Scanner = (0, import_react.lazy)(() => import("./scanner-D67ZSzfa.mjs").then((m) => ({ default: m.Scanner })));
var BarcodeScreen = (0, import_react.lazy)(() => import("./barcode-DAr-KEuK.mjs").then((m) => ({ default: m.BarcodeScreen })));
var TABS = [
	"create",
	"templates",
	"scan",
	"barcode",
	"saved"
];
function tabFromHash() {
	const h = window.location.hash.replace("#", "");
	return TABS.includes(h) ? h : "create";
}
function QrTool() {
	const { w } = useI18n();
	const pro = useQrAuth().pro;
	const [tab, setTabState] = (0, import_react.useState)("create");
	const [thanks, setThanks] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setTabState(tabFromHash());
		const on = () => setTabState(tabFromHash());
		window.addEventListener("hashchange", on);
		const purchased = new URLSearchParams(window.location.search).get("purchase") === "success";
		useQrAuth.getState().init().then(async () => {
			if (!purchased) return;
			setThanks(true);
			const u = new URL(window.location.href);
			u.searchParams.delete("purchase");
			window.history.replaceState(null, "", u.pathname + u.search + u.hash);
			for (let i = 0; i < 10; i++) {
				if (await useQrAuth.getState().refreshPro().catch(() => false)) return;
				await new Promise((r) => setTimeout(r, 3e3));
			}
		});
		return () => window.removeEventListener("hashchange", on);
	}, []);
	const setTab = (t) => {
		setTabState(t);
		window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${t}`);
	};
	const labels = {
		create: {
			label: w.tabCreate,
			icon: QrCode
		},
		templates: {
			label: w.tabTemplates,
			icon: LayoutGrid
		},
		scan: {
			label: w.tabScan,
			icon: ScanLine
		},
		barcode: {
			label: w.tabBarcode,
			icon: Barcode
		},
		saved: {
			label: w.tabSaved,
			icon: Bookmark
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "qr-tool",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-wrap gap-1.5",
					"aria-label": "Nibras QR",
					children: TABS.map((id) => {
						const { label, icon: Icon } = labels[id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"data-tab": id,
							onClick: () => setTab(id),
							"aria-current": tab === id ? "page" : void 0,
							className: cn("flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors", tab === id ? "bg-primary text-primary-fg" : "bg-bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }),
								" ",
								label,
								id === "barcode" && !pro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProBadge, { className: "px-1.5" })
							]
						}, id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountChip, {})]
			}),
			thanks && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-amber-400/15 to-fuchsia-500/15 p-4 text-sm",
				role: "status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: pro ? `${w.proActive} 🎉` : w.purchaseThanks
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-muted hover:text-fg",
					onClick: () => setThanks(false),
					"aria-label": "Close",
					children: "×"
				})]
			}),
			tab === "create" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePanel, { pro }),
			tab === "templates" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Templates, {
				pro,
				onUse: () => setTab("create")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-2xl bg-bg-elevated" }),
				children: [tab === "scan" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scanner, { pro }), tab === "barcode" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarcodeScreen, { pro })]
			}),
			tab === "saved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavedPanel, {
				pro,
				onEdit: () => setTab("create")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "top-center"
			})
		]
	});
}
function AccountChip() {
	const { w } = useI18n();
	const { ready, user, pro, busy, signIn, signOut } = useQrAuth();
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-9 w-32" });
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "sm",
			variant: "outline",
			disabled: busy,
			onClick: () => void signIn(),
			children: w.signIn
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			size: "sm",
			"data-testid": "qr-get-pro",
			onClick: () => useLock.getState().show(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-3.5" }), " Pro"]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-sm",
		children: [
			user.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.image,
				alt: "",
				className: "size-7 rounded-full",
				referrerPolicy: "no-referrer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "max-w-40 truncate text-muted",
				children: user.name ?? user.email
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("rounded-full px-2 py-0.5 text-xs font-semibold", pro ? "bg-gradient-to-r from-amber-400 to-fuchsia-500 text-white" : "bg-bg-subtle text-muted"),
				children: pro ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "me-1 inline size-3" }), w.proActive] }) : w.freePlan
			}),
			!pro && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				"data-testid": "qr-get-pro",
				onClick: () => useLock.getState().show(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "size-3.5" }), " Pro"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				"aria-label": w.signOut,
				disabled: busy,
				onClick: () => void signOut(),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {})
			})
		]
	});
}
function CreatePanel({ pro }) {
	const { t, m } = useI18n();
	const gen = useGenerator();
	const showLock = useLock((s) => s.show);
	const plan = pro ? "premium" : "free";
	const limits = PLAN_LIMITS[plan];
	const payload = (0, import_react.useMemo)(() => buildPayload(gen.type, gen.fields), [gen.type, gen.fields]);
	const name = gen.name.trim() || defaultName(gen.type, gen.fields);
	(0, import_react.useEffect)(() => {
		const params = new URLSearchParams(window.location.search);
		const text = params.get("text") || params.get("url") || "";
		const type = params.get("type");
		if (!text && !type) return;
		const nextType = type && [
			"url",
			"text",
			"phone",
			"email",
			"whatsapp",
			"wifi",
			"vcard",
			"location",
			"sms",
			"event",
			"app"
		].includes(type) ? type : /^https?:\/\//i.test(text) ? "url" : "text";
		const fields = { ...defaultFields(nextType) };
		let fromFields = false;
		for (const key of Object.keys(fields)) {
			const value = params.get(key);
			if (value) {
				fields[key] = value;
				fromFields = true;
			}
		}
		if (!fromFields && text) {
			if (nextType === "url") fields.url = text;
			else if (nextType === "phone" || nextType === "whatsapp" || nextType === "sms") fields.phone = text;
			else if (nextType === "email") fields.email = text;
			else if (nextType === "wifi") fields.ssid = text;
			else if (nextType === "app") fields.url = text;
			else fields.text = text;
		}
		useGenerator.getState().setType(nextType);
		useGenerator.getState().setFields(fields);
	}, []);
	const onSave = () => {
		if (!payload) return toast.error(t.create.empty);
		const now = Date.now();
		const id = gen.editingId ?? newLocalId();
		const prev = listCodes().find((c) => c.id === id);
		if (upsertCode({
			id,
			name,
			type: gen.type,
			fields: gen.fields,
			design: gen.design,
			value: payload,
			createdAt: prev?.createdAt ?? now,
			updatedAt: now
		}, pro ? LIMITS.pro.saved : LIMITS.free.saved) === "limit") {
			toast.error(m.limitReached.replace("{n}", String(LIMITS.free.saved)));
			return showLock();
		}
		useGenerator.setState({ editingId: id });
		toast.success(t.create.saved);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypePicker, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_19rem_17rem]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-4 rounded-2xl bg-bg-elevated p-4 shadow-[var(--shadow-border)] md:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeForm, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "qr-name",
							children: t.fields.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "qr-name",
							value: gen.name,
							onChange: (e) => gen.setName(e.target.value),
							placeholder: defaultName(gen.type, gen.fields)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: showLock,
						className: "flex w-full items-center justify-between gap-3 rounded-xl bg-bg-subtle px-3 py-3 text-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-medium",
							children: m.dynamic
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted",
							children: m.dynamicHint
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProBadge, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: onSave,
						"data-testid": "qr-save",
						children: gen.editingId ? t.create.update : t.create.save
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-border/60 bg-bg-elevated p-4 shadow-[var(--shadow-border)] lg:sticky lg:top-24 lg:self-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"data-testid": "qr-preview",
					className: "mx-auto w-full max-w-[220px] lg:max-w-[272px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrPreview, {
						value: payload || "https://nibrascode.com",
						design: gen.design,
						branded: limits.branded,
						className: cn("rounded-xl p-2 shadow-[0_1px_3px_rgb(0_0_0/0.12)] [&_svg]:rounded-md", !gen.design.transparent && "bg-white")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-4 w-full max-w-[320px] lg:max-w-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportBar, {
						value: payload || "https://nibrascode.com",
						design: gen.design,
						name,
						plan,
						onLocked: showLock
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl bg-bg-elevated p-4 shadow-[var(--shadow-border)] md:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 font-display text-sm font-semibold",
					children: t.design.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Designer, {
					canPro: limits.designPro,
					onLocked: showLock
				})]
			})
		]
	})] });
}
function SavedPanel({ pro, onEdit }) {
	const { w, m, t } = useI18n();
	const [codes, setCodes] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => setCodes(listCodes()), []);
	const max = pro ? LIMITS.pro.saved : LIMITS.free.saved;
	if (!codes.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-2xl bg-bg-elevated p-6 text-sm text-muted shadow-[var(--shadow-border)]",
		children: m.savedEmpty
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mb-3 text-xs text-subtle",
		children: [
			w.localNote,
			" ",
			!pro && `${codes.length}/${max}`
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
		children: codes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-bg-elevated p-3 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrPreview, {
					value: c.value,
					design: c.design
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 truncate text-sm font-semibold",
					children: c.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle",
					children: t.types[c.type]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						className: "flex-1",
						onClick: () => {
							useGenerator.getState().loadSaved({
								id: c.id,
								type: c.type,
								name: c.name,
								isDynamic: false,
								fields: c.fields,
								design: c.design
							});
							onEdit();
						},
						children: w.edit
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						"aria-label": t.dash.delete,
						onClick: () => {
							if (!window.confirm(m.confirmDelete)) return;
							deleteCode(c.id);
							setCodes(listCodes());
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {})
					})]
				})
			]
		}, c.id))
	})] });
}
//#endregion
export { QrTool, Input as a, downloadBlob as c, Label as i, ProBadge as n, Button as o, useLock as r, cn as s, LIMITS as t };
