import SlInput from '@shoelace-style/shoelace/dist/components/input/input.component.js';

class SurfInput extends SlInput {
  constructor() {
    super();
  }
}

customElements.define("sl-input", SurfInput);