import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.component.js';

import './alert.css'

class SurfAlert extends SlAlert {
  constructor() {
    super();
  }
}

customElements.define("sl-alert", SurfAlert);