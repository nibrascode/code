import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { Un as Download, V as Share2 } from "../_libs/lucide-react.mjs";
import { Yn as useI18n } from "./router-Da_pLWIk.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Input, c as downloadBlob, i as Label, n as ProBadge, o as Button, r as useLock, s as cn } from "./qr-tool-39Nm74y5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/barcode-DAr-KEuK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Pure helpers for barcodes and batch lists (unit-tested). */
var BARCODE_FORMATS = [
	"ean13",
	"upca",
	"code128",
	"datamatrix"
];
var BARCODE_LABEL = {
	ean13: "EAN-13",
	upca: "UPC-A",
	code128: "Code 128",
	datamatrix: "Data Matrix"
};
/** GS1 mod-10 check digit for the given digits (without check digit). */
function gs1Check(digits) {
	let sum = 0;
	for (let i = 0; i < digits.length; i++) {
		const d = Number(digits[digits.length - 1 - i]);
		sum += i % 2 === 0 ? d * 3 : d;
	}
	return (10 - sum % 10) % 10;
}
/** Normalise + validate. Returns the value to encode or null if invalid. */
function normalizeBarcode(format, raw) {
	const v = raw.trim();
	if (!v) return null;
	if (format === "ean13" || format === "upca") {
		const body = format === "ean13" ? 12 : 11;
		if (!/^\d+$/.test(v)) return null;
		if (v.length === body) return v + gs1Check(v);
		if (v.length === body + 1) return gs1Check(v.slice(0, body)) === Number(v[body]) ? v : null;
		return null;
	}
	if (format === "code128") return /^[\x20-\x7e]{1,80}$/.test(v) ? v : null;
	return v.length <= 1500 ? v : null;
}
var SAMPLE = {
	ean13: "400638133393",
	upca: "03600029145",
	code128: "NIBRAS-QR-001",
	datamatrix: "https://nibrascode.com"
};
/** Barcode generator (Pro, like the app). Free users see a live preview; export is locked. */
function BarcodeScreen({ pro: isPro }) {
	const { m } = useI18n();
	const showLock = useLock((s) => s.show);
	const [format, setFormat] = (0, import_react.useState)("ean13");
	const [text, setText] = (0, import_react.useState)(SAMPLE.ean13);
	const [bwip, setBwip] = (0, import_react.useState)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const value = normalizeBarcode(format, text);
	(0, import_react.useEffect)(() => {
		import("../_libs/bwip-js.mjs").then((n) => n.t).then(setBwip);
	}, []);
	const opts = (v, scale) => ({
		bcid: format,
		text: v,
		scale,
		includetext: format !== "datamatrix",
		textxalign: "center",
		backgroundcolor: "FFFFFF",
		paddingwidth: 10,
		paddingheight: 10,
		...format === "datamatrix" ? {} : { height: 18 }
	});
	(0, import_react.useEffect)(() => {
		if (!bwip || !canvasRef.current || !value) return;
		try {
			bwip.toCanvas(canvasRef.current, opts(value, 3));
		} catch {}
	}, [
		bwip,
		value,
		format
	]);
	const file = `barcode-${format}-${(value ?? "").replace(/[^\w-]+/g, "").slice(0, 24)}`;
	const exportPng = async () => {
		if (!bwip || !value) return;
		const c = document.createElement("canvas");
		bwip.toCanvas(c, opts(value, 10));
		const blob = await new Promise((r) => c.toBlob(r, "image/png"));
		if (blob) downloadBlob(blob, `${file}.png`);
	};
	const exportSvg = () => {
		if (!bwip || !value) return;
		downloadBlob(new Blob([bwip.toSVG(opts(value, 3))], { type: "image/svg+xml" }), `${file}.svg`);
	};
	const hints = {
		ean13: m.bcHintEan,
		upca: m.bcHintUpc,
		code128: m.bcHintCode128,
		datamatrix: m.bcHintDm
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-xl space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "flex items-center gap-2 font-display text-lg font-semibold",
			children: [
				m.bcTitle,
				" ",
				!isPro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProBadge, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2",
					children: BARCODE_FORMATS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setFormat(f);
							setText(SAMPLE[f]);
						},
						className: cn("rounded-xl px-3 py-2.5 text-sm font-medium", format === f ? "bg-primary text-primary-fg" : "bg-bg-elevated shadow-[var(--shadow-border)]"),
						children: BARCODE_LABEL[f]
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "bc-value",
							children: m.bcValue
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "bc-value",
							value: text,
							inputMode: format === "ean13" || format === "upca" ? "numeric" : "text",
							onChange: (e) => setText(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("text-xs", value ? "text-subtle" : "text-danger"),
							children: value ? hints[format] : m.bcInvalid
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid min-h-40 place-items-center rounded-2xl bg-white p-4",
					children: value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
						ref: canvasRef,
						className: "max-h-56 max-w-full"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-slate-500",
						children: m.bcInvalid
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "flex-1",
						disabled: !value || !bwip,
						onClick: () => isPro ? void exportPng().catch((e) => toast.error(String(e))) : showLock(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), " PNG"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "flex-1",
						disabled: !value || !bwip,
						onClick: () => isPro ? exportSvg() : showLock(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {}), " SVG"]
					})]
				})
			]
		})]
	});
}
//#endregion
export { BarcodeScreen };
