import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { useI18n } from "@/qr/lib/i18n";

// The whole tool (generator, designer, exports) is its own chunk.
const QrTool = lazy(() => import("@/qr/components/qr-tool").then((m) => ({ default: m.QrTool })));

export const Route = createFileRoute("/qr")({
  component: QrPage,
});

function QrPage() {
  const { w } = useI18n();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <main className="qr-page mx-auto w-full max-w-7xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <img src="/apps/nibras-qr-v2.jpg" alt="" width={56} height={56} className="size-12 shrink-0 rounded-2xl md:size-14" />
        <div className="min-w-0 flex-1 basis-56">
          <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{w.title}</h1>
          <p className="mt-1 text-sm text-muted">{w.lead}</p>
        </div>
        <nav className="flex w-full gap-4 text-sm text-muted sm:w-auto">
          <a href="/apps/nibras-qr" className="hover:text-fg">
            {w.appPage}
          </a>
          <a href="/privacy/nibras-qr" className="hover:text-fg">
            {w.privacy}
          </a>
        </nav>
      </header>
      {mounted ? (
        <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-bg-elevated" />}>
          <QrTool />
        </Suspense>
      ) : (
        <div className="h-96 animate-pulse rounded-2xl bg-bg-elevated" />
      )}
    </main>
  );
}
