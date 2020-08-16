<template>
  <div>
    <section class="section">
      <h1 class="title is-2">{{ category.title }}</h1>
    </section>

    <section class="section" style="padding: 3rem 0.3rem;">
      <products-list :products="products" />
    </section>

    <section v-if="category.description" class="section">
      <p>{{ category.description }}</p>
    </section>
  </div>
</template>

<script>
import query from "~/groq/queries/categories"

export default {
  name: "CategoryPage",
  async asyncData({ $sanity, params }) {
    return await $sanity.fetch(query, params)
  },
}
</script>
