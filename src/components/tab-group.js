import SlTabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group.component.js';

class SurfTabGroup extends SlTabGroup {
  constructor() {
    super();
  }
}

customElements.define("sl-tab-group", SurfTabGroup);