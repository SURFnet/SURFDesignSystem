import SlTreeItem from '@shoelace-style/shoelace/dist/components/tree-item/tree-item.component.js';

class SurfTreeItem extends SlTreeItem {
  constructor() {
    super();
  }
}

customElements.define("sl-tree-item", SurfTreeItem);