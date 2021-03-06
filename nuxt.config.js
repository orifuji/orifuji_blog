import configContentful from './.contentful.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    CONTENTFUL_SPACE_ID: configContentful.CONTENTFUL_SPACE_ID,
    CONTENTFUL_CDA_ACCESS_TOKEN: configContentful.CONTENTFUL_CDA_ACCESS_TOKEN,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'orifuji_blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/font-awesome', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/markdownit',
    'nuxt-fontawesome',
  ],

  // for '@nuxtjs/markdownit'
  markdownit: {
    html: true,
    injected: true,
    linkify: true,
    breaks: false,
  },

  // for 'nuxt-fontawesome'
  fontawesome: {
    component: 'fa',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
