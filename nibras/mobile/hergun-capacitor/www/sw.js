// sw.js — "Nibras Arabic" üçün offline dəstək
// Cache adı versiya ilə bağlıdır: app yeniləndikdə bu dəyəri artırın (məs. v1.0.0 -> v1.1.0),
// bu köhnə keşin təmizlənib yeni faylların yüklənməsini təmin edir.
const CACHE_NAME = 'nibras-arabic-cache-v1.1.0';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './app.js',
  './verbs.js',
  './bab-meanings.js',
  './words.js',
  './nouns.js',
  './adjectives.js',
  './numbers.js',
  './dialogues.js',
  './tests.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png'
];

// Quraşdırma: əsas faylları keşə yaz
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Aktivləşmə: köhnə versiyaların keşini sil
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Sorğular: əvvəlcə keşdən cavab ver (offline işləsin deyə),
// arxa planda internetdən yenisini çəkib keşi yeniləyir (varsa)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkFetch = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith(self.location.origin)) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || networkFetch;
    })
  );
});

// Günlük xatırlatma: dəstəkləyən brauzerlərdə (əsasən Chrome/Android, quraşdırılmış PWA)
// təxminən gündə bir dəfə arxa fonda işə düşməyə çalışır. Zəmanətli deyil — brauzerin
// "engagement" heuristikasından və OS-in enerji qənaəti ayarlarından asılıdır.
const REMINDER_MESSAGES = [
  'Bugünkü gündəlik sözünü öyrənməyi unutma! 📖',
  '5 dəqiqəlik məşq et, seriyanı davam etdir! 🔥',
  'Gündəlik sözünə baxmağın vaxtıdır! 🕌',
  'Bir feil, bir dialoq — bu gün üçün kifayətdir! 💪',
  'Seriyanı qırma, indi bir sual həll et! 📝'
];

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'daily-reminder') {
    const msg = REMINDER_MESSAGES[Math.floor(Math.random() * REMINDER_MESSAGES.length)];
    event.waitUntil(
      self.registration.showNotification('Nibras Arabic', {
        body: msg,
        icon: 'icons/icon-192.png',
        badge: 'icons/icon-192.png'
      })
    );
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow('./index.html');
      }
    })
  );
});
