import SlTextarea from '@shoelace-style/shoelace/dist/components/textarea/textarea.js';

class SurfTextarea extends SlTextarea {
  constructor() {
    super();
  }
}

customElements.define("surf-textarea", SurfTextarea);