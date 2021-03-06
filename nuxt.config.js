export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-snipcart-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://snipcart.nuxtjs.org
    '@nuxtjs/snipcart',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Snipcart module configuration: (https://snipcart.nuxtjs.org/setup)
  snipcart: {
    key:
      'MDE1NWNmNGMtNzdiZS00YjIxLTkzNTEtY2ViNjg1NmFkZjZjNjM3NDI2MTIyMDg4NzAxNjMx',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
