import SlSplitPanel from '@shoelace-style/shoelace/dist/components/split-panel/split-panel.component.js';

class SurfSplitPanel extends SlSplitPanel {
  constructor() {
    super();
  }
}

customElements.define("sl-split-panel", SurfSplitPanel);