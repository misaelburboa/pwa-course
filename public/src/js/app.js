if ('serviceWorker' in navigator) {
    //register the serviceWorker
    navigator.serviceWorker
        .register('/sw.js')
        .then(function() {
            console.log("Service Worker Registered!");
        });
}