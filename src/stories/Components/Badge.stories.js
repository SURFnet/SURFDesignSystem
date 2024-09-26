export default {
  component: 'sl-badge',
  render({ label, ...props }) {
    const attributes = Object
      .entries(props)
      .map(([key, value]) => value && `${ key }="${ value }"`)
      .filter(Boolean)
      .join(' ')
    
    return `<sl-badge ${ attributes }>${label}</sl-badge>`
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label is passed as a child element.',
    },
    pill: {
      description: 'Give badges rounded edges.',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      }
    },
    pulse: {
      description: 'Draw attention to the badge with a subtle animation.',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      }
    },
    variant: {
      description: 'Change the badge’s color.',
      control: 'radio',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      mapping: { primary: '' },
      table: {
        defaultValue: { summary: 'primary' },
      }
    },
  },
};

export const Text = {
  args: {
    label: 'Text',
    pill: false,
    pulse: false,
  }
};

export const Number = {
  args: {
    label: '7',
    pill: true,
    pulse: true,
    variant: 'warning'
  }
};