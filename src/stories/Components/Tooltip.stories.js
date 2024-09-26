export default {
  component: 'sl-tooltip',
  render() {
    return `
      <sl-tooltip content="This is a tooltip">
        <sl-button>Hover Me</sl-button>
      </sl-tooltip>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};