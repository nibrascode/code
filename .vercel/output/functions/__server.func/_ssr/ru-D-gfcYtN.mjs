import { g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { Yt as Route$282, cn as HomeView } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru-D-gfcYtN.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { apps } = Route$282.useLoaderData();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	if ((pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname) !== "/ru") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, { apps });
}
//#endregion
export { Page as component };
