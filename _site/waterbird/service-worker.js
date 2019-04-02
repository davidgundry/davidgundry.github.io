importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});
/*workbox.router.registerRoute(
    new RegExp('.*'),
    workbox.strategies.cacheFirst()
);*/
 self.__precacheManifest = [].concat(self.__precacheManifest || []);
 workbox.precaching.suppressWarnings();
 //workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request));
});
