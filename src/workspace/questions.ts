/** Client-side question builder: no AI, no network. Cloze multiple-choice from the text's own sentences. */
export type Question = { q: string; options: string[]; answer: number; source?: string; word?: string };

const STOP = new Set(
  "və ya ilə üçün bu bir da də ki isə olan olur olub kimi daha çox amma lakin həm hər onun onlar biz siz mən sən the and for with that this from are was were have has been into also but not you your they their which what when where then than there these those such only other more most some any each ve ile için bir daha olan gibi ama ancak her bu şu и в на с по для что это как или но не из от до при также".split(" "),
);
const WORD = /[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu;

function clean(w: string) {
  return w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
}

export function splitSentences(text: string): string[] {
  return text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?؟।])\s+(?=[\p{Lu}\p{N}"«(\u0600-\u06FF])/u)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function keyWords(sentence: string): string[] {
  return (sentence.match(WORD) ?? []).map(clean).filter((w) => w.length >= 4 && !STOP.has(w.toLocaleLowerCase()) && !/^\d{1,2}$/.test(w));
}

function rand(seed: number) {
  let s = seed || 1;
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
}

export function makeQuestions(text: string, max = 10, seed = 7, skip: Set<string> = new Set()): Question[] {
  const sentences = splitSentences(text).filter((s) => {
    const n = (s.match(WORD) ?? []).length;
    return n >= 6 && n <= 45;
  });
  const pool = Array.from(new Set(sentences.flatMap(keyWords)));
  if (pool.length < 4) return [];
  const r = rand(seed);
  const out: Question[] = [];
  const used = new Set<string>(skip);
  // Prefer sentences rich in key words (usually definitions and facts).
  const ranked = sentences
    .map((s, i) => ({ s, i, score: keyWords(s).length + (/\d/.test(s) ? 2 : 0) + (/\s(—|-|:|dir|dır|dur|dür|is|are|olan)\s/i.test(s) ? 2 : 0) }))
    .sort((a, b) => b.score - a.score || a.i - b.i);
  for (const { s } of ranked) {
    if (out.length >= max) break;
    const keys = keyWords(s).filter((w) => !used.has(w.toLocaleLowerCase()));
    if (!keys.length) continue;
    const target = keys.reduce((a, b) => (b.length > a.length || (/\d/.test(b) && !/\d/.test(a)) ? b : a));
    used.add(target.toLocaleLowerCase());
    const sameKind = pool.filter((w) => w.toLocaleLowerCase() !== target.toLocaleLowerCase() && /\d/.test(w) === /\d/.test(target));
    const near = sameKind.sort((a, b) => Math.abs(a.length - target.length) - Math.abs(b.length - target.length) || r() - 0.5).slice(0, 8);
    const wrong: string[] = [];
    while (wrong.length < 3 && near.length) {
      const pick = near.splice(Math.floor(r() * Math.min(near.length, 5)), 1)[0];
      if (!wrong.some((w) => w.toLocaleLowerCase() === pick.toLocaleLowerCase())) wrong.push(pick);
    }
    if (wrong.length < 3) continue;
    const answer = Math.floor(r() * 4);
    const options = [...wrong];
    options.splice(answer, 0, target);
    const esc = target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    out.push({ q: s.replace(new RegExp(esc), "_____"), options, answer, source: s, word: target });
  }
  return out;
}

export function questionsToText(qs: Question[], labels: { answers: string }) {
  const L = ["A", "B", "C", "D"];
  const body = qs.map((q, i) => `${i + 1}. ${q.q}\n${q.options.map((o, j) => `   ${L[j]}) ${o}`).join("\n")}`).join("\n\n");
  const key = qs.map((q, i) => `${i + 1}-${L[q.answer]}`).join("  ");
  return `${body}\n\n${labels.answers}: ${key}`;
}
