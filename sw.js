importScripts('/2017-christmas-card/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "2017-christmas-card",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/2017-christmas-card/_nuxt/app.d5e47d4c70b43334c9c7.js",
    "revision": "4fecefdb98d62699199ae1523c5e2f47"
  },
  {
    "url": "/2017-christmas-card/_nuxt/common.2a3739244330805eb863.js",
    "revision": "2a51b9485a2f67c689e44d4b70d5dcd8"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/family.36c4dd9.jpg",
    "revision": "36c4dd9b7a1fa8c42c9ee611f411a7a5"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/fruckles.5f65bca.jpg",
    "revision": "5f65bcad75ef36055a012b9ab009f716"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/kiddo-age.96ca282.jpg",
    "revision": "96ca282e18c53312163abf40d34820fa"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/kiddo-and-mom.fb57fc6.jpg",
    "revision": "fb57fc61e3b5b1a51439907b212f2c8e"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/kiddo-and-sweets-logo.3bf04a1.png",
    "revision": "3bf04a1471570e75e8ab7a51f5df64ac"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/kiddo-baseball.581326e.jpg",
    "revision": "581326ee183fcf1a7491a557e8dd0629"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/kiddo-grade.61da8e2.jpg",
    "revision": "61da8e2d1a946b9d83103533e2b3bcf1"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/sweets-age.9deaf0f.jpg",
    "revision": "9deaf0fc197edda759bf07e4df7a0c5f"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/sweets-and-dad.4ef7bd8.jpg",
    "revision": "4ef7bd8e6a497076f7327b4be20e09dd"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/sweets-dance.7e6555e.jpg",
    "revision": "7e6555e8fe5ed9d4bc927fc0f9ed89d9"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/sweets-grade.df743c3.jpg",
    "revision": "df743c3feefd331a3fa7bb22108a216f"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/the-finish-line.061a4cc.jpg",
    "revision": "061a4cce0f4bac30b98c338f15872368"
  },
  {
    "url": "/2017-christmas-card/_nuxt/img/turn-around.89dab88.jpg",
    "revision": "89dab88000590ce86771e0580a63eb6e"
  },
  {
    "url": "/2017-christmas-card/_nuxt/layouts/deadend.251df53e2073344dbb7a.js",
    "revision": "0ad9c3ac07dde2c5179672f52ce3ea26"
  },
  {
    "url": "/2017-christmas-card/_nuxt/layouts/default.66e15ad7ece02cb722d2.js",
    "revision": "93cb47d61da842df77db8a3a298d5f1c"
  },
  {
    "url": "/2017-christmas-card/_nuxt/layouts/home.7d9e2d6de9d6b8f489e1.js",
    "revision": "ef23024f62524976dd4f9cc034c5b12a"
  },
  {
    "url": "/2017-christmas-card/_nuxt/manifest.adaadbebdfa33b57de0b.js",
    "revision": "9e794cf68d3a82309f46c7149634f10d"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/a-duck-in-the-forest.90975a65f203fe39abf0.js",
    "revision": "fba28cbe4e459cb33637ad0a3f94a1ba"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/bearly-difficult-riddle.f104b1b5ba0ae4bcdddf.js",
    "revision": "e6fb96898e2e28735489dd3652e99801"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/bridges-buttons-and-baseball.a983ee8f69604573f723.js",
    "revision": "105695470439c2c18fa0ae16c81c0804"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/dad-and-sweets.6b8ed44c3cae1d3d4493.js",
    "revision": "a3768f2906b3179229046da298c76dd6"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/desert-desserts.a1e3c9ffce5a0e9ba6dc.js",
    "revision": "27c76554427a80c82d8fcca431d2618a"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/heading-across.7a85dca94729a8bcdc60.js",
    "revision": "ee449a155c26499faaab3b7140b73c11"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/heading-through.dc11f791b6ec684cf3bc.js",
    "revision": "2ef4ba63335e89cddf8f3708038d8e8c"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/hop-skip-and-jump.6ca782249b39e7c315fb.js",
    "revision": "c0e22b323299ae52ae6d1fb8b484c901"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/ice-ice-baby.38c590279445563c2ac7.js",
    "revision": "6be4d4c6314f7b1f6fb7897fa201430b"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/index.7f37c1f46928ac736512.js",
    "revision": "f072cd7365198267facfe0d79432f891"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/landing-on-skoor.c0538a3996593045e584.js",
    "revision": "ea1ec9c4ca6296582192600a1363a96b"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/letters-where-your-mouth-is.860fabadd5337cd9cc43.js",
    "revision": "e699cad678dcc082545a6bc754cd0c56"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/math-mountain.a24f648cbef46b9b10f1.js",
    "revision": "abce6a5c8e829fe1832c64971d0f4bb0"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/mom-and-kiddo.3eca90ed9c7b859202f6.js",
    "revision": "dcbb530183dde2984902b10263ec3cb3"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/siding-and-sliding.373bbc813b3b45abddb5.js",
    "revision": "6a6be4011c3e79b6157b258ee121892c"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/spell-you-later.83231f2c9a6b7871ce9a.js",
    "revision": "536a8e1c0eea039f5dc4c0f56417405e"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/the-finish-line.9a6a4fc70361805d2ba0.js",
    "revision": "0a4ee4dd154a1bc59093822fc67acd21"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/turn-around.e487e8902eea69875835.js",
    "revision": "44b798fa447b75d07a7777f00016b02a"
  },
  {
    "url": "/2017-christmas-card/_nuxt/pages/welcome-to-skoor.ccb16a754894213e2107.js",
    "revision": "47e5dadc5703651a3495775d0d193272"
  }
])


workboxSW.router.registerRoute(new RegExp('/2017-christmas-card/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/2017-christmas-card/.*'), workboxSW.strategies.networkFirst({}), 'GET')

