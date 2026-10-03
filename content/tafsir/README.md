# Tafsir data

Sources, layout and licensing notes: see `api/_tafsir/SOURCES.txt`.

Rebuild: `bash scripts/download-tafsir.sh` (writes to `/workspace/tafsir_raw`, polite sequential download, ~5 minutes, ~175 MB raw),
then `node scripts/build-tafsir.mjs [raw-dir]` → `api/_tafsir/{muyassar,saadi,ibnkathir}/<sura>.js` + `loaders.js`.
