import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

/** Nibras apps need Android 7.0+ (minSdk 24, see src/data/play-facts.json). */
const MIN = 7;

type State = { kind: "ok" | "old" | "ios" | "desktop"; ver?: string } | null;

const T: Record<Lang, { title: string; ok: string; old: string; ios: string; desktop: string }> = {
  az: { title: "Cihaz yoxlaması", ok: "Sizin cihazınız (Android {v}) Nibras tətbiqlərini dəstəkləyir.", old: "Android {v} köhnədir: Nibras tətbiqləri Android 7.0 və yuxarı tələb edir.", ios: "Bu iPhone/iPad-dir. APK yalnız Android-də qurulur; veb alətlər brauzerdə işləyir.", desktop: "Kompüterdən baxırsınız. APK-nı Android 7.0+ telefonda açın." },
  en: { title: "Device check", ok: "Your device (Android {v}) supports Nibras apps.", old: "Android {v} is too old: Nibras apps need Android 7.0 or newer.", ios: "This is an iPhone/iPad. APKs install only on Android; the web tools work in the browser.", desktop: "You're on a computer. Open the APK on an Android 7.0+ phone." },
  tr: { title: "Cihaz kontrolü", ok: "Cihazınız (Android {v}) Nibras uygulamalarını destekliyor.", old: "Android {v} eski: Nibras uygulamaları Android 7.0 ve üstü gerektirir.", ios: "Bu bir iPhone/iPad. APK yalnızca Android'de kurulur; web araçları tarayıcıda çalışır.", desktop: "Bilgisayardasınız. APK'yı Android 7.0+ telefonda açın." },
  ar: { title: "فحص الجهاز", ok: "جهازك (Android {v}) يدعم تطبيقات نبراس.", old: "Android {v} قديم: تطبيقات نبراس تحتاج Android 7.0 أو أحدث.", ios: "هذا iPhone/iPad. ملفات APK تُثبَّت على Android فقط؛ أدوات الويب تعمل في المتصفح.", desktop: "أنت على حاسوب. افتح APK على هاتف Android 7.0 أو أحدث." },
  ru: { title: "Проверка устройства", ok: "Ваше устройство (Android {v}) поддерживает приложения Nibras.", old: "Android {v} устарел: приложениям Nibras нужен Android 7.0 или новее.", ios: "Это iPhone/iPad. APK ставится только на Android; веб-инструменты работают в браузере.", desktop: "Вы за компьютером. Откройте APK на телефоне с Android 7.0+." },
};

export function DeviceCheck({ lang }: { lang: Lang }) {
  const [s, setS] = useState<State>(null);
  useEffect(() => {
    const ua = navigator.userAgent;
    const m = ua.match(/Android\s+(\d+)(?:\.(\d+))?/i);
    if (m) setS({ kind: Number(m[1]) >= MIN ? "ok" : "old", ver: m[2] ? `${m[1]}.${m[2]}` : m[1] });
    else if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) setS({ kind: "ios" });
    else setS({ kind: "desktop" });
  }, []);
  if (!s) return null;
  const t = T[lang] ?? T.en;
  const color = s.kind === "ok" ? "#16a34a" : s.kind === "old" ? "#dc2626" : "#64748b";
  return (
    <div role="status" data-nosnippet="" data-testid="device-check" style={{ display: "flex", gap: 10, alignItems: "center", border: `1px solid ${color}55`, background: `${color}14`, borderRadius: 14, padding: "10px 14px", margin: "12px 0", fontSize: 14 }}>
      <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 99, background: color, flex: "none" }} />
      <span><b>{t.title}:</b> {t[s.kind].replace("{v}", s.ver ?? "")}</span>
    </div>
  );
}
