<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <sanity-image :image="image" :alt="title" :width="640" :height="480" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <sanity-image
              :image="vendor.logo"
              :alt="vendor.title"
              :width="96"
              :height="96"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
          <p class="subtitle is-6">{{ price }} €</p>
        </div>
      </div>

      <!-- <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div> -->
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
    vendor: { type: Object, required: true },
  },
}
</script>
