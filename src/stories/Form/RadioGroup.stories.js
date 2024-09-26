export default {
  title: 'Form/Radio Group',
  component: 'sl-radio-group',
  render() {
    return `
      <sl-radio-group label="Select an option" name="a" value="1">
        <sl-radio value="1">Option 1</sl-radio>
        <sl-radio value="2">Option 2</sl-radio>
        <sl-radio value="3">Option 3</sl-radio>
      </sl-radio-group>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};