<template>
  <div class="card has-background-white-bis">
    <div class="card-image">
      <figure class="image is-3by4">
        <sanity-image
          :image="image"
          :alt="title"
          :width="300"
          :height="400"
          :size="[
            { media: 375, width: 180 },
            { media: 769, width: 380 },
            { media: 1024, width: 320 },
            { media: 1408, width: 280 },
          ]"
          fit="fill"
        />
      </figure>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle">
            <span class="tag is-secondary is-small is-medium-tablet is-rounded">
              {{ price }} €
            </span>
          </p>
        </div>

        <div v-if="vendor" class="media-right">
          <figure class="image is-48x48">
            <sanity-image
              :image="vendor.logo"
              :alt="vendor.title"
              :width="48"
              :height="48"
              :sizes="[{ media: 375, width: 48 }]"
              bg="fafafa"
              fit="fill"
            />
          </figure>
        </div>
      </div>
      <p class="title is-6">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    _id: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: Object, required: true },
    price: { type: Number, required: true },
    vendor: { type: Object, default: () => null },
  },
}
</script>

<style lang="scss" scoped>
.card-content {
  padding: 0.8rem;
}
</style>
