const cacheName = 'events-cache';

self.addEventListener('install', event => {
  event.waitUntil(
      caches.open(cacheName).then(cache => cache.addAll([
        '/static/js/bundle.js', '/static/js/0.chunk.js', 
        '/static/js/main.chunk.js', '/static/js/1.chunk.js', 
        '/main.88774bf0f141e0cd423f.hot-update.js',
        '/material.min.css', '/material.min.js',
        '/index.html' , '/', '/bootstrap.js',
        '/offline.html'
      ]))
  )
})

self.addEventListener('fetch', event => {
    console.log(event.request.mode);

    if(event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .catch(() => {
                  return caches.open(cacheName)
                      .then((cache) => {
                        return cache.match('offline.html');
                      });
                })
        )}
    else {
        event.respondWith(
            caches.match(event.request).then(response => {
                if(response){
                    return response;
                }
            }).catch(() =>{
                fetch(event.request)
                    .catch(() => {
                        return caches.open(cacheName)
                            .then((cache) => {
                        return cache.match('offline.html');
                    })
            })
        })
        )}})
