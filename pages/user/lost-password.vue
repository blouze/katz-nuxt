<template>
  <section class="section hero is-small">
    <div v-if="success">
      <div class="hero-body">
        <p class="subtitle is-3">
          An email has been sent to you, click on the link to reset your
          password.
        </p>
        <nuxt-link class="button is-primary" :to="{ name: 'user-login' }">
          Connexion
        </nuxt-link>
      </div>
    </div>

    <div v-else>
      <div class="hero-body">
        <h1 class="title is-1">
          Lost password
        </h1>

        <div class="columns">
          <lost-password-form
            class="column is-two-thirds"
            :disabled="submitted"
            :loading="submitted"
            @submit="submit"
          />

          <div v-if="errors" class="column is-third">
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
    </div>
  </section>
</template>

<script>
import { form } from '~/mixins'

export default {
  name: 'LostPasswordPage',
  auth: 'guest',
  mixins: [form],
  methods: {
    action(params) {
      return this.$axios.post(
        `${process.env.backendURL}/auth/forgot-password`,
        params
      )
    },
  },
}
</script>
