import { o as __toESM } from "../_runtime.mjs";
import { n as TOOL_TEXT, t as TOOL_IDS } from "./video-meta-BEES0Ogr.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as strFromU8, c as zipSync, o as strToU8, s as unzipSync } from "../_libs/@cantoo/pdf-lib+[...].mjs";
import { An as FileOutput, B as Sheet, D as Table2, En as FileText, Hn as Droplet, J as Scissors, Jn as Crop, Ln as Eye, Mr as ArrowLeft, Mt as Minimize2, Nn as FileImage, Qn as Contrast, Rn as EyeOff, Tn as FileType2, Ut as Lock, Wt as LockOpen, X as ScanText, Yt as ListOrdered, Z as ScanLine, an as Image, bt as PenLine, ct as Receipt, jr as ArrowRight, kn as FilePlus2, ln as Hash, mt as Plus, n as X, nt as RotateCw, pr as Camera, pt as Presentation, tn as Layers, ur as Check, xn as Files, y as Trash2 } from "../_libs/lucide-react.mjs";
import { Qn as takeHandOff, er as addRecent } from "./router-Da_pLWIk.mjs";
import { t as RecentFiles } from "./recent-files-_R6NmwgL.mjs";
import { t as COPY } from "./pdf-page-BVph0ujS.mjs";
import { t as SendToPhone } from "./send-to-phone-CKg2hfHo.mjs";
import { a as openPdf, addPageNumbers, compressLight, compressStrong, cropPdf, docWithFonts, extractPages, grayscalePdf, imagesToPdf, invoicePdf, invoiceTotals, isEncryptedError, mergePdfs, money, n as closePdf, o as renderPageToCanvas, pageCount, parseCsv, parseRange, pdfToImages, protectPdf, readXlsx, redactPdf, reorderPages, rotatePdf, s as cleanExtractedText, signPdf, splitGroups, splitInto, splitPdf, tableToPdf, textToPdf, unlockPdf, watermarkPdf } from "./engine-CPnj4rN2.mjs";
import { i as textQuality, n as itemsToLines, t as fixArabicDoc } from "./textLines-7iHQWQgO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pdf-tool-D-B5F2b4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TEMPLATE_LABEL = {
	az: "Hazır şablonlar",
	en: "Ready templates",
	tr: "Hazır şablonlar",
	ar: "قوالب جاهزة",
	ru: "Готовые шаблоны"
};
var DOC_TEMPLATES = [
	{
		id: "ariza",
		label: {
			az: "Ərizə nümunəsi",
			en: "Application letter",
			tr: "Dilekçe örneği",
			ar: "نموذج طلب",
			ru: "Образец заявления"
		},
		title: {
			az: "ƏRİZƏ",
			en: "APPLICATION",
			tr: "DİLEKÇE",
			ar: "طلب",
			ru: "ЗАЯВЛЕНИЕ"
		},
		body: {
			az: "[Təşkilatın adı]\n[Rəhbərin vəzifəsi, adı və soyadı]\n\n[Ünvan] ünvanında yaşayan\n[Adınız, soyadınız, ata adınız]\ntərəfindən\n\nƏRİZƏ\n\nXahiş edirəm, [ərizənin məqsədi: məs. məni 01.11.2026 tarixindən ... vəzifəsinə işə qəbul edəsiniz / mənə ... günlük məzuniyyət verəsiniz].\n\nƏlavə: [sənədlərin siyahısı]\n\nTarix: [gün.ay.il]\nİmza: ____________\n[Adınız, soyadınız]\nTelefon: [nömrə]",
			en: "[Organisation name]\n[Recipient's title and full name]\n\nFrom: [Your full name]\nAddress: [Address]\n\nAPPLICATION\n\nI kindly request [purpose: e.g. to be hired as ... from 1 November 2026 / to be granted ... days of leave].\n\nAttachments: [list of documents]\n\nDate: [dd.mm.yyyy]\nSignature: ____________\n[Your full name]\nPhone: [number]",
			tr: "[Kurumun adı]\n[Yetkilinin unvanı, adı ve soyadı]\n\n[Adres] adresinde ikamet eden\n[Adınız ve soyadınız]\n\nDİLEKÇE\n\n[Dilekçenin konusu: ör. 01.11.2026 tarihinden itibaren ... günlük izin verilmesi] hususunda gereğini saygılarımla arz ederim.\n\nEkler: [belge listesi]\n\nTarih: [gün.ay.yıl]\nİmza: ____________\n[Adınız ve soyadınız]\nTelefon: [numara]",
			ar: "[اسم الجهة]\n[صفة المسؤول واسمه الكامل]\n\nمقدّم من: [اسمك الكامل]\nالعنوان: [العنوان]\n\nطلب\n\nأرجو التكرم بـ [الغرض: مثلاً تعييني في وظيفة ... اعتباراً من 01.11.2026 / منحي إجازة لمدة ... أيام].\n\nالمرفقات: [قائمة الوثائق]\n\nالتاريخ: [يوم.شهر.سنة]\nالتوقيع: ____________\n[اسمك الكامل]\nالهاتف: [الرقم]",
			ru: "[Название организации]\n[Должность и ФИО руководителя]\n\nот [ваше ФИО],\nпроживающего по адресу: [адрес]\n\nЗАЯВЛЕНИЕ\n\nПрошу [цель: напр. принять меня на должность ... с 01.11.2026 / предоставить отпуск на ... дней].\n\nПриложение: [список документов]\n\nДата: [дд.мм.гггг]\nПодпись: ____________\n[ФИО]\nТелефон: [номер]"
		}
	},
	{
		id: "cv",
		label: {
			az: "Sadə CV",
			en: "Simple CV",
			tr: "Basit CV",
			ar: "سيرة ذاتية بسيطة",
			ru: "Простое резюме"
		},
		title: {
			az: "[Adınız Soyadınız] — CV",
			en: "[Your Name] — CV",
			tr: "[Adınız Soyadınız] — CV",
			ar: "[اسمك] — السيرة الذاتية",
			ru: "[Имя Фамилия] — резюме"
		},
		body: {
			az: "Telefon: [nömrə] · E-poçt: [ünvan] · Şəhər: [Bakı]\n\nHAQQIMDA\n[2–3 cümlə: kim olduğunuz, nəyi yaxşı bacardığınız, hansı işi axtardığınız.]\n\nİŞ TƏCRÜBƏSİ\n[Vəzifə] — [Şirkət], [2023 – indi]\n• [Əsas nailiyyət, rəqəmlə]\n• [Gündəlik vəzifə]\n\nTƏHSİL\n[İxtisas] — [Universitet], [2019 – 2023]\n\nBACARIQLAR\n[Excel, Word, satış, müştəri xidməti, ...]\n\nDİLLƏR\nAzərbaycan (ana dili), Rus ([səviyyə]), İngilis ([səviyyə])\n\nSERTİFİKATLAR\n[Ad — il]",
			en: "Phone: [number] · Email: [address] · City: [city]\n\nSUMMARY\n[2–3 sentences: who you are, what you do well, what role you want.]\n\nEXPERIENCE\n[Job title] — [Company], [2023 – present]\n• [Key achievement with a number]\n• [Daily responsibility]\n\nEDUCATION\n[Degree] — [University], [2019 – 2023]\n\nSKILLS\n[Excel, Word, sales, customer service, ...]\n\nLANGUAGES\n[English (native), ...]\n\nCERTIFICATES\n[Name — year]",
			tr: "Telefon: [numara] · E-posta: [adres] · Şehir: [şehir]\n\nHAKKIMDA\n[2–3 cümle: kim olduğunuz, neyi iyi yaptığınız, hangi işi aradığınız.]\n\nİŞ DENEYİMİ\n[Pozisyon] — [Şirket], [2023 – halen]\n• [Sayıyla önemli başarı]\n• [Günlük görev]\n\nEĞİTİM\n[Bölüm] — [Üniversite], [2019 – 2023]\n\nBECERİLER\n[Excel, Word, satış, müşteri hizmetleri, ...]\n\nDİLLER\nTürkçe (ana dil), İngilizce ([seviye])\n\nSERTİFİKALAR\n[Ad — yıl]",
			ar: "الهاتف: [الرقم] · البريد: [العنوان] · المدينة: [المدينة]\n\nنبذة\n[جملتان أو ثلاث: من أنت، ما تتقنه، وأي عمل تبحث عنه.]\n\nالخبرة\n[المسمى الوظيفي] — [الشركة]، [2023 – الآن]\n• [إنجاز رئيسي برقم]\n• [مهمة يومية]\n\nالتعليم\n[التخصص] — [الجامعة]، [2019 – 2023]\n\nالمهارات\n[Excel، Word، المبيعات، خدمة العملاء، ...]\n\nاللغات\nالعربية (الأم)، الإنجليزية ([المستوى])\n\nالشهادات\n[الاسم — السنة]",
			ru: "Телефон: [номер] · Email: [адрес] · Город: [город]\n\nО СЕБЕ\n[2–3 предложения: кто вы, что умеете, какую работу ищете.]\n\nОПЫТ РАБОТЫ\n[Должность] — [Компания], [2023 – н.в.]\n• [Ключевое достижение с цифрой]\n• [Обязанность]\n\nОБРАЗОВАНИЕ\n[Специальность] — [Вуз], [2019 – 2023]\n\nНАВЫКИ\n[Excel, Word, продажи, работа с клиентами, ...]\n\nЯЗЫКИ\nРусский (родной), английский ([уровень])\n\nСЕРТИФИКАТЫ\n[Название — год]"
		}
	},
	{
		id: "izahname",
		label: {
			az: "İzahnamə",
			en: "Explanatory note",
			tr: "Açıklama yazısı",
			ar: "مذكرة توضيحية",
			ru: "Объяснительная"
		},
		title: {
			az: "İZAHNAMƏ",
			en: "EXPLANATORY NOTE",
			tr: "AÇIKLAMA YAZISI",
			ar: "مذكرة توضيحية",
			ru: "ОБЪЯСНИТЕЛЬНАЯ ЗАПИСКА"
		},
		body: {
			az: "[Təşkilatın adı]\n[Rəhbərin vəzifəsi, adı və soyadı]\n\n[Şöbə, vəzifə]\n[Adınız, soyadınız]\ntərəfindən\n\nİZAHNAMƏ\n\n[Tarix] tarixində [nə baş verdi: məs. işə 40 dəqiqə gecikmişəm]. Bunun səbəbi [səbəb: məs. ictimai nəqliyyatda yaranan nasazlıq] olmuşdur.\n\nBaş verənə görə üzr istəyirəm və gələcəkdə təkrarlanmaması üçün [görüləcək tədbir] edəcəyimi bildirirəm.\n\nTarix: [gün.ay.il]\nİmza: ____________",
			en: "[Organisation name]\n[Manager's title and full name]\n\nFrom: [Your full name], [department, position]\n\nEXPLANATORY NOTE\n\nOn [date] [what happened: e.g. I arrived 40 minutes late]. The reason was [reason: e.g. a public transport breakdown].\n\nI apologise and will [measure] so it does not happen again.\n\nDate: [dd.mm.yyyy]\nSignature: ____________",
			tr: "[Kurumun adı]\n[Yöneticinin unvanı, adı ve soyadı]\n\n[Birim, pozisyon]\n[Adınız ve soyadınız]\n\nAÇIKLAMA YAZISI\n\n[Tarih] tarihinde [ne oldu: ör. işe 40 dakika geç kaldım]. Bunun sebebi [sebep] olmuştur.\n\nYaşanan durumdan dolayı özür diler, tekrarlanmaması için [önlem] alacağımı bildiririm.\n\nTarih: [gün.ay.yıl]\nİmza: ____________",
			ar: "[اسم الجهة]\n[صفة المدير واسمه الكامل]\n\nمقدّم من: [اسمك الكامل]، [القسم، الوظيفة]\n\nمذكرة توضيحية\n\nبتاريخ [التاريخ] [ما حدث: مثلاً تأخرت 40 دقيقة عن العمل]. وكان السبب [السبب].\n\nأعتذر عمّا حدث وسأقوم بـ [الإجراء] حتى لا يتكرر.\n\nالتاريخ: [يوم.شهر.سنة]\nالتوقيع: ____________",
			ru: "[Название организации]\n[Должность и ФИО руководителя]\n\nот [ФИО], [отдел, должность]\n\nОБЪЯСНИТЕЛЬНАЯ ЗАПИСКА\n\n[Дата] [что произошло: напр. я опоздал на работу на 40 минут]. Причина: [причина].\n\nПриношу извинения и обязуюсь [мера], чтобы это не повторилось.\n\nДата: [дд.мм.гггг]\nПодпись: ____________"
		}
	},
	{
		id: "qiymet-teklifi",
		label: {
			az: "Qiymət təklifi",
			en: "Price quote",
			tr: "Fiyat teklifi",
			ar: "عرض سعر",
			ru: "Коммерческое предложение"
		},
		title: {
			az: "QİYMƏT TƏKLİFİ № [001]",
			en: "PRICE QUOTE No. [001]",
			tr: "FİYAT TEKLİFİ No. [001]",
			ar: "عرض سعر رقم [001]",
			ru: "КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ № [001]"
		},
		body: {
			az: "Kimdən: [Şirkətin adı], VÖEN [nömrə], [telefon, e-poçt]\nKimə: [Müştərinin adı]\nTarix: [gün.ay.il] · Etibarlıdır: [30 gün]\n\nMəhsul / xidmət — miqdar — vahid qiymət — cəm\n1. [Ad] — [1] — [100 AZN] — [100 AZN]\n2. [Ad] — [2] — [50 AZN] — [100 AZN]\n\nCəmi: [200 AZN]\nƏDV (18%): [36 AZN]\nYekun: [236 AZN]\n\nÇatdırılma müddəti: [5 iş günü]\nÖdəniş şərtləri: [50% avans, 50% təhvildən sonra]\n\nHörmətlə,\n[Adınız, vəzifəniz]\nİmza: ____________",
			en: "From: [Company name], Tax ID [number], [phone, email]\nTo: [Client name]\nDate: [dd.mm.yyyy] · Valid for: [30 days]\n\nItem / service — qty — unit price — total\n1. [Name] — [1] — [100] — [100]\n2. [Name] — [2] — [50] — [100]\n\nSubtotal: [200]\nVAT ([rate]%): [amount]\nTotal: [amount]\n\nDelivery time: [5 business days]\nPayment terms: [50% upfront, 50% on delivery]\n\nKind regards,\n[Your name, title]\nSignature: ____________",
			tr: "Kimden: [Şirket adı], Vergi No [numara], [telefon, e-posta]\nKime: [Müşteri adı]\nTarih: [gün.ay.yıl] · Geçerlilik: [30 gün]\n\nÜrün / hizmet — adet — birim fiyat — toplam\n1. [Ad] — [1] — [100 TL] — [100 TL]\n2. [Ad] — [2] — [50 TL] — [100 TL]\n\nAra toplam: [200 TL]\nKDV (%20): [40 TL]\nGenel toplam: [240 TL]\n\nTeslim süresi: [5 iş günü]\nÖdeme koşulları: [%50 peşin, %50 teslimde]\n\nSaygılarımızla,\n[Adınız, unvanınız]\nİmza: ____________",
			ar: "من: [اسم الشركة]، الرقم الضريبي [الرقم]، [الهاتف، البريد]\nإلى: [اسم العميل]\nالتاريخ: [يوم.شهر.سنة] · صالح لمدة: [30 يوماً]\n\nالمنتج / الخدمة — الكمية — سعر الوحدة — المجموع\n1. [الاسم] — [1] — [100] — [100]\n2. [الاسم] — [2] — [50] — [100]\n\nالمجموع الفرعي: [200]\nالضريبة ([النسبة]%): [المبلغ]\nالإجمالي: [المبلغ]\n\nمدة التسليم: [5 أيام عمل]\nشروط الدفع: [50% مقدماً، 50% عند التسليم]\n\nمع التحية،\n[اسمك، صفتك]\nالتوقيع: ____________",
			ru: "От: [Компания], ИНН [номер], [телефон, email]\nКому: [Клиент]\nДата: [дд.мм.гггг] · Действительно: [30 дней]\n\nТовар / услуга — кол-во — цена — сумма\n1. [Название] — [1] — [100] — [100]\n2. [Название] — [2] — [50] — [100]\n\nИтого: [200]\nНДС ([ставка]%): [сумма]\nВсего к оплате: [сумма]\n\nСрок поставки: [5 рабочих дней]\nУсловия оплаты: [50% предоплата, 50% после поставки]\n\nС уважением,\n[ФИО, должность]\nПодпись: ____________"
		}
	}
];
var btn = "inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--pdf-edge,var(--color-border))] bg-[var(--pdf-glass,transparent)] px-4 py-2 text-sm font-medium text-fg transition duration-200 hover:-translate-y-px hover:bg-[var(--pdf-glass-hi,transparent)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50";
var btnPrimary = "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-[var(--color-brand-2)] px-5 py-2.5 text-sm font-semibold text-primary-fg shadow-[0_10px_24px_-12px_var(--pdf-glow,transparent)] transition duration-200 hover:-translate-y-px hover:brightness-110 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50";
var field = "w-full rounded-xl border border-[var(--pdf-edge,var(--color-border))] bg-bg/60 px-3 py-2 text-sm text-fg outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";
var card = "pdf-surface p-4 md:p-5";
function fmtSize(n) {
	if (n < 1024) return `${n} B`;
	if (n < 1048576) return `${(n / 1024).toFixed(n < 10240 ? 1 : 0)} KB`;
	return `${(n / 1048576).toFixed(1)} MB`;
}
function saveBlob(name, blob) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = name;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 2e3);
}
function Label({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted",
		children
	});
}
function Seg({ value, onChange, options, name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		role: "radiogroup",
		"aria-label": name,
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "radio",
			"aria-checked": value === o.id,
			"data-opt": o.id,
			onClick: () => onChange(o.id),
			className: `rounded-xl border px-3 py-1.5 text-sm transition duration-200 ${value === o.id ? "border-primary bg-primary/20 text-fg shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-primary)_18%,transparent)]" : "border-[var(--pdf-edge,var(--color-border))] bg-[var(--pdf-glass,transparent)] text-muted hover:text-fg"}`,
			children: o.label
		}, o.id))
	});
}
/** Page thumbnails of a PDF (rendered lazily, small). */
function usePageThumbs(bytes, scale = .35, limit = 200) {
	const [thumbs, setThumbs] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let dead = false;
		setThumbs([]);
		if (!bytes) return;
		(async () => {
			const doc = await openPdf(bytes);
			try {
				const n = Math.min(doc.numPages, limit);
				for (let i = 1; i <= n && !dead; i++) {
					const url = (await renderPageToCanvas(doc, i, scale)).toDataURL("image/jpeg", .7);
					if (dead) return;
					setThumbs((t) => [...t, url]);
				}
			} finally {
				await closePdf(doc);
			}
		})().catch(() => void 0);
		return () => {
			dead = true;
		};
	}, [
		bytes,
		scale,
		limit
	]);
	return thumbs;
}
function FileDrop({ accept, multiple, label, hint, onFiles, compact, testId }) {
	const [drag, setDrag] = (0, import_react.useState)(false);
	const input = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onDragOver: (e) => {
			e.preventDefault();
			setDrag(true);
		},
		onDragLeave: () => setDrag(false),
		onDrop: (e) => {
			e.preventDefault();
			setDrag(false);
			onFiles([...e.dataTransfer.files]);
		},
		"data-over": drag,
		className: `pdf-drop flex flex-col items-center justify-center gap-2 text-center ${compact ? "p-4" : "p-8 md:p-12"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: btnPrimary,
				onClick: () => input.current?.click(),
				"data-testid": testId,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted",
				children: hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: input,
				type: "file",
				hidden: true,
				accept,
				multiple,
				"data-testid": testId ? `${testId}-input` : "file-input",
				onChange: (e) => {
					const f = [...e.target.files ?? []];
					e.target.value = "";
					if (f.length) onFiles(f);
				}
			})
		]
	});
}
function PdfCanvas({ canvasSource, className }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const c = ref.current;
		if (!c || !canvasSource) return;
		c.width = canvasSource.width;
		c.height = canvasSource.height;
		c.getContext("2d").drawImage(canvasSource, 0, 0);
	}, [canvasSource]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className
	});
}
/** Scrollable viewer. Pages render when they come into view. */
function PdfViewer({ bytes, zoom, label }) {
	const [doc, setDoc] = (0, import_react.useState)(null);
	const [sizes, setSizes] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let dead = false;
		let current = null;
		(async () => {
			const d = await openPdf(bytes);
			current = d;
			const s = [];
			for (let i = 1; i <= d.numPages; i++) {
				const v = (await d.getPage(i)).getViewport({ scale: 1 });
				s.push({
					w: v.width,
					h: v.height
				});
			}
			if (dead) return;
			setSizes(s);
			setDoc(d);
		})().catch(() => void 0);
		return () => {
			dead = true;
			if (current) closePdf(current);
		};
	}, [bytes]);
	if (!doc) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-xl bg-white/5" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-h-[75vh] space-y-3 overflow-auto rounded-xl bg-black/30 p-3",
		"data-testid": "viewer",
		children: sizes.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViewerPage, {
			doc,
			n: i + 1,
			w: s.w,
			h: s.h,
			zoom,
			label: `${label} ${i + 1}`
		}, i))
	});
}
function ViewerPage({ doc, n, w, h, zoom, label }) {
	const holder = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [src, setSrc] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const el = holder.current;
		if (!el) return;
		const io = new IntersectionObserver((e) => e.some((x) => x.isIntersecting) && setVisible(true), { rootMargin: "400px" });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	const scale = zoom * (typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1);
	(0, import_react.useEffect)(() => {
		if (!visible) return;
		let dead = false;
		renderPageToCanvas(doc, n, scale).then((c) => !dead && setSrc(c)).catch(() => void 0);
		return () => {
			dead = true;
		};
	}, [
		visible,
		doc,
		n,
		scale
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: holder,
		className: "mx-auto bg-white shadow-lg",
		style: {
			width: w * zoom,
			height: h * zoom,
			maxWidth: "none"
		},
		"aria-label": label,
		children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfCanvas, {
			canvasSource: src,
			className: "block h-full w-full"
		}) : null
	});
}
function ResultCard({ out, t, onOpen }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [thumb, setThumb] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let dead = false;
		let url = "";
		if (out.kind === "image") {
			url = URL.createObjectURL(out.blob);
			setThumb(url);
		} else if (out.kind === "pdf") (async () => {
			const bytes = new Uint8Array(await out.blob.arrayBuffer());
			const d = await openPdf(bytes);
			try {
				const c = await renderPageToCanvas(d, 1, .45);
				if (!dead) setThumb(c.toDataURL("image/jpeg", .75));
			} finally {
				await closePdf(d);
			}
		})().catch(() => void 0);
		return () => {
			dead = true;
			if (url) URL.revokeObjectURL(url);
		};
	}, [out]);
	(0, import_react.useEffect)(() => {
		addRecent(out.blob, out.name, "pdf");
	}, [out]);
	const share = (0, import_react.useCallback)(async () => {
		const file = new File([out.blob], out.name, { type: out.blob.type });
		try {
			await navigator.share({
				files: [file],
				title: out.name
			});
		} catch {}
	}, [out]);
	const canShare = typeof navigator !== "undefined" && typeof navigator.canShare === "function" && navigator.canShare({ files: [new File([""], "a.txt", { type: "text/plain" })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pdf-surface flex flex-col gap-3 p-3 sm:flex-row",
		"data-testid": "result",
		"data-kind": out.kind,
		children: [thumb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: thumb,
			alt: "",
			className: "h-28 w-20 shrink-0 rounded-md bg-white object-contain"
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-sm font-semibold",
					title: out.name,
					children: out.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted",
					children: fmtSize(out.blob.size)
				}),
				out.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-xs text-amber-200/90",
					children: out.note
				}) : null,
				out.kind === "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					readOnly: true,
					value: out.text,
					dir: "auto",
					className: `${field} mt-2 h-40 font-mono`,
					"data-testid": "result-text"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btnPrimary,
							onClick: () => saveBlob(out.name, out.blob),
							"data-testid": "download",
							children: t.download
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SendToPhone, {
							blob: out.blob,
							name: out.name,
							className: btn
						}),
						out.kind === "pdf" && onOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: onOpen,
							children: t.open
						}) : null,
						out.extra?.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: () => saveBlob(x.name, x.blob),
							"data-testid": `download-${x.label.toLowerCase()}`,
							children: x.label
						}, x.label)),
						out.kind === "text" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: async () => {
								await navigator.clipboard.writeText(out.text ?? "").catch(() => void 0);
								setCopied(true);
								setTimeout(() => setCopied(false), 1500);
							},
							children: copied ? t.copied : t.copy
						}) : null,
						canShare ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: share,
							children: t.share
						}) : null
					]
				})
			]
		})]
	});
}
function toGray(c) {
	const w = c.width, h = c.height;
	const px = c.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, w, h).data;
	const d = new Uint8ClampedArray(w * h);
	for (let i = 0, j = 0; i < d.length; i++, j += 4) d[i] = (px[j] * 299 + px[j + 1] * 587 + px[j + 2] * 114) / 1e3;
	return {
		w,
		h,
		d
	};
}
function fromGray(g) {
	const c = document.createElement("canvas");
	c.width = g.w;
	c.height = g.h;
	const ctx = c.getContext("2d");
	const img = ctx.createImageData(g.w, g.h);
	for (let i = 0, j = 0; i < g.d.length; i++, j += 4) {
		img.data[j] = img.data[j + 1] = img.data[j + 2] = g.d[i];
		img.data[j + 3] = 255;
	}
	ctx.putImageData(img, 0, 0);
	return c;
}
/** Box blur through an integral image. */
function boxBlur(g, r) {
	const { w, h, d } = g;
	const W = w + 1;
	const I = new Float64Array(W * (h + 1));
	for (let y = 0; y < h; y++) {
		let row = 0;
		for (let x = 0; x < w; x++) {
			row += d[y * w + x];
			I[(y + 1) * W + x + 1] = I[y * W + x + 1] + row;
		}
	}
	const out = new Float32Array(w * h);
	for (let y = 0; y < h; y++) {
		const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1);
		for (let x = 0; x < w; x++) {
			const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1);
			out[y * w + x] = (I[y1 * W + x1] - I[y0 * W + x1] - I[y1 * W + x0] + I[y0 * W + x0]) / ((x1 - x0) * (y1 - y0));
		}
	}
	return out;
}
/** Divide by the local background: removes shadows, gradients and tinted paper; then stretches contrast. */
function flatten(g) {
	const r = Math.max(12, Math.round(Math.min(g.w, g.h) / 18));
	const m = boxBlur(g, r);
	const lifted = {
		w: g.w,
		h: g.h,
		d: new Uint8ClampedArray(g.d.length)
	};
	for (let i = 0; i < g.d.length; i++) lifted.d[i] = g.d[i] < m[i] * .85 ? m[i] : g.d[i];
	const bg = boxBlur(lifted, r);
	const out = {
		w: g.w,
		h: g.h,
		d: new Uint8ClampedArray(g.d.length)
	};
	const hist = /* @__PURE__ */ new Uint32Array(256);
	for (let i = 0; i < g.d.length; i++) {
		const v = Math.min(255, g.d[i] / Math.max(1, bg[i]) * 245);
		out.d[i] = v;
		hist[v | 0]++;
	}
	const total = g.d.length;
	let lo = 0, hi = 255, acc = 0;
	for (let i = 0; i < 256; i++) {
		acc += hist[i];
		if (acc > total * .005) {
			lo = i;
			break;
		}
	}
	acc = 0;
	for (let i = 255; i >= 0; i--) {
		acc += hist[i];
		if (acc > total * .2) {
			hi = i;
			break;
		}
	}
	if (hi - lo > 30) {
		const k = 255 / (hi - lo);
		for (let i = 0; i < out.d.length; i++) out.d[i] = Math.max(0, Math.min(255, (out.d[i] - lo) * k));
	}
	return out;
}
/** 3×3 median: kills salt-and-pepper and sensor noise while keeping stroke edges. */
function median3(g) {
	const { w, h, d } = g;
	const o = new Uint8ClampedArray(d.length);
	const v = new Array(9);
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
		let n = 0;
		for (let dy = -1; dy <= 1; dy++) {
			const yy = Math.min(h - 1, Math.max(0, y + dy));
			for (let dx = -1; dx <= 1; dx++) v[n++] = d[yy * w + Math.min(w - 1, Math.max(0, x + dx))];
		}
		for (let i = 1; i < 9; i++) {
			const t = v[i];
			let j = i - 1;
			while (j >= 0 && v[j] > t) {
				v[j + 1] = v[j];
				j--;
			}
			v[j + 1] = t;
		}
		o[y * w + x] = v[4];
	}
	return {
		w,
		h,
		d: o
	};
}
function otsu(g) {
	const hist = /* @__PURE__ */ new Uint32Array(256);
	for (let i = 0; i < g.d.length; i++) hist[g.d[i]]++;
	const total = g.d.length;
	let sum = 0;
	for (let i = 0; i < 256; i++) sum += i * hist[i];
	let wB = 0, sB = 0, best = 0, thr = 128;
	for (let t = 0; t < 256; t++) {
		wB += hist[t];
		if (!wB) continue;
		const wF = total - wB;
		if (!wF) break;
		sB += t * hist[t];
		const mB = sB / wB, mF = (sum - sB) / wF;
		const v = wB * wF * (mB - mF) ** 2;
		if (v >= best && v > 0) {
			best = v;
			thr = t;
		}
	}
	return thr;
}
/** Sauvola adaptive threshold (handles uneven light better than a global threshold). */
function sauvola(g, win, k = .2) {
	const { w, h, d } = g;
	const r = Math.max(3, win >> 1);
	const W = w + 1;
	const S = new Float64Array(W * (h + 1)), Q = new Float64Array(W * (h + 1));
	for (let y = 0; y < h; y++) {
		let rs = 0, rq = 0;
		for (let x = 0; x < w; x++) {
			const v = d[y * w + x];
			rs += v;
			rq += v * v;
			S[(y + 1) * W + x + 1] = S[y * W + x + 1] + rs;
			Q[(y + 1) * W + x + 1] = Q[y * W + x + 1] + rq;
		}
	}
	const o = new Uint8ClampedArray(d.length);
	for (let y = 0; y < h; y++) {
		const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1);
		for (let x = 0; x < w; x++) {
			const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1);
			const n = (x1 - x0) * (y1 - y0);
			const s = S[y1 * W + x1] - S[y0 * W + x1] - S[y1 * W + x0] + S[y0 * W + x0];
			const q = Q[y1 * W + x1] - Q[y0 * W + x1] - Q[y1 * W + x0] + Q[y0 * W + x0];
			const mean = s / n, sd = Math.sqrt(Math.max(0, q / n - mean * mean));
			o[y * w + x] = d[y * w + x] > mean * (1 + k * (sd / 128 - 1)) ? 255 : 0;
		}
	}
	return {
		w,
		h,
		d: o
	};
}
/** Text-line bands from the horizontal ink profile (diacritic dots stay attached to their line). */
function lineBands(g, thr) {
	const { w, h, d } = g;
	const row = new Uint32Array(h);
	for (let y = 0; y < h; y++) {
		let n = 0;
		for (let x = 0; x < w; x++) if (d[y * w + x] < thr) n++;
		row[y] = n;
	}
	const min = Math.max(2, w * .002);
	let raw = [];
	for (let y = 0; y < h;) if (row[y] > min) {
		let e = y;
		while (e < h && row[e] > min) e++;
		raw.push({
			y0: y,
			y1: e
		});
		y = e;
	} else y++;
	if (!raw.length) return [];
	const heights = raw.map((b) => b.y1 - b.y0).sort((a, b) => a - b);
	const med = heights[heights.length >> 1];
	const merged = [];
	for (const b of raw) {
		const last = merged[merged.length - 1];
		const hb = b.y1 - b.y0;
		if (last && (b.y0 - last.y1 < med * .18 || hb < med * .35 && b.y0 - last.y1 < med * .6 || last.y1 - last.y0 < med * .35 && b.y0 - last.y1 < med * .6)) last.y1 = b.y1;
		else merged.push({ ...b });
	}
	return merged.filter((b) => b.y1 - b.y0 >= med * .3);
}
function medianBandHeight(bands) {
	if (!bands.length) return 0;
	const hs = bands.map((b) => b.y1 - b.y0).sort((a, b) => a - b);
	return hs[hs.length >> 1];
}
/** Photo of a sheet on a darker surface: find the paper rectangle (null when the image already is a plain page). */
function paperBox(g) {
	const { w, h, d } = g;
	const thr = otsu(g);
	let bs = 0, bn = 0;
	const edge = (x, y) => {
		bs += d[y * w + x];
		bn++;
	};
	for (let x = 0; x < w; x += 4) {
		edge(x, 0);
		edge(x, h - 1);
	}
	for (let y = 0; y < h; y += 4) {
		edge(0, y);
		edge(w - 1, y);
	}
	if (bs / bn > thr * .8) return null;
	const rows = new Float32Array(h), cols = new Float32Array(w);
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[y * w + x] > thr) {
		rows[y]++;
		cols[x]++;
	}
	const find = (a, n, full) => {
		let s = 0, e = n - 1;
		while (s < n && a[s] < full * .45) s++;
		while (e > s && a[e] < full * .45) e--;
		return [s, e];
	};
	const [y0, y1] = find(rows, h, w);
	const [x0, x1] = find(cols, w, h);
	const bw = x1 - x0, bh = y1 - y0;
	if (bw < w * .25 || bh < h * .1 || bw > w * .96 && bh > h * .96) return null;
	const m = Math.round(Math.min(bw, bh) * .02);
	return {
		x: x0 + m,
		y: y0 + m,
		w: bw - 2 * m,
		h: bh - 2 * m
	};
}
var OCR_LANGS = [
	{
		id: "eng",
		label: "English"
	},
	{
		id: "aze",
		label: "Azərbaycan"
	},
	{
		id: "tur",
		label: "Türkçe"
	},
	{
		id: "rus",
		label: "Русский"
	},
	{
		id: "ara",
		label: "العربية"
	}
];
var ocrLangForSite = (lang) => ({
	az: "aze",
	en: "eng",
	tr: "tur",
	ar: "ara",
	ru: "rus"
})[lang];
var BASE = "/pdf-assets/ocr";
var DEFAULT_CONFIG = {
	pre: "flat",
	denoise: true,
	mode: "auto",
	target: 64,
	psm: 3,
	best: false
};
function rotateCanvas(c, deg) {
	const rot = document.createElement("canvas");
	rot.width = c.width;
	rot.height = c.height;
	const r = rot.getContext("2d");
	r.fillStyle = "#fff";
	r.fillRect(0, 0, c.width, c.height);
	r.translate(c.width / 2, c.height / 2);
	r.rotate(-deg * Math.PI / 180);
	r.drawImage(c, -c.width / 2, -c.height / 2);
	return rot;
}
/** Prepare a page/photo for OCR: flatten light, denoise, deskew, normalize text size, optional adaptive binarization. */
function preprocessForOcr(src, deskew = true, cfg = {}) {
	const o = {
		...DEFAULT_CONFIG,
		...cfg
	};
	if (o.pre === "legacy") return legacyPreprocess(src, deskew);
	let g = toGray(src);
	const box = paperBox(g);
	if (box) {
		src = crop(src, box.x, box.y, box.w, box.h);
		g = toGray(src);
	}
	let c = src;
	if (deskew) {
		const ang = estimateSkew(c);
		if (Math.abs(ang) >= .3) {
			c = rotateCanvas(c, ang);
			g = toGray(c);
		}
	}
	const H = medianBandHeight(lineBands(flatten(g), otsu(flatten(g))));
	let k = H > 6 ? o.target / H : 1;
	k = Math.max(.5, Math.min(4, k));
	k = Math.min(k, Math.sqrt(22e6 / (g.w * g.h)), 4600 / Math.max(g.w, g.h));
	if (Math.abs(k - 1) > .06) {
		const s = document.createElement("canvas");
		s.width = Math.max(1, Math.round(g.w * k));
		s.height = Math.max(1, Math.round(g.h * k));
		const sc = s.getContext("2d");
		sc.imageSmoothingQuality = "high";
		sc.drawImage(c, 0, 0, s.width, s.height);
		c = s;
		g = toGray(c);
	}
	g = flatten(g);
	if (o.denoise && g.w * g.h < 12e6) g = median3(g);
	c = fromGray(g);
	if (o.pre === "sauvola") {
		const hh = Math.max(20, Math.round(H * k));
		const win = Math.round(hh * .9) | 1;
		return fromGray(sauvola(g, win, .2));
	}
	return c;
}
function legacyPreprocess(src, deskew = true) {
	const w = src.width;
	const h = src.height;
	const img = src.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, w, h);
	const d = img.data;
	const hist = /* @__PURE__ */ new Uint32Array(256);
	for (let i = 0; i < d.length; i += 4) {
		const g = (d[i] * 299 + d[i + 1] * 587 + d[i + 2] * 114) / 1e3;
		d[i] = d[i + 1] = d[i + 2] = g;
		hist[g | 0]++;
	}
	const total = w * h;
	let lo = 0, hi = 255, acc = 0;
	for (let i = 0; i < 256; i++) {
		acc += hist[i];
		if (acc > total * .01) {
			lo = i;
			break;
		}
	}
	acc = 0;
	for (let i = 255; i >= 0; i--) {
		acc += hist[i];
		if (acc > total * .01) {
			hi = i;
			break;
		}
	}
	if (hi - lo > 20) {
		const k = 255 / (hi - lo);
		for (let i = 0; i < d.length; i += 4) {
			const v = Math.max(0, Math.min(255, (d[i] - lo) * k));
			d[i] = d[i + 1] = d[i + 2] = v;
		}
	}
	const out = document.createElement("canvas");
	out.width = w;
	out.height = h;
	out.getContext("2d").putImageData(img, 0, 0);
	if (!deskew) return out;
	const angle = estimateSkew(out);
	return Math.abs(angle) < .3 ? out : rotateCanvas(out, angle);
}
/** Skew angle in degrees (positive = text runs clockwise down), via projection-profile variance. */
function estimateSkew(c) {
	const scale = Math.min(1, 700 / c.width);
	const w = Math.max(1, Math.round(c.width * scale));
	const h = Math.max(1, Math.round(c.height * scale));
	const t = document.createElement("canvas");
	t.width = w;
	t.height = h;
	t.getContext("2d").drawImage(c, 0, 0, w, h);
	const d = t.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, w, h).data;
	let sum = 0;
	for (let i = 0; i < d.length; i += 4) sum += d[i];
	const thr = sum / (d.length / 4) * .8;
	const xs = [];
	const ys = [];
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[(y * w + x) * 4] < thr) {
		xs.push(x - w / 2);
		ys.push(y - h / 2);
	}
	if (xs.length < 200) return 0;
	const score = (deg) => {
		const r = deg * Math.PI / 180;
		const sin = Math.sin(r), cos = Math.cos(r);
		const bins = new Float64Array(h * 2 + 4);
		for (let i = 0; i < xs.length; i++) bins[Math.round(ys[i] * cos - xs[i] * sin + h)]++;
		let v = 0;
		for (let i = 1; i < bins.length; i++) v += (bins[i] - bins[i - 1]) ** 2;
		return v;
	};
	let best = 0, bs = -1;
	for (let a = -6; a <= 6; a += .5) {
		const sc = score(a);
		if (sc > bs) {
			bs = sc;
			best = a;
		}
	}
	for (let a = best - .5; a <= best + .5; a += .1) {
		const sc = score(a);
		if (sc > bs) {
			bs = sc;
			best = a;
		}
	}
	return best;
}
var langDir = (langs, best) => `${BASE}/${best && langs.includes("ara") ? "best" : "lang"}`;
async function makeWorker(langs, best, logger) {
	const { createWorker } = await import("../_libs/tesseract.js.mjs").then((n) => /* @__PURE__ */ __toESM(n.t()));
	return await createWorker(langs, 1, {
		workerPath: `${location.origin}${BASE}/worker.min.js`,
		corePath: `${location.origin}${BASE}/core.wasm.js`,
		langPath: `${location.origin}${langDir(langs, best)}`,
		workerBlobURL: false,
		gzip: true,
		...logger ? { logger } : {}
	});
}
/** True when a page has (almost) no dark pixels at all, e.g. an empty scan. */
function isBlank(c) {
	const g = toGray(c);
	let dark = 0;
	for (let i = 0; i < g.d.length; i += 3) if (g.d[i] < 120) dark++;
	return dark < g.d.length * 4e-4;
}
/** Choose OCR languages: read a sample with each script family and keep the one the engine is most sure about. */
async function detectOcrLangs(sample, fallback) {
	if (isBlank(sample)) return fallback === "eng" ? ["eng"] : [fallback, "eng"];
	const top = Math.min(sample.height, Math.max(220, Math.round(sample.height * .7)));
	const part = crop(sample, 0, 0, sample.width, top);
	const cands = [
		["ara"],
		[
			"aze",
			"tur",
			"eng"
		],
		["rus", "eng"]
	];
	const worker = await makeWorker(cands[0], false);
	let best = null;
	let ara = {
		letters: 0,
		conf: 0,
		share: 0
	};
	let latConf = 0;
	try {
		for (let i = 0; i < cands.length; i++) {
			const c = cands[i];
			if (i > 0) await worker.reinitialize(c.join("+"));
			await worker.setParameters({
				tessedit_pageseg_mode: "3",
				user_defined_dpi: "300"
			});
			let r = await worker.recognize(part);
			if ((r.data.text.match(/\p{L}/gu) || []).length < 8) {
				await worker.setParameters({ tessedit_pageseg_mode: "6" });
				r = await worker.recognize(part);
			}
			const letters = (r.data.text.match(/\p{L}/gu) || []).length;
			const flat = r.data.text.replace(/\s+/g, "");
			const clean = flat.length ? (flat.match(/[\p{L}\p{N}.,;:!?'"()-]/gu) || []).length / flat.length : 0;
			const arShare = (r.data.text.match(/[\u0621-\u064A]/g) || []).length / Math.max(1, letters);
			const conf = letters < 8 || i > 0 && clean < .88 || i === 0 && arShare < .5 ? 0 : r.data.confidence;
			if (i === 0) ara = {
				letters: (r.data.text.match(/[\u0621-\u064A]/g) || []).length,
				conf: r.data.confidence,
				share: arShare
			};
			if (i === 1) latConf = r.data.confidence;
			if (!best || conf > best.conf) best = {
				langs: c,
				conf,
				text: r.data.text
			};
			if (i <= 1 && conf >= (i === 0 ? 78 : 80)) break;
		}
	} finally {
		await worker.terminate();
	}
	if (best && best.langs[0] !== "ara" && ara.letters >= 12 && (ara.conf >= 35 && ara.share >= .6 && ara.letters >= 25 && ara.conf >= latConf - 10 || ara.share >= .8 && ara.letters >= 30 && best.conf < 70)) return ["ara"];
	if (!best || best.conf === 0) return fallback === "eng" ? ["eng"] : [fallback, "eng"];
	if (best.langs[0] !== "aze") return best.langs[0] === "ara" ? ["ara"] : best.langs;
	const t = best.text;
	if (/[əƏ]/.test(t)) return ["aze", "eng"];
	if ((t.match(/[ğĞıİşŞ]/g) || []).length >= 1) return ["tur", "eng"];
	return ["eng"];
}
var dehyphenate = (t) => t.replace(/(\p{L}{2})[-\u00AD]\n(\p{Ll})/gu, "$1$2");
function crop(c, x, y, w, h, scale = 1) {
	const o = document.createElement("canvas");
	o.width = Math.max(1, Math.round(w * scale));
	o.height = Math.max(1, Math.round(h * scale));
	const cx = o.getContext("2d");
	cx.fillStyle = "#fff";
	cx.fillRect(0, 0, o.width, o.height);
	cx.drawImage(c, x, y, w, h, 0, 0, o.width, o.height);
	return o;
}
/** Split a multi-column page image into reading-order blocks (full-width bands stay whole). Returns null for single-column pages. */
function splitColumns(c, rtl) {
	const k = Math.min(1, 900 / c.width);
	const w = Math.round(c.width * k), h = Math.round(c.height * k);
	const t = document.createElement("canvas");
	t.width = w;
	t.height = h;
	t.getContext("2d").drawImage(c, 0, 0, w, h);
	const d = t.getContext("2d", { willReadFrequently: true }).getImageData(0, 0, w, h).data;
	const ink = (x, y) => d[(y * w + x) * 4] < 140;
	const col = new Uint32Array(w);
	const row = new Uint32Array(h);
	let total = 0;
	for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (ink(x, y)) {
		col[x]++;
		row[y]++;
		total++;
	}
	if (total < 500) return null;
	let top = 0, bottom = h - 1;
	while (top < h && row[top] <= 3) top++;
	while (bottom > top && row[bottom] <= 3) bottom--;
	const contentH = bottom - top + 1;
	if (contentH < h * .08) return null;
	let nLines = 0;
	for (let y = top; y <= bottom;) if (row[y] > 3) {
		nLines++;
		let e = y;
		while (e <= bottom && row[e] > 3) e++;
		y = e;
	} else y++;
	if (nLines < 8) return null;
	const lim = Math.max(3, contentH * .04);
	let best = null;
	for (let x = Math.floor(w * .2); x < w * .8;) if (col[x] <= lim) {
		let e = x;
		while (e < w * .8 && col[e] <= lim) e++;
		if (e - x >= w * .02 && e - x <= w * .15 && (!best || e - x > best[1] - best[0])) best = [x, e];
		x = e;
	} else x++;
	if (!best) return null;
	const [g0, g1] = best;
	let left = 0, right = 0;
	for (let x = 0; x < g0; x++) left += col[x];
	for (let x = g1; x < w; x++) right += col[x];
	if (left < total * .15 || right < total * .15) return null;
	const gw = g1 - g0;
	const cross = new Uint8Array(h);
	for (let y = 0; y < h; y++) {
		let n = 0;
		for (let x = g0; x < g1; x++) if (ink(x, y)) n++;
		cross[y] = n >= Math.max(2, gw * .1) ? 1 : 0;
	}
	const ivs = [];
	for (let y = 0; y < h;) if (cross[y]) {
		let e = y, gap = 0;
		while (e < h && gap < 10) {
			if (cross[e]) gap = 0;
			else gap++;
			e++;
		}
		const end = e - gap;
		if (end - y >= 5) ivs.push([y, end]);
		y = e;
	} else y++;
	let colRows = contentH;
	for (const [a0, a1] of ivs) colRows -= a1 - a0;
	if (colRows < contentH * .3) return null;
	const bands = [];
	let cursor = 0;
	for (const [a0, a1] of ivs) {
		if (a0 > cursor) bands.push({
			y0: cursor,
			y1: a0,
			full: false
		});
		bands.push({
			y0: a0,
			y1: a1,
			full: true
		});
		cursor = a1;
	}
	if (cursor < h) bands.push({
		y0: cursor,
		y1: h,
		full: false
	});
	const inkRows = (b) => {
		let n = 0;
		for (let y = b.y0; y < b.y1; y++) n += row[y];
		return n;
	};
	const live = bands.filter((b) => b.full || inkRows(b) > 40);
	bands.length = 0;
	bands.push(...live);
	if (!bands.some((b) => !b.full)) return null;
	const out = [];
	const pad = 6;
	bands.forEach((b, i) => {
		const top = i === 0 ? b.y0 : (bands[i - 1].y1 + b.y0) / 2;
		const bot = i === bands.length - 1 ? b.y1 : (b.y1 + bands[i + 1].y0) / 2;
		const Y = top / k, H = (bot - top) / k;
		if (b.full) out.push({
			img: crop(c, 0, Y, c.width, H),
			join: "\n\n"
		});
		else {
			const mid = (g0 + g1) / 2 / k;
			const L = crop(c, 0, Y, mid + pad, H);
			const R = crop(c, mid - pad, Y, c.width - mid + pad, H);
			if (rtl) out.push({
				img: R,
				join: "\n"
			}, {
				img: L,
				join: "\n\n"
			});
			else out.push({
				img: L,
				join: "\n"
			}, {
				img: R,
				join: "\n\n"
			});
		}
	});
	return out;
}
/** Every text line on its own (single-line mode): keeps large titles, and stops stray layout guesses from dropping or merging lines. */
function binarize(c) {
	const g = toGray(c);
	const H = medianBandHeight(lineBands(g, otsu(g))) || 40;
	return fromGray(sauvola(g, Math.round(H * .9) | 1, .2));
}
async function recognizeLines(worker, img, tick) {
	const g = toGray(img);
	const bands = lineBands(g, otsu(g));
	if (!bands.length) return {
		text: "",
		conf: 0,
		weight: 0
	};
	const H = medianBandHeight(bands);
	const pad = Math.round(H * .35);
	await worker.setParameters({ tessedit_pageseg_mode: "7" });
	const lines = [];
	let cw = 0, ct = 0, prevEnd = -1;
	for (let i = 0; i < bands.length; i++) {
		const b = bands[i];
		const c = crop(img, 0, b.y0 - pad, img.width, b.y1 - b.y0 + pad * 2);
		let r = await worker.recognize(c);
		tick((i + 1) / bands.length);
		let tx = r.data.text.replace(/\s+/g, " ").trim();
		if (!tx || r.data.confidence < 45) {
			for (const [sc, psm] of [
				[.7, "7"],
				[1.4, "7"],
				[1, "13"],
				[.5, "7"]
			]) {
				await worker.setParameters({ tessedit_pageseg_mode: psm });
				const v = sc === 1 ? c : crop(c, 0, 0, c.width, c.height, sc);
				const r2 = await worker.recognize(v);
				const t2 = r2.data.text.replace(/\s+/g, " ").trim();
				if (t2 && (!tx || r2.data.confidence > r.data.confidence)) {
					r = r2;
					tx = t2;
				}
				if (tx && r.data.confidence >= 60) break;
			}
			await worker.setParameters({ tessedit_pageseg_mode: "7" });
		}
		if (!tx) continue;
		if (prevEnd >= 0 && b.y0 - prevEnd > H * 1.1) lines.push("");
		lines.push(tx);
		prevEnd = b.y1;
		cw += r.data.confidence * tx.length;
		ct += tx.length;
	}
	return {
		text: lines.join("\n"),
		conf: ct ? cw / ct : 0,
		weight: ct
	};
}
async function recognizeBlocks(worker, img, rtl, cfg, tick) {
	const parts = splitColumns(img, rtl) ?? [{
		img,
		join: "\n\n"
	}];
	let text = "";
	let cw = 0, ct = 0;
	for (let j = 0; j < parts.length; j++) {
		let tx, conf;
		if (cfg.mode === "lines") {
			const r = await recognizeLines(worker, parts[j].img, (f) => tick((j + f) / parts.length));
			tx = r.text;
			conf = r.conf;
		} else {
			await worker.setParameters({ tessedit_pageseg_mode: String(cfg.psm) });
			const r = await worker.recognize(parts[j].img);
			tick((j + 1) / parts.length);
			tx = r.data.text.trim();
			conf = r.data.confidence;
		}
		tx = tx.trim();
		if (tx) {
			text += (text ? parts[j - 1]?.join ?? "\n" : "") + tx;
			cw += conf * tx.length;
			ct += tx.length;
		}
	}
	return {
		text,
		conf: ct ? cw / ct : 0,
		weight: ct
	};
}
async function ocrDetailed(sources, langs, opts = {}) {
	const cfg = {
		...DEFAULT_CONFIG,
		...opts.config
	};
	let current = 0;
	let frac = 0;
	const worker = await makeWorker(langs, cfg.best);
	await worker.setParameters({
		preserve_interword_spaces: "1",
		user_defined_dpi: "300"
	});
	const out = [];
	const rtl = langs[0] === "ara";
	try {
		for (let i = 0; i < sources.length; i++) {
			if (opts.shouldCancel?.()) break;
			current = i;
			opts.onProgress?.(i, sources.length, 0);
			const s = sources[i];
			const src = typeof s === "function" ? await s() : s;
			const tick = (f) => {
				frac = f;
				opts.onProgress?.(current, sources.length, frac);
			};
			const score = (r) => r.weight * Math.max(0, r.conf - 40) / 60;
			let r;
			let mode = cfg.mode;
			if (src instanceof HTMLCanvasElement && isBlank(src)) r = {
				text: "",
				conf: 0,
				weight: 0
			};
			else if (!(src instanceof HTMLCanvasElement)) {
				await worker.setParameters({ tessedit_pageseg_mode: String(cfg.psm) });
				const x = await worker.recognize(src);
				r = {
					text: x.data.text,
					conf: x.data.confidence,
					weight: x.data.text.length
				};
			} else if (cfg.mode === "auto") {
				const tries = [];
				const run = async (img, m, f0, f1) => {
					const rr = await recognizeBlocks(worker, img, rtl, {
						...cfg,
						mode: m
					}, (f) => tick(f0 + f * (f1 - f0)));
					tries.push({
						r: rr,
						mode: m + (img === src ? "" : "+bin"),
						img
					});
				};
				await run(src, "page", 0, .3);
				await run(src, "lines", .3, .6);
				let top = tries.reduce((a, b) => score(b.r) > score(a.r) ? b : a);
				if (top.r.conf < 72) {
					const bin = binarize(src);
					await run(bin, "page", .6, .8);
					await run(bin, "lines", .8, .95);
					top = tries.reduce((a, b) => score(b.r) > score(a.r) ? b : a);
				}
				if (rtl && !langs.includes("eng") && /[A-Za-z@]{2,}|\d[\d\s.,:/-]{3,}|[©»«*#<>{}\[\]]\S*[A-Za-z0-9]/.test(top.r.text)) {
					await worker.reinitialize(`${langs.join("+")}+eng`);
					await worker.setParameters({
						preserve_interword_spaces: "1",
						user_defined_dpi: "300"
					});
					const m2 = top.mode.startsWith("lines") ? "lines" : "page";
					const rr = await recognizeBlocks(worker, top.img, rtl, {
						...cfg,
						mode: m2
					}, () => {});
					await worker.reinitialize(langs.join("+"));
					await worker.setParameters({
						preserve_interword_spaces: "1",
						user_defined_dpi: "300"
					});
					if (score(rr) > score(top.r) * 1.02) top = {
						r: rr,
						mode: top.mode + "+eng",
						img: top.img
					};
				}
				r = top.r;
				mode = top.mode;
			} else r = await recognizeBlocks(worker, src, rtl, cfg, tick);
			out.push({
				text: dehyphenate(cleanExtractedText(r.text)),
				confidence: Math.round(r.conf),
				mode
			});
		}
	} finally {
		await worker.terminate();
	}
	return out;
}
var AR = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
var AR_G = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/g;
var PRES = /[\uFB50-\uFDFF\uFE70-\uFEFF]/;
var median = (a) => {
	if (!a.length) return 0;
	const s = [...a].sort((x, y) => x - y);
	return s[Math.floor(s.length / 2)];
};
function toBoxes(items) {
	const out = [];
	for (const it of items) {
		if (typeof it.str !== "string" || !it.str.trim()) continue;
		const [a, b, , , e, f] = it.transform;
		const size = Math.hypot(a, b) || it.height || 10;
		if (Math.abs(b) > Math.abs(a) * .5) continue;
		out.push({
			str: it.str,
			x: e,
			y: f,
			w: it.width,
			h: it.height || size,
			size
		});
	}
	return out;
}
function lineText(boxes, rtl, size) {
	const ord = [...boxes].sort((a, b) => rtl ? b.x + b.w - (a.x + a.w) : a.x - b.x);
	let out = "";
	let prevEdge = null;
	for (const b of ord) {
		const gap = prevEdge === null ? 0 : rtl ? prevEdge - (b.x + b.w) : b.x - prevEdge;
		const s = b.str;
		if (out && gap > size * .22 && !/\s$/.test(out) && !/^\s/.test(s)) out += " ";
		out += s;
		prevEdge = rtl ? b.x : b.x + b.w;
	}
	return out;
}
/** Line stored glyph by glyph in visual (left-to-right) order: read it right to left. Items holding plain letters are already logical. */
function visualLine(boxes, size) {
	const ord = [...boxes].sort((a, b) => a.x - b.x);
	const tokens = [];
	let prevEdge = null;
	for (const b of ord) {
		if (prevEdge !== null && b.x - prevEdge > size * .22 && !/\s$/.test(tokens[tokens.length - 1] ?? "") && !/^\s/.test(b.str)) tokens.push(" ");
		tokens.push(PRES.test(b.str) ? [...b.str].reverse().join("") : b.str);
		prevEdge = b.x + b.w;
	}
	return tokens.reverse().join("");
}
function buildLines(boxes, rtlMode) {
	const sorted = [...boxes].sort((a, b) => b.y - a.y || a.x - b.x);
	const lines = [];
	for (const b of sorted) {
		const l = lines.find((ln) => Math.abs(ln.y - b.y) < Math.min(ln.size, b.size) * .45);
		if (l) {
			l.boxes.push(b);
			l.size = Math.max(l.size, b.size);
		} else lines.push({
			y: b.y,
			size: b.size,
			boxes: [b]
		});
	}
	return lines.map((l) => {
		const text0 = l.boxes.map((b) => b.str).join("");
		const arN = (text0.match(AR_G) || []).length;
		const letters = (text0.match(/\p{L}/gu) || []).length || 1;
		const rtl = rtlMode === "auto" || rtlMode === void 0 ? arN / letters > .4 : !!rtlMode;
		let text = lineText(l.boxes, rtl, l.size);
		const presN = (text.match(/[\uFB50-\uFDFF\uFE70-\uFEFF]/g) || []).length;
		if (rtl && presN > arN * .5) text = visualLine(l.boxes, l.size).normalize("NFKC");
		return {
			y: l.y,
			size: l.size,
			boxes: l.boxes,
			x0: Math.min(...l.boxes.map((b) => b.x)),
			x1: Math.max(...l.boxes.map((b) => b.x + b.w)),
			rtl,
			text
		};
	});
}
/** Cells of a line: runs of boxes separated by large horizontal gaps. */
function segments(line) {
	const ord = [...line.boxes].sort((a, b) => a.x - b.x);
	const segs = [];
	for (const b of ord) {
		const last = segs[segs.length - 1];
		if (last && b.x - last.x1 < line.size * 1.6) {
			last.boxes.push(b);
			last.x1 = Math.max(last.x1, b.x + b.w);
		} else segs.push({
			x0: b.x,
			x1: b.x + b.w,
			boxes: [b]
		});
	}
	return segs.map((s) => ({
		x0: s.x0,
		x1: s.x1,
		text: lineText(s.boxes, line.rtl, line.size)
	}));
}
function mkLine(boxes, rtl) {
	const size = Math.max(...boxes.map((b) => b.size));
	return {
		y: boxes[0].y,
		size,
		boxes,
		x0: Math.min(...boxes.map((b) => b.x)),
		x1: Math.max(...boxes.map((b) => b.x + b.w)),
		rtl,
		text: lineText(boxes, rtl, size)
	};
}
/** Rows of consistent short cells -> table (text columns have long cells and are not tables). */
function tableRows(lines) {
	if (lines.length < 3) return null;
	const rows = lines.map(segments);
	if (rows.some((r) => r.length < 2)) return null;
	if (median(rows.flatMap((r) => r.map((c) => c.text.length))) > 28) return null;
	const counts = /* @__PURE__ */ new Map();
	for (const r of rows) for (const k of new Set(r.map((c) => Math.round(c.x0 / 8)))) counts.set(k, (counts.get(k) ?? 0) + 1);
	return [...counts.values()].filter((c) => c >= Math.ceil(rows.length * .6)).length >= 2 ? rows : null;
}
/** Separate runs of table rows from the surrounding text. */
function splitTables(sorted) {
	const multi = sorted.map((l) => segments(l).length >= 2);
	if (!multi.some(Boolean)) return null;
	const groups = [];
	let i = 0;
	let found = false;
	let plain = [];
	while (i < sorted.length) {
		if (!multi[i]) {
			plain.push(sorted[i]);
			i++;
			continue;
		}
		let j = i;
		while (j < sorted.length && multi[j]) j++;
		const run = sorted.slice(i, j);
		if (tableRows(run)) {
			if (plain.length) groups.push({
				lines: plain,
				table: false
			});
			plain = [];
			groups.push({
				lines: run,
				table: true
			});
			found = true;
		} else plain.push(...run);
		i = j;
	}
	if (plain.length) groups.push({
		lines: plain,
		table: false
	});
	return found ? groups : null;
}
function xyCut(lines, pageW, depth = 0) {
	if (lines.length < 2 || depth > 6) return [{
		lines,
		table: false
	}];
	const medSize = median(lines.map((l) => l.size)) || 10;
	const sorted = [...lines].sort((a, b) => b.y - a.y);
	const tables = depth < 6 ? splitTables(sorted) : null;
	if (tables) return tables.flatMap((g) => g.table ? [g] : xyCut(g.lines, pageW, depth + 1));
	let bestGap = 0;
	let cutAt = -1;
	const typical = median(sorted.slice(1).map((l, i) => sorted[i].y - l.y)) || medSize * 1.3;
	for (let i = 1; i < sorted.length; i++) {
		const g = sorted[i - 1].y - sorted[i].y;
		if (g > bestGap && g > Math.max(typical * 2.2, medSize * 2.6)) {
			bestGap = g;
			cutAt = i;
		}
	}
	if (cutAt > 0) return [...xyCut(sorted.slice(0, cutAt), pageW, depth + 1), ...xyCut(sorted.slice(cutAt), pageW, depth + 1)];
	const all = sorted.flatMap((l) => l.boxes);
	const minX = Math.min(...all.map((b) => b.x));
	const maxX = Math.max(...all.map((b) => b.x + b.w));
	const bins = 240;
	const bw = Math.max(.5, (maxX - minX) / bins);
	const cov = new Array(bins).fill(0);
	for (const b of all) for (let k = Math.max(0, Math.floor((b.x - minX) / bw)); k <= Math.min(239, Math.floor((b.x + b.w - minX) / bw)); k++) cov[k]++;
	const minGutter = Math.max(medSize * 1.2, (maxX - minX) * .025);
	let gutter = null;
	for (let k = 0; k < bins;) if (cov[k] === 0) {
		let j = k;
		while (j < bins && cov[j] === 0) j++;
		const width = (j - k) * bw;
		if (k > 0 && j < bins && width >= minGutter && (!gutter || width > gutter[1] - gutter[0])) gutter = [minX + k * bw, minX + j * bw];
		k = j;
	} else k++;
	if (gutter) {
		const mid = (gutter[0] + gutter[1]) / 2;
		const rtl = sorted.filter((l) => l.rtl).length > sorted.length / 2;
		const mk = (side) => side.filter((bs) => bs.length).map((bs) => mkLine(bs, rtl && bs.filter((b) => AR.test(b.str)).length > bs.length / 2));
		const L = [];
		const R = [];
		for (const l of sorted) {
			L.push(l.boxes.filter((b) => b.x + b.w <= mid));
			R.push(l.boxes.filter((b) => b.x + b.w > mid));
		}
		const left = mk(L);
		const right = mk(R);
		if (left.length && right.length) {
			const [first, second] = rtl ? [right, left] : [left, right];
			return [...xyCut(first, pageW, depth + 1), ...xyCut(second, pageW, depth + 1)];
		}
	}
	return [{
		lines: sorted,
		table: false
	}];
}
var BULLET = /^\s*([•\-–—*·▪◦]|\d{1,3}[.)]|[a-zA-Z][.)]|[\u0661-\u0669][.)])\s+/;
var SENT_END = /[.!?:;…؟۔»"”)]\s*$/;
function blockToText(lines, pageW, table = false) {
	if (table) {
		const tab = tableRows(lines);
		if (tab) return tab.map((row) => row.map((c) => c.text).join("	")).join("\n");
	}
	const rtl = lines.filter((l) => l.rtl).length > lines.length / 2;
	const medSize = median(lines.map((l) => l.size)) || 10;
	const lead = median(lines.slice(1).map((l, i) => lines[i].y - l.y).filter((g) => g > 0)) || medSize * 1.3;
	const widths = lines.map((l) => l.x1 - l.x0);
	const maxW = Math.max(...widths, 1);
	const out = [];
	let cur = "";
	const flush = () => {
		if (cur.trim()) out.push(cur.trim());
		cur = "";
	};
	lines.forEach((l, i) => {
		const prev = lines[i - 1];
		let newPara = false;
		if (prev) {
			const gap = prev.y - l.y;
			const prevShort = prev.x1 - prev.x0 < maxW * .72;
			const indent = rtl ? prev.x1 - l.x1 : l.x0 - prev.x0;
			newPara = gap > lead * 1.45 || BULLET.test(l.text) || prevShort && SENT_END.test(prev.text) || indent > medSize * 1.2 && SENT_END.test(prev.text) || Math.abs(l.size - prev.size) > 1.5;
		}
		if (newPara) flush();
		const t = l.text.trim();
		if (!cur) cur = t;
		else if (/[\u00AD]$/.test(cur) || /[A-Za-zÀ-ɏЀ-ӿƏəğıİöüşç]-$/.test(cur) && /^[a-zà-ɏа-яəğıöüşç]/.test(t) && !rtl) cur = cur.replace(/[\u00AD-]$/, "") + t;
		else cur += " " + t;
	});
	flush();
	return out.join("\n\n");
}
function layoutPage(items, pageW, _opts = {}) {
	const boxes = toBoxes(items);
	if (!boxes.length) return "";
	const blocks = xyCut(buildLines(boxes, _opts.rtl ?? "auto"), pageW);
	const texts = [];
	for (const g of blocks) {
		const t = blockToText(g.lines.sort((x, y) => y.y - x.y), pageW, g.table);
		if (!t) continue;
		const prev = texts[texts.length - 1];
		if (prev && !prev.table && !g.table && !SENT_END.test(prev.t) && /^[a-zà-ɏа-яəğıöüşç]/.test(t) && !/\n\n$/.test(prev.t)) prev.t = prev.t.replace(/[\u00AD-]$/, "") + (/[\u00AD-]$/.test(prev.t) ? "" : " ") + t;
		else texts.push({
			t,
			table: g.table
		});
	}
	return texts.map((x) => x.t).join("\n\n");
}
/** Remove running headers/footers and bare page numbers repeated across pages. */
function stripRunning(pages) {
	if (pages.length < 3) return pages;
	const norm = (s) => s.replace(/\d+/g, "#").trim();
	const edge = (p) => {
		const ps = p.split(/\n\n/);
		return {
			top: ps[0] ?? "",
			bottom: ps[ps.length - 1] ?? ""
		};
	};
	const tops = /* @__PURE__ */ new Map();
	const bots = /* @__PURE__ */ new Map();
	for (const p of pages) {
		const e = edge(p);
		if (e.top && e.top.length < 90) tops.set(norm(e.top), (tops.get(norm(e.top)) ?? 0) + 1);
		if (e.bottom && e.bottom.length < 90) bots.set(norm(e.bottom), (bots.get(norm(e.bottom)) ?? 0) + 1);
	}
	const need = Math.ceil(pages.length * .6);
	return pages.map((p) => {
		const ps = p.split(/\n\n/);
		if (ps.length > 1 && (tops.get(norm(ps[0])) ?? 0) >= need && ps[0].length < 90) ps.shift();
		if (ps.length > 1 && (bots.get(norm(ps[ps.length - 1])) ?? 0) >= need && ps[ps.length - 1].length < 90) ps.pop();
		return ps.join("\n\n");
	});
}
function cleanText(s) {
	return s.replace(AR_G, (m) => m.normalize("NFKC")).replace(/[ \t]*[\u064B-\u065F\u0670\u0640]+/g, "").replace(/[\u066E\u06BA\u06A1\u066F]/g, (c) => ({
		"ٮ": "ب",
		"ں": "ن",
		"ڡ": "ف",
		"ٯ": "ق"
	})[c]).replace(/[\u200E\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g, "").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}
var MIN_LETTERS = 25;
var MAX_SIDE = 4200;
async function extractTextSmart(bytes, o) {
	const doc = await openPdf(bytes);
	const total = doc.numPages;
	const pages = [];
	const needOcr = [];
	try {
		for (let n = 1; n <= total; n++) {
			if (o.shouldCancel?.()) break;
			o.onProgress?.({
				page: n,
				total,
				phase: "text",
				fraction: (n - 1) / total
			});
			let text = "";
			let rtl = false;
			if (o.ocr !== "force") {
				const page = await doc.getPage(n);
				const tc = await page.getTextContent({ includeMarkedContent: true });
				const glyphs = tc.items.filter((i) => typeof i.str === "string");
				rtl = glyphs.some((i) => /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/.test(i.str));
				text = rtl ? fixArabicDoc([itemsToLines(tc.items).join("\n")])[0] : layoutPage(glyphs, page.view[2] - page.view[0]);
			}
			const letters = (text.match(/\p{L}/gu) || []).length;
			pages.push({
				n,
				text,
				method: "text"
			});
			const garbage = letters >= MIN_LETTERS && textQuality([text]) === "garbage";
			if (o.ocr !== "never" && (o.ocr === "force" || letters < MIN_LETTERS || garbage)) needOcr.push(n);
		}
		let langs = [];
		let conf = [];
		const low = [];
		if (needOcr.length && !o.shouldCancel?.()) {
			const dpi = o.dpi ?? 300;
			const render = async (n) => {
				const vp = (await doc.getPage(n)).getViewport({ scale: 1 });
				const scale = Math.min(dpi / 72, MAX_SIDE / Math.max(vp.width, vp.height));
				return preprocessForOcr(await renderPageToCanvas(doc, n, scale));
			};
			const fallback = ocrLangForSite(o.uiLang);
			if (!o.langs || o.langs === "auto") {
				o.onProgress?.({
					page: needOcr[0],
					total,
					phase: "render",
					fraction: 0
				});
				langs = await detectOcrLangs(await render(needOcr[0]), fallback);
			} else langs = o.langs;
			(await ocrDetailed(needOcr.map((n) => async () => render(n)), langs, {
				onProgress: (i, _t, fr) => o.onProgress?.({
					page: needOcr[Math.min(i, needOcr.length - 1)],
					total,
					phase: "ocr",
					fraction: (i + fr) / needOcr.length
				}),
				shouldCancel: o.shouldCancel
			})).forEach((res, i) => {
				const p = pages[needOcr[i] - 1];
				p.text = res.text;
				p.method = "ocr";
				p.confidence = res.confidence;
				conf.push(res.confidence);
				if (res.confidence < 60) low.push(p.n);
			});
		}
		const texts = stripRunning(pages.map((p) => p.method === "text" ? p.text : p.text));
		pages.forEach((p, i) => {
			if (p.method === "text") p.text = cleanText(texts[i]);
		});
		return {
			pages,
			text: pages.map((p, i) => pages.length > 1 ? `${p.text}` : p.text).join("\n\n").trim(),
			usedOcr: pages.some((p) => p.method === "ocr"),
			avgConfidence: conf.length ? Math.round(conf.reduce((a, b) => a + b, 0) / conf.length) : void 0,
			langs,
			lowConfidencePages: low
		};
	} finally {
		await closePdf(doc);
	}
}
var xmlEscape = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
var xmlUnescape = (value) => value.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&amp;/g, "&");
/** Plain text of a .docx (paragraphs, tabs, line breaks). Formatting and images are not kept. */
function docxToText(bytes) {
	const doc = unzipSync(bytes, { filter: (f) => f.name === "word/document.xml" })["word/document.xml"];
	if (!doc) throw new Error("not-docx");
	return xmlUnescape(strFromU8(doc).replace(/<w:tab\s*\/>/g, "	").replace(/<w:(br|cr)\s*\/>/g, "\n").replace(/<\/w:p>/g, "\n").replace(/<[^>]+>/g, "")).replace(/\n{3,}/g, "\n\n").trim();
}
var ARABIC = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
function paragraph(line) {
	if (!line) return "<w:p/>";
	return `<w:p>${ARABIC.test(line) ? "<w:pPr><w:bidi/><w:jc w:val=\"right\"/></w:pPr><w:r><w:rPr><w:rtl/></w:rPr>" : "<w:r>"}<w:t xml:space="preserve">${xmlEscape(line)}</w:t></w:r></w:p>`;
}
function createDocxFromText(text) {
	const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${text.replace(/\r/g, "").split("\n").map(paragraph).join("")}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/></w:sectPr></w:body></w:document>`;
	return zipSync({
		"[Content_Types].xml": strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`),
		"_rels/.rels": strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`),
		"word/document.xml": strToU8(documentXml),
		"word/_rels/document.xml.rels": strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>`)
	});
}
var esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "");
var dec = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&amp;/g, "&");
/** Groups the text on each page into rows (same baseline) and columns (shared left edges). */
async function pdfToTables(bytes, progress, shouldStop) {
	const doc = await openPdf(bytes);
	const out = [];
	try {
		for (let p = 1; p <= doc.numPages; p++) {
			if (shouldStop?.()) break;
			progress?.(p - 1, doc.numPages);
			const items = (await (await doc.getPage(p)).getTextContent()).items.filter((i) => i.str && i.str.trim() && i.transform).map((i) => ({
				x: i.transform[4],
				y: i.transform[5],
				w: i.width ?? 0,
				h: Math.abs(i.height || i.transform[3]) || 10,
				s: i.str
			}));
			items.sort((a, b) => b.y - a.y || a.x - b.x);
			const lines = [];
			for (const it of items) {
				const l = lines.find((L) => Math.abs(L.y - it.y) < Math.max(2, Math.min(L.h, it.h) * .45));
				if (l) l.it.push(it);
				else lines.push({
					y: it.y,
					h: it.h,
					it: [it]
				});
			}
			lines.sort((a, b) => b.y - a.y);
			const rowsCells = lines.map((L) => {
				const s = L.it.sort((a, b) => a.x - b.x);
				const cells = [];
				for (const it of s) {
					const last = cells[cells.length - 1];
					const gap = last ? it.x - last.x2 : Infinity;
					if (last && gap < it.h * .9) {
						last.text += (gap > it.h * .15 ? " " : "") + it.s;
						last.x2 = it.x + it.w;
					} else cells.push({
						x: it.x,
						x2: it.x + it.w,
						text: it.s
					});
				}
				return cells;
			});
			const xs = rowsCells.flat().map((c) => c.x).sort((a, b) => a - b);
			const anchors = [];
			for (const x of xs) if (!anchors.length || x - anchors[anchors.length - 1] > 12) anchors.push(x);
			const rows = rowsCells.map((cells) => {
				const r = [];
				for (const c of cells) {
					let k = 0;
					for (let i = 0; i < anchors.length; i++) if (anchors[i] <= c.x + 6) k = i;
					while (r[k]) k++;
					while (r.length < k) r.push("");
					r[k] = c.text.trim();
				}
				return r;
			});
			const width = Math.max(0, ...rows.map((r) => r.length));
			const keep = Array.from({ length: width }, (_, i) => rows.some((r) => (r[i] ?? "").trim()));
			out.push({
				name: `Page ${p}`,
				rows: rows.map((r) => keep.map((k, i) => k ? r[i] ?? "" : null).filter((v) => v !== null))
			});
		}
	} finally {
		await closePdf(doc);
	}
	progress?.(1, 1);
	return out;
}
var colName = (i) => {
	let s = "";
	i++;
	while (i) {
		const m = (i - 1) % 26;
		s = String.fromCharCode(65 + m) + s;
		i = Math.floor((i - 1) / 26);
	}
	return s;
};
var NUMRE = /^-?\d{1,15}(\.\d+)?$/;
/** Writes a minimal valid .xlsx (inline strings, numbers as numbers, bold first row optional). */
async function sheetsToXlsx(sheets, o = {}) {
	const { zipSync, strToU8 } = await import("../_libs/@cantoo/pdf-lib+[...].mjs").then((n) => n.r);
	const used = /* @__PURE__ */ new Set();
	const names = sheets.map((s, i) => {
		let n = (s.name || `Sheet${i + 1}`).replace(/[\\/?*[\]:]/g, " ").slice(0, 31).trim() || `Sheet${i + 1}`;
		let k = 2;
		const b = n;
		while (used.has(n.toLowerCase())) n = `${b.slice(0, 28)} ${k++}`;
		used.add(n.toLowerCase());
		return n;
	});
	const files = {};
	files["[Content_Types].xml"] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${names.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")}</Types>`);
	files["_rels/.rels"] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`);
	files["xl/workbook.xml"] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${names.map((n, i) => `<sheet name="${esc(n)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join("")}</sheets></workbook>`);
	files["xl/_rels/workbook.xml.rels"] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${names.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join("")}<Relationship Id="rId${names.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`);
	files["xl/styles.xml"] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf/></cellStyleXfs><cellXfs count="2"><xf fontId="0"/><xf fontId="1" applyFont="1"/></cellXfs></styleSheet>`);
	sheets.forEach((s, i) => {
		const width = Math.max(1, ...s.rows.map((r) => r.length));
		const cw = Array.from({ length: width }, (_, c) => Math.min(60, Math.max(8, ...s.rows.map((r) => (r[c] ?? "").length + 2))));
		const rows = s.rows.map((r, ri) => `<row r="${ri + 1}">${r.map((v, ci) => {
			if (!v) return "";
			const ref = `${colName(ci)}${ri + 1}`;
			const st = o.boldFirst && ri === 0 ? " s=\"1\"" : "";
			return NUMRE.test(v.trim()) ? `<c r="${ref}"${st}><v>${v.trim()}</v></c>` : `<c r="${ref}" t="inlineStr"${st}><is><t xml:space="preserve">${esc(v)}</t></is></c>`;
		}).join("")}</row>`).join("");
		files[`xl/worksheets/sheet${i + 1}.xml`] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cols>${cw.map((w, c) => `<col min="${c + 1}" max="${c + 1}" width="${w}" customWidth="1"/>`).join("")}</cols><sheetData>${rows}</sheetData></worksheet>`);
	});
	return zipSync(files);
}
var EMU = 12700;
var xfrm = (xml) => {
	const off = xml.match(/<a:off x="(-?\d+)" y="(-?\d+)"/);
	const ext = xml.match(/<a:ext cx="(\d+)" cy="(\d+)"/);
	return off && ext ? {
		x: +off[1] / EMU,
		y: +off[2] / EMU,
		w: +ext[1] / EMU,
		h: +ext[2] / EMU
	} : null;
};
var ph = (xml) => {
	const m = xml.match(/<p:ph\b([^>]*)\/?>/);
	if (!m) return null;
	return {
		type: m[1].match(/type="([^"]+)"/)?.[1] ?? "body",
		idx: m[1].match(/idx="([^"]+)"/)?.[1] ?? ""
	};
};
var hex = (s) => {
	if (!s) return null;
	const n = parseInt(s, 16);
	return [
		(n >> 16 & 255) / 255,
		(n >> 8 & 255) / 255,
		(n & 255) / 255
	];
};
var resolve = (base, target) => {
	if (target.startsWith("/")) return target.slice(1);
	const parts = base.split("/").slice(0, -1);
	for (const seg of target.split("/")) if (seg === "..") parts.pop();
	else if (seg !== ".") parts.push(seg);
	return parts.join("/");
};
async function pptxToPdf(bytes, progress) {
	const { unzipSync, strFromU8 } = await import("../_libs/@cantoo/pdf-lib+[...].mjs").then((n) => n.r);
	const z = unzipSync(bytes);
	const get = (p) => z[p] ? strFromU8(z[p]) : "";
	const pres = get("ppt/presentation.xml");
	if (!pres) throw new Error("not-pptx");
	const sz = pres.match(/<p:sldSz cx="(\d+)" cy="(\d+)"/);
	const PW = sz ? +sz[1] / EMU : 720, PH = sz ? +sz[2] / EMU : 405;
	const rels = (path) => {
		const f = `${path.split("/").slice(0, -1).join("/")}/_rels/${path.split("/").pop()}.rels`;
		const m = /* @__PURE__ */ new Map();
		for (const r of get(f).matchAll(/<Relationship\b([^>]*)\/?>/g)) {
			const id = r[1].match(/Id="([^"]+)"/)?.[1];
			const t = r[1].match(/Target="([^"]+)"/)?.[1];
			if (id && t && !/TargetMode="External"/.test(r[1])) m.set(id, resolve(path, t));
		}
		return m;
	};
	const presRels = rels("ppt/presentation.xml");
	const slidePaths = [...pres.matchAll(/<p:sldId\b[^>]*r:id="([^"]+)"/g)].map((m) => presRels.get(m[1])).filter((p) => !!p && !!z[p]);
	const { lib, doc, vis } = await docWithFonts();
	const imgCache = /* @__PURE__ */ new Map();
	const image = async (p) => {
		if (imgCache.has(p)) return imgCache.get(p);
		let im = null;
		try {
			if (/\.png$/i.test(p)) im = await doc.embedPng(z[p]);
			else if (/\.jpe?g$/i.test(p)) im = await doc.embedJpg(z[p]);
		} catch {
			im = null;
		}
		imgCache.set(p, im);
		return im;
	};
	let skipped = 0;
	for (let si = 0; si < slidePaths.length; si++) {
		progress?.(si, slidePaths.length);
		const sp = slidePaths[si];
		const xml = get(sp);
		const sr = rels(sp);
		const layoutPath = [...sr.values()].find((v) => /slideLayouts\//.test(v));
		const layout = layoutPath ? get(layoutPath) : "";
		const masterPath = layoutPath ? [...rels(layoutPath).values()].find((v) => /slideMasters\//.test(v)) : void 0;
		const master = masterPath ? get(masterPath) : "";
		const phBox = (p) => {
			for (const src of [layout, master]) for (const m of src.matchAll(/<p:sp\b[\s\S]*?<\/p:sp>/g)) {
				const q = ph(m[0]);
				if (q && (p.idx && q.idx === p.idx || q.type === p.type || p.type === "ctrTitle" && q.type === "title")) {
					const b = xfrm(m[0]);
					if (b) return b;
				}
			}
			return null;
		};
		const page = doc.addPage([PW, PH]);
		const bg = hex(([
			xml,
			layout,
			master
		].map((s) => s.match(/<p:bg>[\s\S]*?<\/p:bg>/)?.[0]).find(Boolean) ?? "").match(/<a:srgbClr val="([0-9A-Fa-f]{6})"/)?.[1]);
		page.drawRectangle({
			x: 0,
			y: 0,
			width: PW,
			height: PH,
			color: bg ? lib.rgb(...bg) : lib.rgb(1, 1, 1)
		});
		const tree = xml.match(/<p:spTree>([\s\S]*)<\/p:spTree>/)?.[1] ?? "";
		for (const m of tree.matchAll(/<p:(sp|pic|graphicFrame)\b[\s\S]*?<\/p:\1>/g)) {
			const el = m[0];
			const kind = m[1];
			const p = ph(el);
			const box = xfrm(el.match(/<(?:p:spPr|p:xfrm)[\s\S]*?<\/(?:p:spPr|p:xfrm)>/)?.[0] ?? "") ?? (p ? phBox(p) : null);
			if (!box) continue;
			const top = PH - box.y;
			if (kind === "graphicFrame") {
				skipped++;
				continue;
			}
			if (kind === "pic") {
				const id = el.match(/<a:blip\b[^>]*r:embed="([^"]+)"/)?.[1];
				const path = id ? sr.get(id) : void 0;
				const im = path ? await image(path) : null;
				if (im) page.drawImage(im, {
					x: box.x,
					y: top - box.h,
					width: box.w,
					height: box.h
				});
				else skipped++;
				continue;
			}
			const spPr = el.match(/<p:spPr[\s\S]*?<\/p:spPr>/)?.[0] ?? "";
			const fill = hex(spPr.replace(/<a:ln\b[\s\S]*?<\/a:ln>/, "").match(/<a:solidFill><a:srgbClr val="([0-9A-Fa-f]{6})"/)?.[1]);
			const blip = spPr.match(/<a:blip\b[^>]*r:embed="([^"]+)"/)?.[1];
			if (blip) {
				const ip = sr.get(blip);
				const im = ip ? await image(ip) : null;
				if (im) page.drawImage(im, {
					x: box.x,
					y: top - box.h,
					width: box.w,
					height: box.h
				});
			} else if (fill) {
				if (/prst="ellipse"/.test(spPr)) page.drawEllipse({
					x: box.x + box.w / 2,
					y: top - box.h / 2,
					xScale: box.w / 2,
					yScale: box.h / 2,
					color: lib.rgb(...fill)
				});
				else page.drawRectangle({
					x: box.x,
					y: top - box.h,
					width: box.w,
					height: box.h,
					color: lib.rgb(...fill)
				});
			}
			const body = el.match(/<p:txBody>[\s\S]*?<\/p:txBody>/)?.[0];
			if (!body) continue;
			const isTitle = !!p && /title|ctrTitle/i.test(p.type);
			const anchor = body.match(/<a:bodyPr\b[^>]*anchor="(\w+)"/)?.[1] ?? (isTitle ? "ctr" : "t");
			const pad = 7.2, maxW = Math.max(10, box.w - 2 * pad);
			const lines = [];
			const defColor = hex(body.match(/<a:defRPr\b[\s\S]*?<a:srgbClr val="([0-9A-Fa-f]{6})"/)?.[1]) ?? [
				.1,
				.1,
				.12
			];
			for (const pm of body.matchAll(/<a:p>([\s\S]*?)<\/a:p>|<a:p\/>/g)) {
				const px = pm[1] ?? "";
				const text = [...px.matchAll(/<a:r>([\s\S]*?)<\/a:r>|<a:fld\b[\s\S]*?<\/a:fld>|<a:br\/>/g)].map((r) => r[0] === "<a:br/>" ? "\n" : [...r[0].matchAll(/<a:t(?:\s[^>]*)?>([\s\S]*?)<\/a:t>/g)].map((t) => dec(t[1])).join("")).join("");
				const rPr = px.match(/<a:rPr\b[^>]*\/?>(?:[\s\S]*?<\/a:rPr>)?/)?.[0] ?? px.match(/<a:endParaRPr\b[^>]*>/)?.[0] ?? "";
				const size = +(rPr.match(/sz="(\d+)"/)?.[1] ?? 0) / 100 || (isTitle ? 32 : 18);
				const bold = /\bb="1"/.test(rPr) || isTitle;
				const color = hex(rPr.match(/<a:srgbClr val="([0-9A-Fa-f]{6})"/)?.[1]) ?? defColor;
				const algn = px.match(/<a:pPr\b[^>]*algn="(\w+)"/)?.[1] ?? (isTitle && p?.type === "ctrTitle" ? "ctr" : "l");
				const bullet = !isTitle && !!p && p.type === "body" && !/<a:buNone\/>/.test(px) && !!text.trim();
				for (const part of text.split("\n")) {
					const words = part.split(/(\s+)/);
					let cur = "";
					const wOf = (s) => {
						const v = vis(s, bold);
						return v.font.widthOfTextAtSize(v.text, size);
					};
					const indent = bullet ? size * .9 : 0;
					let first = true;
					for (const w of words) {
						const t = cur + w;
						if (cur.trim() && wOf(t) > maxW - indent) {
							lines.push({
								text: cur.trimEnd(),
								size,
								bold,
								color,
								algn,
								bullet: bullet && first
							});
							first = false;
							cur = w.trimStart();
						} else cur = t;
					}
					lines.push({
						text: cur.trimEnd(),
						size,
						bold,
						color,
						algn,
						bullet: bullet && first && !!cur.trim()
					});
				}
			}
			let scale = 1;
			const total = () => lines.reduce((a, l) => a + l.size * 1.2 * scale, 0);
			while (total() > box.h - 2 * pad && scale > .5) scale -= .05;
			let y = anchor === "ctr" ? top - (box.h - total()) / 2 : anchor === "b" ? top - box.h + pad + total() : top - pad;
			for (const l of lines) {
				const s = l.size * scale;
				y -= s * 1.2;
				if (!l.text) continue;
				const v = vis(l.text, l.bold);
				const w = v.font.widthOfTextAtSize(v.text, s);
				const ind = l.bullet ? s * .9 : 0;
				const x = l.algn === "ctr" ? box.x + (box.w - w) / 2 : l.algn === "r" || v.isAr ? box.x + box.w - pad - w : box.x + pad + ind;
				if (l.bullet) page.drawCircle({
					x: box.x + pad + s * .3,
					y: y + s * .35,
					size: s * .13,
					color: lib.rgb(...l.color)
				});
				page.drawText(v.text, {
					x,
					y: y + s * .2,
					size: s,
					font: v.font,
					color: lib.rgb(...l.color)
				});
			}
		}
	}
	progress?.(1, 1);
	if (!slidePaths.length) throw new Error("not-pptx");
	return {
		bytes: await doc.save({ useObjectStreams: true }),
		slides: slidePaths.length,
		skipped
	};
}
var UserError = class extends Error {
	user = true;
};
var today = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
var X_DEFAULT = {
	crop: {
		top: 10,
		right: 10,
		bottom: 10,
		left: 10
	},
	cropAll: true,
	cropRange: "",
	gray: "balanced",
	sheetHeader: true,
	sheetLand: "auto",
	sheetIdx: 0,
	boxes: [],
	flatten: true,
	redPage: 0,
	inv: {
		title: "",
		number: "001",
		date: today(),
		due: "",
		currency: "AZN",
		seller: "",
		buyer: "",
		notes: "",
		taxPct: 0,
		items: [{
			name: "",
			qty: 1,
			price: 0
		}]
	}
};
var W = {
	az: {
		unlockHint: "Parollu PDF seçin, yuxarıda parolu yazıb «Aç» basın, sonra «Başla». Parolu bilməyən fayl açılmır.",
		notLocked: "Bu PDF-in açılış parolu yoxdur. Məhdudiyyətsiz nüsxə yazıldı.",
		top: "Yuxarı (mm)",
		right: "Sağ (mm)",
		bottom: "Aşağı (mm)",
		left: "Sol (mm)",
		scope: "Səhifələr",
		all: "Hamısı",
		range: "Aralıq",
		cropNote: "Kəsilən kənar gizlənir, amma faylın içində qala bilər.",
		cropBig: "Kənar çox böyükdür: səhifədən heç nə qalmır.",
		grayNote: "Səhifələr şəkil kimi yenidən qurulur: mətn seçilmir. Daha yaxşı keyfiyyət = daha böyük fayl.",
		quality: "Keyfiyyət",
		low: "Kiçik fayl",
		mid: "Orta",
		high: "Aydın",
		pickSheet: "XLSX və ya CSV seçin",
		header: "Birinci sətir başlıqdır",
		orient: "Səhifə",
		auto: "Avtomatik",
		land: "Yan",
		port: "Dik",
		sheet: "Vərəq",
		sheetNote: "Yalnız xana dəyərləri köçür: formul, rəng və qrafik köçmür. Köhnə .xls dəstəklənmir.",
		badSheet: "Bu fayl oxunmadı. XLSX və ya CSV seçin.",
		emptySheet: "Cədvəl boşdur.",
		redHint: "Gizlətmək istədiyiniz yeri səhifə şəklində dartın.",
		page: "Səhifə",
		boxes: "Qutular",
		flatten: "Qutulu səhifəni şəkil et (altdakı mətn silinir)",
		flatNote: "Bağlı olanda yalnız üstü örtülür və mətn kopyalana bilər. Nəticəni yoxlayın.",
		noBoxes: "Əvvəl ən azı bir qutu çəkin.",
		clearBoxes: "Hamısını sil",
		invTitle: "Başlıq",
		invDefault: "Hesab-faktura",
		number: "Nömrə",
		date: "Tarix",
		due: "Son ödəniş tarixi",
		currency: "Valyuta",
		seller: "Satıcı (ad, ünvan, VÖEN)",
		buyer: "Alıcı",
		item: "Mal / xidmət",
		qty: "Say",
		price: "Qiymət",
		sum: "Məbləğ",
		addRow: "Sətir əlavə et",
		tax: "Vergi %",
		subtotal: "Cəmi",
		taxL: "Vergi",
		total: "Yekun",
		notes: "Qeyd (bank, şərtlər)",
		invNote: "Sadə PDF fakturadır, rəsmi e-qaimə deyil. Forma yalnız bu brauzerdə saxlanır.",
		noItems: "Ən azı bir mal yazın."
	},
	en: {
		unlockHint: "Choose a protected PDF, type the password above and press Unlock, then Start. A file whose password you don't know can't be opened.",
		notLocked: "This PDF has no open password. A copy without limits was saved.",
		top: "Top (mm)",
		right: "Right (mm)",
		bottom: "Bottom (mm)",
		left: "Left (mm)",
		scope: "Pages",
		all: "All",
		range: "Range",
		cropNote: "The cut edge is hidden but may stay inside the file.",
		cropBig: "The margins are too big: nothing would be left of the page.",
		grayNote: "Pages are rebuilt as images: text can't be selected. Higher quality = bigger file.",
		quality: "Quality",
		low: "Small file",
		mid: "Medium",
		high: "Sharp",
		pickSheet: "Choose an XLSX or CSV",
		header: "First row is a header",
		orient: "Page",
		auto: "Auto",
		land: "Landscape",
		port: "Portrait",
		sheet: "Sheet",
		sheetNote: "Only cell values are copied: no formulas, colors or charts. Old .xls is not supported.",
		badSheet: "Could not read this file. Choose an XLSX or CSV.",
		emptySheet: "The table is empty.",
		redHint: "Drag on the page image over what you want to hide.",
		page: "Page",
		boxes: "Boxes",
		flatten: "Flatten pages with boxes (text under them is removed)",
		flatNote: "When off, the box only covers the text and it can still be copied. Check the result.",
		noBoxes: "Draw at least one box first.",
		clearBoxes: "Remove all",
		invTitle: "Title",
		invDefault: "Invoice",
		number: "Number",
		date: "Date",
		due: "Due date",
		currency: "Currency",
		seller: "Seller (name, address, tax ID)",
		buyer: "Buyer",
		item: "Item / service",
		qty: "Qty",
		price: "Price",
		sum: "Amount",
		addRow: "Add row",
		tax: "Tax %",
		subtotal: "Subtotal",
		taxL: "Tax",
		total: "Total",
		notes: "Notes (bank, terms)",
		invNote: "A simple PDF invoice, not an official e-invoice. The form is kept only in this browser.",
		noItems: "Add at least one item."
	},
	tr: {
		unlockHint: "Parolalı PDF seçin, yukarıda parolayı yazıp «Aç»a basın, sonra «Başlat». Parolasını bilmediğiniz dosya açılmaz.",
		notLocked: "Bu PDF'in açılış parolası yok. Sınırsız kopya kaydedildi.",
		top: "Üst (mm)",
		right: "Sağ (mm)",
		bottom: "Alt (mm)",
		left: "Sol (mm)",
		scope: "Sayfalar",
		all: "Tümü",
		range: "Aralık",
		cropNote: "Kırpılan kenar gizlenir ama dosyada kalabilir.",
		cropBig: "Kenar çok büyük: sayfadan bir şey kalmaz.",
		grayNote: "Sayfalar görsel olarak yeniden kurulur: metin seçilmez. Yüksek kalite = büyük dosya.",
		quality: "Kalite",
		low: "Küçük dosya",
		mid: "Orta",
		high: "Net",
		pickSheet: "XLSX veya CSV seçin",
		header: "İlk satır başlıktır",
		orient: "Sayfa",
		auto: "Otomatik",
		land: "Yatay",
		port: "Dikey",
		sheet: "Sayfa",
		sheetNote: "Sadece hücre değerleri aktarılır: formül, renk ve grafik yok. Eski .xls desteklenmez.",
		badSheet: "Dosya okunamadı. XLSX veya CSV seçin.",
		emptySheet: "Tablo boş.",
		redHint: "Gizlemek istediğiniz yeri sayfa görselinde sürükleyin.",
		page: "Sayfa",
		boxes: "Kutular",
		flatten: "Kutulu sayfayı görsele çevir (altındaki metin silinir)",
		flatNote: "Kapalıyken sadece üstü örtülür, metin kopyalanabilir. Sonucu kontrol edin.",
		noBoxes: "Önce en az bir kutu çizin.",
		clearBoxes: "Hepsini sil",
		invTitle: "Başlık",
		invDefault: "Fatura",
		number: "Numara",
		date: "Tarih",
		due: "Son ödeme",
		currency: "Para birimi",
		seller: "Satıcı (ad, adres, vergi no)",
		buyer: "Alıcı",
		item: "Ürün / hizmet",
		qty: "Adet",
		price: "Fiyat",
		sum: "Tutar",
		addRow: "Satır ekle",
		tax: "Vergi %",
		subtotal: "Ara toplam",
		taxL: "Vergi",
		total: "Toplam",
		notes: "Not (banka, şartlar)",
		invNote: "Basit PDF faturadır, resmi e-fatura değildir. Form sadece bu tarayıcıda saklanır.",
		noItems: "En az bir kalem yazın."
	},
	ar: {
		unlockHint: "اختر PDF محمياً، واكتب كلمة المرور أعلاه واضغط «فتح»، ثم «ابدأ». لا يُفتح ملف لا تعرف كلمته.",
		notLocked: "لا توجد كلمة فتح لهذا الملف. حُفظت نسخة بلا قيود.",
		top: "أعلى (مم)",
		right: "يمين (مم)",
		bottom: "أسفل (مم)",
		left: "يسار (مم)",
		scope: "الصفحات",
		all: "الكل",
		range: "نطاق",
		cropNote: "تُخفى الحافة المقصوصة لكنها قد تبقى في الملف.",
		cropBig: "الهوامش كبيرة جداً: لن يبقى شيء من الصفحة.",
		grayNote: "تُعاد الصفحات كصور: لا يمكن تحديد النص. جودة أعلى = ملف أكبر.",
		quality: "الجودة",
		low: "ملف صغير",
		mid: "متوسط",
		high: "واضح",
		pickSheet: "اختر XLSX أو CSV",
		header: "الصف الأول عنوان",
		orient: "الصفحة",
		auto: "تلقائي",
		land: "أفقي",
		port: "عمودي",
		sheet: "الورقة",
		sheetNote: "تُنقل قيم الخلايا فقط: لا صيغ ولا ألوان ولا رسوم. صيغة xls القديمة غير مدعومة.",
		badSheet: "تعذرت قراءة الملف. اختر XLSX أو CSV.",
		emptySheet: "الجدول فارغ.",
		redHint: "اسحب على صورة الصفحة فوق ما تريد إخفاءه.",
		page: "الصفحة",
		boxes: "المربعات",
		flatten: "حوّل الصفحات ذات المربعات إلى صور (يُحذف النص تحتها)",
		flatNote: "عند الإيقاف يُغطى النص فقط ويمكن نسخه. افحص النتيجة.",
		noBoxes: "ارسم مربعاً واحداً على الأقل.",
		clearBoxes: "حذف الكل",
		invTitle: "العنوان",
		invDefault: "فاتورة",
		number: "الرقم",
		date: "التاريخ",
		due: "تاريخ الاستحقاق",
		currency: "العملة",
		seller: "البائع (الاسم، العنوان، الرقم الضريبي)",
		buyer: "المشتري",
		item: "السلعة / الخدمة",
		qty: "الكمية",
		price: "السعر",
		sum: "المبلغ",
		addRow: "إضافة سطر",
		tax: "الضريبة %",
		subtotal: "المجموع الفرعي",
		taxL: "الضريبة",
		total: "الإجمالي",
		notes: "ملاحظات (البنك، الشروط)",
		invNote: "فاتورة PDF بسيطة وليست فاتورة إلكترونية رسمية. يُحفظ النموذج في هذا المتصفح فقط.",
		noItems: "أضف بنداً واحداً على الأقل."
	},
	ru: {
		unlockHint: "Выберите защищённый PDF, введите пароль выше и нажмите «Открыть», затем «Начать». Файл с неизвестным паролем не откроется.",
		notLocked: "У этого PDF нет пароля на открытие. Сохранена копия без ограничений.",
		top: "Сверху (мм)",
		right: "Справа (мм)",
		bottom: "Снизу (мм)",
		left: "Слева (мм)",
		scope: "Страницы",
		all: "Все",
		range: "Диапазон",
		cropNote: "Обрезанный край скрыт, но может остаться в файле.",
		cropBig: "Поля слишком большие: от страницы ничего не останется.",
		grayNote: "Страницы пересобираются как изображения: текст не выделяется. Выше качество = больше файл.",
		quality: "Качество",
		low: "Малый файл",
		mid: "Среднее",
		high: "Чёткое",
		pickSheet: "Выберите XLSX или CSV",
		header: "Первая строка — заголовок",
		orient: "Страница",
		auto: "Авто",
		land: "Альбомная",
		port: "Книжная",
		sheet: "Лист",
		sheetNote: "Переносятся только значения ячеек: без формул, цветов и диаграмм. Старый .xls не поддерживается.",
		badSheet: "Не удалось прочитать файл. Выберите XLSX или CSV.",
		emptySheet: "Таблица пуста.",
		redHint: "Протяните по картинке страницы над тем, что нужно скрыть.",
		page: "Страница",
		boxes: "Блоки",
		flatten: "Сделать страницы с блоками картинкой (текст под ними удаляется)",
		flatNote: "Без этого блок только закрывает текст, и его можно скопировать. Проверьте результат.",
		noBoxes: "Сначала нарисуйте хотя бы один блок.",
		clearBoxes: "Убрать все",
		invTitle: "Заголовок",
		invDefault: "Счёт",
		number: "Номер",
		date: "Дата",
		due: "Оплатить до",
		currency: "Валюта",
		seller: "Продавец (имя, адрес, ИНН)",
		buyer: "Покупатель",
		item: "Товар / услуга",
		qty: "Кол-во",
		price: "Цена",
		sum: "Сумма",
		addRow: "Добавить строку",
		tax: "Налог %",
		subtotal: "Подытог",
		taxL: "Налог",
		total: "Итого",
		notes: "Примечание (банк, условия)",
		invNote: "Простой PDF-счёт, не официальный электронный счёт. Форма хранится только в этом браузере.",
		noItems: "Добавьте хотя бы одну позицию."
	}
};
var xw = (lang) => W[lang] ?? W.en;
var EXTRA_ACCEPT = ".csv,.xlsx,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
async function readSheetFile(file, lang) {
	const bytes = new Uint8Array(await file.arrayBuffer());
	try {
		if (/\.xlsx$/i.test(file.name)) return await readXlsx(bytes);
		if (/\.(csv|txt|tsv)$/i.test(file.name) || file.type.startsWith("text/")) return [{
			name: file.name,
			rows: parseCsv(new TextDecoder().decode(bytes))
		}];
	} catch {}
	throw new UserError(xw(lang).badSheet);
}
var NUM = (v) => Math.max(0, Number(v) || 0);
function ExtraOptions({ tool, lang, x, setX, pdf, pages, sheets, t }) {
	const w = xw(lang);
	const up = (k, v) => setX((s) => ({
		...s,
		[k]: v
	}));
	if (tool === "unlock") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: w.unlockHint
	});
	if (tool === "crop") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					"top",
					"right",
					"bottom",
					"left"
				].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w[k] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					min: 0,
					max: 200,
					className: field,
					value: x.crop[k],
					onChange: (e) => up("crop", {
						...x.crop,
						[k]: NUM(e.target.value)
					}),
					"data-testid": `crop-${k}`
				})] }, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.scope }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
				name: w.scope,
				value: x.cropAll ? "all" : "range",
				onChange: (v) => up("cropAll", v === "all"),
				options: [{
					id: "all",
					label: w.all
				}, {
					id: "range",
					label: w.range
				}]
			})] }),
			!x.cropAll ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: field,
				placeholder: "1-3, 5",
				value: x.cropRange,
				onChange: (e) => up("cropRange", e.target.value)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: w.cropNote
			})
		]
	});
	if (tool === "grayscale") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.quality }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
				name: w.quality,
				value: x.gray,
				onChange: (v) => up("gray", v),
				options: [
					{
						id: "small",
						label: w.low
					},
					{
						id: "balanced",
						label: w.mid
					},
					{
						id: "high",
						label: w.high
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: w.grayNote
			})
		]
	});
	if (tool === "excel-pdf") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			sheets && sheets.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.sheet }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: field,
				value: x.sheetIdx,
				onChange: (e) => up("sheetIdx", Number(e.target.value)),
				children: sheets.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: i,
					children: s.name
				}, i))
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: x.sheetHeader,
					onChange: (e) => up("sheetHeader", e.target.checked)
				}), w.header]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.orient }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
				name: w.orient,
				value: x.sheetLand,
				onChange: (v) => up("sheetLand", v),
				options: [
					{
						id: "auto",
						label: w.auto
					},
					{
						id: "no",
						label: w.port
					},
					{
						id: "yes",
						label: w.land
					}
				]
			})] }),
			sheets?.[x.sheetIdx] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					sheets[x.sheetIdx].rows.length,
					" × ",
					Math.max(0, ...sheets[x.sheetIdx].rows.map((r) => r.length))
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: w.sheetNote
			})
		]
	});
	if (tool === "redact") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redactor, {
		lang,
		x,
		setX,
		pdf,
		pages
	});
	if (tool === "invoice") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceForm, {
		lang,
		x,
		setX
	});
	return null;
}
function Redactor({ lang, x, setX, pdf, pages }) {
	const w = xw(lang);
	const [img, setImg] = (0, import_react.useState)("");
	const [drag, setDrag] = (0, import_react.useState)(null);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!pdf) {
			setImg("");
			return;
		}
		let dead = false;
		(async () => {
			const d = await openPdf(pdf);
			try {
				const c = await renderPageToCanvas(d, Math.min(x.redPage, d.numPages - 1) + 1, 1.4);
				if (!dead) setImg(c.toDataURL("image/png"));
			} finally {
				await closePdf(d);
			}
		})().catch(() => void 0);
		return () => {
			dead = true;
		};
	}, [pdf, x.redPage]);
	const pos = (e) => {
		const r = ref.current.getBoundingClientRect();
		return {
			x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
			y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))
		};
	};
	const mine = x.boxes.filter((b) => b.page === x.redPage);
	const rect = (d) => ({
		x: Math.min(d.x0, d.x1),
		y: Math.min(d.y0, d.y1),
		w: Math.abs(d.x1 - d.x0),
		h: Math.abs(d.y1 - d.y0)
	});
	if (!pdf) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: w.redHint
			}),
			pages > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.page }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btn,
						disabled: x.redPage === 0,
						onClick: () => setX((s) => ({
							...s,
							redPage: s.redPage - 1
						})),
						children: "‹"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						dir: "ltr",
						children: [
							x.redPage + 1,
							" / ",
							pages
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btn,
						disabled: x.redPage >= pages - 1,
						onClick: () => setX((s) => ({
							...s,
							redPage: s.redPage + 1
						})),
						children: "›"
					})
				]
			}) : null,
			img ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "relative mx-auto max-w-xl touch-none select-none overflow-hidden rounded-lg border border-white/10",
				"data-testid": "redact-page",
				onPointerDown: (e) => {
					e.target.setPointerCapture?.(e.pointerId);
					const p = pos(e);
					setDrag({
						x0: p.x,
						y0: p.y,
						x1: p.x,
						y1: p.y
					});
				},
				onPointerMove: (e) => {
					if (drag) {
						const p = pos(e);
						setDrag({
							...drag,
							x1: p.x,
							y1: p.y
						});
					}
				},
				onPointerUp: () => {
					if (drag) {
						const r = rect(drag);
						if (r.w > .005 && r.h > .005) setX((s) => ({
							...s,
							boxes: [...s.boxes, {
								page: s.redPage,
								...r
							}]
						}));
						setDrag(null);
					}
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img,
					alt: "",
					className: "block w-full",
					draggable: false
				}), [...mine, ...drag ? [{
					page: x.redPage,
					...rect(drag)
				}] : []].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bg-black/90 ring-1 ring-red-500",
					style: {
						left: `${b.x * 100}%`,
						top: `${b.y * 100}%`,
						width: `${b.w * 100}%`,
						height: `${b.h * 100}%`
					}
				}, i))]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 animate-pulse rounded-lg bg-white/5" }),
			x.boxes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted",
						children: [w.boxes, ":"]
					}),
					x.boxes.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: btn,
						onClick: () => setX((s) => ({
							...s,
							boxes: s.boxes.filter((_, j) => j !== i)
						})),
						children: [
							w.page,
							" ",
							b.page + 1,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" })
						]
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: btn,
						onClick: () => setX((s) => ({
							...s,
							boxes: []
						})),
						children: w.clearBoxes
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: x.flatten,
					onChange: (e) => setX((s) => ({
						...s,
						flatten: e.target.checked
					})),
					"data-testid": "flatten"
				}), w.flatten]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: w.flatNote
			})
		]
	});
}
var INV_KEY = "nibras-invoice";
function InvoiceForm({ lang, x, setX }) {
	const w = xw(lang);
	const inv = x.inv;
	const set = (p) => setX((s) => ({
		...s,
		inv: {
			...s.inv,
			...p
		}
	}));
	(0, import_react.useEffect)(() => {
		try {
			const d = JSON.parse(localStorage.getItem(INV_KEY) ?? "null");
			if (d?.items) setX((s) => ({
				...s,
				inv: {
					...s.inv,
					...d,
					date: today()
				}
			}));
		} catch {}
	}, [setX]);
	(0, import_react.useEffect)(() => {
		const h = setTimeout(() => localStorage.setItem(INV_KEY, JSON.stringify(inv)), 400);
		return () => clearTimeout(h);
	}, [inv]);
	const tot = invoiceTotals(inv);
	const row = (i, p) => set({ items: inv.items.map((it, j) => j === i ? {
		...it,
		...p
	} : it) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		"data-testid": "invoice-form",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.invTitle }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: field,
							placeholder: w.invDefault,
							value: inv.title,
							onChange: (e) => set({ title: e.target.value })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.number }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: inv.number,
						onChange: (e) => set({ number: e.target.value })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.date }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						className: field,
						value: inv.date,
						onChange: (e) => set({ date: e.target.value })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.due }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						className: field,
						value: inv.due,
						onChange: (e) => set({ due: e.target.value })
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.seller }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 4,
					className: field,
					value: inv.seller,
					onChange: (e) => set({ seller: e.target.value }),
					"data-testid": "inv-seller"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.buyer }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 4,
					className: field,
					value: inv.buyer,
					onChange: (e) => set({ buyer: e.target.value })
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden grid-cols-[1fr_5rem_7rem_7rem_2.5rem] gap-2 text-xs text-muted sm:grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w.item }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w.qty }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w.price }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w.sum }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						]
					}),
					inv.items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[1fr_5rem_7rem] gap-2 sm:grid-cols-[1fr_5rem_7rem_7rem_2.5rem]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: `${field} col-span-3 sm:col-span-1`,
								placeholder: w.item,
								value: it.name,
								onChange: (e) => row(i, { name: e.target.value }),
								"data-testid": `inv-name-${i}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: 0,
								step: "any",
								className: field,
								"aria-label": w.qty,
								value: it.qty,
								onChange: (e) => row(i, { qty: NUM(e.target.value) })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								min: 0,
								step: "any",
								className: field,
								"aria-label": w.price,
								value: it.price,
								onChange: (e) => row(i, { price: NUM(e.target.value) }),
								"data-testid": `inv-price-${i}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "self-center text-sm",
								dir: "ltr",
								children: money(it.qty * it.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btn,
								"aria-label": "×",
								disabled: inv.items.length < 2,
								onClick: () => set({ items: inv.items.filter((_, j) => j !== i) }),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})
						]
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: btn,
						onClick: () => set({ items: [...inv.items, {
							name: "",
							qty: 1,
							price: 0
						}] }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), w.addRow]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.currency }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: inv.currency,
						onChange: (e) => set({ currency: e.target.value })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.tax }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 0,
						max: 100,
						step: "any",
						className: field,
						value: inv.taxPct,
						onChange: (e) => set({ taxPct: NUM(e.target.value) })
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "self-end text-sm",
						dir: "ltr",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
							w.total,
							": ",
							money(tot.total),
							" ",
							inv.currency
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: w.notes }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				rows: 2,
				className: field,
				value: inv.notes,
				onChange: (e) => set({ notes: e.target.value })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: w.invNote
			})
		]
	});
}
async function runExtra(tool, lang, x, f, sheets, progress, errNoFile, errBadRange) {
	const w = xw(lang);
	const base = (f?.name ?? "document").replace(/\.[^.]+$/, "") || "document";
	if (tool === "invoice") {
		if (!x.inv.items.some((i) => i.name.trim())) throw new UserError(w.noItems);
		const bytes = await invoicePdf({
			...x.inv,
			title: x.inv.title.trim() || w.invDefault,
			labels: {
				seller: w.seller.replace(/\s*\(.*\)/, ""),
				buyer: w.buyer,
				item: w.item,
				qty: w.qty,
				price: w.price,
				sum: w.sum,
				subtotal: w.subtotal,
				tax: w.taxL,
				total: w.total,
				number: w.number,
				date: w.date,
				due: w.due
			}
		});
		return {
			name: `invoice-${x.inv.number || "1"}.pdf`.replace(/[^\w.-]+/g, "_"),
			bytes
		};
	}
	if (tool === "excel-pdf") {
		const s = sheets?.[x.sheetIdx] ?? sheets?.[0];
		if (!s) throw new UserError(errNoFile);
		if (!s.rows.length) throw new UserError(w.emptySheet);
		return {
			name: `${base}.pdf`,
			bytes: await tableToPdf(s.rows, {
				title: sheets.length > 1 ? s.name : void 0,
				header: x.sheetHeader,
				landscape: x.sheetLand === "auto" ? "auto" : x.sheetLand === "yes"
			})
		};
	}
	if (!f?.bytes) throw new UserError(errNoFile);
	if (tool === "unlock") return {
		name: `${base}-unlocked.pdf`,
		bytes: await unlockPdf(f.bytes, ""),
		note: f.wasLocked ? void 0 : w.notLocked
	};
	if (tool === "crop") {
		let pages;
		if (!x.cropAll) {
			const p = parseRange(x.cropRange, f.pages ?? 0);
			if (!p) throw new UserError(errBadRange);
			pages = p;
		}
		try {
			return {
				name: `${base}-cropped.pdf`,
				bytes: await cropPdf(f.bytes, x.crop, pages)
			};
		} catch (e) {
			if (e.message === "crop-too-big") throw new UserError(w.cropBig);
			throw e;
		}
	}
	if (tool === "grayscale") return {
		name: `${base}-gray.pdf`,
		bytes: await grayscalePdf(f.bytes, x.gray, progress)
	};
	if (tool === "redact") {
		if (!x.boxes.length) throw new UserError(w.noBoxes);
		return {
			name: `${base}-redacted.pdf`,
			bytes: await redactPdf(f.bytes, x.boxes, x.flatten, progress)
		};
	}
	return null;
}
var ICONS = {
	"write-pdf": PenLine,
	merge: Files,
	split: Scissors,
	compress: Minimize2,
	"image-pdf": Image,
	"pdf-image": FileImage,
	rotate: RotateCw,
	protect: Lock,
	watermark: Droplet,
	pages: ListOrdered,
	scan: ScanLine,
	sign: PenLine,
	ocr: ScanText,
	"pdf-ocr": FileType2,
	"pdf-word": FileOutput,
	preview: Eye,
	batch: Layers,
	"extract-pages": Check,
	"word-pdf": FilePlus2,
	"page-numbers": Hash,
	unlock: LockOpen,
	crop: Crop,
	grayscale: Contrast,
	"excel-pdf": Table2,
	redact: EyeOff,
	invoice: Receipt,
	"pdf-excel": Sheet,
	"ppt-pdf": Presentation,
	"pdf-ppt": Presentation
};
var KIND = {
	"write-pdf": "none",
	merge: "pdfs",
	split: "pdf",
	compress: "pdf",
	"image-pdf": "images",
	"pdf-image": "pdf",
	rotate: "pdf",
	protect: "pdf",
	watermark: "pdf",
	pages: "pdf",
	scan: "images",
	sign: "pdf",
	ocr: "images",
	"pdf-ocr": "pdf",
	"pdf-word": "pdf",
	preview: "pdf",
	batch: "pdfs",
	"extract-pages": "pdf",
	"word-pdf": "docx",
	"page-numbers": "pdf",
	unlock: "pdf",
	crop: "pdf",
	grayscale: "pdf",
	"excel-pdf": "sheet",
	redact: "pdf",
	invoice: "none",
	"pdf-excel": "pdf",
	"ppt-pdf": "pptx",
	"pdf-ppt": "pdf"
};
var nextId = 1;
var baseName = (n) => n.replace(/\.[^.]+$/, "") || "document";
var WM_POS = [
	{
		id: "top-left",
		s: "↖"
	},
	{
		id: "top-center",
		s: "↑"
	},
	{
		id: "top-right",
		s: "↗"
	},
	{
		id: "center-left",
		s: "←"
	},
	{
		id: "center",
		s: "•"
	},
	{
		id: "center-right",
		s: "→"
	},
	{
		id: "bottom-left",
		s: "↙"
	},
	{
		id: "bottom-center",
		s: "↓"
	},
	{
		id: "bottom-right",
		s: "↘"
	}
];
var GROUPS = [
	{
		id: "organize",
		tools: [
			"merge",
			"split",
			"pages",
			"extract-pages",
			"rotate",
			"page-numbers",
			"crop",
			"batch"
		],
		label: {
			az: "Səhifələri idarə et",
			en: "Organize",
			tr: "Sayfaları düzenle",
			ar: "تنظيم الصفحات",
			ru: "Страницы и файлы"
		}
	},
	{
		id: "convert",
		tools: [
			"pdf-image",
			"pdf-word",
			"word-pdf",
			"pdf-excel",
			"excel-pdf",
			"ppt-pdf",
			"pdf-ppt",
			"pdf-ocr",
			"ocr",
			"grayscale",
			"preview"
		],
		label: {
			az: "Çevir və oxu",
			en: "Convert & read",
			tr: "Dönüştür ve oku",
			ar: "تحويل وقراءة",
			ru: "Конвертация и чтение"
		}
	},
	{
		id: "create",
		tools: [
			"write-pdf",
			"image-pdf",
			"scan",
			"invoice"
		],
		label: {
			az: "Hazırla",
			en: "Create",
			tr: "Oluştur",
			ar: "إنشاء",
			ru: "Создание"
		}
	},
	{
		id: "secure",
		tools: [
			"compress",
			"protect",
			"unlock",
			"redact",
			"watermark",
			"sign"
		],
		label: {
			az: "Optimallaşdır və qoru",
			en: "Optimize & protect",
			tr: "Optimize et ve koru",
			ar: "تحسين وحماية",
			ru: "Сжатие и защита"
		}
	}
];
var NUM_POS = [
	{
		id: "top-left",
		s: "↖"
	},
	{
		id: "top-center",
		s: "↑"
	},
	{
		id: "top-right",
		s: "↗"
	},
	{
		id: "bottom-left",
		s: "↙"
	},
	{
		id: "bottom-center",
		s: "↓"
	},
	{
		id: "bottom-right",
		s: "↘"
	}
];
var NUM_T = {
	az: {
		from: "Hansı səhifədən başlasın",
		fromHint: "Üz qabığını nömrəsiz saxlamaq üçün 2 yazın.",
		start: "İlk rəqəm",
		startHint: "Nömrələnən ilk səhifədə görünən rəqəm.",
		pos: "Yer",
		fmt: "Görünüş",
		size: "Şrift ölçüsü",
		margin: "Kənardan məsafə",
		preview: "Nümunə",
		page: "səhifə"
	},
	en: {
		from: "Start on page",
		fromHint: "Set 2 to keep the cover unnumbered.",
		start: "First number",
		startHint: "The number shown on the first numbered page.",
		pos: "Position",
		fmt: "Format",
		size: "Font size",
		margin: "Distance from edge",
		preview: "Preview",
		page: "page"
	},
	tr: {
		from: "Başlangıç sayfası",
		fromHint: "Kapağı numarasız bırakmak için 2 yazın.",
		start: "İlk sayı",
		startHint: "Numaralanan ilk sayfada görünen sayı.",
		pos: "Konum",
		fmt: "Biçim",
		size: "Yazı boyutu",
		margin: "Kenardan uzaklık",
		preview: "Örnek",
		page: "sayfa"
	},
	ar: {
		from: "البدء من الصفحة",
		fromHint: "اكتب 2 لترك الغلاف بلا رقم.",
		start: "الرقم الأول",
		startHint: "الرقم الذي يظهر على أول صفحة مرقّمة.",
		pos: "الموضع",
		fmt: "الشكل",
		size: "حجم الخط",
		margin: "المسافة من الحافة",
		preview: "مثال",
		page: "صفحة"
	},
	ru: {
		from: "Начать со страницы",
		fromHint: "Укажите 2, чтобы обложка осталась без номера.",
		start: "Первое число",
		startHint: "Число на первой нумеруемой странице.",
		pos: "Место",
		fmt: "Вид",
		size: "Размер шрифта",
		margin: "Отступ от края",
		preview: "Пример",
		page: "стр."
	}
};
var OX = {
	az: {
		pickPptx: "PPTX seçin",
		errPptx: "Bu fayl PPTX deyil. Köhnə .ppt-ni PowerPoint-də PPTX kimi saxlayın.",
		noTable: "Mətn tapılmadı. Skan PDF-dirsə əvvəl «PDF-dən mətn (OCR)» alətini işlədin.",
		rows: "sətir",
		xlNote: "Sütunlar mətnin yerinə görə qurulur. Sadə cədvəllər yaxşı çıxır; birləşmiş xana və mürəkkəb cədvəli yoxlayın.",
		sheets: "Vərəqlər",
		perPage: "Hər səhifə ayrı vərəq",
		oneSheet: "Hamısı bir vərəqdə",
		slides: "slayd",
		pptNote: "Mətn qutuları və şəkillər yerində çəkilir. Tema fonu, qrafik, SmartArt və effektlər köçmür."
	},
	en: {
		pickPptx: "Choose a PPTX",
		errPptx: "This is not a PPTX file. Save an old .ppt as PPTX in PowerPoint.",
		noTable: "No text found. If it's a scanned PDF, run «PDF to text (OCR)» first.",
		rows: "rows",
		xlNote: "Columns are rebuilt from text positions. Simple tables work well; check merged cells and complex tables.",
		sheets: "Sheets",
		perPage: "One sheet per page",
		oneSheet: "All in one sheet",
		slides: "slides",
		pptNote: "Text boxes and pictures are drawn in place. Theme backgrounds, charts, SmartArt and effects are not copied."
	},
	tr: {
		pickPptx: "PPTX seçin",
		errPptx: "Bu dosya PPTX değil. Eski .ppt'yi PowerPoint'te PPTX olarak kaydedin.",
		noTable: "Metin bulunamadı. Taranmış PDF ise önce «PDF'ten metin (OCR)» aracını kullanın.",
		rows: "satır",
		xlNote: "Sütunlar metnin konumuna göre kurulur. Basit tablolar iyi çıkar; birleşik hücre ve karmaşık tabloları kontrol edin.",
		sheets: "Sayfalar",
		perPage: "Her sayfa ayrı sayfa",
		oneSheet: "Hepsi tek sayfada",
		slides: "slayt",
		pptNote: "Metin kutuları ve görseller yerinde çizilir. Tema arka planı, grafik, SmartArt ve efektler aktarılmaz."
	},
	ar: {
		pickPptx: "اختر ملف PPTX",
		errPptx: "هذا ليس ملف PPTX. احفظ ملف ppt القديم بصيغة PPTX في PowerPoint.",
		noTable: "لم يُعثر على نص. إن كان PDF ممسوحاً فاستخدم أداة OCR أولاً.",
		rows: "صف",
		xlNote: "تُبنى الأعمدة من مواضع النص. الجداول البسيطة تخرج جيداً؛ افحص الخلايا المدمجة والجداول المعقدة.",
		sheets: "الأوراق",
		perPage: "ورقة لكل صفحة",
		oneSheet: "الكل في ورقة واحدة",
		slides: "شريحة",
		pptNote: "تُرسم مربعات النص والصور في مكانها. لا تُنقل خلفيات السمة والرسوم البيانية وSmartArt والتأثيرات."
	},
	ru: {
		pickPptx: "Выберите PPTX",
		errPptx: "Это не PPTX. Сохраните старый .ppt как PPTX в PowerPoint.",
		noTable: "Текст не найден. Если это скан, сначала запустите «PDF в текст (OCR)».",
		rows: "строк",
		xlNote: "Столбцы восстанавливаются по положению текста. Простые таблицы выходят хорошо; проверьте объединённые ячейки и сложные таблицы.",
		sheets: "Листы",
		perPage: "Каждая страница — лист",
		oneSheet: "Всё на одном листе",
		slides: "слайдов",
		pptNote: "Текстовые блоки и картинки рисуются на своих местах. Фон темы, диаграммы, SmartArt и эффекты не переносятся."
	}
};
var basePath = (lang) => lang === "az" ? "/pdf" : `/${lang}/pdf`;
function PdfTool({ lang, tool }) {
	const t = COPY[lang];
	const names = TOOL_TEXT[lang];
	const dir = lang === "ar" ? "rtl" : "ltr";
	const navigate = useNavigate();
	const base = basePath(lang);
	const go = (to) => {
		navigate({ to });
		window.scrollTo({ top: 0 });
	};
	const link = (to) => ({
		href: to,
		onClick: (e) => {
			if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
			e.preventDefault();
			go(to);
		}
	});
	(0, import_react.useEffect)(() => {
		const h = location.hash.replace("#", "");
		if (!tool && TOOL_IDS.includes(h)) navigate({
			to: `${base}/${h}`,
			replace: true
		});
	}, [
		tool,
		base,
		navigate
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		dir,
		className: "pdf-tool",
		children: tool ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			...link(base),
			className: `${btn} mb-4`,
			"data-testid": "back",
			children: [dir === "rtl" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), t.back]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workspace, {
			tool,
			lang,
			t,
			title: names[tool].title,
			desc: names[tool].description
		}, tool)] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-testid": "tool-grid",
			children: [GROUPS.map((g, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": g.label[lang],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "pdf-group-title",
					children: g.label[lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3",
					children: g.tools.map((id, i) => {
						const Icon = ICONS[id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							...link(`${base}/${id}`),
							"data-tool": id,
							className: "pdf-tile",
							style: { ["--i"]: gi * 3 + i },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pdf-ico",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-semibold",
										children: names[id].title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-xs leading-snug text-muted",
										children: names[id].description
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "pdf-arrow size-4 shrink-0 self-center" })
							]
						}, id);
					})
				})]
			}, g.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-center text-xs text-muted",
				children: t.privateNote
			})]
		})
	});
}
function Workspace({ tool, lang, t, title, desc }) {
	const kind = KIND[tool];
	const ox = OX[lang] ?? OX.en;
	const [xlMode, setXlMode] = (0, import_react.useState)("pages");
	const [items, setItems] = (0, import_react.useState)([]);
	const [outs, setOuts] = (0, import_react.useState)([]);
	const [err, setErr] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(null);
	const cancelled = (0, import_react.useRef)(false);
	const [pageSize, setPageSize] = (0, import_react.useState)("a4");
	const [quality, setQuality] = (0, import_react.useState)("balanced");
	const [mode, setMode] = (0, import_react.useState)("strong");
	const [rot, setRot] = (0, import_react.useState)(90);
	const [scope, setScope] = (0, import_react.useState)("all");
	const [range, setRange] = (0, import_react.useState)("");
	const [pwd, setPwd] = (0, import_react.useState)("");
	const [pwd2, setPwd2] = (0, import_react.useState)("");
	const [wm, setWm] = (0, import_react.useState)(t.wmDefault);
	const [wmPos, setWmPos] = (0, import_react.useState)("center");
	const [imgFmt, setImgFmt] = (0, import_react.useState)("png");
	const [ocrLang, setOcrLang] = (0, import_react.useState)("auto");
	const [batchOp, setBatchOp] = (0, import_react.useState)("compress");
	const [numFrom, setNumFrom] = (0, import_react.useState)(1);
	const [numStart, setNumStart] = (0, import_react.useState)(1);
	const [numPos, setNumPos] = (0, import_react.useState)("bottom-center");
	const [numFmt, setNumFmt] = (0, import_react.useState)("n");
	const [numSize, setNumSize] = (0, import_react.useState)(11);
	const [numMargin, setNumMargin] = (0, import_react.useState)(28);
	const [forceOcr, setForceOcr] = (0, import_react.useState)(false);
	const [xs, setXs] = (0, import_react.useState)(X_DEFAULT);
	const [sheets, setSheets] = (0, import_react.useState)(null);
	const [viewZoom, setViewZoom] = (0, import_react.useState)(1);
	const [openOut, setOpenOut] = (0, import_react.useState)(null);
	const [openBytes, setOpenBytes] = (0, import_react.useState)(null);
	const [wText, setWText] = (0, import_react.useState)("");
	const [wTitle, setWTitle] = (0, import_react.useState)("");
	const [wSize, setWSize] = (0, import_react.useState)(12);
	const [wAlign, setWAlign] = (0, import_react.useState)("left");
	const [wBold, setWBold] = (0, import_react.useState)(false);
	const [wMargin, setWMargin] = (0, import_react.useState)(54);
	const [wNums, setWNums] = (0, import_react.useState)(true);
	const [wPage, setWPage] = (0, import_react.useState)("a4");
	const [order, setOrder] = (0, import_react.useState)([]);
	const [sel, setSel] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [splitMode, setSplitMode] = (0, import_react.useState)("pick");
	const [splitText, setSplitText] = (0, import_react.useState)("");
	const [splitN, setSplitN] = (0, import_react.useState)(10);
	const [splitRows, setSplitRows] = (0, import_react.useState)([""]);
	const [sigPng, setSigPng] = (0, import_react.useState)(null);
	const [sigUrl, setSigUrl] = (0, import_react.useState)("");
	const [sigPage, setSigPage] = (0, import_react.useState)(0);
	const [sigPos, setSigPos] = (0, import_react.useState)(null);
	const [sigSize, setSigSize] = (0, import_react.useState)(.25);
	const [signCanvas, setSignCanvas] = (0, import_react.useState)(null);
	const first = items[0];
	const firstBytes = first?.bytes && !first.locked ? first.bytes : null;
	const thumbs = usePageThumbs(tool === "pages" || tool === "extract-pages" || tool === "split" && splitMode === "pick" ? firstBytes : null, .35, tool === "split" ? 60 : 200);
	(0, import_react.useEffect)(() => {
		if (tool !== "write-pdf") return;
		try {
			const d = JSON.parse(localStorage.getItem("nibras-pdf-draft") ?? "null");
			if (d?.text) {
				setWText(d.text);
				setWTitle(d.title ?? "");
			}
		} catch {}
	}, [tool]);
	(0, import_react.useEffect)(() => {
		if (tool !== "write-pdf") return;
		const id = new URLSearchParams(location.search).get("t");
		const tp = id && DOC_TEMPLATES.find((x) => x.id === id);
		if (tp) {
			setWTitle(tp.title[lang] ?? tp.title.az);
			setWText(tp.body[lang] ?? tp.body.az);
		}
	}, [tool, lang]);
	(0, import_react.useEffect)(() => {
		if (tool !== "write-pdf") return;
		const h = setTimeout(() => localStorage.setItem("nibras-pdf-draft", JSON.stringify({
			text: wText,
			title: wTitle
		})), 400);
		return () => clearTimeout(h);
	}, [
		tool,
		wText,
		wTitle
	]);
	(0, import_react.useEffect)(() => {
		if (first?.pages) setOrder(Array.from({ length: first.pages }, (_, i) => ({
			index: i,
			del: false
		})));
		else setOrder([]);
		setSel(/* @__PURE__ */ new Set());
		setSigPage(0);
		setSigPos(null);
	}, [first?.id, first?.pages]);
	(0, import_react.useEffect)(() => {
		if (tool !== "sign" || !firstBytes) {
			setSignCanvas(null);
			return;
		}
		let dead = false;
		(async () => {
			const d = await openPdf(firstBytes);
			try {
				const c = await renderPageToCanvas(d, sigPage + 1, 1.4);
				if (!dead) setSignCanvas(c);
			} finally {
				await closePdf(d);
			}
		})().catch(() => void 0);
		return () => {
			dead = true;
		};
	}, [
		tool,
		firstBytes,
		sigPage
	]);
	(0, import_react.useEffect)(() => {
		if (!openOut) {
			setOpenBytes(null);
			return;
		}
		openOut.blob.arrayBuffer().then((b) => setOpenBytes(new Uint8Array(b)));
	}, [openOut]);
	const accept = kind === "pptx" ? ".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation" : kind === "sheet" ? EXTRA_ACCEPT : kind === "images" ? "image/*" : kind === "docx" ? ".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" : "application/pdf,.pdf";
	const multiple = kind === "pdfs" || kind === "images";
	const addFiles = (0, import_react.useCallback)(async (files) => {
		setErr("");
		setOuts([]);
		const list = multiple ? files : files.slice(0, 1);
		const made = [];
		for (const file of list) {
			const item = {
				id: nextId++,
				file,
				name: file.name
			};
			if (kind === "images") {
				if (!file.type.startsWith("image/")) {
					setErr(t.errNoImages);
					continue;
				}
			} else if (kind === "sheet") try {
				const sh = await readSheetFile(file, lang);
				setSheets(sh);
				setXs((x) => ({
					...x,
					sheetIdx: 0
				}));
			} catch (e) {
				setErr(e.message);
				continue;
			}
			else if (kind === "pptx") {
				if (!/\.pptx$/i.test(file.name)) {
					setErr(ox.errPptx);
					continue;
				}
				item.bytes = new Uint8Array(await file.arrayBuffer());
			} else if (kind === "docx") {
				if (!/\.docx$/i.test(file.name)) {
					setErr(t.errNotDocx);
					continue;
				}
				item.bytes = new Uint8Array(await file.arrayBuffer());
			} else {
				if (!/\.pdf$/i.test(file.name) && file.type !== "application/pdf") {
					setErr(t.errNotPdf);
					continue;
				}
				item.bytes = new Uint8Array(await file.arrayBuffer());
				try {
					item.pages = await pageCount(item.bytes);
				} catch (e) {
					if (isEncryptedError(e)) item.locked = true;
					else {
						setErr(t.errNotPdf);
						continue;
					}
				}
			}
			made.push(item);
		}
		setItems((cur) => multiple ? [...cur, ...made] : made);
	}, [
		kind,
		multiple,
		t,
		lang
	]);
	(0, import_react.useEffect)(() => {
		if (kind !== "images") return;
		const h = takeHandOff();
		if (h.length) addFiles(h);
	}, [kind, addFiles]);
	const unlock = async (id, password) => {
		const it = items.find((i) => i.id === id);
		if (!it?.bytes) return;
		try {
			const bytes = await unlockPdf(it.bytes, password);
			const pages = await pageCount(bytes);
			setItems((cur) => cur.map((i) => i.id === id ? {
				...i,
				bytes,
				pages,
				locked: false,
				wasLocked: true
			} : i));
			setErr("");
		} catch (e) {
			console.error("[pdf] unlock", e?.stack ?? String(e));
			setErr(t.errLocked);
		}
	};
	const move = (i, d) => setItems((cur) => {
		const j = i + d;
		if (j < 0 || j >= cur.length) return cur;
		const c = cur.slice();
		[c[i], c[j]] = [c[j], c[i]];
		return c;
	});
	const progress = (label) => (done, total) => setBusy({
		label,
		frac: total ? done / total : 0
	});
	const stop = () => cancelled.current;
	const pdfOut = (name, bytes, note) => ({
		name,
		blob: new Blob([bytes], { type: "application/pdf" }),
		kind: "pdf",
		note
	});
	const zipOut = (name, files) => {
		const z = zipSync(Object.fromEntries(files.map((f) => [f.name, [f.data, { level: 0 }]])));
		return {
			name,
			blob: new Blob([z], { type: "application/zip" }),
			kind: "zip"
		};
	};
	const docxBlob = (text) => new Blob([createDocxFromText(text)], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
	const textOut = (name, text, note) => ({
		name: `${name}.txt`,
		blob: new Blob([text], { type: "text/plain;charset=utf-8" }),
		kind: "text",
		text,
		note,
		extra: [{
			label: "DOCX",
			name: `${name}.docx`,
			blob: docxBlob(text)
		}]
	});
	const pagesSel = (total) => {
		if (scope === "all") return void 0;
		return parseRange(range, total);
	};
	const run = async () => {
		setErr("");
		setOuts([]);
		cancelled.current = false;
		try {
			const res = [];
			const need = (n = 1) => {
				if (kind !== "none" && items.length < n) throw new Error(n > 1 ? t.errNeedTwo : t.errNoFile);
				if (items.some((i) => i.locked)) throw new Error(t.errLocked);
			};
			setBusy({
				label: t.working,
				frac: 0
			});
			const f = items[0];
			switch (tool) {
				case "merge":
					need(2);
					res.push(pdfOut("merged.pdf", await mergePdfs(items.map((i) => i.bytes))));
					break;
				case "split": {
					need();
					const total = f.pages ?? await pageCount(f.bytes);
					const b = baseName(f.name);
					let groups;
					if (splitMode === "pick") {
						const g = parseRange(splitText, total);
						groups = g ? [g] : null;
					} else groups = splitGroups(total, {
						mode: splitMode,
						n: splitN,
						ranges: splitRows
					});
					if (!groups) throw new Error(splitMode === "ranges" || splitMode === "pick" ? t.splitBad : t.errNoSel);
					const parts = await splitInto(f.bytes, groups, (d, n) => setBusy({
						label: t.working,
						frac: d / n
					}), stop);
					const label = (g) => g.length === 1 ? `p${g[0] + 1}` : g[g.length - 1] - g[0] + 1 === g.length ? `p${g[0] + 1}-${g[g.length - 1] + 1}` : `p${g.map((x) => x + 1).slice(0, 4).join("_")}${g.length > 4 ? "_etc" : ""}`;
					const files = parts.map((x, i) => ({
						name: parts.length === 1 ? `${b}-${label(groups[0])}.pdf` : `${b}-${label(groups[i])}.pdf`,
						data: x
					}));
					if (files.length > 1) res.push(zipOut(`${b}-split.zip`, files));
					files.slice(0, 20).forEach((x) => res.push(pdfOut(x.name, x.data)));
					break;
				}
				case "compress": {
					need();
					const b = baseName(f.name);
					let out = mode === "strong" ? await compressStrong(f.bytes, quality, progress(t.working), stop) : await compressLight(f.bytes);
					if (!out) break;
					const smaller = out.byteLength < f.bytes.byteLength;
					res.push(pdfOut(`${b}-compressed.pdf`, smaller ? out : f.bytes, smaller ? `${t.size}: ${fmtSize(f.bytes.byteLength)} → ${fmtSize(out.byteLength)} (${t.saved} ${Math.round((1 - out.byteLength / f.bytes.byteLength) * 100)}%)` : t.larger));
					out = null;
					break;
				}
				case "image-pdf":
				case "scan":
					if (!items.length) throw new Error(t.errNoImages);
					res.push(pdfOut(tool === "scan" ? "scan.pdf" : "images.pdf", await imagesToPdf(items.map((i) => i.file), pageSize, quality, progress(t.working))));
					break;
				case "pdf-image": {
					need();
					const blobs = await pdfToImages(f.bytes, imgFmt, quality, progress(t.working), stop);
					const ext = imgFmt === "png" ? "png" : "jpg";
					const b = baseName(f.name);
					const buf = await Promise.all(blobs.map(async (x) => new Uint8Array(await x.arrayBuffer())));
					res.push(zipOut(`${b}-images.zip`, buf.map((d, i) => ({
						name: `${b}-${i + 1}.${ext}`,
						data: d
					}))));
					blobs.slice(0, 20).forEach((x, i) => res.push({
						name: `${b}-${i + 1}.${ext}`,
						blob: x,
						kind: "image"
					}));
					break;
				}
				case "rotate": {
					need();
					const p = pagesSel(f.pages ?? 0);
					if (p === null) throw new Error(t.errBadRange);
					res.push(pdfOut(`${baseName(f.name)}-rotated.pdf`, await rotatePdf(f.bytes, rot, p)));
					break;
				}
				case "protect":
					need();
					if (pwd.length < 4) throw new Error(t.errPwdShort);
					if (pwd !== pwd2) throw new Error(t.errPwdMismatch);
					res.push(pdfOut(`${baseName(f.name)}-protected.pdf`, await protectPdf(f.bytes, pwd)));
					break;
				case "watermark": {
					need();
					const p = pagesSel(f.pages ?? 0);
					if (p === null) throw new Error(t.errBadRange);
					res.push(pdfOut(`${baseName(f.name)}-watermark.pdf`, await watermarkPdf(f.bytes, wm.trim() || "NIBRAS PDF", wmPos, p)));
					break;
				}
				case "page-numbers":
					need();
					res.push(pdfOut(`${baseName(f.name)}-numbered.pdf`, await addPageNumbers(f.bytes, {
						fromPage: numFrom,
						start: numStart,
						position: numPos,
						format: numFmt,
						size: Math.max(6, Math.min(36, numSize || 11)),
						margin: Math.max(8, Math.min(120, numMargin || 28))
					})));
					break;
				case "pages": {
					need();
					const keep = order.filter((o) => !o.del).map((o) => o.index);
					if (!keep.length) throw new Error(t.errNoSel);
					res.push(pdfOut(`${baseName(f.name)}-pages.pdf`, await reorderPages(f.bytes, keep)));
					break;
				}
				case "extract-pages": {
					need();
					const idx = [...sel].sort((a, b) => a - b);
					if (!idx.length) throw new Error(t.errNoSel);
					res.push(pdfOut(`${baseName(f.name)}-extract.pdf`, await extractPages(f.bytes, idx)));
					break;
				}
				case "sign":
					need();
					if (!sigPng) throw new Error(t.errNoSign);
					if (!sigPos) throw new Error(t.signHint);
					res.push(pdfOut(`${baseName(f.name)}-signed.pdf`, await signPdf(f.bytes, sigPng, sigPage, sigPos.x, sigPos.y, sigSize)));
					break;
				case "ocr": {
					if (!items.length) throw new Error(t.errNoImages);
					const canvases = [];
					for (const it of items) {
						const bmp = await createImageBitmap(it.file);
						const k = Math.min(3, 3e3 / Math.max(bmp.width, bmp.height));
						const c = document.createElement("canvas");
						c.width = Math.round(bmp.width * Math.max(k, 1));
						c.height = Math.round(bmp.height * Math.max(k, 1));
						const cx = c.getContext("2d", { willReadFrequently: true });
						cx.fillStyle = "#fff";
						cx.fillRect(0, 0, c.width, c.height);
						cx.drawImage(bmp, 0, 0, c.width, c.height);
						bmp.close();
						canvases.push(preprocessForOcr(c));
					}
					const pagesOut = await ocrDetailed(canvases, ocrLang === "auto" ? await detectOcrLangs(canvases[0], ocrLangForSite(lang)) : ocrLang === "all" ? [
						"aze",
						"eng",
						"tur",
						"rus",
						"ara"
					] : [ocrLang], {
						onProgress: (d, n, fr) => setBusy({
							label: `${t.ocrWorking} ${d + 1}/${n}`,
							frac: (d + fr) / n
						}),
						shouldCancel: stop
					});
					const text = pagesOut.map((p) => p.text).join("\n\n").trim();
					if (!text) throw new Error(t.errNoText);
					const avg = Math.round(pagesOut.reduce((a, p) => a + p.confidence, 0) / Math.max(1, pagesOut.length));
					res.push(textOut("text", text, `${t.confidence}: ${avg}%`));
					break;
				}
				case "pdf-ocr":
				case "pdf-word": {
					need();
					const r = await extractTextSmart(f.bytes, {
						uiLang: lang,
						ocr: tool === "pdf-ocr" && forceOcr ? "force" : "auto",
						langs: ocrLang === "auto" ? "auto" : ocrLang === "all" ? [
							"aze",
							"eng",
							"tur",
							"rus",
							"ara"
						] : [ocrLang, ...ocrLang === "eng" ? [] : ["eng"]],
						shouldCancel: stop,
						onProgress: (p) => setBusy({
							label: `${p.phase === "ocr" ? t.ocrWorking : p.phase === "render" ? t.preparing : t.working} ${p.page}/${p.total}`,
							frac: p.phase === "text" ? p.fraction * .2 : .2 + p.fraction * .8
						})
					});
					if (!r.text.trim()) throw new Error(t.errNoText);
					const note = [r.usedOcr ? `${t.ocrUsed} (${r.langs.join("+")})${r.avgConfidence != null ? ` · ${t.confidence}: ${r.avgConfidence}%` : ""}` : t.textLayer, r.lowConfidencePages.length ? `${t.lowConf}: ${r.lowConfidencePages.join(", ")}` : ""].filter(Boolean).join(" · ");
					if (tool === "pdf-word") res.push({
						name: `${baseName(f.name)}.docx`,
						blob: docxBlob(r.text),
						kind: "docx",
						note: `${note} · ${t.wordNote}`
					});
					else res.push(textOut(baseName(f.name), r.text, note));
					break;
				}
				case "word-pdf": {
					need();
					let text;
					try {
						text = docxToText(f.bytes);
					} catch {
						throw new Error(t.errNotDocx);
					}
					if (!text) throw new Error(t.errNoText);
					res.push(pdfOut(`${baseName(f.name)}.pdf`, await textToPdf(text, {
						size: "a4",
						fontSize: 12,
						align: "left",
						bold: false,
						margin: 56,
						pageNumbers: true
					}), t.textOnly));
					break;
				}
				case "write-pdf":
					if (!wText.trim() && !wTitle.trim()) throw new Error(t.errNoText);
					res.push(pdfOut("document.pdf", await textToPdf(wText, {
						size: wPage,
						fontSize: wSize,
						align: wAlign,
						bold: wBold,
						margin: wMargin,
						pageNumbers: wNums,
						title: wTitle
					})));
					break;
				case "batch": {
					need(1);
					const files = [];
					for (let i = 0; i < items.length; i++) {
						if (stop()) break;
						setBusy({
							label: t.working,
							frac: i / items.length
						});
						const it = items[i];
						const b = baseName(it.name);
						if (batchOp === "compress") files.push({
							name: `${b}-compressed.pdf`,
							data: await compressLight(it.bytes)
						});
						else if (batchOp === "rotate") files.push({
							name: `${b}-rotated.pdf`,
							data: await rotatePdf(it.bytes, 90)
						});
						else if (batchOp === "watermark") files.push({
							name: `${b}-watermark.pdf`,
							data: await watermarkPdf(it.bytes, wm.trim() || "NIBRAS PDF", wmPos)
						});
						else (await splitPdf(it.bytes)).forEach((p, k) => files.push({
							name: `${b}-${k + 1}.pdf`,
							data: p
						}));
					}
					res.push(zipOut("batch.zip", files));
					if (files.length <= 10) files.forEach((x) => res.push(pdfOut(x.name, x.data)));
					break;
				}
				case "pdf-ppt": {
					need();
					const blobs = await pdfToImages(f.bytes, "jpeg", "high", progress(t.working), stop);
					const { imagesToPptx } = await import("./images-to-pptx-C5_U08yP.mjs");
					res.push({
						name: `${baseName(f.name)}.pptx`,
						blob: await imagesToPptx(blobs, "jpg"),
						kind: "zip",
						note: `${blobs.length} slides`
					});
					break;
				}
				case "pdf-excel": {
					need();
					const pagesT = await pdfToTables(f.bytes, progress(t.working), stop);
					const sheets = xlMode === "one" ? [{
						name: "PDF",
						rows: pagesT.flatMap((sh, i) => i && sh.rows.length ? [[], ...sh.rows] : sh.rows)
					}] : pagesT;
					const cells = sheets.reduce((a, sh) => a + sh.rows.length, 0);
					if (!cells) throw new UserError(ox.noTable);
					const blob = new Blob([await sheetsToXlsx(sheets.filter((sh) => sh.rows.length))], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
					res.push({
						name: `${baseName(f.name)}.xlsx`,
						blob,
						kind: "xlsx",
						note: `${cells} ${ox.rows} · ${ox.xlNote}`
					});
					break;
				}
				case "ppt-pdf": {
					need();
					let r;
					try {
						r = await pptxToPdf(f.bytes, progress(t.working));
					} catch (e) {
						if (e instanceof Error && /not-pptx|zip|invalid/i.test(e.message)) throw new UserError(ox.errPptx);
						throw e;
					}
					res.push(pdfOut(`${baseName(f.name)}.pdf`, r.bytes, `${r.slides} ${ox.slides} · ${ox.pptNote}`));
					break;
				}
				case "preview":
					need();
					break;
				case "unlock":
				case "crop":
				case "grayscale":
				case "excel-pdf":
				case "redact":
				case "invoice": {
					if (kind === "pdf") need();
					const o = await runExtra(tool, lang, xs, f, sheets, progress(t.working), t.errNoFile, t.errBadRange);
					if (o) res.push(pdfOut(o.name, o.bytes, o.note));
					break;
				}
			}
			if (!cancelled.current) setOuts(res);
		} catch (e) {
			const msg = e?.message ?? "";
			const known = Object.values(t).includes(msg) || msg === t.noTextHint || e instanceof UserError;
			setErr(known ? msg : isEncryptedError(e) ? t.errLocked : t.errFailed);
			if (!known) console.error("[pdf]", e?.stack ?? String(e));
		} finally {
			setBusy(null);
		}
	};
	const sigPad = (0, import_react.useRef)(null);
	const drawing = (0, import_react.useRef)(false);
	const pt = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		return {
			x: (e.clientX - r.left) / r.width * e.currentTarget.width,
			y: (e.clientY - r.top) / r.height * e.currentTarget.height
		};
	};
	const exportSig = () => {
		const c = sigPad.current;
		const d = c.getContext("2d").getImageData(0, 0, c.width, c.height).data;
		let x0 = c.width, y0 = c.height, x1 = 0, y1 = 0;
		for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) if (d[(y * c.width + x) * 4 + 3] > 0) {
			x0 = Math.min(x0, x);
			y0 = Math.min(y0, y);
			x1 = Math.max(x1, x);
			y1 = Math.max(y1, y);
		}
		if (x1 <= x0 || y1 <= y0) {
			setSigPng(null);
			setSigUrl("");
			return;
		}
		const pad = 6;
		const out = document.createElement("canvas");
		out.width = x1 - x0 + 12;
		out.height = y1 - y0 + 12;
		out.getContext("2d").drawImage(c, x0 - pad, y0 - pad, out.width, out.height, 0, 0, out.width, out.height);
		const url = out.toDataURL("image/png");
		setSigUrl(url);
		const bin = atob(url.split(",")[1]);
		setSigPng(Uint8Array.from(bin, (ch) => ch.charCodeAt(0)));
	};
	const videoRef = (0, import_react.useRef)(null);
	const [cam, setCam] = (0, import_react.useState)(null);
	const startCam = async () => {
		setErr("");
		try {
			const s = await navigator.mediaDevices.getUserMedia({
				video: { facingMode: { ideal: "environment" } },
				audio: false
			});
			setCam(s);
		} catch {
			setErr(t.errCamera);
		}
	};
	(0, import_react.useEffect)(() => {
		if (cam && videoRef.current) {
			videoRef.current.srcObject = cam;
			videoRef.current.play().catch(() => void 0);
		}
		return () => {
			cam?.getTracks().forEach((x) => x.stop());
		};
	}, [cam]);
	const capture = () => {
		const v = videoRef.current;
		if (!v || !v.videoWidth) return;
		const c = document.createElement("canvas");
		c.width = v.videoWidth;
		c.height = v.videoHeight;
		c.getContext("2d").drawImage(v, 0, 0);
		c.toBlob((b) => b && addFiles([new File([b], `scan-${Date.now()}.jpg`, { type: "image/jpeg" })]), "image/jpeg", .92);
	};
	const imgUrls = (0, import_react.useMemo)(() => kind === "images" ? items.map((i) => URL.createObjectURL(i.file)) : [], [items, kind]);
	(0, import_react.useEffect)(() => () => imgUrls.forEach((u) => URL.revokeObjectURL(u)), [imgUrls]);
	const showRange = tool === "rotate" || tool === "watermark";
	const hasFiles = kind === "none" || items.length > 0;
	const noRun = tool === "preview";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		"data-testid": `tool-${tool}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-bold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: desc
			})] }),
			kind !== "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDrop, {
				accept,
				multiple,
				label: items.length && multiple ? t.add : kind === "images" ? t.pickImages : kind === "pdfs" ? t.pickPdfs : kind === "docx" ? t.pickDocx : kind === "pptx" ? ox.pickPptx : kind === "sheet" ? lang === "az" ? "XLSX və ya CSV seçin" : lang === "tr" ? "XLSX veya CSV seçin" : lang === "ar" ? "اختر XLSX أو CSV" : lang === "ru" ? "Выберите XLSX или CSV" : "Choose an XLSX or CSV" : t.pickPdf,
				hint: t.dropHint,
				onFiles: addFiles,
				compact: items.length > 0,
				testId: "pick"
			}) : null,
			kind !== "none" && !items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentFiles, {
				accept,
				onPick: (f) => void addFiles([f])
			}) : null,
			tool === "scan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: card,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-muted",
					children: t.camHint
				}), cam ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						playsInline: true,
						muted: true,
						className: "max-h-[50vh] w-full rounded-xl bg-black",
						"data-testid": "cam-video"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: btnPrimary,
							onClick: capture,
							"data-testid": "capture",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }), t.capture]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: () => setCam(null),
							children: t.cancel
						})]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: btn,
						onClick: startCam,
						"data-testid": "cam-open",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }), t.camStart]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: `${btn} cursor-pointer`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }),
							t.takePhoto,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "file",
								accept: "image/*",
								capture: "environment",
								hidden: true,
								onChange: (e) => {
									const f = [...e.target.files ?? []];
									e.target.value = "";
									if (f.length) addFiles(f);
								}
							})
						]
					})]
				})]
			}) : null,
			items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				"data-testid": "file-list",
				children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "pdf-surface flex flex-wrap items-center gap-3 px-3 py-2 text-sm",
					children: [
						kind === "images" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: imgUrls[i],
							alt: "",
							className: "size-12 rounded-md object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-medium",
								title: it.name,
								children: it.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted",
								children: [fmtSize(it.file.size), it.pages ? ` · ${t.nPages(it.pages)}` : ""]
							})]
						}),
						it.locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnlockRow, {
							t,
							onUnlock: (p) => unlock(it.id, p)
						}) : null,
						multiple && items.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btn,
								"aria-label": t.moveLeft,
								onClick: () => move(i, -1),
								disabled: i === 0,
								children: "↑"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btn,
								"aria-label": t.moveRight,
								onClick: () => move(i, 1),
								disabled: i === items.length - 1,
								children: "↓"
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							"aria-label": t.remove,
							onClick: () => {
								setItems((c) => c.filter((x) => x.id !== it.id));
								setOuts([]);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})
					]
				}, it.id))
			}) : null,
			hasFiles && tool !== "preview" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `${card} space-y-4`,
				"data-testid": "options",
				children: [
					tool === "image-pdf" || tool === "scan" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.pageSize }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
						name: t.pageSize,
						value: pageSize,
						onChange: setPageSize,
						options: [
							{
								id: "a4",
								label: "A4"
							},
							{
								id: "a5",
								label: "A5"
							},
							{
								id: "letter",
								label: "Letter"
							},
							{
								id: "legal",
								label: "Legal"
							},
							{
								id: "fit",
								label: t.fit
							}
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityPick, {
						t,
						v: quality,
						set: setQuality
					})] }) : null,
					tool === "compress" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.mode }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
							name: t.mode,
							value: mode,
							onChange: setMode,
							options: [{
								id: "light",
								label: t.modeLight
							}, {
								id: "strong",
								label: t.modeStrong
							}]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted",
							children: [t.modeHint, mode === "strong" ? ` ${t.strongNote}` : ""]
						})
					] }), mode === "strong" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityPick, {
						t,
						v: quality,
						set: setQuality
					}) : null] }) : null,
					tool === "pdf-image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.format }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
						name: t.format,
						value: imgFmt,
						onChange: setImgFmt,
						options: [{
							id: "png",
							label: "PNG"
						}, {
							id: "jpeg",
							label: "JPG"
						}]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityPick, {
						t,
						v: quality,
						set: setQuality
					})] }) : null,
					tool === "rotate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.mode }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
						name: "rotation",
						value: String(rot),
						onChange: (v) => setRot(Number(v)),
						options: [
							{
								id: "270",
								label: t.rotLeft
							},
							{
								id: "90",
								label: t.rotRight
							},
							{
								id: "180",
								label: t.rot180
							}
						]
					})] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtraOptions, {
						tool,
						lang,
						x: xs,
						setX: setXs,
						pdf: firstBytes,
						pages: first?.pages ?? 0,
						sheets,
						t
					}),
					tool === "page-numbers" ? (() => {
						const nt = NUM_T[lang];
						const total = first?.pages ?? 0;
						const last = numStart + Math.max(0, total - numFrom);
						const sample = numFmt === "n-of" ? `${numStart} / ${total ? last : "N"}` : numFmt === "dash" ? `- ${numStart} -` : String(numStart);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							"data-testid": "num-ui",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: nt.from }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 1,
										max: total || void 0,
										className: field,
										value: numFrom,
										onChange: (e) => setNumFrom(Math.max(1, Number(e.target.value) || 1)),
										"data-testid": "num-from"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: nt.fromHint
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: nt.start }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 0,
										className: field,
										value: numStart,
										onChange: (e) => setNumStart(Math.max(0, Number(e.target.value) || 0)),
										"data-testid": "num-start"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: nt.startHint
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: nt.pos }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid w-36 grid-cols-3 gap-1.5",
									dir: "ltr",
									children: NUM_POS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": p.id,
										"data-pos": p.id,
										onClick: () => setNumPos(p.id),
										className: `aspect-square rounded-lg border text-lg ${numPos === p.id ? "border-primary bg-primary/25" : "border-border bg-white/5"}`,
										children: p.s
									}, p.id))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: nt.fmt }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
									name: nt.fmt,
									value: numFmt,
									onChange: setNumFmt,
									options: [
										{
											id: "n",
											label: "1"
										},
										{
											id: "n-of",
											label: "1 / N"
										},
										{
											id: "dash",
											label: "- 1 -"
										}
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: nt.size }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 6,
									max: 36,
									className: field,
									value: numSize,
									onChange: (e) => setNumSize(Number(e.target.value)),
									"data-testid": "num-size"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: nt.margin }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 8,
									max: 120,
									className: field,
									value: numMargin,
									onChange: (e) => setNumMargin(Number(e.target.value)),
									"data-testid": "num-margin"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted sm:col-span-2",
									children: [
										nt.preview,
										": ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
											dir: "ltr",
											children: sample
										}),
										" — ",
										nt.page,
										" ",
										numFrom,
										total ? ` … ${total}` : ""
									]
								})
							]
						});
					})() : null,
					tool === "protect" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.password }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								autoComplete: "new-password",
								className: field,
								value: pwd,
								onChange: (e) => setPwd(e.target.value),
								"data-testid": "pwd"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.confirm }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								autoComplete: "new-password",
								className: field,
								value: pwd2,
								onChange: (e) => setPwd2(e.target.value),
								"data-testid": "pwd2"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted sm:col-span-2",
								children: t.protectNote
							})
						]
					}) : null,
					tool === "watermark" || tool === "batch" && batchOp === "watermark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.wmText }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: field,
						value: wm,
						dir: "auto",
						onChange: (e) => setWm(e.target.value),
						"data-testid": "wm-text"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.position }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid w-36 grid-cols-3 gap-1.5",
						dir: "ltr",
						children: WM_POS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": p.id,
							"data-pos": p.id,
							onClick: () => setWmPos(p.id),
							className: `aspect-square rounded-lg border text-lg ${wmPos === p.id ? "border-primary bg-primary/25" : "border-border bg-white/5"}`,
							children: p.s
						}, p.id))
					})] })] }) : null,
					tool === "split" && firstBytes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						"data-testid": "split-ui",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [t.splitHint, first?.pages ? ` ${t.splitInfo(first.pages)}.` : ""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
								name: "split-mode",
								value: splitMode,
								onChange: setSplitMode,
								options: [
									{
										id: "pick",
										label: t.splitPick
									},
									{
										id: "every",
										label: t.splitEvery
									},
									{
										id: "each",
										label: t.splitEach
									},
									{
										id: "ranges",
										label: t.splitRanges
									}
								]
							}),
							splitMode === "pick" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: `${field} max-w-xs`,
										dir: "ltr",
										placeholder: "2, 5-7",
										value: splitText,
										onChange: (e) => setSplitText(e.target.value),
										"data-testid": "split-text"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: t.splitPickHint
									}),
									thumbs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8",
										dir: "ltr",
										"data-testid": "split-grid",
										children: thumbs.map((src, i) => {
											const chosen = new Set(parseRange(splitText, first?.pages ?? 9999) ?? []);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												"data-page": i,
												onClick: () => {
													const c = new Set(chosen);
													if (c.has(i)) c.delete(i);
													else c.add(i);
													const a = [...c].sort((x, y) => x - y);
													const parts = [];
													for (let k = 0; k < a.length;) {
														let e = k;
														while (e + 1 < a.length && a[e + 1] === a[e] + 1) e++;
														parts.push(e > k ? `${a[k] + 1}-${a[e] + 1}` : `${a[k] + 1}`);
														k = e + 1;
													}
													setSplitText(parts.join(", "));
												},
												className: `relative rounded-lg border p-1 ${chosen.has(i) ? "border-primary bg-primary/20" : "border-border"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src,
													alt: "",
													className: "w-full rounded bg-white"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-center text-[11px] text-muted",
													children: i + 1
												})]
											}, i);
										})
									}) : null
								]
							}) : null,
							splitMode === "every" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.splitN }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 1,
									className: `${field} max-w-[8rem]`,
									dir: "ltr",
									value: splitN,
									onChange: (e) => setSplitN(Math.max(1, Number(e.target.value) || 1)),
									"data-testid": "split-n"
								}),
								first?.pages ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: t.splitFiles(Math.ceil(first.pages / splitN))
								}) : null
							] }) : null,
							splitMode === "each" && first?.pages ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: t.splitFiles(first.pages)
							}) : null,
							splitMode === "ranges" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								"data-testid": "split-rows",
								children: [splitRows.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "w-20 shrink-0 text-xs text-muted",
											children: [
												t.splitRow,
												" ",
												i + 1
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: `${field} min-w-0 flex-1 max-w-xs`,
											dir: "ltr",
											placeholder: "1-3, 5",
											value: r,
											onChange: (e) => setSplitRows((c) => c.map((x, k) => k === i ? e.target.value : x))
										}),
										splitRows.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: btn,
											"aria-label": "remove",
											onClick: () => setSplitRows((c) => c.filter((_, k) => k !== i)),
											children: "×"
										}) : null
									]
								}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: btn,
									onClick: () => setSplitRows((c) => [...c, ""]),
									children: ["+ ", t.splitAdd]
								})]
							}) : null
						]
					}) : null,
					showRange ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.pagesScope }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
							name: t.pagesScope,
							value: scope,
							onChange: setScope,
							options: [{
								id: "all",
								label: t.scopeAll
							}, {
								id: "range",
								label: t.scopeRange
							}]
						}),
						scope === "range" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: `${field} mt-2 max-w-xs`,
							dir: "ltr",
							placeholder: t.rangePlaceholder,
							value: range,
							onChange: (e) => setRange(e.target.value),
							"data-testid": "range"
						}) : null
					] }) : null,
					tool === "ocr" || tool === "pdf-ocr" || tool === "pdf-word" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.ocrLang }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
								name: t.ocrLang,
								value: ocrLang,
								onChange: setOcrLang,
								options: [
									{
										id: "auto",
										label: t.auto
									},
									...OCR_LANGS.map((l) => ({
										id: l.id,
										label: l.label
									})),
									{
										id: "all",
										label: t.allLangs
									}
								]
							}),
							tool === "pdf-ocr" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: forceOcr,
									onChange: (e) => setForceOcr(e.target.checked)
								}), t.forceOcr]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: t.ocrFirst
							})
						]
					}) : null,
					tool === "word-pdf" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: t.textOnly
					}) : null,
					tool === "pdf-word" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: t.wordNote
					}) : null,
					tool === "pdf-excel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: ox.sheets }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
								name: ox.sheets,
								value: xlMode,
								onChange: setXlMode,
								options: [{
									id: "pages",
									label: ox.perPage
								}, {
									id: "one",
									label: ox.oneSheet
								}]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: ox.xlNote
							})
						]
					}) : null,
					tool === "ppt-pdf" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: ox.pptNote
					}) : null,
					tool === "batch" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.batchOp }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
						name: t.batchOp,
						value: batchOp,
						onChange: setBatchOp,
						options: [
							{
								id: "compress",
								label: t.opCompress
							},
							{
								id: "rotate",
								label: t.opRotate
							},
							{
								id: "watermark",
								label: t.opWatermark
							},
							{
								id: "split",
								label: t.opSplit
							}
						]
					})] }) : null,
					tool === "write-pdf" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-testid": "w-templates",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: TEMPLATE_LABEL[lang] ?? TEMPLATE_LABEL.az }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: DOC_TEMPLATES.map((tp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `?t=${tp.id}`,
										className: "rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-sm hover:bg-white/10",
										onClick: (e) => {
											e.preventDefault();
											if (wText.trim() && !confirm(tp.label[lang] + "?")) return;
											setWTitle(tp.title[lang] ?? tp.title.az);
											setWText(tp.body[lang] ?? tp.body.az);
											history.replaceState(null, "", `?t=${tp.id}`);
										},
										children: tp.label[lang] ?? tp.label.az
									}, tp.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: field,
								dir: "auto",
								placeholder: t.docTitle,
								value: wTitle,
								onChange: (e) => setWTitle(e.target.value),
								"data-testid": "w-title"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: `${field} h-56 resize-y`,
								dir: "auto",
								placeholder: t.writePlaceholder,
								value: wText,
								onChange: (e) => setWText(e.target.value),
								"data-testid": "w-text"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.pageSize }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
										name: t.pageSize,
										value: wPage,
										onChange: setWPage,
										options: [
											{
												id: "a4",
												label: "A4"
											},
											{
												id: "a5",
												label: "A5"
											},
											{
												id: "letter",
												label: "Letter"
											}
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.fontSize }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
										name: t.fontSize,
										value: String(wSize),
										onChange: (v) => setWSize(Number(v)),
										options: [
											10,
											12,
											14,
											18
										].map((n) => ({
											id: String(n),
											label: String(n)
										}))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.align }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
										name: t.align,
										value: wAlign,
										onChange: setWAlign,
										options: [
											{
												id: "left",
												label: t.left
											},
											{
												id: "center",
												label: t.center
											},
											{
												id: "right",
												label: t.right
											}
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.margins }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
										name: t.margins,
										value: String(wMargin),
										onChange: (v) => setWMargin(Number(v)),
										options: [
											{
												id: "36",
												label: "S"
											},
											{
												id: "54",
												label: "M"
											},
											{
												id: "72",
												label: "L"
											}
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: wBold,
											onChange: (e) => setWBold(e.target.checked)
										}), t.bold]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: wNums,
											onChange: (e) => setWNums(e.target.checked)
										}), t.pageNumbers]
									})
								]
							})
						]
					}) : null,
					tool === "sign" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.drawSign }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
									ref: sigPad,
									width: 600,
									height: 200,
									"data-testid": "sig-pad",
									className: "w-full max-w-xl touch-none rounded-xl border border-border bg-white",
									onPointerDown: (e) => {
										drawing.current = true;
										e.currentTarget.setPointerCapture(e.pointerId);
										const c = e.currentTarget.getContext("2d");
										const p = pt(e);
										c.lineWidth = 3;
										c.lineCap = "round";
										c.lineJoin = "round";
										c.strokeStyle = "#0b1b4d";
										c.beginPath();
										c.moveTo(p.x, p.y);
										c.lineTo(p.x + .1, p.y + .1);
										c.stroke();
									},
									onPointerMove: (e) => {
										if (!drawing.current) return;
										const c = e.currentTarget.getContext("2d");
										const p = pt(e);
										c.lineTo(p.x, p.y);
										c.stroke();
									},
									onPointerUp: () => {
										drawing.current = false;
										exportSig();
									},
									onPointerCancel: () => {
										drawing.current = false;
										exportSig();
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `${btn} mt-2`,
									onClick: () => {
										const c = sigPad.current;
										c.getContext("2d").clearRect(0, 0, c.width, c.height);
										setSigPng(null);
										setSigUrl("");
									},
									children: t.signClear
								})
							] }),
							first?.pages && first.pages > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.signPage }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
								name: t.signPage,
								value: String(sigPage),
								onChange: (v) => {
									setSigPage(Number(v));
									setSigPos(null);
								},
								options: Array.from({ length: Math.min(first.pages, 30) }, (_, i) => ({
									id: String(i),
									label: String(i + 1)
								}))
							})] }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.signSize }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: .08,
								max: .6,
								step: .01,
								value: sigSize,
								onChange: (e) => setSigSize(Number(e.target.value)),
								className: "w-full max-w-xs"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: t.signHint
							}),
							signCanvas ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative inline-block max-w-full cursor-crosshair overflow-hidden rounded-lg bg-white shadow-lg",
								"data-testid": "sign-stage",
								onClick: (e) => {
									const r = e.currentTarget.getBoundingClientRect();
									setSigPos({
										x: (e.clientX - r.left) / r.width,
										y: (e.clientY - r.top) / r.height
									});
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfCanvas, {
									canvasSource: signCanvas,
									className: "block h-auto max-w-full"
								}), sigPos && sigUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: sigUrl,
									alt: "",
									className: "pointer-events-none absolute",
									style: {
										left: `${sigPos.x * 100}%`,
										top: `${sigPos.y * 100}%`,
										width: `${sigSize * 100}%`,
										transform: "translate(-50%,-50%)"
									}
								}) : null]
							}) : null
						]
					}) : null,
					tool === "pages" && thumbs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs text-muted",
						children: t.pagesHint
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6",
						dir: "ltr",
						"data-testid": "page-grid",
						children: order.map((o, pos) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-xl border p-1.5 ${o.del ? "border-red-400/60 opacity-40" : "border-border"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: thumbs[o.index],
									alt: "",
									className: "w-full rounded bg-white"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-center text-[11px] text-muted",
									children: o.index + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex justify-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "rounded border border-border px-1.5 text-xs",
											"aria-label": t.moveLeft,
											onClick: () => setOrder((c) => {
												const j = pos - 1;
												if (j < 0) return c;
												const n = c.slice();
												[n[j], n[pos]] = [n[pos], n[j]];
												return n;
											}),
											children: "←"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "rounded border border-border px-1.5 text-xs",
											"aria-label": t.deleteMark,
											"data-del": o.index,
											onClick: () => setOrder((c) => c.map((x) => x.index === o.index ? {
												...x,
												del: !x.del
											} : x)),
											children: "✕"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "rounded border border-border px-1.5 text-xs",
											"aria-label": t.moveRight,
											onClick: () => setOrder((c) => {
												const j = pos + 1;
												if (j >= c.length) return c;
												const n = c.slice();
												[n[j], n[pos]] = [n[pos], n[j]];
												return n;
											}),
											children: "→"
										})
									]
								})
							]
						}, o.index))
					})] }) : null,
					tool === "extract-pages" && thumbs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex flex-wrap items-center gap-2 text-xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.extractHint }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btn,
								onClick: () => setSel(new Set(thumbs.map((_, i) => i))),
								children: t.selectAll
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: btn,
								onClick: () => setSel(/* @__PURE__ */ new Set()),
								children: t.selectNone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								sel.size,
								" ",
								t.selected
							] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6",
						dir: "ltr",
						"data-testid": "extract-grid",
						children: thumbs.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"data-page": i,
							onClick: () => setSel((c) => {
								const n = new Set(c);
								if (n.has(i)) n.delete(i);
								else n.add(i);
								return n;
							}),
							className: `relative rounded-xl border p-1.5 ${sel.has(i) ? "border-primary bg-primary/20" : "border-border"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src,
									alt: "",
									className: "w-full rounded bg-white"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-center text-[11px] text-muted",
									children: i + 1
								}),
								sel.has(i) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "absolute end-2 top-2 size-4 rounded-full bg-primary p-0.5 text-white" }) : null
							]
						}, i))
					})] }) : null,
					!noRun ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btnPrimary,
							disabled: !!busy,
							onClick: run,
							"data-testid": "run",
							children: t.run
						})
					}) : null
				]
			}) : null,
			tool === "preview" && firstBytes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `${card} space-y-3`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: t.zoom
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: () => setViewZoom((z) => Math.max(.4, +(z - .2).toFixed(1))),
							"aria-label": "-",
							children: "−"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "w-12 text-center",
							"data-testid": "zoom",
							children: [Math.round(viewZoom * 100), "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: () => setViewZoom((z) => Math.min(3, +(z + .2).toFixed(1))),
							"aria-label": "+",
							children: "+"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfViewer, {
					bytes: firstBytes,
					zoom: viewZoom,
					label: t.page
				})]
			}) : null,
			busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: card,
				role: "status",
				"data-testid": "busy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 text-sm",
						children: busy.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 overflow-hidden rounded-full bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pdf-bar h-full rounded-full transition-all",
							style: { width: `${Math.max(4, Math.round(busy.frac * 100))}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `${btn} mt-3`,
						onClick: () => {
							cancelled.current = true;
						},
						children: t.cancel
					})
				]
			}) : null,
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "alert",
				className: "rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200",
				"data-testid": "error",
				children: err
			}) : null,
			outs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `${card} space-y-3`,
				"data-testid": "results",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-semibold text-emerald-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), t.done]
				}), outs.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultCard, {
					out: o,
					t,
					onOpen: () => setOpenOut(o)
				}, i))]
			}) : null,
			openOut && openBytes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex flex-col bg-black/80 p-3 md:p-8",
				onClick: () => setOpenOut(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-4xl flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated p-3",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-sm font-semibold",
							children: openOut.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: btn,
							onClick: () => setOpenOut(null),
							"aria-label": t.cancel,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfViewer, {
						bytes: openBytes,
						zoom: 1,
						label: t.page
					})]
				})
			}) : null
		]
	});
}
function QualityPick({ t, v, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t.quality }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seg, {
		name: t.quality,
		value: v,
		onChange: set,
		options: [
			{
				id: "high",
				label: t.qHigh
			},
			{
				id: "balanced",
				label: t.qBalanced
			},
			{
				id: "small",
				label: t.qSmall
			}
		]
	})] });
}
function UnlockRow({ t, onUnlock }) {
	const [p, setP] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "flex items-center gap-2",
		onSubmit: (e) => {
			e.preventDefault();
			onUnlock(p);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4 text-amber-300" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "password",
				className: `${field} w-36`,
				placeholder: t.password,
				value: p,
				onChange: (e) => setP(e.target.value),
				"data-testid": "unlock-pwd",
				"aria-label": t.unlockHint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: btn,
				"data-testid": "unlock",
				children: t.unlock
			})
		]
	});
}
//#endregion
export { PdfTool };
