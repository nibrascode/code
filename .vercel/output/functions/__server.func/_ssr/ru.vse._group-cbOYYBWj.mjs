import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as Route$16, wn as GroupPage } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.vse._group-cbOYYBWj.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function Page() {
	const { group } = Route$16.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupPage, {
		lang: "ru",
		group
	});
};
//#endregion
export { SplitComponent as component };
