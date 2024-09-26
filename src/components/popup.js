import SlPopup from '@shoelace-style/shoelace/dist/components/popup/popup.component.js';

class SurfPopup extends SlPopup {
  constructor() {
    super();
  }
}

customElements.define("sl-popup", SurfPopup);