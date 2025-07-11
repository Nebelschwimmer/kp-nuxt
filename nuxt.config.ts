export default defineNuxtConfig({
    modules: [
        "@nuxtjs/i18n",
        "@pinia/nuxt",
        "@nuxt/image",
        "vuetify-nuxt-module",
        "@nuxt/test-utils/module",
        "nuxt-auth-utils",
        "@nuxt/eslint",
    ],
    css: ["@/assets/css/globals.scss"],
    ssr: false,
    app: {
        baseURL:'/',
        pageTransition: {
            name: "page",
            mode: "out-in", // default
        },
        layoutTransition: { name: "layout", mode: "out-in" },
        head: {
            title: process.env.APP_NAME,
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
        },
    },
    vuetify: {
        vuetifyOptions: "./vuetify.config.ts",
    },
    imports: {
        dirs: ["types/*.ts", "store/*.ts", "types/**/*.ts", "utils/**/*.ts"],
    },
    i18n: {
        vueI18n: "./i18n.config.ts",
        strategy: "prefix_and_default",
        defaultLocale: "ru",
        baseUrl: process.env.BASE_URL,
        locales: [
            {
                code: "ru",
                iso: "ru-RU",
            },
            {
                code: "en",
                iso: "en-US",
            },
            {
                code: "fr",
                iso: "fr-FR",
            },
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root", // recommended
        },
    },
    image: {
        domains: [process.env.DOMAIN_NAME as string],
        providers: {
            myProvider: {
                name: "myProvider",
                provider: "~/providers/my-provider.ts",
                options: {
                    baseUrl: process.env.BASE_URL,
                    modifiers: {
                        fit: "cover",
                    },
                },
            },
        },
    },

    runtimeConfig: {
        public: {
            apiBase: process.env.API_BASE_URL,
            appName: process.env.APP_NAME,
        },
        private: {
            nitroSecret: process.env.NITRO_SECRET,
        },
    },

    vite: {
        logLevel: "info",
        build: {
            sourcemap: true,
        },
        server: {
            hmr: {
                timeout: 30000,
                overlay: true,
            },
            proxy: {
                "/api": {
                    target: process.env.API_BASE_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
                // "/uploads": {
                //     target: `${process.env.BASE_URL}/uploads`,
                //     changeOrigin: true,
                //     rewrite: (path) => path.replace(/^\/uploads/, ""),
                // },
            },
        },
    },
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
});
