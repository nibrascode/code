// Options and runners for: unlock, crop, grayscale, excel-pdf, redact, invoice.
import { useEffect, useRef, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import * as eng from "./lib/engine";
import { closePdf, openPdf, renderPageToCanvas } from "./lib/pdfjs";
import { btn, field, Label, Seg } from "./ui";

export class UserError extends Error { user = true; }

type X = {
  crop: { top: number; right: number; bottom: number; left: number };
  cropAll: boolean; cropRange: string;
  gray: eng.Quality;
  sheetHeader: boolean; sheetLand: "auto" | "yes" | "no"; sheetIdx: number;
  boxes: eng.RedactBox[]; flatten: boolean; redPage: number;
  inv: Omit<eng.Invoice, "labels">;
};
const today = () => new Date().toISOString().slice(0, 10);
export const X_DEFAULT: X = {
  crop: { top: 10, right: 10, bottom: 10, left: 10 }, cropAll: true, cropRange: "",
  gray: "balanced",
  sheetHeader: true, sheetLand: "auto", sheetIdx: 0,
  boxes: [], flatten: true, redPage: 0,
  inv: { title: "", number: "001", date: today(), due: "", currency: "AZN", seller: "", buyer: "", notes: "", taxPct: 0, items: [{ name: "", qty: 1, price: 0 }] },
};

const W: Record<Lang, Record<string, string>> = {
  az: {
    unlockHint: "Parollu PDF seçin, yuxarıda parolu yazıb «Aç» basın, sonra «Başla». Parolu bilməyən fayl açılmır.", notLocked: "Bu PDF-in açılış parolu yoxdur. Məhdudiyyətsiz nüsxə yazıldı.",
    top: "Yuxarı (mm)", right: "Sağ (mm)", bottom: "Aşağı (mm)", left: "Sol (mm)", scope: "Səhifələr", all: "Hamısı", range: "Aralıq", cropNote: "Kəsilən kənar gizlənir, amma faylın içində qala bilər.", cropBig: "Kənar çox böyükdür: səhifədən heç nə qalmır.",
    grayNote: "Səhifələr şəkil kimi yenidən qurulur: mətn seçilmir. Daha yaxşı keyfiyyət = daha böyük fayl.", quality: "Keyfiyyət", low: "Kiçik fayl", mid: "Orta", high: "Aydın",
    pickSheet: "XLSX və ya CSV seçin", header: "Birinci sətir başlıqdır", orient: "Səhifə", auto: "Avtomatik", land: "Yan", port: "Dik", sheet: "Vərəq", sheetNote: "Yalnız xana dəyərləri köçür: formul, rəng və qrafik köçmür. Köhnə .xls dəstəklənmir.", badSheet: "Bu fayl oxunmadı. XLSX və ya CSV seçin.", emptySheet: "Cədvəl boşdur.",
    redHint: "Gizlətmək istədiyiniz yeri səhifə şəklində dartın.", page: "Səhifə", boxes: "Qutular", flatten: "Qutulu səhifəni şəkil et (altdakı mətn silinir)", flatNote: "Bağlı olanda yalnız üstü örtülür və mətn kopyalana bilər. Nəticəni yoxlayın.", noBoxes: "Əvvəl ən azı bir qutu çəkin.", clearBoxes: "Hamısını sil",
    invTitle: "Başlıq", invDefault: "Hesab-faktura", number: "Nömrə", date: "Tarix", due: "Son ödəniş tarixi", currency: "Valyuta", seller: "Satıcı (ad, ünvan, VÖEN)", buyer: "Alıcı", item: "Mal / xidmət", qty: "Say", price: "Qiymət", sum: "Məbləğ", addRow: "Sətir əlavə et", tax: "Vergi %", subtotal: "Cəmi", taxL: "Vergi", total: "Yekun", notes: "Qeyd (bank, şərtlər)", invNote: "Sadə PDF fakturadır, rəsmi e-qaimə deyil. Forma yalnız bu brauzerdə saxlanır.", noItems: "Ən azı bir mal yazın.",
  },
  en: {
    unlockHint: "Choose a protected PDF, type the password above and press Unlock, then Start. A file whose password you don't know can't be opened.", notLocked: "This PDF has no open password. A copy without limits was saved.",
    top: "Top (mm)", right: "Right (mm)", bottom: "Bottom (mm)", left: "Left (mm)", scope: "Pages", all: "All", range: "Range", cropNote: "The cut edge is hidden but may stay inside the file.", cropBig: "The margins are too big: nothing would be left of the page.",
    grayNote: "Pages are rebuilt as images: text can't be selected. Higher quality = bigger file.", quality: "Quality", low: "Small file", mid: "Medium", high: "Sharp",
    pickSheet: "Choose an XLSX or CSV", header: "First row is a header", orient: "Page", auto: "Auto", land: "Landscape", port: "Portrait", sheet: "Sheet", sheetNote: "Only cell values are copied: no formulas, colors or charts. Old .xls is not supported.", badSheet: "Could not read this file. Choose an XLSX or CSV.", emptySheet: "The table is empty.",
    redHint: "Drag on the page image over what you want to hide.", page: "Page", boxes: "Boxes", flatten: "Flatten pages with boxes (text under them is removed)", flatNote: "When off, the box only covers the text and it can still be copied. Check the result.", noBoxes: "Draw at least one box first.", clearBoxes: "Remove all",
    invTitle: "Title", invDefault: "Invoice", number: "Number", date: "Date", due: "Due date", currency: "Currency", seller: "Seller (name, address, tax ID)", buyer: "Buyer", item: "Item / service", qty: "Qty", price: "Price", sum: "Amount", addRow: "Add row", tax: "Tax %", subtotal: "Subtotal", taxL: "Tax", total: "Total", notes: "Notes (bank, terms)", invNote: "A simple PDF invoice, not an official e-invoice. The form is kept only in this browser.", noItems: "Add at least one item.",
  },
  tr: {
    unlockHint: "Parolalı PDF seçin, yukarıda parolayı yazıp «Aç»a basın, sonra «Başlat». Parolasını bilmediğiniz dosya açılmaz.", notLocked: "Bu PDF'in açılış parolası yok. Sınırsız kopya kaydedildi.",
    top: "Üst (mm)", right: "Sağ (mm)", bottom: "Alt (mm)", left: "Sol (mm)", scope: "Sayfalar", all: "Tümü", range: "Aralık", cropNote: "Kırpılan kenar gizlenir ama dosyada kalabilir.", cropBig: "Kenar çok büyük: sayfadan bir şey kalmaz.",
    grayNote: "Sayfalar görsel olarak yeniden kurulur: metin seçilmez. Yüksek kalite = büyük dosya.", quality: "Kalite", low: "Küçük dosya", mid: "Orta", high: "Net",
    pickSheet: "XLSX veya CSV seçin", header: "İlk satır başlıktır", orient: "Sayfa", auto: "Otomatik", land: "Yatay", port: "Dikey", sheet: "Sayfa", sheetNote: "Sadece hücre değerleri aktarılır: formül, renk ve grafik yok. Eski .xls desteklenmez.", badSheet: "Dosya okunamadı. XLSX veya CSV seçin.", emptySheet: "Tablo boş.",
    redHint: "Gizlemek istediğiniz yeri sayfa görselinde sürükleyin.", page: "Sayfa", boxes: "Kutular", flatten: "Kutulu sayfayı görsele çevir (altındaki metin silinir)", flatNote: "Kapalıyken sadece üstü örtülür, metin kopyalanabilir. Sonucu kontrol edin.", noBoxes: "Önce en az bir kutu çizin.", clearBoxes: "Hepsini sil",
    invTitle: "Başlık", invDefault: "Fatura", number: "Numara", date: "Tarih", due: "Son ödeme", currency: "Para birimi", seller: "Satıcı (ad, adres, vergi no)", buyer: "Alıcı", item: "Ürün / hizmet", qty: "Adet", price: "Fiyat", sum: "Tutar", addRow: "Satır ekle", tax: "Vergi %", subtotal: "Ara toplam", taxL: "Vergi", total: "Toplam", notes: "Not (banka, şartlar)", invNote: "Basit PDF faturadır, resmi e-fatura değildir. Form sadece bu tarayıcıda saklanır.", noItems: "En az bir kalem yazın.",
  },
  ar: {
    unlockHint: "اختر PDF محمياً، واكتب كلمة المرور أعلاه واضغط «فتح»، ثم «ابدأ». لا يُفتح ملف لا تعرف كلمته.", notLocked: "لا توجد كلمة فتح لهذا الملف. حُفظت نسخة بلا قيود.",
    top: "أعلى (مم)", right: "يمين (مم)", bottom: "أسفل (مم)", left: "يسار (مم)", scope: "الصفحات", all: "الكل", range: "نطاق", cropNote: "تُخفى الحافة المقصوصة لكنها قد تبقى في الملف.", cropBig: "الهوامش كبيرة جداً: لن يبقى شيء من الصفحة.",
    grayNote: "تُعاد الصفحات كصور: لا يمكن تحديد النص. جودة أعلى = ملف أكبر.", quality: "الجودة", low: "ملف صغير", mid: "متوسط", high: "واضح",
    pickSheet: "اختر XLSX أو CSV", header: "الصف الأول عنوان", orient: "الصفحة", auto: "تلقائي", land: "أفقي", port: "عمودي", sheet: "الورقة", sheetNote: "تُنقل قيم الخلايا فقط: لا صيغ ولا ألوان ولا رسوم. صيغة xls القديمة غير مدعومة.", badSheet: "تعذرت قراءة الملف. اختر XLSX أو CSV.", emptySheet: "الجدول فارغ.",
    redHint: "اسحب على صورة الصفحة فوق ما تريد إخفاءه.", page: "الصفحة", boxes: "المربعات", flatten: "حوّل الصفحات ذات المربعات إلى صور (يُحذف النص تحتها)", flatNote: "عند الإيقاف يُغطى النص فقط ويمكن نسخه. افحص النتيجة.", noBoxes: "ارسم مربعاً واحداً على الأقل.", clearBoxes: "حذف الكل",
    invTitle: "العنوان", invDefault: "فاتورة", number: "الرقم", date: "التاريخ", due: "تاريخ الاستحقاق", currency: "العملة", seller: "البائع (الاسم، العنوان، الرقم الضريبي)", buyer: "المشتري", item: "السلعة / الخدمة", qty: "الكمية", price: "السعر", sum: "المبلغ", addRow: "إضافة سطر", tax: "الضريبة %", subtotal: "المجموع الفرعي", taxL: "الضريبة", total: "الإجمالي", notes: "ملاحظات (البنك، الشروط)", invNote: "فاتورة PDF بسيطة وليست فاتورة إلكترونية رسمية. يُحفظ النموذج في هذا المتصفح فقط.", noItems: "أضف بنداً واحداً على الأقل.",
  },
  ru: {
    unlockHint: "Выберите защищённый PDF, введите пароль выше и нажмите «Открыть», затем «Начать». Файл с неизвестным паролем не откроется.", notLocked: "У этого PDF нет пароля на открытие. Сохранена копия без ограничений.",
    top: "Сверху (мм)", right: "Справа (мм)", bottom: "Снизу (мм)", left: "Слева (мм)", scope: "Страницы", all: "Все", range: "Диапазон", cropNote: "Обрезанный край скрыт, но может остаться в файле.", cropBig: "Поля слишком большие: от страницы ничего не останется.",
    grayNote: "Страницы пересобираются как изображения: текст не выделяется. Выше качество = больше файл.", quality: "Качество", low: "Малый файл", mid: "Среднее", high: "Чёткое",
    pickSheet: "Выберите XLSX или CSV", header: "Первая строка — заголовок", orient: "Страница", auto: "Авто", land: "Альбомная", port: "Книжная", sheet: "Лист", sheetNote: "Переносятся только значения ячеек: без формул, цветов и диаграмм. Старый .xls не поддерживается.", badSheet: "Не удалось прочитать файл. Выберите XLSX или CSV.", emptySheet: "Таблица пуста.",
    redHint: "Протяните по картинке страницы над тем, что нужно скрыть.", page: "Страница", boxes: "Блоки", flatten: "Сделать страницы с блоками картинкой (текст под ними удаляется)", flatNote: "Без этого блок только закрывает текст, и его можно скопировать. Проверьте результат.", noBoxes: "Сначала нарисуйте хотя бы один блок.", clearBoxes: "Убрать все",
    invTitle: "Заголовок", invDefault: "Счёт", number: "Номер", date: "Дата", due: "Оплатить до", currency: "Валюта", seller: "Продавец (имя, адрес, ИНН)", buyer: "Покупатель", item: "Товар / услуга", qty: "Кол-во", price: "Цена", sum: "Сумма", addRow: "Добавить строку", tax: "Налог %", subtotal: "Подытог", taxL: "Налог", total: "Итого", notes: "Примечание (банк, условия)", invNote: "Простой PDF-счёт, не официальный электронный счёт. Форма хранится только в этом браузере.", noItems: "Добавьте хотя бы одну позицию.",
  },
};
export const xw = (lang: Lang) => W[lang] ?? W.en;

export const EXTRA_ACCEPT = ".csv,.xlsx,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
export async function readSheetFile(file: File, lang: Lang): Promise<{ name: string; rows: string[][] }[]> {
  const bytes = new Uint8Array(await file.arrayBuffer());
  try {
    if (/\.xlsx$/i.test(file.name)) return await eng.readXlsx(bytes);
    if (/\.(csv|txt|tsv)$/i.test(file.name) || file.type.startsWith("text/")) return [{ name: file.name, rows: eng.parseCsv(new TextDecoder().decode(bytes)) }];
  } catch { /* fall through */ }
  throw new UserError(xw(lang).badSheet);
}

const NUM = (v: string) => Math.max(0, Number(v) || 0);

export function ExtraOptions({ tool, lang, x, setX, pdf, pages, sheets, t }: {
  tool: string; lang: Lang; x: X; setX: (f: (x: X) => X) => void; pdf: Uint8Array | null; pages: number;
  sheets: { name: string; rows: string[][] }[] | null; t: { quality: string };
}) {
  const w = xw(lang);
  const up = <K extends keyof X>(k: K, v: X[K]) => setX((s) => ({ ...s, [k]: v }));
  if (tool === "unlock") return <p className="text-sm text-muted">{w.unlockHint}</p>;
  if (tool === "crop") return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {(["top", "right", "bottom", "left"] as const).map((k) => (
          <div key={k}><Label>{w[k]}</Label><input type="number" min={0} max={200} className={field} value={x.crop[k]} onChange={(e) => up("crop", { ...x.crop, [k]: NUM(e.target.value) })} data-testid={`crop-${k}`} /></div>
        ))}
      </div>
      <div><Label>{w.scope}</Label><Seg name={w.scope} value={x.cropAll ? "all" : "range"} onChange={(v) => up("cropAll", v === "all")} options={[{ id: "all", label: w.all }, { id: "range", label: w.range }]} /></div>
      {!x.cropAll ? <input className={field} placeholder="1-3, 5" value={x.cropRange} onChange={(e) => up("cropRange", e.target.value)} /> : null}
      <p className="text-xs text-muted">{w.cropNote}</p>
    </div>
  );
  if (tool === "grayscale") return (
    <div className="space-y-2">
      <Label>{w.quality}</Label>
      <Seg name={w.quality} value={x.gray} onChange={(v) => up("gray", v)} options={[{ id: "small", label: w.low }, { id: "balanced", label: w.mid }, { id: "high", label: w.high }] as { id: eng.Quality; label: string }[]} />
      <p className="text-xs text-muted">{w.grayNote}</p>
    </div>
  );
  if (tool === "excel-pdf") return (
    <div className="space-y-3">
      {sheets && sheets.length > 1 ? (
        <div><Label>{w.sheet}</Label><select className={field} value={x.sheetIdx} onChange={(e) => up("sheetIdx", Number(e.target.value))}>{sheets.map((s, i) => <option key={i} value={i}>{s.name}</option>)}</select></div>
      ) : null}
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={x.sheetHeader} onChange={(e) => up("sheetHeader", e.target.checked)} />{w.header}</label>
      <div><Label>{w.orient}</Label><Seg name={w.orient} value={x.sheetLand} onChange={(v) => up("sheetLand", v)} options={[{ id: "auto", label: w.auto }, { id: "no", label: w.port }, { id: "yes", label: w.land }]} /></div>
      {sheets?.[x.sheetIdx] ? <p className="text-xs text-muted">{sheets[x.sheetIdx].rows.length} × {Math.max(0, ...sheets[x.sheetIdx].rows.map((r) => r.length))}</p> : null}
      <p className="text-xs text-muted">{w.sheetNote}</p>
    </div>
  );
  if (tool === "redact") return <Redactor lang={lang} x={x} setX={setX} pdf={pdf} pages={pages} />;
  if (tool === "invoice") return <InvoiceForm lang={lang} x={x} setX={setX} />;
  return null;
}

function Redactor({ lang, x, setX, pdf, pages }: { lang: Lang; x: X; setX: (f: (x: X) => X) => void; pdf: Uint8Array | null; pages: number }) {
  const w = xw(lang);
  const [img, setImg] = useState("");
  const [drag, setDrag] = useState<{ x0: number; y0: number; x1: number; y1: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!pdf) { setImg(""); return; }
    let dead = false;
    (async () => {
      const d = await openPdf(pdf);
      try {
        const c = await renderPageToCanvas(d, Math.min(x.redPage, d.numPages - 1) + 1, 1.4);
        if (!dead) setImg(c.toDataURL("image/png"));
      } finally { await closePdf(d); }
    })().catch(() => undefined);
    return () => { dead = true; };
  }, [pdf, x.redPage]);
  const pos = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    return { x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)) };
  };
  const mine = x.boxes.filter((b) => b.page === x.redPage);
  const rect = (d: { x0: number; y0: number; x1: number; y1: number }) => ({ x: Math.min(d.x0, d.x1), y: Math.min(d.y0, d.y1), w: Math.abs(d.x1 - d.x0), h: Math.abs(d.y1 - d.y0) });
  if (!pdf) return null;
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted">{w.redHint}</p>
      {pages > 1 ? (
        <div className="flex items-center gap-2 text-sm">
          <Label>{w.page}</Label>
          <button type="button" className={btn} disabled={x.redPage === 0} onClick={() => setX((s) => ({ ...s, redPage: s.redPage - 1 }))}>‹</button>
          <span dir="ltr">{x.redPage + 1} / {pages}</span>
          <button type="button" className={btn} disabled={x.redPage >= pages - 1} onClick={() => setX((s) => ({ ...s, redPage: s.redPage + 1 }))}>›</button>
        </div>
      ) : null}
      {img ? (
        <div ref={ref} className="relative mx-auto max-w-xl touch-none select-none overflow-hidden rounded-lg border border-white/10" data-testid="redact-page"
          onPointerDown={(e) => { (e.target as Element).setPointerCapture?.(e.pointerId); const p = pos(e); setDrag({ x0: p.x, y0: p.y, x1: p.x, y1: p.y }); }}
          onPointerMove={(e) => { if (drag) { const p = pos(e); setDrag({ ...drag, x1: p.x, y1: p.y }); } }}
          onPointerUp={() => { if (drag) { const r = rect(drag); if (r.w > 0.005 && r.h > 0.005) setX((s) => ({ ...s, boxes: [...s.boxes, { page: s.redPage, ...r }] })); setDrag(null); } }}>
          <img src={img} alt="" className="block w-full" draggable={false} />
          {[...mine, ...(drag ? [{ page: x.redPage, ...rect(drag) }] : [])].map((b, i) => (
            <div key={i} className="absolute bg-black/90 ring-1 ring-red-500" style={{ left: `${b.x * 100}%`, top: `${b.y * 100}%`, width: `${b.w * 100}%`, height: `${b.h * 100}%` }} />
          ))}
        </div>
      ) : <div className="h-64 animate-pulse rounded-lg bg-white/5" />}
      {x.boxes.length ? (
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-muted">{w.boxes}:</span>
          {x.boxes.map((b, i) => (
            <button key={i} type="button" className={btn} onClick={() => setX((s) => ({ ...s, boxes: s.boxes.filter((_, j) => j !== i) }))}>{w.page} {b.page + 1} <Trash2 className="size-3" /></button>
          ))}
          <button type="button" className={btn} onClick={() => setX((s) => ({ ...s, boxes: [] }))}>{w.clearBoxes}</button>
        </div>
      ) : null}
      <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={x.flatten} onChange={(e) => setX((s) => ({ ...s, flatten: e.target.checked }))} data-testid="flatten" />{w.flatten}</label>
      <p className="text-xs text-muted">{w.flatNote}</p>
    </div>
  );
}

const INV_KEY = "nibras-invoice";
function InvoiceForm({ lang, x, setX }: { lang: Lang; x: X; setX: (f: (x: X) => X) => void }) {
  const w = xw(lang);
  const inv = x.inv;
  const set = (p: Partial<X["inv"]>) => setX((s) => ({ ...s, inv: { ...s.inv, ...p } }));
  useEffect(() => {
    try {
      const d = JSON.parse(localStorage.getItem(INV_KEY) ?? "null");
      if (d?.items) setX((s) => ({ ...s, inv: { ...s.inv, ...d, date: today() } }));
    } catch { /* ignore */ }
  }, [setX]);
  useEffect(() => {
    const h = setTimeout(() => localStorage.setItem(INV_KEY, JSON.stringify(inv)), 400);
    return () => clearTimeout(h);
  }, [inv]);
  const tot = eng.invoiceTotals(inv);
  const row = (i: number, p: Partial<X["inv"]["items"][number]>) => set({ items: inv.items.map((it, j) => (j === i ? { ...it, ...p } : it)) });
  return (
    <div className="space-y-3" data-testid="invoice-form">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="sm:col-span-3"><Label>{w.invTitle}</Label><input className={field} placeholder={w.invDefault} value={inv.title} onChange={(e) => set({ title: e.target.value })} /></div>
        <div><Label>{w.number}</Label><input className={field} value={inv.number} onChange={(e) => set({ number: e.target.value })} /></div>
        <div><Label>{w.date}</Label><input type="date" className={field} value={inv.date} onChange={(e) => set({ date: e.target.value })} /></div>
        <div><Label>{w.due}</Label><input type="date" className={field} value={inv.due} onChange={(e) => set({ due: e.target.value })} /></div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div><Label>{w.seller}</Label><textarea rows={4} className={field} value={inv.seller} onChange={(e) => set({ seller: e.target.value })} data-testid="inv-seller" /></div>
        <div><Label>{w.buyer}</Label><textarea rows={4} className={field} value={inv.buyer} onChange={(e) => set({ buyer: e.target.value })} /></div>
      </div>
      <div className="space-y-2">
        <div className="hidden grid-cols-[1fr_5rem_7rem_7rem_2.5rem] gap-2 text-xs text-muted sm:grid"><span>{w.item}</span><span>{w.qty}</span><span>{w.price}</span><span>{w.sum}</span><span /></div>
        {inv.items.map((it, i) => (
          <div key={i} className="grid grid-cols-[1fr_5rem_7rem] gap-2 sm:grid-cols-[1fr_5rem_7rem_7rem_2.5rem]">
            <input className={`${field} col-span-3 sm:col-span-1`} placeholder={w.item} value={it.name} onChange={(e) => row(i, { name: e.target.value })} data-testid={`inv-name-${i}`} />
            <input type="number" min={0} step="any" className={field} aria-label={w.qty} value={it.qty} onChange={(e) => row(i, { qty: NUM(e.target.value) })} />
            <input type="number" min={0} step="any" className={field} aria-label={w.price} value={it.price} onChange={(e) => row(i, { price: NUM(e.target.value) })} data-testid={`inv-price-${i}`} />
            <span className="self-center text-sm" dir="ltr">{eng.money(it.qty * it.price)}</span>
            <button type="button" className={btn} aria-label="×" disabled={inv.items.length < 2} onClick={() => set({ items: inv.items.filter((_, j) => j !== i) })}><Trash2 className="size-4" /></button>
          </div>
        ))}
        <button type="button" className={btn} onClick={() => set({ items: [...inv.items, { name: "", qty: 1, price: 0 }] })}><Plus className="size-4" />{w.addRow}</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div><Label>{w.currency}</Label><input className={field} value={inv.currency} onChange={(e) => set({ currency: e.target.value })} /></div>
        <div><Label>{w.tax}</Label><input type="number" min={0} max={100} step="any" className={field} value={inv.taxPct} onChange={(e) => set({ taxPct: NUM(e.target.value) })} /></div>
        <div className="self-end text-sm" dir="ltr"><b>{w.total}: {eng.money(tot.total)} {inv.currency}</b></div>
      </div>
      <div><Label>{w.notes}</Label><textarea rows={2} className={field} value={inv.notes} onChange={(e) => set({ notes: e.target.value })} /></div>
      <p className="text-xs text-muted">{w.invNote}</p>
    </div>
  );
}

type Res = { name: string; bytes: Uint8Array; note?: string };
export async function runExtra(tool: string, lang: Lang, x: X, f: { name: string; bytes?: Uint8Array; pages?: number; wasLocked?: boolean } | undefined, sheets: { name: string; rows: string[][] }[] | null, progress: (d: number, n: number) => void, errNoFile: string, errBadRange: string): Promise<Res | null> {
  const w = xw(lang);
  const base = (f?.name ?? "document").replace(/\.[^.]+$/, "") || "document";
  if (tool === "invoice") {
    if (!x.inv.items.some((i) => i.name.trim())) throw new UserError(w.noItems);
    const bytes = await eng.invoicePdf({ ...x.inv, title: x.inv.title.trim() || w.invDefault, labels: { seller: w.seller.replace(/\s*\(.*\)/, ""), buyer: w.buyer, item: w.item, qty: w.qty, price: w.price, sum: w.sum, subtotal: w.subtotal, tax: w.taxL, total: w.total, number: w.number, date: w.date, due: w.due } });
    return { name: `invoice-${x.inv.number || "1"}.pdf`.replace(/[^\w.-]+/g, "_"), bytes };
  }
  if (tool === "excel-pdf") {
    const s = sheets?.[x.sheetIdx] ?? sheets?.[0];
    if (!s) throw new UserError(errNoFile);
    if (!s.rows.length) throw new UserError(w.emptySheet);
    return { name: `${base}.pdf`, bytes: await eng.tableToPdf(s.rows, { title: sheets!.length > 1 ? s.name : undefined, header: x.sheetHeader, landscape: x.sheetLand === "auto" ? "auto" : x.sheetLand === "yes" }) };
  }
  if (!f?.bytes) throw new UserError(errNoFile);
  if (tool === "unlock") return { name: `${base}-unlocked.pdf`, bytes: await eng.unlockPdf(f.bytes, ""), note: f.wasLocked ? undefined : w.notLocked };
  if (tool === "crop") {
    let pages: number[] | undefined;
    if (!x.cropAll) { const p = eng.parseRange(x.cropRange, f.pages ?? 0); if (!p) throw new UserError(errBadRange); pages = p; }
    try { return { name: `${base}-cropped.pdf`, bytes: await eng.cropPdf(f.bytes, x.crop, pages) }; }
    catch (e) { if ((e as Error).message === "crop-too-big") throw new UserError(w.cropBig); throw e; }
  }
  if (tool === "grayscale") return { name: `${base}-gray.pdf`, bytes: await eng.grayscalePdf(f.bytes, x.gray, progress) };
  if (tool === "redact") {
    if (!x.boxes.length) throw new UserError(w.noBoxes);
    return { name: `${base}-redacted.pdf`, bytes: await eng.redactPdf(f.bytes, x.boxes, x.flatten, progress) };
  }
  return null;
}
