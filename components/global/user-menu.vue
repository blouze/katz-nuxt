<template>
  <a ref="dropdown" class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">{{ user.username }}</a>

    <div class="navbar-dropdown is-right">
      <nuxt-link
        class="navbar-item"
        :to="localeRoute({ name: 'user-account-profile' })"
      >
        <span class="icon"><b-icon icon="user" size="is-small" /></span>
        <span>{{ $t('user.profile') }}</span>
      </nuxt-link>

      <hr class="navbar-divider" />

      <a class="navbar-item" @click="logout">
        <span class="icon"><b-icon icon="sign-out-alt" size="is-small" /></span>
        <span>{{ $t('auth.logout') }}</span>
      </a>
    </div>
  </a>
</template>

<script>
export default {
  name: 'UserMenu',
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    logout(e) {
      e.preventDefault()
      this.$buefy.snackbar.open('Vous êtes maintenant déconnecté.')
      this.$auth.logout()
    },
  },
}
</script>
