import { o as __toESM } from "../_runtime.mjs";
import { i as paketProblems, t as PAKET } from "./paket-Wy15rr00.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as ShareReport } from "./share-report-BBpN8-PA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/paket-tool-DFqDkT_0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Rich({ text }) {
	const parts = text.split(/`([^`]+)`/g);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, index) => index % 2 === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: part }, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index)) });
}
function PaketTool({ lang }) {
	const [value, setValue] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const q = new URLSearchParams(location.search).get("id");
		if (q) setValue(q.slice(0, 255));
		document.body.classList.add("nx-print-report");
		return () => document.body.classList.remove("nx-print-report");
	}, []);
	const problems = value.trim() ? paketProblems(value, lang) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		lang,
		dir: lang === "ar" ? "rtl" : "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), "Nibras Code"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: PAKET.heading[lang] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "why-lead",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rich, { text: PAKET.lead[lang] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "paket-form",
				onSubmit: (event) => event.preventDefault(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value,
						spellCheck: false,
						autoCapitalize: "none",
						placeholder: PAKET.placeholder[lang],
						"aria-label": PAKET.heading[lang],
						onChange: (event) => setValue(event.target.value)
					}),
					value.trim() ? problems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "paket-ok",
						children: PAKET.ok[lang]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "faq-points paket-bad",
						children: problems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					}) : null,
					value.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "paket-print-id",
						dir: "ltr",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: value.trim() })
					}) : null
				]
			}),
			value.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareReport, {
				lang,
				params: { id: value.trim() },
				className: "mt-4"
			}) : null
		]
	});
}
//#endregion
export { PaketTool as t };
