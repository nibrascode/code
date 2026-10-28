import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _n as isVideoTool, gn as VideoToolPage, lt as Route$66 } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/video_._tool-Q0juZrY2.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function Page() {
	const { tool } = Route$66.useParams();
	return isVideoTool(tool) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoToolPage, { tool }) : null;
};
//#endregion
export { SplitComponent as component };
