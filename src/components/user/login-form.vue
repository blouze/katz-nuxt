<template>
  <form @submit="checkForm">
    <fieldset :disabled="disabled">
      <form-input
        id="identifier"
        label="identifier"
        placeholder="identifier"
        icon="user"
        :validation="$v.identifier"
      />

      <form-input
        id="password"
        label="password"
        icon="lock"
        :validation="$v.password"
        password
      />

      <form-submit :disabled="$v.$invalid" :loading="loading" />
    </fieldset>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators"

export default {
  props: {
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },

  data: () => ({
    identifier: process.env.NODE_ENV !== "production" ? "blouze@gmail.com" : "",
    password: process.env.NODE_ENV !== "production" ? "bl0uz3" : "",
  }),

  validations: {
    identifier: { required },
    password: { required },
  },

  methods: {
    checkForm(e) {
      e.preventDefault()
      if (!this.$v.error) {
        this.$emit("submit", {
          identifier: this.$v.identifier.$model,
          password: this.$v.password.$model,
        })
      }
    },
  },
}
</script>
