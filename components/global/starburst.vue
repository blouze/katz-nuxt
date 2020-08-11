<template>
  <div class="price-container">
    <div class="price">
      <span class="label">Buy</span>
      <span class="number">$15.00</span>
      <span class="label">Now</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Starburst',
}
</script>

<style lang="scss" scoped>
.price-container,
.price-container:before,
.price-container:after,
.price-container .price,
.price-container .price:before,
.price-container .price:after {
  height: 8.5em;
  width: 8.5em;
  background-color: $primary;
}

.price-container:before,
.price-container:after,
.price-container .price:before,
.price-container .price:after {
  content: '';
  position: absolute;
}

.price-container {
  margin: 100px auto; /* Centering for demo */
  position: relative; /* Context */
  top: 2.5em;
  left: 2.5em;
  transform: rotate(-45deg);
}

.price-container:before {
  top: 0;
  left: 0;
  transform: rotate(-30deg);
}

.price-container:after {
  top: 0;
  left: 0;
  transform: rotate(-15deg);
}

.price-container .price {
  padding: 0.5em 0em;
  height: 7.5em; /* height minus padding */
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(45deg);
  z-index: 1; /* important so the text shows up */
}

.price-container .price:before {
  top: 0;
  left: 0;
  transform: rotate(60deg);
}

.price-container .price:after {
  top: 0;
  left: 0;
  transform: rotate(75deg);
}

.price-container .price span {
  position: relative;
  z-index: 100;
  display: block;
  text-align: center;
  color: #fe3d5c;
  font: 1.8em/1.4em Sans-Serif;
  text-transform: uppercase;
}

.price-container .price span.number {
  font-weight: bold;
  font-size: 2.5em;
  line-height: 0.9em;
  color: #fff;
}
</style>
