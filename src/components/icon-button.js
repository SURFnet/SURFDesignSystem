import SlIconButton from '@shoelace-style/shoelace/dist/components/icon-button/icon-button.component.js';

class SurfIconButton extends SlIconButton {
  constructor() {
    super();
  }
}

customElements.define("sl-icon-button", SurfIconButton);