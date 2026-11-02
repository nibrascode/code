# Third-party notices

## docdiff (MIT)
`src/pdf/lib/wordDiff.ts` (/pdf/compare) adapts the word normalisation and PDF line-joining approach from
docdiff — https://github.com/tschnorpfeil/docdiff — Copyright (c) 2026 Tobias Schnorpfeil, MIT License.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, subject to including the copyright notice and permission notice. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

## zxing-wasm (MIT)
`src/qr/lib/zxing.ts` (QR scanner, multi-format fallback) uses zxing-wasm — https://github.com/Sec-ant/zxing-wasm — Copyright (c) Ze-Zheng Wu, MIT License; bundles zxing-cpp — https://github.com/zxing-cpp/zxing-cpp — Apache-2.0.

## audiobuffer-to-wav (MIT)
`src/voice/recorder.tsx` (/voice recorder, WAV export) uses audiobuffer-to-wav — https://github.com/Jam3/audiobuffer-to-wav — Copyright (c) 2015 Jam3, MIT License.

## @jsquash/avif (Apache-2.0)
https://github.com/jamsinclair/jSquash — AVIF encoder (libavif/aom codecs from Squoosh, Apache-2.0 / BSD-2-Clause). Used on /image for client-side AVIF compression; loaded only when AVIF is chosen.

## Hijri date (/hicri)
No third-party library: uses the browser's built-in Intl `islamic-umalqura` calendar (moment-hijri was not needed).

## ffmpeg.wasm core — licence note
`@ffmpeg/ffmpeg` / `@ffmpeg/util` wrappers are MIT. The bundled `public/ffmpeg/ffmpeg-core.wasm` (@ffmpeg/core 0.12) is configured with `--enable-gpl --enable-libx264 --enable-libx265`, so that binary is GPL-licensed. An LGPL-only rebuild (without x264/x265, `--enable-gpl` removed) needs an Emscripten build and is planned; until then the core is served unmodified as a separate file and its source is at https://github.com/ffmpegwasm/ffmpeg.wasm.
