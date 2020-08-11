<template>
  <form @submit="checkForm">
    <fieldset :disabled="disabled">
      <form-input
        label="password"
        icon="lock"
        :validation="$v.password"
        password
      />

      <form-input
        label="confirmation"
        icon="lock"
        :validation="$v.passwordConfirmation"
        password
      />

      <form-submit :disabled="$v.$invalid" :loading="loading" />
    </fieldset>
  </form>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'ResetPasswordForm',

  props: {
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },

  data: () => ({
    password: '',
    passwordConfirmation: '',
  }),

  validations: {
    password: { required, minLength: minLength(6) },
    passwordConfirmation: { required, sameAsPassword: sameAs('password') },
  },

  methods: {
    checkForm(e) {
      if (!this.$v.error) {
        this.$emit('submit', {
          password: this.$v.password.$model,
          passwordConfirmation: this.$v.passwordConfirmation.$model,
        })
      }
      e.preventDefault()
    },
  },
}
</script>
