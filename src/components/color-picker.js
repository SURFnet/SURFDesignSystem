import SlColorPicker from '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js';

class SurfColorPicker extends SlColorPicker {
  constructor() {
    super();
  }
}

customElements.define("surf-color-picker", SurfColorPicker);