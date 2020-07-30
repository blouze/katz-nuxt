<template>
  <section class="section columns">
    <div class="column is-one-third">
      <figure class="image">
        <sanity-image
          :image="product.image"
          :alt="product.title"
          :width="500"
          :height="500"
        />
      </figure>
    </div>

    <div class="column is-two-third">
      <h1 class="title is-2">{{ product.title }}</h1>
      <buy-button v-bind="product" :url="productUrl" />
    </div>
  </section>
</template>

<script>
import query from '~/groq/queries/product'

export default {
  name: 'ProductPage',
  async asyncData({ $sanity, params }) {
    return await $sanity.fetch(query, params)
  },
  computed: {
    productUrl() {
      return `${process.dev ? 'https://ee55ceeed85e.ngrok.io' : ''}${
        this.$route.path
      }`
    },
  },
}
</script>
