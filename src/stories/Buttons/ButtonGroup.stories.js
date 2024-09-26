export default {
  title: 'Buttons/Button Group',
  component: 'sl-button-group',
  render() {
    return `
      <sl-button-group label="Alignment">
        <sl-button>Left</sl-button>
        <sl-button>Center</sl-button>
        <sl-button>Right</sl-button>
      </sl-button-group>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};