<template>
  <section class="section">
    <h1 class="title is-1">{{ title }}</h1>

    <div class="columns is-multiline">
      <nuxt-link
        v-for="product in products"
        :key="product._id"
        :to="`/products/${product.slug.current}`"
        class="column is-half-tablet is-one-third-widescreen is-one-quarter-fullhd"
      >
        <product-card v-bind="product" />
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import query from '~/groq/queries/products'

export default {
  name: 'ProductsPage',
  async asyncData({ $sanity, params }) {
    return await $sanity.fetch(query, params)
  },
  data: () => ({
    title: 'Products',
  }),
}
</script>

<style lang="stylus">
.card
  color: $primary
</style>
