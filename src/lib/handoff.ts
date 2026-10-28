/** In-tab file hand-off between tools (Tool chaining): no re-download / re-upload. */
let pending: { files: File[]; at: number } | null = null;

export function handOff(files: File[]) {
  pending = { files, at: Date.now() };
}

/** Take files handed to the next tool (valid for 10 min, once). */
export function takeHandOff(): File[] {
  const p = pending;
  pending = null;
  return p && Date.now() - p.at < 600_000 ? p.files : [];
}
