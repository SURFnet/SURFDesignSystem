export default {
  component: 'sl-tree',
  render() {
    return `
      <sl-tree>
        <sl-tree-item>
          Deciduous
          <sl-tree-item>Birch</sl-tree-item>
          <sl-tree-item>
            Maple
            <sl-tree-item>Field maple</sl-tree-item>
            <sl-tree-item>Red maple</sl-tree-item>
            <sl-tree-item>Sugar maple</sl-tree-item>
          </sl-tree-item>
          <sl-tree-item>Oak</sl-tree-item>
        </sl-tree-item>

        <sl-tree-item>
          Coniferous
          <sl-tree-item>Cedar</sl-tree-item>
          <sl-tree-item>Pine</sl-tree-item>
          <sl-tree-item>Spruce</sl-tree-item>
        </sl-tree-item>

        <sl-tree-item>
          Non-trees
          <sl-tree-item>Bamboo</sl-tree-item>
          <sl-tree-item>Cactus</sl-tree-item>
          <sl-tree-item>Fern</sl-tree-item>
        </sl-tree-item>
      </sl-tree>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};