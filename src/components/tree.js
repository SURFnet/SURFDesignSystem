import SlTree from '@shoelace-style/shoelace/dist/components/tree/tree.component.js';

class SurfTree extends SlTree {
  constructor() {
    super();
  }
}

customElements.define("sl-tree", SurfTree);