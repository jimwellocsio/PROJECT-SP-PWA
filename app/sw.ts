import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { CacheOnly, Serwist } from "serwist";
import { registerRoute, NavigationRoute } from "workbox-routing";
import { createHandlerBoundToURL } from "workbox-precaching";
import precache from "../precache-manifest.json";
import { getCacheControlHeader } from "next/dist/server/lib/cache-control";

// This declares the value of `injectionPoint` to TypeScript.
// `injectionPoint` is the string that will be replaced by the
// actual precache manifest. By default, this string is set to
// `"self.__SW_MANIFEST"`.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const serwist = new Serwist({
  // precacheEntries: [
  //   // ...precache as PrecacheEntry[],
  //   ...self.__SW_MANIFEST || [] // This will be replaced by the actual precache manifest
  // ],
  precacheEntries: self.__SW_MANIFEST,
  precacheOptions: {
    // ignoreURLParametersMatching: [/.*/],
    cleanURLs: true,
  },
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    {
      matcher: ({ url }) => url.pathname.startsWith("/_next/static/"),
      handler: new CacheOnly(),
    }
  ]
});

serwist.addEventListeners();