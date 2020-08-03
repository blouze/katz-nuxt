<template>
  <div>
    <section class="section">
      <h1 class="title is-1">{{ vendor.title }}</h1>

      <div class="columns is-multiline">
        <nuxt-link
          v-for="product in products"
          :key="product._id"
          :to="{
            name: 'products-slug',
            params: { slug: product.slug.current },
          }"
          class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
        >
          <ProductCard v-bind="product" />
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import query from '~/groq/queries/vendor'

export default {
  name: 'BrandPage',
  async asyncData({ $sanity, params }) {
    return await $sanity.fetch(query, params)
  },
}
</script>
