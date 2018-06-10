const CACHE_KEY = "v1";

self.addEventListener("install", function(event) {
    console.log("Service Worker being installed");
    event.waitUntil(precache());
})

// self.addEventListener("fetch", function(event) {
//     // If is an VSTS API call, fetch as normal
//     if (event.request.url.toLowerCase().indexOf(".visualstudio.com/_apis") === 0) {
//         event.respondWith(fetch(event.request));
//     } else {
//         event.respondWith( 
//             getFromCache(event.request)
//                 .catch(function() {
//                     console.log("Fetch and set cache")
//                     return fetchAndSetCache(event.request);
//                 })
//         );
//     }
// })

function fetchAndSetCache(request) {
    return caches.open(CACHE_KEY).then(function (cache) {
        return fetch(request).then(function (response) {
            cache.put(request, response.clone());
            return response;
        });
    });
}

function getFromCache(request) {
    return caches.match(request)
        .then(function(cachedValue) {
            return cachedValue || Promise.reject('no-cached-value');
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