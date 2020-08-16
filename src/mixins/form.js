export default {
  data: () => ({
    submitted: false,
    errors: null,
    success: false,
  }),

  methods: {
    action() {},

    submit(params) {
      this.submitted = true
      this.errors = null

      this.action(params)
        .then((response) => {
          this.success = true
        })
        .catch((error) => {
          // console.log("An error occurred:", error)
          this.errors = error.response.data.message[0].messages
        })
        .finally(() => {
          this.submitted = false
        })
    },
  },
}
