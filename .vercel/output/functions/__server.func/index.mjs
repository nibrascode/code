globalThis.__nitro_main__ = import.meta.url;
import { i as toEventHandler, n as HTTPError, o as NodeResponse, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region scripts/install-page.html?raw
var install_page_default = "<!DOCTYPE html>\n<html lang=\"en\" class=\"device-desktop\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, viewport-fit=cover\"\n    />\n    <meta name=\"color-scheme\" content=\"dark\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n    <meta name=\"apple-mobile-web-app-title\" content=\"{{APP_NAME}}\" />\n    <title>Add {{APP_NAME}} to your Home Screen</title>\n    <link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\" />\n    <link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\" />\n    <link rel=\"stylesheet\" href=\"/__grok/install/styles.css\" />\n    <script>\n      (function () {\n        var ua = navigator.userAgent || \"\";\n        var touch = navigator.maxTouchPoints || 0;\n        var isiPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && touch > 1);\n        var isiPhone = /iPhone|iPod/.test(ua);\n        var isIOS = isiPhone || isiPad;\n        var isAndroid = /Android/i.test(ua);\n        var isAndroidPhone = isAndroid && /Mobile/i.test(ua);\n        var isAndroidTablet = isAndroid && !/Mobile/i.test(ua);\n        var minSide = Math.min(screen.width || 0, screen.height || 0);\n        var maxSide = Math.max(screen.width || 0, screen.height || 0);\n\n        var type = \"desktop\";\n        if (isiPhone) type = \"phone\";\n        else if (isiPad || isAndroidTablet) type = \"tablet\";\n        else if (isAndroidPhone) type = \"phone\";\n        else if (touch > 0 && minSide > 0 && minSide <= 500) type = \"phone\";\n        else if (touch > 0 && minSide > 500 && maxSide <= 1400) type = \"tablet\";\n\n        var iosMajor = null;\n        var osToken = null;\n        var safariToken = null;\n        var iphoneOs = ua.match(/iPhone OS (\\d+)[._]/);\n        var ipadOs = ua.match(/CPU OS (\\d+)[._](\\d+) like Mac OS X/);\n        var safariVer = ua.match(/Version\\/(\\d+)[._]/);\n        if (iphoneOs) osToken = parseInt(iphoneOs[1], 10);\n        else if (ipadOs) osToken = parseInt(ipadOs[1], 10);\n        if (isIOS && safariVer) safariToken = parseInt(safariVer[1], 10);\n        if (osToken != null || safariToken != null) {\n          iosMajor = Math.max(osToken || 0, safariToken || 0);\n        }\n\n        var root = document.documentElement;\n        var classes = [\"device-\" + type];\n        if (iosMajor != null) {\n          root.dataset.ios = String(iosMajor);\n          classes.push(iosMajor >= 27 ? \"ios-27-plus\" : \"ios-below-27\");\n        }\n        root.className = classes.join(\" \");\n      })();\n    <\/script>\n  </head>\n  <body>\n    <div class=\"page\">\n      <header class=\"powered\" aria-label=\"Powered by Grok\">\n        <span class=\"powered-by\">Powered by</span>\n        <span class=\"powered-brand\">\n          <img\n            class=\"grok-logo\"\n            src=\"/__grok/install/assets/homescreen/logo-grok.svg\"\n            width=\"14\"\n            height=\"14\"\n            alt=\"\"\n          />\n          <span class=\"powered-grok\">Grok</span>\n        </span>\n      </header>\n\n      <main class=\"content\">\n        <div class=\"ob\" aria-hidden=\"true\">\n          <img\n            class=\"ob-img ob-phone\"\n            src=\"/__grok/install/assets/homescreen/ob-phone.png\"\n            width=\"338\"\n            height=\"294\"\n            alt=\"\"\n          />\n          <img\n            class=\"ob-img ob-ipad\"\n            src=\"/__grok/install/assets/homescreen/ob-ipad.png\"\n            width=\"634\"\n            height=\"294\"\n            alt=\"\"\n          />\n        </div>\n\n        <section class=\"copy\">\n          <h1>Add {{APP_NAME}} to your&nbsp;Home&nbsp;Screen</h1>\n\n          <div class=\"steps\">\n            <p class=\"step step-tap step-ios27\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-puzzle.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar, then</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar, then</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n            </p>\n\n            <p class=\"step step-tap step-ios-legacy\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar</span>\n            </p>\n\n            <p class=\"step step-select\">\n              <span class=\"muted\">Select</span>\n              <span class=\"add-label\">\n                <img\n                  class=\"plus-icon\"\n                  src=\"/__grok/install/assets/homescreen/plus.svg\"\n                  width=\"16\"\n                  height=\"16\"\n                  alt=\"\"\n                />\n                <span class=\"add-text\">Add to Home Screen</span>\n              </span>\n            </p>\n          </div>\n        </section>\n      </main>\n\n      <main class=\"content content-desktop\">\n        <section class=\"copy\">\n          <h1>Open this link on your iPhone&nbsp;or&nbsp;iPad</h1>\n          <p class=\"desktop-note\">\n            This page shows how to add {{APP_NAME}} to an iOS Home Screen.\n          </p>\n          <a class=\"desktop-open\" href=\"{{APP_URL}}\">Open {{APP_NAME}}</a>\n        </section>\n      </main>\n    </div>\n  </body>\n</html>\n";
//#endregion
//#region \0virtual:grok-og-identity
var grokOgIdentity = { "site": {
	"title": "Nibras Code",
	"card": "custom",
	"description": "Sadə, faydalı və istifadəsi rahat mobil tətbiqlər",
	"image": "/og.jpg"
} };
//#endregion
//#region scripts/grok-pwa-shared.mjs
/**
* Single source of truth for platform head chrome (PWA, extensions.js, OG),
* shared by the Vite plugin and Nitro middleware. Plain ESM so `node --test`
* and the Nitro bundler can both consume it.
*/
var DEFAULT_APP_NAME = "Grok App";
var OG_SITE_REL_PATH = "src/lib/og/site.json";
var SHARE_META_KEYS = /* @__PURE__ */ new Set([
	"og:title",
	"og:description",
	"og:image",
	"og:image:width",
	"og:image:height",
	"og:type",
	"og:url",
	"og:site_name",
	"twitter:card",
	"twitter:title",
	"twitter:image",
	"twitter:description",
	"x:game:image",
	"x:game:image:width",
	"x:game:image:height"
]);
function escapeHtml(value) {
	return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
/** Inverse of escapeHtml. Decode &amp; last so a single pass undoes one encode. */
function unescapeHtml(value) {
	return String(value).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").replaceAll("&amp;", "&");
}
/** 6-digit hex for the og.grok.me placeholder, or "" if site.color is missing/invalid. */
function placeholderCardColor(site = {}) {
	const raw = String(site.color ?? "").trim();
	const hex = raw.startsWith("#") ? raw.slice(1) : raw;
	return /^[0-9a-fA-F]{6}$/.test(hex) ? hex : "";
}
/**
* "wild-race.grok.me" → "Wild Race". Only published app hosts encode the
* display name in the first label. Preview / guest hosts are image origins
* only — slugifying them produced internal names like "Hds Abc 3000 Xy".
*/
function appNameFromHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host.endsWith(".grok.me")) return DEFAULT_APP_NAME;
	const slug = host.split(".")[0] ?? "";
	if (!slug || slug === "www" || !/^[a-z0-9-]{1,63}$/.test(slug)) return DEFAULT_APP_NAME;
	return slug.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ") || "Grok App";
}
/** True for Vercel system domains. Envoy rewrites origin Host to these; they SSO-protect `/og.jpg`. */
function isVercelSystemHost(host) {
	return host === "vercel.app" || host.endsWith(".vercel.app") || host === "vercel.com" || host.endsWith(".vercel.com");
}
/** Hostname suitable for absolute og:image URLs. Preview guests (X-Forwarded-Host) are allowed. */
function publicAppHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
	if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
	if (isVercelSystemHost(host)) return "";
	return host;
}
/**
* Published apps always use `VITE_PUBLIC_HOSTNAME` (the grok.me host the
* deployer injects). Live preview has no such env, so fall back to the
* request host / X-Forwarded-Host. Never prefer request Host on a published
* app — Envoy rewrites it to `*.vercel.app`.
*/
function resolvePublicHost(hostHeader) {
	return publicAppHost(process.env?.VITE_PUBLIC_HOSTNAME) || publicAppHost(hostHeader);
}
function isInstallQuery(url) {
	const query = String(url ?? "").split("?", 2)[1] ?? "";
	const params = new URLSearchParams(query);
	const install = params.get("install");
	const platform = (params.get("platform") ?? "").toLowerCase();
	return (install === "1" || install === "true") && platform === "ios";
}
/** Paths that can carry an app document (vs assets / API / internals). */
function isDocumentPath(pathname) {
	const path = String(pathname ?? "");
	return !path.startsWith("/__grok/") && !path.startsWith("/api/") && !path.startsWith("/@") && !path.startsWith("/node_modules") && !/\.[a-z0-9]+$/i.test(path);
}
function acceptsHtml(accept) {
	const value = String(accept ?? "");
	return value === "" || value.includes("text/html") || value.includes("*/*");
}
/** The same URL without the install-tutorial params (used as the app link). */
function stripInstallParams(url) {
	const [path = "/", query = ""] = String(url ?? "/").split("?", 2);
	const params = new URLSearchParams(query);
	params.delete("install");
	params.delete("platform");
	const rest = params.toString();
	return rest ? `${path}?${rest}` : path;
}
function renderInstallPageHtml(template, { host, url } = {}) {
	return String(template).replaceAll("{{APP_NAME}}", escapeHtml(appNameFromHost(host))).replaceAll("{{APP_URL}}", escapeHtml(stripInstallParams(url)));
}
function renderWebManifest(hostHeader) {
	const name = appNameFromHost(hostHeader);
	return JSON.stringify({
		name,
		short_name: name,
		id: "/",
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [{
			src: "/__grok/icon-180.png",
			sizes: "180x180",
			type: "image/png"
		}]
	}, null, 2);
}
function grokPwaHeadTags(appName = DEFAULT_APP_NAME) {
	return [
		["manifest", "<link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\">"],
		["apple-touch-icon", "<link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\">"],
		["apple-mobile-web-app-title", `<meta name="apple-mobile-web-app-title" content="${escapeHtml(appName)}">`],
		["apple-mobile-web-app-status-bar-style", "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">"],
		["theme-color", "<meta name=\"theme-color\" content=\"#000000\">"]
	];
}
var GROK_EXTENSIONS_SCRIPT_SRC = "https://grok.com/grok-app-builder/extensions.js";
function readGrokProjectId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_PROJECT_ID : "";
	return String(fromProcess ?? "").trim();
}
function readGrokExtensionsEnabled() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_GROK_EXTENSIONS : "";
	return String(fromProcess ?? "").trim() !== "0";
}
function readXCreator() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR : "";
	return String(fromProcess ?? "").trim();
}
function readXCreatorId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR_ID : "";
	return String(fromProcess ?? "").trim();
}
function grokXCreatorHeadTags(creator = readXCreator(), creatorId = readXCreatorId()) {
	const name = String(creator ?? "").trim();
	const id = String(creatorId ?? "").trim();
	if (!name || !id) return [];
	return [`<meta property="x:creator" content="${escapeHtml(name)}">`, `<meta property="x:creator:id" content="${escapeHtml(id)}">`];
}
/** Platform "Created with Grok" banner — injected into every HTML document. */
function grokExtensionsHeadTags(projectId = readGrokProjectId()) {
	const id = escapeHtml(projectId);
	const tags = [];
	if (projectId) tags.push(`<meta name="grok-project-id" content="${id}">`);
	if (!readGrokExtensionsEnabled()) return tags;
	tags.push(`<script src="${GROK_EXTENSIONS_SCRIPT_SRC}"${projectId ? ` data-project-id="${id}"` : ""} defer><\/script>`);
	return tags;
}
function readOgSite(cwd = process.cwd()) {
	try {
		const raw = readFileSync(join(cwd, OG_SITE_REL_PATH), "utf8");
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	} catch {
		return {};
	}
}
/** Public path of an on-disk share card, or "" if neither file exists. */
function ogCardPublicPath(cwd = process.cwd()) {
	if (existsSync(join(cwd, "public/og.jpg"))) return "/og.jpg";
	if (existsSync(join(cwd, "public/og.png"))) return "/og.png";
	return "";
}
function detectCustomOgCard(cwd = process.cwd(), site = {}) {
	if (ogCardPublicPath(cwd)) return true;
	return siteHasCustomCard(site) || Boolean(String(site.image ?? "").trim());
}
/** Snapshot for Vite/Nitro to bake into the server bundle (Vercel has no workspace FS). */
function snapshotOgIdentity(cwd = process.cwd()) {
	const site = { ...readOgSite(cwd) };
	const disk = ogCardPublicPath(cwd);
	if (disk) {
		site.card = "custom";
		site.image = disk;
	} else {
		if (siteHasCustomCard(site)) delete site.card;
		if (site.image) delete site.image;
	}
	if (existsSync(join(cwd, "public/x-banner.jpg"))) site.banner = site.banner || "/x-banner.jpg";
	return { site };
}
function ogServiceUrl() {
	return (String(process.env?.VITE_OG_SERVICE_URL ?? "").trim() || "https://og.grok.me").replace(/\/+$/, "");
}
function titleFromDocument(html) {
	const match = String(html ?? "").match(/<title\b[^>]*>([^<]*)<\/title>/i);
	return match ? unescapeHtml(match[1]).trim() : "";
}
function resolveOgTitle(site = {}, appName = DEFAULT_APP_NAME, host = "", documentTitle = "") {
	const fromSite = String(site.title ?? "").trim();
	if (fromSite) return fromSite;
	const fromDoc = String(documentTitle ?? "").trim();
	if (fromDoc) return fromDoc;
	const fromHost = appNameFromHost(host);
	if (fromHost && fromHost !== "Grok App") return fromHost;
	return String(appName ?? "").trim() || "Grok App";
}
function siteHasCustomCard(site = {}) {
	return String(site.card ?? "").toLowerCase() === "custom";
}
/**
* Preview: public/og.jpg|png on disk.
* Vercel: the bake (`card=custom` / `image`) because the function cannot stat public/.
* Otherwise empty — caller emits the og.grok.me placeholder.
*/
function resolveOgCardAsset(site = {}, cwd = process.cwd()) {
	return ogCardPublicPath(cwd) || (detectCustomOgCard(cwd, site) ? String(site.image ?? "").trim() || "/og.jpg" : "");
}
/** Stamp `card=custom` when public/og.jpg or public/og.png is on disk. */
function applyCustomCardFromFs(site, cwd) {
	const disk = ogCardPublicPath(cwd);
	if (!disk) return site;
	return {
		...site,
		card: "custom",
		image: disk
	};
}
function grokOgHeadTags({ host = "", appName = DEFAULT_APP_NAME, site = {}, documentTitle = "", cwd = process.cwd(), page = {} } = {}) {
	const title = page["og:title"] || resolveOgTitle(site, appName, host, documentTitle);
	const publicHost = resolvePublicHost(host);
	const tags = [`<meta name="twitter:card" content="summary_large_image">`, `<meta property="og:title" content="${escapeHtml(title)}">`];
	const description = page["og:description"] || String(site.description ?? "").trim();
	if (description) tags.push(`<meta property="og:description" content="${escapeHtml(description)}">`);
	if (String(site.type ?? "").toLowerCase() === "x:game") tags.push(`<meta property="og:type" content="x:game">`);
	if (publicHost) {
		const asset = resolveOgCardAsset(site, cwd);
		const custom = Boolean(asset);
		let image = page["og:image"] || (custom ? `https://${publicHost}${asset.startsWith("/") ? asset : `/${asset}`}` : `${ogServiceUrl()}/v1/card.png?host=${encodeURIComponent(publicHost)}&title=${encodeURIComponent(title)}`);
		const color = !custom && !page["og:image"] ? placeholderCardColor(site) : "";
		if (color) image += `&color=${encodeURIComponent(color)}`;
		tags.push(`<meta property="og:image" content="${escapeHtml(image)}">`);
		tags.push(`<meta property="og:image:width" content="1200">`);
		tags.push(`<meta property="og:image:height" content="630">`);
		const banner = String(site.banner ?? "").trim();
		if (banner) {
			const bannerUrl = `https://${publicHost}${banner.startsWith("/") ? banner : `/${banner}`}`;
			tags.push(`<meta property="x:game:image" content="${escapeHtml(bannerUrl)}">`);
			tags.push(`<meta property="x:game:image:width" content="1200">`);
			tags.push(`<meta property="x:game:image:height" content="264">`);
		}
	}
	return tags;
}
function stripGrokExtensionsScript(html) {
	return String(html).replace(/<script\b[^>]*\bsrc\s*=\s*["'][^"']*\/grok-app-builder\/extensions\.js[^"']*["'][^>]*>\s*<\/script>/gi, "");
}
function stripShareMetaTags(html) {
	return String(html).replace(/<meta\b[^>]*>/gi, (tag) => {
		const attrs = [...tag.matchAll(/\b(?:property|name)\s*=\s*["']([^"']+)["']/gi)];
		for (const match of attrs) if (SHARE_META_KEYS.has(String(match[1]).toLowerCase())) return "";
		return tag;
	});
}
function shareAttr(tag, name) {
	const re = new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, "i");
	const match = tag.match(re);
	return match ? unescapeHtml(match[1]).trim() : "";
}
/** Page-authored share tags win over the site-wide card. */
function readPageShare(html) {
	const found = {};
	for (const tag of String(html).match(/<meta\b[^>]*>/gi) ?? []) {
		const key = (shareAttr(tag, "property") || shareAttr(tag, "name")).toLowerCase();
		const content = shareAttr(tag, "content");
		if (!key || !content || !SHARE_META_KEYS.has(key) || found[key]) continue;
		found[key] = content;
	}
	return found;
}
function insertAfterHeadOpen(html, snippet) {
	if (/<head\b[^>]*>/i.test(html)) return html.replace(/<head\b[^>]*>/i, (open) => `${open}${snippet}`);
	if (/<html\b[^>]*>/i.test(html)) return html.replace(/<html\b[^>]*>/i, (open) => `${open}<head>${snippet}</head>`);
	return `<!doctype html><html><head>${snippet}</head>${html}`;
}
function insertBeforeHeadClose(html, snippet) {
	if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${snippet}</head>`);
	return insertAfterHeadOpen(html, snippet);
}
function normalizeHeadContext(ctx = {}) {
	const cwd = ctx.cwd ?? process.cwd();
	const site = applyCustomCardFromFs(ctx.site !== void 0 ? ctx.site : snapshotOgIdentity(cwd).site, cwd);
	return {
		appName: resolveOgTitle(site, ctx.appName ?? "Grok App", ctx.host ?? ""),
		projectId: ctx.projectId ?? readGrokProjectId(),
		creator: ctx.creator ?? readXCreator(),
		creatorId: ctx.creatorId ?? readXCreatorId(),
		host: ctx.host ?? "",
		cwd,
		site
	};
}
function injectGrokPwaHead(html, ctx = {}) {
	if (typeof html !== "string") return html;
	const { site, projectId, creator, creatorId, host, cwd } = normalizeHeadContext(ctx);
	const documentTitle = titleFromDocument(html);
	const page = readPageShare(html);
	const appName = resolveOgTitle(site, ctx.appName ?? "Grok App", host, page["og:title"] || documentTitle);
	let next = stripShareMetaTags(html);
	if (!readGrokExtensionsEnabled()) next = stripGrokExtensionsScript(next);
	const missing = grokPwaHeadTags(appName).filter(([key]) => {
		if (key === "manifest") return !next.includes("href=\"/__grok/manifest.webmanifest\"");
		if (key === "apple-touch-icon") return !next.includes("href=\"/__grok/icon-180.png\"");
		return !next.includes(`name="${key}"`);
	}).map(([, tag]) => tag);
	next = insertAfterHeadOpen(next, grokOgHeadTags({
		host,
		appName,
		site,
		documentTitle,
		cwd,
		page
	}).join(""));
	if (readGrokExtensionsEnabled() && !next.includes("/grok-app-builder/extensions.js")) missing.push(...grokExtensionsHeadTags(projectId));
	else if (projectId && !next.includes("name=\"grok-project-id\"")) missing.push(`<meta name="grok-project-id" content="${escapeHtml(projectId)}">`);
	if (projectId && !next.includes("property=\"grok:app_id\"") && !next.includes("property='grok:app_id'")) missing.push(`<meta property="grok:app_id" content="${escapeHtml(projectId)}">`);
	const creatorTags = grokXCreatorHeadTags(creator, creatorId);
	if (creatorTags.length > 0) {
		if (!(next.includes("property=\"x:creator\" content=") || next.includes("property='x:creator' content="))) missing.push(creatorTags[0]);
		if (!next.includes("property=\"x:creator:id\"")) missing.push(creatorTags[1]);
	}
	if (missing.length === 0) return next;
	return insertBeforeHeadClose(next, missing.join(""));
}
function findHeadClose(buf) {
	return buf.toString("latin1").search(/<\/head>/i);
}
/**
* Streaming head injector: buffers only until `</head>` (ASCII marker; never
* appears inside a UTF-8 continuation byte), overwrites share-card metas,
* then passes later chunks through so streaming SSR keeps streaming.
*/
function createHeadInjector(ctx = {}) {
	const normalized = normalizeHeadContext(ctx);
	/** @type {Buffer[]} */
	let pending = [];
	let done = false;
	const apply = (html) => injectGrokPwaHead(html, {
		appName: normalized.appName,
		projectId: normalized.projectId,
		creator: normalized.creator,
		creatorId: normalized.creatorId,
		host: normalized.host,
		cwd: normalized.cwd,
		site: normalized.site
	});
	return {
		/** @param {Uint8Array | string} chunk @returns {Buffer[]} chunks ready to emit */
		push(chunk) {
			const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
			if (done) return [buf];
			pending.push(buf);
			const joined = Buffer.concat(pending);
			const at = findHeadClose(joined);
			if (at === -1) return [];
			done = true;
			pending = [];
			const closeLen = joined.toString("latin1", at).match(/^<\/head>/i)[0].length;
			const head = apply(joined.subarray(0, at + closeLen).toString("utf8"));
			return [Buffer.concat([Buffer.from(head, "utf8"), joined.subarray(at + closeLen)])];
		},
		/** @returns {Buffer[]} whatever is still buffered (no `</head>` seen) */
		flush() {
			if (done || pending.length === 0) return [];
			const rest = Buffer.concat(pending);
			pending = [];
			done = true;
			return [Buffer.from(apply(rest.toString("utf8")), "utf8")];
		}
	};
}
//#endregion
//#region server/middleware/grok-pwa.ts
/**
* Deployed-app (Nitro) half of the platform PWA chrome. Auto-registered as
* global h3 middleware because vite.config.ts sets `serverDir: "./server"` —
* without that option Nitro v3 never scans this directory.
*
* - `?install=1&platform=ios` on a document path → the Home Screen tutorial,
*   bundled into the server build via `?raw` (the public/ directory is CDN
*   static output on Vercel and not readable from the function).
* - `/__grok/manifest.webmanifest` → per-app-named manifest (kept out of
*   public/ so this dynamic response is the only one).
* - Other HTML documents → stream-inject PWA + OG head tags at `</head>`.
*   OG identity is baked via `virtual:grok-og-identity` at `vite build`
*   (this function cannot read `src/lib/og/site.json` or `public/og.jpg`).
*   This must be a middleware transforming `next()`: h3 discards the `response`
*   runtime hook's return value, and `render:html` does not exist in Nitro v3.
*/
function requestHost(event) {
	return event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host;
}
function injectHeadStreaming(response, host) {
	const injector = createHeadInjector({
		host,
		site: grokOgIdentity.site
	});
	const transformed = response.body.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			for (const out of injector.push(chunk)) controller.enqueue(out);
		},
		flush(controller) {
			for (const out of injector.flush()) controller.enqueue(out);
		}
	}));
	const headers = new Headers(response.headers);
	headers.delete("content-length");
	return new Response(transformed, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
async function grokPwaMiddleware(event, next) {
	if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
	const path = event.url.pathname;
	const urlWithQuery = path + event.url.search;
	if (path === "/__grok/manifest.webmanifest" || path === "/__grok/manifest.json") return new Response(renderWebManifest(requestHost(event)), { headers: {
		"content-type": "application/manifest+json; charset=utf-8",
		"cache-control": "no-cache"
	} });
	if (isInstallQuery(urlWithQuery) && isDocumentPath(path) && acceptsHtml(event.req.headers.get("accept"))) {
		const html = renderInstallPageHtml(install_page_default, {
			host: requestHost(event),
			url: urlWithQuery
		});
		return new Response(html, { headers: {
			"content-type": "text/html; charset=utf-8",
			"cache-control": "no-cache"
		} });
	}
	if (!isDocumentPath(path)) return next();
	const result = await next();
	if (result instanceof Response && result.body && String(result.headers.get("content-type") ?? "").includes("text/html") && !result.headers.get("content-encoding")) return injectHeadStreaming(result, requestHost(event));
	return result;
}
//#endregion
//#region src/lib/article-slugs.generated.ts
var ARTICLE_SLUGS$1 = {
	"nece": {
		"fon-sil-pulsuz": {
			"en": "remove-background-free-no-sign-up",
			"tr": "arka-plan-sil-ucretsiz-kayitsiz",
			"ar": "hdhf-alkhlfya-mjana-wbla-tsjyl",
			"ru": "udalit-fon-besplatno-bez-registratsii"
		},
		"sekil-sixmaq-pulsuz": {
			"en": "compress-photo-free-no-sign-up",
			"tr": "fotograf-sikistir-ucretsiz-kayitsiz",
			"ar": "dght-alswra-mjana-wbla-tsjyl",
			"ru": "szhat-foto-besplatno-bez-registratsii"
		},
		"pdf-birlesdir-pulsuz": {
			"en": "merge-pdf-free-no-sign-up",
			"tr": "pdf-birlestir-ucretsiz-kayitsiz",
			"ar": "dmj-pdf-mjana-wbla-tsjyl",
			"ru": "obedinit-pdf-besplatno-bez-registratsii"
		},
		"qr-kod-pulsuz": {
			"en": "make-qr-code-free-no-sign-up",
			"tr": "qr-kod-yap-ucretsiz-kayitsiz",
			"ar": "asn-rmz-qr-mjana-wbla-tsjyl",
			"ru": "sdelat-qr-kod-besplatno-bez-registratsii"
		},
		"faiz-hesabla-pulsuz": {
			"en": "percent-calculator-free-no-sign-up",
			"tr": "yuzde-hesapla-ucretsiz-kayitsiz",
			"ar": "hasba-alnsba-almywya-mjana-wbla-tsjyl",
			"ru": "poschitat-protsent-besplatno-bez-registratsii"
		},
		"ilk-html": {
			"en": "first-html-page",
			"tr": "ilk-html-sayfasi",
			"ar": "awl-sfha-html",
			"ru": "pervaya-stranitsa-html"
		},
		"python-ilk-proqram": {
			"en": "first-python-program",
			"tr": "python-da-ilk-program",
			"ar": "awl-brnamj-python",
			"ru": "pervaya-programma-python"
		},
		"play-console": {
			"en": "how-open-play-console-account",
			"tr": "play-console-hesabi-nasil-acilir",
			"ar": "kyf-yfth-hsab-play-console",
			"ru": "kak-otkryt-akkaunt-play-console"
		},
		"pdf-word-cevirmek": {
			"en": "how-convert-pdf-word-free",
			"tr": "pdf-word-e-ucretsiz-nasil-cevirirsiniz",
			"ar": "kyf-thwl-pdf-ila-word-mjana",
			"ru": "kak-besplatno-perevesti-pdf-word"
		},
		"telefonda-pdf-imzalamaq": {
			"en": "how-sign-fill-pdf-your-phone",
			"tr": "telefonda-pdf-nasil-imzalanir-doldurulur",
			"ar": "kyf-twq-mlf-pdf-wtmlwh-la-alhatf",
			"ru": "kak-podpisat-zapolnit-pdf-telefone"
		},
		"pdf-hecmini-kicilmek": {
			"en": "how-reduce-pdf-file-size",
			"tr": "pdf-dosya-boyutu-nasil-kucultulur",
			"ar": "kyf-tsghr-hjm-mlf-pdf",
			"ru": "kak-umenshit-razmer-pdf"
		},
		"sekli-pdf-cevirmek": {
			"en": "how-turn-photo-into-pdf-your-phone",
			"tr": "telefonda-resmi-pdf-e-cevirme",
			"ar": "thwyl-alswra-ila-pdf-la-alhatf",
			"ru": "kak-prevratit-foto-pdf-telefone"
		},
		"skandan-metn-cixarmaq": {
			"en": "how-get-text-from-scanned-document",
			"tr": "taranmis-belgeden-metin-cikarma",
			"ar": "astkhraj-alns-mn-mstnd-mmswh",
			"ru": "kak-dostat-tekst-iz-skana"
		},
		"pdf-parol-qoymaq": {
			"en": "how-put-password-pdf",
			"tr": "pdf-e-sifre-nasil-konur",
			"ar": "kyf-td-klma-mrwr-la-pdf",
			"ru": "kak-postavit-parol-pdf"
		},
		"pdf-birlesdirmek": {
			"en": "how-merge-several-pdfs",
			"tr": "birden-fazla-pdf-nasil-birlestirilir",
			"ar": "kyf-tdmj-da-mlfat-pdf",
			"ru": "kak-obedinit-neskolko-pdf"
		},
		"wifi-qr-kod": {
			"en": "how-share-wi-fi-qr-code",
			"tr": "wi-fi-sifresini-qr-kodla-paylasma",
			"ar": "msharka-wi-fi-brmz-qr",
			"ru": "kak-podelitsya-wi-fi-cherez-qr-kod"
		},
		"telefonda-python": {
			"en": "how-run-python-your-phone",
			"tr": "telefonda-python-nasil-calistirilir",
			"ar": "kyf-tshghl-python-la-alhatf",
			"ru": "kak-zapustit-python-telefone"
		},
		"pdf-bolmek": {
			"en": "how-split-pdf-file",
			"tr": "pdf-dosyasi-nasil-bolunur",
			"ar": "kyf-tqsm-mlf-pdf",
			"ru": "kak-razdelit-pdf-fayl"
		},
		"pdf-den-sekil": {
			"en": "how-save-pdf-pages-as-images",
			"tr": "pdf-den-resim",
			"ar": "kyf-thfz-sfhat-pdf-kswr",
			"ru": "kak-sokhranit-stranitsy-pdf-kak-kartinki"
		},
		"pdf-su-nisani": {
			"en": "how-add-watermark-pdf",
			"tr": "pdf-e-filigran-nasil-eklenir",
			"ar": "kyf-td-lama-mayya-la-pdf",
			"ru": "kak-dobavit-vodyanoy-znak-pdf"
		},
		"pdf-sehife-cevirmek": {
			"en": "how-rotate-pdf-page",
			"tr": "pdf-sayfasi-nasil-dondurulur",
			"ar": "kyf-tdyr-sfha-pdf",
			"ru": "kak-povernut-stranitsu-pdf"
		},
		"pdf-sehife-cixarmaq": {
			"en": "how-extract-pages-from-pdf",
			"tr": "pdf-den-sayfa-nasil-cikarilir",
			"ar": "kyf-tstkhrj-sfhat-mn-pdf",
			"ru": "kak-izvlech-stranitsy-iz-pdf"
		},
		"word-pdf-cevirmek": {
			"en": "how-convert-word-file-pdf",
			"tr": "word-dosyasi-pdf-e-nasil-cevrilir",
			"ar": "kyf-thwl-mlf-word-ila-pdf",
			"ru": "kak-perevesti-word-pdf"
		},
		"sekil-fonu-silmek": {
			"en": "how-remove-photo-background",
			"tr": "fotograf-arka-plani-nasil-silinir",
			"ar": "kyf-thdhf-khlfya-alswra",
			"ru": "kak-udalit-fon-foto"
		},
		"qr-kod-hazirlamaq": {
			"en": "how-make-qr-code",
			"tr": "qr-kod-nasil-hazirlanir",
			"ar": "kyf-tsn-rmz-qr",
			"ru": "kak-sdelat-qr-kod"
		},
		"sekli-kiciltmek": {
			"en": "how-reduce-photo-file-size",
			"tr": "fotograf-boyutu-nasil-kucultulur",
			"ar": "kyf-tsghr-hjm-alswra",
			"ru": "kak-umenshit-razmer-foto"
		},
		"pdf-sehife-nomresi": {
			"en": "how-add-page-numbers-pdf",
			"tr": "pdf-e-sayfa-numarasi-nasil-eklenir",
			"ar": "kyf-tdyf-arqam-alsfhat-ila-pdf",
			"ru": "kak-dobavit-nomera-stranits-pdf"
		},
		"pdf-parol-acmaq": {
			"en": "how-remove-password-from-pdf",
			"tr": "pdf-sifresi-nasil-kaldirilir",
			"ar": "kyf-tzyl-klma-almrwr-mn-pdf",
			"ru": "kak-snyat-parol-pdf"
		},
		"pdf-kesmek": {
			"en": "how-crop-pdf",
			"tr": "pdf-nasil-kirpilir",
			"ar": "kyf-tqs-sfhat-pdf",
			"ru": "kak-obrezat-pdf"
		},
		"pdf-boz-etmek": {
			"en": "how-make-pdf-grayscale",
			"tr": "pdf-nasil-gri-yapilir",
			"ar": "kyf-thwl-pdf-ila-rmady",
			"ru": "kak-sdelat-pdf-cherno-belym"
		},
		"excel-pdf-cevirmek": {
			"en": "how-convert-excel-csv-pdf",
			"tr": "excel-veya-csv-pdf-e-nasil-cevrilir",
			"ar": "kyf-thwl-excel-aw-csv-ila-pdf",
			"ru": "kak-perevesti-excel-ili-csv-pdf"
		},
		"pdf-metn-qaraltmaq": {
			"en": "how-redact-text-pdf",
			"tr": "pdf-te-metin-nasil-karartilir",
			"ar": "kyf-ttm-nsa-fy-pdf",
			"ru": "kak-skryt-tekst-pdf"
		},
		"hesab-faktura-pdf": {
			"en": "how-make-invoice-pdf",
			"tr": "fatura-pdf-nasil-hazirlanir",
			"ar": "kyf-td-fatwra-pdf",
			"ru": "kak-sdelat-schet-pdf"
		},
		"sekil-olcusu-deyismek": {
			"en": "how-resize-image",
			"tr": "resim-boyutu-nasil-degistirilir",
			"ar": "kyf-tghyr-hjm-swra",
			"ru": "kak-izmenit-razmer-foto"
		},
		"sekil-formati-cevirmek": {
			"en": "how-convert-image-format",
			"tr": "resim-bicimi-nasil-donusturulur",
			"ar": "kyf-thwl-sygha-alswra",
			"ru": "kak-smenit-format-foto"
		},
		"vizit-qr-kod": {
			"en": "how-make-qr-code-business-card",
			"tr": "kartvizit-icin-qr-kod-nasil-hazirlanir",
			"ar": "kyf-td-rmz-qr-lbtaqa-alml",
			"ru": "kak-sdelat-qr-kod-dlya-vizitki"
		},
		"zip-sixmaq-acmaq": {
			"en": "how-zip-files-open-zip",
			"tr": "dosyalar-nasil-zip-yapilir-zip-nasil-acilir",
			"ar": "kyf-tdght-almlfat-bsygha-zip-wtfthha",
			"ru": "kak-szhat-fayly-zip-otkryt-zip"
		}
	},
	"movzu": {
		"chatgpt-nedir": {
			"en": "what-is-chatgpt",
			"tr": "chatgpt-nedir",
			"ar": "ma-hw-chatgpt",
			"ru": "chto-takoe-chatgpt"
		},
		"gemini-nedir": {
			"en": "what-is-gemini",
			"tr": "gemini-nedir",
			"ar": "ma-hw-gemini",
			"ru": "chto-takoe-gemini"
		},
		"claude-nedir": {
			"en": "what-is-claude",
			"tr": "claude-nedir",
			"ar": "ma-hw-claude",
			"ru": "chto-takoe-claude"
		},
		"prompt-nedir": {
			"en": "what-is-prompt",
			"tr": "prompt-nedir",
			"ar": "ma-hw-prompt",
			"ru": "chto-takoe-prompt"
		},
		"ai-ile-tetbiq": {
			"en": "making-app-ai",
			"tr": "yapay-zeka-uygulama-yapmak",
			"ar": "sn-ttbyq-baldhka-alastnay",
			"ru": "sdelat-prilozhenie-ii"
		},
		"gpt-6": {
			"en": "gpt-6-puts-chart-inside-answer",
			"tr": "gpt-6-cevabin-icine-grafik-koyar",
			"ar": "gpt-6-yd-rsma-dakhl-aljwab",
			"ru": "gpt-6-kladet-grafik-vnutr-otveta"
		},
		"gemini-qrafik": {
			"en": "gemini-puts-chart-inside-answer",
			"tr": "gemini-cevabin-icine-grafik-koyar",
			"ar": "gemini-yd-rsma-dakhl-aljwab",
			"ru": "gemini-kladet-grafik-vnutr-otveta"
		},
		"claude-artifact": {
			"en": "claude-puts-chart-beside-chat",
			"tr": "claude-grafigi-sohbetin-yanina-koyar",
			"ar": "claude-yd-alrsm-bjanb-almhadtha",
			"ru": "claude-kladet-grafik-ryadom-razgovorom"
		},
		"pulsuz-chatgpt-alternativleri": {
			"en": "free-chatgpt-alternatives-that-work-azerbaijani",
			"tr": "chatgpt-ye-ucretsiz-alternatifler",
			"ar": "bdayl-mjanya-l-chatgpt-tml-ballgha-aladhrbyjanya",
			"ru": "besplatnye-alternativy-chatgpt-kotorye-ponimayut"
		},
		"prompt-numuneleri": {
			"en": "how-write-prompt",
			"tr": "prompt-nasil-yazilir",
			"ar": "kyf-tktb-prompt",
			"ru": "kak-pisat-prompt"
		},
		"ai-ile-kod-oyrenmek": {
			"en": "learning-code-ai",
			"tr": "yapay-zekayla-kod-ogrenmek",
			"ar": "tlm-albrmja-baldhka-alastnay",
			"ru": "uchitsya-programmirovat-ii"
		},
		"ereb-dili-baslangic": {
			"en": "where-start-learning-arabic",
			"tr": "arapca-ogrenmeye-nereden-baslanir",
			"ar": "mn-ayn-tbda-tlm-alrbya",
			"ru": "chego-nachat-izuchat-arabskiy"
		}
	},
	"xeta": {
		"emr-taninmir": {
			"en": "python-is-not-recognized",
			"tr": "python-ic-veya-dis-komut-degil",
			"ar": "python-lys-amra-dakhlya-aw-kharjya",
			"ru": "python-ne-yavlyaetsya-vnutrenney-ili-vneshney"
		},
		"e-herfi": {
			"en": "letter-e-shows-as-square",
			"tr": "konsolda-e-harfi-kare-olur",
			"ar": "hrf-e-yzhr-mrba-fy-altrfya",
			"ru": "bukva-e-konsoli-stanovitsya-kvadratom"
		},
		"excel-e": {
			"en": "excel-breaks-letter-e",
			"tr": "excel-de-e-harfi-bozulur",
			"ar": "excel-yfsd-hrf-e",
			"ru": "excel-portit-bukvu-e"
		},
		"html-e": {
			"en": "letter-e-becomes-question-mark-page",
			"tr": "sayfada-e-harfi-soru-isareti-olur",
			"ar": "hrf-e-ysyr-lama-astfham-fy-alsfha",
			"ru": "bukva-e-stranitse-stanovitsya-voprosom"
		},
		"excel-sutun": {
			"en": "excel-opens-csv-as-one-column",
			"tr": "excel-csv-yi-tek-sutun-acar",
			"ar": "excel-yfth-csv-mwda-wahda",
			"ru": "excel-otkryvaet-csv-odnim-stolbtsom"
		},
		"ps-skript": {
			"en": "powershell-will-not-run-script",
			"tr": "powershell-betigi-calistirmiyor",
			"ar": "powershell-la-yshghl-alskrbt",
			"ru": "powershell-ne-zapuskaet-skript"
		},
		"json-e": {
			"en": "json-letter-e-becomes-u0259",
			"tr": "json-da-e-harfi-u0259-olur",
			"ar": "fy-json-ysyr-hrf-e-u0259",
			"ru": "json-bukva-e-stanovitsya-u0259"
		},
		"apk-qurulmur": {
			"en": "apk-will-not-install",
			"tr": "apk-kurulmuyor",
			"ar": "apk-la-ythbt",
			"ru": "apk-ne-ustanavlivaetsya"
		},
		"parse-error": {
			"en": "what-is-parse-error",
			"tr": "parse-error-nedir",
			"ar": "ma-hw-parse-error",
			"ru": "chto-takoe-parse-error"
		},
		"keystore-itdi": {
			"en": "keystore-is-lost",
			"tr": "keystore-kayboldu",
			"ar": "da-mlf-keystore",
			"ru": "poteryan-keystore"
		},
		"imza-uygun-deyil": {
			"en": "signatures-do-not-match",
			"tr": "imzalar-uyusmuyor",
			"ar": "altwaqy-ghyr-mttabqa",
			"ru": "podpisi-ne-sovpadayut"
		},
		"paket-adi-xetasi": {
			"en": "package-name-error",
			"tr": "paket-adi-hatasi",
			"ar": "khta-fy-asm-alhzma",
			"ru": "oshibka-imeni-paketa"
		},
		"apk-fayli-zedelenib": {
			"en": "apk-file-is-damaged",
			"tr": "apk-dosyasi-bozuldu",
			"ar": "mlf-apk-talf",
			"ru": "fayl-apk-povrezhden"
		},
		"play-protect-bloklayir": {
			"en": "blocked-by-play-protect",
			"tr": "play-protect-engelliyor",
			"ar": "play-protect-yhzr-alttbyq",
			"ru": "play-protect-blokiruet"
		},
		"paket-etibarsizdir": {
			"en": "package-appears-be-invalid",
			"tr": "paket-gecersiz",
			"ar": "alhzma-ghyr-salha",
			"ru": "paket-nedeystvitelen"
		},
		"yaddas-catmir": {
			"en": "not-enough-storage",
			"tr": "depolama-yetmiyor",
			"ar": "la-twjd-msaha-kafya",
			"ru": "ne-khvataet-pamyati"
		},
		"telefon-uygun-deyil": {
			"en": "app-not-compatible-your-device",
			"tr": "uygulama-cihazla-uyumlu-degil",
			"ar": "alttbyq-ghyr-mtwafq-m-jhazk",
			"ru": "prilozhenie-ne-sovmestimo-ustroystvom"
		},
		"kohne-versiya-qurulmur": {
			"en": "older-version-will-not-install",
			"tr": "eski-surum-kurulmuyor",
			"ar": "alnskha-alaqdm-la-tthbt",
			"ru": "staraya-versiya-ne-ustanavlivaetsya"
		},
		"xapk-qurulmur": {
			"en": "xapk-will-not-install",
			"tr": "xapk-kurulmuyor",
			"ar": "xapk-la-ythbt",
			"ru": "xapk-ne-ustanavlivaetsya"
		},
		"pdf-acilmir": {
			"en": "pdf-will-not-open",
			"tr": "pdf-acilmiyor",
			"ar": "mlf-pdf-la-yfth",
			"ru": "pdf-ne-otkryvaetsya"
		},
		"qr-oxunmur": {
			"en": "qr-code-will-not-scan",
			"tr": "qr-okunmuyor",
			"ar": "rmz-qr-la-yqra",
			"ru": "qr-kod-ne-skaniruetsya"
		},
		"sekil-cox-boyukdur": {
			"en": "photo-is-too-large",
			"tr": "fotograf-cok-buyuk",
			"ar": "alswra-kbyra-jda",
			"ru": "foto-slishkom-bolshoe"
		},
		"etme": {
			"en": "odeyici-turns-into-ode-yici",
			"tr": "odeyici-sozcugu-ode-yici-olur",
			"ar": "klma-odeyici-tsyr-ode-yici",
			"ru": "slovo-odeyici-stanovitsya-ode-yici"
		},
		"csharp-e": {
			"en": "c-letter-e-becomes-question-mark",
			"tr": "c-ta-e-harfi-soru-isareti-olur",
			"ar": "fy-c-ysyr-hrf-e-lama-swal",
			"ru": "c-bukva-e-stanovitsya-voprositelnym-znakom"
		},
		"whatsapp-excel": {
			"en": "whatsapp-chat-breaks-e-excel",
			"tr": "whatsapp-sohbeti-excel-de-e-harfini-bozar",
			"ar": "drdsha-whatsapp-tfsd-hrf-e-fy-excel",
			"ru": "perepiska-whatsapp-lomaet-e-excel"
		},
		"pdf-e": {
			"en": "pdf-letter-e-becomes-square",
			"tr": "pdf-de-e-harfi-kare-olur",
			"ar": "fy-pdf-ysyr-hrf-e-mrba",
			"ru": "pdf-bukva-e-stanovitsya-kvadratom"
		},
		"mysql-e": {
			"en": "mysql-letter-e-becomes-question-mark",
			"tr": "mysql-de-e-harfi-soru-isareti-olur",
			"ar": "fy-mysql-ysyr-hrf-e-lama-swal",
			"ru": "mysql-bukva-e-stanovitsya-voprositelnym-znakom"
		},
		"sms-e": {
			"en": "sms-letter-e-cuts-message-70-characters",
			"tr": "sms-te-e-harfi-mesaji-70-karaktere-indirir",
			"ar": "fy-alrsala-alqsyra-hrf-e-ynzl-alrsala-ila-70",
			"ru": "sms-bukva-e-ukorachivaet-soobshchenie-do-70"
		},
		"java-e": {
			"en": "java-letter-e-breaks-excel",
			"tr": "java-da-excel-icin-e-harfi-bozulur",
			"ar": "fy-java-yfsd-hrf-e-mn-ajl-excel",
			"ru": "java-bukva-e-portitsya-dlya-excel"
		},
		"php-e": {
			"en": "php-letter-e-becomes-question-mark",
			"tr": "php-de-e-harfi-soru-isareti-olur",
			"ar": "fy-php-ysyr-hrf-e-lama-swal",
			"ru": "php-bukva-e-stanovitsya-voprositelnym-znakom"
		},
		"android-e": {
			"en": "android-letter-e-becomes-question-mark",
			"tr": "android-de-e-harfi-soru-isareti-olur",
			"ar": "fy-android-ysyr-hrf-e-lama-swal",
			"ru": "android-bukva-e-stanovitsya-voprositelnym-znakom"
		},
		"qr-e": {
			"en": "qr-code-will-not-take-letter-e",
			"tr": "qr-kod-e-harfini-kabul-etmiyor",
			"ar": "rmz-qr-la-yqbl-hrf-e",
			"ru": "qr-kod-ne-prinimaet-bukvu-e"
		},
		"iban": {
			"en": "how-check-azerbaijan-iban-sample",
			"tr": "azerbaycan-iban-ornegi-nasil-yoklanir",
			"ar": "kyf-yfhs-nmwdhj-iban-ladhrbyjan",
			"ru": "kak-proveryaetsya-obrazets-iban-azerbaydzhana"
		},
		"voen": {
			"en": "ninth-digit-voen-cannot-be-calculated",
			"tr": "voen-dokuzuncu-rakami-hesaplanmaz",
			"ar": "alrqm-altas-fy-voen-la-yhsb",
			"ru": "devyatuyu-tsifru-voen-poschitat-nelzya"
		},
		"gradle-sync-failed": {
			"en": "gradle-sync-failed",
			"tr": "gradle-sync-basarisiz",
			"ar": "fshl-gradle-sync",
			"ru": "gradle-sync-ne-udalsya"
		},
		"could-not-resolve-dependency": {
			"en": "could-not-resolve-dependency",
			"tr": "bagimlilik-cozulemedi",
			"ar": "tdhr-hl-alatmadya",
			"ru": "ne-udalos-razreshit-zavisimost"
		},
		"duplicate-class": {
			"en": "duplicate-class-error",
			"tr": "duplicate-class-hatasi",
			"ar": "khta-duplicate-class",
			"ru": "oshibka-duplicate-class"
		},
		"manifest-merger-failed": {
			"en": "manifest-merger-failed",
			"tr": "manifest-merger-failed",
			"ar": "manifest-merger-failed",
			"ru": "manifest-merger-failed"
		},
		"dex-method-limit-multidex": {
			"en": "dex-limit",
			"tr": "dex-siniri",
			"ar": "hd-dex",
			"ru": "limit-dex"
		},
		"r8-missing-class": {
			"en": "r8-missing-class",
			"tr": "r8-missing-class",
			"ar": "r8-missing-class",
			"ru": "r8-missing-class"
		},
		"java-version-mismatch": {
			"en": "jdk-version-mismatch",
			"tr": "jdk-surumu-uyumsuz",
			"ar": "dm-twafq-isdar-jdk",
			"ru": "nesovmestimaya-versiya-jdk"
		},
		"sdk-location-not-found": {
			"en": "sdk-location-not-found",
			"tr": "sdk-location-not-found",
			"ar": "sdk-location-not-found",
			"ru": "sdk-location-not-found"
		},
		"minsdk-conflict": {
			"en": "minsdkversion-conflict",
			"tr": "minsdkversion-cakismasi",
			"ar": "tard-minsdkversion",
			"ru": "konflikt-minsdkversion"
		},
		"compilesdk-too-low": {
			"en": "compilesdk-is-too-low",
			"tr": "compilesdk-cok-dusuk",
			"ar": "qyma-compilesdk-mnkhfda-jda",
			"ru": "compilesdk-slishkom-nizkiy"
		},
		"eas-build-gradle-failed": {
			"en": "eas-build",
			"tr": "eas-build",
			"ar": "eas-build",
			"ru": "eas-build"
		},
		"expo-prebuild-error": {
			"en": "expo-prebuild-error",
			"tr": "expo-prebuild-hatasi",
			"ar": "khta-expo-prebuild",
			"ru": "oshibka-expo-prebuild"
		},
		"metro-unable-to-resolve-module": {
			"en": "metro",
			"tr": "metro",
			"ar": "metro",
			"ru": "metro"
		},
		"hermes-release-js-error": {
			"en": "hermes",
			"tr": "hermes",
			"ar": "hermes",
			"ru": "hermes"
		},
		"rn-release-white-screen": {
			"en": "white-screen-release",
			"tr": "release-te-beyaz-ekran",
			"ar": "shasha-byda-fy-release",
			"ru": "belyy-ekran-release"
		},
		"rn-red-screen-metro-connect": {
			"en": "red-screen",
			"tr": "kirmizi-ekran",
			"ar": "shasha-hmra",
			"ru": "krasnyy-ekran"
		},
		"expo-sdk-mismatch": {
			"en": "expo-sdk-mismatch",
			"tr": "expo-sdk-uyumsuzlugu",
			"ar": "dm-twafq-isdar-expo-sdk",
			"ru": "nesovpadenie-versiy-expo-sdk"
		},
		"capacitor-sync-error": {
			"en": "capacitor-sync-error",
			"tr": "capacitor-sync-hatasi",
			"ar": "khta-capacitor-sync",
			"ru": "oshibka-capacitor-sync"
		},
		"capacitor-white-screen": {
			"en": "capacitor",
			"tr": "capacitor",
			"ar": "capacitor",
			"ru": "capacitor"
		},
		"eas-credentials-keystore": {
			"en": "eas",
			"tr": "eas",
			"ar": "eas",
			"ru": "eas"
		},
		"keystore-was-tampered": {
			"en": "keystore-was-tampered-wrong-password",
			"tr": "keystore-tampered-parola-yanlis",
			"ar": "keystore-tampered-klma-almrwr-khatya",
			"ru": "keystore-tampered-nevernyy-parol"
		},
		"wrong-key-alias-or-password": {
			"en": "wrong-key-alias-password",
			"tr": "anahtar-alias-ya-da-parolasi-yanlis",
			"ar": "asm-alias-aw-klma-mrwr-almftah-khatya",
			"ru": "nevernyy-alias-ili-parol-klyucha"
		},
		"play-upload-key-mismatch": {
			"en": "play",
			"tr": "play",
			"ar": "play",
			"ru": "play"
		},
		"install-failed-update-incompatible": {
			"en": "install-failed-update-incompatible",
			"tr": "install-failed-update-incompatible",
			"ar": "install-failed-update-incompatible",
			"ru": "install-failed-update-incompatible"
		},
		"install-failed-version-downgrade": {
			"en": "install-failed-version-downgrade",
			"tr": "install-failed-version-downgrade",
			"ar": "install-failed-version-downgrade",
			"ru": "install-failed-version-downgrade"
		},
		"install-failed-insufficient-storage": {
			"en": "install-failed-insufficient-storage",
			"tr": "install-failed-insufficient-storage",
			"ar": "install-failed-insufficient-storage",
			"ru": "install-failed-insufficient-storage"
		},
		"install-failed-no-matching-abis": {
			"en": "install-failed-no-matching-abis",
			"tr": "install-failed-no-matching-abis",
			"ar": "install-failed-no-matching-abis",
			"ru": "install-failed-no-matching-abis"
		},
		"install-parse-failed": {
			"en": "parse-error",
			"tr": "parse-hatasi",
			"ar": "khta-fy-thlyl-alhzma",
			"ru": "oshibka-razbora-paketa"
		},
		"app-not-installed": {
			"en": "app-not-installed-error",
			"tr": "app-not-installed-hatasi",
			"ar": "khta-app-not-installed",
			"ru": "oshibka-app-not-installed"
		},
		"aab-install-bundletool": {
			"en": "installing-aab-file-phone",
			"tr": "aab-dosyasini-telefona-kurmak",
			"ar": "tthbyt-mlf-aab-la-alhatf",
			"ru": "ustanovka-aab-fayla-telefon"
		},
		"adb-device-unauthorized": {
			"en": "adb",
			"tr": "adb",
			"ar": "adb",
			"ru": "adb"
		},
		"adb-device-not-found": {
			"en": "adb-2",
			"tr": "adb-2",
			"ar": "adb-2",
			"ru": "adb-2"
		},
		"adb-server-version-mismatch": {
			"en": "adb-server-version-mismatch",
			"tr": "adb-server-surum-uyumsuzlugu",
			"ar": "dm-ttabq-isdar-khadm-adb",
			"ru": "nesovpadenie-versii-servera-adb"
		},
		"activity-not-found-launcher": {
			"en": "activity-class-does-not-exist",
			"tr": "activity-class-does-not-exist",
			"ar": "activity-class-does-not-exist",
			"ru": "activity-class-does-not-exist"
		},
		"play-target-api-level": {
			"en": "play-2",
			"tr": "play-2",
			"ar": "play-2",
			"ru": "play-2"
		},
		"play-permissions-policy-rejection": {
			"en": "play-2-2",
			"tr": "play-2-2",
			"ar": "play-2-2",
			"ru": "play-2-2"
		},
		"play-64bit-requirement": {
			"en": "play-2-2-2",
			"tr": "play-2-2-2",
			"ar": "play-2-2-2",
			"ru": "play-2-2-2"
		},
		"play-version-code-used": {
			"en": "play-2-2-2-2",
			"tr": "play-2-2-2-2",
			"ar": "play-2-2-2-2",
			"ru": "play-2-2-2-2"
		},
		"runtime-classnotfound-nosuchmethod": {
			"en": "classnotfound-nosuchmethod-crash",
			"tr": "classnotfound-nosuchmethod-cokmesi",
			"ar": "anhyar-classnotfound-nosuchmethod",
			"ru": "krash-classnotfound-nosuchmethod"
		},
		"runtime-outofmemory": {
			"en": "outofmemoryerror-crash",
			"tr": "outofmemoryerror-cokmesi",
			"ar": "anhyar-outofmemoryerror",
			"ru": "krash-outofmemoryerror"
		},
		"cleartext-not-permitted": {
			"en": "cleartext-communication-not-permitted",
			"tr": "cleartext-communication-not-permitted",
			"ar": "cleartext-communication-not-permitted",
			"ru": "cleartext-communication-not-permitted"
		},
		"security-exception-permission-denied": {
			"en": "securityexception",
			"tr": "securityexception",
			"ar": "securityexception",
			"ru": "securityexception"
		}
	},
	"soz": {
		"api-nedir": {
			"en": "what-is-api",
			"tr": "api-nedir",
			"ar": "ma-hy-api",
			"ru": "chto-takoe-api"
		},
		"deyisen-nedir": {
			"en": "what-is-variable",
			"tr": "degisken-nedir",
			"ar": "ma-hw-almtghyr",
			"ru": "chto-takoe-peremennaya"
		},
		"funksiya-nedir": {
			"en": "what-is-function",
			"tr": "fonksiyon-nedir",
			"ar": "ma-hy-aldala",
			"ru": "chto-takoe-funktsiya"
		},
		"dongu-nedir": {
			"en": "what-is-loop",
			"tr": "dongu-nedir",
			"ar": "ma-hy-alhlqa",
			"ru": "chto-takoe-tsikl"
		},
		"html-nedir": {
			"en": "what-is-html",
			"tr": "html-nedir",
			"ar": "ma-hw-html",
			"ru": "chto-takoe-html"
		},
		"css-nedir": {
			"en": "what-is-css",
			"tr": "css-nedir",
			"ar": "ma-hw-css",
			"ru": "chto-takoe-css"
		},
		"javascript-nedir": {
			"en": "what-is-javascript",
			"tr": "javascript-nedir",
			"ar": "ma-hw-javascript",
			"ru": "chto-takoe-javascript"
		},
		"python-nedir": {
			"en": "what-is-python",
			"tr": "python-nedir",
			"ar": "ma-hw-python",
			"ru": "chto-takoe-python"
		},
		"alqoritm-nedir": {
			"en": "what-is-algorithm",
			"tr": "algoritma-nedir",
			"ar": "ma-hy-alkhwarzmya",
			"ru": "chto-takoe-algoritm"
		},
		"json-nedir": {
			"en": "what-is-json",
			"tr": "json-nedir",
			"ar": "ma-hw-json",
			"ru": "chto-takoe-json"
		}
	},
	"muqayise": {
		"python-yoxsa-javascript": {
			"en": "python-javascript",
			"tr": "python-mu-javascript-mi",
			"ar": "python-am-javascript",
			"ru": "python-ili-javascript"
		},
		"java-yoxsa-kotlin": {
			"en": "java-kotlin",
			"tr": "java-mi-kotlin-mi",
			"ar": "java-am-kotlin",
			"ru": "java-ili-kotlin"
		},
		"python-2026": {
			"en": "is-python-still-worth-learning-2026",
			"tr": "2026-da-python-ogrenmeye-deger-mi",
			"ar": "hl-ysthq-python-altlm-fy-2026",
			"ru": "stoit-li-uchit-python-2026"
		}
	}
};
//#endregion
//#region src/lib/section-slugs.ts
/**
* Localized first URL segment per language for sections whose route files use
* AZ slugs (e.g. public `/en/how-to/x` is served by route `/en/nece/$slug`).
*/
/** Hand-kept localized child slugs (not generated). */
var MANUAL_SLUGS = { programming: {
	"numune-kod": {
		en: "sample-code",
		tr: "ornek-kod",
		ar: "amthilat-alkod",
		ru: "primery-koda"
	},
	"tetbiq-kodu": {
		en: "app-code",
		tr: "uygulama-kodu",
		ar: "kod-altatbiq",
		ru: "kod-prilozheniya"
	},
	"oyun-kodu": {
		en: "game-code",
		tr: "oyun-kodlari",
		ar: "kod-allueba",
		ru: "kod-igry"
	},
	"sayt-kodu": {
		en: "website-code",
		tr: "site-kodu",
		ar: "kod-almawqi",
		ru: "kod-sayta"
	}
} };
var ARTICLE_SLUGS = { ...ARTICLE_SLUGS$1 };
for (const [sec, items] of Object.entries(MANUAL_SLUGS)) ARTICLE_SLUGS[sec] = {
	...ARTICLE_SLUGS[sec] ?? {},
	...items
};
var SECTION_SLUGS = {
	nece: {
		en: "how-to",
		tr: "nasil",
		ar: "kayfa",
		ru: "kak"
	},
	movzu: {
		en: "topics",
		tr: "konular",
		ar: "mawadi",
		ru: "temy"
	},
	xeta: {
		en: "errors",
		tr: "hata",
		ar: "akhta",
		ru: "oshibki"
	},
	soz: {
		en: "words",
		tr: "kelime",
		ar: "kalimat",
		ru: "slova"
	},
	"soz-sayi": {
		en: "word-count",
		tr: "kelime-sayaci",
		ar: "adad-kalimat",
		ru: "schetchik-slov"
	},
	faiz: {
		en: "percent",
		tr: "yuzde",
		ar: "nisba",
		ru: "procent"
	},
	muqayise: {
		en: "compare",
		tr: "karsilastir",
		ar: "muqarana",
		ru: "sravnenie"
	},
	nedir: {
		en: "what-is",
		tr: "nedir",
		ar: "ma-huwa",
		ru: "chto-takoe"
	},
	oyun: {
		en: "games",
		tr: "oyunlar",
		ar: "alab",
		ru: "igry"
	},
	paket: {
		en: "packages",
		tr: "paketler",
		ar: "huzam",
		ru: "pakety"
	},
	services: {
		en: "services",
		tr: "hizmetler",
		ar: "khadamat",
		ru: "uslugi"
	}
};
var REVERSE = {
	en: {},
	tr: {},
	ar: {},
	ru: {}
};
for (const [az, m] of Object.entries(SECTION_SLUGS)) for (const l of Object.keys(m)) REVERSE[l][m[l]] = az;
var ART_REV = {};
for (const [sec, items] of Object.entries(ARTICLE_SLUGS)) {
	const r = ART_REV[sec] = {
		en: {},
		tr: {},
		ar: {},
		ru: {}
	};
	for (const [az, m] of Object.entries(items)) for (const l of Object.keys(m)) r[l][m[l]] = az;
}
var ART_RE = /^\/([^/?#]+)(.*)$/;
function artOut(l, sec, rest) {
	const m = rest.match(ART_RE);
	const loc = m && ARTICLE_SLUGS[sec]?.[m[1]]?.[l];
	return loc ? `/${loc}${m[2]}` : rest;
}
function artIn(l, sec, rest) {
	const m = rest.match(ART_RE);
	const az = m && ART_REV[sec]?.[l][m[1]];
	return az ? `/${az}${m[2]}` : rest;
}
var RE = /^\/(en|tr|ar|ru)\/([^/?#]+)(.*)$/;
/** `/en/nece/x` → `/en/how-to/x` (public URL). Idempotent; other paths untouched. */
function localizeSection(path) {
	const m = path.match(RE);
	if (!m) return path;
	const l = m[1];
	const az = REVERSE[l][m[2]] ?? m[2];
	return `/${l}/${SECTION_SLUGS[az]?.[l] ?? m[2]}${artOut(l, az, artIn(l, az, m[3]))}`;
}
/** Old AZ-slug public URL that should 301 to its localized form, or null. */
function legacySectionRedirect(path) {
	const next = localizeSection(path);
	return next !== path ? next : null;
}
//#endregion
//#region server/middleware/lang-redirect.ts
/**
* One permanent hop from legacy `?lang=xx` URLs to path locales (`/xx/...`),
* dropping the `lang` query and any trailing slash.
*/
var PAGES = /^\/(services|why|unutma|guides|privacy|resources|resurslar|programming|about|contact|terms|trust|nedir|apps|qr|erase|image|vcard|zip|video|planner|calc|ai|soz-sayi|faiz|wifi|seo|flow|logic|unknown|pdf|oyun|doctor|studio|learn|workspace|filecheck|schema|shortcuts|mirror|tools-legal|error-help|paket|planner|vcard)(\/.*)?$/;
function langRedirectMiddleware(event, next) {
	const method = (event.req.method ?? "GET").toUpperCase();
	if (method !== "GET" && method !== "HEAD") return next();
	const legacy = legacySectionRedirect(event.url.pathname.replace(/\/+$/, ""));
	if (legacy) return new Response(null, {
		status: 301,
		headers: {
			location: `${legacy}${event.url.search}`,
			"cache-control": "public, max-age=3600"
		}
	});
	const lang = event.url.searchParams.get("lang");
	if (lang !== "en" && lang !== "tr" && lang !== "ar" && lang !== "ru") return next();
	const path = event.url.pathname.length > 1 ? event.url.pathname.replace(/\/+$/, "") : event.url.pathname;
	if (!PAGES.test(path)) return next();
	const params = new URLSearchParams(event.url.search);
	params.delete("lang");
	const qs = params.toString();
	return new Response(null, {
		status: 308,
		headers: {
			location: `${localizeSection(`/${lang}${path}`)}${qs ? `?${qs}` : ""}`,
			"cache-control": "public, max-age=3600"
		}
	});
}
//#endregion
//#region server/middleware/paint-first.ts
/**
* Drop modulepreload hints and deprioritize the hydration bundle so the
* render-blocking stylesheet can paint the server HTML first.
*/
function rewritePaintHtml(html) {
	return html.replace(/<link\b[^>]*\brel=(["'])modulepreload\1[^>]*>/gi, "").replace(/<script\b([^>]*)>/gi, (full, attrs) => {
		if (!/\btype=(["'])module\1/i.test(attrs)) return full;
		if (!/\bsrc=(["'])\/assets\//i.test(attrs)) return full;
		if (/\bfetchpriority=/i.test(attrs)) return full;
		return `<script fetchpriority="low"${attrs}>`;
	});
}
function paintStream(response) {
	const decoder = new TextDecoder();
	const encoder = new TextEncoder();
	let pending = "";
	const emit = (end) => {
		if (!end) {
			const cut = pending.lastIndexOf("<");
			if (cut === -1 || pending.indexOf(">", cut) !== -1) {
				const out = encoder.encode(rewritePaintHtml(pending));
				pending = "";
				return out;
			}
			if (cut === 0) return /* @__PURE__ */ new Uint8Array();
			const ready = pending.slice(0, cut);
			pending = pending.slice(cut);
			return encoder.encode(rewritePaintHtml(ready));
		}
		const out = encoder.encode(rewritePaintHtml(pending));
		pending = "";
		return out;
	};
	const transformed = response.body.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			pending += decoder.decode(chunk, { stream: true });
			const out = emit(false);
			if (out.byteLength) controller.enqueue(out);
		},
		flush(controller) {
			pending += decoder.decode();
			const out = emit(true);
			if (out.byteLength) controller.enqueue(out);
		}
	}));
	const headers = new Headers(response.headers);
	headers.delete("content-length");
	return new Response(transformed, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
async function paintFirstMiddleware(event, next) {
	if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
	if (!isDocumentPath(event.url.pathname)) return next();
	if (!acceptsHtml(event.req.headers.get("accept"))) return next();
	const result = await next();
	if (result instanceof Response && result.body && String(result.headers.get("content-type") ?? "").includes("text/html") && !result.headers.get("content-encoding")) return paintStream(result);
	return result;
}
//#endregion
//#region server/middleware/placeholder-slug-redirect.ts
var LITERAL = /^(?:\/(?:en|tr|ar|ru))?\/(?:xeta|faq|movzu|muqayise|nece|oyun|soz|tools)\/(?:\$slug|%24slug)\/?$/i;
function placeholderSlugRedirect(event, next) {
	const method = (event.req.method ?? "GET").toUpperCase();
	if (method !== "GET" && method !== "HEAD") return next();
	const path = event.url.pathname;
	if (!LITERAL.test(path)) return next();
	const dest = path.replace(/\/(?:\$slug|%24slug)\/?$/i, "") || "/";
	return new Response(null, {
		status: 308,
		headers: {
			location: dest,
			"cache-control": "public, max-age=3600"
		}
	});
}
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}], $1 = [{
		name: "headers",
		route: "/**",
		handler: headers,
		options: {
			"Content-Security-Policy": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; script-src 'self' https://www.googletagmanager.com https://grok.com 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; media-src 'self' blob:; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://grok.com https://app-builder-deployer.grok.com https://grok.gcp.mouseion.dev https://app-builder-deployer.gcp.mouseion.dev blob: https://staticimgly.com https://qvwqqpxrvnrnwvyckwlo.supabase.co wss://qvwqqpxrvnrnwvyckwlo.supabase.co https://rbnhwyvpuobdmgqjdiyj.supabase.co https://api.github.com; worker-src 'self' blob:; frame-src 'self' blob:; upgrade-insecure-requests",
			"X-Content-Type-Options": "nosniff",
			"Referrer-Policy": "strict-origin-when-cross-origin",
			"X-Frame-Options": "DENY",
			"Permissions-Policy": "accelerometer=(), camera=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
			"Strict-Transport-Security": "max-age=63072000; includeSubDomains"
		}
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		r.unshift({
			data: $1,
			params: { "_": s.slice(1).join("/") }
		});
		return r;
	};
})();
var _lazy_EU7BCV = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_EU7BCV
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [
	toEventHandler(grokPwaMiddleware),
	toEventHandler(langRedirectMiddleware),
	toEventHandler(paintFirstMiddleware),
	toEventHandler(placeholderSlugRedirect)
].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/vercel/runtime/isr.mjs
var ISR_URL_PARAM = "__isr_route";
function isrRouteRewrite(reqUrl, xNowRouteMatches) {
	if (xNowRouteMatches) {
		const isrURL = new URLSearchParams(xNowRouteMatches).get(ISR_URL_PARAM);
		if (isrURL) return [decodeURIComponent(isrURL), ""];
	} else {
		const queryIndex = reqUrl.indexOf("?");
		if (queryIndex !== -1) {
			const params = new URLSearchParams(reqUrl.slice(queryIndex + 1));
			const isrURL = params.get(ISR_URL_PARAM);
			if (isrURL) {
				params.delete(ISR_URL_PARAM);
				return [decodeURIComponent(isrURL), params.toString()];
			}
		}
	}
}
//#endregion
//#region node_modules/nitro/dist/presets/vercel/runtime/vercel.web.mjs
var nitroApp = useNitroApp();
var vercel_web_default = { async fetch(req, context) {
	const isrURL = isrRouteRewrite(req.url, req.headers.get("x-now-route-matches"));
	if (isrURL) {
		const { routeRules } = getRouteRules("", isrURL[0]);
		if (routeRules?.isr) req = new Request(new URL(isrURL[0] + (isrURL[1] ? `?${isrURL[1]}` : ""), req.url).href, req);
	}
	req.runtime ??= { name: "vercel" };
	req.runtime.vercel = { context };
	let ip;
	Object.defineProperty(req, "ip", { get() {
		const h = req.headers.get("x-forwarded-for");
		return ip ??= h?.split(",").shift()?.trim();
	} });
	req.waitUntil = context?.waitUntil;
	return nitroApp.fetch(req);
} };
//#endregion
export { vercel_web_default as default };
