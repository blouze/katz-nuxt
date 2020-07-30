<template>
  <div id="snipcart" :data-api-key="apiKey" />
</template>

<script>
export default {
  name: 'SnipCart',

  computed: {
    apiKey() {
      return process.env.snipcartApiKey
    },
  },

  head: () => ({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
      },
    ],
    script: [
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
      },
      {
        src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
        // id: 'snipcart',
        // 'data-autopop': 'false',
        // 'data-api-key': process.env.snipcartApiKey,
      },
    ],
  }),
}
</script>

<style lang="stylus">
.snip-layout
  font-family: inherit
</style>
