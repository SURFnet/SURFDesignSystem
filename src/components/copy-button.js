import SlCopyButton from '@shoelace-style/shoelace/dist/components/copy-button/copy-button.component.js';

class SurfCopyButton extends SlCopyButton {
  constructor() {
    super();
  }
}

customElements.define("sl-copy-button", SurfCopyButton);