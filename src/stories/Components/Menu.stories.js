export default {
  component: 'sl-menu',
  render() {
    return `
      <sl-menu style="max-width: 200px;">
        <sl-menu-label>Fruits</sl-menu-label>
        <sl-menu-item value="apple">Apple</sl-menu-item>
        <sl-menu-item value="banana">Banana</sl-menu-item>
        <sl-menu-item value="orange">Orange</sl-menu-item>
        <sl-divider></sl-divider>
        <sl-menu-label>Vegetables</sl-menu-label>
        <sl-menu-item value="broccoli">Broccoli</sl-menu-item>
        <sl-menu-item value="carrot">Carrot</sl-menu-item>
        <sl-menu-item value="zucchini">Zucchini</sl-menu-item>
      </sl-menu>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};