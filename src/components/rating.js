import SlRating from '@shoelace-style/shoelace/dist/components/rating/rating.component.js';

class SurfRating extends SlRating {
  constructor() {
    super();
  }
}

customElements.define("sl-rating", SurfRating);