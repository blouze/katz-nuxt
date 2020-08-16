<template>
  <div>
    <section class="section">
      <h1 class="title is-2">{{ vendor.title }}</h1>
    </section>

    <section class="section" style="padding: 3rem 0.3rem;">
      <products-list :products="products" />
    </section>
  </div>
</template>

<script>
import query from "~/groq/queries/vendor"

export default {
  name: "BrandPage",
  async asyncData({ $sanity, params }) {
    return await $sanity.fetch(query, params)
  },
}
</script>
