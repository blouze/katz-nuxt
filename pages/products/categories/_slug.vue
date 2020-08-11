<template>
  <section class="section">
    <h1 class="title is-1">{{ category.title }}</h1>

    <products-list :products="products" />

    <p v-if="category.description">{{ category.description }}</p>
  </section>
</template>

<script>
import query from '~/groq/queries/categories'

export default {
  name: 'CategoryPage',
  async asyncData({ $sanity, params }) {
    return await $sanity.fetch(query, params)
  },
}
</script>
