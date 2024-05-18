// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/scss/styles.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/strapi',
    "@hebilicious/vue-query-nuxt"
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  colorMode: {
    classSuffix: '',
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    version: 'v4',
    prefix: '/api',
  },
});
