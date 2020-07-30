<template>
  <div v-if="$fetchState.pending">
    <Loader />
  </div>

  <div v-else>
    <section class="section">
      <h1 class="title is-1">{{ category.title }}</h1>
    </section>

    <section class="section columns is-multiline">
      <nuxt-link
        v-for="product in products"
        :key="product._id"
        :to="{ name: 'products-slug', params: { slug: product.slug.current } }"
        class="column is-one-third"
      >
        <ProductCard v-bind="product" />
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import query from '~/groq/queries/categories'

export default {
  name: 'CategoryPage',
  async fetch() {
    const { products, category } = await this.$sanity.fetch(
      query,
      this.$route.params
    )
    this.products = products
    this.category = category
  },
  data: () => ({
    products: [],
    category: {},
  }),
}
</script>
