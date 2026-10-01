const TECH = [
  { id: "apk", label: "APK" },
  { id: "kotlin", label: "Kotlin" },
  { id: "java", label: "Java" },
  { id: "swift", label: "Swift" },
  { id: "js", label: "JavaScript" },
  { id: "ts", label: "TypeScript" },
  { id: "dart", label: "Dart" },
  { id: "python", label: "Python" },
  { id: "cpp", label: "C++" },
  { id: "react", label: "React" },
] as const;

function Mark({ id }: { id: (typeof TECH)[number]["id"] }) {
  if (id === "apk") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 3.5h7.2L19 8.2V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1-1.5Z"
        />
        <path fill="#05060c" d="M14 3.8V8h4.1" />
        <path
          fill="#05060c"
          d="M12 11.2a.8.8 0 0 1 .8.8v2.1h2.1a.8.8 0 0 1 0 1.6h-2.1V18a.8.8 0 0 1-1.6 0v-2.3H8.9a.8.8 0 0 1 0-1.6h2.3V12a.8.8 0 0 1 .8-.8Z"
        />
      </svg>
    );
  }
  if (id === "kotlin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4 4h8.2L4 16.2V4Z" />
        <path fill="currentColor" d="M12.4 4 4 16.4V20l8.6-8.6L20 20V12.2L12.4 4Z" opacity=".72" />
      </svg>
    );
  }
  if (id === "java") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3.2c.7 1.3-.2 2.2-.8 3.1-.5.8-1.1 1.7-.3 2.8 1.3-.5 2.2-1.6 2.4-2.8.8 1.4.3 3.2-.8 4.3 2.2-.2 3.8-1.6 4.1-3.6.9 2.4-.4 5-3 6.2 3 .4 5.2-1.2 5.6-3.6C20.6 14.8 16.8 19 12 19c-3.2 0-6.2-2-6.8-5.2.8 1.6 2.6 2.6 4.4 2.4-2.2-.8-3.4-3-2.6-5.2.6 1.1 2 1.8 3.3 1.5-1.6-1-2.1-3.1-1.2-4.7.8 1 2.2 1.4 3.3 1 .2-2.2-.8-4.1-2.4-5.6Z"
        />
      </svg>
    );
  }
  if (id === "swift") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.8 6.2c-2.4-1.6-6.3.2-8.7 3.2C6.4 7.6 5 6.6 4.2 6.8c2.2 1.5 3.4 3.4 3.6 5.6-2.4 1.5-4.3 1.2-5.3.4 1.8 3.6 5.4 5.8 9.2 5.4 3.2-.3 6.4-2.6 7.8-5.8-2.2 1.2-4.6.8-6.3-.4 2.6-.2 4.8-1.8 5.6-3.8-1.2.8-2.6 1.1-4 1-2.2-2-3.8-2.6-3.2-3.8 1.6.2 3.4-.2 5.2-1.2Z"
        />
      </svg>
    );
  }
  if (id === "js" || id === "ts") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="currentColor" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="#05060c"
          fontFamily="DM Sans, sans-serif"
        >
          {id === "js" ? "JS" : "TS"}
        </text>
      </svg>
    );
  }
  if (id === "dart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M14.2 3 4 13.2 8.8 18 21 5.8 14.2 3Z" />
        <path fill="currentColor" d="M8.8 18 4 13.2V19a2 2 0 0 0 2 2h5.8L8.8 18Z" opacity=".65" />
      </svg>
    );
  }
  if (id === "python") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3.5c-3.2 0-4.2.8-4.2 2.4v2.2h4.3v.8H6.4C4.6 8.9 3.5 10 3.5 12.2c0 2.2 1.2 3.3 3 3.3h1.8v-1.6c0-1.6 1.4-2.8 3.2-2.8h4.2c1.4 0 2.4-.9 2.4-2.4V5.9c0-1.6-1.3-2.4-6.1-2.4Zm-1.6 1.6a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"
        />
        <path
          fill="currentColor"
          d="M12 20.5c3.2 0 4.2-.8 4.2-2.4v-2.2h-4.3v-.8h5.7c1.8 0 2.9-1.1 2.9-3.3 0-2.2-1.2-3.3-3-3.3h-1.8v1.6c0 1.6-1.4 2.8-3.2 2.8H8.3c-1.4 0-2.4.9-2.4 2.4v2.8c0 1.6 1.3 2.4 6.1 2.4Zm1.6-1.6a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"
          opacity=".72"
        />
      </svg>
    );
  }
  if (id === "cpp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fill="currentColor"
          fontFamily="Syne, sans-serif"
        >
          C++
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

export function TechMark({ id }: { id: (typeof TECH)[number]["id"] }) {
  return <Mark id={id} />;
}

function Row() {
  return (
    <>
      {TECH.map((item) => (
        <span key={item.id} className={`tech-chip is-${item.id}`}>
          <Mark id={item.id} />
          <b>{item.label}</b>
        </span>
      ))}
    </>
  );
}

export function TechMarquee() {
  return (
    <div className="tech-marquee" aria-hidden="true">
      <div className="tech-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
