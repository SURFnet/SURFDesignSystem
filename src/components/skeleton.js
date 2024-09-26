import SlSkeleton from '@shoelace-style/shoelace/dist/components/skeleton/skeleton.component.js';

class SurfSkeleton extends SlSkeleton {
  constructor() {
    super();
  }
}

customElements.define("sl-skeleton", SurfSkeleton);