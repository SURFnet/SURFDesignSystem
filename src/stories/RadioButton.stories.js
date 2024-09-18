export default {
  component: 'surf-radio-button',
  render() {
    return `
      <surf-radio-group label="Select an option" name="a" value="1">
        <surf-radio-button value="1">Option 1</surf-radio-button>
        <surf-radio-button value="2">Option 2</surf-radio-button>
        <surf-radio-button value="3">Option 3</surf-radio-button>
      </surf-radio-group>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};