<template>
  <section class="section hero is-small">
    <div v-if="success">
      <div class="hero-body">
        <p class="subtitle is-3">
          {{ $t("auth.passwordResetEmailSent") }}
        </p>
        <nuxt-link
          class="button is-primary"
          :to="localeRoute({ name: 'user-login' })"
        >
          {{ $t("auth.login") }}
        </nuxt-link>
      </div>
    </div>

    <div v-else>
      <div class="hero-body">
        <h1 class="title is-2">
          {{ $t("auth.register") }}
        </h1>
      </div>

      <div class="columns">
        <register-form
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
    </div>
  </section>
</template>

<script>
import { form } from "~/mixins"

export default {
  name: "RegisterPage",
  auth: "guest",
  mixins: [form],
  methods: {
    action(params) {
      return this.$axios.post(
        `${process.env.backendURL}/auth/local/register`,
        params
      )
    },
  },
  head() {
    return {
      title: this.$t("auth.register"),
    }
  },
}
</script>
