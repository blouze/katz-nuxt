<template>
  <nav
    class="navbar is-fixed-top is-brand"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link :to="localeRoute({ path: '/' })" class="navbar-item">
          {{ $t('site.name') }}
          <!-- <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        /> -->
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          :class="{ 'is-active': menuOpen }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="menuOpen = !menuOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': menuOpen }"
      >
        <div class="navbar-start">
          <nuxt-link
            v-for="({ to, text }, index) in links"
            :key="`nav-link-${index}`"
            class="navbar-item"
            :to="localeRoute(to)"
          >
            {{ text }}
          </nuxt-link>
        </div>

        <div class="navbar-item is-right">
          <button class="button is-secondary snipcart-checkout">
            <span class="icon">
              <b-icon icon="shopping-bag" size="is-small" />
            </span>
            <span class="snipcart-total-price" />
            <span class="badge is-secondary snipcart-items-count" />
          </button>
        </div>

        <client-only class="navbar-end">
          <div v-if="!$auth.loggedIn" class="navbar-item">
            <div class="buttons">
              <nuxt-link
                class="button is-primary"
                :to="localeRoute({ name: 'user-register' })"
              >
                {{ $t('auth.register') }}
              </nuxt-link>
              <nuxt-link
                class="button is-light"
                :to="localeRoute({ name: 'user-login' })"
              >
                {{ $t('auth.login') }}
              </nuxt-link>
            </div>
          </div>

          <user-menu v-else :user="$auth.user" />
        </client-only>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [{ to: { name: 'products' }, text: this.$t('products.title') }],
      menuOpen: false,
    }
  },
  watch: {
    '$route.path'() {
      this.menuOpen = false
    },
  },
  methods: {
    isRouteActive(routeName) {
      return this.$route.name === routeName
    },
  },
}
</script>

<style lang="stylus" scoped>
.snipcart-checkout
  border: 2px solid white
</style>
