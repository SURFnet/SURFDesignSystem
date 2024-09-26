import SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.component.js';

class SurfCheckbox extends SlCheckbox {
  constructor() {
    super();
  }
}

customElements.define("sl-checkbox", SurfCheckbox);