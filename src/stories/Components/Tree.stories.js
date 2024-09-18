export default {
  component: 'surf-tree',
  render() {
    return `
      <surf-tree>
        <surf-tree-item>
          Deciduous
          <surf-tree-item>Birch</surf-tree-item>
          <surf-tree-item>
            Maple
            <surf-tree-item>Field maple</surf-tree-item>
            <surf-tree-item>Red maple</surf-tree-item>
            <surf-tree-item>Sugar maple</surf-tree-item>
          </surf-tree-item>
          <surf-tree-item>Oak</surf-tree-item>
        </surf-tree-item>

        <surf-tree-item>
          Coniferous
          <surf-tree-item>Cedar</surf-tree-item>
          <surf-tree-item>Pine</surf-tree-item>
          <surf-tree-item>Spruce</surf-tree-item>
        </surf-tree-item>

        <surf-tree-item>
          Non-trees
          <surf-tree-item>Bamboo</surf-tree-item>
          <surf-tree-item>Cactus</surf-tree-item>
          <surf-tree-item>Fern</surf-tree-item>
        </surf-tree-item>
      </surf-tree>
    `
  },
  argTypes: {},
};

export const Main = {
  args: {}
};