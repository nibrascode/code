import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { LIBRARY, type LibrarySection } from "@/lib/library";
import { useI18n } from "@/lib/i18n-context";
import { cn } from "@/lib/utils";

export function NavMenu({ section }: { section: LibrarySection }) {
  const { t, lang } = useI18n();
  const page = LIBRARY[section];
  const path = `/${section}` as const;
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const active =
    pathname === path ||
    pathname.startsWith(`${path}/`) ||
    (section === "resources" && (pathname.startsWith("/resurslar") || pathname.startsWith("/ru/resources")));
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={cn("nav-drop", active && "is-on", open && "is-open")}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link to={path}>{t(page.title)}</Link>
      <button type="button" aria-expanded={open} aria-label={t(page.title)} onClick={() => setOpen((value) => !value)}>
        <ChevronDown className={cn("nav-chev", open && "is-open")} />
      </button>
      {open ? (
        <div className="nav-pop">
          {page.topics.map((topic) =>
            section === "resources" && topic.slug === "pdf" ? (
              <Link
                key={topic.slug}
                to={lang === "ru" ? "/ru/resources/$slug" : "/resurslar/$slug"}
                params={{ slug: "pdf" }}
              >
                {t(topic.label)}
              </Link>
            ) : (
              <Link key={topic.slug} to={`/${section}/$topic`} params={{ topic: topic.slug }}>
                {t(topic.label)}
              </Link>
            ),
          )}
        </div>
      ) : null}
    </div>
  );
}
