import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { R as ShieldCheck, Vt as Mail, Zn as Copy, _t as Phone, an as Image$1, gr as CalendarPlus, i as Wifi, p as UserPlus, pr as Camera, v as TriangleAlert, y as Trash2, zn as ExternalLink } from "../_libs/lucide-react.mjs";
import { Yn as useI18n } from "./router-Da_pLWIk.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as downloadBlob, o as Button, s as cn, t as LIMITS } from "./qr-tool-39Nm74y5.mjs";
import { t as require_jsQR } from "../_libs/jsqr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scanner-D67ZSzfa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_jsQR = /* @__PURE__ */ __toESM(require_jsQR());
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl bg-bg-elevated p-4 shadow-[var(--shadow-border)]", className),
		...props
	});
}
/** WIFI:T:WPA;S:name;P:pass;H:false;;  (values may escape \ ; , : ") */
function parseWifi(text) {
	if (!/^WIFI:/i.test(text)) return null;
	const body = text.slice(5);
	const out = {};
	let key = "";
	let val = "";
	let inKey = true;
	for (let i = 0; i < body.length; i++) {
		const ch = body[i];
		if (ch === "\\" && i + 1 < body.length) {
			if (inKey) key += body[++i];
			else val += body[++i];
			continue;
		}
		if (inKey && ch === ":") {
			inKey = false;
			continue;
		}
		if (!inKey && ch === ";") {
			out[key.toUpperCase()] = val;
			key = "";
			val = "";
			inKey = true;
			continue;
		}
		if (inKey) key += ch;
		else val += ch;
	}
	if (!out.S) return null;
	return {
		ssid: out.S,
		password: out.P ?? "",
		security: out.T || "nopass",
		hidden: /^true$/i.test(out.H ?? "")
	};
}
function vField(raw, name) {
	const m = raw.match(new RegExp(`^${name}(?:;[^:\\r\\n]*)?:(.*)$`, "im"));
	return m ? m[1].trim() || null : null;
}
function classify(text) {
	const t = text.trim();
	if (/^https?:\/\//i.test(t)) return {
		kind: "url",
		url: t
	};
	const wifi = parseWifi(t);
	if (wifi) return {
		kind: "wifi",
		wifi
	};
	if (/^BEGIN:VCARD/i.test(t)) return {
		kind: "vcard",
		raw: t,
		name: vField(t, "FN") ?? vField(t, "N")?.split(";").filter(Boolean).reverse().join(" ") ?? null
	};
	if (/^MECARD:/i.test(t)) {
		const n = t.match(/N:([^;]*)/i)?.[1] ?? null;
		return {
			kind: "vcard",
			raw: mecardToVcard(t),
			name: n
		};
	}
	if (/BEGIN:VEVENT/i.test(t)) return {
		kind: "event",
		raw: /^BEGIN:VCALENDAR/i.test(t) ? t : `BEGIN:VCALENDAR\r\nVERSION:2.0\r\n${t}\r\nEND:VCALENDAR`,
		title: vField(t, "SUMMARY")
	};
	if (/^tel:/i.test(t)) return {
		kind: "tel",
		number: t.slice(4)
	};
	if (/^mailto:/i.test(t)) return {
		kind: "email",
		address: t.slice(7).split("?")[0]
	};
	if (/^www\.[^\s]+\.[a-z]{2,}/i.test(t)) return {
		kind: "url",
		url: `https://${t}`
	};
	return {
		kind: "text",
		text: t
	};
}
function mecardToVcard(t) {
	const get = (k) => t.match(new RegExp(`${k}:([^;]*)`, "i"))?.[1] ?? "";
	const n = get("N");
	const lines = [
		"BEGIN:VCARD",
		"VERSION:3.0",
		`FN:${n.replace(",", " ")}`,
		`N:${n.replace(",", ";")}`
	];
	if (get("TEL")) lines.push(`TEL:${get("TEL")}`);
	if (get("EMAIL")) lines.push(`EMAIL:${get("EMAIL")}`);
	if (get("URL")) lines.push(`URL:${get("URL")}`);
	if (get("ORG")) lines.push(`ORG:${get("ORG")}`);
	lines.push("END:VCARD");
	return lines.join("\r\n");
}
var SHORTENERS = /* @__PURE__ */ new Set([
	"bit.ly",
	"tinyurl.com",
	"t.co",
	"goo.gl",
	"ow.ly",
	"is.gd",
	"buff.ly",
	"cutt.ly",
	"rb.gy",
	"shorturl.at",
	"tiny.cc",
	"rebrand.ly",
	"bl.ink",
	"s.id",
	"t.ly",
	"v.gd",
	"qrco.de",
	"lnkd.in",
	"shorte.st",
	"adf.ly",
	"clck.ru",
	"u.to",
	"bitly.com",
	"short.io",
	"tr.ee",
	"urlz.fr"
]);
var RISKY_TLDS = /* @__PURE__ */ new Set([
	"zip",
	"mov",
	"xyz",
	"top",
	"click",
	"country",
	"gq",
	"tk",
	"ml",
	"cf",
	"ga",
	"work",
	"rest",
	"fit",
	"loan",
	"kim",
	"men",
	"date",
	"racing",
	"review",
	"cam",
	"quest",
	"sbs",
	"cfd"
]);
/** Heuristic, offline URL safety check (never a guarantee). */
function urlWarnings(raw) {
	let u;
	try {
		u = new URL(raw.trim());
	} catch {
		return [];
	}
	const out = [];
	const host = u.hostname.toLowerCase().replace(/^www\./, "");
	if (SHORTENERS.has(host)) out.push("short");
	if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.startsWith("[")) out.push("ip");
	if (u.protocol === "http:") out.push("http");
	if (host.split(".").some((p) => p.startsWith("xn--"))) out.push("puny");
	if (u.username || raw.slice(raw.indexOf("//") + 2).split("/")[0].includes("@")) out.push("at");
	const tld = host.split(".").pop() ?? "";
	if (RISKY_TLDS.has(tld)) out.push("tld");
	return out;
}
var HISTORY_KEY = "nibras-scan-history";
function loadHistory() {
	try {
		const raw = localStorage.getItem(HISTORY_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function saveHistory(items, max) {
	localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(0, max)));
}
function decodeCanvas(canvas) {
	const ctx = canvas.getContext("2d", { willReadFrequently: true });
	if (!ctx) return null;
	const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
	return (0, import_jsQR.default)(img.data, img.width, img.height, { inversionAttempts: "attemptBoth" })?.data ?? null;
}
function Scanner({ pro = false }) {
	const maxHistory = pro ? LIMITS.pro.history : LIMITS.free.history;
	const { t, m, w } = useI18n();
	const videoRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const [live, setLive] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [error, setError] = (0, import_react.useState)(null);
	const raf = (0, import_react.useRef)(0);
	const streamRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setHistory(loadHistory());
		return () => stop();
	}, []);
	const pushHit = (text) => {
		setResult(text);
		setHistory((prev) => {
			const next = [{
				text,
				at: Date.now()
			}, ...prev.filter((h) => h.text !== text)];
			saveHistory(next, maxHistory);
			return next.slice(0, maxHistory);
		});
	};
	const loop = () => {
		const video = videoRef.current;
		const canvas = canvasRef.current;
		if (!video || !canvas || video.readyState < 2) {
			raf.current = requestAnimationFrame(loop);
			return;
		}
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;
		const ctx = canvas.getContext("2d");
		if (ctx) {
			ctx.drawImage(video, 0, 0);
			const text = decodeCanvas(canvas);
			if (text) {
				pushHit(text);
				stop();
				return;
			}
		}
		raf.current = requestAnimationFrame(loop);
	};
	const start = async () => {
		setError(null);
		setResult(null);
		try {
			if (!navigator.mediaDevices?.getUserMedia) throw new Error("no media devices");
			const stream = await navigator.mediaDevices.getUserMedia({
				video: { facingMode: { ideal: "environment" } },
				audio: false
			});
			streamRef.current = stream;
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
				await videoRef.current.play();
			}
			setLive(true);
			raf.current = requestAnimationFrame(loop);
		} catch (err) {
			const name = err instanceof DOMException ? err.name : "";
			setError(!navigator.mediaDevices?.getUserMedia ? w.camNone : name === "NotAllowedError" || name === "SecurityError" ? w.camBlocked : name === "NotFoundError" || name === "OverconstrainedError" ? w.camNone : t.scan.denied);
		}
	};
	const stop = () => {
		cancelAnimationFrame(raf.current);
		streamRef.current?.getTracks().forEach((tr) => tr.stop());
		streamRef.current = null;
		setLive(false);
	};
	const onFile = async (file) => {
		const url = URL.createObjectURL(file);
		try {
			const img = new Image();
			await new Promise((resolve, reject) => {
				img.onload = () => resolve();
				img.onerror = () => reject();
				img.src = url;
			});
			const canvas = canvasRef.current;
			if (!canvas) return;
			canvas.width = img.width;
			canvas.height = img.height;
			canvas.getContext("2d")?.drawImage(img, 0, 0);
			const text = decodeCanvas(canvas);
			if (text) pushHit(text);
			else toast.error(t.scan.empty);
		} finally {
			URL.revokeObjectURL(url);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-xl bg-bg-subtle",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							ref: videoRef,
							className: cn("aspect-[3/4] w-full object-cover sm:aspect-video", !live && "hidden"),
							playsInline: true,
							muted: true
						}),
						!live && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex aspect-[3/4] flex-col items-center justify-center gap-3 text-muted sm:aspect-video",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-6 text-center text-sm",
								children: t.scan.empty
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
							ref: canvasRef,
							className: "hidden"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						onClick: stop,
						children: t.scan.stop
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => void start(),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {}),
							" ",
							t.scan.start
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, {}),
								" ",
								t.scan.gallery,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/*",
									className: "hidden",
									onChange: (e) => {
										const f = e.target.files?.[0];
										if (f) onFile(f);
									}
								})
							]
						})
					})]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-danger",
					children: error
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultCard, { text: result }, result) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: t.scan.result
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: t.scan.empty
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wide text-muted uppercase",
							children: t.scan.history
						}), history.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "text-xs text-muted hover:text-fg",
							onClick: () => {
								setHistory([]);
								saveHistory([], maxHistory);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-1 inline size-3" }), t.scan.clear]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: history.slice(0, 20).map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "w-full truncate rounded-lg px-2 py-2 text-left font-mono text-xs text-muted hover:bg-bg-subtle hover:text-fg",
							onClick: () => setResult(h.text),
							children: h.text
						}) }, h.at))
					}),
					!pro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-subtle",
						children: fmtN(m.historyFree, LIMITS.free.history)
					})
				]
			})]
		})]
	});
}
function ScanMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative size-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 left-0 h-8 w-8 rounded-tl-lg border-t-2 border-l-2 border-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-0 right-0 h-8 w-8 rounded-tr-lg border-t-2 border-r-2 border-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-0 bottom-0 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-primary" })
		]
	});
}
var fmtN = (s, n) => s.replace("{n}", String(n));
function copy(text, done) {
	navigator.clipboard.writeText(text).then(() => toast.success(done));
}
/** Scan result with smart actions and an offline link-safety check. */
function ResultCard({ text }) {
	const { t, m } = useI18n();
	const s = classify(text);
	const warnings = s.kind === "url" ? urlWarnings(s.url) : [];
	const [confirm, setConfirm] = (0, import_react.useState)(false);
	const warnText = {
		short: m.warnShort,
		ip: m.warnIp,
		http: m.warnHttp,
		puny: m.warnPuny,
		at: m.warnAt,
		tld: m.warnTld
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "space-y-3 p-5",
		"data-testid": "scan-result",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: t.scan.result
			}),
			s.kind === "wifi" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-10 shrink-0 place-items-center rounded-xl bg-teal-500/15 text-teal-400",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [m.wifiNetwork, ": "]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: s.wifi.ssid
						})] }),
						s.wifi.password && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "break-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted",
								children: [m.wifiPassword, ": "]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: s.wifi.password
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-subtle",
							children: m.wifiHint
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "break-all font-mono text-sm",
				"data-testid": "scan-text",
				children: s.kind === "vcard" ? s.name ?? text : s.kind === "event" ? s.title ?? text : text
			}),
			s.kind === "url" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-start gap-2 rounded-xl p-2.5 text-xs", warnings.length ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400"),
				children: [warnings.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold",
					children: warnings.length ? m.warnTitle : m.safeLink
				}), warnings.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["• ", warnText[w]] }, w))] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					s.kind === "url" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: warnings.length && !confirm ? "outline" : "default",
						onClick: () => {
							if (warnings.length && !confirm) return setConfirm(true);
							window.open(s.url, "_blank", "noopener,noreferrer");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}),
							" ",
							warnings.length && confirm ? m.openAnyway : t.scan.open
						]
					}),
					s.kind === "wifi" && s.wifi.password && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => copy(s.wifi.password, t.export.copied),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}),
							" ",
							m.copyPassword
						]
					}),
					s.kind === "vcard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => downloadBlob(new Blob([s.raw], { type: "text/vcard" }), "contact.vcf"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, {}),
							" ",
							m.addContact
						]
					}),
					s.kind === "event" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => downloadBlob(new Blob([s.raw], { type: "text/calendar" }), "event.ics"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {}),
							" ",
							m.addEvent
						]
					}),
					s.kind === "tel" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${s.number}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}),
								" ",
								m.call
							]
						})
					}),
					s.kind === "email" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${s.address}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}),
								" ",
								m.sendEmail
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => copy(text, t.export.copied),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}),
							" ",
							t.scan.copy
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Scanner };
