import { o as __toESM } from "../_runtime.mjs";
import { i as localeHref } from "./locale-path-fYvKyZ8f.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as SEARCH_FAQ, x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { t as NextLinks } from "./next-links-DdKXidFf.mjs";
import { Dn as PageAssistant, Zn as handOff } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/erase-page-Bp_FGA1k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COPY = {
	az: {
		drop: "Şəkli bura at, yapışdır (Ctrl+V) və ya seç",
		dropSub: "PNG, JPG, WebP. Bir neçə şəkil birdən.",
		run: "Fonu sil",
		working: "İşlənir…",
		ready: "Hazırdır.",
		empty: "Əvvəl şəkil seç",
		private: "Şəkil cihazda qalır. Hesab lazım deyil.",
		again: "Təmizlə",
		toCompress: "Həcmini kiçilt",
		toPdf: "PDF-ə əlavə et",
		download: "Yüklə",
		downloadAll: "Hamısını yüklə",
		copy: "Kopyala",
		copied: "Kopyalandı.",
		wait: "Dəqiq model yüklənir…",
		fail: "Fon silinmədi. Başqa şəkil yoxla.",
		tooBig: "Şəkil çox böyükdür (maks. 25 MB).",
		badType: "Yalnız PNG, JPG və ya WebP.",
		quality: "Keyfiyyət",
		qSmall: "Sürətli",
		qMedium: "Orta",
		qLarge: "Ən yaxşı",
		background: "Fon",
		clear: "Şəffaf",
		white: "Ağ",
		black: "Qara",
		color: "Rəng",
		gradient: "Gradient",
		blur: "Bulanıq",
		photo: "Şəkil",
		pickPhoto: "Fon şəkli seç",
		format: "Format",
		pad: "Boşluq",
		shadow: "Kölgə",
		size: "Ölçü",
		original: "Orijinal",
		aspect: "Nisbət",
		free: "Sərbəst",
		circle: "Dairə",
		flip: "Çevir",
		trim: "Kəs",
		hand: "Əl ilə",
		erase: "Sil",
		restore: "Qaytar",
		brush: "Fırça",
		edge: "Kənar",
		undo: "Geri",
		redo: "İrəli",
		hint: "Qalan fonu barmaq və ya siçanla sil. Səhv getsə, qaytar.",
		tabEdit: "Düzəlt",
		tabCompare: "Müqayisə",
		before: "Əvvəl",
		after: "Sonra",
		slider: "Əvvəl / sonra",
		queue: "Şəkillər",
		status_queued: "Növbədə",
		status_working: "İşlənir",
		status_done: "Hazır",
		status_error: "Xəta",
		remove: "Sil",
		panelLayout: "Düzən",
		panelExport: "İxrac",
		jpgQuality: "JPG/WebP keyfiyyəti"
	},
	en: {
		drop: "Drop a photo here, paste (Ctrl+V) or choose",
		dropSub: "PNG, JPG, WebP. Several photos at once.",
		run: "Remove background",
		working: "Working…",
		ready: "Done.",
		empty: "Choose a photo first",
		private: "The photo stays on your device. No account.",
		again: "Clear",
		toCompress: "Compress image",
		toPdf: "Add to PDF",
		download: "Download",
		downloadAll: "Download all",
		copy: "Copy",
		copied: "Copied.",
		wait: "Loading the precise model…",
		fail: "Could not remove the background. Try another photo.",
		tooBig: "The photo is too large (max 25 MB).",
		badType: "Only PNG, JPG or WebP.",
		quality: "Quality",
		qSmall: "Fast",
		qMedium: "Medium",
		qLarge: "Best",
		background: "Background",
		clear: "Clear",
		white: "White",
		black: "Black",
		color: "Color",
		gradient: "Gradient",
		blur: "Blur",
		photo: "Photo",
		pickPhoto: "Choose background photo",
		format: "Format",
		pad: "Padding",
		shadow: "Shadow",
		size: "Size",
		original: "Original",
		aspect: "Ratio",
		free: "Free",
		circle: "Circle",
		flip: "Flip",
		trim: "Trim",
		hand: "By hand",
		erase: "Erase",
		restore: "Restore",
		brush: "Brush",
		edge: "Edge",
		undo: "Undo",
		redo: "Redo",
		hint: "Paint away leftover background. Restore if you erase too much.",
		tabEdit: "Edit",
		tabCompare: "Compare",
		before: "Before",
		after: "After",
		slider: "Before / after",
		queue: "Photos",
		status_queued: "Queued",
		status_working: "Working",
		status_done: "Done",
		status_error: "Error",
		remove: "Remove",
		panelLayout: "Layout",
		panelExport: "Export",
		jpgQuality: "JPG/WebP quality"
	},
	tr: {
		drop: "Fotoğrafı buraya bırak, yapıştır (Ctrl+V) veya seç",
		dropSub: "PNG, JPG, WebP. Birden çok fotoğraf aynı anda.",
		run: "Arka planı sil",
		working: "İşleniyor…",
		ready: "Hazır.",
		empty: "Önce fotoğraf seç",
		private: "Fotoğraf cihazda kalır. Hesap gerekmez.",
		again: "Temizle",
		toCompress: "Boyutunu küçült",
		toPdf: "PDF'e ekle",
		download: "İndir",
		downloadAll: "Hepsini indir",
		copy: "Kopyala",
		copied: "Kopyalandı.",
		wait: "Hassas model yükleniyor…",
		fail: "Arka plan silinemedi. Başka fotoğraf dene.",
		tooBig: "Fotoğraf çok büyük (en fazla 25 MB).",
		badType: "Yalnızca PNG, JPG veya WebP.",
		quality: "Kalite",
		qSmall: "Hızlı",
		qMedium: "Orta",
		qLarge: "En iyi",
		background: "Arka plan",
		clear: "Şeffaf",
		white: "Beyaz",
		black: "Siyah",
		color: "Renk",
		gradient: "Gradyan",
		blur: "Bulanık",
		photo: "Foto",
		pickPhoto: "Arka plan fotoğrafı seç",
		format: "Biçim",
		pad: "Boşluk",
		shadow: "Gölge",
		size: "Boyut",
		original: "Orijinal",
		aspect: "Oran",
		free: "Serbest",
		circle: "Daire",
		flip: "Çevir",
		trim: "Kırp",
		hand: "Elle",
		erase: "Sil",
		restore: "Geri al",
		brush: "Fırça",
		edge: "Kenar",
		undo: "Geri",
		redo: "İleri",
		hint: "Kalan arka planı parmak veya fareyle sil. Fazla silersen geri al.",
		tabEdit: "Düzenle",
		tabCompare: "Karşılaştır",
		before: "Önce",
		after: "Sonra",
		slider: "Önce / sonra",
		queue: "Fotoğraflar",
		status_queued: "Sırada",
		status_working: "İşleniyor",
		status_done: "Hazır",
		status_error: "Hata",
		remove: "Kaldır",
		panelLayout: "Düzen",
		panelExport: "Dışa aktar",
		jpgQuality: "JPG/WebP kalitesi"
	},
	ar: {
		drop: "أفلت الصورة هنا أو الصقها (Ctrl+V) أو اخترها",
		dropSub: "PNG وJPG وWebP. عدة صور دفعة واحدة.",
		run: "أزل الخلفية",
		working: "جارٍ العمل…",
		ready: "تم.",
		empty: "اختر صورة أولاً",
		private: "الصورة تبقى على جهازك. بلا حساب.",
		again: "مسح",
		toCompress: "ضغط الصورة",
		toPdf: "أضف إلى PDF",
		download: "تنزيل",
		downloadAll: "تنزيل الكل",
		copy: "انسخ",
		copied: "تم النسخ.",
		wait: "يتم تحميل النموذج الأدق…",
		fail: "تعذّرت إزالة الخلفية. جرّب صورة أخرى.",
		tooBig: "الصورة كبيرة جداً (الحد 25 ميغابايت).",
		badType: "PNG أو JPG أو WebP فقط.",
		quality: "الجودة",
		qSmall: "سريع",
		qMedium: "متوسط",
		qLarge: "الأفضل",
		background: "الخلفية",
		clear: "شفاف",
		white: "أبيض",
		black: "أسود",
		color: "لون",
		gradient: "تدرّج",
		blur: "ضبابي",
		photo: "صورة",
		pickPhoto: "اختر صورة الخلفية",
		format: "الصيغة",
		pad: "هامش",
		shadow: "ظل",
		size: "الحجم",
		original: "الأصلي",
		aspect: "النسبة",
		free: "حرة",
		circle: "دائرة",
		flip: "اقلب",
		trim: "قص",
		hand: "باليد",
		erase: "امسح",
		restore: "أعد",
		brush: "الفرشاة",
		edge: "الحافة",
		undo: "تراجع",
		redo: "إعادة",
		hint: "امسح الخلفية المتبقية بإصبعك أو الفأرة. أعد ما مُسح بالخطأ.",
		tabEdit: "تعديل",
		tabCompare: "مقارنة",
		before: "قبل",
		after: "بعد",
		slider: "قبل / بعد",
		queue: "الصور",
		status_queued: "في الانتظار",
		status_working: "جارٍ",
		status_done: "جاهز",
		status_error: "خطأ",
		remove: "حذف",
		panelLayout: "التخطيط",
		panelExport: "التصدير",
		jpgQuality: "جودة JPG/WebP"
	},
	ru: {
		drop: "Перетащите фото, вставьте (Ctrl+V) или выберите",
		dropSub: "PNG, JPG, WebP. Несколько фото сразу.",
		run: "Удалить фон",
		working: "Обработка…",
		ready: "Готово.",
		empty: "Сначала выберите фото",
		private: "Фото остаётся на устройстве. Аккаунт не нужен.",
		again: "Очистить",
		toCompress: "Сжать фото",
		toPdf: "Добавить в PDF",
		download: "Скачать",
		downloadAll: "Скачать все",
		copy: "Копировать",
		copied: "Скопировано.",
		wait: "Загрузка точной модели…",
		fail: "Не удалось убрать фон. Попробуйте другое фото.",
		tooBig: "Фото слишком большое (макс. 25 МБ).",
		badType: "Только PNG, JPG или WebP.",
		quality: "Качество",
		qSmall: "Быстро",
		qMedium: "Средне",
		qLarge: "Лучшее",
		background: "Фон",
		clear: "Прозрачный",
		white: "Белый",
		black: "Чёрный",
		color: "Цвет",
		gradient: "Градиент",
		blur: "Размытие",
		photo: "Фото",
		pickPhoto: "Выбрать фото фона",
		format: "Формат",
		pad: "Отступ",
		shadow: "Тень",
		size: "Размер",
		original: "Оригинал",
		aspect: "Пропорции",
		free: "Свободно",
		circle: "Круг",
		flip: "Отразить",
		trim: "Обрезать",
		hand: "Вручную",
		erase: "Стереть",
		restore: "Вернуть",
		brush: "Кисть",
		edge: "Край",
		undo: "Назад",
		redo: "Вперёд",
		hint: "Сотрите остатки фона пальцем или мышью. Лишнее верните.",
		tabEdit: "Правка",
		tabCompare: "Сравнение",
		before: "До",
		after: "После",
		slider: "До / после",
		queue: "Фото",
		status_queued: "В очереди",
		status_working: "Идёт",
		status_done: "Готово",
		status_error: "Ошибка",
		remove: "Убрать",
		panelLayout: "Макет",
		panelExport: "Экспорт",
		jpgQuality: "Качество JPG/WebP"
	}
};
var MAX_BYTES = 26214400;
var ASPECTS = [
	{
		id: "free",
		r: 0
	},
	{
		id: "1:1",
		r: 1
	},
	{
		id: "4:3",
		r: 4 / 3
	},
	{
		id: "16:9",
		r: 16 / 9
	},
	{
		id: "9:16",
		r: 9 / 16
	}
];
function download(name, blob) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = name;
	a.click();
	setTimeout(() => URL.revokeObjectURL(url), 1500);
}
async function loadImage(src) {
	const image = new Image();
	image.src = src;
	await image.decode();
	return image;
}
function canvasBlob(canvas, type, quality) {
	return new Promise((resolve, reject) => canvas.toBlob((b) => b ? resolve(b) : reject(/* @__PURE__ */ new Error("blob")), type, quality));
}
function cloneCanvas(src) {
	const c = document.createElement("canvas");
	c.width = src.width;
	c.height = src.height;
	c.getContext("2d").drawImage(src, 0, 0);
	return c;
}
function refineEdge(canvas, amount) {
	if (!amount) return;
	const ctx = canvas.getContext("2d");
	const { width, height } = canvas;
	const image = ctx.getImageData(0, 0, width, height);
	const src = image.data;
	const next = new Uint8ClampedArray(src);
	const radius = Math.abs(amount);
	for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
		const i = (y * width + x) * 4 + 3;
		if (amount < 0) {
			let min = 255;
			for (let dy = -radius; dy <= radius; dy++) for (let dx = -radius; dx <= radius; dx++) {
				const xx = x + dx;
				const yy = y + dy;
				if (xx < 0 || yy < 0 || xx >= width || yy >= height) {
					min = 0;
					continue;
				}
				min = Math.min(min, src[(yy * width + xx) * 4 + 3]);
			}
			next[i] = min;
		} else {
			let max = 0;
			for (let dy = -radius; dy <= radius; dy++) for (let dx = -radius; dx <= radius; dx++) {
				const xx = Math.min(width - 1, Math.max(0, x + dx));
				const yy = Math.min(height - 1, Math.max(0, y + dy));
				max = Math.max(max, src[(yy * width + xx) * 4 + 3]);
			}
			next[i] = max;
		}
	}
	image.data.set(next);
	ctx.putImageData(image, 0, 0);
}
function boundsOf(item) {
	const cut = item.cut;
	if (item.bb && item.bb.ver === item.ver) return item.bb;
	const data = cut.getContext("2d").getImageData(0, 0, cut.width, cut.height).data;
	let minX = cut.width, minY = cut.height, maxX = -1, maxY = -1;
	for (let y = 0; y < cut.height; y++) for (let x = 0; x < cut.width; x++) if (data[(y * cut.width + x) * 4 + 3] > 8) {
		if (x < minX) minX = x;
		if (x > maxX) maxX = x;
		if (y < minY) minY = y;
		if (y > maxY) maxY = y;
	}
	const bb = maxX > minX && maxY > minY ? {
		ver: item.ver,
		x: minX,
		y: minY,
		w: maxX - minX + 1,
		h: maxY - minY + 1
	} : {
		ver: item.ver,
		x: 0,
		y: 0,
		w: cut.width,
		h: cut.height
	};
	item.bb = bb;
	return bb;
}
/** Builds the final picture. `maxSide` caps the longest side (0 = no cap); everything is drawn scaled in one pass. */
function compose(item, o, maxSide) {
	const cut = item.cut;
	const original = item.original;
	let sx = 0, sy = 0, sw = cut.width, sh = cut.height;
	if (o.trim) {
		const b = boundsOf(item);
		sx = b.x;
		sy = b.y;
		sw = b.w;
		sh = b.h;
	}
	const padPx = Math.round(Math.max(sw, sh) * o.pad / 100);
	let W = sw + padPx * 2;
	let H = sh + padPx * 2;
	if (o.ratio) {
		if (W / H < o.ratio) W = Math.round(H * o.ratio);
		else H = Math.round(W / o.ratio);
	}
	let s = 1;
	if (maxSide > 0 && Math.max(W, H) > maxSide) s = maxSide / Math.max(W, H);
	const out = document.createElement("canvas");
	out.width = Math.max(1, Math.round(W * s));
	out.height = Math.max(1, Math.round(H * s));
	const ctx = out.getContext("2d");
	ctx.scale(s, s);
	const cover = (img) => {
		const k = Math.max(W / img.width, H / img.height);
		const dw = img.width * k, dh = img.height * k;
		ctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
	};
	if (o.bg === "photo" && o.bgPhoto) cover(o.bgPhoto);
	else if (o.bg === "blur") {
		ctx.filter = `blur(${Math.round(18 * s) || 1}px)`;
		ctx.save();
		ctx.scale(1 / s, 1 / s);
		const k = Math.max(out.width / original.width, out.height / original.height) * 1.08;
		const dw = original.width * k, dh = original.height * k;
		ctx.drawImage(original, (out.width - dw) / 2, (out.height - dh) / 2, dw, dh);
		ctx.restore();
		ctx.filter = "none";
	} else if (o.bg === "gradient") {
		const g = ctx.createLinearGradient(0, 0, W, H);
		g.addColorStop(0, o.color);
		g.addColorStop(1, o.color2);
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, W, H);
	} else if (o.bg !== "clear") {
		ctx.fillStyle = o.bg === "white" ? "#ffffff" : o.bg === "black" ? "#111111" : o.color;
		ctx.fillRect(0, 0, W, H);
	} else if (o.format === "jpeg") {
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, W, H);
	}
	const ox = (W - sw) / 2;
	const oy = (H - sh) / 2;
	if (o.shadow) {
		ctx.save();
		ctx.filter = `blur(${Math.max(1, Math.round(16 * s))}px)`;
		ctx.globalAlpha = .35;
		ctx.drawImage(cut, sx, sy, sw, sh, ox + 8, oy + 18, sw, sh);
		ctx.restore();
	}
	ctx.drawImage(cut, sx, sy, sw, sh, ox, oy, sw, sh);
	let cur = out;
	if (o.flip) {
		const f = document.createElement("canvas");
		f.width = cur.width;
		f.height = cur.height;
		const fc = f.getContext("2d");
		fc.translate(f.width, 0);
		fc.scale(-1, 1);
		fc.drawImage(cur, 0, 0);
		cur = f;
	}
	if (o.circle) {
		const side = Math.min(cur.width, cur.height);
		const r = document.createElement("canvas");
		r.width = side;
		r.height = side;
		const rc = r.getContext("2d");
		rc.beginPath();
		rc.arc(side / 2, side / 2, side / 2, 0, Math.PI * 2);
		rc.clip();
		rc.drawImage(cur, (cur.width - side) / 2, (cur.height - side) / 2, side, side, 0, 0, side, side);
		cur = r;
	}
	return cur;
}
function EraseTool() {
	const { lang } = useI18n();
	const t = COPY[lang] ?? COPY.az;
	const dir = lang === "ar" ? "rtl" : "ltr";
	const navigate = useNavigate();
	const itemsRef = (0, import_react.useRef)([]);
	const idRef = (0, import_react.useRef)(1);
	const [tick, bump] = (0, import_react.useReducer)((n) => n + 1, 0);
	const [activeId, setActiveId] = (0, import_react.useState)(0);
	const [panel, setPanel] = (0, import_react.useState)(null);
	const tab = panel === "edit" ? "edit" : "compare";
	const [note, setNote] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [drag, setDrag] = (0, import_react.useState)(false);
	const [quality, setQuality] = (0, import_react.useState)("medium");
	const [bg, setBg] = (0, import_react.useState)("clear");
	const [color, setColor] = (0, import_react.useState)("#f4f1ea");
	const [color2, setColor2] = (0, import_react.useState)("#7aa7ff");
	const [bgPhoto, setBgPhoto] = (0, import_react.useState)(null);
	const [format, setFormat] = (0, import_react.useState)("png");
	const [jq, setJq] = (0, import_react.useState)(92);
	const [pad, setPad] = (0, import_react.useState)(8);
	const [ratioId, setRatioId] = (0, import_react.useState)("free");
	const [shadow, setShadow] = (0, import_react.useState)(false);
	const [size, setSize] = (0, import_react.useState)(0);
	const [hand, setHand] = (0, import_react.useState)("erase");
	const [brush, setBrush] = (0, import_react.useState)(28);
	const [circle, setCircle] = (0, import_react.useState)(false);
	const [flip, setFlip] = (0, import_react.useState)(false);
	const [trim, setTrim] = (0, import_react.useState)(false);
	const [split, setSplit] = (0, import_react.useState)(50);
	const [previewUrl, setPreviewUrl] = (0, import_react.useState)("");
	const editRef = (0, import_react.useRef)(null);
	const painting = (0, import_react.useRef)(false);
	const runningRef = (0, import_react.useRef)(false);
	const items = itemsRef.current;
	const active = items.find((i) => i.id === activeId) ?? null;
	const ratio = ASPECTS.find((a) => a.id === ratioId)?.r ?? 0;
	const effSize = size;
	const opts = (0, import_react.useMemo)(() => ({
		bg,
		color,
		color2,
		bgPhoto,
		pad,
		shadow,
		ratio,
		trim,
		flip,
		circle,
		format
	}), [
		bg,
		color,
		color2,
		bgPhoto,
		pad,
		shadow,
		ratio,
		trim,
		flip,
		circle,
		format
	]);
	const addFiles = (0, import_react.useCallback)((all) => {
		let files = all.filter((f) => /^image\/(png|jpeg|webp)$/.test(f.type));
		if (!files.length) {
			setNote(t.badType);
			return;
		}
		if (files.some((f) => f.size > MAX_BYTES)) {
			setNote(t.tooBig);
			files = files.filter((f) => f.size <= MAX_BYTES);
			if (!files.length) return;
		}
		files = files.slice(0, 30);
		const fresh = files.map((file) => ({
			id: idRef.current++,
			file,
			name: file.name,
			url: URL.createObjectURL(file),
			status: "queued",
			progress: 0,
			undo: [],
			redo: [],
			edge: 0,
			ver: 0
		}));
		itemsRef.current = [...itemsRef.current, ...fresh].slice(-30);
		setActiveId(fresh[0].id);
		setPanel((p) => p === "edit" ? null : p);
		setNote("");
		bump();
		startAll();
	}, [t]);
	(0, import_react.useEffect)(() => {
		const onPaste = (e) => {
			const files = Array.from(e.clipboardData?.files ?? []).filter((f) => f.type.startsWith("image/"));
			if (files.length) {
				e.preventDefault();
				addFiles(files);
			}
		};
		window.addEventListener("paste", onPaste);
		return () => window.removeEventListener("paste", onPaste);
	}, [addFiles]);
	async function runItem(item) {
		item.status = "working";
		item.progress = 4;
		bump();
		setNote(t.wait);
		try {
			const { removeBackground } = await import("../_libs/imgly__background-removal.mjs").then((n) => n.t);
			const q = quality;
			const runModel = (device) => removeBackground(item.file, {
				model: {
					small: "isnet_quint8",
					medium: "isnet_fp16",
					large: "isnet"
				}[q],
				device,
				proxyToWorker: device === "gpu",
				rescale: true,
				output: {
					format: "image/png",
					quality: 1
				},
				progress: (_k, cur, total) => {
					if (total > 0) {
						item.progress = Math.min(96, Math.round(cur / total * 100));
						bump();
					}
				}
			});
			const out = await runModel("gpu").catch(() => runModel("cpu"));
			const blobUrl = URL.createObjectURL(out);
			const image = await loadImage(blobUrl);
			URL.revokeObjectURL(blobUrl);
			item.original = await loadImage(item.url);
			item.base = cloneCanvas(Object.assign(document.createElement("canvas"), {
				width: image.width,
				height: image.height
			}));
			item.base.getContext("2d").drawImage(image, 0, 0);
			item.cut = item.base;
			item.edge = 0;
			item.undo = [];
			item.redo = [];
			item.ver++;
			item.progress = 100;
			item.status = "done";
			setNote(t.ready);
		} catch {
			item.status = "error";
			setNote(t.fail);
		}
		bump();
	}
	async function startAll() {
		if (runningRef.current) return;
		runningRef.current = true;
		setBusy(true);
		try {
			for (;;) {
				const next = itemsRef.current.find((i) => i.status === "queued");
				if (!next) break;
				await runItem(next);
			}
		} finally {
			runningRef.current = false;
			setBusy(false);
		}
	}
	const doneKey = active ? `${active.id}:${active.ver}:${active.status}` : "";
	(0, import_react.useEffect)(() => {
		if (!active || active.status !== "done" || !active.cut) {
			setPreviewUrl("");
			return;
		}
		let dead = false;
		const timer = setTimeout(async () => {
			try {
				const blob = await canvasBlob(compose(active, opts, 1400), "image/png", 1);
				if (dead) return;
				const url = URL.createObjectURL(blob);
				setPreviewUrl((old) => {
					if (old) URL.revokeObjectURL(old);
					return url;
				});
			} catch {}
		}, 120);
		return () => {
			dead = true;
			clearTimeout(timer);
		};
	}, [
		doneKey,
		opts,
		tick > -1 && 0
	]);
	const drawEdit = (0, import_react.useCallback)(() => {
		const view = editRef.current;
		const it = itemsRef.current.find((i) => i.id === activeId);
		if (!view || !it?.cut) return;
		const k = Math.min(1, 1600 / Math.max(it.cut.width, it.cut.height));
		const w = Math.round(it.cut.width * k), h = Math.round(it.cut.height * k);
		if (view.width !== w || view.height !== h) {
			view.width = w;
			view.height = h;
		}
		const c = view.getContext("2d");
		c.clearRect(0, 0, w, h);
		c.drawImage(painting.current && it.base ? it.base : it.cut, 0, 0, w, h);
	}, [activeId]);
	(0, import_react.useEffect)(() => {
		if (tab === "edit") drawEdit();
	}, [
		tab,
		drawEdit,
		doneKey,
		tick
	]);
	function refreshCut(it) {
		if (!it.base) return;
		if (it.edge === 0) it.cut = it.base;
		else {
			const f = cloneCanvas(it.base);
			for (let i = 0; i < Math.abs(it.edge); i++) refineEdge(f, it.edge < 0 ? -1 : 1);
			it.cut = f;
		}
		it.ver++;
	}
	function paintAt(clientX, clientY) {
		const view = editRef.current;
		if (!view || !active?.base || !active.original) return;
		const base = active.base;
		const rect = view.getBoundingClientRect();
		const x = (clientX - rect.left) / rect.width * base.width;
		const y = (clientY - rect.top) / rect.height * base.height;
		const ctx = base.getContext("2d");
		ctx.save();
		ctx.beginPath();
		ctx.arc(x, y, brush / rect.width * base.width, 0, Math.PI * 2);
		ctx.clip();
		if (hand === "erase") {
			ctx.globalCompositeOperation = "destination-out";
			ctx.fillRect(0, 0, base.width, base.height);
		} else ctx.drawImage(active.original, 0, 0, base.width, base.height);
		ctx.restore();
		drawEdit();
	}
	function pointerDown(e) {
		if (!active?.base) return;
		painting.current = true;
		active.undo.push(cloneCanvas(active.base));
		if (active.undo.length > 15) active.undo.shift();
		active.redo = [];
		e.currentTarget.setPointerCapture(e.pointerId);
		paintAt(e.clientX, e.clientY);
	}
	function pointerMove(e) {
		if (painting.current) paintAt(e.clientX, e.clientY);
	}
	function pointerUp() {
		if (!painting.current || !active) return;
		painting.current = false;
		refreshCut(active);
		bump();
	}
	function undo() {
		if (!active?.base || !active.undo.length) return;
		active.redo.push(cloneCanvas(active.base));
		active.base = active.undo.pop();
		refreshCut(active);
		bump();
	}
	function redo() {
		if (!active?.base || !active.redo.length) return;
		active.undo.push(cloneCanvas(active.base));
		active.base = active.redo.pop();
		refreshCut(active);
		bump();
	}
	function setEdge(n) {
		if (!active?.base) return;
		active.edge = n;
		setTimeout(() => {
			refreshCut(active);
			bump();
		}, 0);
		bump();
	}
	async function renderBlob(it) {
		const c = compose(it, opts, effSize);
		return {
			blob: await canvasBlob(c, format === "jpeg" ? "image/jpeg" : format === "webp" ? "image/webp" : "image/png", jq / 100),
			w: c.width,
			h: c.height
		};
	}
	const ext = format === "jpeg" ? "jpg" : format;
	const baseName = (n) => n.replace(/\.[^.]+$/, "") || "image";
	async function exportActive() {
		if (!active?.cut) return;
		const { blob } = await renderBlob(active);
		download(`${baseName(active.name)}-nibras-erase.${ext}`, blob);
	}
	async function chainTo(path) {
		const done = itemsRef.current.filter((i) => i.status === "done");
		const files = [];
		for (const it of done) {
			const { blob } = await renderBlob(it);
			files.push(new File([blob], `${baseName(it.name)}-nibras-erase.${ext}`, { type: blob.type }));
		}
		if (!files.length) return;
		handOff(files);
		navigate({ href: localeHref(lang, path) });
	}
	async function exportAll() {
		const done = itemsRef.current.filter((i) => i.status === "done");
		if (done.length < 2) return exportActive();
		const { default: JSZip } = await import("../_libs/jszip+[...].mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
		const zip = new JSZip();
		const used = /* @__PURE__ */ new Set();
		for (const it of done) {
			const { blob } = await renderBlob(it);
			let n = `${baseName(it.name)}-nibras-erase.${ext}`;
			for (let k = 2; used.has(n); k++) n = `${baseName(it.name)}-nibras-erase-${k}.${ext}`;
			used.add(n);
			zip.file(n, blob);
		}
		download("nibras-erase.zip", await zip.generateAsync({ type: "blob" }));
	}
	async function copyNow() {
		if (!active?.cut) return;
		try {
			const blob = await canvasBlob(compose(active, {
				...opts,
				format: "png"
			}, effSize), "image/png", 1);
			await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
			setNote(t.copied);
		} catch {
			setNote(t.fail);
		}
	}
	function clearAll() {
		itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url));
		itemsRef.current = [];
		setActiveId(0);
		setPreviewUrl("");
		setNote("");
		bump();
	}
	function removeOne(id) {
		const it = itemsRef.current.find((i) => i.id === id);
		if (it) URL.revokeObjectURL(it.url);
		itemsRef.current = itemsRef.current.filter((i) => i.id !== id);
		if (activeId === id) setActiveId(itemsRef.current[0]?.id ?? 0);
		bump();
	}
	const doneCount = items.filter((i) => i.status === "done").length;
	const sizeOptions = [
		{
			v: 640,
			label: "640"
		},
		{
			v: 1024,
			label: "1024"
		},
		{
			v: 1600,
			label: "1600"
		},
		{
			v: 2400,
			label: "2400"
		},
		{
			v: 4096,
			label: "4096"
		},
		{
			v: 0,
			label: t.original
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "files-tool erase-app",
		dir,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "files-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: `files-drop erase-drop${drag ? " is-drag" : ""}${items.length ? " is-compact" : ""}`,
					onDragOver: (e) => {
						e.preventDefault();
						setDrag(true);
					},
					onDragLeave: () => setDrag(false),
					onDrop: (e) => {
						e.preventDefault();
						setDrag(false);
						addFiles(Array.from(e.dataTransfer.files));
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "image/jpeg,image/png,image/webp",
							multiple: true,
							"data-testid": "erase-input",
							onChange: (e) => {
								addFiles(Array.from(e.target.files ?? []));
								e.target.value = "";
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t.drop }),
						items.length ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: `${t.dropSub} ${t.private}` })
					]
				}),
				items.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "erase-queue",
					"aria-label": t.queue,
					children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: i.id === activeId ? "is-on" : "",
						"data-status": i.status,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveId(i.id),
							title: i.name,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: i.url,
								alt: ""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
								"data-status": i.status,
								children: [t[`status_${i.status}`], i.status === "working" ? ` ${i.progress}%` : ""]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "erase-x",
							"aria-label": t.remove,
							onClick: () => removeOne(i.id),
							children: "×"
						})]
					}, i.id))
				}) : null,
				active?.status === "done" ? tab === "compare" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "erase-compare",
					"data-testid": "erase-compare",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "erase-cmp-stage is-cut",
						style: { aspectRatio: previewUrl ? void 0 : `${active.cut.width}/${active.cut.height}` },
						children: [
							previewUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "erase-after",
								src: previewUrl,
								alt: t.after
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "erase-before",
								src: active.url,
								alt: t.before,
								style: { clipPath: `inset(0 ${dir === "rtl" ? 0 : 100 - split}% 0 ${dir === "rtl" ? 100 - split : 0}%)` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "erase-handle",
								style: { [dir === "rtl" ? "right" : "left"]: `${split}%` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "erase-tag erase-tag-b",
								children: t.before
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "erase-tag erase-tag-a",
								children: t.after
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max: 100,
						value: split,
						"aria-label": t.slider,
						"data-testid": "erase-split",
						onChange: (e) => setSplit(Number(e.target.value))
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "erase-editbox",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "erase-stage is-cut",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
							ref: editRef,
							"data-testid": "erase-edit",
							className: "is-hand",
							onPointerDown: pointerDown,
							onPointerMove: pointerMove,
							onPointerUp: pointerUp,
							onPointerCancel: pointerUp
						})
					})
				}) : active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "erase-stage erase-pending",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active.url,
						alt: ""
					})
				}) : null,
				items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "erase-toolbar",
					"data-testid": "erase-toolbar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "erase-tabs",
						role: "tablist",
						children: [
							["bg", t.background],
							["layout", t.panelLayout],
							["edit", t.tabEdit],
							["export", t.panelExport]
						].filter(([id]) => id !== "edit" || active?.status === "done").map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "tab",
							"data-panel": id,
							"aria-expanded": panel === id,
							"aria-selected": panel === id,
							className: panel === id ? "is-on" : "",
							onClick: () => setPanel(panel === id ? null : id),
							children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								"aria-hidden": "true",
								children: panel === id ? "▴" : "▾"
							})]
						}, id))
					}), panel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "erase-panel",
						role: "tabpanel",
						"data-testid": `erase-panel-${panel}`,
						children: [
							panel === "bg" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "erase-row",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.background }),
									[
										"clear",
										"white",
										"black",
										"color",
										"gradient",
										"blur",
										"photo"
									].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"data-bg": id,
										className: bg === id ? "is-on" : "",
										onClick: () => setBg(id),
										children: t[id]
									}, id)),
									bg === "color" || bg === "gradient" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "color",
										value: color,
										onChange: (e) => setColor(e.target.value),
										"aria-label": t.color
									}) : null,
									bg === "gradient" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "color",
										value: color2,
										onChange: (e) => setColor2(e.target.value),
										"aria-label": t.gradient
									}) : null,
									bg === "photo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "files-ghost",
										children: [t.pickPhoto, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "file",
											accept: "image/*",
											hidden: true,
											onChange: async (e) => {
												const f = e.target.files?.[0];
												if (!f) return;
												const u = URL.createObjectURL(f);
												setBgPhoto(await loadImage(u));
											}
										})]
									}) : null
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "erase-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.quality }), [
									"small",
									"medium",
									"large"
								].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: quality === id ? "is-on" : "",
									onClick: () => setQuality(id),
									children: id === "small" ? t.qSmall : id === "medium" ? t.qMedium : t.qLarge
								}, id))]
							})] }) : null,
							panel === "layout" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "erase-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.aspect }), ASPECTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: ratioId === a.id ? "is-on" : "",
										onClick: () => setRatioId(a.id),
										children: a.id === "free" ? t.free : a.id
									}, a.id))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "erase-slider",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										t.pad,
										" ",
										pad,
										"%"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 0,
										max: 30,
										value: pad,
										onChange: (e) => setPad(Number(e.target.value))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "erase-row",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "erase-check",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: shadow,
												onChange: (e) => setShadow(e.target.checked)
											}), t.shadow]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "erase-check",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: circle,
												onChange: (e) => setCircle(e.target.checked)
											}), t.circle]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "erase-check",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: flip,
												onChange: (e) => setFlip(e.target.checked)
											}), t.flip]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "erase-check",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: trim,
												onChange: (e) => setTrim(e.target.checked)
											}), t.trim]
										})
									]
								})
							] }) : null,
							panel === "export" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "erase-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.format }), [
										"png",
										"jpeg",
										"webp"
									].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: format === id ? "is-on" : "",
										onClick: () => setFormat(id),
										children: id === "jpeg" ? "JPG" : id.toUpperCase()
									}, id))]
								}),
								format !== "png" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "erase-slider",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										t.jpgQuality,
										" ",
										jq
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 50,
										max: 100,
										value: jq,
										onChange: (e) => setJq(Number(e.target.value))
									})]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "erase-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.size }), sizeOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"data-size": o.v,
										className: size === o.v ? "is-on" : "",
										onClick: () => setSize(o.v),
										children: o.label
									}, o.v))]
								})
							] }) : null,
							panel === "edit" && active?.status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "erase-row",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.hand }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: hand === "erase" ? "is-on" : "",
											onClick: () => setHand("erase"),
											children: t.erase
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: hand === "restore" ? "is-on" : "",
											onClick: () => setHand("restore"),
											children: t.restore
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: !active.undo.length,
											onClick: undo,
											"data-testid": "erase-undo",
											children: ["↶ ", t.undo]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: !active.redo.length,
											onClick: redo,
											children: ["↷ ", t.redo]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "erase-slider",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										t.brush,
										" ",
										brush
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 8,
										max: 90,
										value: brush,
										onChange: (e) => setBrush(Number(e.target.value))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "erase-slider",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										t.edge,
										" ",
										active.edge
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: -4,
										max: 4,
										value: active.edge,
										onChange: (e) => setEdge(Number(e.target.value))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "erase-hint",
									children: t.hint
								})
							] }) : null
						]
					}) : null]
				}) : null,
				busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "erase-bar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${items.find((i) => i.status === "working")?.progress ?? 0}%` } })
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "files-actions erase-actions",
					children: [
						items.some((i) => i.status === "queued" || i.status === "error") && !busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "files-run",
							onClick: () => {
								itemsRef.current.forEach((i) => {
									if (i.status === "error") i.status = "queued";
								});
								startAll();
							},
							children: t.run
						}) : null,
						active?.status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "files-run",
							onClick: () => void exportActive(),
							"data-testid": "erase-download",
							children: [
								t.download,
								" ",
								ext.toUpperCase()
							]
						}) : null,
						doneCount > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "files-ghost",
							onClick: () => void exportAll(),
							"data-testid": "erase-download-all",
							children: [t.downloadAll, " (ZIP)"]
						}) : null,
						active?.status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "files-ghost",
							onClick: () => void chainTo("/image"),
							"data-testid": "erase-to-compress",
							children: t.toCompress
						}) : null,
						active?.status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "files-ghost",
							onClick: () => void chainTo("/pdf/image-pdf"),
							"data-testid": "erase-to-pdf",
							children: t.toPdf
						}) : null,
						active?.status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "files-ghost",
							onClick: () => void copyNow(),
							children: t.copy
						}) : null,
						items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "files-ghost",
							onClick: clearAll,
							children: t.again
						}) : null
					]
				})
			]
		}), note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "files-note",
			role: "status",
			children: note
		}) : null]
	});
}
var TITLE = {
	az: "Şəkil fon sil",
	en: "Remove image background",
	tr: "Fotoğraf arka plan sil",
	ar: "حذف خلفية الصورة",
	ru: "Удалить фон фото"
};
var LEAD = {
	az: "Fon sil, öz şəklini fon qoy, dairə profil düzəlt, əl ilə düzəlt. PNG, JPG və ya WebP. Pulsuz, brauzerdə.",
	en: "Remove the background, add a color or blur, a shadow, then download PNG, JPG or WebP. Free, in your browser.",
	tr: "Arka planı sil, renk veya bulanık fon koy, gölge ekle, PNG, JPG veya WebP indir. Ücretsiz, tarayıcıda.",
	ar: "أزل الخلفية، أضف لوناً أو ضباباً وظلاً، ثم نزّل PNG أو JPG أو WebP. مجاناً في المتصفح.",
	ru: "Уберите фон, поставьте цвет или размытие, тень, скачайте PNG, JPG или WebP. Бесплатно, в браузере."
};
var INFO = {
	az: {
		key: "Məxfilik və məlumat",
		close: "Bağla",
		privacy: "Məxfilik siyasəti",
		about: "Tətbiq məlumatı",
		privacyBody: [
			"Bu siyasət Nibras Erase tətbiqinə aiddir. Versiya V 1.0.0. Hazırlayan Nibras Code. Əlaqə: nibrascode@gmail.com. Ünvan: https://nibrascode.com/erase/privacy",
			"Şəkil Nibras Code serverinə yüklənmir. Fonun silinməsi cihazınızda gedir. İlk dəfə dəqiq model faylı cihaza endirilə bilər. O yükləmə model üçündür, şəkliniz həmin sorğuya qoyulmur.",
			"Ad, e-poçt, telefon, hesab, əlaqələr, dəqiq yer, reklam kimliyi və ödəniş məlumatı toplanmır. Hesab, reklam izləyicisi və analitik SDK yoxdur. Məlumat satılmır.",
			"İcazə yalnız fayl seçimi üçündür: şəkli açmaq və nəticəni saxlamaq. Kamera, mikrofon, əlaqə və yer istənmir.",
			"Tətbiq 13 yaşdan kiçik uşaqlara yönəlmir. Uşaqlardan bilərəkdən şəxsi məlumat toplanmır.",
			"Siyasət dəyişəndə https://nibrascode.com/erase/privacy yenilənir. Sual: nibrascode@gmail.com. Yenilənmə: 14 oktyabr 2026."
		],
		aboutBody: [
			"Ad: Nibras Erase. Versiya: V 1.0.0. Nibras Code.",
			"Nə edir: fonu silir, rəng və ya bulanıq fon qoyur, kölgə və dairə profil düzəldir, kənarı fırça ilə düzəldir. Nəticə PNG, JPG və ya WebP olur.",
			"Necə işlədilir: şəkli seçin, keyfiyyəti seçin, fonu silin, lazımdırsa əl ilə kənarı düzəldin, formatı seçin və yükləyin.",
			"Şəkil cihazdan çıxmır. Model ilk dəfə endiriləndən sonra növbəti şəkillər internetsiz də işlənə bilər.",
			"Bu tətbiq şəkil sıxmır. Sıxmaq və çevirmək Nibras Image tətbiqindədir. Hesab, ödəniş və reklam yoxdur. Pulsuzdur.",
			"Dəstək: nibrascode@gmail.com. Məxfilik: https://nibrascode.com/erase/privacy"
		]
	},
	en: {
		key: "Privacy and about",
		close: "Close",
		privacy: "Privacy policy",
		about: "About this app",
		privacyBody: [
			"This policy covers Nibras Erase, version V 1.0.0, by Nibras Code. Contact: nibrascode@gmail.com. Address: https://nibrascode.com/en/erase/privacy",
			"The photo is not uploaded to a Nibras Code server. Background removal runs on your device. The first time, a model file may download. That download is the model, not your photo.",
			"We do not collect your name, email, phone, account, contacts, precise location, advertising ID, or payment data. There is no account, no ad tracker and no analytics SDK. Data is not sold.",
			"The only permission is a file picker, to open a photo and save the result. Camera, microphone, contacts and location are not requested.",
			"The app is not directed at children under 13. We do not knowingly collect personal information from children.",
			"If this policy changes, https://nibrascode.com/en/erase/privacy is updated. Questions: nibrascode@gmail.com. Updated: 14 October 2026."
		],
		aboutBody: [
			"Name: Nibras Erase. Version: V 1.0.0. Nibras Code.",
			"What it does: removes the background, places a color or a blur, a shadow and a circle crop, and lets you fix the edge with a brush. The result is PNG, JPG or WebP.",
			"How to use it: pick a photo, pick the quality, remove the background, fix the edge if you need to, choose the format and download.",
			"The photo stays on the device. After the model has downloaded once, later photos can be processed without the network.",
			"This app does not compress photos. Compressing and converting is Nibras Image. There is no account, no payment and no advertising. It is free.",
			"Support: nibrascode@gmail.com. Privacy: https://nibrascode.com/en/erase/privacy"
		]
	},
	tr: {
		key: "Gizlilik ve bilgi",
		close: "Kapat",
		privacy: "Gizlilik politikası",
		about: "Uygulama bilgisi",
		privacyBody: [
			"Bu politika Nibras Erase içindir. Sürüm V 1.0.0. Nibras Code. İletişim: nibrascode@gmail.com. Adres: https://nibrascode.com/tr/erase/privacy",
			"Fotoğraf Nibras Code sunucusuna yüklenmez. Arka plan silme cihazda olur. İlk seferde model dosyası inebilir. O indirme modeldir, fotoğrafınız değildir.",
			"Ad, e-posta, telefon, hesap, kişiler, konum, reklam kimliği ve ödeme toplanmaz. Hesap ve reklam izleyici yok. Veri satılmaz.",
			"İzin yalnız dosya seçicisidir. Kamera, mikrofon, kişiler ve konum istenmez.",
			"Uygulama 13 yaş altına yönelik değildir.",
			"Değişiklik olursa https://nibrascode.com/tr/erase/privacy yenilenir. Soru: nibrascode@gmail.com. Güncelleme: 14 Ekim 2026."
		],
		aboutBody: [
			"Ad: Nibras Erase. Sürüm: V 1.0.0. Nibras Code.",
			"Arka planı siler, renk veya bulanık fon, gölge ve daire profil koyar, kenarı fırçayla düzeltir. Sonuç PNG, JPG veya WebP.",
			"Fotoğraf seçin, kaliteyi seçin, arka planı silin, gerekirse kenarı düzeltin, biçimi seçip indirin.",
			"Fotoğraf cihazdan çıkmaz. Model bir kez indikten sonra sonraki fotoğraflar internetsiz de işlenebilir.",
			"Bu uygulama fotoğraf sıkıştırmaz. Sıkıştırma Nibras Image içindedir. Hesap, ödeme ve reklam yok.",
			"Destek: nibrascode@gmail.com. Gizlilik: https://nibrascode.com/tr/erase/privacy"
		]
	},
	ar: {
		key: "الخصوصية والمعلومات",
		close: "إغلاق",
		privacy: "سياسة الخصوصية",
		about: "معلومات التطبيق",
		privacyBody: [
			"هذه السياسة لـ Nibras Erase، الإصدار V 1.0.0، من Nibras Code. التواصل: nibrascode@gmail.com. العنوان: https://nibrascode.com/ar/erase/privacy",
			"الصورة لا تُرفع إلى خادم Nibras Code. إزالة الخلفية تتم على الجهاز. في المرة الأولى قد يُنزَّل ملف نموذج. هذا التنزيل للنموذج وليس لصورتك.",
			"لا نجمع الاسم أو البريد أو الهاتف أو الحساب أو جهات الاتصال أو الموقع أو معرّف الإعلان أو الدفع. لا حساب ولا تتبّع إعلانات. البيانات لا تُباع.",
			"الإذن الوحيد اختيار ملف. لا نطلب الكاميرا ولا الميكروفون ولا جهات الاتصال ولا الموقع.",
			"التطبيق غير موجّه لمن هم دون 13 عاماً.",
			"عند التغيير يُحدَّث https://nibrascode.com/ar/erase/privacy. السؤال: nibrascode@gmail.com. التحديث: 14 أكتوبر 2026."
		],
		aboutBody: [
			"الاسم: Nibras Erase. الإصدار: V 1.0.0. Nibras Code.",
			"يزيل الخلفية، ويضع لوناً أو ضباباً وظلاً وقصاً دائرياً، ويتيح إصلاح الحافة بالفرشاة. النتيجة PNG أو JPG أو WebP.",
			"اختر صورة، اختر الجودة، أزل الخلفية، أصلح الحافة إن لزم، اختر الصيغة ثم نزّل.",
			"الصورة تبقى على الجهاز. بعد تنزيل النموذج مرة يمكن معالجة الصور التالية بلا شبكة.",
			"هذا التطبيق لا يضغط الصور. الضغط في Nibras Image. لا حساب ولا دفع ولا إعلان.",
			"الدعم: nibrascode@gmail.com. الخصوصية: https://nibrascode.com/ar/erase/privacy"
		]
	},
	ru: {
		key: "Конфиденциальность и сведения",
		close: "Закрыть",
		privacy: "Политика конфиденциальности",
		about: "О приложении",
		privacyBody: [
			"Эта политика относится к Nibras Erase, версия V 1.0.0, от Nibras Code. Связь: nibrascode@gmail.com. Адрес: https://nibrascode.com/ru/erase/privacy",
			"Фото не загружается на сервер Nibras Code. Удаление фона идёт на устройстве. В первый раз может скачаться файл модели. Это модель, не ваше фото.",
			"Имя, почта, телефон, аккаунт, контакты, местоположение, рекламный идентификатор и оплата не собираются. Нет аккаунта и рекламного трекера. Данные не продаются.",
			"Разрешение одно: выбор файла. Камера, микрофон, контакты и местоположение не запрашиваются.",
			"Приложение не предназначено для детей младше 13 лет.",
			"При изменении обновляется https://nibrascode.com/ru/erase/privacy. Вопрос: nibrascode@gmail.com. Обновление: 14 октября 2026."
		],
		aboutBody: [
			"Имя: Nibras Erase. Версия: V 1.0.0. Nibras Code.",
			"Убирает фон, ставит цвет или размытие, тень и круглую обрезку, даёт поправить край кистью. Результат — PNG, JPG или WebP.",
			"Выберите фото, качество, уберите фон, при необходимости поправьте край, выберите формат и скачайте.",
			"Фото остаётся на устройстве. После одной загрузки модели следующие фото можно обработать без сети.",
			"Это приложение не сжимает фото. Сжатие — в Nibras Image. Нет аккаунта, оплаты и рекламы.",
			"Поддержка: nibrascode@gmail.com. Политика: https://nibrascode.com/ru/erase/privacy"
		]
	}
};
function ErasePage() {
	const { lang } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const copy = INFO[lang] ?? INFO.az;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/apps/nibras-erase.png",
						alt: "",
						width: 64,
						height: 64,
						className: "size-12 shrink-0 rounded-2xl md:size-14"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold tracking-tight md:text-3xl",
						children: TITLE[lang]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: LEAD[lang]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold tracking-wide text-amber-200/90",
						children: "V 1.0.0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-9 place-items-center rounded-full border border-white/20 bg-white/5 text-white",
						"aria-label": copy.key,
						onClick: () => setOpen(true),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 24 24",
							width: "18",
							height: "18",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.8",
							strokeLinecap: "round",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "8",
								cy: "15",
								r: "3.2"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10.8 13.4 20 5.2M16.2 7.4l2.1 2.1M13.8 9.8l2.1 2.1" })]
						})
					})]
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 grid place-items-end bg-black/70 p-3 sm:place-items-center",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "erase-privacy",
					className: "max-h-[86dvh] w-full max-w-xl overflow-auto rounded-2xl border border-amber-200/30 bg-[#0c1220] p-5 text-sm leading-relaxed text-[#e8eeff]",
					onClick: (event) => event.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold tracking-wide text-amber-200",
								children: "V 1.0.0"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-2xl leading-none",
								"aria-label": copy.close,
								onClick: () => setOpen(false),
								children: "×"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "erase-privacy",
							className: "mb-2 text-lg font-bold",
							children: copy.privacy
						}),
						copy.privacyBody.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[#d5def0]",
							children: paragraph
						}, paragraph)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-2 mt-4 text-lg font-bold",
							children: copy.about
						}),
						copy.aboutBody.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-[#d5def0]",
							children: paragraph
						}, paragraph))
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EraseTool, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextLinks, { links: [{
				href: "/image",
				label: {
					az: "Şəkil sıx",
					en: "Compress photo",
					tr: "Fotoğraf sıkıştır",
					ar: "ضغط الصورة",
					ru: "Сжать фото"
				}
			}, {
				href: "/pdf/pdf-image",
				label: {
					az: "PDF-dən şəkil",
					en: "PDF to image",
					tr: "PDF'den resim",
					ar: "من PDF إلى صورة",
					ru: "PDF в картинку"
				}
			}] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 space-y-3",
				"aria-labelledby": "erase-faq",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "erase-faq",
					className: "text-base font-semibold",
					children: SEARCH_FAQ["/erase"].title[lang]
				}), SEARCH_FAQ["/erase"].items[lang].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: item.a
				})] }, item.q))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageAssistant, { topic: "erase" })
		]
	});
}
//#endregion
export { ErasePage as t };
