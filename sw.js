
const CACHE_NAME = 'adhd-toolkit-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Add paths to your main JS/CSS bundles if they have static names
  // '/index.tsx' or the compiled output like '/assets/index.js'
  // '/App.tsx' or the compiled output
  // Add paths to your icons specified in manifest.json
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  // Add paths to your sound files
  '/sounds/white_noise.mp3',
  '/sounds/rain_soft.mp3',
  '/sounds/forest_calm.mp3',
  '/sounds/cafe_murmur.mp3',
  '/sounds/ocean_waves.mp3',
  '/sounds/wind_light.mp3',
  // Tailwind CDN (less critical to cache, but can be added)
  'https://cdn.tailwindcss.com',
  // ESM.sh URLs (these are versioned, so they are quite stable for caching)
  'https://esm.sh/react@^19.1.0/',
  'https://esm.sh/react@^19.1.0',
  'https://esm.sh/react-dom@^19.1.0/',
  'https://esm.sh/react-router-dom@^7.6.1',
  'https://esm.sh/react-dom@^19.1.0'
];

// Install event: open cache and add core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Add all core assets. If any fail, the SW installation fails.
        return cache.addAll(urlsToCache.map(url => new Request(url, { mode: 'cors' })))
          .catch(error => {
            console.error('Failed to cache one or more resources during install:', error);
            // Optionally, inspect which URL failed if needed
            // For CDN resources, network errors can cause this.
            // Consider making some less critical resources non-blocking for install.
          });
      })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: serve cached content when offline, or fetch and cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Not in cache - fetch from network
        return fetch(event.request).then(
          networkResponse => {
            // Check if we received a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              // For 'cors' resources (like CDNs), networkResponse.type might be 'cors'
              if (networkResponse && (networkResponse.type === 'cors' || networkResponse.type === 'opaque')) {
                // Clone and cache CORS responses
                 if (urlsToCache.includes(event.request.url) || event.request.url.startsWith('https://esm.sh/')) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => {
                        cache.put(event.request, responseToCache);
                        });
                 }
                return networkResponse;
              }
              // For other types of failed fetches, just return the network response
              // (e.g. if it's an API call we don't want to cache but it failed)
              return networkResponse;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                // Only cache GET requests that are part of initial urlsToCache or from esm.sh
                 if (event.request.method === 'GET' && (urlsToCache.includes(event.request.url) || event.request.url.startsWith('https://esm.sh/'))) {
                    cache.put(event.request, responseToCache);
                 }
              });

            return networkResponse;
          }
        ).catch(error => {
          console.error('Fetching failed:', error);
          // If fetching fails (e.g., offline), try to return a fallback page or resource
          // For this basic example, we'll just let it fail if not in cache.
          // You could return a generic offline.html page here:
          // return caches.match('/offline.html');
        });
      })
  );
});
