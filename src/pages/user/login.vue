<template>
  <section class="section hero is-small">
    <div class="hero-body">
      <h1 class="title is-1">
        Connexion
      </h1>
    </div>

    <div class="columns">
      <login-form
        class="column is-two-thirds is-half-widescreen"
        :disabled="submitted"
        :loading="submitted"
        @submit="submit"
      />

      <div class="column is-half is-one-third-widescreen">
        <div v-if="errors">
          <p
            v-for="{ id, message } in errors"
            :key="id"
            class="has-text-danger"
          >
            {{ message }}
          </p>
        </div>
      </div>
    </div>

    <p>
      <nuxt-link :to="localeRoute({ name: 'user-lost-password' })"
        >Mot de passe oublié ?</nuxt-link
      >
    </p>
  </section>
</template>

<script>
import { form } from "~/mixins"

export default {
  name: "LoginPage",
  auth: "guest",
  mixins: [form],
  methods: {
    action(params) {
      return this.$auth
        .loginWith("local", { data: params })
        .then(({ data: { jwt, user } }) => {
          this.$auth.setUserToken(jwt)
          this.$auth.setUser(user)
          this.$buefy.snackbar.open("Vous êtes connecté.")
        })
    },
  },
}
</script>
