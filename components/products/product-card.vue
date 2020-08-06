<template>
  <div class="card is-shadowless">
    <div class="card-image">
      <figure class="image">
        <sanity-image
          :image="image"
          :alt="title"
          :width="400"
          :height="400"
          fit="fill"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div v-if="vendor" class="media-left">
          <figure class="image is-48x48">
            <sanity-image
              :image="vendor.logo"
              :alt="vendor.title"
              :width="96"
              :height="96"
              fit="fill"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5">{{ title }}</p>
          <p class="subtitle is-5">
            <span class="tag is-secondary"> {{ price }} € </span>
          </p>
        </div>
      </div>

      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
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
