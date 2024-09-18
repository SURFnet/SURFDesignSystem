import SlProgressBar from '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js';

class SurfProgressBar extends SlProgressBar {
  constructor() {
    super();
  }
}

customElements.define("surf-progress-bar", SurfProgressBar);