import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Barcode, Bookmark, Crown, LayoutGrid, LogOut, QrCode, ScanLine, Trash2 } from "lucide-react";
import { Toaster, toast } from "sonner";
import { Designer } from "@/qr/components/designer";
import { ExportBar } from "@/qr/components/export-bar";
import { QrPreview } from "@/qr/components/preview";
import { TypeForm, TypePicker } from "@/qr/components/type-form";
import { useQrAuth } from "@/qr/lib/auth";
import { useI18n } from "@/qr/lib/i18n";
import { deleteCode, LIMITS, listCodes, newLocalId, upsertCode, type LocalQr } from "@/qr/lib/local";
import { buildPayload, defaultName } from "@/qr/lib/payload";
import { useGenerator } from "@/qr/lib/store";
import { PLAN_LIMITS, type Plan } from "@/qr/lib/types";
import { cn } from "@/qr/lib/utils";
import { Button } from "@/qr/ui/button";
import { Input } from "@/qr/ui/input";
import { Label } from "@/qr/ui/label";
import { LockDialog, ProBadge, useLock } from "./pro";
import { Templates } from "./templates";

// Heavy parts load on demand: jsQR (scanner) and bwip-js (barcodes).
const Scanner = lazy(() => import("./scanner").then((m) => ({ default: m.Scanner })));
const BarcodeScreen = lazy(() => import("./barcode").then((m) => ({ default: m.BarcodeScreen })));

type Tab = "create" | "templates" | "scan" | "barcode" | "saved";
const TABS: Tab[] = ["create", "templates", "scan", "barcode", "saved"];

function tabFromHash(): Tab {
  const h = window.location.hash.replace("#", "") as Tab;
  return TABS.includes(h) ? h : "create";
}

export function QrTool() {
  const { w } = useI18n();
  const auth = useQrAuth();
  const pro = auth.pro;
  const [tab, setTabState] = useState<Tab>("create");
  const [thanks, setThanks] = useState(false);

  useEffect(() => {
    setTabState(tabFromHash());
    const on = () => setTabState(tabFromHash());
    window.addEventListener("hashchange", on);
    const purchased = new URLSearchParams(window.location.search).get("purchase") === "success";
    void useQrAuth.getState().init().then(async () => {
      if (!purchased) return;
      setThanks(true);
      const u = new URL(window.location.href);
      u.searchParams.delete("purchase");
      window.history.replaceState(null, "", u.pathname + u.search + u.hash);
      // The Lemon webhook usually lands within seconds; poll briefly.
      for (let i = 0; i < 10; i++) {
        if (await useQrAuth.getState().refreshPro().catch(() => false)) return;
        await new Promise((r) => setTimeout(r, 3000));
      }
    });
    return () => window.removeEventListener("hashchange", on);
  }, []);

  const setTab = (t: Tab) => {
    setTabState(t);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${t}`);
  };

  const labels: Record<Tab, { label: string; icon: typeof QrCode }> = {
    create: { label: w.tabCreate, icon: QrCode },
    templates: { label: w.tabTemplates, icon: LayoutGrid },
    scan: { label: w.tabScan, icon: ScanLine },
    barcode: { label: w.tabBarcode, icon: Barcode },
    saved: { label: w.tabSaved, icon: Bookmark },
  };

  return (
    <div className="qr-tool">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <nav className="flex flex-wrap gap-1.5" aria-label="Nibras QR">
          {TABS.map((id) => {
            const { label, icon: Icon } = labels[id];
            return (
              <button
                key={id}
                type="button"
                data-tab={id}
                onClick={() => setTab(id)}
                aria-current={tab === id ? "page" : undefined}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  tab === id ? "bg-primary text-primary-fg" : "bg-bg-elevated text-muted shadow-[var(--shadow-border)] hover:text-fg",
                )}
              >
                <Icon className="size-4" /> {label}
                {id === "barcode" && !pro && <ProBadge className="px-1.5" />}
              </button>
            );
          })}
        </nav>
        <AccountChip />
      </div>

      {thanks && (
        <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-amber-400/15 to-fuchsia-500/15 p-4 text-sm" role="status">
          <span className="font-medium">{pro ? `${w.proActive} 🎉` : w.purchaseThanks}</span>
          <button type="button" className="text-muted hover:text-fg" onClick={() => setThanks(false)} aria-label="Close">
            ×
          </button>
        </div>
      )}
      {tab === "create" && <CreatePanel pro={pro} />}
      {tab === "templates" && <Templates pro={pro} onUse={() => setTab("create")} />}
      <Suspense fallback={<div className="h-64 animate-pulse rounded-2xl bg-bg-elevated" />}>
        {tab === "scan" && <Scanner pro={pro} />}
        {tab === "barcode" && <BarcodeScreen pro={pro} />}
      </Suspense>
      {tab === "saved" && <SavedPanel pro={pro} onEdit={() => setTab("create")} />}

      <LockDialog />
      <Toaster theme="dark" position="top-center" />
    </div>
  );
}

function AccountChip() {
  const { w } = useI18n();
  const { ready, user, pro, busy, signIn, signOut } = useQrAuth();
  if (!ready) return <span className="h-9 w-32" />;
  if (!user)
    return (
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" disabled={busy} onClick={() => void signIn()}>
          {w.signIn}
        </Button>
        <Button size="sm" data-testid="qr-get-pro" onClick={() => useLock.getState().show()}>
          <Crown className="size-3.5" /> Pro
        </Button>
      </div>
    );
  return (
    <div className="flex items-center gap-2 text-sm">
      {user.image && <img src={user.image} alt="" className="size-7 rounded-full" referrerPolicy="no-referrer" />}
      <span className="max-w-40 truncate text-muted">{user.name ?? user.email}</span>
      <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold", pro ? "bg-gradient-to-r from-amber-400 to-fuchsia-500 text-white" : "bg-bg-subtle text-muted")}>
        {pro ? (
          <>
            <Crown className="me-1 inline size-3" />
            {w.proActive}
          </>
        ) : (
          w.freePlan
        )}
      </span>
      {!pro && (
        <Button size="sm" data-testid="qr-get-pro" onClick={() => useLock.getState().show()}>
          <Crown className="size-3.5" /> Pro
        </Button>
      )}
      <Button size="icon" variant="ghost" aria-label={w.signOut} disabled={busy} onClick={() => void signOut()}>
        <LogOut />
      </Button>
    </div>
  );
}

function CreatePanel({ pro }: { pro: boolean }) {
  const { t, m } = useI18n();
  const gen = useGenerator();
  const showLock = useLock((s) => s.show);
  const plan: Plan = pro ? "premium" : "free";
  const limits = PLAN_LIMITS[plan];
  const payload = useMemo(() => buildPayload(gen.type, gen.fields), [gen.type, gen.fields]);
  const name = gen.name.trim() || defaultName(gen.type, gen.fields);

  const onSave = () => {
    if (!payload) return toast.error(t.create.empty);
    const now = Date.now();
    const id = gen.editingId ?? newLocalId();
    const prev = listCodes().find((c) => c.id === id);
    const res = upsertCode(
      { id, name, type: gen.type, fields: gen.fields, design: gen.design, value: payload, createdAt: prev?.createdAt ?? now, updatedAt: now },
      pro ? LIMITS.pro.saved : LIMITS.free.saved,
    );
    if (res === "limit") {
      toast.error(m.limitReached.replace("{n}", String(LIMITS.free.saved)));
      return showLock();
    }
    useGenerator.setState({ editingId: id });
    toast.success(t.create.saved);
  };

  return (
    <div>
      <TypePicker />
      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_19rem_17rem]">
        <section className="space-y-4 rounded-2xl bg-bg-elevated p-4 shadow-[var(--shadow-border)] md:p-5">
          <TypeForm />
          <div className="space-y-1.5">
            <Label htmlFor="qr-name">{t.fields.name}</Label>
            <Input id="qr-name" value={gen.name} onChange={(e) => gen.setName(e.target.value)} placeholder={defaultName(gen.type, gen.fields)} />
          </div>
          <button
            type="button"
            onClick={showLock}
            className="flex w-full items-center justify-between gap-3 rounded-xl bg-bg-subtle px-3 py-3 text-start"
          >
            <span>
              <span className="block text-sm font-medium">{m.dynamic}</span>
              <span className="block text-xs text-muted">{m.dynamicHint}</span>
            </span>
            <ProBadge />
          </button>
          <Button type="button" onClick={onSave} data-testid="qr-save">
            {gen.editingId ? t.create.update : t.create.save}
          </Button>
        </section>

        <section className="rounded-2xl border border-border/60 bg-bg-elevated p-4 shadow-[var(--shadow-border)] lg:sticky lg:top-24 lg:self-start">
          <div data-testid="qr-preview" className="mx-auto w-full max-w-[220px] lg:max-w-[272px]">
            <QrPreview value={payload || "https://www.nibrascode.com"} design={gen.design} branded={limits.branded} className="rounded-xl p-2 shadow-[0_1px_3px_rgb(0_0_0/0.12)]" />
          </div>
          <div className="mx-auto mt-4 w-full max-w-[320px] lg:max-w-none">
            <ExportBar value={payload || "https://www.nibrascode.com"} design={gen.design} name={name} plan={plan} onLocked={showLock} />
          </div>
        </section>

        <section className="rounded-2xl bg-bg-elevated p-4 shadow-[var(--shadow-border)] md:p-5">
          <h2 className="mb-4 font-display text-sm font-semibold">{t.design.title}</h2>
          <Designer canPro={limits.designPro} onLocked={showLock} />
        </section>
      </div>
    </div>
  );
}

function SavedPanel({ pro, onEdit }: { pro: boolean; onEdit: () => void }) {
  const { w, m, t } = useI18n();
  const [codes, setCodes] = useState<LocalQr[]>([]);
  useEffect(() => setCodes(listCodes()), []);
  const max = pro ? LIMITS.pro.saved : LIMITS.free.saved;

  if (!codes.length) return <p className="rounded-2xl bg-bg-elevated p-6 text-sm text-muted shadow-[var(--shadow-border)]">{m.savedEmpty}</p>;
  return (
    <div>
      <p className="mb-3 text-xs text-subtle">
        {w.localNote} {!pro && `${codes.length}/${max}`}
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {codes.map((c) => (
          <div key={c.id} className="rounded-2xl bg-bg-elevated p-3 shadow-[var(--shadow-border)]">
            <QrPreview value={c.value} design={c.design} />
            <p className="mt-2 truncate text-sm font-semibold">{c.name}</p>
            <p className="text-xs text-subtle">{t.types[c.type]}</p>
            <div className="mt-2 flex gap-1.5">
              <Button
                size="sm"
                variant="secondary"
                className="flex-1"
                onClick={() => {
                  useGenerator.getState().loadSaved({ id: c.id, type: c.type, name: c.name, isDynamic: false, fields: c.fields, design: c.design });
                  onEdit();
                }}
              >
                {w.edit}
              </Button>
              <Button
                size="icon"
                variant="ghost"
                aria-label={t.dash.delete}
                onClick={() => {
                  if (!window.confirm(m.confirmDelete)) return;
                  deleteCode(c.id);
                  setCodes(listCodes());
                }}
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
