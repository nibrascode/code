import type { L5 } from "./meta";

export type OwnBlock = {
  heading?: L5;
  paragraphs?: L5[];
  list?: L5[];
  ordered?: boolean;
  code?: string;
};
export type OwnSection = { id: string; title: L5; blocks: OwnBlock[] };
export type OwnPageContent = Record<string, OwnSection[]>;
