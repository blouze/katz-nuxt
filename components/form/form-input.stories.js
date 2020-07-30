import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { FormInput } from '.'

export default {
  title: 'Forms/Input',
  decorators: [withKnobs],
}

const validation = {
  $model: undefined,
  $dirty: undefined,
  $invalid: undefined,
  required: undefined,
  isEmail: undefined,
}

const icon = {
  none: null,
  user: ['fas', 'user'],
  email: ['fas', 'envelope'],
  password: ['fas', 'lock'],
}
const defaultIcon = icon.none

export const Basic = () => ({
  components: { FormInput },
  template: `
    <FormInput
      :label="label"
      :placeholder="placeholder"
      :password="password"
      :icon="icon"
      :validation="validation"
    />
  `,
  props: {
    label: { default: text('label', 'label') },
    placeholder: { default: text('placeholder', 'placeholder...') },
    password: { default: boolean('password', false) },
    icon: { default: select('icon', icon, defaultIcon) },
    validation: { default: { ...validation } },
  },
})
