import { useState } from "react";
import { useQrAuth } from "@/qr/lib/auth";
import type { EraseCopy } from "./erase-copy";

// Same Nibras Pro entitlement and Lemon Squeezy plans as the QR tool (src/qr/components/pro.tsx).
const PLANS = [
  { id: "1y", price: "$9.99" },
  { id: "lifetime", price: "$19.99" },
] as const;

export function PremiumDialog({ t, reason, onClose, dir }: { t: EraseCopy; reason: string; onClose: () => void; dir: "ltr" | "rtl" }) {
  const { user, pro, busy, signIn, buy } = useQrAuth();
  const [plan, setPlan] = useState<"1y" | "lifetime">("1y");
  const [err, setErr] = useState(false);
  const features = [t.pf1, t.pf2, t.pf3, t.pf4, t.pf5, t.pf6];
  async function onBuy() {
    setErr(false);
    try {
      await buy(plan, "/erase");
    } catch {
      setErr(true);
    }
  }
  return (
    <div className="erase-modal" role="dialog" aria-modal="true" aria-label={t.pTitle} dir={dir} onClick={onClose} data-testid="erase-premium">
      <div className="erase-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="erase-x" aria-label={t.close} onClick={onClose}>×</button>
        <h2>👑 {t.pTitle}</h2>
        {reason ? <p className="erase-reason">{reason}</p> : null}
        <p>{t.pBody}</p>
        <ul>{features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
        {pro ? (
          <p className="erase-ok">{t.proNote}</p>
        ) : (
          <>
            <div className="erase-plans" role="radiogroup">
              {PLANS.map((p) => (
                <button key={p.id} type="button" role="radio" aria-checked={plan === p.id} data-plan={p.id} className={plan === p.id ? "is-on" : ""} onClick={() => setPlan(p.id)}>
                  <b>{p.id === "1y" ? t.plan1y : t.planLife}</b>
                  <small>{p.id === "1y" ? t.plan1yNote : t.planLifeNote}</small>
                  <span>{p.price} · {p.id === "1y" ? t.term1y : t.termLife}</span>
                </button>
              ))}
            </div>
            {user ? (
              <>
                <p className="erase-small">{t.signedAs}: {user.email}</p>
                <button type="button" className="files-run" disabled={busy} onClick={() => void onBuy()} data-testid="erase-buy">{t.buy} · {PLANS.find((p) => p.id === plan)!.price}</button>
              </>
            ) : (
              <>
                <p className="erase-small">{t.signInNote}</p>
                <button type="button" className="files-run" disabled={busy} onClick={() => void signIn("/erase")} data-testid="erase-signin">{t.signIn}</button>
              </>
            )}
            {err ? <p className="erase-err" role="alert">{t.payError}</p> : null}
            <p className="erase-small">{t.secure}</p>
          </>
        )}
      </div>
    </div>
  );
}
