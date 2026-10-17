self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('aris-store-v3')
      './',
      './index.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
