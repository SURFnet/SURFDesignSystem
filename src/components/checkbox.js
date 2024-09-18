import SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';

class SurfCheckbox extends SlCheckbox {
  constructor() {
    super();
  }
}

customElements.define("surf-checkbox", SurfCheckbox);