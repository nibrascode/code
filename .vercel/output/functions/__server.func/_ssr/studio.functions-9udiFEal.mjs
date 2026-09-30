import { c as fetchPrivacyAll, g as studioReady, i as STUDIO_URL, n as STUDIO_KEY, u as fetchStudioApps } from "./studio-Bkdci49t.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/studio.functions-9udiFEal.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var loadStudioBundle_createServerFn_handler = createServerRpc({
	id: "519616068c9ea61d7d898c414e7170fbaae397de6c1a2569ed0660f883997ffd",
	name: "loadStudioBundle",
	filename: "src/lib/studio.functions.ts"
}, (opts) => loadStudioBundle.__executeServer(opts));
var loadStudioBundle = createServerFn({ method: "GET" }).handler(loadStudioBundle_createServerFn_handler, async () => {
	if (!await studioReady()) return {
		ready: false,
		apps: [],
		privacy: []
	};
	const [apps, privacy] = await Promise.all([fetchStudioApps(), fetchPrivacyAll()]);
	return {
		ready: true,
		apps,
		privacy
	};
});
var recordHit_createServerFn_handler = createServerRpc({
	id: "32767ffa08db701344b383dca8bcfbbfe190c3f4a456643a7499e4f81d98c88c",
	name: "recordHit",
	filename: "src/lib/studio.functions.ts"
}, (opts) => recordHit.__executeServer(opts));
var recordHit = createServerFn({ method: "POST" }).validator((input) => {
	return {
		kind: input.kind === "download" ? "download" : "view",
		slug: typeof input.slug === "string" ? input.slug.slice(0, 64) : ""
	};
}).handler(recordHit_createServerFn_handler, async ({ data }) => {
	try {
		return { ok: (await fetch(`${STUDIO_URL}/rest/v1/rpc/studio_hit`, {
			method: "POST",
			headers: {
				apikey: STUDIO_KEY,
				Authorization: `Bearer ${STUDIO_KEY}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				kind: data.kind,
				slug: data.slug
			})
		})).ok };
	} catch {
		return { ok: false };
	}
});
//#endregion
export { loadStudioBundle_createServerFn_handler, recordHit_createServerFn_handler };
