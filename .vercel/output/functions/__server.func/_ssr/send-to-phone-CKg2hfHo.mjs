import { o as __toESM } from "../_runtime.mjs";
import { i as localeHref } from "./locale-path-fYvKyZ8f.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { F as Smartphone, n as X } from "../_libs/lucide-react.mjs";
import { Xn as packLink } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/send-to-phone-CKg2hfHo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var T = {
	az: {
		send: "Telefona göndər",
		scan: "Telefonun kamerası ilə skan edin. Məlumat linkin içindədir, serverə yüklənmir.",
		big: "Fayl QR üçün böyükdür (təqribən 2 KB-a qədər mətn/qeyd sığır). Paylaş düyməsi ilə göndərin.",
		share: "Paylaş",
		close: "Bağla"
	},
	en: {
		send: "Send to phone",
		scan: "Scan with your phone camera. The data is inside the link and is not uploaded to a server.",
		big: "Too big for a QR (about 2 KB of text/notes fits). Use Share instead.",
		share: "Share",
		close: "Close"
	},
	tr: {
		send: "Telefona gönder",
		scan: "Telefon kamerasıyla tarayın. Veri bağlantının içindedir, sunucuya yüklenmez.",
		big: "QR için çok büyük (yaklaşık 2 KB metin/not sığar). Paylaş ile gönderin.",
		share: "Paylaş",
		close: "Kapat"
	},
	ar: {
		send: "أرسل إلى الهاتف",
		scan: "امسح بكاميرا الهاتف. البيانات داخل الرابط ولا تُرفع إلى خادم.",
		big: "الملف كبير على رمز QR (يتسع لنحو 2 KB من النص). استخدم المشاركة.",
		share: "مشاركة",
		close: "إغلاق"
	},
	ru: {
		send: "Отправить на телефон",
		scan: "Отсканируйте камерой телефона. Данные внутри ссылки и не загружаются на сервер.",
		big: "Слишком большой для QR (помещается ~2 КБ текста). Используйте «Поделиться».",
		share: "Поделиться",
		close: "Закрыть"
	}
};
/** «Telefona göndər» via Nibras QR: small notes/files ride in the link fragment; larger ones fall back to Web Share. */
function SendToPhone({ blob, name, className }) {
	const { lang } = useI18n();
	const t = T[lang] ?? T.en;
	const [state, setState] = (0, import_react.useState)(null);
	const go = async () => {
		const d = new Uint8Array(await blob.arrayBuffer());
		const link = d.length < 65536 ? packLink(location.origin, localeHref(lang, "/qr"), {
			n: name,
			t: blob.type,
			d
		}) : "";
		if (!link || link.length > 2300) return setState({ big: true });
		const QR = (await import("../_libs/qrcode.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()))).default;
		setState({
			link,
			png: await QR.toDataURL(link, {
				margin: 2,
				width: 320
			})
		});
	};
	const share = async () => {
		try {
			await navigator.share({
				files: [new File([blob], name, { type: blob.type })],
				title: name
			});
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className,
		onClick: () => void go(),
		"data-testid": "send-phone",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "me-1 inline size-4" }), t.send]
	}), state ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4",
		onClick: () => setState(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-2xl border border-border bg-bg-elevated p-4 text-center",
			onClick: (e) => e.stopPropagation(),
			"data-nosnippet": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between font-semibold",
				children: [t.send, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": t.close,
					onClick: () => setState(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), state.png ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: state.png,
				alt: "QR",
				width: 320,
				height: 320,
				className: "mx-auto rounded-lg bg-white",
				"data-testid": "send-phone-qr"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted",
				children: t.scan
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-amber-200",
				children: t.big
			}), typeof navigator !== "undefined" && "share" in navigator ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-3 rounded-xl border border-white/15 px-3 py-1.5 text-sm",
				onClick: () => void share(),
				children: t.share
			}) : null] })]
		})
	}) : null] });
}
//#endregion
export { SendToPhone as t };
