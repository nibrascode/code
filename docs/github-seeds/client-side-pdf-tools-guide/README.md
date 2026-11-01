# client-side-pdf-tools-guide

How to merge, split, compress, sign and OCR PDFs **entirely in the browser** — no upload, no server.
A practical guide behind [Nibras PDF web tools](https://nibrascode.com/pdf) (35 tools, 5 languages, free, no account, no ads).

## Why client-side
- Privacy: the file never leaves the device (0 KB uploaded).
- Speed: no upload/download round trip.
- Works on weak connections once the page is loaded.

## Building blocks
- `pdf-lib` — merge, split, rotate, page numbers, watermark, metadata
- `pdf.js` — rendering, previews, text extraction
- `tesseract.js` (WebAssembly) — OCR
- Web Workers — keep the UI responsive on large files

## Try it
- Merge PDF: https://nibrascode.com/en/pdf/merge (AZ: https://nibrascode.com/pdf/merge)
- Compress PDF: https://nibrascode.com/en/pdf/compress
- All tools: https://nibrascode.com/en/pdf · catalog: https://nibrascode.com/tools.json

> Draft — not published yet.
