export default {
  component: 'surf-button',
  render({ label, ...props }) {
    const attributes = Object
      .entries(props)
      .map(([key, value]) => value && `${ key }="${ value }"`)
      .filter(Boolean)
      .join(' ')
    
    return `
    <surf-button ${ attributes }>
      ${label} 
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
  },
};

export const Main = {
  args: {
    label: 'Button',
    loading: false,
    disabled: false,
  }
};