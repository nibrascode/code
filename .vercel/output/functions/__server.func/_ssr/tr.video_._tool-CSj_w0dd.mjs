import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _n as isVideoTool, gn as VideoToolPage, r as Route$1 } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tr.video_._tool-CSj_w0dd.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function Page() {
	const { tool } = Route$1.useParams();
	return isVideoTool(tool) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoToolPage, { tool }) : null;
};
//#endregion
export { SplitComponent as component };
