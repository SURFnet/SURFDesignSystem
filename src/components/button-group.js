import SlButtonGroup from '@shoelace-style/shoelace/dist/components/button-group/button-group.component.js';

class SurfButtonGroup extends SlButtonGroup {
  constructor() {
    super();
  }
}

customElements.define("sl-button-group", SurfButtonGroup);