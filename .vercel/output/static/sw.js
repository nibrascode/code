/* Nibras Code offline support: browser tools keep working without internet. */
const V = "nx-v1";
const PAGES = "nx-pages-" + V;
const STATIC = "nx-static-" + V;
const CORE = ["/", "/image", "/pdf", "/video", "/qr", "/erase", "/zip", "/manifest.webmanifest", "/favicon-192.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(PAGES).then((c) => Promise.all(CORE.map((u) => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => !k.endsWith(V)).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

async function trim(name, max) {
  const c = await caches.open(name);
  const keys = await c.keys();
  for (let i = 0; i < keys.length - max; i++) await c.delete(keys[i]);
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/audio") || url.pathname === "/sw.js") return;

  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(PAGES).then((c) => c.put(req, copy)).then(() => trim(PAGES, 80));
          }
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("/"))),
    );
    return;
  }

  const immutable = url.pathname.startsWith("/assets/") || url.pathname.startsWith("/ffmpeg/") || url.pathname.startsWith("/fonts/") || url.pathname.startsWith("/pdf-assets/");
  if (immutable || /\.(png|jpe?g|webp|svg|ico|woff2?|wasm)$/.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok && res.type === "basic") {
              const copy = res.clone();
              caches.open(STATIC).then((c) => c.put(req, copy)).then(() => trim(STATIC, 600));
            }
            return res;
          }),
      ),
    );
  }
});
