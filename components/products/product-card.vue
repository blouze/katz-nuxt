<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <sanity-image :image="image" :alt="title" :width="480" :height="480" />
      </figure>
    </div>
    <div class="card-content has-background-white-bis">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ title }}</p>
          <p class="subtitle is-5">{{ price }} €</p>
        </div>
        <div class="media-right">
          <figure class="image is-48x48">
            <sanity-image
              :image="vendor.logo"
              :alt="vendor.title"
              :width="96"
              :height="96"
            />
          </figure>
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
