import type { GameSlug } from "@/lib/games";

export function GameIcon({ slug }: { slug: GameSlug }) {
  return (
    <svg className={`game-ico is-${slug}`} viewBox="0 0 64 64" aria-hidden="true">
      {slug === "x-o" ? (
        <>
          <rect x="8" y="8" width="22" height="22" rx="6" fill="#ffd166" />
          <rect x="34" y="8" width="22" height="22" rx="6" fill="#1a1204" />
          <rect x="8" y="34" width="22" height="22" rx="6" fill="#10241c" />
          <rect x="34" y="34" width="22" height="22" rx="6" fill="#6ee7b7" />
          <path d="M14 14l10 10M24 14L14 24" stroke="#1a1204" strokeWidth="2.4" />
          <circle cx="45" cy="45" r="5" fill="none" stroke="#042016" strokeWidth="2.4" />
        </>
      ) : null}
      {slug === "soz" ? (
        <>
          <rect x="6" y="20" width="12" height="12" rx="3" fill="#6ee7b7" />
          <rect x="20" y="20" width="12" height="12" rx="3" fill="#ffd166" />
          <rect x="34" y="20" width="12" height="12" rx="3" fill="#243044" />
          <rect x="48" y="20" width="10" height="12" rx="3" fill="#243044" />
          <rect x="14" y="36" width="12" height="10" rx="3" fill="#60a5fa" />
          <rect x="28" y="36" width="12" height="10" rx="3" fill="#a78bfa" />
          <rect x="42" y="36" width="10" height="10" rx="3" fill="#ff5c7a" />
        </>
      ) : null}
      {slug === "ilan" ? (
        <>
          <circle cx="18" cy="42" r="6" fill="#0f766e" />
          <circle cx="28" cy="34" r="6.5" fill="#14b8a6" />
          <circle cx="38" cy="26" r="7" fill="#2dd4bf" />
          <circle cx="46" cy="18" r="8" fill="#6ee7b7" />
          <circle cx="43" cy="16" r="1.4" fill="#042016" />
          <circle cx="49" cy="16" r="1.4" fill="#042016" />
          <circle cx="14" cy="22" r="4" fill="#ffd166" />
        </>
      ) : null}
      {slug === "kosmos" ? (
        <>
          <circle cx="16" cy="14" r="1.2" fill="#cfe9ff" />
          <circle cx="48" cy="20" r="1.2" fill="#cfe9ff" />
          <circle cx="22" cy="48" r="1" fill="#cfe9ff" />
          <path d="M32 10l12 28-12-6-12 6z" fill="#6ee7b7" />
          <circle cx="32" cy="24" r="3" fill="#fff" />
          <path d="M26 40l6 10 6-10" fill="#22d3a7" />
        </>
      ) : null}
      {slug === "qala" ? (
        <>
          <path d="M10 46h44v8H10z" fill="#ffd166" />
          <path d="M16 28h8v18h-8zM28 18h8v28h-8zM40 28h8v18h-8z" fill="#fb923c" />
          <path d="M28 12h8v6h-8z" fill="#ffd166" />
          <circle cx="32" cy="34" r="2" fill="#1a1204" />
        </>
      ) : null}
      {slug === "neon" ? (
        <>
          <rect x="10" y="12" width="14" height="8" rx="2" fill="#a78bfa" />
          <rect x="26" y="12" width="14" height="8" rx="2" fill="#60a5fa" />
          <rect x="42" y="12" width="12" height="8" rx="2" fill="#6ee7b7" />
          <rect x="10" y="22" width="14" height="8" rx="2" fill="#ffd166" />
          <rect x="26" y="22" width="14" height="8" rx="2" fill="#fb923c" />
          <rect x="42" y="22" width="12" height="8" rx="2" fill="#ff5c7a" />
          <circle cx="30" cy="42" r="4" fill="#d1fae5" />
          <rect x="18" y="50" width="24" height="5" rx="2" fill="#22d3a7" />
        </>
      ) : null}
      {slug === "tetris" ? (
        <>
          <rect x="14" y="12" width="10" height="10" rx="2" fill="#22d3ee" />
          <rect x="26" y="12" width="10" height="10" rx="2" fill="#22d3ee" />
          <rect x="38" y="12" width="10" height="10" rx="2" fill="#22d3ee" />
          <rect x="26" y="24" width="10" height="10" rx="2" fill="#a78bfa" />
          <rect x="14" y="36" width="10" height="10" rx="2" fill="#ffd166" />
          <rect x="26" y="36" width="10" height="10" rx="2" fill="#ffd166" />
          <rect x="38" y="36" width="10" height="10" rx="2" fill="#6ee7b7" />
          <rect x="38" y="48" width="10" height="8" rx="2" fill="#ff5c7a" />
        </>
      ) : null}
    </svg>
  );
}
