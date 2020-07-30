<template>
  <div>
    <snipcart />
    <navbar />
    <div class="container" :style="{ 'min-height': '90vh' }">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  head() {
    return {
      bodyAttrs: {
        class: 'has-navbar-fixed-top snipcart-overwrite',
        // class: this.$auth.loggedIn ? 'has-navbar-fixed-top' : '',
      },
      htmlAttrs: {
        lang: 'fr-FR',
      },
    }
  },
}
</script>
