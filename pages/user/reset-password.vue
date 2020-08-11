<template>
  <div>
    <section class="section hero is-small">
      <div class="hero-body">
        <h1 class="title is-1">
          Reset password
        </h1>
      </div>
    </section>

    <div class="columns">
      <reset-password-form
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
</template>

<script>
import { form } from '~/mixins'

export default {
  name: 'ResetPasswordPage',
  auth: 'guest',
  mixins: [form],
  methods: {
    action(params) {
      return this.$axios
        .post(`${process.env.backendURL}/auth/reset-password`, {
          ...params,
          code: this.$route.query.code,
        })
        .then(({ data: { jwt, user } }) => {
          // console.log(jwt, user)
          this.$auth.setUser(user)
        })
    },
  },
}
</script>
