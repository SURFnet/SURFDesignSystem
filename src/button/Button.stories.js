import '.'
import '../icon/index.js'

export default {
  component: 'surf-button',
  render({ label, iconPrefix, iconSuffix, ...props }) {
    const attributes = Object
      .entries(props)
      .map(([key, value]) => value && `${ key }="${ value }"`)
      .filter(Boolean)
      .join(' ')
    
    const prefix = iconPrefix ? `<surf-icon slot="prefix" name="${ iconPrefix }"></surf-icon>` : ''
    const suffix = iconSuffix ? `<surf-icon slot="suffix" name="${ iconSuffix }"></surf-icon>` : ''
    
    return `
    <surf-button ${ attributes }>
      ${prefix} ${label} ${suffix}
    </surf-button>
    `
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The button label is passed as child element.',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'medium' },
      }
    },
    variant: {
      control: 'radio',
      options: ['primary', 'outline', 'text'],
      mapping: { primary: '' },
      table: {
        defaultValue: { summary: 'primary' },
      }
    },
    loading: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      }
    },
    disabled: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      }
    },
    iconPrefix: {
      control: 'radio',
      type: '<surf-icon slot="prefix" name="gear"></surf-icon>', 
      name: "icon prefix",
      description: 'A prefix icon is passed as a child element.',
      options: ['none', 'gear', 'bug'],
      mapping: { none: false }
    },
    iconSuffix: {
      control: 'radio',
      type: '<surf-icon slot="suffix" name="gear"></surf-icon>', 
      name: "icon suffix",
      description: 'A suffix icon is passed as a child element.',
      options: ['none', 'gear', 'bug'],
      mapping: { none: false }
    },
  },
  args: {
    label: 'Button',
    loading: false,
    disabled: false,
  }
};

export const Primary = {};