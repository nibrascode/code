import { useI18n } from "@/lib/i18n-context";
import { FilesTool } from "@/files/files-tool";

const TITLE = {
  az: "Nibras Files",
  en: "Nibras Files",
  tr: "Nibras Files",
  ar: "Nibras Files",
  ru: "Nibras Files",
} as const;

const LEAD = {
  az: "PDF birləşdir, ayır, şəkilləri PDF et. Fon sil. Hamısı brauzerdə.",
  en: "Merge PDFs, split pages, turn images into a PDF, remove a background. All in your browser.",
  tr: "PDF birleştir, ayır, resimleri PDF yap, arka planı sil. Hepsi tarayıcıda.",
  ar: "ادمج PDF، افصل الصفحات، حوّل الصور إلى PDF، وأزل الخلفية. في المتصفح.",
  ru: "Объединяйте PDF, разделяйте страницы, делайте PDF из фото, удаляйте фон. В браузере.",
} as const;

export function FilesPage() {
  const { lang } = useI18n();
  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6">
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{TITLE[lang]}</h1>
        <p className="mt-2 text-sm text-muted">{LEAD[lang]}</p>
      </header>
      <FilesTool />
    </main>
  );
}
