/* ═══════════════════════════════════════════════════════
   King AI — Service Worker v24.5
   يعمل على: GitHub Pages / أي static host
   استراتيجية: Cache-First (offline أولاً)
═══════════════════════════════════════════════════════ */

const VER   = 'king-ai-v24.5';
const SCOPE = self.registration.scope;

/* ── الملفات المحفوظة فوراً عند التثبيت ── */
const PRECACHE = [
  SCOPE,
  SCOPE + 'index.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-solid-900.woff2',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/webfonts/fa-brands-400.woff2'
];

/* ══ INSTALL — احفظ كل شيء ══ */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VER).then(async cache => {
      for (const url of PRECACHE) {
        try { await cache.add(url); } catch(_) { /* تجاهل فشل CDN */ }
      }
    }).then(() => self.skipWaiting())   // فعّل فوراً بدون انتظار
  );
});

/* ══ ACTIVATE — احذف الكاشات القديمة ══ */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== VER).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())  // تحكم في كل التبويبات المفتوحة
  );
});

/* ══ FETCH — استجب لكل طلب ══ */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const url = e.request.url;

  /* ─ API — دائماً من الشبكة، لا تُخزَّن ─ */
  if (
    url.includes('api.anthropic.com') ||
    url.includes('generativelanguage.googleapis.com') ||
    url.includes('google.serper.dev') ||
    url.includes('duckduckgo.com')
  ) {
    e.respondWith(
      fetch(e.request).catch(() =>
        new Response('{"error":"offline"}', {
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );
    return;
  }

  /* ─ ملف التطبيق الرئيسي — Cache First + خلفي يُحدِّث ─ */
  const isAppShell =
    url === SCOPE ||
    url === SCOPE + 'index.html' ||
    url.endsWith('/') ||
    url.endsWith('/index.html');

  if (isAppShell) {
    e.respondWith(
      caches.open(VER).then(cache =>
        cache.match(e.request).then(cached => {
          /* أرسل الكاش فوراً */
          const networkFetch = fetch(e.request)
            .then(fresh => {
              if (fresh && fresh.status === 200) {
                cache.put(e.request, fresh.clone());
              }
              return fresh;
            })
            .catch(() => cached);
          return cached || networkFetch;
        })
      )
    );
    return;
  }

  /* ─ CDN (Font Awesome, etc.) — Cache First ─ */
  if (url.includes('cdnjs.cloudflare.com') || url.includes('fonts.')) {
    e.respondWith(
      caches.open(VER).then(cache =>
        cache.match(e.request).then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(fresh => {
            if (fresh && fresh.status === 200) {
              cache.put(e.request, fresh.clone());
            }
            return fresh;
          }).catch(() => new Response('', { status: 408 }));
        })
      )
    );
    return;
  }

  /* ─ باقي الطلبات — Network First مع Fallback للكاش ─ */
  e.respondWith(
    fetch(e.request)
      .then(fresh => {
        if (fresh && fresh.status === 200 && fresh.type !== 'opaque') {
          const clone = fresh.clone();
          caches.open(VER).then(c => c.put(e.request, clone)).catch(() => {});
        }
        return fresh;
      })
      .catch(() =>
        caches.match(e.request).then(cached =>
          cached || caches.match(SCOPE + 'index.html')
        )
      )
  );
});

/* ══ MESSAGE — استقبل أوامر من التطبيق ══ */
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
  if (e.data === 'CLEAR_CACHE') {
    caches.delete(VER).then(() => self.skipWaiting());
  }
});
