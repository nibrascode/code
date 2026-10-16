const FORMS: Record<string, [string, string, string, string]> = {
  '\u0621': ['\uFE80', '\uFE80', '\uFE80', '\uFE80'],
  '\u0622': ['\uFE81', '\uFE82', '\uFE81', '\uFE82'],
  '\u0623': ['\uFE83', '\uFE84', '\uFE83', '\uFE84'],
  '\u0624': ['\uFE85', '\uFE86', '\uFE85', '\uFE86'],
  '\u0625': ['\uFE87', '\uFE88', '\uFE87', '\uFE88'],
  '\u0626': ['\uFE89', '\uFE8A', '\uFE8B', '\uFE8C'],
  '\u0627': ['\uFE8D', '\uFE8E', '\uFE8D', '\uFE8E'],
  '\u0628': ['\uFE8F', '\uFE90', '\uFE91', '\uFE92'],
  '\u0629': ['\uFE93', '\uFE94', '\uFE93', '\uFE94'],
  '\u062A': ['\uFE95', '\uFE96', '\uFE97', '\uFE98'],
  '\u062B': ['\uFE99', '\uFE9A', '\uFE9B', '\uFE9C'],
  '\u062C': ['\uFE9D', '\uFE9E', '\uFE9F', '\uFEA0'],
  '\u062D': ['\uFEA1', '\uFEA2', '\uFEA3', '\uFEA4'],
  '\u062E': ['\uFEA5', '\uFEA6', '\uFEA7', '\uFEA8'],
  '\u062F': ['\uFEA9', '\uFEAA', '\uFEA9', '\uFEAA'],
  '\u0630': ['\uFEAB', '\uFEAC', '\uFEAB', '\uFEAC'],
  '\u0631': ['\uFEAD', '\uFEAE', '\uFEAD', '\uFEAE'],
  '\u0632': ['\uFEAF', '\uFEB0', '\uFEAF', '\uFEB0'],
  '\u0633': ['\uFEB1', '\uFEB2', '\uFEB3', '\uFEB4'],
  '\u0634': ['\uFEB5', '\uFEB6', '\uFEB7', '\uFEB8'],
  '\u0635': ['\uFEB9', '\uFEBA', '\uFEBB', '\uFEBC'],
  '\u0636': ['\uFEBD', '\uFEBE', '\uFEBF', '\uFEC0'],
  '\u0637': ['\uFEC1', '\uFEC2', '\uFEC3', '\uFEC4'],
  '\u0638': ['\uFEC5', '\uFEC6', '\uFEC7', '\uFEC8'],
  '\u0639': ['\uFEC9', '\uFECA', '\uFECB', '\uFECC'],
  '\u063A': ['\uFECD', '\uFECE', '\uFECF', '\uFED0'],
  '\u0641': ['\uFED1', '\uFED2', '\uFED3', '\uFED4'],
  '\u0642': ['\uFED5', '\uFED6', '\uFED7', '\uFED8'],
  '\u0643': ['\uFED9', '\uFEDA', '\uFEDB', '\uFEDC'],
  '\u0644': ['\uFEDD', '\uFEDE', '\uFEDF', '\uFEE0'],
  '\u0645': ['\uFEE1', '\uFEE2', '\uFEE3', '\uFEE4'],
  '\u0646': ['\uFEE5', '\uFEE6', '\uFEE7', '\uFEE8'],
  '\u0647': ['\uFEE9', '\uFEEA', '\uFEEB', '\uFEEC'],
  '\u0648': ['\uFEED', '\uFEEE', '\uFEED', '\uFEEE'],
  '\u0649': ['\uFEEF', '\uFEF0', '\uFEEF', '\uFEF0'],
  '\u064A': ['\uFEF1', '\uFEF2', '\uFEF3', '\uFEF4'],
};

const LAM_ALEF: Record<string, { isolated: string; final: string }> = {
  '\u0622': { isolated: '\uFEF5', final: '\uFEF6' },
  '\u0623': { isolated: '\uFEF7', final: '\uFEF8' },
  '\u0625': { isolated: '\uFEF9', final: '\uFEFA' },
  '\u0627': { isolated: '\uFEFB', final: '\uFEFC' },
};

const CONNECTS_NEXT = new Set(
  Object.keys(FORMS).filter((letter) => FORMS[letter][0] !== FORMS[letter][2]),
);

const isDiacritic = (value: string) => /[\u064B-\u065F\u0670\u06D6-\u06ED]/.test(value);

const shapeWord = (word: string) => {
  const chars = Array.from(word);
  const output: string[] = [];
  const nextBase = (index: number) => {
    for (let cursor = index + 1; cursor < chars.length; cursor += 1) {
      if (!isDiacritic(chars[cursor])) return cursor;
    }
    return -1;
  };
  const previousBase = (index: number) => {
    for (let cursor = index - 1; cursor >= 0; cursor -= 1) {
      if (!isDiacritic(chars[cursor])) return cursor;
    }
    return -1;
  };

  for (let index = 0; index < chars.length; index += 1) {
    const letter = chars[index];
    const forms = FORMS[letter];
    if (!forms || isDiacritic(letter)) {
      output.push(letter);
      continue;
    }
    const previousIndex = previousBase(index);
    const nextIndex = nextBase(index);
    const previous = previousIndex >= 0 ? chars[previousIndex] : '';
    const next = nextIndex >= 0 ? chars[nextIndex] : '';
    const previousJoins = Boolean(FORMS[previous] && CONNECTS_NEXT.has(previous));
    if (letter === '\u0644' && LAM_ALEF[next]) {
      output.push(previousJoins ? LAM_ALEF[next].final : LAM_ALEF[next].isolated);
      index = nextIndex;
      continue;
    }
    const nextJoins = Boolean(FORMS[next] && CONNECTS_NEXT.has(letter));
    output.push(
      previousJoins && nextJoins
        ? forms[3]
        : previousJoins
          ? forms[1]
          : nextJoins
            ? forms[2]
            : forms[0],
    );
  }
  return output.join('');
};

const shapeLine = (line: string) => {
  const parts = line.split(/(\s+)/);
  return parts
    .map((part) => (/[\u0600-\u06FF]/.test(part) ? shapeWord(part) : part))
    .reverse()
    .join('');
};

export const shapeArabicForPdf = (value: string) => {
  if (!/[\u0600-\u06FF]/.test(value)) return value;
  return value.split('\n').map(shapeLine).join('\n');
};
