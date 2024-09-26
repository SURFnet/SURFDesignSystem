export default {
  component: 'sl-select',
  render() {
    return `
      <sl-select>
        <sl-option value="option-1">Option 1</sl-option>
        <sl-option value="option-2">Option 2</sl-option>
        <sl-option value="option-3">Option 3</sl-option>
        <sl-option value="option-4">Option 4</sl-option>
        <sl-option value="option-5">Option 5</sl-option>
        <sl-option value="option-6">Option 6</sl-option>
      </sl-select>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};