import SlRadioButton from '@shoelace-style/shoelace/dist/components/radio-button/radio-button.component.js';

class SurfRadioButton extends SlRadioButton {
  constructor() {
    super();
  }
}

customElements.define("sl-radio-button", SurfRadioButton);