import SlResizeObserver from '@shoelace-style/shoelace/dist/components/resize-observer/resize-observer.component.js';

class SurfResizeObserver extends SlResizeObserver {
  constructor() {
    super();
  }
}

customElements.define("sl-resize-observer", SurfResizeObserver);