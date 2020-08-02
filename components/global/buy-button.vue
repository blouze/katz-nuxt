<template>
  <button
    class="button is-primary snipcart-add-item"
    :data-item-id="_id"
    :data-item-name="title"
    :data-item-price="price"
    :data-item-description="description"
    :data-item-image="$imgBuilder.image(image).width(92).url()"
    :data-item-url="url"
  >
    <span class="icon">
      <b-icon icon="shopping-cart" size="is-small" />
    </span>
    <span>
      Buy
    </span>
  </button>
</template>

<script>
export default {
  name: 'BuyButton',
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    _id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, default: null },
    image: { type: Object, required: true, default: () => ({}) },
    url: { type: String, required: true },
  },
}
</script>
