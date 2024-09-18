export default {
  component: 'surf-tab-group',
  render() {
    return `
      <surf-tab-group>
        <surf-tab slot="nav" panel="general">General</surf-tab>
        <surf-tab slot="nav" panel="custom">Custom</surf-tab>
        <surf-tab slot="nav" panel="advanced">Advanced</surf-tab>
        <surf-tab slot="nav" panel="disabled" disabled>Disabled</surf-tab>

        <surf-tab-panel name="general">This is the general tab panel.</surf-tab-panel>
        <surf-tab-panel name="custom">This is the custom tab panel.</surf-tab-panel>
        <surf-tab-panel name="advanced">This is the advanced tab panel.</surf-tab-panel>
        <surf-tab-panel name="disabled">This is a disabled tab panel.</surf-tab-panel>
      </surf-tab-group>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};