/**
 * Post-processing for Arabic text produced by OCR (Tesseract / ML Kit) or
 * extracted from PDFs.
 *
 * - Arabic presentation forms (U+FB50–U+FDFF, U+FE70–U+FEFF) are folded back
 *   to the standard Arabic letters with NFKC, applied only to those code
 *   points so Latin ligatures, full-width digits etc. elsewhere are untouched.
 * - Harakat / tashkeel, Quranic annotation marks and tatweel are removed so
 *   the output is plain, searchable, copy-paste friendly text.
 * - Invisible bidi controls that some engines inject are removed, Arabic
 *   punctuation spacing is normalised and broken lines are tidied.
 */

const ARABIC_LETTER = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/u;
const ARABIC_LETTER_GLOBAL = /[\u0621-\u064A\u0660-\u0669\u0671-\u06D3\u06F0-\u06F9\u0750-\u077F\u08A0-\u08C9]/gu;
const LATIN_LETTER_GLOBAL = /[A-Za-z\u00C0-\u024F\u0400-\u04FF]/gu;
const PRESENTATION_FORMS = /[\uFB50-\uFDFF\uFE70-\uFEFF]+/gu;
// Tashkeel (fathatan … sukun, maddah, hamza above/below, etc.), superscript
// alef, Quranic annotation signs, extended Arabic marks and tatweel.
const ARABIC_DIACRITICS = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED\u08CA-\u08E1\u08E3-\u08FF\u0640]/gu;
// LRM, RLM, ALM, LRE/RLE/PDF/LRO/RLO, LRI/RLI/FSI/PDI, BOM, ZWSP.
const BIDI_CONTROLS = /[\u200B\u200E\u200F\u061C\u202A-\u202E\u2066-\u2069\uFEFF]/gu;

export const containsArabic = (value: string) => ARABIC_LETTER.test(value);

export const countArabicLetters = (value: string) => value.match(ARABIC_LETTER_GLOBAL)?.length ?? 0;

export const countLatinLetters = (value: string) => value.match(LATIN_LETTER_GLOBAL)?.length ?? 0;

/** Fold Arabic presentation forms to standard letters (e.g. ﻻ → لا, ﷲ → الله). */
export const normalizeArabicPresentationForms = (value: string) =>
  value.replace(PRESENTATION_FORMS, (match) => match.normalize('NFKC'));

/** Remove harakat, Quranic marks and tatweel. */
export const stripArabicDiacritics = (value: string) => value.replace(ARABIC_DIACRITICS, '');

const tidyArabicLine = (line: string) => line
  // Alef wasla is a Quranic spelling of a plain alef.
  .replace(/\u0671/g, '\u0627')
  .replace(/[ \t\u00A0]+/g, ' ')
  // No space before Arabic/Latin punctuation, one space after it.
  .replace(/ +([،؛؟!:.,;?)\]»])/g, '$1')
  .replace(/([(\[«]) +/g, '$1')
  .replace(/([،؛؟])(?=[^\s\d])/g, '$1 ')
  // OCR sometimes splits the definite article or a single letter from its word: "ا لكتاب" → "الكتاب".
  .replace(/(^|\s)ا ل(?=[\u0621-\u064A])/g, '$1ال')
  .trim();

/**
 * Clean OCR / extracted text. Text without Arabic letters is only trimmed and
 * whitespace-normalised, so Latin and Cyrillic results are not altered.
 */
export const cleanExtractedText = (value: string) => {
  if (!value) return '';
  const unified = value.replace(/\r\n?/g, '\n').replace(BIDI_CONTROLS, '');
  if (!containsArabic(unified)) {
    return unified
      .split('\n')
      .map((line) => line.replace(/[ \t\u00A0]+/g, ' ').trimEnd())
      .join('\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  const normalized = stripArabicDiacritics(normalizeArabicPresentationForms(unified).normalize('NFC'));
  const lines = normalized.split('\n').map(tidyArabicLine);

  // Drop lines that are only stray marks/punctuation left over after the
  // diacritics were removed, and collapse runs of blank lines.
  const kept: string[] = [];
  for (const line of lines) {
    const meaningful = line.replace(/[\s.,،؛:;'"`~\-_|•·°^*]+/g, '');
    if (!meaningful) {
      if (kept.length > 0 && kept[kept.length - 1] !== '') kept.push('');
      continue;
    }
    kept.push(line);
  }
  return kept.join('\n').replace(/\n{3,}/g, '\n\n').trim();
};
