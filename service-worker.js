// Cache-first service worker for Local QSO Logger.
// Bump CACHE when shipping new asset versions to evict the old cache.
const CACHE = "local-qso-v28";
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
  "./contests/9a-cw-9a.js",
  "./contests/9a-cw-dx.js",
  "./contests/all-asia-cw.js",
  "./contests/all-asia-ssb.js",
  "./contests/ari-dx-dx.js",
  "./contests/ari-dx-i.js",
  "./contests/arrl-10m-dx.js",
  "./contests/arrl-10m-w.js",
  "./contests/arrl-160m-dx.js",
  "./contests/arrl-160m-w.js",
  "./contests/arrl-dx-cw.js",
  "./contests/arrl-dx-ssb.js",
  "./contests/arrl-fd.js",
  "./contests/arrl-rtty-ru-dx.js",
  "./contests/arrl-rtty-ru-w.js",
  "./contests/asrucamp.js",
  "./contests/baltic.js",
  "./contests/bfrr-cw-dx.js",
  "./contests/bfrr-cw-ew.js",
  "./contests/bfrr-ssb-dx.js",
  "./contests/bfrr-ssb-ew.js",
  "./contests/cnc-cw-dx.js",
  "./contests/cnc-cw-ea.js",
  "./contests/cq-160-cw.js",
  "./contests/cq-160-ssb.js",
  "./contests/cq-m.js",
  "./contests/cq-wpx-cw.js",
  "./contests/cq-wpx-rtty.js",
  "./contests/cq-wpx-ssb.js",
  "./contests/cqww-cw.js",
  "./contests/cqww-rtty.js",
  "./contests/cqww-ssb.js",
  "./contests/dzcup.js",
  "./contests/eu-hf-championship.js",
  "./contests/gagarin.js",
  "./contests/ha-dx-dx.js",
  "./contests/ha-dx-ha.js",
  "./contests/iaru-hf.js",
  "./contests/iaru-r1-fd.js",
  "./contests/lz-dx.js",
  "./contests/nrau-baltic-cw.js",
  "./contests/nrau-baltic-ssb.js",
  "./contests/okom-dx-cw-dx.js",
  "./contests/okom-dx-cw-ok.js",
  "./contests/okom-dx-ssb-dx.js",
  "./contests/okom-dx-ssb-ok.js",
  "./contests/raem.js",
  "./contests/rdac.js",
  "./contests/ref-cw-dx.js",
  "./contests/ref-cw-f.js",
  "./contests/ref-ssb-dx.js",
  "./contests/ref-ssb-f.js",
  "./contests/rfc-cw.js",
  "./contests/rfc-ssb.js",
  "./contests/rrtc.js",
  "./contests/rus-ww-mm.js",
  "./contests/russian-dx-dx.js",
  "./contests/russian-dx-ru.js",
  "./contests/russian-ww-rtty.js",
  "./contests/sp-dx.js",
  "./contests/ur-dx-dx.js",
  "./contests/ur-dx-ur.js",
  "./contests/ur-rtty-dx.js",
  "./contests/ur-rtty-ur.js",
  "./contests/wae-cw.js",
  "./contests/wae-ssb.js",
  "./contests/yo-dx-hf-dx.js",
  "./contests/yo-dx-hf-yo.js",
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
