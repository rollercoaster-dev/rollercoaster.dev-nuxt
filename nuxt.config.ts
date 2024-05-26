// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      strapiUrl: `${process.env.STRAPI_URL}/api`,
    },
    private: {
      strapiToken: process.env.STRAPI_TOKEN,
    }
  },
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
    '@nuxtjs/apollo',
  ],
  nitro: {
    devProxy: {
      '/strapi': {
        target: `${process.env.STRAPI_URL}/api`,
        changeOrigin: true,
      },
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.STRAPI_URL}/graphql`,
        httpLinkOptions: {
          headers: {
            'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`,
          }
        }
      }
    },
  },
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
  vite: {
    plugins: [
      require('dotenv').config({ path: './.env' })
    ]
  }
});
