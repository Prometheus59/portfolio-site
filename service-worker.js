"use strict";var precacheConfig=[["/index.html","de5bf34e5d594355b16e8e50392e5726"],["/static/css/main.7c9768f6.css","5de26e9cc98bf47a5759d54146e7d4ba"],["/static/js/main.9499ab79.js","3d893df77dbd11d6672b4632625b40c5"],["/static/media/CSS3.b4c13110.png","b4c1311000e84f9edc5c386ae803dc2e"],["/static/media/WeCanInsurace.7f4b4762.png","7f4b47623dcf77aef9932900176e156a"],["/static/media/c.e79e5dbd.png","e79e5dbde23109879fa90860aa73499c"],["/static/media/cv-generator.d3e19e7e.png","d3e19e7e3d87eaa1fe5d6624705c19ef"],["/static/media/elexicon-energy.381ed975.png","381ed975fdf44849a946b0524f5f77bf"],["/static/media/html5.664a8c00.png","664a8c00ef526bf33edf55808601d461"],["/static/media/java.c9020570.png","c902057018a1860dd96991ac4a4c9d51"],["/static/media/jslogo.9ca4af2b.png","9ca4af2b4abc698210e7e909a853890b"],["/static/media/lucid-platform-cover.13555097.png","13555097a77b61723d7c2701a97956ff"],["/static/media/news_pic.f2c87a95.jpg","f2c87a9552cd68d5a6c246e3fcd3718d"],["/static/media/node.f8dab57d.png","f8dab57d048fabd69ea16c67e1615b86"],["/static/media/psql.6a710d4a.png","6a710d4afd62f00fb7032feb8fb40bb7"],["/static/media/python.86bce2e2.ico","86bce2e27b68e3ea5206145eb09b2674"],["/static/media/react.90552fc5.png","90552fc53de18398a934d32aec962234"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});