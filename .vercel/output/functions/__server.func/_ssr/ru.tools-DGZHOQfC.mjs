import { g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as ToolsPage } from "./tools-page-DdciRs3Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.tools-DGZHOQfC.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	if (useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "") !== "/ru/tools") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsPage, { lang: "ru" });
}
//#endregion
export { Page as component };
