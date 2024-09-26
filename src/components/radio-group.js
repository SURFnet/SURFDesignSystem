import SlRadioGroup from '@shoelace-style/shoelace/dist/components/radio-group/radio-group.component.js';

class SurfRadioGroup extends SlRadioGroup {
  constructor() {
    super();
  }
}

customElements.define("sl-radio-group", SurfRadioGroup);