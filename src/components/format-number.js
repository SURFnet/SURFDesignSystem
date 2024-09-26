import SlFormatNumber from '@shoelace-style/shoelace/dist/components/format-number/format-number.component.js';

class SurfFormatNumber extends SlFormatNumber {
  constructor() {
    super();
  }
}

customElements.define("sl-format-number", SurfFormatNumber);