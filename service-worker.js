self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("santigo-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./comm.html",
        "./styles/main.css",
        "./js/init.js",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
