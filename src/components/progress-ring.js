import SlProgressRing from '@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.component.js';

class SurfProgressRing extends SlProgressRing {
  constructor() {
    super();
  }
}

customElements.define("sl-progress-ring", SurfProgressRing);