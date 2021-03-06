<template>
  <section class="section has-background-white">
    <h1 class="title is-2">{{ product.title }}</h1>

    <div class="columns">
      <div class="column is-one-third">
        <figure class="image">
          <sanity-image
            :image="product.image"
            :alt="product.title"
            :width="420"
            :height="420"
            :sizes="[
              { media: 572, width: 510 },
              { media: 769, width: 710 },
              { media: 1024, width: 290 },
              { media: 1408, width: 420 },
            ]"
            fit="fill"
          />
        </figure>
      </div>

      <div class="column is-two-thirds is-half-widescreen">
        <b-taglist v-if="product.categories.length">
          <b-tag
            v-for="category in product.categories"
            :key="category._id"
            class="is-primary-light is-rounded is-medium"
          >
            <nuxt-link
              :to="
                localeRoute({
                  name: 'products-categories-slug',
                  params: { slug: category.slug.current },
                })
              "
            >
              {{ category.title }}
            </nuxt-link>
          </b-tag>
        </b-taglist>

        <div class="media">
          <div class="media-content">
            <p class="subtitle tag is-secondary is-rounded is-large">
              {{ product.price }} €
            </p>
          </div>

          <div class="media-right"></div>
          <nuxt-link
            class="image-link"
            :to="
              localeRoute({
                name: 'products-brands-slug',
                params: { slug: product.vendor.slug.current },
              })
            "
          >
            <figure class="image is-64x64">
              <sanity-image
                :image="product.vendor.logo"
                :alt="product.vendor.title"
                :width="64"
                :height="64"
                :sizes="[]"
                fit="fill"
              />
            </figure>
          </nuxt-link>
        </div>

        <div class="content">
          <block-content :blocks="product.body.en" />
        </div>

        <div class="level">
          <div class="level-left">
            <client-only>
              <!-- <product-availability :id="product._id" /> -->
            </client-only>
            <!-- <starburst /> -->
          </div>

          <div class="level-right">
            <div class="level-item">
              <buy-button v-bind="product" :url="productUrl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import query from "~/groq/queries/product"

export default {
  name: "ProductPage",
  async asyncData({ $sanity, params }) {
    return await $sanity.fetch(query, params)
  },
  computed: {
    productUrl() {
      return `${process.dev ? "https://39c9f6d0d037.ngrok.io" : ""}${
        this.$route.path
      }`
    },
  },
  head() {
    return {
      title: this.product.title,
    }
  },
}
</script>
