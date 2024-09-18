import SlSkeleton from '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';

class SurfSkeleton extends SlSkeleton {
  constructor() {
    super();
  }
}

customElements.define("surf-skeleton", SurfSkeleton);