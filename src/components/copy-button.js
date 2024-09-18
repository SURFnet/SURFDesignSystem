import SlCopyButton from '@shoelace-style/shoelace/dist/components/copy-button/copy-button.js';

class SurfCopyButton extends SlCopyButton {
  constructor() {
    super();
  }
}

customElements.define("surf-copy-button", SurfCopyButton);