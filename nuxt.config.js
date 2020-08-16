export default {
  srcDir: "src",
  modules: [
    "nuxt-stack",
    "@nuxtjs/axios",
    ["nuxt-buefy", {
      css: false,
      materialDesignIcons: false,
      defaultIconPack: 'fas',
      defaultIconComponent: 'font-awesome-icon',
    }],
    ["@nuxtjs/apollo", {
      clientConfigs: {
        default: {
          httpEndpoint: `${process.env.BACKEND_URL}/graphql`,
        },
      },
    }],
    ["nuxt-i18n", {
      locales: [
        {
          code: 'fr',
          file: 'fr-FR.js',
        },
      ],
      defaultLocale: 'fr',
      strategy: 'prefix_except_default',
      lazy: true,
      langDir: 'lang/',
    }],
    ["@nuxtjs/auth", {
      strategies: {
        local: {
          // autoFetchUser: false,
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
        logout: '/',
        callback: false,
        home: '/',
      },
      plugins: ['~/plugins/auth.js'],
    }],
    ["@nuxtjs/fontawesome", {
      icons: {
        solid: [
          'faUser',
          'faEnvelope',
          'faExclamationTriangle',
          'faLock',
          'faSignOutAlt',
          'faShoppingCart',
          'faShoppingBag',
          'faCashRegister',
          'faAngleRight',
          'faArrowUp',
          'faStepForward',
          'faStepBackward',
        ],
      },
    }]
  ],
  styles: ["styles/index.scss"],
  styleResources: {
    scss: ["styles/variables.scss"]
  },
  stack: {
    name: "Nuxt Stack",
    host: "https://nuxtstack.org/",
    description: "Stacks of goodness for Nuxt",
    keywords: ["nuxt", "stack"],
    backgroundColor: "#FFFFFF",
    themeColor: "#4FC08D",
    preconnect: [
      "https://fonts.gstatic.com",
      "https://fonts.googleapis.com",
      "https://app.snipcart.com",
      "https://cdn.snipcart.com",
    ]
  },
  webfonts: {
    google: {
      families: [
        "Assistant&display=swap",
        // "Quicksand:500",
        // "Roboto Mono:400&display=swap" // https://git.io/fjjcJ
      ]
    }
  },

  components: true,
  env: {
    backendURL: process.env.BACKEND_URL || '',
    sanityProjectId: process.env.SANITY_PROJECT_ID || '',
    sanityDataset: process.env.SANITY_DATASET || '',
    snipcartApiKey: process.env.SNIPCART_API_KEY || '',
  },
  plugins: [
    // { src: '~plugins/snipcart', mode: 'client' },
    { src: '~plugins/sanity' },
    { src: '~plugins/sanity-block-component' },
    { src: '~plugins/vuelidate' },
    { src: '~plugins/date' },
  ],
}
