import { o as __toESM } from "../_runtime.mjs";
import { i as localeHref } from "./locale-path-fYvKyZ8f.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { Bn as Eraser, I as SkipForward, Lt as Maximize, Qt as Link2, Un as Download, Yn as Cpu, _ as Trophy, et as Save, h as Undo2, ht as Play, jt as Minus, kn as FilePlus2, mt as Plus, xt as Pause, y as Trash2, yn as FolderOpen } from "../_libs/lucide-react.mjs";
import { r as ToolsLegalLinks } from "./tools-legal-BYzcrNbU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/logiclab-DdNvTFR1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var en = {
	title: "Nibras Logic Lab",
	lead: "Build logic circuits from gates, toggle inputs and watch the signals flow.",
	palette: "Gate palette",
	paletteHint: "Tap a gate to add it. Drag gates to move. Tap an output port, then an input port, to connect.",
	newC: "New",
	open: "Open",
	save: "Save",
	clear: "Clear",
	sim: "Simulation",
	step: "Step",
	undo: "Undo",
	del: "Delete",
	share: "Share link",
	png: "PNG",
	svg: "SVG",
	fit: "Fit",
	truth: "Truth table",
	expr: "Expression",
	legend: "Signal legend",
	high: "HIGH (1)",
	low: "LOW (0)",
	pending: "Choosing a connection",
	selected: "Selected",
	gates: "Gates",
	wires: "Connections",
	inputs: "Inputs",
	outputs: "Outputs",
	simOn: "Simulation running",
	simOff: "Simulation paused — use Step",
	noOut: "Add an OUTPUT to see the table.",
	tooMany: "Only the first 6 inputs are shown.",
	saved: "Saved in this browser.",
	copied: "Link copied.",
	nameAsk: "Circuit name",
	none: "No saved circuits yet.",
	cleared: "Cleared.",
	confirmClear: "Clear the whole canvas?",
	confirmDel: "Delete this saved circuit?",
	challenges: "Challenges",
	checkBtn: "Check",
	start: "Start",
	ok: "Correct! Truth table matches.",
	bad: "Not yet:",
	r_inputs: "use exactly {n} INPUT(s)",
	r_output: "use exactly one OUTPUT",
	r_gates: "only these gates are allowed: {g}",
	r_table: "wrong output for inputs {b}",
	ch_and: "Build AND",
	ch_and_d: "Y = A · B.",
	"ch_not-nand": "NOT from NAND",
	"ch_not-nand_d": "Y = ¬A using only NAND gates.",
	"ch_xor-basic": "XOR from basics",
	"ch_xor-basic_d": "Y = A ⊕ B with AND, OR and NOT only.",
	"ch_or-nand": "OR from NAND",
	"ch_or-nand_d": "Y = A + B using only NAND gates.",
	ch_majority: "Majority of three",
	ch_majority_d: "Y = 1 when at least two of A, B, C are 1.",
	local: "Circuits are saved only in this browser. Share links carry the circuit in the link itself.",
	back: "Nibras Learn",
	tapIn: "Now tap an input port",
	tapOut: "Now tap an output port"
};
var LL = {
	en,
	az: {
		...en,
		title: "Nibras Logic Lab",
		lead: "Məntiq qapılarından sxem qur, girişləri dəyiş və siqnalın axınını izlə.",
		palette: "Qapılar",
		paletteHint: "Qapını əlavə etmək üçün toxun. Yerini dəyişmək üçün sürüşdür. Birləşdirmək üçün əvvəl çıxış, sonra giriş nöqtəsinə toxun.",
		newC: "Yeni",
		open: "Aç",
		save: "Saxla",
		clear: "Təmizlə",
		sim: "Simulyasiya",
		step: "Addım",
		undo: "Geri al",
		del: "Sil",
		share: "Link paylaş",
		fit: "Sığdır",
		truth: "Həqiqət cədvəli",
		expr: "İfadə",
		legend: "Siqnallar",
		high: "YÜKSƏK (1)",
		low: "AŞAĞI (0)",
		pending: "Birləşmə seçilir",
		selected: "Seçilib",
		gates: "Qapılar",
		wires: "Birləşmələr",
		inputs: "Girişlər",
		outputs: "Çıxışlar",
		simOn: "Simulyasiya işləyir",
		simOff: "Simulyasiya dayandırılıb — Addım düyməsi",
		noOut: "Cədvəl üçün OUTPUT əlavə et.",
		tooMany: "Yalnız ilk 6 giriş göstərilir.",
		saved: "Bu brauzerdə saxlanıldı.",
		copied: "Link kopyalandı.",
		nameAsk: "Sxemin adı",
		none: "Saxlanmış sxem yoxdur.",
		cleared: "Təmizləndi.",
		confirmClear: "Bütün lövhə təmizlənsin?",
		confirmDel: "Bu sxem silinsin?",
		challenges: "Tapşırıqlar",
		checkBtn: "Yoxla",
		start: "Başla",
		ok: "Düzdür! Cədvəl uyğun gəlir.",
		bad: "Hələ yox:",
		r_inputs: "dəqiq {n} INPUT istifadə et",
		r_output: "dəqiq bir OUTPUT istifadə et",
		r_gates: "yalnız bu qapılar olar: {g}",
		r_table: "{b} girişlərində çıxış səhvdir",
		ch_and: "AND qur",
		ch_and_d: "Y = A · B.",
		"ch_not-nand": "NAND-dan NOT",
		"ch_not-nand_d": "Y = ¬A, yalnız NAND ilə.",
		"ch_xor-basic": "Sadə qapılarla XOR",
		"ch_xor-basic_d": "Y = A ⊕ B, yalnız AND, OR, NOT ilə.",
		"ch_or-nand": "NAND-dan OR",
		"ch_or-nand_d": "Y = A + B, yalnız NAND ilə.",
		ch_majority: "Üçdən çoxluq",
		ch_majority_d: "A, B, C-dən ən azı ikisi 1 olanda Y = 1.",
		local: "Sxemlər yalnız bu brauzerdə saxlanır. Paylaşma linki sxemi linkin özündə daşıyır.",
		tapIn: "İndi giriş nöqtəsinə toxun",
		tapOut: "İndi çıxış nöqtəsinə toxun"
	},
	tr: {
		...en,
		lead: "Kapılardan mantık devreleri kurun, girişleri değiştirin ve sinyal akışını izleyin.",
		palette: "Kapılar",
		paletteHint: "Eklemek için kapıya dokunun. Taşımak için sürükleyin. Bağlamak için önce çıkışa, sonra girişe dokunun.",
		newC: "Yeni",
		open: "Aç",
		save: "Kaydet",
		clear: "Temizle",
		sim: "Simülasyon",
		step: "Adım",
		undo: "Geri al",
		del: "Sil",
		share: "Bağlantı paylaş",
		fit: "Sığdır",
		truth: "Doğruluk tablosu",
		expr: "İfade",
		legend: "Sinyaller",
		high: "YÜKSEK (1)",
		low: "DÜŞÜK (0)",
		pending: "Bağlantı seçiliyor",
		selected: "Seçili",
		gates: "Kapılar",
		wires: "Bağlantılar",
		inputs: "Girişler",
		outputs: "Çıkışlar",
		simOn: "Simülasyon çalışıyor",
		simOff: "Simülasyon durdu — Adım'ı kullanın",
		noOut: "Tablo için OUTPUT ekleyin.",
		tooMany: "Yalnızca ilk 6 giriş gösterilir.",
		saved: "Bu tarayıcıya kaydedildi.",
		copied: "Bağlantı kopyalandı.",
		nameAsk: "Devre adı",
		none: "Kayıtlı devre yok.",
		cleared: "Temizlendi.",
		confirmClear: "Tüm tuval temizlensin mi?",
		confirmDel: "Bu devre silinsin mi?",
		challenges: "Görevler",
		checkBtn: "Kontrol et",
		start: "Başla",
		ok: "Doğru! Tablo eşleşiyor.",
		bad: "Henüz değil:",
		r_inputs: "tam {n} INPUT kullanın",
		r_output: "tam bir OUTPUT kullanın",
		r_gates: "yalnızca şu kapılar: {g}",
		r_table: "{b} girişlerinde çıkış yanlış",
		ch_and: "AND kur",
		"ch_not-nand": "NAND ile NOT",
		"ch_not-nand_d": "Yalnızca NAND ile Y = ¬A.",
		"ch_xor-basic": "Temel kapılarla XOR",
		"ch_xor-basic_d": "Yalnızca AND, OR, NOT ile Y = A ⊕ B.",
		"ch_or-nand": "NAND ile OR",
		"ch_or-nand_d": "Yalnızca NAND ile Y = A + B.",
		ch_majority: "Üçte çoğunluk",
		ch_majority_d: "A, B, C'den en az ikisi 1 ise Y = 1.",
		local: "Devreler yalnızca bu tarayıcıda saklanır. Paylaşım bağlantısı devreyi bağlantının içinde taşır.",
		tapIn: "Şimdi bir girişe dokunun",
		tapOut: "Şimdi bir çıkışa dokunun"
	},
	ar: {
		...en,
		lead: "ابنِ دوائر منطقية من البوابات، وبدّل المدخلات وشاهد تدفق الإشارة.",
		palette: "البوابات",
		paletteHint: "انقر على بوابة لإضافتها. اسحب البوابات لتحريكها. للتوصيل انقر منفذ الخرج ثم منفذ الدخل.",
		newC: "جديد",
		open: "فتح",
		save: "حفظ",
		clear: "مسح",
		sim: "المحاكاة",
		step: "خطوة",
		undo: "تراجع",
		del: "حذف",
		share: "مشاركة رابط",
		fit: "ملاءمة",
		truth: "جدول الحقيقة",
		expr: "التعبير",
		legend: "الإشارات",
		high: "مرتفع (1)",
		low: "منخفض (0)",
		pending: "اختيار توصيل",
		selected: "محدد",
		gates: "البوابات",
		wires: "التوصيلات",
		inputs: "المدخلات",
		outputs: "المخرجات",
		simOn: "المحاكاة تعمل",
		simOff: "المحاكاة متوقفة — استخدم خطوة",
		noOut: "أضف OUTPUT لعرض الجدول.",
		tooMany: "تُعرض أول 6 مدخلات فقط.",
		saved: "حُفظ في هذا المتصفح.",
		copied: "نُسخ الرابط.",
		nameAsk: "اسم الدائرة",
		none: "لا توجد دوائر محفوظة.",
		cleared: "تم المسح.",
		confirmClear: "مسح اللوحة كلها؟",
		confirmDel: "حذف هذه الدائرة؟",
		challenges: "تحديات",
		checkBtn: "تحقق",
		start: "ابدأ",
		ok: "صحيح! الجدول مطابق.",
		bad: "ليس بعد:",
		r_inputs: "استخدم {n} INPUT بالضبط",
		r_output: "استخدم OUTPUT واحداً",
		r_gates: "البوابات المسموحة فقط: {g}",
		r_table: "خرج خاطئ للمدخلات {b}",
		ch_and: "ابنِ AND",
		"ch_not-nand": "NOT من NAND",
		"ch_not-nand_d": "Y = ¬A باستخدام NAND فقط.",
		"ch_xor-basic": "XOR من الأساسيات",
		"ch_xor-basic_d": "Y = A ⊕ B بـ AND وOR وNOT فقط.",
		"ch_or-nand": "OR من NAND",
		"ch_or-nand_d": "Y = A + B باستخدام NAND فقط.",
		ch_majority: "أغلبية ثلاثة",
		ch_majority_d: "Y = 1 عندما يكون اثنان على الأقل من A وB وC يساوي 1.",
		local: "تُحفظ الدوائر في هذا المتصفح فقط. رابط المشاركة يحمل الدائرة داخله.",
		tapIn: "انقر الآن منفذ دخل",
		tapOut: "انقر الآن منفذ خرج"
	},
	ru: {
		...en,
		lead: "Собирайте логические схемы из вентилей, переключайте входы и смотрите, как идёт сигнал.",
		palette: "Вентили",
		paletteHint: "Нажмите на вентиль, чтобы добавить. Перетаскивайте, чтобы двигать. Чтобы соединить, нажмите выход, затем вход.",
		newC: "Новая",
		open: "Открыть",
		save: "Сохранить",
		clear: "Очистить",
		sim: "Симуляция",
		step: "Шаг",
		undo: "Отменить",
		del: "Удалить",
		share: "Ссылка",
		fit: "Вписать",
		truth: "Таблица истинности",
		expr: "Выражение",
		legend: "Сигналы",
		high: "ВЫСОКИЙ (1)",
		low: "НИЗКИЙ (0)",
		pending: "Выбор соединения",
		selected: "Выбрано",
		gates: "Вентили",
		wires: "Соединения",
		inputs: "Входы",
		outputs: "Выходы",
		simOn: "Симуляция идёт",
		simOff: "Симуляция на паузе — жмите «Шаг»",
		noOut: "Добавьте OUTPUT, чтобы увидеть таблицу.",
		tooMany: "Показаны только первые 6 входов.",
		saved: "Сохранено в этом браузере.",
		copied: "Ссылка скопирована.",
		nameAsk: "Название схемы",
		none: "Сохранённых схем нет.",
		cleared: "Очищено.",
		confirmClear: "Очистить всё поле?",
		confirmDel: "Удалить эту схему?",
		challenges: "Задания",
		checkBtn: "Проверить",
		start: "Начать",
		ok: "Верно! Таблица совпадает.",
		bad: "Пока нет:",
		r_inputs: "нужно ровно {n} INPUT",
		r_output: "нужен ровно один OUTPUT",
		r_gates: "разрешены только: {g}",
		r_table: "неверный выход при входах {b}",
		ch_and: "Соберите AND",
		"ch_not-nand": "NOT из NAND",
		"ch_not-nand_d": "Y = ¬A только из NAND.",
		"ch_xor-basic": "XOR из базовых",
		"ch_xor-basic_d": "Y = A ⊕ B только из AND, OR, NOT.",
		"ch_or-nand": "OR из NAND",
		"ch_or-nand_d": "Y = A + B только из NAND.",
		ch_majority: "Большинство из трёх",
		ch_majority_d: "Y = 1, когда хотя бы два из A, B, C равны 1.",
		local: "Схемы хранятся только в этом браузере. Ссылка несёт схему внутри себя.",
		tapIn: "Теперь нажмите вход",
		tapOut: "Теперь нажмите выход"
	}
};
var TYPES = [
	"AND",
	"OR",
	"NOT",
	"NAND",
	"XOR",
	"NOR",
	"XNOR",
	"INPUT",
	"OUTPUT"
];
var pins = (t) => t === "INPUT" ? 0 : t === "NOT" || t === "OUTPUT" ? 1 : 2;
var size = (t) => t === "INPUT" || t === "OUTPUT" ? {
	w: 56,
	h: 56
} : {
	w: 92,
	h: 56
};
function apply(t, a) {
	const [x = 0, y = 0] = a;
	switch (t) {
		case "AND": return x & y;
		case "OR": return x | y;
		case "NOT": return x ? 0 : 1;
		case "NAND": return x & y ? 0 : 1;
		case "NOR": return x | y ? 0 : 1;
		case "XOR": return x ^ y;
		case "XNOR": return x ^ y ? 0 : 1;
		case "OUTPUT": return x ? 1 : 0;
		default: return 0;
	}
}
/** Input/output names: A, B, C… and Y, Y2… in creation order. */
function names(c) {
	const m = /* @__PURE__ */ new Map();
	let i = 0, o = 0;
	for (const g of c.gates) {
		if (g.type === "INPUT") m.set(g.id, g.label || String.fromCharCode(65 + i++));
		if (g.type === "OUTPUT") {
			o++;
			m.set(g.id, g.label || (o === 1 ? "Y" : "Y" + o));
		}
	}
	return m;
}
/** Full (settled) evaluation. Unconnected pins read 0; loops read 0. */
function evaluate(c, inputs) {
	const byId = new Map(c.gates.map((g) => [g.id, g]));
	const into = /* @__PURE__ */ new Map();
	for (const w of c.wires) {
		const a = into.get(w.to) ?? [];
		a[w.pin] = w.from;
		into.set(w.to, a);
	}
	const val = /* @__PURE__ */ new Map();
	const busy = /* @__PURE__ */ new Set();
	const get = (id) => {
		if (val.has(id)) return val.get(id);
		const g = byId.get(id);
		if (!g || busy.has(id)) return 0;
		if (g.type === "INPUT") {
			const v = inputs?.get(id) ?? g.v ?? 0;
			val.set(id, v);
			return v;
		}
		busy.add(id);
		const src = into.get(id) ?? [];
		const v = apply(g.type, Array.from({ length: pins(g.type) }, (_, k) => src[k] ? get(src[k]) : 0));
		busy.delete(id);
		val.set(id, v);
		return v;
	};
	for (const g of c.gates) get(g.id);
	return val;
}
/** One synchronous clock tick: each gate reads the previous values of its sources. */
function tick(c, prev) {
	const into = /* @__PURE__ */ new Map();
	for (const w of c.wires) {
		const a = into.get(w.to) ?? [];
		a[w.pin] = w.from;
		into.set(w.to, a);
	}
	const next = /* @__PURE__ */ new Map();
	for (const g of c.gates) {
		if (g.type === "INPUT") {
			next.set(g.id, g.v ?? 0);
			continue;
		}
		const src = into.get(g.id) ?? [];
		next.set(g.id, apply(g.type, Array.from({ length: pins(g.type) }, (_, k) => src[k] ? prev.get(src[k]) ?? 0 : 0)));
	}
	return next;
}
/** Boolean expression for a gate's output. */
function expr(c, id, nm = names(c)) {
	const byId = new Map(c.gates.map((g) => [g.id, g]));
	const into = /* @__PURE__ */ new Map();
	for (const w of c.wires) {
		const a = into.get(w.to) ?? [];
		a[w.pin] = w.from;
		into.set(w.to, a);
	}
	const seen = /* @__PURE__ */ new Set();
	const go = (gid, top = false) => {
		if (!gid) return "0";
		const g = byId.get(gid);
		if (!g) return "0";
		if (g.type === "INPUT") return nm.get(gid) ?? "?";
		if (seen.has(gid)) return "↺";
		seen.add(gid);
		const s = into.get(gid) ?? [];
		const a = go(s[0]), b = go(s[1]);
		seen.delete(gid);
		const wrap = (x) => top ? x : `(${x})`;
		switch (g.type) {
			case "OUTPUT": return go(s[0], true);
			case "NOT": return /^[A-Z0-9]+$|^¬|^\(/.test(a) ? `¬${a}` : `¬(${a})`;
			case "AND": return wrap(`${a} · ${b}`);
			case "OR": return wrap(`${a} + ${b}`);
			case "XOR": return wrap(`${a} ⊕ ${b}`);
			case "NAND": return `¬(${a} · ${b})`;
			case "NOR": return `¬(${a} + ${b})`;
			case "XNOR": return `¬(${a} ⊕ ${b})`;
			default: return "?";
		}
	};
	return go(id, true);
}
/** Truth table rows over all inputs (max 6 inputs = 64 rows). */
function truth(c) {
	const ins = c.gates.filter((g) => g.type === "INPUT").slice(0, 6);
	const outs = c.gates.filter((g) => g.type === "OUTPUT");
	const rows = [];
	for (let m = 0; m < 1 << ins.length; m++) {
		const map = /* @__PURE__ */ new Map();
		const bits = ins.map((g, k) => m >> ins.length - 1 - k & 1);
		ins.forEach((g, k) => map.set(g.id, bits[k]));
		const v = evaluate(c, map);
		rows.push({
			ins: bits,
			outs: outs.map((o) => v.get(o.id) ?? 0)
		});
	}
	return {
		ins,
		outs,
		rows
	};
}
var CHALLENGES = [
	{
		id: "and",
		inputs: 2,
		allowed: null,
		f: ([a, b]) => a & b
	},
	{
		id: "not-nand",
		inputs: 1,
		allowed: ["NAND"],
		f: ([a]) => a ? 0 : 1
	},
	{
		id: "xor-basic",
		inputs: 2,
		allowed: [
			"AND",
			"OR",
			"NOT"
		],
		f: ([a, b]) => a ^ b
	},
	{
		id: "or-nand",
		inputs: 2,
		allowed: ["NAND"],
		f: ([a, b]) => a | b
	},
	{
		id: "majority",
		inputs: 3,
		allowed: null,
		f: ([a, b, c]) => a & b | a & c | b & c
	}
];
function check(c, ch) {
	const ins = c.gates.filter((g) => g.type === "INPUT");
	const outs = c.gates.filter((g) => g.type === "OUTPUT");
	if (ins.length !== ch.inputs) return {
		ok: false,
		reason: "inputs"
	};
	if (outs.length !== 1) return {
		ok: false,
		reason: "output"
	};
	if (ch.allowed && c.gates.some((g) => g.type !== "INPUT" && g.type !== "OUTPUT" && !ch.allowed.includes(g.type))) return {
		ok: false,
		reason: "gates"
	};
	const t = truth(c);
	for (const r of t.rows) if (r.outs[0] !== ch.f(r.ins)) return {
		ok: false,
		reason: "table",
		bad: r.ins
	};
	return {
		ok: true,
		reason: "ok"
	};
}
var encode = (c) => btoa(unescape(encodeURIComponent(JSON.stringify({
	g: c.gates.map((g) => [
		g.id,
		g.type,
		Math.round(g.x),
		Math.round(g.y),
		g.v ?? 0
	]),
	w: c.wires.map((w) => [
		w.from,
		w.to,
		w.pin
	])
})))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
function decode(s) {
	try {
		const j = JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/")))));
		const gates = j.g.filter((g) => TYPES.includes(g[1])).slice(0, 300).map((g) => ({
			id: String(g[0]),
			type: g[1],
			x: Number(g[2]) || 0,
			y: Number(g[3]) || 0,
			v: g[4] ? 1 : 0
		}));
		const ids = new Set(gates.map((g) => g.id));
		return {
			gates,
			wires: j.w.filter((w) => ids.has(String(w[0])) && ids.has(String(w[1]))).slice(0, 600).map((w, i) => ({
				id: "w" + i,
				from: String(w[0]),
				to: String(w[1]),
				pin: Number(w[2]) ? 1 : 0
			}))
		};
	} catch {
		return null;
	}
}
function sample() {
	return {
		gates: [
			{
				id: "a",
				type: "INPUT",
				x: 60,
				y: 80,
				v: 1
			},
			{
				id: "b",
				type: "INPUT",
				x: 60,
				y: 260,
				v: 0
			},
			{
				id: "g1",
				type: "AND",
				x: 240,
				y: 60
			},
			{
				id: "g2",
				type: "NOT",
				x: 400,
				y: 60
			},
			{
				id: "g3",
				type: "XOR",
				x: 240,
				y: 300
			},
			{
				id: "g4",
				type: "OR",
				x: 560,
				y: 170
			},
			{
				id: "y",
				type: "OUTPUT",
				x: 730,
				y: 170
			}
		],
		wires: [
			{
				id: "w1",
				from: "a",
				to: "g1",
				pin: 0
			},
			{
				id: "w2",
				from: "b",
				to: "g1",
				pin: 1
			},
			{
				id: "w3",
				from: "g1",
				to: "g2",
				pin: 0
			},
			{
				id: "w4",
				from: "a",
				to: "g3",
				pin: 0
			},
			{
				id: "w5",
				from: "b",
				to: "g3",
				pin: 1
			},
			{
				id: "w6",
				from: "g2",
				to: "g4",
				pin: 0
			},
			{
				id: "w7",
				from: "g3",
				to: "g4",
				pin: 1
			},
			{
				id: "w8",
				from: "g4",
				to: "y",
				pin: 0
			}
		]
	};
}
/** Nibras Logic Lab: drag-and-drop logic gate simulator (SVG, runs fully in the browser). */
var CUR = "nibras-logic-current";
var SAVED = "nibras-logic-saved";
var COLORS = {
	AND: "#3fae5a",
	OR: "#2aa6b8",
	NOT: "#8b5cf6",
	NAND: "#e0a028",
	XOR: "#3b6bff",
	NOR: "#e0566b",
	XNOR: "#d0569f",
	INPUT: "#1f8f55",
	OUTPUT: "#1f8f55"
};
var HI = "#39ff9c";
var LO = "#3d6bff";
var PEND = "#c084fc";
var rid = () => Math.random().toString(36).slice(2, 9);
var loadSaved = () => {
	try {
		return JSON.parse(localStorage.getItem(SAVED) || "[]");
	} catch {
		return [];
	}
};
function portIn(g, k) {
	const s = size(g.type), n = pins(g.type);
	return {
		x: g.x,
		y: g.y + (n === 1 ? s.h / 2 : k === 0 ? s.h * .28 : s.h * .72)
	};
}
function portOut(g) {
	const s = size(g.type);
	return {
		x: g.x + s.w,
		y: g.y + s.h / 2
	};
}
function curve(a, b) {
	const dx = Math.max(40, Math.abs(b.x - a.x) / 2);
	return `M${a.x},${a.y} C${a.x + dx},${a.y} ${b.x - dx},${b.y} ${b.x},${b.y}`;
}
function LogicLabPage() {
	const { lang } = useI18n();
	const t = LL[lang] ?? LL.en;
	const [c, setC] = (0, import_react.useState)({
		gates: [],
		wires: []
	});
	const [hist, setHist] = (0, import_react.useState)([]);
	const [sel, setSel] = (0, import_react.useState)(null);
	const [pend, setPend] = (0, import_react.useState)(null);
	const [simOn, setSimOn] = (0, import_react.useState)(true);
	const [stepVals, setStepVals] = (0, import_react.useState)(/* @__PURE__ */ new Map());
	const [view, setView] = (0, import_react.useState)({
		x: -20,
		y: -20,
		k: 1
	});
	const [msg, setMsg] = (0, import_react.useState)("");
	const [openList, setOpenList] = (0, import_react.useState)(false);
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [ch, setCh] = (0, import_react.useState)(null);
	const [result, setResult] = (0, import_react.useState)("");
	const svgRef = (0, import_react.useRef)(null);
	const drag = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const h = location.hash.match(/#c=([\w-]+)/);
		const fromHash = h ? decode(h[1]) : null;
		let cur = null;
		try {
			cur = JSON.parse(localStorage.getItem(CUR) || "null");
		} catch {}
		setC(fromHash ?? (cur && cur.gates ? cur : sample()));
		setSaved(loadSaved());
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem(CUR, JSON.stringify(c));
		} catch {}
	}, [c]);
	(0, import_react.useEffect)(() => {
		if (!msg) return;
		const id = setTimeout(() => setMsg(""), 2600);
		return () => clearTimeout(id);
	}, [msg]);
	const settled = (0, import_react.useMemo)(() => evaluate(c), [c]);
	const vals = simOn ? settled : stepVals;
	const nm = (0, import_react.useMemo)(() => names(c), [c]);
	const tt = (0, import_react.useMemo)(() => truth(c), [c]);
	const byId = (0, import_react.useMemo)(() => new Map(c.gates.map((g) => [g.id, g])), [c]);
	const commit = (next, before = c) => {
		setHist((h) => [...h.slice(-49), before]);
		setC(next);
	};
	const undo = () => setHist((h) => {
		if (!h.length) return h;
		setC(h[h.length - 1]);
		setSel(null);
		return h.slice(0, -1);
	});
	const add = (type) => {
		const r = svgRef.current?.getBoundingClientRect();
		const cx = r ? view.x + r.width / view.k / 2 - 46 : 300, cy = r ? view.y + r.height / view.k / 2 - 28 : 200;
		const n = c.gates.length % 6;
		const g = {
			id: rid(),
			type,
			x: Math.round(cx + n * 14),
			y: Math.round(cy + n * 14),
			...type === "INPUT" ? { v: 0 } : {}
		};
		commit({
			...c,
			gates: [...c.gates, g]
		});
		setSel({
			kind: "gate",
			id: g.id
		});
	};
	const remove = () => {
		if (!sel) return;
		if (sel.kind === "gate") commit({
			gates: c.gates.filter((g) => g.id !== sel.id),
			wires: c.wires.filter((w) => w.from !== sel.id && w.to !== sel.id)
		});
		else commit({
			...c,
			wires: c.wires.filter((w) => w.id !== sel.id)
		});
		setSel(null);
	};
	const connect = (from, to, pin) => {
		if (from === to) return;
		commit({
			...c,
			wires: [...c.wires.filter((w) => !(w.to === to && w.pin === pin)), {
				id: rid(),
				from,
				to,
				pin
			}]
		});
	};
	const clickOut = (id) => {
		if (pend?.kind === "in") {
			connect(id, pend.id, pend.pin);
			setPend(null);
		} else setPend(pend?.kind === "out" && pend.id === id ? null : {
			kind: "out",
			id
		});
	};
	const clickIn = (id, pin) => {
		if (pend?.kind === "out") {
			connect(pend.id, id, pin);
			setPend(null);
		} else setPend({
			kind: "in",
			id,
			pin
		});
	};
	(0, import_react.useEffect)(() => {
		const key = (e) => {
			if (e.target.closest("input,textarea")) return;
			if (e.key === "Delete" || e.key === "Backspace") {
				if (sel) {
					e.preventDefault();
					remove();
				}
			} else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
				e.preventDefault();
				undo();
			} else if (e.key === "Escape") {
				setPend(null);
				setSel(null);
			}
		};
		addEventListener("keydown", key);
		return () => removeEventListener("keydown", key);
	});
	const onDown = (e, g) => {
		if (e.button !== 0) return;
		e.currentTarget.setPointerCapture?.(e.pointerId);
		if (g) {
			e.stopPropagation();
			drag.current = {
				kind: "gate",
				id: g.id,
				sx: e.clientX,
				sy: e.clientY,
				ox: g.x,
				oy: g.y,
				moved: false,
				before: c
			};
		} else drag.current = {
			kind: "pan",
			sx: e.clientX,
			sy: e.clientY,
			ox: view.x,
			oy: view.y
		};
	};
	const onMove = (e) => {
		const d = drag.current;
		if (!d) return;
		const dx = (e.clientX - d.sx) / view.k, dy = (e.clientY - d.sy) / view.k;
		if (d.kind === "pan") {
			setView((v) => ({
				...v,
				x: d.ox - dx,
				y: d.oy - dy
			}));
			return;
		}
		if (!d.moved && Math.hypot(dx, dy) < 4) return;
		d.moved = true;
		setC((cc) => ({
			...cc,
			gates: cc.gates.map((g) => g.id === d.id ? {
				...g,
				x: Math.round((d.ox + dx) / 10) * 10,
				y: Math.round((d.oy + dy) / 10) * 10
			} : g)
		}));
	};
	const onUp = (e) => {
		const d = drag.current;
		drag.current = null;
		if (!d) return;
		if (d.kind === "pan") {
			if (Math.hypot(e.clientX - d.sx, e.clientY - d.sy) < 4) {
				setSel(null);
				setPend(null);
			}
			return;
		}
		if (d.moved) {
			setHist((h) => [...h.slice(-49), d.before]);
			return;
		}
		const g = byId.get(d.id);
		if (g?.type === "INPUT" && sel?.kind === "gate" && sel.id === g.id || g?.type === "INPUT" && !sel) commit({
			...c,
			gates: c.gates.map((x) => x.id === g.id ? {
				...x,
				v: x.v ? 0 : 1
			} : x)
		});
		setSel({
			kind: "gate",
			id: d.id
		});
	};
	const zoom = (f, cx, cy) => setView((v) => {
		const r = svgRef.current.getBoundingClientRect();
		const k = Math.min(2.5, Math.max(.3, v.k * f));
		const px = cx ?? r.width / 2, py = cy ?? r.height / 2;
		const wx = px / v.k + v.x, wy = py / v.k + v.y;
		return {
			k,
			x: wx - px / k,
			y: wy - py / k
		};
	});
	const fit = () => {
		const r = svgRef.current?.getBoundingClientRect();
		if (!r || !c.gates.length) return setView({
			x: -20,
			y: -20,
			k: 1
		});
		const xs = c.gates.map((g) => g.x), ys = c.gates.map((g) => g.y);
		const x0 = Math.min(...xs) - 40, y0 = Math.min(...ys) - 40, x1 = Math.max(...xs) + 140, y1 = Math.max(...ys) + 100;
		const k = Math.min(1.6, Math.max(.3, Math.min(r.width / (x1 - x0), r.height / (y1 - y0))));
		setView({
			k,
			x: x0 - (r.width / k - (x1 - x0)) / 2,
			y: y0 - (r.height / k - (y1 - y0)) / 2
		});
	};
	(0, import_react.useEffect)(() => {
		const el = svgRef.current;
		if (!el) return;
		const w = (e) => {
			e.preventDefault();
			const r = el.getBoundingClientRect();
			zoom(e.deltaY < 0 ? 1.1 : 1 / 1.1, e.clientX - r.left, e.clientY - r.top);
		};
		el.addEventListener("wheel", w, { passive: false });
		return () => el.removeEventListener("wheel", w);
	});
	(0, import_react.useEffect)(() => {
		const id = setTimeout(fit, 50);
		return () => clearTimeout(id);
	}, [c.gates.length === 0]);
	const save = () => {
		const name = prompt(t.nameAsk, `Circuit ${saved.length + 1}`);
		if (!name) return;
		const next = [{
			id: rid(),
			name: name.slice(0, 60),
			at: Date.now(),
			c
		}, ...saved].slice(0, 50);
		setSaved(next);
		try {
			localStorage.setItem(SAVED, JSON.stringify(next));
			setMsg(t.saved);
		} catch {}
	};
	const delSaved = (id) => {
		if (!confirm(t.confirmDel)) return;
		const next = saved.filter((s) => s.id !== id);
		setSaved(next);
		localStorage.setItem(SAVED, JSON.stringify(next));
	};
	const share = async () => {
		const u = location.origin + location.pathname + "#c=" + encode(c);
		history.replaceState(null, "", u);
		try {
			await navigator.clipboard.writeText(u);
		} catch {}
		setMsg(t.copied);
	};
	const svgText = () => {
		const el = svgRef.current.cloneNode(true);
		const xs = c.gates.map((g) => g.x), ys = c.gates.map((g) => g.y);
		const x0 = Math.min(0, ...xs) - 40, y0 = Math.min(0, ...ys) - 40, w = Math.max(...xs, 200) + 160 - x0, h = Math.max(...ys, 100) + 120 - y0;
		el.setAttribute("viewBox", `${x0} ${y0} ${w} ${h}`);
		el.setAttribute("width", String(w));
		el.setAttribute("height", String(h));
		el.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		el.querySelectorAll("[data-noexport]").forEach((n) => n.remove());
		const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		bg.setAttribute("x", String(x0));
		bg.setAttribute("y", String(y0));
		bg.setAttribute("width", String(w));
		bg.setAttribute("height", String(h));
		bg.setAttribute("fill", "#0a0f1c");
		el.insertBefore(bg, el.firstChild);
		return {
			s: new XMLSerializer().serializeToString(el),
			w,
			h
		};
	};
	const dl = (href, name) => {
		const a = document.createElement("a");
		a.href = href;
		a.download = name;
		a.click();
	};
	const exportSvg = () => {
		const { s } = svgText();
		const u = URL.createObjectURL(new Blob([s], { type: "image/svg+xml" }));
		dl(u, "logic-circuit.svg");
		setTimeout(() => URL.revokeObjectURL(u), 1e3);
	};
	const exportPng = () => {
		const { s, w, h } = svgText();
		const img = new Image();
		img.onload = () => {
			const cv = document.createElement("canvas");
			cv.width = w * 2;
			cv.height = h * 2;
			const x = cv.getContext("2d");
			x.scale(2, 2);
			x.drawImage(img, 0, 0, w, h);
			dl(cv.toDataURL("image/png"), "logic-circuit.png");
		};
		img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);
	};
	const runCheck = () => {
		const chal = CHALLENGES.find((x) => x.id === ch);
		if (!chal) return;
		const r = check(c, chal);
		setResult(r.ok ? "ok:" + t.ok : t.bad + " " + (r.reason === "inputs" ? t.r_inputs.replace("{n}", String(chal.inputs)) : r.reason === "output" ? t.r_output : r.reason === "gates" ? t.r_gates.replace("{g}", chal.allowed.join(", ")) : t.r_table.replace("{b}", (r.bad ?? []).join(""))));
		if (r.ok) try {
			const d = JSON.parse(localStorage.getItem("nibras-logic-done") || "[]");
			if (!d.includes(chal.id)) localStorage.setItem("nibras-logic-done", JSON.stringify([...d, chal.id]));
		} catch {}
	};
	const [done, setDone] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			setDone(JSON.parse(localStorage.getItem("nibras-logic-done") || "[]"));
		} catch {}
	}, [result]);
	const startCh = (id) => {
		const chal = CHALLENGES.find((x) => x.id === id);
		const gates = [...Array.from({ length: chal.inputs }, (_, i) => ({
			id: rid(),
			type: "INPUT",
			x: 40,
			y: 40 + i * 110,
			v: 0
		})), {
			id: rid(),
			type: "OUTPUT",
			x: 600,
			y: 40 + (chal.inputs - 1) * 110 / 2
		}];
		commit({
			gates,
			wires: []
		});
		setCh(id);
		setResult("");
		setTimeout(fit, 30);
	};
	const outs = c.gates.filter((g) => g.type === "OUTPUT");
	const btn = "inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 text-[12.5px] text-[#d6def5] hover:border-[#4f6bff]/60 hover:bg-[#4f6bff]/10 disabled:opacity-40";
	const chal = CHALLENGES.find((x) => x.id === ch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-[1600px] px-2 pt-20 pb-10 md:px-4 md:pt-24",
		dir: lang === "ar" ? "rtl" : "ltr",
		"data-testid": "logiclab",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex flex-wrap items-end justify-between gap-2 px-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "text-xs text-[#8aa2ff] hover:underline",
						href: localeHref(lang, "/learn"),
						children: ["← ", t.back]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "flex items-center gap-2 font-display text-2xl font-bold md:text-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-7 text-[#39ff9c]" }),
							" ",
							t.title
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-[#9aa6c4]",
						children: t.lead
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c] shadow-[0_30px_80px_-40px_#000]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-1.5 border-b border-white/[0.07] bg-[#0d1426] px-2 py-2",
						dir: "ltr",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: btn,
								onClick: () => {
									commit({
										gates: [],
										wires: []
									});
									setCh(null);
									history.replaceState(null, "", location.pathname);
								},
								"data-testid": "ll-new",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePlus2, { className: "size-4" }),
									" ",
									t.newC
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: btn,
									onClick: () => setOpenList((o) => !o),
									"data-testid": "ll-open",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-4" }),
										" ",
										t.open
									]
								}), openList ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute start-0 top-full z-30 mt-1 w-72 rounded-xl border border-white/10 bg-[#111a33] p-1.5 text-[13px] shadow-2xl",
									"data-testid": "ll-openlist",
									children: saved.length ? saved.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 rounded-lg hover:bg-white/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "min-w-0 flex-1 truncate px-2 py-2 text-start",
											onClick: () => {
												commit(s.c);
												setOpenList(false);
												setTimeout(fit, 30);
											},
											children: [
												s.name,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[11px] text-[#7d89a8]",
													children: ["· ", s.c.gates.length]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "rounded p-1.5 text-[#7d89a8] hover:text-red-300",
											onClick: () => delSaved(s.id),
											"aria-label": t.del,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
										})]
									}, s.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "p-2 text-[#7d89a8]",
										children: t.none
									})
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: btn,
								onClick: save,
								"data-testid": "ll-save",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }),
									" ",
									t.save
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: btn,
								onClick: () => {
									if (confirm(t.confirmClear)) {
										commit({
											gates: [],
											wires: []
										});
										setMsg(t.cleared);
									}
								},
								"data-testid": "ll-clear",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eraser, { className: "size-4" }),
									" ",
									t.clear
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 h-6 w-px bg-white/10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: btn,
								onClick: undo,
								disabled: !hist.length,
								"data-testid": "ll-undo",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "size-4" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: t.undo
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: btn,
								onClick: remove,
								disabled: !sel,
								"data-testid": "ll-del",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: t.del
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 px-2.5 text-[12.5px]",
								children: [
									t.sim,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										role: "switch",
										"aria-checked": simOn,
										onClick: () => {
											setSimOn((s) => !s);
											setStepVals(/* @__PURE__ */ new Map());
										},
										className: "relative h-5 w-9 rounded-full transition " + (simOn ? "bg-[#1fbf6b]" : "bg-white/15"),
										"data-testid": "ll-sim",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0.5 size-4 rounded-full bg-white transition-all " + (simOn ? "left-[18px]" : "left-0.5") })
									}),
									simOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 text-[#39ff9c]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5 text-[#7d89a8]" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: btn,
								onClick: () => setStepVals((v) => tick(c, v)),
								disabled: simOn,
								"data-testid": "ll-step",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "size-4" }),
									" ",
									t.step
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: btn,
								onClick: () => void share(),
								"data-testid": "ll-share",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-4" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden md:inline",
										children: t.share
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: btn,
								onClick: exportPng,
								"data-testid": "ll-png",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " PNG"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: btn,
								onClick: exportSvg,
								"data-testid": "ll-svg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " SVG"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col lg:flex-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "border-b border-white/[0.07] p-2 lg:w-44 lg:shrink-0 lg:border-b-0 lg:border-e",
								dir: "ltr",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-1.5 px-1 text-[11px] font-semibold uppercase tracking-wider text-[#7d89a8]",
										children: t.palette
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-1.5 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible",
										children: TYPES.map((ty) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => add(ty),
											className: "flex h-10 shrink-0 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 text-[12px] font-semibold hover:border-white/30",
											"data-testid": `ll-add-${ty}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-6 w-8 place-items-center rounded-md text-[9px] text-white",
												style: { background: COLORS[ty] },
												children: ty === "INPUT" ? "1" : ty === "OUTPUT" ? "OUT" : ty.slice(0, 4)
											}), ty]
										}, ty))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 hidden px-1 text-[11px] leading-snug text-[#7d89a8] lg:block",
										children: t.paletteHint
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										ref: svgRef,
										className: "block h-[56vh] min-h-[340px] w-full touch-none select-none lg:h-[calc(100vh-260px)] lg:min-h-[520px]",
										viewBox: `${view.x} ${view.y} ${(svgRef.current?.clientWidth ?? 900) / view.k} ${(svgRef.current?.clientHeight ?? 560) / view.k}`,
										onPointerDown: (e) => onDown(e),
										onPointerMove: onMove,
										onPointerUp: onUp,
										"data-testid": "ll-canvas",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
													id: "llgrid",
													width: "20",
													height: "20",
													patternUnits: "userSpaceOnUse",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														d: "M20 0H0V20",
														fill: "none",
														stroke: "#16203a",
														strokeWidth: "1"
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("pattern", {
													id: "llgrid2",
													width: "100",
													height: "100",
													patternUnits: "userSpaceOnUse",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
														width: "100",
														height: "100",
														fill: "url(#llgrid)"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														d: "M100 0H0V100",
														fill: "none",
														stroke: "#1c2949",
														strokeWidth: "1"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
													id: "llglow",
													x: "-50%",
													y: "-50%",
													width: "200%",
													height: "200%",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
														stdDeviation: "3",
														result: "b"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "b" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
												})
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
												"data-noexport": true,
												x: view.x - 5e3,
												y: view.y - 5e3,
												width: 2e4,
												height: 2e4,
												fill: "url(#llgrid2)"
											}),
											c.wires.map((w) => {
												const a = byId.get(w.from), b = byId.get(w.to);
												if (!a || !b) return null;
												const p = portOut(a), q = portIn(b, w.pin), v = vals.get(w.from) ?? 0, on = sel?.kind === "wire" && sel.id === w.id;
												const col = on ? PEND : v ? HI : LO;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
													onPointerDown: (e) => {
														e.stopPropagation();
														setSel({
															kind: "wire",
															id: w.id
														});
													},
													className: "cursor-pointer",
													"data-testid": "ll-wire",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
															d: curve(p, q),
															stroke: "transparent",
															strokeWidth: "14",
															fill: "none"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
															d: curve(p, q),
															stroke: col,
															strokeWidth: on ? 3.5 : 2.5,
															fill: "none",
															filter: v || on ? "url(#llglow)" : void 0,
															opacity: v || on ? 1 : .75
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
															x: (p.x + q.x) / 2,
															y: (p.y + q.y) / 2 - 6,
															fill: col,
															fontSize: "11",
															fontFamily: "monospace",
															textAnchor: "middle",
															children: v
														})
													]
												}, w.id);
											}),
											c.gates.map((g) => {
												const s = size(g.type), v = vals.get(g.id) ?? 0, isSel = sel?.kind === "gate" && sel.id === g.id, col = COLORS[g.type];
												const io = g.type === "INPUT" || g.type === "OUTPUT";
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
													transform: `translate(${g.x},${g.y})`,
													"data-testid": `ll-gate-${g.type}`,
													"data-v": v,
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
															onPointerDown: (e) => onDown(e, g),
															className: g.type === "INPUT" ? "cursor-pointer" : "cursor-move",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
																	width: s.w,
																	height: s.h,
																	rx: "12",
																	fill: io ? v ? "#0f3b26" : "#111a2e" : col + "33",
																	stroke: isSel ? PEND : io && v ? HI : col,
																	strokeWidth: isSel ? 2.5 : 1.6,
																	filter: io && v ? "url(#llglow)" : void 0
																}),
																io ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
																	x: s.w / 2,
																	y: s.h / 2 + 8,
																	textAnchor: "middle",
																	fontSize: "24",
																	fontWeight: "700",
																	fontFamily: "monospace",
																	fill: v ? HI : "#8aa2ff",
																	children: v
																}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
																	x: s.w / 2,
																	y: s.h / 2 + 5,
																	textAnchor: "middle",
																	fontSize: "14",
																	fontWeight: "700",
																	fill: "#eef2ff",
																	fontFamily: "system-ui",
																	children: g.type
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
																	x: io ? s.w / 2 : s.w / 2,
																	y: -6,
																	textAnchor: "middle",
																	fontSize: "12",
																	fill: "#9aa6c4",
																	fontFamily: "system-ui",
																	children: io ? nm.get(g.id) : ""
																})
															]
														}),
														Array.from({ length: pins(g.type) }, (_, k) => {
															const p = portIn(g, k);
															const on = pend?.kind === "in" && pend.id === g.id && pend.pin === k;
															return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																cx: p.x - g.x,
																cy: p.y - g.y,
																r: on ? 8 : 6.5,
																fill: on ? PEND : "#0a0f1c",
																stroke: on ? PEND : "#8aa2ff",
																strokeWidth: "2",
																className: "cursor-crosshair",
																onPointerDown: (e) => {
																	e.stopPropagation();
																	clickIn(g.id, k);
																},
																"data-testid": "ll-in"
															}, k);
														}),
														g.type !== "OUTPUT" ? (() => {
															const p = portOut(g);
															const on = pend?.kind === "out" && pend.id === g.id;
															return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
																cx: p.x - g.x,
																cy: p.y - g.y,
																r: on ? 8 : 6.5,
																fill: on ? PEND : v ? HI : "#0a0f1c",
																stroke: on ? PEND : v ? HI : "#8aa2ff",
																strokeWidth: "2",
																className: "cursor-crosshair",
																onPointerDown: (e) => {
																	e.stopPropagation();
																	clickOut(g.id);
																},
																"data-testid": "ll-out"
															});
														})() : null
													]
												}, g.id);
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-2 end-2 flex gap-1",
										dir: "ltr",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "grid size-9 place-items-center rounded-lg border border-white/10 bg-[#111a33]/90",
												onClick: () => zoom(1.2),
												"aria-label": "+",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "grid size-9 place-items-center rounded-lg border border-white/10 bg-[#111a33]/90",
												onClick: () => zoom(1 / 1.2),
												"aria-label": "-",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "grid size-9 place-items-center rounded-lg border border-white/10 bg-[#111a33]/90",
												onClick: fit,
												"aria-label": t.fit,
												title: t.fit,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "size-4" })
											})
										]
									}),
									pend ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute start-2 top-2 rounded-lg border border-[#c084fc]/50 bg-[#1b1233]/90 px-3 py-1.5 text-xs text-[#e9d5ff]",
										children: pend.kind === "out" ? t.tapIn : t.tapOut
									}) : null,
									msg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute start-1/2 top-2 -translate-x-1/2 rounded-lg bg-[#1fbf6b] px-3 py-1.5 text-xs font-semibold text-black",
										role: "status",
										children: msg
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "space-y-3 border-t border-white/[0.07] p-3 text-[13px] lg:w-72 lg:shrink-0 lg:border-s lg:border-t-0 lg:overflow-auto",
								style: { maxHeight: "calc(100vh - 200px)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-xl border border-white/10 bg-white/[0.02] p-2.5",
										"data-testid": "ll-truth",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9aa6c4]",
											children: t.truth
										}), outs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "max-h-64 overflow-auto",
											dir: "ltr",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
												className: "w-full text-center font-mono text-[12px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
													className: "text-[#7d89a8]",
													children: [tt.ins.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-1 py-0.5",
														children: nm.get(g.id)
													}, g.id)), tt.outs.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "px-1 text-[#39ff9c]",
														children: nm.get(g.id)
													}, g.id))]
												}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: tt.rows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
													className: "border-t border-white/5",
													children: [r.ins.map((b, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "py-0.5",
														children: b
													}, k)), r.outs.map((b, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: b ? "text-[#39ff9c]" : "text-[#5d7bff]",
														children: b
													}, k))]
												}, i)) })]
											}), c.gates.filter((g) => g.type === "INPUT").length > 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-[11px] text-amber-300",
												children: t.tooMany
											}) : null]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[#7d89a8]",
											children: t.noOut
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-xl border border-white/10 bg-white/[0.02] p-2.5",
										"data-testid": "ll-expr",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9aa6c4]",
											children: t.expr
										}), outs.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "break-words rounded-lg bg-[#0f2a1d] px-2 py-1.5 font-mono text-[13px] text-[#7dffbe]",
											dir: "ltr",
											children: [
												nm.get(o.id),
												" = ",
												expr(c, o.id, nm)
											]
										}, o.id))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-xl border border-white/10 bg-white/[0.02] p-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9aa6c4]",
											children: t.legend
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "space-y-1 text-[12px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "h-1 w-6 rounded",
														style: {
															background: HI,
															boxShadow: `0 0 6px ${HI}`
														}
													}), t.high]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "h-1 w-6 rounded",
														style: { background: LO }
													}), t.low]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "h-1 w-6 rounded",
															style: { background: PEND }
														}),
														t.selected,
														" / ",
														t.pending
													]
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "rounded-xl border border-white/10 bg-white/[0.02] p-2.5",
										"data-testid": "ll-challenges",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
												className: "mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9aa6c4]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-3.5 text-amber-300" }),
													" ",
													t.challenges,
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "ms-auto normal-case",
														children: [
															done.length,
															"/",
															CHALLENGES.length
														]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "space-y-1",
												children: CHALLENGES.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													className: "w-full rounded-lg px-2 py-1.5 text-start hover:bg-white/5 " + (ch === x.id ? "bg-[#4f6bff]/15 ring-1 ring-[#4f6bff]/50" : ""),
													onClick: () => startCh(x.id),
													"data-testid": `ll-ch-${x.id}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-semibold",
														children: [done.includes(x.id) ? "✓ " : "", t["ch_" + x.id]]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[11.5px] text-[#9aa6c4]",
														children: t["ch_" + x.id + "_d"]
													})]
												}) }, x.id))
											}),
											chal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												className: "mt-2 h-9 w-full rounded-lg bg-[#2f6bff] font-semibold text-white hover:bg-[#3d77ff]",
												onClick: runCheck,
												"data-testid": "ll-check",
												children: t.checkBtn
											}) : null,
											result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 rounded-lg px-2 py-1.5 text-[12px] " + (result.startsWith("ok:") ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/10 text-red-300"),
												"data-testid": "ll-result",
												children: result.replace(/^ok:/, "")
											}) : null
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/[0.07] bg-[#0d1426] px-3 py-1.5 text-[11.5px] text-[#7d89a8]",
						"data-testid": "ll-status",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full " + (simOn ? "bg-emerald-400" : "bg-amber-400") }), simOn ? t.simOn : t.simOff]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								t.gates,
								": ",
								c.gates.filter((g) => g.type !== "INPUT" && g.type !== "OUTPUT").length
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								t.wires,
								": ",
								c.wires.length
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								t.inputs,
								": ",
								c.gates.filter((g) => g.type === "INPUT").length
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								t.outputs,
								": ",
								outs.length
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(view.k * 100), "%"] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 px-1 text-xs text-[#7d89a8] lg:hidden",
				children: t.paletteHint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 px-1 text-xs text-[#7d89a8]",
				children: t.local
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-6 border-t border-white/10 pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsLegalLinks, {})
			})
		]
	});
}
//#endregion
export { LogicLabPage as t };
