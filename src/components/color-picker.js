import SlColorPicker from '@shoelace-style/shoelace/dist/components/color-picker/color-picker.component.js';

class SurfColorPicker extends SlColorPicker {
  constructor() {
    super();
  }
}

customElements.define("sl-color-picker", SurfColorPicker);