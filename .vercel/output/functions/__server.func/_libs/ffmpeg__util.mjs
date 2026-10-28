import { r as __exportAll } from "../_runtime.mjs";
//#region node_modules/@ffmpeg/util/dist/esm/index.js
var esm_exports = /* @__PURE__ */ __exportAll({ fetchFile: () => fetchFile });
var readFromBlobOrFile = (blob) => new Promise((resolve, reject) => {
	const fileReader = new FileReader();
	fileReader.onload = () => {
		const { result } = fileReader;
		if (result instanceof ArrayBuffer) resolve(new Uint8Array(result));
		else resolve(/* @__PURE__ */ new Uint8Array());
	};
	fileReader.onerror = (event) => {
		reject(Error(`File could not be read! Code=${event?.target?.error?.code || -1}`));
	};
	fileReader.readAsArrayBuffer(blob);
});
/**
* An util function to fetch data from url string, base64, URL, File or Blob format.
*
* Examples:
* ```ts
* // URL
* await fetchFile("http://localhost:3000/video.mp4");
* // base64
* await fetchFile("data:<type>;base64,wL2dvYWwgbW9yZ...");
* // URL
* await fetchFile(new URL("video.mp4", import.meta.url));
* // File
* fileInput.addEventListener('change', (e) => {
*   await fetchFile(e.target.files[0]);
* });
* // Blob
* const blob = new Blob(...);
* await fetchFile(blob);
* ```
*/
var fetchFile = async (file) => {
	let data;
	if (typeof file === "string") {
		if (/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(file)) data = atob(file.split(",")[1]).split("").map((c) => c.charCodeAt(0));
		else data = await (await fetch(file)).arrayBuffer();
	} else if (file instanceof URL) data = await (await fetch(file)).arrayBuffer();
	else if (file instanceof File || file instanceof Blob) data = await readFromBlobOrFile(file);
	else return /* @__PURE__ */ new Uint8Array();
	return new Uint8Array(data);
};
//#endregion
export { esm_exports as t };
