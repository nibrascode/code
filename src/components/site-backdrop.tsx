export function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden="true">
      <div className="site-bg-base" />
      <div className="site-bg-shaft" />
      <svg className="site-bg-tl" viewBox="0 0 820 460" fill="none">
        <defs>
          <linearGradient id="tlA" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#5b4dff" />
            <stop offset="0.35" stopColor="#2f6dff" />
            <stop offset="0.72" stopColor="#3ec6ff" />
            <stop offset="1" stopColor="#d7f4ff" />
          </linearGradient>
          <linearGradient id="tlB" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#2a1f88" />
            <stop offset="0.5" stopColor="#2456d6" />
            <stop offset="1" stopColor="#7ad8ff" />
          </linearGradient>
          <filter id="bloom" x="-30%" y="-80%" width="160%" height="260%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path d="M-40 250C120 190 230 110 390 48c120-46 250-70 470-86" stroke="url(#tlB)" strokeWidth="10" opacity="0.35" filter="url(#bloom)" />
        <path d="M-40 250C120 190 230 110 390 48c120-46 250-70 470-86" stroke="url(#tlA)" strokeWidth="2.4" filter="url(#bloom)" />
        <path d="M-50 330C130 250 270 160 450 92c140-52 280-78 430-92" stroke="#1d4ed8" strokeWidth="8" opacity="0.28" filter="url(#bloom)" />
        <path d="M-50 330C130 250 270 160 450 92c140-52 280-78 430-92" stroke="url(#tlB)" strokeWidth="1.7" opacity="0.9" />
      </svg>
      <svg className="site-bg-tr" viewBox="0 0 380 280" fill="none">
        <defs>
          <linearGradient id="trA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1d4ed8" stopOpacity="0.95" />
            <stop offset="1" stopColor="#0a1d4d" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="trB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="1" stopColor="#071433" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <polygon points="20,18 300,70 250,128 -10,78" fill="url(#trA)" />
        <polygon points="48,118 328,168 286,220 8,172" fill="url(#trB)" />
      </svg>
      <svg className="site-bg-bl" viewBox="0 0 520 420" fill="none">
        <defs>
          <linearGradient id="blA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#12327a" />
          </linearGradient>
          <linearGradient id="blB" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#1d4ed8" />
            <stop offset="1" stopColor="#0b1d4a" />
          </linearGradient>
        </defs>
        <polygon points="-40,150 280,210 230,286 -70,226" fill="url(#blB)" opacity="0.9" />
        <polygon points="-20,230 250,292 206,360 -64,298" fill="url(#blA)" />
        <polygon points="10,310 210,356 176,408 -20,364" fill="#2563eb" opacity="0.55" />
      </svg>
      <svg className="site-bg-br" viewBox="0 0 1440 560" fill="none">
        <defs>
          <linearGradient id="wave" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0c2f78" />
            <stop offset="1" stopColor="#02060f" />
          </linearGradient>
          <linearGradient id="rim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#1d4ed8" stopOpacity="0.2" />
            <stop offset="0.45" stopColor="#49b7ff" />
            <stop offset="0.72" stopColor="#e9f8ff" />
            <stop offset="1" stopColor="#7c5cff" />
          </linearGradient>
          <filter id="wb" x="-10%" y="-40%" width="120%" height="180%">
            <feGaussianBlur stdDeviation="7" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path d="M-80 300C240 150 520 230 860 286C1120 328 1280 230 1560 90L1560 600L-80 600Z" fill="url(#wave)" opacity="0.92" />
        <path d="M-80 340C260 190 540 270 900 330C1160 374 1300 270 1580 130" stroke="#2457d6" strokeWidth="16" opacity="0.28" filter="url(#wb)" />
        <path d="M-40 230C280 70 560 170 900 240C1160 292 1320 170 1600 20" stroke="url(#rim)" strokeWidth="3.2" filter="url(#wb)" />
        <path d="M-20 310C300 160 580 250 940 320C1180 368 1320 270 1600 150" stroke="#67d4ff" strokeWidth="1.5" opacity="0.8" />
      </svg>
    </div>
  );
}
