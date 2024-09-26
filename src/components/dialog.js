import SlDialog from '@shoelace-style/shoelace/dist/components/dialog/dialog.component.js';

class SurfDialog extends SlDialog {
  constructor() {
    super();
  }
}

customElements.define("sl-dialog", SurfDialog);