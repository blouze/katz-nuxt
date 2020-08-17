<template>
  <b-autocomplete
    type="is-primary"
    clearable
    clear-on-select
    :data="data"
    field="title"
    icon="search"
    :loading="loading"
    @typing="searchProducts"
    @select="selectProduct"
  >
    <template slot-scope="props">
      <div :key="timesRequested" class="media">
        <div class="media-left">
          <sanity-image
            :image="props.option.image"
            :alt="props.option.title"
            :width="48"
            :height="48"
            :sizes="[{ media: 375, width: 48 }]"
            fit="fill"
          />
        </div>
        <div class="media-content">
          <strong>{{ props.option.title }}</strong>
        </div>
      </div>
    </template>
  </b-autocomplete>
</template>

<script>
import searchQuery from "~/groq/queries/searchProducts"
import { debounce } from "debounce"

export default {
  data() {
    return {
      data: [],
      selected: null,
      loading: false,
      timesRequested: 0,
    }
  },
  methods: {
    searchProducts: debounce(
      function (q) {
        if (!q.length) {
          this.data = []
          return
        }
        this.loading = true
        this.$sanity
          .fetch(searchQuery, { q: `${q}*` })
          .then(({ products }) => {
            this.data = []
            products.forEach((product) => this.data.push(product))
          })
          .catch((error) => {
            this.data = []
            throw error
          })
          .finally(() => {
            this.loading = false
            this.timesRequested++
          })
      },
      500,
      true
    ),
    selectProduct(product) {
      if (!product) {
        return
      }
      this.$router.push(
        this.localeRoute({
          name: "products-slug",
          params: { slug: product.slug.current },
        })
      )
    },
  },
}
</script>
