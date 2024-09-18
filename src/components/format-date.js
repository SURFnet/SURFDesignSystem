import SlFormatDate from '@shoelace-style/shoelace/dist/components/format-date/format-date.js';

class SurfFormatDate extends SlFormatDate {
  constructor() {
    super();
  }
}

customElements.define("surf-format-date", SurfFormatDate);