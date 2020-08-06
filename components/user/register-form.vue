<template>
  <form @submit="checkForm">
    <fieldset :disabled="disabled">
      <form-input
        id="username"
        label="username"
        icon="user"
        :validation="$v.username"
      />

      <form-input
        id="email"
        label="email"
        placeholder="e-mail"
        icon="envelope"
        :validation="$v.email"
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
import { required, email as isEmail } from 'vuelidate/lib/validators'

export default {
  name: 'RegisterForm',

  props: {
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },

  data: () => ({
    username: process.env.NODE_ENV !== 'production' ? 'blouze' : '',
    email: process.env.NODE_ENV !== 'production' ? 'blouze@gmail.com' : '',
    password: process.env.NODE_ENV !== 'production' ? 'blouze' : '',
  }),

  validations: {
    username: { required },
    email: { required, isEmail },
    password: { required },
  },

  methods: {
    checkForm(e) {
      if (!this.$v.error) {
        this.$emit('submit', {
          username: this.$v.username.$model,
          email: this.$v.email.$model,
          password: this.$v.password.$model,
        })
      }
      e.preventDefault()
    },
  },
}
</script>
