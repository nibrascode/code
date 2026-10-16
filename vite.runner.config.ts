import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// Separate lazy bundle for the AI chat surfaces: window.NibrasPdf (src/pdf/runner.ts).
// `npm run build` runs it first (prebuild) and writes to public/pdf-assets/runner/, which is served as-is.
// Library mode inlines `?url` assets as data: URIs (blocked by the site CSP for workers), so the pdf.js worker
// is emitted as a real file instead and runner.ts points pdf.js at it.
const stub = fileURLToPath(new URL("./src/pdf/lib/worker-stub.ts", import.meta.url));

export default defineConfig({
  base: "/pdf-assets/runner/",
  publicDir: false,
  resolve: {
    tsconfigPaths: true,
    alias: [{ find: /^pdfjs-dist\/build\/pdf\.worker\.min\.mjs\?url$/, replacement: stub }],
  },
  plugins: [
    {
      name: "emit-pdfjs-worker",
      generateBundle() {
        this.emitFile({ type: "asset", fileName: "pdf.worker.min.mjs", source: readFileSync(fileURLToPath(new URL("./node_modules/pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url))) });
      },
    },
  ],
  build: {
    outDir: "public/pdf-assets/runner",
    emptyOutDir: true,
    target: "es2022",
    sourcemap: false,
    lib: { entry: "src/pdf/runner.ts", formats: ["es"], fileName: () => "runner.js" },
    rollupOptions: { output: { chunkFileNames: "chunks/[name]-[hash].js", assetFileNames: "assets/[name]-[hash][extname]" } },
  },
});
