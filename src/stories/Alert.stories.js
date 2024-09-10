export default {
  component: 'surf-alert',
  render({ label, ...props }) {
    const attributes = Object
      .entries(props)
      .map(([key, value]) => value && `${ key }="${ value }"`)
      .filter(Boolean)
      .join(' ')
    
    return `<surf-alert ${ attributes }>${label}</surf-alert>`
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Alert text is passed as a child element.',
    },
    open: {
      description: 'Show or hide the alert.',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      }
    },
    variant: {
      description: 'The alert variant changes the color of the alert. Default or primary is the informative color.',
      control: 'radio',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      mapping: { primary: '' },
      table: {
        defaultValue: { summary: 'primary' },
      }
    },
    closable: {
      description: 'Show a close button that will hide the alert.',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      }
    },
    duration: {
      description: 'Automatically hide an alert after a period of time (in milliseconds).',
      type: { name: 'number' },
      control: 'number',
    },
  },
};

export const Main = {
  args: {
    label: 'An alert',
    open: true,
    closable: false,
  }
};