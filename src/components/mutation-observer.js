import SlMutationObserver from '@shoelace-style/shoelace/dist/components/mutation-observer/mutation-observer.js';

class SurfMutationObserver extends SlMutationObserver {
  constructor() {
    super();
  }
}

customElements.define("surf-mutation-observer", SurfMutationObserver);