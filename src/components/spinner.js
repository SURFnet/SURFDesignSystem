import SlSpinner from '@shoelace-style/shoelace/dist/components/spinner/spinner.component.js';

class SurfSpinner extends SlSpinner {
  constructor() {
    super();
  }
}

customElements.define("sl-spinner", SurfSpinner);