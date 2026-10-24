import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, Download, ExternalLink, Lock, ShieldCheck, X } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { STUDIO_APPS, appStoreLinks, type StudioApp } from "@/lib/apps";
import { STORE, pick, shotsFor } from "@/lib/app-store";
import { NIBRAS_PDF_ABOUT } from "@/lib/nibras-pdf-about";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import { countDownload } from "@/components/visit-meter";
import type { StudioAppRow } from "@/lib/studio";

const L = {
  az: { dl: "Yükləmə", rel: "Buraxılış tarixi", iap: "Tətbiqdaxili alışlar var", free: "Pulsuz", android: "Android", ver: "Versiya", size: "Ölçü", get: "Yüklə", soon: "Tezliklə", soonD: "Yükləmə linki hazır olanda burada görünəcək.", shots: "Ekran görüntüləri", about: "Tətbiq haqqında", more: "Ətraflı", less: "Qısalt", news: "Yeniliklər", safety: "Məlumat təhlükəsizliyi", safetyD: "Ətraflı məlumat məxfilik siyasətindədir.", policy: "Məxfilik siyasəti", info: "Tətbiq məlumatı", updated: "Yenilənib", pkg: "Paket", req: "Tələb olunur", cat: "Kateqoriya", dev: "Hazırlayan", similar: "Digər Nibras tətbiqləri", web: "Veb versiyanı aç", close: "Bağla", prev: "Əvvəlki", next: "Növbəti", up: "və yuxarı", lang: "Ekran görüntüləri ingiliscədir" },
  en: { dl: "Downloads", rel: "Released", iap: "Contains in-app purchases", free: "Free", android: "Android", ver: "Version", size: "Size", get: "Download", soon: "Coming soon", soonD: "The download link will appear here when it is ready.", shots: "Screenshots", about: "About this app", more: "Read more", less: "Show less", news: "What's new", safety: "Data safety", safetyD: "Full details are in the privacy policy.", policy: "Privacy policy", info: "App info", updated: "Updated", pkg: "Package", req: "Requires", cat: "Category", dev: "Developer", similar: "More Nibras apps", web: "Open web version", close: "Close", prev: "Previous", next: "Next", up: "and up", lang: "" },
  ar: { dl: "التنزيلات", rel: "تاريخ الإصدار", iap: "يتضمن عمليات شراء داخل التطبيق", free: "مجاني", android: "أندرويد", ver: "الإصدار", size: "الحجم", get: "تنزيل", soon: "قريبًا", soonD: "سيظهر رابط التنزيل هنا عندما يجهز.", shots: "لقطات الشاشة", about: "عن التطبيق", more: "المزيد", less: "أقل", news: "الجديد", safety: "أمان البيانات", safetyD: "التفاصيل الكاملة في سياسة الخصوصية.", policy: "سياسة الخصوصية", info: "معلومات التطبيق", updated: "آخر تحديث", pkg: "الحزمة", req: "يتطلب", cat: "الفئة", dev: "المطوّر", similar: "تطبيقات Nibras أخرى", web: "فتح نسخة الويب", close: "إغلاق", prev: "السابق", next: "التالي", up: "أو أحدث", lang: "لقطات الشاشة باللغة الإنجليزية" },
  ru: { dl: "Скачиваний", rel: "Дата выпуска", iap: "Есть встроенные покупки", free: "Бесплатно", android: "Android", ver: "Версия", size: "Размер", get: "Скачать", soon: "Скоро", soonD: "Ссылка для загрузки появится здесь, когда будет готова.", shots: "Скриншоты", about: "О приложении", more: "Подробнее", less: "Свернуть", news: "Что нового", safety: "Безопасность данных", safetyD: "Подробности — в политике конфиденциальности.", policy: "Политика конфиденциальности", info: "О версии", updated: "Обновлено", pkg: "Пакет", req: "Требуется", cat: "Категория", dev: "Разработчик", similar: "Другие приложения Nibras", web: "Открыть веб-версию", close: "Закрыть", prev: "Назад", next: "Далее", up: "и выше", lang: "Скриншоты на английском" },
  tr: { dl: "İndirme", rel: "Yayın tarihi", iap: "Uygulama içi satın alma içerir", free: "Ücretsiz", android: "Android", ver: "Sürüm", size: "Boyut", get: "İndir", soon: "Yakında", soonD: "İndirme bağlantısı hazır olduğunda burada görünecek.", shots: "Ekran görüntüleri", about: "Uygulama hakkında", more: "Devamı", less: "Daha az", news: "Yenilikler", safety: "Veri güvenliği", safetyD: "Ayrıntılar gizlilik politikasındadır.", policy: "Gizlilik politikası", info: "Uygulama bilgisi", updated: "Güncellendi", pkg: "Paket", req: "Gereksinim", cat: "Kategori", dev: "Geliştirici", similar: "Diğer Nibras uygulamaları", web: "Web sürümünü aç", close: "Kapat", prev: "Önceki", next: "Sonraki", up: "ve üstü", lang: "Ekran görüntüleri İngilizcedir" },
} satisfies Record<Lang, Record<string, string>>;

function fmtDate(iso: string, _lang: Lang) {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

export function iconWebp(src: string) {
  return src.replace(/\.(jpg|png)$/, ".webp");
}

function Lightbox({ shots, start, name, onClose, l }: { shots: readonly string[]; start: number; name: string; onClose: () => void; l: (typeof L)["en"] }) {
  const [i, setI] = useState(start);
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = track.current;
    if (el) el.scrollTo({ left: el.clientWidth * start * (document.dir === "rtl" ? -1 : 1), behavior: "instant" as ScrollBehavior });
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", key);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const go = (d: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * d * (document.dir === "rtl" ? -1 : 1), behavior: "smooth" });
  };
  return (
    <div className="ns-lb" role="dialog" aria-modal="true" aria-label={name} onClick={onClose}>
      <button type="button" className="ns-lb-x" aria-label={l.close} onClick={onClose}>
        <X className="size-5" />
      </button>
      <div
        ref={track}
        className="ns-lb-track"
        onClick={(e) => e.stopPropagation()}
        onScroll={(e) => setI(Math.round(Math.abs(e.currentTarget.scrollLeft) / e.currentTarget.clientWidth))}
      >
        {shots.map((s, k) => (
          <div key={s} className="ns-lb-slide">
            <img src={`${s}.webp`} alt={`${name} ${k + 1}`} loading={Math.abs(k - start) <= 1 ? "eager" : "lazy"} decoding="async" />
          </div>
        ))}
      </div>
      <div className="ns-lb-nav" onClick={(e) => e.stopPropagation()}>
        <button type="button" aria-label={l.prev} onClick={() => go(-1)} disabled={i === 0}>
          <ArrowLeft className="rtl-flip size-5" />
        </button>
        <span>
          {i + 1} / {shots.length}
        </span>
        <button type="button" aria-label={l.next} onClick={() => go(1)} disabled={i >= shots.length - 1}>
          <ArrowRight className="rtl-flip size-5" />
        </button>
      </div>
    </div>
  );
}

export function StoreAppPage({ app, live }: { app: StudioApp; live?: StudioAppRow | null }) {
  const { t, lang } = useI18n();
  const l = L[lang] ?? L.en;
  const f = STORE[app.slug] ?? { privacyUrl: `/privacy/${app.slug}` };
  const shots = shotsFor(f, lang);
  const shotsEnglishFallback = shots.length > 0 && !f.shots?.[lang] && lang !== "en";
  const stores = appStoreLinks(app, live);
  const [open, setOpen] = useState<number | null>(null);
  const [more, setMore] = useState(false);
  const icon = live?.icon_url || app.icon;
  const soon = f.soon || (stores.length === 0 && !f.apkUrl);
  const about = pick(f.about, lang);
  const news = pick(f.whatsNew, lang);
  const perms = pick(f.permissions, lang);
  const cat = pick(f.category, lang);
  const others = STUDIO_APPS.filter((a) => a.slug !== app.slug);

  const facts = [
    { k: f.iap ? l.iap : l.free, v: l.free, big: true },
    f.downloads ? { k: l.dl, v: f.downloads } : null,
    f.size ? { k: l.size, v: f.size } : null,
    f.minAndroid ? { k: l.android, v: `${f.minAndroid}+` } : null,
    f.version ? { k: l.ver, v: f.version } : null,
    cat ? { k: l.cat, v: cat } : null,
  ].filter(Boolean) as { k: string; v: string; big?: boolean }[];

  return (
    <main className="ns-app" data-slug={app.slug}>
      <header className="ns-head">
        <picture className="ns-icon">
          <source srcSet={iconWebp(icon)} type="image/webp" />
          <img src={icon} alt="" width={96} height={96} fetchPriority="high" />
        </picture>
        <div className="ns-title">
          <h1 dir="auto">{app.name}</h1>
          <a className="ns-dev" href={localeHref(lang, "/about")}>
            Nibras Code
          </a>
          {soon ? <span className="ns-chip">{l.soon}</span> : null}
        </div>
      </header>

      <dl className="ns-facts">
        {facts.map((x) => (
          <div key={x.k}>
            <dt>{x.big ? x.v : x.v}</dt>
            <dd>{x.big && x.k === l.free ? "" : x.k}</dd>
          </div>
        ))}
      </dl>

      <div className="ns-cta">
        {soon ? (
          <>
            <button type="button" className="ns-get is-soon" disabled>
              <Lock className="size-4" />
              {l.soon}
            </button>
            <p className="ns-cta-note">{l.soonD}</p>
          </>
        ) : (
          <>
            {stores.map((s) => (
              <a key={s.id} className="ns-get" href={s.href} target="_blank" rel="noopener noreferrer" onClick={() => countDownload(app.slug)}>
                <Download className="size-4" />
                {l.get} · {s.label}
              </a>
            ))}
            {f.apkUrl ? (
              <a className={stores.length ? "ns-get is-alt" : "ns-get"} href={f.apkUrl} rel="noopener" onClick={() => countDownload(app.slug)}>
                <Download className="size-4" />
                {l.get} · {f.apkLabel ?? "APK"}
                {f.size ? <small>{f.size}</small> : null}
              </a>
            ) : null}
          </>
        )}
        {app.slug === "nibras-qr" ? (
          <a className="ns-get is-alt" href={localeHref(lang, "/qr")}>
            <ExternalLink className="size-4" />
            {l.web}
          </a>
        ) : null}
      </div>

      {shots.length ? (
        <section className="ns-sec" aria-label={l.shots}>
          <div className="ns-shots" tabIndex={0}>
            {shots.map((s, k) => (
              <button key={s} type="button" className="ns-shot" onClick={() => setOpen(k)} aria-label={`${l.shots} ${k + 1}`}>
                <img
                  src={`${s}-s.webp`}
                  alt={f.shotLabels?.[k] ?? `${app.name} ${k + 1}`}
                  width={360}
                  height={640}
                  loading={k < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </button>
            ))}
          </div>
          {shotsEnglishFallback && l.lang ? <p className="ns-muted">{l.lang}</p> : null}
        </section>
      ) : null}

      <section className="ns-sec">
        <h2>{l.about}</h2>
        <p className="ns-lead">{t(app.leadKey)}</p>
        <div className={more ? "ns-more is-open" : "ns-more"}>
          <p>{t(app.bodyKey)}</p>
          {about ? <p>{about}</p> : null}
          {app.slug === "nibras-pdf" ? (
            <>
              <p>{(NIBRAS_PDF_ABOUT[lang] ?? NIBRAS_PDF_ABOUT.en).intro}</p>
              <ol className="ns-tools">
                {(NIBRAS_PDF_ABOUT[lang] ?? NIBRAS_PDF_ABOUT.en).tools.map((x) => (
                  <li key={x.t}>
                    <b>{x.t}</b>
                    <span>{x.d}</span>
                  </li>
                ))}
              </ol>
              <p>{(NIBRAS_PDF_ABOUT[lang] ?? NIBRAS_PDF_ABOUT.en).outro}</p>
            </>
          ) : null}
          <ul className="ns-feats">
            {app.features.map((k) => (
              <li key={k}>{t(k)}</li>
            ))}
          </ul>
        </div>
        <button type="button" className="ns-toggle" onClick={() => setMore((v) => !v)} aria-expanded={more}>
          {more ? l.less : l.more}
          <ChevronDown className={more ? "size-4 rotate-180" : "size-4"} />
        </button>
      </section>

      {news ? (
        <section className="ns-sec">
          <h2>{l.news}</h2>
          {f.version ? <p className="ns-muted">{`v${f.version}${f.updated ? ` · ${fmtDate(f.updated, lang)}` : ""}`}</p> : null}
          <p>{news}</p>
        </section>
      ) : null}

      <section className="ns-sec">
        <h2>{l.safety}</h2>
        <div className="ns-safe">
          <ShieldCheck className="size-5" />
          <div>
            {perms ? <p>{perms}</p> : null}
            <p className="ns-muted">{l.safetyD}</p>
            <a href={f.privacyUrl} className="ns-link">
              {l.policy}
            </a>
          </div>
        </div>
      </section>

      <section className="ns-sec">
        <h2>{l.info}</h2>
        <dl className="ns-info">
          {f.version ? (
            <div>
              <dt>{l.ver}</dt>
              <dd>{f.version}</dd>
            </div>
          ) : null}
          {f.updated ? (
            <div>
              <dt>{l.updated}</dt>
              <dd>{fmtDate(f.updated, lang)}</dd>
            </div>
          ) : null}
          {f.released ? (
            <div>
              <dt>{l.rel}</dt>
              <dd>{fmtDate(f.released, lang)}</dd>
            </div>
          ) : null}
          {f.downloads ? (
            <div>
              <dt>{l.dl}</dt>
              <dd>{f.downloads}</dd>
            </div>
          ) : null}
          {f.iap ? (
            <div>
              <dt>{l.free}</dt>
              <dd>{l.iap}</dd>
            </div>
          ) : null}
          {f.minAndroid ? (
            <div>
              <dt>{l.req}</dt>
              <dd>
                {l.android} {f.minAndroid} {l.up}
              </dd>
            </div>
          ) : null}
          {f.size ? (
            <div>
              <dt>{l.size}</dt>
              <dd>{f.size}</dd>
            </div>
          ) : null}
          {f.pkg ? (
            <div>
              <dt>{l.pkg}</dt>
              <dd dir="ltr">{f.pkg}</dd>
            </div>
          ) : null}
          {cat ? (
            <div>
              <dt>{l.cat}</dt>
              <dd>{cat}</dd>
            </div>
          ) : null}
          <div>
            <dt>{l.dev}</dt>
            <dd>Nibras Code · Nibrascode@gmail.com</dd>
          </div>
        </dl>
      </section>

      <section className="ns-sec">
        <h2>{l.similar}</h2>
        <div className="ns-similar">
          {others.map((a) => (
            <a key={a.slug} href={localeHref(lang, `/apps/${a.slug}`)}>
              <img src={iconWebp(a.icon)} alt="" width={64} height={64} loading="lazy" decoding="async" />
              <b dir="auto">{a.name}</b>
              <span>{STORE[a.slug]?.soon ? l.soon : l.free}</span>
            </a>
          ))}
        </div>
      </section>

      {open !== null ? <Lightbox shots={shots} start={open} name={app.name} onClose={() => setOpen(null)} l={l} /> : null}
    </main>
  );
}
