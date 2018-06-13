const CACHE_KEY = "v1.2";

self.addEventListener("install", function(event) {
    self.skipWait();
    console.log("Service Worker being installed");
    event.waitUntil(precache());
})

self.addEventListener("activate", function(event) {
    event.waitUntil(clearOldCache())
})

self.addEventListener("fetch", function(event) {
    // If is an VSTS API call, fetch as normal
    if (event.request.url.toLowerCase().indexOf(".visualstudio.com/_apis") === 0) {
        event.respondWith(fetch(event.request));
    } else {
        event.respondWith( 
            getFromCache(event.request).then(cachedResponse => {
                // Either way, invoke a fetch and replace cache, but don't 'await'
                let fetchReq = fetchAndSetCache(event.request);
                // If a cached value use that, otherwise return the Fetch Promise
                return cachedResponse || fetchReq;
            })
        );
    }
}) 

function clearOldCache() {
    return caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames
                .filter(function(cacheName) {
                    return cacheName !== CACHE_KEY
                })
                .map(function(cacheName) {
                    return caches.delete(cacheName);
                })
        )
    })
}
function fetchAndSetCache(request) {
    return caches.open(CACHE_KEY).then(function (cache) {
        return fetch(request).then(function (response) {
            cache.put(request, response.clone());
            return response;
        });
    });
}

function getFromCache(request) {
    return caches.open(CACHE_KEY).then(function(cache) {
        return cache.match(request)
            .then(function(cachedValue) {
                return cachedValue || null;
            })
    })
} 

function precache() {
    return caches.open(CACHE_KEY).then(function (cache) {
        return cache.addAll([
            '/',
            'index.html',
            'images/icons/icon-144x144.png',
            'main.js',
            'manifest.json',
            'images/personaltoken1.png',
            'images/personaltoken2.png',
            'images/personaltoken3.png'
        ]);
    });
}