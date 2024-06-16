// https://nuxt.com/docs/api/configuration/nuxt-config

const sw = process.env.SW === 'true'

export default defineNuxtConfig({
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            strapiUrl: `${process.env.STRAPI_URL}/api`,
            strapiBaseUrl: process.env.STRAPI_URL,
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
    site: {
        // production URL
        url: 'https://rollercoaster.dev',
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/color-mode',
        '@nuxtjs/strapi',
        '@nuxtjs/apollo',
        "@vite-pwa/nuxt",
        "nuxt-og-image"
    ],
    pwa: {
        strategies: sw ? 'injectManifest' : 'generateSW',
        srcDir: sw ? 'service-worker' : undefined,
        filename: sw ? 'sw.ts' : undefined,
        registerType: 'autoUpdate',
        manifest: {
            name: 'rollercoaster.dev',
            short_name: 'r.d',
            theme_color: '#0d0a0a',
            icons: [
                {
                    src: 'icon-192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: 'icon-512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
                {
                    src: 'icon-512-maskable.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
            ],
        },
        workbox: {
            globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
        },
        injectManifest: {
            globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
        },
        // client: {
        //     installPrompt: true,
        //     // you don't need to include this: only for testing purposes
        //     // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
        //     periodicSyncForUpdates: 20,
        // },
        devOptions: {
            enabled: true,
            suppressWarnings: true,
            navigateFallback: '/',
            navigateFallbackAllowlist: [/^\/$/],
            type: 'module',
        },
    },
    nitro: {
        devProxy: {
            '/strapi': {
                target: `${process.env.STRAPI_URL}/api`,
                changeOrigin: true,
                headers: {
                    'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`,
                }
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
            require('dotenv').config({path: './.env'})
        ],
        server: {
            hmr: {
                overlay: true
            }
        }
    }
});