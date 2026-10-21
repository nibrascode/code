import { useEffect, useMemo, useState } from "react";
import { GAME_VERSION, gameBySlug, gamePath } from "@/lib/games";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";
import { SOZ_ANSWERS, SOZ_GUESS } from "@/lib/soz-words";

type Len = 4 | 5 | 6 | 7;
type Mark = "yes" | "move" | "no";

const LENGTHS: Len[] = [4, 5, 6, 7];
const KEYS = [
  ["q", "ü", "e", "r", "t", "y", "u", "i", "o", "p", "ö", "ğ"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ı", "ə"],
  ["z", "x", "c", "v", "b", "n", "m", "ç", "ş"],
];
const GUESS: Record<Len, Set<string>> = {
  4: new Set(SOZ_GUESS[4]),
  5: new Set(SOZ_GUESS[5]),
  6: new Set(SOZ_GUESS[6]),
  7: new Set(SOZ_GUESS[7]),
};
const SAVE_KEY = "nibras-soz-v1";

const COPY: Record<string, Record<Lang, string>> = {
  daily: { az: "Bu gün", en: "Today", tr: "Bugün", ar: "اليوم", ru: "Сегодня" },
  free: { az: "Sərbəst", en: "Free", tr: "Serbest", ar: "حر", ru: "Свободно" },
  short: { az: "Hərf çatmır", en: "Not enough letters", tr: "Harf yetmiyor", ar: "الأحرف لا تكفي", ru: "Мало букв" },
  missing: { az: "Bu söz siyahıda yoxdur", en: "That word is not in the list", tr: "Bu söz listede yok", ar: "هذه الكلمة ليست في القائمة", ru: "Этого слова нет в списке" },
  win: { az: "Tapdın", en: "You found it", tr: "Buldun", ar: "وجدتها", ru: "Нашёл" },
  lose: { az: "Söz bu idi", en: "The word was", tr: "Söz şuydu", ar: "الكلمة كانت", ru: "Слово было" },
  again: { az: "Yeni söz", en: "New word", tr: "Yeni söz", ar: "كلمة جديدة", ru: "Новое слово" },
  copy: { az: "Nəticəni köçür", en: "Copy result", tr: "Sonucu kopyala", ar: "انسخ النتيجة", ru: "Скопировать" },
  copied: { az: "Köçürüldü", en: "Copied", tr: "Kopyalandı", ar: "نُسخ", ru: "Скопировано" },
  played: { az: "Oyun", en: "Played", tr: "Oyun", ar: "لعبت", ru: "Игр" },
  wins: { az: "Qələbə", en: "Won", tr: "Galibiyet", ar: "فوز", ru: "Побед" },
  streak: { az: "Ardıcıl", en: "Streak", tr: "Seri", ar: "متتالٍ", ru: "Подряд" },
  rule: {
    az: "Yaşıl yerindədir. Qızılı sözdədir, yeri başqadır. Boz sözdə yoxdur.",
    en: "Green is in place. Gold is in the word, in another place. Gray is not in the word.",
    tr: "Yeşil yerindedir. Altın sözdedir, yeri başkadır. Boz sözde yoktur.",
    ar: "الأخضر في مكانه. الذهبي في الكلمة بمكان آخر. الرمادي ليس في الكلمة.",
    ru: "Зелёная на месте. Золотая есть в слове, но не там. Серой в слове нет.",
  },
};

type Slot = { secret: string; guesses: string[]; done: boolean };
type Save = {
  stats: Record<string, { n: number; w: number; streak: number }>;
  daily: Record<string, Slot>;
  free: Record<string, Slot>;
};

function emptySave(): Save {
  return { stats: {}, daily: {}, free: {} };
}

function readSave(): Save {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return emptySave();
    const parsed = JSON.parse(raw) as Save;
    return { stats: parsed.stats ?? {}, daily: parsed.daily ?? {}, free: parsed.free ?? {} };
  } catch {
    return emptySave();
  }
}

function writeSave(save: Save) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(save));
  } catch {
    /* ignore */
  }
}

function today() {
  const now = new Date();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${m}-${d}`;
}

function hash(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i += 1) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}

function dailyWord(len: Len, day: string) {
  const list = SOZ_ANSWERS[len];
  return list[hash(`${day}:${len}:nibras-soz`) % list.length];
}

function freeWord(len: Len, salt: number) {
  const list = SOZ_ANSWERS[len];
  return list[hash(`${today()}:${len}:${salt}:${Math.random()}`) % list.length];
}

function marks(guess: string, secret: string): Mark[] {
  const g = [...guess];
  const s = [...secret];
  const out: Mark[] = Array.from({ length: g.length }, () => "no");
  const left: Record<string, number> = {};
  for (let i = 0; i < s.length; i += 1) {
    if (g[i] === s[i]) out[i] = "yes";
    else left[s[i]] = (left[s[i]] ?? 0) + 1;
  }
  for (let i = 0; i < g.length; i += 1) {
    if (out[i] === "yes") continue;
    if (left[g[i]]) {
      out[i] = "move";
      left[g[i]] -= 1;
    }
  }
  return out;
}

function show(ch: string) {
  return ch.toLocaleUpperCase("az");
}

function maxRows(len: Len) {
  return len >= 6 ? 7 : 6;
}

export function SozGame() {
  const { lang } = useI18n();
  const game = gameBySlug("soz")!;
  const [len, setLen] = useState<Len>(5);
  const [mode, setMode] = useState<"daily" | "free">("daily");
  const [day] = useState(today);
  const [secret, setSecret] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [row, setRow] = useState("");
  const [note, setNote] = useState("");
  const [shake, setShake] = useState(false);
  const [stats, setStats] = useState({ n: 0, w: 0, streak: 0 });
  const [ready, setReady] = useState(false);

  const over = guesses.includes(secret) || guesses.length >= maxRows(len);
  const won = guesses.includes(secret);

  useEffect(() => {
    const save = readSave();
    const key = mode === "daily" ? `${day}:${len}` : `free:${len}`;
    const bag = mode === "daily" ? save.daily : save.free;
    let slot = bag[key];
    if (!slot || (mode === "free" && slot.done)) {
      slot = { secret: mode === "daily" ? dailyWord(len, day) : freeWord(len, Date.now()), guesses: [], done: false };
      bag[key] = slot;
      writeSave(save);
    }
    setSecret(slot.secret);
    setGuesses(slot.guesses);
    setRow("");
    setNote("");
    setStats(save.stats[String(len)] ?? { n: 0, w: 0, streak: 0 });
    setReady(true);
  }, [len, mode, day]);

  const keyMark = useMemo(() => {
    const rank: Record<string, Mark> = {};
    const order: Record<Mark, number> = { no: 1, move: 2, yes: 3 };
    for (const guess of guesses) {
      marks(guess, secret).forEach((mark, i) => {
        const ch = guess[i];
        if (!rank[ch] || order[mark] > order[rank[ch]]) rank[ch] = mark;
      });
    }
    return rank;
  }, [guesses, secret]);

  const persist = (nextGuesses: string[], done: boolean) => {
    const save = readSave();
    const key = mode === "daily" ? `${day}:${len}` : `free:${len}`;
    const bag = mode === "daily" ? save.daily : save.free;
    bag[key] = { secret, guesses: nextGuesses, done };
    if (done) {
      const prev = save.stats[String(len)] ?? { n: 0, w: 0, streak: 0 };
      const win = nextGuesses.includes(secret);
      const streak = win ? prev.streak + 1 : 0;
      save.stats[String(len)] = { n: prev.n + 1, w: prev.w + (win ? 1 : 0), streak };
      setStats(save.stats[String(len)]);
    }
    writeSave(save);
  };

  const fail = (text: string) => {
    setNote(text);
    setShake(true);
    window.setTimeout(() => setShake(false), 420);
  };

  const submit = () => {
    if (!ready || over || !secret) return;
    if (row.length !== secret.length) {
      fail(COPY.short[lang]);
      return;
    }
    if (!GUESS[len].has(row)) {
      fail(COPY.missing[lang]);
      return;
    }
    const next = [...guesses, row];
    setGuesses(next);
    setRow("");
    setNote("");
    const done = next.includes(secret) || next.length >= maxRows(len);
    persist(next, done);
  };

  const type = (ch: string) => {
    if (!ready || over) return;
    setNote("");
    setRow((prev) => (prev.length >= len ? prev : prev + ch));
  };

  const back = () => {
    if (!ready || over) return;
    setRow((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "Enter") {
        event.preventDefault();
        submit();
        return;
      }
      if (event.key === "Backspace") {
        event.preventDefault();
        back();
        return;
      }
      const ch = event.key.toLocaleLowerCase("az");
      if ([...ch].length === 1 && GUESS[len] && "abcçdeəfgğhxıijkqlmnoöprsştuüvyz".includes(ch)) type(ch);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const fresh = () => {
    if (mode !== "free") return;
    const save = readSave();
    const slot = { secret: freeWord(len, Date.now()), guesses: [] as string[], done: false };
    save.free[`free:${len}`] = slot;
    writeSave(save);
    setSecret(slot.secret);
    setGuesses([]);
    setRow("");
    setNote("");
  };

  const copy = async () => {
    const lines = guesses.map((guess) => marks(guess, secret).map((mark) => (mark === "yes" ? "🟩" : mark === "move" ? "🟨" : "⬛")).join(""));
    const text = `Söz ${len} ${GAME_VERSION}\n${lines.join("\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      setNote(COPY.copied[lang]);
    } catch {
      setNote(text);
    }
  };

  const rows = Math.max(maxRows(len), guesses.length + (over ? 0 : 1));
  const status = won ? COPY.win[lang] : over ? `${COPY.lose[lang]}: ${show(secret)}` : note;

  return (
    <main className="why-page soz-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <a href={gamePath(lang)}>{lang === "en" ? "Games" : lang === "ar" ? "الألعاب" : lang === "ru" ? "Игры" : "Oyunlar"}</a>
      </p>
      <h1>{game.name[lang]}</h1>
      <p className="xo-version">{GAME_VERSION}</p>
      <p className="why-lead">{game.blurb[lang]}</p>
      <p className="xo-note">{COPY.rule[lang]}</p>
      <div className="xo-modes" role="group">
        {LENGTHS.map((item) => (
          <button key={item} type="button" className={len === item ? "is-on" : ""} onClick={() => setLen(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="xo-modes" role="group">
        <button type="button" className={mode === "daily" ? "is-on" : ""} onClick={() => setMode("daily")}>
          {COPY.daily[lang]}
        </button>
        <button type="button" className={mode === "free" ? "is-on" : ""} onClick={() => setMode("free")}>
          {COPY.free[lang]}
        </button>
      </div>
      <p className="xo-status" aria-live="polite">{status}</p>
      <div className={`soz-board${shake ? " is-shake" : ""}`} dir="ltr">
        {Array.from({ length: rows }, (_, r) => {
          const guess = guesses[r] ?? (r === guesses.length && !over ? row : "");
          const painted = r < guesses.length ? marks(guesses[r], secret) : [];
          return (
            <div key={r} className="soz-row" style={{ gridTemplateColumns: `repeat(${len}, minmax(0, 1fr))` }}>
              {Array.from({ length: len }, (_, c) => (
                <span key={c} className={painted[c] ? `is-${painted[c]}` : guess[c] ? "is-fill" : ""}>
                  {guess[c] ? show(guess[c]) : ""}
                </span>
              ))}
            </div>
          );
        })}
      </div>
      <div className="soz-keys" dir="ltr">
        {KEYS.map((line, index) => (
          <div key={index}>
            {index === 2 ? (
              <button type="button" className="is-wide" onClick={submit}>
                {lang === "ar" ? "تم" : lang === "ru" ? "Ок" : "OK"}
              </button>
            ) : null}
            {line.map((ch) => (
              <button key={ch} type="button" className={keyMark[ch] ? `is-${keyMark[ch]}` : ""} onClick={() => type(ch)}>
                {show(ch)}
              </button>
            ))}
            {index === 2 ? (
              <button type="button" className="is-wide" onClick={back} aria-label="sil">
                ⌫
              </button>
            ) : null}
          </div>
        ))}
      </div>
      <dl className="xo-score">
        <div><dt>{COPY.played[lang]}</dt><dd>{stats.n}</dd></div>
        <div><dt>{COPY.wins[lang]}</dt><dd>{stats.w}</dd></div>
        <div><dt>{COPY.streak[lang]}</dt><dd>{stats.streak}</dd></div>
      </dl>
      <div className="xo-actions">
        {mode === "free" ? <button type="button" onClick={fresh}>{COPY.again[lang]}</button> : null}
        {guesses.length ? <button type="button" onClick={copy}>{COPY.copy[lang]}</button> : null}
      </div>
    </main>
  );
}
