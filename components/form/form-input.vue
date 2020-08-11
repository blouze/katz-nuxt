<template>
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label" :for="id">
        {{ label }}&nbsp;:
        <slot name="label" />
      </label>
    </div>
    <div class="field-body">
      <div class="field">
        <div
          class="control has-icons-right"
          :class="{ 'has-icons-left': !!icon }"
        >
          <input
            :id="id"
            v-model="validation.$model"
            class="input"
            :placeholder="!!placeholder ? placeholder : label"
            :type="password ? 'password' : 'input'"
          />
          <span v-if="icon" class="icon is-left">
            <b-icon :icon="icon" size="is-small" />
          </span>
          <span
            v-if="validation.$dirty && validation.$invalid"
            class="icon is-right has-text-danger"
          >
            <b-icon icon="exclamation-triangle" size="is-small" />
          </span>
        </div>
        <p
          v-if="validation.$dirty && validation.$invalid"
          class="help is-danger"
        >
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: null,
    },
    password: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    validation: {
      type: Object,
      required: true,
    },
  },

  computed: {
    errorMessage() {
      if (!this.validation.required) {
        return 'required field'
      } else if (!this.validation.isEmail) {
        return 'invalid email'
      }
      return ''
    },
  },
}
</script>
