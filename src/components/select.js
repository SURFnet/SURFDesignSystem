import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';

class SurfSelect extends SlSelect {
  constructor() {
    super();
  }
}

customElements.define("surf-select", SurfSelect);