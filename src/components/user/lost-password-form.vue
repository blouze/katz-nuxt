<template>
  <form @submit="checkForm">
    <fieldset :disabled="disabled">
      <form-input
        id="email"
        :label="$t('auth.email')"
        :placeholder="$t('auth.email')"
        icon="user"
        :validation="$v.email"
      />

      <form-submit :disabled="$v.$invalid" :loading="loading" />
    </fieldset>
  </form>
</template>

<script>
import { required, email as isEmail } from "vuelidate/lib/validators"

export default {
  name: "LostPasswordForm",

  props: {
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },

  data: () => ({
    email: "blouze@gmail.com",
  }),

  validations: {
    email: { required, isEmail },
  },

  methods: {
    checkForm(e) {
      if (!this.$v.error) {
        this.$emit("submit", {
          email: this.$v.email.$model,
        })
      }
      e.preventDefault()
    },
  },
}
</script>
