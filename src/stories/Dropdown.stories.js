export default {
  component: 'surf-dropdown',
  render() {
    return `
      <surf-dropdown>
        <surf-button slot="trigger" caret>Dropdown</surf-button>
        <surf-menu>
          <surf-menu-item>Dropdown Item 1</surf-menu-item>
          <surf-menu-item>Dropdown Item 2</surf-menu-item>
          <surf-menu-item>Dropdown Item 3</surf-menu-item>
          <surf-divider></surf-divider>
          <surf-menu-item type="checkbox" checked>Checkbox</surf-menu-item>
          <surf-menu-item disabled>Disabled</surf-menu-item>
          <surf-divider></surf-divider>
          <surf-menu-item>
            Prefix
            <surf-icon slot="prefix" name="gift"></surf-icon>
          </surf-menu-item>
          <surf-menu-item>
            Suffix Icon
            <surf-icon slot="suffix" name="heart"></surf-icon>
          </surf-menu-item>
        </surf-menu>
      </surf-dropdown>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};