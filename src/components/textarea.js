import SlTextarea from '@shoelace-style/shoelace/dist/components/textarea/textarea.component.js';

class SurfTextarea extends SlTextarea {
  constructor() {
    super();
  }
}

customElements.define("sl-textarea", SurfTextarea);