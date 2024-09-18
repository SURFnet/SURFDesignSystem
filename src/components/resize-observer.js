import SlResizeObserver from '@shoelace-style/shoelace/dist/components/resize-observer/resize-observer.js';

class SurfResizeObserver extends SlResizeObserver {
  constructor() {
    super();
  }
}

customElements.define("surf-resize-observer", SurfResizeObserver);