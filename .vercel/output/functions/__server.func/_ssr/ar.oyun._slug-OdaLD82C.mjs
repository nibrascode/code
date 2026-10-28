import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { ar as GuideSection, et as Route$56 } from "./router-Da_pLWIk.mjs";
import { t as GameScreen } from "./games-page-C5eHO9Bl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ar.oyun._slug-OdaLD82C.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { slug, guide } = Route$56.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameScreen, { slug }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-guide-wrap",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideSection, {
			guide,
			lang: "ar",
			game: true
		})
	})] });
}
//#endregion
export { Page as component };
