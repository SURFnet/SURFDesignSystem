export default {
  component: 'surf-menu',
  render() {
    return `
      <surf-menu style="max-width: 200px;">
        <surf-menu-label>Fruits</surf-menu-label>
        <surf-menu-item value="apple">Apple</surf-menu-item>
        <surf-menu-item value="banana">Banana</surf-menu-item>
        <surf-menu-item value="orange">Orange</surf-menu-item>
        <surf-divider></surf-divider>
        <surf-menu-label>Vegetables</surf-menu-label>
        <surf-menu-item value="broccoli">Broccoli</surf-menu-item>
        <surf-menu-item value="carrot">Carrot</surf-menu-item>
        <surf-menu-item value="zucchini">Zucchini</surf-menu-item>
      </surf-menu>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};