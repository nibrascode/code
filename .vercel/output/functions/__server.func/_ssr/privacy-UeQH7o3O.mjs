import { b as require_jsx_runtime, d as useRouterState, m as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as useI18n } from "./i18n-context-DGwClzr6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-UeQH7o3O.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	const { t } = useI18n();
	if (useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "") !== "/privacy") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "why-page privacy-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t("privacy_btn") })
	});
}
//#endregion
export { PrivacyPage as component };
