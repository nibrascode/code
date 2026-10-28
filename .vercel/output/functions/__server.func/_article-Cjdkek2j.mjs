import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { x as useI18n } from "./_ssr/i18n-context-BAcGBjAs.mjs";
import { ar as GuideSection, j as Route$31 } from "./_ssr/router-Da_pLWIk.mjs";
import { t as ResourceArticleView } from "./_ssr/resurs-page-DKeBowa-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_article-Cjdkek2j.js
var import_jsx_runtime = require_jsx_runtime();
function ArticleRoute() {
	const { article, guides } = Route$31.useLoaderData();
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceArticleView, {
		article,
		lang
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "page-guide-wrap",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuideSection, {
			guide: guides?.[lang],
			lang
		})
	})] });
}
//#endregion
export { ArticleRoute as component };
