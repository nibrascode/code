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

export function toolSeo(lang: Lang, id: ToolId) {
  const tt = TOOL_TEXT[lang][id];
  const f = FRAME[lang];
  const desc = tt.description.replace(/[.\s]+$/, "");
  return {
    title: `${tt.title} — ${f.suffix}`,
    description: `${desc}. ${f.trust}`,
    keywords: `${tt.title}, PDF, Nibras PDF`,
    h1: tt.title,
    lead: `${desc}. ${f.trust}`,
    how: f.how,
    steps: f.steps,
    related: f.related,
  };
}

export const toolPagePath = (id: ToolId) => `/pdf/${id}`;
