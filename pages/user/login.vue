<template>
  <div>
    <section class="section hero is-small">
      <div class="hero-body">
        <h1 class="title is-1">
          Connexion
        </h1>
      </div>
    </section>

    <section>
      <login-form :disabled="submitted" :loading="submitted" @submit="submit" />
    </section>

    <section v-if="errors">
      <p v-for="{ id, message } in errors" :key="id" class="has-text-danger">
        {{ message }}
      </p>
    </section>

    <section>
      <nuxt-link :to="{ name: 'user-lost-password' }"
        >Mot de passe oublié ?</nuxt-link
      >
    </section>
  </div>
</template>

<script>
import { form } from '~/mixins'

export default {
  auth: 'guest',
  mixins: [form],
  methods: {
    action(params) {
      return this.$auth
        .loginWith('local', { data: params })
        .then(({ data: { jwt, user } }) => {
          // console.log(jwt, user)
          this.$auth.setUser(user)
        })
    },
  },
}
</script>
