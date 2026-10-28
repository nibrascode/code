import { t as FAQ } from "./faq-CS6D-sSC.mjs";
import { g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as FaqView } from "./faq-page-BhSWnOss.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en.faq-BbH4I9Mp.js
var import_jsx_runtime = require_jsx_runtime();
function FaqRoute() {
	if (useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "") !== "/en/faq") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqView, { page: FAQ.en });
}
//#endregion
export { FaqRoute as component };
