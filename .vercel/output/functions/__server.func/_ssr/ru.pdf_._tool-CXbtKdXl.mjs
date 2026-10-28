import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { g as isToolId } from "./i18n-context-BAcGBjAs.mjs";
import { C as Route$22, ar as GuideSection } from "./router-Da_pLWIk.mjs";
import { n as PdfPage } from "./pdf-page-BVph0ujS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ru.pdf_._tool-CXbtKdXl.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function Page() {
	const { tool } = Route$22.useParams();
	const { guide } = Route$22.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfPage, { tool: isToolId(tool) ? tool : null }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-guide-wrap",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideSection, {
			guide,
			lang: "ru"
		})
	})] });
};
//#endregion
export { SplitComponent as component };
