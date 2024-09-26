import SlMutationObserver from '@shoelace-style/shoelace/dist/components/mutation-observer/mutation-observer.component.js';

class SurfMutationObserver extends SlMutationObserver {
  constructor() {
    super();
  }
}

customElements.define("sl-mutation-observer", SurfMutationObserver);