export default {
  component: 'sl-dropdown',
  render() {
    return `
      <sl-dropdown>
        <sl-button slot="trigger" caret>Dropdown</sl-button>
        <sl-menu>
          <sl-menu-item>Dropdown Item 1</sl-menu-item>
          <sl-menu-item>Dropdown Item 2</sl-menu-item>
          <sl-menu-item>Dropdown Item 3</sl-menu-item>
          <sl-divider></sl-divider>
          <sl-menu-item type="checkbox" checked>Checkbox</sl-menu-item>
          <sl-menu-item disabled>Disabled</sl-menu-item>
          <sl-divider></sl-divider>
          <sl-menu-item>
            Prefix
            <sl-icon slot="prefix" name="gift"></sl-icon>
          </sl-menu-item>
          <sl-menu-item>
            Suffix Icon
            <sl-icon slot="suffix" name="heart"></sl-icon>
          </sl-menu-item>
        </sl-menu>
      </sl-dropdown>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};