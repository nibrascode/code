import { o as __toESM } from "../_runtime.mjs";
import { s as pagesOf, t as HUBS } from "./meta-Bb3__USb.mjs";
import { i as localeHref } from "./locale-path-fYvKyZ8f.mjs";
import { l as toolPath, n as TOOLS_PAGE, o as pageTools, t as TOOLS$1 } from "./tools-Du7YMG1G.mjs";
import { b as programmingLocalePath, d as articlesForTopic, g as hasProgrammingLocale, o as PROGRAMMING_SEO, p as findResourceTopic } from "./ru-resources-BOxHqTS-.mjs";
import { a as searchPath, s as searchTopicPath, t as SEARCH } from "./search-pages-DC4DCEux.mjs";
import { i as comparePath, t as COMPARE } from "./learn-pages-BHxENIQ7.mjs";
import { r as paketPath, t as PAKET } from "./paket-Wy15rr00.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as SITE_CODE, n as CODE_SAMPLE_HUB, t as CODE_SAMPLES, x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { Ar as ArrowUpRight, Cr as BookOpen, Et as Package, Fn as FileCode, It as MessageCircleQuestion, Kn as Database, L as Shield, N as Sparkles, S as Terminal, W as Server, Xt as ListChecks, Zn as Copy, _r as Bug, br as Boxes, dn as GraduationCap, in as Info, nr as Code, or as CircleHelp, pn as GitCompare, r as Wrench, vr as Briefcase, yr as Braces } from "../_libs/lucide-react.mjs";
import { Jn as LIBRARY, Ln as InfoCard, Rn as InfoCards, zn as splitSentences } from "./router-Da_pLWIk.mjs";
import { i as libParagraphs, o as savedLib, r as libItems } from "./library-admin-BpkK6xum.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/library-page-C46BmQQi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var L = (az, en, tr, ar, ru) => ({
	az,
	en,
	tr,
	ar,
	ru
});
var C = {
	tool: L("Canlı alət", "Live tool", "Canlı araç", "أداة مباشرة", "Живой инструмент"),
	copy: L("Kopyala", "Copy", "Kopyala", "نسخ", "Копировать"),
	copied: L("Kopyalandı", "Copied", "Kopyalandı", "تم النسخ", "Скопировано"),
	local: L("Brauzerdə işləyir, heç nə serverə getmir.", "Runs in your browser; nothing is sent to a server.", "Tarayıcıda çalışır; hiçbir şey sunucuya gitmez.", "يعمل في المتصفح ولا يُرسل شيء إلى خادم.", "Работает в браузере, ничего не уходит на сервер."),
	rsyncT: L("rsync əmr generatoru", "rsync command generator", "rsync komut üreteci", "مولّد أوامر rsync", "Генератор команд rsync"),
	src: L("Mənbə", "Source", "Kaynak", "المصدر", "Источник"),
	dst: L("Hədəf", "Destination", "Hedef", "الوجهة", "Назначение"),
	remote: L("Uzaq server (user@host, boş = lokal)", "Remote server (user@host, empty = local)", "Uzak sunucu (user@host, boş = yerel)", "خادم بعيد (user@host، فارغ = محلي)", "Удалённый сервер (user@host, пусто = локально)"),
	dir: L("İstiqamət", "Direction", "Yön", "الاتجاه", "Направление"),
	push: L("Lokal → server", "Local → server", "Yerel → sunucu", "محلي ← خادم", "Локально → сервер"),
	pull: L("Server → lokal", "Server → local", "Sunucu → yerel", "خادم → محلي", "Сервер → локально"),
	del: L("Hədəfdə artıq faylları sil (--delete)", "Delete extra files at destination (--delete)", "Hedefteki fazla dosyaları sil (--delete)", "احذف الملفات الزائدة في الوجهة (--delete)", "Удалять лишние файлы в назначении (--delete)"),
	dry: L("Sınaq (--dry-run, heç nə dəyişmir)", "Dry run (--dry-run, changes nothing)", "Deneme (--dry-run, hiçbir şey değişmez)", "تجربة (--dry-run، لا يغيّر شيئاً)", "Пробный прогон (--dry-run)"),
	zip: L("Sıxaraq ötür (-z)", "Compress in transit (-z)", "Sıkıştırarak aktar (-z)", "ضغط أثناء النقل (-z)", "Сжимать при передаче (-z)"),
	prog: L("İrəliləyişi göstər (--progress)", "Show progress (--progress)", "İlerlemeyi göster (--progress)", "إظهار التقدم (--progress)", "Показывать прогресс (--progress)"),
	excl: L("İstisna (vergüllə: node_modules,.git)", "Exclude (comma: node_modules,.git)", "Hariç tut (virgülle: node_modules,.git)", "استثناء (بفواصل: node_modules,.git)", "Исключить (через запятую: node_modules,.git)"),
	port: L("SSH portu", "SSH port", "SSH portu", "منفذ SSH", "SSH-порт"),
	slash: L("Qeyd: mənbənin sonundakı «/» qovluğun içini köçürür, «/» olmasa qovluğun özünü.", "Note: a trailing «/» on the source copies the folder's contents; without it, the folder itself.", "Not: kaynağın sonundaki «/» klasörün içini kopyalar, yoksa klasörün kendisini.", "ملاحظة: «/» في نهاية المصدر ينسخ محتوى المجلد، وبدونها المجلد نفسه.", "Примечание: «/» в конце источника копирует содержимое папки, без него — саму папку."),
	chmodT: L("chmod kalkulyatoru", "chmod calculator", "chmod hesaplayıcı", "حاسبة chmod", "Калькулятор chmod"),
	owner: L("Sahib", "Owner", "Sahip", "المالك", "Владелец"),
	group: L("Qrup", "Group", "Grup", "المجموعة", "Группа"),
	other: L("Digərləri", "Others", "Diğerleri", "الآخرون", "Остальные"),
	r: L("oxu", "read", "oku", "قراءة", "чтение"),
	w: L("yaz", "write", "yaz", "كتابة", "запись"),
	x: L("icra", "execute", "çalıştır", "تنفيذ", "выполнение"),
	file: L("Fayl", "File", "Dosya", "الملف", "Файл"),
	mdT: L("Canlı Markdown → PDF", "Live Markdown → PDF", "Canlı Markdown → PDF", "Markdown مباشر → PDF", "Живой Markdown → PDF"),
	pdf: L("PDF kimi saxla", "Save as PDF", "PDF olarak kaydet", "حفظ كـ PDF", "Сохранить как PDF"),
	pdfHint: L("Çap pəncərəsində «PDF kimi saxla» seçin.", "In the print dialog choose «Save as PDF».", "Yazdır penceresinde «PDF olarak kaydet»i seçin.", "اختر «حفظ كـ PDF» في نافذة الطباعة.", "В окне печати выберите «Сохранить как PDF»."),
	cronT: L("Cron ifadəsi qurucusu", "Cron expression builder", "Cron ifadesi oluşturucu", "منشئ تعبير cron", "Конструктор cron-выражения"),
	min: L("Dəqiqə", "Minute", "Dakika", "الدقيقة", "Минута"),
	hour: L("Saat", "Hour", "Saat", "الساعة", "Час"),
	dom: L("Ayın günü", "Day of month", "Ayın günü", "يوم الشهر", "День месяца"),
	mon: L("Ay", "Month", "Ay", "الشهر", "Месяц"),
	dow: L("Həftənin günü (0=bazar)", "Day of week (0=Sun)", "Haftanın günü (0=Pazar)", "يوم الأسبوع (0=الأحد)", "День недели (0=вс)"),
	every: L("hər", "every", "her", "كل", "каждый"),
	bad: L("Səhv", "Invalid", "Hatalı", "غير صالح", "Ошибка"),
	jsonT: L("JSON formatlayıcı və yoxlayıcı", "JSON formatter & validator", "JSON biçimlendirici ve doğrulayıcı", "منسّق ومدقق JSON", "Форматирование и проверка JSON"),
	pretty: L("Formatla", "Format", "Biçimlendir", "تنسيق", "Форматировать"),
	mini: L("Sıx", "Minify", "Küçült", "تصغير", "Сжать"),
	ok: L("JSON düzgündür", "Valid JSON", "Geçerli JSON", "JSON صالح", "JSON корректен"),
	sshT: L("SSH əmri və ~/.ssh/config generatoru", "SSH command & ~/.ssh/config generator", "SSH komutu ve ~/.ssh/config üreteci", "مولّد أمر SSH و ~/.ssh/config", "Генератор SSH-команды и ~/.ssh/config"),
	alias: L("Qısa ad (Host)", "Alias (Host)", "Kısa ad (Host)", "اسم مختصر (Host)", "Псевдоним (Host)"),
	key: L("Açar faylı", "Key file", "Anahtar dosyası", "ملف المفتاح", "Файл ключа"),
	user: L("İstifadəçi", "User", "Kullanıcı", "المستخدم", "Пользователь")
};
var field = "w-full rounded-lg border border-white/15 bg-black/20 px-2 py-1.5 text-sm";
var q = (s) => /^[\w./~@:-]+$/.test(s) ? s : `'${s.replace(/'/g, "'\\''")}'`;
function Out({ text, lang }) {
	const [ok, setOk] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 flex items-start gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "min-w-0 flex-1 overflow-x-auto rounded-lg bg-black/40 p-3 text-sm",
			dir: "ltr",
			"data-testid": "micro-out",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: text })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "rounded-lg border border-white/15 px-2 py-1.5 text-xs",
			onClick: () => {
				navigator.clipboard?.writeText(text);
				setOk(true);
				setTimeout(() => setOk(false), 1200);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "me-1 inline size-3.5" }), ok ? C.copied[lang] : C.copy[lang]]
		})]
	});
}
var Check$1 = ({ v, set, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
	className: "flex items-center gap-2 text-sm",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "checkbox",
		checked: v,
		onChange: (e) => set(e.target.checked)
	}), label]
});
function Rsync({ lang }) {
	const [src, setSrc] = (0, import_react.useState)("./site/");
	const [dst, setDst] = (0, import_react.useState)("/var/www/site/");
	const [remote, setRemote] = (0, import_react.useState)("user@example.com");
	const [pull, setPull] = (0, import_react.useState)(false);
	const [del, setDel] = (0, import_react.useState)(false);
	const [dry, setDry] = (0, import_react.useState)(true);
	const [z, setZ] = (0, import_react.useState)(true);
	const [pg, setPg] = (0, import_react.useState)(true);
	const [ex, setEx] = (0, import_react.useState)("node_modules,.git");
	const [port, setPort] = (0, import_react.useState)("22");
	const parts = ["rsync", `-a${z ? "z" : ""}v`];
	if (pg) parts.push("--progress");
	if (del) parts.push("--delete");
	if (dry) parts.push("--dry-run");
	for (const e of ex.split(",").map((s) => s.trim()).filter(Boolean)) parts.push(`--exclude=${q(e)}`);
	if (remote && port && port !== "22") parts.push(`-e ${q(`ssh -p ${port}`)}`);
	const r = (p) => remote ? `${remote}:${q(p)}` : q(p);
	parts.push(...pull ? [r(src), q(dst)] : [q(src), r(dst)]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [C.src[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: src,
						onChange: (e) => setSrc(e.target.value),
						dir: "ltr"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [C.dst[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: dst,
						onChange: (e) => setDst(e.target.value),
						dir: "ltr"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [C.remote[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: remote,
						onChange: (e) => setRemote(e.target.value),
						dir: "ltr"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [C.port[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: port,
						onChange: (e) => setPort(e.target.value.replace(/\D/g, "")),
						dir: "ltr"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm sm:col-span-2",
					children: [C.excl[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: ex,
						onChange: (e) => setEx(e.target.value),
						dir: "ltr"
					})]
				})
			]
		}),
		remote ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex gap-4 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "radio",
					checked: !pull,
					onChange: () => setPull(false)
				}),
				" ",
				C.push[lang]
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "radio",
					checked: pull,
					onChange: () => setPull(true)
				}),
				" ",
				C.pull[lang]
			] })]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 grid gap-1 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
					v: dry,
					set: setDry,
					label: C.dry[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
					v: del,
					set: setDel,
					label: C.del[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
					v: z,
					set: setZ,
					label: C.zip[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
					v: pg,
					set: setPg,
					label: C.prog[lang]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
			text: parts.join(" "),
			lang
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs text-muted",
			children: C.slash[lang]
		})
	] });
}
function Chmod({ lang }) {
	const [bits, setBits] = (0, import_react.useState)([
		7,
		5,
		5
	]);
	const [file, setFile] = (0, import_react.useState)("script.sh");
	const who = [
		C.owner,
		C.group,
		C.other
	];
	const sym = bits.map((b) => `${b & 4 ? "r" : "-"}${b & 2 ? "w" : "-"}${b & 1 ? "x" : "-"}`).join("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-2 text-sm",
			children: who.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "rounded-lg border border-white/10 p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "px-1 font-semibold",
					children: w[lang]
				}), [
					[4, C.r],
					[2, C.w],
					[1, C.x]
				].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
					v: !!(bits[i] & v),
					set: (on) => setBits(bits.map((b, j) => j === i ? on ? b | v : b & ~v : b)),
					label: l[lang]
				}, v))]
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-2 block text-sm",
			children: [C.file[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: field,
				value: file,
				onChange: (e) => setFile(e.target.value),
				dir: "ltr"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
			text: `chmod ${bits.join("")} ${q(file || "file")}   # ${sym}`,
			lang
		})
	] });
}
var esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
function inline(s) {
	return s.replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>").replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, "<a href=\"$2\" rel=\"noopener nofollow\">$1</a>");
}
/** Small, escape-first Markdown renderer (headings, lists, quotes, code, links). */
function mdToHtml(md) {
	const out = [];
	const lines = esc(md.replace(/\r/g, "")).split("\n");
	let list = null;
	let code = false;
	const close = () => {
		if (list) {
			out.push(`</${list}>`);
			list = null;
		}
	};
	for (const ln of lines) {
		if (/^```/.test(ln)) {
			close();
			out.push(code ? "</code></pre>" : "<pre><code>");
			code = !code;
			continue;
		}
		if (code) {
			out.push(ln + "\n");
			continue;
		}
		let m;
		if (m = /^(#{1,6})\s+(.*)$/.exec(ln)) {
			close();
			out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`);
		} else if (m = /^\s*[-*+]\s+(.*)$/.exec(ln)) {
			if (list !== "ul") {
				close();
				out.push("<ul>");
				list = "ul";
			}
			out.push(`<li>${inline(m[1])}</li>`);
		} else if (m = /^\s*\d+[.)]\s+(.*)$/.exec(ln)) {
			if (list !== "ol") {
				close();
				out.push("<ol>");
				list = "ol";
			}
			out.push(`<li>${inline(m[1])}</li>`);
		} else if (m = /^&gt;\s?(.*)$/.exec(ln)) {
			close();
			out.push(`<blockquote>${inline(m[1])}</blockquote>`);
		} else if (/^(-{3,}|\*{3,})$/.test(ln.trim())) {
			close();
			out.push("<hr/>");
		} else if (!ln.trim()) close();
		else {
			close();
			out.push(`<p>${inline(ln)}</p>`);
		}
	}
	close();
	if (code) out.push("</code></pre>");
	return out.join("");
}
function Markdown({ lang }) {
	const [md, setMd] = (0, import_react.useState)("# Başlıq\n\n**Qalın**, *maili* və `kod`.\n\n- birinci\n- ikinci\n\n> Sitat\n\n```\nprint('salam')\n```");
	const html = (0, import_react.useMemo)(() => mdToHtml(md), [md]);
	const pdf = () => {
		const w = window.open("", "_blank");
		if (!w) return;
		w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>markdown</title><style>body{font:15px/1.6 system-ui,sans-serif;max-width:760px;margin:32px auto;color:#111}pre{background:#f3f3f3;padding:12px;border-radius:6px;overflow:auto}code{font-family:ui-monospace,monospace}blockquote{border-left:4px solid #ccc;margin:0;padding-left:12px;color:#555}</style></head><body dir="auto">${html}</body></html>`);
		w.document.close();
		w.focus();
		setTimeout(() => w.print(), 300);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			className: `${field} h-64 font-mono`,
			value: md,
			onChange: (e) => setMd(e.target.value),
			dir: "auto",
			"aria-label": "Markdown"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md-preview prose prose-invert h-64 overflow-auto rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm",
			dir: "auto",
			dangerouslySetInnerHTML: { __html: html }
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-white",
			onClick: pdf,
			children: C.pdf[lang]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted",
			children: C.pdfHint[lang]
		})]
	})] });
}
var cronOk = (v, lo, hi) => v.split(",").every((p) => {
	const m = /^(\*|\d+(?:-\d+)?)(?:\/(\d+))?$/.exec(p);
	if (!m) return false;
	if (m[1] === "*") return true;
	return m[1].split("-").every((n) => +n >= lo && +n <= hi);
});
function Cron({ lang }) {
	const [f, setF] = (0, import_react.useState)([
		"0",
		"3",
		"*",
		"*",
		"1-5"
	]);
	const meta = [
		[
			C.min,
			0,
			59
		],
		[
			C.hour,
			0,
			23
		],
		[
			C.dom,
			1,
			31
		],
		[
			C.mon,
			1,
			12
		],
		[
			C.dow,
			0,
			7
		]
	];
	const bad = f.some((v, i) => !cronOk(v, meta[i][1], meta[i][2]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-2 flex flex-wrap gap-2",
			children: [
				["*/5 * * * *", "5 min"],
				["0 * * * *", "1 h"],
				["0 3 * * *", "03:00"],
				["0 9 * * 1-5", "Mon–Fri 09:00"],
				["0 0 1 * *", "1st"]
			].map(([p, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "rounded-full border border-white/15 px-3 py-1 text-xs",
				onClick: () => setF(p.split(" ")),
				children: l
			}, p))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-5 gap-2",
			children: meta.map(([l], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-xs",
				children: [l[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: field,
					value: f[i],
					onChange: (e) => setF(f.map((x, j) => j === i ? e.target.value.replace(/\s/g, "") : x)),
					dir: "ltr"
				})]
			}, i))
		}),
		bad ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-red-300",
			children: C.bad[lang]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
			text: `${f.join(" ")} /path/to/command`,
			lang
		})
	] });
}
function Json({ lang }) {
	const [s, setS] = (0, import_react.useState)("{\"name\":\"Nibras\",\"tools\":[1,2,3]}");
	const [msg, setMsg] = (0, import_react.useState)("");
	const run = (ind) => {
		try {
			setS(JSON.stringify(JSON.parse(s), null, ind));
			setMsg(C.ok[lang]);
		} catch (e) {
			setMsg(`${C.bad[lang]}: ${e.message}`);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: `${field} h-48 font-mono`,
		value: s,
		onChange: (e) => setS(e.target.value),
		dir: "ltr",
		"aria-label": "JSON"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-white",
				onClick: () => run(2),
				children: C.pretty[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "rounded-xl border border-white/15 px-3 py-1.5 text-sm",
				onClick: () => run(0),
				children: C.mini[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm",
				"data-testid": "json-msg",
				children: msg
			})
		]
	})] });
}
function Ssh({ lang }) {
	const [host, setHost] = (0, import_react.useState)("example.com");
	const [user, setUser] = (0, import_react.useState)("root");
	const [port, setPort] = (0, import_react.useState)("22");
	const [key, setKey] = (0, import_react.useState)("~/.ssh/id_ed25519");
	const [alias, setAlias] = (0, import_react.useState)("myserver");
	const cmd = [
		"ssh",
		...port && port !== "22" ? ["-p", port] : [],
		...key ? ["-i", key] : [],
		`${user ? `${user}@` : ""}${host}`
	].join(" ");
	const cfg = [
		`Host ${alias || "server"}`,
		`  HostName ${host}`,
		user ? `  User ${user}` : "",
		port && port !== "22" ? `  Port ${port}` : "",
		key ? `  IdentityFile ${key}` : ""
	].filter(Boolean).join("\n");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: ["Host", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: host,
						onChange: (e) => setHost(e.target.value),
						dir: "ltr"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [C.user[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: user,
						onChange: (e) => setUser(e.target.value),
						dir: "ltr"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [C.port[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: port,
						onChange: (e) => setPort(e.target.value.replace(/\D/g, "")),
						dir: "ltr"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm sm:col-span-2",
					children: [C.key[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: key,
						onChange: (e) => setKey(e.target.value),
						dir: "ltr"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm",
					children: [C.alias[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: alias,
						onChange: (e) => setAlias(e.target.value),
						dir: "ltr"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
			text: cmd,
			lang
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
			text: cfg,
			lang
		}),
		alias ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
			text: `ssh ${alias}`,
			lang
		}) : null
	] });
}
var TOOLS = {
	rsync: {
		title: "rsyncT",
		C: Rsync
	},
	linux: {
		title: "chmodT",
		C: Chmod
	},
	bash: {
		title: "chmodT",
		C: Chmod
	},
	markdown: {
		title: "mdT",
		C: Markdown
	},
	cron: {
		title: "cronT",
		C: Cron
	},
	json: {
		title: "jsonT",
		C: Json
	},
	ssh: {
		title: "sshT",
		C: Ssh
	}
};
/** Interactive micro-tool shown on matching programming articles. */
function ProgMicroTool({ slug }) {
	const { lang } = useI18n();
	if (!slug || !TOOLS[slug]) return null;
	const t = TOOLS[slug];
	const Tool = t.C;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "prog-micro my-6 rounded-2xl border border-[#2f6bff]/35 bg-[#2f6bff]/[0.06] p-4 text-start",
		"data-testid": "prog-micro-tool",
		"data-nosnippet": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 text-xs uppercase tracking-wide text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "me-1 inline size-3.5" }), C.tool[lang]]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-lg font-semibold",
				children: C[t.title][lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tool, { lang }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted",
				children: C.local[lang]
			})
		]
	});
}
var COPY = {
	az: {
		shots: "Qara ekranda nümunələr",
		edit: "Yazını dəyiş",
		name: "Tətbiqin adı",
		line: "Birinci sətir",
		button: "Düymənin yazısı",
		files: "Hazır tətbiq faylları",
		filesNote: "Bu zipin kökündə index.html durur. Yanında css və js qovluqları var. Onu olduğu kimi Studio-ya vermək olar.",
		download: "Qeyd zipini endir",
		zip: "Öz zipini seç",
		zipNote: "Zip seçilən kimi APK Studio özü açılır.",
		picked: "Studio açıldı",
		studio: "APK Studio-nu aç",
		caps: [
			"Veb qeyd",
			"Sayğac",
			"Səhifə içində",
			"Üç kart",
			"İnkişaf etmiş"
		]
	},
	en: {
		shots: "Samples on a black screen",
		edit: "Change the words",
		name: "App name",
		line: "First line",
		button: "Button text",
		files: "Ready app files",
		filesNote: "index.html stands at the root of this zip. The css and js folders sit beside it. You can give it to Studio as it is.",
		download: "Download the notes zip",
		zip: "Choose your own zip",
		zipNote: "APK Studio opens by itself as soon as you choose the zip.",
		picked: "Studio opened",
		studio: "Open APK Studio",
		caps: [
			"Web notes",
			"Counter",
			"Page inside",
			"Three cards",
			"Advanced"
		]
	},
	tr: {
		shots: "Kara ekranda örnekler",
		edit: "Yazıyı değiştir",
		name: "Uygulamanın adı",
		line: "İlk satır",
		button: "Düğmenin yazısı",
		files: "Hazır uygulama dosyaları",
		filesNote: "Bu zipin kökünde index.html durur. Yanında css ve js klasörleri vardır. Olduğu gibi Studio'ya verilebilir.",
		download: "Not zipini indir",
		zip: "Kendi zipini seç",
		zipNote: "Zip seçilir seçilmez APK Studio kendi açılır.",
		picked: "Studio açıldı",
		studio: "APK Studio'yu aç",
		caps: [
			"Web not",
			"Sayaç",
			"Sayfa içinde",
			"Üç kart",
			"Gelişmiş"
		]
	},
	ar: {
		shots: "أمثلة على شاشة سوداء",
		edit: "غيّر الكتابة",
		name: "اسم التطبيق",
		line: "السطر الأول",
		button: "كتابة الزر",
		files: "ملفات تطبيق جاهزة",
		filesNote: "index.html يقف في جذر هذا الـ zip. بجانبه مجلدا css وjs. يمكن إعطاؤه إلى Studio كما هو.",
		download: "تنزيل zip الملاحظات",
		zip: "اختر zip الخاص بك",
		zipNote: "يفتح APK Studio وحده فور اختيار الـ zip.",
		picked: "فُتح Studio",
		studio: "افتح APK Studio",
		caps: [
			"ملاحظة ويب",
			"عدّاد",
			"صفحة في الداخل",
			"ثلاث بطاقات",
			"متقدّم"
		]
	},
	ru: {
		shots: "Примеры на чёрном экране",
		edit: "Измени текст",
		name: "Имя приложения",
		line: "Первая строка",
		button: "Текст кнопки",
		files: "Готовые файлы приложения",
		filesNote: "В корне этого zip стоит index.html. Рядом папки css и js. Его можно отдать Studio как есть.",
		download: "Скачать zip заметок",
		zip: "Выбери свой zip",
		zipNote: "APK Studio открывается сам, как только выбран zip.",
		picked: "Studio открылся",
		studio: "Открыть APK Studio",
		caps: [
			"Веб-заметки",
			"Счётчик",
			"Страница внутри",
			"Три карточки",
			"Развитый"
		]
	}
};
var SHOTS = [
	{
		src: "/apk/inkisaf.jpg",
		alt: "İnkişaf etmiş"
	},
	{
		src: "/apk/qeyd.jpg",
		alt: "Qeyd"
	},
	{
		src: "/apk/saygac.jpg",
		alt: "Sayğac"
	},
	{
		src: "/apk/sehife.jpg",
		alt: "Səhifə"
	},
	{
		src: "/apk/kartlar.jpg",
		alt: "Kartlar"
	}
];
function ApkLab() {
	const { lang } = useI18n();
	const copy = COPY[lang];
	const [name, setName] = (0, import_react.useState)(lang === "en" ? "Note" : lang === "tr" ? "Not" : lang === "ru" ? "Заметка" : lang === "ar" ? "ملاحظة" : "Qeyd");
	const [line, setLine] = (0, import_react.useState)(lang === "en" ? "Write one line today." : lang === "tr" ? "Bugün bir satır yaz." : lang === "ru" ? "Напиши сегодня одну строку." : lang === "ar" ? "اكتب سطراً اليوم." : "Bu gün bir sətir yaz.");
	const [button, setButton] = (0, import_react.useState)(lang === "en" ? "Save" : lang === "tr" ? "Kaydet" : lang === "ru" ? "Сохранить" : lang === "ar" ? "احفظ" : "Saxla");
	const [zipName, setZipName] = (0, import_react.useState)("");
	function openStudio(file) {
		if (!file) return;
		setZipName(file.name);
		if (!window.open("https://studio.nibrascode.com/studio", "_blank", "noopener,noreferrer")) window.location.assign("https://studio.nibrascode.com/studio");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "apk-lab",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: copy.shots }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "apk-shots",
				children: SHOTS.map((shot, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: shot.src,
					alt: copy.caps[index]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: copy.caps[index] })] }, shot.src))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: copy.edit }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "apk-edit",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "apk-fields",
					onSubmit: (event) => event.preventDefault(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [copy.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							maxLength: 24,
							onChange: (event) => setName(event.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [copy.line, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: line,
							maxLength: 80,
							onChange: (event) => setLine(event.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [copy.button, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: button,
							maxLength: 18,
							onChange: (event) => setButton(event.target.value)
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "apk-stage",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "apk-phone",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: name || " " }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: line || " " }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: button || " " })
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: copy.files }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.filesNote }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "apk-down",
				href: "/apk/nibras-qeyd.zip",
				download: true,
				children: copy.download
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: copy.zip }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.zipNote }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "apk-file",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					accept: ".zip,application/zip",
					onChange: (event) => openStudio(event.target.files?.[0])
				})
			}),
			zipName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "apk-next",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					copy.picked,
					": ",
					zipName
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://studio.nibrascode.com/",
					target: "_blank",
					rel: "noopener noreferrer",
					children: copy.studio
				})]
			}) : null
		]
	});
}
function text(az, en, tr, ar, ru) {
	return {
		az,
		en,
		tr,
		ar,
		ru
	};
}
var GRADE_NOTE = text("Dörd tələbənin balları ortalanır, keçən sayılır və ən yüksək orta yazılır. Faylı saxla və altdakı əmrlə işlət. Rəqəmlər nümunədir.", "Four students' scores are averaged, the passes are counted, and the highest average is printed. Save the file and run the command below. The numbers are a sample.", "Dört öğrencinin notu ortalanır, geçen sayılır ve en yüksek ortalama yazılır. Dosyayı kaydet ve alttaki komutla çalıştır. Sayılar örnektir.", "تُحسب معدلات أربع طلاب، ويُعدّ الناجح، ويُطبع أعلى معدل. احفظ الملف وشغّله بالأمر في الأسفل. الأرقام نموذج.", "Считаются средние четырёх студентов, число сдавших и самый высокий средний. Сохрани файл и запусти командой ниже. Числа — образец.");
var GRADE_TITLE = text("İşlək nümunə", "A working sample", "Çalışan örnek", "مثال يعمل", "Рабочий пример");
var WORK_SAMPLES = {
	python: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: python3 bal.py`, `${GRADE_NOTE.en} Command: python3 grade.py`, `${GRADE_NOTE.tr} Komut: python3 bal.py`, `${GRADE_NOTE.ar} الأمر: python3 grade.py`, `${GRADE_NOTE.ru} Команда: python3 grade.py`),
		code: `students = [
    {"name": "Aysel", "scores": [78, 84, 91]},
    {"name": "Murad", "scores": [42, 55, 48]},
    {"name": "Nigar", "scores": [90, 88, 95]},
    {"name": "Rauf", "scores": [61, 58, 70]},
]

PASS_MARK = 60


def average(scores):
    if not scores:
        return 0.0
    return sum(scores) / len(scores)


def label(avg):
    return "Keçdi" if avg >= PASS_MARK else "Qaldı"


rows = []
for student in students:
    avg = round(average(student["scores"]), 1)
    rows.append({"name": student["name"], "avg": avg, "label": label(avg)})

print(f"{'Ad':<12} {'Orta':>6}  Nəticə")
print("-" * 28)
passed = 0
for row in rows:
    print(f"{row['name']:<12} {row['avg']:>6}  {row['label']}")
    if row["label"] == "Keçdi":
        passed += 1

top = max(rows, key=lambda row: row["avg"])
print("-" * 28)
print(f"Keçən: {passed} / {len(rows)}")
print(f"Ən yüksək: {top['name']} ({top['avg']})")
`
	},
	javascript: {
		title: GRADE_TITLE,
		note: text("Qeyd dəftəri bir HTML fayldadır. Əlavə et, sil və cəmi say. Səhifəni bağlayıb açanda siyahı qalır, çünki localStorage-dadır. Faylı .html kimi saxla və brauzerdə aç.", "The notebook is one HTML file. Add, delete, and count. The list stays after you close the page, because it sits in localStorage. Save it as .html and open it in the browser.", "Not defteri bir HTML dosyasındadır. Ekle, sil ve say. Sayfayı kapatıp açınca liste kalır, çünkü localStorage içindedir. Dosyayı .html diye kaydet ve tarayıcıda aç.", "المفكرة في ملف HTML واحد. أضف واحذف وعدّ. تبقى القائمة بعد إغلاق الصفحة لأنها في localStorage. احفظه كـ .html وافتحه في المتصفح.", "Блокнот — один HTML-файл. Добавь, удали и посчитай. Список остаётся после закрытия, потому что лежит в localStorage. Сохрани как .html и открой в браузере."),
		code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <title>Qeyd dəftəri</title>
  <style>
    body { margin: 0; font-family: sans-serif; background: #0f172a; color: #e2e8f0; }
    main { max-width: 560px; margin: 32px auto; padding: 0 16px; }
    form { display: flex; gap: 8px; }
    input { flex: 1; padding: 10px; border-radius: 8px; border: 1px solid #334155; background: #020617; color: inherit; }
    button { border: 0; border-radius: 8px; padding: 10px 14px; background: #0284c7; color: #fff; font-weight: 700; }
    li { display: flex; justify-content: space-between; gap: 12px; padding: 10px 0; border-bottom: 1px solid #1e293b; }
    li button { background: transparent; color: #fca5a5; }
  </style>
</head>
<body>
<main>
  <h1>Qeyd dəftəri</h1>
  <p id="count">0 qeyd</p>
  <form id="form">
    <input id="text" type="text" maxlength="120" placeholder="Yeni qeyd">
    <button type="submit">Əlavə et</button>
  </form>
  <ul id="list"></ul>
</main>
<script>
  const KEY = "nibras-notes";
  const form = document.getElementById("form");
  const text = document.getElementById("text");
  const list = document.getElementById("list");
  const count = document.getElementById("count");

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(saved) ? saved.filter((item) => typeof item === "string") : [];
    } catch {
      return [];
    }
  }

  let notes = load();

  function save() {
    localStorage.setItem(KEY, JSON.stringify(notes));
  }

  function draw() {
    list.innerHTML = "";
    notes.forEach((note, index) => {
      const item = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = note;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Sil";
      remove.addEventListener("click", () => {
        notes.splice(index, 1);
        save();
        draw();
      });
      item.append(span, remove);
      list.append(item);
    });
    count.textContent = notes.length + " qeyd";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = text.value.trim();
    if (!value) return;
    notes.push(value);
    text.value = "";
    save();
    draw();
  });

  draw();
<\/script>
</body>
</html>
`
	},
	"html-css": {
		title: GRADE_TITLE,
		note: text("Bir səhifəlik saytdır: menyu, üç kart, forma və telefon üçün bir sütun. Göndər düyməsi səhifəni yeniləmir, yazılan adı altda göstərir. Faylı .html kimi saxla və aç.", "A one-page site: a menu, three cards, a form, and one column on a phone. Send does not reload the page. It shows the name you wrote. Save it as .html and open it.", "Tek sayfalık sitedir: menü, üç kart, form ve telefonda tek sütun. Gönder sayfayı yenilemez, yazılan adı altta gösterir. Dosyayı .html diye kaydet ve aç.", "موقع من صفحة واحدة: قائمة وثلاث بطاقات ونموذج وعمود واحد على الهاتف. الإرسال لا يعيد تحميل الصفحة، بل يُظهر الاسم المكتوب. احفظه كـ .html وافتحه.", "Сайт из одной страницы: меню, три карточки, форма и одна колонка на телефоне. Отправка не перезагружает страницу, а показывает написанное имя. Сохрани как .html и открой."),
		code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nümunə səhifə</title>
  <style>
    body { margin: 0; font-family: sans-serif; background: #f8fafc; color: #0f172a; }
    header { display: flex; justify-content: space-between; align-items: center; padding: 16px 28px; background: #0f172a; color: #fff; }
    header a { color: #cbd5e1; margin-left: 16px; text-decoration: none; }
    .hero { padding: 48px 28px; background: #e0f2fe; }
    .wrap { max-width: 960px; margin: 0 auto; padding: 28px; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
    .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; }
    form { display: grid; gap: 10px; max-width: 420px; margin-top: 18px; }
    input { border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; font: inherit; }
    button { border: 0; border-radius: 8px; padding: 10px 14px; background: #0284c7; color: #fff; font-weight: 700; }
    footer { padding: 18px 28px; color: #64748b; }
    @media (max-width: 700px) {
      .grid { grid-template-columns: 1fr; }
      header { flex-direction: column; align-items: flex-start; gap: 8px; }
    }
  </style>
</head>
<body>
<header>
  <strong>Nümunə səhifə</strong>
  <nav>
    <a href="#isler">İşlər</a>
    <a href="#yazi">Yaz</a>
  </nav>
</header>
<section class="hero">
  <h1>Böyük nümunə</h1>
  <p>Menyu, kartlar və forma bir fayldadır.</p>
</section>
<div class="wrap">
  <div class="grid" id="isler">
    <article class="card"><h2>PDF</h2><p>Fayl brauzerdə oxunur.</p></article>
    <article class="card"><h2>QR</h2><p>Mətn kodun içinə düşür.</p></article>
    <article class="card"><h2>Qeyd</h2><p>Siyahı səhifənin özündə qalır.</p></article>
  </div>
  <form id="yazi">
    <label>Ad <input id="name" type="text" maxlength="40" required></label>
    <button type="submit">Göndər</button>
    <p id="out"></p>
  </form>
</div>
<footer>Nümunə. Hesab açılmır.</footer>
<script>
  const form = document.getElementById("yazi");
  const name = document.getElementById("name");
  const out = document.getElementById("out");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = name.value.trim();
    out.textContent = value ? "Salam, " + value : "";
  });
<\/script>
</body>
</html>
`
	},
	sql: {
		title: GRADE_TITLE,
		note: text("İki cədvəl, dörd tələbə və ballar. Sorğu ortanı sayır və yalnız keçənləri sıralayır. SQLite-da işləyir: sqlite3 bal.db < bal.sql", "Two tables, four students, and scores. The query counts the average and lists only those who passed. It runs in SQLite: sqlite3 grade.db < grade.sql", "İki tablo, dört öğrenci ve notlar. Sorgu ortalamayı sayar ve yalnız geçenleri sıralar. SQLite içinde çalışır: sqlite3 bal.db < bal.sql", "جدولان وأربعة طلاب ودرجات. الاستعلام يحسب المعدل ويرتب الناجحين فقط. يعمل في SQLite: sqlite3 grade.db < grade.sql", "Две таблицы, четыре студента и оценки. Запрос считает среднее и сортирует только сдавших. Работает в SQLite: sqlite3 grade.db < grade.sql"),
		code: `CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE scores (
  id INTEGER PRIMARY KEY,
  student_id INTEGER NOT NULL,
  subject TEXT NOT NULL,
  points INTEGER NOT NULL
);

INSERT INTO students (id, name) VALUES
  (1, 'Aysel'),
  (2, 'Murad'),
  (3, 'Nigar'),
  (4, 'Rauf');

INSERT INTO scores (student_id, subject, points) VALUES
  (1, 'Python', 78), (1, 'SQL', 84), (1, 'HTML', 91),
  (2, 'Python', 42), (2, 'SQL', 55), (2, 'HTML', 48),
  (3, 'Python', 90), (3, 'SQL', 88), (3, 'HTML', 95),
  (4, 'Python', 61), (4, 'SQL', 58), (4, 'HTML', 70);

SELECT
  students.name,
  ROUND(AVG(scores.points), 1) AS average_points,
  COUNT(scores.id) AS exams
FROM students
JOIN scores ON scores.student_id = students.id
GROUP BY students.id
HAVING AVG(scores.points) >= 60
ORDER BY average_points DESC;
`
	},
	java: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: javac GradeBook.java && java GradeBook`, `${GRADE_NOTE.en} Command: javac GradeBook.java && java GradeBook`, `${GRADE_NOTE.tr} Komut: javac GradeBook.java && java GradeBook`, `${GRADE_NOTE.ar} الأمر: javac GradeBook.java && java GradeBook`, `${GRADE_NOTE.ru} Команда: javac GradeBook.java && java GradeBook`),
		code: `public class GradeBook {
    static class Student {
        final String name;
        final int[] scores;

        Student(String name, int[] scores) {
            this.name = name;
            this.scores = scores;
        }

        double average() {
            if (scores.length == 0) return 0;
            int sum = 0;
            for (int score : scores) sum += score;
            return (double) sum / scores.length;
        }
    }

    public static void main(String[] args) {
        Student[] students = {
            new Student("Aysel", new int[] {78, 84, 91}),
            new Student("Murad", new int[] {42, 55, 48}),
            new Student("Nigar", new int[] {90, 88, 95}),
            new Student("Rauf", new int[] {61, 58, 70})
        };
        int passed = 0;
        Student top = students[0];
        System.out.printf("%-12s %6s  %s%n", "Ad", "Orta", "Nəticə");
        for (Student student : students) {
            double avg = student.average();
            String label = avg >= 60 ? "Keçdi" : "Qaldı";
            if (avg >= 60) passed++;
            if (avg > top.average()) top = student;
            System.out.printf("%-12s %6.1f  %s%n", student.name, avg, label);
        }
        System.out.println("Keçən: " + passed + " / " + students.length);
        System.out.printf("Ən yüksək: %s (%.1f)%n", top.name, top.average());
    }
}
`
	},
	csharp: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: dotnet new console -n Bal && faylı Program.cs-ə qoy && dotnet run`, `${GRADE_NOTE.en} Command: put this in Program.cs of a console project, then dotnet run`, `${GRADE_NOTE.tr} Komut: bunu konsol projesinin Program.cs dosyasına koy, sonra dotnet run`, `${GRADE_NOTE.ar} الأمر: ضع هذا في Program.cs لمشروع وحدة تحكم، ثم dotnet run`, `${GRADE_NOTE.ru} Команда: положи это в Program.cs консольного проекта, затем dotnet run`),
		code: `using System.Linq;

var students = new (string Name, int[] Scores)[]
{
    ("Aysel", new[] { 78, 84, 91 }),
    ("Murad", new[] { 42, 55, 48 }),
    ("Nigar", new[] { 90, 88, 95 }),
    ("Rauf", new[] { 61, 58, 70 }),
};

double Average(int[] scores) => scores.Length == 0 ? 0 : scores.Average();

Console.WriteLine("{0,-12} {1,6}  {2}", "Ad", "Orta", "Nəticə");
var passed = 0;
var top = students[0];
foreach (var student in students)
{
    var avg = Average(student.Scores);
    var label = avg >= 60 ? "Keçdi" : "Qaldı";
    if (avg >= 60) passed++;
    if (avg > Average(top.Scores)) top = student;
    Console.WriteLine("{0,-12} {1,6:0.0}  {2}", student.Name, avg, label);
}

Console.WriteLine($"Keçən: {passed} / {students.Length}");
Console.WriteLine($"Ən yüksək: {top.Name} ({Average(top.Scores):0.0})");
`
	},
	typescript: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: npx tsx bal.ts`, `${GRADE_NOTE.en} Command: npx tsx grade.ts`, `${GRADE_NOTE.tr} Komut: npx tsx bal.ts`, `${GRADE_NOTE.ar} الأمر: npx tsx grade.ts`, `${GRADE_NOTE.ru} Команда: npx tsx grade.ts`),
		code: `type Student = { name: string; scores: number[] };

const students: Student[] = [
  { name: "Aysel", scores: [78, 84, 91] },
  { name: "Murad", scores: [42, 55, 48] },
  { name: "Nigar", scores: [90, 88, 95] },
  { name: "Rauf", scores: [61, 58, 70] },
];

const PASS_MARK = 60;

function average(scores: number[]): number {
  if (scores.length === 0) return 0;
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

type Row = { name: string; avg: number; label: "Keçdi" | "Qaldı" };

const rows: Row[] = students.map((student) => {
  const avg = Math.round(average(student.scores) * 10) / 10;
  return { name: student.name, avg, label: avg >= PASS_MARK ? "Keçdi" : "Qaldı" };
});

console.log("Ad           Orta  Nəticə");
let passed = 0;
for (const row of rows) {
  console.log(row.name.padEnd(12), String(row.avg).padStart(6), " ", row.label);
  if (row.label === "Keçdi") passed += 1;
}

const top = rows.reduce((best, row) => (row.avg > best.avg ? row : best));
console.log("Keçən:", passed, "/", rows.length);
console.log("Ən yüksək:", top.name, "(" + top.avg + ")");
`
	},
	nodejs: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: node bal.js`, `${GRADE_NOTE.en} Command: node grade.js`, `${GRADE_NOTE.tr} Komut: node bal.js`, `${GRADE_NOTE.ar} الأمر: node grade.js`, `${GRADE_NOTE.ru} Команда: node grade.js`),
		code: `const students = [
  { name: "Aysel", scores: [78, 84, 91] },
  { name: "Murad", scores: [42, 55, 48] },
  { name: "Nigar", scores: [90, 88, 95] },
  { name: "Rauf", scores: [61, 58, 70] },
];

function average(scores) {
  if (scores.length === 0) return 0;
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

const rows = students.map((student) => {
  const avg = Math.round(average(student.scores) * 10) / 10;
  return { name: student.name, avg, label: avg >= 60 ? "Keçdi" : "Qaldı" };
});

console.log("Ad           Orta  Nəticə");
let passed = 0;
for (const row of rows) {
  console.log(row.name.padEnd(12), String(row.avg).padStart(6), row.label);
  if (row.label === "Keçdi") passed += 1;
}

const top = rows.reduce((best, row) => (row.avg > best.avg ? row : best));
console.log("Keçən:", passed + " / " + rows.length);
console.log("Ən yüksək:", top.name + " (" + top.avg + ")");
`
	},
	go: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: go run bal.go`, `${GRADE_NOTE.en} Command: go run grade.go`, `${GRADE_NOTE.tr} Komut: go run bal.go`, `${GRADE_NOTE.ar} الأمر: go run grade.go`, `${GRADE_NOTE.ru} Команда: go run grade.go`),
		code: `package main

import "fmt"

type student struct {
	name   string
	scores []int
}

func average(scores []int) float64 {
	if len(scores) == 0 {
		return 0
	}
	sum := 0
	for _, score := range scores {
		sum += score
	}
	return float64(sum) / float64(len(scores))
}

func main() {
	students := []student{
		{"Aysel", []int{78, 84, 91}},
		{"Murad", []int{42, 55, 48}},
		{"Nigar", []int{90, 88, 95}},
		{"Rauf", []int{61, 58, 70}},
	}
	fmt.Printf("%-12s %6s  %s\\n", "Ad", "Orta", "Nəticə")
	passed := 0
	top := students[0]
	for _, item := range students {
		avg := average(item.scores)
		label := "Qaldı"
		if avg >= 60 {
			label = "Keçdi"
			passed++
		}
		if avg > average(top.scores) {
			top = item
		}
		fmt.Printf("%-12s %6.1f  %s\\n", item.name, avg, label)
	}
	fmt.Printf("Keçən: %d / %d\\n", passed, len(students))
	fmt.Printf("Ən yüksək: %s (%.1f)\\n", top.name, average(top.scores))
}
`
	},
	php: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: php bal.php`, `${GRADE_NOTE.en} Command: php grade.php`, `${GRADE_NOTE.tr} Komut: php bal.php`, `${GRADE_NOTE.ar} الأمر: php grade.php`, `${GRADE_NOTE.ru} Команда: php grade.php`),
		code: `<?php
$students = [
    ["name" => "Aysel", "scores" => [78, 84, 91]],
    ["name" => "Murad", "scores" => [42, 55, 48]],
    ["name" => "Nigar", "scores" => [90, 88, 95]],
    ["name" => "Rauf", "scores" => [61, 58, 70]],
];

function average(array $scores): float {
    if (count($scores) === 0) return 0;
    return array_sum($scores) / count($scores);
}

echo "Ad            Orta  Nəticə\\n";
$passed = 0;
$top = $students[0];
foreach ($students as $student) {
    $avg = average($student["scores"]);
    $label = $avg >= 60 ? "Keçdi" : "Qaldı";
    if ($avg >= 60) $passed++;
    if ($avg > average($top["scores"])) $top = $student;
    printf("%-12s %6.1f  %s\\n", $student["name"], $avg, $label);
}
echo "Keçən: $passed / " . count($students) . "\\n";
printf("Ən yüksək: %s (%.1f)\\n", $top["name"], average($top["scores"]));
`
	},
	kotlin: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: kotlinc bal.kt -include-runtime -d bal.jar && java -jar bal.jar`, `${GRADE_NOTE.en} Command: kotlinc grade.kt -include-runtime -d grade.jar && java -jar grade.jar`, `${GRADE_NOTE.tr} Komut: kotlinc bal.kt -include-runtime -d bal.jar && java -jar bal.jar`, `${GRADE_NOTE.ar} الأمر: kotlinc grade.kt -include-runtime -d grade.jar && java -jar grade.jar`, `${GRADE_NOTE.ru} Команда: kotlinc grade.kt -include-runtime -d grade.jar && java -jar grade.jar`),
		code: `data class Student(val name: String, val scores: List<Int>) {
    fun average(): Double = if (scores.isEmpty()) 0.0 else scores.average()
}

fun main() {
    val students = listOf(
        Student("Aysel", listOf(78, 84, 91)),
        Student("Murad", listOf(42, 55, 48)),
        Student("Nigar", listOf(90, 88, 95)),
        Student("Rauf", listOf(61, 58, 70)),
    )
    println("Ad            Orta  Nəticə")
    var passed = 0
    var top = students.first()
    for (student in students) {
        val avg = student.average()
        val label = if (avg >= 60) "Keçdi" else "Qaldı"
        if (avg >= 60) passed++
        if (avg > top.average()) top = student
        println("%-12s %6.1f  %s".format(student.name, avg, label))
    }
    println("Keçən: $passed / \${students.size}")
    println("Ən yüksək: \${top.name} (\${"%.1f".format(top.average())})")
}
`
	},
	rust: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: rustc bal.rs -o bal && ./bal`, `${GRADE_NOTE.en} Command: rustc grade.rs -o grade && ./grade`, `${GRADE_NOTE.tr} Komut: rustc bal.rs -o bal && ./bal`, `${GRADE_NOTE.ar} الأمر: rustc grade.rs -o grade && ./grade`, `${GRADE_NOTE.ru} Команда: rustc grade.rs -o grade && ./grade`),
		code: `struct Student {
    name: &'static str,
    scores: &'static [i32],
}

fn average(scores: &[i32]) -> f64 {
    if scores.is_empty() {
        return 0.0;
    }
    let sum: i32 = scores.iter().sum();
    sum as f64 / scores.len() as f64
}

fn main() {
    let students = [
        Student { name: "Aysel", scores: &[78, 84, 91] },
        Student { name: "Murad", scores: &[42, 55, 48] },
        Student { name: "Nigar", scores: &[90, 88, 95] },
        Student { name: "Rauf", scores: &[61, 58, 70] },
    ];
    println!("{:<12} {:>6}  Nəticə", "Ad", "Orta");
    let mut passed = 0;
    let mut top = &students[0];
    for student in &students {
        let avg = average(student.scores);
        let label = if avg >= 60.0 { "Keçdi" } else { "Qaldı" };
        if avg >= 60.0 {
            passed += 1;
        }
        if avg > average(top.scores) {
            top = student;
        }
        println!("{:<12} {:>6.1}  {}", student.name, avg, label);
    }
    println!("Keçən: {} / {}", passed, students.len());
    println!("Ən yüksək: {} ({:.1})", top.name, average(top.scores));
}
`
	},
	cpp: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: g++ bal.cpp -o bal && ./bal`, `${GRADE_NOTE.en} Command: g++ grade.cpp -o grade && ./grade`, `${GRADE_NOTE.tr} Komut: g++ bal.cpp -o bal && ./bal`, `${GRADE_NOTE.ar} الأمر: g++ grade.cpp -o grade && ./grade`, `${GRADE_NOTE.ru} Команда: g++ grade.cpp -o grade && ./grade`),
		code: `#include <iostream>
#include <iomanip>
#include <string>
#include <vector>

struct Student {
    std::string name;
    std::vector<int> scores;
};

double average(const std::vector<int>& scores) {
    if (scores.empty()) return 0;
    int sum = 0;
    for (int score : scores) sum += score;
    return static_cast<double>(sum) / scores.size();
}

int main() {
    std::vector<Student> students = {
        {"Aysel", {78, 84, 91}},
        {"Murad", {42, 55, 48}},
        {"Nigar", {90, 88, 95}},
        {"Rauf", {61, 58, 70}},
    };
    std::cout << std::fixed << std::setprecision(1);
    std::cout << "Ad            Orta  Nəticə\\n";
    int passed = 0;
    const Student* top = &students.front();
    for (const Student& student : students) {
        double avg = average(student.scores);
        const char* label = avg >= 60 ? "Keçdi" : "Qaldı";
        if (avg >= 60) passed++;
        if (avg > average(top->scores)) top = &student;
        std::cout << student.name << "  " << avg << "  " << label << "\\n";
    }
    std::cout << "Keçən: " << passed << " / " << students.size() << "\\n";
    std::cout << "Ən yüksək: " << top->name << "\\n";
    return 0;
}
`
	},
	c: {
		title: GRADE_TITLE,
		note: text(`${GRADE_NOTE.az} Əmr: gcc bal.c -o bal && ./bal`, `${GRADE_NOTE.en} Command: gcc grade.c -o grade && ./grade`, `${GRADE_NOTE.tr} Komut: gcc bal.c -o bal && ./bal`, `${GRADE_NOTE.ar} الأمر: gcc grade.c -o grade && ./grade`, `${GRADE_NOTE.ru} Команда: gcc grade.c -o grade && ./grade`),
		code: `#include <stdio.h>

typedef struct {
    const char *name;
    int scores[3];
} Student;

double average(const int scores[3]) {
    return (scores[0] + scores[1] + scores[2]) / 3.0;
}

int main(void) {
    Student students[] = {
        {"Aysel", {78, 84, 91}},
        {"Murad", {42, 55, 48}},
        {"Nigar", {90, 88, 95}},
        {"Rauf", {61, 58, 70}},
    };
    int count = 4;
    int passed = 0;
    int top = 0;
    printf("%-12s %6s  %s\\n", "Ad", "Orta", "Nəticə");
    for (int i = 0; i < count; i++) {
        double avg = average(students[i].scores);
        const char *label = avg >= 60 ? "Keçdi" : "Qaldı";
        if (avg >= 60) passed++;
        if (avg > average(students[top].scores)) top = i;
        printf("%-12s %6.1f  %s\\n", students[i].name, avg, label);
    }
    printf("Keçən: %d / %d\\n", passed, count);
    printf("Ən yüksək: %s (%.1f)\\n", students[top].name, average(students[top].scores));
    return 0;
}
`
	},
	bash: {
		title: GRADE_TITLE,
		note: text("Qovluqdakı faylları sonluğuna görə sayır. Heç nə silmir. Əmr: bash say.sh .", "Counts files in a folder by their ending. It deletes nothing. Command: bash count.sh .", "Klasördeki dosyaları sonuna göre sayar. Hiçbir şey silmez. Komut: bash say.sh .", "يعدّ الملفات في مجلد حسب لاحقتها. لا يحذف شيئاً. الأمر: bash count.sh .", "Считает файлы в папке по окончанию. Ничего не удаляет. Команда: bash count.sh ."),
		code: `#!/usr/bin/env bash
set -euo pipefail

dir="\${1:-.}"
if [[ ! -d "$dir" ]]; then
  echo "Qovluq yoxdur: $dir" >&2
  exit 1
fi

echo "Qovluq: $dir"
find "$dir" -type f -printf '%f\\n' | awk '
{
  total++
  n = split($0, parts, ".")
  end = (n > 1 ? parts[n] : "(sonluq yox)")
  ends[end]++
}
END {
  printf "Fayl: %d\\n", total + 0
  for (end in ends) printf "%6d  %s\\n", ends[end], end
}
'
`
	},
	react: {
		title: GRADE_TITLE,
		note: text("React qurulmadan bir HTML faylda işləyir. Siyahıya ad əlavə olunur və silinir. Faylı .html kimi saxla və brauzerdə aç. İnternet lazımdır, çünki React CDN-dən gəlir.", "React runs in one HTML file, without a project setup. A name is added to the list and removed. Save it as .html and open it in the browser. The internet is needed, because React comes from a CDN.", "React proje kurmadan bir HTML dosyada çalışır. Listeye ad eklenir ve silinir. Dosyayı .html diye kaydet ve tarayıcıda aç. İnternet gerekir, çünkü React CDN'den gelir.", "يعمل React في ملف HTML واحد بلا إعداد مشروع. يُضاف اسم إلى القائمة ويُحذف. احفظه كـ .html وافتحه في المتصفح. يلزم الإنترنت لأن React يأتي من CDN.", "React работает в одном HTML-файле, без настройки проекта. Имя добавляется в список и удаляется. Сохрани как .html и открой в браузере. Нужен интернет, потому что React берётся с CDN."),
		code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <title>React siyahı</title>
</head>
<body>
<div id="root"></div>
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react@18.3.1",
    "react-dom/client": "https://esm.sh/react-dom@18.3.1/client"
  }
}
<\/script>
<script type="module">
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const start = ["Python", "SQL", "HTML"];

function App() {
  const [items, setItems] = useState(start);
  const [text, setText] = useState("");

  function add(event) {
    event.preventDefault();
    const value = text.trim();
    if (!value) return;
    setItems([...items, value]);
    setText("");
  }

  function remove(index) {
    setItems(items.filter((_, itemIndex) => itemIndex !== index));
  }

  return React.createElement(
    "main",
    null,
    React.createElement("h1", null, "React siyahı"),
    React.createElement("p", null, items.length + " sətir"),
    React.createElement(
      "form",
      { onSubmit: add },
      React.createElement("input", {
        value: text,
        onChange: (event) => setText(event.target.value),
        placeholder: "Yeni sətir",
      }),
      React.createElement("button", { type: "submit" }, "Əlavə et"),
    ),
    React.createElement(
      "ul",
      null,
      items.map((item, index) =>
        React.createElement(
          "li",
          { key: index },
          item,
          " ",
          React.createElement(
            "button",
            { type: "button", onClick: () => remove(index) },
            "Sil",
          ),
        ),
      ),
    ),
  );
}

createRoot(document.getElementById("root")).render(React.createElement(App));
<\/script>
</body>
</html>
`
	}
};
var LARGE_GAME = {
	title: text("Böyük oyun", "A large game", "Büyük oyun", "لعبة كبيرة", "Большая игра"),
	note: text("Beş sual, xal və yenidən başla. Düz cavab 10 xal gətirir. Sual bitəndə düymələr bağlanır. Bütün səhifə bir fayldadır. .html kimi saxla və aç.", "Five questions, a score, and a restart. A right answer brings 10 points. When the questions end, the buttons close. The whole page is one file. Save it as .html and open it.", "Beş soru, puan ve yeniden başla. Doğru cevap 10 puan getirir. Sorular bitince düğmeler kapanır. Bütün sayfa bir dosyadır. .html diye kaydet ve aç.", "خمسة أسئلة ونقاط وابدأ من جديد. الجواب الصحيح يجلب 10 نقاط. حين تنتهي الأسئلة تُغلق الأزرار. الصفحة كلها ملف واحد. احفظه كـ .html وافتحه.", "Пять вопросов, счёт и начать заново. Верный ответ даёт 10 очков. Когда вопросы кончаются, кнопки закрываются. Вся страница — один файл. Сохрани как .html и открой."),
	code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <title>Quiz</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #e2e8f0; margin: 0; }
    main { max-width: 560px; margin: 32px auto; padding: 0 16px; }
    button { margin: 6px 6px 0 0; padding: 10px 14px; border: 0; border-radius: 8px; background: #0284c7; color: #fff; }
  </style>
</head>
<body>
<main>
  <p>Xal: <b id="score">0</b></p>
  <h1 id="ask"></h1>
  <div id="choices"></div>
  <p id="out"></p>
  <button type="button" id="again">Yenidən</button>
</main>
<script>
  const quiz = [
    { q: "Python nədir?", options: ["Brauzer", "Proqramlaşdırma dili", "Şəkil formatı"], answer: 1 },
    { q: "HTML nə üçündür?", options: ["Səhifənin quruluşu", "Cədvəlin parolu", "Telefonun batareyası"], answer: 0 },
    { q: "SQL nəyə sual verir?", options: ["Ekranın rənginə", "Klaviaturaya", "Verilənlərə"], answer: 2 },
    { q: "Bash nədir?", options: ["Şəkil redaktoru", "Əmr dili", "Cədvəl proqramı"], answer: 1 },
    { q: "CSS nəyi deyir?", options: ["Faylın parolunu", "Telefonun nömrəsini", "Səhifənin görünüşünü"], answer: 2 },
  ];
  let index = 0;
  let score = 0;
  const ask = document.getElementById("ask");
  const choices = document.getElementById("choices");
  const out = document.getElementById("out");
  const scoreNode = document.getElementById("score");

  function show() {
    choices.innerHTML = "";
    out.textContent = "";
    if (index >= quiz.length) {
      ask.textContent = "Bitdi";
      out.textContent = "Xal: " + score + " / " + (quiz.length * 10);
      return;
    }
    const item = quiz[index];
    ask.textContent = item.q;
    item.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", () => pick(optionIndex));
      choices.append(button);
    });
  }

  function pick(optionIndex) {
    const item = quiz[index];
    if (!item) return;
    if (optionIndex === item.answer) {
      score += 10;
      out.textContent = "Düzdür";
    } else {
      out.textContent = "Səhv";
    }
    scoreNode.textContent = String(score);
    choices.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    index += 1;
    setTimeout(show, 600);
  }

  document.getElementById("again").addEventListener("click", () => {
    index = 0;
    score = 0;
    scoreNode.textContent = "0";
    show();
  });

  show();
<\/script>
</body>
</html>
`
};
var LARGE_APP = {
	title: text("Böyük tətbiq", "A large app", "Büyük uygulama", "تطبيق كبير", "Большое приложение"),
	note: text("Gəlir və xərc siyahısıdır. Məbləğ ədəd deyilsə əlavə olunmur. Cəm ayrıca yazılır. Səhifə bağlananda siyahı qalır. Faylı .html kimi saxla və aç.", "A list of income and expense. If the amount is not a number, it is not added. The total is written apart. The list stays when the page closes. Save the file as .html and open it.", "Gelir ve gider listesidir. Tutar sayı değilse eklenmez. Toplam ayrı yazılır. Sayfa kapanınca liste kalır. Dosyayı .html diye kaydet ve aç.", "قائمة دخل ومصروف. إذا لم يكن المبلغ رقماً لا يُضاف. المجموع يُكتب وحده. تبقى القائمة حين تُغلق الصفحة. احفظ الملف كـ .html وافتحه.", "Список дохода и расхода. Если сумма не число, она не добавляется. Итог пишется отдельно. Список остаётся, когда страница закрывается. Сохрани файл как .html и открой."),
	code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <title>Kassa</title>
  <style>
    body { margin: 0; font-family: sans-serif; background: #f8fafc; color: #0f172a; }
    main { max-width: 640px; margin: 28px auto; padding: 0 16px; }
    form { display: grid; grid-template-columns: 1fr 120px 140px auto; gap: 8px; }
    input, select { padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; font: inherit; }
    button { border: 0; border-radius: 8px; padding: 10px 12px; background: #0f766e; color: #fff; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    td { padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
    .out { color: #b91c1c; }
    @media (max-width: 700px) { form { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
<main>
  <h1>Kassa</h1>
  <p>Qalıq: <b id="total">0</b></p>
  <form id="form">
    <input id="title" type="text" maxlength="80" placeholder="Ad" required>
    <input id="amount" type="number" step="0.01" placeholder="Məbləğ" required>
    <select id="kind">
      <option value="in">Gəlir</option>
      <option value="out">Xərc</option>
    </select>
    <button type="submit">Əlavə et</button>
  </form>
  <table>
    <tbody id="rows"></tbody>
  </table>
</main>
<script>
  const KEY = "nibras-cash";
  const form = document.getElementById("form");
  const rows = document.getElementById("rows");
  const total = document.getElementById("total");

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  }

  let items = load().filter((item) => item && typeof item.title === "string" && typeof item.amount === "number");

  function money(value) {
    return value.toFixed(2);
  }

  function balance() {
    return items.reduce((sum, item) => sum + (item.kind === "out" ? -item.amount : item.amount), 0);
  }

  function draw() {
    rows.innerHTML = "";
    items.forEach((item, index) => {
      const row = document.createElement("tr");
      const name = document.createElement("td");
      name.textContent = item.title;
      const amount = document.createElement("td");
      amount.textContent = (item.kind === "out" ? "-" : "+") + money(item.amount);
      amount.className = item.kind === "out" ? "out" : "";
      const remove = document.createElement("td");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Sil";
      button.addEventListener("click", () => {
        items.splice(index, 1);
        localStorage.setItem(KEY, JSON.stringify(items));
        draw();
      });
      remove.append(button);
      row.append(name, amount, remove);
      rows.append(row);
    });
    total.textContent = money(balance());
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const kind = document.getElementById("kind").value;
    if (!title || !Number.isFinite(amount) || amount <= 0) return;
    items.push({ title, amount, kind });
    localStorage.setItem(KEY, JSON.stringify(items));
    form.reset();
    draw();
  });

  draw();
<\/script>
</body>
</html>
`
};
var APK_LESSON_FILES = [
	"capacitor",
	"termux",
	"revenuecat"
];
var APK_PATH = {
	az: "APK dərsləri",
	en: "APK lessons",
	tr: "APK dersleri",
	ar: "دروس APK",
	ru: "Уроки APK"
};
var APK_PATH_NOTE = {
	az: "Eyni dərslər JavaScript siyahısında da durur. Qapalı test Capacitor dərsinin içindədir. Sıra belədir: qabıq, telefonda yoxlama, sonra abunə.",
	en: "The same lessons also sit in the JavaScript list. Closed testing is inside the Capacitor lesson. The order is: the shell, a test on the phone, then a subscription.",
	tr: "Aynı dersler JavaScript listesinde de durur. Kapalı test Capacitor dersinin içindedir. Sıra şöyledir: kabuk, telefonda deneme, sonra abonelik.",
	ar: "الدروس نفسها تقف أيضاً في قائمة جافاسكريبت. الاختبار المغلق داخل درس Capacitor. الترتيب: الغلاف، ثم التجربة على الهاتف، ثم الاشتراك.",
	ru: "Те же уроки стоят и в списке JavaScript. Закрытый тест внутри урока Capacitor. Порядок такой: оболочка, проверка на телефоне, потом подписка."
};
var GUIDE_INTRO = {
	pdf: {
		az: "PDF faylını birləşdirmək, bölmək və sıxışdırmaq üçün qısa bələdçi. Ətraflı addımlar Nibras PDF çıxanda bu səhifədə olacaq.",
		en: "A short guide to merging, splitting, and compressing a PDF. Detailed steps will be added here when Nibras PDF is released.",
		tr: "PDF birleştirme, bölme ve sıkıştırma için kısa rehber. Ayrıntılı adımlar Nibras PDF çıkınca bu sayfada olacak.",
		ar: "دليل قصير لدمج PDF وتقسيمه وضغطه. الخطوات المفصّلة تُضاف هنا عند إصدار Nibras PDF.",
		ru: "Короткое руководство: объединить, разделить и сжать PDF. Подробные шаги появятся здесь, когда выйдет Nibras PDF."
	},
	android: {
		az: "Nibras Code tətbiqlərini Android telefonda rəsmi səhifədən tapıb quraşdırmaq olar. Mağaza linki hazır olanda bu səhifədə göstəriləcək.",
		en: "Nibras Code apps can be found and installed on an Android phone from the official page. The store link will be shown here when it is ready.",
		tr: "Nibras Code uygulamaları Android telefonda resmi sayfadan bulunup kurulabilir. Mağaza bağlantısı hazır olunca bu sayfada gösterilecek.",
		ar: "يمكن العثور على تطبيقات Nibras Code وتثبيتها على هاتف أندرويد من الصفحة الرسمية. يظهر رابط المتجر هنا عندما يجهز.",
		ru: "Приложения Nibras Code можно найти и установить на телефон Android с официальной страницы. Ссылка на магазин появится здесь, когда будет готова."
	},
	"ereb-dili": {
		az: "Ərəb dilinə Azərbaycan dilindən başlamaq üçün əsas tətbiq Nibras Arabic-dir. Feil, isim, dialoq, test, kart və yazı məşqi bir yerdədir.",
		en: "The main app for starting Arabic from Azerbaijani is Nibras Arabic. Verbs, nouns, dialogues, tests, cards, and writing practice are in one place.",
		tr: "Azerbaycan Türkçesinden Arapçaya başlamak için ana uygulama Nibras Arabic'tir. Fiil, isim, diyalog, test, kart ve yazı alıştırması bir aradadır.",
		ar: "التطبيق الأساسي لبدء العربية من الأذربيجانية هو Nibras Arabic. فيه الفعل والاسم والحوار والاختبار والبطاقات وتدريب الكتابة.",
		ru: "Основное приложение, чтобы начать арабский с азербайджанского, — Nibras Arabic. Глаголы, имена, диалоги, тесты, карточки и письмо в одном месте."
	}
};
var FIND_UI = {
	az: {
		search: "Alət axtar",
		empty: "Bu adla səhifə yoxdur.",
		start: "Haradan başlayım",
		lessons: "Dərslər",
		diff: "Fərqi nədir",
		tryNote: "Bu səhifəni oxuduqdan sonra kodu Nibras Dev-də yoxlaya bilərsən.",
		intro: "Hər səhifə bir mövzunu ayrıca açır. Əvvəl HTML və CSS ilə səhifənin üzünü oxu. Sonra Python ilə qısa proqram yaz. Dil, əmr və alət qarışmasın deyə aşağıda hər kartın nə olduğu yazılır. İlişəndə Nibras AI-yə sual ver."
	},
	en: {
		search: "Search a tool",
		empty: "No page with that name.",
		start: "Where to start",
		lessons: "Lessons",
		diff: "What is the difference",
		tryNote: "After this page, you can try the code in Nibras Dev.",
		intro: "Each page opens one topic on its own. First read the face of a page with HTML and CSS. Then write a short program in Python. So a language, a command, and a tool do not get mixed, each card below says what it is. When you get stuck, ask Nibras AI."
	},
	tr: {
		search: "Araç ara",
		empty: "Bu adda sayfa yok.",
		start: "Nereden başlamalı",
		lessons: "Dersler",
		diff: "Farkı ne",
		tryNote: "Bu sayfadan sonra kodu Nibras Dev içinde deneyebilirsin.",
		intro: "Her sayfa bir konuyu ayrı açar. Önce HTML ve CSS ile sayfanın yüzünü oku. Sonra Python ile kısa bir program yaz. Dil, komut ve araç karışmasın diye aşağıda her kartın ne olduğu yazılır. Takılınca Nibras AI'ye soru sor."
	},
	ar: {
		search: "ابحث عن أداة",
		empty: "لا صفحة بهذا الاسم.",
		start: "من أين تبدأ",
		diff: "ما الفرق",
		lessons: "دروس",
		tryNote: "بعد هذه الصفحة يمكنك تجربة الكود في Nibras Dev.",
		intro: "كل صفحة تفتح موضوعاً واحداً وحده. اقرأ أولاً وجه الصفحة مع HTML وCSS. ثم اكتب برنامجاً قصيراً بـ Python. كي لا تختلط اللغة والأمر والأداة، يُكتب تحت كل بطاقة ما هي. حين تقف اسأل Nibras AI."
	},
	ru: {
		search: "Найти инструмент",
		empty: "Такой страницы нет.",
		start: "С чего начать",
		lessons: "Уроки",
		diff: "В чём разница",
		tryNote: "После этой страницы код можно проверить в Nibras Dev.",
		intro: "Каждая страница открывает одну тему отдельно. Сначала прочитай лицо страницы через HTML и CSS. Потом напиши короткую программу на Python. Чтобы язык, команда и инструмент не смешались, под каждой карточкой написано, что это. Если застрял, спроси Nibras AI."
	}
};
function topicNote(slug, lang) {
	return (PROGRAMMING_SEO[slug]?.[lang]?.description ?? "").split(/(?<=[.!?])\s+/).filter(Boolean).slice(0, 2).join(" ");
}
var START_STEPS = [
	{
		slug: "html-css",
		text: {
			az: {
				title: "HTML/CSS",
				note: "Səhifənin üzü buradan başlayır. HTML quruluşu yazır, CSS rəngi və yeri deyir. Proqram dilindən əvvəl bunu oxu."
			},
			en: {
				title: "HTML/CSS",
				note: "The face of a page starts here. HTML writes the structure. CSS says the color and the place. Read this before a programming language."
			},
			tr: {
				title: "HTML/CSS",
				note: "Sayfanın yüzü buradan başlar. HTML yapıyı yazar, CSS rengi ve yeri söyler. Programlama dilinden önce bunu oku."
			},
			ar: {
				title: "HTML/CSS",
				note: "وجه الصفحة يبدأ من هنا. HTML يكتب البنية، وCSS يقول اللون والمكان. اقرأ هذا قبل لغة البرمجة."
			},
			ru: {
				title: "HTML/CSS",
				note: "Лицо страницы начинается здесь. HTML пишет структуру, CSS говорит цвет и место. Прочитай это до языка программирования."
			}
		}
	},
	{
		slug: "python",
		text: {
			az: {
				title: "Python",
				note: "İlk dil kimi buradan başla. print ilə mətn çıxır, şərt və döngə qısa proqramı idarə edir. Dərs fəsilləri ayrıca siyahıdadır."
			},
			en: {
				title: "Python",
				note: "Start here as a first language. print shows text. A condition and a loop run a short program. The lesson chapters are in their own list."
			},
			tr: {
				title: "Python",
				note: "İlk dil olarak buradan başla. print metni çıkarır, koşul ve döngü kısa programı yönetir. Ders bölümleri ayrı listededir."
			},
			ar: {
				title: "Python",
				note: "ابدأ من هنا كلغة أولى. print يُظهر النص، والشرط والحلقة يديران برنامجاً قصيراً. فصول الدرس في قائمة خاصة."
			},
			ru: {
				title: "Python",
				note: "Начни здесь как с первого языка. print выводит текст, условие и цикл ведут короткую программу. Главы урока в отдельном списке."
			}
		}
	},
	{
		slug: "ai",
		text: {
			az: {
				title: "Nibras AI",
				note: "Dərsdə bir sətir ilişəndə bura sual ver. AI dili əvəz etmir. Əvvəl səhifəni oxu, sonra anlamadığın sətri soruş."
			},
			en: {
				title: "Nibras AI",
				note: "Ask here when one line in a lesson gets stuck. AI does not replace the language. Read the page first, then ask about the line you did not understand."
			},
			tr: {
				title: "Nibras AI",
				note: "Derste bir satır takılınca buraya soru sor. AI dilin yerini tutmaz. Önce sayfayı oku, sonra anlamadığın satırı sor."
			},
			ar: {
				title: "Nibras AI",
				note: "حين يقف سطر في الدرس اسأل هنا. الذكاء الاصطناعي لا يحل محل اللغة. اقرأ الصفحة أولاً، ثم اسأل عن السطر الذي لم تفهمه."
			},
			ru: {
				title: "Nibras AI",
				note: "Когда одна строка в уроке не идёт, спроси здесь. ИИ не заменяет язык. Сначала прочитай страницу, потом спроси строку, которую не понял."
			}
		}
	}
];
var LESSONS = [
	{
		kind: "html",
		note: {
			az: "Səhifənin quruluşu, başlıq, abzas, siyahı, şəkil və form. Teq mətn deyil, yerin adıdır.",
			en: "The structure of a page, a heading, a paragraph, a list, an image, and a form. A tag is the name of a place, not the text.",
			tr: "Sayfanın yapısı, başlık, paragraf, liste, görsel ve form. Etiket metin değil, yerin adıdır.",
			ar: "بنية الصفحة والعنوان والفقرة والقائمة والصورة والنموذج. الوسم اسم المكان، لا النص.",
			ru: "Структура страницы, заголовок, абзац, список, картинка и форма. Тег — имя места, не текст."
		}
	},
	{
		kind: "css",
		note: {
			az: "Rəng, qutu, boşluq və hover. CSS səhifənin nə olduğunu yox, necə göründüyünü deyir.",
			en: "Color, the box, space, and hover. CSS does not say what the page is. It says how it looks.",
			tr: "Renk, kutu, boşluk ve hover. CSS sayfanın ne olduğunu değil, nasıl göründüğünü söyler.",
			ar: "اللون والصندوق والفراغ وhover. CSS لا يقول ما هي الصفحة، بل كيف تظهر.",
			ru: "Цвет, коробка, отступ и hover. CSS не говорит, чем страница является. Он говорит, как она выглядит."
		}
	},
	{
		kind: "javascript",
		note: {
			az: "İlk sətir, şərt, döngə və düymə. JavaScript səhifəni dəyişir. HTML-in yerini tutmur.",
			en: "The first line, a condition, a loop, and a button. JavaScript changes the page. It does not take HTML's place.",
			tr: "İlk satır, koşul, döngü ve düğme. JavaScript sayfayı değiştirir. HTML'in yerini tutmaz.",
			ar: "السطر الأول والشرط والحلقة والزر. JavaScript يغيّر الصفحة. لا يأخذ مكان HTML.",
			ru: "Первая строка, условие, цикл и кнопка. JavaScript меняет страницу. Он не занимает место HTML."
		}
	},
	{
		kind: "python",
		note: {
			az: "Sıfırdan dərs fəsilləri: ilk addım, şərt, funksiya, siyahı və xəta. Hər fəsil bir işi ayrıca deyir.",
			en: "Lesson chapters from scratch: the first step, a condition, a function, a list, and an error. Each chapter says one job on its own.",
			tr: "Sıfırdan ders bölümleri: ilk adım, koşul, fonksiyon, liste ve hata. Her bölüm bir işi ayrı söyler.",
			ar: "فصول دروس من الصفر: الخطوة الأولى والشرط والدالة والقائمة والخطأ. كل فصل يقول عملاً واحداً وحده.",
			ru: "Главы уроков с нуля: первый шаг, условие, функция, список и ошибка. Каждая глава говорит об одном деле отдельно."
		}
	},
	{
		kind: "sql",
		note: {
			az: "Cədvəldən oxu, sırala və say. SQL proqramlaşdırma dili deyil. Verilənlərə sual yazır.",
			en: "Read from a table, sort, and count. SQL is not a programming language in the same sense. It writes a question to the data.",
			tr: "Tablodan oku, sırala ve say. SQL aynı anlamda bir programlama dili değildir. Veriye soru yazar.",
			ar: "اقرأ من الجدول ورتّب وعدّ. SQL ليست لغة برمجة بالمعنى نفسه. تكتب سؤالاً للبيانات.",
			ru: "Читай из таблицы, сортируй и считай. SQL не язык программирования в том же смысле. Он пишет вопрос к данным."
		}
	}
];
var COMPARES = [{
	title: {
		az: "pip və npm",
		en: "pip and npm",
		tr: "pip ve npm",
		ar: "pip و npm",
		ru: "pip и npm"
	},
	body: {
		az: [
			"Pip Python üçün paket gətirən alətdir. npm isə Node.js üçün paket gətirən alətdir. İkisi də hazır kodu layihəyə qoyur, amma eyni yerdə işləmir.",
			"Python bir dildir. Onunla proqram yazılır. Pip həmin dilə hazır kitabxana quraşdırır. Məsələn hesab, şəkil və ya sayt üçün hazır kod gəlir.",
			"Node.js JavaScript-i kompüterdə işlədən mühitdir. npm həmin mühitə hazır paketi gətirir. Pip-i Node layihəsində işlətmək olmur. npm-i də Python layihəsində işlətmək olmur.",
			"Python quraşdırılanda pip çox vaxt onunla birlikdə gəlir. Node quraşdırılanda npm də gəlir. Alət dildən ayrıdır: dil kodu işlədir, alət paketi gətirir."
		],
		en: [
			"pip brings a package for Python. npm brings a package for Node.js. Both put ready code into a project, but they do not work in the same place.",
			"Python is a language. A program is written with it. pip installs a ready library for that language. A library for numbers, an image, or a site can come that way.",
			"Node.js is the place that runs JavaScript on a computer. npm brings a ready package into that place. pip does not belong in a Node project. npm does not belong in a Python project.",
			"When Python is installed, pip often comes with it. When Node is installed, npm comes too. The tool is separate from the language: the language runs the code, the tool brings the package."
		],
		tr: [
			"pip Python için paket getiren araçtır. npm ise Node.js için paket getiren araçtır. İkisi de hazır kodu projeye koyar, ama aynı yerde çalışmaz.",
			"Python bir dildir. Onunla program yazılır. pip o dile hazır kitaplık kurar. Hesap, görsel veya site için hazır kod gelebilir.",
			"Node.js, JavaScript’i bilgisayarda çalıştıran yerdir. npm o yere hazır paketi getirir. pip bir Node projesinde kullanılmaz. npm de bir Python projesinde kullanılmaz.",
			"Python kurulunca pip çoğu zaman onunla gelir. Node kurulunca npm de gelir. Araç dilden ayrıdır: dil kodu çalıştırır, araç paketi getirir."
		],
		ar: [
			"pip يجلب حزمة لبايثون. npm يجلب حزمة لـ Node.js. كلاهما يضع كوداً جاهزاً في المشروع، لكنهما لا يعملان في المكان نفسه.",
			"بايثون لغة. يُكتب بها البرنامج. pip يثبّت مكتبة جاهزة لتلك اللغة. قد تأتي مكتبة للحساب أو الصورة أو الموقع.",
			"Node.js هو المكان الذي يشغّل جافاسكريبت على الحاسوب. npm يجلب الحزمة الجاهزة إلى ذلك المكان. pip لا يُستخدم في مشروع Node. وnpm لا يُستخدم في مشروع بايثون.",
			"حين يُثبَّت بايثون يأتي pip معه غالباً. وحين يُثبَّت Node يأتي npm معه. الأداة منفصلة عن اللغة: اللغة تشغّل الكود، والأداة تجلب الحزمة."
		],
		ru: [
			"pip приносит пакет для Python. npm приносит пакет для Node.js. Оба кладут готовый код в проект, но работают не в одном месте.",
			"Python — это язык. На нём пишут программу. pip ставит готовую библиотеку для этого языка. Так может прийти код для счёта, картинки или сайта.",
			"Node.js — это место, где JavaScript работает на компьютере. npm приносит туда готовый пакет. pip не ставят в проект Node. npm не ставят в проект Python.",
			"Когда ставят Python, pip часто приходит с ним. Когда ставят Node, приходит и npm. Инструмент отдельно от языка: язык выполняет код, инструмент приносит пакет."
		]
	}
}, {
	title: {
		az: "Composer və PHP",
		en: "Composer and PHP",
		tr: "Composer ve PHP",
		ar: "Composer و PHP",
		ru: "Composer и PHP"
	},
	body: {
		az: [
			"PHP saytın server tərəfində işləyən dildir. Composer dil deyil. O, PHP kitabxanasını layihəyə yığan alətdir.",
			"PHP kodu oxuyur və işlədir. Composer isə lazım olan hazır kodu internetdən endirib layihənin qovluğuna qoyur. Düyməni PHP işlədir. Composer yalnız paketi gətirir.",
			"Composer olmasa da PHP işləyir. Kiçik bir səhifə üçün o lazım olmaya bilər. Böyük layihədə hər kitabxananı əl ilə yığmaq çətin olur. Composer bunu bir əmrlə edir.",
			"Qısa desək: PHP dildir. Composer həmin dilin paket alətidir. npm Node üçündür, pip Python üçündür, Composer PHP üçündür."
		],
		en: [
			"PHP is a language that runs on the server side of a site. Composer is not a language. It is the tool that brings a PHP library into a project.",
			"PHP reads the code and runs it. Composer downloads the ready code you need and puts it in the project folder. PHP runs the button. Composer only brings the package.",
			"PHP still runs without Composer. A small page may not need it. In a large project it is hard to collect every library by hand. Composer does that with one command.",
			"In short: PHP is the language. Composer is the package tool for that language. npm is for Node, pip is for Python, and Composer is for PHP."
		],
		tr: [
			"PHP, sitenin sunucu tarafında çalışan dildir. Composer dil değildir. PHP kitaplığını projeye getiren araçtır.",
			"PHP kodu okur ve çalıştırır. Composer ise gereken hazır kodu indirip projenin klasörüne koyar. Düğmeyi PHP çalıştırır. Composer yalnız paketi getirir.",
			"Composer olmasa da PHP çalışır. Küçük bir sayfa için gerekmez. Büyük projede her kitaplığı elle toplamak zordur. Composer bunu bir komutla yapar.",
			"Kısaca: PHP dildir. Composer o dilin paket aracıdır. npm Node içindir, pip Python içindir, Composer PHP içindir."
		],
		ar: [
			"PHP لغة تعمل في جهة الخادم من الموقع. Composer ليس لغة. هو الأداة التي تجمع مكتبة PHP في المشروع.",
			"PHP يقرأ الكود ويشغّله. Composer ينزّل الكود الجاهز الذي تحتاجه ويضعه في مجلد المشروع. PHP يشغّل الزر. Composer يجلب الحزمة فقط.",
			"PHP يعمل حتى من غير Composer. صفحة صغيرة قد لا تحتاجه. في مشروع كبير يصعب جمع كل مكتبة باليد. Composer يفعل ذلك بأمر واحد.",
			"باختصار: PHP هو اللغة. Composer أداة الحزم لتلك اللغة. npm لـ Node، وpip لبايثون، وComposer لـ PHP."
		],
		ru: [
			"PHP — язык, который работает на серверной стороне сайта. Composer — не язык. Это инструмент, который приносит библиотеку PHP в проект.",
			"PHP читает код и выполняет его. Composer скачивает нужный готовый код и кладёт его в папку проекта. Кнопку выполняет PHP. Composer только приносит пакет.",
			"PHP работает и без Composer. Маленькой странице он может не понадобиться. В большом проекте трудно собрать каждую библиотеку руками. Composer делает это одной командой.",
			"Коротко: PHP — это язык. Composer — инструмент пакетов для этого языка. npm для Node, pip для Python, Composer для PHP."
		]
	}
}];
var DEV_TRY = {
	python: "https://dev.nibrascode.com/python",
	javascript: "https://dev.nibrascode.com/javascript"
};
function programmingHref(lang, slug) {
	if (lang !== "az" && hasProgrammingLocale(lang, slug)) return programmingLocalePath(lang, slug);
	return localeHref(lang, `/programming/${slug}`);
}
function topicHref(section, slug, lang) {
	if (section === "resources" && slug === "pdf") return lang === "ru" ? "/ru/resources/pdf" : localeHref(lang, "/resurslar/pdf");
	return localeHref(lang, `/${section}/${slug}`);
}
function LibraryIndex({ section, rows = [] }) {
	const { t, lang } = useI18n();
	const page = LIBRARY[section];
	const group = section === "resources" ? "resurs" : section === "guides" ? "guide" : null;
	const extras = group ? libItems(group, rows).filter((item) => item.custom) : [];
	const [query, setQuery] = (0, import_react.useState)("");
	const needle = query.trim().toLowerCase();
	const topics = page.topics.filter((topic) => {
		if (section !== "programming" || !needle) return true;
		const label = t(topic.label).toLowerCase();
		const slug = topic.slug.toLowerCase();
		const name = toolName(topic.slug).toLowerCase();
		const flat = (slug + name).replace(/[^a-z0-9]+/g, "");
		const qflat = needle.replace(/[^a-z0-9]+/g, "");
		return label.includes(needle) || slug.includes(needle) || name.includes(needle) || qflat.length > 1 && flat.includes(qflat);
	});
	const copy = FIND_UI[lang];
	const programLinks = section === "programming" ? [
		{
			href: searchPath(lang, "soz"),
			label: SEARCH.soz.heading[lang]
		},
		{
			href: searchPath(lang, "xeta"),
			label: SEARCH.xeta.heading[lang]
		},
		{
			href: searchPath(lang, "movzu"),
			label: SEARCH.movzu.heading[lang]
		},
		{
			href: searchPath(lang, "nece"),
			label: SEARCH.nece.heading[lang]
		},
		{
			href: paketPath(lang),
			label: PAKET.heading[lang]
		},
		{
			href: comparePath(lang),
			label: COMPARE.heading[lang]
		}
	].filter((item) => !needle || item.label.toLowerCase().includes(needle)) : [];
	const lessons = section === "programming" ? LESSONS.filter((lesson) => {
		if (!needle) return true;
		return HUBS[lesson.kind].title[lang].toLowerCase().includes(needle) || lesson.note[lang].toLowerCase().includes(needle) || lesson.kind.includes(needle);
	}) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), "Nibras Code"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t(page.title) }),
			section === "programming" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: splitSentences(copy.intro).map((sentence, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
				icon: Info,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: sentence })
			}, `intro-${i}`)) }) : null,
			section === "programming" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "prog-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: copy.start }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: START_STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: step.slug === "html-css" ? "step-html" : step.slug === "python" ? "step-py" : "step-ai",
					href: step.slug === "ai" ? localeHref(lang, "/ai") : programmingHref(lang, step.slug),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: index + 1 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "step-copy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: step.text[lang].title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.text[lang].note })]
					})]
				}) }, step.slug)) })]
			}) : null,
			section === "programming" && lessons.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "prog-lessons",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: copy.lessons }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCards, { children: lessons.flatMap((lesson) => splitSentences(lesson.note[lang]).map((sentence, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: GraduationCap,
					title: HUBS[lesson.kind].title[lang],
					href: programmingLocalePath(lang, HUBS[lesson.kind].slug),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: sentence })
				}, `${lesson.kind}-${i}`))) })]
			}) : null,
			section === "programming" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "lib-search",
				type: "search",
				value: query,
				placeholder: copy.search,
				"aria-label": copy.search,
				onChange: (event) => setQuery(event.target.value)
			}) : null,
			section === "programming" && needle && topics.length === 0 && programLinks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lib-empty",
				children: copy.empty
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: section === "programming" ? "lib-list lib-list-2" : "lib-list",
				children: [
					programLinks.filter((item) => item.label.length <= 16).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.href,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "topic-name",
							children: [(() => {
								const Icon = linkIcon(item.href);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" });
							})(), item.label]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
					}) }, item.href)),
					(section === "programming" ? topics.filter((topic) => t(topic.label).length <= 16) : topics).map((topic) => {
						if (section === "programming") {
							const label = t(topic.label);
							const note = topicNote(topic.slug, lang);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: programmingHref(lang, topic.slug),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "topic-name",
									children: [(() => {
										const Icon = topicIcon(topic.slug);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" });
									})(), label]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
							}), note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "lib-desc",
								children: note
							}) : null] }, topic.slug);
						}
						const href = topicHref(section, topic.slug, lang);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href,
							children: [t(topic.label), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
						}) }, topic.slug);
					}),
					section === "programming" ? programLinks.filter((item) => item.label.length > 16).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "is-wide",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "topic-name",
								children: [(() => {
									const Icon = linkIcon(item.href);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" });
								})(), item.label]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
						})
					}, item.href)) : null,
					section === "programming" ? topics.filter((topic) => t(topic.label).length > 16).map((topic) => {
						const note = topicNote(topic.slug, lang);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "is-wide",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: programmingHref(lang, topic.slug),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "topic-name",
									children: [(() => {
										const Icon = topicIcon(topic.slug);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" });
									})(), t(topic.label)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
							}), note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
								className: "lib-desc",
								children: note
							}) : null]
						}, topic.slug);
					}) : null,
					extras.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: section === "resources" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: localeHref(lang, `/resurslar/${item.id}`),
						children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: localeHref(lang, `/guides/${item.id}`),
						children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
					}) }, item.id))
				]
			}),
			section === "programming" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "prog-compare",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: copy.diff }), COMPARES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "topic-name",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCompare, { "aria-hidden": "true" }), item.title[lang]]
				}) }), item.body[lang].map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))] }, item.title.en))]
			}) : null
		]
	});
}
var SECTION_ICONS = {
	nedir: CircleHelp,
	istifade: Boxes,
	"ne-etmek": Wrench,
	oyrenmek: GraduationCap,
	ustunluk: Sparkles,
	sintaksis: Braces,
	numuneler: Code,
	islek: Briefcase,
	suallar: MessageCircleQuestion
};
var TOPIC_ICONS = {
	python: Code,
	javascript: FileCode,
	java: Code,
	csharp: Code,
	typescript: FileCode,
	"html-css": Braces,
	"apk-hazirla": Package,
	sql: Database,
	go: Code,
	php: Code,
	kotlin: Code,
	cpp: Code,
	rust: Code,
	ubuntu: Server,
	"java-17": Code,
	nodejs: Server,
	"android-sdk": Package,
	gradle: Wrench,
	capacitor: Package,
	docker: Boxes,
	nginx: Server,
	ssl: Shield,
	firewall: Shield,
	git: GitCompare,
	bash: Terminal,
	json: Braces,
	react: Code,
	c: Code,
	mysql: Database,
	http: Server,
	linux: Terminal,
	ssh: Terminal,
	dns: Server,
	npm: Package,
	redis: Database,
	cron: ListChecks,
	pip: Package,
	sqlite: Database,
	curl: Terminal,
	composer: Package,
	cargo: Package,
	make: Wrench,
	maven: Package,
	yaml: FileCode,
	systemd: Server,
	postgresql: Database,
	markdown: BookOpen,
	rsync: Server,
	"git-github": GitCompare,
	api: Server
};
var LINK_ICONS = {
	soz: BookOpen,
	xeta: Bug,
	movzu: Sparkles,
	nece: ListChecks,
	paket: Package,
	muqayise: GitCompare
};
function topicIcon(slug) {
	return TOPIC_ICONS[slug] ?? Code;
}
function linkIcon(href) {
	return LINK_ICONS[href.split("/").filter(Boolean).pop() ?? ""] ?? BookOpen;
}
var PROGRAM_NAMES = {
	python: "Python",
	javascript: "JavaScript",
	java: "Java",
	csharp: "C#",
	typescript: "TypeScript",
	"html-css": "HTML/CSS",
	sql: "SQL",
	go: "Go",
	php: "PHP",
	kotlin: "Kotlin",
	cpp: "C++",
	rust: "Rust",
	ubuntu: "Ubuntu",
	"java-17": "Java 17",
	nodejs: "Node.js",
	"android-sdk": "Android SDK",
	gradle: "Gradle",
	capacitor: "Capacitor",
	docker: "Docker",
	nginx: "Nginx",
	ssl: "SSL / HTTPS",
	firewall: "Firewall",
	git: "Git",
	bash: "Bash",
	json: "JSON",
	react: "React",
	c: "C",
	mysql: "MySQL",
	http: "HTTP",
	linux: "Linux",
	ssh: "SSH",
	dns: "DNS",
	npm: "npm",
	redis: "Redis",
	cron: "cron",
	pip: "pip",
	sqlite: "SQLite",
	curl: "curl",
	composer: "Composer",
	cargo: "Cargo",
	make: "Make",
	maven: "Maven",
	yaml: "YAML",
	systemd: "systemd",
	postgresql: "PostgreSQL",
	markdown: "Markdown",
	rsync: "rsync",
	"git-github": "Git və GitHub",
	api: "API",
	"python-javascript": "Python və JavaScript",
	localhost: "Localhost",
	"frontend-backend": "Frontend və backend",
	framework: "Framework",
	terminal: "Terminal",
	deploy: "Deploy",
	"apk-hazirla": "APK hazırla"
};
function toolName(slug) {
	return PROGRAM_NAMES[slug] || "";
}
var GAME_TRIES = [
	{
		title: {
			az: "Xal",
			en: "Score",
			tr: "Puan",
			ar: "النقاط",
			ru: "Счёт"
		},
		note: {
			az: "Düyməyə hər basanda xal bir artır. Oyun üçün bu, ən kiçik haldır: bir ədəd saxlanır və bir hadisə onu dəyişir.",
			en: "Each click adds one point. This is the smallest game: one number is kept, and one event changes it.",
			tr: "Her tıklamada puan bir artar. Oyun için en küçük hal budur: bir sayı tutulur ve bir olay onu değiştirir.",
			ar: "كل ضغطة تزيد نقطة. هذه أصغر لعبة: يُحفظ رقم واحد وحدث واحد يغيّره.",
			ru: "Каждое нажатие добавляет одно очко. Это самая маленькая игра: хранится одно число, и одно событие его меняет."
		},
		code: `<p>Xal: <b id="score">0</b></p>
<button type="button" id="hit">Vur</button>
<script>
  let score = 0;
  const scoreNode = document.getElementById("score");
  document.getElementById("hit").addEventListener("click", () => {
    score += 1;
    scoreNode.textContent = String(score);
  });
<\/script>`
	},
	{
		title: {
			az: "Tap",
			en: "Guess",
			tr: "Bul",
			ar: "خمّن",
			ru: "Угадай"
		},
		note: {
			az: "Gizli rəqəm 2-dir. Üç düymədən biri düz cavabı yazır, qalanı yenidən cəhd etməyi deyir. Şərt burada başlayır.",
			en: "The hidden number is 2. One of the three buttons writes the right answer. The others say to try again. This is where a condition starts.",
			tr: "Gizli sayı 2'dir. Üç düğmeden biri doğru cevabı yazar, diğerleri yeniden denemeyi söyler. Koşul burada başlar.",
			ar: "الرقم المخفي هو 2. أحد الأزرار الثلاثة يكتب الجواب الصحيح، والباقي يطلب المحاولة مرة أخرى. الشرط يبدأ هنا.",
			ru: "Скрытое число — 2. Одна из трёх кнопок пишет верный ответ, остальные просят попробовать снова. Условие начинается здесь."
		},
		code: `<p>1, 2 və ya 3 seç.</p>
<button type="button" data-n="1">1</button>
<button type="button" data-n="2">2</button>
<button type="button" data-n="3">3</button>
<p id="out"></p>
<script>
  const secret = 2;
  const out = document.getElementById("out");
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const pick = Number(button.getAttribute("data-n"));
      out.textContent = pick === secret ? "Düzdür" : "Yenə cəhd et";
    });
  });
<\/script>`
	},
	{
		title: {
			az: "Taymer",
			en: "Timer",
			tr: "Sayaç",
			ar: "المؤقت",
			ru: "Таймер"
		},
		note: {
			az: "Başla düyməsi 10-dan geri sayır və bitəndə dayanır. Eyni düymə ikinci dəfə işə düşmür, çünki sayım açıq olanda bağlı olur.",
			en: "Start counts down from 10 and stops at zero. The same button does not start twice, because it is disabled while the count is running.",
			tr: "Başla düğmesi 10'dan geri sayar ve sıfırda durur. Sayım açıkken düğme kapanır, ikinci kez başlamaz.",
			ar: "زر ابدأ يعدّ من 10 إلى الصفر ويتوقف. الزر نفسه لا يبدأ مرتين لأنه يُغلق أثناء العد.",
			ru: "Кнопка «Başla» считает от 10 до нуля и останавливается. Второй раз она не стартует, потому что во время счёта она выключена."
		},
		code: `<p>Vaxt: <b id="time">10</b></p>
<button type="button" id="start">Başla</button>
<script>
  const start = document.getElementById("start");
  const time = document.getElementById("time");
  start.addEventListener("click", () => {
    let left = 10;
    start.disabled = true;
    const timer = setInterval(() => {
      left -= 1;
      time.textContent = String(left);
      if (left === 0) clearInterval(timer);
    }, 1000);
  });
<\/script>`
	},
	LARGE_GAME
];
var APP_TRIES = [
	{
		title: {
			az: "Qeyd",
			en: "Note",
			tr: "Not",
			ar: "ملاحظة",
			ru: "Заметка"
		},
		note: {
			az: "Yazılan mətn siyahıya əlavə olunur və xana təmizlənir. Boş mətn əlavə olunmur. Bu, kiçik bir qeyd dəftəridir.",
			en: "The written text is added to the list and the field is cleared. Empty text is not added. This is a small notebook.",
			tr: "Yazılan metin listeye eklenir ve kutu temizlenir. Boş metin eklenmez. Bu, küçük bir not defteridir.",
			ar: "النص المكتوب يُضاف إلى القائمة ويُفرَّغ الحقل. النص الفارغ لا يُضاف. هذه مفكرة صغيرة.",
			ru: "Написанный текст добавляется в список, и поле очищается. Пустой текст не добавляется. Это маленький блокнот."
		},
		code: `<form id="note">
  <input id="text" type="text" placeholder="Qeyd">
  <button type="submit">Əlavə et</button>
</form>
<ul id="list"></ul>
<script>
  const form = document.getElementById("note");
  const text = document.getElementById("text");
  const list = document.getElementById("list");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = text.value.trim();
    if (!value) return;
    const item = document.createElement("li");
    item.textContent = value;
    list.append(item);
    text.value = "";
  });
<\/script>`
	},
	{
		title: {
			az: "Rejim",
			en: "Mode",
			tr: "Mod",
			ar: "الوضع",
			ru: "Режим"
		},
		note: {
			az: "Bir düymə səhifəni tünd və açıq rejim arasında dəyişir. Vəziyyət sinifdə saxlanır, ayrı bir səhifə açılmır.",
			en: "One button switches the page between dark and light. The state stays in a class. No second page is opened.",
			tr: "Bir düğme sayfayı koyu ve açık mod arasında değiştirir. Durum sınıfta durur, ikinci sayfa açılmaz.",
			ar: "زر واحد يبدّل الصفحة بين الوضع الداكن والفاتح. الحالة تبقى في صنف ولا تُفتح صفحة ثانية.",
			ru: "Одна кнопка переключает страницу между тёмным и светлым режимом. Состояние лежит в классе, вторая страница не открывается."
		},
		code: `<button type="button" id="mode">Tünd</button>
<p id="label">Rejim: açıq</p>
<script>
  const mode = document.getElementById("mode");
  const label = document.getElementById("label");
  mode.addEventListener("click", () => {
    const dark = document.body.classList.toggle("dark");
    document.body.style.background = dark ? "#0f172a" : "#f8fafc";
    document.body.style.color = dark ? "#e2e8f0" : "#0f172a";
    label.textContent = dark ? "Rejim: tünd" : "Rejim: açıq";
  });
<\/script>`
	},
	{
		title: {
			az: "Cəm",
			en: "Sum",
			tr: "Toplam",
			ar: "المجموع",
			ru: "Сумма"
		},
		note: {
			az: "İki xanadakı ədəd toplanır. Ədəd olmayan yazı sıfır sayılır. Nəticə düymədən sonra görünür.",
			en: "The two fields are added. A value that is not a number counts as zero. The result shows after the button.",
			tr: "İki kutudaki sayı toplanır. Sayı olmayan yazı sıfır sayılır. Sonuç düğmeden sonra görünür.",
			ar: "يُجمع الرقمان في الحقلين. الكتابة التي ليست رقماً تُحسب صفراً. النتيجة تظهر بعد الزر.",
			ru: "Складываются числа из двух полей. Текст, который не число, считается нулём. Результат виден после кнопки."
		},
		code: `<input id="a" type="number" value="2">
<input id="b" type="number" value="3">
<button type="button" id="add">Cəm</button>
<p id="sum"></p>
<script>
  document.getElementById("add").addEventListener("click", () => {
    const a = Number(document.getElementById("a").value) || 0;
    const b = Number(document.getElementById("b").value) || 0;
    document.getElementById("sum").textContent = String(a + b);
  });
<\/script>`
	},
	LARGE_APP
];
var SAMPLE_INTRO = {
	"oyun-kodu": {
		az: "Üç kiçik oyun hissəsi var: xal, tapmaq və taymer. Hər biri bir HTML səhifədə işləyir. Kodu kopyalayıb test səhifəsində aç.",
		en: "There are three small game pieces: a score, a guess, and a timer. Each one runs in one HTML page. Copy the code and open it on the test page.",
		tr: "Üç küçük oyun parçası var: puan, bulma ve sayaç. Her biri bir HTML sayfada çalışır. Kodu kopyalayıp test sayfasında aç.",
		ar: "هناك ثلاث قطع لعب صغيرة: نقاط وتخمين ومؤقت. كل واحدة تعمل في صفحة HTML. انسخ الكود وافتحه في صفحة الاختبار.",
		ru: "Три маленьких куска игры: счёт, угадывание и таймер. Каждый работает на одной HTML-странице. Скопируй код и открой его на тестовой странице."
	},
	"tetbiq-kodu": {
		az: "Üç kiçik tətbiq hissəsi var: qeyd, rejim və cəm. Oyun səhifəsindən ayrıdır. Hər kodu kopyalayıb test səhifəsində aç.",
		en: "There are three small app pieces: a note, a mode, and a sum. They are separate from the game page. Copy each one and open it on the test page.",
		tr: "Üç küçük uygulama parçası var: not, mod ve toplam. Oyun sayfasından ayrıdır. Her kodu kopyalayıp test sayfasında aç.",
		ar: "هناك ثلاث قطع تطبيق صغيرة: ملاحظة ووضع ومجموع. هي منفصلة عن صفحة اللعبة. انسخ كل كود وافتحه في صفحة الاختبار.",
		ru: "Три маленьких куска приложения: заметка, режим и сумма. Они отдельно от страницы игры. Скопируй каждый и открой на тестовой странице."
	},
	"sayt-kodu": {
		az: "Eyni sayt üç ölçüdədir. Sadə ölçüdə bir başlıq var. Orta ölçüdə menyu və iki qeyd var. Böyük ölçüdə kartlar və forma var.",
		en: "The same kind of site is shown in three sizes. The simple one has a heading. The medium one has a menu and two notes. The large one has cards and a form.",
		tr: "Aynı tür site üç boydadır. Basit boyda bir başlık var. Orta boyda menü ve iki not var. Büyük boyda kartlar ve form var.",
		ar: "الموقع نفسه بثلاثة أحجام. البسيط فيه عنوان. المتوسط فيه قائمة وملاحظتان. الكبير فيه بطاقات ونموذج.",
		ru: "Один и тот же вид сайта в трёх размерах. В простом есть заголовок. В среднем — меню и две заметки. В большом — карточки и форма."
	}
};
var HUB_NOTE = {
	az: "Oyun kodunda xal, tapmaq və taymer var. Tətbiq kodunda qeyd, rejim və cəm var. İkisi eyni sətirləri təkrarlamır.",
	en: "Game code has a score, a guess, and a timer. App code has a note, a mode, and a sum. The two pages do not repeat the same lines.",
	tr: "Oyun kodunda puan, bulma ve sayaç var. Uygulama kodunda not, mod ve toplam var. İki sayfa aynı satırları tekrarlamaz.",
	ar: "كود اللعبة فيه نقاط وتخمين ومؤقت. كود التطبيق فيه ملاحظة ووضع ومجموع. الصفحتان لا تكرران الأسطر نفسها.",
	ru: "В коде игры есть счёт, угадывание и таймер. В коде приложения есть заметка, режим и сумма. Две страницы не повторяют одни и те же строки."
};
var SITE_TRIES = [
	{
		title: {
			az: "Sadə",
			en: "Simple",
			tr: "Basit",
			ar: "بسيط",
			ru: "Простой"
		},
		note: {
			az: "Bir başlıq və bir abzas. Menyü, kart və forma yoxdur. Səhifənin ən kiçik halıdır.",
			en: "One heading and one paragraph. There is no menu, card, or form. This is the smallest page.",
			tr: "Bir başlık ve bir paragraf. Menü, kart ve form yok. Sayfanın en küçük halidir.",
			ar: "عنوان وفقرة. لا قائمة ولا بطاقة ولا نموذج. هذه أصغر صفحة.",
			ru: "Один заголовок и один абзац. Нет меню, карточки и формы. Это самая маленькая страница."
		},
		code: `<style>
  body { margin: 0; font-family: Georgia, serif; background: #f6f3ec; color: #1c1917; }
  main { max-width: 36rem; margin: 48px auto; padding: 0 20px; }
  h1 { margin: 0 0 12px; font-size: 2rem; }
  p { line-height: 1.6; }
</style>
<main>
  <h1>Sadə səhifə</h1>
  <p>Bir başlıq və bir abzas. Başqa heç nə yoxdur.</p>
</main>`
	},
	{
		title: {
			az: "Orta",
			en: "Medium",
			tr: "Orta",
			ar: "متوسط",
			ru: "Средний"
		},
		note: {
			az: "Üst hissədə ad və iki keçid var. Altda iki qeyd, siyahı və düymə var.",
			en: "The top has a name and two links. Below that are two notes, a list, and a button.",
			tr: "Üstte ad ve iki bağlantı var. Altta iki not, liste ve düğme var.",
			ar: "في الأعلى اسم ورابطان. في الأسفل ملاحظتان وقائمة وزر.",
			ru: "Сверху имя и две ссылки. Ниже две заметки, список и кнопка."
		},
		code: `<style>
  body { margin: 0; font-family: sans-serif; background: #0f172a; color: #e2e8f0; }
  header { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; border-bottom: 1px solid #334155; }
  nav a { color: #94a3b8; margin-left: 16px; text-decoration: none; }
  main { max-width: 640px; margin: 0 auto; padding: 24px; display: grid; gap: 12px; }
  article { background: #1e293b; border-radius: 12px; padding: 16px; }
  h2 { margin: 0 0 8px; font-size: 1.1rem; }
  button { border: 0; border-radius: 8px; padding: 8px 12px; background: #38bdf8; color: #082f49; font-weight: 700; }
</style>
<header>
  <strong>Qeydlər</strong>
  <nav>
    <a href="#yeni">Yeni</a>
    <a href="#kohne">Köhnə</a>
  </nav>
</header>
<main>
  <article id="yeni">
    <h2>Birinci qeyd</h2>
    <p>Qısa mətn. Düymə ilə növbəti addım açılır.</p>
    <button type="button">Aç</button>
  </article>
  <article id="kohne">
    <h2>İkinci qeyd</h2>
    <p>Bir az daha çox məzmun: siyahı və ikinci düymə.</p>
    <ul>
      <li>Oxu</li>
      <li>Yaz</li>
      <li>Yadda saxla</li>
    </ul>
    <button type="button">Saxla</button>
  </article>
</main>`
	},
	{
		title: {
			az: "Böyük",
			en: "Large",
			tr: "Büyük",
			ar: "كبير",
			ru: "Большой"
		},
		note: {
			az: "Başlıq zolağı, üç kart və qısa form bir səhifədədir. Telefonda kartlar alt-alta düşür.",
			en: "A heading bar, three cards, and a short form sit on one page. On a phone the cards stack.",
			tr: "Başlık şeridi, üç kart ve kısa form bir sayfadadır. Telefonda kartlar alt alta iner.",
			ar: "شريط عنوان وثلاث بطاقات ونموذج قصير في صفحة واحدة. على الهاتف تنزل البطاقات تحت بعضها.",
			ru: "Полоса заголовка, три карточки и короткая форма на одной странице. На телефоне карточки встают друг под другом."
		},
		code: `<style>
  body { margin: 0; font-family: sans-serif; background: #f8fafc; color: #0f172a; }
  header { display: flex; justify-content: space-between; align-items: center; padding: 16px 28px; background: #0f172a; color: #fff; }
  header a { color: #cbd5e1; margin-left: 16px; text-decoration: none; }
  .hero { padding: 56px 28px; background: #e0f2fe; }
  .hero h1 { margin: 0 0 8px; font-size: 2.4rem; }
  .wrap { max-width: 960px; margin: 0 auto; padding: 28px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; }
  .card h2 { margin: 0 0 8px; font-size: 1.05rem; }
  form { display: grid; gap: 10px; margin-top: 22px; max-width: 420px; }
  input, textarea { border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; font: inherit; }
  button { border: 0; border-radius: 8px; padding: 10px 14px; background: #0284c7; color: #fff; font-weight: 700; }
  footer { padding: 18px 28px; color: #64748b; border-top: 1px solid #e2e8f0; }
  @media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }
</style>
<header>
  <strong>Nümunə sayt</strong>
  <nav>
    <a href="#haqqinda">Haqqında</a>
    <a href="#isler">İşlər</a>
    <a href="#yazi">Yaz</a>
  </nav>
</header>
<section class="hero">
  <h1>Böyük nümunə</h1>
  <p>Başlıq, üç kart, forma və alt hissə bir səhifədədir.</p>
</section>
<div class="wrap" id="haqqinda">
  <div class="grid" id="isler">
    <article class="card">
      <h2>Birinci iş</h2>
      <p>Qısa təsvir. Kart öz qutusundadır.</p>
    </article>
    <article class="card">
      <h2>İkinci iş</h2>
      <p>Eyni ölçü, fərqli mətn. Şəbəkə üç sütundur.</p>
    </article>
    <article class="card">
      <h2>Üçüncü iş</h2>
      <p>Telefonda kartlar alt-alta düşür.</p>
    </article>
  </div>
  <form id="yazi">
    <h2>Qısa məktub</h2>
    <input type="text" name="ad" placeholder="Ad">
    <input type="email" name="poct" placeholder="E-poçt">
    <textarea name="metn" rows="4" placeholder="Mətn"></textarea>
    <button type="button">Göndər</button>
  </form>
</div>
<footer>Nümunə saytın alt hissəsi.</footer>`
	}
];
var HTML_TEST_URL = "https://dev.nibrascode.com/html";
function HtmlTry({ code, title, note }) {
	const { t } = useI18n();
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "code-try",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "code-try-level",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "code-try-note",
				children: note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "code-try-bar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						navigator.clipboard.writeText(code).then(() => {
							setCopied(true);
							window.setTimeout(() => setCopied(false), 1600);
						});
					},
					children: copied ? t("code_copied") : t("code_copy")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: HTML_TEST_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					children: t("code_test")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				dir: "ltr",
				children: code
			})
		]
	});
}
function CodeSamplePage({ slug }) {
	const { t, lang } = useI18n();
	const item = CODE_SAMPLES.find((entry) => entry.slug === slug) ?? (slug === SITE_CODE.slug ? SITE_CODE : void 0);
	const parentHref = slug === SITE_CODE.slug ? programmingLocalePath(lang, "html-css") : programmingLocalePath(lang, CODE_SAMPLE_HUB);
	const parentLabel = slug === SITE_CODE.slug ? "HTML/CSS" : t("code_samples");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), item ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: parentHref,
					children: parentLabel
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localeHref(lang, "/programming"),
					children: t("nav_programming")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: item ? t(item.label) : t("code_samples") }),
			item ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "code-lead",
				children: SAMPLE_INTRO[item.slug][lang]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "code-tries",
				children: (item.slug === SITE_CODE.slug ? SITE_TRIES : item.slug === "oyun-kodu" ? GAME_TRIES : APP_TRIES).map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HtmlTry, {
					code: entry.code,
					title: entry.title[lang],
					note: entry.note[lang]
				}, entry.title.az))
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("code_samples_note") }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: HUB_NOTE[lang] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "lib-list",
					children: CODE_SAMPLES.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: programmingLocalePath(lang, entry.slug),
						children: [t(entry.label), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
					}) }, entry.slug))
				})
			] })
		]
	});
}
var INSTALL_LINK = {
	python: {
		slug: "python-qurasdir",
		label: "prog_python_setup"
	},
	javascript: {
		slug: "node-qurasdir",
		label: "prog_node_setup"
	},
	typescript: {
		slug: "node-qurasdir",
		label: "prog_node_setup"
	},
	nodejs: {
		slug: "node-qurasdir",
		label: "prog_node_setup"
	},
	java: {
		slug: "java-qurasdir",
		label: "prog_java_setup"
	},
	csharp: {
		slug: "csharp-qurasdir",
		label: "prog_csharp_setup"
	},
	sql: {
		slug: "sql-qurasdir",
		label: "prog_sql_setup"
	}
};
var INSTALL_BACK = {
	"python-qurasdir": {
		slug: "python",
		label: "prog_python"
	},
	"node-qurasdir": {
		slug: "nodejs",
		label: "prog_node"
	},
	"java-qurasdir": {
		slug: "java",
		label: "prog_java"
	},
	"csharp-qurasdir": {
		slug: "csharp",
		label: "prog_csharp"
	},
	"sql-qurasdir": {
		slug: "sql",
		label: "prog_sql"
	}
};
var CMD_MISSING = {
	az: "Əmr tanınmırsa",
	en: "If the command is not recognized",
	tr: "Komut tanınmıyorsa",
	ar: "إذا لم يُعرف الأمر",
	ru: "Если команда не находится"
};
var SCHWA = {
	az: "ə hərfi kvadratdırsa",
	en: "If the letter ə is a square",
	tr: "ə harfi kareyse",
	ar: "إذا كان حرف ə مربعًا",
	ru: "Если буква ə квадрат"
};
var EXCEL_SCHWA = {
	az: "Excel-də ə pozulursa",
	en: "If Excel breaks ə",
	tr: "Excel ə'yi bozuyorsa",
	ar: "إذا أفسد Excel حرف ə",
	ru: "Если Excel портит ə"
};
var HTML_SCHWA = {
	az: "Səhifədə ə sual işarəsidirsə",
	en: "If ə is a question mark on the page",
	tr: "Sayfada ə soru işaretiyse",
	ar: "إذا صار ə علامة استفهام في الصفحة",
	ru: "Если ə на странице стало вопросом"
};
var EXCEL_COL = {
	az: "Excel bir sütun açırsa",
	en: "If Excel opens one column",
	tr: "Excel tek sütun açıyorsa",
	ar: "إذا فتح Excel عمودًا واحدًا",
	ru: "Если Excel открывает один столбец"
};
var PS_SCRIPT = {
	az: "PowerShell skripti saxlayırsa",
	en: "If PowerShell stops the script",
	tr: "PowerShell betiği durduruyorsa",
	ar: "إذا أوقف PowerShell السكربت",
	ru: "Если PowerShell останавливает скрипт"
};
var JSON_SCHWA = {
	az: "JSON-da ə \\u0259 olursa",
	en: "If ə is \\u0259 in JSON",
	tr: "JSON'da ə \\u0259 oluyorsa",
	ar: "إذا صار ə في JSON‏ \\u0259",
	ru: "Если ə в JSON стало \\u0259"
};
var ETME = {
	az: "ödəyici sözü ödÉ™yici olursa",
	en: "If ödəyici turns into ödÉ™yici",
	tr: "ödəyici sözcüğü ödÉ™yici oluyorsa",
	ar: "إذا صارت ödəyici هي ödÉ™yici",
	ru: "Если ödəyici стало ödÉ™yici"
};
var CS_SCHWA = {
	az: "C#-də ə sual işarəsi olursa",
	en: "If ə becomes a question mark in C#",
	tr: "C#'ta ə soru işareti oluyorsa",
	ar: "إذا صار ə علامة سؤال في C#",
	ru: "Если ə в C# стало вопросом"
};
var WA_EXCEL = {
	az: "WhatsApp söhbəti Excel-də pozulursa",
	en: "If a WhatsApp chat breaks in Excel",
	tr: "WhatsApp sohbeti Excel'de bozuluyorsa",
	ar: "إذا فسدت دردشة WhatsApp في Excel",
	ru: "Если переписка WhatsApp ломается в Excel"
};
var PDF_SCHWA = {
	az: "PDF-də ə kvadrat olursa",
	en: "If ə is a square in a PDF",
	tr: "PDF'de ə kare oluyorsa",
	ar: "إذا صار ə مربعًا في PDF",
	ru: "Если ə в PDF стало квадратом"
};
var MYSQL_SCHWA = {
	az: "MySQL-də ə sual işarəsi olursa",
	en: "If ə becomes a question mark in MySQL",
	tr: "MySQL'de ə soru işareti oluyorsa",
	ar: "إذا صار ə علامة سؤال في MySQL",
	ru: "Если ə в MySQL стало вопросом"
};
var SMS_SCHWA = {
	az: "SMS-də ə mesajı 70-ə endirirsə",
	en: "If ə cuts an SMS to 70",
	tr: "SMS'te ə mesajı 70'e indiriyorsa",
	ar: "إذا أنزل ə الرسالة إلى 70",
	ru: "Если ə укорачивает SMS до 70"
};
var JAVA_SCHWA = {
	az: "Java-da Excel üçün ə pozulursa",
	en: "If ə breaks for Excel in Java",
	tr: "Java'da Excel için ə bozuluyorsa",
	ar: "إذا فسد ə من أجل Excel في Java",
	ru: "Если ə в Java портится для Excel"
};
var QR_SCHWA = {
	az: "QR kod ə hərfinı qəbul etmirsə",
	en: "If a QR code will not take ə",
	tr: "QR kod ə harfini kabul etmiyorsa",
	ar: "إذا لم يقبل رمز QR حرف ə",
	ru: "Если QR-код не принимает ə"
};
var IBAN_SAMPLE = {
	az: "IBAN nümunəsini yoxlamaq",
	en: "Check the IBAN sample",
	tr: "IBAN örneğini yoklamak",
	ar: "فحص نموذج IBAN",
	ru: "Проверить образец IBAN"
};
var VOEN_FORM = {
	az: "VÖEN-in doqquzuncu rəqəmi hesablanmır",
	en: "The ninth digit of a VÖEN cannot be calculated",
	tr: "VÖEN'in dokuzuncu rakamı hesaplanmaz",
	ar: "الرقم التاسع في VÖEN لا يُحسب",
	ru: "Девятую цифру VÖEN посчитать нельзя"
};
function WorkSample({ slug }) {
	const { t, lang } = useI18n();
	const sample = WORK_SAMPLES[slug];
	const [copied, setCopied] = (0, import_react.useState)(false);
	if (!sample) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "code-try",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "code-try-level",
				children: sample.title[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "code-try-note",
				children: sample.note[lang]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "code-try-bar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						navigator.clipboard.writeText(sample.code).then(() => {
							setCopied(true);
							window.setTimeout(() => setCopied(false), 1600);
						});
					},
					children: copied ? t("code_copied") : t("code_copy")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				dir: "ltr",
				children: sample.code
			})
		]
	});
}
function ProgrammingArticle({ slug, title, sections, intro, footer, openAll }) {
	const { t, lang } = useI18n();
	const heading = slug && PROGRAM_NAMES[slug] || title;
	const related = slug ? INSTALL_LINK[slug] || INSTALL_BACK[slug] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localeHref(lang, "/programming"),
					children: t("nav_programming")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: slug ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "topic-name",
				children: [(() => {
					const Icon = topicIcon(slug);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" });
				})(), heading]
			}) : heading }),
			related ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: programmingLocalePath(lang, related.slug),
					children: t(related.label)
				})
			}) : null,
			slug && INSTALL_BACK[slug] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "emr-taninmir"),
					children: CMD_MISSING[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "e-herfi"),
					children: SCHWA[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "excel-e"),
					children: EXCEL_SCHWA[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "excel-sutun"),
					children: EXCEL_COL[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "json-e"),
					children: JSON_SCHWA[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "etme"),
					children: ETME[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "whatsapp-excel"),
					children: WA_EXCEL[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "pdf-e"),
					children: PDF_SCHWA[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "sms-e"),
					children: SMS_SCHWA[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "qr-e"),
					children: QR_SCHWA[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "iban"),
					children: IBAN_SAMPLE[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "voen"),
					children: VOEN_FORM[lang]
				})
			}) : null,
			slug === "java" || slug === "java-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "java-e"),
					children: JAVA_SCHWA[lang]
				})
			}) : null,
			slug === "csharp" || slug === "csharp-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "csharp-e"),
					children: CS_SCHWA[lang]
				})
			}) : null,
			slug === "sql" || slug === "sql-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "mysql-e"),
					children: MYSQL_SCHWA[lang]
				})
			}) : null,
			slug === "python" || slug === "python-qurasdir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "ps-skript"),
					children: PS_SCRIPT[lang]
				})
			}) : null,
			slug === "html-css" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "prog-try",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: searchTopicPath(lang, "xeta", "html-e"),
					children: HTML_SCHWA[lang]
				})
			}) : null,
			slug && DEV_TRY[slug] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "prog-try",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: DEV_TRY[slug],
					target: "_blank",
					rel: "noopener noreferrer",
					children: [t("code_test"), " · Nibras Dev"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: FIND_UI[lang].tryNote })]
			}) : null,
			intro,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgMicroTool, { slug }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "prog-sections",
				children: sections?.map((item, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					id: item.id,
					className: "prog-fold",
					open: openAll || void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [(() => {
						const Icon = SECTION_ICONS[item.id] ?? BookOpen;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" });
					})(), item.title] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prog-fold-body",
						children: item.blocks?.map((block, blockIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							block.heading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: block.heading }) : null,
							block.paragraphs?.map((paragraph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, i)),
							block.list ? block.ordered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: block.list.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, i)) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: block.list.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, i)) }) : null,
							block.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								dir: "ltr",
								children: block.code
							}) : null,
							block.after?.map((paragraph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, i))
						] }, blockIndex))
					})]
				}, `${item.id}-${itemIndex}`))
			}),
			slug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSample, { slug }) : null,
			slug && pageTools(slug).length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "prog-fold-body",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: TOOLS_PAGE.toolsFor[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "lib-list",
					children: pageTools(slug).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: toolPath(lang, id),
						children: TOOLS$1.find((tool) => tool.id === id).label[lang]
					}) }, id))
				})]
			}) : null,
			slug === "python" || slug === "javascript" || slug === "sql" || slug === "html-css" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "lib-list",
				children: slug === "html-css" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "is-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: programmingLocalePath(lang, HUBS.html.slug),
						children: [HUBS.html.title[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "is-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: programmingLocalePath(lang, HUBS.css.slug),
						children: [HUBS.css.title[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
					})
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "is-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: programmingLocalePath(lang, HUBS[slug === "python" ? "python" : slug === "javascript" ? "javascript" : "sql"].slug),
						children: [HUBS[slug === "python" ? "python" : slug === "javascript" ? "javascript" : "sql"].title[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
					})
				})
			}) : null,
			slug === "html-css" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "lib-list",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "is-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: programmingLocalePath(lang, SITE_CODE.slug),
						children: [t(SITE_CODE.label), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
					})
				})
			}) : null,
			slug === "apk-hazirla" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "prog-fold-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: APK_PATH[lang] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: APK_PATH_NOTE[lang] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "lib-list",
						children: APK_LESSON_FILES.map((file) => {
							const lesson = pagesOf("javascript").find((page) => page.file === file);
							if (!lesson) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: programmingLocalePath(lang, lesson.slug),
								children: [lesson.title[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
							}) }, lesson.slug);
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApkLab, {})] }) : null,
			footer
		]
	});
}
function PythonArticle({ privacy, title, sections, bakedLang }) {
	const { lang } = useI18n();
	const [view, setView] = (0, import_react.useState)({
		title,
		sections
	});
	(0, import_react.useEffect)(() => {
		if (lang === bakedLang) {
			setView((current) => current.title === title && current.sections === sections ? current : {
				title,
				sections
			});
			return;
		}
		let live = true;
		import("./article-load-DnXnJeGk.mjs").then((mod) => mod.loadProgrammingView(lang, "python", privacy)).then((next) => {
			if (live && next) setView({
				title: next.title,
				sections: next.sections
			});
		});
		return () => {
			live = false;
		};
	}, [
		lang,
		bakedLang,
		privacy,
		title,
		sections
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		slug: "python",
		title: view.title,
		sections: view.sections
	});
}
function LibraryTopicPage({ section, topic, rows = [], article = null }) {
	const { t, lang } = useI18n();
	const [shown, setShown] = (0, import_react.useState)(article);
	(0, import_react.useEffect)(() => {
		if (section !== "programming" || topic.slug === "python") return;
		if (!article || lang === "az") {
			setShown(article);
			return;
		}
		let live = true;
		import("./article-load-DnXnJeGk.mjs").then((mod) => mod.loadProgrammingView(lang, topic.slug, rows)).then((view) => {
			if (live && view) setShown(view);
		});
		return () => {
			live = false;
		};
	}, [
		section,
		topic.slug,
		lang,
		rows,
		article
	]);
	if (section === "programming" && topic.slug !== "python" && shown) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgrammingArticle, {
		slug: topic.slug,
		title: shown.title,
		sections: shown.sections
	});
	const group = section === "resources" ? "resurs" : section === "guides" ? "guide" : null;
	const saved = group ? savedLib(group, topic.slug, lang, rows) : null;
	const topicCopy = section === "resources" ? findResourceTopic(topic.slug) : null;
	const articles = topicCopy ? articlesForTopic(topic.slug) : [];
	const heading = saved?.title || t(topic.label);
	const paragraphs = saved ? libParagraphs(saved.body) : topicCopy ? [topicCopy.intro[lang]] : section === "guides" && GUIDE_INTRO[topic.slug] ? [GUIDE_INTRO[topic.slug][lang]] : [];
	const moreLabel = {
		az: "Yazılar",
		en: "Articles",
		tr: "Yazılar",
		ar: "مقالات",
		ru: "Статьи"
	}[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: localeHref(lang, `/${section}`),
					children: t(LIBRARY[section].title)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: heading }),
			paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph)),
			articles.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: moreLabel }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "lib-list",
				children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: localeHref(lang, `/resources/${topic.slug}/${article.slug}`),
					children: [article.title[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "rtl-flip size-4" })]
				}) }, article.slug))
			})] }) : null
		]
	});
}
//#endregion
export { PythonArticle as a, ProgrammingArticle as i, LibraryIndex as n, LibraryTopicPage as r, CodeSamplePage as t };
