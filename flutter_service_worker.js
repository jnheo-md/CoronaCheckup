'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "a11d571ac48b4cab186bc613f24f4421",
"/main.dart.js": "aec862ffe0bed5a23baad9e43c7afa73",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "a18c69302dba8d60bdfb03febd988195",
"/assets/LICENSE": "a6c35b016cdc2be7833be40d46baddca",
"/assets/AssetManifest.json": "05420042c492da21fb845535406fdc39",
"/assets/FontManifest.json": "9691e7db736a9b392be4958e6970a225",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/fonts/NanumSquareOTFBold.otf": "d7c4bb6cc69192432eea2124eac30fdd",
"/assets/assets/fonts/NanumSquareOTFLight.otf": "c40969eb31e6b4fde6545d9ceb518288",
"/assets/assets/fonts/NanumSquareOTFExtraBold.otf": "702510f5ef52748fed5abad03e0946d3",
"/assets/assets/fonts/NanumSquareOTFRegular.otf": "94caf6ad65d567bf536b3dfc12d1ae81"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
