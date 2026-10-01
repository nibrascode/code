import { _ as studioReady, d as fetchStudioApps, i as STUDIO_URL, l as fetchPrivacyAll, n as STUDIO_KEY } from "./studio-BiKknOvt.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { readFileSync } from "node:fs";
import { join } from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/studio.functions-B_gkBizn.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function env(key) {
	return process.env[key]?.trim() || void 0;
}
function githubToken() {
	const current = env("GITHUB_TOKEN");
	if (current) return current;
	try {
		return readFileSync(join(process.cwd(), ".env"), "utf8").split("\n").find((item) => item.startsWith("GITHUB_TOKEN="))?.slice(13).trim() || void 0;
	} catch {
		return;
	}
}
var GITHUB_OWNER = "nibrascode";
var GITHUB_REPO = "code";
var GITHUB_BRANCH = "main";
var GITHUB_PATH = "site-content/studio.json";
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
var syncStudioToGithub_createServerFn_handler = createServerRpc({
	id: "eeb2b86ddeb133b0894dbb47463d7981736804ceb2649523d5ecd8d5f2aed4a0",
	name: "syncStudioToGithub",
	filename: "src/lib/studio.functions.ts"
}, (opts) => syncStudioToGithub.__executeServer(opts));
var syncStudioToGithub = createServerFn({ method: "POST" }).validator((input) => {
	const accessToken = input.accessToken?.trim() ?? "";
	if (accessToken.length < 20 || accessToken.length > 4e3) throw new Error("Sessiya yanlışdır.");
	const privacy = input.privacy?.slug ? {
		slug: String(input.privacy.slug).slice(0, 140),
		lang: String(input.privacy.lang || "az").slice(0, 8),
		title: String(input.privacy.title || "").slice(0, 400),
		updated_label: String(input.privacy.updated_label || "").slice(0, 80),
		body: String(input.privacy.body || "").slice(0, 2e5)
	} : null;
	const app = input.app?.slug ? {
		...input.app,
		slug: String(input.app.slug).slice(0, 80),
		name: String(input.app.name || "").slice(0, 120)
	} : null;
	return {
		accessToken,
		privacy,
		dropSlug: input.dropSlug ? String(input.dropSlug).slice(0, 140) : "",
		app,
		dropApp: input.dropApp ? String(input.dropApp).slice(0, 80) : ""
	};
}).handler(syncStudioToGithub_createServerFn_handler, async ({ data }) => {
	const token = githubToken();
	if (!token) return {
		ok: false,
		reason: "Bu serverdə GITHUB_TOKEN yoxdur"
	};
	const userResponse = await fetch(`${STUDIO_URL}/auth/v1/user`, { headers: {
		apikey: STUDIO_KEY,
		Authorization: `Bearer ${data.accessToken}`
	} });
	if (!userResponse.ok) return {
		ok: false,
		reason: "Sessiya bitib"
	};
	if ((await userResponse.json()).email?.toLowerCase() !== "nibrascode@gmail.com") return {
		ok: false,
		reason: "İcazə yoxdur"
	};
	const [apps, privacy] = await Promise.all([fetchStudioApps(), fetchPrivacyAll()]);
	let nextPrivacy = privacy;
	if (data.dropSlug) nextPrivacy = nextPrivacy.filter((row) => row.slug !== data.dropSlug);
	if (data.privacy) {
		nextPrivacy = nextPrivacy.filter((row) => !(row.slug === data.privacy?.slug && row.lang === data.privacy.lang));
		nextPrivacy.push(data.privacy);
	}
	let nextApps = apps;
	if (data.dropApp) nextApps = nextApps.filter((row) => row.slug !== data.dropApp);
	if (data.app) {
		nextApps = nextApps.filter((row) => row.slug !== data.app?.slug);
		nextApps.push(data.app);
	}
	return commitStudioFile(token, JSON.stringify({
		savedAt: (/* @__PURE__ */ new Date()).toISOString(),
		apps: nextApps,
		privacy: nextPrivacy
	}, null, 2));
});
async function commitStudioFile(token, json) {
	const headers = {
		Authorization: `Bearer ${token}`,
		Accept: "application/vnd.github+json",
		"Content-Type": "application/json",
		"User-Agent": "nibrascode-site",
		"X-GitHub-Api-Version": "2022-11-28"
	};
	const current = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_PATH}?ref=${GITHUB_BRANCH}`, { headers });
	let sha = "";
	if (current.ok) sha = (await current.json()).sha ?? "";
	else if (current.status !== 404) return {
		ok: false,
		reason: `GitHub oxunmadı (${current.status})`
	};
	const response = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_PATH}`, {
		method: "PUT",
		headers,
		body: JSON.stringify({
			message: "Admin paneldən məzmun yeniləndi",
			content: Buffer.from(json, "utf8").toString("base64"),
			branch: GITHUB_BRANCH,
			...sha ? { sha } : {}
		})
	});
	if (!response.ok) return {
		ok: false,
		reason: `GitHub yazılmadı (${response.status})`
	};
	return {
		ok: true,
		url: (await response.json()).commit?.html_url ?? ""
	};
}
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
export { loadStudioBundle_createServerFn_handler, recordHit_createServerFn_handler, syncStudioToGithub_createServerFn_handler };
