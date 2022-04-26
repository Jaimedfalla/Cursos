const VERSION = "v1";

self.addEventListener('install',event =>{
    event.waitUntil(precache());
});

//Se agrega evento para buscar en la primer cache todas las peticiones a back
self.addEventListener('fetch',event =>{
    const request =event.request;
    if(request.method !=="GET"){
        return;
    }

    //Listener para guardar y buscar en caché un request
    event.respondWith(responseCached(request));

    //Listener para actualizar la caché con los archivos de la aplicación en el cliente
    event.waitUntil(updateCache(request));
})

async function precache(){
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/scripts/index.js',
        '/scripts/MediaPlayer.js',
        '/scripts/plugins/AutoPlay.js',
        '/scripts/plugins/AutoPause.js',
        '/assets/BigBuckBunny.mp4'
    ]);
}

async function responseCached(request){
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response =  fetch(request);
    return cache.put(request,response);
}