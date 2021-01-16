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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d0e908c41e2269ace9d6f06ecc5f9431"
  },
  {
    "url": "api/cli.html",
    "revision": "12d587a7dd10913955640497e81b0303"
  },
  {
    "url": "api/node.html",
    "revision": "83eff5957bcb3c0b369e9ceb9371860c"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.3afc2e57.css",
    "revision": "3f2b00b4433d7146da2671ae973e6a34"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.48356a6c.js",
    "revision": "97de9a777f0d2f7dab105577b2a94fb3"
  },
  {
    "url": "assets/js/100.4db9db0f.js",
    "revision": "90e1349c7338346c6607cbe4fa5f7fbe"
  },
  {
    "url": "assets/js/101.cddaa7ef.js",
    "revision": "a21af672c7feb38547caf642a84d5712"
  },
  {
    "url": "assets/js/102.45bfa9ce.js",
    "revision": "c900af34cdae5c4f36f264f6709c9eb0"
  },
  {
    "url": "assets/js/103.74abc885.js",
    "revision": "95995831bfd6e093f7a41dc20f051bd8"
  },
  {
    "url": "assets/js/104.44cacf83.js",
    "revision": "d832674e74048a2359a0c5b4b6d19061"
  },
  {
    "url": "assets/js/105.65562c50.js",
    "revision": "c88795cd389ec780b278b4b49ce0019a"
  },
  {
    "url": "assets/js/106.ff3575c1.js",
    "revision": "387ac58023aa206aa1fbb705f148796d"
  },
  {
    "url": "assets/js/107.1bc0e46e.js",
    "revision": "16130a8ea25b00c5732248801cdda343"
  },
  {
    "url": "assets/js/108.414b0bbe.js",
    "revision": "36ac8ebd9c4a3ac6ceeb90f06a6a5033"
  },
  {
    "url": "assets/js/11.29cab98e.js",
    "revision": "f70a02c1589c087178f44f85b0821386"
  },
  {
    "url": "assets/js/12.cda4d89e.js",
    "revision": "c8e4738ddddc74bdc9ccfe3d871f8c5b"
  },
  {
    "url": "assets/js/13.428e2f97.js",
    "revision": "ea397a4f304d07c9137ca60a5b584591"
  },
  {
    "url": "assets/js/14.0648b3ec.js",
    "revision": "1e361bd3a4fe974f1f5b3e5aa062d912"
  },
  {
    "url": "assets/js/15.5af351cf.js",
    "revision": "6fd8993efd7713dd5c025d0d8ef822bd"
  },
  {
    "url": "assets/js/16.d4e6c4ed.js",
    "revision": "6990004411b064e063d61d875af5f660"
  },
  {
    "url": "assets/js/17.1a80aa86.js",
    "revision": "0f5009062d108622f23df0ff098332c2"
  },
  {
    "url": "assets/js/18.9d19dab4.js",
    "revision": "570d8bb85fb6feb0d43d09c8b8fb1349"
  },
  {
    "url": "assets/js/19.25b6140f.js",
    "revision": "21049425c2a1e646a4e00f74d67a1e2d"
  },
  {
    "url": "assets/js/20.5fc0d287.js",
    "revision": "cd8c2d17554c3d5ccac7620635b16b02"
  },
  {
    "url": "assets/js/21.34214b38.js",
    "revision": "4d566838a53a36b8fecf3b8a63a19a21"
  },
  {
    "url": "assets/js/22.fecdb481.js",
    "revision": "f40b3bea1facde19394cb5c78f016b92"
  },
  {
    "url": "assets/js/23.dd04dbd6.js",
    "revision": "4b5d40de7ca7103a2281637a3346c29b"
  },
  {
    "url": "assets/js/24.274c3812.js",
    "revision": "c1eb6c7dd062d57816ef6fc46382e219"
  },
  {
    "url": "assets/js/25.f56f29bc.js",
    "revision": "1105fa7f96ce3f090ecf3fb80fda9558"
  },
  {
    "url": "assets/js/26.d92a64c4.js",
    "revision": "57ca863fd4d1dd349fcd874beb821ad0"
  },
  {
    "url": "assets/js/27.1a481474.js",
    "revision": "eed30712e14693fa7bc21f196532e1ac"
  },
  {
    "url": "assets/js/28.ff3e1f9d.js",
    "revision": "8f716151bc050f2d9871b92657c183e4"
  },
  {
    "url": "assets/js/29.4072f1ea.js",
    "revision": "e498d6be205dbacda397d130505ccb32"
  },
  {
    "url": "assets/js/30.00abca4f.js",
    "revision": "8020abdd8f16050109e3a07284e66992"
  },
  {
    "url": "assets/js/31.8dcebf78.js",
    "revision": "3e763559171c0be677ef6a3a106be4f9"
  },
  {
    "url": "assets/js/32.bfb43445.js",
    "revision": "b0c5fb280abf1bf892aa88cc64379a9e"
  },
  {
    "url": "assets/js/33.6f554b38.js",
    "revision": "0ae6036fcd7dd35eb42602382ca1cb14"
  },
  {
    "url": "assets/js/34.57411109.js",
    "revision": "aff82037ee306a8120e3bbba7f0c6b51"
  },
  {
    "url": "assets/js/35.34457121.js",
    "revision": "b955ffb2242a1fca532033ed910908ef"
  },
  {
    "url": "assets/js/36.e33fa51f.js",
    "revision": "0cf963e2cb024cc1d4030cd7ec354d0f"
  },
  {
    "url": "assets/js/37.9555539a.js",
    "revision": "d6818123faec87c6b6de578555ad9e4e"
  },
  {
    "url": "assets/js/38.f7a7b49f.js",
    "revision": "72bb9f79d718ae86f49a9eb5259d9424"
  },
  {
    "url": "assets/js/39.73fc0039.js",
    "revision": "e914f6af0c6be1a5f41689e2e4f31780"
  },
  {
    "url": "assets/js/40.74072ff2.js",
    "revision": "0eca65f7852dfc68207644ced8aa9fd0"
  },
  {
    "url": "assets/js/41.24192f51.js",
    "revision": "51c2b50b0757705f61ae775029cc7d3a"
  },
  {
    "url": "assets/js/42.8cf09c26.js",
    "revision": "3b7d30e02b661a5bff61031375a2044b"
  },
  {
    "url": "assets/js/43.abc6e2e3.js",
    "revision": "0950ce3f22f386354dd9fb11b1b65a21"
  },
  {
    "url": "assets/js/44.ad5785d0.js",
    "revision": "b5238f1f062bc07702238e96da5dc99c"
  },
  {
    "url": "assets/js/45.2e1d6184.js",
    "revision": "ddcbbe7023839b7b13a8d9d0b7e09ef1"
  },
  {
    "url": "assets/js/46.4b48825d.js",
    "revision": "d3d2e0bea332073effedfc7a2ad71c4f"
  },
  {
    "url": "assets/js/47.4dbcf955.js",
    "revision": "58dfa6d763210ce155fe49ac11141383"
  },
  {
    "url": "assets/js/48.b7cf8f6d.js",
    "revision": "ff7716f87a6c56f17113fad52119dffe"
  },
  {
    "url": "assets/js/49.1594436b.js",
    "revision": "c4143cd4c9d51c8bf28a44b1ea0fd10e"
  },
  {
    "url": "assets/js/5.f88d35e3.js",
    "revision": "69ef3079b8ca8f2d35bb2314d16af5f8"
  },
  {
    "url": "assets/js/50.1193383d.js",
    "revision": "ac911ec3e381ee850568317cf74f6c4b"
  },
  {
    "url": "assets/js/51.9c445291.js",
    "revision": "86e87c43faf5b14382f844df4d80b7d7"
  },
  {
    "url": "assets/js/52.a5720f34.js",
    "revision": "29e513eaedf7b9ce80869a5b2e952412"
  },
  {
    "url": "assets/js/53.02ee9a71.js",
    "revision": "421a18db02cb26a03a3688b395b7f81c"
  },
  {
    "url": "assets/js/54.e17bdd33.js",
    "revision": "65ab7519697bc7bad40fd252004eaa03"
  },
  {
    "url": "assets/js/55.1d9d991a.js",
    "revision": "786e65a0818b34dafaf85066bf0ae367"
  },
  {
    "url": "assets/js/56.d97a5c20.js",
    "revision": "56562425efa771334f8c751477bd75fe"
  },
  {
    "url": "assets/js/57.f763016f.js",
    "revision": "3a4c8367a91d6ac211425462d5ef953d"
  },
  {
    "url": "assets/js/58.c172befa.js",
    "revision": "99cb35663553fc1a7572c871d597ccfa"
  },
  {
    "url": "assets/js/59.9fbefc8e.js",
    "revision": "2070478004257f8731926545a9e81c4b"
  },
  {
    "url": "assets/js/6.c7b413ec.js",
    "revision": "0ffd50533398649b49e8c20c1f873966"
  },
  {
    "url": "assets/js/60.a0909697.js",
    "revision": "6f19ee585b06d3570cb5369594ae7c89"
  },
  {
    "url": "assets/js/61.4a8f6c33.js",
    "revision": "8460a0e2c325293ef56dde8bc8f43635"
  },
  {
    "url": "assets/js/62.d5beb3b3.js",
    "revision": "8d275c42565a6854e5fefe8530a1711f"
  },
  {
    "url": "assets/js/63.11b64626.js",
    "revision": "5eb3e22f62392c84c2daf0ddc3e9e972"
  },
  {
    "url": "assets/js/64.242476cf.js",
    "revision": "d2be1e4fd8186f1170933ac83f08d9e8"
  },
  {
    "url": "assets/js/65.c31e9fdc.js",
    "revision": "63a3edc787e8f0e6056fd9c83aa437bc"
  },
  {
    "url": "assets/js/66.6157b46e.js",
    "revision": "166ca3bfe3b1419bb5f07f70788ace7e"
  },
  {
    "url": "assets/js/67.27a39ca9.js",
    "revision": "8fc05a674d45448100f0dfdbae84e5c0"
  },
  {
    "url": "assets/js/68.58f7f230.js",
    "revision": "ee2aba71dd7f66d17cff611cb54896a7"
  },
  {
    "url": "assets/js/69.b1236c09.js",
    "revision": "de811909cb1c612d6feae46bd1e00100"
  },
  {
    "url": "assets/js/7.529546b4.js",
    "revision": "92d1f51a9b9f0998a27311818c1b4512"
  },
  {
    "url": "assets/js/70.fe2b22a6.js",
    "revision": "5cbe177df40582891687a94abc3e1637"
  },
  {
    "url": "assets/js/71.e39dca93.js",
    "revision": "b60dcae7a15b7d4294af7e2cd591a3b5"
  },
  {
    "url": "assets/js/72.8b65b57d.js",
    "revision": "f70365621d6f541c1319cd3670494db9"
  },
  {
    "url": "assets/js/73.1ade9731.js",
    "revision": "64305e00db7839ae39642dc1d7502524"
  },
  {
    "url": "assets/js/74.abf8484b.js",
    "revision": "86f5c01663656f518bdaccb5620cbed1"
  },
  {
    "url": "assets/js/75.0a1af3c3.js",
    "revision": "35c20075afcf86c4724334b2ade7081c"
  },
  {
    "url": "assets/js/76.a3682979.js",
    "revision": "7bd9b53edb1c164ade041f25c5749b48"
  },
  {
    "url": "assets/js/77.f53373e0.js",
    "revision": "9aa8b84e522b9497c833970cb05e6bf7"
  },
  {
    "url": "assets/js/78.5cdb696b.js",
    "revision": "0759e9655076e03e394c47adb930bc78"
  },
  {
    "url": "assets/js/79.514f32a5.js",
    "revision": "8b6add4f8b1c4f3fc3f8341d2d395177"
  },
  {
    "url": "assets/js/8.33de60da.js",
    "revision": "65930cc3f71e5221831cfbf801bce83e"
  },
  {
    "url": "assets/js/80.a861d300.js",
    "revision": "ac3decc2eeeb2890976eb91cd22d02fb"
  },
  {
    "url": "assets/js/81.2dd24220.js",
    "revision": "1b97cde8428b18c4f9b6d4b9c862f3c5"
  },
  {
    "url": "assets/js/82.ba469f86.js",
    "revision": "3f50c622f56fcc0c4587664b59265c0b"
  },
  {
    "url": "assets/js/83.3a66f75f.js",
    "revision": "c3695c11731a03e58480f1b2f3016cb4"
  },
  {
    "url": "assets/js/84.193a8edc.js",
    "revision": "e2af9ba91a08d5afe5572b8da830acf9"
  },
  {
    "url": "assets/js/85.9f083c76.js",
    "revision": "f958db5ca555b8f416ba23a505577dd1"
  },
  {
    "url": "assets/js/86.1da85662.js",
    "revision": "926ea6acfc728585a307969a84f3e630"
  },
  {
    "url": "assets/js/87.5f13d2f6.js",
    "revision": "58d29a2e914b95338216bee698003ffe"
  },
  {
    "url": "assets/js/88.945850a7.js",
    "revision": "a1adb6c350a0b48f3bde36fff163d96e"
  },
  {
    "url": "assets/js/89.e90ce37c.js",
    "revision": "f0e4c887f3c061e27dd1f761df45ea90"
  },
  {
    "url": "assets/js/9.0fd26fa0.js",
    "revision": "eb1b0c8bf1d4974f9939afa563a16329"
  },
  {
    "url": "assets/js/90.5921585d.js",
    "revision": "e8960aee3ab61a6254b8ef166e9f82bc"
  },
  {
    "url": "assets/js/91.6d855a5a.js",
    "revision": "45258834bcd1de2f9aa629e5aa1f60d1"
  },
  {
    "url": "assets/js/92.41ac5520.js",
    "revision": "6c2f43d57ae487521108d271cabcdf13"
  },
  {
    "url": "assets/js/93.eec2061e.js",
    "revision": "b6e1cc3dceb9337611a9220ed7a21abc"
  },
  {
    "url": "assets/js/94.f9d78f5a.js",
    "revision": "5f99acc4a5cd77ec2d691709e2fa5d95"
  },
  {
    "url": "assets/js/95.c1686ff5.js",
    "revision": "fa89d12093ccfe61bc2367bde5e33678"
  },
  {
    "url": "assets/js/96.d36c4ca3.js",
    "revision": "0840a01ff2c342cd1d71ad8586caa6be"
  },
  {
    "url": "assets/js/97.f4dedb2d.js",
    "revision": "d09a851334fb4c4989d164a9031e98fb"
  },
  {
    "url": "assets/js/98.ce26ae2b.js",
    "revision": "6f7274a7872f1a79a77e38c50adbfd47"
  },
  {
    "url": "assets/js/99.c143b393.js",
    "revision": "63d09936c75b6938548f9827f466eade"
  },
  {
    "url": "assets/js/app.fba2bd1e.js",
    "revision": "6b06ccf8e2a1fe1ad50c6a85dc6402a0"
  },
  {
    "url": "assets/js/vendors~docsearch.2818df0d.js",
    "revision": "7bb4e5b1d55310c3b57cef1421ab18af"
  },
  {
    "url": "assets/js/vendors~flowchart.62512d36.js",
    "revision": "96332497cbe693c922a8c81e82dafbfe"
  },
  {
    "url": "assets/js/vendors~notification.6c1060a3.js",
    "revision": "076b59498c9a51e1bc893b763ddf4e89"
  },
  {
    "url": "config/index.html",
    "revision": "3baec350e59b8ed347d15eb83344a9c1"
  },
  {
    "url": "faq/index.html",
    "revision": "1294eacc82f801dd470f759d2936e111"
  },
  {
    "url": "guide/assets.html",
    "revision": "bd0e0a14d75087fc5e2a0ac6a57ab3c4"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "bfcb5f7078212cda694a83eda43e2e73"
  },
  {
    "url": "guide/deploy.html",
    "revision": "11837707cece7c0d65f75cd5296482c8"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "ae3d3ca6c8dddabd673a910bf3e31e79"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "0d5261fbc56ddb4ee86f9a603424e469"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "88ae3f1cc52e511e35af93ab1062f1a0"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "bab6c256bf86d7ee1780de61aa174b96"
  },
  {
    "url": "guide/i18n.html",
    "revision": "3cca99165bdcec3187f4e09410ddfe8b"
  },
  {
    "url": "guide/index.html",
    "revision": "d8d08d7ec57b2ccf2c802e513d7cc3bb"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "e06caf881014f60e3ecc326b9907525e"
  },
  {
    "url": "guide/markdown.html",
    "revision": "0fd4a5d70e3ae3143b1381a9e8d5851e"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "dddd1fd2ae2d0f3e078f02541e612d3f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "c2ede3437d00b6d1072b0c7a8e2f3048"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "14fff3956a7b0c35171feb5969dbe486"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "43e57db736473fa1e98858031fd0b5fc"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "4bd2a0559db13d2e2f10e276f9667b14"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "4d3398bc92c9ecec44d1bd8f13a3fbb3"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "8074626d1d5f0faae3ccd84c9f5ab628"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "767c3869d628f277b2933920f030e11e"
  },
  {
    "url": "plugin/index.html",
    "revision": "422595d63f57b58de87103f4c8d9e31f"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "117ba8a2667c9cd940aa9eea59026fdb"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "418f754f77ada1d0db1fe32fc6882592"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "b78016c8d916de6b382da23a2a26d988"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "ca7eaf1fc33ef62495f36b49e12ef11c"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "31a6170edd771d57a221a0645b62801a"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "b22732fd86110e8cc1236f006c74508a"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "cc8455910114b8162ffc8cb2557fac3f"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "c1fa3bdc96dbb246754e798f2e420c3d"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "c67b0691fbcd28ab2a12ea103db22fb5"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "c5cfe1128853b38bbdb40fb29d844952"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "0a823125bbdd84d6f0f955c6703efcd9"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "f198e3a07f6805e0c78d4e34dccd7b25"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "a11c5f9e299bf7a17fcebdf5961da420"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "658ca923363f6112041d0c94981833a9"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "4d620cfaf9c718033765d73236af946a"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "89069d6df5173ea388d68adc5b92159e"
  },
  {
    "url": "theme/index.html",
    "revision": "c625d0c0a9bfecc126c7bce64800530d"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "a7eb0492fc8410cb35da0b7f438a64e9"
  },
  {
    "url": "theme/option-api.html",
    "revision": "76c9757d91628329443e1485cf86e4cd"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "00cde623280abe29e6975d76a9227924"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "577cbe348fd5706584d40ab193cff828"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "c1eaebe7406678aa472447c9247d7fe9"
  },
  {
    "url": "zh/api/node.html",
    "revision": "646ca6ce8510102c05928c696726e12d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "5cbb3103954d8497b15cbe8648d0b5f9"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "416211a350c66f32b82b4108f53b5473"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "f76b1343998413052f6cfe500df7db50"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "0a2a228205a85742f1e989e2b088b54e"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "5ac5bf18eddc8d774b118a1c8d579e22"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "68dabe0df2d6d72eb0178ef0505b1704"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "28ecf89a358bf098e07624f563459112"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "18067af9f11bce04558e11b10dbb6748"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "3376c0fc5e6938f1b1cf721af6356d26"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "5693f7713c7660a3c4796e34515a61e7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "7935dcf7f4f9eb64a1fa46bb1af5ed12"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "b2d553b2e6283251601b38d57edf7d86"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "56ab4929a6717e6cf5977f3e0e4df210"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "495af00c32b2f68b437165ac928e934d"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "1465ba856ee9da12129b28ca007585ed"
  },
  {
    "url": "zh/index.html",
    "revision": "07ecf476f10cd684c9ff3550c2292f17"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "1b06da9adab7748231d296f6c6471281"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "f074d4b68af113169eba7a402bea0777"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "677e1c1835f42ba8e93f0784f97e3168"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "3143055af231ee7319fdae6e2b9f4700"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "3e31f826897b8c9d85c674a32503a596"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "d314d03a9739022354a1cbea85cef089"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "15b80ecf600b1dd2967dc24baf5f89b9"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "8db1958b2b7827087a8958e90d6e097f"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "57adf8738b997bc201efa38340fbe907"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "2d0c3e0b96914230ae833017b2d6eaa4"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "34a095cc2e0a7e50fbbc39bac9bece70"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "ae4c709ee3d188cf13d8ae98bb645950"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "47e6008bfffd20185646cb85fc426fc1"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "bdf50dc8e5742d221c3344963970a528"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "5920b312ee937078b5ad18e96dba5190"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "96cd07dc7b0c25efc5dcb1775a6553a6"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "040480603e18f3addd642b47902820c6"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "22f20c07b1f61ac2748c4b966cd294ce"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "2aa27c014f061991d9a0a57e86b1a2ad"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "67e1df944ac2d089195c73facb067588"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "ca5bf869111d62a9a234919b8573de0c"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "9136598a2be55df68e94eb44f6656b2f"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "ead4fe49b9d30a2cfd1710eb3fa53c7b"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "7366058546cd9579990259ab7f938f02"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "bae8144b085eb99051d85c41294550c9"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "7d223e853a46094afa3cae3c33762fa7"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "1ea544503a3ba9a9e0169570f23658f5"
  }
].concat(self.__precacheManifest || []);
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
