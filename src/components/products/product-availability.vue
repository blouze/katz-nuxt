<template>
  <div v-if="!!stock && stock === 1" class="tags has-addons">
    <span class="tag is-warning">
      <span class="icon">
        <b-icon icon="exclamation-triangle" size="is-small" />
      </span>
    </span>
    <span class="tag">1 seul disponible</span>
  </div>
</template>

<script>
import query from '~/apollo/queries/product'

export default {
  name: 'ProductAvailability',
  props: {
    id: { type: String, required: true },
  },
  data: () => ({
    stock: null,
  }),
  apollo: {
    product: {
      query,
      variables() {
        return { id: this.id }
      },
    },
  },
}
</script>
