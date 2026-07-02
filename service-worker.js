// Cache-first service worker for Local QSO Logger.
// Bump CACHE when shipping new asset versions to evict the old cache.
const CACHE = "local-qso-v20";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./favicon.svg",
  "./manifest.webmanifest",
  "./i18n/en.js",
  "./i18n/cs.js",
  "./i18n/da.js",
  "./i18n/de.js",
  "./i18n/et.js",
  "./i18n/es.js",
  "./i18n/fr.js",
  "./i18n/ga.js",
  "./i18n/hr.js",
  "./i18n/it.js",
  "./i18n/lv.js",
  "./i18n/lt.js",
  "./i18n/hu.js",
  "./i18n/nl.js",
  "./i18n/no.js",
  "./i18n/pl.js",
  "./i18n/pt.js",
  "./i18n/ro.js",
  "./i18n/sk.js",
  "./i18n/sl.js",
  "./i18n/fi.js",
  "./i18n/sv.js",
  "./i18n/be.js",
  "./i18n/bg.js",
  "./i18n/ru.js",
  "./i18n/sr.js",
  "./i18n/uk.js",
  "./i18n/el.js",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      ),
    ])
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  // Only handle same-origin requests; anything else passes through untouched.
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((resp) => {
          if (resp && resp.ok) {
            const copy = resp.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return resp;
        })
        .catch(() => cached);
    })
  );
});
