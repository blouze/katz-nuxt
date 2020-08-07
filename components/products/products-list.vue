<template>
  <div class="columns is-multiline">
    <nuxt-link
      v-for="product in products"
      :key="product._id"
      :to="`/products/${product.slug.current}`"
      class="column is-half-tablet is-one-third-widescreen is-one-quarter-fullhd"
    >
      <product-card v-bind="product" class="product-card" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProductsList',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  border: 4px dashed WHITE;
  &,
  & .product-card,
  & .product-card .card .card-content {
    min-height: 100%;
  }

  &:hover {
    border-color: $mellow-apricot;
  }
}
</style>
