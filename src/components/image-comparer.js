import SlImageComparer from '@shoelace-style/shoelace/dist/components/image-comparer/image-comparer.component.js';

class SurfImageComparer extends SlImageComparer {
  constructor() {
    super();
  }
}

customElements.define("sl-image-comparer", SurfImageComparer);