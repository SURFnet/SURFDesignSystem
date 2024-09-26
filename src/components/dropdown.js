import SlDropdown from '@shoelace-style/shoelace/dist/components/dropdown/dropdown.component.js';

class SurfDropdown extends SlDropdown {
  constructor() {
    super();
  }
}

customElements.define("sl-dropdown", SurfDropdown);