/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["./dist/css/app.css","bb0b925514a2d0a034758c1b8ea7f929"],["./dist/data/pets.json","df25498a67371f8d99b3fb3071c284f1"],["./dist/images/icons/icon-128x128.png","cdb69d328ae07061bae39524df2e2017"],["./dist/images/icons/icon-144x144.png","5a4d4cb5ba884bf64a29f9912cd312b1"],["./dist/images/icons/icon-152x152.png","996adf5e4b0110e5cd10d7cf147eb9dc"],["./dist/images/icons/icon-192x192.png","ec7b46d8c1797f892f7ebbd5c3c4f175"],["./dist/images/icons/icon-256x256.png","51e9171fd6aa4aaa50704f66abfba342"],["./dist/images/icons/icon-32x32.png","666bc70f298c3ce109a713fd112059b6"],["./dist/images/icons/icon_reload.svg","ea8d411b51f6c951917e0884c0fea554"],["./dist/images/pets/Bailey-523832647.jpg","eedcc3073a60421f4894ebeec98f4237"],["./dist/images/pets/Bailey-523832647_tn.jpg","6fccfe74393effe6b11a3618f90032ee"],["./dist/images/pets/Casper-178870793.jpg","dcdcf19c9a4b22bb9baa39c0395f4d9a"],["./dist/images/pets/Casper-178870793_tn.jpg","fd7655e977dd6684e7bb589b0f3c1e2c"],["./dist/images/pets/Chip-519252509.jpg","943b1b064f03748b2b354db29e77c2d2"],["./dist/images/pets/Chip-519252509_tn.jpg","c35b82d4c91c0e52607705d4f21ba234"],["./dist/images/pets/Chyna-545429720.jpg","556e7118e79cba84cb0694d878f78a0c"],["./dist/images/pets/Chyna-545429720_tn.jpg","493d11d294ff2c8f97517ad1239cff2c"],["./dist/images/pets/Cosmo-481057312.jpg","1f24ef2d8bfae12c961e7e98f2e19056"],["./dist/images/pets/Cosmo-481057312_tn.jpg","ff53b9e8983b439975cd7dc8a12801d7"],["./dist/images/pets/Felix-591830956.jpg","3670e6f936119359df8fc1411c5dfda1"],["./dist/images/pets/Felix-591830956_tn.jpg","bd6d2f8d4525e747e6cc5f47c6de1554"],["./dist/images/pets/Fluffy-483561506.jpg","64ee5d014458dbd8ebccef906cdcbd45"],["./dist/images/pets/Fluffy-483561506_tn.jpg","90bb66b3687931435435d8550485c533"],["./dist/images/pets/Kiko-478801178.jpg","0be1b762be2e1e7b3f5e3539a0a78c47"],["./dist/images/pets/Kiko-478801178_tn.jpg","197aeed7399a29bc82396fa17c045988"],["./dist/images/pets/Lucky-519705168.jpg","6c42a6471e160bc75cba51905c4785df"],["./dist/images/pets/Lucky-519705168_tn.jpg","4701cb64dae8a4fdb3a34becd9f86527"],["./dist/images/pets/Millie-586349302.jpg","cacecbccd535b40e5d0282384003c06c"],["./dist/images/pets/Millie-586349302_tn.jpg","3accca233fa49153cb0d1ba170982e19"],["./dist/images/pets/Nadalee-601919350.jpg","b29147efea08fd8fcf5f77cf4463f8ae"],["./dist/images/pets/Nadalee-601919350_tn.jpg","eef14f6898793f76e6aeb2d79a87ba96"],["./dist/images/pets/Nugget-499158128.jpg","7b7cdbd2c090b90a1772e4204ea99bd8"],["./dist/images/pets/Nugget-499158128_tn.jpg","6d11678ae28d0260a3adabb6046d75f2"],["./dist/images/pets/Oddball-534210612.jpg","e75614fd9307cf4a9825be070559e7aa"],["./dist/images/pets/Oddball-534210612_tn.jpg","b22cf141a1b1b3090eedb6a43bde403f"],["./dist/images/pets/Pax-487576086.jpg","53881978d7fb84d492484e1b550ec1e8"],["./dist/images/pets/Pax-487576086_tn.jpg","7e63c023df03287aeac41cb4f718195c"],["./dist/images/pets/Pepe-505301170.jpg","b9e616c7434c3d6e8ef30ef4ba5ac126"],["./dist/images/pets/Pepe-505301170_tn.jpg","4b83e47e641cfdb4e240284814c5a438"],["./dist/images/pets/Rio-139983615.jpg","38a621d36568a930894ee0cb76ddd209"],["./dist/images/pets/Rio-139983615_tn.jpg","09566c9f438b860542ef5ac65290c4f7"],["./dist/images/pets/Sami-163271312.jpg","b039129a7bf5ffe1822be81e3cbfb4a2"],["./dist/images/pets/Sami-163271312_tn.jpg","9213d0db470e550b7aa5e7ba8f305bdb"],["./dist/images/pets/Scooter-587954386.jpg","9fb5bebf34efac2ab45475d7a24eab4b"],["./dist/images/pets/Scooter-587954386_tn.jpg","99fd3f70d6d2025e3383452d5c5b3c07"],["./dist/images/pets/Scout-482669440.jpg","42f1dc080a5696cf95e1bbfc9793049d"],["./dist/images/pets/Scout-482669440_tn.jpg","dcc250bcd2e5c693c03cf6cd278ab3bb"],["./dist/images/pets/Shadow-591817094.jpg","bd09daa0dc2e12265b02f937dd221684"],["./dist/images/pets/Shadow-591817094_tn.jpg","7392013d9542fae5a9f15be46ad77cec"],["./dist/images/pets/Squiggles-72970152.jpg","ee8c109994bc96fbd487661f36c71cef"],["./dist/images/pets/Squiggles-72970152_tn.jpg","9518d179d8bcaf2e17039ec7c87a8b89"],["./dist/images/pets/Stich-56385517.jpg","836e3c5cc0f64a5b67a5f937e2a38352"],["./dist/images/pets/Stich-56385517_tn.jpg","d3cf5bc1da721eca674072ba47ebb942"],["./dist/images/pets/Tibbs-598156630.jpg","ba45f3064c9f03a0da4d65a6cac4f596"],["./dist/images/pets/Tibbs-598156630_tn.jpg","6e9f28b0c1fcbb79e826a6b6c188a265"],["./dist/images/pets/Wesley-122458883.jpg","9e57e8725fe99f8e54bdb3e19b75a41c"],["./dist/images/pets/Wesley-122458883_tn.jpg","83a15964ea89aa2be8cd96124f48fde5"],["./dist/images/pets/Zera-599775030.jpg","11ed8311a4d7335aa3c20b116aaa0089"],["./dist/images/pets/Zera-599775030_tn.jpg","ea483d790ae30ccd7eb9eec86405fc09"],["./dist/images/wisdompetlogo.svg","2a85521091345ea9784d5cee7a883806"],["./dist/js/app.js","536663d7dcec7ec7398b27510b52df85"],["./dist/manifest.json","0dd4cbea44b5e8fca698793ba9f0b39c"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







