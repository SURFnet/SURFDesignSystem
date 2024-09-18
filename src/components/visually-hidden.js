import SlVisuallyHidden from '@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.js';

class SurfVisuallyHidden extends SlVisuallyHidden {
  constructor() {
    super();
  }
}

customElements.define("surf-visually-hidden", SurfVisuallyHidden);