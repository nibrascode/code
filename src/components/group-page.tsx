import { notFound } from "@tanstack/react-router";
import { BAR_GROUPS, BarGroupView, GROUP_SLUG, type BarGroup } from "@/components/home-bars";
import { homePath } from "@/lib/locale-path";
import type { Lang } from "@/lib/i18n";

const LEAD: Record<BarGroup, Record<Lang, string>> = {
  g1: { az: "Saytdakı bütün alətlər. Hesab açılmır.", en: "All tools on the site. No account needed.", tr: "Sitedeki tüm araçlar. Hesap gerekmez.", ar: "كل أدوات الموقع. لا حاجة إلى حساب.", ru: "Все инструменты сайта. Аккаунт не нужен." },
  g2: { az: "Kod yazmaq, APK və iş paneli — hamısı bir siyahıda.", en: "Writing code, APK, and work panels — all in one list.", tr: "Kod yazmak, APK ve çalışma paneli — hepsi bir listede.", ar: "كتابة الكود وAPK ولوحات العمل — كلها في قائمة واحدة.", ru: "Код, APK и рабочие панели — всё в одном списке." },
  g3: { az: "Dərslər, yoxlamalar və yardım səhifələri.", en: "Lessons, checks, and help pages.", tr: "Dersler, kontroller ve yardım sayfaları.", ar: "الدروس والفحوص وصفحات المساعدة.", ru: "Уроки, проверки и страницы помощи." },
};

export function groupFromSlug(slug: string): BarGroup {
  const found = (Object.keys(GROUP_SLUG) as BarGroup[]).find((g) => GROUP_SLUG[g] === slug);
  if (!found) throw notFound();
  return found;
}

export function groupTitle(lang: Lang, group: BarGroup) {
  return `${BAR_GROUPS[group][lang]} — Nibras Code`;
}

export function GroupPage({ lang, group }: { lang: Lang; group: BarGroup }) {
  return (
    <main className="why-page nx-group-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <a href={homePath(lang)}>Nibras Code</a>
      </p>
      <h1>{BAR_GROUPS[group][lang]}</h1>
      <p>{LEAD[group][lang]}</p>
      <div className="nx-bars nx-bars--full">
        <BarGroupView lang={lang} group={group} full />
      </div>
    </main>
  );
}
