import SlDetails from '@shoelace-style/shoelace/dist/components/details/details.component.js';

class SurfDetails extends SlDetails {
  constructor() {
    super();
  }
}

customElements.define("sl-details", SurfDetails);