import { g as Outlet, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { Pt as Route$174 } from "./router-Da_pLWIk.mjs";
import { t as VerbHub } from "./arabic-verbs-COVlr8gf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ereb-dili.feil-DIIjUTQY.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const here = useRouterState({ select: (s) => s.location.pathname }).replace(/\/$/, "");
	const { verbs } = Route$174.useLoaderData();
	if (here !== "/ereb-dili/feil") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerbHub, { verbs });
}
//#endregion
export { Page as component };
