import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { Cn as ui, Sn as save, bn as KitShell, xn as kb } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/zip-DDRXlNGV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var T = {
	az: {
		pack: "ZIP-ə yığ",
		open: "ZIP-i aç",
		pickFiles: "Faylları seçin",
		pickZip: "ZIP faylı seçin",
		drop: "və ya bura buraxın",
		name: "Arxiv adı",
		level: "Sıxma",
		fast: "Sürətli",
		best: "Ən kiçik",
		make: "ZIP hazırla",
		download: "Yüklə",
		all: "Hamısını yüklə",
		bad: "Bu ZIP açılmadı. Parollu ZIP, RAR və 7z dəstəklənmir.",
		files: "fayl",
		total: "Cəmi",
		remove: "Sil"
	},
	en: {
		pack: "Make a ZIP",
		open: "Open a ZIP",
		pickFiles: "Choose files",
		pickZip: "Choose a ZIP file",
		drop: "or drop here",
		name: "Archive name",
		level: "Compression",
		fast: "Fast",
		best: "Smallest",
		make: "Make ZIP",
		download: "Download",
		all: "Download all",
		bad: "Could not open this ZIP. Password ZIP, RAR and 7z are not supported.",
		files: "files",
		total: "Total",
		remove: "Remove"
	},
	tr: {
		pack: "ZIP'e topla",
		open: "ZIP aç",
		pickFiles: "Dosyaları seçin",
		pickZip: "ZIP dosyası seçin",
		drop: "veya buraya bırakın",
		name: "Arşiv adı",
		level: "Sıkıştırma",
		fast: "Hızlı",
		best: "En küçük",
		make: "ZIP hazırla",
		download: "İndir",
		all: "Hepsini indir",
		bad: "ZIP açılamadı. Parolalı ZIP, RAR ve 7z desteklenmez.",
		files: "dosya",
		total: "Toplam",
		remove: "Kaldır"
	},
	ar: {
		pack: "إنشاء ZIP",
		open: "فتح ZIP",
		pickFiles: "اختر الملفات",
		pickZip: "اختر ملف ZIP",
		drop: "أو أفلته هنا",
		name: "اسم الأرشيف",
		level: "الضغط",
		fast: "سريع",
		best: "الأصغر",
		make: "إعداد ZIP",
		download: "تنزيل",
		all: "تنزيل الكل",
		bad: "تعذر فتح ZIP. لا يُدعم ZIP بكلمة مرور ولا RAR و7z.",
		files: "ملفات",
		total: "المجموع",
		remove: "حذف"
	},
	ru: {
		pack: "Сжать в ZIP",
		open: "Открыть ZIP",
		pickFiles: "Выберите файлы",
		pickZip: "Выберите ZIP",
		drop: "или перетащите сюда",
		name: "Имя архива",
		level: "Сжатие",
		fast: "Быстро",
		best: "Меньше всего",
		make: "Собрать ZIP",
		download: "Скачать",
		all: "Скачать все",
		bad: "Не удалось открыть ZIP. ZIP с паролем, RAR и 7z не поддерживаются.",
		files: "файлов",
		total: "Всего",
		remove: "Убрать"
	}
};
function Drop({ label, hint, multiple, accept, onFiles }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: ui.drop,
		onDragOver: (e) => e.preventDefault(),
		onDrop: (e) => {
			e.preventDefault();
			onFiles([...e.dataTransfer.files]);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: hint
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "sr-only",
			type: "file",
			multiple,
			accept,
			onChange: (e) => {
				onFiles([...e.target.files ?? []]);
				e.target.value = "";
			},
			"data-testid": multiple ? "zip-files" : "zip-open"
		})]
	});
}
function ZipPage() {
	const { lang } = useI18n();
	const t = T[lang] ?? T.en;
	const [mode, setMode] = (0, import_react.useState)("pack");
	const [files, setFiles] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("archive");
	const [best, setBest] = (0, import_react.useState)(true);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [entries, setEntries] = (0, import_react.useState)([]);
	const [err, setErr] = (0, import_react.useState)("");
	const make = async () => {
		setBusy(true);
		try {
			const { zip } = await import("../_libs/@cantoo/pdf-lib+[...].mjs").then((n) => n.r);
			const map = {};
			for (const f of files) {
				let n = f.webkitRelativePath || f.name;
				let k = 1;
				while (map[n]) n = n.replace(/(\.[^.]*)?$/, (m) => `-${k++}${m}`);
				const pre = /\.(zip|jpe?g|png|webp|gif|mp4|mp3|m4a|docx|xlsx|pptx|pdf|7z|rar|gz)$/i.test(f.name);
				map[n] = [new Uint8Array(await f.arrayBuffer()), { level: pre ? 0 : best ? 9 : 6 }];
			}
			const out = await new Promise((res, rej) => zip(map, (e, d) => e ? rej(e) : res(d)));
			save(`${(name.trim() || "archive").replace(/\.zip$/i, "")}.zip`, new Blob([out], { type: "application/zip" }));
		} finally {
			setBusy(false);
		}
	};
	const open = async (f) => {
		if (!f[0]) return;
		setErr("");
		setEntries([]);
		setBusy(true);
		try {
			const { unzip } = await import("../_libs/@cantoo/pdf-lib+[...].mjs").then((n) => n.r);
			const buf = new Uint8Array(await f[0].arrayBuffer());
			const out = await new Promise((res, rej) => unzip(buf, (e, d) => e ? rej(e) : res(d)));
			setEntries(Object.entries(out).filter(([n]) => !n.endsWith("/") && !n.startsWith("__MACOSX/")).map(([n, data]) => ({
				name: n,
				data
			})));
		} catch {
			setErr(t.bad);
		} finally {
			setBusy(false);
		}
	};
	const total = files.reduce((a, f) => a + f.size, 0);
	const saveAll = async () => {
		for (const e of entries) {
			save(e.name.split("/").pop() || e.name, new Blob([e.data]));
			await new Promise((r) => setTimeout(r, 350));
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(KitShell, {
		path: "/zip",
		lang,
		next: [
			"/pdf/merge",
			"/pdf/compress",
			"/image/convert",
			"/image"
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex gap-2",
			children: ["pack", "open"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: `${ui.btn} ${mode === m ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`,
				onClick: () => setMode(m),
				"data-mode": m,
				children: t[m]
			}, m))
		}), mode === "pack" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drop, {
			label: t.pickFiles,
			hint: t.drop,
			multiple: true,
			onFiles: (f) => setFiles((c) => [...c, ...f])
		}), files.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-64 space-y-1 overflow-auto text-sm",
					children: files.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 flex-1 truncate",
								dir: "ltr",
								children: f.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted",
								children: kb(f.size)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-muted hover:text-fg",
								"aria-label": t.remove,
								onClick: () => setFiles((c) => c.filter((_, j) => j !== i)),
								children: "×"
							})
						]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						files.length,
						" ",
						t.files,
						" · ",
						t.total,
						": ",
						kb(total)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1 block text-muted",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: ui.field,
						value: name,
						onChange: (e) => setName(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-24",
							children: t.level
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `${ui.btn} ${!best ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`,
							onClick: () => setBest(false),
							children: t.fast
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `${ui.btn} ${best ? "border-[#2f6bff] bg-[#2f6bff]/20" : ""}`,
							onClick: () => setBest(true),
							children: t.best
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: ui.primary,
					disabled: busy,
					onClick: make,
					"data-testid": "zip-make",
					children: busy ? "…" : t.make
				})
			]
		}) : null] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drop, {
				label: t.pickZip,
				hint: t.drop,
				accept: ".zip,application/zip",
				onFiles: open
			}),
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-red-400",
				children: err
			}) : null,
			busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "…"
			}) : null,
			entries.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							entries.length,
							" ",
							t.files,
							" · ",
							t.total,
							": ",
							kb(entries.reduce((a, e) => a + e.data.byteLength, 0))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "max-h-80 space-y-1 overflow-auto text-sm",
						"data-testid": "zip-list",
						children: entries.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 flex-1 truncate",
									dir: "ltr",
									children: e.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: kb(e.data.byteLength)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: ui.btn,
									onClick: () => save(e.name.split("/").pop() || e.name, new Blob([e.data])),
									children: t.download
								})
							]
						}, e.name))
					}),
					entries.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: ui.primary,
						onClick: saveAll,
						children: t.all
					}) : null
				]
			}) : null
		] })]
	});
}
//#endregion
export { ZipPage as t };
