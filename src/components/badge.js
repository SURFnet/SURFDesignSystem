import SlBadge from '@shoelace-style/shoelace/dist/components/badge/badge.component.js';

class SurfBadge extends SlBadge {
  constructor() {
    super();
  }
}

customElements.define("sl-badge", SurfBadge);