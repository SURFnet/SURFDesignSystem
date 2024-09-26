import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip.component.js';

class SurfTooltip extends SlTooltip {
  constructor() {
    super();
  }
}

customElements.define("sl-tooltip", SurfTooltip);