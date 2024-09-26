import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.component.js';

class SurfSelect extends SlSelect {
  constructor() {
    super();
  }
}

customElements.define("sl-select", SurfSelect);