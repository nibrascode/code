import { useState } from "react";
import { QrPreview } from "@/qr/components/preview";
import { useI18n } from "@/qr/lib/i18n";
import { buildPayload } from "@/qr/lib/payload";
import { useGenerator } from "@/qr/lib/store";
import { cn } from "@/qr/lib/utils";
import { MOBILE_TEMPLATES, PACKS, templateFields, type PackId } from "@/qr/lib/packs";
import { ProBadge, useLock } from "./pro";

export function Templates({ pro, onUse }: { pro: boolean; onUse: () => void }) {
  const { t, lang } = useI18n();
  const showLock = useLock((s) => s.show);
  const [pack, setPack] = useState<PackId>("basic");
  const packInfo = PACKS.find((p) => p.id === pack)!;
  const locked = packInfo.pro && !pro;

  return (
    <div>
      <p className="text-sm text-muted">{t.templates.body}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {PACKS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPack(p.id)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
              pack === p.id ? "bg-primary text-primary-fg" : "bg-bg-elevated shadow-[var(--shadow-border)] hover:bg-bg-subtle",
            )}
          >
            <span>{p.emoji}</span>
            {p.name[lang]}
            {p.pro && !pro && <ProBadge className="px-1.5" />}
          </button>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {MOBILE_TEMPLATES.filter((x) => x.pack === pack).map((tpl) => (
          <button
            key={tpl.id}
            type="button"
            className="relative flex flex-col rounded-2xl bg-bg-elevated p-3 text-start shadow-[var(--shadow-border)] transition-transform hover:-translate-y-0.5"
            onClick={() => {
              if (locked) return showLock();
              useGenerator.setState({
                type: tpl.type,
                fields: templateFields(tpl),
                design: { ...tpl.design },
                name: "",
                isDynamic: false,
                editingId: null,
                shortCode: null,
              });
              onUse();
            }}
          >
            {locked && <ProBadge className="absolute end-2 top-2 z-10" />}
            <QrPreview value={buildPayload(tpl.type, templateFields(tpl)) || "https://nibrascode.com"} design={tpl.design} />
            <span className="mt-2 truncate text-sm font-semibold">{tpl.name[lang]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
