<template>
  <picture>
    <source
      v-for="({ media, width: w }, index) in sizes"
      :key="index"
      :media="`(max-width: ${media}px)`"
      :data-srcset="getSrcSet(w)"
    />

    <img
      class="lazyload"
      :alt="alt"
      :data-src="src"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2P49evXfwAJzgPuMtDh2wAAAABJRU5ErkJggg=="
    />
  </picture>
</template>

<script>
export default {
  name: "SanityImage",
  props: {
    sizes: {
      type: Array,
      default: () => [{ media: 1408, width: 380 }],
    },
    image: {
      type: Object,
      required: true,
    },
    alt: {
      type: String,
      default: "Missing alternative text",
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
      default: "format",
    },
    fit: {
      type: String,
      default: "max",
    },
    bg: {
      type: String,
      default: "FFFFFF",
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
  methods: {
    getSrcSet(w, dpr = 1) {
      return this.$imgBuilder
        .image(this.image)
        .ignoreImageParams()
        .size(w * dpr, this.getHeightFromWidth(w, this.getAspectRatio()) * dpr)
        .auto(this.auto)
        .bg(this.bg)
        .fit(this.fit)
    },
    getHeightFromWidth(w, h) {
      return Math.floor(w * h)
    },
    getAspectRatio() {
      return this.height / this.width
    },
  },
}
</script>
