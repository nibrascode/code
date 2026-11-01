import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";
import { useEffect } from "react";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
const CHUNK_ERROR = /dynamically imported module|Importing a module script failed|error loading dynamically imported module/i;

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

const ERR_COPY = {
  az: { title: "Xəta baş verdi", body: "Gözlənilməz xəta baş verdi. Səhifəni yeniləyin.", btn: "Yenilə" },
  en: { title: "Something went wrong", body: "An unexpected error occurred. Try reloading the page.", btn: "Reload" },
  tr: { title: "Bir hata oluştu", body: "Beklenmeyen bir hata oluştu. Sayfayı yenileyin.", btn: "Yenile" },
  ar: { title: "حدث خطأ ما", body: "حدث خطأ غير متوقع. أعد تحميل الصفحة.", btn: "إعادة التحميل" },
  ru: { title: "Что-то пошло не так", body: "Произошла непредвиденная ошибка. Обновите страницу.", btn: "Обновить" },
} as const;

function pageLang(): keyof typeof ERR_COPY {
  if (typeof window === "undefined") return "az";
  const seg = window.location.pathname.split("/")[1];
  const q = new URLSearchParams(window.location.search).get("lang");
  const l = seg && seg in ERR_COPY ? seg : q && q in ERR_COPY ? q : document.documentElement.lang?.slice(0, 2);
  return (l && l in ERR_COPY ? l : "az") as keyof typeof ERR_COPY;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const message = errorMessage(error);
  const lang = pageLang();
  const copy = ERR_COPY[lang];

  useEffect(() => {
    if (!CHUNK_ERROR.test(message)) return;
    try {
      if (sessionStorage.getItem("nx-chunk-reload")) return;
      sessionStorage.setItem("nx-chunk-reload", "1");
    } catch {
      return;
    }
    window.location.reload();
  }, [message]);

  useEffect(() => {
    // Keep crawlers from indexing the error screen as page content.
    const m = document.createElement("meta");
    m.name = "robots";
    m.content = "noindex, nosnippet";
    document.head.appendChild(m);
    return () => m.remove();
  }, []);

  if (CHUNK_ERROR.test(message)) {
    return <main data-nosnippet="" aria-busy="true" className="min-h-screen bg-zinc-950" />;
  }

  return (
    <main
      data-nosnippet=""
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={
        "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center " +
        "bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50"
      }
    >
      <span className="text-red-500" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="text-lg font-semibold">{copy.title}</h1>
      <p className="max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400">
        {lang === "en" && message.length <= 140 ? message : copy.body}
      </p>
      <button
        type="button"
        className="mt-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900"
        onClick={() => window.location.reload()}
      >
        {copy.btn}
      </button>
    </main>
  );
}