'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bb0456694e071dab61fa3ee90b4265df",
"index.html": "5881014b123a061f6611654a493cfc05",
"/": "5881014b123a061f6611654a493cfc05",
"main.dart.js": "6fad8facb60e7381e4f563200ec0090f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a94c060e3d9ccaeda50e6b1cf08d00fb",
"assets/AssetManifest.json": "fec113a7ea39872d3d2be8670601e0c5",
"assets/NOTICES": "a4d0165aad9f1388331b9b669772d0f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "039c60b403523308056699bbb11ae199",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/super_chat/assets/group/group_unselect.png": "dc1b100d9bcc7b00291ebb7e9c495720",
"assets/packages/super_chat/assets/group/icon_group_name_cancel.png": "e1fbaeb250441a1f8a6a63d0c081f358",
"assets/packages/super_chat/assets/group/icon_group_notification_edit.png": "1339e6717f5574a45d049e721062d17d",
"assets/packages/super_chat/assets/group/group_invite_friends.png": "7fbe8e6af24d92938ade549437620a71",
"assets/packages/super_chat/assets/group/group_search.png": "2452df1de1848c0880efcc78478e7bc8",
"assets/packages/super_chat/assets/group/btn_switch_off.png": "c3002a73a86639670d599609f2108d47",
"assets/packages/super_chat/assets/group/group_clean_icon.png": "237f372ab613cbfa67cb6a2afa6de739",
"assets/packages/super_chat/assets/group/group_right_arrow.png": "eee81eec9c2351331341ecbba7c0cad5",
"assets/packages/super_chat/assets/group/group_photo.png": "529fb3961adbff4093cbdcd95661fc46",
"assets/packages/super_chat/assets/group/group_close_icon.png": "e1fbaeb250441a1f8a6a63d0c081f358",
"assets/packages/super_chat/assets/group/btn_switch_on.png": "15ccdc635b714f22f2689c9c83cf4573",
"assets/packages/super_chat/assets/group/group_select.png": "9e1482eea69c421277ecaa57a75951aa",
"assets/packages/super_chat/assets/group/group_write.png": "93fde586a0ada722a6057acd3b15b7f0",
"assets/packages/super_chat/assets/group/group_user_id.png": "5c40858dc17ec28337c332e52ddce284",
"assets/packages/super_chat/assets/sex/sex_male.png": "b407a24508538555a338ecb06780eb51",
"assets/packages/super_chat/assets/sex/sex_female.png": "cc207c69f97d6513f30fec9d74f5e757",
"assets/packages/super_chat/assets/message/icon_sent.png": "eb018dcb45a2cfe288a9c6872f050e9d",
"assets/packages/super_chat/assets/message/icon_message_arrow.png": "7bf23650463f4973ecd0baeb4493c5ec",
"assets/packages/super_chat/assets/message/icon_more.png": "567556a19de51f0bf873ddd146edbd8c",
"assets/packages/super_chat/assets/message/icon_associates.png": "48d48dd46ffd9f95872eb33af4ef3928",
"assets/packages/super_chat/assets/message/ico_photograph.png": "9987e445bbff09dc9c580a88f1d88ca2",
"assets/packages/super_chat/assets/message/ico_road.png": "ad2c3b6d6b0ba8ae23240982bde78151",
"assets/packages/super_chat/assets/message/ico_photo.png": "c112a3d6bd0bb802435b5b01c15e27b9",
"assets/packages/super_chat/assets/message/ico_loading.png": "401e0a92aeda7239a4fb7ca5bbb2babd",
"assets/packages/super_chat/assets/message/ico_add.png": "b5e27517434215923e72f659f653b9e7",
"assets/packages/super_chat/assets/message/ico_remind.png": "56ad84a324fe0ad6a0f2582b8235b4a8",
"assets/packages/super_chat/assets/message/ico_remind_2.png": "b6b9197b24ab3f19511cf3c609b08afa",
"assets/packages/super_chat/assets/message/ico_send.png": "e48a143649af23ca66fbd2fb2f504f99",
"assets/packages/super_chat/assets/navi_bar/navi_back_icon.png": "1bb6cbcd0aab1f216b5490150f025ecc",
"assets/packages/super_chat/assets/navi_bar/navi_submit_icon.png": "225c2d7ab8bcaf562b5e5ae7a2299965",
"assets/packages/super_chat/assets/navi_bar/navi_add.png": "7a0d667fe3dbae4fe5e7acc3af57bc84",
"assets/packages/super_chat/assets/navi_bar/navi_more_icon.png": "5700a2f7d3fa702066b67a652c5cbc3a",
"assets/packages/super_chat/assets/vip_level/vip_level_1.png": "51d78be813ce90ef946a281ad38dc069",
"assets/packages/super_chat/assets/vip_level/vip_level_2.png": "fc4fe25fb595848044f1b36dc485ffcf",
"assets/packages/super_chat/assets/vip_level/vip_level_3.png": "f1fa7b98536ae9280617fd2d893a646a",
"assets/packages/super_chat/assets/vip_level/vip_level_7.png": "42bb92fbcbbd7a1ec93958c2749cd0a9",
"assets/packages/super_chat/assets/vip_level/vip_level_6.png": "6ea4dea265ffd5bc757a6ba6201ae456",
"assets/packages/super_chat/assets/vip_level/vip_level_4.png": "6e175843105682c981926099b930efc9",
"assets/packages/super_chat/assets/vip_level/vip_level_5.png": "a5ce6a5eda3219420ea5c076049d9851",
"assets/packages/super_chat/assets/vip_level/vip_level_8.png": "bb54c940eaad2847ab3d22c0e3551f94",
"assets/packages/super_chat/assets/vip_level/vip_level_9.png": "43426f47be55ac12e7f9fafa93f00ff8",
"assets/packages/super_chat/assets/vip_level/vip_level_10.png": "22ede6a20a29f0a103ff7decc6d77d7a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "1245353d875d2726038ebb7986c18d8d",
"assets/fonts/MaterialIcons-Regular.otf": "36fdc20c2f0b6d48bbbe8fc71188dc2d",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
