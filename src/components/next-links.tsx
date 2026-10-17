import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";

const HEAD: Record<Lang, string> = { az: "Sonra", en: "Next", tr: "Sonra", ar: "بعد ذلك", ru: "Дальше" };

export function NextLinks({ links }: { links: { href: string; label: Record<Lang, string> }[] }) {
  const { lang } = useI18n();
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2" aria-label={HEAD[lang]}>
      <span className="text-sm text-muted">{HEAD[lang]}</span>
      {links.map((link) => (
        <a key={link.href} href={localeHref(lang, link.href)} className="rounded-full border border-white/15 px-3 py-1 text-sm">
          {link.label[lang]}
        </a>
      ))}
    </nav>
  );
}
