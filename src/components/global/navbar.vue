<template>
  <b-navbar
    fixed-top
    type="is-brand sync"
    mobile-burger
    wrapper-class="container is-expanded"
  >
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="localeRoute({ path: '/' })">
        {{ $t("site.name") }}
      </b-navbar-item>

      <b-navbar-item tag="div" class="is-expanded">
        <search-input />
      </b-navbar-item>
    </template>

    <template slot="start">
      <b-navbar-item
        v-for="({ to, text }, index) in links"
        :key="`nav-link-${index}`"
        expanded
        :to="localeRoute(to)"
        tag="nuxt-link"
      >
        {{ text }}
      </b-navbar-item>
    </template>

    <template slot="end">
      <client-only>
        <b-navbar-item tag="div">
          <b-button
            type="is-secondary snipcart-checkout"
            icon-left="shopping-bag"
            :loading="!$store.state.snipcart.loaded"
          >
            <span class="snipcart-total-price" />
            <span class="badge is-secondary snipcart-items-count" />
          </b-button>
        </b-navbar-item>

        <user-menu v-if="$auth.loggedIn" />

        <b-navbar-item v-else tag="div" class="buttons">
          <b-button
            type="is-primary"
            tag="nuxt-link"
            :to="localeRoute({ name: 'user-register' })"
          >
            {{ $t("auth.register") }}
          </b-button>
          <b-button
            type="is-light"
            tag="nuxt-link"
            :to="localeRoute({ name: 'user-login' })"
          >
            {{ $t("auth.login") }}
          </b-button>
        </b-navbar-item>
      </client-only>
    </template>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      links: [{ to: { name: "products" }, text: this.$t("products.title") }],
      menuOpen: false,
    }
  },
  watch: {
    "$route.path"() {
      this.menuOpen = false
    },
    "$auth.loggedIn"() {
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

<style lang="scss" scoped>
.snipcart-checkout {
  border: 2px solid white;
}
</style>
