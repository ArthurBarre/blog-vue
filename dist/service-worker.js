importScripts("/precache-manifest.a4c9234f9e9361561655865581846f4a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
  debug: true,
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  new RegExp("https://api.npoint.io/(.*)"),
  new workbox.strategies.CacheFirst({
    cacheName: "jsonplaceholder",
    method: "GET",
    cacheableResponse: { statuses: [0, 200] },
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapies|gstatic).com/(.*)"),
  new workbox.strategies.CacheFirst({
    cacheName: "googleapis",
    method: "GET",
    cacheableResponse: { statuses: [0, 200] },
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  })
);

let clickUrl;

self.addEventListener("push", (event) => {
  let pushMessage = event.data.json();

  clickUrl = pushMessage[0].url;

  const options = {
    body: pushMessage[0].title,
    icon: "./assets/icons/icon-192x192.png",
    image: "./assets/icons/icon-192x192.png",
    vibrate: [200, 100, 200, 100],
    tag: "vibration-sample",
  };

  event.waitUntil(
    self.registration.showNotification(pushMessage[0].title, options)
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const promiseChain = clients.openWindow(clickUrl);
  event.waitUntil(promiseChain);
});

