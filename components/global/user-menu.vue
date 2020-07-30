<template>
  <a class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">{{ user.username }}</a>

    <div class="navbar-dropdown">
      <nuxt-link class="navbar-item" :to="{ name: 'user' }">
        <span class="icon"><b-icon icon="user" /></span>
        <span>Profile</span>
      </nuxt-link>

      <hr class="navbar-divider" />

      <a class="navbar-item" @click="$auth.logout()">
        <span class="icon"><b-icon icon="sign-out-alt" /></span>
        <span>Logout</span>
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
}
</script>
