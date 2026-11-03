import type { Lang } from "@/lib/i18n";
import { Recorder, RECORDER_TEXT } from "./recorder";

export const AUDIO_TITLE = RECORDER_TEXT.title;
export function audioMeta(lang: Lang) {
  const title = `${RECORDER_TEXT.title[lang]} — Nibras Code`;
  const d = RECORDER_TEXT.lead[lang];
  return [
    { title },
    { property: "og:title", content: title },
    { name: "description", content: d },
    { property: "og:description", content: d },
  ];
}

export function AudioPage({ lang }: { lang: Lang }) {
  return (
    <main className="voice-page mx-auto w-full max-w-2xl px-4 pt-28 pb-16 md:px-6" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <Recorder lang={lang} />
    </main>
  );
}
