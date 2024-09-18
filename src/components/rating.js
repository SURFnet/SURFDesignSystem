import SlRating from '@shoelace-style/shoelace/dist/components/rating/rating.js';

class SurfRating extends SlRating {
  constructor() {
    super();
  }
}

customElements.define("surf-rating", SurfRating);