const APP_NAME = 'Practice Arithmetic';
const VERSION = 'version_02';

const CACHE_NAME = APP_NAME + VERSION;

const CACHE_URLS = [
    '/arithmetic/index.html',
    '/arithmetic/assets/Correct.a78f9d78.png',
    '/arithmetic/assets/Wrong.1eaee7c0.png',
    '/arithmetic/assets/index.46067b9c.js',
    '/arithmetic/assets/index.b11f947a.css',
];

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(request => request || fetch(event.request))
    );
});

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_URLS))
    )
});

self.addEventListener('activate', function(event) {
    event.waitUntil(

        caches.keys().then(keys => {
            let whitelist = keys.filter(key => key.indexOf(APP_NAME));
            whitelist.push(CACHE_NAME);

            return Promise.all(keys.map(function(key, i) {
                if (whitelist.indexOf(key) === -1) {
                    return caches.delete(keys[i]);
                }
            }));
        })

    );
});