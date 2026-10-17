import type { Lang } from "@/lib/i18n";
import { TOOL_IDS, TOOL_TEXT, type ToolId } from "./tool-text";

export const isToolId = (v: string): v is ToolId => (TOOL_IDS as readonly string[]).includes(v);

type Frame = { suffix: string; trust: string; how: string; steps: [string, string, string]; related: string };

const FRAME: Record<Lang, Frame> = {
  az: {
    suffix: "Nibras PDF — pulsuz, brauzerdə",
    trust: "Pulsuz, hesabsız; fayllar cihazınızdan çıxmır.",
    how: "Necə işləyir",
    steps: ["Faylı seçin və ya bura sürüşdürün.", "Seçimləri tənzimləyin və düyməni basın.", "Nəticəni birbaşa cihazınıza yükləyin."],
    related: "Digər PDF alətləri",
  },
  en: {
    suffix: "Nibras PDF — free, in your browser",
    trust: "Free, no account; your files never leave your device.",
    how: "How it works",
    steps: ["Choose a file or drop it here.", "Adjust the options and press the button.", "Download the result straight to your device."],
    related: "More PDF tools",
  },
  tr: {
    suffix: "Nibras PDF — ücretsiz, tarayıcıda",
    trust: "Ücretsiz, hesapsız; dosyalarınız cihazınızdan çıkmaz.",
    how: "Nasıl çalışır",
    steps: ["Dosyayı seçin veya buraya sürükleyin.", "Seçenekleri ayarlayın ve düğmeye basın.", "Sonucu doğrudan cihazınıza indirin."],
    related: "Diğer PDF araçları",
  },
  ar: {
    suffix: "Nibras PDF — مجاناً في المتصفح",
    trust: "مجاناً وبلا حساب؛ ملفاتك لا تغادر جهازك.",
    how: "كيف يعمل",
    steps: ["اختر الملف أو اسحبه إلى هنا.", "اضبط الخيارات واضغط الزر.", "نزّل النتيجة مباشرة إلى جهازك."],
    related: "المزيد من أدوات PDF",
  },
  ru: {
    suffix: "Nibras PDF — бесплатно, в браузере",
    trust: "Бесплатно, без аккаунта; файлы не покидают ваше устройство.",
    how: "Как это работает",
    steps: ["Выберите файл или перетащите его сюда.", "Настройте параметры и нажмите кнопку.", "Скачайте результат прямо на устройство."],
    related: "Другие инструменты PDF",
  },
};

const FAQ_TITLE: Record<Lang, string> = {
  az: "Suallar",
  en: "Questions",
  tr: "Sorular",
  ar: "أسئلة",
  ru: "Вопросы",
};

const INTENT: Partial<Record<ToolId, Record<Lang, { title: string; h1: string; description: string }>>> = {
  merge: {
    az: { title: "PDF birləşdir — pulsuz", h1: "PDF birləşdir", description: "Bir neçə PDF-i bir faylda birləşdir" },
    en: { title: "Merge PDF — free", h1: "Merge PDF", description: "Join several PDFs into one file" },
    tr: { title: "PDF birleştir — ücretsiz", h1: "PDF birleştir", description: "Birkaç PDF dosyasını tek dosyada birleştir" },
    ar: { title: "دمج PDF — مجاناً", h1: "دمج PDF", description: "اجمع عدة ملفات PDF في ملف واحد" },
    ru: { title: "Объединить PDF — бесплатно", h1: "Объединить PDF", description: "Соберите несколько PDF в один файл" },
  },
  compress: {
    az: { title: "PDF sıx — pulsuz", h1: "PDF sıx", description: "PDF faylın ölçüsünü kiçilt" },
    en: { title: "Compress PDF — free", h1: "Compress PDF", description: "Make a PDF file smaller" },
    tr: { title: "PDF sıkıştır — ücretsiz", h1: "PDF sıkıştır", description: "PDF dosyasının boyutunu küçült" },
    ar: { title: "ضغط PDF — مجاناً", h1: "ضغط PDF", description: "صغّر حجم ملف PDF" },
    ru: { title: "Сжать PDF — бесплатно", h1: "Сжать PDF", description: "Уменьшите размер PDF-файла" },
  },
};

const FAQS: Partial<Record<ToolId, Record<Lang, { q: string; a: string }[]>>> = {
  merge: {
    az: [
      { q: "PDF birləşdirmək pulsuzdur?", a: "Bəli. Hesab açılmır və ödəniş yoxdur." },
      { q: "Neçə PDF birləşdirmək olur?", a: "Bir neçə PDF-i seçib bir faylda toplamaq olur." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Birləşdirmə bu brauzerdə gedir, fayl yüklənmir." },
      { q: "Sıra necə olur?", a: "Fayllar seçdiyiniz sıra ilə bir sənədə düşür." },
    ],
    en: [
      { q: "Is merging a PDF free?", a: "Yes. There is no account and no payment." },
      { q: "How many PDFs can I merge?", a: "You can pick several PDFs and join them into one file." },
      { q: "Does the file go to a server?", a: "No. Merging runs in this browser. The file is not uploaded." },
      { q: "What order are the pages?", a: "The files stay in the order you chose." },
    ],
    tr: [
      { q: "PDF birleştirmek ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Kaç PDF birleşir?", a: "Birkaç PDF seçilip tek dosyada toplanır." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Birleştirme bu tarayıcıda olur, dosya yüklenmez." },
      { q: "Sıra nasıl olur?", a: "Dosyalar seçtiğiniz sırayla tek belgeye girer." },
    ],
    ar: [
      { q: "هل دمج PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "كم ملفاً يمكن دمجه؟", a: "يمكن اختيار عدة ملفات PDF وجمعها في ملف واحد." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. الدمج يجري في هذا المتصفح ولا يُرفع الملف." },
      { q: "كيف يكون الترتيب؟", a: "تبقى الملفات بالترتيب الذي اخترته." },
    ],
    ru: [
      { q: "Объединить PDF бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Сколько PDF можно объединить?", a: "Можно выбрать несколько PDF и собрать их в один файл." },
      { q: "Файл уходит на сервер?", a: "Нет. Объединение идёт в этом браузере, файл не загружается." },
      { q: "Какой порядок страниц?", a: "Файлы остаются в том порядке, который вы выбрали." },
    ],
  },
  compress: {
    az: [
      { q: "PDF sıxmaq pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Mətn pozulur?", a: "Ölçü kiçilir. Çox sıxanda şəkil bir az solğunlaşa bilər." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Sıxma bu brauzerdə gedir." },
      { q: "Nəticəni necə götürüm?", a: "Düymədən sonra kiçilmiş PDF birbaşa cihaza düşür." },
    ],
    en: [
      { q: "Is compressing a PDF free?", a: "Yes. There is no account and no payment." },
      { q: "Does the text break?", a: "The file gets smaller. A strong compress can make a picture a little softer." },
      { q: "Does the file go to a server?", a: "No. Compressing runs in this browser." },
      { q: "How do I get the result?", a: "After the button, the smaller PDF downloads to your device." },
    ],
    tr: [
      { q: "PDF sıkıştırmak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Metin bozulur mu?", a: "Boyut küçülür. Çok sıkınca resim biraz yumuşayabilir." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Sıkıştırma bu tarayıcıda olur." },
      { q: "Sonucu nasıl alırım?", a: "Düğmeden sonra küçülen PDF doğrudan cihaza iner." },
    ],
    ar: [
      { q: "هل ضغط PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "هل يتلف النص؟", a: "يصغر الحجم. الضغط الشديد قد يجعل الصورة ألين قليلاً." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. الضغط يجري في هذا المتصفح." },
      { q: "كيف آخذ النتيجة؟", a: "بعد الزر ينزل ملف PDF الأصغر مباشرة إلى الجهاز." },
    ],
    ru: [
      { q: "Сжать PDF бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Текст портится?", a: "Размер уменьшается. При сильном сжатии картинка может стать чуть мягче." },
      { q: "Файл уходит на сервер?", a: "Нет. Сжатие идёт в этом браузере." },
      { q: "Как забрать результат?", a: "После кнопки меньший PDF сразу скачивается на устройство." },
    ],
  },
};

export function toolSeo(lang: Lang, id: ToolId) {
  const tt = TOOL_TEXT[lang][id];
  const f = FRAME[lang];
  const intent = INTENT[id]?.[lang];
  const desc = (intent?.description ?? tt.description).replace(/[.\s]+$/, "");
  return {
    title: intent?.title ?? `${tt.title} — ${f.suffix}`,
    description: `${desc}. ${f.trust}`,
    keywords: intent ? `${intent.h1}, ${tt.title}, PDF, Nibras PDF` : `${tt.title}, PDF, Nibras PDF`,
    h1: intent?.h1 ?? tt.title,
    lead: `${desc}. ${f.trust}`,
    how: f.how,
    steps: f.steps,
    related: f.related,
    faqTitle: FAQ_TITLE[lang],
    faqs: FAQS[id]?.[lang] ?? [],
  };
}

export const toolPagePath = (id: ToolId) => `/pdf/${id}`;
