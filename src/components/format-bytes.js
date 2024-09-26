import SlFormatBytes from '@shoelace-style/shoelace/dist/components/format-bytes/format-bytes.component.js';

class SurfFormatBytes extends SlFormatBytes {
  constructor() {
    super();
  }
}

customElements.define("sl-format-bytes", SurfFormatBytes);