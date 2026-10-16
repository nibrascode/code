import { l5 } from "./meta";
import type { OwnBlock, OwnSection } from "./own-types";

type T5 = [string, string, string, string, string];
/** Paragraph block (az, en, tr, ar, ru). */
export const P = (...t: T5): OwnBlock => ({ paragraphs: [l5(...t)] });
/** Sub-heading block. */
export const H = (...t: T5): OwnBlock => ({ heading: l5(...t) });
/** Code block (language-neutral) with an optional lead-in sentence. */
export const C = (code: string): OwnBlock => ({ code });
/** Bulleted list. */
export const U = (...items: T5[]): OwnBlock => ({ list: items.map((i) => l5(...i)) });
/** Numbered list. */
export const N = (...items: T5[]): OwnBlock => ({ list: items.map((i) => l5(...i)), ordered: true });
/** Section. */
export const S = (id: string, title: T5, ...blocks: OwnBlock[]): OwnSection => ({ id, title: l5(...title), blocks });
