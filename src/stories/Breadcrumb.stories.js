export default {
  component: 'surf-breadcrumb',
  render() {
    return `
      <surf-breadcrumb>
        <surf-breadcrumb-item>
          <surf-icon slot="prefix" name="house"></surf-icon>
          Home
        </surf-breadcrumb-item>
        <surf-breadcrumb-item>Clothing</surf-breadcrumb-item>
        <surf-breadcrumb-item>Shirts</surf-breadcrumb-item>
      </surf-breadcrumb>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};