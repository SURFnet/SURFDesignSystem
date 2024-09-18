export default {
  title: 'Form/Radio Group',
  component: 'surf-radio-group',
  render() {
    return `
      <surf-radio-group label="Select an option" name="a" value="1">
        <surf-radio value="1">Option 1</surf-radio>
        <surf-radio value="2">Option 2</surf-radio>
        <surf-radio value="3">Option 3</surf-radio>
      </surf-radio-group>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};