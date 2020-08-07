<template>
  <section class="section">
    <h1 class="title is-1">{{ title }}</h1>

    <products-list :products="products" />
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
