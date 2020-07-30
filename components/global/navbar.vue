<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link :to="{ path: '/' }" class="navbar-item">
        KATZ'S
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
          :to="to"
          >{{ text }}
        </nuxt-link>
      </div>

      <client-only class="navbar-end">
        <div v-if="!$auth.loggedIn" class="navbar-item">
          <div class="buttons">
            <nuxt-link
              class="button is-primary"
              :to="{ name: 'user-register' }"
            >
              Sign up
            </nuxt-link>
            <nuxt-link class="button" :to="{ name: 'user-login' }">
              Log in
            </nuxt-link>
          </div>
        </div>

        <user-menu v-else :user="$auth.user" />
      </client-only>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [{ to: { name: 'products' }, text: 'Products' }],
    menuOpen: false,
  }),
  methods: {
    isRouteActive(routeName) {
      return this.$route.name === routeName
    },
  },
}
</script>
