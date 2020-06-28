export default {
	mode: 'universal',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	loading: { color: '#fff' },
	css: ['normalize.css'],
	plugins: [],
	buildModules: ['@nuxt/typescript-build'],
	modules: ['@nuxtjs/vuetify', '@nuxtjs/dotenv'],
	build: {
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient && config.module) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|ts|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				})
			}
		},
	},
}
