export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Heroswap_fe',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '~/assets/images/favicon.png',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/main.scss',
        '~/assets/css/bootstrap.css',
        '~/assets/css/style.css',
        '~/assets/css/responsive.css',
        '~/assets/css/flaticon.css',
        '~/assets/css/font-awesome.css',
        '~/assets/css/custom.scss',
        '~/assets/css/animate.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: '~/plugins/vueslickcarousel.js',
            ssr: true,
        },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
    ],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // Doc: https://github.com/nuxt-community/style-resources-module
        '@nuxtjs/style-resources',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],
    // router modifications
    router: {
        base: '/',
        linkActiveClass: 'link-active',
        linkExactActiveClass: 'active',
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },
    // setup scss customer #bootstrapVue
    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false,
    },
    styleResources: {
        scss: '~/assets/scss/_variables.scss',
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            compact: true,
        },
        loaders: {
            sass: {
                implementation: require('sass'),
            },
            scss: {
                implementation: require('sass'),
            },
        },
        postcss: {
            plugins: {
                // 'postcss-easing-gradients': {},
                // 'postcss-calc': {},
                // 'postcss-preset-env': {
                //     autoprefixer: {},
                // },
            },
            order: 'presetEnvAndCssnanoLast',
            preset: {
                autoprefixer: {
                    grid: true,
                },
            },
        },
        extractCSS: true,
    },
    // mode rendering options
    target: 'static',
    ssr: true,
    // server options
    server: {
        port: 4000,
        host: '0.0.0.0',
    },
};
