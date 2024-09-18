export default {
  component: 'surf-tooltip',
  render() {
    return `
      <surf-tooltip content="This is a tooltip">
        <surf-button>Hover Me</surf-button>
      </surf-tooltip>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};