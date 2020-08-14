<template>
  <img :src="src" :alt="altFromImage || alt" />
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
    bg: {
      type: String,
      default: 'FFFFFF',
    },
  },
  computed: {
    altFromImage() {
      return this.image.alt
    },
    src() {
      return this.$imgBuilder
        .image(this.image)
        .ignoreImageParams()
        .size(this.width, this.height)
        .auto(this.auto)
        .bg(this.bg)
        .fit(this.fit)
    },
  },
}
</script>
