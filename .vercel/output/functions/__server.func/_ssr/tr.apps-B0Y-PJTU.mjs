import { g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { ut as Route$107, zt as AppsIndex } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tr.apps-B0Y-PJTU.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	if (useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "") !== "/tr/apps") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppsIndex, { apps: Route$107.useLoaderData().apps });
}
//#endregion
export { Page as component };
