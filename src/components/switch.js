import SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.component.js';

class SurfSwitch extends SlSwitch {
  constructor() {
    super();
  }
}

customElements.define("sl-switch", SurfSwitch);