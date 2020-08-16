<template>
  <div>
    <navbar />
    <div class="container" :style="{ 'min-height': '90vh' }">
      <nuxt />
    </div>
    <page-footer />
    <snipcart class="has-navbar-fixed-top" />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  head() {
    return {
      bodyAttrs: {
        class: "has-navbar-fixed-top snipcart-overwrite",
      },
      htmlAttrs: {
        lang: "fr-FR",
      },
    }
  },
}
</script>
