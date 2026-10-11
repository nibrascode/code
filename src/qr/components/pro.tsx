import { useState } from "react";
import { Check, Crown, Loader2, Lock, X } from "lucide-react";
import { create } from "zustand";
import { useI18n } from "@/qr/lib/i18n";
import { useQrAuth } from "@/qr/lib/auth";
import { cn } from "@/qr/lib/utils";
import { Button } from "@/qr/ui/button";

export const PLAY_URL = "https://play.google.com/store/apps/details?id=com.nibras.qr";

export const useLock = create<{ open: boolean; show: () => void; hide: () => void }>((set) => ({
  open: false,
  show: () => set({ open: true }),
  hide: () => set({ open: false }),
}));

export function ProBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 px-2 py-0.5 text-[10px] font-bold text-white",
        className,
      )}
    >
      <Lock className="size-2.5" /> PRO
    </span>
  );
}

type Plan = "1y" | "lifetime";

/** Web paywall: one-time Lemon Squeezy purchase (sign-in required). */
export function LockDialog() {
  const { w } = useI18n();
  const { open, hide } = useLock();
  const { user, pro, signIn, busy, buy } = useQrAuth();
  const [plan, setPlan] = useState<Plan>("1y");
  const [err, setErr] = useState(false);
  if (!open) return null;
  const plans: { id: Plan; name: string; note: string; price: string }[] = [
    { id: "1y", name: w.plan1y, note: w.plan1yNote, price: "$9.99" },
    { id: "lifetime", name: w.planLife, note: w.planLifeNote, price: "$19.99" },
  ];
  const onBuy = async () => {
    setErr(false);
    try {
      await buy(plan);
    } catch {
      setErr(true);
    }
  };
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" onClick={hide}>
      <div className="relative w-full max-w-md rounded-2xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="absolute end-3 top-3 text-muted hover:text-fg" onClick={hide} aria-label="Close">
          <X className="size-5" />
        </button>
        <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-fuchsia-500 text-white">
          <Crown className="size-6" />
        </span>
        <h2 className="mt-4 font-display text-xl font-bold">{w.lockTitle}</h2>
        <p className="mt-2 text-sm text-muted">{w.lockBody}</p>
        {pro ? (
          <p className="mt-5 rounded-xl bg-bg-subtle p-3 text-sm font-semibold">{w.proActive} ✓</p>
        ) : (
          <>
            <div className="mt-5 grid gap-2" role="radiogroup">
              {plans.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={plan === p.id}
                  data-plan={p.id}
                  onClick={() => setPlan(p.id)}
                  className={cn(
                    "relative flex items-center justify-between gap-3 rounded-xl border-2 p-3 text-start transition-colors",
                    plan === p.id ? "border-fuchsia-500 bg-fuchsia-500/5" : "border-border hover:border-fg/30",
                  )}
                >
                  <span>
                    <span className="block font-semibold">{p.name}</span>
                    <span className={cn("block text-xs", p.id === "1y" ? "font-semibold text-fuchsia-600 dark:text-fuchsia-400" : "text-muted")}>
                      {p.id === "1y" && <Check className="me-1 inline size-3" />}
                      {p.note}
                    </span>
                  </span>
                  <span className="text-end">
                    <span className="block font-display text-lg font-bold">{p.price}</span>
                    <span className="block text-[11px] text-subtle">{w.oneTime}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-4 grid gap-2">
              {user ? (
                <Button disabled={busy} onClick={() => void onBuy()} data-testid="qr-buy">
                  {busy && <Loader2 className="size-4 animate-spin" />} {w.buy} · {plans.find((p) => p.id === plan)!.price}
                </Button>
              ) : (
                <>
                  <p className="text-xs text-subtle">{w.lockSignIn}</p>
                  <Button disabled={busy} onClick={() => void signIn()}>
                    {w.signIn}
                  </Button>
                </>
              )}
              {err && <p className="text-xs text-red-600">{w.payError}</p>}
              <p className="text-xs text-muted">{w.appNote}</p>
              <p className="text-[11px] text-subtle">{w.securePay}</p>
            </div>
          </>
        )}
        <div className="mt-4 border-t border-border pt-3">
          <a href={PLAY_URL} target="_blank" rel="noreferrer" className="text-xs text-muted underline-offset-2 hover:underline">
            {w.getApp} (Android)
          </a>
        </div>
      </div>
    </div>
  );
}
