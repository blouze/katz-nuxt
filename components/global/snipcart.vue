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
      { rel: 'preconnect', href: 'https://app.snipcart.com' },
      { rel: 'preconnect', href: 'https://cdn.snipcart.com' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.css',
      },
    ],
    script: [
      {
        src: 'https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.js',
      },
    ],
  }),
}
</script>
