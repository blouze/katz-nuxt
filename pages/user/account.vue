<template>
  <div>
    <section class="section">
      <div class="tabs is-boxed">
        <ul>
          <li
            v-for="{ label, route, icon } in tabs"
            :key="route.name"
            :class="{
              'is-active': $route.name === localeRoute(route.name).name,
            }"
          >
            <nuxt-link :to="localeRoute(route)">
              <span class="icon"><b-icon :icon="icon" size="is-small" /></span>
              <span>{{ label }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <nuxt-child />
    </section>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  data() {
    return {
      tabs: [
        {
          label: this.$t('user.profile'),
          route: { name: 'user-account-profile' },
          icon: 'user',
        },
        {
          label: this.$t('user.orders'),
          route: { name: 'user-account-orders' },
          icon: 'user',
        },
      ],
    }
  },
  middleware: [
    'auth',
    function ({ route, redirect }) {
      if (route.name === 'user-account')
        redirect(this.localeRoute({ name: 'user-account-profile' }))
    },
  ],
}
</script>
