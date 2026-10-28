import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as isToolId } from "./i18n-context-BAcGBjAs.mjs";
import { ar as GuideSection, z as Route$40 } from "./router-Da_pLWIk.mjs";
import { n as PdfPage } from "./pdf-page-BVph0ujS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/en.pdf_._tool-IBIVOthV.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function Page() {
	const { tool } = Route$40.useParams();
	const { guide } = Route$40.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfPage, { tool: isToolId(tool) ? tool : null }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-guide-wrap",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideSection, {
			guide,
			lang: "en"
		})
	})] });
};
//#endregion
export { SplitComponent as component };
