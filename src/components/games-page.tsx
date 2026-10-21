import { useEffect, useMemo, useRef, useState } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { GAME_COPY, GAME_VERSION, GAMES, gameBySlug, gamePath } from "@/lib/games";
import { SozGame } from "@/components/soz-game";
import { IlanGame } from "@/components/ilan-game";
import { KosmosGame } from "@/components/kosmos-game";
import { QalaGame } from "@/components/qala-game";
import { NeonGame } from "@/components/neon-game";
import { useI18n } from "@/lib/i18n-context";

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

type Mark = "X" | "O";
type Cell = Mark | null;
type Board = Cell[];

const EMPTY: Board = Array.from({ length: 9 }, () => null);
const SCORE_KEY = "nibras-xo-v1";

function lineOf(board: Board) {
  return LINES.find(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]) ?? null;
}

function ended(board: Board) {
  return lineOf(board) !== null || board.every(Boolean);
}

function scoreEnd(board: Board) {
  const line = lineOf(board);
  if (line) return board[line[0]] === "X" ? 1 : -1;
  if (board.every(Boolean)) return 0;
  return null;
}

function minimax(board: Board, turn: Mark): number {
  const end = scoreEnd(board);
  if (end !== null) return end;
  let best = turn === "X" ? -2 : 2;
  for (let i = 0; i < 9; i += 1) {
    if (board[i]) continue;
    board[i] = turn;
    const value = minimax(board, turn === "X" ? "O" : "X");
    board[i] = null;
    best = turn === "X" ? Math.max(best, value) : Math.min(best, value);
  }
  return best;
}

function bestMove(board: Board) {
  let best = 2;
  let move = -1;
  for (let i = 0; i < 9; i += 1) {
    if (board[i]) continue;
    board[i] = "O";
    const value = minimax(board, "X");
    board[i] = null;
    if (value < best) {
      best = value;
      move = i;
    }
  }
  return move;
}

function turnOf(board: Board): Mark {
  const xs = board.filter((cell) => cell === "X").length;
  const os = board.filter((cell) => cell === "O").length;
  return xs === os ? "X" : "O";
}

export function GamesIndexGate() {
  const here = useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "");
  if (!/\/oyun$/.test(here)) return <Outlet />;
  return <GamesIndex />;
}

export function GamesIndex() {
  const { lang } = useI18n();
  return (
    <main className="why-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{GAME_COPY.heading[lang]}</h1>
      <p className="why-lead">{GAME_COPY.lead[lang]}</p>
      <ul className="lib-list">
        {GAMES.map((game) => (
          <li key={game.slug}>
            <a href={gamePath(lang, game.slug)}>
              {game.name[lang]}
              <span className="lib-desc">
                {GAME_VERSION} · {game.blurb[lang]}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function TicTacToe() {
  const { lang } = useI18n();
  const game = gameBySlug("x-o")!;
  const [mode, setMode] = useState<"two" | "cpu">("two");
  const [board, setBoard] = useState<Board>(EMPTY);
  const [score, setScore] = useState({ x: 0, o: 0, draw: 0 });
  const scored = useRef<string | null>(null);
  const line = lineOf(board);
  const over = ended(board);
  const turn = turnOf(board);
  const win = line ? board[line[0]] : null;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SCORE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as { x?: number; o?: number; draw?: number };
      setScore({ x: saved.x ?? 0, o: saved.o ?? 0, draw: saved.draw ?? 0 });
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!over) return;
    const key = board.join("");
    if (scored.current === key) return;
    scored.current = key;
    setScore((prev) => {
      const next = win === "X" ? { ...prev, x: prev.x + 1 } : win === "O" ? { ...prev, o: prev.o + 1 } : { ...prev, draw: prev.draw + 1 };
      try {
        localStorage.setItem(SCORE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, [over, win, board]);

  useEffect(() => {
    if (mode !== "cpu" || turn !== "O" || over) return;
    const id = window.setTimeout(() => {
      setBoard((prev) => {
        if (turnOf(prev) !== "O" || ended(prev)) return prev;
        const move = bestMove(prev.slice());
        if (move < 0) return prev;
        const next = prev.slice();
        next[move] = "O";
        return next;
      });
    }, 160);
    return () => window.clearTimeout(id);
  }, [board, mode, turn, over]);

  const status = useMemo(() => {
    if (win === "X") return GAME_COPY.xWin[lang];
    if (win === "O") return GAME_COPY.oWin[lang];
    if (over) return GAME_COPY.draw[lang];
    return turn === "X" ? GAME_COPY.xTurn[lang] : GAME_COPY.oTurn[lang];
  }, [win, over, turn, lang]);

  const play = (index: number) => {
    if (over || board[index]) return;
    if (mode === "cpu" && turn !== "X") return;
    const next = board.slice();
    next[index] = turn;
    setBoard(next);
  };

  const restart = () => {
    scored.current = null;
    setBoard(EMPTY);
  };

  const clearScore = () => {
    const next = { x: 0, o: 0, draw: 0 };
    setScore(next);
    try {
      localStorage.setItem(SCORE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  return (
    <main className="why-page xo-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <a href={gamePath(lang)}>{GAME_COPY.back[lang]}</a>
      </p>
      <h1>{game.name[lang]}</h1>
      <p className="xo-version">{GAME_VERSION}</p>
      <p className="why-lead">{game.blurb[lang]}</p>
      <div className="xo-modes" role="group">
        <button type="button" className={mode === "two" ? "is-on" : ""} onClick={() => { setMode("two"); restart(); }}>
          {GAME_COPY.two[lang]}
        </button>
        <button type="button" className={mode === "cpu" ? "is-on" : ""} onClick={() => { setMode("cpu"); restart(); }}>
          {GAME_COPY.cpu[lang]}
        </button>
      </div>
      {mode === "cpu" ? <p className="xo-note">{GAME_COPY.you[lang]}</p> : null}
      <p className="xo-status" aria-live="polite">{status}</p>
      <div className="xo-board" dir="ltr">
        {board.map((cell, index) => {
          const hot = line?.includes(index) ?? false;
          return (
            <button
              key={index}
              type="button"
              className={hot ? "is-win" : ""}
              disabled={Boolean(cell) || over || (mode === "cpu" && turn === "O")}
              aria-label={`${index + 1}${cell ? ` ${cell}` : ""}`}
              onClick={() => play(index)}
            >
              {cell ? <span className={cell === "X" ? "is-x" : "is-o"}>{cell}</span> : null}
            </button>
          );
        })}
      </div>
      <dl className="xo-score">
        <div><dt>X</dt><dd>{score.x}</dd></div>
        <div><dt>{GAME_COPY.draw[lang]}</dt><dd>{score.draw}</dd></div>
        <div><dt>O</dt><dd>{score.o}</dd></div>
      </dl>
      <div className="xo-actions">
        <button type="button" onClick={restart}>{GAME_COPY.again[lang]}</button>
        <button type="button" onClick={clearScore}>{GAME_COPY.clear[lang]}</button>
      </div>
    </main>
  );
}

export function GameScreen({ slug }: { slug: string }) {
  if (slug === "soz") return <SozGame />;
  if (slug === "ilan") return <IlanGame />;
  if (slug === "kosmos") return <KosmosGame />;
  if (slug === "qala") return <QalaGame />;
  if (slug === "neon") return <NeonGame />;
  return <TicTacToe />;
}

