export default {
  component: 'surf-select',
  render() {
    return `
      <surf-select>
        <surf-option value="option-1">Option 1</surf-option>
        <surf-option value="option-2">Option 2</surf-option>
        <surf-option value="option-3">Option 3</surf-option>
        <surf-option value="option-4">Option 4</surf-option>
        <surf-option value="option-5">Option 5</surf-option>
        <surf-option value="option-6">Option 6</surf-option>
      </surf-select>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};