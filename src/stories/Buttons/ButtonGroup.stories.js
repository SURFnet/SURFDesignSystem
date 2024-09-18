export default {
  title: 'Buttons/Button Group',
  component: 'surf-button-group',
  render() {
    return `
      <surf-button-group label="Alignment">
        <surf-button>Left</surf-button>
        <surf-button>Center</surf-button>
        <surf-button>Right</surf-button>
      </surf-button-group>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};