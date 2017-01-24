// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles/main.css',
        '/js/main.js'
      ]);
    })
  );
})

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
        });
        return response;
      });
    }).catch(function() {
      return caches.match('');
    })
  );
});