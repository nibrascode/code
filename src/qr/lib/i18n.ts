import { useI18n as useSiteI18n } from "@/lib/i18n-context";
import { QR_DICT, type Lang } from "./dict";
import { MOBILE_STRINGS } from "./strings";
import { WEB_STRINGS } from "./web-strings";

export { LANGS, LOCALE, type Dict, type Lang } from "./dict";

/** QR tool strings follow the site language (same 5 languages as the app). */
export function useI18n() {
  const { lang, setLang } = useSiteI18n();
  const l = lang as Lang;
  return { lang: l, setLang, t: QR_DICT[l], m: MOBILE_STRINGS[l], w: WEB_STRINGS[l] };
}
