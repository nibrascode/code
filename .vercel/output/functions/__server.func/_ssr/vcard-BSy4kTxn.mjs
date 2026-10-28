import { o as __toESM } from "../_runtime.mjs";
import { i as localeHref } from "./locale-path-fYvKyZ8f.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { Cn as ui, Sn as save, bn as KitShell } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vcard-BSy4kTxn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var T = {
	az: {
		first: "Ad",
		last: "Soyad",
		phone: "Telefon",
		phone2: "İkinci telefon",
		email: "Email",
		org: "Şirkət",
		job: "Vəzifə",
		site: "Sayt",
		addr: "Ünvan",
		note: "Qeyd",
		png: "PNG yüklə",
		svg: "SVG yüklə",
		vcf: ".vcf fayl yüklə",
		need: "Ən azı ad və ya telefon yazın.",
		more: "Loqo, rəng və çərçivə üçün Nibras QR",
		app: "Nibras QR Android tətbiqi",
		long: "Məlumat çoxdur: QR sıxlaşır. Qeydi qısaldın."
	},
	en: {
		first: "First name",
		last: "Last name",
		phone: "Phone",
		phone2: "Second phone",
		email: "Email",
		org: "Company",
		job: "Job title",
		site: "Website",
		addr: "Address",
		note: "Note",
		png: "Download PNG",
		svg: "Download SVG",
		vcf: "Download .vcf file",
		need: "Enter at least a name or a phone.",
		more: "Logo, colors and frames in Nibras QR",
		app: "Nibras QR Android app",
		long: "Lots of data: the QR gets dense. Shorten the note."
	},
	tr: {
		first: "Ad",
		last: "Soyad",
		phone: "Telefon",
		phone2: "İkinci telefon",
		email: "E-posta",
		org: "Şirket",
		job: "Unvan",
		site: "Web sitesi",
		addr: "Adres",
		note: "Not",
		png: "PNG indir",
		svg: "SVG indir",
		vcf: ".vcf dosyası indir",
		need: "En az ad veya telefon yazın.",
		more: "Logo, renk ve çerçeve için Nibras QR",
		app: "Nibras QR Android uygulaması",
		long: "Veri çok: QR sıklaşır. Notu kısaltın."
	},
	ar: {
		first: "الاسم",
		last: "اسم العائلة",
		phone: "الهاتف",
		phone2: "هاتف ثانٍ",
		email: "البريد",
		org: "الشركة",
		job: "المسمى الوظيفي",
		site: "الموقع",
		addr: "العنوان",
		note: "ملاحظة",
		png: "تنزيل PNG",
		svg: "تنزيل SVG",
		vcf: "تنزيل ملف .vcf",
		need: "اكتب الاسم أو الهاتف على الأقل.",
		more: "الشعار والألوان والإطار في Nibras QR",
		app: "تطبيق Nibras QR لأندرويد",
		long: "البيانات كثيرة: يصبح الرمز كثيفاً. اختصر الملاحظة."
	},
	ru: {
		first: "Имя",
		last: "Фамилия",
		phone: "Телефон",
		phone2: "Второй телефон",
		email: "Email",
		org: "Компания",
		job: "Должность",
		site: "Сайт",
		addr: "Адрес",
		note: "Заметка",
		png: "Скачать PNG",
		svg: "Скачать SVG",
		vcf: "Скачать файл .vcf",
		need: "Укажите хотя бы имя или телефон.",
		more: "Логотип, цвета и рамка — в Nibras QR",
		app: "Android-приложение Nibras QR",
		long: "Много данных: QR становится плотным. Сократите заметку."
	}
};
var KEYS = [
	"first",
	"last",
	"phone",
	"phone2",
	"email",
	"org",
	"job",
	"site",
	"addr",
	"note"
];
var esc = (v) => v.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/([,;])/g, "\\$1");
function vcard(f) {
	const L = [
		"BEGIN:VCARD",
		"VERSION:3.0",
		`N:${esc(f.last)};${esc(f.first)};;;`,
		`FN:${esc(`${f.first} ${f.last}`.trim() || f.org)}`
	];
	if (f.org) L.push(`ORG:${esc(f.org)}`);
	if (f.job) L.push(`TITLE:${esc(f.job)}`);
	if (f.phone) L.push(`TEL;TYPE=CELL:${f.phone.replace(/[^\d+]/g, "")}`);
	if (f.phone2) L.push(`TEL;TYPE=WORK:${f.phone2.replace(/[^\d+]/g, "")}`);
	if (f.email) L.push(`EMAIL:${f.email.trim()}`);
	if (f.site) L.push(`URL:${f.site.trim()}`);
	if (f.addr) L.push(`ADR:;;${esc(f.addr)};;;;`);
	if (f.note) L.push(`NOTE:${esc(f.note)}`);
	L.push("END:VCARD");
	return L.join("\r\n");
}
function VcardPage() {
	const { lang } = useI18n();
	const t = T[lang] ?? T.en;
	const [f, setF] = (0, import_react.useState)(() => Object.fromEntries(KEYS.map((k) => [k, ""])));
	const [png, setPng] = (0, import_react.useState)("");
	const [svg, setSvg] = (0, import_react.useState)("");
	const text = Boolean(f.first.trim() || f.last.trim() || f.phone.trim() || f.org.trim()) ? vcard(f) : "";
	(0, import_react.useEffect)(() => {
		if (!text) {
			setPng("");
			setSvg("");
			return;
		}
		let stop = false;
		import("../_libs/qrcode.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then(async (mod) => {
			const QR = mod.default;
			const [p, s] = await Promise.all([QR.toDataURL(text, {
				margin: 2,
				width: 720,
				errorCorrectionLevel: "M"
			}), QR.toString(text, {
				type: "svg",
				margin: 2,
				errorCorrectionLevel: "M"
			})]);
			if (!stop) {
				setPng(p);
				setSvg(s);
			}
		}).catch(() => {
			if (!stop) setPng("");
		});
		return () => {
			stop = true;
		};
	}, [text]);
	const name = (`${f.first}-${f.last}`.replace(/^-|-$/g, "") || "contact").replace(/[^\p{L}\p{N}-]+/gu, "_");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KitShell, {
		path: "/vcard",
		lang,
		icon: "/apps/nibras-qr-v2.jpg",
		next: [
			"/qr",
			"/wifi",
			"/pdf/invoice"
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 md:grid-cols-[1fr_16rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: KEYS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: `text-sm ${k === "addr" || k === "note" ? "sm:col-span-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1 block text-muted",
						children: t[k]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: ui.field,
						type: k === "email" ? "email" : k.startsWith("phone") ? "tel" : k === "site" ? "url" : "text",
						value: f[k],
						onChange: (e) => setF((s) => ({
							...s,
							[k]: e.target.value
						})),
						"data-testid": `vc-${k}`
					})]
				}, k))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start gap-3",
				children: [
					png ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: png,
						alt: "",
						width: 240,
						height: 240,
						className: "rounded-2xl bg-white p-2",
						"data-testid": "vc-qr"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid size-60 place-items-center rounded-2xl border border-dashed border-white/20 p-4 text-center text-xs text-muted",
						children: t.need
					}),
					text.length > 600 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-amber-400",
						children: t.long
					}) : null,
					png ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: ui.primary,
							href: png,
							download: `${name}-qr.png`,
							children: t.png
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => save(`${name}-qr.svg`, new Blob([svg], { type: "image/svg+xml" })),
							children: t.svg
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: ui.btn,
							onClick: () => save(`${name}.vcf`, new Blob([text], { type: "text/vcard" })),
							children: t.vcf
						})
					] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-sm text-muted underline",
						href: localeHref(lang, "/qr"),
						children: t.more
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-sm text-muted underline",
						href: localeHref(lang, "/apps/nibras-qr"),
						children: t.app
					})
				]
			})]
		})
	});
}
//#endregion
export { VcardPage as t };
