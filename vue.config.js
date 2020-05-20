module.exports = {
  pwa: {
    name: "Oh My Food",
    short_name: "OMF",
    themeColor: "#F8FC3B",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      display: "fullscreen",
    },
    iconsPath: {
      favicon16: '/public/img/icons/favicon-16x16.png',
      favicon32: '/public/img/icons/favicon-32x32.png',
      appleTouchIcon: '/public/img/icons/icon-152x152.png',
      maskIcon: '/public/favicon.ico',
      msTileImage: '/public/img/icons/icon-144x144.png',
    },
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "./src/service-worker.js",
    },
  },
};
