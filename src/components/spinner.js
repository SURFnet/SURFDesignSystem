import SlSpinner from '@shoelace-style/shoelace/dist/components/spinner/spinner.js';

class SurfSpinner extends SlSpinner {
  constructor() {
    super();
  }
}

customElements.define("surf-spinner", SurfSpinner);