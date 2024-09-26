import SlRelativeTime from '@shoelace-style/shoelace/dist/components/relative-time/relative-time.component.js';

class SurfRelativeTime extends SlRelativeTime {
  constructor() {
    super();
  }
}

customElements.define("sl-relative-time", SurfRelativeTime);