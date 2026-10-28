import { g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as CompareIndex } from "./learn-pages-DXykNAXk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en.muqayise-DKB07BFM.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	if (useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "") !== "/en/muqayise") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareIndex, { lang: "en" });
}
//#endregion
export { Page as component };
