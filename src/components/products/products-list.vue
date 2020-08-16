<template>
  <div
    class="columns is-multiline is-mobile is-variable is-0 is-1-tablet is-2-widescreen"
  >
    <nuxt-link
      v-for="product in products"
      :key="product._id"
      class="column is-half-mobile is-one-third-tablet is-one-quarter-widescreen is-one-fifth-fullhd image-link"
      :to="`/products/${product.slug.current}`"
    >
      <product-card v-bind="product" class="product-card" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.columns.is-variable .column {
  padding: var(--columnGap);
}
</style>
