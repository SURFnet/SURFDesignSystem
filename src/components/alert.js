import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';

import './alert.css'

class SurfAlert extends SlAlert {
  constructor() {
    super();
  }
}

customElements.define("surf-alert", SurfAlert);