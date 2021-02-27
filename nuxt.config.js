import getRoutes from "./utils/getRoutes";
const webpack = require("webpack");
  
// const BASE_PATH = process.env.BASE_PATH || '/jakubgania.io/'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: 'static',
  target: 'server',
  ssr: true,
  manifest: {
    lang: 'pl',
    name: 'Jakub Gania Software',
    description: '',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#000000',
    background_color: '#000000',
  },

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Jakub Gania Software' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        name: 'google-site-verification',
        content: 'pCgwKh6Bl0udfAQC8PP37yLs6Rs26hwU19gmuDgpnZs',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        name: 'google-site-verification',
        content: 'pCgwKh6Bl0udfAQC8PP37yLs6Rs26hwU19gmuDgpnZs',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        conent: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/x-ico',
        href: '/favicon.ico',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    'aos/dist/aos.css',
    '@/assets/css/main.css',
  ],
  router: {
    // base: BASE_PATH,
    middleware: 'i18n'
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/i18n.js',
    { src: '~/plugins/aos', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    // '@nuxt/image', not work - remove all unnecessary dependencies and modules
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    // 'nuxt-purgecss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/apollo',
    '@nuxtjs/device',
    ['nuxt-lazy-load', {
        // defaultImage: '/jakub-gania-software-logo-img.png',
      }
    ],
    '@nuxtjs/sitemap',
  ],

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js'
    },
    authenticationType: 'Bearer'
  },

  pwa: {
    meta: {
      twitterCard: 'summary_large_image',
      twitterSite: '@jakubgania',
      twitterCreator: '@jakubgania',
    },
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    classPrefix: '',
    classSufix: '-mode',
  },
  
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    fullTextSearchFields: ['title', 'description'],
  },

  i18n: {
    defaultLocale: 'pl',
    locales: ['en', 'de'],
  },

  sitemap: {
    hostname: 'https://jakubgania.io',
    gzip: true,
    // i18n: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
    routes() {
      return getRoutes();
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // analyze: false,
    // optimization :{
    //   splitChunks: {
    //     chunks: 'all',
    //     automaticNameDelimiter: '.',
    //     name: 'test',
    //     maxSize : 256000,
    //   }
    // },
  },
}
