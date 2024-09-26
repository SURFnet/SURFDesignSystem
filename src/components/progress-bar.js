import SlProgressBar from '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.component.js';

class SurfProgressBar extends SlProgressBar {
  constructor() {
    super();
  }
}

customElements.define("sl-progress-bar", SurfProgressBar);