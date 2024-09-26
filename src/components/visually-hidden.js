import SlVisuallyHidden from '@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.component.js';

class SurfVisuallyHidden extends SlVisuallyHidden {
  constructor() {
    super();
  }
}

customElements.define("sl-visually-hidden", SurfVisuallyHidden);