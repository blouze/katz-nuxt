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
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Assistant&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/index.scss'],
  styleResources: {
    // your settings here
    sass: [],
    scss: ['@/assets/styles/variables.scss'],
    less: [],
    stylus: [],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~plugins/sanity' },
    { src: '~plugins/vuelidate' },
    { src: '~plugins/date' },
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
    '@nuxtjs/pwa',
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome',
    // Doc: https://github.com/nuxt-community/style-resources-module#readme
    '@nuxtjs/style-resources',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/auth',
    '@nuxtjs/ngrok',
    // Doc: https://github.com/nuxt-community/apollo-module
    '@nuxtjs/apollo',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  generate: {
    // exclude: [/user\/account/],
  },

  /*
   ** Environment variables
   ** See https://nuxtjs.org/api/configuration-env/
   */
  env: {
    backendURL: process.env.BACKEND_URL || '',
    sanityProjectId: process.env.SANITY_PROJECT_ID || '',
    sanityDataset: process.env.SANITY_DATASET || '',
    snipcartApiKey: process.env.SNIPCART_API_KEY || '',
  },

  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/schemes/local.html#options
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: `${process.env.BACKEND_URL}/auth/local`,
            method: 'post',
            propertyName: 'jwt',
          },
          user: {
            url: `${process.env.BACKEND_URL}/users/me`,
            method: 'get',
            propertyName: false,
          },
          logout: false,
        },
      },
    },
    redirect: {
      login: '/user/login',
      logout: '/user/login',
      callback: false,
      home: '/user/account/profile',
    },
    plugins: ['~/plugins/auth.js'],
  },

  buefy: {
    css: false,
    materialDesignIcons: false,
    defaultIconPack: 'fas',
    defaultIconComponent: 'font-awesome-icon',
  },

  fontawesome: {
    // imports: [
    //   {
    //     set: '@fortawesome/free-solid-svg-icons',
    //     icons: ['fas'],
    //   },
    // ],
    icons: {
      solid: [
        'faUser',
        'faEnvelope',
        'faExclamationTriangle',
        'faLock',
        'faSignOutAlt',
        'faShoppingCart',
        'faAngleRight',
        'faArrowUp',
      ],
    },
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${process.env.BACKEND_URL}/graphql`,
      },
    },
  },
}
