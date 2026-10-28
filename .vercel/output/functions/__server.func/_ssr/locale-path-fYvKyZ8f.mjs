import { n as localizeSection, t as delocalizeSection } from "./section-slugs-C1KQkil1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/locale-path-fYvKyZ8f.js
function stripLocalePrefix(pathname) {
	const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname || "/";
	const bare = path.match(/^\/(en|tr|ar|ru)$/);
	if (bare) return {
		lang: bare[1],
		path: "/"
	};
	const match = delocalizeSection(path).match(/^\/(en|tr|ar|ru)(\/.*)$/);
	if (!match) return {
		lang: null,
		path
	};
	return {
		lang: match[1],
		path: match[2]
	};
}
/** Pages that keep one route file and get `/xx/...` URLs via router rewrite. */
function isSharedLocalePage(path) {
	return path === "/why" || path === "/unutma" || path === "/guides" || /^\/guides\/[^/]+$/.test(path) || path === "/privacy" || /^\/privacy\/[^?#]+$/.test(path) || path === "/resources" || /^\/resources\/[^/]+(\/[^/]+)?$/.test(path) || /^\/resurslar\/[^/]+$/.test(path) || path === "/programming" || /^\/programming\/[^/]+$/.test(path);
}
function isSplitPage(path) {
	return isSharedLocalePage(path) || path === "/services" || path === "/about" || path === "/contact" || path === "/terms" || path === "/trust" || path === "/nedir" || path === "/apps" || path === "/qr" || path === "/erase" || path === "/image" || /^\/image\/[a-z-]+$/.test(path) || path === "/vcard" || path === "/zip" || path === "/video" || /^\/video\/[a-z-]+$/.test(path) || path === "/workspace" || path === "/learn" || path === "/studio" || path === "/filecheck" || path === "/schema" || path === "/shortcuts" || path === "/mirror" || path === "/learn/logic" || path === "/tools-legal" || path === "/doctor" || path === "/error-help" || path === "/planner" || path === "/calc" || path === "/ai" || path === "/soz-sayi" || path === "/faiz" || path === "/wifi" || path === "/seo" || path === "/flow" || path === "/logic" || path === "/unknown" || path === "/pdf" || /^\/pdf\/[a-z-]+$/.test(path) || /^\/apps\/[^/]+$/.test(path) || path === "/oyun" || /^\/oyun\/[a-z0-9-]+$/.test(path);
}
function homePath(lang) {
	return lang === "az" ? "/" : `/${lang}`;
}
function localeHref(lang, path) {
	const hashAt = path.indexOf("#");
	const hash = hashAt >= 0 ? path.slice(hashAt) : "";
	const before = hashAt >= 0 ? path.slice(0, hashAt) : path;
	const queryAt = before.indexOf("?");
	const pathname = queryAt >= 0 ? before.slice(0, queryAt) : before;
	const query = queryAt >= 0 ? before.slice(queryAt + 1) : "";
	const bare = stripLocalePrefix(pathname).path;
	if (lang === "az" || isSplitPage(bare)) {
		const next = lang !== "az" && isSplitPage(bare) ? `/${lang}${bare}` : bare;
		return `${localizeSection(next)}${query ? `?${query}` : ""}${hash}`;
	}
	const params = new URLSearchParams(query);
	if (!params.has("lang")) params.set("lang", lang);
	return `${bare}?${params.toString()}${hash}`;
}
//#endregion
export { stripLocalePrefix as a, localeHref as i, isSharedLocalePage as n, isSplitPage as r, homePath as t };
