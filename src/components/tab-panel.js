import SlTabPanel from '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.component.js';

class SurfTabPanel extends SlTabPanel {
  constructor() {
    super();
  }
}

customElements.define("sl-tab-panel", SurfTabPanel);