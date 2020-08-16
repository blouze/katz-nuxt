<template>
  <div id="snipcart" :data-api-key="apiKey" />
</template>

<script>
export default {
  computed: {
    apiKey() {
      return process.env.snipcartApiKey
    },
  },
  mounted() {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.js"
    script.onload = () => this.$store.commit("snipcart/SET", { loaded: true })
    document.body.appendChild(script)
  },
  head: () => ({
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.css",
        async: true,
        defer: true,
      },
    ],
    // script: [
    //   {
    //     src: 'https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.js',
    //     async: true,
    //     defer: true,
    //     callback() {
    //       this.$store.commit('snipcart/setLoaded', true)
    //     },
    //   },
    // ],
  }),
}
</script>
