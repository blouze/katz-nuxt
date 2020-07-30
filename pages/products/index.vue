<template>
  <section class="section columns is-multiline">
    <nuxt-link
      v-for="product in products"
      :key="product._id"
      :to="`/products/${product.slug.current}`"
      class="column is-one-third"
    >
      <ProductCard v-bind="product" />
    </nuxt-link>
  </section>
</template>

<script>
import query from '~/groq/queries/products'

export default {
  name: 'ProductsPage',
  async asyncData({ $sanity, params }) {
    return await $sanity.fetch(query, params)
  },
}
</script>
