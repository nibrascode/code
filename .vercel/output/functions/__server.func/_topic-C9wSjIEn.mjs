import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { jt as Route$171 } from "./_ssr/router-Da_pLWIk.mjs";
import { r as LibraryTopicPage } from "./_ssr/library-page-C46BmQQi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_topic-C9wSjIEn.js
var import_jsx_runtime = require_jsx_runtime();
function TopicRoute() {
	const { topic, privacy } = Route$171.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryTopicPage, {
		section: "guides",
		topic,
		rows: privacy
	});
}
//#endregion
export { TopicRoute as component };
