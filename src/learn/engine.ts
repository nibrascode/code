import { makeQuestions } from "@/workspace/questions";

export type Section = { id: string; title: string; text: string; pageStarts: { at: number; page: number }[] };
export type Card = { id: string; sec: string; q: string; options: string[]; answer: number; word: string; source: string; page: number; box: number; due: number; right: number; wrong: number; seen: number };
export type LogRow = { at: number; card: string; ok: boolean };
export type Course = { id: string; name: string; file: string; createdAt: number; updatedAt: number; pages: number; sections: Section[]; cards: Card[]; log: LogRow[] };

const DAY = 86400000;
const GAPS = [0, 1, 2, 4, 8, 16];
const HEAD = /^(?:(?:\d{1,2}(?:\.\d{1,2}){0,3}\.?)|(?:[IVX]{1,5}\.)|(?:fəsil|bölmə|mövzu|dərs|chapter|section|unit|lesson|part|bölüm|ünite|konu|глава|раздел|тема|урок|الفصل|الباب|الدرس|المبحث))\s+\S/i;

function isHeading(line: string) {
  const l = line.trim();
  if (l.length < 3 || l.length > 80 || /[.,;:!?]$/.test(l) && !/^\d/.test(l)) return false;
  if ((l.match(/\S+/g) ?? []).length > 10) return false;
  if (HEAD.test(l)) return true;
  const letters = l.replace(/[^\p{L}]/gu, "");
  return letters.length >= 4 && letters === letters.toLocaleUpperCase() && letters !== letters.toLocaleLowerCase();
}

export function uid() {
  return Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
}

/** Split page texts into topic sections: by detected headings, or by page groups when none. */
export function buildSections(pages: string[], fallbackTitle: (from: number, to: number) => string): Section[] {
  const lines: { text: string; page: number }[] = [];
  pages.forEach((p, i) => p.split(/\n/).forEach((text) => lines.push({ text, page: i + 1 })));
  const heads = lines.filter((l) => isHeading(l.text)).length;
  const out: Section[] = [];
  const push = (title: string, rows: { text: string; page: number }[]) => {
    let text = "";
    const pageStarts: Section["pageStarts"] = [];
    for (const r of rows) {
      if (!pageStarts.length || pageStarts[pageStarts.length - 1].page !== r.page) pageStarts.push({ at: text.length, page: r.page });
      text += (text && !/-$/.test(text) ? " " : "") + r.text.trim();
    }
    if ((text.match(/\S+/g) ?? []).length >= 25) out.push({ id: uid(), title: title.slice(0, 80), text, pageStarts });
  };
  if (heads >= 2 && heads <= 60) {
    let title = "";
    let rows: typeof lines = [];
    for (const l of lines) {
      if (isHeading(l.text)) {
        if (rows.length) push(title || fallbackTitle(rows[0].page, rows[rows.length - 1].page), rows);
        title = l.text.trim();
        rows = [];
      } else rows.push(l);
    }
    if (rows.length) push(title || fallbackTitle(rows[0].page, rows[rows.length - 1].page), rows);
  }
  if (out.length < 2) {
    out.length = 0;
    const per = Math.max(1, Math.ceil(pages.length / 8));
    for (let i = 0; i < pages.length; i += per) {
      const rows = lines.filter((l) => l.page > i && l.page <= i + per);
      push(fallbackTitle(i + 1, Math.min(pages.length, i + per)), rows);
    }
  }
  return out;
}

function pageOf(sec: Section, sentence: string) {
  const at = sec.text.indexOf(sentence.slice(0, 50));
  let page = sec.pageStarts[0]?.page ?? 1;
  for (const p of sec.pageStarts) if (p.at <= Math.max(0, at)) page = p.page;
  return page;
}

export function generate(sec: Section, existing: Card[], max: number): Card[] {
  const skip = new Set(existing.filter((c) => c.sec === sec.id).map((c) => c.word.toLocaleLowerCase()));
  const qs = makeQuestions(sec.text, max, (Date.now() % 9973) + existing.length + 1, skip);
  return qs.map((q) => ({ id: uid(), sec: sec.id, q: q.q, options: q.options, answer: q.answer, word: q.word ?? q.options[q.answer], source: q.source ?? "", page: pageOf(sec, q.source ?? ""), box: 0, due: 0, right: 0, wrong: 0, seen: 0 }));
}

/** The answer is checked against the source sentence itself, not only the stored index. */
export function isCorrect(card: Card, picked: string) {
  const norm = (s: string) => s.trim().toLocaleLowerCase();
  return norm(picked) === norm(card.word) && card.source.toLocaleLowerCase().includes(norm(picked));
}

export function grade(card: Card, ok: boolean, now = Date.now()): Card {
  const box = ok ? Math.min(5, card.box + 1) : 0;
  return { ...card, box, due: ok ? now + GAPS[box] * DAY : now, right: card.right + (ok ? 1 : 0), wrong: card.wrong + (ok ? 0 : 1), seen: card.seen + 1 };
}

export const isDue = (c: Card, now = Date.now()) => c.seen > 0 && c.due <= now;
export const mastered = (c: Card) => c.box >= 3;

export function pickTest(cards: Card[], n: number) {
  // Weak and unseen first, then the rest; shuffled inside each group.
  const score = (c: Card) => (c.seen === 0 ? 1 : 0) + c.wrong * 2 - c.box + Math.random();
  return [...cards].sort((a, b) => score(b) - score(a)).slice(0, n);
}

export function stats(c: Course, now = Date.now()) {
  const answered = c.log.length;
  const ok = c.log.filter((l) => l.ok).length;
  const days = Array.from({ length: 7 }, (_, i) => {
    const start = new Date(now - (6 - i) * DAY);
    start.setHours(0, 0, 0, 0);
    const end = start.getTime() + DAY;
    const rows = c.log.filter((l) => l.at >= start.getTime() && l.at < end);
    return { day: start, n: rows.length, ok: rows.filter((r) => r.ok).length };
  });
  const bySec = c.sections.map((s) => {
    const cards = c.cards.filter((x) => x.sec === s.id);
    const r = cards.reduce((a, x) => a + x.right, 0);
    const w = cards.reduce((a, x) => a + x.wrong, 0);
    return { s, total: cards.length, mastered: cards.filter(mastered).length, acc: r + w ? Math.round((r / (r + w)) * 100) : -1, due: cards.filter((x) => isDue(x, now)).length };
  });
  return { total: c.cards.length, seen: c.cards.filter((x) => x.seen).length, mastered: c.cards.filter(mastered).length, due: c.cards.filter((x) => isDue(x, now)).length, answered, acc: answered ? Math.round((ok / answered) * 100) : 0, days, bySec };
}
