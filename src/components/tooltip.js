import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';

class SurfTooltip extends SlTooltip {
  constructor() {
    super();
  }
}

customElements.define("surf-tooltip", SurfTooltip);