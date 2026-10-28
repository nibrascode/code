import { i as pythonSections } from "./lessons-BYLsQs9F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/article-load-DnXnJeGk.js
function seoTitle(title, fallback) {
	return title?.replace(/ — Nibras Code$/, "") ?? fallback;
}
async function loadProgrammingView(lang, slug, privacy = []) {
	const { findProgramming } = await import("./programming-Zpi3fv85.mjs");
	const page = findProgramming(slug);
	if (!page) return null;
	const locale = lang === "az" ? null : (await import("./programming-locales-V6M5ByyG.mjs")).findProgrammingLocale(lang, slug);
	if (slug === "python") {
		const azBaked = page.sections ?? [];
		const baked = lang === "az" ? azBaked : locale?.sections ?? [];
		return {
			slug,
			title: seoTitle(page.seo[lang]?.title, page.title || "Python"),
			sections: pythonSections(lang, privacy, baked, azBaked)
		};
	}
	return {
		slug,
		title: locale?.title ?? seoTitle(page.seo[lang]?.title, page.title),
		sections: locale?.sections ?? page.sections ?? []
	};
}
async function loadPythonEditorSections(rows) {
	return (await loadProgrammingView("az", "python", rows))?.sections ?? pythonSections("az", rows);
}
//#endregion
export { loadProgrammingView, loadPythonEditorSections };
