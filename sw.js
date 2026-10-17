self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open('aris-store-v3').then((cache) => cache.addAll([
      './',
      './index.html',
    ])),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== 'aris-store-v3') {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
