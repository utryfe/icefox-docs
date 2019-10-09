/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9fd64db14461d03d8e44a175badde5c3"
  },
  {
    "url": "assets/css/0.styles.cbc4bcb1.css",
    "revision": "fc8c7e634eb484837f45d9c22769cbb7"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/build-command-deploy.471d6c91.png",
    "revision": "471d6c91d69c4493a8f3ce3f5f486759"
  },
  {
    "url": "assets/img/build-command-stage.f485f325.png",
    "revision": "f485f325da7062907eb463d79d042cd5"
  },
  {
    "url": "assets/img/build-completed.37b53845.png",
    "revision": "37b53845b9c5fd25b98730d78c591554"
  },
  {
    "url": "assets/img/build-info-index.caf8f56a.png",
    "revision": "caf8f56a3af4973a35b79570f3206296"
  },
  {
    "url": "assets/img/build-info-router.ce219a5d.png",
    "revision": "ce219a5db8a65082e226427292088e66"
  },
  {
    "url": "assets/img/build-legacy.c5bc3be2.png",
    "revision": "c5bc3be2b0f1214a9904da4430fae476"
  },
  {
    "url": "assets/img/build-preprocess.209402b8.png",
    "revision": "209402b8636647346f6b86da360d1bdf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5e8c0265.js",
    "revision": "5112c14277e7d130dc72541f3adf297b"
  },
  {
    "url": "assets/js/11.b6872ef1.js",
    "revision": "075abe8393f726df0016e2d43b7bc64d"
  },
  {
    "url": "assets/js/12.6499d39a.js",
    "revision": "41e825c0eab52a48ad5a70b67f2f059f"
  },
  {
    "url": "assets/js/13.0f6b09b3.js",
    "revision": "7df02c135fb4e45e9b5db4fdde3e66bb"
  },
  {
    "url": "assets/js/14.6f312275.js",
    "revision": "768d4da0bfc52edfa9059eba2e73a87c"
  },
  {
    "url": "assets/js/15.7f7a4725.js",
    "revision": "4bde726d4ae4466c1f0d5cbd35c7316c"
  },
  {
    "url": "assets/js/16.9352f9b0.js",
    "revision": "ecaf7bec677dbf5611b4575ba7b73e7d"
  },
  {
    "url": "assets/js/17.63236d26.js",
    "revision": "a55daaa60a8b4db7b5154a42c9e52a29"
  },
  {
    "url": "assets/js/18.dc99ea95.js",
    "revision": "0db3c8433c3f907139eef128ad66dc72"
  },
  {
    "url": "assets/js/19.5c685458.js",
    "revision": "c6af1f4fa7636722fa52b73f3da9d164"
  },
  {
    "url": "assets/js/2.2c5b0720.js",
    "revision": "ba61a7530553b2441f08abd9dd0f73f7"
  },
  {
    "url": "assets/js/20.5ea4e7d9.js",
    "revision": "06a9bd8a7cd9d819d6bc22198f8e373f"
  },
  {
    "url": "assets/js/21.394e4747.js",
    "revision": "d4875f5c5d23803f2b9168468044ff3f"
  },
  {
    "url": "assets/js/22.24bdb0fb.js",
    "revision": "5e06706a2401d86938bca0558374c414"
  },
  {
    "url": "assets/js/23.55217ea0.js",
    "revision": "f705308d9a2f318d391b51077f81fe83"
  },
  {
    "url": "assets/js/24.7efcb354.js",
    "revision": "dafcab93ea134911efa5a61d0690cdb3"
  },
  {
    "url": "assets/js/25.a414cf5a.js",
    "revision": "85ac2dbcd68a3736694b1e8067180742"
  },
  {
    "url": "assets/js/26.f5a54f5f.js",
    "revision": "ff32f0666450fea26842180553a6be12"
  },
  {
    "url": "assets/js/27.5fe17a91.js",
    "revision": "f336bc14c7afe7916400c2a09a9390fd"
  },
  {
    "url": "assets/js/3.5be415c3.js",
    "revision": "a0135dab82aff056e8b4691b761a7f1d"
  },
  {
    "url": "assets/js/4.f29072a0.js",
    "revision": "6156a32a1021abfe7c4d8797a6806ab3"
  },
  {
    "url": "assets/js/5.76400afa.js",
    "revision": "7c28d3e0101241e3dc6225ddd92a8a30"
  },
  {
    "url": "assets/js/6.fe0024a0.js",
    "revision": "028618d9ed6588ecde133a01399c2374"
  },
  {
    "url": "assets/js/7.7a1dff7c.js",
    "revision": "1802d5ada5f7e08650d08269afe160bd"
  },
  {
    "url": "assets/js/8.96da46b8.js",
    "revision": "ddc89778ffaf94171506df80d65a2214"
  },
  {
    "url": "assets/js/9.3c00e0bf.js",
    "revision": "3a7103c8f959598826ee7755e09176e9"
  },
  {
    "url": "assets/js/app.a228c8b8.js",
    "revision": "51c74f160421da34a0b325d7470e75fe"
  },
  {
    "url": "component/aside-menu.html",
    "revision": "b93e31ccab8098d4032421f7dfa135b1"
  },
  {
    "url": "component/chart.html",
    "revision": "0979e84441aab3e1b9d92e2ac767a21f"
  },
  {
    "url": "component/customize-theme.html",
    "revision": "1b4ae6a241bad847a2b77b9cb057f163"
  },
  {
    "url": "component/date-picker.html",
    "revision": "51eea882641ab780fa3b59e45deb8f1d"
  },
  {
    "url": "component/installation.html",
    "revision": "f20e22c5a790a26fffddfd62104423a1"
  },
  {
    "url": "component/layout.html",
    "revision": "d2684681ba5e0da66dd27e8c8fd9741b"
  },
  {
    "url": "component/page-filter.html",
    "revision": "015927767152705f339ebe6361f79cf8"
  },
  {
    "url": "component/page-table.html",
    "revision": "30c77887fc1b72c5600904e60d5bf06b"
  },
  {
    "url": "component/tabs-view.html",
    "revision": "f44f8ef21f176dc17244eed0388a1f90"
  },
  {
    "url": "config/application.html",
    "revision": "149efd92299055122f47eebe5c0fb5d1"
  },
  {
    "url": "config/builder.html",
    "revision": "4a3c5ad151f628c843081896a44cb986"
  },
  {
    "url": "config/plugins.html",
    "revision": "fb42c42a765b05ab9859a01b7a2f285f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9f2dd2dd2cd5d132340436996d41ceeb"
  },
  {
    "url": "guide/introduce.html",
    "revision": "9128c214a970cb0de27088b07a9dd111"
  },
  {
    "url": "guide/mock.html",
    "revision": "761778df2975dac692e2c8efeba1a0b3"
  },
  {
    "url": "guide/request.html",
    "revision": "e8d17aedf87720af3ec6f4403fdbedab"
  },
  {
    "url": "guide/routing.html",
    "revision": "cd5ab14758fea8b8e05e902f9e4a41cc"
  },
  {
    "url": "guide/store-module.html",
    "revision": "60ff01519ce75303d065c75d76f092b3"
  },
  {
    "url": "index.html",
    "revision": "60d2584162f1ec8b617b91f5d8e5ee05"
  },
  {
    "url": "logo.png",
    "revision": "f6d57eee0aa801b00bd3ae041d1d14d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
