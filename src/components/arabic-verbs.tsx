import { Volume2 } from "lucide-react";
import { getAppBySlug } from "@/lib/apps";
import type { Lang } from "@/lib/i18n";
import { verbHub, verbPath, type Verb, type VerbForm } from "@/lib/arabic-verbs";

type U = { banT: string; banD: string; say: string; hub: string; lead: (m: string) => string; form: string; ar: string; tr: string; ex: string; past: string; pres: string; imp: string; voice: string; mt: string; related: string; hubH: (n: number) => string; hubLead: string };
export const VU: Record<Lang, U> = {
  az: { banT: "Nibras Arabic — 704 feil telefonda", banD: "Pulsuz Android tətbiqi: feillər, isimlər, dialoqlar, kartlar və hərf yazısı. İnternetsiz işləyir.", say: "Səsləndir", hub: "Ərəb feilləri", lead: (m) => `Ərəb dilində «${m}» feili: keçmiş zaman (mazi), indiki zaman (muzari) və əmr forması, Azərbaycan dilində tərcümə, misallar və səsləndirmə.`, form: "Forma", ar: "Ərəbcə", tr: "Tərcümə", ex: "Misal", past: "Keçmiş (mazi)", pres: "İndiki (muzari)", imp: "Əmr (əmr)", voice: "Səsləndirmə brauzerin ərəb səsi ilə oxunur; cihazda ərəb səsi yoxdursa eşidilməyə bilər.", mt: "", related: "Oxşar mənalı feillər", hubH: (n) => `Ərəb dilində ${n} feil — mazi, muzari, əmr`, hubLead: "Nibras Arabic tətbiqindəki bütün feillər: hər birinin keçmiş, indiki zaman və əmr forması, Azərbaycan dilində tərcümə və misallar. Feilə toxunun." },
  en: { banT: "Nibras Arabic — 704 verbs on your phone", banD: "Free Android app: verbs, nouns, dialogues, flashcards and letter writing. Works offline.", say: "Play", hub: "Arabic verbs", lead: (m) => `The Arabic verb for «${m}»: past (madi), present (mudari) and imperative forms with English translation, examples and audio.`, form: "Form", ar: "Arabic", tr: "Translation", ex: "Example", past: "Past (madi)", pres: "Present (mudari)", imp: "Imperative (amr)", voice: "Audio uses your browser's Arabic voice; it may be silent if your device has none.", mt: "English meanings and examples are machine-translated from the Azerbaijani original and may be imprecise.", related: "Verbs with similar meaning", hubH: (n) => `${n} Arabic verbs — past, present, imperative`, hubLead: "Every verb from the Nibras Arabic app with its past, present and imperative forms, translation and examples. Tap a verb." },
  tr: { banT: "Nibras Arabic — telefonda 704 fiil", banD: "Ücretsiz Android uygulaması: fiiller, isimler, diyaloglar, kartlar ve harf yazımı. İnternetsiz çalışır.", say: "Seslendir", hub: "Arapça fiiller", lead: (m) => `Arapçada «${m}» fiili: geçmiş (mazi), şimdiki (muzari) ve emir kipi, Türkçe çeviri, örnekler ve seslendirme.`, form: "Kip", ar: "Arapça", tr: "Çeviri", ex: "Örnek", past: "Geçmiş (mazi)", pres: "Şimdiki (muzari)", imp: "Emir (emr)", voice: "Seslendirme tarayıcının Arapça sesiyle yapılır; cihazda Arapça ses yoksa duyulmayabilir.", mt: "Türkçe anlamlar ve örnekler Azerbaycanca asıldan makine çevirisiyle hazırlandı; küçük hatalar olabilir.", related: "Benzer anlamlı fiiller", hubH: (n) => `Arapçada ${n} fiil — mazi, muzari, emir`, hubLead: "Nibras Arabic uygulamasındaki tüm fiiller: geçmiş, şimdiki ve emir kipleri, çeviri ve örnekler. Bir fiile dokunun." },
  ar: { banT: "Nibras Arabic — 704 فعلاً في هاتفك", banD: "تطبيق أندرويد مجاني: أفعال وأسماء وحوارات وبطاقات وكتابة الحروف. يعمل بلا إنترنت.", say: "استماع", hub: "الأفعال العربية", lead: (m) => `الفعل «${m}»: الماضي والمضارع والأمر مع أمثلة ونطق صوتي.`, form: "الصيغة", ar: "الفعل", tr: "المعنى", ex: "مثال", past: "الماضي", pres: "المضارع", imp: "الأمر", voice: "يُنطق بصوت المتصفح العربي؛ قد لا يُسمع إن لم يكن في الجهاز صوت عربي.", mt: "المعاني والأمثلة مترجمة آلياً من الأصل الأذربيجاني وقد تكون غير دقيقة.", related: "أفعال بمعنى قريب", hubH: (n) => `${n} فعلاً عربياً — الماضي والمضارع والأمر`, hubLead: "جميع أفعال تطبيق Nibras Arabic مع الماضي والمضارع والأمر والأمثلة. اضغط على الفعل." },
  ru: { banT: "Nibras Arabic — 704 глагола в телефоне", banD: "Бесплатное Android-приложение: глаголы, существительные, диалоги, карточки и письмо букв. Работает без интернета.", say: "Озвучить", hub: "Арабские глаголы", lead: (m) => `Арабский глагол «${m}»: прошедшее (мади), настоящее (мудари) и повелительное наклонение, перевод на русский, примеры и озвучка.`, form: "Форма", ar: "По-арабски", tr: "Перевод", ex: "Пример", past: "Прошедшее (мади)", pres: "Настоящее (мудари)", imp: "Повелительное (амр)", voice: "Озвучка идёт арабским голосом браузера; если его нет на устройстве, звука может не быть.", mt: "Русские значения и примеры переведены машинно с азербайджанского оригинала и могут быть неточными.", related: "Глаголы с похожим значением", hubH: (n) => `${n} арабских глаголов — прошедшее, настоящее, повелительное`, hubLead: "Все глаголы приложения Nibras Arabic: прошедшее, настоящее и повелительное, перевод и примеры. Нажмите на глагол." },
};

const app = getAppBySlug("nibras-arabic");
const PLAY = app?.playStoreUrl ?? "https://play.google.com/store/apps/details?id=com.nibrasarabic.app";
const HUAWEI = app?.huaweiStoreUrl ?? "";

function say(text: string) {
  if (typeof speechSynthesis === "undefined") return;
  const u = new SpeechSynthesisUtterance(text.replace(/[.!؟]/g, ""));
  u.lang = "ar-SA";
  u.rate = 0.8;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

export function AppBanner({ lang = "az" }: { lang?: Lang }) {
  const u = VU[lang];
  return (
    <aside className="my-8 flex flex-wrap items-center gap-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4" data-testid="arabic-app-banner">
      <img src="/apps/nibras-arabic-v2.webp" alt="" width={56} height={56} className="size-14 rounded-2xl" />
      <div className="min-w-0 flex-1 basis-56">
        <b className="block">{u.banT}</b>
        <span className="text-sm text-muted">{u.banD}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <a href={PLAY} target="_blank" rel="noopener" className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">Google Play</a>
        {HUAWEI ? <a href={HUAWEI} target="_blank" rel="noopener" className="rounded-xl border border-white/20 px-4 py-2 text-sm">Huawei AppGallery</a> : null}
      </div>
    </aside>
  );
}

function FormRow({ label, f, sayL }: { label: string; f: VerbForm | null; sayL: string }) {
  if (!f) return null;
  return (
    <tr className="border-t border-white/10">
      <th className="py-3 pe-3 text-start text-sm font-medium text-muted">{label}</th>
      <td className="py-3 pe-3"><span lang="ar" dir="rtl" className="font-arabic text-2xl">{f[0]}</span></td>
      <td className="py-3 pe-3 text-sm">{f[1]}</td>
      <td className="py-3 text-sm">
        {f[2] && f[2] !== `${f[0]}.` ? <><span lang="ar" dir="rtl" className="block text-lg">{f[2]}</span><span className="text-muted">{f[3]}</span></> : null}
      </td>
      <td className="py-3"><button type="button" aria-label={sayL} className="rounded-lg p-2 hover:bg-white/10" onClick={() => say(f[0])}><Volume2 className="size-4" /></button></td>
    </tr>
  );
}

export function VerbPage({ v, prev, next, related, lang = "az" }: { v: Verb; prev?: Verb; next?: Verb; related: Verb[]; lang?: Lang }) {
  const u = VU[lang];
  return (
    <main dir={lang === "ar" ? "rtl" : undefined} className="mx-auto w-full max-w-4xl px-4 pt-28 pb-16 md:px-6">
      <nav className="mb-4 text-sm text-muted"><a href={lang === "az" ? "/" : `/${lang}`} className="hover:text-fg">Nibras Code</a> / <a href={verbHub(lang)} className="hover:text-fg">{u.hub}</a></nav>
      <h1 className="font-display text-3xl font-bold md:text-4xl"><span lang="ar" dir="rtl">{v.a}</span> — {v.m}</h1>
      <p className="mt-3 text-muted">{u.lead(v.m)}</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <table className="w-full">
          <thead><tr className="text-start text-xs uppercase text-muted"><th className="pb-2 text-start">{u.form}</th><th className="pb-2 text-start">{u.ar}</th><th className="pb-2 text-start">{u.tr}</th><th className="pb-2 text-start">{u.ex}</th><th /></tr></thead>
          <tbody>
            <FormRow label={u.past} f={v.p} sayL={u.say} />
            <FormRow label={u.pres} f={v.r} sayL={u.say} />
            <FormRow label={u.imp} f={v.i} sayL={u.say} />
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted" data-nosnippet>{u.voice}{u.mt ? ` ${u.mt}` : ""}</p>
      <AppBanner lang={lang} />
      {related.length ? (
        <section>
          <h2 className="mb-3 text-lg font-semibold">{u.related}</h2>
          <ul className="flex flex-wrap gap-2">{related.map((r) => <li key={r.s}><a href={verbPath(r.s, lang)} className="inline-block rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/10"><span lang="ar">{r.a}</span> · {r.m}</a></li>)}</ul>
        </section>
      ) : null}
      <nav className="mt-8 flex justify-between gap-3 text-sm">
        {prev ? <a href={verbPath(prev.s, lang)} className="hover:underline">← <span lang="ar">{prev.a}</span> {prev.m}</a> : <span />}
        {next ? <a href={verbPath(next.s, lang)} className="hover:underline"><span lang="ar">{next.a}</span> {next.m} →</a> : <span />}
      </nav>
    </main>
  );
}

export function VerbHub({ verbs, lang = "az" }: { verbs: Verb[]; lang?: Lang }) {
  const u = VU[lang];
  return (
    <main dir={lang === "ar" ? "rtl" : undefined} className="mx-auto w-full max-w-5xl px-4 pt-28 pb-16 md:px-6">
      <h1 className="font-display text-3xl font-bold md:text-4xl">{u.hubH(verbs.length)}</h1>
      <p className="mt-3 text-muted">{u.hubLead}</p>
      <AppBanner lang={lang} />
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {verbs.map((v) => (
          <li key={v.s}><a href={verbPath(v.s, lang)} className="flex items-baseline justify-between gap-3 rounded-xl border border-white/10 px-3 py-2 hover:bg-white/10"><span className="truncate text-sm">{v.m}</span><span lang="ar" dir="rtl" className="text-lg">{v.a}</span></a></li>
        ))}
      </ul>
    </main>
  );
}
