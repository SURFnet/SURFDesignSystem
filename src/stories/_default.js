export default {
  component: 'surf-component',
  // render({ label, ...props }) {
  //   const attributes = Object
  //     .entries(props)
  //     .map(([key, value]) => value && `${ key }="${ value }"`)
  //     .filter(Boolean)
  //     .join(' ')
    
  //   return `<surf-component ${ attributes }>${label}</surf-component>`
  // },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label is passed as a child element.',
    },
    boolean: {
      description: 'Boolean toggle.',
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      }
    },
    options: {
      description: 'Select.',
      control: 'radio',
      options: ['primary', 'success', 'neutral', 'warning', 'danger'],
      mapping: { primary: '' },
      table: {
        defaultValue: { summary: 'primary' },
      }
    },
  },
};

export const Primary = {
  args: {
    label: 'Text',
    boolean: true,
  }
};