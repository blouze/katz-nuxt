<template>
  <div class="columns">
    <div class="column">
      <pre>{{ userData }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPage',

  computed: {
    userData() {
      return this.$auth.user
    },
  },
}
</script>
