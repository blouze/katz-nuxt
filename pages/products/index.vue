<template>
  <section class="section">
    <div class="level">
      <div class="level-left">
        <div class="level-item is-left">
          <h1 class="title is-1">{{ title }}</h1>
        </div>
      </div>

      <div class="level-right">
        <div class="level-item">
          <!-- <pagination :pages="16" :current="3" /> -->
        </div>
      </div>
    </div>

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
