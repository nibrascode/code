import { lazy, Suspense, useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { COPY } from "./copy";

// The whole PDF suite (pdf-lib, pdf.js, OCR) is loaded only on this page and only after mount.
const PdfTool = lazy(() => import("./pdf-tool").then((m) => ({ default: m.PdfTool })));

export function PdfPage() {
  const { lang } = useI18n();
  const t = COPY[lang] ?? COPY.az;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const prefix = lang === "az" ? "" : `/${lang}`;
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <img src="/apps/nibras-pdf.jpg" alt="" width={56} height={56} className="size-12 shrink-0 rounded-2xl md:size-14" />
        <div className="min-w-0 flex-1 basis-56">
          <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{t.title}</h1>
          <p className="mt-1 text-sm text-muted">{t.lead}</p>
        </div>
        <nav className="flex w-full gap-4 text-sm text-muted sm:w-auto">
          <a href={`${prefix}/apps/nibras-pdf`} className="hover:text-fg">{t.appPage}</a>
          <a href="/privacy/nibras-pdf" className="hover:text-fg">{t.privacy}</a>
        </nav>
      </header>
      {mounted ? (
        <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-bg-elevated" />}>
          <PdfTool lang={lang} />
        </Suspense>
      ) : (
        <div className="h-96 animate-pulse rounded-2xl bg-bg-elevated" />
      )}
    </main>
  );
}
