import SlImageComparer from '@shoelace-style/shoelace/dist/components/image-comparer/image-comparer.js';

class SurfImageComparer extends SlImageComparer {
  constructor() {
    super();
  }
}

customElements.define("surf-image-comparer", SurfImageComparer);