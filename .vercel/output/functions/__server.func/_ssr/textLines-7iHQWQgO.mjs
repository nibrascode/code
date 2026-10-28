import { ir as __exportAll } from "./router-Da_pLWIk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/textLines-7iHQWQgO.js
var textLines_exports = /* @__PURE__ */ __exportAll({
	applyActualText: () => applyActualText,
	cleanText: () => cleanText,
	fixArabicDoc: () => fixArabicDoc,
	isRtlText: () => isRtlText,
	itemsToLines: () => itemsToLines,
	textQuality: () => textQuality
});
/**
* Marked content with /ActualText (LibreOffice, Chrome, InDesign) carries the real letters for glyphs that
* have no or a wrong ToUnicode entry. Replace the glyph items inside such a span by one item with that text.
*/
function applyActualText(raw) {
	const out = [];
	const stack = [];
	const active = () => stack.find((s) => s) ?? null;
	let last = null;
	for (const it of raw) {
		if (it.type === "beginMarkedContentProps" || it.type === "beginMarkedContent") {
			const at = it.type === "beginMarkedContentProps" && typeof it.actualText === "string" && !active() ? {
				text: it.actualText,
				items: []
			} : null;
			stack.push(at);
			continue;
		}
		if (it.type === "endMarkedContent") {
			const top = stack.pop();
			if (top) {
				const all = top.items.filter((g) => typeof g.str === "string" && g.width >= 0);
				const inked = all.filter((g) => g.width > 0 && /\S/.test(g.str ?? ""));
				const spaces = all.filter((g) => g.width > 0 && !/\S/.test(g.str ?? ""));
				const span = (g) => Math.max(...g.map((x) => x.transform[4] + x.width)) - Math.min(...g.map((x) => x.transform[4]));
				const h = Math.max(4, ...all.map((g) => g.height || 0));
				const glyphs = inked.length && span(inked) > h * .15 ? inked : inked.length || spaces.length ? [...inked, ...spaces] : all;
				if (glyphs.length) {
					const x0 = Math.min(...glyphs.map((g) => g.transform[4]));
					const x1 = Math.max(...glyphs.map((g) => g.transform[4] + g.width));
					const base = glyphs.reduce((a, g) => g.width > a.width ? g : a, glyphs[0]);
					const t = [...base.transform];
					t[4] = x0;
					last = {
						str: top.text,
						transform: t,
						width: x1 - x0,
						height: base.height,
						actualText: "1"
					};
					out.push(last);
					continue;
				} else if (top.text.trim()) {}
			}
			continue;
		}
		if (it.type) continue;
		if (last && last.width < (last.height || 10) * .3 && !active() && typeof it.str === "string" && !/\S/.test(it.str) && it.width > 0) {
			const x = it.transform[4];
			const lx0 = last.transform[4];
			if (Math.abs(x - lx0) < 1 || x >= lx0 - .5 && x < lx0 + last.width - .5) {
				const x1 = Math.max(lx0 + last.width, x + it.width);
				const nx0 = Math.min(lx0, x);
				last.transform = [...last.transform];
				last.transform[4] = nx0;
				last.width = x1 - nx0;
				continue;
			}
		}
		last = null;
		const a = active();
		if (a) a.items.push(it);
		else out.push(it);
	}
	return out;
}
var RTL_CH = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/;
var RTL_G = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/g;
var LTR_G = /[A-Za-z\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF]/g;
var MARKS = "ؐ-ًؚ-ٰٟۖ-ۭ";
var CONTROL = /[\u0000-\u0008\u000B-\u001F\u007F\u00AD\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g;
/** NFKC folds presentation forms (ﻢ, ﻻ, ﹰ…) to normal letters; drop control chars and tatweel. */
function cleanText(s) {
	let t = s.replace(CONTROL, "");
	if (/[\uFB50-\uFDFF\uFE70-\uFEFC]/.test(t)) t = t.normalize("NFKC");
	return t.replace(/\u0640/g, "").replace(new RegExp(`\\s+([${MARKS}])`, "gu"), "$1");
}
function isRtlText(s) {
	const r = (s.match(RTL_G) ?? []).length;
	const l = (s.match(LTR_G) ?? []).length;
	return r > 0 && r >= l;
}
function gap(a, b) {
	return Math.max(a.x, b.x) - Math.min(a.x + a.w, b.x + b.w);
}
function joinOrdered(items) {
	let out = "";
	let prev = null;
	const k = items.some((i) => !/\S/.test(i.s)) ? .2 : .2;
	for (const it of items) {
		if (prev && !/\s$/.test(out) && !/^\s/.test(it.s)) {
			const size = Math.max(4, Math.min(prev.h || 10, it.h || 10));
			if (gap(prev, it) > size * k) out += " ";
		}
		out += it.s;
		if (/\S/.test(it.s) || !prev) prev = it;
	}
	return out.replace(/\s{2,}/g, " ");
}
var MIRROR = {
	"(": ")",
	")": "(",
	"[": "]",
	"]": "[",
	"{": "}",
	"}": "{",
	"<": ">",
	">": "<",
	"«": "»",
	"»": "«"
};
var mirror = (s) => s.replace(/[()[\]{}<>«»]/g, (c) => MIRROR[c]);
/** Order items of one line. Runs of the minority direction keep their own reading order. */
function order(items, rtl) {
	const strong = (it) => it.rtl ? "r" : /[\p{L}\p{N}]/u.test(it.s) ? "l" : "n";
	const minority = rtl ? "l" : "r";
	const sorted = [...items].sort((a, b) => rtl ? b.x + b.w - (a.x + a.w) : a.x - b.x);
	const out = [];
	let run = [];
	const flush = () => {
		if (!run.length) return;
		let k = run.length;
		while (k > 0 && strong(run[k - 1]) === "n") k--;
		const core = run.slice(0, k).sort((a, b) => rtl ? a.x - b.x : b.x + b.w - (a.x + a.w));
		out.push(...core, ...run.slice(k));
		run = [];
	};
	for (const it of sorted) {
		const k = strong(it);
		if (k === minority || k === "n" && run.length) run.push(it);
		else {
			flush();
			out.push(it);
		}
	}
	flush();
	return out;
}
/** Glyphs with no ToUnicode entry fall back to stray ASCII (+, 3, E…) glued to Arabic letters. */
function dropStrays(s) {
	return s.replace(/\s?\u064B([\u0621-\u064A])(?=ا(?:[\s.,،:؛!؟]|$))/g, "$1ً").replace(/\s?\u064B(?=[\u0621-\u064A])/g, "").replace(/(?<=[\u0621-\u064A\u064B-\u0652])[0-9A-Za-z+*#$%&=@^_|~](?=[\u0621-\u064A])/g, "").replace(/(?<=[\u0621-\u064A])[+*#$%&=@^_|~3E8](?=[\s.,،:؛!؟]|$)/g, "").replace(/(?<=^|\s)[+*#$%&=@^_|~](?=[\u0621-\u064A])/g, "");
}
function lineText(items) {
	const rtl = isRtlText(items.map((i) => i.s).join(""));
	const ordered = order(items, rtl);
	if (rtl) return dropStrays(joinOrdered(ordered.map((it) => !it.logical && (it.rtl || !/[\p{L}\p{N}]/u.test(it.s)) ? {
		...it,
		s: mirror(it.s)
	} : it)));
	return dropStrays(joinOrdered(ordered));
}
function itemsToLines(input) {
	const items = [];
	for (const r of applyActualText(input)) {
		if (typeof r.str !== "string" || !r.str) continue;
		const s = cleanText(r.str);
		if (!s) continue;
		Math.abs(r.height || r.transform[3] || r.transform[0] || 10);
		if (!/\S/.test(s)) continue;
		const h = Math.abs(r.height || r.transform[3] || r.transform[0] || 10);
		items.push({
			s,
			x: r.transform[4],
			y: r.transform[5],
			w: r.width,
			h,
			rtl: RTL_CH.test(s),
			ltr: false,
			logical: r.actualText === "1"
		});
	}
	const rows = [];
	for (const it of items.sort((a, b) => b.y - a.y)) {
		const row = rows.find((r) => Math.abs(r.y - it.y) <= Math.max(2, Math.min(r.h, it.h) * .45));
		if (row) {
			row.items.push(it);
			if (/\S/.test(it.s)) row.h = Math.max(row.h, it.h);
		} else rows.push({
			y: it.y,
			h: it.h,
			items: [it]
		});
	}
	rows.sort((a, b) => b.y - a.y);
	return rows.map((r) => r.items.some((i) => /\S/.test(i.s)) ? lineText(r.items).replace(/[ \t]{2,}/g, " ").trim() : "").filter((l, i, arr) => l.length > 0 || i > 0 && arr[i - 1].length > 0);
}
/**
* pdf.js reverses each RTL text run character by character. When one glyph maps to several letters
* (lam-alef «لا», «لأ», «في», «إلى» … ligatures from Word, LibreOffice and others) those letters come out
* swapped: «السلام» → «السالم», «الإمام» → «اإلمام», «في» → «يف». Detect this per document and repair.
*/
var AR = "\\u0621-\\u064A";
var B = "(^|[\\s(«\"'،؛:.!؟-])";
var E = "(?=$|[\\s)»\"'،؛:.!؟-])";
var re = (src, f = "gu") => new RegExp(src, f);
var count = (t, src) => (t.match(re(src)) ?? []).length;
function fixArabicDoc(pages) {
	const all = pages.join("\n");
	if ((all.match(RTL_G) ?? []).length < 40) return pages;
	const bad = count(all, `${B}ال${E}`) + count(all, "ا[إأآ]ل") + count(all, `${B}إىل${E}`) + count(all, `${B}يف${E}`) + count(all, `${B}[وف]?[إأ]ال${E}`);
	const good = count(all, `${B}لا${E}`) + count(all, "ال[إأآ]") + count(all, `${B}إلى${E}`) + count(all, `${B}في${E}`) + count(all, `${B}[وف]?[إأ]لا${E}`);
	if (bad < 3 || bad <= good) return pages;
	return pages.map((p) => p.replace(/ا([إأآ])ل/g, "ال$1").replace(re(`${B}ال${E}`), "$1لا").replace(re(`${B}([وف]?)([إأ])ال${E}`), "$1$2$3لا").replace(re(`${B}إىل${E}`), "$1إلى").replace(re(`${B}([وف]?)يف${E}`), "$1$2في").replace(re(`${B}([وفبك]?)ا([مجحخ])ل(?=[${AR}])`), "$1$2ال$3").replace(/سالم/g, "سلام").replace(/صالة/g, "صلاة").replace(/عالن/g, "علان").replace(/خالل/g, "خلال").replace(/كالم/g, "كلام").replace(/عالق/g, "علاق").replace(/إسالم/g, "إسلام"));
}
/** Text without a usable ToUnicode map shows up as private-use glyphs, replacement chars or symbol soup. */
function textQuality(pages) {
	const t = pages.join("").replace(/\s+/g, "");
	if (t.length < 20) return "empty";
	const bad = (t.match(/[\uE000-\uF8FF\uFFFD\u0000-\u001F]/g) ?? []).length;
	const letters = (t.match(/[\p{L}\p{N}]/gu) ?? []).length;
	if (bad / t.length > .2 || letters / t.length < .5) return "garbage";
	if ((t.match(RTL_G) ?? []).length > 50) {
		const words = pages.join(" ").split(/\s+/).filter((w) => RTL_CH.test(w));
		const single = words.filter((w) => w.replace(new RegExp(`[${MARKS}]`, "gu"), "").length === 1).length;
		if (words.length > 20 && single / words.length > .45) return "garbage";
	}
	return "ok";
}
//#endregion
export { textQuality as i, itemsToLines as n, textLines_exports as r, fixArabicDoc as t };
