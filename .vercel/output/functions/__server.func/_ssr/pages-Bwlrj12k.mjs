import { o as translations } from "./programming-DeiLBCfU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pages-Bwlrj12k.js
function lines(text) {
	return text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
}
function defaultAbout(lang) {
	const text = translations[lang];
	return {
		eyebrow: text.who_btn,
		title: text.who_h,
		intro: [
			text.who_p1,
			text.who_p2,
			text.who_p3,
			text.who_p4,
			text.who_p5
		],
		approachTitle: text.who_approach,
		approach: [
			text.who_a1,
			text.who_a2,
			text.who_a3,
			text.who_a4
		],
		success: text.who_success,
		verse: text.who_verse,
		verseTr: text.who_verse_tr
	};
}
function defaultUnutma(lang) {
	const text = translations[lang];
	const notes = Array.from({ length: 12 }, (_, index) => text[`remind_${index + 1}`]);
	return {
		eyebrow: text.remind_btn,
		title: text.remind_h,
		verse: text.remind_verse,
		notes
	};
}
function aboutFromRow(row, lang) {
	if (!row) return defaultAbout(lang);
	try {
		const data = JSON.parse(row.body);
		const base = defaultAbout(lang);
		return {
			...base,
			...data,
			title: data.title || row.title || base.title,
			intro: Array.isArray(data.intro) ? data.intro.map((item) => item.trim()).filter(Boolean) : base.intro,
			approach: Array.isArray(data.approach) ? data.approach.map((item) => item.trim()).filter(Boolean) : base.approach
		};
	} catch {
		return defaultAbout(lang);
	}
}
function unutmaFromRow(row, lang) {
	if (!row) return defaultUnutma(lang);
	try {
		const data = JSON.parse(row.body);
		const base = defaultUnutma(lang);
		return {
			...base,
			...data,
			title: data.title || row.title || base.title,
			notes: Array.isArray(data.notes) ? data.notes.map((item) => item.trim()).filter(Boolean) : base.notes
		};
	} catch {
		return defaultUnutma(lang);
	}
}
function aboutBody(copy) {
	return JSON.stringify(copy);
}
function unutmaBody(copy) {
	return JSON.stringify({
		...copy,
		notes: copy.notes.map((item) => item.trim()).filter(Boolean)
	});
}
//#endregion
export { lines as a, defaultUnutma as i, aboutFromRow as n, unutmaBody as o, defaultAbout as r, unutmaFromRow as s, aboutBody as t };
