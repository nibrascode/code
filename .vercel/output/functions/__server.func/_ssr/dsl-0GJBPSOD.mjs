import { o as l5 } from "./meta-Bb3__USb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dsl-0GJBPSOD.js
/** Paragraph block (az, en, tr, ar, ru). */
var P = (...t) => ({ paragraphs: [l5(...t)] });
/** Code block (language-neutral) with an optional lead-in sentence. */
var C = (code) => ({ code });
/** Bulleted list. */
var U = (...items) => ({ list: items.map((i) => l5(...i)) });
/** Numbered list. */
var N = (...items) => ({
	list: items.map((i) => l5(...i)),
	ordered: true
});
/** Section. */
var S = (id, title, ...blocks) => ({
	id,
	title: l5(...title),
	blocks
});
//#endregion
export { U as a, S as i, N as n, P as r, C as t };
