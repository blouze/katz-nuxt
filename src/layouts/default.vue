<template>
  <div>
    <navbar />
    <div class="container" :style="{ 'min-height': '90vh' }">
      <nuxt />
    </div>
    <page-footer />
    <snipcart />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  head() {
    return {
      titleTemplate: `%s - ${this.$t("site.name")}`,
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
