<template>
  <img :src="imageUrl" :alt="altFromImage || alt" />
</template>

<script>
export default {
  name: 'SanityImage',
  props: {
    image: {
      type: Object,
      required: true,
    },
    alt: {
      type: String,
      default: 'Missing alternative text',
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    auto: {
      type: String,
      default: 'format',
    },
    fit: {
      type: String,
      default: 'max',
    },
  },
  computed: {
    altFromImage() {
      return this.image.alt
    },
    imageUrl() {
      return this.$imgBuilder
        .image(this.image)
        .ignoreImageParams()
        .size(this.width, this.height)
        .auto(this.auto)
        .fit(this.fit)
    },
  },
}
</script>
