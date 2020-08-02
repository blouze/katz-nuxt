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

      <b-taglist v-if="product.categories.length">
        <b-tag
          v-for="category in product.categories"
          :key="category._id"
          class="is-rounded"
        >
          <nuxt-link
            class="is-light"
            :to="{
              name: 'products-categories-slug',
              params: { slug: category.slug.current },
            }"
          >
            {{ category.title }}
          </nuxt-link>
        </b-tag>
      </b-taglist>

      <div class="buttons has-addons">
        <buy-button v-bind="product" :url="productUrl" />
      </div>
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
      return `${process.dev ? 'https://4ee0bd65d7af.ngrok.io' : ''}${
        this.$route.path
      }`
    },
  },
}
</script>
