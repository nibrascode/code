import type { SVGProps } from "react";

// NX Studio üçün xüsusi ikon dəsti: 24px şəbəkə, 1.7 xətt, yumşaq ikirəngli dolğu.
type P = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 20, children, ...rest }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="nxa-ic"
      {...rest}
    >
      {children}
    </svg>
  );
}

const soft = { fill: "currentColor", fillOpacity: 0.16, stroke: "none" } as const;

export const IconOverview = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="7" height="9" rx="2.2" {...soft} />
    <rect x="3.5" y="3.5" width="7" height="9" rx="2.2" />
    <rect x="13.5" y="3.5" width="7" height="5" rx="2.2" />
    <rect x="13.5" y="11.5" width="7" height="9" rx="2.2" {...soft} />
    <rect x="13.5" y="11.5" width="7" height="9" rx="2.2" />
    <rect x="3.5" y="15.5" width="7" height="5" rx="2.2" />
  </Svg>
);

export const IconApps = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="2.4" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="3.5" {...soft} />
    <rect x="13.5" y="3.5" width="7" height="7" rx="3.5" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="2.4" />
    <path d="M17 13.8v6.4M13.8 17h6.4" />
  </Svg>
);

export const IconPages = (p: P) => (
  <Svg {...p}>
    <path d="M6.5 3.5h7.2l4.8 4.8v10.2a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" {...soft} />
    <path d="M6.5 3.5h7.2l4.8 4.8v10.2a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
    <path d="M13.5 3.7V8.5h4.8M8 12.5h7M8 16h4.5" />
  </Svg>
);

export const IconCode = (p: P) => (
  <Svg {...p}>
    <rect x="2.8" y="4" width="18.4" height="16" rx="3" {...soft} />
    <rect x="2.8" y="4" width="18.4" height="16" rx="3" />
    <path d="m8.5 10-2.5 2.2 2.5 2.3M15.5 10l2.5 2.2-2.5 2.3M13 9l-2 6.5" />
  </Svg>
);

export const IconLibrary = (p: P) => (
  <Svg {...p}>
    <path d="M4 5.2c2.6-1 5.3-.9 8 .6v14c-2.7-1.5-5.4-1.6-8-.6Z" {...soft} />
    <path d="M4 5.2c2.6-1 5.3-.9 8 .6v14c-2.7-1.5-5.4-1.6-8-.6ZM20 5.2c-2.6-1-5.3-.9-8 .6v14c2.7-1.5 5.4-1.6 8-.6Z" />
  </Svg>
);

export const IconSpark = (p: P) => (
  <Svg {...p}>
    <path d="M11 3.5 12.7 8a3 3 0 0 0 1.8 1.8L19 11.5l-4.5 1.7a3 3 0 0 0-1.8 1.8L11 19.5l-1.7-4.5a3 3 0 0 0-1.8-1.8L3 11.5l4.5-1.7A3 3 0 0 0 9.3 8Z" {...soft} />
    <path d="M11 3.5 12.7 8a3 3 0 0 0 1.8 1.8L19 11.5l-4.5 1.7a3 3 0 0 0-1.8 1.8L11 19.5l-1.7-4.5a3 3 0 0 0-1.8-1.8L3 11.5l4.5-1.7A3 3 0 0 0 9.3 8Z" />
    <path d="M18.5 3v3M17 4.5h3" />
  </Svg>
);

export const IconDatabase = (p: P) => (
  <Svg {...p}>
    <ellipse cx="12" cy="6" rx="7.5" ry="2.8" {...soft} />
    <ellipse cx="12" cy="6" rx="7.5" ry="2.8" />
    <path d="M4.5 6v12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" />
  </Svg>
);

export const IconMap = (p: P) => (
  <Svg {...p}>
    <path d="m9 4.5 6 2.2v13l-6-2.2Z" {...soft} />
    <path d="M3.5 6.5 9 4.5l6 2.2 5.5-2v13l-5.5 2-6-2.2-5.5 2Z" />
    <path d="M9 4.5v13M15 6.7v13" />
  </Svg>
);

export const IconSettings = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" {...soft} />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
    <circle cx="12" cy="12" r="6.6" />
  </Svg>
);

export const IconLogout = (p: P) => (
  <Svg {...p}>
    <path d="M14 4.5H7a2.5 2.5 0 0 0-2.5 2.5v10A2.5 2.5 0 0 0 7 19.5h7" />
    <path d="M10.5 12h9.5M16.8 8.5 20.2 12l-3.4 3.5" />
  </Svg>
);

export const IconSearch = (p: P) => (
  <Svg {...p}>
    <circle cx="10.8" cy="10.8" r="6.3" {...soft} />
    <circle cx="10.8" cy="10.8" r="6.3" />
    <path d="m15.6 15.6 4.4 4.4" />
  </Svg>
);

export const IconBell = (p: P) => (
  <Svg {...p}>
    <path d="M6 10a6 6 0 0 1 12 0c0 4.5 1.8 6 1.8 6H4.2S6 14.5 6 10Z" {...soft} />
    <path d="M6 10a6 6 0 0 1 12 0c0 4.5 1.8 6 1.8 6H4.2S6 14.5 6 10ZM10 19.5a2.2 2.2 0 0 0 4 0" />
  </Svg>
);

export const IconMoon = (p: P) => (
  <Svg {...p}>
    <path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1Z" {...soft} />
    <path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1Z" />
  </Svg>
);

export const IconSun = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" {...soft} />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.8v2M12 19.2v2M4.6 4.6 6 6M18 18l1.4 1.4M2.8 12h2M19.2 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
  </Svg>
);

export const IconMenu = (p: P) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h11M4 17h16" />
  </Svg>
);

export const IconClose = (p: P) => (
  <Svg {...p}>
    <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" />
  </Svg>
);

export const IconCheck = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" {...soft} />
    <path d="m8.3 12.3 2.5 2.5 5-5.3" />
  </Svg>
);

export const IconAlert = (p: P) => (
  <Svg {...p}>
    <path d="M10.3 4.3a2 2 0 0 1 3.4 0l7 12.2a2 2 0 0 1-1.7 3H5a2 2 0 0 1-1.7-3Z" {...soft} />
    <path d="M10.3 4.3a2 2 0 0 1 3.4 0l7 12.2a2 2 0 0 1-1.7 3H5a2 2 0 0 1-1.7-3ZM12 9.5v4M12 16.5h.01" />
  </Svg>
);

export const IconExternal = (p: P) => (
  <Svg {...p}>
    <path d="M13.5 4.5h6v6M19.5 4.5l-8 8M17 14v3.5a2 2 0 0 1-2 2H6.5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2H10" />
  </Svg>
);

export const IconCopy = (p: P) => (
  <Svg {...p}>
    <rect x="8.5" y="8.5" width="11" height="11" rx="2.5" {...soft} />
    <rect x="8.5" y="8.5" width="11" height="11" rx="2.5" />
    <path d="M15.5 8.5V6.5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2" />
  </Svg>
);

export const IconDownload = (p: P) => (
  <Svg {...p}>
    <path d="M12 4v11M7.5 10.8 12 15.3l4.5-4.5M4.5 19.5h15" />
  </Svg>
);

export const IconUpload = (p: P) => (
  <Svg {...p}>
    <path d="M12 15.5v-11M7.5 9 12 4.5 16.5 9M4.5 19.5h15" />
  </Svg>
);

export const IconTrash = (p: P) => (
  <Svg {...p}>
    <path d="M6.5 7.5h11l-.8 11a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8Z" {...soft} />
    <path d="M4.5 7.5h15M9.5 7.5V5.3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2.2M6.5 7.5l.8 11a2 2 0 0 0 2 1.8h5.4a2 2 0 0 0 2-1.8l.8-11M10.3 11v5.5M13.7 11v5.5" />
  </Svg>
);

export const IconPlus = (p: P) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const IconChevron = (p: P) => (
  <Svg {...p}>
    <path d="m9.5 6 6 6-6 6" />
  </Svg>
);

export const IconBack = (p: P) => (
  <Svg {...p}>
    <path d="m14.5 6-6 6 6 6" />
  </Svg>
);

export const IconEye = (p: P) => (
  <Svg {...p}>
    <path d="M2.8 12S6.2 5.5 12 5.5 21.2 12 21.2 12 17.8 18.5 12 18.5 2.8 12 2.8 12Z" {...soft} />
    <path d="M2.8 12S6.2 5.5 12 5.5 21.2 12 21.2 12 17.8 18.5 12 18.5 2.8 12 2.8 12Z" />
    <circle cx="12" cy="12" r="2.8" />
  </Svg>
);

export const IconEyeOff = (p: P) => (
  <Svg {...p}>
    <path d="M10 5.8c.6-.2 1.3-.3 2-.3 5.8 0 9.2 6.5 9.2 6.5a16 16 0 0 1-2.6 3.4M6.2 7.4A15.6 15.6 0 0 0 2.8 12s3.4 6.5 9.2 6.5c1.6 0 3-.5 4.2-1.2M10 10a2.8 2.8 0 0 0 4 4M4 4l16 16" />
  </Svg>
);

export const IconLock = (p: P) => (
  <Svg {...p}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.6" {...soft} />
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.6" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2.2" />
  </Svg>
);

export const IconRefresh = (p: P) => (
  <Svg {...p}>
    <path d="M19.5 12a7.5 7.5 0 0 1-13 5.1M4.5 12a7.5 7.5 0 0 1 13-5.1M17.5 3.5v3.6h-3.6M6.5 20.5v-3.6h3.6" />
  </Svg>
);

export const IconGlobe = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" {...soft} />
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.2-3.4-8.5S9.7 5.9 12 3.5Z" />
  </Svg>
);

export const IconMail = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.8" {...soft} />
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.8" />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
  </Svg>
);

export const IconCalendar = (p: P) => (
  <Svg {...p}>
    <rect x="3.8" y="5.2" width="16.4" height="15" rx="3" />
    <path d="M3.8 9.8h16.4" />
    <path d="M3.8 9.8h16.4v7.4a3 3 0 0 1-3 3H6.8a3 3 0 0 1-3-3Z" {...soft} />
    <path d="M8.2 3.5v3.2M15.8 3.5v3.2" />
  </Svg>
);

export const IconShield = (p: P) => (
  <Svg {...p}>
    <path d="M12 3.3 19 6v5.6c0 4.3-2.9 7.6-7 9.1-4.1-1.5-7-4.8-7-9.1V6Z" {...soft} />
    <path d="M12 3.3 19 6v5.6c0 4.3-2.9 7.6-7 9.1-4.1-1.5-7-4.8-7-9.1V6Z" />
    <path d="m9 12 2.2 2.2L15.3 10" />
  </Svg>
);

export const IconTrendUp = (p: P) => (
  <Svg {...p}>
    <path d="m4 16.5 5.2-5.2 3.6 3.6L20 7.7M14.8 7.7H20v5.2" />
  </Svg>
);

export const IconTrendDown = (p: P) => (
  <Svg {...p}>
    <path d="m4 7.5 5.2 5.2 3.6-3.6 7.2 7.2M14.8 16.3H20v-5.2" />
  </Svg>
);

export const IconClick = (p: P) => (
  <Svg {...p}>
    <path d="m9 9 10.5 4-4.6 1.6-1.6 4.6Z" {...soft} />
    <path d="m9 9 10.5 4-4.6 1.6-1.6 4.6ZM5.5 3.5l1 2.6M3.5 8.5l2.6.6M10.5 4.2 9.8 6.6" />
  </Svg>
);

export const IconChat = (p: P) => (
  <Svg {...p}>
    <path d="M5.5 4.5h13a2.5 2.5 0 0 1 2.5 2.5v7.5a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 3.5V17h-1A2.5 2.5 0 0 1 3 14.5V7a2.5 2.5 0 0 1 2.5-2.5Z" {...soft} />
    <path d="M5.5 4.5h13a2.5 2.5 0 0 1 2.5 2.5v7.5a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 3.5V17h-1A2.5 2.5 0 0 1 3 14.5V7a2.5 2.5 0 0 1 2.5-2.5ZM8 10.5h.01M12 10.5h.01M16 10.5h.01" />
  </Svg>
);
