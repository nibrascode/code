import { g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { cn as HomeView, rn as Route$304 } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en-I8cFDST8.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { apps } = Route$304.useLoaderData();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	if ((pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname) !== "/en") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, { apps });
}
//#endregion
export { Page as component };
