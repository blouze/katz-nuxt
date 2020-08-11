<template>
  <div class="field is-grouped is-grouped-right">
    <div class="field-label is-normal" />
    <div class="field-body">
      <button
        class="button is-link is-primary is-fullwidth"
        :disabled="disabled"
        :class="{ 'is-loading': loading }"
      >
        {{ label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default() {
        return this.$t('form.send')
      },
    },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },
}
</script>
