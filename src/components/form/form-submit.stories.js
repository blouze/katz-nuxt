import { withKnobs, text } from '@storybook/addon-knobs'
import { FormSubmit } from '.'

export default {
  title: 'Forms/Submit',
  decorators: [withKnobs],
}
export const Basic = () => ({
  components: { FormSubmit },
  template: `<FormSubmit :label="label" />`,
  props: {
    label: { default: text('label', 'label') },
  },
})
