export default {
  title: 'Form/Radio Button',
  component: 'sl-radio-button',
  render() {
    return `
      <sl-radio-group label="Select an option" name="a" value="1">
        <sl-radio-button value="1">Option 1</sl-radio-button>
        <sl-radio-button value="2">Option 2</sl-radio-button>
        <sl-radio-button value="3">Option 3</sl-radio-button>
      </sl-radio-group>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};