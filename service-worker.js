// const CACHE_NAME = "myportfolio-v1";

// let urlsToCache = [
//   "/",
//   "/index.html",
//   "/index.js",
//   "/manifest.json",
//   "/asset/css/style.css",
//   "/asset/css/materialize/materialize.min.css",
//   "/asset/icons/edu_icon.svg",
//   "/asset/icons/icon.png",
//   "/asset/icons/apps_icon_512.png",
//   "/asset/icons/apps_icon_384.png",
//   "/asset/icons/apps_icon_256.png",
//   "/asset/icons/maskable_icon.png",
//   "/asset/img/404_illustration.svg",
//   "/asset/img/ahm_logo.jpg",
//   "/asset/img/avatar_icon.jpg",
//   "/asset/img/education_illustration.svg",
//   "/asset/img/profile_illustration.svg",
//   "/asset/img/server_illustration.svg",
//   "/asset/img/skill_illustration.svg",
//   "/asset/img/work_illustration.svg",
//   "/asset/js/materialize/materialize.min.js",
//   "/components/Content/index.js",
//   "/components/Footer/index.html",
//   "/components/Footer/index.js",
//   "/components/Navigation/index.html",
//   "/components/Navigation/index.js",
//   "/pages/education/index.html",
//   "/pages/home/index.html",
//   "/pages/home/index.js",
//   "/pages/profile/index.html",
//   "/pages/skills/index.html",
//   "/pages/work/index.html",
// ];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request, { cacheName: CACHE_NAME }).then((response) => {
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName != CACHE_NAME) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
