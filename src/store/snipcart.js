export const state = () => ({
  loaded: false,
})

export const mutations = {
  SET(state, payload = {}) {
    Object.keys(payload).forEach((key) => {
      state[key] = payload[key]
    })
  },
}
