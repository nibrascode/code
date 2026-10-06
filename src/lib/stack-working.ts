import type { Lang } from "@/lib/i18n";
import { gitWorking } from "@/lib/git-working";
import type { ProgrammingSection } from "@/lib/programming";
import { reactWorking } from "@/lib/react-working";

export function withStackWorking(
  slug: string,
  lang: Lang,
  sections: readonly ProgrammingSection[],
): readonly ProgrammingSection[] {
  const extra = slug === "git" ? gitWorking(lang) : slug === "react" ? reactWorking(lang) : null;
  if (!extra) return sections;
  const list = [...sections];
  const at = list.findIndex((item) => item.id === "faq");
  list.splice(at < 0 ? list.length : at, 0, extra);
  return list;
}
