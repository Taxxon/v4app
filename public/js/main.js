// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('/sw.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
  }, function() {
    console.log('CLIENT: service worker registration failure.');
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}

// presentation showHide
function showHide(eId) {
    'use strict';
    var all = document.getElementsByTagName('div');
    var el = document.getElementById(eId);
    if (el.hidden === true) {
        for (var i = 0; i < all.length; i++) {
            all[i].hidden = true;
        }
        el.hidden = false;
    } else {
        el.hidden = true;
    }
}

// element onclick

window.onload = function() {
    'use strict';
    var all = document.getElementsByTagName('div');
    for (var i = 0; i < all.length; i++) {
        all[i].hidden = true;
    }
};