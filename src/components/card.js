import SlCard from '@shoelace-style/shoelace/dist/components/card/card.component.js';

class SurfCard extends SlCard {
  constructor() {
    super();
  }
}

customElements.define("sl-card", SurfCard);