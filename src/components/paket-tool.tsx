import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { PAKET, paketProblems } from "@/lib/paket";

function Rich({ text }: { text: string }) {
  const parts = text.split(/`([^`]+)`/g);
  return (
    <>
      {parts.map((part, index) => (index % 2 === 1 ? <code key={index}>{part}</code> : <span key={index}>{part}</span>))}
    </>
  );
}

export function PaketTool({ lang }: { lang: Lang }) {
  const [value, setValue] = useState("");
  const problems = value.trim() ? paketProblems(value, lang) : [];
  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{PAKET.heading[lang]}</h1>
      <p className="why-lead">
        <Rich text={PAKET.lead[lang]} />
      </p>
      <form className="paket-form" onSubmit={(event) => event.preventDefault()}>
        <input
          value={value}
          spellCheck={false}
          autoCapitalize="none"
          placeholder={PAKET.placeholder[lang]}
          aria-label={PAKET.heading[lang]}
          onChange={(event) => setValue(event.target.value)}
        />
        {value.trim() ? (
          problems.length === 0 ? (
            <p className="paket-ok">{PAKET.ok[lang]}</p>
          ) : (
            <ul className="faq-points paket-bad">
              {problems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        ) : null}
      </form>
    </main>
  );
}
