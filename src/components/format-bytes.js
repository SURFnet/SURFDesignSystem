import SlFormatBytes from '@shoelace-style/shoelace/dist/components/format-bytes/format-bytes.js';

class SurfFormatBytes extends SlFormatBytes {
  constructor() {
    super();
  }
}

customElements.define("surf-format-bytes", SurfFormatBytes);