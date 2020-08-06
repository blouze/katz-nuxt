<template>
  <section class="section">
    <h1 class="title is-1">{{ category.title }}</h1>

    <div class="columns is-multiline">
      <nuxt-link
        v-for="product in products"
        :key="product._id"
        :to="{
          name: 'products-slug',
          params: { slug: product.slug.current },
        }"
        class="column is-half-tablet is-one-third-widescreen is-one-quarter-fullhd"
      >
        <ProductCard v-bind="product" />
      </nuxt-link>
    </div>
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
