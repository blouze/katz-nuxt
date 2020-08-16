<template>
  <button
    class="button is-primary is-medium is-fullwidth snipcart-add-item"
    :data-item-id="_id"
    :data-item-name="title"
    :data-item-price="price"
    :data-item-description="blurb && blurb.en"
    :data-item-image="$imgBuilder.image(image).width(128).url()"
    :data-item-url="url"
  >
    <span class="icon">
      <b-icon icon="shopping-cart" size="is-small" />
    </span>
    <span>
      {{ $t("products.buy") }}
    </span>
  </button>
</template>

<script>
export default {
  name: "BuyButton",
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    _id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    blurb: { type: Object, required: true, default: () => ({}) },
    image: { type: Object, required: true, default: () => ({}) },
    url: { type: String, required: true },
  },
}
</script>
