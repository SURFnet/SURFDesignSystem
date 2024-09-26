export default {
  component: 'sl-breadcrumb',
  render() {
    return `
      <sl-breadcrumb>
        <sl-breadcrumb-item>
          <sl-icon slot="prefix" name="house"></sl-icon>
          Home
        </sl-breadcrumb-item>
        <sl-breadcrumb-item>Clothing</sl-breadcrumb-item>
        <sl-breadcrumb-item>Shirts</sl-breadcrumb-item>
      </sl-breadcrumb>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};