import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { SEARCH_FAQ } from "@/lib/search-faq";
import { NextLinks } from "@/components/next-links";

export const Route = createFileRoute("/unknown")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/unknown"), replace: true });
  },
  component: UnknownPage,
});

const KEY = "nibras-unknown";
const CODE = 1186581832;
const PASS = 31680021;

function sig(value: string) {
  let n = 2166136261;
  const text = value.trim().toUpperCase();
  for (const char of text) n = Math.imul(n ^ char.charCodeAt(0), 16777619);
  return n >>> 0;
}

const COPY: Record<Lang, { h1: string; lead: string; note: string; code: string; end: string; ph: string; open: string; wrong: string; again: string; steps: [string, string, string] }> = {
  az: {
    h1: "Nibras Unknown",
    lead: "Üç addım var: qeyd, kod, şifrə. Düzgün açılış növbəti hissəni göstərir. Serverə getmir, bu cihazda qalır.",
    note: "Qeyd. Qapının kodu üç işarədir. Birincisi saytın adının ilk hərfidir. İkincisi X-dir. Üçüncüsü bu oyundakı addımların sayıdır. Bitişik yaz.",
    code: "const key = \"NI\" + \"BR\" + \"3\";",
    end: "Qapı açıldı. Otaq boşdur. Divarda bir cümlə var: növbəti hissə hələ yazılmayıb. Bu, birinci sirrdən sonrakı ilk dayanacaqdır.",
    ph: "Kodu və ya şifrəni yaz",
    open: "Aç",
    wrong: "Bu deyil.",
    again: "Başdan",
    steps: ["Qeyd", "Kod", "Şifrə"],
  },
  en: {
    h1: "Nibras Unknown",
    lead: "Three steps: a note, a code, a password. The right one opens the next part. Nothing is sent. It stays on this device.",
    note: "Note. The door code is three marks. The first is the first letter of the site name. The second is X. The third is how many steps this game has. Write them together.",
    code: "const key = \"NI\" + \"BR\" + \"3\";",
    end: "The door opened. The room is empty. One line is on the wall: the next part is not written yet. This is the first stop after the first secret.",
    ph: "Write the code or the password",
    open: "Open",
    wrong: "Not this.",
    again: "Start over",
    steps: ["Note", "Code", "Password"],
  },
  tr: {
    h1: "Nibras Unknown",
    lead: "Üç adım var: not, kod, şifre. Doğru açılış sonraki parçayı gösterir. Sunucuya gitmez, bu cihazda kalır.",
    note: "Not. Kapının kodu üç işarettir. Birincisi sitenin adının ilk harfidir. İkincisi X'tir. Üçüncüsü bu oyundaki adım sayısıdır. Bitişik yaz.",
    code: "const key = \"NI\" + \"BR\" + \"3\";",
    end: "Kapı açıldı. Oda boş. Duvarda bir cümle var: sonraki parça henüz yazılmadı. Bu, ilk sırdan sonraki ilk duraktır.",
    ph: "Kodu ya da şifreyi yaz",
    open: "Aç",
    wrong: "Bu değil.",
    again: "Baştan",
    steps: ["Not", "Kod", "Şifre"],
  },
  ar: {
    h1: "Nibras Unknown",
    lead: "ثلاث خطوات: ملاحظة وكود وكلمة سر. الفتح الصحيح يُظهر الجزء التالي. لا يذهب إلى خادم ويبقى على هذا الجهاز.",
    note: "ملاحظة. رمز الباب ثلاث علامات. الأولى أول حرف من اسم الموقع. الثانية X. الثالثة عدد خطوات هذه اللعبة. اكتبها متصلة.",
    code: "const key = \"NI\" + \"BR\" + \"3\";",
    end: "فُتح الباب. الغرفة فارغة. على الجدار جملة: الجزء التالي لم يُكتب بعد. هذه أول محطة بعد السر الأول.",
    ph: "اكتب الرمز أو كلمة السر",
    open: "افتح",
    wrong: "ليس هذا.",
    again: "من البداية",
    steps: ["ملاحظة", "كود", "كلمة سر"],
  },
  ru: {
    h1: "Nibras Unknown",
    lead: "Три шага: записка, код, пароль. Верный ввод открывает следующую часть. На сервер не уходит и остаётся на этом устройстве.",
    note: "Записка. Код двери — три знака. Первый — первая буква имени сайта. Второй — X. Третий — число шагов в этой игре. Пишите слитно.",
    code: "const key = \"NI\" + \"BR\" + \"3\";",
    end: "Дверь открылась. Комната пуста. На стене одна строка: следующая часть ещё не написана. Это первая остановка после первой тайны.",
    ph: "Введите код или пароль",
    open: "Открыть",
    wrong: "Не то.",
    again: "Сначала",
    steps: ["Записка", "Код", "Пароль"],
  },
};

export function UnknownPage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const faq = SEARCH_FAQ["/unknown"];
  const [level, setLevel] = useState(0);
  const [value, setValue] = useState("");
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    const saved = Number(localStorage.getItem(KEY) || "0");
    if (saved === 1 || saved === 2) setLevel(saved);
  }, []);

  function save(next: number) {
    setLevel(next);
    setValue("");
    setWrong(false);
    localStorage.setItem(KEY, String(next));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const hit = sig(value);
    if (level === 0 && hit === CODE) save(1);
    else if (level === 1 && hit === PASS) save(2);
    else setWrong(true);
  }

  return (
    <main className="nx-tool files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6">
        <span className="nx-tool-mark" aria-hidden="true"><b><i /><i /><i /><i /><i /><i /></b></span>
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{copy.h1}</h1>
        <p className="mt-1 text-sm text-muted">{copy.lead}</p>
      </header>
      <p className="mb-4 flex gap-2 text-sm">
        {copy.steps.map((label, index) => (
          <span key={label} className={index <= level ? "text-white" : "text-muted"}>{index + 1}. {label}</span>
        ))}
      </p>
      <section className="mb-4">
        <h2 className="text-base font-semibold">{copy.steps[0]}</h2>
        <p className="mt-2 text-sm">{copy.note}</p>
      </section>
      {level >= 1 ? (
        <section className="mb-4">
          <h2 className="text-base font-semibold">{copy.steps[1]}</h2>
          <pre className="mt-2 overflow-x-auto rounded-xl p-3 text-xs">{copy.code}</pre>
        </section>
      ) : null}
      {level >= 2 ? (
        <section className="mb-6">
          <h2 className="text-base font-semibold">{copy.steps[2]}</h2>
          <p className="mt-2 text-sm">{copy.end}</p>
        </section>
      ) : (
        <form className="mb-6 grid gap-3" onSubmit={onSubmit}>
          <input className="w-full rounded-xl border border-white/15 px-3 py-2" value={value} placeholder={copy.ph} autoComplete="off" onChange={(event) => { setValue(event.target.value); setWrong(false); }} />
          <button type="submit" className="nx-go w-fit rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white">{copy.open}</button>
          {wrong ? <p className="text-sm text-red-300">{copy.wrong}</p> : null}
        </form>
      )}
      {level > 0 ? (
        <button
          type="button"
          className="mb-8 text-sm text-muted"
          onClick={() => {
            localStorage.removeItem(KEY);
            setLevel(0);
            setValue("");
            setWrong(false);
          }}
        >
          {copy.again}
        </button>
      ) : null}
      <NextLinks
        links={[
          { href: "/logic", label: { az: "Sual qur", en: "Build questions", tr: "Soru kur", ar: "ابنِ أسئلة", ru: "Собрать вопросы" } },
          { href: "/flow", label: { az: "Hazırla", en: "Prepare", tr: "Hazırla", ar: "جهّز", ru: "Подготовь" } },
        ]}
      />
      <section className="space-y-3" aria-labelledby="unknown-faq">
        <h2 id="unknown-faq" className="text-base font-semibold">{faq.title[lang]}</h2>
        {faq.items[lang].map((item) => (
          <div key={item.q}>
            <h3 className="text-sm font-semibold">{item.q}</h3>
            <p className="mt-1 text-sm text-muted">{item.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
