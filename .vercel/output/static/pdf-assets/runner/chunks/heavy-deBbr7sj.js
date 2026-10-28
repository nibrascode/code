//#region src/pdf/lib/heavy.ts
var e = null, t = 0, n = /* @__PURE__ */ new Map();
function r() {
	if (typeof Worker > "u" || typeof OffscreenCanvas > "u") return null;
	if (!e) try {
		e = new Worker(new URL(
			/* @vite-ignore */
			"/pdf-assets/runner/assets/heavy.worker-C30DxfAl.js",
			"" + import.meta.url
		), { type: "module" }), e.onmessage = (e) => {
			let t = n.get(e.data.id);
			n.delete(e.data.id), t?.(e.data);
		}, e.onerror = () => {
			for (let e of n.values()) e({
				ok: !1,
				error: "worker"
			});
			n.clear(), e = null;
		};
	} catch {
		return null;
	}
	return e;
}
function i(e, i) {
	let a = r();
	if (!a) return Promise.resolve(null);
	let o = ++t;
	return new Promise((t) => {
		n.set(o, (e) => t(e.ok && e.buf ? e.buf : null)), a.postMessage({
			...e,
			id: o
		}, i);
	});
}
async function a(e, t) {
	if (!r() || typeof createImageBitmap > "u") return null;
	let n = await createImageBitmap(e), a = await i({
		op: "gray-jpeg",
		bmp: n,
		q: t
	}, [n]);
	return a ? new Uint8Array(a) : null;
}
async function o(e) {
	let t = await i({
		op: "docx",
		text: e
	}, []);
	return t ? new Uint8Array(t) : null;
}
//#endregion
export { o as docxOff, a as grayJpegOff };
