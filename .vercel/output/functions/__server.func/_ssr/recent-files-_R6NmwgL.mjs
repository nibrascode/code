import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./i18n-context-BAcGBjAs.mjs";
import { ir as Clock, y as Trash2 } from "../_libs/lucide-react.mjs";
import { $n as RECENT_EVENT, nr as listRecent, rr as removeRecent, tr as getRecent } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/recent-files-_R6NmwgL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var T = {
	az: {
		title: "Son fayllarım",
		hint: "Hesabsız, yalnız bu brauzerdə saxlanır. Yenidən yükləmədən açın.",
		open: "Aç",
		del: "Sil",
		clear: "Hamısını sil"
	},
	en: {
		title: "My recent files",
		hint: "No account, kept only in this browser. Open again without re-uploading.",
		open: "Open",
		del: "Delete",
		clear: "Clear all"
	},
	tr: {
		title: "Son dosyalarım",
		hint: "Hesapsız, yalnızca bu tarayıcıda saklanır. Yeniden yüklemeden açın.",
		open: "Aç",
		del: "Sil",
		clear: "Tümünü sil"
	},
	ar: {
		title: "ملفاتي الأخيرة",
		hint: "بلا حساب، تُحفظ في هذا المتصفح فقط. افتحها دون رفع من جديد.",
		open: "فتح",
		del: "حذف",
		clear: "حذف الكل"
	},
	ru: {
		title: "Мои недавние файлы",
		hint: "Без аккаунта, хранятся только в этом браузере. Открывайте без повторной загрузки.",
		open: "Открыть",
		del: "Удалить",
		clear: "Очистить"
	}
};
var kb = (n) => n < 1048576 ? `${Math.max(1, Math.round(n / 1024))} KB` : `${(n / 1048576).toFixed(1)} MB`;
/** Lists recent files; `accept` filters by MIME prefix or extension (e.g. "application/pdf,.pdf"). */
function RecentFiles({ accept, onPick, limit = 6 }) {
	const { lang } = useI18n();
	const t = T[lang] ?? T.en;
	const [list, setList] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const load = () => void listRecent().then(setList);
		load();
		window.addEventListener(RECENT_EVENT, load);
		return () => window.removeEventListener(RECENT_EVENT, load);
	}, []);
	const rules = (accept ?? "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
	const ok = (m) => !rules.length || rules.some((r) => r.startsWith(".") ? m.name.toLowerCase().endsWith(r) : r.endsWith("/*") ? m.type.startsWith(r.slice(0, -1)) : m.type === r);
	const shown = list.filter(ok).slice(0, limit);
	if (!shown.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "my-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3",
		"data-testid": "recent-files",
		"data-nosnippet": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center gap-2 text-sm font-semibold",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }),
					t.title,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ms-auto text-xs font-normal text-muted hover:text-fg",
						onClick: () => void removeRecent(),
						children: t.clear
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs text-muted",
				children: t.hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: shown.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "min-w-0 flex-1 truncate rounded-lg px-2 py-1 text-start hover:bg-white/10",
						title: m.name,
						onClick: async () => {
							const f = await getRecent(m.id);
							if (f) onPick(f);
						},
						"data-testid": "recent-open",
						children: [
							m.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted",
								children: [
									"· ",
									kb(m.size),
									" · ",
									new Date(m.at).toLocaleDateString(lang)
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": t.del,
						className: "rounded p-1 text-muted hover:text-red-300",
						onClick: () => void removeRecent(m.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
					})]
				}, m.id))
			})
		]
	});
}
//#endregion
export { RecentFiles as t };
