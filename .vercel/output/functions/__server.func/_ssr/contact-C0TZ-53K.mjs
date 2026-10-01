import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./i18n-context-DImZvOyv.mjs";
import { c as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C0TZ-53K.js
var import_jsx_runtime = require_jsx_runtime();
var MAIL = "NIBRASCODE@GMAIL.COM";
function ContactPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "why-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "why-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "eyebrow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), t("nx_nav_contact")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t("contact_title") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "why-lead",
				children: t("contact_note")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "contact-mail",
				href: `mailto:${MAIL}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), MAIL]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
