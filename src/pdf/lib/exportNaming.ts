export const exportNameWithExtension = (name: string, originalName: string) => {
  const extension = originalName.match(/\.[a-z0-9]+$/i)?.[0] ?? '.pdf';
  const sanitized = name.trim().replace(/[\\/:*?"<>|]/g, '-');
  const fallback = originalName || `document${extension}`;
  if (!sanitized) return fallback;
  return new RegExp(`${extension.replace('.', '\\.')}$`, 'i').test(sanitized)
    ? sanitized
    : `${sanitized}${extension}`;
};

export const exportNameFromPattern = (
  pattern: string,
  sourceName: string,
  fallbackName: string,
  index: number,
  total: number,
  toolId: string,
) => {
  const trimmedPattern = pattern.trim();
  if (!trimmedPattern) return fallbackName;

  const sourceBase = sourceName.replace(/\.[^/.]+$/, '') || 'document';
  const patternWithIndex = total > 1 && !/\{index\}/i.test(trimmedPattern)
    ? `${trimmedPattern}-{index}`
    : trimmedPattern;
  const rendered = patternWithIndex
    .replace(/\{name\}/gi, sourceBase)
    .replace(/\{date\}/gi, new Date().toISOString().slice(0, 10))
    .replace(/\{index\}/gi, String(index + 1))
    .replace(/\{tool\}/gi, toolId);

  return exportNameWithExtension(rendered, fallbackName);
};