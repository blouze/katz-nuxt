<template>
  <pre>{{ product }}</pre>
</template>

<script>
export default {
  name: 'ProductAvailability',
  props: {
    id: { type: String, required: true },
  },
  async fetch() {
    this.product = await this.$axios
      .get(`${process.env.backendURL}/products/${this.id}`)
      .then(({ data }) => data)
  },
  data: () => ({
    product: null,
  }),
}
</script>
