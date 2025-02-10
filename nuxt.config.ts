export default defineNuxtConfig({
	modules: [
		"@nuxtjs/i18n",
		"@pinia/nuxt",
		"@nuxt/eslint",
		"@nuxt/image",
		"vuetify-nuxt-module",
		"@nuxt/test-utils/module",
		"nuxt-auth-utils",
	],
	app: {
		pageTransition: {
			name: "page",
			mode: "out-in", // default
		},
		layoutTransition: { name: "layout", mode: "out-in" },
		head: {
			title: "Kinopoisk Lite",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Kinopoisk Lite",
				},
				{
					hid: "og:title",
					name: "og:title",
					content: "Kinopoisk Lite",
				},
				{
					hid: "og:description",
					name: "og:description",
					content: "Kinopoisk Lite",
				},
				{},
			],
		},
	},
	vuetify: {
		vuetifyOptions: {
		  labComponents: true,
		  defaults: {
			VTextField: { variant: "filled" },
			VSelect: { variant: "filled" },
			VCombobox: { variant: "filled" },
			VNavigationDrawer: { color: "transparent" },
			VExpansionPanels: { "bg-color": "transparent" },
		  },
		  theme: {
			themes: {
			  light: {
				dark: false,
				colors: {
				  background: "#F5F7FA",
				  surface: "#FFFFFF",
				  primary: "#007AFF",
				  secondary: "#34C759",
				  accent: "#FF3B30",
				},
			  },
			  dark: {
				dark: true,
				colors: {
				  background: "#121212",
				  surface: "#1E1E1E",
				  primary: "#0A84FF",
				  secondary: "#30D158",
				  accent: "#FF453A",
				},
			  },
			},
		  },
		},
	  },
	  
	imports: {
		dirs: ["types/*.ts", "store/*.ts", "types/**/*.ts"],
	},
	i18n: {
		vueI18n: "./i18n.config.ts",
	},
	image: {
		domains: ["kinopoisk.light"],
		providers: {
			myProvider: {
				name: "myProvider",
				provider: "~/providers/my-provider.ts",
				options: {
					baseUrl: process.env.BASE_URL,
				},
			},
		},
	},

	runtimeConfig: {
		public: {
			apiBase: process.env.API_BASE_URL,
		},
	},

	vite: {
		logLevel: "info",
		optimizeDeps: {
			include: ["@yeger/vue-masonry-wall"],
		},
		build: {
			sourcemap: true,
		},
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler", // or "modern"
				},
			},
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
					secure: false
				},
				"/uploads": {
					target: `${process.env.BASE_URL}/uploads`,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/uploads/, ""),
					secure: false
				},
			},
		},
	},
	typescript: {
		// typeCheck: true
	},

	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
});
